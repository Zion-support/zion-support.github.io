import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, GitBranch, Server, AlertTriangle, PieChart, Activity, Code } from 'lucide-react';

const AIDevOpsAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Code Analysis',
      description: 'Intelligent code review and analysis that identifies bugs, security vulnerabilities, and performance issues before deployment.',
      benefits: ['90% bug reduction', '60% faster code review', 'Enhanced security']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Intelligent CI/CD Pipelines',
      description: 'AI-driven continuous integration and deployment that automatically optimizes build times and deployment strategies.',
      benefits: ['50% faster deployments', 'Zero-downtime releases', 'Automated rollbacks']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Smart Infrastructure Management',
      description: 'AI-powered infrastructure monitoring and optimization that automatically scales resources and prevents failures.',
      benefits: ['99.9% uptime', '40% cost reduction', 'Proactive scaling']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Predictive Incident Management',
      description: 'AI-driven incident prediction and automated response that prevents outages before they occur.',
      benefits: ['80% fewer incidents', 'Faster resolution', 'Proactive monitoring']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Continuous performance monitoring and optimization using AI to ensure optimal application performance.',
      benefits: ['30% performance improvement', 'Real-time optimization', 'Cost efficiency']
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Automated Testing & QA',
      description: 'AI-powered test generation and execution that ensures comprehensive coverage and quality assurance.',
      benefits: ['95% test coverage', 'Automated test creation', 'Faster QA cycles']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 repositories',
        'Basic AI code analysis',
        'Standard CI/CD pipelines',
        'Basic monitoring',
        'Email support',
        'GitHub integration',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 repositories',
        'Advanced AI features',
        'Custom CI/CD workflows',
        'Advanced monitoring & alerting',
        'Priority support',
        'Multi-cloud support',
        'Custom integrations',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499/month',
      description: 'For large organizations',
      features: [
        'Unlimited repositories',
        'Full AI suite',
        'Custom AI model training',
        '24/7 dedicated support',
        'Advanced security & compliance',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Streamline development workflows with AI-powered code analysis, automated testing, and intelligent deployment.',
      icon: '💻',
      benefits: ['Faster development', 'Higher quality code', 'Reduced bugs']
    },
    {
      title: 'E-commerce Platforms',
      description: 'Ensure high availability and performance with AI-driven monitoring, auto-scaling, and incident prevention.',
      icon: '🛒',
      benefits: ['99.9% uptime', 'Better performance', 'Cost optimization']
    },
    {
      title: 'Financial Services',
      description: 'Maintain security and compliance with AI-powered security scanning, automated compliance checks, and audit trails.',
      icon: '💰',
      benefits: ['Enhanced security', 'Compliance automation', 'Audit readiness']
    },
    {
      title: 'Healthcare Systems',
      description: 'Ensure reliability and security with AI-driven monitoring, automated backups, and compliance management.',
      icon: '🏥',
      benefits: ['HIPAA compliance', 'High availability', 'Data protection']
    }
  ];

  const benefits = [
    {
      title: 'Deployment Speed',
      description: 'Deploy 10x faster with AI-powered automation',
      icon: '⚡',
      value: '10x'
    },
    {
      title: 'Uptime',
      description: 'Achieve 99.9% uptime with predictive monitoring',
      icon: '🔄',
      value: '99.9%'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by 40% through optimization',
      icon: '💰',
      value: '40%'
    },
    {
      title: 'Security',
      description: 'Prevent 95% of security issues with AI detection',
      icon: '🛡️',
      value: '95%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI DevOps Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Revolutionize your DevOps with AI-powered CI/CD pipelines, intelligent monitoring, and automated infrastructure management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered DevOps Features
            </h2>
            <p className="text-xl text-gray-600">
              Transform your development and operations with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-orange-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              See the measurable impact of AI on DevOps operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for teams of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600">
              See how different industries benefit from AI DevOps automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact us today for a free consultation and custom AI DevOps solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-orange-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevOpsAutomationPage;