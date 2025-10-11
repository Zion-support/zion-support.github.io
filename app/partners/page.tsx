'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';

<<<<<<< HEAD
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
=======
const PartnersPage: React.FC = () => {
  const partners = [;
import  ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Partner {
const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [,
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',},
    {id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',}'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
<<<<<<< HEAD
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
      
=======

  ];

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

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,</div>
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
>>>>>>> origin/main
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
      default: return 'from-gray-500 to-gray-600';,}};

      case 'strategic':;
        return <Star className="w-4 h-4" />;
      case 'preferred':
        return <Award className="w-4 h-4" />;
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default: return <Handshake className="w-4 h-4" />;,}};

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
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with industry leaders to deliver the best AI and IT solutions.</p>
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
                </option>
              ))}
            </select>
          </div>

                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div></div></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3></h3></h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p></p></p>
                <p className="text-gray-300 mb-6">{partner.description}</p></p></p>

                  </a>
                </div>
              </div>
            ))}
          </div>

          )}
        </div>
      </section>

      {/* Partnership Tiers */}
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3></h3></h3>
              </div>
                </li>
              </ul>
            </div>

                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3></h3></h3>
              </div>
                </li>
              </ul>
            </div>

                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3></h3></h3>
              </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======

>>>>>>> origin/main
  );
};

export default PartnersPage;
