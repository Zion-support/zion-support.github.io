


import React, { useMemo, useState } from 'react';'

interface TryItProps  {"path": string; // full URL or relative;
  }
  "requiresAuth": boolean;

export default function TryItConsole() {const [baseUrl, setBaseUrl] = useState('"https"://api.zion.os');'
  }
  const [token, setToken] = useState('')"method": 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';'

interface TryItProps  {"method": 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',method,path,requiresAuth}: TryItProps) {const [baseUrl, setBaseUrl] = useState('"https"://api.zion.os');'
  }
  const [token, setToken] = useState('')"method": 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',const [baseUrl, setBaseUrl]  = useState('"https"://api.zion.os')"path": string, // full URL or relative;'
  "requiresAuth": boolean;

export default function TryItConsole() {

  }

  const [baseUrl, setBaseUrl] = useState('"https"://api.zion.os');'
  "path": string, // full URL or relative,
"requiresAuth": boolean
}

export default function TryItConsole() {

  }

  const [baseUrl, setBaseUrl] = useState('"https": //api.zion.os');'

const [token, setToken] = useState('');'

const [baseUrl, setBaseUrl] = useState('"https": //api.zion.os');'
  const [body, setBody] = useState('');'

const [response, setResponse] = useState<string>(''),;'
  const [loading, setLoading] = useState(false);
return baseUrl.replace(/\/$/, '') + path;'
  }, [baseUrl, path]);
  async function onSend() {
    }
    setLoading(true);
    setResponse('');'
    try {
}
const "headers": Record<string, string> = {
        'Content-Type': 'application/json','
      };
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;`

const res = await fetch(url, {
        }
        method,
headers
        "body": method === 'GET' |method === 'DELETE''
            ? undefined
            : body |undefined
     
});

const text = await res.text();
      setResponse(text);
    } catch ("e": any) {
      }
      setResponse(String(e?.message |e));
    } finally {
      }
      setLoading(false);

      setResponse(text)
    } catch ("e": any) {
      }
      setResponse(String(e?.message |e))
    } finally {
      }
      setLoading(false)
origin/cursor/automate-test-improve-and-merge-code-2533
    }
return (;
<div className='space-y-2'>'
      <div className='grid grid-cols-1 "md":grid-cols-3 gap-2'>'
        <div>

          <label className='block text-sm mb-1'>Base URL</label>'
          <input,
className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary''

            value={baseUrl}
            onChange={e => { return setBaseUrl(e.target.value
}
          />; }
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Auth Token</label>;'
          <input;
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary';'
            value={token}
            onChange={e => { return setToken(e.target.value)}
            placeholder='Optional'; }'
          />;
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Method</label>;'
          <input;
            className='w-full px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary';'
            value={method}

            readOnly />
        </div>
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && ('
      {(method === 'POST' |method === 'PUT' |method === 'PATCH') && ('
        <div>

<label className='block text-sm mb-1'>Request Body (JSON)</label>'
          <textarea
}
className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm''

            value={body}
      )}
      <button
            className='w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'
            value={method}
            read_only
          />        </div>
        </div>
        <div    />;"
          <label className=\"block text-sm mb-1\" html_for=\"input - Auth Token\"    />Auth Token</label>;"
          <input className=\"w - full px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high-contrast-secondary\" value={token} on_change={(e) =    /> set_token (e.target.value)} placeholder=\"Optional\" />
        </div>
      </div>;'
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>;'
          <label className='block text - sm mb - 1'>Request Body (JSON)</label>
          <textarea;'
            className='w - full h - 32 px - 2 py - 1 rounded bg - high - contrast - tertiary border border - high - contrast - secondary font - mono text - sm'
            value={body}
            on_change={e => set_body (e.target.value)}'

            placeholder='{ }'
          />)}
      <button
        on_click={on_send}
        className='px - 3 py - 2 rounded bg - high - contrast - accent text - black'
        disabled={loading}

    <div className='space-y-2'>

}

    }
  return ('
    <div className='space-y-2'>'
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
'
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>

  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533

  );

"
);
}
