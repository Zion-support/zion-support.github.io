'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Award, Users, Globe, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
<<<<<<< HEAD
  const partners = [
    {
=======
  const partners = [;
import  ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Partner {
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
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Cloud & AI',
      description: 'Strategic partner for Azure cloud services and AI solutions',
      benefits: ['Azure Credits', 'Technical Support', 'Co-marketing']
    },
    {
      name: 'Amazon Web Services',
<<<<<<< HEAD
      logo: '/images/partners/aws.png',
      category: 'Cloud Infrastructure',
      description: 'Premier partner for AWS cloud infrastructure and services',
      benefits: ['AWS Credits', 'Training Programs', 'Joint Solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI & Machine Learning',
      description: 'Partner for Google Cloud AI and machine learning services',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Technical Training']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise Solutions',
      description: 'Strategic partner for enterprise AI and quantum computing',
      benefits: ['IBM Cloud Credits', 'Quantum Access', 'Enterprise Support']
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      category: 'AI Hardware',
      description: 'Partner for GPU-accelerated AI and machine learning',
      benefits: ['GPU Access', 'AI Frameworks', 'Technical Resources']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM & Automation',
      description: 'Partner for Salesforce CRM and automation solutions',
      benefits: ['Salesforce Credits', 'AppExchange', 'Integration Support']
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Technology Partners',
      description: 'Strategic technology partnerships with leading cloud and AI providers',
      benefits: ['Access to cutting-edge technology', 'Joint development opportunities', 'Co-marketing support']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships for our solutions',
      benefits: ['Revenue sharing opportunities', 'Sales training and support', 'Marketing materials']
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships for global market expansion',
      benefits: ['Local market expertise', 'Cultural adaptation', 'Regional support']
    },
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Certified implementation and consulting partners',
      benefits: ['Certification programs', 'Technical training', 'Quality assurance']
    }
  ];

  const benefits = [
    'Access to exclusive partner resources and tools',
    'Joint go-to-market opportunities',
    'Technical training and certification programs',
    'Co-marketing and co-selling support',
    'Priority technical support',
    'Revenue sharing opportunities',
    'Early access to new products and features',
    'Partner advisory board participation'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, channel partners, Microsoft, AWS, Google Cloud" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

=======
      logo: '/images/partners/aws.png',}'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'

  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  Strategic <span className="text-cyan-400">Partnerships</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
                We partner with leading technology companies to deliver comprehensive solutions 
                and create mutual value for our clients and partners.
              </p>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                We work with leading technology companies to deliver the best solutions for our clients.
              </p></p></p>
            </div>

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
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
            </div>
          </section>

          {/* Partners Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{partner.category}</p>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-center">
                      {partner.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Partnership Benefits:</h4>
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Partnership Types */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Partnership <span className="text-cyan-400">Types</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We offer various partnership opportunities to suit different business models and goals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipTypes.map((type, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Partnership <span className="text-cyan-400">Benefits</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our partner ecosystem and unlock exclusive benefits and opportunities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
=======
            </div>
          </div>
        </section>
      </div>
    </>
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

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
      default: return 'from-gray-500 to-gray-600';,}};

  const getTierIcon = (tier: string) => {
    switch (tier) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      case 'strategic':;
        return <Star className="w-4 h-4" />;
      case 'preferred':
        return <Award className="w-4 h-4" />;
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default: return <Handshake className="w-4 h-4" />;,}};

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
              {tiers.map(tier => ()
                <option key=tier} value={tier}>)
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              </div></div><div key=partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                </div></div><div className="flex items-center justify-between mb-6">)</div></div><div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">)</div></div><span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span></span></span>
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Partnership Process</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Initial Discussion</h4>
                        <p className="text-gray-300 text-sm">Schedule a call to discuss partnership opportunities and mutual goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Partnership Agreement</h4>
                        <p className="text-gray-300 text-sm">Review and sign partnership terms and conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Training & Onboarding</h4>
                        <p className="text-gray-300 text-sm">Complete training programs and access partner resources</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Launch & Support</h4>
                        <p className="text-gray-300 text-sm">Begin partnership activities with ongoing support and collaboration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Partner With Us?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our growing partner ecosystem and unlock new opportunities for growth and success. 
                  Let's build something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
=======
                <div className="flex items-center justify-between">
                  </div></div><a;
                    href={partner.website}
                    target="_blank" rel="noopener noreferrer", className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
                  >
                    Become a Partner
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>
<<<<<<< HEAD
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
=======
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              </div></div><p className="text-gray-400 text-lg">No partners found matching your criteria.</p></p></p>)
            </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          )}
        </div>
      </section>

      {/* Partnership Tiers */}
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

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20">
              </div></div><div className="flex items-center gap-3 mb-6">
                </div></div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  </div></div><Award className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3></h3></h3>
              </div>
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

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              </div></div><div className="flex items-center gap-3 mb-6">
                </div></div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  </div></div><Star className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3></h3></h3>
              </div>
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

>>>>>>> cursor/website-audit-and-update-with-deployment-43a6
  );
};

export default PartnersPage;