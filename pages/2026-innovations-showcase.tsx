import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Brain, Sparkles, Rocket, Shield, Globe, Cpu, Database, Phone, Mail, MapPin } from 'lucide-react';

export default function Innovations2026Showcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    {
      id: 1,
      name: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence solutions',
      category: 'AI & Business Intelligence',
      price: '$5,000',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards']
    },
    {
      id: 2,
      name: 'Quantum Cybersecurity',
      description: 'Next-generation quantum-resistant security protocols',
      category: 'Quantum & Cybersecurity',
      price: '$8,000',
      features: ['Quantum Encryption', 'Threat Detection', 'Zero Trust Architecture']
    },
    {
      id: 3,
      name: 'AI Automation Platform',
      description: 'Intelligent automation for business processes',
      category: 'AI & Automation',
      price: '$6,500',
      features: ['Process Automation', 'Machine Learning', 'Workflow Optimization']
    }
  ];

  const categories = [
    { name: 'AI & Business Intelligence', icon: Brain, color: 'from-purple-600 to-indigo-700' },
    { name: 'Quantum & Cybersecurity', icon: Shield, color: 'from-blue-600 to-cyan-700' },
    { name: 'AI & Automation', icon: Zap, color: 'from-green-600 to-emerald-700' },
    { name: 'Metaverse & 3D', icon: Globe, color: 'from-pink-600 to-rose-700' },
    { name: 'Quantum & Finance', icon: TrendingUp, color: 'from-yellow-600 to-orange-700' },
    { name: 'AI & Legal Tech', icon: CheckCircle, color: 'from-indigo-600 to-purple-700' },
    { name: 'Space & AI', icon: Rocket, color: 'from-gray-600 to-slate-700' },
    { name: 'Biotech & AI', icon: Cpu, color: 'from-teal-600 to-cyan-700' },
    { name: 'Blockchain & Web3', icon: Database, color: 'from-orange-600 to-red-700' },
    { name: 'AI & Manufacturing', icon: Sparkles, color: 'from-slate-600 to-gray-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Head>
        <title>2026 Innovations Showcase - Zion Tech Group | Revolutionary AI, Quantum & IT Services</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 innovations in AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="2026 innovations, AI services, quantum computing, IT services, micro SaaS, cybersecurity, blockchain, metaverse, IoT, edge computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="2026 Innovations Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI, quantum computing, and IT services for 2026. Contact: +1 302 464 0950" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-innovations-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-innovations-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              2026 Innovations Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our revolutionary AI, quantum computing, and IT services. 
              Experience unprecedented innovation and achieve 1000% ROI with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>1000+ Services Available</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Star className="w-5 h-5" />
                <span>1000% ROI Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <TrendingUp className="w-5 h-5" />
                <span>Market-Leading Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-green-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {}
  };
}