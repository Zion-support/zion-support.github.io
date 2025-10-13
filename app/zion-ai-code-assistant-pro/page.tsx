import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Shield, Brain, Terminal, Sparkles, BarChart3, Globe, Smartphone } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionAICodeAssistantPro = () => {
  const features = [
    {
      title: "AI Code Generation",
      description: "Generate code from natural language descriptions using advanced AI models",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Code Review & Optimization",
      description: "Automatically review code for bugs, performance issues, and best practices",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ programming languages including Python, JavaScript, Java, C++, and more",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time with live code sharing and editing",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$39",
      period: "/month",
      description: "Perfect for individual developers",
      features: [
        "1000 code generations per month",
        "Basic code review",
        "10 programming languages",
        "Standard support",
        "Git integration"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Ideal for development teams",
      features: [
        "5000 code generations per month",
        "Advanced code review",
        "All programming languages",
        "Real-time collaboration",
        "Priority support",
        "Team management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited code generations",
        "AI-powered architecture suggestions",
        "Custom AI models",
        "API access",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Code Generation",
      description: "Generate complete functions, classes, and entire applications from natural language",
      icon: <Terminal className="w-8 h-8" />
    },
    {
      title: "Bug Detection",
      description: "Identify potential bugs, security vulnerabilities, and performance issues",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Code Refactoring",
      description: "Automatically refactor code to improve readability and maintainability",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Documentation",
      description: "Generate comprehensive documentation and comments for your code",
      icon: <Code className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Code Assistant Pro - AI-Powered Code Generation & Review | Zion Tech Group"
        description="Boost your coding productivity with our AI code assistant. Generate code, review for bugs, and optimize performance. Support for 50+ languages. Starting from $39/month."
        keywords="AI code assistant, code generation, code review, programming AI, developer tools, code optimization, automated coding"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-code-assistant-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">AI-Powered Development Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Code Assistant Pro
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your coding experience with our AI-powered code assistant. 
              Generate code, detect bugs, optimize performance, and collaborate with your team in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
                <Terminal className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-400">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Development Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to accelerate your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI understands context, patterns, and best practices to help you write better code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Development Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for developers of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-gray-700'
              } hover:border-blue-500/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                    : 'border border-blue-500 text-blue-400 hover:bg-blue-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Coding?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who are already using Zion AI Code Assistant Pro to write better code faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICodeAssistantPro;