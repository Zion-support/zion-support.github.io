<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Quantum Ai - Zion Tech Group</title>
        <meta name="description" content="Quantum Ai solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Quantum Ai</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive quantum ai solutions designed to meet your business needs.
          </p>
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
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const QuantumAIPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
=======
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Quantum AI - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge quantum AI solutions for the future." />
        <meta name="keywords" content="quantum AI, quantum computing, artificial intelligence" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge quantum AI solutions for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
=======
'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Cpu, Phone, Mail, MapPin, Navigation } from 'lucide-react';

const QuantumAiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer
        title="Quantum AI Computing - Zion Tech Group"
        description="Next-generation quantum algorithms for complex problem solving with exponential speedup."
        keywords={["quantum computing","quantum AI","quantum algorithms","quantum optimization","quantum machine learning"]}
        canonicalUrl="https: //ziontechgroup.com/quantum-ai",
      />,
      <Navigation />,
      <main className="container mx-auto px-4 py-16 pt-24">,
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <div className="max-w-4xl mx-auto"></section>
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></h1>
              Quantum AI Computing;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Next-generation quantum algorithms for complex problem solving with exponential speedup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum AI Computing</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Next-generation quantum algorithms for complex problem solving with exponential speedup.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              ></a>
                Get Started Today;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" />
                +1 302 464 0950;
              </a>
            </div>
          </div>,
        </section>,
,
        {/* Features Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Key Features;
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Powerful capabilities designed to transform your business;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Powerful capabilities designed to transform your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Algorithms</h3><p className="text-gray-300">Advanced quantum algorithms capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Optimization Problems</h3><p className="text-gray-300">Advanced optimization problems capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cryptography</h3><p className="text-gray-300">Advanced cryptography capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Simulation</h3><p className="text-gray-300">Advanced simulation capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Research & Development</h3><p className="text-gray-300">Advanced research & development capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3><p className="text-gray-300">Advanced custom solutions capabilities powered by AI</p>
            </div>
          </div>,
        </section>,
,
        {/* Benefits Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Quantum AI Computing?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Proven results and measurable impact for your business;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Quantum AI Computing?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Proven results and measurable impact for your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Exponential Speedup</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Complex Optimization</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Future-proof Technology</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantage</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
          </div>,
        </section>,
,
        {/* Pricing Section */}
        <section className="mb-16"></section>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
            </p>
          </div>

          <div className="max-w-md mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Computing</h3><div className="text-4xl font-bold text-cyan-400 mb-4">$5,000/month</div>
              <p className="text-gray-300 mb-6">per month</p><a
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              >Get Started</a>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Pricing;
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Transparent pricing with no hidden fees;
            </p>
          </div>

          <div className="max-w-md mx-auto">,
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center">,
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Computing</h3>,
              <div className="text-4xl font-bold text-cyan-400 mb-4">$5,000/month</div>
              <p className="text-gray-300 mb-6">per month</p>
              <a;
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              ></a>
                Get Started;
              </a>
            </div>)
          </div>)
        </section>)
),
        {/* Contact Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Contact our experts to discuss your specific needs;
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Contact our experts to discuss your specific needs</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20"></div>
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold"></a>
                +1 302 464 0950;
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3><p className="text-gray-300 mb-4">Speak directly with our experts</p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">+1 302 464 0950</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"></div>
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold"></a>
                kleber@ziontechgroup.com;
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3><p className="text-gray-300 mb-4">Send us your requirements</p><a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">kleber@ziontechgroup.com</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20"></div>
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3><p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm"></p>
                364 E Main St STE 1008</p><br >Middletown DE 19709</br>
              </br>
                364 E Main St STE 1008<br />
                Middletown DE 19709;
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
=======
      <Footer />,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default QuantumAIPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function QuantumaiPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Quantum Ai - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Quantum Ai</h1>
        <p className="text-lgtext-gray-300mb-8">Professional quantum ai services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
