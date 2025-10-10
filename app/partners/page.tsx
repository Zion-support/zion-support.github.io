'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Globe, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning capabilities with Google Cloud Platform',
      category: 'AI & ML',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise solutions and Watson AI platform integration',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM solutions and customer experience platform integration',
      category: 'CRM & CX',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database solutions and enterprise application development',
      category: 'Database & Enterprise',
      website: 'https://oracle.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Certified expertise in partner technologies',
    'Priority support and technical resources',
    'Co-marketing opportunities and joint solutions',
    'Regular training and certification programs',
    'Dedicated partner success managers',
    'Early access to new features and products',
    'Competitive pricing and licensing benefits'
  ];

  const stats = [
    { icon: Award, label: 'Certified Partners', value: '50+' },
    { icon: Users, label: 'Partner Companies', value: '200+' },
    { icon: Globe, label: 'Countries Served', value: '25+' },
    { icon: Shield, label: 'Security Certifications', value: '15+' }
  ];

  const categories = ['All', 'Cloud & AI', 'Cloud Computing', 'AI & ML', 'Enterprise AI', 'CRM & CX', 'Database & Enterprise'];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Discover our strategic technology partnerships with leading companies like Microsoft, AWS, Google Cloud, and IBM. Certified expertise and joint solutions." />
        <meta name="keywords" content="technology partners, Microsoft partner, AWS partner, Google Cloud partner, IBM partner, certified partners" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We partner with industry leaders to deliver cutting-edge solutions. 
              Our certified expertise ensures you get the best technology available.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Technology Partners</h2>
              <p className="text-xl text-gray-300">Leading companies we work with to deliver exceptional solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-sm">{partner.name.split(' ')[0]}</div>
                    </div>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Certified Partner</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our strategic partnerships provide you with access to the latest technologies, 
                  certified expertise, and exclusive benefits that help accelerate your digital transformation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Become a Partner</h3>
                <p className="text-gray-300 mb-6">
                  Interested in partnering with us? We're always looking for innovative companies 
                  that share our vision of transforming businesses through technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Technology alignment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Market presence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Customer focus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Innovation mindset</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
                  Apply for Partnership
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Work with Our Partners?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Leverage our certified expertise and strategic partnerships to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PartnersPage;