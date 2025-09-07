
      </Head>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

;
export default function OffworldDeploy() {const [cid, setCid] = useState<string | null>(null),const [status, setStatus] = useState<string>('),export default function OffworldDeploy() {const [cid, setCid] = useState<string | null>(null)const [status, setStatus]  = useState<string>(')import { useState  } from react';
import Head from 'next/head;
export default function OffworldDeploy() {const [cid, setCid] = useState<string | null>(null),const [status, setStatus] = useState<string>('),const [error, setError] = useState<string>(')const [provider, setProvider] = useState<string>(')async function handleDeploy() {import { useState } from 'react;
    setStatus(Exporting and deploying to IPFS...')setError(')setCid(null)setProvider(')const res = await fetch('/api/offworld/deploy, { method: POST' })const res = await fetch('/api/offworld/deploy, { method: POST' })const data = await res.json()if (!res.ok) throw new Error(data?.error |'Deploy failed)setCid(data.cid)setProvider(data.provider |')try {const res = await fetch('/api/offworld/deploy, { method: POST' })const res = await fetch('/api/offworld/deploy, { method: POST' }),const data = await res && res.json()if (!res && res.ok) throw new Error(data?.error || 'Deploy failed)setCid(data && data.cid)setProvider(data && data.provider || ')setStatus('Deployed successfully)} catch (e: any) {setError(e && e.message)setStatus(')}const res = null;
      setStatus(')}
      const data = await res.json()if (!res.ok) throw new Error(data?.error |Deploy failed')setCid(data.cid)setProvider(data.provider || ')setStatus(Deployed successfully')} catch (e: any) {setError(e.message)setStatus(')}}
  return (<div className=min-h-screen p-8'>      setStatus('Deployed successfully)} catch (e: any) {setError(e.message)setStatus(')<div className='min-h-screen p-8>      setStatus(Deployed successfully')} catch (e: any) {setError(e && e.message),setStatus(')}
  return (<div className=min-h-screen p-8'>;
      <Head>;
        <title>Zion Offworld Deploy</title>;
      </Head>;
      <h1 className='text-2xl font-bold mb-4>Zion OS Offworld Deploy</h1>;
      <p className=mb-6'>;
        Export the site and pin it to IPFS for disconnected/offworld use.;
      </p>;
      <button;
        className='px-4 py-2 bg-black text-white rounded;
        onClick={handleDeploy}>;
        Deploy to IPFS;
      </button>;

          <div className=text-sm text-gray-600'>;
            You can open via any IPFS gateway or offline node.;
          </div>        </div>;
      )}
    </div>;
  );
}      <Head>;
        <title>Zion Offworld Deploy</title>;
      </Head>;

          <div className='text-sm text-gray-600>
          <div className=text-sm text-gray-600' />
            You can open via any IPFS gateway or offline node.
          </div>
        </div>
      }
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    </div>
  );
}