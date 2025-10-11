'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  CheckCircle, 
  Star,
  Globe,
  Shield,
  Zap,
  Users,
  Award
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic cloud and AI partnership for enterprise solutions.',
      category: 'Technology',
      website: 'https://microsoft.com',
      benefits: ['Azure Integration', 'AI Services', 'Enterprise Support']
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning services.',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      benefits: ['Cloud Infrastructure', 'ML Services', 'Global Reach']
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and data analytics platform partnership.',
      category: 'AI & Analytics',
      website: 'https://cloud.google.com',
      benefits: ['AI Platform', 'Data Analytics', 'Quantum Computing']
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Quantum computing and enterprise AI solutions.',
      category: 'Quantum & AI',
      website: 'https://ibm.com',
      benefits: ['Quantum Computing', 'Watson AI', 'Enterprise Solutions']
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU acceleration and AI computing solutions.',
      category: 'Hardware',
      website: 'https://nvidia.com',
      benefits: ['GPU Acceleration', 'AI Computing', 'Performance']
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'Advanced processor technology and edge computing.',
      category: 'Hardware',
      website: 'https://intel.com',
      benefits: ['Edge Computing', 'AI Chips', 'Performance']
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Reduced implementation costs',
    'Enhanced security and compliance',
    '24/7 technical support',
    'Regular updates and improvements',
    'Global reach and scalability'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Strategic partnerships with leading technology companies including Microsoft, AWS, Google Cloud, and IBM for enhanced solutions." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, IBM, strategic alliances" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships for enhanced solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Strategic Technology Partnerships
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We collaborate with industry leaders to deliver cutting-edge solutions. 
              Our strategic partnerships ensure access to the latest technologies and 
              best practices in AI, cloud computing, and enterprise solutions.
            </p>
          </section>

          {/* Partners Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{partner.category}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{partner.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Partnership Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our network of technology partners and help us deliver 
                innovative solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Partner With Us
                </Link>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Partnership Team
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;
