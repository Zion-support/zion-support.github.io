import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Mail, 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Target
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSAASServicesPage = () => {
  const microSAASServices = [
    {
      id: 'zion-ai-analytics-pro',
      name: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered business analytics with real-time insights and predictive modeling',
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Multi-source data integration',
        'Advanced machine learning models'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/zion-ai-analytics-pro'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses',
      price: '$149/month',
      features: [
        '24/7 threat monitoring',
        'Automated vulnerability scanning',
        'Real-time security alerts',
        'Compliance reporting',
        'Incident response automation',
        'Security training modules'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      popular: false,
      link: '/zion-security-shield'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage and backup solution with enterprise-grade encryption',
      price: '$79/month',
      features: [
        'Unlimited cloud storage',
        'End-to-end encryption',
        'Automated backups',
        'File versioning',
        'Team collaboration tools',
        'Mobile app access'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: '/zion-cloud-vault'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams',
      price: '$129/month',
      features: [
        'AI content generation',
        'Multi-platform publishing',
        'Content calendar management',
        'SEO optimization tools',
        'Brand voice consistency',
        'Performance analytics'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/zion-content-studio'
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI-driven personalization',
      price: '$89/month',
      features: [
        'Drag-and-drop email builder',
        'AI-powered personalization',
        'Advanced segmentation',
        'A/B testing tools',
        'Deliverability optimization',
        'Detailed analytics'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      popular: false,
      link: '/zion-email-automation'
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'Comprehensive project management with AI-powered insights and automation',
      price: '$119/month',
      features: [
        'AI-powered task prioritization',
        'Resource allocation optimization',
        'Risk assessment automation',
        'Team collaboration tools',
        'Progress tracking',
        'Custom reporting'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/zion-project-master'
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management and scheduling across all platforms',
      price: '$69/month',
      features: [
        'Multi-platform posting',
        'AI-optimized posting times',
        'Content suggestion engine',
        'Hashtag optimization',
        'Engagement analytics',
        'Competitor analysis'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: '/zion-social-scheduler'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for business process optimization',
      price: '$109/month',
      features: [
        'Visual workflow builder',
        '500+ app integrations',
        'Conditional logic',
        'Real-time monitoring',
        'Error handling',
        'Custom triggers'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500',
      popular: true,
      link: '/zion-workflow-automation'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoicing and payment processing with automated follow-ups',
      price: '$59/month',
      features: [
        'Automated invoice generation',
        'Payment processing integration',
        'Late payment reminders',
        'Expense tracking',
        'Tax calculation',
        'Client portal'
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      link: '/zion-invoice-genius'
    },
    {
      id: 'zion-crm-assistant',
      name: 'Zion CRM Assistant',
      description: 'AI-powered customer relationship management with predictive insights',
      price: '$139/month',
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Sales forecasting',
        'Customer segmentation',
        'Pipeline management',
        'Integration ecosystem'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500',
      popular: false,
      link: '/zion-crm-assistant'
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Real-time data synchronization across all your business applications',
      price: '$79/month',
      features: [
        'Real-time synchronization',
        'Data transformation',
        'Conflict resolution',
        'Error monitoring',
        'Custom mappings',
        'API management'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      link: '/zion-data-sync'
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance monitoring and reporting for various regulations',
      price: '$199/month',
      features: [
        'Multi-regulation support',
        'Automated compliance checks',
        'Audit trail management',
        'Risk assessment',
        'Document management',
        'Regulatory updates'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      popular: false,
      link: '/zion-compliance-manager'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '1GB storage'
      ],
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$99/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'Premium integrations',
        '100GB storage',
        'Custom workflows'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Enterprise analytics',
        '24/7 dedicated support',
        'All integrations',
        'Unlimited storage',
        'Custom development',
        'SLA guarantee'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Services - Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS services designed to streamline your business operations. From AI analytics to workflow automation, we have the tools you need."
        keywords="micro saas, business software, automation tools, AI services, productivity software, business solutions"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable software solutions designed to streamline your business operations. 
            Choose from our comprehensive suite of micro SAAS tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS tools designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 text-center mb-4">
                  {service.description}
                </p>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include our core micro SAAS services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full bg-gradient-to-r ${tier.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our micro SAAS services and how they can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;