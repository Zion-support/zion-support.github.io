'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';

const PartnersPage: React.FC = () => {,
  const partners = [
import {ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight}}from 'lucide-react';

interface Partner {id: string;,}
  name: string;,
  logo: string;,
  description: string;,
  category: string;,
  website: string;,
  tier: 'preferred' | 'certified' | 'strategic';,}const PartnersPage: React.FC = () => {,
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [,
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Globe, Shield, Users, Zap, Star, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international markets and customers worldwide',
    },
    {
      icon: Shield,
      title: 'Enterprise Focus',
      description: 'Dedicated support for enterprise-level partnerships',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 technical support and partnership management',
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Quick and easy integration with existing systems',
    }
  ];

  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate our solutions with your technology stack',
      features: ['API Access', 'SDK Support', 'Technical Documentation', 'Co-marketing Opportunities']
    },
    {
      title: 'Channel Partners',
      description: 'Resell our solutions to your customer base',
      features: ['Reseller Program', 'Training & Certification', 'Marketing Support', 'Competitive Pricing']
    },
    {
      title: 'Strategic Partners',
      description: 'Joint development and go-to-market initiatives',
      features: ['Joint Development', 'Co-innovation', 'Market Expansion', 'Revenue Sharing']

const PartnersPage: React.FC = () => {
  const partners = [

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
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
const PartnersPage: React.FC = () => {
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
const PartnersPage: React.FC = () => {
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
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      description: 'Strategic cloud and AI solutions partner',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic',
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
  ];

  return (
    <>
  </>
      <Helmet>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  ))
                ))}
              </div>
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic',
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning solutions partner',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'strategic',
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing partner',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred',
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'preferred',
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'preferred',
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management solutions',
      category: 'ITSM',
      website: 'https://servicenow.com',
      tier: 'certified',
    },
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and monitoring platform',
      category: 'Analytics',
      website: 'https://splunk.com',
      tier: 'certified',
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Cloud data platform solutions',
      category: 'Data Platform',
      website: 'https://snowflake.com',
      tier: 'certified',
    }
  ];

  const benefits = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: 'Strategic Partnerships',
      description: 'Long-term relationships with industry leaders for mutual growth and innovation.',
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Certified Expertise',
      description: 'Certified professionals with deep expertise in partner technologies and solutions.',
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Faster Implementation',
      description: 'Accelerated project delivery through proven methodologies and best practices.',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Dedicated Support',
      description: 'Access to partner support teams and specialized resources for your projects.',
    }
  ];

  const partnerTiers = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Our most important partnerships with industry leaders',
      color: 'bg-blue-100 text-blue-800',
    },
    preferred: {
      title: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'bg-green-100 text-green-800',
    },
    certified: {
      title: 'Certified Partners',
      description: 'Certified solution providers with specialized expertise',
      color: 'bg-purple-100 text-purple-800',
    }
  };

  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.tier]) {
      acc[partner.tier] = [];
    }
    acc[partner.tier].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Partner With
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our growing ecosystem of partners and unlock new opportunities for growth, 
            innovation, and success in the AI and IT solutions market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              Become a Partner
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Partner Portal
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-300">Join our ecosystem of successful partners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300">Choose the partnership model that fits your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-300">See how our partners have grown with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">5.0 Rating</span>
              </div>
              <p className="text-gray-300 mb-4">
                "Partnering with Zion Tech Group has transformed our business. 
                The AI solutions integration was seamless and our revenue increased by 300%."
              </p>
              <div className="text-cyan-400 font-semibold">- TechCorp Solutions</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-semibold">Top Performer</span>
              </div>
              <p className="text-gray-300 mb-4">
                "The support and resources provided by Zion Tech Group helped us 
                expand into 15 new markets within 6 months."
              </p>
              <div className="text-cyan-400 font-semibold">- Global Systems Inc</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">Fast Growth</span>
              </div>
              <p className="text-gray-300 mb-4">
                "Their innovative AI solutions gave us a competitive edge. 
                We've seen 500% growth in our customer base."
              </p>
              <div className="text-cyan-400 font-semibold">- InnovateTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Partner Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can work together to drive mutual success and 
              deliver exceptional value to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Apply to Partner
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;
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

  return(<>)
      <Helmet />
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" />
      </Helmet>

      <Navigation />

  ];

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Our Technology Partners;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with leading technology companies to deliver the best solutions for our clients.</p>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">{categories.map((category) => (</div>
                <button;
                  key={category}className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover: bg-white/20 transition-all duration-300",
                >{category</button>} </button>
  ]
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div><section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover: border-cyan-400/30 transition-all duration-300">,</div>
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🏢</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              </div>
            ))}
          </div>
        </div>
      </section>

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
            </div>
        </div>
      </section>
      </div>

  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];];];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

  const filteredPartners = partners.filter(partner => {)
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;});

  const getTierColor = (tier: string) => {,
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))]
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))]
  const filteredPartners = partners.filter()
  })
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'from-purple-500 to-pink-600'
      case 'preferred':
        return 'from-blue-500 to-purple-600'
      case 'certified':
        return 'from-green-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';,}};

  const getTierIcon = (tier: string) => {,
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" />
      case 'preferred':
        return <Award className="w-4 h-4" />
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default: return <Handshake className="w-4 h-4" />;,}};

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" />
      </Helmet>

      {/* Hero Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with industry leaders to deliver the best AI and IT solutions.</p>
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

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
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3>
              <p className="text-gray-300">Work together to develop innovative solutions that benefit both organizations and their customers.</p>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3>
              <p className="text-gray-300">Leverage our combined expertise and market presence to reach new customers and expand market share.</p>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3>
              <p className="text-gray-300">Access to training, certification, and technical resources to stay ahead of technology trends.</p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md: flex-row gap-4 mb-12">,</div>
            <select;
              value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500",
            >
              {categories.map(category => ()
                <option key={category}value={category}>
                  {category === 'all' ? 'All Categories' : category} </option>
              ))}
            </select>
            <select;
              value={selectedTier}onChange={(e) => setSelectedTier(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500",
            >
              {tiers.map(tier => ()
                <option key={tier}value={tier}>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)} </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
            {filteredPartners.map((partner) => (
              <div key={partner.id}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 border border-white/20">,</div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{partner.name.charAt(0)</span>}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)}flex items-center gap-1`}>{getTierIcon(partner.tier)</div>}{partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category</p>}</p>
                <p className="text-gray-300 mb-6">{partner.description</p>}</p>

                <div className="flex items-center justify-between">
                  <a;
                    href={partner.website}target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover: text-blue-300 font-medium transition-colors flex items-center gap-2",
                  >
                    Visit Website;
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              </div><p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
            </div>
          )} </div>
      </section>

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
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                </ul><li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20">
              </div><div className="flex items-center gap-3 mb-6">
                </div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  </div><Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                </ul><li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Dedicated partner manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              </div><div className="flex items-center gap-3 mb-6">
                </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  </div><Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                </ul><li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Joint product development</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Executive relationship management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
      tier: 'strategic',
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred',
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred',
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred',
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'certified',
    },
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified',
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
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-400 to-purple-500',
    },
    {
      name: 'Certified Partners',
      description: 'Qualified partners with specialized expertise',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      color: 'from-green-400 to-teal-500',
    }
  ]
  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>Partners | Zion Tech Group
        <meta name="description" content="Our strategic partners and ecosystem that help us deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, strategic partnerships, technology partners, AI solutions, IT services" />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Partners
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge AI and IT solutions.
        {/* Partners Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{partner.name}
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}
                  <p className="text-gray-300 text-sm mb-3">{partner.description}
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    {partner.category}
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+
                <div className="text-gray-400">Technology Partners
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+
                <div className="text-gray-400">Years of Partnership
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%
                <div className="text-gray-400">Certified Solutions
        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships are structured to provide maximum value and support for our clients.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} text-center`}>
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}
                  <p className="text-gray-300">{tier.description}
              ))}
{/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the world's leading technology companies to deliver comprehensive solutions.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier)
                return (
                  <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {partner.name}
                      <p className="text-sm text-gray-300 mb-3">{partner.description}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.color} ${tierInfo.bgColor}`}>
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships provide significant advantages for your business.
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3">
                    {benefit}
              ))}
{/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become Our Partner
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem and help shape the future of AI and IT solutions.
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">Partner With Us
      <Footer />
  )
}
export default PartnersPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></button></p></p></p></p></p></p></p></p></p></h1></h1></h2></h2></h2></h2></h2></h3></h3></h3></main></section></section></section></section></section></section></section>
