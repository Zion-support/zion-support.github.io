'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      description: 'Preferred partner for AWS cloud infrastructure and machine learning services',
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
      description: 'Strategic partnership for CRM and business automation solutions',
      category: 'Business Software',
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Preferred partner for enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Certified partner for database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: 'Strategic Alliances',
      description: 'Deep partnerships with industry leaders to deliver comprehensive solutions'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Certified professionals with proven expertise in partner technologies'
    },
    {
      icon: Users,
      title: 'Joint Solutions',
      description: 'Collaborative development of innovative solutions combining our expertise'
    },
    {
      icon: Zap,
      title: 'Accelerated Innovation',
      description: 'Access to cutting-edge technologies and early adoption opportunities'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with industry leaders',
      color: 'from-blue-500 to-purple-600',
      partners: partners.filter(p => p.tier === 'strategic')
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred relationships with key technology providers',
      color: 'from-green-500 to-blue-600',
      partners: partners.filter(p => p.tier === 'preferred')
    },
    {
      name: 'Certified Partners',
      description: 'Certified expertise in specific technologies and platforms',
      color: 'from-orange-500 to-red-600',
      partners: partners.filter(p => p.tier === 'certified')
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Strategic partnerships with leading technology companies. Microsoft, AWS, Google Cloud, Salesforce, and more. Certified expertise and joint solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft partner, AWS partner, Google Cloud partner, certified solutions" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships for comprehensive solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with industry leaders to deliver comprehensive, cutting-edge solutions 
              that drive innovation and business success.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>50+ Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certified Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                <span>Strategic Alliances</span>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver comprehensive solutions 
                that combine the best of multiple technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        {partnershipTiers.map((tier, tierIndex) => (
          <section key={tierIndex} className={`py-16 px-4 ${tierIndex % 2 === 1 ? 'bg-slate-800/30' : ''}`}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{tier.name}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{tier.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tier.partners.map((partner, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tier.color} text-white`}>
                        {partner.tier.toUpperCase()}
                      </span>
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
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Become a Partner CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;