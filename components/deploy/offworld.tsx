
import { useState  } from 'react';
import Head from 'next/head',
import {useState} from 'react';
import Head from 'next/head';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const [error, setError] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  async function handleDeploy() {
import {useState} from 'react';


    try {;
      const res = await fetch('/api/offworld/deploy', { method: 'POST' });      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),;
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data?.error || 'Deploy failed');
      setCid(data && data.cid);
      setProvider(data && data.provider || '');
      setStatus('Deployed successfully');
    } catch (e: any) {;
      setError(e && e.message);
      setStatus('');    }
  }
  return (


  }
  return (
    <div className='min-h-screen p-8'>
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
      <h1 className='text-2xl font-bold mb-4'>Zion OS Offworld Deploy</h1>
      <p className='mb-6'>
        Export the site and pin it to IPFS for disconnected/offworld use.
      </p>
      <button
        className='px-4 py-2 bg-black text-white rounded'
        onClick={handleDeploy}>;
        Deploy to IPFS;
      </button>;
      {status && <p className='mt-4 text-green-600'>{status}</p>}
      {error && <p className='mt-4 text-red-600'>{error}</p>}
      {cid && (;
        <div className='mt-6 space-y-2'>;
          <div>;
            CID: <code className='break-all'>{cid}</code>;
          </div>;
          {provider && <div>Provider: {provider}</div>}
          <div className='text-sm text-gray-600'>;
            You can open via any IPFS gateway or offline node.;
          </div>        </div>;
      )}
    </div>;
  );
}      <Head>;
        <title>Zion Offworld Deploy</title>;
      </Head>;
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>;
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>;
      <button className="px-4 py-2 bg-black text-white rounded" onClick={handleDeploy}>Deploy to IPFS</button>;


      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {cid && (;
        <div className="mt-6 space-y-2">;
          <div>CID: <code className="break-all">{cid}</code></div>;
          {provider && <div>Provider: {provider}</div>}



  }
  return (

    <div className='min - h-screen p - 8'>      set_status ('Deployed successfully');
    } catch (e: any) {
      set_error (e.message),
      set_status ('');
  }
  return (
    <div className='min - h-screen p - 8'>;
      <Head>;
        <title > Zion Offworld Deploy</title>;
      </Head>;
      <h1 className='text - 2xl font - bold mb - 4'>Zion OS Offworld Deploy</h1>;
      <p className='mb - 6'>;
        Export the site and pin it to IPFS for disconnected / offworld use.;
      </p>;
      <button;
        className='px - 4 py - 2 bg - black text - white rounded';
        on_click={handle_deploy}
      >;
        Deploy to IPFS;
      </button>;
      {status && <p className='mt - 4 text - green - 600'>{status}</p>}
      {error && <p className='mt - 4 text - red - 600'>{error}</p>}
      {cid && (
        <div className='mt - 6 space - y-2'>;
          <div>;
            CID: <code className='break - all'>{cid}</code>;
          </div>;
          {provider && <div > Provider: {provider}</div>}
          <div className='text - sm text - gray - 600'>;
            You can open via any IPFS gateway or offline node.;
          </div>        </div>)}
    </div>);
}      <Head>;
        <title > Zion Offworld Deploy</title>;
      </Head>;
      <h1 className="text - 2xl font - bold mb - 4">Zion OS Offworld Deploy</h1>;
      <p className="mb - 6">Export the site and pin it to IPFS for disconnected / offworld use.</p>;
      <button className="px - 4 py - 2 bg - black text - white rounded" on_click={handle_deploy}>Deploy to IPFS</button>;
      {status && <p className="mt - 4 text - green - 600">{status}</p>}
      {error && <p className="mt - 4 text - red - 600">{error}</p>}
      {cid && (
        <div className="mt - 6 space - y-2">;
          <div > CID: <code className="break - all">{cid}</code></div>;
          {provider && <div > Provider: {provider}</div>}
          <div className="text - sm text - gray - 600">You can open via any IPFS gateway or offline node.</div>;
        </div>)}
    </div>);

  async function handleDeploy() {
    setStatus('Exporting and deploying to IPFS...'),
    setError(''),
    setCid(null),
    setProvider(''),
    try {
      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Deploy failed'),
      setCid(data.cid),
      setProvider(data.provider || ''),
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message),
      setStatus('')
    }

  }

  return (
    <div className=&quot;min-h-screen p-8&quot;>
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
      <h1 className=&quot;text-2xl font-bold mb-4&quot;>Zion OS Offworld Deploy</h1>
      <p className=&quot;mb-6&quot;>Export the site and pin it to IPFS for disconnected/offworld use.</p>
      <button className=&quot;px-4 py-2 bg-black text-white rounded&quot; onClick={handleDeploy}>Deploy to IPFS</button>
      {status && <p className=&quot;mt-4 text-green-600&quot;>{status}</p>}
      {error && <p className=&quot;mt-4 text-red-600&quot;>{error}</p>}
      {cid && (
        <div className=&quot;mt-6 space-y-2&quot;>
          <div>CID: <code className=&quot;break-all&quot;>{cid}</code></div>
          {provider && <div>Provider: {provider}</div>}
          <div className=&quot;text-sm text-gray-600&quot;>You can open via any IPFS gateway or offline node.</div>
        </div>
      )}
    </div>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
