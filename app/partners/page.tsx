'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      description: 'Premier consulting partner for AWS cloud infrastructure',
      category: 'Cloud Infrastructure'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      description: 'Authorized partner for Google Cloud AI and ML services',
      category: 'AI & Machine Learning'
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      description: 'Business partner for IBM Watson AI and enterprise solutions',
      category: 'Enterprise AI'
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      description: 'Certified partner for Salesforce CRM and automation',
      category: 'CRM & Automation'
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      description: 'Gold partner for Oracle database and enterprise applications',
      category: 'Database & Enterprise'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology providers'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Access to partner support channels and technical resources'
    },
    {
      icon: Handshake,
      title: 'Strategic Relationships',
      description: 'Direct relationships with technology vendors and solution providers'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful implementations and client satisfaction'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partners and strategic alliances that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, technology partners, strategic alliances, AI partners, IT partners, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with leading technology providers to deliver the best AI and IT solutions 
            for our clients. Our strategic partnerships ensure access to cutting-edge technologies 
            and expert support.
          </p>
        </section>

        {/* Partners Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-4xl font-bold text-white opacity-50">
                    {partner.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {partner.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {partner.category}
                  </span>
                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Initial Discussion</h3>
                <p className="text-gray-300">
                  We discuss your business goals and how our partnership can help achieve them.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Partnership Agreement</h3>
                <p className="text-gray-300">
                  We formalize our partnership with clear terms and mutual benefits.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work together to deliver exceptional solutions and drive mutual success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Partnering?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Become a Partner</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;