import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function MicroSaasServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Micro-saas-services - Zion Tech Group"
        description="Professional micro-saas-services services and solutions."
        keywords="micro-saas-services, services, solutions, technology"
      />
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro-saas-services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional micro-saas-services services to help your business succeed and grow.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
