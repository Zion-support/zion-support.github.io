'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Cloud, Shield, Zap, Server } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CloudInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions with AI-powered optimization, security, and performance monitoring. Starting at $399/month." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud security, cloud optimization, AWS, Azure, GCP" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, deploy, and scale your applications with our comprehensive cloud infrastructure solutions powered by AI optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Infrastructure</h3>
                <p className="text-gray-300">Auto-scaling cloud resources that adapt to your needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Advanced security measures and compliance standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Optimization</h3>
                <p className="text-gray-300">AI-powered performance optimization and cost reduction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <Server className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring and proactive issue resolution</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our cloud experts build the perfect infrastructure for your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}