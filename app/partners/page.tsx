'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Award } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  benefits: string[];
  featured: boolean;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      description: 'Strategic partnership for cloud solutions and AI services',
      logo: 'Microsoft',
      category: 'Technology Partner',
      benefits: [
        'Azure cloud integration',
        'AI and ML services',
        'Enterprise solutions',
        'Co-marketing opportunities'
      ],
      featured: true
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      description: 'Cloud infrastructure and AI platform partnership',
      logo: 'AWS',
      category: 'Cloud Partner',
      benefits: [
        'AWS cloud services',
        'Machine learning tools',
        'Global infrastructure',
        'Technical support'
      ],
      featured: true
    },
    {
      id: '3',
      name: 'Google Cloud',
      description: 'AI and data analytics platform collaboration',
      logo: 'Google Cloud',
      category: 'AI Partner',
      benefits: [
        'Google Cloud AI',
        'Data analytics tools',
        'TensorFlow integration',
        'Research collaboration'
      ],
      featured: true
    },
    {
      id: '4',
      name: 'Salesforce',
      description: 'CRM and business automation solutions',
      logo: 'Salesforce',
      category: 'Business Partner',
      benefits: [
        'CRM integration',
        'Sales automation',
        'Marketing tools',
        'Customer success'
      ],
      featured: false
    },
    {
      id: '5',
      name: 'IBM',
      description: 'Enterprise AI and cybersecurity solutions',
      logo: 'IBM',
      category: 'Enterprise Partner',
      benefits: [
        'Watson AI platform',
        'Cybersecurity solutions',
        'Enterprise consulting',
        'Global reach'
      ],
      featured: false
    },
    {
      id: '6',
      name: 'Oracle',
      description: 'Database and enterprise software solutions',
      logo: 'Oracle',
      category: 'Database Partner',
      benefits: [
        'Oracle Cloud',
        'Database solutions',
        'Enterprise software',
        'Technical training'
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Exclusive Access',
      description: 'Get early access to new features and technologies'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Technical Support',
      description: 'Dedicated technical support and training resources'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Global Reach',
      description: 'Expand your business globally with our partner network'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Certification',
      description: 'Become certified in our technologies and solutions'
    }
  ];

  const categories = ['All', 'Technology Partner', 'Cloud Partner', 'AI Partner', 'Business Partner', 'Enterprise Partner', 'Database Partner'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Explore partnership opportunities and benefits." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, AI partners, business growth" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join our growing ecosystem of technology partners and unlock new opportunities for growth and innovation.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-cyan-400 transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technology companies to deliver the best solutions to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  partner.featured
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {partner.featured && (
                  <div className="flex items-center justify-center mb-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Partner
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{partner.logo.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{partner.description}</p>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                    {partner.category}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {partner.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className="w-full border border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply to Partner
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
