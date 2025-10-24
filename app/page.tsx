'use client';
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8"></h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover our comprehensive  solutions designed to meet your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Brain className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-300">
              Leverage artificial intelligence to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Shield className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-300">
              Robust security measures to protect your data and ensure compliance.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-300">
              Dedicated support team to help you succeed with our solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our  Solutions?</h2>
          <ul className="space-y-4 text-lg text-gray-300 mb-8">
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Scalable and flexible architecture
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Industry-leading performance
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Easy integration with existing systems
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              24/7 monitoring and support
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
=======
import { ArrowRight, Brain, Shield, Users, Award, Mail, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading the future of AI and technology solutions for businesses worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-300">Comprehensive AI and IT solutions for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">Advanced artificial intelligence solutions that transform your business operations.</p>
              <Link href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">Comprehensive IT services including cybersecurity, cloud solutions, and infrastructure.</p>
              <Link href="/it-services" className="text-green-400 hover:text-green-300 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Consulting</h3>
              <p className="text-gray-300 mb-6">Expert consulting services to help you navigate the digital transformation journey.</p>
              <Link href="/consulting" className="text-purple-400 hover:text-purple-300 transition-colors">
                Learn More →
              </Link>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-57e4
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to learn how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}