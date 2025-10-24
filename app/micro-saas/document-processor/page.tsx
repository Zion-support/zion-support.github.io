'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function DocumentProcessorPage() {
  return (
    <>
      <Head>
        <title>Document Processor - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1>Document Processor - Zion Tech Group</h1>
          <p>Professional document processor - zion tech group services coming soon.</p>
          <Link href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
=======
import { ArrowRight  } from "lucide-react";
import Footer from '../../components/Footer';

export default function DocumentprocessorPage() {
  
  return (
        <div>
      <Head>
        <title>Document Processor - Zion Tech Group</title>
        <meta name = "description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Document Processor
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            document-processor services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
            </div>
          </div>
      <Footer />
  
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  );
}