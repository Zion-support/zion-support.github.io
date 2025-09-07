import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { ArrowRight, CheckCircle, Star, Users, Zap, TrendingUp, Shield, Globe } from 'lucide-react';

export default function Home() {
  return (
    <Layout title="Zion Tech Group - AI & IT Solutions" description="Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Build the Future with
                <span className="text-blue-600 block">AI & Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Enterprise-grade AI solutions, micro SaaS platforms, and cutting-edge IT services 
                to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver cutting-edge solutions that drive real business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Rapid development and deployment of enterprise solutions</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600">Rigorous testing and quality assurance processes</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced developers and AI specialists</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4 group-hover:bg-yellow-200 transition-colors">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge technologies and modern approaches</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powered by Modern Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We leverage the latest technologies to build scalable, secure, and efficient solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI models, natural language processing, and predictive analytics to drive intelligent automation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• OpenAI GPT Integration</li>
                  <li>• Custom ML Models</li>
                  <li>• Computer Vision</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud & Security</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade cloud infrastructure with robust security measures and compliance standards.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• AWS & Azure</li>
                  <li>• End-to-End Encryption</li>
                  <li>• SOC 2 Compliance</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Microservices architecture with containerization and auto-scaling for optimal performance.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Kubernetes</li>
                  <li>• Docker Containers</li>
                  <li>• Auto-scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Custom AI implementations, machine learning models, and intelligent automation systems that transform your business operations.
                </p>
                <a href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">
                  Scalable software-as-a-service platforms built for rapid growth and market expansion with modern architecture.
                </p>
                <a href="/services" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600 mb-6">
                  Cloud migration, DevOps, infrastructure management, and technical consulting for enterprise-grade solutions.
                </p>
                <a href="/services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by leading companies worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations."
                </p>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">CEO, TechCorp</div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Outstanding micro SaaS development. They delivered on time and within budget."
                </p>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-gray-600">CTO, InnovateLabs</div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner."
                </p>
                <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                <div className="text-gray-600">VP Engineering, DataFlow</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Expert Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/pricing" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}