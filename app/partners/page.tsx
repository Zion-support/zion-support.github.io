'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight, Filter, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'preferred' | 'certified' | 'strategic';
  benefits: string[];
  established: string;
}

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const partners: Partner[] = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud services and AI platform integration.',
      category: 'Cloud',
      website: 'https://microsoft.com',
      tier: 'strategic',
      benefits: ['Azure Credits', 'Co-marketing', 'Technical Support', 'Training Programs'],
      established: '2020'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Preferred cloud provider for scalable AI and machine learning solutions.',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic',
      benefits: ['AWS Credits', 'Architecture Reviews', 'Marketplace Listing', 'Joint Events'],
      established: '2019'
    },
    {
      id: 'google',
      name: 'Google Cloud',
      logo: '/images/partners/google.png',
      description: 'AI and machine learning platform partnership for advanced analytics.',
      category: 'AI',
      website: 'https://cloud.google.com',
      tier: 'strategic',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Research Collaboration', 'Go-to-Market'],
      established: '2021'
    },
    {
      id: 'nvidia',
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Hardware partnership for GPU-accelerated AI computing solutions.',
      category: 'Hardware',
      website: 'https://nvidia.com',
      tier: 'certified',
      benefits: ['GPU Access', 'Technical Training', 'Early Access', 'Support'],
      established: '2020'
    },
    {
      id: 'openai',
      name: 'OpenAI',
      logo: '/images/partners/openai.png',
      description: 'API partnership for advanced language models and AI capabilities.',
      category: 'AI',
      website: 'https://openai.com',
      tier: 'certified',
      benefits: ['API Access', 'Model Training', 'Research Collaboration', 'Priority Support'],
      established: '2022'
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and business automation solutions partnership.',
      category: 'Software',
      website: 'https://salesforce.com',
      tier: 'preferred',
      benefits: ['Integration Tools', 'Training', 'Support', 'Co-selling'],
      established: '2021'
    },
    {
      id: 'ibm',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing research collaboration.',
      category: 'Enterprise',
      website: 'https://ibm.com',
      tier: 'certified',
      benefits: ['Watson Integration', 'Quantum Access', 'Research', 'Training'],
      established: '2020'
    },
    {
      id: 'databricks',
      name: 'Databricks',
      logo: '/images/partners/databricks.png',
      description: 'Data analytics and machine learning platform partnership.',
      category: 'Data',
      website: 'https://databricks.com',
      tier: 'preferred',
      benefits: ['Platform Access', 'Training', 'Support', 'Co-marketing'],
      established: '2021'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: partners.length },
    { id: 'Cloud', name: 'Cloud', count: partners.filter(p => p.category === 'Cloud').length },
    { id: 'AI', name: 'AI', count: partners.filter(p => p.category === 'AI').length },
    { id: 'Hardware', name: 'Hardware', count: partners.filter(p => p.category === 'Hardware').length },
    { id: 'Software', name: 'Software', count: partners.filter(p => p.category === 'Software').length },
    { id: 'Enterprise', name: 'Enterprise', count: partners.filter(p => p.category === 'Enterprise').length },
    { id: 'Data', name: 'Data', count: partners.filter(p => p.category === 'Data').length }
  ];

  const tiers = [
    { id: 'all', name: 'All Tiers', count: partners.length },
    { id: 'strategic', name: 'Strategic', count: partners.filter(p => p.tier === 'strategic').length },
    { id: 'certified', name: 'Certified', count: partners.filter(p => p.tier === 'certified').length },
    { id: 'preferred', name: 'Preferred', count: partners.filter(p => p.tier === 'preferred').length }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTier && matchesSearch;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic': return 'from-purple-500 to-pink-600';
      case 'certified': return 'from-cyan-500 to-blue-600';
      case 'preferred': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'strategic': return <Star className="w-4 h-4" />;
      case 'certified': return <Award className="w-4 h-4" />;
      case 'preferred': return <CheckCircle className="w-4 h-4" />;
      default: return <Handshake className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google, NVIDIA, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google, NVIDIA, OpenAI, strategic alliances" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver comprehensive AI and IT solutions. 
              Our strategic partnerships enable us to provide cutting-edge technology and expertise.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Tier Filter */}
              <div className="flex flex-wrap gap-2">
                {tiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTier === tier.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {tier.name} ({tier.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                      {partner.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`}>
                      {getTierIcon(partner.tier)}
                      {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{partner.description}</p>
                  
                  {/* Category & Established */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                      {partner.category}
                    </span>
                    <span className="text-gray-400">
                      Since {partner.established}
                    </span>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                    <button className="px-4 py-2 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPartners.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No partners found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become Our <span className="text-cyan-400">Partner</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth. 
              We offer various partnership programs tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/partnership-programs"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Programs
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;