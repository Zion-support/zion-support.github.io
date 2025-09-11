
import { useState } from 'react';
import Head from 'next/head';

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

    <div className='min-h-screen p-8'>      setStatus('Deployed successfully');
    } catch (e: any) {;
      setError(e && e.message),;
      setStatus('');

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

=======
    <div className="min-h-screen p-8">
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>
      <button className="px-4 py-2 bg-black text-white rounded" onClick={handleDeploy}>Deploy to IPFS</button>

      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {cid && (;
        <div className="mt-6 space-y-2">;
          <div>CID: <code className="break-all">{cid}</code></div>;
          {provider && <div>Provider: {provider}</div>}


=======
import Head from 'next / head';
export default /**
 * OffworldDeploy - Function description
 */
function OffworldDeploy() {
  const [cid, set_cid] = useState < string | null>(null);
  const [status, set_status] = useState < string>('');
  const [error, set_error] = useState < string>('');
  const [provider, set_provider] = useState < string>('');
;
  async /**
 * handle_deploy - Function description
 */
function handle_deploy() {
    set_status ('Exporting and deploying to IPFS...');
    set_error ('');
    set_cid (null);
    set_provider ('');
    try {
      const res = await fetch ('/api / offworld / deploy', { method: 'POST' });      const res = await fetch ('/api / offworld / deploy', { method: 'POST' }),
      const data = await res.json ();
      if (throw new Error (data?.error || 'Deploy failed')) {
  $2
}
      set_cid (data.cid);
      set_provider (data.provider || '');
      set_status ('Deployed successfully');
    } catch (e: any) {
      set_error (e.message);
      set_status ('');    }
  }
  return (


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
