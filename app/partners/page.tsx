'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/200x100/0078d4/ffffff?text=Microsoft',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://via.placeholder.com/200x100/ff9900/ffffff?text=AWS',
      description: 'Premier consulting partner for AWS cloud infrastructure',
      category: 'Cloud Infrastructure',
      benefits: ['AWS credits', 'Training resources', 'Joint solutions']
    },
    {
      name: 'Google Cloud',
      logo: 'https://via.placeholder.com/200x100/4285f4/ffffff?text=Google+Cloud',
      description: 'Technology partner for Google Cloud Platform services',
      category: 'Cloud & AI',
      benefits: ['GCP credits', 'Technical training', 'Co-development']
    },
    {
      name: 'IBM',
      logo: 'https://via.placeholder.com/200x100/052fad/ffffff?text=IBM',
      description: 'Business partner for IBM Watson AI and enterprise solutions',
      category: 'AI & Enterprise',
      benefits: ['Watson access', 'Enterprise support', 'Joint go-to-market']
    },
    {
      name: 'Salesforce',
      logo: 'https://via.placeholder.com/200x100/00a1e0/ffffff?text=Salesforce',
      description: 'Consulting partner for Salesforce CRM and automation',
      category: 'CRM & Automation',
      benefits: ['Salesforce credits', 'Certification support', 'Co-selling']
    },
    {
      name: 'Oracle',
      logo: 'https://via.placeholder.com/200x100/ff0000/ffffff?text=Oracle',
      description: 'Technology partner for Oracle database and cloud solutions',
      category: 'Database & Cloud',
      benefits: ['Oracle credits', 'Technical support', 'Joint solutions']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Technical Support',
      description: 'Access to dedicated technical resources and support teams'
    },
    {
      icon: CheckCircle,
      title: 'Training & Certification',
      description: 'Comprehensive training programs and certification opportunities'
    },
    {
      icon: CheckCircle,
      title: 'Co-Marketing',
      description: 'Joint marketing initiatives and co-branded content'
    },
    {
      icon: CheckCircle,
      title: 'Credits & Discounts',
      description: 'Access to partner credits and special pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
        <meta name="keywords" content="partners, partner program, technology partners, business partners, AI partners" />
      </Helmet>

      <Navigation />

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our growing ecosystem of technology partners and unlock new opportunities for growth and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technology companies to deliver the best solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    {partner.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">
                  {partner.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-3">Partnership Benefits:</h4>
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to join our partner ecosystem? Let's discuss how we can work together to deliver exceptional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partners@ziontechgroup.com"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Contact Partnership Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;