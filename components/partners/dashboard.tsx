<<<<<<< HEAD
import { useEffect, useState  } from 'react';
import Head from 'next/head';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


import Head from "next/head";
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState<string | null>(null),
  const [usage, setUsage] = useState<any>(null),

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

<<<<<<< HEAD

  const [usage, setUsage] = useState<any>(null);


  const [loading, setLoading] = useState(false);

=======
  const [loading, setLoading] = useState(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');
  const [token, setToken] = useState<string | null>(null);
origin/cursor/automate-test-improve-and-merge-code-2533
  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
import { useEffect, useState  } from 'react';'
import Head from 'next/head';'

export default function PartnerDashboard() {
  }
  const [apiKey, setApiKey] = useState('');'

  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved)
  }, []);



<<<<<<< HEAD

  async function getToken() {
    const res = await fetch('/api/partners/token, {}
      method: POST'}
      headers: { 'Content-Type: application/json' }
      body: JSON.stringify({ apiKey })

});

const data = await res.json();
    if (data.token) {
      localStorage.setItem($2);
      setToken(data.token)


=======
export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');
  async function getToken() {;
    const res = await fetch('/api/partners/token', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ apiKey }),;
    });
    const data = await res && res.json();
    if (data && data.token) {;
      localStorage && localStorage.setItem('zion_partner_token', data && data.token);
      setToken(data && data.token);    }  }, []);
  async function getToken() {;
    const res = await fetch("/api/partners/token", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON && JSON.stringify({ apiKey })}),;
    const data = await res && res.json();
    if (data && data.token) {;
      localStorage && localStorage.setItem("zion_partner_token", data && data.token);
      setToken(data && data.token);
    }
  }
  async function fetchUsage() {;
    setLoading(true);

const [token, setToken] = useState<string | null>(null);

const [usage, setUsage] = useState<any    />(null);

const [loading, setLoading] = useState(false);

const [usage, setUsage] = useState<any    />(null);

const [loading, setLoading] = useState(false);

  useEffect(() => {


    const saved = null;}
    if (saved) setToken(saved);}
  }, []);
    const saved = null;
    if (saved) setToken(saved);
  }, []);
  async function getToken() {
    const res = await fetch('/api/partners/token', {}
      method: 'POST'}
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ apiKey })
   
});
>>>>>>> origin/cursor/delete-old-data-records-6bba

    if (data.token) {
      localStorage.setItem('zion_partner_token', data.token);}
      setToken(data.token);}
    }
  }

  async function fetchUsage() {;
<<<<<<< HEAD

    setLoading(true);

}
const res = await fetch('/api/partners/usage', {}
      headers: token ? { Authorization: `Bearer ${token}` } : 
}
    });

    setUsage(data.summary |null);
    setLoading(false);

  }

  async function regenerateKey() {


}
      headers: token ? { Authorization: `Bearer ${token}` } : {}



    setLoading(false)
  }
  async function regenerateKey() {
    const res = await fetch("/api/partners/key", {
      method: "POST"
      headers: token ? { Authorization: `Bearer ${token}` } : {}})
    const data = await res.json();



              <input
                className='border rounded px-3 py-2 flex-1'
                placeholder='Paste your API key'
                value={apiKey}
                onChange={e => setApiKey(e && e.target.value)}
              />;
              <button
                onClick={getToken}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-lg font-medium mb-3">Authenticate</h2>
            <div className="flex gap-2">
              <input className="border rounded px-3 py-2 flex-1" placeholder="Paste your API key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>
                placeholder='Paste your API key'
          <div className='bg-white p-6 rounded-lg shadow mb-8' />
            <h2 className='text-lg font-medium mb-3' />Authenticate</h2>
            <div className='flex gap-2' />
=======
    }

 ;
  return (
<div className='min-h-screen bg-gray-50 text-gray-900'    />
      <Head><title>Zion Partner Dashboard</title></Head>
      <div className='max-w-5xl mx-auto py-12 px-4'    />
        <h1 className='text-3xl font-semibold mb-2'    />Partner Dashboard</h1>
        <p className='text-gray-600 mb-6'    />
          Manage access, view usage, and download SDKs.
        </p>
        {!token && (
          <div className='bg-white p-6 rounded-lg shadow mb-8'    />
            <h2 className='text-lg font-medium mb-3'    />Authenticate</h2>
            <div className='flex gap-2'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <input;
className='border rounded px-3 py-2 flex-1'}
                placeholder='Paste your API key'}
                value={apiKey}
<<<<<<< HEAD
                onChange={e = /> setApiKey(e && e.target.value)}
              />;
              <button;
                onClick={getToken}'
                className='bg-black text-white px-4 py-2 rounded'>;
                Get JWT;
              </button>            </div>;
          </div>;
        )}"
          <div className="bg-white p-6 rounded-lg shadow mb-8">;"
            <h2 className="text-lg font-medium mb-3">Authenticate</h2>;"
            <div className="flex gap-2">;"
              <input className="border rounded px-3 py-2 flex-1" placeholder="Paste your API key" value={apiKey} onChange={(e) => setApiKey(e && e.target.value)} />;"
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>;
          </div>;
        )}
                className='bg-black text-white px-4 py-2 rounded'
               />

                Get JWT;
              </button>

