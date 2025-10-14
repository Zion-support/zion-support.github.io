
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Shield, Zap, CheckCircle, ArrowRight, Database, Clock, Target } from 'lucide-react';
import Layout from '../layout';

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security protocols throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Fast Migration',
      description: 'Accelerated migration timelines with automated tools and processes'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Migration',
      description: 'Safe and secure migration of databases and data warehouses'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock support during and after migration'
    },
    {
      icon: <Target className="w-6 h-6 text-pink-400" />,
      title: 'Custom Solutions',
      description: 'Tailored migration strategies for your specific business needs'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and requirements'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed migration strategy and timeline development'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Seamless execution of the migration with minimal downtime'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Post-migration optimization and performance tuning'
    }
  ];

  const migrationFeatures = [
    {
      category: 'Migration Types',
      items: ['Lift & Shift', 'Replatforming', 'Refactoring', 'Hybrid Cloud', 'Multi-Cloud', 'Cloud-to-Cloud']
    },
    {
      category: 'Platforms',
      items: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Private Cloud', 'Hybrid Solutions', 'Multi-Cloud']
    },
    {
      category: 'Services',
      items: ['Application Migration', 'Database Migration', 'Data Migration', 'Workload Migration', 'Legacy Modernization', 'Cloud Native Development']
    },
    {
      category: 'Support',
      items: ['24/7 Monitoring', 'Migration Support', 'Training & Documentation', 'Post-Migration Support', 'Performance Optimization', 'Cost Optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small applications',
      features: [
        'Up to 5 applications',
        'Basic migration support',
        'Email support',
        'Standard security',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$7,999',
      period: '/project',
      description: 'Ideal for medium businesses',
      features: [
        'Up to 20 applications',
        'Advanced migration tools',
        '24/7 phone support',
        'Enhanced security',
        '90-day warranty',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$19,999',
      period: '/project',
      description: 'For large organizations',
      features: [
        'Unlimited applications',
        'Custom migration strategy',
        'Dedicated support team',
        'Enterprise security',
        '1-year warranty',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime. Expert migration to AWS, Azure, Google Cloud with enterprise-grade security." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your applications and data to the cloud with zero downtime. 
                Our expert team ensures a smooth transition with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Migration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive cloud migration solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Migration Process Section */}
        <div className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 4-step process that ensures successful cloud migration
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Migration Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Migration Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive migration services for all your cloud needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationFeatures.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Migration Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for cloud migration services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-400 text-black text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a free migration assessment and discover how we can help you move to the cloud seamlessly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CloudMigrationProPage;