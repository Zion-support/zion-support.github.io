import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Shield, Server, Database, Cloud, Lock, Zap, Users, BarChart3, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const ITServices = () => {
  return (
    <>
      <Head>
        <title>IT Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support." />
      </Head>

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered IT Operations</h3>
              <p className="text-gray-600 mb-4">
                Intelligent IT operations with AI-driven automation and optimization
              </p>
              <div className="text-sm text-gray-500">
                <p>Pricing: $6,000 - $35,000/month</p>
                <p>Delivery: 8-16 weeks</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero-Trust Security Architecture</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive zero-trust security implementation and management
              </p>
              <div className="text-sm text-gray-500">
                <p>Pricing: $4,000 - $25,000/month</p>
                <p>Delivery: 6-12 weeks</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <Cloud className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Migration & Management</h3>
              <p className="text-gray-600 mb-4">
                Seamless cloud migration and ongoing management services
              </p>
              <div className="text-sm text-gray-500">
                <p>Pricing: $3,000 - $20,000/month</p>
                <p>Delivery: 4-10 weeks</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ITServices;