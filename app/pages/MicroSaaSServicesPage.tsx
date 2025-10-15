import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  Database, 
  Lock, 
  Smartphone, 
  Cloud, 
  Mail, 
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  ExternalLink
} from 'lucide-react';

const MicroSaaSServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials',
      features: [
        'GPT-4 powered content generation',
        'Multi-language support (50+ languages)',
        'SEO optimization suggestions',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard',
        'API integration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', 'Basic templates', 'Email support'] },
        pro: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom models', 'Dedicated support', 'White-label'] }
      },
      icon: Brain,
      color: 'from-blue-500 to-cyan-600',
      category: 'Content Creation',
      marketPrice: '$29-199/month',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'smart-analytics-dashboard',
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization platform',
      features: [
        'Real-time data processing',
        'Custom dashboard builder',
        '50+ data connectors',
        'Advanced filtering',
        'Automated reports',
        'Mobile app included',
        'Team collaboration',
        'Data export capabilities'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['5 dashboards', 'Basic connectors', 'Email support'] },
        pro: { price: 99, period: 'month', features: ['25 dashboards', 'All connectors', 'Priority support', 'API access'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited dashboards', 'Custom connectors', 'Dedicated support', 'On-premise option'] }
      },
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      category: 'Analytics',
      marketPrice: '$39-249/month',
      link: 'https://ziontechgroup.com/smart-analytics'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      description: 'Intelligent customer service automation with human-like responses',
      features: [
        'Natural language processing',
        'Multi-channel support (email, chat, phone)',
        'Sentiment analysis',
        'Auto-escalation to humans',
        'Knowledge base integration',
        'Performance analytics',
        'Custom training',
        '24/7 availability'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['1,000 conversations/month', 'Basic AI', 'Email support'] },
        pro: { price: 129, period: 'month', features: ['10,000 conversations/month', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'White-label'] }
      },
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      category: 'Customer Service',
      marketPrice: '$49-299/month',
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: 'secure-file-manager',
      name: 'Secure File Manager Pro',
      description: 'Enterprise-grade file storage and sharing with advanced security features',
      features: [
        'End-to-end encryption',
        'Zero-knowledge architecture',
        'Version control',
        'Collaborative editing',
        'Access permissions',
        'Audit logs',
        'Mobile apps',
        'API integration'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['100GB storage', '5 users', 'Basic security'] },
        pro: { price: 59, period: 'month', features: ['1TB storage', '25 users', 'Advanced security', 'API access'] },
        enterprise: { price: 149, period: 'month', features: ['10TB storage', 'Unlimited users', 'Custom security', 'Dedicated support'] }
      },
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      category: 'File Management',
      marketPrice: '$19-149/month',
      link: 'https://ziontechgroup.com/secure-file-manager'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content and scheduling',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement tracking',
        'Competitor analysis',
        'Content calendar',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['3 social accounts', 'Basic AI', 'Email support'] },
        pro: { price: 89, period: 'month', features: ['10 social accounts', 'Advanced AI', 'Priority support', 'Analytics'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited accounts', 'Custom AI', 'Dedicated support', 'White-label'] }
      },
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      category: 'Social Media',
      marketPrice: '$39-199/month',
      link: 'https://ziontechgroup.com/ai-social-media'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing automation with personalization and analytics',
      features: [
        'AI-powered personalization',
        'Behavioral triggers',
        'A/B testing',
        'Template library',
        'List segmentation',
        'Deliverability optimization',
        'Advanced analytics',
        'CRM integration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['5,000 subscribers', 'Basic AI', 'Email support'] },
        pro: { price: 79, period: 'month', features: ['25,000 subscribers', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited subscribers', 'Custom AI', 'Dedicated support', 'White-label'] }
      },
      icon: Mail,
      color: 'from-yellow-500 to-orange-600',
      category: 'Email Marketing',
      marketPrice: '$29-199/month',
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Risk prediction',
        'Timeline forecasting',
        'Team collaboration',
        'Progress tracking',
        'Custom workflows',
        'Integration ecosystem'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['5 projects', 'Basic AI', 'Email support'] },
        pro: { price: 99, period: 'month', features: ['25 projects', 'Advanced AI', 'Priority support', 'API access'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited projects', 'Custom AI', 'Dedicated support', 'On-premise'] }
      },
      icon: Settings,
      color: 'from-teal-500 to-cyan-600',
      category: 'Project Management',
      marketPrice: '$39-249/month',
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with multiple language support',
      features: [
        'Multi-language support',
        'Code completion',
        'Bug detection',
        'Code optimization',
        'Documentation generation',
        'Test case creation',
        'Code review',
        'IDE integration'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['Basic AI', '5 languages', 'Email support'] },
        pro: { price: 129, period: 'month', features: ['Advanced AI', '20+ languages', 'Priority support', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Custom AI', 'All languages', 'Dedicated support', 'White-label'] }
      },
      icon: Code,
      color: 'from-gray-500 to-slate-600',
      category: 'Development',
      marketPrice: '$49-299/month',
      link: 'https://ziontechgroup.com/ai-code-assistant'
    }
  ];

  const categories = [...new Set(microSaasServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including AI content generation, analytics, customer support, file management, and more. Professional pricing and features." />
        <meta name="keywords" content="micro saas, ai tools, content generation, analytics, customer support, file management, project management" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Professional micro SAAS solutions with competitive pricing and advanced features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Professional
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Micro SAAS Services
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive suite of micro SAAS solutions designed to streamline your business operations. 
                From AI-powered content creation to advanced analytics, we provide enterprise-grade tools at competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Professional-grade micro SAAS tools with competitive pricing and enterprise features. 
                All solutions include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Starting from</span>
                      <span className="text-2xl font-bold text-white">
                        ${service.pricing.starter.price}
                        <span className="text-sm text-gray-400">/{service.pricing.starter.period}</span>
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Competitive Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS solutions offer exceptional value with professional features at competitive market prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter Plans</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$19-49</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic features included
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Regular updates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Mobile access
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-400/50 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro Plans</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$79-129</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Analytics dashboard
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plans</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$199-299</div>
                <div className="text-gray-400 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get started with our micro SAAS solutions today. Contact us for a free consultation and custom pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSServicesPage;