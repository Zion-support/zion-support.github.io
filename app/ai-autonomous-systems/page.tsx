'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Settings, Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Users, Building, Factory, Car, Stethoscope, Clock, Navigation as NavIcon, TrendingUp } from 'lucide-react';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Decision Making',
      description: 'AI systems that make independent decisions based on real-time data analysis and learned patterns.',
      benefits: ['Real-time decisions', 'Pattern recognition', 'Adaptive learning', 'Risk assessment']
    },
    {
      icon: Settings,
      title: 'Self-Managing Systems',
      description: 'Systems that automatically configure, optimize, and maintain themselves without human intervention.',
      benefits: ['Auto-configuration', 'Self-optimization', 'Predictive maintenance', 'Resource management']
    },
    {
      icon: Zap,
      title: 'Adaptive Intelligence',
      description: 'AI that continuously learns and adapts to changing environments and requirements.',
      benefits: ['Continuous learning', 'Environment adaptation', 'Performance improvement', 'Dynamic optimization']
    },
    {
      icon: Shield,
      title: 'Autonomous Security',
      description: 'Self-protecting systems that detect and respond to threats automatically.',
      benefits: ['Threat detection', 'Automatic response', 'Security updates', 'Incident handling']
    },
    {
      icon: Target,
      title: 'Goal-Oriented Behavior',
      description: 'Systems that work towards specific objectives while adapting to changing conditions.',
      benefits: ['Objective tracking', 'Dynamic planning', 'Resource allocation', 'Progress monitoring']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human operators.',
      benefits: ['Human oversight', 'Collaborative decision making', 'Transparency', 'Control interfaces']
    }]
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      icon: '🚗'
    },
    {
      title: 'Smart Infrastructure',
      description: 'Intelligent traffic systems, smart buildings, and automated city management.',
      icon: '🏗️'
    },
    {
      title: 'Industrial Automation',
      description: 'Autonomous manufacturing systems and robotic process automation.',
      icon: '🏭'
    },
    {
      title: 'Healthcare Robotics',
      description: 'Autonomous surgical robots and patient care systems.',
      icon: '🏥'
    },
    {
      title: 'Agricultural Automation',
      description: 'Autonomous farming equipment and crop management systems.',
      icon: '🚜'
    },
    {
      title: 'Space Exploration',
      description: 'Autonomous rovers and spacecraft for space exploration missions.',
      icon: '🚀'
    }]
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve safety and reduce human error',
    'Enable 24/7 autonomous operation',
    'Adapt to changing environments automatically',
    'Scale operations without proportional cost increase',
    'Provide consistent, reliable performance',
    'Enable new business models and opportunities',
    'Reduce environmental impact through optimization']
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI technology. Self-driving vehicles, smart infrastructure, and autonomous robotics solutions." />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div><div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build intelligent autonomous systems that can operate independently and adapt to changing environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-violet-400 text-violet-300 px-8 py-4 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous System Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that enables systems to operate independently and intelligently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div><div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From transportation to healthcare, our AI Autonomous Systems serve diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  </div><div className="text-4xl mb-4">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of autonomous technology with our revolutionary AI systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  </div><div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-12">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Autonomous Systems?
              </h2>
              <p className="text-xl text-violet-100 mb-8">
                Join thousands of organizations who are already using our AI Autonomous Systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIAutonomousSystemsPage;
