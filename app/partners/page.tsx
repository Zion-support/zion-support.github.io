'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Award, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'Microsoft',
      category: 'Cloud Partner',
      description: 'Strategic cloud and AI solutions partner',
      benefits: [
        'Azure cloud expertise',
        'AI and ML services',
        'Enterprise solutions',
        '24/7 support'
      ],
      tier: 'Gold Partner'
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      category: 'Cloud Partner',
      description: 'Advanced cloud infrastructure and AI services',
      benefits: [
        'AWS cloud migration',
        'Machine learning solutions',
        'Serverless architecture',
        'Cost optimization'
      ],
      tier: 'Advanced Partner'
    },
    {
      name: 'Google Cloud',
      logo: 'Google',
      category: 'Cloud Partner',
      description: 'AI and data analytics solutions',
      benefits: [
        'Google Cloud Platform',
        'AI/ML services',
        'Data analytics',
        'Security solutions'
      ],
      tier: 'Premier Partner'
    },
    {
      name: 'IBM',
      logo: 'IBM',
      category: 'AI Partner',
      description: 'Enterprise AI and cognitive solutions',
      benefits: [
        'Watson AI platform',
        'Cognitive computing',
        'Enterprise integration',
        'Consulting services'
      ],
      tier: 'Business Partner'
    },
    {
      name: 'Salesforce',
      logo: 'Salesforce',
      category: 'CRM Partner',
      description: 'Customer relationship management solutions',
      benefits: [
        'Salesforce implementation',
        'Custom development',
        'Integration services',
        'Training and support'
      ],
      tier: 'Consulting Partner'
    },
    {
      name: 'Oracle',
      logo: 'Oracle',
      category: 'Database Partner',
      description: 'Database and enterprise solutions',
      benefits: [
        'Oracle database services',
        'Cloud migration',
        'Performance optimization',
        'Security solutions'
      ],
      tier: 'Gold Partner'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: Shield,
      title: 'Security Compliance',
      description: 'All solutions meet enterprise security and compliance standards'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Faster deployment with pre-built integrations and templates'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across multiple time zones and languages'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations and client satisfaction'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Specialized teams for each technology stack and industry'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partner',
      description: 'Long-term strategic relationships with shared goals',
      features: [
        'Joint go-to-market strategies',
        'Co-development opportunities',
        'Priority support and resources',
        'Executive relationship management'
      ]
    },
    {
      name: 'Technology Partner',
      description: 'Technical integration and solution development',
      features: [
        'API integration and development',
        'Technical training and certification',
        'Joint solution development',
        'Technical support and resources'
      ]
    },
    {
      name: 'Channel Partner',
      description: 'Sales and distribution partnerships',
      features: [
        'Reseller agreements',
        'Marketing support and materials',
        'Sales training and enablement',
        'Revenue sharing opportunities'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Explore our technology partnerships with leading providers like Microsoft, AWS, Google Cloud, and more. Certified expertise and proven solutions." />
        <meta name="keywords" content="technology partners, cloud partners, AI partners, Microsoft Azure, AWS, Google Cloud, enterprise solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Technology Partners">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with leading technology providers to deliver comprehensive solutions and ensure the best outcomes for our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Certified expertise with industry-leading technology platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{partner.logo.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">{partner.tier}</p>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We bring certified expertise, proven methodologies, and a track record of successful implementations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Partnership Tiers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer different levels of partnership to meet various business needs and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and success. 
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 cyber-button"
                >
                  <ArrowRight className="w-5 h-5" />
                  Become a Partner
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Download Partner Kit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;