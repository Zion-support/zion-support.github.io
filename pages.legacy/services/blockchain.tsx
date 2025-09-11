import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Zap, Users, BarChart3, ArrowRight, CheckCircle, Lock, Globe } from 'lucide-react';

const Blockchain: NextPage = () => {};
    },
    {};
    },
    {};
    },
    {};
    }
  ];

  const blockchainProcess = [
    {};
    },
    {};
    },
    {};
    },
    {};
    },
    {};
    }
  ];

  const platforms = [
    {};
    },
    {};
    },
    {};
    }
  ];

  const useCases = [
    {};
    },
    {};
    },
    {};
    },
    {};
    }
  ];

  return (
    <>
      <Head>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's blockchain services. Smart contracts, DeFi platforms, supply chain tracking, and digital identity solutions." />
        <meta name="keywords" content="blockchain, smart contracts, DeFi, supply chain, digital identity, Ethereum, Hyperledger, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 via-emerald-900 to-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Blockchain Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Leverage the power of blockchain technology to create transparent, 
              secure, and efficient business solutions. From smart contracts to DeFi platforms.
            </p>
          </div>
        </section>

        {/* Blockchain Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Blockchain Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive blockchain services that help businesses 
                leverage distributed ledger technology for competitive advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {};
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{solution.description}</p>
                  <ul className="space-y-2">
                    {};
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Blockchain Development Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a systematic approach to ensure your blockchain initiatives 
                deliver maximum value and successful implementation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {};
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blockchain Platforms */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Blockchain Platforms We Work With</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have expertise across major blockchain platforms, helping you choose 
                the right technology for your specific use case.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {};
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">{platform.name}</h3>
                  <p className="text-gray-600 mb-6 text-center">{platform.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {};
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases by Industry */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Blockchain Use Cases by Industry</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how blockchain technology is transforming different industries and creating 
                new opportunities for innovation and efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {};
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{useCase.industry}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">Applications:</h4>
                    <ul className="space-y-2">
                      {};
                        <li key={appIndex} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {};
                        <li key={benefitIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Zion Tech Group for Blockchain?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine deep blockchain expertise with business understanding to deliver 
                solutions that drive real business value and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Blockchain Team</h3>
                <p className="text-gray-600">
                  Our team includes blockchain developers, architects, and consultants with 
                  extensive experience in delivering successful blockchain solutions.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security & Compliance</h3>
                <p className="text-gray-600">
                  We implement robust security measures and ensure compliance with 
                  regulatory requirements and industry standards.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation Focus</h3>
                <p className="text-gray-600">
                  We stay at the forefront of blockchain technology and help you 
                  leverage the latest innovations for competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Blockchain Solutions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how blockchain technology can transform your business 
              and create new opportunities for innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </span></Link>
              <Link href="/services"><span className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blockchain;