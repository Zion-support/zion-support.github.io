import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      category: 'Cloud & AI',
      description: 'Strategic partnership for Azure cloud services and AI solutions',
      tier: 'Platinum',
      benefits: ['Azure credits', 'Co-marketing opportunities', 'Technical support']
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      category: 'Cloud Infrastructure',
      description: 'Leading cloud infrastructure and machine learning services',
      tier: 'Gold',
      benefits: ['AWS credits', 'Training programs', 'Joint solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      category: 'AI & Analytics',
      description: 'Advanced AI and data analytics platform partnership',
      tier: 'Gold',
      benefits: ['GCP credits', 'AI/ML tools', 'Co-development']
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      category: 'CRM & Automation',
      description: 'Customer relationship management and business automation',
      tier: 'Silver',
      benefits: ['Salesforce credits', 'Integration support', 'Training']
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      category: 'Enterprise Solutions',
      description: 'Enterprise-grade solutions and consulting services',
      tier: 'Silver',
      benefits: ['IBM credits', 'Consulting hours', 'Technical resources']
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      category: 'Database & ERP',
      description: 'Database solutions and enterprise resource planning',
      tier: 'Bronze',
      benefits: ['Oracle credits', 'Technical support', 'Training materials']
    }
  ];

  const benefits = [
    {
      title: 'Revenue Growth',
      description: 'Increase your revenue through our partner referral program',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Technical Support',
      description: 'Get priority technical support and training resources',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Marketing Support',
      description: 'Co-marketing opportunities and joint go-to-market strategies',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Certification',
      description: 'Become a certified partner with industry recognition',
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const tiers = [
    {
      name: 'Platinum',
      requirements: 'Strategic partnership with significant revenue commitment',
      benefits: ['Highest revenue share', 'Dedicated support', 'Co-innovation projects'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold',
      requirements: 'Established partnership with strong revenue potential',
      benefits: ['High revenue share', 'Priority support', 'Joint marketing'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Silver',
      requirements: 'Growing partnership with proven track record',
      benefits: ['Good revenue share', 'Standard support', 'Marketing resources'],
      color: 'from-gray-300 to-gray-500'
    },
    {
      name: 'Bronze',
      requirements: 'New partnership with potential for growth',
      benefits: ['Base revenue share', 'Basic support', 'Training resources'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of technology partners and unlock new opportunities for growth, 
              innovation, and success in the digital transformation space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/partners/benefits"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Benefits
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of joining our partner ecosystem and how we can help grow your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner Tiers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business goals and growth objectives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${tier.color} mb-4`}>
                      {tier.name}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name} Partner</h3>
                    <p className="text-gray-300 text-sm">{tier.requirements}</p>
                  </div>
                  <ul className="space-y-3">
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

        {/* Current Partners */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain"
                    />
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${tiers.find(t => t.name === partner.tier)?.color || 'from-gray-400 to-gray-600'}`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{partner.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <ul className="space-y-1">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Partner Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your partnership journey today and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/partners/requirements"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Requirements
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;