import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Shield, Code, BarChart, Users, Globe, Clock, Award } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      icon: Brain,
      price: 79,
      period: 'month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      popular: true,
      category: 'Content & Marketing',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement without coding knowledge.',
      icon: Users,
      price: 99,
      period: 'month',
      features: [
        'Drag-and-drop builder',
        'Multi-channel deployment',
        'Natural language processing',
        'Custom integrations',
        'Analytics & insights',
        '24/7 availability',
        'Multi-language support',
        'API access'
      ],
      popular: false,
      category: 'Customer Service',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-data-analyzer',
      title: 'AI Data Analyzer',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization tools.',
      icon: BarChart,
      price: 149,
      period: 'month',
      features: [
        'Automated data processing',
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Data visualization',
        'Export capabilities',
        'API integrations',
        'Team collaboration'
      ],
      popular: true,
      category: 'Analytics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing platform with AI-driven personalization and automation.',
      icon: Globe,
      price: 129,
      period: 'month',
      features: [
        'AI-powered subject lines',
        'Send time optimization',
        'A/B testing automation',
        'Segmentation intelligence',
        'Email templates',
        'Deliverability optimization',
        'Performance analytics',
        'CRM integration'
      ],
      popular: false,
      category: 'Marketing',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automate social media posting, engagement, and analytics across all major platforms.',
      icon: Globe,
      price: 89,
      period: 'month',
      features: [
        'Multi-platform posting',
        'Content scheduling',
        'Hashtag optimization',
        'Engagement automation',
        'Performance tracking',
        'Competitor analysis',
        'Content suggestions',
        'Team collaboration'
      ],
      popular: false,
      category: 'Social Media',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management tool with AI-powered task optimization and team coordination.',
      icon: Clock,
      price: 199,
      period: 'month',
      features: [
        'Smart task assignment',
        'Progress tracking',
        'Resource optimization',
        'Risk assessment',
        'Team collaboration',
        'Time tracking',
        'Reporting & analytics',
        'Integration capabilities'
      ],
      popular: true,
      category: 'Productivity',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'ai-crm-system',
      title: 'AI-Powered CRM',
      description: 'Customer relationship management with AI insights, lead scoring, and sales automation.',
      icon: Users,
      price: 179,
      period: 'month',
      features: [
        'Lead scoring AI',
        'Sales forecasting',
        'Customer segmentation',
        'Automated follow-ups',
        'Pipeline management',
        'Performance analytics',
        'Integration ecosystem',
        'Mobile app'
      ],
      popular: false,
      category: 'Sales',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ai-inventory-manager',
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting and automated reordering.',
      icon: BarChart,
      price: 159,
      period: 'month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock optimization',
        'Multi-location support',
        'Supplier management',
        'Cost tracking',
        'Reporting suite',
        'Mobile access'
      ],
      popular: false,
      category: 'Operations',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'ai-hr-assistant',
      title: 'AI HR Assistant',
      description: 'Human resources management with AI-powered recruitment, onboarding, and employee analytics.',
      icon: Users,
      price: 139,
      period: 'month',
      features: [
        'Resume screening AI',
        'Interview scheduling',
        'Employee onboarding',
        'Performance tracking',
        'Benefits management',
        'Compliance monitoring',
        'Analytics dashboard',
        'Document management'
      ],
      popular: false,
      category: 'Human Resources',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'ai-finance-tracker',
      title: 'AI Finance Tracker',
      description: 'Personal and business finance management with AI insights and automated categorization.',
      icon: BarChart,
      price: 69,
      period: 'month',
      features: [
        'Expense categorization',
        'Budget optimization',
        'Investment insights',
        'Tax preparation',
        'Financial forecasting',
        'Bill reminders',
        'Multi-account sync',
        'Security features'
      ],
      popular: true,
      category: 'Finance',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'ai-website-builder',
      title: 'AI Website Builder',
      description: 'Create professional websites with AI assistance, no coding required.',
      icon: Code,
      price: 119,
      period: 'month',
      features: [
        'AI design suggestions',
        'Drag-and-drop editor',
        'Mobile optimization',
        'SEO tools',
        'E-commerce integration',
        'Analytics tracking',
        'Custom domains',
        '24/7 support'
      ],
      popular: false,
      category: 'Web Development',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'ai-security-monitor',
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring and threat detection for small to medium businesses.',
      icon: Shield,
      price: 189,
      period: 'month',
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Compliance monitoring',
        'Security reports',
        'Real-time alerts',
        'Team training',
        '24/7 monitoring'
      ],
      popular: false,
      category: 'Security',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Customer Service',
    'Analytics',
    'Marketing',
    'Social Media',
    'Productivity',
    'Sales',
    'Operations',
    'Human Resources',
    'Finance',
    'Web Development',
    'Security'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-400 max-w-3xl mx-auto">
              Powerful, affordable AI-driven tools designed for modern businesses. 
              Start from $69/month with no setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    ${service.price}
                    <span className="text-sm text-gray-400">/{service.period}</span>
                  </div>
                  <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {service.category}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <a
                    href={`/contact?service=${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href={`/contact?demo=${service.id}`}
                    className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200 text-center"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful tools without the complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center cyber-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes, not weeks. No complex installations or lengthy onboarding processes.</p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Leverage cutting-edge AI technology to automate tasks and gain intelligent insights.</p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and 99.9% uptime guarantee.</p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team to ensure your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Compare with Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Get enterprise-level features at a fraction of the cost
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Traditional Enterprise</h3>
              <div className="text-4xl font-bold text-gray-400 mb-6">$5,000+</div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Complex setup (3-6 months)</li>
                <li>High upfront costs</li>
                <li>Requires IT team</li>
                <li>Limited customization</li>
                <li>Long-term contracts</li>
              </ul>
            </div>

            <div className="cyber-card p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Micro SAAS</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$69-199</div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Instant setup (5 minutes)</li>
                <li>Low monthly costs</li>
                <li>No IT required</li>
                <li>Fully customizable</li>
                <li>Cancel anytime</li>
              </ul>
            </div>

            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
              <div className="text-4xl font-bold text-gray-400 mb-6">$50,000+</div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>6-12 month development</li>
                <li>Very high costs</li>
                <li>Requires developers</li>
                <li>Maintenance overhead</li>
                <li>Technology risks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI-powered micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-cyan-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>✓ Free consultation ✓ No setup fees ✓ 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
