import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Star, Zap, Shield, Users, BarChart3, Clock, Globe } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice customization.',
      features: [
        'AI-powered blog posts, articles, and social media content',
        'Multi-language support (50+ languages)',
        'SEO optimization and keyword integration',
        'Brand voice customization and tone matching',
        'Plagiarism detection and originality scoring',
        'Content calendar and scheduling',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['10,000 words/month', '3 team members', 'Basic templates'] },
        professional: { price: '$79', period: '/month', features: ['50,000 words/month', '10 team members', 'Advanced AI models', 'API access'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited words', 'Unlimited team members', 'Custom AI training', 'Priority support'] }
      },
      link: '/ai-content-generator',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Content & Marketing'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics platform with predictive insights, automated reporting, and real-time data visualization.',
      features: [
        'Real-time data visualization and dashboards',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Custom KPI tracking and alerts',
        'Data integration from 100+ sources',
        'Machine learning insights',
        'White-label customization',
        'Mobile-responsive design'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['5 data sources', 'Basic dashboards', 'Email support'] },
        professional: { price: '$99', period: '/month', features: ['25 data sources', 'Advanced analytics', 'API access', 'Priority support'] },
        enterprise: { price: '$299', period: '/month', features: ['Unlimited sources', 'Custom development', 'Dedicated support', 'On-premise option'] }
      },
      link: '/ai-analytics-dashboard',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics & BI'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Suite',
      description: 'Comprehensive customer support automation with intelligent chatbots, ticket routing, and sentiment analysis.',
      features: [
        'AI-powered chatbots with natural language processing',
        'Intelligent ticket routing and prioritization',
        'Sentiment analysis and customer mood tracking',
        'Knowledge base automation',
        'Multi-channel support (email, chat, social media)',
        'Performance analytics and insights',
        'Integration with popular CRM systems',
        'Custom training and onboarding'
      ],
      pricing: {
        starter: { price: '$49', period: '/month', features: ['1,000 conversations/month', 'Basic chatbot', 'Email support'] },
        professional: { price: '$149', period: '/month', features: ['10,000 conversations/month', 'Advanced AI features', 'Multi-channel support'] },
        enterprise: { price: '$399', period: '/month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support'] }
      },
      link: '/ai-customer-support',
      icon: <Users className="w-8 h-8" />,
      category: 'Customer Service'
    },
    {
      id: 'ai-cybersecurity-monitor',
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and security monitoring platform with real-time alerts and automated response capabilities.',
      features: [
        'Real-time threat detection and monitoring',
        'AI-powered anomaly detection',
        'Automated incident response',
        'Compliance reporting and auditing',
        'Network traffic analysis',
        'Vulnerability scanning and assessment',
        'Security awareness training modules',
        '24/7 monitoring and alerts'
      ],
      pricing: {
        starter: { price: '$99', period: '/month', features: ['Up to 50 devices', 'Basic monitoring', 'Email alerts'] },
        professional: { price: '$299', period: '/month', features: ['Up to 200 devices', 'Advanced AI detection', 'Phone support'] },
        enterprise: { price: '$799', period: '/month', features: ['Unlimited devices', 'Custom rules', 'Dedicated security team'] }
      },
      link: '/ai-cybersecurity-monitor',
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity'
    },
    {
      id: 'ai-automation-platform',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation platform that streamlines business workflows with AI-powered decision making.',
      features: [
        'Visual workflow builder with drag-and-drop interface',
        'AI-powered decision making and routing',
        'Integration with 500+ business applications',
        'Document processing and data extraction',
        'Email and notification automation',
        'Performance monitoring and optimization',
        'Custom connector development',
        'Enterprise-grade security and compliance'
      ],
      pricing: {
        starter: { price: '$59', period: '/month', features: ['10 workflows', '5 integrations', 'Basic automation'] },
        professional: { price: '$199', period: '/month', features: ['50 workflows', '25 integrations', 'Advanced AI features'] },
        enterprise: { price: '$599', period: '/month', features: ['Unlimited workflows', 'Custom integrations', 'Dedicated support'] }
      },
      link: '/ai-automation-platform',
      icon: <Zap className="w-8 h-8" />,
      category: 'Automation'
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Pro',
      description: 'Advanced business intelligence platform with natural language querying, automated insights, and predictive analytics.',
      features: [
        'Natural language data querying',
        'Automated insight generation',
        'Predictive analytics and forecasting',
        'Interactive data visualization',
        'Self-service analytics for business users',
        'Data governance and security controls',
        'Mobile analytics and reporting',
        'Custom model development'
      ],
      pricing: {
        starter: { price: '$79', period: '/month', features: ['5 users', '10 data sources', 'Basic reports'] },
        professional: { price: '$199', period: '/month', features: ['25 users', '50 data sources', 'Advanced analytics'] },
        enterprise: { price: '$499', period: '/month', features: ['Unlimited users', 'Unlimited sources', 'Custom development'] }
      },
      link: '/ai-business-intelligence',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Business Intelligence'
    }
  ];

  const categories = ['All', 'Content & Marketing', 'Analytics & BI', 'Customer Service', 'Cybersecurity', 'Automation', 'Business Intelligence'];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Professional micro SaaS solutions including AI content generation, analytics dashboards, customer support automation, cybersecurity monitoring, and business intelligence platforms."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive suite of micro SaaS applications designed to solve specific business challenges with cutting-edge AI and modern technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <span className="text-sm text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">4.9/5</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Pricing Plans:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-sm text-gray-400 capitalize mb-1">{plan}</div>
                        <div className="text-lg font-bold text-white">
                          {details.price}
                          <span className="text-sm text-gray-400">{details.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Details
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our micro SaaS solutions are designed to integrate seamlessly with your existing workflows and provide immediate value to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View All Pricing
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;