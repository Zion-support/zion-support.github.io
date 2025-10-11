'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const PagePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
=======
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';

const AiSmartContractAuditorPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Ai Smart Contract Auditor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
    <>
      <Helmet>
        <title>Ai Smart Contract Auditor - Zion Tech Group</title>
        <meta name="description" content="AI-powered ai smart contract auditor solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, ai, smart, contract, auditor, automation, artificial intelligence, business solutions" />
      </Helmet>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div></div></div>
          
          <div className="max-w-7xl mx-auto relative z-10"></div></div>
            </div><div className="{`text-center" transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}></div></div>
              </div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30"></div></div>
                </div><Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold"></span></span>AI-Powered Security</span>
              </div>
              
                Advanced AI-powered smart contract auditing with automated security analysis, 
                vulnerability detection, and comprehensive risk assessment for blockchain projects.
              </p>
              
                  <span className="font-semibold"></span></span>99.9% Vulnerability Detection</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400"></div></div>
                  </div><Clock className="w-5 h-5" />
                  <span className="font-semibold"></span></span>80% Faster Audits</span>
                </div>
                <div className="flex items-center space-x-2 text-pink-400"></div></div>
                  </div><Shield className="w-5 h-5" />
                  <span className="font-semibold"></span></span>Zero False Positives</span>
                </div>
              </div>
              
                </a>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
=======
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
=======
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>,</div>
              {features.map((feature, index) => (
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6"></div></div>
                    </div><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white"></h3></h3>{feature.title}</h3>
                  <p className="text-gray-300 mb-6"></p></p>{feature.description</p&gt;}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) =&gt; (
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                    ))}
                  </ul>
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
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
=======
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>,</div>
              {useCases.map((useCase, index) => (
                >
                  </div><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6"></div></div>
                    </div><useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white"></h3></h3>{useCase.title}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{useCase.description</p&gt;}</p>
                  <div className="text-cyan-400 font-semibold text-sm"></div></div>{useCase.results</div&gt;} </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              </button>
=======
                All plans include our advanced AI security analysis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div></div>,</div>
              {pricingPlans.map((plan, index) => (
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8"></ul>
                    {plan.features.map((feature, idx) => (
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      
      <Footer />
    </>
  );
};

export default PagePage;
=======
      </main>

      <Footer />
    </div>
  );
};

export default AiSmartContractAuditorPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
