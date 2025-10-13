'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiCodeAssistantPage: React.FC = () => {,
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate clean, efficient code from natural language descriptions with AI-powered suggestions.',
      benefits: ['Natural language to code', 'Code completion', 'Smart suggestions', 'Multi-language support']
    },
    {
      icon: Bug,
      title: 'Smart Debugging',
      description: 'Automatically detect and fix bugs, suggest optimizations, and improve code quality.',
      benefits: ['Bug detection', 'Auto-fix suggestions', 'Code optimization', 'Quality analysis']
    },
    {
      icon: Terminal,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more.',
      benefits: ['50+ languages', 'Syntax highlighting', 'Language-specific features', 'Cross-platform support']
    },
    {
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git, GitHub, and other version control systems.',
      benefits: ['Git integration', 'GitHub support', 'Branch management', 'Commit assistance']
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Learn from your coding patterns and provide personalized suggestions and improvements.',
      benefits: ['Pattern learning', 'Personalized suggestions', 'Code style adaptation', 'Continuous improvement']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Automatically scan code for security vulnerabilities and suggest secure coding practices.',
      benefits: ['Vulnerability scanning', 'Security recommendations', 'Best practices', 'Compliance checking']
    }
  ];

  const benefits = [
    'Increase coding speed by 70%',
    'Reduce bugs by 80%',
    'Improve code quality by 90%',
    'Lower development time by 60%',
    'Enable faster learning',
    'Automate repetitive tasks',
    'Scale development teams',
    'Enhance code security'
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Accelerate software development with AI-powered coding assistance',
      icon: '💻'
    },
    {
      title: 'Code Review',
      description: 'Automate code reviews and improve code quality with AI analysis',
      icon: '🔍'
    },
    {
      title: 'Learning & Training',
      description: 'Learn new programming languages and concepts with AI guidance',
      icon: '📚'
    },
    {
      title: 'Legacy Code Migration',
      description: 'Modernize legacy codebases with AI-powered refactoring tools',
      icon: '🔄'
    },
    {
      title: 'API Development',
      description: 'Build and document APIs faster with AI-generated code and documentation',
      icon: '🔌'
    },
    {
      title: 'Testing & QA',
      description: 'Generate comprehensive test cases and improve testing coverage',
      icon: '🧪'
    }
  ];

  return (
    <>
      <Helmet>
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']},
  ]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent code assistant powered by advanced AI technology." />
        <meta name="keywords" content="AI code assistant, artificial intelligence, code generation, AI solutions, intelligent programming" />
      </Helmet>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost your coding productivity with our AI Code Assistant. Intelligent code generation, 
              debugging, and optimization for faster, better software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Coding
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From individual developers to enterprise teams, our AI Code Assistant serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Code Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of software development with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Boost Your Coding?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of developers who are already using our AI Code Assistant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
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
  </>
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Code Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai code assistant solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          ))
        </div>
      </section>

{/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            ))

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              ))
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AiCodeAssistantPage;
