'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from './components/Footer';

export default function AppPage() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Zion Tech Group - AI & Technology Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            AI and technology solutions for your business. Transform your operations with cutting-edge AI services. services coming soon.
          </p>
          <LinkContact Us
            >
            $2
            <ArrowRight$3 />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
<<<<<<< HEAD
};

export default HomePage;
=======
}
>>>>>>> origin/main
