import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  Brain,
  Database,
  Cloud,
  Smartphone,
  Globe,
  BarChart3,
  Mail,
  FileText,
  Calendar,
  Target,
  Rocket,
  Award,
  DollarSign
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-writer-pro',
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice customization.',
      features: [
        'Multi-language content generation (50+ languages)',
        'SEO-optimized articles and blog posts',
        'Brand voice training and customization',
        'Plagiarism detection and originality scoring',
        'Content calendar and scheduling',
        'Team collaboration tools',
        'API integration for existing workflows',
        'Analytics and performance tracking'
      ],
      pricing: {
        starter: { price: '$29', period: '/month', features: ['10,000 words/month', '5 languages', 'Basic SEO', 'Email support'] },
        professional: { price: '$79', period: '/month', features: ['50,000 words/month', '20 languages', 'Advanced SEO', 'Priority support', 'API access'] },
        enterprise: { price: '$199', period: '/month', features: ['Unlimited words', 'All languages', 'Custom AI training', 'Dedicated support', 'White-label options'] }
      },
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management with predictive analytics, resource optimization, and automated task assignment.',
      features: [
        'AI-powered task prioritization',
        'Resource allocation optimization',
        'Risk prediction and mitigation',
        'Automated progress reporting',
        'Team performance analytics',
        'Integration with 100+ tools',
        'Custom workflow automation',
        'Real-time collaboration features'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['Up to 10 projects', '5 team members', 'Basic AI features', 'Email support'] },
        professional: { price: '$99', period: '/month', features: ['Unlimited projects', '25 team members', 'Advanced AI analytics', 'Priority support'] },
        enterprise: { price: '$249', period: '/month', features: ['Unlimited everything', 'Custom AI training', 'Dedicated support', 'On-premise deployment'] }
      },
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      popular: false
    },
    {
      id: 'ai-email-marketing-suite',
      title: 'AI Email Marketing Suite',
      description: 'Complete email marketing automation with AI-driven personalization, A/B testing, and advanced analytics.',
      features: [
        'AI-powered subject line optimization',
        'Dynamic content personalization',
        'Send time optimization',
        'Advanced segmentation',
        'Automated drip campaigns',
        'A/B testing with AI insights',
        'Deliverability optimization',
        'Revenue attribution tracking'
      ],
      pricing: {
        starter: { price: '$49', period: '/month', features: ['5,000 subscribers', '10,000 emails/month', 'Basic AI features', 'Email support'] },
        professional: { price: '$129', period: '/month', features: ['25,000 subscribers', '100,000 emails/month', 'Advanced AI features', 'Priority support'] },
        enterprise: { price: '$299', period: '/month', features: ['Unlimited subscribers', 'Unlimited emails', 'Custom AI models', 'Dedicated support'] }
      },
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard Pro',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and custom reporting.',
      features: [
        'Real-time data visualization',
        'AI-powered trend analysis',
        'Predictive forecasting',
        'Custom dashboard builder',
        'Automated report generation',
        'Data source integration (100+)',
        'Mobile-responsive design',
        'White-label options'
      ],
      pricing: {
        starter: { price: '$59', period: '/month', features: ['5 data sources', 'Basic AI insights', 'Standard reports', 'Email support'] },
        professional: { price: '$149', period: '/month', features: ['25 data sources', 'Advanced AI analytics', 'Custom reports', 'Priority support'] },
        enterprise: { price: '$399', period: '/month', features: ['Unlimited sources', 'Custom AI models', 'Dedicated support', 'On-premise options'] }
      },
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      popular: false
    },
    {
      id: 'ai-document-processor',
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management.',
      features: [
        'Advanced OCR technology',
        'Intelligent data extraction',
        'Document classification',
        'Automated workflow routing',
        'Multi-format support (PDF, Word, Excel)',
        'Batch processing capabilities',
        'API integration',
        'Compliance and security features'
      ],
      pricing: {
        starter: { price: '$39', period: '/month', features: ['1,000 pages/month', 'Basic OCR', 'Email support', 'Standard security'] },
        professional: { price: '$99', period: '/month', features: ['10,000 pages/month', 'Advanced OCR', 'Priority support', 'Enhanced security'] },
        enterprise: { price: '$249', period: '/month', features: ['Unlimited pages', 'Custom AI models', 'Dedicated support', 'Enterprise security'] }
      },
      icon: FileText,
      color: 'from-indigo-500 to-purple-500',
      popular: false
    },
    {
      id: 'ai-customer-support-bot',
      title: 'AI Customer Support Bot',
      description: 'Advanced conversational AI for customer support with multi-channel integration and human handoff capabilities.',
      features: [
        'Natural language processing',
        'Multi-channel support (web, mobile, social)',
        'Human handoff when needed',
        'Knowledge base integration',
        'Sentiment analysis',
        'Multi-language support',
        'Custom bot training',
        'Analytics and reporting'
      ],
      pricing: {
        starter: { price: '$79', period: '/month', features: ['1,000 conversations/month', 'Basic AI', 'Email support', 'Standard integration'] },
        professional: { price: '$199', period: '/month', features: ['10,000 conversations/month', 'Advanced AI', 'Priority support', 'Full integration'] },
        enterprise: { price: '$499', period: '/month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'White-label options'] }
      },
      icon: Users,
      color: 'from-teal-500 to-blue-500',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our intuitive onboarding process and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support from our expert team to ensure your success.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with our flexible pricing and scalable infrastructure.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions including AI Content Writer Pro, AI Project Manager, Email Marketing Suite, and more. Starting from $29/month." />
        <meta name="keywords" content="micro saas, ai tools, content creation, project management, email marketing, analytics, document processing, customer support" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven micro SAAS tools designed to streamline your business operations and boost productivity. 
              Choose from our suite of innovative solutions tailored for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center">
                          <div className="text-2xl font-bold text-white">{details.price}</div>
                          <div className="text-sm text-gray-400">{details.period}</div>
                          <div className="text-xs text-gray-500 capitalize">{plan}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`/micro-saas/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              boost productivity, and drive growth. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;