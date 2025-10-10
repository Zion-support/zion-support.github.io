'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

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
      description: 'Certified partner for Google Cloud Platform and AI/ML services',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partnership for enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Preferred partner for GPU-accelerated AI and deep learning solutions',
      category: 'AI Hardware',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM integration and customer experience solutions',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep knowledge of partner technologies'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Joint Solutions',
      description: 'Collaborative development of innovative solutions for clients'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Faster Implementation',
      description: 'Accelerated deployment with pre-built integrations and best practices'
    }
  ];

  const partnerTiers = {
    strategic: {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with industry leaders',
      color: 'from-purple-500 to-blue-600',
      count: partners.filter(p => p.tier === 'strategic').length
    },
    preferred: {
      name: 'Preferred Partners',
      description: 'Preferred technology partners with proven track records',
      color: 'from-blue-500 to-green-600',
      count: partners.filter(p => p.tier === 'preferred').length
    },
    certified: {
      name: 'Certified Partners',
      description: 'Certified partners with specialized expertise',
      color: 'from-green-500 to-yellow-600',
      count: partners.filter(p => p.tier === 'certified').length
    }
  };

  return (
<<<<<<< HEAD
    <>
=======
    <div className="min-h-screen bg-gray-50">
>>>>>>> cursor/fix-errors-and-merge-to-main-581e
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partners and ecosystem that help us deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, AI solutions, IT services" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{partner.name}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
=======
        <title>Partners | Zion Tech Group - Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic partnerships with leading technology companies to deliver cutting-edge solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center"
                >
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{partner.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
                    {partner.category}
                  </span>
=======
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Certified expertise in Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft partner, AWS partner, Google Cloud partner, certified solutions" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Technology Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Years of Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Certified Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} text-center`}>
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
=======
        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
                    <span className="text-gray-300">{benefit}</span>
=======
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {benefit}
>>>>>>> cursor/website-audit-and-update-with-deployment-758b
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem and help shape the future of AI and IT solutions.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Partner With Us
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
=======
        {/* Become a Partner CTA */}
        <section className="py-16 px-4">
=======
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-581e
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Collaborating with industry leaders to deliver cutting-edge solutions and exceptional value to our clients
            </p>
          </div>
        </div>
      </section>

      {/* Partner Tiers Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partnership Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain strategic relationships with leading technology companies to provide comprehensive solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(partnerTiers).map(([tier, info]) => (
              <div key={tier} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.name}</h3>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <div className="text-2xl font-bold text-gray-900">{info.count} Partners</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders to deliver innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-600">{partner.name.charAt(0)}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    partner.tier === 'strategic' 
                      ? 'bg-purple-100 text-purple-800'
                      : partner.tier === 'preferred'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-3">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{partner.category}</span>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                      Visit Website
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnerships deliver real value through collaboration, expertise, and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our network of technology partners and unlock new opportunities for growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Apply to Partner
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-46ce
    </>
=======
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-581e
  );
};

export default PartnersPage;