'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Analytics - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transform your data into actionable insights with our data analytics solutions." />
        <meta name="keywords" content="data analytics, business intelligence, data insights, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Data Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your data into actionable insights with our data analytics solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive business intelligence solutions to drive data-driven decisions.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Forecast future trends and outcomes using advanced analytics.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Dashboards</h3>
                <p className="text-gray-300 mb-4">
                  Create personalized dashboards tailored to your business needs.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default DataAnalyticsPage
