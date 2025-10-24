'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

export default function pagetsxPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              page
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional page services to help your business grow
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Professional Service</h3>
                </div>
                <p>High-quality page solutions tailored to your needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Expert Support</h3>
                </div>
                <p>24/7 support from our experienced team</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Scalable Solutions</h3>
                </div>
                <p>Solutions that grow with your business</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to learn more about our page services</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
