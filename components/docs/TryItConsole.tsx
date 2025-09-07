<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
interface TryItProps  {path: string; // full URL or relative;
  requiresAuth: boolean;
export default function TryItConsole() {const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



import React, { useMemo, useState } from 'react';

interface TryItProps  {path: string; // full URL or relative;
  requiresAuth: boolean;

export default function TryItConsole() {const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';}
}
interface TryItProps  {method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',method,path,requiresAuth}: TryItProps) {const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',const [baseUrl, setBaseUrl]  = useState('https://api.zion.os')path: string, // full URL or relative;
  requiresAuth: boolean;

export default function TryItConsole({
  method;
path}
requiresAuth}
}: TryItProps) {

  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  path: string, // full URL or relative;}
requiresAuth: boolean}
>>>>>>> origin/chore/fix-lint-and-merge
}
interface TryItProps  {method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',method,path,requiresAuth}: TryItProps) {const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',const [baseUrl, setBaseUrl]  = useState('https://api.zion.os')path: string, // full URL or relative;
  requiresAuth: boolean;
export default function TryItConsole({
  method;
path}
requiresAuth}
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

<<<<<<< HEAD
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  path: string, // full URL or relative;}
requiresAuth: boolean}
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
  const [baseUrl, setBaseUrl] = useState($2);
  const [token, setToken] = useState($2);
  const [body, setBody] = useState($2);
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState($2);
  const url = $2;
    return baseUrl.replace(/\/$/, '') + path
  }, [baseUrl, path]),

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

  const [baseUrl, setBaseUrl] = useState('https://api.zion.os);
  path: string, // full URL or relative;}
requiresAuth: boolean}
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {

  path: string, // full URL or relative;
  requiresAuth: boolean;
}
export default function TryItConsole() { return null; }
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api && api.zion.os');  const [token, setToken] = useState();  method: 'GET' | POST | 'PUT' | PATCH | 'DELETE',
  path: string, // full URL or relative;
  requiresAuth: boolean;
  const [baseUrl, setBaseUrl] = useState(https: //api.zion.os'),
'
  const [body, setBody] = useState();'
  const [response, setResponse] = useState<string>('),
  const [loading, setLoading] = useState(false);

      const headers: Record<string, string> = { 'Content-Type': application/json }'
      if (requiresAuth && token) headers['Authorization] = `Bearer ${token}`;
      const res = await fetch(url, {}
        method;
        headers;
        body: method === 'GET' || method === DELETE ? undefined : body || undefined}),
      const text = await res && res.text();
      setResponse(text);
    } catch (e: any) {
      setResponse(String(e?.message || e));
    } finally {
      setLoading(false);

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os');
  const [token, setToken] = useState();
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os')
  const [body, setBody] = useState();
  const [response, setResponse] = useState<string>(''),
return baseUrl.replace(/\/$/, ) + path;
=======
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os');

const [token, setToken] = useState('');

const [baseUrl, setBaseUrl] = useState('https: //api.zion.os');
  const [body, setBody] = useState('');

const [response, setResponse] = useState<string    />(''),
  const [loading, setLoading] = useState(false);}
return baseUrl.replace(/\/$/, '') + path;}
>>>>>>> origin/chore/fix-lint-and-merge
  }, [baseUrl, path]);
  async function onSend() {
    setLoading(true);
    setResponse('');
    try {
<<<<<<< HEAD
      const headers: Record<string, string> = { 'Content-Type': 'application/json' },
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`,
      const res = await fetch($2);
      const text = await res.text($2);
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message || e))
    } finally {
      setLoading(false)
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
      setResponse(text)
    } catch ("e": any) {
      }
      setResponse(String(e?.message |e))
    } finally {
      }
      setLoading(false)
origin/cursor/automate-test-improve-and-merge-code-2533
    }
  }
  return (
<div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>


            value={baseUrl}
            onChange={e = /> setBaseUrl(e.target.value}
}

=======
const headers: Record<string, string    /> = {}
        'Content-Type': 'application/json'}
      };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;

const res = await fetch(url, {
        method;
headers,
body: method === 'GET' |method === 'DELETE'
            ? undefined;
            : body |undefined}
     }
});

const text = await res.text();
      setResponse(text);
    } catch (e) {
      setResponse(String(e?.message |e));}
    } finally {
      setLoading(false);}
      setResponse(text)}
    } catch (e) {
      setResponse(String(e?.message |e))}
    } finally {}
      setLoading(false)}
    }
  }
  return (
<div className='space-y-2'    />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'    />
        <div    />

          <label className='block text-sm mb-1'    />Base URL</label>
          <input;
className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'

            value={baseUrl}
            onChange={e =    /> setBaseUrl(e.target.value}
}
>>>>>>> origin/chore/fix-lint-and-merge
          />;
        </div>;
        <div    />;
          <label className='block text-sm mb-1'    />Auth Token</label>;
          <input;
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      </div>'
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && ('
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
        <div>

<label className='block text-sm mb-1'>Request Body (JSON)</label>

<label className='block text-sm mb-1'>Request Body (JSON)</label>'
          <textarea
}

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>

  )
  )
}
<label className='block text-sm mb-1'>Request Body (JSON)</label>
origin/cursor/automate-test-improve-and-merge-code-2533
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
        <div />

<label className='block text-sm mb-1'    />Request Body (JSON)</label>
          <textarea
className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'}

            value={body}
      )}
      <button
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'
=======
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary';
            value={token}
            onChange={e =    /> setToken(e.target.value)}
            placeholder='Optional';
          />;
        </div>;
        <div    />;
          <label className='block text-sm mb-1'    />Method</label>;
          <input;
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary';
            value={method}

            readOnly;
             />
        </div>
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
        <div    />

<label className='block text-sm mb-1'    />Request Body (JSON)</label>
          <textarea;
className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'}
}
            value={body}
      )}
      <button;
        onClick={onSend}
        className='px-3 py-2 rounded bg-high-contrast-accent text-black';
          <label className='block text - sm mb - 1'    />Method</label>;
          <input;
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary';
>>>>>>> origin/chore/fix-lint-and-merge
            value={method}
            read_only;
             />        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (<div    />        <div    />;}
          <label className=\"block text-sm mb-1\" html_for=\"input - Base URL\"    />Base URL</label>;}"
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={base_url} on_change={(e) =    /> setBaseUrl (e.target.value)} />;
        </div>;
        <div    />;"
          <label className=\"block text-sm mb-1\" html_for=\"input - Auth Token\"    />Auth Token</label>;"
<<<<<<< HEAD
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={token} on_change={(e) =    /> set_token (e.target.value)} placeholder=\"Optional\" />
        </div>
        </div>
      </div>;'
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>;'
          <label className='block text - sm mb - 1'>Request Body (JSON)</label>
          <textarea;'
            className='w - full h - 32 px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary font - mono text - sm'
            value={body}
            on_change={e => set_body (e.target.value)}'

            value={body}
      )}


        onClick={onSend}'
        className='px-3 py-2 rounded bg-high-contrast-accent text-black''
          <label className='block text - sm mb - 1'>Method</label>;
          <input;'
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary';
            value={method}
            read_only;
          />        </div>;
      </div>;'
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>        <div>;
          <label className="block text-sm mb-1" html_for="input - Base URL">Base URL</label>;
          <input className="w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary" value={base_url} on_change={(e) => setBaseUrl (e.target.value)} />;
        </div>;
        <div>;
          <label className="block text-sm mb-1" html_for="input - Auth Token">Auth Token</label>;"
          <input className="w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary" value={token} on_change={(e) => set_token (e.target.value)} placeholder="Optional" />;"
        </div>;
        <div>;
          <label className="block text-sm mb-1" html_for="input - Method">Method</label>;
          <input className="w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary" value={method} read_only />;
        </div>;
      </div>;'
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>;'
          <label className='block text - sm mb - 1'>Request Body (JSON)</label>;
          <textarea;'
            className='w - full h - 32 px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary font - mono text - sm';
            value={body}
            on_change={e => set_body (e.target.value)}'
        <div />;"
          <label className=\"block text-sm mb-1\" html_for=\"input - Method\" />Method</label>;"
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={method} read_only />;
=======
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={token} on_change={(e) =    /> set_token (e.target.value)} placeholder=\"Optional\" />;
        </div>;
        <div    />;"
          <label className=\"block text-sm mb-1\" html_for=\"input - Method\"    />Method</label>;"
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={method} read_only    />;
>>>>>>> origin/chore/fix-lint-and-merge
        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (<div    />;
          <label className='block text - sm mb - 1'    />Request Body (JSON)</label>;
          <textarea;}
            className='w - full h - 32 px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary font - mono text - sm';}
            value={body}
<<<<<<< HEAD
            on_change={e = /> set_body (e.target.value)}
=======
            on_change={e =    /> set_body (e.target.value)}
>>>>>>> origin/chore/fix-lint-and-merge
            placeholder='{ }';
          />)}
      <button;
        on_click={on_send}
        className='px - 3 py - 2 rounded bg - high - contrast - accent text - black';
        disabled={loading}
<<<<<<< HEAD
      >;'
        {loading ? 'Sending…' : 'Send Request'}
      </button>;
      <div>;
        <label className='block text - sm mb - 1'>Response</label>;'
        <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm max - h-80'>;'
          <code>{response}</code>;
        </pre>;
      </div>;
    </div>);
        </div>
      </div>'
      {_(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
          <label className=&quot;block text-sm mb-1&quot;>Request Body (JSON)</label>
          <textarea className=&quot;w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm&quot; value={body} onChange={(e) => setBody(e.target.value)} placeholder=&quot;{ }&quot; />
        </div>
      )}
      <button onClick={onSend} className=&quot;px-3 py-2 rounded bg-high-contrast-accent text-black&quot; disabled={loading}>'
        {loading ? 'Sending…' : 'Send Request'}
        {loading ? Sending… : 'Send Request'}
=======
          />;
        {loading ? 'Sending…' : 'Send Request'}
      </button>;
      <div    />;
        <label className='block text - sm mb - 1'    />Response</label>;
        <pre className='p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm max - h-80'    />;
          <code    />{response}</code>;
        </pre>;
      </div>;
    </div>)</div>;
      </div>;
      {_(method === 'POST' || method === 'PUT' || method === 'PATCH') && (<div    />;}
          <label className=&quot;block text-sm mb-1&quot;    />Request Body (JSON)</label>;}
          <textarea className=&quot;w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm&quot; value={body} onChange={(e) =    /> setBody(e.target.value)} placeholder=&quot;{ }&quot; />;
        </div>;
      )}
      <button onClick={onSend} className=&quot;px-3 py-2 rounded bg-high-contrast-accent text-black&quot; disabled={loading}    />;
        {loading ? 'Sending…' : 'Send Request'}
>>>>>>> origin/chore/fix-lint-and-merge

      </button>
      <div    />
        <label className=&quot;block text-sm mb-1&quot;    />Response</label>
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;    /><code    />{response}</code></pre>
      </div>
    </div>
<<<<<<< HEAD
    <div className='space-y-2'>

}

    }
  }
  return ('
    <div className='space-y-2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === POST' || method === 'PUT || method === PATCH') && (
        <div>

  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533

  );

"
);
}
=======

  );

"
>>>>>>> origin/chore/fix-lint-and-merge
