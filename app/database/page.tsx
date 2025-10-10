'use client';
import React from 'react';
import { Database, Zap, Shield, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DatabasePage: React.FC = () => {
  const features = [
    'Database Design & Architecture',
    'Performance Tuning',
    'Backup & Recovery',
    'Security Hardening',
    'Data Migration',
    'Query Optimization',
    'Monitoring & Maintenance',
    'Scalability Planning'
  ];

  const benefits = [
    '90% performance improvement',
    '99.9% uptime guarantee',
    'Zero data loss',
    '50% cost reduction'
  ];

  const services = [
    {
      title: 'Database Design',
      description: 'Custom database architecture optimized for your specific needs',
      icon: Database
    },
    {
      title: 'Performance Optimization',
      description: 'Query tuning and indexing for maximum database performance',
      icon: Zap
    },
    {
      title: 'Data Security',
      description: 'Comprehensive security measures to protect your data',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6 cyber-text-3 d neon-pulse glitch" data-text="Database Services"></h1></<<<h1>Database</h1></<<h1>Services</h1><p className="text-xl text-gray-300 max-w-4 xl mx-auto mb-8"></p></<<<p>Comprehensive</p></<<p>database</p> design, optimization, and management with AI-powered tuning for maximum performance.<div className="text-2 xl font-bold text-cyan-400 mb-8">Starting at $899/month</div>
        </section>

        {/* Features */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Database</h2></<<h2>Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
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
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Proven</h2></<<h2>Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Our</h2></<<h2>Database</h2> Services<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <service.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" /></servic>
                <h3 className="text-xl font-bold text-white mb-3"></h>{service.title}<p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center"></sectio>
          <div className="cyber-card p-8 max-w-4 xl mx-auto"></div>
            <h2 className="text-3 xl font-bold text-white mb-4 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Optimize Your Database?<p className="text-lg text-gray-300 mb-8">Contact us today to discuss your database requirements and get a custom solution.</p>
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

export default DatabasePage;