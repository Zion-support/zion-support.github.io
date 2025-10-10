'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      category: 'Cloud Services',
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
      description: 'Enterprise AI and data analytics partner',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions',
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
      description: 'Networking and security solutions',
      category: 'Networking',
      website: 'https://cisco.com',
      tier: 'certified'
    },
    {
      name: 'VMware',
      logo: '/images/partners/vmware.png',
      description: 'Virtualization and cloud infrastructure',
      category: 'Virtualization',
      website: 'https://vmware.com',
      tier: 'certified'
    },
    {
      name: 'Dell Technologies',
      logo: '/images/partners/dell.png',
      description: 'Hardware and infrastructure solutions',
      category: 'Hardware',
      website: 'https://dell.com',
      tier: 'certified'
    },
    {
      name: 'Red Hat',
      logo: '/images/partners/redhat.png',
      description: 'Open source and enterprise Linux solutions',
      category: 'Open Source',
      website: 'https://redhat.com',
      tier: 'certified'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'Enterprise resource planning solutions',
      category: 'ERP',
      website: 'https://sap.com',
      tier: 'preferred'
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

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: Award,
      title: 'Preferred Status',
      description: 'We maintain preferred partner status with major technology vendors'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Access to dedicated partner support and resources'
    },
    {
      icon: Handshake,
      title: 'Strategic Relationships',
      description: 'Long-term partnerships built on trust and mutual success'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Early access to new technologies and market trends'
    },
    {
      icon: Zap,
      title: 'Faster Implementation',
      description: 'Accelerated deployment with partner-optimized solutions'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic': return 'border-cyan-500 bg-cyan-500/10';
      case 'preferred': return 'border-blue-500 bg-blue-500/10';
      case 'certified': return 'border-green-500 bg-green-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'strategic': return 'Strategic Partner';
      case 'preferred': return 'Preferred Partner';
      case 'certified': return 'Certified Partner';
      default: return 'Partner';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, certified partners, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry-leading technology partners to deliver cutting-edge AI and IT solutions that drive business success.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 rounded-2xl p-8 border-2 ${getTierColor(partner.tier)} hover:scale-105 transition-all duration-300 group`}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      partner.tier === 'strategic' ? 'bg-cyan-500/20 text-cyan-400' :
                      partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {getTierLabel(partner.tier)}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-4">{partner.description}</p>
                  <p className="text-cyan-400 text-center text-sm font-medium mb-6">{partner.category}</p>
                  
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-gray-300">Our partnerships provide mutual benefits and drive innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Tiers</h2>
              <p className="text-gray-300">Different levels of partnership for different needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Partners</h3>
                <p className="text-gray-300 mb-6">
                  Long-term strategic relationships with shared goals and deep integration
                </p>
                <ul className="text-left space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Joint go-to-market strategies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Co-innovation projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Dedicated resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Preferred Partners</h3>
                <p className="text-gray-300 mb-6">
                  Preferred status with enhanced support and collaboration opportunities
                </p>
                <ul className="text-left space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Enhanced support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Training programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Marketing support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-green-500/20 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Certified Partners</h3>
                <p className="text-gray-300 mb-6">
                  Certified expertise with proven capabilities and ongoing support
                </p>
                <ul className="text-left space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Certified expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Partner portal access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in Partnering With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology partners and help us deliver innovative solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;