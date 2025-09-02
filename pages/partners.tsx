import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Handshake, Star, Globe, Award, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Partners: NextPage = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      icon: Globe,
      description: 'Leading technology companies that provide the tools and platforms we use to deliver exceptional solutions.',
      partners: [
        { name: 'Microsoft', logo: '🏢', description: 'Cloud and enterprise solutions' },
        { name: 'Amazon Web Services', logo: '☁️', description: 'Cloud infrastructure and services' },
        { name: 'Google Cloud', logo: '🔍', description: 'AI and analytics platforms' },
        { name: 'Salesforce', logo: '💼', description: 'CRM and business automation' }
      ]
    },
    {
      title: 'Strategic Partners',
      icon: Handshake,
      description: 'Business partners who help us expand our reach and deliver comprehensive solutions to our clients.',
      partners: [
        { name: 'Deloitte', logo: '📊', description: 'Consulting and advisory services' },
        { name: 'Accenture', logo: '🎯', description: 'Digital transformation expertise' },
        { name: 'IBM', logo: '🔵', description: 'Enterprise technology solutions' },
        { name: 'Oracle', logo: '🗄️', description: 'Database and enterprise software' }
      ]
    },
    {
      title: 'Solution Partners',
      icon: Award,
      description: 'Specialized partners who complement our services with niche expertise and industry-specific solutions.',
      partners: [
        { name: 'ServiceNow', logo: '⚙️', description: 'IT service management' },
        { name: 'Workday', logo: '👥', description: 'Human capital management' },
        { name: 'SAP', logo: '📈', description: 'Enterprise resource planning' },
        { name: 'Adobe', logo: '🎨', description: 'Digital experience platforms' }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'Leverage our partner ecosystem to scale your business faster with proven solutions and expertise.'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to a network of certified professionals and specialists across various technology domains.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Partner with industry leaders who maintain the highest standards of quality and innovation.'
    }
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships with leading technology companies and solution providers."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Handshake className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Strategic partnerships with industry leaders to deliver comprehensive technology solutions 
            and exceptional value to our clients.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {partnerTypes.map((type, typeIndex) => {
              const IconComponent = type.icon;
              return (
                <div key={typeIndex} className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="text-blue-600 mr-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{type.title}</h2>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {type.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-center">
                          <div className="text-4xl mb-4">{partner.logo}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                          <p className="text-gray-600 text-sm">{partner.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in becoming a partner? We're always looking for innovative companies 
              that share our commitment to excellence and client success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Partners</h3>
                <p className="text-gray-600 mb-6">
                  Join our technology ecosystem and help us deliver cutting-edge solutions to our clients.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Access to our client base</li>
                  <li>• Joint marketing opportunities</li>
                  <li>• Technical collaboration</li>
                  <li>• Revenue sharing programs</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Solution Partners</h3>
                <p className="text-gray-600 mb-6">
                  Complement our services with your specialized expertise and industry knowledge.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Referral programs</li>
                  <li>• Co-delivery opportunities</li>
                  <li>• Training and certification</li>
                  <li>• Joint go-to-market strategies</li>
                </ul>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Partner Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">🏢</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Microsoft Partnership</h3>
                    <p className="text-gray-600 text-sm">Cloud Solutions Provider</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Our partnership with Zion Tech Group has enabled us to deliver comprehensive 
                  cloud solutions to enterprise clients, resulting in 40% growth in our cloud services revenue."
                </p>
                <div className="text-sm text-gray-500">- Microsoft Partner Team</div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">☁️</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">AWS Partnership</h3>
                    <p className="text-gray-600 text-sm">Cloud Infrastructure</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Working with Zion Tech Group has been instrumental in helping our clients 
                  successfully migrate to AWS, with 99.9% uptime and significant cost savings."
                </p>
                <div className="text-sm text-gray-500">- AWS Solutions Architect</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Partners;