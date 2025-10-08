import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$79/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      popular: true,
      category: 'Content Creation',
      benefits: ['Save 20+ hours/week', 'Increase content output by 500%', 'Improve SEO rankings'],
      marketPrice: '$150-300/month'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictive forecasting.',
      icon: '📊',
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Predictive analytics',
        'Automated reporting',
        'Multi-platform integration',
        'Mobile app included'
      ],
      popular: true,
      category: 'Analytics',
      benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Reduce reporting time by 80%'],
      marketPrice: '$200-500/month'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing automation with advanced segmentation and personalization.',
      icon: '📧',
      price: '$89/month',
      features: [
        'AI-powered subject line optimization',
        'Advanced segmentation',
        'Behavioral triggers',
        'A/B testing automation',
        'Deliverability optimization',
        'ROI tracking'
      ],
      popular: false,
      category: 'Marketing',
      benefits: ['Increase open rates by 40%', 'Boost conversion rates by 25%', 'Save 15+ hours/week'],
      marketPrice: '$120-400/month'
    },
    {
      title: 'Social Media AI Manager',
      description: 'Automated social media management with AI content scheduling and engagement optimization.',
      icon: '📱',
      price: '$69/month',
      features: [
        'Multi-platform posting',
        'Optimal timing suggestions',
        'Hashtag optimization',
        'Engagement automation',
        'Content calendar',
        'Performance analytics'
      ],
      popular: false,
      category: 'Social Media',
      benefits: ['Increase engagement by 60%', 'Save 10+ hours/week', 'Grow followers organically'],
      marketPrice: '$100-300/month'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing for 24/7 customer support.',
      icon: '🤖',
      price: '$149/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with CRM',
        'Escalation to human agents',
        'Learning capabilities',
        'Custom knowledge base'
      ],
      popular: true,
      category: 'Customer Service',
      benefits: ['Reduce support costs by 70%', '24/7 availability', 'Improve response time by 90%'],
      marketPrice: '$300-800/month'
    },
    {
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$119/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level optimization',
        'Supplier management',
        'Cost analysis',
        'Mobile alerts'
      ],
      popular: false,
      category: 'Inventory',
      benefits: ['Reduce stockouts by 80%', 'Lower inventory costs by 25%', 'Improve cash flow'],
      marketPrice: '$200-600/month'
    },
    {
      title: 'AI Lead Scoring Engine',
      description: 'Advanced lead qualification and scoring system with predictive analytics.',
      icon: '🎯',
      price: '$129/month',
      features: [
        'Predictive lead scoring',
        'Behavioral analysis',
        'CRM integration',
        'Automated follow-ups',
        'Conversion tracking',
        'Custom scoring models'
      ],
      popular: false,
      category: 'Sales',
      benefits: ['Increase conversion rates by 35%', 'Focus on high-value leads', 'Reduce sales cycle time'],
      marketPrice: '$250-700/month'
    },
    {
      title: 'Smart Document Processor',
      description: 'AI-powered document processing with OCR, data extraction, and automated workflows.',
      icon: '📄',
      price: '$159/month',
      features: [
        'OCR technology',
        'Data extraction',
        'Document classification',
        'Workflow automation',
        'Integration APIs',
        'Bulk processing'
      ],
      popular: false,
      category: 'Document Management',
      benefits: ['Process documents 10x faster', 'Reduce manual errors by 95%', 'Save 20+ hours/week'],
      marketPrice: '$300-1000/month'
    },
    {
      title: 'AI Financial Analyzer',
      description: 'Intelligent financial analysis and forecasting with automated reporting and insights.',
      icon: '💰',
      price: '$199/month',
      features: [
        'Financial forecasting',
        'Cash flow analysis',
        'Expense categorization',
        'Automated reporting',
        'Tax optimization',
        'Investment insights'
      ],
      popular: true,
      category: 'Finance',
      benefits: ['Improve financial planning', 'Identify cost savings', 'Automate reporting'],
      marketPrice: '$400-1200/month'
    },
    {
      title: 'Smart Project Manager',
      description: 'AI-powered project management with resource optimization and deadline prediction.',
      icon: '📋',
      price: '$89/month',
      features: [
        'Resource optimization',
        'Deadline prediction',
        'Risk assessment',
        'Team collaboration',
        'Progress tracking',
        'Automated reporting'
      ],
      popular: false,
      category: 'Project Management',
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Improve team productivity'],
      marketPrice: '$150-500/month'
    },
    {
      title: 'AI HR Assistant',
      description: 'Intelligent HR management with recruitment automation and employee analytics.',
      icon: '👥',
      price: '$179/month',
      features: [
        'Resume screening',
        'Candidate matching',
        'Employee analytics',
        'Performance tracking',
        'Compliance monitoring',
        'Automated workflows'
      ],
      popular: false,
      category: 'Human Resources',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline HR processes'],
      marketPrice: '$300-900/month'
    },
    {
      title: 'Smart Website Optimizer',
      description: 'AI-powered website optimization with performance monitoring and conversion tracking.',
      icon: '🌐',
      price: '$99/month',
      features: [
        'Performance monitoring',
        'Conversion optimization',
        'A/B testing',
        'SEO analysis',
        'Speed optimization',
        'Mobile optimization'
      ],
      popular: false,
      category: 'Web Optimization',
      benefits: ['Increase conversions by 25%', 'Improve page speed by 40%', 'Boost SEO rankings'],
      marketPrice: '$200-600/month'
    }
  ];

  const categories = [
    { name: 'All', count: microSAASServices.length },
    { name: 'Content Creation', count: microSAASServices.filter(s => s.category === 'Content Creation').length },
    { name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length },
    { name: 'Social Media', count: microSAASServices.filter(s => s.category === 'Social Media').length },
    { name: 'Customer Service', count: microSAASServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Inventory', count: microSAASServices.filter(s => s.category === 'Inventory').length },
    { name: 'Sales', count: microSAASServices.filter(s => s.category === 'Sales').length },
    { name: 'Document Management', count: microSAASServices.filter(s => s.category === 'Document Management').length },
    { name: 'Finance', count: microSAASServices.filter(s => s.category === 'Finance').length },
    { name: 'Project Management', count: microSAASServices.filter(s => s.category === 'Project Management').length },
    { name: 'Human Resources', count: microSAASServices.filter(s => s.category === 'Human Resources').length },
    { name: 'Web Optimization', count: microSAASServices.filter(s => s.category === 'Web Optimization').length }
  ];

  return (
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
              Powerful, affordable AI-driven tools designed for modern businesses. 
              Start from $69/month and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Ready-to-Use Tools</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">$69</div>
              <div className="text-gray-600">Starting Price</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of AI-powered business tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 ${service.popular ? 'border-blue-500' : 'border-gray-100'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save up to 50% vs market price
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Start Free Trial
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Built with enterprise-grade technology, priced for small businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Deploy in minutes, not months. Get up and running instantly.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Bank-level security with 99.9% uptime guarantee.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support from our expert team.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Grow with your business. Upgrade anytime.</p>
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
            <p className="mt-2">🌐 Visit us at <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;