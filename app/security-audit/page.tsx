'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function SecurityauditPage() {
  return (
    <>
      <Head>
        <title>Security Audit - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional security-audit services by Zion Tech Group. Transform your business with our expert solutions." />
=======
        <meta name="description" content="Professional services by Zion Tech Group." />
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"> </div><div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center">,
          <h1Security Audit
          </h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-300 mb-8">
            Professional security-audit services coming soon.
=======
          <pProfessional security audit services coming soon.
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
          </p>
          <Link href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit",
          >
            Contact Us
            
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}