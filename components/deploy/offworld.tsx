<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import Head from 'next/head',
=======
import { useState } from 'react';
import Head from 'next/head';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function OffworldDeploy() {
  const [cid, setCid] = useState<string | null>(null),
  const [status, setStatus] = useState<string>(''),
  const [error, setError] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  async function handleDeploy() {
=======
import {useState} from 'react';
import Head from 'next/head';
export default function OffworldDeploy() {;
  const [cid, setCid] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [provider, setProvider] = useState<string>('');

  async function handleDeploy() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setStatus('Exporting and deploying to IPFS...');
    setError('');
    setCid(null);
    setProvider('');
<<<<<<< HEAD
    try {
<<<<<<< HEAD
=======
      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Deploy failed');
      setCid(data.cid);
      setProvider(data.provider || '');
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message);
      setStatus('')
    }
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

      const res = await fetch('/api/offworld/deploy', { method: 'POST' });      const res = await fetch('/api/offworld/deploy', { method: 'POST' })
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Deploy failed');
      setCid(data.cid);
      setProvider(data.provider |'');
=======
    try {;
      const res = await fetch('/api/offworld/deploy', { method: 'POST' });      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),;
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data?.error || 'Deploy failed');
      setCid(data && data.cid);
      setProvider(data && data.provider || '');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setStatus('Deployed successfully');
    } catch (e: any) {;
      setError(e && e.message);
      setStatus('');    }

  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='min-h-screen p-8'>      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message)
      setStatus('')
=======
    <div className='min-h-screen p-8'>      setStatus('Deployed successfully');
    } catch (e: any) {;
      setError(e && e.message),;
      setStatus('');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
    <div className='min-h-screen p-8'>;
      <Head>;
        <title>Zion Offworld Deploy</title>;
      </Head>;
      <h1 className='text-2xl font-bold mb-4'>Zion OS Offworld Deploy</h1>;
      <p className='mb-6'>;
        Export the site and pin it to IPFS for disconnected/offworld use.;
      </p>;
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
=======
    <div className="min-h-screen p-8">
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>
      <button className="px-4 py-2 bg-black text-white rounded" onClick={handleDeploy}>Deploy to IPFS</button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {cid && (;
        <div className="mt-6 space-y-2">;
          <div>CID: <code className="break-all">{cid}</code></div>;
          {provider && <div>Provider: {provider}</div>}
<<<<<<< HEAD
          <div className="text-sm text-gray-600">You can open via any IPFS gateway or offline node.</div>;
        </div>;
      )}
<<<<<<< HEAD
    </div>
);
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          <div className="text-sm text-gray-600">You can open via any IPFS gateway or offline node.</div>
        </div>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
