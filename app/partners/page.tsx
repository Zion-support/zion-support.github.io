'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';
=======
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-975f

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
<<<<<<< HEAD
      description: 'Preferred partner for AWS cloud infrastructure and machine learning services',
      category: 'Cloud & AI',
=======
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
<<<<<<< HEAD
      description: 'Certified partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
=======
      description: 'Advanced AI and data analytics solutions on Google Cloud Platform',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
<<<<<<< HEAD
      description: 'Strategic partnership for CRM integration and business automation',
      category: 'Business Solutions',
=======
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
<<<<<<< HEAD
      description: 'Preferred partner for enterprise database and cloud solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Certified partner for IBM Watson AI and enterprise solutions',
      category: 'AI & Analytics',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'Dell Technologies',
      logo: '/images/partners/dell.png',
      description: 'Strategic partnership for infrastructure and hardware solutions',
      category: 'Infrastructure',
      website: 'https://dell.com',
      tier: 'strategic'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Preferred partner for networking and security solutions',
      category: 'Networking & Security',
      website: 'https://cisco.com',
      tier: 'preferred'
    },
    {
      name: 'VMware',
      logo: '/images/partners/vmware.png',
      description: 'Certified partner for virtualization and cloud infrastructure',
      category: 'Virtualization',
      website: 'https://vmware.com',
      tier: 'certified'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'Strategic partnership for enterprise resource planning solutions',
      category: 'Enterprise Software',
      website: 'https://sap.com',
      tier: 'strategic'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'Preferred partner for IT service management and automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'preferred'
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Certified partner for data warehousing and analytics solutions',
      category: 'Data & Analytics',
      website: 'https://snowflake.com',
=======
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      tier: 'certified'
    }
  ];

<<<<<<< HEAD
  const partnerTiers = {
    strategic: {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'from-blue-600 to-purple-600',
      icon: <Award className="w-6 h-6" />
    },
    preferred: {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'from-green-600 to-blue-600',
      icon: <Handshake className="w-6 h-6" />
    },
    certified: {
      name: 'Certified Partners',
      description: 'Validated partners with specialized expertise',
      color: 'from-orange-600 to-red-600',
      icon: <CheckCircle className="w-6 h-6" />
=======
  const partnershipTiers = [
    {
      name: 'Strategic',
      description: 'Long-term strategic partnerships with shared vision and deep integration',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      icon: Award
    },
    {
      name: 'Preferred',
      description: 'Preferred vendor relationships with priority support and collaboration',
      bgColor: 'bg-gradient-to-br from-cyan-500/20 to-teal-500/20',
      borderColor: 'border-cyan-400/50',
      icon: Users
    },
    {
      name: 'Certified',
      description: 'Certified partner status with proven expertise and reliable delivery',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
      icon: CheckCircle
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
    }
  };

  const benefits = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: 'Access to Latest Technologies',
      description: 'Get early access to cutting-edge solutions and innovations from our partners'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Support',
      description: 'Benefit from specialized expertise and dedicated support from our partner network'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Faster Implementation',
      description: 'Accelerate your projects with pre-built integrations and proven methodologies'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'Ensure the highest quality solutions with certified and validated technologies'
    }
  ];

  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];

  const getPartnersByTier = (tier: keyof typeof partnerTiers) => 
    partners.filter(partner => partner.tier === tier);

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. We work with industry leaders to deliver the best solutions for your business." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, certified partners" />
=======
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Partners
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                We work with industry leaders to deliver the best technology solutions for your business
              </p>
=======
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation in AI, cloud computing, and enterprise technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Partnership Program
              </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Partner Tiers */}
        {Object.entries(partnerTiers).map(([tierKey, tierInfo]) => {
          const tierPartners = getPartnersByTier(tierKey as keyof typeof partnerTiers);
          if (tierPartners.length === 0) return null;

          return (
            <section key={tierKey} className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`bg-gradient-to-r ${tierInfo.color} p-3 rounded-full text-white mr-4`}>
                      {tierInfo.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{tierInfo.name}</h2>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{tierInfo.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierPartners.map((partner, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                      <div className="flex items-center mb-4">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-12 h-12 object-contain mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                          <span className="text-sm text-blue-600 font-medium">{partner.category}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{partner.description}</p>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      )}
=======
        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} text-center`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
                  <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our partnerships provide you with access to the latest technologies and expert support
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
=======
                );
              })}
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Become a Partner */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join our partner network and help us deliver innovative solutions to businesses worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Partner With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
=======
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Market Access</h3>
                <p className="text-gray-300">Access to new markets and customer segments through our partner network</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Certification</h3>
                <p className="text-gray-300">Get certified on our platforms and solutions with dedicated training programs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support</h3>
                <p className="text-gray-300">Dedicated partner support and technical resources to help you succeed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">Joint go-to-market initiatives and co-innovation opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
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
>>>>>>> cursor/analyze-improve-and-deploy-application-975f
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;