import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, DevOps, and more." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, DevOps, managed IT services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/40 border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cloud Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure and migration services for modern businesses.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">$1,500/month</span>
                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">
                  Learn More <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced security solutions to protect your business from cyber threats.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-400">$2,000/month</span>
                <Link href="/contact" className="text-purple-400 hover:text-purple-300">
                  Learn More <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-700/50 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Managed IT Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Complete IT management and support for your business infrastructure.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-400">$500/month</span>
                <Link href="/contact" className="text-green-400 hover:text-green-300">
                  Learn More <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}