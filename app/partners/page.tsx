'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning capabilities with Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and quantum computing expertise',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU acceleration and AI computing solutions',
      category: 'Hardware & AI',
      website: 'https://nvidia.com'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and AI-powered customer solutions',
      category: 'CRM & AI',
      website: 'https://salesforce.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Priority product updates',
    'Dedicated partnership manager',
    'Custom integration support',
    'Revenue sharing programs'
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: 'Technology Partners',
      description: 'Strategic technology alliances for product integration and development'
    },
    {
      icon: Handshake,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships for market expansion'
    },
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Certified implementation and support partners for our solutions'
    },
    {
      icon: Users,
      title: 'Community Partners',
      description: 'Open source and community-driven partnership initiatives'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Priority support and resources',
    'Innovation labs and R&D collaboration',
    'Global reach and local expertise',
    'Compliance and security standards',
    'Scalable solutions for any size business',
    'Dedicated partner success managers'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Deep integration and joint development',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      name: 'Preferred Partners',
      description: 'Certified solutions and priority support',
      icon: Handshake,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'Certified Partners',
      description: 'Authorized implementation and support',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships & Alliances</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, channel partners, Microsoft, AWS, Google Cloud" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships and alliances with leading technology companies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge AI and IT solutions. 
              Join our partner ecosystem and grow your business with us.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Strategic Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-32 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white opacity-50">{partner.name.charAt(0)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-cyan-400 text-sm font-medium text-center mb-3">
                    {partner.category}
                  </p>
                  
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {partner.description}
                  </p>
                  
                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join our partner ecosystem and unlock new opportunities for growth. 
              We're looking for companies that share our vision of transforming businesses with AI and IT solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Technology Partners</h3>
                <p className="text-gray-300 mb-4">
                  Integrate your technology with our AI and IT solutions to create powerful combined offerings.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• API integration support</li>
                  <li>• Technical documentation</li>
                  <li>• Co-development opportunities</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Channel Partners</h3>
                <p className="text-gray-300 mb-4">
                  Resell our solutions and earn competitive commissions while helping clients transform their businesses.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Competitive commission rates</li>
                  <li>• Marketing support</li>
                  <li>• Sales training</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Learn More
                <Zap className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;