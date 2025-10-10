'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Users, Handshake, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced cloud computing and AI platform services',
      category: 'Cloud & AI',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing',
      category: 'AI & Quantum',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Joint Go-to-Market',
      description: 'Collaborative marketing and sales initiatives to reach new customers together'
    },
    {
      icon: Handshake,
      title: 'Technical Integration',
      description: 'Seamless integration of our solutions with partner platforms and services'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds advanced certifications in partner technologies and platforms'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies and learn about partnership opportunities." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Partners
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies to deliver exceptional solutions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">Strategic Partners</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300">Years of Partnership</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Certified Expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Technology Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      partner.tier === 'Platinum' ? 'bg-cyan-500/20 text-cyan-400' :
                      partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {partner.tier}
                    </span>
                    <span className="text-cyan-400 text-sm">{partner.category}</span>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg h-24 mb-6 flex items-center justify-center">
                    <span className="text-gray-400">{partner.name} Logo</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our network of technology partners and unlock new opportunities for growth and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-4">Partner Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Proven track record in technology solutions
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Strong customer base and market presence
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Commitment to quality and innovation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Technical expertise in relevant domains
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Joint marketing and sales support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Technical training and certification
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Access to our technology stack
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated partner success manager
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cyber-glow hover:scale-105"
                >
                  <span>Apply for Partnership</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cyber-glow"
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