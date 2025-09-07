<<<<<<< HEAD
import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';
const Jobs: NextPage = $2;
    description: 'Build modern AI-enabled web apps at Zion Tech Solutions.',
    datePosted: new Date().toISOString().slice($2);
    employmentType: 'FULL_TIME',
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice($2);
    baseSalary: {
      currency: 'USD',
      value: 160000,
      unitText: 'YEAR'},
    hiringOrganization: {
      name: 'Zion Tech Solutions',
      sameAs: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app/logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,

  return (
    <div>
      <Seo title = $2;
export default Jobs,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function jobs() {
  return (
    <Layout>
      <Head>
        <title>Jobs - Zion Tech Group</title>
        <meta name="description" content="Jobs solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Jobs</h1>
          <p className="text-lg text-gray-600">
            Professional jobs solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
