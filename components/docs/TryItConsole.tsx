
  requiresAuth: boolean;
export default function TryItConsole({
  method;
path}
requiresAuth}
}: TryItProps) {
=======

  const [baseUrl, setBaseUrl] = useState(https://api.zion.os');  const [token, setToken] = useState(');  method: GET' | 'POST | PUT' | 'PATCH | DELETE'
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  }, [baseUrl, path]);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  async function onSend() {
    }
    setLoading(true);
    setResponse('');'
    try {


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


            value={baseUrl}
            onChange={e => { return setBaseUrl(e.target.value
}

          />;
        </div>;
        <div>;
          <label className='block text-sm mb-1'>Method</label>;'
          <input;

            className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm
        <div />

<label className=block text-sm mb-1'    />Request Body (JSON)</label>
          <textarea
className='w-full h-32 px-2 py-1 rounded bg-high-contrast-tertiary border border-high-contrast-secondary font-mono text-sm}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

            value={body}
      )}


            placeholder='{};
          />)}
      <button;
        on_click={on_send}
        className='px - 3 py - 2 rounded bg - high - contrast - accent text - black';
        disabled={loading}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {loading ? Sending… : 'Send Request'}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

      </button>
      <div    />
        <label className=&quot;block text-sm mb-1&quot;    />Response</label>
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;    /><code    />{response}</code></pre>
      </div>
    </div>

    <div className=space-y-2>

}

    }
  }
  return ('
    <div className='space-y-2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === POST' || method === 'PUT || method === PATCH') && (
        <div>


=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  );

"

=======
);
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
