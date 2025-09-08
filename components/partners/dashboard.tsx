import { useEffect, useState  } from 'react';
import Head from 'next/head';

  const [usage, setUsage] = useState<any>(null);


  const [loading, setLoading] = useState(false);


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


          <div className='bg-white p-6 rounded-lg shadow md:col-span-2'    />
            <h3 className='font-medium mb-2'    />Usage</h3>
            <button;
onClick={fetchUsag}
}
              className='bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3'    />;
              {loading ? 'Loading...' : 'Refresh'}

                <div className='mt-3'    />
                  <p className='font-medium'    />By Endpoint</p>
                  <ul className='list-disc ml-6'    />
                    {Object.entries(usage.byEndpoint |}



          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">

            <h3 className="font-medium mb-2">Usage</h3>
            <button onClick={fetchUsage} className="bg-gray-900 text-white px-3 py-2 rounded text-sm mb-3">{loading ? "Loading..." : "Refresh"}</button>
            {usage ? (
              <div className="text-sm">
                <p>Total requests: <strong>{usage.totalRequests}</strong></p>
                <div className="mt-3">
                  <p className="font-medium">By Endpoint</p>
                  <ul className="list-disc ml-6">











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





