import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. 
            Enterprise-grade technology that drives innovation and growth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions to automate and optimize your business processes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Scalable and secure cloud infrastructure solutions for modern businesses.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-600">
              Comprehensive cybersecurity solutions to protect your digital assets and data.
            </p>
          </div>
        </section>

        <section className="bg-gray-900 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn how our technology solutions can drive your success.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </section>
      </div>

      <Footer />
    </main>
  );
}