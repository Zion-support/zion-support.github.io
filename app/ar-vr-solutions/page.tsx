'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ArVrSolutions() {
  return (
    <>
      <Head>
        <title>Ar Vr Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional ar vr solutions services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ar Vr Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ar vr solutions services coming soon.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};