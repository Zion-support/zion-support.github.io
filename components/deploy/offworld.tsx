
import {useState} from 'react';
import Head from 'next/head';

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


