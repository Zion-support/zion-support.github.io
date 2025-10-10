'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Handshake, 
  Star, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Shield,
  Zap,
  Phone,
  Mail
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      icon: Handshake,
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint product development',
        'Co-marketing opportunities',
        'Technical support and training'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships',
      benefits: [
        'Competitive pricing and margins',
        'Marketing support and materials',
        'Sales training and certification',
        'Dedicated partner support'
      ]
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International expansion and localization',
      benefits: [
        'Local market expertise',
        'Regulatory compliance support',
        'Cultural adaptation services',
        'Regional customer support'
      ]
    },
    {
      icon: Shield,
      title: 'Security Partners',
      description: 'Cybersecurity and compliance partnerships',
      benefits: [
        'Advanced security solutions',
        'Compliance expertise',
        'Risk assessment services',
        'Incident response support'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      type: 'Technology Partner',
      description: 'Cloud solutions and AI platform integration'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      type: 'Cloud Partner',
      description: 'Infrastructure and AI services on AWS'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      type: 'AI Partner',
      description: 'Machine learning and data analytics solutions'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      type: 'Enterprise Partner',
      description: 'Enterprise AI and cognitive solutions'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      type: 'CRM Partner',
      description: 'Customer relationship management integration'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      type: 'Database Partner',
      description: 'Database and enterprise application solutions'
    }
  ];

  const benefits = [
    'Access to exclusive partner resources',
    'Co-marketing and lead sharing',
    'Technical training and certification',
    'Dedicated partner support team',
    'Competitive pricing and margins',
    'Joint go-to-market strategies',
    'Regular partner events and networking',
    'Priority access to new products'
  ];

  const stats = [
    {
      icon: Users,
      value: '100+',
      label: 'Active Partners',
      description: 'Worldwide partner network'
    },
    {
      icon: Star,
      value: '95%',
      label: 'Partner Satisfaction',
      description: 'Highly rated partnerships'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Countries',
      description: 'Global partner presence'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Partner Support',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Partner Program & Strategic Alliances</title>
        <meta name="description" content="Join our partner program and grow your business with Zion Tech Group. Technology, channel, and global partnerships available." />
        <meta name="keywords" content="partners, partner program, strategic alliances, technology partners, channel partners, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Program</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing network of partners and unlock new opportunities for growth and success.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{partner.type}</p>
                  <p className="text-gray-300 text-xs">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partner Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock exclusive benefits and opportunities as a Zion Tech Group partner
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Become a Partner?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner program and start growing your business with Zion Tech Group.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="w-5 h-5" />
                  Apply to Partner Program
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;