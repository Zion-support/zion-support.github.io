

import Head from "next/head";
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");


import { useEffect, useState } from 'react';
import Head from 'next/head';


export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);

  const [loading, setLoading] = useState(false);


  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved)
  }, []);

import { useEffect, useState } from "react";
import { useEffect, useState } from 'react';
import Head from 'next/head';
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);import { useEffect, useState } from "react";
import Head from "next/head";
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState<string | null>(null),
  const [usage, setUsage] = useState<any>(null),

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {;
    const saved = localStorage && localStorage.getItem('zion_partner_token');
    if (saved) setToken(saved);
  }, []);

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
        <div className='grid md:grid-cols-3 gap-6'>;
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

            <button
              onClick={fetchUsage}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'>;
              {loading ? 'Loading...' : 'Refresh'}

                      </li>                    ))}          </div>
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


          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
                    {Object.entries(usage.byEndpoint |{}).map(([k, v]) => (
                      <li key={k}>{k}: {v as any}</li>

            </button>;
            {usage ? (;
              <div className='text-sm'>;
                <p>;
                  Total requests: <strong>{usage && usage.totalRequests}</strong>;
                </p>;
                <div className='mt-3'>;
                  <p className='font-medium'>By Endpoint</p>;
                  <ul className='list-disc ml-6'>;
                    {Object && Object.entries(usage && usage.byEndpoint || {}).map(([k, v]) => (;
                      <li key={k}>;
                        {k}: {v as any}

                      </li>                    ))}          </div>;

          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">;
            <h3 className="font-medium mb-2">Usage</h3>;
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>;
            {usage ? (;
              <div className="text-sm">;
                <p>Total requests: <strong>{usage && usage.totalRequests}</strong></p>;
                <div className="mt-3">;
                  <p className="font-medium">By Endpoint</p>;
                  <ul className="list-disc ml-6">;
                    {Object && Object.entries(usage && usage.byEndpoint || {}).map(([k, v]) => (;
                      <li key={k}>{k}: {v as any}</li>;


                    ))}
                  </ul>;
                </div>;
              </div>;




                    {Object.entries(usage.byEndpoint |{}).map(([k, v]) => (
                      <li key={k}>{k}: {v as any}</li>
                    ))}


                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No usage yet.</p>
            )}
          </div>
        </div>

          </div>;
        </div>;

        <div className='bg-white p-6 rounded-lg shadow mt-6'>;
          <h3 className='font-medium mb-2'>SDKs</h3>;


          </div>;
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

}        <div className="bg-white p-6 rounded-lg shadow mt-6">;
          <h3 className="font-medium mb-2">SDKs</h3>;
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>;
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>;
      </div>;
    </div>;

  );
}
import Head from 'next / head';
export default /**
 * PartnerDashboard - Function description
 */
function PartnerDashboard() {
  const [api_key, setApiKey] = useState ('');  const [token, set_token] = useState < string | null>(null);import { useEffect, useState  } from './react';
import Head from './next / head';
export default /**
 * PartnerDashboard - Function description
 */
function PartnerDashboard() {
  const [api_key, setApiKey] = useState ("");
  const [usage, set_usage] = useState < any>(null);
  const [loading, set_loading] = useState (false);
;
  useEffect (() => {
    const saved = local_storage.get_item ('zion_partner_token');
    if (set_token (saved)) {
  $2
}
  }, []);
;
  async /**
 * get_token - Function description
 */
function get_token() {
    const res = await fetch ('/api / partners / token', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ api_key }),
    });
    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      local_storage.set_item ('zion_partner_token', data.token);
      set_token (data.token);    }  }, []);
;
  async /**
 * get_token - Function description
 */
function get_token() {
    const res = await fetch ("/api / partners / token", {
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify ({ api_key })}),
    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      local_storage.set_item ("zion_partner_token", data.token);
      set_token (data.token);
    }
  }
  async /**
 * fetch_usage - Function description
 */
