'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="See our AI and IT solutions in action. Request a demo today." />
        <meta name="keywords" content="demo, AI demo, IT demo, product demo, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Demo</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See our AI and IT solutions in action. Request a demo today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions Demo</h3>
                <p className="text-gray-300 mb-4">
                  Experience our AI-powered solutions and see how they can transform your business.
                </p>
                <div className="text-cyan-400 font-semibold">Request Demo →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">IT Services Demo</h3>
                <p className="text-gray-300 mb-4">
                  Explore our comprehensive IT services and infrastructure solutions.
                </p>
                <div className="text-cyan-400 font-semibold">Request Demo →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default DemoPage
