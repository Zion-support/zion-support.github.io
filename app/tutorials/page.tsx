'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, guides, AI tutorials, IT tutorials, learning, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Tutorials</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn AI and IT solutions with our comprehensive tutorials and guides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI Fundamentals</h3>
                <p className="text-gray-300 mb-4">
                  Learn the basics of artificial intelligence and machine learning.
                </p>
                <div className="text-cyan-400 font-semibold">Start Learning →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
                <p className="text-gray-300 mb-4">
                  Master cloud infrastructure and deployment strategies.
                </p>
                <div className="text-cyan-400 font-semibold">Start Learning →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-300 mb-4">
                  Build modern web applications with the latest technologies.
                </p>
                <div className="text-cyan-400 font-semibold">Start Learning →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default TutorialsPage
