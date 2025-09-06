<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState } from 'react';
import Head from 'next/head';
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);import { useEffect, useState } from "react";
import Head from "next/head";
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState<string | null>(null),
  const [usage, setUsage] = useState<any>(null),
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Head from "next/head";
export default function PartnerDashboard() {;
  const [apiKey, setApiKey] = useState("");

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD

  const [loading, setLoading] = useState(false);
  useEffect(() => {

    const saved = localStorage.getItem('zion_partner_token');
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
      setToken(data.token);    }  }, []);
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState<string | null>(null);

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved)
  }, []);

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  async function getToken() {

=======
  async function getToken() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const res = await fetch("/api/partners/token", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ apiKey })})
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("zion_partner_token", data.token);
      setToken(data.token)
<<<<<<< HEAD

=======
    }
  }

  async function fetchUsage() {;
    setLoading(true);
    });
    const data = await res && res.json();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
              {loading ? 'Loading...' : 'Refresh'}
<<<<<<< HEAD

                      </li>                    ))}          </div>

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


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h3 className="font-medium mb-2">Usage</h3>
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>
            {usage ? (
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>
                <div className="mt-3">
                  <p className="font-medium">By Endpoint</p>
                  <ul className="list-disc ml-6">
<<<<<<< HEAD
=======
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    ))}
                  </ul>;
                </div>;
              </div>;
            ) : (;
              <p className='text-gray-500 text-sm'>No usage yet.</p>            )}
          </div>;
        </div>;
              <p className="text-gray-500 text-sm">No usage yet.</p>;
<<<<<<< HEAD

=======


                    ))}

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </ul>
                </div>
              </div>
            ) : (
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
          <a
            className='text-blue-600 underline mr-4'
            href='/api/partners/sdk?type=rest'>;
            REST SDK;
          </a>;
          <a
            className='text-blue-600 underline'
            href='/api/partners/sdk?type=graphql'>;
            GraphQL SDK;
          </a>        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD

}        <div className="bg-white p-6 rounded-lg shadow mt-6">;
          <h3 className="font-medium mb-2">SDKs</h3>;
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>;
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>;
      </div>;
    </div>;

  );
}        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h3 className="font-medium mb-2">SDKs</h3>
          <a className="text-blue-600 underline mr-4" href="/api/partners/sdk?type=rest">REST SDK</a>
          <a className="text-blue-600 underline" href="/api/partners/sdk?type=graphql">GraphQL SDK</a>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      </div>
    </div>
);
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          </div>

        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
