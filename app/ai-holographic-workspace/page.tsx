import React from 'react';
<<<<<<< HEAD
import { Monitor, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Eye, Hand } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Hand } from 'lucide-react';
const AIHolographicWorkspace = () => {
  return null;
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiHolographicWorkspacePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
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
    <React.Fragment>
      <Helmet>
        <title>Ai Holographic Workspace - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai holographic workspace solution for modern businesses." />
        <meta name="keywords" content="AI ai holographic workspace, artificial intelligence, ai holographic workspace, AI solutions, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Holographic Workspace
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai holographic workspace solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
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
=======
import { Brain, Target, BarChart, Users, Settings, Navigation, Target, Users, Cube } from 'lucide-react';

const AIHolographicWorkspacePage: React.FC = () => {
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">,
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20"></nav>
        <div className="container mx-auto px-4"></div>
          <div className="flex items-center justify-between h-16"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <a href="/contact" className="cyber-button px-4 py-2 text-sm"></a>
              Get Started;
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span><a href="/contact" className="cyber-button px-4 py-2 text-sm">Get Started</a>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
        <div className="container mx-auto text-center"></section>
          <div className="max-w-4xl mx-auto"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Holographic Workspace</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">Step into the future with our immersive 3D holographic workspace that revolutionizes how you interact with digital content and collaborate with your team.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Enter Holographic Space<a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">View Demo</a>
            <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"></h1>
              AI Holographic Workspace;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"></p>
              Step into the future with our immersive 3D holographic workspace that revolutionizes how you interact with digital content and collaborate with your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"></a>
                Enter Holographic Space;
              </a>
              <a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold"></a>
                View Demo;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Section */}
      <section className="py-20 px-4"></section>
            <h2 className="text-4xl md: text-5xl font-bold mb-6 text-white"></h2>
              Immersive 3D Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the next generation of workspace technology with holographic displays and spatial computing.
        <div className="container mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immersive 3D Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the next generation of workspace technology with holographic displays and spatial computing.</p>
            </p>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

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
            </div></div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
=======
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Users className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Virtual Collaboration</h3><p className="text-gray-300">Meet and collaborate with team members in shared virtual spaces with realistic avatars and spatial audio.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Target className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Gesture Control</h3><p className="text-gray-300">Control your workspace with natural hand gestures and eye tracking for intuitive interaction.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-4"></div>
                <BarChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Spatial Data Visualization</h3><p className="text-gray-300">Visualize complex data sets in 3D space for better understanding and analysis.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Brain className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Spatial Assistant</h3><p className="text-gray-300">Intelligent AI assistant that understands spatial context and provides contextual help.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Settings className="w-6 h-6 text-white" />
              </div>,
              <h3 className="text-xl font-semibold text-white mb-3">Customizable Environment</h3>,
              <p className="text-gray-300">,
                Personalize your holographic workspace with custom themes, layouts, and virtual objects.
              <h3 className="text-xl font-semibold text-white mb-3">Customizable Environment</h3><p className="text-gray-300">Personalize your holographic workspace with custom themes, layouts, and virtual objects.</p>
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30"></section>
            <h2 className="text-4xl md: text-5xl font-bold mb-6 text-white"></h2>
              Holographic Pricing;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the perfect holographic workspace plan for your needs.
        <div className="container mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Holographic Pricing</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect holographic workspace plan for your needs.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Holographic Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199</div><span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8"></ul>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Basic 3D workspace;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Gesture controls;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 virtual screens;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Email support;
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button px-6 py-3 text-center block"></a>
                Get Started;
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-lg p-8 relative"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span><h3 className="text-2xl font-bold text-white mb-4">Holographic Pro</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399</div><span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8"></ul>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Advanced 3D workspace;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Multi-user collaboration;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited virtual screens;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  AI spatial assistant;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Priority support;
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button px-6 py-3 text-center block"></a>
                Get Started;
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Holographic Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799</div><span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8"></ul>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Full holographic suite;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Enterprise collaboration;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Custom virtual environments;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support;
                </li>
                <li className="flex items-center text-gray-300"></li>
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment;
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button px-6 py-3 text-center block"></a>
                Contact Sales;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="container mx-auto text-center"></section>
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Enter the Holographic Future?</h2><p className="text-xl text-gray-300 mb-8">Join the revolution in workspace technology and experience productivity like never before.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Your Holographic Journey<a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Schedule Demo</a>
            <h2 className="text-4xl md: text-5xl font-bold mb-6 text-white"></h2>
              Ready to Enter the Holographic Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join the revolution in workspace technology and experience productivity like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"></a>
                Start Your Holographic Journey;
              </a>
              <a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold"></a>
                Schedule Demo;
              </a>
            </div>
          </div>)
        </div>)
      </section>)
),
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-400/20 py-12"></footer>
        <div className="container mx-auto px-4 text-center"></div>
          <div className="flex items-center justify-center space-x-2 mb-4"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
              <Brain className="w-5 h-5 text-white" />
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span><p className="text-gray-300 mb-4">Leading provider of AI-powered enterprise solutions and holographic workspace technology.</p>
          </p>
          <div className="flex justify-center space-x-6"></div>
            <a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy<a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service<a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
            <a href="/privacy" className="text-gray-300 hover: text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>,
        </div>,
      </footer>,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

  return null;
};

export default function AiHolographicWorkspacePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Holographic Workspace - Zion Tech Group</title>
        <meta name="description" content="Ai Holographic Workspace solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Holographic Workspace</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai holographic workspace solutions designed to meet your business needs.
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