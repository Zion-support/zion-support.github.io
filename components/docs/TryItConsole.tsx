import React, { useMemo, useState } from 'react';
interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  path: string; // full URL or relative
  requiresAuth: boolean;
export default function TryItConsole({

  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {

  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);

  const url = useMemo(() => {
    if (path.startsWith('http')) return path;
    return baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl.replace(/\/$/, '') + path
  }, [baseUrl, path]);
  async function onSend() {
    setLoading(true);
    setResponse('');
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      }
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method
        headers
        body:
          method === 'GET' |method === 'DELETE'
            ? undefined
            : body |undefined
      });
      const text = await res.text();
      setResponse(text);
    } catch (e: any) {
      setResponse(String(e?.message |e));
    } finally {
      setLoading(false);    }
  }
  return (
    <div className='space-y-2'>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method;
        headers;
        body: method === 'GET' |method === 'DELETE' ? undefined : body |undefined})
      const text = await res.text();

      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message |e))
    } finally {
      setLoading(false)

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

        <div>
          <label className='block text-sm mb-1'>Request Body (JSON)</label>
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder='{ }'
          />
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
);
}

