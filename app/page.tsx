import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zion Tech Group - Revolutionary AI & Technology Solutions',
  description: 'Leading technology solutions provider specializing in AI, automation, quantum computing, and digital transformation. Transform your business with cutting-edge technology.',
  keywords: ['AI solutions', 'quantum computing', 'automation', 'digital transformation', 'technology consulting', 'AI consulting']
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI & Technology Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, and automation technologies. 
              We deliver unprecedented innovation for the future of enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver transformative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 p-8 rounded-xl hover:bg-gray-700/70 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Innovation</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions that learn, adapt, and optimize your business processes in real-time.
              </p>
            </div>
            <div className="bg-gray-800/70 p-8 rounded-xl hover:bg-gray-700/70 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
              <p className="text-gray-300">
                Revolutionary quantum computing solutions that solve complex problems exponentially faster than classical computers.
              </p>
            </div>
            <div className="bg-gray-800/70 p-8 rounded-xl hover:bg-gray-700/70 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Automation</h3>
              <p className="text-gray-300">
                Intelligent automation systems that streamline operations, reduce costs, and increase efficiency across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ai-2025" className="group">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors group-hover:scale-105 transform duration-200">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">AI Solutions 2025</h3>
                <p className="text-gray-300 text-sm">Next-generation AI technologies and implementations.</p>
              </div>
            </Link>
            <Link href="/automation" className="group">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors group-hover:scale-105 transform duration-200">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Automation</h3>
                <p className="text-gray-300 text-sm">Intelligent automation for business processes.</p>
              </div>
            </Link>
            <Link href="/tools/ai-roi-calculator" className="group">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors group-hover:scale-105 transform duration-200">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">AI ROI Calculator</h3>
                <p className="text-gray-300 text-sm">Calculate your AI investment returns.</p>
              </div>
            </Link>
            <Link href="/success-stories" className="group">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors group-hover:scale-105 transform duration-200">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Success Stories</h3>
                <p className="text-gray-300 text-sm">Real results from our implementations.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Start Your Journey
            </Link>
            <Link
              href="/tools/ai-readiness-assessment"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Assess Your Readiness
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}