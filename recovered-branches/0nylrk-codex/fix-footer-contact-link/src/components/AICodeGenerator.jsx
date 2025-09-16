<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useCallback } from 'react';

import { Code, Sparkles, Download, TestTube, FileText, Settings, Zap, Shield, Gauge, Wrench, Eye, Trash2, Copy, CheckCircle, AlertCircle, Info, Loader2 } from 'lucide-react';
import { useAICodeGeneration } from '../hooks/useAICodeGeneration';
import { useAnalytics } from '../hooks/useAnalytics';
export const AICodeGenerator = () => {
    const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    const [activeTab, setActiveTab] = useState('generate');
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [customCode, setCustomCode] = useState('');
    const [copied, setCopied] = useState(false);
    const { isGenerating, isAnalyzing, generatedCode, codeAnalysis, suggestions, history, generateCode, analyzeCode, applySuggestion, optimizeCode, generateTests, generateDocs, clearHistory, exportCode } = useAICodeGeneration();
    const [form, setForm] = useState({
        prompt: '',
        language: 'typescript',
        framework: 'react',
        style: 'functional',
        target: 'web',
        quality: 'development',
        includeTests: false,
        includeDocs: false,
        includeErrorHandling: false,
        includeLogging: false,
        includeMetrics: false
    });
    // Handle form submission
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!form.prompt.trim())
            return;
        await generateCode(form.prompt, form);
        trackEvent('ai_code_generator', 'form_submitted', form.language, undefined, {
            framework: form.framework,
            style: form.style,
            target: form.target,
            quality: form.quality
        });
    }, [form, generateCode, trackEvent]);
    // Handle custom code analysis
    const handleAnalyzeCustomCode = useCallback(async () => {
        if (!customCode.trim())
            return;
        await analyzeCode(customCode, form.language);
        trackEvent('ai_code_generator', 'custom_code_analyzed', form.language, customCode.length);
    }, [customCode, form.language, analyzeCode, trackEvent]);
    // Handle code optimization
    const handleOptimizeCode = useCallback(async (focus) => {
        if (!generatedCode && !customCode)
            return;
        const codeToOptimize = generatedCode || customCode;
        const optimizedCode = await optimizeCode(codeToOptimize, focus);
        if (generatedCode) {
            // Update generated code
            // Note: In a real implementation, you'd want to update the state properly
        }
        trackEvent('ai_code_generator', 'code_optimized', focus, optimizedCode.length);
    }, [generatedCode, customCode, optimizeCode, trackEvent]);
    // Handle test generation
    const handleGenerateTests = useCallback(async () => {
        if (!generatedCode && !customCode)
            return;
        const codeToTest = generatedCode || customCode;
        const testCode = await generateTests(codeToTest, form.language);
        // In a real implementation, you'd want to display the test code
        console.log('Generated tests:', testCode);
        trackEvent('ai_code_generator', 'tests_generated', form.language, testCode.length);
    }, [generatedCode, customCode, generateTests, form.language, trackEvent]);
    // Handle documentation generation
    const handleGenerateDocs = useCallback(async () => {
        if (!generatedCode && !customCode)
            return;
        const codeToDoc = generatedCode || customCode;
        const docs = await generateDocs(codeToDoc, form.language);
        // In a real implementation, you'd want to display the documentation
        console.log('Generated docs:', docs);
        trackEvent('ai_code_generator', 'docs_generated', form.language, docs.length);
    }, [generatedCode, customCode, generateDocs, form.language, trackEvent]);
    // Copy code to clipboard
    const copyToClipboard = useCallback(async (code) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            trackEvent('ai_code_generator', 'code_copied', 'clipboard', code.length);
        }
        catch (error) {
            console.error('Failed to copy code:', error);
        }
    }, [trackEvent]);
    // Apply suggestion
    const handleApplySuggestion = useCallback((suggestion) => {
        applySuggestion(suggestion);
        trackEvent('ai_code_generator', 'suggestion_applied', suggestion.type, undefined, {
            suggestionId: suggestion.id,
            impact: suggestion.impact
        });
    }, [applySuggestion, trackEvent]);
    // Clear history
    const handleClearHistory = useCallback(() => {
        clearHistory();
        trackEvent('ai_code_generator', 'history_cleared', 'manual');
    }, [clearHistory, trackEvent]);
    return (<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Code className="w-8 h-8"/>
            AI Code Generator
            <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
              <Sparkles className="w-4 h-4"/>
              Powered by AI
            </div>
          </h2>
          
          <div className="flex items-center gap-2">
            <button onClick={() => exportCode('json')} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2">
              <Download className="w-4 h-4"/>
              Export
            </button>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AICodeGenerator: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AICodeGenerator</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AICodeGenerator;