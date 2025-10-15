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
  ExternalLink,
  Cpu,
  Eye,
  MessageSquare,
  Target,
  TrendingUp,
  Settings
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development and implementation planning for enterprise transformation.',
      features: [
        'AI readiness assessment',
        'Custom AI roadmap development',
        'ROI analysis and projections',
        'Technology stack recommendations',
        'Change management planning',
        'Ongoing strategic guidance'
      ],
      pricing: {
        starter: '$5,000/month',
        pro: '$15,000/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Accelerate AI adoption by 300%',
        'Reduce implementation risks',
        'Maximize AI investment returns',
        'Stay ahead of competition'
      ],
      link: 'https://ziontechgroup.com/ai-consulting',
      category: 'Consulting',
      icon: Brain
    },
    {
      id: 'machine-learning-platform',
      name: 'Enterprise ML Platform',
      description: 'End-to-end machine learning platform for building, deploying, and managing AI models at scale.',
      features: [
        'AutoML capabilities',
        'Model versioning and management',
        'Real-time model serving',
        'A/B testing framework',
        'Model monitoring and alerts',
        'Multi-cloud deployment'
      ],
      pricing: {
        starter: '$2,500/month',
        pro: '$7,500/month',
        enterprise: '$20,000/month'
      },
      benefits: [
        'Reduce ML development time by 70%',
        'Scale AI models efficiently',
        'Improve model accuracy',
        'Lower operational costs'
      ],
      link: 'https://ziontechgroup.com/ml-platform',
      category: 'Platform',
      icon: Cpu
    },
    {
      id: 'computer-vision-solutions',
      name: 'Computer Vision Solutions',
      description: 'Advanced computer vision and image recognition solutions for various industries and use cases.',
      features: [
        'Object detection and recognition',
        'Facial recognition systems',
        'Quality inspection automation',
        'Medical image analysis',
        'Real-time video processing',
        'Custom model training'
      ],
      pricing: {
        starter: '$1,500/month',
        pro: '$4,500/month',
        enterprise: '$12,000/month'
      },
      benefits: [
        'Automate visual inspections',
        'Improve accuracy by 95%',
        'Reduce manual labor costs',
        'Enable 24/7 monitoring'
      ],
      link: 'https://ziontechgroup.com/computer-vision',
      category: 'Computer Vision',
      icon: Eye
    },
    {
      id: 'natural-language-processing',
      name: 'NLP & Conversational AI',
      description: 'Natural language processing solutions including chatbots, language translation, and text analysis.',
      features: [
        'Multi-language support',
        'Sentiment analysis',
        'Text summarization',
        'Language translation',
        'Voice recognition',
        'Custom chatbot development'
      ],
      pricing: {
        starter: '$800/month',
        pro: '$2,400/month',
        enterprise: '$6,000/month'
      },
      benefits: [
        'Improve customer experience',
        'Automate text processing',
        'Support multiple languages',
        'Reduce response times'
      ],
      link: 'https://ziontechgroup.com/nlp-solutions',
      category: 'NLP',
      icon: MessageSquare
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics Engine',
      description: 'AI-powered predictive analytics platform for forecasting, risk assessment, and decision support.',
      features: [
        'Time series forecasting',
        'Risk prediction models',
        'Anomaly detection',
        'Demand forecasting',
        'Churn prediction',
        'Custom model development'
      ],
      pricing: {
        starter: '$1,200/month',
        pro: '$3,600/month',
        enterprise: '$9,000/month'
      },
      benefits: [
        'Make data-driven decisions',
        'Predict future trends',
        'Reduce business risks',
        'Optimize resource allocation'
      ],
      link: 'https://ziontechgroup.com/predictive-analytics',
      category: 'Analytics',
      icon: TrendingUp
    },
    {
      id: 'ai-automation',
      name: 'Intelligent Process Automation',
      description: 'AI-powered automation solutions that streamline business processes and eliminate manual work.',
      features: [
        'Document processing automation',
        'Workflow optimization',
        'Data extraction and validation',
        'Decision automation',
        'Integration with existing systems',
        'Performance monitoring'
      ],
      pricing: {
        starter: '$1,000/month',
        pro: '$3,000/month',
        enterprise: '$8,000/month'
      },
      benefits: [
        'Reduce manual work by 80%',
        'Improve process accuracy',
        'Scale operations efficiently',
        'Lower operational costs'
      ],
      link: 'https://ziontechgroup.com/ai-automation',
      category: 'Automation',
      icon: Settings
    },
    {
      id: 'ai-security',
      name: 'AI-Powered Security Suite',
      description: 'Advanced AI security solutions for threat detection, fraud prevention, and cybersecurity.',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Fraud prevention',
        'Network security monitoring',
        'Incident response automation',
        'Compliance reporting'
      ],
      pricing: {
        starter: '$2,000/month',
        pro: '$6,000/month',
        enterprise: '$15,000/month'
      },
      benefits: [
        'Detect threats in real-time',
        'Prevent fraud and attacks',
        'Reduce false positives',
        'Ensure compliance'
      ],
      link: 'https://ziontechgroup.com/ai-security',
      category: 'Security',
      icon: Shield
    },
    {
      id: 'ai-data-platform',
      name: 'AI Data Platform',
      description: 'Comprehensive data platform for AI model training, data processing, and analytics.',
      features: [
        'Data ingestion and processing',
        'Feature engineering tools',
        'Data quality monitoring',
        'Model training pipelines',
        'Data visualization',
        'API management'
      ],
      pricing: {
        starter: '$1,800/month',
        pro: '$5,400/month',
        enterprise: '$13,500/month'
      },
      benefits: [
        'Accelerate data processing',
        'Improve data quality',
        'Enable faster model development',
        'Reduce data management costs'
      ],
      link: 'https://ziontechgroup.com/ai-data-platform',
      category: 'Data Platform',
      icon: Database
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Shield, description: 'Medical imaging, drug discovery, patient care optimization' },
    { name: 'Finance', icon: BarChart3, description: 'Fraud detection, risk assessment, algorithmic trading' },
    { name: 'Manufacturing', icon: Settings, description: 'Quality control, predictive maintenance, supply chain optimization' },
    { name: 'Retail', icon: Target, description: 'Personalization, inventory management, customer analytics' },
    { name: 'Transportation', icon: Globe, description: 'Autonomous vehicles, route optimization, traffic management' },
    { name: 'Education', icon: Users, description: 'Personalized learning, assessment automation, student analytics' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for enterprise transformation. Machine learning, computer vision, NLP, and automation services. Expert AI consulting and implementation." />
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, AI consulting, enterprise AI, artificial intelligence" />
        <meta property="og:title" content="AI Solutions | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI solutions for enterprise transformation. Machine learning, computer vision, NLP, and automation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Solutions
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Transform Businesses
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation. 
                From machine learning platforms to computer vision - we deliver enterprise-grade AI that drives real results.
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
                  Get AI Consultation
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enterprise-grade solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Custom AI development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 expert support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to address every aspect of your business transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
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
                      Schedule Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join industry leaders who have already transformed their businesses with our AI solutions. 
              Let's discuss how AI can accelerate your growth and competitive advantage.
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

export default AISolutionsPage;