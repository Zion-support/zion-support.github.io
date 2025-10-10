'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [;
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'preferred' | 'certified' | 'strategic';
}];
const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [

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

  ];

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12" /></div>
              {categories.map((category) => ()
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" /></div>
              {partners.map((partner, index) => ()
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

  const filteredPartners = partners.filter();
  });

  const getTierColor = (tier: string) => {;
    switch (tier) {;
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

  const getTierIcon = (tier: string) => {;
    switch (tier) {;
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

  return ()
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map()
              ))}
            </select>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {tiers.map() {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {filteredPartners.map((partner) => ()
                    <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`} /></div>
                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p>
                <p className="text-gray-300 mb-6">{partner.description}</p>

                <div className="flex items-center justify-between" /></div>
                  <a href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2" /></a>
                    Visit Website
                    <ExternalLink className="w-4 h-4" / /></ExternalLink>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && ()
          )}
        </div>
      </section>

      {/* Partnership Tiers */}
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
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3>
              </div>
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
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20" /></div>
              <div className="flex items-center gap-3 mb-6" /></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center" /></div>
                  <Award className="w-6 h-6 text-white" / /></Award>
                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3>
              </div>
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
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20" /></div>
              <div className="flex items-center gap-3 mb-6" /></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center" /></div>
                  <Star className="w-6 h-6 text-white" / /></Star>
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3>
              </div>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default PartnersPage;
