'use client';
  const partners: Partner[] = [
    {
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
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Globe, Award, Handshake, CheckCircle, Star, ArrowRight, Building2, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      category: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider',
      benefits: ['Azure Integration', 'AI Services', 'Enterprise Support'],
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      category: 'Cloud Partner',
      description: 'Comprehensive cloud infrastructure solutions',
      benefits: ['AWS Services', 'Scalability', 'Global Reach'],
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning platforms',
      benefits: ['ML Services', 'Data Analytics', 'AI Tools'],
      tier: 'Gold'
    },
    {
      name: 'IBM',
      logo: '💼',
      category: 'Enterprise Partner',
      description: 'Enterprise-grade AI and blockchain solutions',
      benefits: ['Watson AI', 'Blockchain', 'Consulting'],
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      logo: '📊',
      category: 'CRM Partner',
      description: 'Customer relationship management solutions',
      benefits: ['CRM Integration', 'Sales Automation', 'Analytics'],
      tier: 'Silver'
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      category: 'Database Partner',
      description: 'Enterprise database and cloud solutions',
      benefits: ['Database Services', 'Cloud Migration', 'Support'],
      tier: 'Silver'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of partners and clients'
    },
    {
      icon: Award,
      title: 'Certified Solutions',
      description: 'Industry-recognized certifications and compliance standards'
    },
    {
      icon: Handshake,
      title: 'Joint Marketing',
      description: 'Collaborative marketing opportunities and co-branded content'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Priority support and dedicated account management'
    },
    {
      icon: Zap,
      title: 'Technical Training',
      description: 'Comprehensive training programs and certification courses'
    },
    {
      icon: Shield,
      title: 'Security Standards',
      description: 'Enterprise-grade security and compliance frameworks'
    }
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
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

  return (
    <>
      <Helmet></Helmet>
        <title></titl>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." /></meta>
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" /></meta>
      </Helmet>

      <Navigation /></Navigation>
      
=======
  const tiers = [
    {
      name: 'Platinum',
      color: 'from-cyan-500 to-blue-600',
      requirements: 'Strategic partnership with significant revenue commitment',
      benefits: ['Priority support', 'Co-marketing opportunities', 'Custom solutions', 'Dedicated resources']
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-600',
      requirements: 'Established partnership with proven track record',
      benefits: ['Enhanced support', 'Training programs', 'Marketing support', 'Technical resources']
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      requirements: 'Growing partnership with potential for expansion',
      benefits: ['Standard support', 'Basic training', 'Marketing materials', 'Community access']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Partner
              </span>
              <br />
              <span className="text-white">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing network of partners and unlock new opportunities in AI, cloud computing, 
              and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Partnership Benefits
              </button>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                ></button>
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div>
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"></div>
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center"></div>
                    <div className="text-4xl opacity-50"></di>🏢</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2"></h>{partner.name}</h3>
=======
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${partner.tier === 'Platinum' ? 'from-cyan-500 to-blue-600' : partner.tier === 'Gold' ? 'from-yellow-500 to-orange-600' : 'from-gray-400 to-gray-600'} text-white`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{partner.category}</p>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.requirements}</p>
                  </div>
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                  Download Partnership Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

  const filteredPartners = partners.filter(partner => {)
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;});

  const getTierColor = (tier: string) => {,
    switch (tier) {
      case 'strategic':
        return 'from-purple-500 to-pink-600';
      case 'preferred':
        return 'from-blue-500 to-purple-600';
      case 'certified':
        return 'from-green-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';,}};

  const getTierIcon = (tier: string) => {,
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" /></Star>;
      case 'preferred':
        return <Award className="w-4 h-4" /></Award>;
      case 'certified':
        return <CheckCircle className="w-4 h-4" /></CheckCircle>;
      default:
        return <Handshake className="w-4 h-4" /></Handshake>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." /></meta>
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" /></meta>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></spa>Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            We work with industry leaders to deliver the best AI and IT solutions. 
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h>Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer comprehensive partnership programs that benefit both our partners and our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Handshake className="w-8 h-8 text-white" /></Handshake>
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h>Strategic Collaboration</h3>
              <p className="text-gray-300"></p>
                Work together to develop innovative solutions that benefit both organizations and their customers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Users className="w-8 h-8 text-white" /></Users>
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h>Joint Go-to-Market</h3>
              <p className="text-gray-300"></p>
                Leverage our combined expertise and market presence to reach new customers and expand market share.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Award className="w-8 h-8 text-white" /></Award>
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h>Certification Programs</h3>
              <p className="text-gray-300"></p>
                Access to training, certification, and technical resources to stay ahead of technology trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col md:flex-row gap-4 mb-12"></div>
            <select
              value={selectedCategory}
              onChange={(e) =></select> setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}></option>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedTier}
              onChange={(e) =></select> setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {tiers.map(tier => (
                <option key={tier} value={tier}></option>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20"></div>
                <div className="flex items-center justify-between mb-6"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center"></div>
                    <span className="text-white font-bold text-lg"></spa>{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`}></div>
                    {getTierIcon(partner.tier)}
                    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2"></h>{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p>
                <p className="text-gray-300 mb-6">{partner.description}</p>

                <div className="flex items-center justify-between"></div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
                  ></a>
                    Visit Website
                    <ExternalLink className="w-4 h-4" /></ExternalLink>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12"></div>
              <p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
            </div>
          )} </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h>Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer different partnership levels to meet the needs of various organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
              <div className="flex items-center gap-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                  <CheckCircle className="w-6 h-6 text-white" /></CheckCircle>
                </div>
                <h3 className="text-2xl font-bold text-white"></h>Certified Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Email support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20"></div>
              <div className="flex items-center gap-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"></div>
                  <Award className="w-6 h-6 text-white" /></Award>
                </div>
                <h3 className="text-2xl font-bold text-white"></h>Preferred Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Dedicated partner manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
              <div className="flex items-center gap-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>
                  <Star className="w-6 h-6 text-white" /></Star>
                </div>
                <h3 className="text-2xl font-bold text-white"></h>Strategic Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Joint product development</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span></spa>Executive relationship management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Apply for Partnership
                <ArrowRight className="inline-block ml-2 w-5 h-5" /></ArrowRight>
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
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
