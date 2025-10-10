'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud provider for scalable infrastructure solutions',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform partnership',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing collaboration',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and customer experience solutions',
      category: 'CRM & CX',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'Docker',
      logo: '/images/partners/docker.png',
      description: 'Containerization and DevOps platform partnership',
      category: 'DevOps & Containers',
      website: 'https://docker.com',
      tier: 'certified'
    },
    {
      name: 'Kubernetes',
      logo: '/images/partners/kubernetes.png',
      description: 'Container orchestration and microservices platform',
      category: 'DevOps & Orchestration',
      website: 'https://kubernetes.io',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth and innovation'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep knowledge of partner technologies'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Integrated Solutions',
      description: 'Seamless integration of multiple technologies for comprehensive solutions'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Joint Support',
      description: 'Collaborative support from both Zion Tech Group and our partners'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with industry leaders',
      color: 'from-blue-500 to-purple-500',
      partners: partners.filter(p => p.tier === 'strategic')
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred technology providers for specific solutions',
      color: 'from-green-500 to-blue-500',
      partners: partners.filter(p => p.tier === 'preferred')
    },
    {
      name: 'Certified Partners',
      description: 'Certified integration partners with proven expertise',
      color: 'from-yellow-500 to-orange-500',
      partners: partners.filter(p => p.tier === 'certified')
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver comprehensive solutions." />
        <meta name="keywords" content="technology partners, cloud partnerships, AI partnerships, enterprise solutions, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Our Technology Partners
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We collaborate with industry leaders to deliver comprehensive, 
                cutting-edge solutions that drive your business forward.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our partnerships enable us to deliver integrated solutions that combine 
                the best technologies from industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners by Tier */}
        {partnershipTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className={`py-20 ${tierIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {tier.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {tier.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tier.partners.map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {partner.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {partner.category}
                        </span>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Become a Partner Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Become Our Partner
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our network of technology partners and help us deliver 
              innovative solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Partner With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-600">
                How we establish and maintain successful partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Contact</h3>
                <p className="text-gray-600">Reach out to discuss partnership opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
                <p className="text-gray-600">We evaluate compatibility and mutual benefits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600">Formalize partnership terms and agreements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Begin joint projects and mutual support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;