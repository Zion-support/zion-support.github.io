<<<<<<< HEAD
import React from 'react',
=======
import React from 'react';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
import Head from 'next/head';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
export default function DocsPage() {
	return (
		<Layout>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/docs" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Documentation</h1>
				<p className="text-gray-300">Guides, API docs, and best practices. Coming soon.</p>
			</section>
		</Layout>
	)
}
=======
}

export default function DocsPage() {
  return (
    <Layout>
      <Head>
        <title>Documentation | Zion Tech Group</title>
        <link rel='canonical' href='https://ziontechgroup.com/docs' />
      </Head>
      <section className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>
          Documentation
        </h1>
        <p className='text-gray-300'>
          Guides, API docs, and best practices. Coming soon.
        </p>
      </section>
    </Layout>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
