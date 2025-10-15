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
  ExternalLink,
  Cpu,
  Eye,
  MessageSquare,
  Bot,
  Target,
  TrendingUp
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting for enterprises',
      features: [
        'AI readiness assessment',
        'Custom AI roadmap development',
        'Technology stack recommendations',
        'ROI analysis and projections',
        'Change management planning',
        'Implementation timeline',
        'Training and support',
        'Ongoing optimization'
      ],
      pricing: {
        discovery: { price: 5000, period: 'one-time', features: ['AI assessment', 'Strategy document', 'Recommendations'] },
        implementation: { price: 15000, period: 'month', features: ['Full implementation', 'Team training', '3-month support'] },
        ongoing: { price: 5000, period: 'month', features: ['Ongoing optimization', 'Performance monitoring', 'Strategy updates'] }
      },
      icon: Brain,
      color: 'from-blue-500 to-cyan-600',
      category: 'Consulting',
      marketPrice: '$5,000-15,000/month',
      link: 'https://ziontechgroup.com/ai-consulting'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions to streamline business processes and reduce manual work',
      features: [
        'Process analysis and mapping',
        'RPA implementation',
        'AI-powered decision making',
        'Integration with existing systems',
        'Performance monitoring',
        'Exception handling',
        'Scalability planning',
        '24/7 monitoring'
      ],
      pricing: {
        basic: { price: 3000, period: 'month', features: ['Simple processes', 'Basic AI', 'Email support'] },
        advanced: { price: 8000, period: 'month', features: ['Complex processes', 'Advanced AI', 'Priority support'] },
        enterprise: { price: 20000, period: 'month', features: ['Full automation', 'Custom AI', 'Dedicated support'] }
      },
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      category: 'Automation',
      marketPrice: '$3,000-20,000/month',
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI-Powered Data Analytics',
      description: 'Advanced data analytics and business intelligence using machine learning and AI',
      features: [
        'Data collection and cleaning',
        'Predictive analytics',
        'Real-time dashboards',
        'Custom ML models',
        'Data visualization',
        'Automated reporting',
        'Anomaly detection',
        'Trend analysis'
      ],
      pricing: {
        starter: { price: 2500, period: 'month', features: ['Basic analytics', 'Standard reports', 'Email support'] },
        professional: { price: 7500, period: 'month', features: ['Advanced analytics', 'Custom dashboards', 'Priority support'] },
        enterprise: { price: 15000, period: 'month', features: ['Full AI analytics', 'Custom models', 'Dedicated support'] }
      },
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      category: 'Analytics',
      marketPrice: '$2,500-15,000/month',
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service Solutions',
      description: 'Intelligent customer service automation with chatbots, virtual assistants, and support optimization',
      features: [
        'AI chatbot development',
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Auto-escalation',
        'Knowledge base integration',
        'Performance analytics',
        'Continuous learning'
      ],
      pricing: {
        basic: { price: 2000, period: 'month', features: ['Simple chatbot', 'Basic NLP', 'Email support'] },
        advanced: { price: 6000, period: 'month', features: ['Advanced chatbot', 'Complex NLP', 'Priority support'] },
        enterprise: { price: 12000, period: 'month', features: ['Full AI suite', 'Custom training', 'Dedicated support'] }
      },
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-600',
      category: 'Customer Service',
      marketPrice: '$2,000-12,000/month',
      link: 'https://ziontechgroup.com/ai-customer-service'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision Solutions',
      description: 'Advanced computer vision and image recognition solutions for various industries',
      features: [
        'Object detection and recognition',
        'Facial recognition',
        'Quality control automation',
        'Medical image analysis',
        'Security monitoring',
        'Real-time processing',
        'Custom model training',
        'API integration'
      ],
      pricing: {
        basic: { price: 4000, period: 'month', features: ['Basic recognition', 'Standard models', 'Email support'] },
        advanced: { price: 10000, period: 'month', features: ['Advanced recognition', 'Custom models', 'Priority support'] },
        enterprise: { price: 25000, period: 'month', features: ['Full vision suite', 'Custom training', 'Dedicated support'] }
      },
      icon: Eye,
      color: 'from-indigo-500 to-purple-600',
      category: 'Computer Vision',
      marketPrice: '$4,000-25,000/month',
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: 'ai-nlp-solutions',
      name: 'AI Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and content processing',
      features: [
        'Text analysis and classification',
        'Sentiment analysis',
        'Language translation',
        'Content generation',
        'Document processing',
        'Voice recognition',
        'Custom model training',
        'API development'
      ],
      pricing: {
        basic: { price: 3000, period: 'month', features: ['Basic NLP', 'Standard models', 'Email support'] },
        advanced: { price: 8000, period: 'month', features: ['Advanced NLP', 'Custom models', 'Priority support'] },
        enterprise: { price: 18000, period: 'month', features: ['Full NLP suite', 'Custom training', 'Dedicated support'] }
      },
      icon: FileText,
      color: 'from-teal-500 to-cyan-600',
      category: 'NLP',
      marketPrice: '$3,000-18,000/month',
      link: 'https://ziontechgroup.com/ai-nlp-solutions'
    },
    {
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      description: 'Advanced predictive modeling and forecasting using machine learning algorithms',
      features: [
        'Predictive analytics',
        'Forecasting models',
        'Risk assessment',
        'Demand prediction',
        'Financial modeling',
        'Market analysis',
        'Custom algorithms',
        'Real-time predictions'
      ],
      pricing: {
        basic: { price: 5000, period: 'month', features: ['Basic models', 'Standard predictions', 'Email support'] },
        advanced: { price: 12000, period: 'month', features: ['Advanced models', 'Custom predictions', 'Priority support'] },
        enterprise: { price: 25000, period: 'month', features: ['Full modeling suite', 'Custom algorithms', 'Dedicated support'] }
      },
      icon: TrendingUp,
      color: 'from-red-500 to-pink-600',
      category: 'Predictive Analytics',
      marketPrice: '$5,000-25,000/month',
      link: 'https://ziontechgroup.com/ai-predictive-modeling'
    },
    {
      id: 'ai-robotics',
      name: 'AI Robotics Solutions',
      description: 'Intelligent robotics and autonomous systems for industrial and commercial applications',
      features: [
        'Autonomous navigation',
        'Object manipulation',
        'Quality control',
        'Safety monitoring',
        'Human-robot interaction',
        'Custom programming',
        'Integration services',
        'Maintenance support'
      ],
      pricing: {
        basic: { price: 10000, period: 'month', features: ['Basic robotics', 'Standard programming', 'Email support'] },
        advanced: { price: 25000, period: 'month', features: ['Advanced robotics', 'Custom programming', 'Priority support'] },
        enterprise: { price: 50000, period: 'month', features: ['Full robotics suite', 'Custom development', 'Dedicated support'] }
      },
      icon: Bot,
      color: 'from-gray-500 to-slate-600',
      category: 'Robotics',
      marketPrice: '$10,000-50,000/month',
      link: 'https://ziontechgroup.com/ai-robotics'
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including consulting, automation, analytics, computer vision, NLP, and robotics. Professional AI solutions with competitive pricing." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, automation, computer vision, nlp, robotics, ai consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Professional AI services with enterprise-grade solutions and competitive pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Advanced
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI solutions for enterprises. From strategy consulting to implementation, 
                we provide cutting-edge artificial intelligence services that transform your business operations.
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
                  Get Consultation
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
                Our AI Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Professional AI services with enterprise-grade solutions, competitive pricing, and expert implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
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
                        ${service.pricing.basic.price.toLocaleString()}
                        <span className="text-sm text-gray-400">/{service.pricing.basic.period}</span>
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

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert AI Team</h3>
                <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years experience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with ISO 27001 certification and compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">300% average ROI with measurable business impact</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring for all AI solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get started with our AI services today. Contact us for a free consultation and custom solution design.
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

export default AIServicesPage;