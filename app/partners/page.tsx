'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Award, Users, Globe, CheckCircle, ArrowRight, ExternalLink, Star } from 'lucide-react';
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
}

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Leading cloud and productivity solutions provider',
      category: 'Cloud Infrastructure',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Comprehensive cloud computing platform',
      category: 'Cloud Infrastructure',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning cloud services',
      category: 'Cloud Infrastructure',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise Solutions',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      id: '5',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management platform',
      category: 'CRM Solutions',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      id: '6',
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise software solutions',
      category: 'Database Solutions',
      website: 'https://oracle.com',
      tier: 'certified'
    }
  ];

  const categories = ['all', 'Cloud Infrastructure', 'Enterprise Solutions', 'CRM Solutions', 'Database Solutions'];
  const tiers = ['all', 'strategic', 'preferred', 'certified'];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'from-purple-500 to-pink-600';
      case 'preferred':
        return 'from-blue-500 to-purple-600';
      case 'certified':
        return 'from-green-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" />;
      case 'preferred':
        return <Award className="w-4 h-4" />;
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Handshake className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Strategic partnerships with leading technology companies including Microsoft, AWS, Google Cloud, and more to deliver comprehensive solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud providers, enterprise solutions, Microsoft, AWS, Google Cloud" />
        <meta property="og:title" content="Our Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships with leading technology companies" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Partners</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>
          </section>

          {/* Partners Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {tiers.map((tier) => (
                    <option key={tier} value={tier}>
                      {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Partners List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPartners.map((partner) => (
                  <div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTierColor(partner.tier)} text-white text-xs font-medium flex items-center gap-1`}>
                        {getTierIcon(partner.tier)}
                        {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPartners.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
                </div>
              )}
            </div>
          </section>

          {/* Partnership Types */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Partnership <span className="text-cyan-400">Tiers</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We offer different partnership levels to meet the needs of our technology partners
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Certified Partner */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Certified Partner</h3>
                  <p className="text-gray-300 mb-6">
                    Basic partnership level with access to our core technologies and support.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Access to core technologies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Basic training and certification</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>

                {/* Preferred Partner */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Preferred Partner</h3>
                  <p className="text-gray-300 mb-6">
                    Enhanced partnership with priority support and joint marketing opportunities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Priority technical support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Joint marketing opportunities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Dedicated partner manager</span>
                    </li>
                  </ul>
                </div>

                {/* Strategic Partner */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Strategic Partner</h3>
                  <p className="text-gray-300 mb-6">
                    Highest partnership level with exclusive access and co-development opportunities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Exclusive technology access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Co-development opportunities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Executive relationship management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Become Our <span className="text-cyan-400">Partner</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </a>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Partnerships
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;