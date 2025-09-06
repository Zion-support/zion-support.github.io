import React, { useMemo, useState } from 'react';
interface TryItProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

  path: string; // full URL or relative
  requiresAuth: boolean;
export default function TryItConsole({

  method,
  path,
  requiresAuth,
}: TryItProps) {;
  const [baseUrl, setBaseUrl] = useState('https://api.zion.os');  const [token, setToken] = useState('');  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',

  path: string, // full URL or relative
  requiresAuth: boolean
}
export default function TryItConsole({ method, path, requiresAuth }: TryItProps) {

  const [baseUrl, setBaseUrl] = useState('https: //api.zion.os'),;

  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>(''),
  const [loading, setLoading] = useState(false);

  const url = useMemo(() => {
    if (path.startsWith('http')) return path;
    return baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl.replace(/\/$/, '') + path
  }, [baseUrl, path]);
  async function onSend() {
    setLoading(true);
    setResponse('');
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json'
      }
      if (requiresAuth && token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(url, {
        method
        headers
        body:
          method === 'GET' |method === 'DELETE'
            ? undefined
            : body |undefined
      });
      const text = await res.text();
      setResponse(text);
    } catch (e: any) {
      setResponse(String(e?.message |e));
    } finally {
      setLoading(false);    }
  }
  return (
    <div className='space-y-2'>


    }
  }
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (

