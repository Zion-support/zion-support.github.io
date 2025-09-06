import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight
  Server
  Lock
  Brain
  Cloud
} from 'lucide-react';
const apiEndpoints = [
  {
    title: 'Authentication API'
    description: 'Secure authentication and authorization endpoints'
    icon: Lock
    methods: ['POST', 'GET', 'PUT', 'DELETE']
    endpoint: '/api/auth'
  }
  {
    title: 'AI Services API'
    description: 'Access to all AI-powered services and models'
    icon: Brain
    methods: ['POST', 'GET']
    endpoint: '/api/ai'
  }
  {
    title: 'Micro SaaS API'
    description: 'Manage micro SaaS applications and subscriptions'
    icon: Cloud
    methods: ['POST', 'GET', 'PUT', 'DELETE']
    endpoint: '/api/micro-saas'
  }
  {
    title: 'IT Services API'
    description: 'Infrastructure and IT service management'
    icon: Server
    methods: ['POST', 'GET', 'PUT']
    endpoint: '/api/it-services'
  }
];

export default function APIDocsPage() {
export default function ApiDocsPage() {
  return (
    <>
      <Head>
      {/* API Endpoints Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <motion&& motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              const IconComponent = endpoint.icon;
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Explore our comprehensive API endpoints for seamless integration with our services.;
            </p>;
          </motion && motion.div>;

          <div className="grid md:grid-cols-2 gap-8">;
            {apiEndpoints && apiEndpoints.map((endpoint, index) => {;
              const IconComponent = endpoint && endpoint.icon;
              return (
                  <Link
                    href={`/api-docs/${endpoint && endpoint.endpoint.replace('/api/', '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">;
                    View Documentation;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </motion && motion.div>;
              );
            })}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
      <div className='container mx-auto px-4 py-16 text-gray-200'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>API Docs</h1>
        <p className='text-gray-300'>
          See{' '}
          <a href='/api-docs' className='text-cyan-400 underline'>
            API Documentation
          </a>{' '}
          for the full reference.
        </p>
      </div>
    </Layout>
  );
}
import Layout from '../components/Layout';
export default function APIDocsPage() {
import React from 'react',
import Head from 'next/head',
export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>



  );
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
);
    </>
  )

    </>
  )
import React from 'react';
import Head from 'next/head';
export default function ApiDocsPage(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>API Docs | Zion Tech Group</title>;
        <meta name='description' content='API reference and guides.' />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/api-docs' />;
      </Head>;
      <div className="container mx-auto px-4 py-16 text-gray-200">;
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>;
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>;
