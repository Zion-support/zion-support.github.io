'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../../components/Footer';

export default function EmailmarketingPage() {
  return (
    <div>
      </div>
            <Head>
                    <title>Email Marketing - Zion Tech Group</title>
                    <meta name="description" content="Professional services by Zion Tech Group." />
                  </Head>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
                      <h1 className="text-4xl font-bold text-white mb-6">
                        Email Marketing</h1>
                      <p className="text-lg text-gray-300 mb-8">email-marketing services Transform your business with our expert solutions. services coming soon.</p>
                      <Link href="/contact";
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200";
                      >
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5"   />
                      </Link>
                    </div>
                  <Footer />
    </div>
  );}
}