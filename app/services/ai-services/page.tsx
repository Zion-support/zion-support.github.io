import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Eye, 
  FileText, 
  BarChart3, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Cpu,
  MessageSquare,
  TrendingUp,
  Lock,
  Globe,
  Users,
  Database,
  Activity,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Rocket,
  Award,
  Building,
  Heart,
  ShoppingCart,
  CreditCard
} from 'lucide-react';

export default function AIServicesPage() {
  const title = 'AI Services & Solutions — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including computer vision, NLP, predictive analytics, voice recognition, fraud detection, and autonomous document processing. Production-ready with proven ROI.';

  const aiServices = [
    {
      name: 'Computer Vision for Quality Control',
      description: 'AI-powered visual inspection for manufacturing, retail, and healthcare with 99.5% accuracy',
      icon: Eye,
      features: [
        'Real-time defect detection with 99.5% accuracy',
        'Custom model training for specific use cases',
        'Integration with existing production lines',
        'Automated reporting and analytics',
        'Edge deployment for low latency',
        'Continuous learning and improvement',
        'Multi-camera support and 3D analysis',
        'Compliance reporting and audit trails'
      ],
      pricing: '$3,500 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Computer Vision',
      benefits: 'Reduce defects by 90%, improve quality consistency, save $500K+ annually',
      marketPrice: '$5,000 - $50,000/month',
      link: '/services/ai-services/computer-vision',
      useCases: ['Manufacturing QC', 'Food Safety', 'Medical Imaging', 'Retail Analytics'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'Edge Computing']
    },
    {
      name: 'Natural Language Processing Platform',
      description: 'Advanced NLP for document analysis, sentiment, content generation, and multilingual support',
      icon: FileText,
      features: [
        'Document classification and extraction',
        'Sentiment analysis and emotion detection',
        'Content generation and summarization',
        'Multi-language support (50+ languages)',
        'Custom model fine-tuning',
        'API integration and deployment',
        'Real-time processing capabilities',
        'Compliance and privacy controls'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'NLP',
      benefits: 'Automate 80% of document processing, improve accuracy by 95%',
      marketPrice: '$3,000 - $30,000/month',
      link: '/services/ai-services/nlp-platform',
      useCases: ['Customer Support', 'Legal Document Review', 'Content Moderation', 'Market Research'],
      technologies: ['BERT', 'GPT', 'Transformers', 'SpaCy']
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'Machine learning models for forecasting, risk assessment, and business optimization',
      icon: BarChart3,
      features: [
        'Time series forecasting with 95% accuracy',
        'Risk assessment and scoring models',
        'Demand prediction and optimization',
        'Real-time model monitoring',
        'A/B testing and experimentation',
        'Custom algorithm development',
        'Automated feature engineering',
        'Business intelligence integration'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Predictive Analytics',
      benefits: 'Improve forecasting accuracy by 60%, reduce risks by 75%',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/predictive-analytics',
      useCases: ['Sales Forecasting', 'Risk Management', 'Supply Chain', 'Financial Planning'],
      technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'MLflow']
    },
    {
      name: 'Voice Recognition & Speech Analytics',
      description: 'Advanced speech processing for call centers, meetings, and accessibility applications',
      icon: Mic,
      features: [
        'Real-time speech-to-text transcription',
        'Speaker identification and diarization',
        'Sentiment analysis from voice patterns',
        'Call center analytics and insights',
        'Multi-language support (30+ languages)',
        'Custom vocabulary and training',
        'Noise reduction and enhancement',
        'Integration with CRM systems'
      ],
      pricing: '$1,500 - $12,000/month',
      delivery: '3-5 weeks',
      category: 'Speech Processing',
      benefits: 'Improve call center efficiency by 50%, better customer insights',
      marketPrice: '$2,500 - $25,000/month',
      link: '/services/ai-services/voice-recognition',
      useCases: ['Call Centers', 'Meeting Transcription', 'Voice Assistants', 'Accessibility'],
      technologies: ['Whisper', 'DeepSpeech', 'SpeechBrain', 'Real-time Processing']
    },
    {
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud prevention for financial services, e-commerce, and digital transactions',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Behavioral analysis and anomaly detection',
        'Machine learning model training',
        'Risk scoring and decision automation',
        'False positive reduction (90% improvement)',
        'Compliance and audit trails',
        'Multi-channel fraud detection',
        'Adaptive learning algorithms'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Security',
      benefits: 'Reduce fraud losses by 85%, improve customer trust',
      marketPrice: '$8,000 - $60,000/month',
      link: '/services/ai-services/fraud-detection',
      useCases: ['Banking', 'E-commerce', 'Insurance', 'Digital Payments'],
      technologies: ['Isolation Forest', 'Autoencoders', 'Graph Neural Networks', 'Real-time ML']
    },
    {
      name: 'Autonomous Document Processing',
      description: 'End-to-end document workflow automation with AI intelligence and human oversight',
      icon: FileText,
      features: [
        'Intelligent document classification',
        'Data extraction and validation',
        'Workflow automation and routing',
        'Quality assurance and human review',
        'Integration with business systems',
        'Compliance and audit capabilities',
        'Multi-format support (PDF, images, scans)',
        'Custom field extraction'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Document AI',
      benefits: 'Process documents 10x faster, reduce errors by 95%',
      marketPrice: '$4,000 - $35,000/month',
      link: '/services/ai-services/document-processing',
      useCases: ['Invoice Processing', 'Contract Analysis', 'Insurance Claims', 'HR Documents'],
      technologies: ['OCR', 'Document AI', 'Workflow Automation', 'RPA Integration']
    },
    {
      name: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and services',
      icon: TrendingUp,
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Hybrid recommendation systems',
        'Real-time personalization',
        'A/B testing and optimization',
        'Cold start problem solutions',
        'Multi-objective optimization',
        'Privacy-preserving techniques'
      ],
      pricing: '$1,800 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Recommendation Systems',
      benefits: 'Increase conversion rates by 35%, improve customer engagement',
      marketPrice: '$3,000 - $25,000/month',
      link: '/services/ai-services/recommendation-engine',
      useCases: ['E-commerce', 'Content Platforms', 'Streaming Services', 'Social Media'],
      technologies: ['Matrix Factorization', 'Deep Learning', 'Graph Neural Networks', 'Real-time ML']
    },
    {
      name: 'AI-Powered Customer Service',
      description: 'Intelligent chatbot with sentiment analysis, ticket routing, and escalation management',
      icon: MessageSquare,
      features: [
        'Natural language processing with 95% accuracy',
        'Multi-channel support (web, email, social media)',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Real-time analytics and performance metrics',
        'Custom training on your business data',
        'Voice and text support',
        '24/7 availability with human handoff'
      ],
      pricing: '$1,200 - $8,500/month',
      delivery: '2-4 weeks',
      category: 'Customer Experience',
      benefits: 'Reduce support costs by 60%, improve response time by 80%',
      marketPrice: '$2,000 - $15,000/month',
      link: '/services/ai-services/customer-service',
      useCases: ['Customer Support', 'Sales Assistance', 'Technical Support', 'FAQ Automation'],
      technologies: ['GPT', 'BERT', 'Dialogflow', 'Rasa']
      marketPrice: '$6,000-40,000/month',
      benefits: 'Automate 70% of repetitive tasks, saving 20+ hours weekly'
    },
    {
      name: 'AI-Powered Supply Chain Optimizer',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: Database,
      features: [
        'Demand forecasting with 95% accuracy',
        'Supplier risk assessment and monitoring',
        'Route optimization and logistics planning',
        'Inventory optimization across multiple locations',
        'Real-time supply chain visibility and alerts'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-12 weeks',
      category: 'Supply Chain AI',
      marketPrice: '$10,000-60,000/month',
      benefits: 'Reduce supply chain costs by 25% and improve delivery times by 40%'
    },
    {
      name: 'AI Financial Risk Assessment',
      description: 'Advanced machine learning models for financial risk analysis and compliance',
      icon: Shield,
      features: [
        'Credit risk scoring and assessment',
        'Market risk analysis and portfolio optimization',
        'Fraud detection and prevention',
        'Regulatory compliance monitoring',
        'Real-time risk alerts and reporting'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'FinTech AI',
      marketPrice: '$15,000-100,000/month',
      benefits: 'Reduce financial risks by 60% and ensure regulatory compliance'
    },
    {
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced AI models',
      icon: Eye,
      features: [
        'Medical image analysis (X-ray, MRI, CT scans)',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk stratification',
        'Integration with EMR systems'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Healthcare AI',
      marketPrice: '$30,000-200,000/month',
      benefits: 'Improve diagnostic accuracy by 40% and reduce misdiagnosis by 80%'
    },
    {
      name: 'AI Energy Management System',
      description: 'Smart energy optimization for buildings and industrial facilities',
      icon: Zap,
      features: [
        'Energy consumption prediction and optimization',
        'Renewable energy integration management',
        'Demand response and load balancing',
        'Equipment maintenance prediction',
        'Carbon footprint tracking and optimization'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-10 weeks',
      category: 'Energy AI',
      marketPrice: '$8,000-45,000/month',
      benefits: 'Reduce energy costs by 35% and carbon footprint by 50%'
    },
    {
      name: 'AI-Powered Talent Acquisition',
      description: 'Intelligent recruitment and candidate matching system',
      icon: Users,
      features: [
        'Resume parsing and candidate screening',
        'Skills matching and job fit analysis',
        'Interview scheduling and coordination',
        'Candidate ranking and recommendation',
        'Diversity and inclusion analytics'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'HR AI',
      marketPrice: '$5,000-30,000/month',
      benefits: 'Reduce hiring time by 50% and improve candidate quality by 60%'
    },
    {
      name: 'AI Quality Control System',
      description: 'Automated quality inspection and defect detection for manufacturing',
      icon: Eye,
      features: [
        'Real-time visual inspection and defect detection',
        'Quality metrics tracking and analysis',
        'Predictive quality maintenance',
        'Root cause analysis and reporting',
        'Integration with manufacturing systems'
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-12 weeks',
      category: 'Manufacturing AI',
      marketPrice: '$12,000-75,000/month',
      benefits: 'Improve product quality by 45% and reduce defect rates by 70%'
    },
    {
      name: 'AI-Powered Market Research',
      description: 'Intelligent market analysis and competitive intelligence platform',
      icon: BarChart3,
      features: [
        'Market trend analysis and forecasting',
        'Competitor analysis and monitoring',
        'Customer sentiment analysis',
        'Price optimization recommendations',
        'Market opportunity identification'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'Market Research AI',
      marketPrice: '$7,000-35,000/month',
      benefits: 'Make data-driven market decisions with 90% accuracy'
    },
    {
      name: 'AI Autonomous Vehicle Fleet Management',
      description: 'Intelligent fleet management and route optimization for autonomous vehicles',
      icon: Globe,
      features: [
        'Route optimization and traffic prediction',
        'Vehicle maintenance scheduling',
        'Fuel efficiency optimization',
        'Real-time fleet monitoring',
        'Safety compliance and reporting'
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '10-20 weeks',
      category: 'Autonomous Vehicles',
      marketPrice: '$20,000-150,000/month',
      benefits: 'Reduce operational costs by 40% and improve safety by 80%'
    },
    {
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection and response using machine learning',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and prioritization',
        'Security posture monitoring'
      ],
      pricing: '$7,000 - $45,000/month',
      delivery: '8-16 weeks',
      category: 'Cybersecurity AI',
      marketPrice: '$15,000-90,000/month',
      benefits: 'Reduce security incidents by 85% and response time by 90%'
    },
    {
      name: 'AI Personalization Engine',
      description: 'Real-time personalization for websites, apps, and digital experiences',
      icon: Users,
      features: [
        'Behavioral analysis and user profiling',
        'Real-time content personalization',
        'Product recommendation optimization',
        'A/B testing and experimentation',
        'Cross-platform personalization sync'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-10 weeks',
      category: 'Personalization AI',
      marketPrice: '$8,000-45,000/month',
      benefits: 'Increase conversion rates by 35% and user engagement by 60%'
    },
    {
      name: 'AI-Powered Climate Analytics',
      description: 'Climate risk assessment and environmental impact analysis platform',
      icon: Globe,
      features: [
        'Climate risk modeling and assessment',
        'Environmental impact tracking',
        'Carbon credit optimization',
        'Weather prediction and planning',
        'Sustainability reporting automation'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '8-14 weeks',
      category: 'Climate AI',
      marketPrice: '$10,000-55,000/month',
      benefits: 'Optimize environmental strategies and reduce climate risks by 50%'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'AI Models Deployed', value: '200+', icon: Brain },
    { label: 'Average Accuracy', value: '95%', icon: Target },
    { label: 'Cost Savings', value: '60%', icon: DollarSign },
    { label: 'Implementation Time', value: '4 weeks', icon: Clock }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Medical imaging, drug discovery, patient care' },
    { name: 'Finance', icon: CreditCard, description: 'Fraud detection, risk assessment, trading' },
    { name: 'Manufacturing', icon: Building, description: 'Quality control, predictive maintenance' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Recommendations, inventory, pricing' },
    { name: 'Education', icon: Users, description: 'Personalized learning, assessment' },
    { name: 'Transportation', icon: Globe, description: 'Autonomous vehicles, route optimization' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services/ai-services`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">AI Services & Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Artificial Intelligence Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Production-ready AI solutions with proven ROI, fast implementation, and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored for specific industry needs and compliance requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver production-ready AI solutions with proven methodologies and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Production-Ready</h3>
                <p className="text-gray-600">All solutions are battle-tested and ready for enterprise deployment with full documentation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Most AI solutions deployed in 4-8 weeks with agile methodology and regular updates.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 340% ROI with documented case studies and measurable business impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Implement AI?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free AI consultation and custom solution proposal tailored to your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-blue-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Free AI Consultation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>AI readiness assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom solution architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>ROI projections and timeline</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}