import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Database } from 'lucide-react';const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Advanced task management with AI-powered insights and team collaboration',
      longDescription: 'Streamline your workflow with our intelligent task management platform that adapts to your team\'s needs.',
      features: [
        'AI-powered task prioritization',
        'Team collaboration tools',
        'Time tracking & analytics',
        'Custom workflows',
        'Mobile app included',
        'API integration',
        'Advanced reporting',
        'Cloud synchronization'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce project delays by 60%',
        'Improve team coordination',
        'Real-time progress tracking'
      ],
      category: 'Productivity',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      popular: true
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      price: '$39/mo',
      originalPrice: '$69/mo',
      description: 'Comprehensive business analytics with real-time insights and custom reports',
      longDescription: 'Transform your data into actionable insights with our powerful analytics platform designed for small to medium businesses.',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Automated report generation',
        'Data export capabilities',
        'Multi-source integration',
        'Predictive analytics',
        'Mobile-responsive design',
        'White-label options'
      ],
      benefits: [
        'Make data-driven decisions',
        'Save 10+ hours weekly on reporting',
        'Identify growth opportunities',
        'Improve business performance'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      popular: false
    },
    {
      id: 'customer-support-hub',
      name: 'Customer Support Hub',
      price: '$49/mo',
      originalPrice: '$89/mo',
      description: 'All-in-one customer support platform with AI chatbot and ticket management',
      longDescription: 'Deliver exceptional customer service with our comprehensive support platform featuring AI-powered assistance and streamlined ticket management.',
      features: [
        'AI-powered chatbot',
        'Multi-channel support',
        'Ticket management system',
        'Knowledge base builder',
        'Customer satisfaction surveys',
        'Live chat integration',
        'Performance analytics',
        'Team collaboration tools'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response times by 80%',
        'Increase customer satisfaction',
        'Scale support operations'
      ],
      category: 'Customer Service',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      popular: true
    },
    {
      id: 'inventory-manager',
      name: 'Inventory Manager',
      price: '$35/mo',
      originalPrice: '$59/mo',
      description: 'Smart inventory management with automated reordering and demand forecasting',
      longDescription: 'Optimize your inventory with our intelligent management system that predicts demand and automates reordering processes.',
      features: [
        'Automated reorder points',
        'Demand forecasting',
        'Multi-location tracking',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting & analytics',
        'Mobile accessibility'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 30%',
        'Improve cash flow',
        'Streamline operations'
      ],
      category: 'Inventory',
      icon: <Database className="w-8 h-8 text-orange-400" />,
      popular: false
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      price: '$25/mo',
      originalPrice: '$45/mo',
      description: 'Schedule and manage social media posts across multiple platforms with AI optimization',
      longDescription: 'Boost your social media presence with our intelligent scheduling platform that optimizes posting times and content for maximum engagement.',
      features: [
        'Multi-platform scheduling',
        'AI-optimized posting times',
        'Content calendar',
        'Hashtag suggestions',
        'Analytics & insights',
        'Team collaboration',
        'Content library',
        'Automated responses'
      ],
      benefits: [
        'Increase engagement by 65%',
        'Save 15+ hours weekly',
        'Improve content strategy',
        'Grow social following'
      ],
      category: 'Marketing',
      icon: <div className="w-6 h-6 bg-indigo-500 rounded" />,
      popular: false
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker Pro',
      price: '$19/mo',
      originalPrice: '$35/mo',
      description: 'Automated expense tracking with receipt scanning and tax preparation features',
      longDescription: 'Simplify expense management with our intelligent tracking system that automatically categorizes expenses and prepares tax-ready reports.',
      features: [
        'Receipt scanning (OCR)',
        'Automatic categorization',
        'Tax preparation tools',
        'Multi-currency support',
        'Expense approval workflows',
        'Integration with accounting software',
        'Mobile receipt capture',
        'Compliance reporting'
      ],
      benefits: [
        'Save 8+ hours monthly on expense management',
        'Reduce errors by 90%',
        'Simplify tax preparation',
        'Improve financial visibility'
      ],
      category: 'Finance',
      icon: <Target className="w-8 h-8 text-red-400" />,
      popular: true
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19/mo',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 3 micro SAAS products',
        'Basic support',
        'Standard integrations',
        'Mobile apps included',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 micro SAAS products',
        'Priority support',
        'Advanced integrations',
        'Custom branding',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99/mo',
      description: 'For large organizations',
      features: [
        'Unlimited micro SAAS products',
        '24/7 dedicated support',
        'Custom development',
        'White-label solutions',
        'Advanced security',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (<>
      <Helmet>
        <title>Micro SAAS Solutions - Innovative Software for Modern Businesses | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions designed to streamline business operations. From task management to analytics, find the perfect tools for your business." />
        <meta name="keywords" content="micro SAAS, business software, _productivity tools, _analytics, _customer support, _inventory management, _social media scheduling, expense tracking" />
        <meta property="og:title" content="Micro SAAS Solutions - Innovative Software for Modern Businesses" />
        <meta property="og:description" content="Discover our comprehensive micro SAAS solutions designed to streamline business operations." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS Solutions
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our collection of powerful micro SAAS applications designed to solve specific business challenges 
              and boost productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Get Started
                <div className="w-6 h-6 bg-blue-500 rounded" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted micro SAAS applications, each designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className={`bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group relative ${
                product.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <span className="text-sm text-purple-400 font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-purple-400">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {product.features.length > 5 && (
                    <li className="text-sm text-purple-400 font-medium">
                      +{product.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <Link
                    to={`/${product.id}`}
                    className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-purple-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
            boost productivity, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;