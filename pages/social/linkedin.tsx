import React, { useEffect } from 'react';
import Head from 'next/head';
<<<<<<< HEAD
export default function LinkedInRedirect() {
<<<<<<< HEAD
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //www.linkedin.com/company/zion-tech-group')
		}
	}, []);
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
=======
=======
}

export default function LinkedInRedirect() {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(
        'https://www.linkedin.com/company/zion-tech-group'
      );
    }
  }, []);
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  return (
    <>
      <Head>
        <title>LinkedIn | Zion Tech Group</title>
        <link
          rel='canonical'
<<<<<<< HEAD
          href='https: //www.linkedin.com/company/zion-tech-group'
        />
        <meta
          httpEquiv='refresh'
          content='0,url=https://www.linkedin.com/company/zion-tech-group'
=======
          href='https://www.linkedin.com/company/zion-tech-group'
        />
        <meta
          httpEquiv='refresh'
          content='0;url=https://www.linkedin.com/company/zion-tech-group'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-8'>
        <a
<<<<<<< HEAD
          href='https: //www.linkedin.com/company/zion-tech-group'
=======
          href='https://www.linkedin.com/company/zion-tech-group'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          className='text-cyan-400 underline'
        >
          Continue to LinkedIn
        </a>
      </div>
    </>
  );
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
