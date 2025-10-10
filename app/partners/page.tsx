'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Globe, Award, Phone, Mail } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  benefits: string[];
  requirements: string[];
  tier: 'Gold' | 'Silver' | 'Bronze';
}

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'Technology Partners',
    'Solution Partners',
    'Channel Partners',
    'Integration Partners'
  ];

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Leading technology partner providing cloud infrastructure and AI services.',
      category: 'Technology Partners',
      benefits: [
        'Access to Microsoft Azure credits',
        'Co-marketing opportunities',
        'Technical training and certification',
        'Joint go-to-market strategies'
      ],
      requirements: [
        'Microsoft Certified Partner status',
        'Minimum $1M annual revenue',
        'Dedicated technical team',
        'Customer success track record'
      ],
      tier: 'Gold'
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure partner enabling scalable AI solutions.',
      category: 'Technology Partners',
      benefits: [
        'AWS Partner Network benefits',
        'Technical support and training',
        'Co-selling opportunities',
        'Access to AWS marketplace'
      ],
      requirements: [
        'AWS Partner status',
        'Proven cloud expertise',
        'Customer references',
        'Compliance certifications'
      ],
      tier: 'Gold'
    },
    {
      id: '3',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration partner for AI-powered customer solutions.',
      category: 'Integration Partners',
      benefits: [
        'Salesforce AppExchange listing',
        'Integration support',
        'Joint customer success',
        'Revenue sharing opportunities'
      ],
      requirements: [
        'Salesforce Certified status',
        'Integration expertise',
        'Customer success stories',
        'Security compliance'
      ],
      tier: 'Silver'
    }
  ];

  const partnerPrograms = [
    {
      icon: Star,
      title: 'Gold Partnership',
      description: 'Our highest tier partnership with maximum benefits and support.',
      benefits: [
        'Dedicated partner manager',
        'Co-marketing opportunities',
        'Technical training and certification',
        'Revenue sharing up to 30%',
        'Priority support and resources'
      ],
      requirements: [
        'Minimum $5M annual revenue',
        '50+ certified professionals',
        'Proven track record',
        'Strategic alignment'
      ]
    },
    {
      icon: Award,
      title: 'Silver Partnership',
      description: 'Mid-tier partnership with significant benefits and growth opportunities.',
      benefits: [
        'Partner portal access',
        'Marketing support',
        'Technical resources',
        'Revenue sharing up to 20%',
        'Training programs'
      ],
      requirements: [
        'Minimum $2M annual revenue',
        '25+ certified professionals',
        'Customer references',
        'Growth potential'
      ]
    },
    {
      icon: Users,
      title: 'Bronze Partnership',
      description: 'Entry-level partnership to start your journey with us.',
      benefits: [
        'Basic partner resources',
        'Training materials',
        'Revenue sharing up to 10%',
        'Community access',
        'Growth support'
      ],
      requirements: [
        'Business registration',
        '5+ certified professionals',
        'Customer commitment',
        'Partnership agreement'
      ]
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners | Zion Tech Group - Partner Program</title>
        <meta name="description" content="Join our partner program and grow your business with AI and IT solutions. Gold, Silver, and Bronze partnership tiers available." />
        <meta name="keywords" content="partners, partner program, technology partners, solution partners, channel partners, business partnership" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Partner <span className="text-cyan-400">Program</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our growing network of partners and unlock new opportunities for growth 
            with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#become-partner"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Partnership Team
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{program.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{program.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category === 'all' ? 'All Partners' : category}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-slate-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-400">{partner.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                    partner.tier === 'Silver' ? 'bg-gray-500/20 text-gray-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {partner.tier} Partner
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {partner.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No partners found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section id="become-partner" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become a Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner program and start growing your business with our AI and IT solutions. 
              Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Partnership inquiries: kleber@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;