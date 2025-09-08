
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
<label className='block text-sm mb-1'>Request Body (JSON)</label>

<label className='block text-sm mb-1'>Request Body (JSON)</label>'
          <textarea
}

    <div className='space-y-2'>


    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (

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

      </button>
      <div    />
        <label className=&quot;block text-sm mb-1&quot;    />Response</label>
        <pre className=&quot;p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm max-h-80&quot;    /><code    />{response}</code></pre>
      </div>
    </div>



        </div>
      </div>
      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
        <div>
        <div>
        <div>
