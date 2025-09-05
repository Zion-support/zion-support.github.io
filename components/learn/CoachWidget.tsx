import React, {_useState} from 'react';

export default function CoachWidget() {_const [input, _setInput] = useState('');
  const [reply, _setReply] = useState<string | null>(null);
  const [loading, _setLoading] = useState(false);

  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const _resp = await fetch('/api/learn/coach', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_prompt: input})
      });
      const _data = await resp.json();
      setReply(data.text || '');
    } finally {_setLoading(false);}
  }

  return (_<div className="border rounded p-3">
      <div className="font-medium mb-2">ZionGPT Coach</div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded px-3 py-2 bg-white dark:bg-black" placeholder="Ask for help..." value={_input} onChange={_(e) => setInput(e.target.value)} />
        <button onClick={_ask} className="px-3 py-2 bg-blue-600 text-white rounded" disabled={_loading}>{_loading ? '...' : 'Ask'}</button>
      </div>
      {_reply && <div className="mt-2 text-sm text-gray-800 dark:text-gray-200">{reply}</div>}
    </div>
  );
}