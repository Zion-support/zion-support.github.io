import React from 'react';
import Head from "next/head";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LandingPageBuilderPage() {
  return (
    <>
<<<<<<< HEAD:all-pages-backup/landing-page-builder/page.tsx
      <title>LandingPageBuilder - Zion Tech Group</title>
        <meta name="description" content="Professional landingpagebuilder services by Zion Tech Group." />
=======
      
        <Head>
        <title>LandingPageBuilder - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/landing-page-builder/page.tsx
      
      
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="con tainermx-auto px-4 py-16">
          <h1 className="tex t-4xlfont-bold text-white mb-6">LandingPageBuilder</h1>
          <p className="tex t-lgtext-gray-300 mb-8">Professional landingpagebuilder services by Zion Tech Group.</p>
          
          <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="ml-2h-4w-4" />
          </Link>
        </div>
      </div>
</>;
  )}