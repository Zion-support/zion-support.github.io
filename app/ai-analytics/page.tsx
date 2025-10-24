<<<<<<< HEAD
"use client"
import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ServicePage() {

  return (
    <>
      <Head>
        <title>Ai Analytics|Zion Tech Group</title>
        <meta name="description" content="Professional services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ai Analytics|Zion Tech Group" />
        <meta property="og:description" content="Professional services and solutions for modern businesses." />
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
              >"
                Get Started<ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors
              >
                Learn More
              </Link>
            </div>
=======
'use client'
<<<<<<< HEAD
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

=======
import React from 'react';
import Head from 'next/head';
>>>>>>> origin/main
export default function ServicePage() {
  return (
    <div>
      <Head>
<<<<<<< HEAD
        <title>Ai Analytics | Zion Tech Group</title>
=======
        <title>"Ai Analytics | Zion Tech Group"</title>
>>>>>>> origin/main
        <meta name="description" content="Professional ai analytics services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ai Analytics | Zion Tech Group" />
        <meta property="og:description" content="Professional ai analytics services and solutions for modern businesses." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ai Analytics</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Professional ai analytics services and solutions for modern businesses.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
>>>>>>> origin/main
          </div>
=======
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            "Ai Analytics"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            "Professional ai analytics services and solutions for modern businesses."
          </p>
>>>>>>> origin/main
        </div>
      </div>
<<<<<<< HEAD
      
      <Footer /></Footer>
  )"
}"
=======
    </>
  );
}
>>>>>>> origin/main
