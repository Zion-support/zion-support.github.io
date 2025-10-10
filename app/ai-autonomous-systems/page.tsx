import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Brain, Zap, Shield, ArrowRight, Cpu, Eye, Navigation } from 'lucide-react';
import NavigationComponent from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      icon: Navigation,
      benefits: [
        'Advanced computer vision',
        'Real-time decision making',
        'Safety-first design',
        'Regulatory compliance'
      ]
    },
    {
      title: 'Smart Robotics',
      description: 'Intelligent robots that can learn, adapt, and perform complex tasks autonomously.',
      icon: Cpu,
      benefits: [
        'Machine learning integration',
        'Adaptive behavior',
        'Human-robot collaboration',
        'Industrial applications'
      ]
    },
    {
      title: 'AI Agents',
      description: 'Autonomous software agents that can perform tasks and make decisions independently.',
      icon: Brain,
      benefits: [
        'Task automation',
        'Decision making',
        'Learning capabilities',
        'Scalable deployment'
      ]
    },
    {
      title: 'Quality Control',
      description: 'Automate quality checks and validation processes',
      icon: Shield,
      benefits: [
        'Automated quality gates',
        'Compliance monitoring',
        'Risk mitigation',
        'Quality reporting'
      ]
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase productivity by 300%',
    'Eliminate human errors',
    'Scale operations instantly',
    '24/7 automated processing',
    'Real-time monitoring and alerts'
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI solutions. Self-driving vehicles, smart robotics, and autonomous agents for the future." />
        <meta name="keywords" content="AI autonomous systems, self-driving cars, robotics, autonomous agents, AI navigation, smart systems" />
      </Helmet>

      <NavigationComponent />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build intelligent autonomous systems that can think, learn, and act independently. 
              From self-driving vehicles to smart robotics, we create the future of automation.
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous System Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI autonomous systems provide comprehensive solutions for modern applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-violet-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of intelligent autonomous systems that transform your operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
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
                Ready to Build Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of autonomous technology with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Building
                </button>
                <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
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