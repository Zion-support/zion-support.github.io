import React from 'react';
import Head from 'next/head';
import { diversifiedMicroSaasServices, getPopularServices, getServicesByCategory } from '../data/2025-diversified-micro-saas-services';

export default function DiversifiedMicroSaasShowcase() {
  const popularServices = getPopularServices();
  const categories = ['All', 'AI & Content Creation', 'Digital Marketing', 'AI & Machine Learning', 'Cloud & Infrastructure', 'Cybersecurity', 'Metaverse & VR/AR', 'Healthcare & Medical'];

  return (
    <>
      <Head>
        <title>Diversified Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of innovative micro SaaS, IT, and AI services designed to transform your business operations and drive growth." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, business automation, cloud computing, cybersecurity, healthcare AI, quantum computing" />
        <meta property="og:title" content="Diversified Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our cutting-edge micro SaaS, IT, and AI services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/diversified-micro-saas-showcase" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Diversified Micro SaaS Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of innovative micro SaaS, IT, and AI services. 
              From content creation to quantum computing, we deliver cutting-edge solutions that drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#services" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Ready to Transform Your Business?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-green-400">📱 Contact Us</h3>
                <p className="text-gray-300">Mobile: +1 302 464 0950</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">✉️ Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">📍 Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Our Comprehensive Service Portfolio</h2>
            
            {/* Popular Services */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 text-center text-green-400">🌟 Popular Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.map((service) => (
                  <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{service.name}</h4>
                    <p className="text-gray-400 mb-4">{service.tagline}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">{service.category}</span>
                    </div>
                    <a 
                      href={service.link} 
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* All Services by Category */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">📊 All Services by Category</h3>
              {categories.map((category) => {
                const categoryServices = getServicesByCategory(category);
                if (categoryServices.length === 0) return null;
                
                return (
                  <div key={category} className="mb-16">
                    <h4 className="text-xl font-semibold mb-6 text-center text-white border-b border-gray-700 pb-2">
                      {category} ({categoryServices.length} services)
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.map((service) => (
                        <div key={service.id} className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                          <div className="text-3xl mb-3">{service.icon}</div>
                          <h5 className="text-lg font-semibold mb-2 text-white">{service.name}</h5>
                          <p className="text-gray-400 mb-3 text-sm">{service.tagline}</p>
                          <div className="mb-3">
                            <span className="text-xl font-bold text-green-400">{service.price}</span>
                            <span className="text-gray-500 text-sm">{service.period}</span>
                          </div>
                          <div className="mb-3">
                            <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">{service.category}</span>
                          </div>
                          <a 
                            href={service.link} 
                            className="inline-block w-full text-center bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 text-sm"
                          >
                            View Details
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Market Insights & Competitive Analysis</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diversifiedMicroSaasServices.slice(0, 4).map((service) => (
                <div key={service.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold mb-4 text-white">{service.name}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <p className="text-green-400 font-semibold">{service.marketSize}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Growth Rate:</span>
                      <p className="text-blue-400 font-semibold">{service.growthRate}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <p className="text-purple-400 font-semibold">{service.roi}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Competitors:</span>
                      <p className="text-gray-300">{service.competitors.slice(0, 2).join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with our innovative micro SaaS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}