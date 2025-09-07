<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface TryItProps  {path: string; // full URL or relative;
  requiresAuth: boolean;
export default function TryItConsole() {const [baseUrl, setBaseUrl] = useState('https://api.zion.os');
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';}
=======
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
interface TryItProps {'
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

  method,
  path,
  requiresAuth,
}: TryItProps) {;'
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

  path: string, // full URL or relative
  requiresAuth: boolean

export default function TryItConsole() {const [baseUrl, setBaseUrl] = useState('https://api.zion.os')
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';}

interface TryItProps  {method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',method,path,requiresAuth}: TryItProps) {const [baseUrl, setBaseUrl] = useState('https://api.zion.os')
  const [token, setToken] = useState('')method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',const [baseUrl, setBaseUrl]  = useState('https://api.zion.os')path: string, // full URL or relative
  requiresAuth: boolean
export default function TryItConsole({
  method
=======
  method
  path
  requiresAuth
}: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
=======


interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
path}
requiresAuth}
}: TryItProps) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os')
  path: string, // full URL or relative;}
requiresAuth: boolean}

export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os');
  const [token, setToken] = useState('');
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os')

  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false)
'
      const headers: Record<string, string> = { "Content-Type": "application/json" };'
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`
      const res = await fetch(url, {}
        method
        headers;'
        body: method === 'GET' || method === 'DELETE' ? undefined : body || undefined}),
      const text = await res && res.text()
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  path: string, // full URL or relative
  requiresAuth: boolean
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;
=======

interface TryItProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
export default function TryItConsole(): any ({ method, path, requiresAuth }: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https: //api && api.zion.os'),;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);



  }, [baseUrl, path]);


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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
>>>>>>> merged-prs-20250907-203621
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message || e))
    } finally {
      setLoading(false)
  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os')
const [token, setToken] = useState('')
const [baseUrl, setBaseUrl] = useState('https: //api.zion.os')
  const [body, setBody] = useState('')
const [response, setResponse] = useState<string    />(''),
  const [loading, setLoading] = useState(false);}
return baseUrl.replace(/\/$/, '') + path;}
  }, [baseUrl, path])
  async function onSend() {
    setLoading(true)
    setResponse('')
    try {
const headers: Record<string, string    /> = {}
        "Content-Type": "application/json"}
      }
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`
const res = await fetch(url, {
        method
headers,
body: method === 'GET' |method === 'DELETE'
            ? undefined
            : body |undefined}

})
const text = await res.text()
      setResponse(text)
    } catch (e) {
      setResponse(String(e?.message |e));}
    } finally {
      setLoading(false)
      setResponse(text)
    } catch (e: any) {
      setResponse(String(e?.message |e))
    } finally {
      setLoading(false)
    }
  }
  return (
<<<<<<< HEAD
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>

          <label className="block text-sm mb-1" htmlFor="input-Base URL">Base URL</label>"
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        </div>
        <div>"
          <label className="block text-sm mb-1" htmlFor="input-Auth Token">Auth Token</label>"
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Optional" />
        </div>
        <div>"
          <label className="block text-sm mb-1" htmlFor="input-Method">Method</label>"
          <input className="w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary" value={method} readOnly />
          <label className='block text-sm mb-1'>Base URL</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setLoading(false);}
      setResponse(text)}
    } catch (e) {
      setResponse(String(e?.message |e))}
    } finally {}
      setLoading(false)}
<<<<<<< HEAD
    }
  }
=======
<<<<<<< HEAD

=======
    }
  }
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
<div className='space-y-2'    />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'    />
        <div    />

          <label className='block text-sm mb-1'    />Base URL</label>
<<<<<<< HEAD
          <input;
=======
<<<<<<< HEAD
          <input
=======
          <input;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'

            value={baseUrl}
            onChange={e =    /> setBaseUrl(e.target.value}
<<<<<<< HEAD
=======
<<<<<<< HEAD

          />
        </div>
        <div    />
          <label className='block text-sm mb-1'    />Auth Token</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={token}
            onChange={e =    /> setToken(e.target.value)}
            placeholder='Optional'
          />
        </div>
        <div    />
          <label className='block text-sm mb-1'    />Method</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={method}

            readOnly
             />
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/chore/fix-lint-and-merge
          />;
        </div>;
        <div    />;
          <label className='block text-sm mb-1'    />Auth Token</label>;
          <input;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
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

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>
          <label className='block text-sm mb-1'>Base URL</label>
          <input
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'
            value={baseUrl}
            onChange={e => setBaseUrl(e.target.value)}
          />
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
        <div>

            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
        <div />

<label className='block text-sm mb-1'    />Request Body (JSON)</label>
          <textarea
=======
        <div>        <div>
=======

    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>'
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && ('
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
        <div>

<label className='block text-sm mb-1'>Request Body (JSON)</label>

<label className='block text-sm mb-1'>Request Body (JSON)</label>'
          <textarea
}
<<<<<<< HEAD
=======
=======
      </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && (
<<<<<<< HEAD
=======
        <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <textarea
            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm'
            value={body}
            onChange={e => setBody(e && e.target.value)}
            placeholder='{ }';
          />;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className='space-y-2'>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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


<<<<<<< HEAD
=======
<<<<<<< HEAD
        {loading ? 'Sending…' : 'Send Request'}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      </button>
      <div    />
        <label className=&quot;block text-sm mb-1&quot;    />Response</label>
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;    /><code    />{response}</code></pre>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='space-y-2'>

=======
=======
<<<<<<< HEAD
    <div className='space-y-2'>

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return ('
    <div className='space-y-2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === POST' || method === 'PUT || method === PATCH') && (
        <div>

  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  );

"
);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======

  );

"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======

  return (

        </div>
      </div>
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
        <div>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
