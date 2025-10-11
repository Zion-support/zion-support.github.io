'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Meet our talented team of AI and IT experts at Zion Tech Group." />
        <meta name="keywords" content="team, our team, AI experts, IT experts, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Our Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet our talented team of AI and IT experts at Zion Tech Group.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Engineers</h3>
                <p className="text-gray-300 mb-4">
                  Our AI engineers specialize in machine learning, deep learning, and AI solutions.
                </p>
                <div className="text-cyan-400 font-semibold">Meet the Team →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">IT Specialists</h3>
                <p className="text-gray-300 mb-4">
                  Our IT specialists bring years of experience in cloud, security, and infrastructure.
                </p>
                <div className="text-cyan-400 font-semibold">Meet the Team →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Project Managers</h3>
                <p className="text-gray-300 mb-4">
                  Our project managers ensure successful delivery of complex AI and IT projects.
                </p>
                <div className="text-cyan-400 font-semibold">Meet the Team →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default TeamPage
