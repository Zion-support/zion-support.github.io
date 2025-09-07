<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState  } from 'react';
import Head from 'next/head';
export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState($2);
  const [token, setToken] = useState<string | null>(null),
  const [usage, setUsage] = useState<any>(null),
    const saved = localStorage.getItem("zion_partner_token");
  const [loading, setLoading] = useState($2);
  useEffect(() => {
<<<<<<< HEAD
    const saved = localStorage.getItem($2);
    if (saved) setToken(saved)
  }, []),
=======
    const saved = null;
  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

    const saved = null;}
    if (saved) setToken(saved);}
  }, []);
  async function getToken() {
    const res = await fetch('/api/partners/token', {}
      method: 'POST'}
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ apiKey })

});

const data = await res.json();
    if (data.token) {
      localStorage.setItem($2);
      setToken(data.token)
    }
  }

  async function fetchUsage() {
    setLoading($2);
    const res = await fetch($2);
    const data = await res.json($2);
    setUsage($2);
    setLoading(false)
=======
import { useEffect, useState } from 'react';'
import Head from 'next/head';
export default function PartnerDashboard() { return null; }
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);import { useEffect, useState } from "react";"
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Head from "next/head";
<<<<<<< HEAD
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState<string | null>(null),
  const [usage, setUsage] = useState<any>(null),

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);


export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');
  const [token, setToken] = useState<string | null>(null);
origin/cursor/automate-test-improve-and-merge-code-2533
  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved)
=======
export default function PartnerDashboard() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }, []);

  async function getToken() { return null; }
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ apiKey })})
    const data = await res.json();
    if (data.token) {"
      localStorage.setItem("zion_partner_token", data.token);
      setToken(data.token)
    const saved = null;
    if (saved) setToken(saved);
  }, []);
  async function getToken() {
    const res = await fetch('/api/partners/token', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ apiKey })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('zion_partner_token', data.token);
      setToken(data.token);
origin/cursor/automate-test-improve-and-merge-code-2533
    }
  }

  async function fetchUsage() { return null; }
    });
    const data = await res && res.json();
    setLoading(false)
  }
  async function regenerateKey() { return null; }
      headers: token ? { Authorization: `Bearer ${token}` } : {}})
    const data = await res.json();
    }
  }
  return (
<<<<<<< HEAD
=======
    }
  }
  return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const res = await fetch('/api/partners/usage', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const data = await res.json();
}
const res = await fetch('/api/partners/usage', {}
      headers: token ? { Authorization: `Bearer ${token}` } : 
}
    });

