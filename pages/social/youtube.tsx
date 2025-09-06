import React, { useEffect } from 'react';
import Head from 'next/head';

export default function YouTubeRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https://youtube.com/@ziontechgroup');
    }
  }, []);
  return (
    <>
      <Head>
        <title>YouTube | Zion Tech Group</title>
        <link rel='canonical' href='https://youtube.com/@ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0;url=https://youtube.com/@ziontechgroup'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https://youtube.com/@ziontechgroup'
          className='text-cyan-400 underline'
        >
          Continue to YouTube
        </a>
      </div>
    </>
<<<<<<< HEAD
  );
=======
  );
export default function YouTubeRedirect() {
export default function YouTubeRedirect() {
ursor/integrate-build-improve-and-re-verify-b76c
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //youtube.com/@ziontechgroup')
		}
	}, []);
	return (
		<>
			<Head>
				<title>YouTube | Zion Tech Group</title>
				<link rel="canonical" href="https: //youtube.com/@ziontechgroup" />
				<meta httpEquiv="refresh" content="0,url=https://youtube.com/@ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //youtube.com/@ziontechgroup" className="text-cyan-400 underline">
					Continue to YouTube
				</a>
			</div>
		</>
	)
}
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
