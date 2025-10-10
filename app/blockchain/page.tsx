'use client';
import React from 'react';
import { Lock, Coins, Zap, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainPage: React.FC = () => {
  const features = [
    'Smart Contract Development',
    'DApp Development',
    'Token Creation',
    'DeFi Solutions',
    'NFT Marketplace',
    'Blockchain Integration',
    'Security Audits',
    'Consensus Mechanisms'
  ];

  const benefits = [
    '100% secure transactions',
    '90% cost reduction',
    '24/7 decentralized operation',
    'Transparent & immutable'
  ];

  const services = [
    {
      title: 'Smart Contracts',
      description: 'Secure and efficient smart contract development for various use cases',
      icon: Lock
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      icon: Coins
    },
    {
      title: 'NFT Development',
      description: 'Non-fungible token creation and marketplace development',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6 cyber-text-3 d neon-pulse glitch" data-text="Blockchain Solutions"></h1></<<<h1>Blockchain</h1></<<h1>Solutions</h1><p className="text-xl text-gray-300 max-w-4 xl mx-auto mb-8"></p></<<<p>Advanced</p></<<p>blockchain</p> development and cryptocurrency solutions for decentralized applications and secure transactions.<div className="text-2 xl font-bold text-cyan-400 mb-8">Starting at $2,000/month</div>
        </section>

        {/* Features */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Blockchain</h2></<<h2>Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /></CheckCircl>
                  <span className="text-gray-300">{feature}</spa>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Blockchain</h2></<<h2>Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Our</h2></<<h2>Blockchain</h2> Services<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <service.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" /></servic>
                <h3 className="text-xl font-bold text-white mb-3"></h>{service.title}<p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center"></sectio>
          <div className="cyber-card p-8 max-w-4 xl mx-auto"></div>
            <h2 className="text-3 xl font-bold text-white mb-4 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Implement Blockchain?<p className="text-lg text-gray-300 mb-8">Contact us today to discuss your blockchain requirements and get a custom solution.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Consultation</a>
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phon>
              </Phone>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default BlockchainPage;