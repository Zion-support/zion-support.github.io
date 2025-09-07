import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
export default function MLOpsStarterPage() {
	return (
		<>
			<SEO title="MLOps Starter" description="Templates and pipelines to ship ML faster with best practices." canonical="/mlops-starter" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-3xl">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">MLOps Starter</h1>
					<p className="mt-4 text-gray-300">Opinionated pipelines, evaluations, and observability to productionize ML quickly.</p>
					<div className="mt-8 flex gap-3">
						<a href="/services" className="px-4 py-2 rounded-lg bg-white text-black font-medium">Explore Services</a>
						<a href="/contact" className="px-4 py-2 rounded-lg border border-white/10 text-gray-200">Contact Sales</a>
					</div>
				</div>
			</section>
		</>
	)
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function mlopsstarter() {
  return (
    <Layout>
      <Head>
        <title>Mlops Starter - Zion Tech Group</title>
        <meta name="description" content="Mlops Starter solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mlops Starter</h1>
          <p className="text-lg text-gray-600">
            Professional mlops starter solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}