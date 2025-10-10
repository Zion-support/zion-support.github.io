'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Award, Handshake, TrendingUp, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      benefits: ['Azure credits', 'Co-marketing opportunities', 'Technical support'],
      tier: 'Platinum',
      website: 'https://microsoft.com'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud Partner',
      description: 'AWS Advanced Consulting Partner providing cloud infrastructure solutions',
      benefits: ['AWS credits', 'Training resources', 'Joint go-to-market'],
      tier: 'Gold',
      website: 'https://aws.amazon.com'
    },
    {
      id: 3,
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI Partner',
      description: 'Google Cloud Partner specializing in AI and machine learning solutions',
      benefits: ['GCP credits', 'AI/ML training', 'Co-development projects'],
      tier: 'Gold',
      website: 'https://cloud.google.com'
    },
    {
      id: 4,
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise Partner',
      description: 'IBM Business Partner for enterprise AI and hybrid cloud solutions',
      benefits: ['IBM credits', 'Enterprise support', 'Joint solutions'],
      tier: 'Silver',
      website: 'https://ibm.com'
    },
    {
      id: 5,
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM Partner',
      description: 'Salesforce Consulting Partner for CRM and customer experience solutions',
      benefits: ['Salesforce credits', 'Certification support', 'AppExchange listing'],
      tier: 'Silver',
      website: 'https://salesforce.com'
    },
    {
      id: 6,
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      category: 'Database Partner',
      description: 'Oracle Partner Network member for database and enterprise applications',
      benefits: ['Oracle credits', 'Technical training', 'Joint marketing'],
      tier: 'Silver',
      website: 'https://oracle.com'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with maximum benefits',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Highest priority support',
        'Maximum co-marketing opportunities',
        'Dedicated account manager',
        'Custom training programs',
        'Joint product development'
      ]
    },
    {
      name: 'Gold',
      description: 'Premium partnerships with significant benefits',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Priority support',
        'Co-marketing opportunities',
        'Training resources',
        'Technical support',
        'Joint go-to-market'
      ]
    },
    {
      name: 'Silver',
      description: 'Standard partnerships with core benefits',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Standard support',
        'Marketing resources',
        'Training access',
        'Technical documentation',
        'Partner portal access'
      ]
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Alliances',
      description: 'Build strong relationships with industry leaders and technology providers'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Accelerate your business growth through our partner ecosystem'
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'Get priority technical support and training from our partners'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your market reach through our global partner network'
    }
  ];

  const stats = [
    { number: '50+', label: 'Partners', icon: Handshake },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Joint Projects', icon: Star },
    { number: '99%', label: 'Partner Satisfaction', icon: CheckCircle }
  ];

  const getTierColor = (tier: string) => {
    const tierMap: { [key: string]: string } = {
      'Platinum': 'from-purple-500 to-pink-500',
      'Gold': 'from-yellow-500 to-orange-500',
      'Silver': 'from-gray-400 to-gray-600'
    };
    return tierMap[tier] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program</title>
        <meta name="description" content="Join Zion Tech Group's partner program and grow your business with our technology solutions and strategic partnerships." />
        <meta name="keywords" content="partners, partner program, strategic alliances, technology partnerships, business growth" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Strategic partnerships that drive innovation and deliver exceptional value to our clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry-leading technology providers to deliver the best solutions to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className={`bg-gradient-to-r ${getTierColor(partner.tier)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {partner.tier}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium mb-3">{partner.category}</p>
                  
                  <p className="text-gray-300 mb-6">{partner.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Visit Partner
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business needs and growth objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{tier.name}</h3>
                  <p className="text-gray-300 text-center mb-6">{tier.description}</p>

                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Become a Partner?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join our partner program and start growing your business with our technology solutions and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
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
