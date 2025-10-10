'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      id: '1',
      name: 'Microsoft',
      category: 'Cloud Partner',
      description: 'Strategic partnership for Azure cloud solutions',
      logo: '/api/placeholder/200/100',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      category: 'Cloud Partner',
      description: 'AWS Advanced Consulting Partner',
      logo: '/api/placeholder/200/100',
      benefits: ['AWS training', 'Solution architecture support', 'Marketplace listing']
    },
    {
      id: '3',
      name: 'Google Cloud',
      category: 'AI Partner',
      description: 'Google Cloud AI/ML solutions partner',
      logo: '/api/placeholder/200/100',
      benefits: ['AI/ML tools access', 'Technical certification', 'Joint go-to-market']
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customers'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security solutions'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Faster Innovation',
      description: 'Cutting-edge technology and tools'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Expert Support',
      description: 'Dedicated technical support teams'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies and how we work together to deliver innovative solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, strategic alliances" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We partner with leading technology companies to deliver the best solutions for our clients.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver superior solutions and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading technology companies that help us deliver exceptional solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div key={partner.id} className="glass-card quantum-field group">
                  <div className="p-8 text-center">
                    <div className="w-32 h-16 mx-auto mb-6 bg-white/10 rounded-lg flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <span className="inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {partner.category}
                    </span>
                    
                    <p className="text-gray-300 mb-6">{partner.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Partnership Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in partnering with us? Let's discuss how we can work together.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;