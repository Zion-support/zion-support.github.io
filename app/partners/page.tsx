'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, Award, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      partnership: 'Strategic Alliance',
      benefits: ['Azure integration', 'AI model deployment', 'Enterprise support']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Premier AWS partner for cloud infrastructure and machine learning',
      category: 'Cloud Computing',
      partnership: 'Premier Partner',
      benefits: ['AWS credits', 'Technical support', 'Training programs']
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'Google Cloud partner for AI and data analytics solutions',
      category: 'AI & Analytics',
      partnership: 'Technology Partner',
      benefits: ['GCP integration', 'AI/ML tools', 'Data analytics']
    },
    {
      name: 'Salesforce',
      logo: '💼',
      description: 'Salesforce partner for CRM integration and automation',
      category: 'CRM & Automation',
      partnership: 'Certified Partner',
      benefits: ['Salesforce integration', 'Custom development', 'Training']
    },
    {
      name: 'IBM',
      logo: '🔵',
      description: 'IBM partner for enterprise AI and quantum computing',
      category: 'Enterprise AI',
      partnership: 'Business Partner',
      benefits: ['Watson AI', 'Quantum computing', 'Enterprise solutions']
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      description: 'Oracle partner for database and enterprise applications',
      category: 'Database & ERP',
      partnership: 'Gold Partner',
      benefits: ['Oracle Cloud', 'Database solutions', 'ERP integration']
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide partner network and resources'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance standards'
    },
    {
      icon: Zap,
      title: 'Faster Implementation',
      description: 'Accelerated deployment with proven methodologies'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Certified professionals and best practices'
    }
  ];

  const partnerPrograms = [
    {
      name: 'Technology Partner',
      description: 'Integrate your technology with our platform',
      requirements: ['API integration', 'Technical documentation', 'Support agreement'],
      benefits: ['Co-marketing', 'Technical support', 'Revenue sharing']
    },
    {
      name: 'Solution Partner',
      description: 'Build solutions on our platform',
      requirements: ['Solution certification', 'Customer references', 'Training completion'],
      benefits: ['Partner portal access', 'Sales enablement', 'Joint go-to-market']
    },
    {
      name: 'Strategic Partner',
      description: 'Deep integration and joint innovation',
      requirements: ['Strategic alignment', 'Joint roadmap', 'Investment commitment'],
      benefits: ['Executive sponsorship', 'Custom development', 'Market expansion']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Partners | Zion Tech Group - Strategic Partnerships & Alliances</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, technology alliances, and joint solutions." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners, partner program" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our ecosystem of technology partners and grow your business with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Our Technology Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technology companies to deliver the best solutions to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={partner.name} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    {partner.partnership}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <span className="text-xs text-gray-400">{partner.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Partner Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div key={program.name} className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{program.name}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full cyber-button text-center py-2 flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center cyber-card hologram-card p-12">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:partners@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Partners Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;