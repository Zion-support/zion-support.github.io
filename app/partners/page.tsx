'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Premier consulting partner for AWS cloud infrastructure and AI/ML services',
      category: 'Cloud & AI',
      benefits: ['AWS credits', 'Training resources', 'Joint go-to-market']
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI',
      benefits: ['GCP credits', 'Technical training', 'Co-selling opportunities']
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Technology partner for enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI',
      benefits: ['IBM Cloud credits', 'Watson AI access', 'Enterprise support']
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and business automation solutions integration',
      category: 'Business Solutions',
      benefits: ['Salesforce credits', 'API access', 'Integration support']
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Solutions',
      benefits: ['Oracle Cloud credits', 'Technical support', 'Co-marketing']
    }]
  ];

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Technology Access',
      description: 'Get early access to cutting-edge technologies and platforms'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Joint Go-to-Market',
      description: 'Collaborate on marketing and sales opportunities'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Expand your market presence through our global network'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Technical Support',
      description: 'Access to dedicated technical resources and training'
    }]
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle, technology partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div><div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We work with industry leaders to deliver the best AI and IT solutions to our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Strategic Partners
              </h2>
              <p className="text-xl text-gray-300">
                Leading technology companies that help us deliver exceptional solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  </div><div className="text-center mb-6">
                    </div><div className="w-32 h-16 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-lg font-bold text-cyan-400">{partner.name}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-4">
                      {partner.category}
                    </span>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>

                  <div className="space-y-2">
                    </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Partnership Benefits</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Partner With Us
              </h2>
              <p className="text-xl text-gray-300">
                Join our ecosystem and unlock new opportunities for growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="text-center">
                  </div><div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                    </div><div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to join our partner ecosystem? Let's discuss how we can work together to deliver exceptional solutions to our clients.
            </p>
            <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Contact Partnership Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;