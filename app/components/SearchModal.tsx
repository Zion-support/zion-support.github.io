'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SearchModal() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Service
          
          
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional service services coming soon.
          
          
          </p>
          <LinkContact Us
            >
            $2
            <ArrowRight$3 />
          </Link>
        </div>
      </div>
    </>
  );
}