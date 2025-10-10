'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, Award, Globe } from 'lucide-react';

const partners = [
  {
    name: 'Microsoft',
    logo: '/api/placeholder/200/100',
    tier: 'Platinum',
    description: 'Strategic partnership for Azure cloud solutions and AI services',
    benefits: ['Co-marketing opportunities', 'Technical support', 'Joint R&D projects']
  },
  {
    name: 'Amazon Web Services',
    logo: '/api/placeholder/200/100',
    tier: 'Platinum',
    description: 'Premier AWS consulting partner specializing in AI and machine learning',
    benefits: ['AWS credits', 'Training programs', 'Direct technical support']
  },
  {
    name: 'Google Cloud',
    logo: '/api/placeholder/200/100',
    tier: 'Gold',
    description: 'Google Cloud Platform partner for AI and data analytics solutions',
    benefits: ['GCP credits', 'Co-selling opportunities', 'Technical training']
  },
  {
    name: 'IBM',
    logo: '/api/placeholder/200/100',
    tier: 'Gold',
    description: 'IBM partner for Watson AI and enterprise solutions',
    benefits: ['IBM certifications', 'Joint solutions', 'Market development funds']
  },
  {
    name: 'Salesforce',
    logo: '/api/placeholder/200/100',
    tier: 'Silver',
    description: 'Salesforce implementation partner for CRM and automation',
    benefits: ['Salesforce training', 'Co-marketing', 'Technical resources']
  },
  {
    name: 'Oracle',
    logo: '/api/placeholder/200/100',
    tier: 'Silver',
    description: 'Oracle partner for database and cloud infrastructure solutions',
    benefits: ['Oracle certifications', 'Technical support', 'Joint go-to-market']
  }
];

const benefits = [
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: 'Joint Go-to-Market',
    description: 'Collaborate on marketing campaigns and co-selling opportunities to reach new customers together.'
  },
  {
    icon: <Award className="w-8 h-8 text-green-400" />,
    title: 'Certification Programs',
    description: 'Access to exclusive training and certification programs to stay ahead of technology trends.'
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    title: 'Global Reach',
    description: 'Leverage our global network of partners to expand your business internationally.'
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: 'Priority Support',
    description: 'Get priority technical support and dedicated resources for your projects.'
  }
];

const PartnershipPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Partnership Opportunities</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partnerships, technology partners, strategic alliances, business partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of technology partners and unlock new opportunities 
              for growth and innovation.
            </p>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Technology Partners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-16 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500 text-black' :
                    partner.tier === 'Gold' ? 'bg-yellow-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {partner.tier} Partner
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                  <ul className="text-left text-sm text-gray-400 space-y-1">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Partnership Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Partnership Tiers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Silver Partner</h3>
                <div className="text-4xl font-bold text-gray-400 mb-6">$0</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Basic training materials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Partner portal access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Marketing resources</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <button className="w-full cyber-button py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-500">
                <h3 className="text-2xl font-bold text-white mb-4">Gold Partner</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$5K</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Silver</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Advanced training programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Co-marketing opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Joint sales opportunities</span>
                  </li>
                </ul>
                <button className="w-full cyber-button py-3">
                  Upgrade Now
                </button>
              </div>

              <div className="cyber-card hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Platinum Partner</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">Custom</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Gold</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Custom solutions development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Revenue sharing opportunities</span>
                  </li>
                </ul>
                <button className="w-full cyber-button py-3">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Partner With Us?
              </h2>
              <p className="text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and innovation. 
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-3">
                  Become a Partner
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Download Partner Kit
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnershipPage;