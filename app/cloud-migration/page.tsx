'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CloudMigrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Migration - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Seamless cloud migration services to modernize your infrastructure." />
        <meta name="keywords" content="cloud migration, cloud services, infrastructure, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Cloud Migration</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamless cloud migration services to modernize your infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Assessment</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive assessment of your current infrastructure and migration requirements.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Migration Planning</h3>
                <p className="text-gray-300 mb-4">
                  Detailed migration plan tailored to your business needs and timeline.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Execution</h3>
                <p className="text-gray-300 mb-4">
                  Smooth execution of the migration with minimal downtime and disruption.
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

export default CloudMigrationPage
