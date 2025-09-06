import React, { useMemo, useState } from 'react';

interface TryItProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string; // full URL or relative
  requiresAuth: boolean;

export default function TryItConsole({
  method,
  path,
  requiresAuth,
}: TryItProps) {
<<<<<<< HEAD
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');
=======
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
=======
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string, // full URL or relative
  requiresAuth: boolean
}

export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string, // full URL or relative
  requiresAuth: boolean
}

export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [token, setToken] = useState('');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const url = useMemo(() => {
    if (path.startsWith('http')) return path;
<<<<<<< HEAD
    return baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return baseUrl.replace(/\/$/, '') + path;
=======
    return baseUrl.replace(/\/$/, '') + path
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return baseUrl.replace(/\/$/, '') + path
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [baseUrl, path]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  async function onSend() {
    setLoading(true);
    setResponse('');
    try {
<<<<<<< HEAD
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
=======
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method,
        headers,
        body:
          method === 'GET' || method === 'DELETE'
            ? undefined
            : body || undefined,
      });
      const text = await res.text();
      setResponse(text);
    } catch (e: any) {
      setResponse(String(e?.message || e));
    } finally {
<<<<<<< HEAD
      setLoading(false);    }
  }

  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
=======
<<<<<<< HEAD
      setLoading(false);
=======
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method;
        headers;
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),
      const text = await res.text();
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message || e))
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
=======
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div>
          <label className='block text-sm mb-1'>Base URL</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={baseUrl}
            onChange={e => setBaseUrl(e.target.value)}
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>Auth Token</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={token}
            onChange={e => setToken(e.target.value)}
            placeholder='Optional'
          />
        </div>
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <label className='block text-sm mb-1'>Method</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={method}
            readOnly
<<<<<<< HEAD
          />        </div>
      </div>
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
=======
          />
=======
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Base URL">Base URL</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Auth Token">Auth Token</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Optional" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <label className='block text-sm mb-1'>Request Body (JSON)</label>
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder='{ }'
          />
<<<<<<< HEAD
=======
=======
          <label className="block text-sm mb-1" htmlFor="input-Request Body (JSON)">Request Body (JSON)</label>
          <textarea className="w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm" value={body} onChange={(e) => setBody(e.target.value)} placeholder="{ }" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      )}
      <button
        onClick={onSend}
        className='px-3 py-2 rounded bg-high-contrast-accent text-black'
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Send Request'}
      </button>
      <div>
        <label className='block text-sm mb-1'>Response</label>
        <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80'>
          <code>{response}</code>
        </pre>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
          <label className="block text-sm mb-1" htmlFor="input-Request Body (JSON)">Request Body (JSON)</label>
          <textarea className="w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm" value={body} onChange={(e) => setBody(e.target.value)} placeholder="{ }" />
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
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
