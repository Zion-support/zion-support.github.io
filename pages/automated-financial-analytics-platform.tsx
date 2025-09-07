<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform' } })
}

export default function AutomatedFinancialAnalyticsPlatform(props: any) {
	return <ServicePage {...props} />
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function automatedfinancialanalyticsplatform() {
  return (
    <Layout>
      <Head>
        <title>Automated Financial Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Automated Financial Analytics Platform solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Automated Financial Analytics Platform</h1>
          <p className="text-lg text-gray-600">
            Professional automated financial analytics platform solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}