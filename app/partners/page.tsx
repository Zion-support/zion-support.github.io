'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions with Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI solutions and quantum computing expertise',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU-accelerated AI computing and deep learning platforms',
      category: 'AI Hardware',
      website: 'https://nvidia.com'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience AI solutions',
      category: 'CRM & AI',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise database and cloud infrastructure solutions',
      category: 'Database & Cloud',
      website: 'https://oracle.com'
    },
    {
      name: 'Cisco',
      logo: '/api/placeholder/200/100',
      description: 'Network security and infrastructure solutions',
      category: 'Networking & Security',
      website: 'https://cisco.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Priority access to new features',
    'Dedicated partner success managers',
    'Certification programs',
    'Revenue sharing opportunities',
    'Technical integration support',
    'Global market expansion support'
  ];

  const categories = ['All', 'Cloud & AI', 'Cloud Computing', 'AI & ML', 'Enterprise AI', 'AI Hardware', 'CRM & AI', 'Database & Cloud', 'Networking & Security'];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with industry leaders to deliver cutting-edge AI and IT solutions that drive business transformation.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                    <p className="text-sm text-cyan-400 mb-3">{partner.category}</p>
                    <p className="text-sm text-gray-300 mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Partner With Us */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Over 500 successful projects with 98% client satisfaction rate and deep technical expertise.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
                <p className="text-gray-300">
                  Dedicated partner success managers and 24/7 technical support for all our partners.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
                <p className="text-gray-300">
                  Serving clients worldwide with local expertise and global delivery capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Become Our Partner
              </h3>
              <p className="text-cyan-100 mb-8 text-lg">
                Join our network of technology leaders and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Contact Partnership Team
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;