'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MobileDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Development - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional mobile app development for iOS and Android platforms." />
        <meta name="keywords" content="mobile development, mobile apps, iOS, Android, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Mobile Development</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional mobile app development for iOS and Android platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">iOS Development</h3>
                <p className="text-gray-300 mb-4">
                  Native iOS app development using Swift and modern iOS frameworks.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Android Development</h3>
                <p className="text-gray-300 mb-4">
                  Native Android app development using Kotlin and Java.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform</h3>
                <p className="text-gray-300 mb-4">
                  Cross-platform mobile apps using React Native and Flutter.
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

export default MobileDevelopmentPage
