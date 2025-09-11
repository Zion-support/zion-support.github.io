<<<<<<< HEAD
<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
interface TryItProps {
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
export default function TryItConsole({

  method
  path
  requiresAuth
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {


<<<<<<< HEAD
<<<<<<< HEAD
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);



  }, [baseUrl, path]);


<<<<<<< HEAD
<<<<<<< HEAD
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);
  const url = useMemo(() => {
    if (path.startsWith('http')) return path;
    return baseUrl.replace(/\/$/, '') + path
  }, [baseUrl, path]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function onSend() {;
    setLoading(true);
    setResponse('');
    try {;
      const headers: Record<string, string> = {;
        'Content-Type': 'application/json',;
      };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {;
        method,;
        headers,;
        body:;
          method === 'GET' || method === 'DELETE';
            ? undefined;
            : body || undefined,;
<<<<<<< HEAD
<<<<<<< HEAD
      });
      const text = await res && res.text();
      setResponse(text);
    } catch (e: any) {;
      setResponse(String(e?.message || e));
    } finally {;
      setLoading(false);    }
  }
  return (

    <div className='space-y-2'>;
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {;
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method;
        headers;
    }
  }
  return (
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      });
      const text = await res && res.text();
      setResponse(text);

    } catch (e: any) {;
      setResponse(String(e?.message || e));
    } finally {;

      setLoading(false);    }
  }
  return (

      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {

        method;
        headers;

        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),;
      const text = await res && res.text();
      setResponse(text);
    } catch (e: any) {;
      setResponse(String(e?.message || e));
    } finally {;
      setLoading(false);

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }
  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            placeholder='Optional';
          />;
        </div>;
        <div>;
<<<<<<< HEAD
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
        body: method === 'GET' |method === 'DELETE' ? undefined : body |undefined})
      const text = await res.text();

      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message |e))
    } finally {
      setLoading(false)
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>
<<<<<<< HEAD
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
          <label className='block text-sm mb-1'>Method</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={method}
            readOnly
          />        </div>
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
        <div>        <div>
=======

    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (;
        <div>        <div>;
          <label className="block text-sm mb-1" htmlFor="input-Base URL">Base URL</label>;
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={baseUrl} onChange={(e) => setBaseUrl(e && e.target.value)} />;
        </div>;
        <div>;
          <label className="block text-sm mb-1" htmlFor="input-Auth Token">Auth Token</label>;
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={token} onChange={(e) => setToken(e && e.target.value)} placeholder="Optional" />;
        </div>;
        <div>;
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>;
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />;
        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (;
        <div>;
          <label className='block text-sm mb-1'>Request Body (JSON)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e && e.target.value)}
            placeholder='{ }';
          />;
<<<<<<< HEAD
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        disabled={loading}>;
        {loading ? 'Sending…' : 'Send Request'}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </button>;
      <div>;
        <label className='block text-sm mb-1'>Response</label>;
        <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80'>;
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>;

<<<<<<< HEAD
  );
}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
=======
=======
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        {loading ? 'Sending…' : 'Send Request'}
      </button>;
      <div>;
        <label className='block text - sm mb - 1'>Response</label>;
        <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm max - h-80'>;
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>);
        </div>
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
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;><code>{response}</code></pre>
      </div>
    </div>
  )

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space-y-2'>


    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (

<<<<<<< HEAD
<<<<<<< HEAD
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

    }
  }

  return (

        </div>
      </div>
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
        <div>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
