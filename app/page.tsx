'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with AI & IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge solutions that drive innovation and growth for your business.
            </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions that automate processes and enhance decision-making.
              </p>
            </div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your digital assets and ensure compliance.
              </p>
            </div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable cloud solutions that optimize performance and reduce operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium">
            Schedule Consultation
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage