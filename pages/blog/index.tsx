import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
const posts = [
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' };
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' };
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' };
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' };
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' };
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' }],

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
    </Layout>
  );
}