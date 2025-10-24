'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Privacy Matters</h2>
            <p className="text-gray-300 mb-4">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-gray-300 mb-4">
              This privacy policy is currently being updated to reflect our latest data protection practices and compliance requirements.
            </p>
            <p className="text-gray-300">
              For questions about our privacy practices, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}