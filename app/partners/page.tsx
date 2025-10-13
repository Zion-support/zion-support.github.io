<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;
=======
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

import { Link } from 'react-router-dom;

import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { CheckCircle, Handshake, Users, Award } from 'lucide-react;

const PartnersPage = () => {;
  const partners = [;
    {
<<<<<<< HEAD
      name: 'Microsoft,
      logo: '/api/placeholder/200/100,
    },
    {
      name: 'Amazon Web Services,
      logo: '/api/placeholder/200/100,
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react;
    {
      name: 'Microsoft,
      logo: '/images/partners/microsoft.png,
      description: 'Strategic partnership for Azure cloud solutions and AI services,
      category: 'Cloud & AI,
      website: 'https://microsoft.com,
      tier: 'strategic
    },    {
      name: 'Amazon Web Services,
      logo: '/images/partners/aws.png,
      description: 'Leading cloud infrastructure and machine learning platform provider,
      category: 'Cloud Computing,
      website: 'https://aws.amazon.com,
      tier: 'strategic
    },
      tier: 'strategic});)},
    {
      name: 'Google Cloud,
      logo: '/images/partners/google-cloud.png,
      description: 'Advanced AI and machine learning platform with global reach,
      category: 'Cloud & AI,
      website: 'https://cloud.google.com,
      tier: 'strategic
    },    {
      name: 'IBM,
      logo: '/images/partners/ibm.png,
      description: 'Enterprise AI solutions and hybrid cloud platform,
      category: 'Enterprise AI,
      website: 'https://ibm.com,
      tier: 'preferred
    },
    {
      name: 'Salesforce,
      logo: '/images/partners/salesforce.png,
      description: 'Customer relationship management and business automation,
      description: 'Customer relationship management and business automation platform',      category: 'CRM & Automation,
      website: 'https://salesforce.com,
      tier: 'preferred});)
},
    {
      name: 'Oracle,
      logo: '/images/partners/oracle.png,
      description: 'Database solutions and enterprise applications,
      category: 'Database & Enterprise,
      website: 'https://oracle.com,
      tier: 'preferred});)
},
    {
      name: 'ServiceNow,
      logo: '/images/partners/servicenow.png,
      description: 'IT service management and workflow automation,
      category: 'IT Management,
      website: 'https://servicenow.com,
      tier: 'certified});)
},
    {
      name: 'Splunk,
      logo: '/images/partners/splunk.png,
      description: 'Data analytics and security monitoring platform,
      category: 'Analytics & Security,
      website: 'https://splunk.com,
      tier: 'certified
    }  ];

  const benefits = [;;

    'Access to cutting-edge technology platforms,
    'Joint go-to-market strategies,
    'Co-marketing opportunities,
    'Technical support and training,
    'Early access to new features,
    Dedicated partner success manager
  ];

  const partnershipTiers = [;;

    {
      name: 'Strategic,
      description: 'Deep integration and co-innovation,
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20,
      borderColor: 'border-purple-400/50,
      icon: Award
    },
    {
      name: 'Preferred,
      description: 'Enhanced support and collaboration,
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20,
      borderColor: 'border-blue-400/50,
      icon: Handshake
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
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
=======
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud services and AI solutions',
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
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform partnership',
      category: 'AI & ML',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {}
      name: 'IBM',
      logo: '/images/partners/ibm.png',
<<<<<<< HEAD
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
=======
      description: 'Quantum computing and enterprise solutions collaboration',
      category: 'Quantum Computing',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'GPU acceleration and AI hardware solutions',
      category: 'Hardware & AI',
      website: 'https://nvidia.com',
      tier: 'preferred'
    },
    {
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Processor optimization and edge computing solutions',
      category: 'Hardware',
      website: 'https://intel.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & CX',
      website: 'https://salesforce.com',
      tier: 'certified'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Long-term strategic relationships with shared technology roadmaps',
      color: 'from-purple-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10',
      borderColor: 'border-purple-400/50',
      icon: <Award className="w-8 h-8" />
    },
    {
      name: 'Preferred Partners',
      description: 'Preferred vendors with deep technical integration',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-400/50',
      icon: <Handshake className="w-8 h-8" />
    },
    {
      name: 'Certified Partners',
      description: 'Certified solution providers with proven expertise',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-400/50',
      icon: <CheckCircle className="w-8 h-8" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
    }

  ];

  const getTierInfo = (tier: string) => {;;

<<<<<<< HEAD
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});)
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
=======
  const getPartnersByTier = (tier: string) => {
    return partners.filter(partner => partner.tier === tier);
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}
<<<<<<< HEAD

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
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
=======
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge solutions. Our strategic partnerships enable us to provide comprehensive technology solutions to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                View Partnership Program
              </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
<<<<<<< HEAD

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
    n: 'Strategic partnership for Azure cloud solutions and AI services,
      category: Cloud & AI
    },
    {
      name: 'Amazon Web Services,
      logo: /api/placeholder/200
      descriptio,
    n: 'Leading cloud infrastructure and machine learning platform provider,
      category: Cloud Computing
    },
    {
      name: 'Google Cloud,
      logo: /api/placeholder/200
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
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Joint marketing opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Technical integration support</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners by Tier */}
        {partnershipTiers.map((tier, tierIndex) => {
          const tierPartners = getPartnersByTier(tier.name.toLowerCase().split(' ')[0]);
          if (tierPartners.length === 0) return null;

          return (
            <section key={tierIndex} className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {tier.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierPartners.map((partner, index) => (
                    <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tier.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-cyan-400 mb-4">
                          <span className="px-2 py-1 bg-cyan-500/20 rounded-full">{partner.category}</span>
                        </div>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            <span>Visit Website</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Market Access</h3>
                  <p className="text-gray-300 text-sm">Access to our global client base and market opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Innovation</h3>
                  <p className="text-gray-300 text-sm">Joint R&D projects and co-innovation opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Support</h3>
                  <p className="text-gray-300 text-sm">Dedicated partnership management and technical support</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Recognition</h3>
                  <p className="text-gray-300 text-sm">Industry recognition and thought leadership opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology leaders and help shape the future of AI, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Partnership Discussion
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Download Partnership Kit
                </button>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
    </div>
=======
        </section>

        {/* Partner Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partner Requirements</h2>
              <p className="text-xl text-gray-300">
                We look for partners who share our commitment to excellence and innovation
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and start growing your business with Zion Tech Group.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Partnership Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
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
