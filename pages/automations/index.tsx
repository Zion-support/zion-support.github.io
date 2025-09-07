<<<<<<< HEAD
import type { NextPage } from 'next';
import Link from 'next/link';
const AutomationsIndex: NextPage = () => {
  const items = [
    { href: '/automations/top-talents', title: 'Top Talents (Auto)', desc: 'Aggregated from approved reviews, updated on schedule' },
    { href: '/automations/sitemap-status', title: 'Sitemap Status (Auto)', desc: 'Nightly sitemap and weekly pings to search engines' }],

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Autonomous Automations</h1>
      <p className="text-gray-600">These run in the cloud on a schedule, with no human interaction.</p>
      <div className = $2;
export default AutomationsIndex,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Index - Zion Tech Group</title>
        <meta name="description" content="Index solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Index</h1>
          <p className="text-lg text-gray-600">
            Professional index solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
