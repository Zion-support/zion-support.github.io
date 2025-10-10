'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Star, CheckCircle, ArrowRight, Globe, Users, Award, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      benefits: ['Azure credits', 'Co-marketing opportunities', 'Technical support']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'AWS cloud infrastructure and machine learning platform integration',
      benefits: ['AWS credits', 'Training programs', 'Joint solutions']
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'Google Cloud AI and analytics platform collaboration',
      benefits: ['GCP credits', 'AI/ML tools', 'Data analytics']
    },
    {
      name: 'Salesforce',
      logo: '⚡',
      description: 'CRM integration and customer success platform solutions',
      benefits: ['Salesforce integration', 'Custom development', 'Training']
    },
    {
      name: 'IBM',
      logo: '🤖',
      description: 'Watson AI platform and enterprise solutions partnership',
      benefits: ['Watson AI access', 'Enterprise tools', 'Consulting services']
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      description: 'Database and enterprise application integration services',
      benefits: ['Oracle Cloud', 'Database tools', 'Enterprise support']
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Technology Partners',
      description: 'Integrate with leading technology platforms and services',
      features: ['API access', 'Technical documentation', 'Co-development opportunities']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Resell and implement our solutions for your clients',
      features: ['Reseller discounts', 'Sales training', 'Marketing support']
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'Expand our reach to international markets together',
      features: ['Local market expertise', 'Cultural adaptation', 'Regional support']
    },
    {
      icon: Award,
      title: 'Strategic Partners',
      description: 'Long-term strategic alliances for mutual growth',
      features: ['Joint ventures', 'Shared resources', 'Strategic planning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology, channel, and strategic partnerships available." />
        <meta name="keywords" content="technology partners, channel partners, strategic partnerships, business partnerships" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Join our partner ecosystem and grow your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
                Partner With Us
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our growing ecosystem of technology partners and unlock new opportunities for growth, 
                innovation, and success in the AI and IT solutions market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  🤝 Become a Partner
                </a>
              </div>
            </div>
          </section>

          {/* Partnership Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Partnership Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{type.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Current Partners */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                  </div>
                  <p className="text-gray-300 text-center mb-4">{partner.description}</p>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Partner Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Revenue Growth</h3>
                <p className="text-gray-300">Access to new revenue streams and market opportunities</p>
              </div>
              <div className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Technical Support</h3>
                <p className="text-gray-300">Comprehensive training and ongoing technical support</p>
              </div>
              <div className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Market Access</h3>
                <p className="text-gray-300">Expand your reach to new markets and customer segments</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  🤝 Start Partnership
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709 | 
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;