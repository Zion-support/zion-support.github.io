'use client';
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
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

      </Helmet>

      <Navigation /></Navigation>
      
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
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2"></h>{partner.name}</h3>
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
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Users className="w-8 h-8 text-white" /></Users>
              </div>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Award className="w-8 h-8 text-white" /></Award>
              </div>
              </p>
            </div>
          </div>
        </div>
      </section>

              ))}
            </select>
          </div>

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

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
