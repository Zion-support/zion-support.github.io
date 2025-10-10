'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

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
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Strategic partnership for CRM and customer experience solutions',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Preferred partner for enterprise database and cloud solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Certified partner for IBM Cloud and AI solutions',
      category: 'AI & Cloud',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'Strategic partnership for IT service management and automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'strategic'
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Preferred partner for data warehousing and analytics solutions',
      category: 'Data & Analytics',
      website: 'https://snowflake.com',
      tier: 'preferred'
    },
    {
      name: 'MongoDB',
      logo: '/images/partners/mongodb.png',
      description: 'Certified partner for NoSQL database solutions',
      category: 'Database',
      website: 'https://mongodb.com',
      tier: 'certified'
    }
  ];

  const partnershipBenefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling programs',
    'Priority support and resources',
    'Early access to new features'
  ];

  const tierInfo = {
    strategic: {
      label: 'Strategic Partner',
      color: 'from-purple-500 to-blue-500',
      description: 'Deep integration and joint innovation'
    },
    preferred: {
      label: 'Preferred Partner',
      color: 'from-blue-500 to-green-500',
      description: 'Strong collaboration and mutual growth'
    },
    certified: {
      label: 'Certified Partner',
      color: 'from-green-500 to-yellow-500',
      description: 'Proven expertise and reliable delivery'
    }
  };

  const stats = [
    { label: 'Strategic Partners', value: '15+', icon: Handshake },
    { label: 'Certifications', value: '50+', icon: Award },
    { label: 'Joint Projects', value: '200+', icon: TrendingUp },
    { label: 'Years of Partnership', value: '10+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Certified expertise in Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft partner, AWS partner, Google Cloud partner, certified solutions" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships and certified solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We partner with leading technology companies to deliver comprehensive solutions and drive innovation for our clients.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(tierInfo).map(([tier, info]) => (
              <div key={tier} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{info.label}</h3>
                <p className="text-gray-300 text-center">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-center">
                  <div className="h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-2xl font-bold">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${tierInfo[partner.tier].color} text-white`}>
                      {tierInfo[partner.tier].label}
                    </span>
                    <span className="text-purple-400 text-sm">{partner.category}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Partnering With Us?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our network of technology partners and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Handshake className="w-5 h-5" />
                Become a Partner
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;