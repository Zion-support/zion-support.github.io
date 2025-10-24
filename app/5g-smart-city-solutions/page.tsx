'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function G5gSmartCitySolutionsPage() {
  return (<>
      <Head>
        <title>5g Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5g smart city solutions services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <h1 className="text-4xl font-bold text-white mb-6">
            5g Smart City Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional 5g smart city solutions services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>)
  );
}