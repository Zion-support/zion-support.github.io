'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Handshake, Users, Award } from 'lucide-react';

const PartnersPage = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint marketing opportunities',
    'Technical support and training',
    'Co-selling programs',
    'Early access to new features',
    'Dedicated partner success manager'  ];

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
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities with Zion Tech Group. Strategic partnerships for mutual growth and innovation." />
        <meta name="keywords" content="technology partners, strategic partnerships, business partnerships, technology ecosystem, partner program" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Strategic
              </span>
              <br />
              <span className="text-white">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300">Trusted by leading technology companies worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 w-auto filter brightness-0 invert"
                />
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Handshake className="mr-2 h-5 w-5" />
              Become a Partner
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>  );
};

export default PartnersPage;