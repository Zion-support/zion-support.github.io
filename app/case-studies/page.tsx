'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Page() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Professional case studies services and solutions by Zion Tech Group." />
      </Head>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful AI implementation case studies. See how we&apos;ve helped companies achieve 300%+ ROI with our AI solutions.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300">
                Our case studies services are currently under development. Contact us to learn more about our upcoming services.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}