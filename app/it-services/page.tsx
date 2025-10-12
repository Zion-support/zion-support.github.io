import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Cloud, Shield, Database, Smartphone, Globe, Zap, Settings, Users, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
      features: ['AWS/Azure/GCP', 'Zero Downtime', 'Cost Optimization', 'Security Compliance'],
      pricing: 'Starting at $2,500'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security solutions.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
      pricing: '$1,500/month'
    },
    {
      icon: <Database className="w-12 h-12 text-green-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
      pricing: '$2,000/month'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-400" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      pricing: 'Starting at $5,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, data analytics, and mobile development. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, data analytics, mobile development, IT consulting, infrastructure" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Comprehensive IT solutions to power your digital transformation. From cloud migration to cybersecurity, 
              we provide the expertise and technology your business needs to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}