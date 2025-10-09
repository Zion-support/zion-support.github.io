import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Code, Target, BarChart, Zap, Users } from 'lucide-react';

const CodeAssistantPage: React.FC = () => {
  const codeFeatures = [
    {
      title: 'AI Code Generation',
      description: 'Generate code snippets, functions, and complete modules using AI.',
      icon: '🤖',
      benefits: [
        'Code completion',
        'Function generation',
        'Bug fixing',
        'Code optimization'
      ]
    },
    {
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages and frameworks.',
      icon: '🌐',
      benefits: [
        '50+ languages',
        'Framework support',
        'Syntax highlighting',
        'Language-specific features'
      ]
    },
    {
      title: 'Intelligent Debugging',
      description: 'AI-powered debugging and error detection with solutions.',
      icon: '🐛',
      benefits: [
        'Error detection',
        'Debug suggestions',
        'Performance analysis',
        'Security scanning'
      ]
    },
    {
      title: 'Code Review',
      description: 'Automated code review with best practices and suggestions.',
      icon: '👀',
      benefits: [
        'Code quality analysis',
        'Best practices',
        'Security checks',
        'Performance optimization'
      ]
    },
    {
      title: 'Documentation Generation',
      description: 'Automatically generate documentation and comments for your code.',
      icon: '📚',
      benefits: [
        'Auto-documentation',
        'Comment generation',
        'API documentation',
        'Code examples'
      ]
    },
    {
      title: 'Team Collaboration',
      description: 'Real-time collaboration and code sharing with team members.',
      icon: '👥',
      benefits: [
        'Real-time editing',
        'Code sharing',
        'Version control',
        'Team management'
      ]
    }
  ];

  const codeTypes = [
    {
      type: 'Web Development',
      description: 'Frontend and backend web development assistance',
      price: '$39/month',
      features: ['HTML/CSS/JS', 'React/Vue/Angular', 'Node.js/Python', 'Database integration']
    },
    {
      type: 'Mobile Development',
      description: 'iOS and Android app development support',
      price: '$49/month',
      features: ['Swift/Kotlin', 'React Native', 'Flutter', 'App store optimization']
    },
    {
      type: 'Data Science',
      description: 'Data analysis and machine learning code assistance',
      price: '$59/month',
      features: ['Python/R', 'Pandas/NumPy', 'TensorFlow/PyTorch', 'Data visualization']
    },
    {
      type: 'DevOps',
      description: 'Infrastructure and deployment automation',
      price: '$45/month',
      features: ['Docker/Kubernetes', 'CI/CD pipelines', 'Cloud deployment', 'Monitoring']
    },
    {
      type: 'Game Development',
      description: 'Game development and graphics programming',
      price: '$55/month',
      features: ['Unity/Unreal', 'C#/C++', 'Graphics programming', 'Game physics']
    },
    {
      type: 'Custom Development',
      description: 'Specialized development for specific requirements',
      price: '$79/month',
      features: ['Custom languages', 'Specialized frameworks', 'Enterprise tools', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$39/month',
      description: 'Perfect for individual developers and freelancers',
      features: [
        'Up to 10 projects',
        'Basic AI features',
        'Code generation',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99/month',
      description: 'Advanced features for development teams',
      features: [
        'Up to 50 projects',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom models'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete development solution for large organizations',
      features: [
        'Unlimited projects',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered code assistant with intelligent code generation, debugging, and multi-language support. Boost your development productivity." />
        <meta name="keywords" content="ai code assistant, code generation, debugging, programming assistance, code review, development tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Code Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered code assistant with intelligent code generation, debugging, and multi-language support. Boost your development productivity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Assistance</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Code Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Development Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeTypes.map((code, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{code.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{code.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{code.price}</div>
                </div>
                <ul className="space-y-2">
                  {code.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Code Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Code Generation</h3>
              <p className="text-gray-300">AI understands your requirements and generates clean, efficient code that follows best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Language Support</h3>
              <p className="text-gray-300">Support for 50+ programming languages and frameworks for any development project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Productivity Boost</h3>
              <p className="text-gray-300">AI assistance helps you write better code faster, reducing development time and improving quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Code Assistant Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Boost Your Development Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you write better code faster. Start coding with AI assistance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeAssistantPage;