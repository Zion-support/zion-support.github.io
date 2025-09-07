<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
import { useState  } from 'react';
import Head from 'next/head',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
export default function OffworldDeploy() {
  const [cid, setCid] = useState<string | null>(null),
  const [status, setStatus] = useState<string>(''),
export default function OffworldDeploy() {;
  const [cid, setCid] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

import { useState } from 'react';
import Head from 'next/head';

import { useState } from 'react';
import Head from 'next/head';
export default function OffworldDeploy() {
  const [cid, setCid] = useState<string | null>(null),
  const [status, setStatus] = useState<string>(''),
  const [error, setError] = useState<string>(''),
  const [provider, setProvider] = useState<string>(''),

  async function handleDeploy() {
    setStatus($2);
    setError($2);
    setCid($2);
    setProvider($2);
    try {
<<<<<<< HEAD
      const res = await fetch($2);
      const data = await res.json($2);
      if (!res.ok) throw new Error($2);
      setCid($2);
      setProvider($2);
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError($2);
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
      const res = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      setStatus('')
    }
  }

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>

;
export default function OffworldDeploy() {const [cid, setCid] = useState<string | null>(null),const [status, setStatus] = useState<string>(''),export default function OffworldDeploy() {const [cid, setCid] = useState<string | null>(null)const [status, setStatus]  = useState<string>('')import { useState  } from 'react';
import Head from 'next/head';
export default function OffworldDeploy() {const [cid, setCid] = useState<string | null>(null),const [status, setStatus] = useState<string>(''),const [error, setError] = useState<string>('')const [provider, setProvider] = useState<string>('')async function handleDeploy() {import { useState } from 'react';
    setStatus('Exporting and deploying to IPFS...')setError('')setCid(null)setProvider('')const res = await fetch('/api/offworld/deploy', { method: 'POST' })const res = await fetch('/api/offworld/deploy', { method: 'POST' })const data = await res.json()if (!res.ok) throw new Error(data?.error |'Deploy failed')setCid(data.cid)setProvider(data.provider |'')try {const res = await fetch('/api/offworld/deploy', { method: 'POST' })const res = await fetch('/api/offworld/deploy', { method: 'POST' }),const data = await res && res.json()if (!res && res.ok) throw new Error(data?.error || 'Deploy failed')setCid(data && data.cid)setProvider(data && data.provider || '')setStatus('Deployed successfully')} catch (e: any) {setError(e && e.message)setStatus('')}const res = null;
      setStatus('')}
      const data = await res.json()if (!res.ok) throw new Error(data?.error |'Deploy failed')setCid(data.cid)setProvider(data.provider || '')setStatus('Deployed successfully')} catch (e: any) {setError(e.message)setStatus('')}}
  return (<div className='min-h-screen p-8'>      setStatus('Deployed successfully')} catch (e: any) {setError(e.message)setStatus('')<div className='min-h-screen p-8'>      setStatus('Deployed successfully')} catch (e: any) {setError(e && e.message),setStatus('')}
  return (<div className='min-h-screen p-8'>;
      <Head>;
        <title>Zion Offworld Deploy</title>;
      </Head>;
      <h1 className='text-2xl font-bold mb-4'>Zion OS Offworld Deploy</h1>;
      <p className='mb-6'>;
        Export the site and pin it to IPFS for disconnected/offworld use.;
      </p>;
      <button;
        className='px-4 py-2 bg-black text-white rounded';
        onClick={handleDeploy}>;
        Deploy to IPFS;
      </button>;
      {status && <p className='mt-4 text-green-600'>{status}</p>}
      {error && <p className='mt-4 text-red-600'>{error}</p>}
      {cid && (<div className='mt-6 space-y-2'>;
          <div>;
            CID: <code className='break-all'>{cid}</code>;
          </div>;
          {provider && <div>Provider: {provider}</div>}<div className='text-sm text-gray-600'>;
            You can open via any IPFS gateway or offline node.;
          </div>        </div>;
      )}
    </div>;
  )}      <Head>;
        <title>Zion Offworld Deploy</title>;
      </Head>;
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>;
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>;
      <button className="px-4 py-2 bg-black text-white rounded" onClick={handleDeploy}>Deploy to IPFS</button>;
      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {cid && (<div className="mt-6 space-y-2">;
          <div>CID: <code className="break-all">{cid}</code></div>;
          {provider && <div>Provider: {provider}</div>}
import Head from 'next / head';
export default /**;
 * OffworldDeploy - Function description;
 */;
function OffworldDeploy() {const [cid, set_cid] = useState < string | null>(null)const [status, set_status] = useState < string>('')const [error, set_error] = useState < string>('')const [provider, set_provider]  = useState < string>('')async /**;
 * handle_deploy - Function description;
 */;
function handle_deploy() {set_status ('Exporting and deploying to IPFS...')set_error ('')set_cid (null)set_provider ('')try {const res = await fetch ('/api / offworld / deploy', { method: 'POST' })const res = await fetch ('/api / offworld / deploy', { method: 'POST' }),const data = await res.json ()if (throw new Error (data?.error || 'Deploy failed')) {$2;
}}
      set_cid (data.cid)set_provider (data.provider || '')set_status ('Deployed successfully')} catch (e: any) {set_error (e.message)set_status ('')}
  }
  return (<div className='text-sm text-gray-600'>;
            You can open via any IPFS gateway or offline node.;
          </div>;
        </div>;
      )}
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

<<<<<<< HEAD
    }
      set_cid (data.cid);
      set_provider (data.provider || '');
      set_status ('Deployed successfully');
    } catch (e: any) {
      set_error (e.message);
      set_status ('');    }
  }
  return (


  )}
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>
      <button className="px-4 py-2 bg-black text-white rounded" onClick={handleDeploy}>Deploy to IPFS</button>
      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {cid && (
        <div className="mt-6 space-y-2">
          <div>CID: <code className="break-all">{cid}</code></div>
          {provider && <div>Provider: {provider}</div>}
          <div className="text-sm text-gray-600">You can open via any IPFS gateway or offline node.</div>
        </div>
      )}
    </div>
  )
}
=======
<<<<<<< HEAD
=======
async function handleDeploy () {
  setStatus ('Exporting and deploying to IPFS...')
setError ('')
setCid (null)
setProvider ('')
try {
  
}return (<div className="min-h-screen p-8" > <Head> <title>Zion Offworld Deploy</title> </Head> </div>) 
}</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
    }
  }

  return (

        </div>
      )}
    </div>
  );
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
