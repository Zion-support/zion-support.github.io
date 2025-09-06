import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../components/Layout';

export default function CaseStudiesPage() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <link rel='canonical' href='https://ziontechgroup.com/case-studies' />
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'
        />
      </Head>
      <section className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>
          Case Studies
        </h1>
        <p className='text-gray-300'>
          Proven outcomes and detailed success stories. Coming soon.
        </p>
      </section>
    </Layout>
  );

 </Head> </section> </Layout> 
=======
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {
=======
import Layout from '../components/layout/Layout';
export default function CaseStudiesPage() {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	)
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
