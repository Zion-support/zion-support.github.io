'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ExternalLink, Award, Users, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/partners/azure.png',
      description: 'Enterprise cloud solutions and AI platform',
      category: 'Cloud',
      website: 'https://azure.microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/gcp.png',
      description: 'AI and machine learning services',
      category: 'Cloud',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'AI computing and GPU solutions',
      category: 'Hardware',
      website: 'https://nvidia.com',
      tier: 'technology'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Technology',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'Software',
      website: 'https://salesforce.com',
      tier: 'technology'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Software',
      website: 'https://oracle.com',
      tier: 'technology'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Networking and cybersecurity solutions',
      category: 'Security',
      website: 'https://cisco.com',
      tier: 'technology'
    },
    {
      name: 'Dell Technologies',
      logo: '/images/partners/dell.png',
      description: 'Infrastructure and storage solutions',
      category: 'Hardware',
      website: 'https://dell.com',
      tier: 'technology'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Dedicated Support',
      description: 'Direct access to partner support teams and resources'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Global Reach',
      description: 'Leverage partner networks for worldwide deployment'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Compliance',
      description: 'Meet enterprise security and compliance requirements'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early product releases'
    }
  ];

  const tiers = {
    strategic: { label: 'Strategic Partner', color: 'from-cyan-400 to-purple-500' },
    technology: { label: 'Technology Partner', color: 'from-blue-400 to-cyan-500' }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with industry leaders to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, technology partnerships, AWS, Microsoft Azure, Google Cloud, strategic alliances, technology ecosystem" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Partners</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We collaborate with industry leaders to deliver cutting-edge AI and IT solutions. 
                Our strategic partnerships enable us to provide the best technology and support for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships provide us with access to cutting-edge technology, 
                expert support, and global resources to better serve our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6"
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technology companies to deliver comprehensive solutions 
                that meet the diverse needs of our clients across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tiers[partner.tier as keyof typeof tiers].color} text-white`}>
                      {tiers[partner.tier as keyof typeof tiers].label}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 font-medium">{partner.category}</span>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain different levels of partnerships based on the depth of collaboration 
                and mutual value creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Strategic Partners</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Long-term partnerships with shared goals, joint go-to-market strategies, 
                  and deep technical integration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Joint product development</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Shared marketing initiatives</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Priority support and resources</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Early access to new technologies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technology Partners</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Technology-focused partnerships for integration, certification, 
                  and technical collaboration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Technical integration support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Certification programs</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Training and enablement</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Co-marketing opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Partnering With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for new technology partners who share our vision of 
              transforming businesses through innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Become a Partner</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                Email Our Partnership Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PartnersPage;