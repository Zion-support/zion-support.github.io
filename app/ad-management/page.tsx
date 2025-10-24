'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function AdmanagementPage() {
  return (
    <>
      <Head>
        <title>Ad Management - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional ad-management services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ad Management
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ad-management services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
=======
        <meta name="description" content="Advanced AI-powered ad management solutions for digital marketing success" />
        <meta name="keywords" content="ad management, digital marketing, AI advertising, campaign optimization" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Ad Management
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Maximize your advertising ROI with intelligent campaign management
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
        </div>
      </div>
      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
};

export default AdManagementPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