const data = await res.json();
    setUsage(data.summary |null);
    setLoading(false);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }

  async function regenerateKey() {
<<<<<<< HEAD
export default function PartnerDashboard() {const [apiKey, setApiKey] = useState('')const [token, setToken] = useState<string | null>(null)import { useEffect, useState  } from 'react';
export default function PartnerDashboard() {const [apiKey, setApiKey] = useState("")const [token, setToken] = useState<string | null>(null),const [usage, setUsage] = useState<any>(null),export default function PartnerDashboard() {const [apiKey, setApiKey] = useState('')const [token, setToken]  = useState<string | null>(null)const [token, setToken]  = useState<string | null>(null)export default function PartnerDashboard() {const [apiKey, setApiKey] = useState('')const [token, setToken]  = useState<string | null>(null)const [usage, setUsage] = useState<any>(null)const [loading, setLoading] = useState(false)const [usage, setUsage] = useState<any>(null)const [loading, setLoading]  = useState(false)useEffect(() => {const saved = localStorage.getItem("zion_partner_token")if (saved) setToken(saved)}, [])async function getToken() {const res = await fetch("/api/partners/token", {method: "POST";
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ apiKey })})const data = await res.json()if (data.token) {localStorage.setItem("zion_partner_token", data.token)setToken(data.token)const saved = null;
    if (saved) setToken(saved)}, [])async function getToken() {const res = await fetch('/api/partners/token', {method: 'POST';
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ apiKey })})const data = await res.json()if (data.token) {localStorage.setItem('zion_partner_token', data.token)setToken(data.token)}
  }async function fetchUsage() {setLoading(true)})const data = await res && res.json()setLoading(false)}
  async function regenerateKey() {const res = await fetch("/api/partners/key", {method: "POST";
      headers: token ? { Authorization: `Bearer ${token}` } : {}})const data = await res.json()}
  }
  return (const res = await fetch('/api/partners/usage', {headers: token ? { Authorization: `Bearer ${token}` } : {},})const data = await res.json()setUsage(data.summary |null)setLoading(false)}
  async function regenerateKey() {const res = await fetch('/api/partners/key', {method: 'POST';
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })const data = await res.json()if (data.apiKey) {alert(`New API Key: ${data.apiKey}`)if (data.apiKey) {alert(`New API Key: ${data.apiKey}`)}
  }
    const res = await fetch($2);
    const data = await res.json($2);
    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`)
    }
  }
=======
    const res = await fetch('/api/partners/key', {
      method: 'POST'}
<<<<<<< HEAD
}
      headers: token ? { Authorization: `Bearer ${token}` } : {}

};
  const data = await res.json()if (data.apiKey) {alert(`New API Key: ${data.apiKey}`)if (data.apiKey) {alert(`New API Key: ${data.apiKey}`)}

}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

      headers: token ? { Authorization: `Bearer ${token}` } : {}

}
  const data = await res.json()if (data.apiKey) {alert(`New API Key: ${data.apiKey}`)if (data.apiKey) {alert(`New API Key: ${data.apiKey}`)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

  return (
<div className='min-h-screen bg-gray-50 text-gray-900' />
      <Head>
        <title />Zion Partner Dashboard</title>
      </Head>
<<<<<<< HEAD
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-2">Partner Dashboard</h1>
        <p className="text-gray-600 mb-6">Manage access, view usage, and download SDKs.</p>

        {!token && (
    });
    const data = await res && res.json();
    setLoading(false)
  }
  async function regenerateKey() {
    const res = await fetch("/api/partners/key", {
      method: "POST"
      headers: token ? { Authorization: `Bearer ${token}` } : {}})
    const data = await res.json();
    }
  }
  return (
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
=======
      <div className='max-w-5xl mx-auto py-12 px-4' />
        <h1 className='text-3xl font-semibold mb-2' />Partner Dashboard</h1>
        <p className='text-gray-600 mb-6' />
          Manage access, view usage, and download SDKs.
        </p>
        {!token && (
          <div className='bg-white p-6 rounded-lg shadow mb-8'>
            <h2 className='text-lg font-medium mb-3'>Authenticate</h2>
            <div className='flex gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <input
                className='border rounded px-3 py-2 flex-1'
=======
              <input'
                className='border rounded px-3 py-2 flex-1''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                placeholder='Paste your API key'
          <div className='bg-white p-6 rounded-lg shadow mb-8' />
            <h2 className='text-lg font-medium mb-3' />Authenticate</h2>
            <div className='flex gap-2' />
              <input;
className='border rounded px-3 py-2 flex-1'}
                placeholder='Paste your API key'}
                value={apiKey}
                onChange={e = /> setApiKey(e && e.target.value)}
              />;
<<<<<<< HEAD
              <button;
                onClick={getToken}'
=======
              <button
                onClick={getToken}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <button;
onClick={getToken}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                className='bg-black text-white px-4 py-2 rounded'
               />
                Get JWT;
              </button>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-medium mb-2">API Keys</h3>
            <button onClick={regenerateKey} className="bg-gray-900 text-white px-3 py-2 rounded text-sm">Generate New Key</button>
            <p className="text-xs text-gray-500 mt-2">Old key becomes inactive.</p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-black text-white px-4 py-2 rounded'>;
                Get JWT;
              </button>            </div>;
          </div>;
        )}
          <div className="bg-white p-6 rounded-lg shadow mb-8">;
            <h2 className="text-lg font-medium mb-3">Authenticate</h2>;
            <div className="flex gap-2">;
              <input className="border rounded px-3 py-2 flex-1" placeholder="Paste your API key" value={apiKey} onChange={(e) => setApiKey(e && e.target.value)} />;
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>;
          </div>;
        )}
            <button
              onClick={fetchUsage}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>;
=======
<<<<<<< HEAD
=======
          <div className='bg-white p-6 rounded-lg shadow md:col-span-2'>
            <h3 className='font-medium mb-2'>Usage</h3>
origin/cursor/automate-test-improve-and-merge-code-2533
            <button
              onClick={fetchUsage}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>;
              {loading ? 'Loading...' : 'Refresh'}
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h3 className="font-medium mb-2">Usage</h3>
=======
            <button;
              onClick={fetchUsage}'
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>;'
              {loading ? 'Loading...' : 'Refresh'}"
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">"
            <h3 className="font-medium mb-2">Usage</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>
            {usage ? ("
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>"
                <div className="mt-3">"
                  <p className="font-medium">By Endpoint</p>"
                  <ul className="list-disc ml-6">
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          <div className='bg-white p-6 rounded-lg shadow md:col-span-2' />
            <h3 className='font-medium mb-2' />Usage</h3>
            <button;
onClick={fetchUsag}
}
<<<<<<< HEAD
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3' />;
=======
          <div className='bg-white p-6 rounded-lg shadow md:col-span-2'>
            <h3 className='font-medium mb-2'>Usage</h3>
origin/cursor/automate-test-improve-and-merge-code-2533
            <button
              onClick={fetchUsage}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              {loading ? 'Loading...' : 'Refresh'}
<<<<<<< HEAD
  return (<div className='min-h-screen bg-gray-50 text-gray-900'>;
      <Head>;
        <title>Zion Partner Dashboard</title>;
      </Head>;
      <div className='max-w-5xl mx-auto py-12 px-4'>;
        <h1 className='text-3xl font-semibold mb-2'>Partner Dashboard</h1>;
        <p className='text-gray-600 mb-6'>;
          Manage access, view usage, and download SDKs.;
        </p>;
        {!token && (<div className='bg-white p-6 rounded-lg shadow mb-8'>;
            <h2 className='text-lg font-medium mb-3'>Authenticate</h2>;
            <div className='flex gap-2'>;
              <input;
                className='border rounded px-3 py-2 flex-1';
                placeholder='Paste your API key';
                value={apiKey}
                onChange={e => setApiKey(e && e.target.value)}
              />;
              <button;
                onClick={getToken}className='bg-black text-white px-4 py-2 rounded'>;
                Get JWT;
              </button>            </div>;
          </div>;
        )}
          <div className="bg-white p-6 rounded-lg shadow mb-8">;
            <h2 className="text-lg font-medium mb-3">Authenticate</h2>;
            <div className="flex gap-2">;
              <input className="border rounded px-3 py-2 flex-1" placeholder="Paste your API key" value={apiKey} onChange={(e) => setApiKey(e && e.target.value)} />;
              <button onClick={getToken} className="bg-black text-white px-4 py-2 rounded">Get JWT</button>;
          </div>;
        )}className='bg-black text-white px-4 py-2 rounded';
              >;
                Get JWT;
              </button>;
            </div>;
          </div>;
        )}<div className='grid md:grid-cols-3 gap-6'>;
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </button>
            {usage ? (
              <div className='text-sm' />}
                <p />}
                  Total requests: <strong />{usage.totalRequests}</strong>
                </p>
                <div className='mt-3' />
                  <p className='font-medium' />By Endpoint</p>
                  <ul className='list-disc ml-6' />
                    {Object.entries(usage.byEndpoint |}
}).map(([k, v]) => (
                      <li key={k} />
                        {k}: {v as any}
                      </li>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h3 className="font-medium mb-2">Usage</h3>
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>
<<<<<<< HEAD
            {usage ? (
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>
                <div className="mt-3">
                  <p className="font-medium">By Endpoint</p>
                  <ul className="list-disc ml-6">
                    ))}
                  </ul>;
                </div>;
              </div>;
<<<<<<< HEAD
            ) : (<p className='text-gray-500 text-sm'>No usage yet.</p>            )}
          </div>;
        </div>;
              <p className="text-gray-500 text-sm">No usage yet.</p>;
                    {Object.entries(usage.byEndpoint || {}).map(([k, v]) => (
=======
            {usage ? ("
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>"
                <div className="mt-3">"
                  <p className="font-medium">By Endpoint</p>"
                  <ul className="list-disc ml-6">
                    {Object.entries(usage.byEndpoint |{}).map(([k, v]) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                      <li key={k}>{k}: {v as any}</li>
                    ))}
=======
<<<<<<< HEAD
            ) : (;'
              <p className='text-gray-500 text-sm'>No usage yet.</p>            )}
          </div>;
        </div>;"
              <p className="text-gray-500 text-sm">No usage yet.</p>;
=======
            ) : (<p className='text-gray-500 text-sm' />No usage yet.</p>            )}
          </div>;
        </div>;
              <p className=\"text-gray-500 text-sm\" />No usage yet.</p>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  </ul>
                </div>
              </div>
            ) : (
<<<<<<< HEAD
              <p className="text-gray-500 text-sm">No usage yet.</p>
=======
            )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
<p className='text-gray-500 text-sm'>No usage yet.</p>

<p className='text-gray-500 text-sm' />No usage yet.</p>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            )}
          </div>
        </div>

<<<<<<< HEAD
            )}
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
=======
<div className='bg-white p-6 rounded-lg shadow mt-6'>
          <h3 className='font-medium mb-2'>SDKs</h3>
origin/cursor/automate-test-improve-and-merge-code-2533
          <a
            className='text-blue-600 underline mr-4'
=======
          <a'
            className='text-blue-600 underline mr-4''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            href='/api/partners/sdk?type=rest'>;
            REST SDK;
          </a>;
<<<<<<< HEAD
          <a'
            className='text-blue-600 underline''
=======
          <a
            className='text-blue-600 underline'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            href='/api/partners/sdk?type=graphql'>;
            GraphQL SDK;
          </a>        </div>;
      </div>;
    </div>;
  );
          </div>

        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<div className='bg-white p-6 rounded-lg shadow mt-6' />
          <h3 className='font-medium mb-2' />SDKs</h3>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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

        </div>
  )}
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
=======
          </div>

        </div>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            href='/api/partners/sdk?type=graphql'
              />
            GraphQL SDK
          </a>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
})
const data = await res.json ()
setUsage (data.summary || null)
setLoading (false)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
);
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