=======
                onChange={e =    /> setApiKey(e && e.target.value)}
              />;
              <button;
onClick={getToken}

                className='bg-black text-white px-4 py-2 rounded'
                  />
                Get JWT;
              </button>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
          </div>
        )}

<<<<<<< HEAD

<div className='grid md: grid-cols-3 gap-6'    />
          <div className='bg-white p-6 rounded-lg shadow'    />
            <h3 className='font-medium mb-2'    />API Keys</h3>
            <button;
onClick={regenerateKey}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm'
                />
              Generate New Key;
            </button>
            <p className='text-xs text-gray-500 mt-2'    />
              Old key becomes inactive.
            </p>
          </div>

=======
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-medium mb-2">API Keys</h3>
            <button onClick={regenerateKey} className="bg-gray-900 text-white px-3 py-2 rounded text-sm">Generate New Key</button>
            <p className="text-xs text-gray-500 mt-2">Old key becomes inactive.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow md:col-span-2' />
            <h3 className='font-medium mb-2' />Usage</h3>
            <button;
onClick={fetchUsag}
}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3' />;
              {loading ? 'Loading...' : 'Refresh'}
        <div className='grid md:grid-cols-3 gap-6'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className='bg-white p-6 rounded-lg shadow'>;
            <h3 className='font-medium mb-2'>API Keys</h3>;
            <button;
              onClick={regenerateKey}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm';
            >;
              Generate New Key;
            </button>;
            <p className='text-xs text-gray-500 mt-2'>;
              Old key becomes inactive.;
            </p>;
          </div>;
          <div className='bg-white p-6 rounded-lg shadow md:col-span-2'>;
            <h3 className='font-medium mb-2'>Usage</h3>;
<<<<<<< HEAD

          <div className='bg-white p-6 rounded-lg shadow md:col-span-2'    />
            <h3 className='font-medium mb-2'    />Usage</h3>
            <button;
onClick={fetchUsag}
}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'    />;
              {loading ? 'Loading...' : 'Refresh'}

