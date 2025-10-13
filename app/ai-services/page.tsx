import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  FileText,
  Code,
  Bot
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Business Intelligence Pro',
      description: 'Transform raw data into actionable insights with advanced AI analytics, predictive modeling, and real-time dashboards.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/ai-business-intelligence',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration', 'Mobile app', 'White-label options'],
      price: 'From $299/month',
      category: 'Analytics',
      popular: true
    },
    {
      title: 'AI Customer Support Automation',
      description: 'Deploy intelligent chatbots and automated customer service solutions with 24/7 support and natural language processing.',
      icon: <Users className="w-8 h-8" />,
      path: '/ai-customer-service',
      features: ['24/7 support', 'Natural language processing', 'Sentiment analysis', 'Multi-language support', 'CRM integration', 'Live chat handoff'],
      price: 'From $199/month',
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'AI Content Generation Studio',
      description: 'Create high-quality content at scale with AI-powered writing tools, SEO optimization, and brand voice training.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/ai-content-generation',
      features: ['Blog posts', 'Social media content', 'Marketing copy', 'SEO optimization', 'Brand voice training', 'Multi-format output'],
      price: 'From $149/month',
      category: 'Content',
      popular: true
    },
    {
      title: 'AI Data Analytics Platform',
      description: 'Advanced data processing and visualization with machine learning models, automated insights, and interactive dashboards.',
      icon: <Database className="w-8 h-8" />,
      path: '/ai-data-analytics',
      features: ['Data visualization', 'Pattern recognition', 'Trend analysis', 'ML models', 'Real-time processing', 'Custom reports'],
      price: 'From $179/month',
      category: 'Data Analytics'
    },
    {
      title: 'AI Marketing Automation Hub',
      description: 'End-to-end marketing automation with AI-driven personalization, email campaigns, and advanced lead scoring.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/ai-marketing',
      features: ['Campaign optimization', 'Audience targeting', 'ROI analysis', 'Email automation', 'A/B testing', 'Personalization'],
      price: 'From $199/month',
      category: 'Marketing',
      popular: true
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation solutions, smart scheduling, and process optimization.',
      icon: <Zap className="w-8 h-8" />,
      path: '/ai-automation',
      features: ['Workflow automation', 'Process optimization', 'Smart scheduling', 'Task automation', 'Integration tools', 'Performance monitoring'],
      price: 'From $129/month',
      category: 'Automation'
    },
    {
      title: 'AI Fraud Detection System',
      description: 'Advanced fraud detection with machine learning models, real-time monitoring, and automated response systems.',
      icon: <Shield className="w-8 h-8" />,
      path: '/ai-fraud-detection',
      features: ['Real-time detection', 'ML models', 'Automated response', 'Risk scoring', 'Pattern analysis', 'Compliance reporting'],
      price: 'From $399/month',
      category: 'Security',
      popular: true
    },
    {
      title: 'AI Healthcare Diagnostics',
      description: 'Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations.',
      icon: <Brain className="w-8 h-8" />,
      path: '/ai-healthcare',
      features: ['Medical imaging', 'Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Drug interaction', 'Compliance tracking'],
      price: 'From $499/month',
      category: 'Healthcare'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Predict future trends and outcomes with advanced machine learning models and statistical analysis.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/ai-predictive-analytics',
      features: ['Future forecasting', 'Trend analysis', 'Risk assessment', 'Demand prediction', 'Market analysis', 'Scenario planning'],
      price: 'From $249/month',
      category: 'Analytics'
    },
    {
      title: 'AI Project Management',
      description: 'Intelligent project management with automated task prioritization, resource allocation, and deadline optimization.',
      icon: <Users className="w-8 h-8" />,
      path: '/ai-project-management',
      features: ['Task prioritization', 'Resource allocation', 'Deadline optimization', 'Team coordination', 'Progress tracking', 'Risk management'],
      price: 'From $179/month',
      category: 'Project Management'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation system with machine learning algorithms for products, content, and services.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/ai-recommendation-engine',
      features: ['Personalized recommendations', 'ML algorithms', 'User behavior analysis', 'A/B testing', 'Real-time updates', 'Performance metrics'],
      price: 'From $159/month',
      category: 'Recommendations'
    },
    {
      title: 'AI Sales Automation',
      description: 'Automate sales processes with lead scoring, email sequences, and intelligent follow-up recommendations.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/ai-sales-automation',
      features: ['Lead scoring', 'Email sequences', 'Follow-up automation', 'Sales forecasting', 'Pipeline management', 'Performance analytics'],
      price: 'From $229/month',
      category: 'Sales',
      popular: true
    },
    {
      title: 'AI Email Automation',
      description: 'Intelligent email marketing with automated campaigns, personalization, and performance optimization.',
      icon: <Mail className="w-8 h-8" />,
      path: '/ai-email-automation',
      features: ['Automated campaigns', 'Personalization', 'A/B testing', 'Send time optimization', 'Content generation', 'Performance tracking'],
      price: 'From $99/month',
      category: 'Email Marketing'
    },
    {
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis with object detection, facial recognition, and automated visual processing.',
      icon: <Globe className="w-8 h-8" />,
      path: '/ai-computer-vision',
      features: ['Object detection', 'Facial recognition', 'Image classification', 'Video analysis', 'Quality control', 'Automated tagging'],
      price: 'From $279/month',
      category: 'Computer Vision'
    },
    {
      title: 'AI Natural Language Processing',
      description: 'Advanced text analysis with sentiment analysis, language translation, and automated text processing.',
      icon: <FileText className="w-8 h-8" />,
      path: '/ai-nlp',
      features: ['Sentiment analysis', 'Language translation', 'Text classification', 'Entity extraction', 'Summarization', 'Chatbot integration'],
      price: 'From $189/month',
      category: 'NLP'
    },
    {
      title: 'AI Voice Recognition',
      description: 'Advanced voice processing with speech-to-text, voice commands, and automated transcription services.',
      icon: <Users className="w-8 h-8" />,
      path: '/ai-voice-recognition',
      features: ['Speech-to-text', 'Voice commands', 'Transcription', 'Multi-language support', 'Noise reduction', 'Real-time processing'],
      price: 'From $149/month',
      category: 'Voice AI'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing with OCR, form recognition, and automated data extraction.',
      icon: <FileText className="w-8 h-8" />,
      path: '/ai-document-intelligence',
      features: ['OCR technology', 'Form recognition', 'Data extraction', 'Document classification', 'Search & retrieval', 'Workflow automation'],
      price: 'From $199/month',
      category: 'Document Processing'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots with natural language understanding and automated conversation flows.',
      icon: <Bot className="w-8 h-8" />,
      path: '/ai-chatbot-builder',
      features: ['Conversation flows', 'Natural language understanding', 'Multi-channel support', 'Integration APIs', 'Analytics dashboard', 'Custom training'],
      price: 'From $129/month',
      category: 'Chatbots'
    },
    {
      title: 'AI Code Assistant',
      description: 'Intelligent code generation, review, and optimization with support for multiple programming languages.',
      icon: <Code className="w-8 h-8" />,
      path: '/ai-code-assistant',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Documentation', 'Code review', 'Refactoring suggestions'],
      price: 'From $149/month',
      category: 'Development',
      popular: true
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'AI-powered security monitoring with threat detection, incident response, and compliance reporting.',
      icon: <Shield className="w-8 h-8" />,
      path: '/ai-cybersecurity-monitor',
      features: ['Threat detection', 'Incident response', 'Compliance reporting', '24/7 monitoring', 'Vulnerability scanning', 'Security training'],
      price: 'From $399/month',
      category: 'Cybersecurity'
    },
    {
      title: 'AI Financial Analytics',
      description: 'Advanced financial modeling and risk assessment with automated reporting and investment analysis.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/ai-financial-analytics',
      features: ['Financial modeling', 'Risk assessment', 'Investment analysis', 'Fraud detection', 'Portfolio optimization', 'Market prediction'],
      price: 'From $349/month',
      category: 'Finance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, automation, content generation, and more. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, content generation" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}Transform Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400 text-center">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                    <Link
                      to={service.path}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
