'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Users, Award, Globe, Handshake, Star, TrendingUp } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology providers to deliver cutting-edge solutions.',
      benefits: ['Access to latest technologies', 'Joint go-to-market strategies', 'Technical support', 'Co-marketing opportunities'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Solution Partners',
      description: 'Collaborate with us to deliver comprehensive solutions to our mutual clients.',
      benefits: ['Revenue sharing', 'Training and certification', 'Sales support', 'Technical resources'],
      icon: <Handshake className="w-8 h-8" />
    },
    {
      title: 'Channel Partners',
      description: 'Resell our solutions and services through your established sales channels.',
      benefits: ['Competitive pricing', 'Marketing materials', 'Sales training', 'Ongoing support'],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Cloud and AI solutions partnership',
      logo: '/images/partners/microsoft.png'
    },
    {
      name: 'Amazon Web Services',
      category: 'Technology Partner',
      description: 'Cloud infrastructure and services',
      logo: '/images/partners/aws.png'
    },
    {
      name: 'Google Cloud',
      category: 'Technology Partner',
      description: 'AI and machine learning platforms',
      logo: '/images/partners/google-cloud.png'
    },
    {
      name: 'IBM',
      category: 'Solution Partner',
      description: 'Enterprise AI and cybersecurity solutions',
      logo: '/images/partners/ibm.png'
    },
    {
      name: 'Salesforce',
      category: 'Solution Partner',
      description: 'CRM and business automation',
      logo: '/images/partners/salesforce.png'
    },
    {
      name: 'Oracle',
      category: 'Technology Partner',
      description: 'Database and enterprise applications',
      logo: '/images/partners/oracle.png'
    }
  ];

  const benefits = [
    {
      title: 'Revenue Growth',
      description: 'Increase your revenue through our partnership programs',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Market Access',
      description: 'Gain access to new markets and customer segments',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Technical Support',
      description: 'Get comprehensive technical support and training',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Marketing Support',
      description: 'Leverage our marketing resources and co-marketing opportunities',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Explore partnership opportunities and benefits." />
        <meta name="keywords" content="partners, partnerships, technology partners, solution partners, channel partners, business partnerships" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ecosystem</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our growing network of partners and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  View Benefits
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Types */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
              <p className="text-xl text-gray-300">
                Choose the partnership model that best fits your business goals and capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-blue-400 mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Partners */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300">
                We're proud to work with industry leaders and innovative companies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <div className="text-blue-400 text-sm mb-2">{partner.category}</div>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300">
                Discover the advantages of partnering with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">How to Become a Partner</h2>
              <p className="text-xl text-gray-300">
                Our simple process makes it easy to join our partner ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Apply</h3>
                <p className="text-gray-300">Submit your partnership application with company details and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Review</h3>
                <p className="text-gray-300">Our team reviews your application and evaluates fit.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Onboard</h3>
                <p className="text-gray-300">Complete onboarding process and receive training materials.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Launch</h3>
                <p className="text-gray-300">Start selling and growing with our support and resources.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Download Partner Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default PartnersPage;