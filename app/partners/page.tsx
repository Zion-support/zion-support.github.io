'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c587

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
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
<<<<<<< HEAD
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
=======
      description: 'Advanced AI and machine learning capabilities with Google Cloud Platform',
      category: 'AI & ML',
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
<<<<<<< HEAD
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
=======
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
<<<<<<< HEAD
    },
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
=======
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Deep integration with leading technology providers for comprehensive solutions'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Certified professionals with expertise in partner technologies and platforms'
    },
    {
      icon: Users,
      title: 'Joint Solutions',
      description: 'Collaborative development of innovative solutions that leverage partner technologies'
    },
    {
      icon: Zap,
      title: 'Enhanced Capabilities',
      description: 'Access to cutting-edge tools and technologies through our partner ecosystem'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
    }
  ];

  const partnerTiers = [
    {
      tier: 'strategic',
      title: 'Strategic Partners',
      description: 'Deep integration and joint go-to-market initiatives',
      color: 'from-purple-500 to-blue-500'
    },
    {
      tier: 'preferred',
      title: 'Preferred Partners',
      description: 'Strong collaboration and preferred vendor status',
      color: 'from-blue-500 to-green-500'
    },
    {
      tier: 'certified',
      title: 'Certified Partners',
      description: 'Certified expertise and proven track record',
      color: 'from-green-500 to-yellow-500'
    }
  ];

  const getTierColor = (tier: string) => {
    const tierConfig = partnerTiers.find(t => t.tier === tier);
    return tierConfig?.color || 'from-gray-500 to-gray-600';
  };

  const getTierTitle = (tier: string) => {
    const tierConfig = partnerTiers.find(t => t.tier === tier);
    return tierConfig?.title || 'Partner';
  };

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
=======
        <title>Partners - Technology Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic technology partners help us deliver comprehensive AI and IT solutions. Learn about our partner ecosystem." />
        <meta name="keywords" content="partners, technology partners, strategic partnerships, cloud partners, AI partners" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We work with leading technology companies to deliver comprehensive AI and IT solutions that drive innovation and business success.
            </p>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Partner Tiers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tier.title}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the world's leading technology companies to deliver comprehensive solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
                  <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.color} ${tierInfo.bgColor}`}>
                        {partner.category}
                      </div>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors mt-3 text-sm"
                        >
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Partners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTierColor(partner.tier)} text-white`}>
                        {getTierTitle(partner.tier)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-300">{partner.category}</span>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Partner With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in partnering with us? We're always looking for innovative companies to join our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <TrendingUp className="w-5 h-5" />
                  View Partnership Program
                </button>
              </div>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Partner With Us
              </Link>
              <Link
                to="/partners/benefits"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn More
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;