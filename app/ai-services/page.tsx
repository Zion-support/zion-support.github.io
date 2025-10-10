'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Globe,
  Database,
  Settings,
  Cpu,
  Lock,
  Mail,
  Calendar,
  DollarSign,
  Award,
  Headphones,
  Filter,
  Search as SearchIcon
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice?: string;
  savings?: string;
  useCases: string[];
  benefits: string[];
  link: string;
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    // Core AI Services
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics, predictive modeling, and automated reporting.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated insights generation',
        'Custom dashboard creation',
        'Natural language queries',
        'Anomaly detection',
        'Trend analysis',
        'ROI optimization'
      ],
      price: 'Starting at $1,500/month',
      category: 'Analytics',
      popular: true,
      marketPrice: '$3,500/month',
      savings: '57% savings',
      useCases: [
        'Sales forecasting and pipeline analysis',
        'Customer behavior prediction',
        'Market trend identification',
        'Operational efficiency optimization'
      ],
      benefits: [
        'Increase revenue by 25-40%',
        'Reduce decision time by 60%',
        'Improve forecast accuracy by 85%',
        'Automate 80% of reporting tasks'
      ],
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Support Automation',
      description: 'Revolutionary AI-powered customer support with natural language processing, sentiment analysis, and intelligent routing.',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Sentiment analysis',
        'Intelligent ticket routing',
        'Knowledge base integration',
        'Live agent handoff',
        'Performance analytics',
        'Custom training capabilities'
      ],
      price: 'Starting at $299/month',
      category: 'Customer Service',
      popular: true,
      marketPrice: '$799/month',
      savings: '63% savings',
      useCases: [
        '24/7 customer support',
        'FAQ automation',
        'Ticket classification and routing',
        'Customer satisfaction monitoring'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve response time by 70%',
        'Increase customer satisfaction by 40%',
        'Handle 80% of queries automatically'
      ],
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: '3',
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision technology for image recognition, object detection, and visual analysis applications.',
      features: [
        'Image classification',
        'Object detection and tracking',
        'Facial recognition',
        'OCR text extraction',
        'Quality inspection',
        'Real-time processing',
        'Custom model training',
        'API integration'
      ],
      price: 'Starting at $899/month',
      category: 'Computer Vision',
      popular: false,
      marketPrice: '$2,199/month',
      savings: '59% savings',
      useCases: [
        'Quality control in manufacturing',
        'Security and surveillance',
        'Medical image analysis',
        'Retail inventory management'
      ],
      benefits: [
        'Improve accuracy by 95%',
        'Reduce inspection time by 80%',
        'Enable 24/7 monitoring',
        'Scale visual analysis capabilities'
      ],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: '4',
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: [
        'Workflow automation',
        'Decision tree logic',
        'Exception handling',
        'Integration APIs',
        'Process monitoring',
        'Performance analytics',
        'Custom triggers',
        'Scalable architecture'
      ],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true,
      marketPrice: '$1,499/month',
      savings: '60% savings',
      useCases: [
        'Document processing workflows',
        'Invoice processing automation',
        'Customer onboarding',
        'Inventory management'
      ],
      benefits: [
        'Reduce processing time by 75%',
        'Eliminate human errors',
        'Scale operations efficiently',
        'Improve compliance tracking'
      ],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: '5',
      icon: BarChart,
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive data analytics with AI-powered insights, visualization, and predictive modeling.',
      features: [
        'Data integration',
        'Advanced visualization',
        'Machine learning models',
        'Predictive analytics',
        'Real-time dashboards',
        'Data quality management',
        'Custom reporting',
        'API connectivity'
      ],
      price: 'Starting at $799/month',
      category: 'Analytics',
      popular: false,
      marketPrice: '$1,999/month',
      savings: '60% savings',
      useCases: [
        'Business performance analysis',
        'Customer segmentation',
        'Risk assessment',
        'Market research'
      ],
      benefits: [
        'Uncover hidden patterns',
        'Make data-driven decisions',
        'Reduce analysis time by 65%',
        'Improve forecast accuracy'
      ],
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      id: '6',
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with personalized campaigns, audience segmentation, and performance optimization.',
      features: [
        'Campaign automation',
        'Audience segmentation',
        'Personalization engine',
        'A/B testing',
        'Performance optimization',
        'Multi-channel support',
        'Lead scoring',
        'ROI tracking'
      ],
      price: 'Starting at $499/month',
      category: 'Marketing',
      popular: true,
      marketPrice: '$1,299/month',
      savings: '62% savings',
      useCases: [
        'Email marketing campaigns',
        'Social media automation',
        'Lead nurturing',
        'Customer retention'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Reduce marketing costs by 40%',
        'Improve campaign ROI by 60%',
        'Personalize customer experiences'
      ],
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      id: '7',
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Automated document analysis, extraction, and processing with natural language understanding.',
      features: [
        'Document classification',
        'Data extraction',
        'Text analysis',
        'OCR capabilities',
        'Batch processing',
        'Quality validation',
        'Integration APIs',
        'Compliance tracking'
      ],
      price: 'Starting at $399/month',
      category: 'Document Processing',
      popular: false,
      marketPrice: '$999/month',
      savings: '60% savings',
      useCases: [
        'Invoice processing',
        'Contract analysis',
        'Legal document review',
        'Insurance claims processing'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce errors by 90%',
        'Extract structured data',
        'Improve compliance'
      ],
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      id: '8',
      icon: Mic,
      title: 'AI Voice & Speech Solutions',
      description: 'Advanced voice recognition, speech-to-text, and voice synthesis for various applications.',
      features: [
        'Speech recognition',
        'Voice synthesis',
        'Language translation',
        'Voice biometrics',
        'Real-time processing',
        'Multi-language support',
        'Custom voice training',
        'API integration'
      ],
      price: 'Starting at $699/month',
      category: 'Voice AI',
      popular: false,
      marketPrice: '$1,799/month',
      savings: '61% savings',
      useCases: [
        'Voice assistants',
        'Call center automation',
        'Accessibility solutions',
        'Language learning'
      ],
      benefits: [
        'Improve accessibility',
        'Reduce call center costs',
        'Enable hands-free operation',
        'Support multiple languages'
      ],
      link: 'https://ziontechgroup.com/ai-voice-assistant'
    },
    {
      id: '9',
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Intelligent threat detection, security monitoring, and automated response systems.',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Security monitoring',
        'Incident analysis',
        'Compliance reporting',
        'Real-time alerts',
        'Integration capabilities'
      ],
      price: 'Starting at $1,199/month',
      category: 'Cybersecurity',
      popular: true,
      marketPrice: '$2,999/month',
      savings: '60% savings',
      useCases: [
        'Network security monitoring',
        'Fraud detection',
        'Compliance management',
        'Incident response'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Automate security responses',
        'Improve compliance posture'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: '10',
      icon: Users,
      title: 'AI HR & Talent Management',
      description: 'Intelligent HR solutions with resume screening, candidate matching, and employee analytics.',
      features: [
        'Resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Performance analytics',
        'Employee engagement',
        'Skills assessment',
        'Retention prediction',
        'Diversity analytics'
      ],
      price: 'Starting at $599/month',
      category: 'HR',
      popular: false,
      marketPrice: '$1,499/month',
      savings: '60% savings',
      useCases: [
        'Recruitment automation',
        'Employee performance analysis',
        'Skills gap identification',
        'Retention strategies'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Increase retention rates',
        'Optimize workforce planning'
      ],
      link: 'https://ziontechgroup.com/ai-hr-assistant'
    },
    {
      id: '11',
      icon: Globe,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines, dynamic pricing, and customer insights.',
      features: [
        'Recommendation engine',
        'Dynamic pricing',
        'Inventory optimization',
        'Customer analytics',
        'Sales forecasting',
        'Personalization',
        'A/B testing',
        'Integration APIs'
      ],
      price: 'Starting at $899/month',
      category: 'E-commerce',
      popular: false,
      marketPrice: '$2,299/month',
      savings: '61% savings',
      useCases: [
        'Product recommendations',
        'Price optimization',
        'Inventory management',
        'Customer segmentation'
      ],
      benefits: [
        'Increase sales by 30%',
        'Improve customer experience',
        'Optimize pricing strategies',
        'Reduce inventory costs'
      ],
      link: 'https://ziontechgroup.com/ai-ecommerce-solutions'
    },
    {
      id: '12',
      icon: Database,
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route planning',
        'Supplier analytics',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Integration APIs'
      ],
      price: 'Starting at $1,299/month',
      category: 'Supply Chain',
      popular: false,
      marketPrice: '$3,299/month',
      savings: '61% savings',
      useCases: [
        'Demand planning',
        'Inventory management',
        'Logistics optimization',
        'Supplier relationship management'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve forecast accuracy by 80%',
        'Optimize logistics routes',
        'Minimize supply chain risks'
      ],
      link: 'https://ziontechgroup.com/ai-supply-chain'
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Service', 'Computer Vision', 'Automation', 'Marketing', 'Document Processing', 'Voice AI', 'Cybersecurity', 'HR', 'E-commerce', 'Supply Chain'];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'AI Projects Delivered',
      description: 'Successfully implemented worldwide'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Highly rated by our clients'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'AI Support',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    }
  ];

  const benefits = [
    'Increase operational efficiency by up to 60%',
    'Reduce costs by 40% through automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with cutting-edge technology',
    'Enhance customer experience with personalization',
    'Reduce human errors by 90%',
    'Enable 24/7 intelligent operations'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, computer vision, natural language processing, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, automation, business intelligence, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, 
              we deliver AI-powered innovations that drive growth and efficiency.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive growth.
              </p>
              <p className="text-cyan-400 mt-4">
                Showing {filteredServices.length} of {aiServices.length} services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                      </div>
                    )}
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href={`tel:+13024640950`}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver proven AI solutions that drive measurable business results and competitive advantage.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI needs and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;