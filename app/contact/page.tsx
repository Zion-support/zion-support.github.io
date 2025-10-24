<<<<<<< HEAD
"use client"

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team to discuss your AI and IT needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
=======
import React from 'react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Professional contact services by Zion Tech Group." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
          <p className="text-lg text-gray-300 mb-8">Professional contact services by Zion Tech Group.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
</>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-f44d
}