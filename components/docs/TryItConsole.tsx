
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';
interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  path: string; // full URL or relative
  requiresAuth: boolean;
export default function TryItConsole({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  method
  path
  requiresAuth
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
<<<<<<< HEAD

=======

=======

  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
<<<<<<< HEAD

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os')

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),
  const [token, setToken] = useState('');
=======
<<<<<<< HEAD

interface TryItProps {;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string; // full URL or relative;
  requiresAuth: boolean;

export default function TryItConsole(): any ({;
  method,;
  path,;
  requiresAuth,;
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api && api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',;
  path: string, // full URL or relative;
  requiresAuth: boolean;
}

export default function TryItConsole(): any ({ method, path, requiresAuth }: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https: //api && api.zion.os'),;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);

  const url = useMemo(() => {;
    if (path && path.startsWith('http')) return path;
    return baseUrl && baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl && baseUrl.replace(/\/$/, '') + path;
  const url = useMemo(() => {;
    if (path && path.startsWith('http')) return path;
    return baseUrl && baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl && baseUrl.replace(/\/$/, '') + path;
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
      const text = await res && res.text();
      setResponse(text);
    } catch (e: any) {
      setResponse(String(e?.message |e));
    } finally {
      setLoading(false);    }
  }
  return (
<<<<<<< HEAD
    <div className='space-y-2'>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {;
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
=======
    <div className='space-y-2'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
  }
  return (
    <div className='space-y-2'>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>;
        <div>;
          <label className='block text-sm mb-1'>Base URL</label>;
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={baseUrl}
            onChange={e => setBaseUrl(e && e.target.value)}
          />;
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Auth Token</label>;
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={token}
            onChange={e => setToken(e && e.target.value)}
  path: string; // full URL or relative;
  requires_auth: boolean;
;
export default /**
 * TryItConsole - Function description
 */
function TryItConsole() {
  const [base_url, setBaseUrl] = useState ('https://api.zion.os');  const [token, set_token] = useState ('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string, // full URL or relative;
  requires_auth: boolean;
}
export default /**
 * TryItConsole - Function description
 */
function TryItConsole() {
  const [base_url, setBaseUrl] = useState ('https: //api.zion.os'),
  const [body, set_body] = useState ('');
  const [response, set_response] = useState < string>('');
  const [loading, set_loading] = useState (false);
;
  const url = useMemo (() => {
    if () return path) {
  $2
}
    return base_url.replace (/\/$/, '') + path;  }, [base_url, path]);    return base_url.replace (/\/$/, '') + path;
  }, [base_url, path]);
;
  async /**
 * on_send - Function description
 */
function on_send() {
    set_loading (true);
    set_response ('');
    try {
      const headers: Record < string, string> = {
        'Content - Type': 'application / json',
      }
      // Check condition
if (headers['Authorization'] = `Bearer ${token}`) {
  $2
}
      const res = await fetch (url, {
        method,
        headers,
        body:;
          method === 'GET' || method === 'DELETE';
            ? undefined;
            : body || undefined,
      });
      const text = await res.text ();
      set_response (text);
    } catch (e: any) {
      set_response (String (e?.message || e));
    } finally {
      set_loading (false);    }
  }
  return (
    <div className='space - y-2'>;
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 2'>      // Check condition
if (headers['Authorization'] = `Bearer ${token}`) {
  $2
}
      const res = await fetch (url, {
        method;
        headers;
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),
      const text = await res.text ();
      set_response (text);
    } catch (e: any) {
      set_response (String (e?.message || e));
    } finally {
      set_loading (false);
    }
  }
  return (
    <div className='space - y-2'>;
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 2'>;
        <div>;
          <label className='block text - sm mb - 1'>Base URL</label>;
          <input;
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary';
            value={base_url}
            on_change={e => setBaseUrl (e.target.value)}
          />;
        </div>;
        <div>;
          <label className='block text - sm mb - 1'>Auth Token</label>;
          <input;
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary';
            value={token}
            on_change={e => set_token (e.target.value)}
            placeholder='Optional';
          />;
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Method</label>;
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={method}
            readOnly
          />        </div>
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
        <div>        <div>
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
        </div>
      </div>
<<<<<<< HEAD
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
=======
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div>
          <label className='block text-sm mb-1'>Request Body (JSON)</label>
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e && e.target.value)}
            placeholder='{ }';
          />;
      )}
      <button
        onClick={onSend}
        className='px-3 py-2 rounded bg-high-contrast-accent text-black'
        disabled={loading}>;
        {loading ? 'Sending' : 'Send Request'}
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
          <label className="block text-sm mb-1" htmlFor="input-Request Body (JSON)">Request Body (JSON)</label>
          <textarea className="w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm" value={body} onChange={(e) => setBody(e.target.value)} placeholder="{ }" />
        </div>
      )}
      <button onClick={onSend} className="px-3 py-2 rounded bg-high-contrast-accent text-black" disabled={loading}>
        {loading ? 'Sending' : 'Send Request'}
      </button>
      <div>
        <label className="block text-sm mb-1" htmlFor="input-Response">Response</label>
        <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80"><code>{response}</code></pre>
      </div>
    </div>
  );
}
<<<<<<< HEAD
          <label className='block text - sm mb - 1'>Method</label>;
          <input;
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary';
            value={method}
            read_only;
          />        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>        <div>;
          <label className="block text - sm mb - 1" html_for="input - Base URL">Base URL</label>;
          <input className="w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary" value={base_url} on_change={(e) => setBaseUrl (e.target.value)} />;
        </div>;
        <div>;
          <label className="block text - sm mb - 1" html_for="input - Auth Token">Auth Token</label>;
          <input className="w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary" value={token} on_change={(e) => set_token (e.target.value)} placeholder="Optional" />;
        </div>;
        <div>;
          <label className="block text - sm mb - 1" html_for="input - Method">Method</label>;
          <input className="w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary" value={method} read_only />;
        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>;
          <label className='block text - sm mb - 1'>Request Body (JSON)</label>;
          <textarea;
            className='w - full h - 32 px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary font - mono text - sm';
            value={body}
            on_change={e => set_body (e.target.value)}
            placeholder='{ }';
          />)}
      <button;
        on_click={on_send}
        className='px - 3 py - 2 rounded bg - high - contrast - accent text - black';
        disabled={loading}
      >;
        {loading ? 'Sending' : 'Send Request'}
      </button>;
      <div>;
        <label className='block text - sm mb - 1'>Response</label>;
        <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm max - h-80'>;
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>);
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
        <div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
