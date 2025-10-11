'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Wifi, Cpu, Database, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EdgeComputingPage: React.FC = () => {
<<<<<<< HEAD
  },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and coverage.',
      benefits: [''Global edge network', 'Geographic distribution', 'CDN integration', 'Multi-region support'']
  },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
      benefits: [''Zero-trust architecture', 'Encrypted communications', 'Secure boot', 'Threat detection'']
  },
    {
      icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: [''Local data storage', 'Distributed databases', 'Data synchronization', 'Backup strategies'']
  },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: [''Device management', 'Protocol support', 'Data collection', 'Real-time monitoring'']
  },
=======
  const features = [
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
    {
      icon: Server,
      title: 'Edge Infrastructure',
      description: 'Deploy computing resources closer to data sources for ultra-low latency processing.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process data in real-time at the edge for immediate insights and responses.'
    },
    {
      icon: Wifi,
      title: '5G Integration',
      description: 'Leverage 5G networks for high-speed, low-latency edge computing applications.'
    },
    {
      icon: Brain,
      title: 'AI at the Edge',
      description: 'Run AI models directly on edge devices for instant decision-making.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Process sensitive data locally to reduce security risks and ensure compliance.'
    },
    {
      icon: Database,
      title: 'Data Optimization',
      description: 'Reduce bandwidth usage and cloud costs by processing data at the edge.'
    }
  ];
<<<<<<< HEAD
const services = const services = const services = [
    {
      icon: '⚡',
      title: 'Edge Analytics',
      description: 'Real-time data processing and analytics at the edge'
  },
    {
      icon: '🌐',
      title: 'Edge Networking',
      description: 'Optimized networking solutions for edge deployments'
  },
    {
      icon: '🔒',
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge environments'
  },
    {
      icon: '📱',
      title: 'Mobile Edge',
      description: 'Mobile edge computing for 5G and mobile applications'
  };
    };
  ];
const benefits = const benefits = const benefits = [
    'Ultra-Low Latency',
    'Reduced Bandwidth Costs',
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-a275

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars with edge AI processing.',
      benefits: ['Ultra-low latency', 'Real-time safety decisions', 'Reduced cloud dependency']
    },
    {
      title: 'Industrial IoT',
      description: 'Monitor and control industrial equipment with edge computing solutions.',
      benefits: ['Predictive maintenance', 'Real-time monitoring', 'Operational efficiency']
    },
    {
      title: 'Smart Cities',
      description: 'Process traffic, environmental, and safety data at the edge for smart city applications.',
      benefits: ['Traffic optimization', 'Environmental monitoring', 'Public safety']
    },
    {
      title: 'Healthcare',
<<<<<<< HEAD
      description: 'Real-time patient monitoring and diagnostics',
      icon: '🏥'
  },
    {
      title: 'Gaming',
      description: 'Cloud gaming with minimal latency',
      icon: '🎮'
  };
    };
  ];
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div></div></div>
      <Helmet>
        <title>Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation>
      {/* Hero Section */}
      <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>)
        </section>)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div></div></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={ animationDelay: '1s' } /></div></div></div>
        <div className="relative max-w-7xl mx-auto text-center"></div></div></div>
          <h1>
            Edge Computing;
            </h1></h1><span>
              Solutions;
            </span></span></span>
          </h1>
          <p></p>
            Bring computing power closer to your data and users with our advanced edge computing solutions.;
            Ultra-low latency, real-time processing, and global edge infrastructure.
            </button>
            <button></button>
              View Demo,
            </button></button></button>
          </div>
        </div>
      </section>
      {/* Features Section */}
                  ))}
                </ul>
=======
      description: 'Process medical data locally for patient monitoring and diagnostic applications.',
      benefits: ['Patient privacy', 'Real-time monitoring', 'Reduced latency']
    }
  ];

  const benefits = [
    'Reduced latency by up to 90%',
    'Lower bandwidth costs and usage',
    'Enhanced data privacy and security',
    'Improved reliability and availability',
    'Real-time processing capabilities',
    'Scalable edge infrastructure'
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Deploy edge computing solutions for ultra-low latency processing, real-time analytics, and AI at the edge with Zion Tech Group." />
        <meta name="keywords" content="edge computing, 5G, IoT, real-time processing, edge AI, low latency, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Edge Computing Solutions
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Deploy computing power closer to your data sources for ultra-low latency, 
                  real-time processing, and enhanced performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                  <a
                    href="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Demo
                  </a>
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Use Cases */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Edge Computing Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                      <p className="text-gray-300 mb-6">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Why Choose Edge Computing?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Edge computing delivers significant advantages for applications requiring 
                    real-time processing and low latency.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Edge Computing Technology Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Edge Hardware</h3>
                    <p className="text-gray-300 text-sm">
                      High-performance edge servers and IoT devices
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Edge Software</h3>
                    <p className="text-gray-300 text-sm">
                      Containerized applications and microservices
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Edge AI</h3>
                    <p className="text-gray-300 text-sm">
                      Machine learning models optimized for edge deployment
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">5G Networks</h3>
                    <p className="text-gray-300 text-sm">
                      High-speed, low-latency connectivity for edge applications
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Deploy Edge Computing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our edge computing experts help you design and deploy solutions 
                  that deliver ultra-low latency and real-time processing capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Edge Project
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>
      {/* Services Section */}
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
          </div>
        </div>
      </section>
      <Footer / /></Footer>
  ),
=======
      </main>
      
      <Footer />
    </>
  );
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
};

export default EdgeComputingPage;