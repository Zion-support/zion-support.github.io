import React from 'react';
import Head from 'next/head';
import { Zap, Brain, TrendingUp } from 'lucide-react';

export default function MicroSaaS() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Scalable micro SaaS solutions for your business" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable software-as-a-service solutions designed for rapid growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Rapid Development
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Fast-track your SaaS product development with our proven methodologies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Brain className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                AI Integration
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Enhance your SaaS with intelligent features and automation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Growth Analytics
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Data-driven insights to scale your SaaS business effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}