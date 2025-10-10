import React from 'react';
import { ArrowRight, CheckCircle, Globe, Award, Users, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      website: 'https://microsoft.com',
      tier: 'platinum',
      description: 'Cloud computing and AI platform solutions',
      category: 'Technology Partner'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      website: 'https://aws.amazon.com',
      tier: 'platinum',
      description: 'Cloud infrastructure and machine learning services',
      category: 'Cloud Partner'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      website: 'https://cloud.google.com',
      tier: 'gold',
      description: 'AI and data analytics platform',
      category: 'AI Partner'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      website: 'https://ibm.com',
      tier: 'gold',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise Partner'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      website: 'https://salesforce.com',
      tier: 'silver',
      description: 'CRM and business automation platform',
      category: 'Business Partner'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      website: 'https://oracle.com',
      tier: 'silver',
      description: 'Database and enterprise software solutions',
      category: 'Database Partner'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customer bases through our partner network'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'All our solutions are certified and validated by leading technology partners'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support from certified professionals and partner specialists'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards across all partnerships'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
      case 'gold':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 'silver':
        return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We work with industry leaders to deliver the best AI and IT solutions to our clients.
          </p>
        </section>

        {/* Partners Grid */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships with leading technology companies enable us to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTierColor(partner.tier)}`}>
                      {partner.tier.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-300 mb-3">{partner.description}</p>
                    <p className="text-cyan-400 text-sm font-medium">{partner.category}</p>
                  </div>
                  
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-2 px-4 rounded-lg transition-colors"
                  >
                    Visit Website
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships provide significant advantages for our clients and business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer different partnership levels to accommodate various business needs and collaboration levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tier: 'Platinum',
                  description: 'Strategic partnerships with deep integration and co-development',
                  features: [
                    'Joint product development',
                    'Co-marketing opportunities',
                    'Dedicated technical resources',
                    'Priority support and training',
                    'Custom integration support'
                  ],
                  color: 'from-gray-400 to-gray-600'
                },
                {
                  tier: 'Gold',
                  description: 'Certified partnerships with advanced collaboration',
                  features: [
                    'Certified solution provider',
                    'Technical training programs',
                    'Marketing support',
                    'Joint customer success programs',
                    'Regular business reviews'
                  ],
                  color: 'from-yellow-400 to-yellow-600'
                },
                {
                  tier: 'Silver',
                  description: 'Standard partnerships with basic collaboration',
                  features: [
                    'Solution certification',
                    'Basic training materials',
                    'Partner portal access',
                    'Technical documentation',
                    'Support for implementations'
                  ],
                  color: 'from-gray-300 to-gray-500'
                }
              ].map((tier, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{tier.tier.charAt(0)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our partner network and help us deliver innovative AI and IT solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply to Become a Partner
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More About Partnership
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;