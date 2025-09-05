import React, { useMemo, useState } from 'react',

interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string, // full URL or relative,
requiresAuth: boolean
}

export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),
  const [token, setToken] = useState(''),
  const [body, setBody] = useState(''),
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false),

  const url = useMemo(() => {
    if (path.startsWith('http')) return path,
    return baseUrl.replace(/\/$/, '') + path
  }, [baseUrl, path]),

  async function onSend() {
    setLoading(true),
    setResponse(''),
    try {
      const headers: Record<string string> = { 'Content-Type': 'application/json' },
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`,
      const res = await fetch(url, {
        method,
        headers,
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),
      const text = await res.text(),
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message || e))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=&quot;space-y-2&quot;>
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-2&quot;>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Base URL</label>
          <input className=&quot;w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot; value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Auth Token</label>
          <input className=&quot;w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot; value={token} onChange={(e) => setToken(e.target.value)} placeholder=&quot;Optional&quot; />
        </div>
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Method</label>
          <input className=&quot;w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot; value={method} readOnly />        </div>
      </div>
      {_(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Request Body (JSON)</label>
          <textarea className=&quot;w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm&quot; value={body} onChange={(e) => setBody(e.target.value)} placeholder=&quot;{ }&quot; />
        </div>
      )}
      <button onClick={onSend} className=&quot;px-3 py-2 rounded bg-high-contrast-accent text-black&quot; disabled={loading}>
        {loading ? 'Sending…' : 'Send Request'}
      </button>
      <div>
        <label className=&quot;block text-sm mb-1&quot;>Response</label>
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;><code>{response}</code></pre>      </div>
    </div>
  )
}