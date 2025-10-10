'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';

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
      logo: 'MS',
      description: 'Strategic partner for Azure cloud services and AI solutions',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: 'GC',
      description: 'AI and machine learning platform partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: 'IBM',
      description: 'Enterprise AI and Watson solutions partner',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: 'SF',
      description: 'CRM and customer experience solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: 'OR',
      description: 'Database and enterprise software solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Certified professionals in partner technologies'
    },
    {
      icon: TrendingUp,
      title: 'Joint Innovation',
      description: 'Collaborative development of cutting-edge solutions'
    },
    {
      icon: Users,
      title: 'Extended Support',
      description: 'Access to partner support and resources'
    }
  ];

  const tiers = {
    strategic: {
      name: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'from-cyan-500 to-blue-500',
      icon: Award
    },
    preferred: {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'from-blue-500 to-purple-500',
      icon: CheckCircle
    },
    certified: {
      name: 'Certified Partners',
      description: 'Certified partners with specialized expertise',
      color: 'from-purple-500 to-pink-500',
      icon: Building2
    }
  };

  const stats = [
    { number: '50+', label: 'Partners', icon: Handshake },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '99%', label: 'Satisfaction', icon: Award },
    { number: '24/7', label: 'Support', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with industry leaders help us deliver the best AI and IT solutions to our clients." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Strategic partnerships with industry leaders to deliver the best AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our partnerships are built on mutual trust, shared values, and a commitment to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
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
          <section key={tierKey} className="py-16 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {tierInfo.name}
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  {tierInfo.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tierPartners.map((partner, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tierInfo.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-sm">{partner.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                        <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                    
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Become a Partner Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Become a Partner
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Join our network of trusted partners and help us deliver innovative AI and IT solutions to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partners@ziontechgroup.com" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Partner With Us
            </a>
            <a 
              href="/contact" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;