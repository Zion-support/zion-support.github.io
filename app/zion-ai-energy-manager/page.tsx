'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function ZionaienergymanagerPage() {
  return (
    <div>
      <Head>
        <title>Zion Ai Energy Manager - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Zion Ai Energy Manager
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            zion-ai-energy-manager services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">Contact Us<ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>);
}