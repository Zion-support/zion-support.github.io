'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, CheckCircle, ArrowRight, DollarSign, Clock, Users, Shield, BarChart3, MessageSquare, FileText, Search, Camera, Headphones, Monitor, Database, Settings, Globe, Smartphone, PieChart, Activity, Lock, Wifi, CreditCard, Calendar, Mail, Star, TrendingUp } from 'lucide-react'

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  category: string;
  marketPrice: string;
  benefits: string[];
  capabilities: string[];
  useCases: string[];
  link: string;
  popular: boolean;
  deliveryTime: string;
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const aiServices: AIService[] = [
    {
      id: 'ai-business-intelligence',
      icon: BarChart3,
      title: 'AI Business Intelligence Platform',
      description: 'Advanced AI-powered business intelligence solution that transforms raw data into actionable insights with predictive analytics and automated reporting.',
      features: [
        'Real-time data processing and analysis',
        'Machine learning predictive models',
        'Natural language query interface',
        'Automated report generation and scheduling',
        'Interactive dashboards and visualizations',
        'Multi-source data integration',
        'Anomaly detection and alerting',
        'Custom AI model training and deployment'
      ],
      price: '$2,500/month',
      originalPrice: '$4,500/month',
      category: 'Analytics',
      marketPrice: '$5,000-15,000/month',
      benefits: [
        'Increase data-driven decision making by 80%',
        'Reduce analysis time by 70%',
        'Improve forecast accuracy by 60%',
        'Generate 5x more actionable insights'
      ],
      capabilities: [
        'Advanced machine learning algorithms',
        'Real-time data processing',
        'Natural language processing',
        'Predictive analytics modeling'
      ],
      useCases: [
        'Financial forecasting and risk analysis',
        'Customer behavior prediction',
        'Supply chain optimization',
        'Market trend analysis'
      ],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      popular: true,
      deliveryTime: '4-6 weeks'
    },
    {
      id: 'ai-customer-service-automation',
      icon: MessageSquare,
      title: 'AI Customer Service Automation Suite',
      description: 'Comprehensive AI-powered customer service solution with intelligent chatbots, sentiment analysis, and automated ticket routing.',
      features: [
        'Advanced NLP chatbot with 95% accuracy',
        'Multi-channel support (web, mobile, social)',
        'Sentiment analysis and mood detection',
        'Automated ticket classification and routing',
        'Knowledge base integration and training',
        'Human agent handoff with context transfer',
        'Performance analytics and optimization',
        'Multi-language support (50+ languages)'
      ],
      price: '$1,800/month',
      originalPrice: '$3,200/month',
      category: 'Customer Service',
      marketPrice: '$3,000-8,000/month',
      benefits: [
        'Reduce response time by 85%',
        'Increase customer satisfaction by 45%',
        'Decrease support costs by 60%',
        'Handle 10x more inquiries simultaneously'
      ],
      capabilities: [
        'Advanced natural language processing',
        'Sentiment analysis and emotion detection',
        'Automated workflow management',
        'Multi-channel integration'
      ],
      useCases: [
        '24/7 customer support automation',
        'Lead qualification and nurturing',
        'Technical support and troubleshooting',
        'Order status and account inquiries'
      ],
      link: 'https://ziontechgroup.com/ai-customer-service-automation',
      popular: true,
      deliveryTime: '3-4 weeks'
    },
    {
      id: 'ai-content-generation-studio',
      icon: FileText,
      title: 'AI Content Generation Studio',
      description: 'Advanced AI content creation platform that generates high-quality, SEO-optimized content across multiple formats and channels.',
      features: [
        'GPT-4 powered content generation',
        'SEO optimization and keyword integration',
        'Brand voice and tone customization',
        'Multi-format content creation (blogs, social, email)',
        'Content calendar and scheduling',
        'Plagiarism detection and originality scoring',
        'Team collaboration and approval workflows',
        'Performance analytics and optimization'
      ],
      price: '$1,200/month',
      originalPrice: '$2,100/month',
      category: 'Content Creation',
      marketPrice: '$2,000-5,000/month',
      benefits: [
        'Increase content production by 400%',
        'Reduce content creation costs by 70%',
        'Improve SEO rankings by 65%',
        'Maintain consistent brand voice across all content'
      ],
      capabilities: [
        'Advanced language generation models',
        'SEO optimization algorithms',
        'Brand consistency management',
        'Multi-format content adaptation'
      ],
      useCases: [
        'Blog and article writing',
        'Social media content creation',
        'Email marketing campaigns',
        'Product descriptions and marketing copy'
      ],
      link: 'https://ziontechgroup.com/ai-content-generation-studio',
      popular: true,
      deliveryTime: '2-3 weeks'
    },
    {
      id: 'ai-predictive-analytics-engine',
      icon: TrendingUp,
      title: 'AI Predictive Analytics Engine',
      description: 'Sophisticated predictive analytics platform that uses machine learning to forecast trends, identify opportunities, and optimize business decisions.',
      features: [
        'Advanced machine learning algorithms',
        'Real-time data ingestion and processing',
        'Automated model training and validation',
        'Custom prediction models and scenarios',
        'Interactive visualization dashboards',
        'API integration for real-time predictions',
        'A/B testing and model comparison',
        'Automated alerting and notifications'
      ],
      price: '$3,200/month',
      originalPrice: '$5,800/month',
      category: 'Analytics',
      marketPrice: '$6,000-20,000/month',
      benefits: [
        'Improve forecast accuracy by 75%',
        'Reduce business risk by 50%',
        'Identify new opportunities 3x faster',
        'Optimize resource allocation by 40%'
      ],
      capabilities: [
        'Advanced machine learning modeling',
        'Real-time data processing',
        'Predictive model deployment',
        'Automated insight generation'
      ],
      useCases: [
        'Sales forecasting and pipeline analysis',
        'Demand planning and inventory optimization',
        'Customer lifetime value prediction',
        'Market trend analysis and forecasting'
      ],
      link: 'https://ziontechgroup.com/ai-predictive-analytics-engine',
      popular: false,
      deliveryTime: '6-8 weeks'
    },
    {
      id: 'ai-computer-vision-platform',
      icon: Camera,
      title: 'AI Computer Vision Platform',
      description: 'Advanced computer vision solution for image recognition, object detection, and visual analysis across various industries.',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'OCR and document processing',
        'Quality control and defect detection',
        'Real-time video analysis',
        'Custom model training and deployment',
        'API integration and SDK',
        'Cloud and edge deployment options'
      ],
      price: '$2,800/month',
      originalPrice: '$4,500/month',
      category: 'Computer Vision',
      marketPrice: '$4,000-12,000/month',
      benefits: [
        'Automate visual inspection processes',
        'Reduce human error by 90%',
        'Process images 100x faster than humans',
        'Enable 24/7 automated monitoring'
      ],
      capabilities: [
        'Advanced image recognition algorithms',
        'Real-time video processing',
        'Custom model training',
        'Multi-format image support'
      ],
      useCases: [
        'Manufacturing quality control',
        'Retail inventory management',
        'Security and surveillance',
        'Medical image analysis'
      ],
      link: 'https://ziontechgroup.com/ai-computer-vision-platform',
      popular: false,
      deliveryTime: '5-7 weeks'
    },
    {
      id: 'ai-process-automation-suite',
      icon: Settings,
      title: 'AI Process Automation Suite',
      description: 'Intelligent process automation platform that uses AI to automate complex business processes and workflows.',
      features: [
        'Intelligent document processing',
        'Workflow automation and orchestration',
        'RPA integration and management',
        'Process mining and optimization',
        'Exception handling and escalation',
        'Performance monitoring and analytics',
        'Custom automation workflows',
        'Integration with existing systems'
      ],
      price: '$2,200/month',
      originalPrice: '$3,800/month',
      category: 'Automation',
      marketPrice: '$3,500-10,000/month',
      benefits: [
        'Reduce manual work by 80%',
        'Improve process accuracy by 95%',
        'Decrease processing time by 70%',
        'Eliminate human errors in repetitive tasks'
      ],
      capabilities: [
        'Intelligent process discovery',
        'Automated workflow execution',
        'Exception handling and learning',
        'System integration management'
      ],
      useCases: [
        'Invoice processing and approval',
        'Customer onboarding automation',
        'Data entry and validation',
        'Compliance and audit processes'
      ],
      link: 'https://ziontechgroup.com/ai-process-automation-suite',
      popular: true,
      deliveryTime: '4-6 weeks'
    },
    {
      id: 'ai-cybersecurity-suite',
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solution that provides real-time threat detection, automated response, and intelligent security monitoring.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral analytics and anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and management',
        'Security orchestration and automation',
        'Threat intelligence integration',
        'Compliance monitoring and reporting',
        'Custom security rule creation'
      ],
      price: '$3,500/month',
      originalPrice: '$6,200/month',
      category: 'Cybersecurity',
      marketPrice: '$5,000-15,000/month',
      benefits: [
        'Detect threats 10x faster than traditional methods',
        'Reduce false positives by 85%',
        'Improve incident response time by 90%',
        'Prevent 95% of potential security breaches'
      ],
      capabilities: [
        'Advanced threat detection algorithms',
        'Behavioral analysis and profiling',
        'Automated response systems',
        'Threat intelligence processing'
      ],
      useCases: [
        'Network security monitoring',
        'Endpoint protection and detection',
        'Cloud security management',
        'Compliance and audit automation'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity-suite',
      popular: true,
      deliveryTime: '6-8 weeks'
    },
    {
      id: 'ai-personalization-engine',
      icon: Target,
      title: 'AI Personalization Engine',
      description: 'Intelligent personalization platform that delivers personalized experiences across all customer touchpoints using advanced AI algorithms.',
      features: [
        'Real-time personalization algorithms',
        'Customer journey mapping and optimization',
        'A/B testing and experimentation',
        'Cross-channel personalization',
        'Recommendation engine optimization',
        'Behavioral analysis and segmentation',
        'Dynamic content generation',
        'Performance analytics and optimization'
      ],
      price: '$2,000/month',
      originalPrice: '$3,500/month',
      category: 'Personalization',
      marketPrice: '$3,000-8,000/month',
      benefits: [
        'Increase conversion rates by 60%',
        'Improve customer engagement by 80%',
        'Boost average order value by 45%',
        'Reduce customer acquisition costs by 35%'
      ],
      capabilities: [
        'Advanced recommendation algorithms',
        'Real-time personalization',
        'Cross-channel optimization',
        'Behavioral pattern analysis'
      ],
      useCases: [
        'E-commerce product recommendations',
        'Content personalization',
        'Email marketing optimization',
        'Website experience customization'
      ],
      link: 'https://ziontechgroup.com/ai-personalization-engine',
      popular: false,
      deliveryTime: '4-5 weeks'
    },
    {
      id: 'ai-natural-language-processing',
      icon: MessageSquare,
      title: 'AI Natural Language Processing Platform',
      description: 'Comprehensive NLP solution for text analysis, language understanding, and automated language processing across multiple languages.',
      features: [
        'Text analysis and sentiment detection',
        'Language translation and localization',
        'Named entity recognition and extraction',
        'Text summarization and generation',
        'Intent recognition and classification',
        'Multi-language support (100+ languages)',
        'Custom model training and fine-tuning',
        'API integration and deployment'
      ],
      price: '$1,500/month',
      originalPrice: '$2,800/month',
      category: 'NLP',
      marketPrice: '$2,500-7,000/month',
      benefits: [
        'Process text data 50x faster than humans',
        'Improve language understanding accuracy by 90%',
        'Enable multilingual business operations',
        'Automate text-based workflows'
      ],
      capabilities: [
        'Advanced language models',
        'Multi-language processing',
        'Custom model training',
        'Real-time text analysis'
      ],
      useCases: [
        'Customer feedback analysis',
        'Document processing and classification',
        'Multilingual customer support',
        'Content moderation and filtering'
      ],
      link: 'https://ziontechgroup.com/ai-natural-language-processing',
      popular: false,
      deliveryTime: '3-4 weeks'
    },
    {
      id: 'ai-data-analytics-platform',
      icon: Database,
      title: 'AI Data Analytics Platform',
      description: 'Advanced data analytics platform that uses AI to extract insights from complex datasets and provide actionable business intelligence.',
      features: [
        'Automated data discovery and profiling',
        'Intelligent data cleaning and preparation',
        'Advanced statistical analysis and modeling',
        'Interactive visualization and dashboards',
        'Automated insight generation',
        'Data quality monitoring and validation',
        'Custom analytics workflows',
        'Real-time data processing'
      ],
      price: '$2,300/month',
      originalPrice: '$4,100/month',
      category: 'Analytics',
      marketPrice: '$4,000-12,000/month',
      benefits: [
        'Reduce data analysis time by 75%',
        'Discover hidden patterns and insights',
        'Improve data quality by 80%',
        'Enable self-service analytics for business users'
      ],
      capabilities: [
        'Advanced data processing algorithms',
        'Automated insight generation',
        'Interactive visualization tools',
        'Real-time data streaming'
      ],
      useCases: [
        'Business intelligence and reporting',
        'Customer analytics and segmentation',
        'Operational efficiency optimization',
        'Risk analysis and fraud detection'
      ],
      link: 'https://ziontechgroup.com/ai-data-analytics-platform',
      popular: true,
      deliveryTime: '5-6 weeks'
    }
  ];

  const categories = ['All', ...Array.from(new Set(aiServices.map(service => service.category)))];

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge AI algorithms and machine learning models powered by the latest research and technology.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Rapid Implementation',
      description: 'Quick deployment and integration with existing systems, typically within 2-8 weeks depending on complexity.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, data encryption, and comprehensive privacy protection.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: 'Proven ROI',
      description: 'Measurable results with typical ROI of 300-500% within the first year of implementation.'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Monitoring' },
    { number: '50+', label: 'Industries Served' }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              drive innovation, and gain competitive advantage with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore AI Services
              </a>
              <a
                href="/consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get AI Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our AI Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our AI Services
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">
                    Delivery: {service.deliveryTime}
                  </div>
                  <div className="text-sm text-gray-400">
                    Market: {service.marketPrice}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-green-400 font-medium">
                    Save {service.originalPrice ? Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '').replace(',', '')) / parseInt(service.originalPrice.replace('$', '').replace('/month', '').replace(',', ''))) * 100) : 0}%
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button className="w-full border border-gray-400 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you identify the best opportunities for AI implementation 
            and create a customized solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Get AI Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Our AI Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;