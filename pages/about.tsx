import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We build pragmatic, high-quality technology solutions across cloud, data, AI, and product engineering. 
              Our focus is measurable outcomes, reliability, and speed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize advanced technology and make enterprise-grade solutions accessible to businesses of all sizes. 
                We believe that cutting-edge AI, cloud infrastructure, and cybersecurity shouldn't be limited to Fortune 500 companies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to bridge the gap between innovation and implementation, delivering solutions that drive real business value.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <Target className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Vision 2030</h3>
                <p className="text-lg leading-relaxed">
                  To be the leading force in autonomous AI systems and quantum-ready infrastructure, 
                  enabling businesses to thrive in the next decade of technological transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore emerging technologies to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Trust</h3>
              <p className="text-gray-600">
                Security is built into every solution we create, ensuring your data and systems remain protected.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in every project, every time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Our solutions help businesses worldwide scale and succeed in the digital economy.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on measurable outcomes and tangible business value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions for the modern enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">AI</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Systems</h3>
              <p className="text-gray-600 text-sm">
                Autonomous AI solutions that learn, adapt, and optimize your business processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">☁️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
              <p className="text-gray-600 text-sm">
                Scalable, secure cloud infrastructure designed for performance and reliability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">
                Advanced security solutions protecting your digital assets and infrastructure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Micro SaaS</h3>
              <p className="text-gray-600 text-sm">
                Custom software solutions that streamline operations and boost productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
