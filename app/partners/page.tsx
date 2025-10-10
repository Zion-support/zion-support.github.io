'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic partner for Azure cloud services and AI solutions',
      category: 'Technology',
      benefits: ['Azure Integration', 'AI Services', 'Enterprise Support']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud infrastructure and machine learning platform partner',
      category: 'Cloud',
      benefits: ['AWS Services', 'ML Platform', 'Global Infrastructure']
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'AI and data analytics solutions partner',
      category: 'AI',
      benefits: ['Google AI', 'BigQuery', 'TensorFlow']
    },
    {
      name: 'IBM',
      logo: '💼',
      description: 'Enterprise AI and quantum computing partner',
      category: 'Enterprise',
      benefits: ['Watson AI', 'Quantum Computing', 'Enterprise Solutions']
    },
    {
      name: 'Salesforce',
      logo: '⚡',
      description: 'CRM and business automation partner',
      category: 'CRM',
      benefits: ['Salesforce Platform', 'Automation', 'Customer Success']
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      description: 'Database and enterprise software partner',
      category: 'Database',
      benefits: ['Oracle Cloud', 'Database Solutions', 'Enterprise Software']
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'We are certified partners with industry-leading technology providers'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Access to specialized support teams and resources'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Leverage our partners\' infrastructure for unlimited scalability'
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Early access to new features and cutting-edge technology'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers',
      features: ['Early access to new features', 'Technical support', 'Co-marketing opportunities']
    },
    {
      title: 'Solution Partners',
      description: 'Integration partners for specialized solutions',
      features: ['Custom integrations', 'Joint development', 'Shared resources']
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships',
      features: ['Revenue sharing', 'Marketing support', 'Training programs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology providers and how they benefit our clients." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Microsoft, AWS, Google Cloud" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Strategic partnerships with industry leaders to deliver the best solutions for our clients
            </p>
          </section>

          {/* Partnership Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Partners Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-center">{partner.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-400">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Become a Partner */}
          <section className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our network of trusted partners and help us deliver exceptional solutions to clients worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Partner Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Revenue sharing opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Marketing and sales support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Technical training and certification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated partner support</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Proven track record in technology</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Strong client references</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Commitment to quality service</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Alignment with our values</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Apply to Become a Partner
              </Link>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;