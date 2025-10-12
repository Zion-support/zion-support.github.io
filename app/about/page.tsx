import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions for modern businesses."
        keywords="about us, company, mission, AI solutions, IT services"
      />
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading provider of AI-powered solutions and IT services, dedicated to transforming businesses through innovative technology.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
