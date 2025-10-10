'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Shield, Zap } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  benefits: string[];
  tier: 'Platinum' | 'Gold' | 'Silver';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for cloud solutions and AI integration.',
      category: 'Cloud & AI',
      benefits: [
        'Azure cloud services',
        'AI and machine learning tools',
        'Enterprise security solutions',
        'Co-marketing opportunities'
      ],
      tier: 'Platinum'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and AI services partnership.',
      category: 'Cloud Infrastructure',
      benefits: [
        'Scalable cloud infrastructure',
        'AI and ML services',
        'Global data centers',
        'Technical support'
      ],
      tier: 'Platinum'
    },
    {
      id: 'google',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and analytics solutions partnership.',
      category: 'AI & Analytics',
      benefits: [
        'Google AI services',
        'BigQuery analytics',
        'Machine learning tools',
        'Data processing solutions'
      ],
      tier: 'Gold'
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions integration.',
      category: 'CRM & Sales',
      benefits: [
        'Salesforce platform integration',
        'Customer data management',
        'Sales automation tools',
        'Marketing cloud solutions'
      ],
      tier: 'Gold'
    },
    {
      id: 'oracle',
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions.',
      category: 'Database & Enterprise',
      benefits: [
        'Oracle database solutions',
        'Enterprise applications',
        'Cloud infrastructure',
        'Security and compliance'
      ],
      tier: 'Silver'
    },
    {
      id: 'ibm',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'AI and enterprise solutions partnership.',
      category: 'AI & Enterprise',
      benefits: [
        'IBM Watson AI services',
        'Enterprise software',
        'Cloud solutions',
        'Consulting services'
      ],
      tier: 'Silver'
    }
  ];

  const partnershipTiers = [
    {
      tier: 'Platinum',
      description: 'Strategic partnerships with shared technology roadmaps and co-innovation.',
      benefits: [
        'Joint product development',
        'Co-marketing programs',
        'Technical integration support',
        'Priority support and training',
        'Revenue sharing opportunities'
      ],
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      tier: 'Gold',
      description: 'Technology partnerships with integration and go-to-market collaboration.',
      benefits: [
        'API integration support',
        'Marketing collaboration',
        'Technical training',
        'Certification programs',
        'Joint customer success'
      ],
      icon: Award,
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      tier: 'Silver',
      description: 'Solution partnerships with basic integration and support.',
      benefits: [
        'Basic integration support',
        'Documentation and training',
        'Technical support',
        'Partner portal access',
        'Co-selling opportunities'
      ],
      icon: Users,
      color: 'from-gray-400 to-gray-500'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide partner network and customer base.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards for all partnerships.'
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Quick and easy integration with our comprehensive APIs and SDKs.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Dedicated partner success managers and technical support teams.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and leverage our technology solutions to grow your business with Zion Tech Group." />
        <meta name="keywords" content="technology partners, strategic partnerships, business partnerships, technology integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Partnerships
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Benefits
            </button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading technology companies that trust us to deliver innovative solutions to their customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500 text-black' :
                    partner.tier === 'Gold' ? 'bg-yellow-600 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {partner.tier}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-gray-300 mb-4">{partner.description}</p>
                
                <div className="text-sm text-purple-400 mb-4">{partner.category}</div>

                <ul className="space-y-2">
                  {partner.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div
                key={tier.tier}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">{tier.tier}</h3>
                <p className="text-gray-300 mb-6 text-center">{tier.description}</p>

                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and start growing your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply for Partnership
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;