import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  Lock, 
  Smartphone, 
  Database, 
  Cloud, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, social media posts, and marketing copy.',
      features: [
        'Multi-language support (50+ languages)',
        'SEO-optimized content generation',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      pricing: {
        starter: '$29/month',
        pro: '$79/month',
        enterprise: '$199/month'
      },
      benefits: [
        'Save 80% time on content creation',
        'Increase content output by 500%',
        'Improve SEO rankings',
        'Maintain consistent brand voice'
      ],
      link: 'https://ziontechgroup.com/ai-content-generator',
      category: 'AI & Content'
    },
    {
      id: 'smart-analytics-dashboard',
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence platform with AI-powered insights and predictive analytics.',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Predictive analytics',
        'Automated reporting',
        'Multi-platform integration',
        'Mobile app included'
      ],
      pricing: {
        starter: '$49/month',
        pro: '$129/month',
        enterprise: '$299/month'
      },
      benefits: [
        'Make data-driven decisions',
        'Identify trends before competitors',
        'Automate reporting processes',
        'Increase revenue by 25%'
      ],
      link: 'https://ziontechgroup.com/smart-analytics',
      category: 'Analytics & BI'
    },
    {
      id: 'cybersecurity-monitor',
      name: 'Cybersecurity Monitor Pro',
      description: 'Comprehensive security monitoring and threat detection system for small to medium businesses.',
      features: [
        '24/7 threat monitoring',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Security training modules',
        'Priority support'
      ],
      pricing: {
        starter: '$99/month',
        pro: '$199/month',
        enterprise: '$399/month'
      },
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 95%',
        'Ensure compliance with regulations',
        'Save on security costs'
      ],
      link: 'https://ziontechgroup.com/cybersecurity-monitor',
      category: 'Security'
    },
    {
      id: 'customer-ai-chatbot',
      name: 'Customer AI Chatbot',
      description: 'Intelligent customer service chatbot that handles inquiries, provides support, and increases customer satisfaction.',
      features: [
        'Natural language processing',
        'Multi-channel integration',
        'Custom knowledge base',
        'Human handoff capability',
        'Sentiment analysis',
        'Performance analytics'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$89/month',
        enterprise: '$199/month'
      },
      benefits: [
        'Reduce support costs by 60%',
        'Provide 24/7 customer support',
        'Increase customer satisfaction',
        'Handle multiple languages'
      ],
      link: 'https://ziontechgroup.com/ai-chatbot',
      category: 'Customer Service'
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation Suite',
      description: 'Powerful automation platform that streamlines business processes and eliminates manual tasks.',
      features: [
        'Visual workflow builder',
        '500+ integrations',
        'Conditional logic',
        'Scheduled automation',
        'Error handling',
        'Team collaboration'
      ],
      pricing: {
        starter: '$59/month',
        pro: '$149/month',
        enterprise: '$299/month'
      },
      benefits: [
        'Save 20+ hours per week',
        'Reduce human errors by 90%',
        'Scale operations efficiently',
        'Improve team productivity'
      ],
      link: 'https://ziontechgroup.com/workflow-automation',
      category: 'Automation'
    },
    {
      id: 'social-media-manager',
      name: 'Social Media Manager Pro',
      description: 'All-in-one social media management platform with AI-powered content suggestions and scheduling.',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Optimal timing analysis',
        'Engagement tracking',
        'Hashtag optimization',
        'Competitor analysis'
      ],
      pricing: {
        starter: '$29/month',
        pro: '$79/month',
        enterprise: '$179/month'
      },
      benefits: [
        'Increase engagement by 300%',
        'Save 15+ hours per week',
        'Grow followers organically',
        'Track ROI effectively'
      ],
      link: 'https://ziontechgroup.com/social-media-manager',
      category: 'Marketing'
    },
    {
      id: 'inventory-management',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management system with predictive analytics and automated reordering.',
      features: [
        'Real-time inventory tracking',
        'Predictive demand forecasting',
        'Automated reorder points',
        'Multi-location support',
        'Barcode scanning',
        'Supplier integration'
      ],
      pricing: {
        starter: '$49/month',
        pro: '$119/month',
        enterprise: '$249/month'
      },
      benefits: [
        'Reduce stockouts by 80%',
        'Lower inventory costs by 25%',
        'Improve cash flow',
        'Eliminate manual counting'
      ],
      link: 'https://ziontechgroup.com/inventory-manager',
      category: 'Operations'
    },
    {
      id: 'email-marketing-ai',
      name: 'Email Marketing AI',
      description: 'Intelligent email marketing platform with AI-powered personalization and optimization.',
      features: [
        'AI content personalization',
        'Send time optimization',
        'A/B testing automation',
        'Advanced segmentation',
        'Deliverability monitoring',
        'Revenue attribution'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$99/month',
        enterprise: '$229/month'
      },
      benefits: [
        'Increase open rates by 40%',
        'Boost click-through rates by 60%',
        'Generate 3x more revenue',
        'Save time on campaign creation'
      ],
      link: 'https://ziontechgroup.com/email-marketing-ai',
      category: 'Marketing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, analytics, automation, and more. Start from $29/month." />
        <meta name="keywords" content="micro saas, saas solutions, business tools, AI tools, automation, analytics, productivity" />
        <meta property="og:title" content="Micro SaaS Solutions | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, analytics, automation, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Micro SaaS Solutions
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Scale Your Business
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Powerful, affordable micro SaaS tools designed to solve specific business challenges. 
                From AI-powered content generation to advanced analytics - everything you need to grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Starting from $29/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your Micro SaaS Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Each solution is designed to solve specific business challenges with powerful features and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-cyan-400 text-xs">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Pricing:</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-white font-semibold">{service.pricing.starter}</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center inline-flex items-center justify-center group"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Call for Demo
                    </a>
                  </div>
                </div>
              ))}
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
              Join thousands of businesses using our micro SaaS solutions to streamline operations, 
              increase productivity, and drive growth. Start your free trial today.
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

export default MicroSaaSPage;