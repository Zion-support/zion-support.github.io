import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Handshake, Users, Award, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

const Partners: NextPage = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology providers to deliver cutting-edge solutions.',
      benefits: [
        'Access to latest technologies',
        'Joint go-to-market strategies',
        'Technical support and training',
        'Co-marketing opportunities'
      ],
      icon: Globe
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach.',
      benefits: [
        'Competitive pricing and margins',
        'Sales and marketing support',
        'Training and certification',
        'Dedicated partner portal'
      ],
      icon: Users
    },
    {
      title: 'Solution Partners',
      description: 'Integration partnerships to create comprehensive solutions for our clients.',
      benefits: [
        'Joint solution development',
        'Technical integration support',
        'Shared customer success',
        'Revenue sharing opportunities'
      ],
      icon: Handshake
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      category: 'Cloud & AI',
      description: 'Strategic partnership for Azure cloud services and AI solutions.'
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      category: 'Cloud Infrastructure',
      description: 'Advanced partner for AWS cloud migration and optimization services.'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      category: 'Cloud & Analytics',
      description: 'Partner for Google Cloud Platform and data analytics solutions.'
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      category: 'CRM & Automation',
      description: 'Certified partner for Salesforce implementation and customization.'
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      category: 'Database & ERP',
      description: 'Partner for Oracle database and enterprise resource planning solutions.'
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      category: 'AI & Analytics',
      description: 'Strategic partner for IBM Watson AI and business analytics solutions.'
    }
  ];

  const partnerPrograms = [
    {
      name: 'Silver Partner',
      requirements: [
        'Minimum $50K annual revenue',
        '2 certified professionals',
        'Complete partner training',
        'Active marketing participation'
      ],
      benefits: [
        '15% discount on services',
        'Marketing support',
        'Technical training',
        'Partner portal access'
      ]
    },
    {
      name: 'Gold Partner',
      requirements: [
        'Minimum $150K annual revenue',
        '5 certified professionals',
        'Customer success stories',
        'Joint marketing activities'
      ],
      benefits: [
        '20% discount on services',
        'Dedicated account manager',
        'Co-marketing opportunities',
        'Priority support'
      ]
    },
    {
      name: 'Platinum Partner',
      requirements: [
        'Minimum $500K annual revenue',
        '10+ certified professionals',
        'Proven track record',
        'Strategic alignment'
      ],
      benefits: [
        '25% discount on services',
        'Executive sponsorship',
        'Joint solution development',
        'Revenue sharing opportunities'
      ]
    }
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Join Zion Tech Group's partner ecosystem and grow your business with our technology solutions, training, and support programs."
      keywords="partners, partnership, technology partners, channel partners, solution partners, partner program, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Handshake className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Join our partner ecosystem and grow your business with cutting-edge technology solutions.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become a Partner
            </Link>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various partnership models to suit different business needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best solutions to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-gray-400">{partner.name}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <div className="flex items-center mb-3">
                    <Award className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium text-sm">{partner.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Partner Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partner program that best fits your business goals and capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerPrograms.map((program, index) => (
                <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${
                  program.name === 'Gold Partner' ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}>
                  <div className={`p-6 text-white ${
                    program.name === 'Silver Partner' ? 'bg-gray-600' :
                    program.name === 'Gold Partner' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                    'bg-gradient-to-r from-purple-600 to-purple-700'
                  }`}>
                    <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                    {program.name === 'Gold Partner' && (
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-yellow-200 mr-1" />
                        <span className="text-yellow-200 text-sm font-medium">Most Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href="/contact"
                      className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                        program.name === 'Gold Partner' 
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Partnership Team
              </Link>
              <Link 
                href="/partner-resources" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
              >
                View Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Partners;