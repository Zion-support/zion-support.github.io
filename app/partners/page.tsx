'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Building, Award, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      benefits: ['Azure Credits', 'Technical Support', 'Co-marketing Opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud Partner',
      description: 'Advanced cloud infrastructure and machine learning services',
      benefits: ['AWS Credits', 'Training Programs', 'Joint Solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI Partner',
      description: 'AI and machine learning platform integration',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Research Collaboration']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise Partner',
      description: 'Enterprise AI solutions and consulting services',
      benefits: ['Watson Integration', 'Enterprise Support', 'Industry Solutions']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM Partner',
      description: 'Customer relationship management and automation',
      benefits: ['Salesforce Integration', 'Custom Apps', 'Data Analytics']
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      category: 'Database Partner',
      description: 'Enterprise database and cloud solutions',
      benefits: ['Oracle Cloud', 'Database Tools', 'Migration Support']
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customer bases through our partner network'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security standards and compliance through partner certifications'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support teams and technical expertise from our partners'
    },
    {
      icon: Award,
      title: 'Proven Solutions',
      description: 'Battle-tested solutions and best practices from industry leaders'
    }
  ];

  const stats = [
    { number: '50+', label: 'Partners Worldwide' },
    { number: '15+', label: 'Years of Partnership' },
    { number: '99%', label: 'Partner Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Partners - Zion Tech Group"
        description="Our strategic partnerships with leading technology companies enable us to deliver world-class AI and IT solutions."
        keywords="partners, strategic partnerships, technology partners, Microsoft, AWS, Google Cloud, enterprise solutions"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strategic partnerships with industry leaders enable us to deliver 
            cutting-edge AI and technology solutions to our clients.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Building className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Strategic Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the world's leading technology companies to deliver 
              comprehensive solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">
                    {partner.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-center">{partner.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-3">Partnership Benefits:</h4>
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships provide mutual benefits and create value for all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes it easy to become a partner and start creating value together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Discussion', description: 'We discuss your goals and how we can work together' },
              { step: '2', title: 'Partnership Agreement', description: 'We formalize our partnership with clear terms and benefits' },
              { step: '3', title: 'Integration & Training', description: 'We provide training and integrate our solutions' },
              { step: '4', title: 'Ongoing Support', description: 'We provide continuous support and optimization' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of partners and help us deliver exceptional AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Become a Partner
              <Handshake className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;