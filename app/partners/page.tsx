'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Technology Partner'
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      description: 'Premier AWS partner delivering scalable cloud infrastructure',
      category: 'Cloud Partner'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      description: 'Google Cloud partner specializing in AI and machine learning',
      category: 'AI Partner'
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      description: 'IBM partner for enterprise AI and cognitive solutions',
      category: 'Enterprise Partner'
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      description: 'Salesforce partner for CRM and business automation',
      category: 'Business Partner'
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      description: 'Oracle partner for database and enterprise applications',
      category: 'Database Partner'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling programs',
    'Priority support and resources',
    'Innovation collaboration'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Strategic partnerships with leading technology companies to deliver the best AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, technology alliances, strategic relationships, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies to deliver the best AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Partners Grid Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Award className="w-10 h-10 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {partner.category}
                    </span>
                    <p className="text-gray-300 mb-6">{partner.description}</p>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group mx-auto">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships provide significant advantages for our clients and partners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h4>
                    <p className="text-gray-300">Access to new markets and revenue streams through our client base.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                    <p className="text-gray-300">Dedicated partner success team to help you grow your business.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Handshake className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Collaborative Approach</h4>
                    <p className="text-gray-300">Work together to deliver innovative solutions to our clients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Recognition</h4>
                    <p className="text-gray-300">Get recognized as a trusted partner in our ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply to Become a Partner
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PartnersPage;
