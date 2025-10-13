import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { CheckCircle, Handshake, Users, Award } from 'lucide-react;

const PartnersPage = () => {;
  const partners = [;
    {
      name: 'Microsoft,
      logo: '/api/placeholder/200/100,
    },
    {
      name: 'Amazon Web Services,
      logo: '/api/placeholder/200/100,
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react;
import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
    {
      name: 'Microsoft,'
      logo: '/images/partners/microsoft.png,'
      description: 'Strategic partnership for Azure cloud solutions and AI services,'
      category: 'Cloud & AI,'
      website: 'https://microsoft.com,'
      tier: 'strategic;'
    },    {
      name: 'Amazon Web Services,'
      logo: '/images/partners/aws.png,'
      description: 'Leading cloud infrastructure and machine learning platform provider,'
      category: 'Cloud Computing,'
      website: 'https://aws.amazon.com,'
      tier: 'strategic;'
    },
      tier: 'strategic});)},'
    {
      name: 'Google Cloud,'
      logo: '/images/partners/google-cloud.png,'
      description: 'Advanced AI and machine learning platform with global reach,'
      category: 'Cloud & AI,'
      website: 'https://cloud.google.com,'
      tier: 'strategic;'
    },    {
      name: 'IBM,'
      logo: '/images/partners/ibm.png,'
      description: 'Enterprise AI solutions and hybrid cloud platform,'
      category: 'Enterprise AI,'
      website: 'https://ibm.com,'
      tier: 'preferred;'
    },
    {
      name: 'Salesforce,'
      logo: '/images/partners/salesforce.png,'
      description: 'Customer relationship management and business automation,'
      description: 'Customer relationship management and business automation platform',      category: 'CRM & Automation,'
      website: 'https://salesforce.com,'
      tier: 'preferred});)'
},
    {
      name: 'Oracle,'
      logo: '/images/partners/oracle.png,'
      description: 'Database solutions and enterprise applications,'
      category: 'Database & Enterprise,'
      website: 'https://oracle.com,'
      tier: 'preferred});)'
},
    {
      name: 'ServiceNow,'
      logo: '/images/partners/servicenow.png,'
      description: 'IT service management and workflow automation,'
      category: 'IT Management,'
      website: 'https://servicenow.com,'
      tier: 'certified});)'
},
    {
      name: 'Splunk,'
      logo: '/images/partners/splunk.png,'
      description: 'Data analytics and security monitoring platform,'
      category: 'Analytics & Security,'
      website: 'https://splunk.com,'
      tier: 'certified;'
    }  ];

  const benefits = [;.

    'Access to cutting-edge technology platforms,'
    'Joint go-to-market strategies,'
    'Co-marketing opportunities,'
    'Technical support and training,'
    'Early access to new features,'
    Dedicated partner success manager.
  ];

  const partnershipTiers = [;.

    {
      name: 'Strategic,'
      description: 'Deep integration and co-innovation,'
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20,'
      borderColor: 'border-purple-400/50,'
      icon: Award.
    },
    {
      name: 'Preferred,'
      description: 'Enhanced support and collaboration,'
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20,'
      borderColor: 'border-blue-400/50,'
      icon: Handshake.
    },
    {
      name: 'Certified,
      description: 'Verified expertise and capabilities,
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20,
      borderColor: 'border-green-400/50,
      category: 'Cloud & AI'
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    }
  ];

  const benefits = [
    'Increase efficiency by up to 300%',
    'Reduce manual work by 80%',
    'Improve accuracy with AI automation',
    'Scale your operations seamlessly',
    'Save time with intelligent automation',
    'Boost productivity and results'
  ];

  return (
    <div>
  )
    </div>
  ).
  ).
  )
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn about our partner ecosystem and collaboration opportunities." />"
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, Microsoft, AWS, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Partners.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced page solutions powered by artificial intelligence. Transform your business with our cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Strategic Technology Partners.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier).
                const Component = () => {
  
                  return (
    <div.
                    key={index}
                    className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 border ${tierInfo.borderColor}`}
                  >
                    <div className="text-center mb-4">
                      <img.
                        src={partner.logo}
                        alt={partner.name}
                        className="w-24 h-12 object-contain mx-auto mb-4"
                      />
                      <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>"
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tierInfo.bgColor} ${tierInfo.color}`}>
                        {partner.tier} Partner.
                      </span>
                    </div>
                    
                    <div className="mb-4">"
                      <p className="text-gray-300 text-sm mb-2">{partner.description}</p>"
                      <span className="text-cyan-400 text-xs font-medium">{partner.category}</span>
                    </div>
                    
                    <button className="w-full py-2 px-4 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm">
                      Learn More
                      <ExternalLink className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
  ).
  ).
                ).
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 bg-gray-900/30">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Partnership Benefits.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
              <div className="cyber-card hologram-card p-8 text-center">"
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>"
                <p className="text-gray-300">
                  Access to worldwide markets and customer bases through our partner network.
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">"
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />"
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>"
                <p className="text-gray-300">
                  Early access to cutting-edge technologies and joint innovation programs.
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">"
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />"
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>"
                <p className="text-gray-300">
                  Comprehensive technical support and dedicated partner success managers.
                </p>
              </div>
            </div>
            
            <div className="mt-12 cyber-card hologram-card p-8">"
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Our Partners Get</h3>"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">"
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />"
                    <span className="text-gray-300">{benefit}</span>
                  ))
                ))}
              </div>
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
      tier: 'strategic'});;)
},
    {}
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {}
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
    {}
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      description: 'Customer relationship management and business automation platform',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'});;)
},
    {}
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical support and training',
    'Early access to new features',
    'Dedicated partner success manager'
  ];

  const partnershipTiers = [
    {}
      name: 'Strategic',
      description: 'Deep integration and co-innovation',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      icon: Award
    },
    {}
      name: 'Preferred',
      description: 'Enhanced support and collaboration',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/50',
      icon: Handshake
    },
    {}
      name: 'Certified',
      description: 'Verified expertise and capabilities',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
      icon: CheckCircle
    }

  ];

  const getTierInfo = (tier: string) => {;;

    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});)
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />"
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>"
          <div className="max-w-7xl mx-auto text-center>"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>"
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Partnerships</span>
            </h1>
            <p></p>
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div></div>
              <div></div>
                <di></di>50+</div>
                <di></di>Technology Partners</div>
              </div>
              <div></div>
                <di></di>15+</div>
                <di></di>Years of Partnership</div>
              </div>
              <div></div>
                <di></di>100%</div>
                <di></di>Certified Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}

        <section></section>
          <div></div>
            <div></div>
              <h></h>Partnership Tiers</h2>
              <p></p>
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div></div>
              {partnershipTiers.map((tier, index) => (

                      {partner.website && (

                {benefits.map((benefit, index) => (

      nam,    e: 'Microsoft,
      logo: /api/placeholder/200
      descriptio,
    n: 'Strategic partnership for Azure cloud solutions and AI services,'
      category: Cloud & AI.
    },
    {
      name: 'Amazon Web Services,'
      logo: /api/placeholder/200.
      descriptio,
    n: 'Leading cloud infrastructure and machine learning platform provider,'
      category: Cloud Computing.
    },
    {
      name: 'Google Cloud,'
      logo: /api/placeholder/200.
    },
    {
      name: 'IBM,
      logo: /api/placeholder/200
export default PartnersPage;
  return(<>)
      <Helmet />
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" />
      </Helmet>

      <Navigation />

  ];

                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover: border-cyan-400/30 transition-all duration-300">,</div>
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🏢</div>
      {/* Partners by Tier */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {Object.entries(partnerTiers).map(([tier, tierInfo]) => (
              <div key={tier} className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {tierInfo.title}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {tierInfo.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {groupedPartners[tier]?.map((partner, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-12 h-12 object-contain mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {partner.name}
                          </h3>
                          <span className={`text-sm font-medium px-2 py-1 rounded-full ${tierInfo.color}`}>
                            {tierInfo.title}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {partner.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {partner.category}
                        </span>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
      {/* Partnership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Partnership Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Discussion</h3>
                <p className="text-gray-600">We discuss your partnership goals and mutual benefits.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
                <p className="text-gray-600">We evaluate compatibility and potential for mutual success.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600">We formalize the partnership with clear terms and expectations.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
                <p className="text-gray-600">We launch joint initiatives and begin delivering value together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our network of strategic partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Become a Partner
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];];];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

  const filteredPartners = partners.filter(partner => {)
        return 'from-green-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';,}};

  const getTierIcon = (tier: string) => {,
        return <CheckCircle className="w-4 h-4" />;
      default: return <Handshake className="w-4 h-4" />;,}};

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
      {/* Hero Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
      {/* Partnership Benefits */} <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We offer comprehensive partnership programs that benefit both our partners and our clients;</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
      {/* Partners Grid */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md: flex-row gap-4 mb-12">,</div>
            <select;
              value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500",
            >
              {categories.map(category => ()
                <option key={category}value={category}>
                  {category === 'all' ? 'All Categories' : category} </option>
              {tiers.map(tier => ()
                <option key={tier}value={tier}>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)} </option>
              <div key={partner.id}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 border border-white/20">,</div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{partner.name.charAt(0)</span>}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)}flex items-center gap-1`}>{getTierIcon(partner.tier)</div>}{partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  <a;
                    href={partner.website}target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover: text-blue-300 font-medium transition-colors flex items-center gap-2",
                  >
                    Visit Website;
                    <ExternalLink className="w-4 h-4" />
      {/* Partnership Tiers */} <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We offer different partnership levels to meet the needs of various organizations;</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Become Our Partner;
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Apply for Partnership;
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                Learn More;
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>"
            <p className="text-xl text-gray-300">See how our partners have grown with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
              <div className="flex items-center mb-4">"
                <Star className="w-5 h-5 text-yellow-400 mr-2" />"
                <span className="text-yellow-400 font-semibold">5.0 Rating</span>
              </div>
              <p className="text-gray-300 mb-4">"
                "Partnering with Zion Tech Group has transformed our business. "
                The AI solutions integration was seamless and our revenue increased by 300%.
              </p>
              <div className="text-cyan-400 font-semibold">- TechCorp Solutions</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
              <div className="flex items-center mb-4">"
                <Award className="w-5 h-5 text-cyan-400 mr-2" />"
                <span className="text-cyan-400 font-semibold">Top Performer</span>
              </div>
              <p className="text-gray-300 mb-4">"
                "The support and resources provided by Zion Tech Group helped us "
                expand into 15 new markets within 6 months.
              </p>
              <div className="text-cyan-400 font-semibold">- Global Systems Inc</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
              <div className="flex items-center mb-4">"
                <Zap className="w-5 h-5 text-purple-400 mr-2" />"
                <span className="text-purple-400 font-semibold">Fast Growth</span>
              </div>
              <p className="text-gray-300 mb-4">"
                "Their innovative AI solutions gave us a competitive edge. "
                We've seen 500% growth in our customer base.'
              </p>
              <div className="text-cyan-400 font-semibold">- InnovateTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">"
        <div className="max-w-4xl mx-auto text-center">"
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">"
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Partner Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">"
              Let's discuss how we can work together to drive mutual success and ;'
              deliver exceptional value to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Apply to Partner
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Partner Kit.
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  ).
};

export default PartnersPage.
