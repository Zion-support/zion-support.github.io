'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function AiNlpPage() {
  return (<>
      <Head>
        <title>Ai Nlp - Zion Tech Group</title>
        <meta name="description" content="Professional ai-nlp services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Nlp
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ai-nlp services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      </>)
  );
}