'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Scalable and secure cloud infrastructure solutions for your business needs." />
        <meta name="keywords" content="cloud infrastructure, cloud services, cloud solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Cloud Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scalable and secure cloud infrastructure solutions for your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-4">
                  Seamlessly migrate your applications and data to the cloud.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Auto-scaling</h3>
                <p className="text-gray-300 mb-4">
                  Automatically scale your infrastructure based on demand.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Security</h3>
                <p className="text-gray-300 mb-4">
                  Enterprise-grade security and compliance for your cloud infrastructure.
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

export default CloudInfrastructurePage
