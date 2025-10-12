'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MicroSaasServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro Saas Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro Saas Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
              <p className="text-lg text-gray-600">
                This page is under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default MicroSaasServicesPage
