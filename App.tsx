
// @ts-nocheck
import React from 'react';
import { Header } from './src/components/Header';
import { ScrollToTop } from './src/components/ScrollToTop';
import { Footer } from './src/Footer';

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ScrollToTop />
      <Header />
      
      {/* Promotional Banner */}
      <div className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base">
            Limited-time: Launch your AI initiative with our free strategy session.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center bg-white text-indigo-700 font-semibold px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Latest Content */}
        <section aria-labelledby="latest-content-heading" className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <h2 id="latest-content-heading" className="text-3xl font-bold text-gray-900">
              Latest Content
            </h2>
            <a href="#content" className="text-indigo-700 hover:text-indigo-800 font-medium">
              View all
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-indigo-200 to-purple-200" aria-hidden="true" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI Trends 2025: Practical Roadmaps
                </h3>
                <p className="text-gray-600 mb-4">
                  A concise guide to adopting AI safely and effectively across your org.
                </p>
                <a href="#ai-trends-2025" className="text-indigo-700 hover:text-indigo-800 font-medium">
                  Read more →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-blue-200 to-cyan-200" aria-hidden="true" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Blockchain Beyond Hype
                </h3>
                <p className="text-gray-600 mb-4">
                  Real enterprise use cases and patterns for measurable ROI in 2025.
                </p>
                <a href="#blockchain-roi" className="text-indigo-700 hover:text-indigo-800 font-medium">
                  Read more →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-amber-200 to-rose-200" aria-hidden="true" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cloud Cost Optimization Playbook
                </h3>
                <p className="text-gray-600 mb-4">
                  Proven steps to reduce spend 20-40% without sacrificing reliability.
                </p>
                <a href="#cloud-costs" className="text-indigo-700 hover:text-indigo-800 font-medium">
                  Read more →
                </a>
              </div>
            </article>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-gray-600">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value. Our team of experts is dedicated 
            to helping you succeed in the digital age.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
