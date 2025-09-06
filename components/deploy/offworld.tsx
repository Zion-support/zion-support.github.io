import { useState  } from 'react';
import Head from 'next/head',
import {useState} from 'react';
import Head from 'next/head';

export default function OffworldDeploy() {
  const [cid, setCid] = useState<string | null>(null),
  const [status, setStatus] = useState<string>(''),
export default function OffworldDeploy() {;
  const [cid, setCid] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  async function handleDeploy() {
    setStatus('Exporting and deploying to IPFS...');
    setError('');
    setCid(null);
    setProvider('');
    try {

      const res = await fetch('/api/offworld/deploy', { method: 'POST' });      const res = await fetch('/api/offworld/deploy', { method: 'POST' })
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Deploy failed');
      setCid(data.cid);
      setProvider(data.provider |'');
      setStatus('Deployed successfully');
    } catch (e: any) {
      setError(e.message);
      setStatus('');    }
=======
  }
  return (
    <div className='min-h-screen p-8'>      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message)
      setStatus('')

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
  return (

    <div className='min-h-screen p-8'>      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message)
      setStatus('')
  }
  return (
    <div className='min-h-screen p-8'>

    }
  }

  return (

        </div>
      )}
    </div>
  );
      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {cid && (;
        <div className="mt-6 space-y-2">;
          <div>CID: <code className="break-all">{cid}</code></div>;
          {provider && <div>Provider: {provider}</div>}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
