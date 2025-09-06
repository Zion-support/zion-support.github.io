import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
export default function InstagramRedirect() {
=======
export default function InstagramRedirect() {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //instagram.com/ziontechgroup')
		}
	}, []);
	return (
		<>
			<Head>
				<title>Instagram | Zion Tech Group</title>
				<link rel="canonical" href="https: //instagram.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://instagram.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //instagram.com/ziontechgroup" className="text-cyan-400 underline">
					Continue to Instagram
				</a>
			</div>
		</>
	)
<<<<<<< HEAD
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
