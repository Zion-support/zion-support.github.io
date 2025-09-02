import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

const Home: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From innovative micro SaaS applications to cutting-edge AI solutions and enterprise IT services, 
              we provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6">
                Innovative, focused software solutions that solve specific business problems with minimal overhead.
              </p>
              <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions for modern businesses.
              </p>
              <Link href="/services/it-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages.
              </p>
              <Link href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Innovative Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest cutting-edge solutions that are transforming industries and driving business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Document Processor */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Document Processor Pro</h3>
              <p className="text-gray-600 mb-6">
                Intelligent document processing with 99.9% OCR accuracy, smart data extraction, and automated workflows.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$35/mo</span>
                <Link href="/services/ai-document-processor" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Blockchain Integration */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain Integration Services</h3>
              <p className="text-gray-600 mb-6">
                Complete blockchain solutions including smart contracts, DeFi protocols, and NFT platforms.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">$15K+</span>
                <Link href="/services/blockchain-integration" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* AI Drug Discovery */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Drug Discovery Platform</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI platform for pharmaceutical drug discovery, molecular design, and clinical trial optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$50K+</span>
                <Link href="/services/ai-drug-discovery" className="text-green-600 hover:text-green-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert quantum computing consulting for optimization problems, cryptography, and research applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">$25K+</span>
                <Link href="/services/quantum-computing-consulting" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* AI Climate Modeling */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Climate Modeling Solutions</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI climate modeling for weather prediction, environmental monitoring, and climate change analysis.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">$20K+</span>
                <Link href="/services/ai-climate-modeling" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Smart Calendar Scheduler */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Calendar Scheduler</h3>
              <p className="text-gray-600 mb-6">
                AI-powered calendar management with intelligent scheduling, conflict resolution, and time optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">$12/mo</span>
                <Link href="/services/smart-calendar-scheduler" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;