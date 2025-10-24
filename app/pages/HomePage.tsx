'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
