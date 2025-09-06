import React, { useEffect } from 'react';
import Head from 'next/head';

<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function LinkedInRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(
        'https://www.linkedin.com/company/zion-tech-group'
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>LinkedIn | Zion Tech Group</title>
        <link
          rel='canonical'
          href='https://www.linkedin.com/company/zion-tech-group'
        />
        <meta
          httpEquiv='refresh'
          content='0;url=https://www.linkedin.com/company/zion-tech-group'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
          href='https://www.linkedin.com/company/zion-tech-group'
          className='text-cyan-400 underline'
        >
          Continue to LinkedIn
        </a>
      </div>
    </>
<<<<<<< HEAD
  );
=======
  );
export default function LinkedInRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //www.linkedin.com/company/zion-tech-group')
		}
	}, []);

ursor/integrate-build-improve-and-re-verify-b76c
	return (
		<>
			<Head>
				<title>LinkedIn | Zion Tech Group</title>
				<link rel="canonical" href="https: //www.linkedin.com/company/zion-tech-group" />
				<meta httpEquiv="refresh" content="0,url=https://www.linkedin.com/company/zion-tech-group" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https: //www.linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">
					Continue to LinkedIn
				</a>
			</div>
		</>
	)
}
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
