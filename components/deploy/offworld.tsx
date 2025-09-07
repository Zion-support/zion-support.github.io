
import { useState } from 'react';
import Head from 'next/head';

  const [error, setError] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  async function handleDeploy() {
import {useState} from 'react';



    setStatus($2);
    setError($2);
    setCid($2);
    setProvider($2);
    try {
      const res = await fetch($2);
      const data = await res.json($2);
      if (!res.ok) throw new Error($2);
      setCid($2);
      setProvider($2);
      setStatus('Deployed successfully')
    } catch (e: any) {
      setError($2);
      setStatus('')
    }
  }

  return (

    <div className="min-h-screen p-8">
      <Head>
        <title>Zion Offworld Deploy</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Zion OS Offworld Deploy</h1>
      <p className="mb-6">Export the site and pin it to IPFS for disconnected/offworld use.</p>
      <button className="px-4 py-2 bg-black text-white rounded" onClick={handleDeploy}>Deploy to IPFS</button>

          {provider && <div    />Provider: {provider}</div>}

          <div className='text-sm text-gray-600'    />
            You can open via any IPFS gateway or offline node.
          </div>
        </div>
      ,

    </div>
);
}

    }
  }

  return (

        </div>
      )}
    </div>
  );
  )
}
