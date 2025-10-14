import React from 'react'
import { Helmet } from 'react-helmet-async'
const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">Advanced artificial intelligence and machine learning solutions to transform your business.</p>
              <a href="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold">Learn More →</a>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">Comprehensive security solutions to protect your digital assets and infrastructure.</p>
              <a href="/cybersecurity" className="text-purple-400 hover:text-purple-300 font-semibold">Learn More →</a>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-6">Scalable cloud solutions and infrastructure management for modern businesses.</p>
              <a href="/cloud-solutions" className="text-purple-400 hover:text-purple-300 font-semibold">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServicesPage;
  )}
export default ServicesPage
