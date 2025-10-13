'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Handshake, Award, Globe, Users, Zap, Shield, Brain, CheckCircle, Star, TrendingUp, Target } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers to deliver cutting-edge solutions.',
      features: ['Cloud Platforms', 'AI/ML Tools', 'Security Solutions', 'Development Tools'],
      icon: Brain,
      color: 'blue'
    },
    {
      title: 'Solution Partners',
      description: 'Collaborative partnerships to develop and deliver comprehensive business solutions.',
      features: ['Custom Solutions', 'Integration Services', 'Consulting', 'Support'],
      icon: Zap,
      color: 'green'
    },
    {
      title: 'Channel Partners',
      description: 'Distribution and reseller partnerships to expand market reach and customer access.',
      features: ['Reseller Programs', 'Training & Certification', 'Marketing Support', 'Technical Support'],
      icon: Globe,
      color: 'purple'
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic alliances for joint innovation and market development.',
      features: ['Joint R&D', 'Market Expansion', 'Technology Exchange', 'Co-marketing'],
      icon: Handshake,
      color: 'orange'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Get recognized for your contributions with our partner recognition program'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Access to dedicated partner support and account management'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Expand your business with new revenue streams and market opportunities'
    },
    {
      icon: Shield,
      title: 'Training & Resources',
      description: 'Comprehensive training programs and marketing resources'
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft-logo.png',
      type: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws-logo.png',
      type: 'Technology Partner',
      description: 'Cloud infrastructure and machine learning platform partnership'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/gcp-logo.png',
      type: 'Technology Partner',
      description: 'Data analytics and AI platform collaboration'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce-logo.png',
      type: 'Solution Partner',
      description: 'CRM integration and business process automation'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow-logo.png',
      type: 'Solution Partner',
      description: 'IT service management and workflow automation'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco-logo.png',
      type: 'Technology Partner',
      description: 'Network security and infrastructure solutions'
    }
  ];

  const partnerPrograms = [
    {
      name: 'Gold Partner',
      requirements: ['$500K+ Annual Revenue', '5+ Certified Professionals', 'Customer References'],
      benefits: ['Priority Support', 'Co-marketing Opportunities', 'Advanced Training', 'Dedicated Account Manager']
    },
    {
      name: 'Silver Partner',
      requirements: ['$200K+ Annual Revenue', '3+ Certified Professionals', 'Customer References'],
      benefits: ['Standard Support', 'Marketing Resources', 'Training Access', 'Partner Portal']
    },
    {
      name: 'Bronze Partner',
      requirements: ['$50K+ Annual Revenue', '1+ Certified Professional', 'Application Approval'],
      benefits: ['Basic Support', 'Training Materials', 'Partner Portal', 'Certification Path']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program</title>
        <meta
          name="description"
          content="Join the Zion Tech Group partner program. Technology, solution, and channel partnerships for mutual growth and success."
        />
        <meta
          name="keywords"
          content="partners, partner program, technology partners, solution partners, channel partners, strategic alliances, business partnerships"
        />
        <meta property="og:title" content="Partners - Zion Tech Group | Partner Program" />
        <meta property="og:description" content="Join the Zion Tech Group partner program for mutual growth." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Program</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and grow your business with Zion Tech Group's innovative solutions and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Become a Partner
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  View Partner Benefits
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => {
                const Icon = type.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  orange: 'bg-orange-100 text-orange-600'
                };
                
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses[type.color as keyof typeof colorClasses]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Areas:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-xl text-gray-600">
                Trusted by leading technology companies worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{partner.type}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Tiers</h2>
              <p className="text-xl text-gray-600">
                Choose the tier that matches your business size and goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerPrograms.map((program, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${
                  program.name === 'Gold Partner' ? 'ring-2 ring-blue-500' : ''
                }`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      program.name === 'Gold Partner' ? 'bg-yellow-100' :
                      program.name === 'Silver Partner' ? 'bg-gray-100' : 'bg-orange-100'
                    }`}>
                      <Star className={`w-8 h-8 ${
                        program.name === 'Gold Partner' ? 'text-yellow-600' :
                        program.name === 'Silver Partner' ? 'text-gray-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our partner program and unlock exclusive benefits and opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our partner ecosystem and grow your business with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Download Partner Kit
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;