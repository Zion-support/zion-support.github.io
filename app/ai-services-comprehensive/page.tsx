import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Mail, 
  Users, 
  FileText, 
  Zap, 
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Globe,
  Database,
  Settings,
  TrendingUp,
  Lock,
  Smartphone,
  Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesComprehensivePage = () => {
  const aiServices = [
    {
      id: 'ai-analytics-pro',
      name: 'AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence with predictive analytics and real-time insights',
      price: '$299/month',
      features: [
        'Real-time data processing',
        'Predictive modeling',
        'Custom dashboard creation',
        'Automated reporting',
        'Multi-source data integration',
        'Machine learning algorithms',
        'Natural language queries',
        'Anomaly detection'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Analytics',
      popular: true
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation for marketing, blogs, and social media',
      price: '$199/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing copy',
        'Product descriptions',
        'SEO optimization',
        'Multi-language support',
        'Brand voice consistency',
        'Content calendar integration'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Content',
      popular: true
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service Pro',
      description: 'Intelligent customer support automation with natural language processing',
      price: '$249/month',
      features: [
        '24/7 chatbot support',
        'Natural language processing',
        'Multi-channel integration',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base integration',
        'Performance analytics',
        'Custom training'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Customer Service',
      popular: false
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Shield',
      description: 'AI-powered threat detection and security monitoring for enterprise protection',
      price: '$399/month',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security training',
        'Risk scoring',
        'Integration ecosystem'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'Security',
      popular: false
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-driven personalization and optimization',
      price: '$179/month',
      features: [
        'Campaign optimization',
        'Audience segmentation',
        'Personalization engine',
        'A/B testing automation',
        'ROI optimization',
        'Cross-channel coordination',
        'Predictive analytics',
        'Performance tracking'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Marketing',
      popular: false
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent business process automation with AI decision-making capabilities',
      price: '$229/month',
      features: [
        'Process optimization',
        'Decision automation',
        'Resource allocation',
        'Exception handling',
        'Performance monitoring',
        'Custom workflows',
        'Integration management',
        'Analytics dashboard'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Automation',
      popular: true
    },
    {
      id: 'ai-data-processing',
      name: 'AI Data Processing Engine',
      description: 'Advanced AI-powered data processing, cleaning, and transformation services',
      price: '$159/month',
      features: [
        'Data cleaning automation',
        'Format standardization',
        'Quality validation',
        'Transformation pipelines',
        'Real-time processing',
        'Error detection',
        'Data lineage tracking',
        'Custom algorithms'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500',
      category: 'Data Processing',
      popular: false
    },
    {
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      description: 'Advanced machine learning models for forecasting and predictive analytics',
      price: '$349/month',
      features: [
        'Custom model development',
        'Time series forecasting',
        'Risk assessment',
        'Demand prediction',
        'Churn analysis',
        'Price optimization',
        'Model monitoring',
        'Continuous learning'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'Predictive Analytics',
      popular: false
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis with computer vision capabilities',
      price: '$279/month',
      features: [
        'Image recognition',
        'Object detection',
        'Facial recognition',
        'Quality inspection',
        'Video analysis',
        'Real-time processing',
        'Custom model training',
        'API integration'
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Computer Vision',
      popular: false
    },
    {
      id: 'ai-nlp-processing',
      name: 'AI Natural Language Processing',
      description: 'Advanced text analysis, sentiment analysis, and language understanding',
      price: '$189/month',
      features: [
        'Sentiment analysis',
        'Text classification',
        'Entity extraction',
        'Language translation',
        'Text summarization',
        'Intent recognition',
        'Multi-language support',
        'Custom models'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500',
      category: 'NLP',
      popular: false
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Intelligent recommendation system for products, content, and services',
      price: '$219/month',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendations',
        'Real-time updates',
        'A/B testing',
        'Performance metrics',
        'Custom algorithms',
        'Multi-domain support'
      ],
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Recommendations',
      popular: false
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Enterprise Chatbot',
      description: 'Advanced conversational AI for enterprise-level customer interactions',
      price: '$329/month',
      features: [
        'Multi-language support',
        'Voice integration',
        'Context awareness',
        'Human handoff',
        'Analytics dashboard',
        'Custom training',
        'API integration',
        'Scalable deployment'
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      category: 'Conversational AI',
      popular: false
    }
  ];

  const categories = [
    'All',
    'Analytics',
    'Content',
    'Customer Service',
    'Security',
    'Marketing',
    'Automation',
    'Data Processing',
    'Predictive Analytics',
    'Computer Vision',
    'NLP',
    'Recommendations',
    'Conversational AI'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses exploring AI',
      features: [
        'Up to 3 AI services',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '1TB data processing',
        'Basic customization'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 8 AI services',
        'Advanced analytics',
        'Priority support',
        'Premium integrations',
        '10TB data processing',
        'Custom workflows',
        'API access',
        'Training sessions'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited AI services',
        'Enterprise analytics',
        '24/7 dedicated support',
        'All integrations',
        'Unlimited data processing',
        'Custom development',
        'SLA guarantee',
        'Dedicated account manager',
        'On-premise deployment'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including analytics, content generation, customer service, cybersecurity, and more. Transform your business with cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI content generation, AI customer service"
        canonical="https://ziontechgroup.com/ai-services-comprehensive"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Suite
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business operations. 
            From analytics to automation, we provide the AI tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
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
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
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
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-gray-400 text-sm">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <Link
                  to={`/ai-${service.id.replace('ai-', '')}`}
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

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your AI needs. All plans include our core AI services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our AI services and how they can transform your business.
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
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesComprehensivePage;