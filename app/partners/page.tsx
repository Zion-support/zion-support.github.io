'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [;
import  ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Partner {
<<<<<<< HEAD
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'preferred' | 'certified' | 'strategic';
}];
=======
  id: string;,
      name: string;,
      logo: string;,
      description: string;,
      category: string;,
      website: string;,
      tier: 'preferred' | 'certified' | 'strategic';
}];];
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [,
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

  ];

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div></div>
        <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Technology Partners;
              </h1></h1></h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                We work with leading technology companies to deliver the best solutions for our clients.
              </p></p></p>
            </div>

<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4 mb-12" /></div>
              {categories.map((category) => ()
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" /></div>
              {partners.map((partner, index) => ()
=======
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                </div></div><button;
                  key=category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category})
                </button></button></button>)
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                </div></div><div key=index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  </div></div><div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    </div></div><div className="text-4xl opacity-50">🏢</div></div></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3></h3></h3>)
                </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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

<<<<<<< HEAD
  const filteredPartners = const filteredPartners = partners.filter();
  });

  const getTierColor = const getTierColor = const getTierColor = (tier: string) => {;
    switch (tier) {;
=======
  const filteredPartners = partners.filter(partner => {;
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;)
    return matchesCategory && matchesTier;)
  });

  const getTierColor = (tier: string) => {
    switch (tier) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      case 'strategic':;
        return 'from-purple-500 to-pink-600';
      case 'preferred':
        return 'from-blue-500 to-purple-600';
      case 'certified':
        return 'from-green-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

<<<<<<< HEAD
  const getTierIcon = const getTierIcon = const getTierIcon = (tier: string) => {;
    switch (tier) {;
=======
  const getTierIcon = (tier: string) => {
    switch (tier) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      case 'strategic':;
        return <Star className="w-4 h-4" />;
      case 'preferred':
        return <Award className="w-4 h-4" />;
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Handshake className="w-4 h-4" />;
    }
  };

<<<<<<< HEAD
  return ()
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map()
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div></div><Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        </section></section><div className="max-w-7xl mx-auto text-center">
          </div></div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our </h1></h1><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span></span></span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry leaders to deliver the best AI and IT solutions. 
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p></p></p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-white/5">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="text-center mb-16">
            </div></div><h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2></h2></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive partnership programs that benefit both our partners and our clients;
            </p></p></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div></div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div></div><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div></div><Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3></h3></h3>
              <p className="text-gray-300">
                Work together to develop innovative solutions that benefit both organizations and their customers.
              </p></p></p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div></div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div></div><Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3></h3></h3>
              <p className="text-gray-300">
                Leverage our combined expertise and market presence to reach new customers and expand market share.
              </p></p></p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              </div></div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                </div></div><Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3></h3></h3>
              <p className="text-gray-300">
                Access to training, certification, and technical resources to stay ahead of technology trends.
              </p></p></p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="flex flex-col md:flex-row gap-4 mb-12">
            </div></div><select;)
              value={selectedCategory})
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key=category} value={category}>
                  {category === 'all' ? 'All Categories' : category})
                </option>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              ))}
            </select>
            <select;
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
<<<<<<< HEAD
              {tiers.map() {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
=======
              {tiers.map(tier => ()
                <option key=tier} value={tier}>)
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </option>
              ))}
            </select>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {filteredPartners.map((partner) => ()
                    <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`} /></div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              </div></div><div key=partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                </div></div><div className="flex items-center justify-between mb-6">)</div></div><div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">)</div></div><span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span></span></span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r $getTierColor(partner.tier)} flex items-center gap-1`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div></div></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3></h3></h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p></p></p>
                <p className="text-gray-300 mb-6">{partner.description}</p></p></p>

<<<<<<< HEAD
                <div className="flex items-center justify-between" /></div>
                  <a href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2" /></a>
                    Visit Website
                    <ExternalLink className="w-4 h-4" / /></ExternalLink>
=======
                <div className="flex items-center justify-between">
                  </div></div><a;
                    href={partner.website}
                    target="_blank" rel="noopener noreferrer", className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
                  >
                    Visit Website;
                    <ExternalLink className="w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  </a>
                </div>
              </div>
            ))}
          </div>

<<<<<<< HEAD
          {filteredPartners.length === 0 && ()
=======
          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              </div></div><p className="text-gray-400 text-lg">No partners found matching your criteria.</p></p></p>)
            </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          )}
        </div>
      </section>

      {/* Partnership Tiers */}
<<<<<<< HEAD
      <section className="py-16 px-4 bg-white/5" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              We offer different partnership levels to meet the needs of various organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20" /></div>
              <div className="flex items-center gap-3 mb-6" /></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center" /></div>
                  <CheckCircle className="w-6 h-6 text-white" / /></CheckCircle>
=======
      <section className="py-16 px-4 bg-white/5">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="text-center mb-16">
            </div></div><h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2></h2></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer different partnership levels to meet the needs of various organizations;
            </p></p></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div></div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              </div></div><div className="flex items-center gap-3 mb-6">
                </div></div><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  </div></div><CheckCircle className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3></h3></h3>
              </div>
<<<<<<< HEAD
              <ul className="space-y-3 text-gray-300" /></ul>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Email support</span>
=======
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic training and certification</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Marketing support materials</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technical documentation access</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Email support</span></span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </li>
              </ul>
            </div>

<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20" /></div>
              <div className="flex items-center gap-3 mb-6" /></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" /></div>
                  <Award className="w-6 h-6 text-white" / /></Award>
=======
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20">
              </div></div><div className="flex items-center gap-3 mb-6">
                </div></div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  </div></div><Award className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3></h3></h3>
              </div>
<<<<<<< HEAD
              <ul className="space-y-3 text-gray-300" /></ul>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Dedicated partner manager</span>
=======
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced training and certification</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Co-marketing opportunities</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority technical support</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Dedicated partner manager</span></span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </li>
              </ul>
            </div>

<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20" /></div>
              <div className="flex items-center gap-3 mb-6" /></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center" /></div>
                  <Star className="w-6 h-6 text-white" / /></Star>
=======
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              </div></div><div className="flex items-center gap-3 mb-6">
                </div></div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  </div></div><Star className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3></h3></h3>
              </div>
<<<<<<< HEAD
              <ul className="space-y-3 text-gray-300" /></ul>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Joint product development</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2" /></li>
                  <CheckCircle className="w-4 h-4 text-green-400" / /></CheckCircle>
                  <span>Executive relationship management</span>
=======
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive training and certification</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Joint product development</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 priority support</span></span></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Executive relationship management</span></span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" /></button>
                Apply for Partnership
                <ArrowRight className="inline-block ml-2 w-5 h-5" / /></ArrowRight>
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
                Learn More
              </button>
=======
      <section className="py-20 px-4">
        </section></section><div className="max-w-4xl mx-auto text-center">
          </div></div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            </div></div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become Our Partner;
            </h2></h2></h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply for Partnership;
                </button></button><ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More;
              </button></button></button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default PartnersPage;
