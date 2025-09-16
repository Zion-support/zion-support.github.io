<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useCallback, useEffect, useRef } from 'react';

import { Users, MessageSquare, Sparkles, Save, Download, Loader2 } from 'lucide-react';
import { useRealTimeCollaboration } from '../hooks/useRealTimeCollaboration';
import { useAnalytics } from '../hooks/useAnalytics';
export const CollaborativeTextEditor = ({ roomId, userId, userName, initialContent = '', enableAI = true, enableCollaboration = true, enableVersioning = true, className = '', onSave, onExport }) => {
    const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    const [editorState, setEditorState] = useState({
        content: initialContent,
        selection: { start: 0, end: 0, text: '' },
        version: 0,
        changes: [],
        suggestions: [],
        conflicts: []
    });
    const [showSuggestions] = useState(true);
    const [showCollaborators, setShowCollaborators] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);
    const editorRef = useRef(null);
    const collaborationRef = useRef(null);
    // Initialize real-time collaboration
    const collaboration = useRealTimeCollaboration({
        roomId,
        userId,
        userName,
        enablePresence: true,
        enableCursors: true,
        enableSelection: true,
        enableTextSync: true,
        conflictResolution: 'client',
        messageRetention: 1000
    });
    // Handle text changes
    const handleTextChange = useCallback((event) => {
        const newContent = event.target.value;
        const selectionStart = event.target.selectionStart;
        const selectionEnd = event.target.selectionEnd;
        const selectedText = newContent.slice(selectionStart, selectionEnd);
        setEditorState(prev => {
            const change = {
                id: `change_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                type: newContent.length > prev.content.length ? 'insert' : 'delete',
                position: Math.min(selectionStart, prev.content.length),
                text: newContent.length > prev.content.length ? newContent.slice(prev.content.length) : undefined,
                length: Math.abs(newContent.length - prev.content.length),
                timestamp: new Date(),
                userId,
                version: prev.version + 1
            };
            return {
                ...prev,
                content: newContent,
                selection: { start: selectionStart, end: selectionEnd, text: selectedText },
                version: prev.version + 1,
                changes: [...prev.changes, change]
            };
        });
        // Sync with other collaborators
        if (enableCollaboration && collaboration.isConnected) {
            collaboration.syncTextChange({
                type: 'text_change',
                content: newContent,
                selection: { start: selectionStart, end: selectionEnd },
                version: editorState.version + 1
            });
        }
        // Track text change
        trackEvent('editor', 'text_changed', 'content_modified', newContent.length);
    }, [enableCollaboration, collaboration, editorState.version, trackEvent]);
    // Handle selection change
    const handleSelectionChange = useCallback((event) => {
        const target = event.target;
        const start = target.selectionStart;
        const end = target.selectionEnd;
        const text = target.value.slice(start, end);
        setEditorState(prev => ({
            ...prev,
            selection: { start, end, text }
        }));
        // Sync selection with collaborators
        if (enableCollaboration && collaboration.isConnected) {
            collaboration.updateSelection(start, end, text);
        }
    }, [enableCollaboration, collaboration]);
    // Handle cursor movement
    const handleCursorMove = useCallback((event) => {
        if (!enableCollaboration || !collaboration.isConnected)
            return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        collaboration.updateCursor(x, y, 'editor');
    }, [enableCollaboration, collaboration]);
    // Generate AI suggestions
    const generateAISuggestions = useCallback(async () => {
        if (!enableAI || !editorState.content.trim())
            return;
        setIsProcessing(true);
        try {
            // Simulate AI processing - in production, this would call an AI service
            await new Promise(resolve => setTimeout(resolve, 2000));
            const suggestions = [];
            // Grammar suggestions
            if (editorState.content.includes('its')) {
                suggestions.push({
                    id: `suggestion_${Date.now()}_1`,
                    type: 'grammar',
                    text: "it's",
                    confidence: 0.95,
                    position: editorState.content.indexOf('its'),
                    length: 3,
                    reason: "Consider using 'it's' (contraction of 'it is') instead of 'its' (possessive)",
                    alternatives: ["it's", "it is"]
                });
            }
            // Style suggestions
            if (editorState.content.includes('very')) {
                suggestions.push({
                    id: `suggestion_${Date.now()}_2`,
                    type: 'style',
                    text: "extremely",
                    confidence: 0.88,
                    position: editorState.content.indexOf('very'),
                    length: 4,
                    reason: "Consider using a more specific adjective instead of 'very'",
                    alternatives: ["extremely", "highly", "remarkably", "exceptionally"]
                });
            }
            // Completion suggestions
            if (editorState.content.endsWith('The main benefits')) {
                suggestions.push({
                    id: `suggestion_${Date.now()}_3`,
                    type: 'completion',
                    text: " include improved efficiency, cost savings, and enhanced user experience.",
                    confidence: 0.92,
                    position: editorState.content.length,
                    length: 0,
                    reason: "Complete the sentence with common benefit statements",
                    alternatives: [
                        " include improved efficiency, cost savings, and enhanced user experience.",
                        " are numerous and well-documented in industry research.",
                        " can be measured through key performance indicators."
                    ]
                });
            }
            setEditorState(prev => ({
                ...prev,
                suggestions: [...prev.suggestions, ...suggestions]
            }));
            trackEvent('editor', 'ai_suggestions_generated', 'suggestions_created', suggestions.length);
        }
        catch (error) {
            console.error('Failed to generate AI suggestions:', error);
            trackEvent('editor', 'ai_suggestions_failed', 'generation_error', undefined, {
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
        finally {
            setIsProcessing(false);
        }
    }, [enableAI, editorState.content, trackEvent]);
    // Apply AI suggestion
    const applySuggestion = useCallback((suggestion) => {
        setEditorState(prev => {
            let newContent = prev.content;
            if (suggestion.type === 'completion') {
                newContent = newContent.slice(0, suggestion.position) + suggestion.text + newContent.slice(suggestion.position);
            }
            else if (suggestion.type === 'grammar' || suggestion.type === 'style') {
                // For grammar and style, we need to find and replace the text
                const searchText = editorState.content.slice(suggestion.position, suggestion.position + suggestion.length);
                newContent = newContent.replace(searchText, suggestion.text);
            }
            return {
                ...prev,
                content: newContent,
                suggestions: prev.suggestions.filter(s => s.id !== suggestion.id)
            };
        });
        // Focus editor and set cursor position
        if (editorRef.current) {
            editorRef.current.focus();
            const newPosition = suggestion.position + suggestion.text.length;
            editorRef.current.setSelectionRange(newPosition, newPosition);
        }
        trackEvent('editor', 'ai_suggestion_applied', suggestion.type, undefined, { suggestionId: suggestion.id });
    }, [editorState.content, trackEvent]);
    // Save content
    const handleSave = useCallback(() => {
        onSave?.(editorState.content);
        setLastSaved(new Date());
        trackEvent('editor', 'content_saved', 'save_completed');
    }, [editorState.content, onSave, trackEvent]);
    // Export content
    const handleExport = useCallback((format) => {
        let exportContent = editorState.content;
        if (format === 'html') {
            exportContent = `<html><body><pre>${editorState.content}</pre></body></html>`;
        }
        else if (format === 'md') {
            exportContent = `# Document\n\n${editorState.content}`;
        }
        if (onExport) {
            onExport(exportContent, format);
        }
        else {
            // Default export behavior
            const blob = new Blob([exportContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `document.${format}`;
            a.click();
            window.URL.revokeObjectURL(url);
        }
        trackEvent('editor', 'content_exported', format, undefined, { format });
    }, [editorState.content, onExport, trackEvent]);
    // Handle collaboration text changes
    useEffect(() => {
        const handleCollaborationTextChange = (event) => {
            const { message } = event.detail;
            if (message.type === 'text_change' && message.userId !== userId) {
                // Handle incoming text changes from other users
                setEditorState(prev => {
                    // Simple merge strategy - in production, this would use operational transformation
                    return {
                        ...prev,
                        content: message.payload.content,
                        version: Math.max(prev.version, message.payload.version)
                    };
                });
                trackEvent('editor', 'collaboration_sync', 'text_synced', undefined, {
                    userId: message.userId,
                    version: message.payload.version
                });
            }
        };
        window.addEventListener('collaborationTextChange', handleCollaborationTextChange);
        return () => {
            window.removeEventListener('collaborationTextChange', handleCollaborationTextChange);
        };
    }, [userId, trackEvent]);
    // Auto-save functionality
    useEffect(() => {
        if (!enableVersioning)
            return;
        const autoSaveInterval = setInterval(() => {
            if (editorState.content !== initialContent) {
                handleSave();
            }
        }, 30000); // Auto-save every 30 seconds
        return () => clearInterval(autoSaveInterval);
    }, [editorState.content, initialContent, enableVersioning, handleSave]);
    // Generate suggestions when content changes significantly
    useEffect(() => {
        if (!enableAI)
            return;
        const debounceTimer = setTimeout(() => {
            if (editorState.content.length > 100) {
                generateAISuggestions();
            }
        }, 3000);
        return () => clearTimeout(debounceTimer);
    }, [editorState.content, enableAI, generateAISuggestions]);
    return (<div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5"/>
            Collaborative Text Editor
            {collaboration.isConnected && (<div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Live
              </div>)}
          </h3>
          
          <div className="flex items-center gap-2">
            {/* Collaboration Status */}
            {enableCollaboration && (<button onClick={() => setShowCollaborators(!showCollaborators)} className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm transition-colors flex items-center gap-2">
                <Users className="w-4 h-4"/>
                {collaboration.onlineUsers.length}
              </button>)}
            
            {/* AI Suggestions */}
            {enableAI && (<button onClick={generateAISuggestions} disabled={isProcessing} className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm transition-colors flex items-center gap-2 disabled:opacity-50">
                {isProcessing ? (<Loader2 className="w-4 h-4 animate-spin"/>) : (<Sparkles className="w-4 h-4"/>)}
                AI
              </button>)}
            
            {/* Save Button */}
            <button onClick={handleSave} className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded text-sm transition-colors flex items-center gap-2">
              <Save className="w-4 h-4"/>
              Save
            </button>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const CollaborativeTextEditor: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">CollaborativeTextEditor</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default CollaborativeTextEditor;