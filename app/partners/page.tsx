'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Award, Users, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      id: '1',
      name: 'Microsoft',
      category: 'Cloud & Productivity',
      description: 'Certified Microsoft Partner specializing in Azure cloud solutions and Office 365 implementations.',
      logo: '/images/partners/microsoft.png',
      certifications: ['Azure Solutions Architect', 'Microsoft 365 Expert'],
      benefits: ['Access to latest Microsoft technologies', 'Priority support and training', 'Co-marketing opportunities']
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      category: 'Cloud Infrastructure',
      description: 'Advanced AWS Consulting Partner with expertise in cloud migration and serverless architectures.',
      logo: '/images/partners/aws.png',
      certifications: ['AWS Solutions Architect', 'AWS DevOps Engineer'],
      benefits: ['Advanced technical support', 'Training credits', 'Joint customer engagements']
    },
    {
      id: '3',
      name: 'Google Cloud',
      category: 'AI & Analytics',
      description: 'Google Cloud Premier Partner focused on AI/ML solutions and data analytics platforms.',
      logo: '/images/partners/google-cloud.png',
      certifications: ['Google Cloud Architect', 'Machine Learning Engineer'],
      benefits: ['Early access to new features', 'Technical expertise', 'Go-to-market support']
    },
    {
      id: '4',
      name: 'Salesforce',
      category: 'CRM & Automation',
      description: 'Certified Salesforce Partner delivering custom CRM solutions and automation workflows.',
      logo: '/images/partners/salesforce.png',
      certifications: ['Salesforce Administrator', 'Salesforce Developer'],
      benefits: ['Certified expertise', 'Dedicated support', 'Implementation best practices']
    },
    {
      id: '5',
      name: 'Oracle',
      category: 'Database & Enterprise',
      description: 'Oracle Partner Network member specializing in database solutions and enterprise applications.',
      logo: '/images/partners/oracle.png',
      certifications: ['Oracle Database Administrator', 'Oracle Cloud Infrastructure'],
      benefits: ['Technical resources', 'Training programs', 'Solution validation']
    },
    {
      id: '6',
      name: 'IBM',
      category: 'AI & Security',
      description: 'IBM Business Partner with focus on Watson AI solutions and enterprise security services.',
      logo: '/images/partners/ibm.png',
      certifications: ['IBM Watson AI', 'IBM Security Specialist'],
      benefits: ['AI expertise', 'Security solutions', 'Enterprise support']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Certified Expertise',
      description: 'All our partners are certified professionals with proven track records in their respective technologies.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Latest Technologies',
      description: 'Early access to cutting-edge features and technologies from our technology partners.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Support',
      description: 'Priority support and dedicated resources from our partner network for faster issue resolution.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and validation processes ensure the highest quality solutions for our clients.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Best Practices',
      description: 'Implementation of industry best practices and proven methodologies for optimal results.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Compliance Ready',
      description: 'Solutions designed to meet regulatory requirements and industry compliance standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Certified expertise in Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft partner, AWS partner, Google Cloud partner, certified solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Partnering with industry leaders to deliver cutting-edge solutions and exceptional value to our clients
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain strategic partnerships with leading technology companies to ensure we deliver the best solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{partner.name.charAt(0)}</div>
                    <div className="text-sm opacity-90">{partner.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.certifications.map((cert, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
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

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships provide numerous advantages for our clients and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our network of technology partners and unlock new opportunities for growth and collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Partner With Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
