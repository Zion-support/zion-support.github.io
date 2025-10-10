'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🔷',
      description: 'Cloud infrastructure and AI solutions',
      category: 'Technology Partner'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud computing and machine learning services',
      category: 'Cloud Partner'
    },
    {
      name: 'Google Cloud',
      logo: '🔵',
      description: 'AI and data analytics platform',
      category: 'AI Partner'
    },
    {
      name: 'IBM',
      logo: '🔵',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise Partner'
    }
  ];
  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Expand your reach through our global partner network'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Access to exclusive training and certification opportunities'
    },
    {
      icon: Users,
      title: 'Joint Marketing',
      description: 'Co-marketing opportunities and joint go-to-market strategies'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, certifications, and joint opportunities." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, AI partners, business partnerships" />
      </Helmet>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partner with Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology partners and unlock new opportunities 
              for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Become a Partner
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Partner Benefits
              </button>
            </div>
          </div>
        </section>
        {/* Our Partners */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best solutions to our clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover: bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover: text-blue-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partner Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partnership Types */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Technology Partner</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Access to our technology stack</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Technical support and training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Co-marketing opportunities</span>
                  </li>
                </ul>
                <button className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-2 ring-blue-500">
                <div className="text-center mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Solution Partner</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Technology Partner</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Joint solution development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Revenue sharing opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Dedicated partner manager</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Apply Now
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Partner</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Everything in Solution Partner</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Exclusive market access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Custom partnership agreements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Priority support and resources</span>
                  </li>
                </ul>
                <button className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Become a Partner
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Download Partner Kit
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )};
export default PartnersPage