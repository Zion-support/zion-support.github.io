"use client"

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'

const Page: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="5G Solutions - ZionTechGroup"
        description="Next-generation 5G solutions for ultra-fast connectivity and advanced network infrastructure."
        keywords={['5G solutions', 'ultra-fast connectivity', 'network infrastructure', 'wireless technology']}
        canonicalUrl="https://ziontechgroup.com/5g-solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                5G Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Next-generation 5G solutions for ultra-fast connectivity and advanced network infrastructure.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page