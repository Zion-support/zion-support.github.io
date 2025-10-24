"use client"

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our team and help shape the future of AI and IT solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>;
  );
import React from 'react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  return (
    <>
      <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Professional careers services by Zion Tech Group." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
          <p className="text-lg text-gray-300 mb-8">Professional careers services by Zion Tech Group.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
</>;
  );
}