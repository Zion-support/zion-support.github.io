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
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and machine learning partner',
      category: 'AI'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise solutions partner',
      category: 'Enterprise'
    }
  ];
  return (
    <>
      <Helmet></Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies to deliver the best AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, AI partners, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                Our Partners;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                We work with leading technology companies to deliver the best AI and IT solutions for our clients.
              </p>
            </div>
          </div>
        </section>
        {/* Partners Grid */}
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card p-6 text-center"></div>
                  <div className="w-24 h-24 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center"></div>
                    <span className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-3">{partner.description}</p>
                  <span className="inline-block bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full"></span>
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"></div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Partnership Benefits */}
        <section className="py-16 px-4 bg-slate-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300">Benefits of our strategic partnerships</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
                <p className="text-gray-300">Access to worldwide technology resources and expertise</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
                <p className="text-gray-300">Dedicated support from certified professionals</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-xl text-gray-100 mb-8"></p>
              Join our network of technology partners and help us deliver exceptional solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"></button>
              Partner With Us;
            </button>
          </div>
        </section>
      </div>
    </>
      </div>
    </div>
  );
};
export default PartnersPage;