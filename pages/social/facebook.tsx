import React, { useEffect } from 'react';
import Head from 'next/head';

export default function FacebookRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https://facebook.com/ziontechgroup');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Facebook | Zion Tech Group</title>
        <link rel='canonical' href='https://facebook.com/ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0;url=https://facebook.com/ziontechgroup'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https://facebook.com/ziontechgroup'
          className='text-cyan-400 underline'
        >
          Continue to Facebook
        </a>
      </div>
    </>
  );
export default function FacebookRedirect() {
export default function FacebookRedirect() {
ursor/integrate-build-improve-and-re-verify-b76c
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //facebook.com/ziontechgroup')
		}
	}, []);
	return (
		<>
			<Head>
				<title>Facebook | Zion Tech Group</title>
				<link rel="canonical" href="https: //facebook.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://facebook.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //facebook.com/ziontechgroup" className="text-cyan-400 underline">
					Continue to Facebook
				</a>
			</div>
		</>
	)
}
}
ursor/integrate-build-improve-and-re-verify-b76c
