'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
=======
import { ArrowRight } from "lucide-react";
import Footer from '../components/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a

export default function AiTelepathicInterfacePage() {
  return (
    <div>
      <Head>
        <title>Ai Telepathic Interface - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
<<<<<<< HEAD
          <h1>Ai Telepathic Interface - Zion Tech Group</h1>
          <p>Professional ai telepathic interface - zion tech group services coming soon.</p>
          <Link href="/contact"
=======
          <h1 className="text-4xl font-bold text-white mb-6">
            
            Ai Telepathic Interface
          
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            
            ai-telepathic-interface services Transform your business with our expert solutions. services coming soon.
          
          </p>
          <Link
            href="/contact"
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}