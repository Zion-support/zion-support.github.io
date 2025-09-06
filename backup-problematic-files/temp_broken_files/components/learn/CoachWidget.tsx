import React, { useState } from 'react',

export default function CoachWidget() {
  const [input, setInput] = useState(''),
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false),
  async function ask() {
    if (!input.trim()) return,
    setLoading(true),
    try {
      const resp = await fetch('/api/learn/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      }),
      const data = await resp.json(),
      setReply(data.text || '')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=&quot;border rounded p-3&quot;>
      <div className=&quot;font-medium mb-2&quot;>ZionGPT Coach</div>
      <div className=&quot;flex gap-2&quot;>
        <input className=&quot;flex-1 border rounded px-3 py-2 bg-white dark:bg-black&quot; placeholder=&quot;Ask for help...&quot; value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={ask} className=&quot;px-3 py-2 bg-blue-600 text-white rounded&quot; disabled={loading}>{loading ? '...' : 'Ask'}</button>
      </div>
      {reply && <div className=&quot;mt-2 text-sm text-gray-800 dark:text-gray-200&quot;>{reply}</div>}    </div>
  )}