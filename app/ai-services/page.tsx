import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, DollarSign, Star, Users, Clock, Eye, MessageSquare, BarChart3, FileText, Settings, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for blogs, articles, marketing copy, and social media.',
      features: [
        'Multi-language content generation (50+ languages)',
        'SEO-optimized content with keyword integration',
        'Brand voice customization and consistency',
        'Plagiarism detection and originality scoring',
        'Content scheduling and publishing automation',
        'Team collaboration and approval workflows',
        'A/B testing for content optimization',
        'Analytics and performance tracking'
      ],
      pricing: {
        starter: '$29/month',
        professional: '$79/month',
        enterprise: '$199/month'
      },
      benefits: ['Save 80% content creation time', 'Increase content output by 5x', 'Improve SEO rankings by 40%', 'Maintain consistent brand voice'],
      useCases: ['Blog writing', 'Marketing copy', 'Social media content', 'Product descriptions'],
      link: '/ai-content-generation'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Advanced conversational AI platform for customer service, sales, and support automation.',
      features: [
        'Natural language processing (NLP)',
        'Multi-channel deployment (web, mobile, social)',
        'Custom knowledge base integration',
        'Sentiment analysis and emotion detection',
        'Human handoff capabilities',
        'Multi-language support',
        'Analytics and conversation insights',
        'Voice and text interactions'
      ],
      pricing: {
        starter: '$49/month',
        professional: '$149/month',
        enterprise: '$399/month'
      },
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 customer service', 'Increase customer satisfaction', 'Scale support operations'],
      useCases: ['Customer support', 'Sales qualification', 'Lead generation', 'FAQ automation'],
      link: '/ai-chatbot-platform'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Intelligent analytics platform with predictive insights, automated reporting, and data visualization.',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'Automated report generation',
        'Data integration from 100+ sources',
        'Machine learning model deployment',
        'Anomaly detection and alerts',
        'Mobile app and API access'
      ],
      pricing: {
        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      benefits: ['Make data-driven decisions', 'Identify trends and opportunities', 'Automate reporting processes', 'Scale analytics with business growth'],
      useCases: ['Business intelligence', 'Sales forecasting', 'Customer analytics', 'Operational insights'],
      link: '/ai-analytics-platform'
    },
    {
      icon: <Eye className="w-8 h-8 text-red-500" />,
      title: 'AI Computer Vision Solutions',
      description: 'Advanced computer vision services for image recognition, object detection, and visual content analysis.',
      features: [
        'Image classification and tagging',
        'Object detection and recognition',
        'Facial recognition and analysis',
        'OCR and text extraction',
        'Quality control and defect detection',
        'Real-time video analysis',
        'Custom model training',
        'API integration and SDKs'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$249/month',
        enterprise: '$599/month'
      },
      benefits: ['Automate visual inspections', 'Improve accuracy and consistency', 'Reduce manual processing time', 'Enable new visual applications'],
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging', 'Retail analytics'],
      link: '/ai-computer-vision'
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-500" />,
      title: 'AI Document Processing',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management.',
      features: [
        'Advanced OCR technology (99%+ accuracy)',
        'Intelligent data extraction',
        'Document classification and routing',
        'Workflow automation and approval',
        'Multi-format support (PDF, images, scans)',
        'Data validation and verification',
        'Integration with existing systems',
        'Compliance and audit trails'
      ],
      pricing: {
        starter: '$39/month',
        professional: '$99/month',
        enterprise: '$299/month'
      },
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', 'Reduce processing errors', 'Automate document workflows'],
      useCases: ['Invoice processing', 'Contract analysis', 'Form processing', 'Compliance documentation'],
      link: '/ai-document-processing'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'AI Process Automation',
      description: 'Intelligent process automation platform that learns and optimizes business workflows using AI.',
      features: [
        'Workflow discovery and mapping',
        'Intelligent process optimization',
        'RPA integration and orchestration',
        'Exception handling and resolution',
        'Performance monitoring and analytics',
        'Scalable automation deployment',
        'Human-in-the-loop capabilities',
        'Compliance and governance'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$999/month'
      },
      benefits: ['Automate complex processes', 'Reduce operational costs', 'Improve process efficiency', 'Scale automation across organization'],
      useCases: ['Finance automation', 'HR processes', 'Customer onboarding', 'Supply chain management'],
      link: '/ai-process-automation'
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced AI-powered cybersecurity platform for threat detection, prevention, and response.',
      features: [
        'Real-time threat detection',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Threat intelligence integration',
        'Vulnerability assessment',
        'Security orchestration',
        'Compliance monitoring',
        '24/7 security operations center'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      benefits: ['Detect threats 10x faster', 'Reduce false positives', 'Automate security responses', 'Enhance compliance posture'],
      useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security operations'],
      link: '/ai-cybersecurity'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Customer Intelligence',
      description: 'Comprehensive customer intelligence platform with AI-powered insights, segmentation, and personalization.',
      features: [
        'Customer behavior analysis',
        'Predictive customer modeling',
        'Personalization engine',
        'Churn prediction and prevention',
        'Customer journey mapping',
        'Sentiment analysis',
        'Recommendation systems',
        'Real-time customer insights'
      ],
      pricing: {
        starter: '$89/month',
        professional: '$229/month',
        enterprise: '$599/month'
      },
      benefits: ['Increase customer lifetime value', 'Reduce churn by 30%', 'Improve personalization', 'Optimize customer experience'],
      useCases: ['Customer segmentation', 'Personalization', 'Churn prevention', 'Customer journey optimization'],
      link: '/ai-customer-intelligence'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Monitoring' },
    { number: '50+', label: 'Industry Verticals' }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Retail & E-commerce',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Legal Services',
    'Media & Entertainment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, computer vision, and process automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="ai services, artificial intelligence, machine learning, automation, chatbots, analytics, computer vision" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your business with our comprehensive suite of AI services. From content generation to process automation, 
              we provide cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View AI Demo
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Service Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions designed to drive innovation and efficiency across your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.pricing.starter}
                    </span>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.pricing.professional}
                    </span>
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.pricing.enterprise}
                    </span>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Our AI solutions are tailored for various industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness the Power of AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get AI Consultation
                </Link>
                <Link 
                  to="/ai-demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule AI Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;