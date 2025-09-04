import React from 'react';
import Head from 'next/head';
import { Server, Shield, Cpu } from 'lucide-react';

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for your business" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IT Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete IT infrastructure and support solutions for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Cloud Infrastructure
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Scalable cloud solutions for modern business needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Cybersecurity
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Comprehensive security solutions to protect your business.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                System Integration
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Seamless integration of systems and technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}