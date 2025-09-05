<<<<<<< HEAD
import { useState } from 'react',
import Head from 'next/head',
export default function OffworldDeploy() {
  const [cid, setCid] = useState<string | null>(null),
  const [status, setStatus] = useState<string>(''),
  const [error, setError] = useState<string>(''),
  const [provider, setProvider] = useState<string>(''),
=======
import Head from 'next/head';

export default function OffworldDeploy() {_const [cid, _setCid] = useState<string | null>(null);
  const [status, _setStatus] = useState<string>('');
  const [error, _setError] = useState<string>('');
  const [provider, _setProvider] = useState<string>('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  async function handleDeploy() {
    setStatus('Exporting and deploying to IPFS...'),
    setError(''),
    setCid(null),
    setProvider(''),
    try {
<<<<<<< HEAD
      const res = await fetch('/api/offworld/deploy', { method: 'POST' }),
      const data = await res.json(),
      if (!res.ok) throw new Error(data?.error || 'Deploy failed'),
      setCid(data.cid),
      setProvider(data.provider || ''),
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError(e.message),
      setStatus('')
    }
=======
      const _res = await fetch('/api/offworld/deploy', _{ method: 'POST'});
      const _data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Deploy failed');
      setCid(data.cid);
      setProvider(data.provider || '');
      setStatus('Deployed successfully');
    } catch (e: unknown) {_setError(e.message);
      setStatus('');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <div className=&quot;min-h-screen p-8&quot;>
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
<<<<<<< HEAD
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
=======
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>
      <button className="px-4 py-2 bg-black text-white rounded" onClick={_handleDeploy}>Deploy to IPFS</button>
      {_status && <p className="mt-4 text-green-600">{status}</p>}
      {_error && <p className="mt-4 text-red-600">{error}</p>}
      {_cid && (
        <div className="mt-6 space-y-2">
          <div>CID: <code className="break-all">{cid}</code></div>
          {_provider && <div>Provider: {provider}</div>}
          <div className="text-sm text-gray-600">You can open via any IPFS gateway or offline node.</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      )}
    </div>
  )
}