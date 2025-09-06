<<<<<<< HEAD
import React, { useEffect } from 'react';
import Head from 'next/head';

export default function InstagramRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https://instagram.com/ziontechgroup');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Instagram | Zion Tech Group</title>
        <link rel='canonical' href='https://instagram.com/ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0;url=https://instagram.com/ziontechgroup'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https://instagram.com/ziontechgroup'
          className='text-cyan-400 underline'
        >
          Continue to Instagram
        </a>
      </div>
    </>
  );
}
=======
 return (<> <Head> <title>Instagram | Zion Tech Group</title> Continue to Instagram </Link> </div> </>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
