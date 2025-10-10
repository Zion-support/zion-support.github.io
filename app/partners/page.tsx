'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Handshake,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Globe,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Award,
  Building,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Download,
  FileText,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPartnerType, setSelectedPartnerType] = useState('all');

  const partnerTypes = [
    { id: 'all', name: 'All Partners', count: 0 },
    { id: 'technology', name: 'Technology', count: 12 },
    { id: 'consulting', name: 'Consulting', count: 8 },
    { id: 'reseller', name: 'Reseller', count: 15 },
    { id: 'integration', name: 'Integration', count: 6 }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      type: 'technology',
      category: 'Cloud & AI',
      logo: '/images/partners/microsoft.jpg',
      description: 'Strategic partner for Azure cloud services and AI solutions',
      benefits: ['Azure integration', 'AI services', 'Enterprise solutions'],
      tier: 'Platinum',
      established: '2020',
      projects: 25
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      type: 'technology',
      category: 'Cloud Infrastructure',
      logo: '/images/partners/aws.jpg',
      description: 'Premier partner for AWS cloud infrastructure and services',
      benefits: ['AWS migration', 'Cloud optimization', 'Managed services'],
      tier: 'Platinum',
      established: '2019',
      projects: 32
    },
    {
      id: 3,
      name: 'Google Cloud',
      type: 'technology',
      category: 'AI & Analytics',
      logo: '/images/partners/google-cloud.jpg',
      description: 'Partner for Google Cloud AI and data analytics solutions',
      benefits: ['AI/ML services', 'Data analytics', 'Machine learning'],
      tier: 'Gold',
      established: '2021',
      projects: 18
    },
    {
      id: 4,
      name: 'Deloitte',
      type: 'consulting',
      category: 'Digital Transformation',
      logo: '/images/partners/deloitte.jpg',
      description: 'Strategic consulting partner for enterprise digital transformation',
      benefits: ['Strategy consulting', 'Change management', 'Process optimization'],
      tier: 'Gold',
      established: '2020',
      projects: 12
    },
    {
      id: 5,
      name: 'Accenture',
      type: 'consulting',
      category: 'Technology Consulting',
      logo: '/images/partners/accenture.jpg',
      description: 'Global consulting partner for technology strategy and implementation',
      benefits: ['Technology strategy', 'Implementation', 'Change management'],
      tier: 'Gold',
      established: '2021',
      projects: 15
    },
    {
      id: 6,
      name: 'TechCorp Solutions',
      type: 'reseller',
      category: 'Regional Partner',
      logo: '/images/partners/techcorp.jpg',
      description: 'Regional reseller partner covering North America',
      benefits: ['Local support', 'Regional expertise', 'Customer success'],
      tier: 'Silver',
      established: '2022',
      projects: 8
    }
  ];

  const filteredPartners = selectedPartnerType === 'all' 
    ? partners 
    : partners.filter(partner => partner.type === selectedPartnerType);

  const partnershipBenefits = [
    {
      icon: Target,
      title: 'Expanded Market Reach',
      description: 'Access new markets and customer segments through our partner network',
      benefits: ['Global presence', 'Local expertise', 'Market insights']
    },
    {
      icon: Zap,
      title: 'Accelerated Growth',
      description: 'Leverage our expertise and resources to grow your business faster',
      benefits: ['Joint marketing', 'Co-selling opportunities', 'Shared resources']
    },
    {
      icon: Shield,
      title: 'Enhanced Credibility',
      description: 'Build trust and credibility with our established reputation',
      benefits: ['Brand association', 'Customer trust', 'Industry recognition']
    },
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Generate additional revenue streams through partnership opportunities',
      benefits: ['Revenue sharing', 'Upselling opportunities', 'Recurring revenue']
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      description: 'Strategic partners with deep integration and joint go-to-market',
      requirements: ['$10M+ annual revenue', '50+ joint projects', 'Strategic alignment'],
      benefits: ['Co-marketing', 'Joint development', 'Priority support', 'Revenue sharing'],
      color: 'from-purple-500 to-blue-600'
    },
    {
      name: 'Gold',
      description: 'Key partners with significant collaboration and mutual benefits',
      requirements: ['$5M+ annual revenue', '25+ joint projects', 'Strong relationship'],
      benefits: ['Marketing support', 'Training programs', 'Technical support', 'Co-selling'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Silver',
      description: 'Regional partners with local market presence and expertise',
      requirements: ['$1M+ annual revenue', '10+ joint projects', 'Regional focus'],
      benefits: ['Partner portal', 'Basic training', 'Marketing materials', 'Support'],
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const successStories = [
    {
      partner: 'Microsoft',
      project: 'Enterprise AI Transformation',
      result: '40% increase in operational efficiency',
      description: 'Collaborated on a comprehensive AI transformation for a Fortune 500 company, resulting in significant cost savings and improved customer experience.'
    },
    {
      partner: 'AWS',
      project: 'Cloud Migration Initiative',
      result: '60% reduction in infrastructure costs',
      description: 'Joint migration project that moved a client\'s entire infrastructure to AWS, achieving better scalability and cost optimization.'
    },
    {
      partner: 'Deloitte',
      project: 'Digital Strategy Implementation',
      result: '25% increase in customer satisfaction',
      description: 'Strategic partnership to implement a comprehensive digital strategy that transformed the client\'s customer experience and operational efficiency.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Microsoft',
      role: 'Partner Director',
      content: 'Our partnership with Zion Tech Group has been incredibly successful. Their technical expertise and customer focus have helped us deliver exceptional value to our mutual clients.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'AWS',
      role: 'Partner Manager',
      content: 'The collaboration has been outstanding. Zion Tech Group\'s deep understanding of cloud technologies and their commitment to customer success makes them an ideal partner.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Deloitte',
      role: 'Senior Partner',
      content: 'Working with Zion Tech Group has enabled us to deliver more comprehensive solutions to our clients. Their innovation and expertise complement our consulting services perfectly.',
      rating: 5
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'from-purple-500 to-blue-600';
      case 'Gold':
        return 'from-yellow-500 to-orange-600';
      case 'Silver':
        return 'from-gray-500 to-slate-600';
      default:
        return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships and partner program. Join our network of technology leaders and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, partner program, strategic alliances, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver comprehensive solutions and create 
              mutual value for our clients and partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#partners"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                View Partners
              </a>
              <a
                href="#partner-program"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Join Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: Users },
              { id: 'partners', label: 'Our Partners', icon: Building },
              { id: 'benefits', label: 'Benefits', icon: Target },
              { id: 'program', label: 'Partner Program', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver comprehensive solutions 
                and create mutual value for all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{benefit.description}</p>
                  <ul className="space-y-1">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners Tab */}
      {activeTab === 'partners' && (
        <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our commitment to excellence and innovation.
              </p>
            </div>

            {/* Partner Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {partnerTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedPartnerType(type.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPartnerType === type.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                      <p className="text-gray-400 text-sm">{partner.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Partnership Tier:</span>
                      <span className={`bg-gradient-to-r ${getTierColor(partner.tier)} text-white text-xs font-semibold px-2 py-1 rounded`}>
                        {partner.tier}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Established:</span>
                      <span className="text-white text-sm">{partner.established}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Joint Projects:</span>
                      <span className="text-white text-sm">{partner.projects}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group and how it can benefit your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partner Program Tab */}
      {activeTab === 'program' && (
        <section id="partner-program" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner Program
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner program and unlock new opportunities for growth and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${tier.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}>
                    Apply for {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our partnerships have delivered exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{story.partner}</h3>
                    <p className="text-gray-400 text-sm">{story.project}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{story.description}</p>
                <div className="bg-green-500/20 text-green-300 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                  {story.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our partners have to say about working with Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join our partner network and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Become a Partner
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;