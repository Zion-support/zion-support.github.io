

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

export default function PartnerDashboard() {
  const [apiKey, setApiKey] = useState('');  const [token, setToken] = useState<string | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState<string | null>(null);

  const [usage, setUsage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("zion_partner_token");
    if (saved) setToken(saved)
  }, []);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  async function getToken() {
    const res = await fetch("/api/partners/token", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify({ apiKey })})
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("zion_partner_token", data.token);
      setToken(data.token)


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
    setLoading(true);


    });
    const data = await res && res.json();
    if (data && data.apiKey) {;
      alert(`New API Key: ${data && data.apiKey}`);    }
  }
  return (

    const res = await fetch("/api/partners/usage", {
      headers: token ? { Authorization: `Bearer ${token}` } : {}}),
    const data = await res.json();
    setUsage(data.summary || null);

    setLoading(false)
  }
  async function regenerateKey() {
    const res = await fetch("/api/partners/key", {
      method: "POST"
      headers: token ? { Authorization: `Bearer ${token}` } : {}})
    const data = await res.json();
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
=======

    if (data.apiKey) {
      alert(`New API Key: ${data.apiKey}`)
    }
  }
  return (
                    ))}


                    ))}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No usage yet.</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            )}

          </div>;
        </div>;
        <div className='bg-white p-6 rounded-lg shadow mt-6'>;
          <h3 className='font-medium mb-2'>SDKs</h3>;

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
      </div>
    </div>
);
}
          </div>

        </div>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
