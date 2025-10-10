'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud infrastructure partner for scalable solutions',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform integration partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and Watson integration',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'Enterprise resource planning and business intelligence',
      category: 'ERP & BI',
      website: 'https://sap.com',
      tier: 'certified'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'ITSM & Automation',
      website: 'https://servicenow.com',
      tier: 'preferred'
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep knowledge of partner technologies'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Dedicated partner success managers and technical support teams'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Collaborative innovation and co-development of cutting-edge solutions'
    }
  ];

  const tiers = {
    strategic: {
      name: 'Strategic Partners',
      color: 'from-purple-500 to-pink-500',
      description: 'Our most important partnerships with industry leaders'
    },
    preferred: {
      name: 'Preferred Partners',
      color: 'from-cyan-500 to-blue-500',
      description: 'Key technology partners with proven track records'
    },
    certified: {
      name: 'Certified Partners',
      color: 'from-green-500 to-teal-500',
      description: 'Certified solution providers with specialized expertise'
    }
  };

  const stats = [
    { value: '50+', label: 'Partners', description: 'Strategic and certified partners' },
    { value: '99%', label: 'Satisfaction', description: 'Partner satisfaction rate' },
    { value: '24/7', label: 'Support', description: 'Round-the-clock partner support' },
    { value: '5+', label: 'Years', description: 'Average partnership duration' }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with industry leaders to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, AI partners, cloud partners, enterprise solutions" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic technology partnerships for innovative solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions. 
              Our strategic partnerships enable us to provide comprehensive technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners by Tier */}
        {Object.entries(tiers).map(([tierKey, tierInfo]) => {
          const tierPartners = partners.filter(partner => partner.tier === tierKey);
          if (tierPartners.length === 0) return null;

          return (
            <section key={tierKey} className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">{tierInfo.name}</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">{tierInfo.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierPartners.map((partner, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Building2 className="w-10 h-10 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {partner.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{partner.category}</p>
                      </div>
                      
                      <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                      
                      <div className="flex items-center justify-center">
                        <span className={`bg-gradient-to-r ${tierInfo.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                          {tierInfo.name}
                        </span>
                      </div>
                      
                      {partner.website && (
                        <div className="mt-6 text-center">
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Why our partners choose to work with us and what we offer in return
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partner Contact</h2>
              <p className="text-gray-300">Ready to explore partnership opportunities?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Partnership Inquiries</p>
                    <a href="mailto:partners@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      partners@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">General Contact</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request Partnership</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="partnership" className="block text-sm font-medium text-gray-300 mb-2">
                      Partnership Type
                    </label>
                    <select
                      id="partnership"
                      name="partnership"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select partnership type</option>
                      <option value="strategic">Strategic Partnership</option>
                      <option value="preferred">Preferred Partnership</option>
                      <option value="certified">Certified Partnership</option>
                      <option value="reseller">Reseller Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your partnership goals"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Partnership Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;