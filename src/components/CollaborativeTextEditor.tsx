import React from 'react';

interface CollaborativeTextEditorProps {
  roomId: string;
  userId: string;
  userName: string;
  initialContent: string;
  enableAI: boolean;
  enableCollaboration: boolean;
  enableVersioning: boolean;

export function CollaborativeTextEditor(props: CollaborativeTextEditorProps) {
  return (
    <div className="bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-2">Collaborative Text Editor</h3>
      <textarea 
        className="w-full h-32 bg-slate-700 text-white p-2 rounded border border-slate-600"
        defaultValue={props.initialContent}
        placeholder="Start typing..."
      />
    </div>
  );
