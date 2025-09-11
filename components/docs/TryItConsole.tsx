

interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

=======

  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {



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

=======
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);



  }, [baseUrl, path]);


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

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
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
        </div>
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
        <div>

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

          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e && e.target.value)}
            placeholder='{ }';
          />;
=======
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    <div className='space-y-2'>


    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
