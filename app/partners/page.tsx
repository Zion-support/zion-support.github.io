'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud & AI',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Technology partner for IBM Watson AI and enterprise solutions',
      category: 'AI & Enterprise',
      website: 'https://ibm.com'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Integration partner for CRM and customer experience solutions',
      category: 'CRM & CX',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application partner',
      category: 'Enterprise',
      website: 'https://oracle.com'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'ERP and business process automation partner',
      category: 'Enterprise',
      website: 'https://sap.com'
    },
    {
      name: 'Adobe',
      logo: '/images/partners/adobe.png',
      description: 'Creative and marketing technology partner',
      category: 'Creative & Marketing',
      website: 'https://adobe.com'
    },
    {
      name: 'HubSpot',
      logo: '/images/partners/hubspot.png',
      description: 'Marketing automation and CRM integration partner',
      category: 'Marketing',
      website: 'https://hubspot.com'
    },
    {
      name: 'Slack',
      logo: '/images/partners/slack.png',
      description: 'Workplace communication and collaboration partner',
      category: 'Communication',
      website: 'https://slack.com'
    },
    {
      name: 'Zoom',
      logo: '/images/partners/zoom.png',
      description: 'Video conferencing and communication solutions partner',
      category: 'Communication',
      website: 'https://zoom.us'
    },
    {
      name: 'Stripe',
      logo: '/images/partners/stripe.png',
      description: 'Payment processing and financial technology partner',
      category: 'Fintech',
      website: 'https://stripe.com'
    }
  ];

  const categories = ['All', 'Cloud & AI', 'AI & Enterprise', 'CRM & CX', 'Enterprise', 'Creative & Marketing', 'Marketing', 'Communication', 'Fintech'];

  const benefits = [
    'Access to cutting-edge technology and tools',
    'Exclusive pricing and discounts',
    'Priority technical support',
    'Joint go-to-market opportunities',
    'Co-marketing and co-selling programs',
    'Early access to new features and products',
    'Dedicated partner success managers',
    'Training and certification programs',
    'Integration and implementation support',
    '24/7 partner support hotline'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. We work with industry leaders to deliver comprehensive AI and IT solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise solutions" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Strategic Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We collaborate with industry leaders to deliver comprehensive AI and IT solutions 
                that drive innovation and business success.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Certified Partners</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Exclusive Benefits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Joint Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Partners</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We work with the world's leading technology companies to provide you with 
                the best solutions and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {partner.category}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6">
                      {partner.description}
                    </p>
                    
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our strategic partnerships provide you with exclusive access to cutting-edge 
                technology and comprehensive support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Partner With Us
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PartnersPage;