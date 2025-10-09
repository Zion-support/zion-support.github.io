import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Code, BarChart, Users, Shield, Clock, DollarSign } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated refactoring.',
      icon: '🤖',
      category: 'Developer Tools',
      price: '$29/month',
      features: [
        'Real-time code suggestions',
        'Automated bug detection',
        'Code refactoring assistance',
        'Multi-language support',
        'Git integration',
        'Performance optimization tips'
      ],
      benefits: 'Save 40% development time',
      popular: true,
      link: '/developer-tools'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and automated reporting.',
      icon: '📊',
      category: 'Analytics Tools',
      price: '$49/month',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Automated reports',
        'Custom dashboards',
        'Data export capabilities',
        'Team collaboration tools'
      ],
      benefits: 'Make data-driven decisions 3x faster',
      popular: true,
      link: '/analytics-tools'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content 10x faster with our advanced AI writing platform.',
      icon: '✍️',
      category: 'Marketing Tools',
      price: '$19/month',
      features: [
        '50+ content templates',
        'SEO optimization',
        'Brand voice training',
        'Multi-language support',
        'Plagiarism detection',
        'Social media scheduling'
      ],
      benefits: 'Generate 100+ articles per month',
      popular: true,
      link: '/marketing-tools'
    },
    {
      title: 'Smart CRM Suite',
      description: 'AI-powered customer relationship management with automated lead scoring and follow-ups.',
      icon: '👥',
      category: 'CRM Solutions',
      price: '$39/month',
      features: [
        'Automated lead scoring',
        'Smart follow-up reminders',
        'Email automation',
        'Sales pipeline tracking',
        'Customer segmentation',
        'Integration with 100+ tools'
      ],
      benefits: 'Increase sales by 35%',
      link: '/crm-solutions'
    },
    {
      title: 'Project Management AI',
      description: 'Intelligent project management with automated task assignment and deadline optimization.',
      icon: '📋',
      category: 'Project Management',
      price: '$25/month',
      features: [
        'AI task assignment',
        'Deadline optimization',
        'Resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Risk assessment'
      ],
      benefits: 'Complete projects 30% faster',
      link: '/project-management'
    },
    {
      title: 'HR Management Pro',
      description: 'Complete HR solution with AI-powered recruitment and employee performance tracking.',
      icon: '👨‍💼',
      category: 'HR Management',
      price: '$35/month',
      features: [
        'AI resume screening',
        'Interview scheduling',
        'Performance tracking',
        'Employee onboarding',
        'Payroll integration',
        'Compliance management'
      ],
      benefits: 'Reduce hiring time by 50%',
      link: '/hr-management'
    },
    {
      title: 'Communication Hub',
      description: 'Unified communication platform with AI-powered meeting summaries and smart notifications.',
      icon: '💬',
      category: 'Communication Tools',
      price: '$15/month',
      features: [
        'AI meeting summaries',
        'Smart notifications',
        'Video conferencing',
        'File sharing',
        'Team chat',
        'Integration with calendars'
      ],
      benefits: 'Improve team productivity by 25%',
      link: '/communication-tools'
    },
    {
      title: 'Business App Builder',
      description: 'No-code platform to build custom business applications with AI assistance.',
      icon: '🏗️',
      category: 'Business Apps',
      price: '$59/month',
      features: [
        'Drag-and-drop builder',
        'AI-powered suggestions',
        'Database integration',
        'API connections',
        'Mobile app generation',
        'Cloud deployment'
      ],
      benefits: 'Build apps 10x faster than traditional methods',
      link: '/business-apps'
    },
    {
      title: 'Productivity Booster',
      description: 'AI-powered productivity suite that learns your work patterns and optimizes your schedule.',
      icon: '⚡',
      category: 'Productivity Tools',
      price: '$12/month',
      features: [
        'Smart scheduling',
        'Focus time optimization',
        'Distraction blocking',
        'Habit tracking',
        'Goal setting',
        'Progress analytics'
      ],
      benefits: 'Increase personal productivity by 40%',
      link: '/productivity-tools'
    }
  ];

  const categories = [
    { name: 'Developer Tools', icon: Code, count: 15, color: 'text-blue-600' },
    { name: 'Analytics Tools', icon: BarChart, count: 12, color: 'text-green-600' },
    { name: 'Marketing Tools', icon: Zap, count: 18, color: 'text-purple-600' },
    { name: 'CRM Solutions', icon: Users, count: 8, color: 'text-orange-600' },
    { name: 'Project Management', icon: CheckCircle, count: 10, color: 'text-indigo-600' },
    { name: 'HR Management', icon: Shield, count: 6, color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Powerful, affordable AI-driven tools designed for modern businesses. 
              Start with any tool and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View All Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Category
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive collection of micro SAAS tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <category.icon className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} tools</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Micro SAAS Tools
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked tools that deliver real business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.category}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-green-600 mb-2">{service.benefits}</div>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $29<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  3 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard Features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email Support
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $79<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited Tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                Custom<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Everything in Professional
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Dedicated Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  On-premise Deployment
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <p className="text-xl text-purple-100">
              Built for modern businesses that need powerful, affordable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
              <p className="text-purple-100">Get started in minutes, not hours. No complex installations required.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-purple-100">Start from just $12/month. Scale as you grow without breaking the bank.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-purple-100">Leverage cutting-edge AI to automate tasks and boost productivity.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-purple-100">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using our micro SAAS tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
