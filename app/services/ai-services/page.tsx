// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Bot, 
  MessageSquare, 
  FileText, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Eye, 
  Mic, 
  Camera, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Settings,
  Database,
  Network,
  Layers,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Lock,
  Target,
  Activity,
  PieChart,
  LineChart,
  RefreshCw,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Package,
  Truck,
  Wifi,
  Monitor,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Terminal,
  GitBranch,
  Container,
  Docker,
  Key,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Services & Solutions | Zion Tech Group - Advanced AI Consulting',
  description: 'Advanced AI services including autonomous systems, machine learning, natural language processing, computer vision, and intelligent automation. Transform your business with AI.',
  keywords: 'AI services, machine learning, natural language processing, computer vision, autonomous systems, AI consulting, intelligent automation',
};

export default function AIServicesPage() {
  const aiServices = [
    {
      id: 'rag-platform-in-a-box',
      title: 'RAG Platform-in-a-Box',
      subtitle: 'Retrieval Augmented Generation Stack',
      description: 'End-to-end retrieval augmented generation platform with governance, analytics, and enterprise-grade security for knowledge management.',
      icon: Brain,
      category: 'Generative AI',
      pricing: '$4,000 - $18,000/month',
      delivery: '4-8 weeks',
      features: [
        'Multi-source data connectors (docs, tickets, CRM, data lakes)',
        'Advanced chunking and embedding strategies',
        'Vector database optimization and management',
        'Citation tracking and source verification',
        'Feedback loops and continuous learning',
        'PII scrubbing and policy guardrails',
        'Multi-modal content support',
        'Enterprise SSO and access controls'
      ],
      benefits: [
        '90% reduction in knowledge search time',
        'Improved decision-making accuracy',
        'Automated knowledge base maintenance',
        'Enhanced customer support capabilities'
      ],
      useCases: [
        'Enterprise knowledge management',
        'Customer support automation',
        'Research and development acceleration',
        'Document analysis and insights'
      ],
      link: '/services/ai-services/rag-platform-in-a-box',
      popularity: 92,
      savings: '$150K+ annually'
    },
    {
      id: 'mlops-as-a-service',
      title: 'MLOps as a Service',
      subtitle: 'Managed Machine Learning Operations',
      description: 'Complete MLOps platform with managed pipelines for training, evaluation, deployment, and monitoring of machine learning models.',
      icon: Settings,
      category: 'MLOps',
      pricing: '$3,500 - $16,000/month',
      delivery: '4-8 weeks',
      features: [
        'Feature stores and data pipeline management',
        'Model registry and version control',
        'Automated training and evaluation pipelines',
        'Canary and A/B testing deployments',
        'Data drift and performance monitoring',
        'Model cards and lineage tracking',
        'Reproducible experiment management',
        'Compliance-ready audit trails'
      ],
      benefits: [
        '10x faster model deployment',
        'Reduced model drift and failures',
        'Improved model performance tracking',
        'Streamlined ML operations'
      ],
      useCases: [
        'Enterprise ML model management',
        'Automated model deployment',
        'ML performance monitoring',
        'Data science team productivity'
      ],
      link: '/services/ai-services/mlops-as-a-service',
      popularity: 89,
      savings: '$200K+ annually'
    },
    {
      id: 'call-center-voice-intelligence',
      title: 'Call Center Voice Intelligence',
      subtitle: 'Real-Time Voice AI Platform',
      description: 'Advanced voice AI with real-time transcription, sentiment analysis, QA scoring, and automated agent coaching.',
      icon: Mic,
      category: 'Voice AI',
      pricing: '$1,200 - $6,000/month',
      delivery: '3-6 weeks',
      features: [
        'Real-time speech-to-text transcription',
        'PCI/PII redaction and consent workflows',
        'Sentiment analysis and emotion detection',
        'Automated quality assurance scoring',
        'Agent coaching and performance insights',
        'Multi-language support and accents',
        'Low-latency streaming processing',
        'Integration with CRM and ticketing systems'
      ],
      benefits: [
        '50% improvement in call quality scores',
        'Real-time agent coaching and feedback',
        'Automated compliance monitoring',
        'Enhanced customer experience'
      ],
      useCases: [
        'Call center quality management',
        'Customer service optimization',
        'Sales performance tracking',
        'Compliance and audit automation'
      ],
      link: '/services/ai-services/call-center-voice-intelligence',
      popularity: 85,
      savings: '$100K+ annually'
    },
    {
      id: 'computer-vision-automation',
      title: 'Computer Vision Automation',
      subtitle: 'Visual Intelligence Platform',
      description: 'Advanced computer vision solutions for object detection, image analysis, quality control, and visual automation.',
      icon: Eye,
      category: 'Computer Vision',
      pricing: '$2,500 - $12,000/month',
      delivery: '4-10 weeks',
      features: [
        'Object detection and classification',
        'Quality control and defect detection',
        'Facial recognition and biometric analysis',
        'Document and text extraction (OCR)',
        'Video analytics and monitoring',
        'Real-time image processing',
        'Custom model training and fine-tuning',
        'Edge deployment and optimization'
      ],
      benefits: [
        '99% accuracy in quality control',
        'Automated visual inspection processes',
        'Real-time monitoring and alerts',
        'Reduced manual inspection costs'
      ],
      useCases: [
        'Manufacturing quality control',
        'Retail inventory management',
        'Security and surveillance',
        'Document processing automation'
      ],
      link: '/services/ai-services/computer-vision-automation',
      popularity: 87,
      savings: '$120K+ annually'
    },
    {
      id: 'predictive-analytics-engine',
      title: 'Predictive Analytics Engine',
      subtitle: 'Advanced Forecasting Platform',
      description: 'Sophisticated predictive analytics with time series forecasting, demand prediction, and risk assessment models.',
      icon: BarChart3,
      category: 'Predictive Analytics',
      pricing: '$2,800 - $14,000/month',
      delivery: '3-8 weeks',
      features: [
        'Time series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Risk assessment and fraud detection',
        'Customer behavior prediction',
        'Churn prediction and retention modeling',
        'Financial forecasting and budgeting',
        'Real-time model updates and retraining',
        'Custom algorithm development'
      ],
      benefits: [
        '25% improvement in forecast accuracy',
        'Reduced inventory costs and waste',
        'Better risk management and fraud prevention',
        'Enhanced business planning capabilities'
      ],
      useCases: [
        'Supply chain optimization',
        'Financial risk management',
        'Customer retention programs',
        'Inventory and demand planning'
      ],
      link: '/services/ai-services/predictive-analytics-engine',
      popularity: 84,
      savings: '$180K+ annually'
    },
    {
      id: 'autonomous-business-processes',
      title: 'Autonomous Business Processes',
      subtitle: 'Self-Managing AI Systems',
      description: 'Fully autonomous AI systems that manage entire business processes with minimal human intervention.',
      icon: Bot,
      category: 'Autonomous AI',
      pricing: '$5,000 - $25,000/month',
      delivery: '8-16 weeks',
      features: [
        'End-to-end process automation',
        'Intelligent decision-making systems',
        'Self-healing and adaptive processes',
        'Cross-system integration and orchestration',
        'Performance monitoring and optimization',
        'Exception handling and escalation',
        'Continuous learning and improvement',
        'Human-in-the-loop capabilities'
      ],
      benefits: [
        '80% reduction in manual processes',
        '24/7 autonomous operation',
        'Improved process consistency',
        'Reduced operational costs'
      ],
      useCases: [
        'Financial process automation',
        'Supply chain management',
        'Customer service operations',
        'IT operations and maintenance'
      ],
      link: '/services/ai-services/autonomous-business-processes',
      popularity: 91,
      savings: '$300K+ annually'
    },
    {
      id: 'multimodal-ai-platform',
      title: 'Multimodal AI Platform',
      subtitle: 'Text, Voice, and Visual AI',
      description: 'Unified AI platform combining text, voice, and visual processing for comprehensive intelligent automation.',
      icon: Layers,
      category: 'Multimodal AI',
      pricing: '$4,500 - $20,000/month',
      delivery: '6-12 weeks',
      features: [
        'Text, voice, and image processing integration',
        'Cross-modal understanding and reasoning',
        'Unified API for all AI capabilities',
        'Context-aware response generation',
        'Multi-language and accent support',
        'Real-time processing and streaming',
        'Custom model training and fine-tuning',
        'Enterprise security and compliance'
      ],
      benefits: [
        'Comprehensive AI capabilities in one platform',
        'Improved accuracy through multimodal fusion',
        'Simplified integration and management',
        'Enhanced user experience across channels'
      ],
      useCases: [
        'Omnichannel customer service',
        'Content creation and management',
        'Intelligent document processing',
        'Virtual assistant applications'
      ],
      link: '/services/ai-services/multimodal-ai-platform',
      popularity: 88,
      savings: '$250K+ annually'
    },
    {
      id: 'ai-security-framework',
      title: 'AI Security Framework',
      subtitle: 'Enterprise AI Security & Governance',
      description: 'Comprehensive AI security framework with model protection, data privacy, and compliance management.',
      icon: Shield,
      category: 'AI Security',
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      features: [
        'Model security and adversarial protection',
        'Data privacy and encryption',
        'AI bias detection and mitigation',
        'Compliance monitoring and reporting',
        'Secure model deployment and serving',
        'Access control and audit trails',
        'Threat detection and response',
        'AI governance and policy management'
      ],
      benefits: [
        'Enhanced AI model security',
        'Compliance with AI regulations',
        'Reduced AI-related risks',
        'Improved trust and transparency'
      ],
      useCases: [
        'Enterprise AI governance',
        'Financial services AI security',
        'Healthcare AI compliance',
        'Government AI regulations'
      ],
      link: '/services/ai-services/ai-security-framework',
      popularity: 86,
      savings: '$160K+ annually'
    },
    {
      id: 'conversational-ai-platform',
      title: 'Conversational AI Platform',
      subtitle: 'Advanced Chatbot & Voice Assistant',
      description: 'Sophisticated conversational AI with natural language understanding, context management, and human-like interactions.',
      icon: MessageSquare,
      category: 'Conversational AI',
      pricing: '$1,800 - $8,000/month',
      delivery: '3-6 weeks',
      features: [
        'Natural language understanding and generation',
        'Context-aware conversation management',
        'Multi-turn dialogue handling',
        'Intent recognition and entity extraction',
        'Sentiment analysis and emotion detection',
        'Integration with business systems',
        'Voice and text interaction modes',
        'Analytics and conversation insights'
      ],
      benefits: [
        '24/7 customer support availability',
        'Improved customer satisfaction',
        'Reduced support costs',
        'Scalable customer interactions'
      ],
      useCases: [
        'Customer service automation',
        'Sales and lead qualification',
        'Internal employee assistance',
        'Educational and training applications'
      ],
      link: '/services/ai-services/conversational-ai-platform',
      popularity: 90,
      savings: '$140K+ annually'
    },
    {
      id: 'ai-content-intelligence',
      title: 'AI Content Intelligence',
      subtitle: 'Smart Content Management & Creation',
      description: 'Intelligent content management with automated creation, optimization, personalization, and performance analytics.',
      icon: FileText,
      category: 'Content AI',
      pricing: '$2,200 - $10,000/month',
      delivery: '3-6 weeks',
      features: [
        'Automated content generation and optimization',
        'Content personalization and targeting',
        'SEO optimization and keyword analysis',
        'Content performance analytics',
        'Brand voice consistency management',
        'Multi-language content creation',
        'Content approval workflows',
        'Integration with CMS and marketing tools'
      ],
      benefits: [
        '10x faster content creation',
        'Improved content performance',
        'Consistent brand messaging',
        'Reduced content production costs'
      ],
      useCases: [
        'Marketing content automation',
        'E-commerce product descriptions',
        'Blog and article generation',
        'Social media content creation'
      ],
      link: '/services/ai-services/ai-content-intelligence',
      popularity: 87,
      savings: '$110K+ annually'
    },
    {
      id: 'ai-process-mining',
      title: 'AI Process Mining',
      subtitle: 'Intelligent Process Discovery & Optimization',
      description: 'AI-powered process mining with automated discovery, analysis, and optimization of business processes.',
      icon: Activity,
      category: 'Process Intelligence',
      pricing: '$2,500 - $12,000/month',
      delivery: '4-8 weeks',
      features: [
        'Automated process discovery and mapping',
        'Process performance analysis and benchmarking',
        'Bottleneck identification and optimization',
        'Compliance monitoring and audit trails',
        'Predictive process analytics',
        'Process simulation and what-if analysis',
        'Integration with business systems',
        'Real-time process monitoring'
      ],
      benefits: [
        'Complete process visibility',
        'Automated process optimization',
        'Improved compliance and auditability',
        'Reduced process inefficiencies'
      ],
      useCases: [
        'Business process optimization',
        'Compliance and audit support',
        'Digital transformation planning',
        'Operational excellence programs'
      ],
      link: '/services/ai-services/ai-process-mining',
      popularity: 83,
      savings: '$170K+ annually'
    },
    {
      id: 'ai-recommendation-engine',
      title: 'AI Recommendation Engine',
      subtitle: 'Personalized Recommendation Platform',
      description: 'Advanced recommendation engine with machine learning, collaborative filtering, and real-time personalization.',
      icon: Target,
      category: 'Recommendation Systems',
      pricing: '$1,500 - $7,500/month',
      delivery: '3-6 weeks',
      features: [
        'Collaborative and content-based filtering',
        'Real-time personalization and adaptation',
        'A/B testing and optimization',
        'Multi-objective recommendation optimization',
        'Cold start problem handling',
        'Explainable recommendation insights',
        'Scalable recommendation serving',
        'Integration with e-commerce and content platforms'
      ],
      benefits: [
        '30% increase in conversion rates',
        'Improved customer engagement',
        'Personalized user experiences',
        'Higher customer lifetime value'
      ],
      useCases: [
        'E-commerce product recommendations',
        'Content and media recommendations',
        'Financial product suggestions',
        'Job and candidate matching'
      ],
      link: '/services/ai-services/ai-recommendation-engine',
      popularity: 89,
      savings: '$130K+ annually'
    }
  ];

  const categories = [
    { name: 'Generative AI', icon: Brain, count: 1 },
    { name: 'MLOps', icon: Settings, count: 1 },
    { name: 'Voice AI', icon: Mic, count: 1 },
    { name: 'Computer Vision', icon: Eye, count: 1 },
    { name: 'Predictive Analytics', icon: BarChart3, count: 1 },
    { name: 'Autonomous AI', icon: Bot, count: 1 },
    { name: 'Multimodal AI', icon: Layers, count: 1 },
    { name: 'AI Security', icon: Shield, count: 1 },
    { name: 'Conversational AI', icon: MessageSquare, count: 1 },
    { name: 'Content AI', icon: FileText, count: 1 },
    { name: 'Process Intelligence', icon: Activity, count: 1 },
    { name: 'Recommendation Systems', icon: Target, count: 1 }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Brain className="w-4 h-4" />
                Advanced AI Solutions
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Services & Solutions
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Transform Your Business with AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced AI services including autonomous systems, machine learning, natural language processing, computer vision, and intelligent automation. Build the future with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
              <div className="text-sm text-gray-600">AI Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3-16</div>
              <div className="text-sm text-gray-600">Weeks Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$100K+</div>
              <div className="text-sm text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            AI Services by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                <category.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <div className="text-sm font-semibold text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} solution{category.count !== 1 ? 's' : ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our AI Services & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{service.popularity}%</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        Pricing
                      </span>
                      <span className="font-semibold text-purple-600">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        Delivery
                      </span>
                      <span className="font-semibold text-green-600">{service.delivery}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <TrendingUp className="w-4 h-4" />
                        Savings
                      </span>
                      <span className="font-semibold text-blue-600">{service.savings}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-purple-600 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to={service.link}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a 
                      href={`mailto:${contactInfo.email}?subject=Interest in ${service.title}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a comprehensive AI strategy assessment and roadmap for your digital transformation. Most projects deliver within 3-16 weeks with immediate ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}?subject=AI Services Consultation Request`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-purple-100">
            <p className="text-lg font-semibold mb-2">📍 Address:</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure AI model accuracy and reliability?</h3>
              <p className="text-gray-600">
                We implement rigorous testing, validation, and monitoring processes including A/B testing, continuous model evaluation, and automated drift detection. All models undergo extensive validation before deployment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide ongoing support and maintenance?</h3>
              <p className="text-gray-600">
                Yes! We provide comprehensive support including model monitoring, performance optimization, regular updates, and 24/7 technical support. Our MLOps platform ensures continuous model health and performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you integrate with our existing systems?</h3>
              <p className="text-gray-600">
                Absolutely! All our AI solutions are designed to integrate seamlessly with existing business systems, databases, and workflows. We provide APIs, connectors, and custom integration services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you handle data privacy and security?</h3>
              <p className="text-gray-600">
                We implement enterprise-grade security measures including data encryption, access controls, audit trails, and compliance with GDPR, HIPAA, and other regulations. Data privacy and security are built into every solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}