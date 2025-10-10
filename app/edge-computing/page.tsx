'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Cpu, Globe, Shield, ArrowRight, Cloud, Database, Wifi, Server } from 'lucide-react';
const EdgeComputingPage: React.FC = () => {
  const features = [;
    {
      icon: Cpu,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Sub-millisecond latency', 'Real-time processing', 'Local data processing', 'Reduced bandwidth usage']}
    },;
    {
      icon: Globe,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Global edge network', 'Geographic distribution', 'CDN integration', 'Multi-region support']}
    },;
    {
      icon: Shield,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Zero-trust architecture', 'Encrypted communications', 'Secure boot', 'Threat detection']}
    },;
    {
      icon: Database,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Local data storage', 'Distributed databases', 'Data synchronization', 'Backup strategies']}
    },;
    {
      icon: Wifi,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Device management', 'Protocol support', 'Data collection', 'Real-time monitoring']}
    },;
    {
      icon: Server,
      title: '[^']*',
      description: '[^']*',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']}
    }
  ];
  const services = [;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Real-time data processing and analytics at the edge'}
    },;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Optimized networking solutions for edge deployments'}
    },;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Comprehensive security solutions for edge environments'}
    },;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Mobile edge computing for 5G and mobile applications'}
    }
  ];
  const benefits = [;
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    'Global Scalability';
  ];
  const useCases = [;
    {
      title: '[^']*',
      description: '[^']*',
      icon: '🚗'}
    },;
    {
      title: '[^']*',
      description: '[^']*',
      icon: '🏙️'}
    },;
    {
      title: '[^']*',
      description: '[^']*',
      icon: '🏭'}
    },;
    {
      title: '[^']*',
      description: '[^']*',
      icon: '🥽'}
    },;
    {
      title: '[^']*',
      description: '[^']*',
      icon: '🏥'}
    },;
    {
      title: '[^']*',
      description: '[^']*',
      icon: '🎮'}
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <Helmet>
        <title>Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional edge computing solutions by Zion Tech Group. Ultra-low latency, real-time processing, and global edge infrastructure." />
        <meta name="keywords" content="edge computing, low latency, IoT, real-time processing, edge infrastructure, Zion Tech Group" />
      </Helmet>
      <Navigation />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-Service Feature animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">;
            Edge Computing;
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">;
              Solutions;
            </span>;
          </h1>;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">;
            Bring computing power closer to your data and users with our advanced edge computing solutions.;
            Ultra-low latency, real-time processing, and global edge infrastructure.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">;
              Get Started Today;
              <ArrowRight className="inline-block ml-2 w-5 h-5" />;
            </button>;
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">;
              View Demo;
            </button>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Features</h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Advanced edge computing capabilities designed for modern applications and IoT solutions;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-300 mb-4">{feature.description}</p>;
                <ul className="space-y-2">;
                  {feature.benefits.map((benefit, benefitIndex) => (}
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">;
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Services</h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Comprehensive edge computing solutions for all your business needs;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {services.map((service, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>
                <div className="text-4xl mb-4">{service.icon}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-300">{service.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Edge computing solutions for various industries and applications;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {useCases.map((useCase, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"></div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>;
                <p className="text-gray-300">{useCase.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Edge Computing?</h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Experience the benefits of edge computing with our proven solutions;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>;
          <p className="text-xl text-gray-300 mb-8">;
            Transform your applications with ultra-low latency edge computing solutions;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">;
              Start Free Trial;
            </button>;
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">;
              Contact Sales;
            </button>;
          </div>;
        </div>;
      </section>;
      <Footer />;
    </div>;
  )}
export default EdgeComputingPage;
