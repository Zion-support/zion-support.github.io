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
      name: 'Autonomous Business Process Orchestration',
      description: 'AI-driven workflow automation that learns and optimizes business processes autonomously',
      icon: Zap,
      features: [
        'Self-learning process optimization',
        'Cross-system integration and automation',
        'Dynamic workflow adaptation',
        'Performance monitoring and improvement',
        'Exception handling and recovery'
      ],
      pricing: '$3,500 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Process Automation',
      marketPrice: '$5,000-40,000/month',
      benefits: 'Increase operational efficiency by 60-85%'
    },
    {
      name: 'Predictive Maintenance & Asset Management',
      description: 'AI-powered predictive analytics for equipment maintenance and asset optimization',
      icon: Shield,
      features: [
        'IoT sensor data analysis and pattern recognition',
        'Predictive failure modeling and alerts',
        'Maintenance scheduling optimization',
        'Asset lifecycle management',
        'Cost-benefit analysis and ROI tracking'
      ],
      pricing: '$2,999 - $18,000/month',
      delivery: '3-6 weeks',
      category: 'Industrial AI',
      marketPrice: '$4,000-30,000/month',
      benefits: 'Reduce downtime by 40-70% and maintenance costs by 25-50%'
    },
    {
      name: 'Advanced Computer Vision Analytics',
      description: 'Sophisticated image and video analysis for security, quality control, and business insights',
      icon: Eye,
      features: [
        'Real-time object detection and recognition',
        'Quality control and defect detection',
        'Security monitoring and threat detection',
        'Behavioral analysis and pattern recognition',
        'Custom model training and deployment'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '3-5 weeks',
      category: 'Computer Vision',
      marketPrice: '$3,500-25,000/month',
      benefits: 'Improve accuracy by 90%+ and reduce manual inspection costs'
    },
    {
      name: 'AI-Powered Fraud Detection & Risk Management',
      description: 'Advanced fraud prevention and risk assessment using machine learning algorithms',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring and alert systems',
        'Adaptive learning and model updates',
        'Regulatory compliance and reporting'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-6 weeks',
      category: 'Financial AI',
      marketPrice: '$6,000-35,000/month',
      benefits: 'Reduce fraud losses by 60-85% and false positives by 40%'
    },
    {
      name: 'Intelligent Supply Chain Optimization',
      description: 'AI-driven supply chain management with demand forecasting and logistics optimization',
      icon: Database,
      features: [
        'Demand forecasting and inventory optimization',
        'Route optimization and logistics planning',
        'Supplier performance analysis',
        'Risk assessment and mitigation',
        'Sustainability tracking and optimization'
      ],
      pricing: '$3,000 - $18,000/month',
      delivery: '4-7 weeks',
      category: 'Supply Chain AI',
      marketPrice: '$5,000-30,000/month',
      benefits: 'Reduce costs by 20-35% and improve delivery times by 30%'
    },
    {
      name: 'AI-Powered Personalization Engine',
      description: 'Advanced personalization platform for customer experiences and content delivery',
      icon: Users,
      features: [
        'Real-time customer behavior analysis',
        'Dynamic content personalization',
        'Recommendation engine optimization',
        'A/B testing and performance tracking',
        'Cross-channel experience consistency'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '3-5 weeks',
      category: 'Personalization',
      marketPrice: '$3,000-20,000/month',
      benefits: 'Increase conversion rates by 25-60% and customer engagement by 40%'
    },
    {
      name: 'Autonomous Data Quality & Governance',
      description: 'AI-powered data quality management with automated governance and compliance',
      icon: Database,
      features: [
        'Automated data quality assessment',
        'Data lineage tracking and documentation',
        'Privacy compliance and GDPR automation',
        'Data cataloging and discovery',
        'Anomaly detection and remediation'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'Data Management',
      marketPrice: '$4,000-25,000/month',
      benefits: 'Improve data quality by 80% and reduce compliance costs by 50%'
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