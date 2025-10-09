import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, FileText, Target, BarChart, Zap, Users } from 'lucide-react';

const DocGeneratorPage: React.FC = () => {
  const docFeatures = [
    {
      title: 'AI Documentation Generation',
      description: 'Automatically generate comprehensive documentation from code and specifications.',
      icon: '🤖',
      benefits: [
        'Code analysis',
        'Auto-documentation',
        'API documentation',
        'User guides'
      ]
    },
    {
      title: 'Multi-Format Support',
      description: 'Generate documentation in multiple formats including PDF, HTML, and Markdown.',
      icon: '📄',
      benefits: [
        'PDF generation',
        'HTML output',
        'Markdown support',
        'Custom formats'
      ]
    },
    {
      title: 'Template Library',
      description: 'Extensive library of documentation templates for various project types.',
      icon: '📋',
      benefits: [
        '100+ templates',
        'Industry-specific',
        'Customizable layouts',
        'Brand integration'
      ]
    },
    {
      title: 'Collaborative Editing',
      description: 'Real-time collaborative editing and review tools for documentation teams.',
      icon: '👥',
      benefits: [
        'Real-time editing',
        'Comment system',
        'Version control',
        'Team management'
      ]
    },
    {
      title: 'Version Control',
      description: 'Built-in version control and change tracking for documentation.',
      icon: '📚',
      benefits: [
        'Version history',
        'Change tracking',
        'Diff comparison',
        'Rollback capability'
      ]
    },
    {
      title: 'Search & Navigation',
      description: 'Advanced search and navigation features for easy document access.',
      icon: '🔍',
      benefits: [
        'Full-text search',
        'Table of contents',
        'Cross-references',
        'Quick navigation'
      ]
    }
  ];

  const docTypes = [
    {
      type: 'API Documentation',
      description: 'Comprehensive API documentation and reference',
      price: '$19/month',
      features: ['Endpoint docs', 'Code examples', 'Interactive docs', 'Testing guides']
    },
    {
      type: 'User Manuals',
      description: 'User guides and instruction manuals',
      price: '$29/month',
      features: ['Step-by-step guides', 'Screenshots', 'Video integration', 'Multi-language']
    },
    {
      type: 'Technical Docs',
      description: 'Technical documentation and specifications',
      price: '$39/month',
      features: ['Architecture docs', 'Specifications', 'Diagrams', 'Code references']
    },
    {
      type: 'Project Documentation',
      description: 'Project documentation and reports',
      price: '$25/month',
      features: ['Project plans', 'Progress reports', 'Meeting notes', 'Status updates']
    },
    {
      type: 'Training Materials',
      description: 'Training documentation and educational content',
      price: '$35/month',
      features: ['Training guides', 'Quizzes', 'Certificates', 'Progress tracking']
    },
    {
      type: 'Custom Documentation',
      description: 'Fully customized documentation solutions',
      price: '$49/month',
      features: ['Custom templates', 'Specialized formats', 'Enterprise features', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Writer',
      price: '$19/month',
      description: 'Perfect for individual writers and small projects',
      features: [
        'Up to 50 documents',
        'Basic AI features',
        'Standard templates',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$79/month',
      description: 'Advanced features for documentation teams',
      features: [
        'Up to 500 documents',
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
      price: '$199/month',
      description: 'Complete documentation solution for large organizations',
      features: [
        'Unlimited documents',
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
        <title>AI Doc Generator - Zion Tech Group</title>
        <meta name="description" content="AI-powered documentation generator with multi-format support, templates, and collaborative editing. Create professional docs effortlessly." />
        <meta name="keywords" content="ai doc generator, documentation generator, api docs, user manuals, technical docs, doc automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Doc Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered documentation generator with multi-format support, templates, and collaborative editing. Create professional docs effortlessly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Templates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Multi-Format</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Generation</div>
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
            AI-Powered Documentation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docFeatures.map((feature, index) => (
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

      {/* Doc Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Documentation Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docTypes.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{doc.price}</div>
                </div>
                <ul className="space-y-2">
                  {doc.features.map((feature, featureIndex) => (
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
            Why Choose AI Doc Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Generation</h3>
              <p className="text-gray-300">AI analyzes your code and specifications to generate comprehensive, accurate documentation automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Format Support</h3>
              <p className="text-gray-300">Generate documentation in multiple formats including PDF, HTML, and Markdown for maximum compatibility.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Quality</h3>
              <p className="text-gray-300">Generate professional-quality documentation that meets industry standards and best practices.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Doc Generator Plan`}
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
            Ready to Generate Professional Documentation?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you create comprehensive, professional documentation in minutes. Start generating docs with AI assistance today.
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

export default DocGeneratorPage;