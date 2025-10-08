import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI-Powered Social Media Manager',
      description: 'Automated social media posting, engagement, and analytics with AI-generated content and optimal timing.',
      icon: '📱',
      price: '$79/month',
      originalPrice: '$199/month',
      features: [
        'AI-generated posts for all platforms',
        'Optimal posting time detection',
        'Hashtag optimization',
        'Engagement analytics',
        'Content calendar automation',
        'Brand voice consistency',
        'Competitor analysis',
        'Multi-platform scheduling'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Increase engagement by 300%',
        'Grow followers by 150%',
        'Reduce social media costs by 60%'
      ],
      category: 'Marketing',
      popular: true,
      freeTrial: '14 days',
      setupTime: '5 minutes'
    },
    {
      title: 'Smart Invoice & Payment Processor',
      description: 'AI-powered invoicing with automated follow-ups, payment processing, and financial analytics.',
      icon: '💰',
      price: '$99/month',
      originalPrice: '$249/month',
      features: [
        'Automated invoice generation',
        'Smart payment reminders',
        'Multi-currency support',
        'Tax calculation automation',
        'Client portal access',
        'Payment analytics dashboard',
        'Recurring billing setup',
        'Late fee automation'
      ],
      benefits: [
        'Get paid 40% faster',
        'Reduce late payments by 70%',
        'Save 15 hours per month',
        'Improve cash flow by 35%'
      ],
      category: 'Finance',
      popular: true,
      freeTrial: '30 days',
      setupTime: '10 minutes'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot with natural language processing, ticket routing, and 24/7 customer support.',
      icon: '🤖',
      price: '$149/month',
      originalPrice: '$399/month',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Ticket escalation to humans',
        'Knowledge base integration',
        'Sentiment analysis',
        'Custom response training',
        'Analytics and reporting',
        'API integrations'
      ],
      benefits: [
        'Reduce support costs by 80%',
        'Handle 90% of queries automatically',
        'Improve response time to 2 seconds',
        'Increase customer satisfaction by 45%'
      ],
      category: 'Customer Service',
      popular: true,
      freeTrial: '21 days',
      setupTime: '15 minutes'
    },
    {
      title: 'Smart Email Marketing Automation',
      description: 'AI-driven email campaigns with personalization, A/B testing, and advanced segmentation.',
      icon: '📧',
      price: '$89/month',
      originalPrice: '$199/month',
      features: [
        'AI-powered subject line optimization',
        'Dynamic content personalization',
        'Behavioral trigger automation',
        'Advanced segmentation',
        'A/B testing automation',
        'Deliverability optimization',
        'ROI tracking and analytics',
        'Template library with AI suggestions'
      ],
      benefits: [
        'Increase open rates by 65%',
        'Boost click-through rates by 120%',
        'Generate 3x more leads',
        'Save 25 hours per week'
      ],
      category: 'Marketing',
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      title: 'AI-Powered Project Management',
      description: 'Intelligent project tracking with automated task assignment, deadline prediction, and resource optimization.',
      icon: '📋',
      price: '$119/month',
      originalPrice: '$299/month',
      features: [
        'AI task prioritization',
        'Automated deadline prediction',
        'Resource allocation optimization',
        'Risk assessment and alerts',
        'Team productivity analytics',
        'Smart time tracking',
        'Automated reporting',
        'Integration with 50+ tools'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project overruns by 50%',
        'Improve team productivity by 40%',
        'Save 20 hours per week on management'
      ],
      category: 'Productivity',
      freeTrial: '21 days',
      setupTime: '15 minutes'
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory tracking with demand forecasting, automated reordering, and cost optimization.',
      icon: '📦',
      price: '$129/month',
      originalPrice: '$349/month',
      features: [
        'Demand forecasting with 95% accuracy',
        'Automated reorder points',
        'Multi-location inventory tracking',
        'Supplier performance analytics',
        'Cost optimization recommendations',
        'Barcode scanning integration',
        'Real-time stock alerts',
        'Profit margin analysis'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts by 90%',
        'Improve cash flow by 30%',
        'Save 30 hours per month'
      ],
      category: 'Operations',
      freeTrial: '30 days',
      setupTime: '20 minutes'
    },
    {
      title: 'AI-Powered HR Management',
      description: 'Complete HR solution with AI recruitment, employee analytics, and automated onboarding.',
      icon: '👥',
      price: '$159/month',
      originalPrice: '$399/month',
      features: [
        'AI-powered resume screening',
        'Automated interview scheduling',
        'Employee performance analytics',
        'Automated onboarding workflows',
        'Skills gap analysis',
        'Retention prediction models',
        'Compliance monitoring',
        'Payroll integration'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality by 45%',
        'Increase employee retention by 35%',
        'Save 40 hours per month on HR tasks'
      ],
      category: 'Human Resources',
      freeTrial: '30 days',
      setupTime: '25 minutes'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'AI-driven business intelligence with automated insights, predictive analytics, and custom reporting.',
      icon: '📊',
      price: '$139/month',
      originalPrice: '$349/month',
      features: [
        'Automated insight generation',
        'Predictive analytics models',
        'Custom dashboard creation',
        'Real-time data visualization',
        'Anomaly detection alerts',
        'ROI calculation automation',
        'Competitive analysis',
        'Export to 20+ formats'
      ],
      benefits: [
        'Make data-driven decisions 5x faster',
        'Identify opportunities 3x quicker',
        'Reduce analysis time by 80%',
        'Increase revenue by 25%'
      ],
      category: 'Analytics',
      freeTrial: '21 days',
      setupTime: '15 minutes'
    },
    {
      title: 'AI-Powered Lead Generation',
      description: 'Automated lead finding, qualification, and nurturing with AI-powered prospecting and outreach.',
      icon: '🎯',
      price: '$169/month',
      originalPrice: '$449/month',
      features: [
        'AI-powered lead discovery',
        'Automated lead scoring',
        'Personalized outreach sequences',
        'Email and LinkedIn automation',
        'Lead qualification chatbots',
        'CRM integration and sync',
        'Conversion tracking',
        'ROI analytics'
      ],
      benefits: [
        'Generate 5x more qualified leads',
        'Increase conversion rates by 200%',
        'Reduce lead cost by 70%',
        'Save 35 hours per week'
      ],
      category: 'Sales',
      popular: true,
      freeTrial: '14 days',
      setupTime: '20 minutes'
    },
    {
      title: 'Smart Content Management System',
      description: 'AI-powered CMS with automated content creation, SEO optimization, and multi-channel publishing.',
      icon: '📝',
      price: '$109/month',
      originalPrice: '$279/month',
      features: [
        'AI content generation',
        'SEO optimization automation',
        'Multi-channel publishing',
        'Content calendar management',
        'Performance analytics',
        'A/B testing for content',
        'Brand voice consistency',
        'Plagiarism detection'
      ],
      benefits: [
        'Create content 10x faster',
        'Improve SEO rankings by 150%',
        'Increase organic traffic by 200%',
        'Save 40 hours per week'
      ],
      category: 'Content',
      freeTrial: '21 days',
      setupTime: '15 minutes'
    },
    {
      title: 'AI-Powered Accounting Assistant',
      description: 'Automated bookkeeping, expense tracking, and financial reporting with AI-powered categorization.',
      icon: '🧮',
      price: '$119/month',
      originalPrice: '$299/month',
      features: [
        'Automated transaction categorization',
        'Receipt scanning and processing',
        'Tax preparation assistance',
        'Financial report generation',
        'Expense policy compliance',
        'Bank reconciliation automation',
        'Audit trail maintenance',
        'Multi-currency support'
      ],
      benefits: [
        'Save 25 hours per month on bookkeeping',
        'Reduce accounting errors by 95%',
        'Improve tax compliance by 100%',
        'Cut accounting costs by 60%'
      ],
      category: 'Finance',
      freeTrial: '30 days',
      setupTime: '20 minutes'
    },
    {
      title: 'Smart E-commerce Optimization',
      description: 'AI-powered e-commerce tools for pricing optimization, inventory management, and customer personalization.',
      icon: '🛒',
      price: '$179/month',
      originalPrice: '$449/month',
      features: [
        'Dynamic pricing optimization',
        'Product recommendation engine',
        'Inventory demand forecasting',
        'Customer behavior analysis',
        'Cart abandonment recovery',
        'Multi-channel selling',
        'Performance analytics',
        'A/B testing automation'
      ],
      benefits: [
        'Increase sales by 35%',
        'Reduce cart abandonment by 50%',
        'Improve profit margins by 20%',
        'Save 30 hours per week'
      ],
      category: 'E-commerce',
      popular: true,
      freeTrial: '21 days',
      setupTime: '25 minutes'
    },
    {
      title: 'AI-Powered Security Monitor',
      description: 'Advanced cybersecurity monitoring with threat detection, vulnerability scanning, and automated response.',
      icon: '🔒',
      price: '$199/month',
      originalPrice: '$599/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Automated incident response',
        'Security compliance monitoring',
        'User behavior analytics',
        'Network traffic analysis',
        'Threat intelligence feeds',
        '24/7 security monitoring'
      ],
      benefits: [
        'Prevent 99% of cyber attacks',
        'Reduce security incidents by 90%',
        'Comply with security standards',
        'Save 40 hours per month on security'
      ],
      category: 'Security',
      freeTrial: '30 days',
      setupTime: '30 minutes'
    },
    {
      title: 'Smart Document Automation',
      description: 'AI-powered document processing with automated extraction, classification, and workflow management.',
      icon: '📄',
      price: '$89/month',
      originalPrice: '$229/month',
      features: [
        'Document OCR and extraction',
        'Automated classification',
        'Workflow automation',
        'Digital signature integration',
        'Version control management',
        'Search and retrieval',
        'Compliance tracking',
        'API integrations'
      ],
      benefits: [
        'Process documents 50x faster',
        'Reduce errors by 95%',
        'Improve compliance by 100%',
        'Save 25 hours per week'
      ],
      category: 'Productivity',
      freeTrial: '14 days',
      setupTime: '10 minutes'
    },
    {
      title: 'AI-Powered Video Marketing',
      description: 'Automated video creation, editing, and optimization for social media and marketing campaigns.',
      icon: '🎬',
      price: '$149/month',
      originalPrice: '$399/month',
      features: [
        'AI video generation',
        'Automated editing',
        'Multi-platform optimization',
        'Thumbnail generation',
        'Caption and subtitle creation',
        'Performance analytics',
        'A/B testing for videos',
        'Brand consistency tools'
      ],
      benefits: [
        'Create videos 20x faster',
        'Increase engagement by 400%',
        'Reduce video production costs by 80%',
        'Save 35 hours per week'
      ],
      category: 'Marketing',
      freeTrial: '21 days',
      setupTime: '15 minutes'
    },
    {
      title: 'Smart Customer Feedback Analyzer',
      description: 'AI-powered sentiment analysis and feedback processing with automated insights and action recommendations.',
      icon: '💬',
      price: '$99/month',
      originalPrice: '$249/month',
      features: [
        'Sentiment analysis automation',
        'Feedback categorization',
        'Trend identification',
        'Action recommendation engine',
        'Multi-channel feedback collection',
        'Real-time alerts',
        'Competitor analysis',
        'ROI tracking'
      ],
      benefits: [
        'Process feedback 100x faster',
        'Improve customer satisfaction by 40%',
        'Identify issues 5x quicker',
        'Save 20 hours per week'
      ],
      category: 'Customer Service',
      freeTrial: '14 days',
      setupTime: '10 minutes'
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  const stats = [
    { number: '500+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '24/7', label: 'Support', icon: Clock },
    { number: '50%', label: 'Cost Savings', icon: TrendingUp }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable AI-powered micro SAAS tools for modern businesses. 15+ ready-to-use solutions starting from $79/month with free trials." />
        <meta name="keywords" content="micro saas, ai tools, business automation, affordable software, productivity tools, marketing automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Powerful AI-driven tools for modern businesses. Start from $79/month with free trials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View All Tools
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Tools?
              </h2>
              <p className="text-xl text-gray-600">
                Affordable, powerful, and easy-to-use AI solutions that deliver immediate results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Setup</h3>
                <p className="text-gray-600">Get started in minutes, not weeks. No technical expertise required.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for all your business data.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 3 months of implementation.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support from our expert team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  AI-powered {category.toLowerCase()} tools designed to streamline your business operations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSAASServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 ${service.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save {Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '')) / parseInt(service.originalPrice.replace('$', '').replace('/month', ''))) * 100)}% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>Free Trial: {service.freeTrial}</span>
                          <span>Setup: {service.setupTime}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-blue-600 font-medium">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Pricing Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unbeatable Value
              </h2>
              <p className="text-xl text-gray-600">
                Compare our prices with industry leaders and see the savings
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Micro SAAS</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$79-199</div>
                  <div className="text-gray-600 mb-4">per month per tool</div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Free trials available
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Instant setup
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 support
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Enterprise security
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Average</h3>
                  <div className="text-4xl font-bold text-gray-600 mb-2">$299-599</div>
                  <div className="text-gray-600 mb-4">per month per tool</div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Limited trials
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Complex setup
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Business hours support
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Basic security
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Solutions</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">$999-2999</div>
                  <div className="text-gray-600 mb-4">per month per tool</div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      No free trials
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Months of setup
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Premium support
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Advanced security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;