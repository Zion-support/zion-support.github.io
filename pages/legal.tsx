import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
import Link from 'next/link';
export default function LegalPage() {
	return (
		<>
			<SEO title="Legal | Zion Tech Group" description="Legal resources including privacy policy, terms of service, and cookies." canonical="/legal" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Legal</h1>
				<ul className="list-disc ml-6 text-gray-300 space-y-2">
					<li><Link href="/privacy" className="text-cyan-400">Privacy Policy</Link></li>
					<li><Link href="/terms" className="text-cyan-400">Terms of Service</Link></li>
					<li><Link href="/cookies" className="text-cyan-400">Cookie Policy</Link></li>
				</ul>
			</div>
		</>
	)
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function legal() {
  return (
    <Layout>
      <Head>
        <title>Legal - Zion Tech Group</title>
        <meta name="description" content="Legal solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal</h1>
          <p className="text-lg text-gray-600">
            Professional legal solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}