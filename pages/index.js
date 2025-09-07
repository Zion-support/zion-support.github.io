import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI Solutions & IT Services</title>
        <meta name="description" content="Leading provider of AI solutions, micro SaaS development, and enterprise IT services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Leading provider of AI solutions, micro SaaS development, and comprehensive enterprise IT services. 
                Transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary inline-flex items-center px-8 py-4 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/services" className="btn btn-secondary inline-flex items-center px-8 py-4 text-lg">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver innovative solutions that drive business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Solutions</h3>
                <p className="text-gray-600">Advanced AI and machine learning solutions that automate processes and enhance decision-making.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with deep expertise in AI, cloud computing, and enterprise solutions.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security and reliability with 99.9% uptime guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600 mb-6">Advanced AI and machine learning solutions for your business.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Computer Vision
                  </li>
                </ul>
                <Link href="/services/ai-services" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">Custom micro SaaS development and deployment services.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Custom Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Cloud Deployment
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maintenance & Support
                  </li>
                </ul>
                <Link href="/services/micro-saas" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600 mb-6">Comprehensive enterprise IT infrastructure and support.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Cloud Migration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Cybersecurity
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    24/7 Support
                  </li>
                </ul>
                <Link href="/services/it-services" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-blue-900 hover:bg-gray-100 inline-flex items-center px-8 py-4 text-lg">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/about" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-900 inline-flex items-center px-8 py-4 text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}