'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AiExpenseTrackerPage() {
  return (
    <>
      <Head>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"> </div><div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center">,
          <h1Ai Expense Tracker
          </h1>
          <pProfessional ai expense tracker services coming soon.
          </p>
          <Link href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit",
          >
            Contact Us
            
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}