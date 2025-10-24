import React from 'react';
import Head from "next/head";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DevopsAdvancedPage() {
  return (
    <>
<<<<<<< HEAD:all-pages-backup/devops-advanced/page.tsx
      <title>DevopsAdvanced - Zion Tech Group</title>
        <meta name="description" content="Professional devopsadvanced services by Zion Tech Group." />
:app/devops-advanced/page.tsx
      
      
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="con tainermx-auto px-4 py-16">
          <h1 className="tex t-4xlfont-bold text-white mb-6">DevopsAdvanced</h1>
          <p className="tex t-lgtext-gray-300 mb-8">Professional devopsadvanced services by Zion Tech Group.</p>
          
          <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="ml-2h-4w-4" />
          </Link>
        </div>
      </div>
</>;
  )}