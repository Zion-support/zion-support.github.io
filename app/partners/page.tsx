'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Phone, Mail, MapPin, Globe, Shield, Users, Award } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  benefits: string[];
  website: string;
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '🏢',
      description: 'Strategic partnership for Azure cloud services and AI solutions.',
      category: 'Cloud & AI',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities'],
      website: 'https://microsoft.com'
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'AWS partnership for scalable cloud infrastructure and AI services.',
      category: 'Cloud Infrastructure',
      benefits: ['AWS credits', 'Training programs', 'Joint solutions'],
      website: 'https://aws.amazon.com'
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '🔍',
      description: 'Google Cloud partnership for AI and machine learning solutions.',
      category: 'AI & ML',
      benefits: ['GCP credits', 'AI/ML tools', 'Technical resources'],
      website: 'https://cloud.google.com'
    },
    {
      id: '4',
      name: 'IBM',
      logo: '💼',
      description: 'IBM partnership for enterprise AI and Watson solutions.',
      category: 'Enterprise AI',
      benefits: ['Watson access', 'Enterprise support', 'Joint development'],
      website: 'https://ibm.com'
    },
    {
      id: '5',
      name: 'Salesforce',
      logo: '📈',
      description: 'Salesforce partnership for CRM and business automation solutions.',
      category: 'CRM & Automation',
      benefits: ['Salesforce credits', 'Integration support', 'Co-selling'],
      website: 'https://salesforce.com'
    },
    {
      id: '6',
      name: 'Oracle',
      logo: '🗄️',
      description: 'Oracle partnership for database and enterprise solutions.',
      category: 'Database & Enterprise',
      benefits: ['Oracle credits', 'Technical training', 'Joint solutions'],
      website: 'https://oracle.com'
    }
  ];

  const partnershipBenefits = [
    'Access to cutting-edge technology and tools',
    'Joint go-to-market opportunities',
    'Technical support and training programs',
    'Co-marketing and co-selling initiatives',
    'Early access to new features and products',
    'Dedicated partner success managers',
    'Revenue sharing opportunities',
    'Global partner network access'
  ];

  const partnerTiers = [
    {
      name: 'Bronze Partner',
      requirements: 'Basic partnership requirements',
      benefits: [
        'Partner portal access',
        'Basic training materials',
        'Marketing support',
        'Technical documentation'
      ]
    },
    {
      name: 'Silver Partner',
      requirements: 'Intermediate partnership level',
      benefits: [
        'All Bronze benefits',
        'Advanced training programs',
        'Co-marketing opportunities',
        'Dedicated support',
        'Revenue sharing'
      ]
    },
    {
      name: 'Gold Partner',
      requirements: 'Advanced partnership level',
      benefits: [
        'All Silver benefits',
        'Priority support',
        'Joint development opportunities',
        'Executive relationship management',
        'Enhanced revenue sharing'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners, partner program" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and grow your business with Zion Tech Group. 
              We work with leading technology companies to deliver exceptional solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#become-partner"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div key={partner.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{partner.category}</p>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 w-full justify-center"
                  >
                    Visit Website
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partner Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  tier.name === 'Silver Partner' 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105' 
                    : 'border-white/20'
                }`}>
                  {tier.name === 'Silver Partner' && (
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Recommended
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 text-sm">{tier.requirements}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.name === 'Silver Partner'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section id="become-partner" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Become a Partner?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and start growing your business with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Learn More
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">partners@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;