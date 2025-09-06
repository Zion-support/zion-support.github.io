import React, { useMemo, useState } from 'react';
interface TryItProps {

=======
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string, // full URL or relative
  requiresAuth: boolean
}

export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [token, setToken] = useState(''),
  const [body, setBody] = useState(''),
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false),

  const url = useMemo(() => {
    if (path.startsWith('http')) return path,

=======
    return baseUrl.replace(/\/$/, '') + path
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [baseUrl, path]);

  async function onSend() {
    setLoading(true),
    setResponse(''),
    try {

      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`,
      const res = await fetch(url, {
        method,
        headers;
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),
      const text = await res.text(),
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message || e))
    } finally {

=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (

        <div>
          <label className="block text-sm mb-1" htmlFor="input-Base URL">Base URL</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Auth Token">Auth Token</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Optional" />
        </div>
        <div>

=======
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>

        </div>
      )}
      <button onClick={onSend} className="px-3 py-2 rounded bg-high-contrast-accent text-black" disabled={loading}>
        {loading ? 'Sending…' : 'Send Request'}
      </button>
      <div>
        <label className="block text-sm mb-1" htmlFor="input-Response">Response</label>
        <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80"><code>{response}</code></pre>
      </div>
    </div>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
