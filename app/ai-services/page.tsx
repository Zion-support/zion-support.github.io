'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  Brain, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Users, 
  ShoppingCart, 
  Search,
  Zap,
  Eye,
  Mic,
  Code,
  Database,
  Globe,
  Lock,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Sparkles,
  Cpu,
  Network,
  Layers,
  Activity
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      description: 'Advanced AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics and automated reporting.',
      icon: BarChart3,
      category: 'Analytics & Intelligence',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Advanced visualization tools',
        'API access and webhooks'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Up to 10 data sources', 'Basic analytics', 'Standard reports'] },
        professional: { price: 499, period: 'month', features: ['Up to 50 data sources', 'Advanced AI features', 'Custom dashboards'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited data sources', 'White-label solution', 'Dedicated support'] }
      },
      benefits: [
        'Increase data-driven decisions by 85%',
        'Reduce reporting time by 70%',
        'Improve forecast accuracy by 60%',
        'Scale analytics with business growth'
      ],
      useCases: ['Financial analytics', 'Sales forecasting', 'Operations optimization', 'Market research'],
      link: 'https://ziontechgroup.com/ai-business-intelligence-pro'
    },
    {
      id: 'ai-cybersecurity-suite-pro',
      name: 'AI Cybersecurity Suite Pro',
      description: 'Comprehensive AI-powered cybersecurity platform with real-time threat detection, automated incident response, and advanced threat intelligence.',
      icon: Shield,
      category: 'Security & Protection',
      features: [
        'AI-powered threat detection',
        'Automated incident response',
        'Behavioral analysis and anomaly detection',
        'Real-time security monitoring',
        'Vulnerability assessment and management',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Security awareness training',
        '24/7 AI monitoring and alerts'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic threat detection', 'Email alerts', 'Monthly reports'] },
        professional: { price: 799, period: 'month', features: ['Advanced AI detection', 'Automated response', 'Compliance tools'] },
        enterprise: { price: 1999, period: 'month', features: ['Full security suite', 'Custom AI models', 'Dedicated security team'] }
      },
      benefits: [
        'Reduce security incidents by 90%',
        'Achieve compliance faster',
        'Lower security costs by 40%',
        'Protect business reputation'
      ],
      useCases: ['Enterprise security', 'Healthcare compliance', 'Financial services', 'Government agencies'],
      link: 'https://ziontechgroup.com/ai-cybersecurity-suite-pro'
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform that generates high-quality text, images, and videos for marketing, sales, and communication needs.',
      icon: FileText,
      category: 'Content & Marketing',
      features: [
        'Multi-format content generation (text, images, videos)',
        'Brand voice customization',
        'SEO-optimized content creation',
        'Multi-language support',
        'Content planning and scheduling',
        'Plagiarism detection and originality scoring',
        'Collaborative editing tools',
        'Performance analytics and optimization'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['10,000 words/month', 'Basic templates', 'Standard support'] },
        professional: { price: 399, period: 'month', features: ['50,000 words/month', 'Advanced features', 'Priority support'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited content', 'Custom AI models', 'Dedicated account manager'] }
      },
      benefits: [
        'Increase content production by 300%',
        'Reduce content costs by 60%',
        'Improve content quality and consistency',
        'Scale content marketing efforts'
      ],
      useCases: ['Marketing content', 'Blog writing', 'Social media', 'Product descriptions'],
      link: 'https://ziontechgroup.com/ai-content-generation-pro'
    },
    {
      id: 'ai-customer-support-chatbot',
      name: 'AI Customer Support Chatbot',
      description: 'Intelligent customer support chatbot with natural language processing, multi-channel deployment, and seamless human handoff capabilities.',
      icon: MessageSquare,
      category: 'Customer Service',
      features: [
        'Natural language understanding',
        'Multi-channel deployment (web, mobile, social)',
        'Context-aware conversations',
        'Seamless human handoff',
        'Integration with CRM systems',
        'Real-time analytics and insights',
        'Custom branding and personality',
        'API access and webhooks'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1,000 conversations/month', 'Basic features', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['10,000 conversations/month', 'Advanced features', 'Phone support'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited conversations', 'Custom development', 'Dedicated support'] }
      },
      benefits: [
        'Reduce support costs by 50%',
        'Improve customer satisfaction by 40%',
        'Provide 24/7 customer support',
        'Scale customer service operations'
      ],
      useCases: ['Customer support', 'Lead qualification', 'E-commerce assistance', 'Internal help desk'],
      link: 'https://ziontechgroup.com/ai-customer-support-chatbot'
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant that helps developers write, debug, and optimize code with intelligent suggestions and automated testing.',
      icon: Code,
      category: 'Development & Engineering',
      features: [
        'Intelligent code completion and suggestions',
        'Automated code review and optimization',
        'Bug detection and fixing recommendations',
        'Code documentation generation',
        'Multi-language support (Python, JavaScript, Java, C++, etc.)',
        'Integration with popular IDEs',
        'Automated testing and quality assurance',
        'Code security analysis'
      ],
      pricing: {
        starter: { price: 99, period: 'month', features: ['Individual developer', 'Basic features', 'Community support'] },
        professional: { price: 299, period: 'month', features: ['Team of 5 developers', 'Advanced features', 'Priority support'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited developers', 'Custom AI models', 'Dedicated support'] }
      },
      benefits: [
        'Increase coding productivity by 40%',
        'Reduce bugs and errors by 60%',
        'Accelerate development cycles',
        'Improve code quality and maintainability'
      ],
      useCases: ['Software development', 'Code review', 'Bug fixing', 'Documentation generation'],
      link: 'https://ziontechgroup.com/ai-code-assistant-pro'
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Comprehensive AI-powered automation platform that connects applications and automates complex business processes with intelligent decision making.',
      icon: Zap,
      category: 'Automation & Workflow',
      features: [
        'Visual workflow builder with AI assistance',
        '500+ application integrations',
        'AI-powered decision making and routing',
        'Custom automation rules and triggers',
        'Real-time monitoring and analytics',
        'Error handling and retry logic',
        'Team collaboration and sharing',
        'Advanced security and compliance'
      ],
      pricing: {
        starter: { price: 249, period: 'month', features: ['10 workflows', 'Basic integrations', 'Standard support'] },
        professional: { price: 599, period: 'month', features: ['50 workflows', 'Advanced features', 'Priority support'] },
        enterprise: { price: 1499, period: 'month', features: ['Unlimited workflows', 'Custom development', 'Dedicated support'] }
      },
      benefits: [
        'Save 20+ hours per week',
        'Reduce human errors by 80%',
        'Improve process efficiency by 65%',
        'Scale business operations'
      ],
      useCases: ['Marketing automation', 'Sales processes', 'Customer onboarding', 'Data processing'],
      link: 'https://ziontechgroup.com/ai-automation-platform'
    },
    {
      id: 'ai-data-analytics-pro',
      name: 'AI Data Analytics Pro',
      description: 'Advanced AI-powered data analytics platform with machine learning models, predictive insights, and automated data processing capabilities.',
      icon: Database,
      category: 'Data & Analytics',
      features: [
        'Machine learning model deployment',
        'Automated data processing and cleaning',
        'Predictive analytics and forecasting',
        'Real-time data streaming and analysis',
        'Advanced visualization and reporting',
        'Data quality monitoring and alerts',
        'Integration with data warehouses',
        'Custom AI model training'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Up to 1M records', 'Basic ML models', 'Standard processing'] },
        professional: { price: 899, period: 'month', features: ['Up to 10M records', 'Advanced ML features', 'Real-time processing'] },
        enterprise: { price: 2299, period: 'month', features: ['Unlimited records', 'Custom AI models', 'Dedicated infrastructure'] }
      },
      benefits: [
        'Accelerate data insights by 75%',
        'Improve prediction accuracy by 50%',
        'Reduce data processing time by 80%',
        'Enable data-driven decision making'
      ],
      useCases: ['Business intelligence', 'Predictive maintenance', 'Customer analytics', 'Financial modeling'],
      link: 'https://ziontechgroup.com/ai-data-analytics-pro'
    },
    {
      id: 'ai-voice-assistant-pro',
      name: 'AI Voice Assistant Pro',
      description: 'Advanced AI voice assistant with natural language processing, multi-language support, and seamless integration with business applications.',
      icon: Mic,
      category: 'Voice & Communication',
      features: [
        'Natural language voice processing',
        'Multi-language support (50+ languages)',
        'Custom voice training and branding',
        'Integration with business applications',
        'Real-time transcription and translation',
        'Voice command automation',
        'Meeting transcription and analysis',
        'API access for custom integrations'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1,000 minutes/month', 'Basic features', 'Standard support'] },
        professional: { price: 499, period: 'month', features: ['10,000 minutes/month', 'Advanced features', 'Priority support'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited minutes', 'Custom development', 'Dedicated support'] }
      },
      benefits: [
        'Improve accessibility and usability',
        'Reduce manual data entry by 70%',
        'Enable hands-free operations',
        'Enhance user experience'
      ],
      useCases: ['Voice commands', 'Meeting transcription', 'Accessibility tools', 'Hands-free operations'],
      link: 'https://ziontechgroup.com/ai-voice-assistant-pro'
    },
    {
      id: 'ai-image-recognition-pro',
      name: 'AI Image Recognition Pro',
      description: 'Advanced AI-powered image recognition and computer vision platform with object detection, facial recognition, and automated image processing.',
      icon: Eye,
      category: 'Computer Vision',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'OCR text extraction from images',
        'Image quality enhancement',
        'Custom model training',
        'Real-time image processing',
        'Batch processing capabilities',
        'API access and integration'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['1,000 images/month', 'Basic recognition', 'Standard processing'] },
        professional: { price: 399, period: 'month', features: ['10,000 images/month', 'Advanced features', 'Custom models'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited images', 'Custom development', 'Dedicated support'] }
      },
      benefits: [
        'Automate image processing tasks',
        'Improve accuracy and consistency',
        'Reduce manual review time by 85%',
        'Enable new business capabilities'
      ],
      useCases: ['Quality control', 'Security monitoring', 'Document processing', 'Medical imaging'],
      link: 'https://ziontechgroup.com/ai-image-recognition-pro'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'AI-powered predictive maintenance platform that uses machine learning to predict equipment failures and optimize maintenance schedules.',
      icon: Activity,
      category: 'Industrial & Manufacturing',
      features: [
        'Machine learning failure prediction',
        'IoT sensor data integration',
        'Maintenance schedule optimization',
        'Real-time equipment monitoring',
        'Failure risk assessment',
        'Cost optimization analysis',
        'Integration with CMMS systems',
        'Custom alert and notification system'
      ],
      pricing: {
        starter: { price: 499, period: 'month', features: ['Up to 10 machines', 'Basic predictions', 'Standard monitoring'] },
        professional: { price: 1299, period: 'month', features: ['Up to 100 machines', 'Advanced AI features', 'Custom integrations'] },
        enterprise: { price: 2999, period: 'month', features: ['Unlimited machines', 'Custom AI models', 'Dedicated support'] }
      },
      benefits: [
        'Reduce unplanned downtime by 60%',
        'Lower maintenance costs by 40%',
        'Extend equipment lifespan by 25%',
        'Improve operational efficiency'
      ],
      useCases: ['Manufacturing equipment', 'Fleet management', 'Building systems', 'Industrial machinery'],
      link: 'https://ziontechgroup.com/ai-predictive-maintenance'
    }
  ];

  const categories = [
    { name: 'Analytics & Intelligence', icon: BarChart3, count: 3 },
    { name: 'Security & Protection', icon: Shield, count: 2 },
    { name: 'Content & Marketing', icon: FileText, count: 2 },
    { name: 'Customer Service', icon: MessageSquare, count: 2 },
    { name: 'Development & Engineering', icon: Code, count: 2 },
    { name: 'Automation & Workflow', icon: Zap, count: 2 },
    { name: 'Data & Analytics', icon: Database, count: 2 },
    { name: 'Voice & Communication', icon: Mic, count: 1 },
    { name: 'Computer Vision', icon: Eye, count: 1 },
    { name: 'Industrial & Manufacturing', icon: Activity, count: 1 }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Monitoring' },
    { number: '30-day', label: 'Free Trial' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Discover our comprehensive suite of AI services designed to transform your business. From machine learning to natural language processing, we provide cutting-edge AI solutions."
        keywords="AI services, artificial intelligence, machine learning, AI solutions, AI consulting, AI development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                AI Services
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Harness the power of artificial intelligence to transform your business. 
                Our comprehensive AI services deliver intelligent solutions that drive growth and innovation.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                AI Service <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Explore our comprehensive range of AI services across different domains and industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <div key={index} className="group bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {category.count} Services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Discover our comprehensive suite of AI services designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={service.id} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Pricing:</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center p-2 bg-slate-700/50 rounded">
                        <div className="font-semibold text-white">Starter</div>
                        <div className="text-cyan-400">${service.pricing.starter.price}/{service.pricing.starter.period}</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/50 rounded">
                        <div className="font-semibold text-white">Pro</div>
                        <div className="text-cyan-400">${service.pricing.professional.price}/{service.pricing.professional.period}</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/50 rounded">
                        <div className="font-semibold text-white">Enterprise</div>
                        <div className="text-cyan-400">${service.pricing.enterprise.price}/{service.pricing.enterprise.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-cyan-400 text-cyan-300 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Harness AI Power?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your AI transformation journey today. Our experts will help you choose the right AI solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start AI Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;