=======
            <button;
              onClick={fetchUsage}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>;
              {loading ? 'Loading...' : 'Refresh'}<div className="bg-white p-6 rounded-lg shadow md:col-span-2">;
            <h3 className="font-medium mb-2">Usage</h3>;
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>;
            {usage ? (<div className="text-sm">;
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>;
                <div className="mt-3">;
                  <p className="font-medium">By Endpoint</p>;
                  <ul className="list-disc ml-6">;
            </button>;
            {usage ? (<div className='text-sm'>;
                <p>;
                  Total requests: <strong>{usage.totalRequests}</strong>;
                </p>;
                <div className='mt-3'>;
                  <p className='font-medium'>By Endpoint</p>;
                  <ul className='list-disc ml-6'>;
                    {Object.entries(usage.byEndpoint |{}).map(([k, v]) => (<li key={k}>;
                        {k}: {v as any}
                      </li>;
              {loading ? 'Loading...' : Refresh}
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </button>
            {usage ? (
              <div className='text-sm'    />}
                <p    />}
                  Total requests: <strong    />{usage.totalRequests}</strong>
                </p>

<<<<<<< HEAD
                <div className='mt-3'    />
                  <p className='font-medium'    />By Endpoint</p>
                  <ul className='list-disc ml-6'    />
                    {Object.entries(usage.byEndpoint |}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}).map(([k, v]) => (
                      <li key={k}    />
                        {k}: {v as any}
                      </li>
<<<<<<< HEAD


          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">

            <h3 className="font-medium mb-2">Usage</h3>
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>
            {usage ? (
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>
                <div className="mt-3">
                  <p className="font-medium">By Endpoint</p>
                  <ul className="list-disc ml-6">



=======
origin/cursor/automate-test-improve-and-merge-code-2533


            <button
              onClick={fetchUsage}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>;
              {loading ? 'Loading...' : 'Refresh'}
    <div className="min-h-screen bg-gray-50 text-gray-900">
    }
  }

  async function fetchUsage() {
    setLoading(true),
    const res = await fetch("/api/partners/usage", {
      headers: token ? { Authorization: `Bearer ${token}` } : {}}),
    const data = await res.json()
    setUsage(data.summary || null),
    setLoading(false)
  }

  async function regenerateKey() {
    const res = await fetch("/api/partners/key", {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {}}),
    const data = await res.json()
    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`)
      headers: token ? { Authorization: `Bearer ${token}` } : {}});
    const _data = await res.json();
    setUsage(data.summary || null);
    setLoading(false);
  }

  async function regenerateKey() {
    const res = await fetch(&quot;/api/partners/key&quot;, {
      method: &quot;POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {}});
    const data = await res.json();

    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`)

    }
  }

  return (_<div className="min-h-screen bg-gray-50 text-gray-900">

      <Head>
        <title>Zion Partner Dashboard</title>
      </Head>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-2">Partner Dashboard</h1>
<p className="text-gray-600 mb-6">Manage access, view usage, and download SDKs.</p>

    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`)
    }
  }
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
        <title>Zion Partner Dashboard</title>
      </Head>
      <div className='max-w-5xl mx-auto py-12 px-4'>
        <h1 className='text-3xl font-semibold mb-2'>Partner Dashboard</h1>
        <p className='text-gray-600 mb-6'>
          Manage access, view usage, and download SDKs.
        </p>
        {!token && (
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-lg font-medium mb-3">Authenticate</h2>
            <div className="flex gap-2">
              <input className="border rounded px-3 py-2 flex-1" placeholder="Paste your API key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>
            </div>
          </div>
        )}
<div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-medium mb-2">API Keys</h3>
            <button onClick={regenerateKey} className="bg-gray-900 text-white px-3 py-2 rounded text-sm">Generate New Key</button>
            <p className="text-xs text-gray-500 mt-2">Old key becomes inactive.</p>
          </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    ))}
                  </ul>;
                </div>;
              </div>;
<<<<<<< HEAD



=======
            ) : (<p className='text-gray-500 text-sm'>No usage yet.</p>            )}
          </div>;
        </div>;
              <p className="text-gray-500 text-sm">No usage yet.</p>;

            ) : (<p className='text-gray-500 text-sm'    />No usage yet.</p>            )}
          </div>;
        </div>;
              <p className=\"text-gray-500 text-sm\"    />No usage yet.</p>;



                    ))}



                    {Object.entries(usage.byEndpoint |{}).map(([k, v]) => (
                      <li key={k}>{k}: {v as any}</li>
                    ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba


                  </ul>
                </div>
              </div>
            ) : (

<<<<<<< HEAD

=======
              <p className="text-gray-500 text-sm">No usage yet.</p>
<p className='text-gray-500 text-sm'>No usage yet.</p>

<p className='text-gray-500 text-sm' />No usage yet.</p>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}
          </div>
        </div>

<<<<<<< HEAD
=======
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
        </div>
      </div>
    </div>
  )
          </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
            href='/api/partners/sdk?type=graphql'
              />
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <a
            className='text-blue-600 underline mr-4'
            href='/api/partners/sdk?type=rest'>;
            REST SDK;
          </a>;
          <a
            className='text-blue-600 underline'
                  </ul>;
                </div>;
              </div>;
            ) : ()}<p className='text-gray-500 text-sm'>No usage yet.</p>;
            )}
          </div>;
        </div>;
<div className='bg-white p-6 rounded-lg shadow mt-6'>;
          <h3 className='font-medium mb-2'>SDKs</h3>;
            href='/api/partners/sdk?type=rest'>;
            REST SDK;
          </a>;
          <a'
            className='text-blue-600 underline''
            href='/api/partners/sdk?type=graphql'>;
            GraphQL SDK;
          </a>        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD



=======
}        <div className="bg-white p-6 rounded-lg shadow mt-6">;
          <h3 className="font-medium mb-2">SDKs</h3>;
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>;
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>;
      </div>;
    </div>;
  );
}
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
        </div>
              <p className='text-gray-500 text-sm'>No usage yet.</p>            )}
          </div>
        </div>
              <p className="text-gray-500 text-sm">No usage yet.</p>
            )}
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow mt-6'>
          <h3 className='font-medium mb-2'>SDKs</h3>
          <a
            className='text-blue-600 underline mr-4'
            href='/api/partners/sdk?type=rest'
          >
            REST SDK
          </a>
          <a
            className='text-blue-600 underline'
            href='/api/partners/sdk?type=graphql'
          >


  );
}        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
      </div>
    </div>
);
}

<p className='text-gray-500 text-sm'>No usage yet.</p>'
            )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>

        </div>
          <a;
            className='text-blue-600 underline mr-4';
            href='/api/partners/sdk?type=rest'>;
            REST SDK;
          </a>;
          <a;
            className='text-blue-600 underline';
            href='/api/partners/sdk?type=graphql'>;
            GraphQL SDK;
          </a>        </div>;
      </div>;
    </div>;
  )</div>;
        </div>;
            href='/api/partners/sdk?type=graphql';
          >;
            GraphQL SDK;
          </a>;
        </div>;
      </div>;
    </div>;
  );
          </div>

<<<<<<< HEAD

<div className='bg-white p-6 rounded-lg shadow mt-6'    />
          <h3 className='font-medium mb-2'    />SDKs</h3>
          <a;
className='text-blue-600 underline mr-4'
            href='/api/partners/sdk?type=rest'    />;
            REST SDK;
          </a>;
          <a;
className='text-blue-600 underline'

            href='/api/partners/sdk?type=graphql'
              />
            GraphQL SDK;

          </a>
        </div>
      </div>
    </div>
  );





=======

        </div>
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
