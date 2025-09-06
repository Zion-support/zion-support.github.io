

interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

<<<<<<< HEAD
=======
  path: string; // full URL or relative
  requiresAuth: boolean;
export default function TryItConsole({
<<<<<<< HEAD
  method
  path
  requiresAuth
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD

      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
=======
    <div className='space-y-2'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      const res = await fetch(url, {

        method;
        headers;

<<<<<<< HEAD
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),;
      const text = await res && res.text();
      setResponse(text);
    } catch (e: any) {;
      setResponse(String(e?.message || e));
    } finally {;
      setLoading(false);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message |e))
    } finally {
      setLoading(false)
<<<<<<< HEAD
=======
=======
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    }
  }
  return (


            placeholder='Optional';
          />;
        </div>;
        <div>;

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
        </div>
      </div>
<<<<<<< HEAD
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
=======
<<<<<<< HEAD
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
=======
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
      )}
      <button
        onClick={onSend}
        className='px-3 py-2 rounded bg-high-contrast-accent text-black'
        disabled={loading}>;
        {loading ? 'Sending…' : 'Send Request'}

      </button>;
      <div>;
        <label className='block text-sm mb-1'>Response</label>;
        <pre className='p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80'>;
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>;

  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
        {loading ? 'Sending…' : 'Send Request'}
      </button>;
      <div>;
        <label className='block text - sm mb - 1'>Response</label>;
        <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm max - h-80'>;
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    <div className='space-y-2'>

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        <div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
        <div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
