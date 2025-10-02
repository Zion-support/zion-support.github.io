import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Search,
  Mic,
  Eye,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Mail,
  Calendar,
  ShoppingCart
} from 'lucide-react';

export default function AIServices() {
  const title = 'AI Services & Solutions — Zion Tech Group';
  const description = 'Practical AI solutions for businesses: automation, analytics, customer service, and intelligent applications.';

  const aiServices = [
    {
      name: 'AI-Powered Customer Service',
      description: 'Intelligent chatbots and virtual assistants for 24/7 customer support',
      icon: MessageSquare,
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (web, mobile, social)',
        'Escalation to human agents when needed',
        'Integration with CRM and helpdesk systems',
        'Sentiment analysis and customer insights'
      ],
      pricing: '$1,200 - $8,000/month',
      delivery: '2-4 weeks',
      category: 'Customer Service',
      marketPrice: '$2,000-15,000/month',
      benefits: 'Reduce support costs by 70% while improving satisfaction'
    },
    {
      name: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and automation',
      icon: FileText,
      features: [
        'OCR with 99%+ accuracy for any document type',
        'Automated data extraction and validation',
        'Document classification and routing',
        'Contract analysis and risk assessment',
        'Compliance monitoring and reporting'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'Document AI',
      marketPrice: '$4,000-25,000/month',
      benefits: 'Process documents 10x faster with 99% accuracy'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Machine learning models for business forecasting and insights',
      icon: BarChart3,
      features: [
        'Sales forecasting and demand planning',
        'Customer behavior prediction',
        'Risk assessment and fraud detection',
        'Inventory optimization',
        'Real-time dashboard and reporting'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'Analytics',
      marketPrice: '$5,000-35,000/month',
      benefits: 'Improve decision-making with 85% accuracy predictions'
    },
    {
      name: 'AI Content Generation Suite',
      description: 'Automated content creation for marketing, documentation, and communication',
      icon: FileText,
      features: [
        'Blog posts, articles, and marketing copy',
        'Product descriptions and social media content',
        'Email campaigns and newsletters',
        'Technical documentation',
        'SEO-optimized content with keyword integration'
      ],
      pricing: '$800 - $5,000/month',
      delivery: '1-3 weeks',
      category: 'Content AI',
      marketPrice: '$1,500-10,000/month',
      benefits: 'Generate 50x more content with consistent quality'
    },
    {
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis for quality control, security, and automation',
      icon: Eye,
      features: [
        'Quality control and defect detection',
        'Object recognition and tracking',
        'Facial recognition and access control',
        'License plate and text recognition',
        'Real-time video analytics'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Computer Vision',
      marketPrice: '$8,000-50,000/month',
      benefits: 'Automate visual inspections with 99.5% accuracy'
    },
    {
      name: 'Voice & Speech Recognition',
      description: 'Voice-enabled applications and speech-to-text solutions',
      icon: Mic,
      features: [
        'Real-time speech-to-text transcription',
        'Voice commands and voice search',
        'Call center transcription and analysis',
        'Voice authentication and security',
        'Multi-language support'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Speech AI',
      marketPrice: '$4,000-20,000/month',
      benefits: 'Enable hands-free operations and improve accessibility'
    },
    {
      name: 'AI-Powered Search & Discovery',
      description: 'Intelligent search with semantic understanding and personalization',
      icon: Search,
      features: [
        'Semantic search with natural language queries',
        'Personalized search results and recommendations',
        'Auto-complete and query suggestions',
        'Search analytics and optimization',
        'Integration with existing systems'
      ],
      pricing: '$1,500 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'Search AI',
      marketPrice: '$3,000-18,000/month',
      benefits: 'Improve search relevance by 60% and user engagement'
    },
    {
      name: 'Intelligent Email Management',
      description: 'AI-powered email automation, categorization, and response generation',
      icon: Mail,
      features: [
        'Smart email categorization and prioritization',
        'Automated response generation',
        'Email scheduling and follow-up automation',
        'Spam detection and filtering',
        'Integration with CRM and calendar systems'
      ],
      pricing: '$500 - $3,000/month',
      delivery: '1-2 weeks',
      category: 'Email AI',
      marketPrice: '$1,000-6,000/month',
      benefits: 'Save 15+ hours per week on email management'
    },
    {
      name: 'AI Chatbot Development',
      description: 'Custom chatbots for websites, mobile apps, and messaging platforms',
      icon: MessageSquare,
      features: [
        'Custom conversation flows and logic',
        'Integration with popular messaging platforms',
        'Multi-language support',
        'Analytics and conversation insights',
        'Continuous learning and improvement'
      ],
      pricing: '$1,000 - $8,000/project',
      delivery: '2-4 weeks',
      category: 'Chatbot',
      marketPrice: '$3,000-15,000/project',
      benefits: 'Handle 80% of customer inquiries automatically'
    },
    {
      name: 'AI Recommendation Engine',
      description: 'Personalized product and content recommendations',
      icon: Users,
      features: [
        'Collaborative filtering and content-based recommendations',
        'Real-time personalization',
        'A/B testing and optimization',
        'Cross-platform recommendation sync',
        'Performance analytics and insights'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'Recommendation AI',
      marketPrice: '$5,000-30,000/month',
      benefits: 'Increase conversion rates by 25-40%'
    },
    {
      name: 'AI-Powered Fraud Detection',
      description: 'Machine learning models for detecting and preventing fraudulent activities',
      icon: Shield,
      features: [
        'Real-time fraud detection and prevention',
        'Transaction monitoring and analysis',
        'Behavioral pattern recognition',
        'Risk scoring and alerting',
        'Compliance reporting and audit trails'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Security AI',
      marketPrice: '$10,000-60,000/month',
      benefits: 'Reduce fraud losses by 90% while minimizing false positives'
    },
    {
      name: 'AI Process Automation',
      description: 'Intelligent automation for repetitive business processes',
      icon: Zap,
      features: [
        'Workflow automation with AI decision-making',
        'Data processing and validation',
        'Report generation and distribution',
        'Integration with existing business systems',
        'Monitoring and optimization'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Process AI',
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
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-blue-600">AI Services & Solutions</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Practical AI Solutions for Business
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with proven AI solutions. From automation to analytics, 
                we deliver real-world AI applications that drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {contactInfo.phone}
                </a>
                <span className="text-gray-400 hidden sm:block">•</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Our Pricing:</span>
                      <span className="font-semibold text-green-600">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Market Rate:</span>
                      <span className="text-gray-700">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="text-blue-600 font-medium">{service.delivery}</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-green-800 font-medium">
                        💡 {service.benefits}
                      </p>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Start Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Process Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
              <p className="text-xl text-gray-600">How we deliver successful AI solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Analyze your business needs and identify AI opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Prep</h3>
                <p className="text-gray-600">Clean, prepare, and optimize your data for AI models</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Model Training</h3>
                <p className="text-gray-600">Develop and train AI models tailored to your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-600">Seamlessly integrate AI solutions into your existing systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">5</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600">Monitor, maintain, and continuously improve AI performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free AI consultation and discover how AI can transform your operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}