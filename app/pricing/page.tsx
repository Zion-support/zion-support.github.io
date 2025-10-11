'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="View our competitive pricing for AI and IT solutions. Transparent pricing with no hidden fees." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Basic AI Solutions</li>
                  <li className="text-gray-300">Email Support</li>
                  <li className="text-gray-300">Up to 5 users</li>
                  <li className="text-gray-300">Basic Analytics</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500">
                <div className="text-center mb-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Advanced AI Solutions</li>
                  <li className="text-gray-300">Priority Support</li>
                  <li className="text-gray-300">Up to 25 users</li>
                  <li className="text-gray-300">Advanced Analytics</li>
                  <li className="text-gray-300">Custom Integrations</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Full AI Suite</li>
                  <li className="text-gray-300">24/7 Support</li>
                  <li className="text-gray-300">Unlimited users</li>
                  <li className="text-gray-300">Custom Analytics</li>
                  <li className="text-gray-300">Dedicated Account Manager</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default PricingPage
