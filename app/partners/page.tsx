'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning solutions partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and cybersecurity solutions',
      category: 'AI & Security',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Networking and cybersecurity solutions',
      category: 'Security',
      website: 'https://cisco.com',
      tier: 'certified'
    },
    {
      name: 'Dell Technologies',
      logo: '/images/partners/dell.png',
      description: 'Infrastructure and storage solutions',
      category: 'Infrastructure',
      website: 'https://dell.com',
      tier: 'certified'
    },
    {
      name: 'VMware',
      logo: '/images/partners/vmware.png',
      description: 'Virtualization and cloud management',
      category: 'Virtualization',
      website: 'https://vmware.com',
      tier: 'certified'
    },
    {
      name: 'Red Hat',
      logo: '/images/partners/redhat.png',
      description: 'Open source solutions and support',
      category: 'Open Source',
      website: 'https://redhat.com',
      tier: 'certified'
    },
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and monitoring solutions',
      category: 'Analytics',
      website: 'https://splunk.com',
      tier: 'certified'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and automation',
      category: 'ITSM',
      website: 'https://servicenow.com',
      tier: 'certified'
    }
  ];

  const partnerStats = [
    { icon: Users, value: '50+', label: 'Partners' },
    { icon: Building2, value: '15+', label: 'Industries' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '24/7', label: 'Support' }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Accelerated deployment with pre-built integrations and best practices'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Direct access to partner resources and support channels'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations and client satisfaction'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'border-cyan-500 bg-cyan-500/10';
      case 'preferred':
        return 'border-purple-500 bg-purple-500/10';
      case 'certified':
        return 'border-green-500 bg-green-500/10';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'Strategic Partner';
      case 'preferred':
        return 'Preferred Partner';
      case 'certified':
        return 'Certified Partner';
      default:
        return 'Partner';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with industry leaders to deliver the best solutions." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry-leading technology partners to deliver comprehensive 
            solutions that drive real business value for our clients.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technology Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain strategic partnerships with leading technology companies to ensure 
              we can deliver the best solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300 hover:border-cyan-500/40 ${getTierColor(partner.tier)}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                        {getTierLabel(partner.tier)}
                      </span>
                      <span className="text-xs text-gray-400">{partner.category}</span>
                    </div>
                  </div>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships provide unique advantages that benefit our clients and partners alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Partnering With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Partnership Team</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;