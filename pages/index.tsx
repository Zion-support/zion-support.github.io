import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of innovative AI solutions, IT services, and micro SaaS applications. Transform your business with cutting-edge technology." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Advanced Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of innovative AI solutions, IT services, and micro SaaS applications. 
                Accelerate your digital transformation with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="border border-gray-300 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive innovation and growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Brain className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence services including machine learning, 
                  natural language processing, and predictive analytics.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    AI Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Predictive Analytics
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Cloud className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive IT infrastructure, cloud solutions, and digital transformation services.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Cloud Migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Cybersecurity
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
                <p className="text-gray-300 mb-6">
                  Innovative micro SaaS applications and business automation solutions.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Business Automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Custom Applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    API Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your technology needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
              <Link href="/pricing" className="border border-gray-300 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}