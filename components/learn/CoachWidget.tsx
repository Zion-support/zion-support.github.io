<<<<<<< HEAD
import React, { useState } from 'react';

export default function CoachWidget() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
=======
"use client";
import React{ useState } from 'react';

export default function CoachWidget() {
  const [inputsetInput] = useState('');
  const [replysetReply] = useState<string | null>(null);
  const [loadingsetLoading] = useState(false);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
<<<<<<< HEAD
      const resp = await fetch('/api/learn/coach', {
=======
      const resp = await fetch('/api/learn/coach'{
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
      const data = await resp.json();
<<<<<<< HEAD
      setReply(data.text || '');
=======
      setReply(data.text || ', ');
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border rounded p-3">
      <div className="font-medium mb-2">ZionGPT Coach</div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded px-3 py-2 bg-white dark:bg-black" placeholder="Ask for help..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={ask} className="px-3 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading ? '...' : 'Ask'}</button>
      </div>
      {reply && <div className="mt-2 text-sm text-gray-800 dark:text-gray-200">{reply}</div>}
    </div>
  );
}