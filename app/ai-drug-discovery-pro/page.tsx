"use client"
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Ai Drug Discovery Pro | Zion Tech Group</title>
        
        <meta name="description" content="Professional ai drug discovery pro services and solutions for modern businesses." />
        
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        
        <meta property="og:title" content="Ai Drug Discovery Pro|Zion Tech Group" />
        
        <meta property="og:description" content="Professional ai drug discovery pro services and solutions for modern businesses." />
      
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Page
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional Page services designed to help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}