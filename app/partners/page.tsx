'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/200x100/0078d4/ffffff?text=Microsoft',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      benefits: [
        'Access to latest Azure technologies',
        'Joint go-to-market initiatives',
        'Technical support and training'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://via.placeholder.com/200x100/ff9900/ffffff?text=AWS',
      description: 'Premier partner for AWS cloud infrastructure and AI/ML services',
      category: 'Cloud & AI',
      benefits: [
        'Advanced AWS certifications',
        'Co-marketing opportunities',
        'Dedicated technical resources'
      ]
    },
    {
      name: 'Google Cloud',
      logo: 'https://via.placeholder.com/200x100/4285f4/ffffff?text=Google+Cloud',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      benefits: [
        'Google Cloud expertise',
        'Joint customer success programs',
        'Innovation lab access'
      ]
    },
    {
      name: 'IBM',
      logo: 'https://via.placeholder.com/200x100/052fad/ffffff?text=IBM',
      description: 'Technology partner for enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI',
      benefits: [
        'IBM Watson AI platform access',
        'Enterprise security solutions',
        'Global delivery capabilities'
      ]
    },
    {
      name: 'Salesforce',
      logo: 'https://via.placeholder.com/200x100/00a1e0/ffffff?text=Salesforce',
      description: 'CRM and customer experience platform integration partner',
      category: 'CRM & CX',
      benefits: [
        'Salesforce ecosystem integration',
        'Customer success management',
        'AppExchange marketplace presence'
      ]
    },
    {
      name: 'ServiceNow',
      logo: 'https://via.placeholder.com/200x100/81b5a1/ffffff?text=ServiceNow',
      description: 'IT service management and workflow automation partner',
      category: 'ITSM & Automation',
      benefits: [
        'ServiceNow platform expertise',
        'Workflow automation solutions',
        'IT service management best practices'
      ]
    }
  ];

  const benefits = [
    'Access to cutting-edge technologies',
    'Joint go-to-market opportunities',
    'Technical training and certifications',
    'Co-marketing and co-selling programs',
    'Dedicated partner support',
    'Innovation lab access',
    'Global delivery capabilities',
    'Customer success programs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver comprehensive solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, technology partners" />
      </Helmet>

      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with leading technology companies to deliver comprehensive, 
              cutting-edge solutions that drive business success.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to provide the best technology solutions for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Partnership Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver superior value to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in partnering with us? Let's explore how we can work together 
                to deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Call (302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartnersPage;
