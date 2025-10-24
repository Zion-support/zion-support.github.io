'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe } from 'lucide-react';

export default function NetworkInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Network Infrastructure</h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover our comprehensive network infrastructure solutions designed to meet your business needs.
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
          
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive network infrastructure solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced network infrastructure technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-gray-300 mb-6">
                  Build and deploy scalable network infrastructure that grows with your business needs.
                </p>
                <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                <p className="text-gray-300 mb-6">
                  Enterprise-grade security measures to protect your network infrastructure and data.
                </p>
                <Link href="/contact" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300 mb-6">
                  Round-the-clock technical support to ensure your network infrastructure runs smoothly.
                </p>
                <Link href="/contact" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Network Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our comprehensive network infrastructure solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Get Started
              </Link>
              <Link href="/solutions" className="border border-gray-300 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                View Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}