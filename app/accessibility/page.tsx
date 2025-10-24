'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function AccessibilityPage() {
  return (
    <div>
      </div>
            <Head>
                    <title>Accessibility - Zion Tech Group</title>
                    <meta name="description" content="Professional services by Zion Tech Group." />
                  </Head>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
                      <h1 className="text-4xl font-bold text-white mb-6">
                        Accessibility</h1>
                      <p className="text-lg text-gray-300 mb-8">Professional services by Zion Tech Group.</p>
                      <Link href="/contact";
                        className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105";
                      >
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5"   />
                      </Link>
                    </div>
                  <Footer />
    </div>
  );}
}