'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      category: 'Cloud Partner',
      description: 'Advanced Solutions Provider with deep AWS expertise',
      benefits: ['AWS credits', 'Training programs', 'Joint go-to-market']
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      category: 'AI Partner',
      description: 'Specialized partnership for AI and machine learning solutions',
      benefits: ['GCP credits', 'AI/ML tools', 'Research collaboration']
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      category: 'Enterprise Partner',
      description: 'Enterprise solutions and Watson AI platform integration',
      benefits: ['IBM Cloud access', 'Watson AI tools', 'Enterprise support']
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.png',
      category: 'CRM Partner',
      description: 'Certified Salesforce implementation and customization services',
      benefits: ['Salesforce training', 'Certification programs', 'AppExchange listing']
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      category: 'Database Partner',
      description: 'Oracle Cloud Infrastructure and database solutions',
      benefits: ['OCI credits', 'Database tools', 'Technical training']
    }
  ];

  const partnershipTypes = [
    {
      icon: Globe,
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers to deliver cutting-edge solutions',
      benefits: ['Access to latest technologies', 'Joint development opportunities', 'Market expansion']
    },
    {
      icon: Shield,
      title: 'Security Partners',
      description: 'Collaboration with cybersecurity experts to ensure robust protection for our clients',
      benefits: ['Advanced security tools', 'Threat intelligence sharing', 'Compliance expertise']
    },
    {
      icon: Zap,
      title: 'Integration Partners',
      description: 'Seamless integration with popular business tools and platforms',
      benefits: ['Faster implementation', 'Reduced complexity', 'Better user experience']
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and tools',
    'Joint go-to-market opportunities',
    'Technical training and certification programs',
    'Co-marketing and lead sharing',
    'Priority support and resources',
    'Exclusive partner events and networking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Strategic partnerships with industry leaders to deliver comprehensive solutions 
              and drive innovation in AI and IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with different types of partners to provide comprehensive solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders and technology innovators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-white">{partner.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                    <span className="text-cyan-400 text-sm">{partner.category}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What you get when you partner with Zion Tech Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Apply to Partner</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:partners@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              partners@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;