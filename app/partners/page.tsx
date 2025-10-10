'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology',
      benefits: ['Azure cloud solutions', 'AI platform integration', 'Enterprise support']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      benefits: ['AWS cloud services', 'Machine learning tools', 'Global infrastructure']
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'AI and data analytics solutions',
      category: 'AI & Analytics',
      benefits: ['Google AI platform', 'BigQuery analytics', 'TensorFlow integration']
    },
    {
      name: 'IBM',
      logo: '💼',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise',
      benefits: ['Watson AI platform', 'Quantum computing', 'Enterprise consulting']
    },
    {
      name: 'Salesforce',
      logo: '💬',
      description: 'CRM and customer experience solutions',
      category: 'CRM',
      benefits: ['Salesforce platform', 'Customer analytics', 'Marketing automation']
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      description: 'Database and enterprise applications',
      category: 'Database',
      benefits: ['Oracle Cloud', 'Database solutions', 'Enterprise applications']
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global Reach',
      description: 'Access to worldwide partner network and resources'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Expert Support',
      description: 'Dedicated support teams and technical expertise'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Innovation',
      description: 'Access to cutting-edge technologies and solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and how we work together to deliver exceptional solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Microsoft, AWS, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Strategic Partnerships
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We partner with industry leaders to deliver cutting-edge solutions and exceptional value to our clients.
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{partner.logo}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Partner */}
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Contact Partnership Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;