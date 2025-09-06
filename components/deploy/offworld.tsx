
export default function OffworldDeploy() {
  const [cid, setCid] = useState<string | null>(null),
  const [status, setStatus] = useState<string>(''),

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
