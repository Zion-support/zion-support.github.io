<<<<<<< HEAD
import React, { useEffect } from 'react';
import Head from 'next/head';
export default function FacebookRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https: //facebook.com/ziontechgroup')
		}
	}, []),
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
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function facebook() {
  return (
    <Layout>
      <Head>
        <title>Facebook - Zion Tech Group</title>
        <meta name="description" content="Facebook solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Facebook</h1>
          <p className="text-lg text-gray-600">
            Professional facebook solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}