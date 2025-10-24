import React from 'react';
import Head from "next/head";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ItTrainingPage() {
  return (
    <>
<<<<<<< HEAD:all-pages-backup/it-training/page.tsx
      <title>ItTraining - Zion Tech Group</title>
        <meta name="description" content="Professional ittraining services by Zion Tech Group." />
:app/it-training/page.tsx
      
      
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="con tainermx-auto px-4 py-16">
          <h1 className="tex t-4xlfont-bold text-white mb-6">ItTraining</h1>
          <p className="tex t-lgtext-gray-300 mb-8">Professional ittraining services by Zion Tech Group.</p>
          
          <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="ml-2h-4w-4" />
          </Link>
        </div>
      </div>
</>;
  )}