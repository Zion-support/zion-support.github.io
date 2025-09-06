import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
export default function FacebookRedirect() {
<<<<<<< HEAD
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
=======
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https: //facebook.com/ziontechgroup')
=======
}

export default function FacebookRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('https://facebook.com/ziontechgroup');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }, []);
  return (
    <>
      <Head>
        <title>Facebook | Zion Tech Group</title>
<<<<<<< HEAD
        <link rel='canonical' href='https: //facebook.com/ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0,url=https://facebook.com/ziontechgroup'
=======
        <link rel='canonical' href='https://facebook.com/ziontechgroup' />
        <meta
          httpEquiv='refresh'
          content='0;url=https://facebook.com/ziontechgroup'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
<<<<<<< HEAD
          href='https: //facebook.com/ziontechgroup'
=======
          href='https://facebook.com/ziontechgroup'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          className='text-cyan-400 underline'
        >
          Continue to Facebook
        </a>
      </div>
    </>
  );
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
