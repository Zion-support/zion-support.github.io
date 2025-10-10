'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  website: string;
  featured: boolean;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      description: 'Strategic cloud and AI partnership',
      logo: '/images/partners/microsoft.png',
      category: 'Technology',
      website: 'https://microsoft.com',
      featured: true
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      description: 'Cloud infrastructure and AI services',
      logo: '/images/partners/aws.png',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      featured: true
    },
    {
      id: '3',
      name: 'Google Cloud',
      description: 'AI and machine learning solutions',
      logo: '/images/partners/google-cloud.png',
      category: 'AI/ML',
      website: 'https://cloud.google.com',
      featured: false
    },
    {
      id: '4',
      name: 'IBM',
      description: 'Enterprise AI and blockchain solutions',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise',
      website: 'https://ibm.com',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Certified Expertise',
      description: 'Certified professionals in all major platforms'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Premium Support',
      description: 'Priority support and dedicated resources'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Joint Solutions',
      description: 'Collaborative development and go-to-market'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: 'Industry Recognition',
      description: 'Award-winning partnerships and solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, Microsoft partner, AWS partner, Google Cloud partner, strategic partnerships" />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We partner with leading technology companies to deliver cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Become a Partner
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with industry leaders to provide comprehensive technology solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {partner.category}
                  </span>
                  {partner.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why partner with Zion Tech Group? Here are the key benefits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  {benefit.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our network of technology partners and unlock new opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Apply to Partner
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Download Partnership Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
