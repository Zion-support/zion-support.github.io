'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';

interface Partner {name: string;}
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {const partners: Partner[] = [}
    {name: 'Microsoft',}
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership for enterprise solutions',
      category: 'Technology',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {name: 'Google Cloud',}
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for machine learning and data analytics',
      category: 'Cloud',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {name: 'Salesforce',}
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'strategic'
    },
    {name: 'IBM',}
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and data analytics solutions',
      category: 'Enterprise',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {name: 'Oracle',}
      logo: '/images/partners/oracle.png',
      description: 'Database and cloud infrastructure solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {name: 'Amazon Web Services',}
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    }
  ];

  const benefits = []
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling programs',
    'Dedicated partner success manager',
    'Priority support and resources',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
  ];

  const tiers = []
    {name: 'Strategic Partners',}
      description: 'Our most important technology and business partners',
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {name: 'Preferred Partners',}
      description: 'Certified partners with proven track record',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-400 to-purple-500'
    },
    {name: 'Certified Partners',}
      description: 'Authorized partners with specialized expertise',
      icon: <Handshake className="w-8 h-8 text-green-500" />,
      color: 'from-green-400 to-teal-500'
    }
  ];

  const stats = []
    { icon: <Building2 className="w-8 h-8 text-blue-500" />, value: '50+', label: 'Partners' },
    { icon: <Users className="w-8 h-8 text-green-500" />, value: '100+', label: 'Certified Experts' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '200+', label: 'Joint Projects' },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, value: '24/7', label: 'Support' }
  ];

  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partners and ecosystem that help us deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, technology partners, strategic partnerships, ecosystem" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry-leading technology partners to deliver comprehensive solutions that drive innovation and business success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (}
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading technology companies to provide you with the best solutions and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (}
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${}
                      partner.tier === 'strategic' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'preferred' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <p className="text-sm text-cyan-400 mb-6">{partner.category}</p>
                
                {partner.website && (}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer different partnership levels to meet the needs of our diverse partner ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (}
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 text-center">
                <div className="flex justify-center mb-6">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <p className="text-gray-300">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock exclusive benefits and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (}
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and help us deliver innovative solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage