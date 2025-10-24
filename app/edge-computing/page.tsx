<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
=======
const EdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data locally at the edge for ultra-low latency and real-time responsiveness.',
      benefits: ['Sub-millisecond latency', 'Real-time processing', 'Local data processing', 'Reduced bandwidth usage']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and coverage.',
      benefits: ['Global edge network', 'Geographic distribution', 'CDN integration', 'Multi-region support']
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security measures designed specifically for edge computing environments.',
      benefits: ['Zero-trust architecture', 'Encrypted communications', 'Secure boot', 'Threat detection']
    },
    {
      icon: Database,
      title: 'Edge Storage',
      description: 'Distributed storage solutions optimized for edge computing workloads.',
      benefits: ['Local data storage', 'Distributed databases', 'Data synchronization', 'Backup strategies']
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and sensors for comprehensive edge solutions.',
      benefits: ['Device management', 'Protocol support', 'Data collection', 'Real-time monitoring']
    },
    {
      icon: Server,
      title: 'Edge Infrastructure',
      description: 'Robust infrastructure designed for edge computing requirements and scalability.',
      benefits: ['High availability', 'Auto-scaling', 'Load balancing', 'Fault tolerance']
    }
  ];

<<<<<<< HEAD
  const services = [
    {
      icon: '⚡',
      title: 'Edge Analytics',
      description: 'Real-time data processing and analytics at the edge',
    },
    {
      icon: '🌐',
      title: 'Edge Networking',
      description: 'Optimized networking solutions for edge deployments',
    },
    {
      icon: '🔒',
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge environments',
    },
    {
      icon: '📱',
      title: 'Mobile Edge',
      description: 'Mobile edge computing for 5G and mobile applications',
    }
  ];

  const benefits = [
    'Ultra-Low Latency',
    'Reduced Bandwidth Costs',
    'Improved Reliability',
    'Enhanced Security',
    'Real-time Processing',
    'Global Scalability'
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars',
      icon: '🚗',
    },
    {
      title: 'Smart Cities',
      description: 'IoT sensors and real-time city management',
      icon: '🏙️',
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation and monitoring',
      icon: '🏭',
    },
    {
      title: 'AR/VR Applications',
      description: 'Immersive experiences with low latency',
      icon: '🥽',
    },
    {
      title: 'Healthcare',
      description: 'Real-time patient monitoring and diagnostics',
      icon: '🏥',
    },
    {
      title: 'Gaming',
      description: 'Cloud gaming with minimal latency',
      icon: '🎮',
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Edge Computing solutions by Zion Tech Group" />
      </Helmet>
      
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Edge Computing</h1>
        <div className="prose prose-invert max-w-none">
=======
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge Computing
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">)
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 px-4 overflow-hidden">)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>

        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Edge Computing</h1><span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Bring computing power closer to your data sources with our advanced edge computing solutions.</p>
            Achieve ultra-low latency, reduce bandwidth costs, and enable real-time processing at scale.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">Get Started Today</button>
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Schedule Demo</button>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1>
            Edge Computing;
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"></span>
              Solutions;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bring computing power closer to your data and users with our advanced edge computing solutions.
            Ultra-low latency, real-time processing, and global edge infrastructure.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div></div></div></div></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced edge computing capabilities designed for modern applications and IoT solutions
            </p>
          </div></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
=======
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"></button>
              Get Started Today;
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Schedule Demo;
            </button>
          </div>
        </div>,
      </section>,
,
{/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Edge Computing Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive edge computing solution designed for modern applications and IoT deployments</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive edge computing solution designed for modern applications and IoT deployments;
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-blue-400/50 transition-all duration-300 group">,
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">,
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Edge Computing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solutions for all your business needs
            </p>
          </div></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
=======
      {/* CTA Section */}
<section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2><p className="text-xl text-gray-300 mb-8">Join leading enterprises using edge computing to optimize their applications and reduce latency</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial<button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales</button>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Join leading enterprises using edge computing to optimize their applications and reduce latency;
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Start Free Trial;
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Contact Sales;
            </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Edge computing solutions for various industries and applications
            </p>
          </div></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover: scale-110 transition-transform">{useCase.icon,}</div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
=======
      <Footer />,
    </div>);
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Edge Computing?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of edge computing with our proven solutions
            </p>
          </div></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div></div></div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive edge computing solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function EdgecomputingPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Edge Computing - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Edge Computing</h1>
        <p className="text-lgtext-gray-300mb-8">Professional edge computing services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
