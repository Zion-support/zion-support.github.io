'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Building2,
  Handshake,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  BarChart
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'AI and machine learning solutions',
      category: 'AI/ML',
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '💼',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise',
      tier: 'Gold'
    },
    {
      name: 'NVIDIA',
      logo: '🎮',
      description: 'GPU acceleration and AI hardware',
      category: 'Hardware',
      tier: 'Silver'
    },
    {
      name: 'Salesforce',
      logo: '💼',
      description: 'CRM and business automation',
      category: 'Software',
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets through our partner network'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Verified and certified integrations with top platforms'
    },
    {
      icon: Users,
      title: 'Joint Innovation',
      description: 'Co-develop innovative solutions with our partners'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3 Csvg%20 width%3 D%2260%22%20 height%3 D%2260%22%20 viewBox%3 D%220%200%2060%2060%22%20 xmlns%3 D%22 http%3 A//www.w3.org/2000/svg%22%3 E%3 Cg%20 fill%3 D%22 none%22%20 fill-rule%3 D%22 evenodd%22%3 E%3 Cg%20 fill%3 D%22%239 C92 AC%22%20 fill-opacity%3 D%220.1%22%3 E%3 Ccircle%20 cx%3 D%2230%22%20 cy%3 D%2230%22%20 r%3 D%222%22/%3 E%3 C/g%3 E%3 C/g%3 E%3 C/svg%3 E')] opacity-20"></div>

        <div className="relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1></<<<h>Our</h></<<h>Partners</h>
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Strategic partnerships with industry leaders to deliver world-class AI and IT solutions
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Trusted</h></<<h>by</h> Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              We work with the world's leading technology companies to deliver exceptional solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              ></div>
                <div className="text-center"></div>
                  <div className="text-6 xl mb-4">{partner.logo}</div>
                  <h3 className="text-2 xl font-bold text-white mb-2">{partner.name}</h>
                  <p className="text-gray-300 mb-4">{partner.description}</p>

                  <div className="flex items-center justify-center space-x-4 mb-4"></div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}></span>
                      {partner.tier}
                    </span>
                    <span className="text-sm text-gray-400">{partner.category}</spa>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Partnership</h></<<h>Benefits</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Why partner with Zion Tech Group? Discover the advantages of joining our ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <benefit.icon className="w-8 h-8 text-white" /></benefi>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"></h2></<<<h>Become</h></<<h>a</h> Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button></<<<button>Apply</button></<<button>to</button> Partner
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Learn</butto></<<butto>More</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default PartnersPage;