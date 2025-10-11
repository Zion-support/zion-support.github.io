'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

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
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
    }
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
  ];

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div><section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                </div><button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  </div><div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    </div><div className="text-4xl opacity-50">🏢</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                </div>
              ))}
            </div>

                  </div>
                ))}
              </div>
            </div>

            </div>
          </div>
        </section>
      </div>
    </>
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        </section><div className="
          </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our </h1><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry leaders to deliver the best AI and IT solutions. 
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-white/5">
        </section><div className="
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive partnership programs that benefit both our partners and our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3>
              <p className="text-gray-300">
                Work together to develop innovative solutions that benefit both organizations and their customers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3>
              <p className="text-gray-300">
                Leverage our combined expertise and market presence to reach new customers and expand market share.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div><Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3>
              <p className="text-gray-300">
                Access to training, certification, and technical resources to stay ahead of technology trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        </section><div className="
          </div><div className="flex flex-col md:flex-row gap-4 mb-12">
            </div><select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                </select><option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {tiers.map(tier => (
                </select><option key={tier} value={tier}>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              </div><div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                </div><div className="flex items-center justify-between mb-6">
                  </div><div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                    </div><span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`}>
                    {getTierIcon(partner.tier)}
                    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p>
                <p className="text-gray-300 mb-6">{partner.description}</p>

                <div className="flex items-center justify-between">
                  </div><a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
                  >
                    Visit Website
                    </a><ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              </div><p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 bg-white/5">
        </section><div className="
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer different partnership levels to meet the needs of various organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              </div><div className="flex items-center gap-3 mb-6">
                </div><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  </div><CheckCircle className="w-6 h-6 text-white" />
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        </section><div className="
          </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply for Partnership
                </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
  );
};

export default PartnersPage;