'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Globe, Award, Handshake, CheckCircle, Star, ArrowRight, Building2, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      category: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider',
      benefits: ['Azure Integration', 'AI Services', 'Enterprise Support'],
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      category: 'Cloud Partner',
      description: 'Comprehensive cloud infrastructure solutions',
      benefits: ['AWS Services', 'Scalability', 'Global Reach'],
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning platforms',
      benefits: ['ML Services', 'Data Analytics', 'AI Tools'],
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '💼',
      category: 'Enterprise Partner',
      description: 'Enterprise-grade AI and blockchain solutions',
      benefits: ['Watson AI', 'Blockchain', 'Consulting'],
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '📊',
      category: 'CRM Partner',
      description: 'Customer relationship management solutions',
      benefits: ['CRM Integration', 'Sales Automation', 'Analytics'],
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      category: 'Database Partner',
      description: 'Enterprise database and cloud solutions',
      benefits: ['Database Services', 'Cloud Migration', 'Support'],
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of partners and clients'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Industry-recognized certifications and compliance standards'
    },
    {
      icon: Handshake,
      title: 'Joint Marketing',
      description: 'Collaborative marketing opportunities and co-branded content'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Priority support and dedicated account management'
    },
    {
      icon: Zap,
      title: 'Technical Training',
      description: 'Comprehensive training programs and certification courses'
    },
    {
      icon: Shield,
      title: 'Security Standards',
      description: 'Enterprise-grade security and compliance frameworks'
    }
  ];

  const tiers = [
    {
      name: 'Platinum',
      color: 'from-cyan-500 to-blue-600',
      requirements: 'Strategic partnership with significant revenue commitment',
      benefits: ['Priority support', 'Co-marketing opportunities', 'Custom solutions', 'Dedicated resources']
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-600',
      requirements: 'Established partnership with proven track record',
      benefits: ['Enhanced support', 'Training programs', 'Marketing support', 'Technical resources']
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      requirements: 'Growing partnership with potential for expansion',
      benefits: ['Standard support', 'Basic training', 'Marketing materials', 'Community access']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Partner
              </span>
              <br />
              <span className="text-white">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing network of partners and unlock new opportunities in AI, cloud computing, 
              and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${partner.tier === 'Platinum' ? 'from-cyan-500 to-blue-600' : partner.tier === 'Gold' ? 'from-yellow-500 to-orange-600' : 'from-gray-400 to-gray-600'} text-white`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{partner.category}</p>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.requirements}</p>
                  </div>
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                  Download Partnership Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
