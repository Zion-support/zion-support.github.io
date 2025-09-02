import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Handshake, Award, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Partners: NextPage = () => {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the tools and platforms we use to deliver exceptional solutions.',
      partners: [
        { name: 'Microsoft', logo: '/api/placeholder/200/100', description: 'Azure Cloud Platform' },
        { name: 'Amazon Web Services', logo: '/api/placeholder/200/100', description: 'Cloud Infrastructure' },
        { name: 'Google Cloud', logo: '/api/placeholder/200/100', description: 'AI & Analytics' },
        { name: 'Salesforce', logo: '/api/placeholder/200/100', description: 'CRM Solutions' },
        { name: 'Oracle', logo: '/api/placeholder/200/100', description: 'Database Solutions' },
        { name: 'IBM', logo: '/api/placeholder/200/100', description: 'Enterprise Solutions' }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized solution providers that complement our services and help us deliver comprehensive solutions.',
      partners: [
        { name: 'Slack', logo: '/api/placeholder/200/100', description: 'Communication Platform' },
        { name: 'Atlassian', logo: '/api/placeholder/200/100', description: 'Development Tools' },
        { name: 'Docker', logo: '/api/placeholder/200/100', description: 'Containerization' },
        { name: 'Kubernetes', logo: '/api/placeholder/200/100', description: 'Orchestration' },
        { name: 'GitHub', logo: '/api/placeholder/200/100', description: 'Version Control' },
        { name: 'Jenkins', logo: '/api/placeholder/200/100', description: 'CI/CD Pipeline' }
      ]
    },
    {
      title: 'Industry Partners',
      description: 'Industry leaders and associations that help us stay at the forefront of technology trends.',
      partners: [
        { name: 'IEEE', logo: '/api/placeholder/200/100', description: 'Technology Standards' },
        { name: 'ACM', logo: '/api/placeholder/200/100', description: 'Computer Science' },
        { name: 'Cloud Security Alliance', logo: '/api/placeholder/200/100', description: 'Security Standards' },
        { name: 'OpenAI', logo: '/api/placeholder/200/100', description: 'AI Research' },
        { name: 'Linux Foundation', logo: '/api/placeholder/200/100', description: 'Open Source' },
        { name: 'CNCF', logo: '/api/placeholder/200/100', description: 'Cloud Native' }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Certified Expertise',
      description: 'Our partnerships ensure we maintain the highest levels of certification and expertise in the latest technologies.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Access to Resources',
      description: 'Partner relationships give us access to exclusive resources, training, and support to better serve our clients.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Through our partner network, we can deliver solutions and support to clients worldwide with local expertise.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Best Practices',
      description: 'We leverage partner best practices and methodologies to ensure consistent, high-quality delivery.'
    }
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Learn about Zion Tech Group's strategic partnerships with leading technology companies and how they benefit our clients."
      keywords="partners, technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
              <Handshake className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Partners
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Strategic partnerships with industry leaders enable us to deliver cutting-edge solutions 
              and maintain the highest standards of excellence.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Partnership Benefits */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Partnerships Matter</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic partnerships provide significant value to our clients through enhanced capabilities, 
                access to cutting-edge technologies, and industry best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Categories */}
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="max-w-6xl mx-auto mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500 font-semibold">{partner.name}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Partnership Opportunities */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                We're always looking for strategic partners who share our commitment to innovation and excellence. 
                Let's explore how we can work together to deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Become a Partner
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Partnership Process */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partnership Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to building and maintaining successful partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Discussion</h3>
                <p className="text-gray-600 text-sm">We discuss mutual goals and explore partnership opportunities.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
                <p className="text-gray-600 text-sm">We evaluate compatibility and potential synergies.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600 text-sm">We formalize the partnership with clear terms and objectives.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">We work together to deliver value to our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Partners;