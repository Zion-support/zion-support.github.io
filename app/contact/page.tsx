"use client"
=======
import React from 'react';
import Head from "next/head";
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team to discuss your AI and IT needs.
          </p>
=======
    <>
      
<<<<<<< HEAD
        <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      
      
      <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="con tainermx-auto px-4 py-16">
          <h1 className="tex t-4xlfont-bold text-white mb-6">Contact</h1>
          <p className="tex t-lgtext-gray-300 mb-8">Professional contact services by Zion Tech Group.</p>
          
          <Link href="/contact" className="inl ine-flexitems-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="ml-2h-4w-4" />
          </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
        </div>
      </main>
      <Footer />
    </div>
  )
}
