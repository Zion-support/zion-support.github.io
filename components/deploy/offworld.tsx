import { useState } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function OffworldDeploy() {
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
<<<<<<< HEAD
<<<<<<< HEAD
      const res = await fetch('/api/offworld/deploy', { method: 'POST' });
=======
      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Deploy failed');
      setCid(data.cid);
      setProvider(data.provider || '');
<<<<<<< HEAD
      setStatus('Deployed successfully');
    } catch (e: any) {
      setError(e.message);
      setStatus('');    }
  }

  return (
    <div className='min-h-screen p-8'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setStatus('Deployed successfully');
    } catch (e: any) {
      setError(e.message);
      setStatus('');
=======
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message);
      setStatus('')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message);
      setStatus('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='min-h-screen p-8'>
=======
    <div className="min-h-screen p-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
      <h1 className='text-2xl font-bold mb-4'>Zion OS Offworld Deploy</h1>
      <p className='mb-6'>
        Export the site and pin it to IPFS for disconnected/offworld use.
      </p>
      <button
        className='px-4 py-2 bg-black text-white rounded'
        onClick={handleDeploy}
      >
        Deploy to IPFS
      </button>
      {status && <p className='mt-4 text-green-600'>{status}</p>}
      {error && <p className='mt-4 text-red-600'>{error}</p>}
      {cid && (
        <div className='mt-6 space-y-2'>
          <div>
            CID: <code className='break-all'>{cid}</code>
          </div>
          {provider && <div>Provider: {provider}</div>}
<<<<<<< HEAD
          <div className='text-sm text-gray-600'>
            You can open via any IPFS gateway or offline node.
          </div>        </div>
      )}
    </div>
  );
}
=======
<<<<<<< HEAD
          <div className='text-sm text-gray-600'>
            You can open via any IPFS gateway or offline node.
          </div>
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
      {cid && (
        <div className="mt-6 space-y-2">
          <div>CID: <code className="break-all">{cid}</code></div>
          {provider && <div>Provider: {provider}</div>}
          <div className="text-sm text-gray-600">You can open via any IPFS gateway or offline node.</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="text-sm text-gray-600">You can open via any IPFS gateway or offline node.</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