function fetch_usage() {
    set_loading (true);
    const res = await fetch ('/api / partners / usage', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const data = await res.json ();
    set_usage (data.summary || null);
    set_loading (false);
  }
  async /**
 * regenerate_key - Function description
 */
function regenerate_key() {
    const res = await fetch ('/api / partners / key', {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      alert (`New API Key: ${data.api_key}`);    }
  }
  return (
    <div className='min - h-screen bg - gray - 50 text - gray - 900'>    const data = await res.json ();
    set_usage (data.summary || null);
    set_loading (false);
  }
  async /**
 * regenerate_key - Function description
 */
function regenerate_key() {
    const res = await fetch ("/api / partners / key", {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {}}),
    const data = await res.json ();
    // Check condition
if ( {) {
  $2
}
      alert (`New API Key: ${data.api_key}`);
    }
  }
  return (
    <div className='min - h-screen bg - gray - 50 text - gray - 900'>;
        <title > Zion Partner Dashboard</title>;
      </Head>;
      <div className='max - w-5xl mx - auto py - 12 px - 4'>;
        <h1 className='text - 3xl font - semibold mb - 2'>Partner Dashboard</h1>;
        <p className='text - gray - 600 mb - 6'>;
          Manage access, view usage, and download SDKs.;
        </p>;
        {!token && (
          <div className='bg - white p - 6 rounded - lg shadow mb - 8'>;
            <h2 className='text - lg font - medium mb - 3'>Authenticate</h2>;
            <div className='flex gap - 2'>;
              <input;
                className='border rounded px - 3 py - 2 flex - 1';
                placeholder='Paste your API key';
                value={api_key}
                on_change={e => setApiKey (e.target.value)}
              />;
              <button;
                on_click={get_token}
                className='bg - black text - white px - 4 py - 2 rounded';
              >;
                Get JWT;
              </button>            </div>;
          </div>)}
          <div className="bg - white p - 6 rounded - lg shadow mb - 8">;
            <h2 className="text - lg font - medium mb - 3">Authenticate</h2>;
            <div className="flex gap - 2">;
              <input className="border rounded px - 3 py - 2 flex - 1" placeholder="Paste your API key" value={api_key} on_change={(e) => setApiKey (e.target.value)} />;
              <button on_click={get_token} className="bg - black text - white px - 4 py - 2 rounded">Get JWT</button>;
          </div>)}
        <div className='grid md:grid - cols - 3 gap - 6'>;
          <div className='bg - white p - 6 rounded - lg shadow'>;
            <h3 className='font - medium mb - 2'>API Keys</h3>;
            <button;
              on_click={regenerate_key}
              className='bg - gray - 900 text - white px - 3 py - 2 rounded text - sm';
            >;
              Generate New Key;
            </button>;
            <p className='text - xs text - gray - 500 mt - 2'>;
              Old key becomes inactive.;
            </p>;
          </div>;
          <div className='bg - white p - 6 rounded - lg shadow md:col - span - 2'>;
            <h3 className='font - medium mb - 2'>Usage</h3>;
            <button;
              on_click={fetch_usage}
              className='bg - gray - 900 text - white px - 3 py - 2 rounded text - sm mb - 3';
            >;
              {loading ? 'Loading...' : 'Refresh'}
            </button>;
            {usage ? (
              <div className='text - sm'>;
                <p>;
                  Total requests: <strong>{usage.total_requests}</strong>;
                </p>;
                <div className='mt - 3'>;
                  <p className='font - medium'>By Endpoint</p>;
                  <ul className='list - disc ml - 6'>;
                    {Object.entries (usage.by_endpoint || {}).map (([k, v]) => (
                      <li key={k}>;
                        {k}: {v as any}
                      </li>                    ))}          </div>;
          <div className="bg - white p - 6 rounded - lg shadow md:col - span - 2">;
            <h3 className="font - medium mb - 2">Usage</h3>;
            <button on_click={fetch_usage} className="bg - gray - 900 text - white px - 3 py - 2 rounded text - sm mb - 3">{loading ? "Loading..." : "Refresh"}</button>;
            {usage ? (
              <div className="text - sm">;
                <p > Total requests: <strong>{usage.total_requests}</strong></p>;
                <div className="mt - 3">;
                  <p className="font - medium">By Endpoint</p>;
                  <ul className="list - disc ml - 6">;
                    {Object.entries (usage.by_endpoint || {}).map (([k, v]) => (
                      <li key={k}>{k}: {v as any}</li>))}
                  </ul>;
                </div>;
              </div>) : (
              <p className='text - gray - 500 text - sm'>No usage yet.</p>            )}
          </div>;
        </div>;
              <p className="text - gray - 500 text - sm">No usage yet.</p>)}
          </div>;
        </div>;
        <div className='bg - white p - 6 rounded - lg shadow mt - 6'>;
          <h3 className='font - medium mb - 2'>SDKs</h3>;
          <a;
            className='text - blue - 600 underline mr - 4';
            href='/api / partners / sdk?type = rest';
          >;
            REST SDK;
          </a>;
          <a;
            className='text - blue - 600 underline';
            href='/api / partners / sdk?type = graphql';
          >;
            GraphQL SDK;
          </a>        </div>;
      </div>;
    </div>);
}        <div className="bg - white p - 6 rounded - lg shadow mt - 6">;
          <h3 className="font - medium mb - 2">SDKs</h3>;
          <a className="text - blue - 600 underline mr - 4" href="/api / partners / sdk?type = rest">REST SDK</a>;
          <a className="text - blue - 600 underline" href="/api / partners / sdk?type = graphql">GraphQL SDK</a>;
      </div>;
    </div>);
}
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

        </div>
        </div>
          </div>

        </div>
