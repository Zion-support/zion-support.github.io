'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react';
const BlockchainPage: React.FC = () => {
  const features = [
    
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      icon: Shield,
      title: 'Secure Blockchain Solutions',
      description: 'Advanced blockchain technology with enterprise-grade security and compliance',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution',},
    {icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide blockchain deployment and support for international businesses';
    };
  ];
  const benefits = const benefits = const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',;
    'Cost-effective pricing plans',;
    'Proven track record of success';
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div></div><Helmet>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" />
      </Helmet>
)
            </div>)
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          </div></div><h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Blockchain Solutions?
          </h2></h2></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              </div></div><div key=index} className="flex items-center space-x-3">
                </div></div><CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span></span></span>)
              </div>)
            ))}
          </div>
        </div>
        <section className="py-16 bg-white">
          </section></section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div></div><div className="text-center mb-12">
              </div></div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Blockchain Services?
              </h2></h2></h2>
              <p className="text-xl text-gray-600">
                Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions;
  </p></p></
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              </div></div><div className="text-center">
                </div></div><div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div></div><Link className="w-8 h-8 text-blue-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3></h3></h3>
                <p className="text-gray-600">Certified blockchain developers and architects</p></p></p>
              </div>
              <div className="text-center">
                </div></div><div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div></div><Shield className="w-8 h-8 text-green-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3></h3></h3>
                <p className="text-gray-600">Comprehensive security audits and best practices</p></p></p>
              </div>
              <div className="text-center">
                </div></div><div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div></div><Zap className="w-8 h-8 text-purple-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3></h3></h3>
                <p className="text-gray-600">Fast delivery with proven development frameworks</p></p></p>
              </div>
              <div className="text-center">
                </div></div><div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div></div><Target className="w-8 h-8 text-orange-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3></h3></h3>
                <p className="text-gray-600">Tailored blockchain solutions for your specific needs</p></p></p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */},
    {categories.map(category => (
          <section key=category} className="py-16 bg-gray-50">
            </section></section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              </div></div><div className="text-center mb-12">
                </div></div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services;
  </h2></h2></)
                <p className="text-xl text-gray-600">)
                  Professional {category.toLowerCase()} solutions powered by blockchain technology;
  </p></p></
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blockchainServices;
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    </div></div><div key=index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      </div></div><div className="text-4xl mb-4">{service.icon}</div></div></div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3></h3></h3>
                      <p className="text-gray-600 mb-4">{service.description}</p></p></p>
                      <div className="mb-4">
                        </div></div><div className="flex items-center justify-between mb-2">
                          </div></div><span className="text-2xl font-bold text-blue-600">{service.price}</span></span></span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span></span></span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates;
  </div></div></
                      </div>
                      <div className="mb-4">
                        </div></div><h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>)
                        <ul className="space-y-1">)
                          {service.features.map((feature, featureIndex) => (
                            <li key=featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature})
                            </li>)
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        </div></div><h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            </div></div><span key=techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech})
                            </span></span></span>)
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        </div></div><h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key=benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit})
                            </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                          ))}
                        </ul>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors" /></button>
                        Get Blockchain Quote,
  </button></button></
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))},
    {/* Blockchain Capabilities Showcase */}
        <section className="py-16 bg-white">
          </section></section><div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            </div></div><div className="text-center mb-12">
              </div></div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Capabilities;
  </h2></h2></
              <p className="text-xl text-gray-600">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                Comprehensive blockchain technologies and methodologies for modern business applications,
  </p></p></
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              </div></div><div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                </div></div><Link className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3></h3></h3>
                <p className="text-gray-600">Automated contract execution with transparency and security</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                </div></div><Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3></h3></h3>
                <p className="text-gray-600">Decentralized finance solutions for modern financial services</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                </div></div><Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Marketplaces</h3></h3></h3>
                <p className="text-gray-600">Digital asset trading and ownership verification platforms</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                </div></div><Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Solutions</h3></h3></h3>
                <p className="text-gray-600">Private and consortium blockchains for business applications</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                </div></div><Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications</h3></h3></h3>
                <p className="text-gray-600">Decentralized applications with user-friendly interfaces</p></p></p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                </div></div><BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Analytics</h3></h3></h3>
                <p className="text-gray-600">Comprehensive data analysis and visualization tools</p></p></p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          </section></section><div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            </div></div><h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform with Blockchain?
            </h2></h2></h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our blockchain experts for a free consultation and custom blockchain strategy development;
  </p></p></
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><a;
                href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                📞 +1 302 464 0950;
  </
              <a;
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                ✉️ kleber@ziontechgroup.com,
  </
            </div>
            <div className="mt-8 text-sm text-blue-200">
              </div></div><p>📍 364 E Main St STE 1008, Middletown DE 19709</p></p></p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlockchainPage;
  </a>
  </a>
  </p>
  </p>
  </h2>
  </button>
  </p>
  </h2>
  </p>
  </h1>
  </div>
