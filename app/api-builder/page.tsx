import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Code, Target, BarChart, Zap, Users } from 'lucide-react';

const APIBuilderPage: React.FC = () => {
  const apiFeatures = [
    {
      title: 'AI API Generation',
      description: 'Generate RESTful APIs, GraphQL endpoints, and microservices using AI.',
      icon: '🤖',
      benefits: [
        'REST API generation',
        'GraphQL endpoints',
        'Microservices creation',
        'Database integration'
      ]
    },
    {
      title: 'Code Generation',
      description: 'Automatically generate API code in multiple programming languages.',
      icon: '💻',
      benefits: [
        'Multi-language support',
        'Framework integration',
        'Code templates',
        'Best practices'
      ]
    },
    {
      title: 'API Documentation',
      description: 'Automatically generate comprehensive API documentation and examples.',
      icon: '📚',
      benefits: [
        'Auto-documentation',
        'Interactive docs',
        'Code examples',
        'Testing guides'
      ]
    },
    {
      title: 'Testing & Validation',
      description: 'Built-in API testing, validation, and performance monitoring.',
      icon: '🧪',
      benefits: [
        'Unit testing',
        'Integration testing',
        'Performance testing',
        'Load testing'
      ]
    },
    {
      title: 'Security & Authentication',
      description: 'Built-in security features and authentication mechanisms.',
      icon: '🔒',
      benefits: [
        'JWT authentication',
        'OAuth integration',
        'Rate limiting',
        'Security scanning'
      ]
    },
    {
      title: 'Deployment & Monitoring',
      description: 'One-click deployment and comprehensive API monitoring.',
      icon: '🚀',
      benefits: [
        'Cloud deployment',
        'API monitoring',
        'Analytics dashboard',
        'Error tracking'
      ]
    }
  ];

  const apiTypes = [
    {
      type: 'REST APIs',
      description: 'RESTful web services and endpoints',
      price: '$59/month',
      features: ['CRUD operations', 'HTTP methods', 'JSON responses', 'Error handling']
    },
    {
      type: 'GraphQL APIs',
      description: 'GraphQL schema and resolvers',
      price: '$69/month',
      features: ['Schema generation', 'Resolvers', 'Queries/Mutations', 'Subscriptions']
    },
    {
      type: 'Microservices',
      description: 'Distributed microservices architecture',
      price: '$89/month',
      features: ['Service discovery', 'Load balancing', 'Inter-service communication', 'Monitoring']
    },
    {
      type: 'WebSocket APIs',
      description: 'Real-time communication APIs',
      price: '$79/month',
      features: ['Real-time updates', 'Connection management', 'Message handling', 'Scaling']
    },
    {
      type: 'Serverless APIs',
      description: 'Serverless function-based APIs',
      price: '$49/month',
      features: ['Function deployment', 'Event triggers', 'Auto-scaling', 'Cost optimization']
    },
    {
      type: 'Custom APIs',
      description: 'Fully customized API solutions',
      price: '$99/month',
      features: ['Custom requirements', 'Specialized protocols', 'Enterprise features', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$59/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        'Up to 5 APIs',
        'Basic AI features',
        'Standard documentation',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$149/month',
      description: 'Advanced features for development teams',
      features: [
        'Up to 25 APIs',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'Complete API development solution for large organizations',
      features: [
        'Unlimited APIs',
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
        <title>AI API Builder - Zion Tech Group</title>
        <meta name="description" content="AI-powered API builder with code generation, documentation, testing, and deployment. Create robust APIs effortlessly." />
        <meta name="keywords" content="ai api builder, api development, rest api, graphql, microservices, api documentation, api testing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI API Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered API builder with code generation, documentation, testing, and deployment. Create robust APIs effortlessly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Auto</div>
              <div className="text-gray-300">Documentation</div>
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
            AI-Powered API Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
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

      {/* API Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            API Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiTypes.map((api, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{api.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{api.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{api.price}</div>
                </div>
                <ul className="space-y-2">
                  {api.features.map((feature, featureIndex) => (
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
            Why Choose AI API Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Generation</h3>
              <p className="text-gray-300">AI understands your requirements and generates clean, efficient API code that follows best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Development</h3>
              <p className="text-gray-300">Build and deploy APIs in minutes, not hours. Focus on business logic while AI handles the boilerplate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Production Ready</h3>
              <p className="text-gray-300">Generated APIs include testing, documentation, security, and monitoring for production deployment.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI API Builder Plan`}
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
            Ready to Build Powerful APIs?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you create robust, well-documented APIs in minutes. Start building with AI assistance today.
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

export default APIBuilderPage;