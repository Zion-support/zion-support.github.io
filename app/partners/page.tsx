'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Star, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and analytics solutions with Google Cloud Platform',
      category: 'AI & Analytics',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Database & ERP',
      tier: 'Silver'
    },
    {
      name: 'NVIDIA',
      logo: '/api/placeholder/200/100',
      description: 'GPU computing and AI acceleration technologies',
      category: 'AI Hardware',
      tier: 'Silver'
    },
    {
      name: 'Intel',
      logo: '/api/placeholder/200/100',
      description: 'Advanced processor technologies for AI workloads',
      category: 'Hardware',
      tier: 'Silver'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Technical training and certification programs',
    'Priority support and escalation',
    'Co-marketing opportunities',
    'Early access to new features and products',
    'Dedicated partner success managers',
    'Revenue sharing opportunities',
    'Technical integration support',
    'Joint customer success programs'
  ];

  const partnerTiers = [
    {
      name: 'Platinum',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500',
      description: 'Strategic partnerships with maximum benefits'
    },
    {
      name: 'Gold',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500',
      description: 'Premium partnerships with extensive benefits'
    },
    {
      name: 'Silver',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20',
      borderColor: 'border-gray-500',
      description: 'Standard partnerships with core benefits'
    }
  ];

  const getTierInfo = (tier: string) => {
    return partnerTiers.find(t => t.name === tier) || partnerTiers[2];
  };

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and collaboration opportunities." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Microsoft, AWS, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver the most advanced AI and IT solutions. 
              Our strategic partnerships enable us to provide cutting-edge technology and comprehensive support.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Strategic Technology Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
                  <div
                    key={index}
                    className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 border ${tierInfo.borderColor}`}
                  >
                    <div className="text-center mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-24 h-12 object-contain mx-auto mb-4"
                      />
                      <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tierInfo.bgColor} ${tierInfo.color}`}>
                        {partner.tier} Partner
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm mb-2">{partner.description}</p>
                      <span className="text-cyan-400 text-xs font-medium">{partner.category}</span>
                    </div>
                    
                    <button className="w-full py-2 px-4 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm">
                      Learn More
                      <ExternalLink className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-300">
                  Access to worldwide markets and customer bases through our partner network
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  Early access to cutting-edge technologies and joint innovation programs
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                <p className="text-gray-300">
                  Comprehensive technical support and dedicated partner success managers
                </p>
              </div>
            </div>
            
            <div className="mt-12 cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Our Partners Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`cyber-card hologram-card p-8 text-center border ${tier.borderColor}`}
                >
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Star className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Technical training programs</li>
                    <li>• Marketing support</li>
                    <li>• Co-selling opportunities</li>
                    <li>• Priority support</li>
                    {tier.name === 'Platinum' && (
                      <>
                        <li>• Dedicated success manager</li>
                        <li>• Custom integration support</li>
                        <li>• Revenue sharing</li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of technology leaders and unlock new opportunities for growth, 
                innovation, and customer success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-center">
                  Apply for Partnership
                  <ExternalLink className="w-4 h-4 inline ml-2" />
                </button>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Contact Partners Team
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