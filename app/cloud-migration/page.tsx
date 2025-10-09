'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Zap, BarChart, Brain, Users } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Zero-Downtime Migration',
      description: 'Seamlessly migrate your applications without any business disruption',
      benefits: ['99.9% uptime guarantee', 'Automated failover', 'Rollback capabilities']
    },
    {
      icon: Shield,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security throughout the migration process',
      benefits: ['End-to-end encryption', 'Compliance validation', 'Security audits']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your applications for cloud performance and cost efficiency',
      benefits: ['50% performance improvement', '40% cost reduction', 'Auto-scaling']
    },
    {
      icon: BarChart,
      title: 'Cost Analysis',
      description: 'Comprehensive cost analysis and optimization recommendations',
      benefits: ['ROI calculations', 'Cost forecasting', 'Resource optimization']
    },
    {
      icon: Brain,
      title: 'AI-Powered Migration',
      description: 'Intelligent migration planning and execution using AI',
      benefits: ['Automated planning', 'Risk assessment', 'Optimization suggestions']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated migration team with 24/7 support throughout the process',
      benefits: ['24/7 expert support', 'Dedicated project manager', 'Training included']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment and migration plan',
      features: [
        'Current infrastructure audit',
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost analysis',
        'Risk assessment',
        'Timeline planning'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$15,999',
      period: 'project',
      description: 'Complete migration for small to medium businesses',
      features: [
        'Up to 20 servers',
        'Database migration',
        'Application migration',
        'Security configuration',
        'Performance optimization',
        '30 days support',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'pricing',
      description: 'Large-scale migration for enterprise organizations',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee',
        'Ongoing optimization',
        'White-glove service'
      ],
      popular: false
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      icon: '☁️',
      features: ['EC2, S3, RDS', 'Lambda functions', 'Auto Scaling Groups'],
      benefits: ['Market leader', 'Extensive services', 'Global infrastructure']
    },
    {
      name: 'Microsoft Azure',
      icon: '🔵',
      features: ['Virtual Machines', 'Azure SQL', 'App Services'],
      benefits: ['Enterprise integration', 'Hybrid cloud', 'Windows optimization']
    },
    {
      name: 'Google Cloud Platform',
      icon: '🔍',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery'],
      benefits: ['AI/ML services', 'Data analytics', 'Cost efficiency']
    },
    {
      name: 'Multi-Cloud',
      icon: '🌐',
      features: ['Cross-platform', 'Vendor independence', 'Risk mitigation'],
      benefits: ['Avoid vendor lock-in', 'Best of breed', 'Disaster recovery']
    }
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Analyze current infrastructure and create detailed migration strategy',
      duration: '1-2 weeks',
      deliverables: ['Infrastructure audit', 'Migration plan', 'Risk assessment']
    },
    {
      step: '2',
      title: 'Pre-Migration Setup',
      description: 'Prepare cloud environment and configure security settings',
      duration: '1-2 weeks',
      deliverables: ['Cloud environment setup', 'Security configuration', 'Monitoring setup']
    },
    {
      step: '3',
      title: 'Data Migration',
      description: 'Migrate databases and data with zero data loss',
      duration: '1-3 weeks',
      deliverables: ['Database migration', 'Data validation', 'Backup verification']
    },
    {
      step: '4',
      title: 'Application Migration',
      description: 'Migrate applications and configure cloud services',
      duration: '2-4 weeks',
      deliverables: ['Application migration', 'Service configuration', 'Performance tuning']
    },
    {
      step: '5',
      title: 'Testing & Validation',
      description: 'Comprehensive testing and performance validation',
      duration: '1-2 weeks',
      deliverables: ['Functionality testing', 'Performance testing', 'Security validation']
    },
    {
      step: '6',
      title: 'Go-Live & Support',
      description: 'Cutover to cloud and provide ongoing support',
      duration: 'Ongoing',
      deliverables: ['Production cutover', 'Monitoring setup', 'Support handover']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Platform',
      description: 'Migrate high-traffic e-commerce site to cloud for better scalability',
      icon: '🛒',
      metrics: ['99.9% uptime', '50% faster load times', '40% cost reduction']
    },
    {
      title: 'SaaS Application',
      description: 'Move SaaS platform to cloud for global scalability and reliability',
      icon: '💻',
      metrics: ['Global deployment', 'Auto-scaling', '60% performance boost']
    },
    {
      title: 'Enterprise Systems',
      description: 'Migrate legacy enterprise systems to modern cloud infrastructure',
      icon: '🏢',
      metrics: ['Modern infrastructure', 'Enhanced security', '30% operational savings']
    },
    {
      title: 'Data Analytics',
      description: 'Move data warehouse to cloud for better analytics capabilities',
      icon: '📊',
      metrics: ['Unlimited scalability', 'Real-time analytics', '50% faster insights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Get Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven 6-step process that ensures successful cloud migration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-blue-600 font-semibold mb-2">Duration: {step.duration}</div>
                <ul className="space-y-1">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Major Cloud Providers
            </h2>
            <p className="text-xl text-gray-600">
              We work with all leading cloud platforms to find the best fit for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{provider.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{provider.name}</h3>
                <ul className="space-y-2 mb-4">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-blue-600 font-semibold">
                  {provider.benefits.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Migration Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert migration services with proven results and comprehensive support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the migration package that fits your infrastructure size and complexity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses transform with cloud migration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free assessment and migration plan for your infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigrationPage;