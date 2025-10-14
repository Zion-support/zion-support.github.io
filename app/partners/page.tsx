const PartnersPage: React.FC  = () => {
  const partners = [;
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC  = () => {
  const partners: Partner[] = [
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
const PartnersPage: React.FC  = () => {
  const partners = [
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react'
interface Partner {
  id: string
  name: string
  logo: string
  description: string
  category: string
  website: string
  tier: 'preferred' | 'certified' | 'strategic'
}]
const PartnersPage: React.FC  = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTier, setSelectedTier] = useState('all')
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',},
    {id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',}'Access to cutting-edge technology',
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
    };
  ];

  const partnerTiers = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'bg-blue-100 text-blue-800'
    },
    preferred: {
      title: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'bg-green-100 text-green-800'
    },
    certified: {
      title: 'Certified Partners',
      description: 'Certified solution providers with specialized expertise',
      color: 'bg-purple-100 text-purple-800'
    }
  };

  const groupedPartners = partners.reduce((acc, partner) =>
                {
    if (!acc[partner.tier]) {
      acc[partner.tier] = [];
    }
    acc[partner.tier].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
    <div className="min-h-screen bg-gray-50"></div>
      <Helmet></Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Certified expertise across cloud, AI, and enterprise solutions." />
        <meta name="keywords" content="technology partners, cloud partners, AI partners, enterprise solutions, certified partners" />
      </Helmet>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"></h1>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
                </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100"></p>
              We partner with industry leaders to deliver cutting-edge solutions and exceptional value to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              ></Link
>
                Become a Partner
              </Link>
              <Link
                to="#benefits"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              ></Link
>
                Learn More
              </Link>
                </div>
          </div>
                </div>
      </section>
                {/* Benefits Section */}
                <section id="benefits" className="py-16 bg-white"></section>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-6xl mx-auto"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4"></h2>
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Our partnerships are built on mutual trust, shared values, and a commitment to delivering exceptional results.
              </p>
                </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"></div>
                  <div className="flex justify-center mb-4"></div>
                {benefit.icon}
                </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3"></h3>
                {benefit.title}
                </h3>
                  <p className="text-gray-600"></p>
                {benefit.description}
                </p>
    }
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
  ];
  const benefits = [
    {
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners',
      icon: CheckCircle
    },
    {
      title: 'Priority Support',
      description: 'Get priority access to partner resources and support channels',
      icon: CheckCircle
    },
    {
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early release features',
      icon: CheckCircle
    },
    {
      title: 'Cost Optimization',
      description: 'Leverage partner pricing and volume discounts for your projects',
      icon: CheckCircle
    }
  ];
  const benefits = [
    {title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners',
      icon: CheckCircle;,},
    {title: 'Priority Support',
      description: 'Get priority access to partner resources and support channels',
      icon: CheckCircle;,},
    {title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early release features',
      icon: CheckCircle;,},
    {title: 'Cost Optimization',
      description: 'Leverage partner pricing and volume discounts for your projects',
      icon: CheckCircle;,}];
  const categories = ['All', 'Cloud & AI', 'Hardware & AI', 'Business Software', 'IT Management']

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Our Technology Partners;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with leading technology companies to deliver the best solutions for our clients.</p>
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
                {categories.map((category) => (</div>
                <button;
                  key={category}className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover: bg-white/20 transition-all duration-300",
                ></button;
>
                {category</button>}
                </button>
  ]
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        </div><section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
                </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
                {categories.map((category) => (
                </div><$2 />
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                {category}
                </button>
              ))}
                </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,</div>
                {partners.map((partner, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"></div>
                  </div><div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center"></div>
                    </div><div className="text-4xl opacity-50">🏢</div>
                </div>
                  <h3 className="text-xl font-bold text-white mb-2"></h3>
                {partner.name}
                </h3>
                </div>
              ))}
                </div>
                </div>
        </div>
                </section>

                  </div>
                ))}
                </div>
            ))}
                </div>
                </div>
      </section>
                </div>
          </div>
                </section>
      </div>
    </>
  const filteredPartners = partners.filter(partner =>
                {;
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;});

  const getTierColor = (tier: string) =>
                {,
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))]
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))]
  const filteredPartners = partners.filter()
  })
  const getTierColor = (tier: string) =>
                {
    switch (tier) {
      case 'strategic':
        return 'from-purple-500 to-pink-600'
      case 'preferred':
        return 'from-blue-500 to-purple-600'
      case 'certified':
        return 'from-green-500 to-blue-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }
  const getTierIcon = (tier: string) =>
                {
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" />
      case 'preferred':
        return <Award className="w-4 h-4" />
      case 'certified':
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Handshake className="w-4 h-4" />
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      </div><Helmet></Helmet>
        </Helmet><title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" />
      </Helmet>
                {/* Hero Section */}
                <section className="py-20 px-4"></section>
        </section>< className="$2 />
          </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
            Our </h1><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with industry leaders to deliver the best AI and IT solutions.</p>
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
                </div>
      </section>
                {/* Partnership Benefits */}
                <section className="py-16 px-4 bg-white/5"></section>
        </section>< className="$2 />
          </div><div className="text-center mb-16"></div>
            </div><h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer comprehensive partnership programs that benefit both our partners and our clients
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              </div><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                </div><Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3>
              <p className="text-gray-300">Work together to develop innovative solutions that benefit both organizations and their customers.</p>
                </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                </div><Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3>
              <p className="text-gray-300">Leverage our combined expertise and market presence to reach new customers and expand market share.</p>
                </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                </div><Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3>
              <p className="text-gray-300">Access to training, certification, and technical resources to stay ahead of technology trends.</p>
                </p>
            </div>
                </div>
        </div>
                </section>
                {/* Partners Grid */}
                <section className="py-16 px-4"></section>
        </section>< className="$2 />
          </div><div className="flex flex-col md:flex-row gap-4 mb-12"></div>
            </div><select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                {categories.map(category => (
                </select><option key={category} value={category}></option>
                {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
                </select>
            <select;
              value={selectedTier}onChange={(e) => setSelectedTier(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500",
            >
                {tiers.map(tier => (
                </select><option key={tier} value={tier}></option>
                {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>
              ))}
                </select>
                </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                {filteredPartners.map((partner) => (
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`}></div>
              </div><div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20"></div>
                </div><div className="flex items-center justify-between mb-6"></div>
                  </div><div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center"></div>
                    </div><span className="text-white font-bold text-lg"></span>
                {partner.name.charAt(0)}
                </span>
                </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`} /></div>
                {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2"></h3>
                {partner.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4"></p>
                {partner.category</p>}
                </p>
                <p className="text-gray-300 mb-6"></p>
                {partner.description</p>}
                </p>

                <div className="flex items-center justify-between"></div>
                  </div><$2 />
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2" /></a>
                    Visit Website
                    </a><ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
                </div>
                {filteredPartners.length === 0 && (
            <div className="text-center py-12"></div>
              </div><p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
                </div>
          )}
                </div>
                </section>
                {/* Partnership Tiers */}
                <section className="py-16 px-4 bg-white/5"></section>
        </section>< className="$2 />
          </div><div className="text-center mb-16"></div>
            </div><h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer different partnership levels to meet the needs of various organizations
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
              </div><div className="flex items-center gap-3 mb-6"></div>
                </div><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                  </div><CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3>
                </div>
              <ul className="space-y-3 text-gray-300"></ul>
                </ul><li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Email support</span>
                </li>
              </ul>
                </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20"></div>
              </div><div className="flex items-center gap-3 mb-6"></div>
                </div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"></div>
                  </div><Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3>
                </div>
              <ul className="space-y-3 text-gray-300"></ul>
                </ul><li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Dedicated partner manager</span>
                </li>
              </ul>
                </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
              </div><div className="flex items-center gap-3 mb-6"></div>
                </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>
                  </div><Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3>
                </div>
              <ul className="space-y-3 text-gray-300"></ul>
                </ul><li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Joint product development</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Executive relationship management</span>
                </li>
              </ul>
                </div>
          </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-20 px-4"></section>
        </section>< className="$2 />
          </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Apply for Partnership
                </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
                Learn More
              </button>
                </div>
          </div>
                </div>
      </section>
                </div>

  );
};

export default PartnersPage;
  )
}
export default PartnersPage
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'certified'
    },
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
    }
  ]
  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Co-marketing and co-selling programs',
    'Dedicated partner success manager',
    'Priority support and resources'
  ]
  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Our most important technology and business partners',
      icon: <Award className="w-8 h-8 text-gold-500" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Certified Partners',
      description: 'Qualified partners with specialized expertise',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      color: 'from-green-400 to-teal-500'
    }
  ]
  const getTierInfo = (tier: string) =>
                {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]
  }
  return (
    <React.Fragment></React.Fragment>
      <Helmet></Helmet>
        <title>Partners | Zion Tech Group
        <meta name="description" content="Our strategic partners and ecosystem that help us deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, AI solutions, IT services" />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Partners
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              We work with industry leaders to deliver cutting-edge AI and IT solutions.
        {/* Partners Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"></div>
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center"></div>
                    <span className="text-gray-400 text-sm"></span>
                {partner.name}
                <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {partner.name}
                <p className="text-gray-300 text-sm mb-3"></p>
                {partner.description}
                <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full"></span>
                {partner.category}
                <title>Partners - Zion Tech Group | Strategic Technology Partnerships
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"></p>
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-white mb-2">50+
                <div className="text-gray-400">Technology Partners
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-white mb-2">15+
                <div className="text-gray-400">Years of Partnership
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-white mb-2">100%
                <div className="text-gray-400">Certified Solutions
        {/* Partnership Tiers */}
                <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our partnerships are structured to provide maximum value and support for our clients.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} text-center`}></div>
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}></div>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}></h3>
                {tier.name}
                <p className="text-gray-300"></p>
                {tier.description}
              ))}
{/* Partners Grid */}
                <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We work with the world's leading technology companies to deliver comprehensive solutions.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {partners.map((partner, index) =>
                {
                const tierInfo = getTierInfo(partner.tier)
                return (
                  <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}></div>
                    <div className="text-center"></div>
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center"></div>
                        <div className="text-2xl font-bold text-white"></div>
                {partner.name.charAt(0)}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>
                {partner.name}
                <p className="text-sm text-gray-300 mb-3"></p>
                {partner.description}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.color} ${tierInfo.bgColor}`}></div>
                {partner.category}
                      {partner.website && (
                        <$2 />
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors mt-3 text-sm">
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                      )}
                )
              })}
        {/* Partnership Benefits */}
                <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our strategic partnerships provide significant advantages for your business.
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300"></span>
                {benefit}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                {benefit}
              ))}
{/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become Our Partner
            <p className="text-xl text-gray-300 mb-8"></p>
              Join our ecosystem and help shape the future of AI and IT solutions.
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">Partner With Us
      <Footer />
  )
}
export default PartnersPage</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></span>
                </span></button>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></h1>
                </h1></h2>
                </h2></h2>
                </h2></h2>
                </h3></h3>
                </h3></main>
                </section></section>
                </section></section>
                </section></section>
                </section>
