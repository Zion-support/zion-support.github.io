'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
            </div>
          </div>
        </section>

              </button>
            </div>
          </div>
        </section>
  );
};

export default PagePage;
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;
      </div>
    </>
  )
}
export default BlockchainWeb3Page
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
    }
  ]
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group
        <meta name="description" content="Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more." />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div></div>
        <div className="container mx-auto px-4 py-16"></div></div>
          <div className="text-center mb-16"></div></div>
            <h1 className="text-5xl font-bold text-white mb-6"></h1></h1>
              Blockchain & <span className="text-cyan-400"></span></span>Web3
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"></div></div>
                <div className="flex items-start space-x-4 mb-6"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{feature.title}
                    <p className="text-gray-300 mb-4"></p></p>{feature.description}
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {benefit}
                  ))}
            ))}
