'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';

const AICodeGenerationPage: React.FC = () => {
  const features = [
    'Generate code from natural language descriptions',
    'Support for 50+ programming languages',
    'Intelligent bug detection and fixing',
    'Code optimization and performance tuning',
    'Automated documentation generation',
    'Unit test generation and validation',
    'Code review and quality analysis',
    'Refactoring suggestions and improvements',
    'API integration and endpoint generation',
    'Real-time code completion and suggestions'
  ];

  const benefits = [
    'Accelerate development by 300%',
    'Reduce coding errors by 80%',
    'Improve code quality and maintainability',
    'Enable non-programmers to create code',
    'Speed up debugging and testing',
    'Generate consistent, well-documented code',
    'Reduce development costs by 60%',
    'Enable rapid prototyping and MVP development'
  ];

  const languages = [
    { name: 'JavaScript', description: 'Web development and Node.js', icon: '🟨' },
    { name: 'Python', description: 'Data science and backend development', icon: '🐍' },
    { name: 'Java', description: 'Enterprise applications and Android', icon: '☕' },
    { name: 'C#', description: 'Microsoft ecosystem and .NET', icon: '🔷' },
    { name: 'Go', description: 'Cloud-native and microservices', icon: '🐹' },
    { name: 'Rust', description: 'Systems programming and performance', icon: '🦀' },
    { name: 'TypeScript', description: 'Type-safe JavaScript development', icon: '🔷' },
    { name: 'Swift', description: 'iOS and macOS development', icon: '🍎' }
  ];

  const useCases = [
    {
      title: 'Web Development',
      description: 'Generate full-stack web applications and APIs',
      icon: '🌐',
      examples: ['React components', 'Express APIs', 'Database schemas', 'Authentication systems']
    },
    {
      title: 'Mobile Development',
      description: 'Create mobile apps for iOS and Android',
      icon: '📱',
      examples: ['React Native apps', 'Flutter widgets', 'Native iOS code', 'Android components']
    },
    {
      title: 'Data Science',
      description: 'Generate data analysis and ML pipelines',
      icon: '📊',
      examples: ['Data processing scripts', 'ML models', 'Visualization code', 'ETL pipelines']
    },
    {
      title: 'DevOps & Automation',
      description: 'Create deployment and automation scripts',
      icon: '⚙️',
      examples: ['Docker configurations', 'CI/CD pipelines', 'Infrastructure code', 'Monitoring scripts']
    },
    {
      title: 'API Development',
      description: 'Generate RESTful APIs and microservices',
      icon: '🔌',
      examples: ['REST endpoints', 'GraphQL schemas', 'Database models', 'Authentication middleware']
    },
    {
      title: 'Testing & QA',
      description: 'Create comprehensive test suites and quality assurance',
      icon: '🧪',
      examples: ['Unit tests', 'Integration tests', 'E2E tests', 'Performance tests']
    }
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$99/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic language support',
        'Standard quality output',
        'Email support',
        'GitHub integration',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$299/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 5,000 code generations/month',
        'All language support',
        'High quality output',
        'Priority support',
        'Advanced integrations',
        'Team collaboration',
        'Code review tools',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'Premium quality output',
        'Dedicated support',
        'Custom model training',
        'API access',
        'White-label solution',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const technologies = [
    'GitHub Copilot', 'CodeT5', 'CodeBERT', 'Custom Code Models',
    'IDE Integration', 'Deep Learning', 'Natural Language Processing',
    'Code Analysis', 'Static Analysis', 'Machine Learning'
  ];

  const workflow = [
    {
      step: 1,
      title: 'Describe Your Code',
      description: 'Input natural language description of what you want to build',
      icon: '✍️'
    },
    {
      step: 2,
      title: 'AI Generation',
      description: 'Our AI generates clean, optimized code',
      icon: '🤖'
    },
    {
      step: 3,
      title: 'Review & Test',
      description: 'Review, test, and refine the generated code',
      icon: '👁️'
    },
    {
      step: 4,
      title: 'Deploy & Use',
      description: 'Integrate the code into your project',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Generation - Zion Tech Group</title>
        <meta name="description" content="Generate code with AI. Create applications, APIs, and scripts from natural language descriptions. Support for 50+ programming languages. Starting at $99/month." />
        <meta name="keywords" content="AI code generation, programming, code assistant, development tools, automated coding, software development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Revolutionary Coding Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Code Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate high-quality code from natural language descriptions. 
            Create applications, APIs, and scripts in any programming language with AI assistance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Fewer Errors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Code Generation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Code AI?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Supported Programming Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{language.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{language.name}</h3>
                <p className="text-gray-300 text-sm">{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Code Generation Plan`}
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

      {/* Technologies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Generate Code?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating high-quality code with our AI-powered generation technology.
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
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeGenerationPage;