'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5 G Network Design',
      description: 'Complete 5 G network design and implementation with optimal coverage and performance.',
      benefits: ['Network planning', 'Coverage optimization', 'Performance tuning']
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Ultra-low latency 5 G networks for real-time applications and mission-critical operations.',
      benefits: ['< 1 ms latency', 'Real-time apps', 'Mission critical']
    },
    {
      icon: Clock,
      title: '24/7 Network Monitoring',
      description: 'Continuous monitoring of 5 G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Scalable 5 G infrastructure that grows with your business needs and user demands.',
      benefits: ['Auto-scaling', 'Capacity planning', 'Future-proof design']
    },
    {
      icon: Shield,
      title: '5 G Security',
description: 'Comprehensive security measures designed specifically for 5 G networks and applications.',
      benefits: ['Network security', 'Data protection', 'Threat detection']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5 G network performance and optimization.',
      benefits: ['Performance insights', 'Usage analytics', 'Optimization recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1 s' }} /></div>

        <div className="relative max-w-7 xl mx-auto text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6 leading-tight"></h>
            5 G Network
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span></<<<spa>Implementation</spa></spa>
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed">
            Complete 5 G network implementation services with ultra-low latency, high-speed connectivity,
            and advanced features for modern applications and IoT ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"></button></<<<button>Get</button></<<button>Started</button> Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" /></ArrowRigh>
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button></<<<butto>Schedule</butto></<<butto>Demo</butto>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-4">5 G Implementation Features</h>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">Comprehensive 5 G network implementation designed for modern connectivity needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" /></featur>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2"></u>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircl>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4"></sectio>
        <div className="max-w-4 xl mx-auto text-center"></div>
          <h2 className="text-4 xl font-bold text-white mb-6">Ready for 5 G Implementation?</h>
          <p className="text-xl text-gray-300 mb-8">Join leading organizations using our 5 G implementation services for next-generation connectivity</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button></<<<butto>Start</butto></<<butto>Free</butto></<butto>Trial</butto>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button></<<<butto>Contact</butto></<<butto>Sales</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default FiveGImplementationPage;
