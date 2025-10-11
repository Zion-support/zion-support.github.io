'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI and IT solutions." />
        <meta name="keywords" content="careers, jobs, AI jobs, IT jobs, Zion Tech Group careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Careers</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help shape the future of AI and IT solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Engineer</h3>
                <p className="text-gray-300 mb-4">
                  Develop cutting-edge AI solutions and machine learning models for our clients.
                </p>
                <div className="text-cyan-400 font-semibold">Apply Now →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
                <p className="text-gray-300 mb-4">
                  Build scalable web applications and microservices using modern technologies.
                </p>
                <div className="text-cyan-400 font-semibold">Apply Now →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CareersPage
