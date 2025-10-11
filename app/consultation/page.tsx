'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get expert consultation for your AI and IT projects. Free consultation available." />
        <meta name="keywords" content="consultation, AI consultation, IT consultation, expert advice, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Consultation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get expert consultation for your AI and IT projects. Free consultation available.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Free Consultation</h3>
                <p className="text-gray-300 mb-4">
                  Schedule a free consultation with our experts to discuss your project needs.
                </p>
                <div className="text-cyan-400 font-semibold">Schedule Now →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Advice</h3>
                <p className="text-gray-300 mb-4">
                  Get personalized recommendations for your AI and IT solutions.
                </p>
                <div className="text-cyan-400 font-semibold">Get Advice →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ConsultationPage
