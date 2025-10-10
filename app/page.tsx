'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
                <p className="text-gray-600">
                  Cutting-edge artificial intelligence solutions to transform your business operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">IT Services</h3>
                <p className="text-gray-600">
                  Comprehensive IT infrastructure and support services for modern enterprises.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
                <p className="text-gray-600">
                  Scalable cloud infrastructure and migration services for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with deep industry knowledge</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-600">Latest tools and technologies for optimal results</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Proven Results</h3>
                <p className="text-gray-600">Track record of successful project deliveries</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}