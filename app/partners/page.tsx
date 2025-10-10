'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Shield, Users, Award, CheckCircle, ArrowRight, Building, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function PartnersPage() {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and services',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google.png',
      description: 'AI and machine learning solutions',
      category: 'AI'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and consulting',
      category: 'Enterprise'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'Business'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise solutions',
      category: 'Database'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customers through our partner network'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security solutions and compliance frameworks'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support teams and technical expertise'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Certified and validated solutions for enterprise deployment'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Partners' },
    { number: '50+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
        <meta name="keywords" content="partners, partnership, business partners, technology partners, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Partners
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our growing ecosystem of technology partners and unlock new opportunities for growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-3">{partner.description}</p>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Handshake className="mr-2 h-5 w-5" />
                  Become a Partner
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <SEOOptimizer />
    </div>
  );
}
