'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure communications.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster response times.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time analytics', 'Local processing']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes.',
      icon: Target,
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Worker safety']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-reliable communication for self-driving cars.',
      icon: CheckCircle,
      benefits: ['Vehicle-to-vehicle communication', 'Traffic optimization', 'Safety systems', 'Route planning']
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery and telemedicine applications.',
      icon: Brain,
      benefits: ['Remote surgery', 'Telemedicine', 'Patient monitoring', 'Medical imaging']
    },
    {
      title: 'Smart Cities',
      description: 'Connected infrastructure for urban management.',
      icon: PieChart,
      benefits: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring']
    }
  ];

      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of current infrastructure and requirements.',
      details: ['Site surveys', 'Coverage analysis', 'Capacity planning', 'Security audit']
    },
    {
      step: '02',
      title: 'Infrastructure Design',
      description: 'Custom 5G network architecture tailored to your needs.',
      details: ['Core network design', 'RAN planning', 'Backhaul solutions', 'Edge computing setup']
    },
    {
      step: '03',
      title: 'Deployment',
      description: 'Professional installation and configuration of 5G equipment.',
      details: ['Equipment installation', 'Network configuration', 'Testing and validation', 'Performance tuning']
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for peak performance.',
      details: ['Performance monitoring', 'Network optimization', 'Capacity management', 'Security updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"></div>
      <Helmet></Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." /></meta>
        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Schedule Demo;
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Unlock the full potential of 5G technology with our comprehensive implementation services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p>
                    {feature.description}
                  </p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Real-World Applications;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Discover how 5G technology transforms industries and enables new possibilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
                  <useCase.icon className="w-12 h-12 text-blue-400 mb-4" /></useCase>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p>
                    {useCase.description}
                  </p>
                  <ul className="space-y-2"></ul>
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Our Implementation Process;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                A systematic approach to deploying 5G networks that ensures success and optimal performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {values.map((value, index) => (
                <div key={index} className="text-center"></div>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    {value.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                    {value.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p>
                    {value.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300"></ul>
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Network?
            </h2>
            <p className="text-xl text-gray-100 mb-8"></p>
              Get started with our 5G implementation services and unlock the full potential of next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                Start Your Project
;
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Contact Our Experts;
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Footer>
    </div>
  );
};

export default FiveGImplementationPage;