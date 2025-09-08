<<<<<<< HEAD

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




  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  path: string, // full URL or relative;}
requiresAuth: boolean}

=======
import React, { useMemo, useState } from 'react';

interface TryItProps  {path: string; // full URL or relative;
  requiresAuth: boolean;
export default function TryItConsole() {const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';}




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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

  path: string, // full URL or relative
  requiresAuth: boolean

=======
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  path: string, // full URL or relative;}
requiresAuth: boolean}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD



=======
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

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);



  }, [baseUrl, path]);


<<<<<<< HEAD


=======
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);
  const url = useMemo(() => {
    if (path.startsWith('http')) return path;
    return baseUrl.replace(/\/$/, '') + path
  }, [baseUrl, path]);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os');

const [token, setToken] = useState('');

const [baseUrl, setBaseUrl] = useState('https: //api.zion.os');
  const [body, setBody] = useState('');

const [response, setResponse] = useState<string    />(''),
  const [loading, setLoading] = useState(false);}
return baseUrl.replace(/\/$/, '') + path;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, [baseUrl, path]);
  async function onSend() {
    setLoading(true);
    setResponse('');
    try {
<<<<<<< HEAD

<div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>



=======
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

            value={baseUrl}
            onChange={e = /> setBaseUrl(e.target.value}
}

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
          />;
        </div>;
        <div    />;
          <label className='block text-sm mb-1'    />Auth Token</label>;
          <input;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (

    <div className='space-y-2'>


=======

      </div>'
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && ('
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
        <div>

<label className='block text-sm mb-1'>Request Body (JSON)</label>

<label className='block text-sm mb-1'>Request Body (JSON)</label>'
          <textarea
}

    <div className='space-y-2'>

>>>>>>> origin/cursor/delete-old-data-records-6bba

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>

<<<<<<< HEAD

=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={token} on_change={(e) =    /> set_token (e.target.value)} placeholder=\"Optional\" />;
        </div>;
        <div    />;"
          <label className=\"block text-sm mb-1\" html_for=\"input - Method\"    />Method</label>;"
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={method} read_only    />;
        </div>;
      </div>;
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (<div    />;
          <label className='block text - sm mb - 1'    />Request Body (JSON)</label>;
          <textarea;}
            className='w - full h - 32 px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary font - mono text - sm';}
            value={body}
            on_change={e = /> set_body (e.target.value)}
            placeholder='{ }';
          />)}
      <button;
        on_click={on_send}
        className='px - 3 py - 2 rounded bg - high - contrast - accent text - black';
        disabled={loading}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      </button>
      <div    />
        <label className=&quot;block text-sm mb-1&quot;    />Response</label>
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;    /><code    />{response}</code></pre>
      </div>
    </div>

<<<<<<< HEAD

=======
}

    }
  }

  return ('
    <div className='space-y-2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533

  );

"
);
}

  );

"

>>>>>>> origin/cursor/delete-old-data-records-6bba
