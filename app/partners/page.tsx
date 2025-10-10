'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield, Zap, Users, Award, Star } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Cloud & AI',
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      benefits: [
        'Azure cloud infrastructure',
        'AI and machine learning tools',
        'Enterprise security solutions',
        'Global support network'
      ],
      tier: 'Platinum'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud Computing',
      description: 'Leading cloud provider partnership for scalable infrastructure',
      benefits: [
        'AWS cloud services',
        'Machine learning platforms',
        'Data analytics tools',
        'Global infrastructure'
      ],
      tier: 'Platinum'
    },
    {
      id: 3,
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI & Analytics',
      description: 'Advanced AI and analytics solutions partnership',
      benefits: [
        'Google Cloud Platform',
        'AI and ML services',
        'BigQuery analytics',
        'TensorFlow integration'
      ],
      tier: 'Gold'
    },
    {
      id: 4,
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM & Automation',
      description: 'Customer relationship management and automation solutions',
      benefits: [
        'Salesforce CRM',
        'Marketing automation',
        'Customer service tools',
        'Integration capabilities'
      ],
      tier: 'Gold'
    },
    {
      id: 5,
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'AI & Security',
      description: 'Enterprise AI and cybersecurity solutions',
      benefits: [
        'Watson AI platform',
        'Security solutions',
        'Enterprise software',
        'Consulting services'
      ],
      tier: 'Silver'
    },
    {
      id: 6,
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      category: 'Database & Cloud',
      description: 'Database and cloud infrastructure solutions',
      benefits: [
        'Oracle Cloud Infrastructure',
        'Database solutions',
        'Enterprise applications',
        'Security services'
      ],
      tier: 'Silver'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide partner networks and resources'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security solutions and compliance support'
    },
    {
      icon: Zap,
      title: 'Faster Innovation',
      description: 'Accelerated development with cutting-edge technologies'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support teams and technical expertise'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Certified and validated technology solutions'
    },
    {
      icon: Star,
      title: 'Competitive Pricing',
      description: 'Preferred pricing and special offers for clients'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with industry leaders',
      benefits: [
        'Priority support and resources',
        'Joint go-to-market initiatives',
        'Custom solution development',
        'Executive relationship management'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Gold',
      description: 'Preferred partnerships with key technology providers',
      benefits: [
        'Enhanced technical support',
        'Co-marketing opportunities',
        'Training and certification programs',
        'Dedicated account management'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Silver',
      description: 'Collaborative partnerships for specific solutions',
      benefits: [
        'Standard support and resources',
        'Solution integration support',
        'Training materials and documentation',
        'Regular partner updates'
      ],
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with industry leaders to deliver the best AI and IT solutions to our clients." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, Salesforce, IBM, Oracle, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text glitch-text" data-text="Strategic Partners">
              Strategic Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with industry leaders to deliver the most advanced AI and IT solutions to our clients. 
              Our strategic alliances ensure access to cutting-edge technologies and global support.
            </p>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Why Partner With Us?
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our partnerships provide mutual benefits and enhanced value for all stakeholders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="quantum-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Our Partners
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We work with the world's leading technology companies to deliver exceptional solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div key={partner.id} className="quantum-card hologram-card p-8 hover:scale-105 transition-all duration-300 card-hover-lift group">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-3xl font-bold text-cyan-400">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                        {partner.category}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        partner.tier === 'Platinum' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' :
                        partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                        'bg-gradient-to-r from-gray-400 to-gray-600 text-white'
                      }`}>
                        {partner.tier}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium py-3 border border-cyan-400/30 rounded-lg hover:border-cyan-400/50 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Partnership Tiers
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We offer different partnership levels to meet the needs of various organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="quantum-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 text-left">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
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
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Interested in Partnership?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation. 
                Let's work together to deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="cyber-button"
                >
                  Become a Partner
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📞 Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;