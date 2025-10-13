'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructure() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services by Zion Tech Group. Scalable, secure, and reliable cloud solutions for your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable, secure, and reliable cloud infrastructure solutions 
            designed to power your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Cloud Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide comprehensive cloud infrastructure solutions 
                tailored to your specific business needs and requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Cloud migration and setup
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Infrastructure monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Security and compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Cost optimization
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">
                Ready to transform your business with our cloud infrastructure services?
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Cloud Infrastructure Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Cloud infrastructure that grows with your business needs and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance standards for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">
                Optimized cloud costs that deliver maximum value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}