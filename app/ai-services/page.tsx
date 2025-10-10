'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, Cloud, Database, Users, Settings, Globe, Code, Camera, Headphones, CreditCard, Car, Home, Factory, Leaf, Heart, GraduationCap, ShoppingCart, Gamepad2, Truck, Store, Wrench, Lightbulb, Lock, BarChart3, PieChart, LineChart, Activity, Target as TargetIcon, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  useCases: string[];
  benefits: string[];
}

const AIServicesPage: React.FC = () => {
  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics, predictive modeling, and automated reporting.',
      features: ['Real-time data processing', 'Predictive analytics', 'Automated insights', 'Custom dashboards', 'Natural language queries', 'Anomaly detection', 'Trend analysis', 'ROI optimization'],
      price: 'Starting at $1,999/month',
      category: 'Analytics',
      popular: true,
      useCases: ['Financial forecasting', 'Customer behavior analysis', 'Market trend prediction', 'Operational optimization'],
      benefits: ['50% faster decision making', '30% cost reduction', '95% accuracy in predictions', 'Real-time insights']
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Service Automation',
      description: 'Revolutionary customer support with intelligent chatbots, sentiment analysis, and automated ticket routing.',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'Automated routing', 'Knowledge base integration', 'Voice recognition', 'Escalation management', 'Performance analytics'],
      price: 'Starting at $799/month',
      category: 'Customer Service',
      popular: true,
      useCases: ['24/7 customer support', 'Lead qualification', 'FAQ automation', 'Complaint resolution'],
      benefits: ['80% reduction in response time', '60% cost savings', '24/7 availability', 'Improved customer satisfaction']
    },
    {
      id: '3',
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for quality control, security monitoring, and automated visual inspection.',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Motion tracking', 'OCR processing', 'Medical imaging', 'Security monitoring', 'Automated tagging'],
      price: 'Starting at $1,499/month',
      category: 'Computer Vision',
      popular: false,
      useCases: ['Manufacturing quality control', 'Security surveillance', 'Medical diagnosis', 'Retail analytics'],
      benefits: ['99.9% accuracy in detection', '24/7 monitoring', 'Reduced human error', 'Scalable processing']
    },
    {
      id: '4',
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Intelligent automation for repetitive tasks, workflow optimization, and business process enhancement.',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Data entry automation', 'Approval workflows', 'Task scheduling', 'Error handling', 'Performance monitoring'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true,
      useCases: ['Invoice processing', 'HR onboarding', 'Inventory management', 'Customer onboarding'],
      benefits: ['70% time savings', '90% error reduction', '24/7 operation', 'Scalable automation']
    },
    {
      id: '5',
      icon: BarChart,
      title: 'AI Financial Analytics',
      description: 'Advanced financial modeling, risk assessment, and investment analysis powered by machine learning.',
      features: ['Risk modeling', 'Portfolio optimization', 'Fraud detection', 'Credit scoring', 'Market analysis', 'Algorithmic trading', 'Compliance monitoring', 'Financial forecasting'],
      price: 'Starting at $2,499/month',
      category: 'Finance',
      popular: false,
      useCases: ['Investment management', 'Risk assessment', 'Fraud prevention', 'Credit evaluation'],
      benefits: ['25% better returns', '95% fraud detection', 'Real-time risk monitoring', 'Regulatory compliance']
    },
    {
      id: '6',
      icon: Box,
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Risk assessment', 'Cost optimization', 'Quality control', 'Sustainability tracking'],
      price: 'Starting at $1,799/month',
      category: 'Supply Chain',
      popular: false,
      useCases: ['Inventory management', 'Logistics optimization', 'Supplier selection', 'Demand planning'],
      benefits: ['30% inventory reduction', '20% cost savings', 'Improved delivery times', 'Risk mitigation']
    },
    {
      id: '7',
      icon: Mic,
      title: 'AI Voice & Speech Processing',
      description: 'Advanced voice recognition, speech synthesis, and audio analysis for various business applications.',
      features: ['Speech recognition', 'Voice synthesis', 'Audio analysis', 'Language translation', 'Voice commands', 'Call analytics', 'Sentiment analysis', 'Noise reduction'],
      price: 'Starting at $899/month',
      category: 'Voice Technology',
      popular: false,
      useCases: ['Call center automation', 'Voice assistants', 'Audio transcription', 'Language learning'],
      benefits: ['99% accuracy in speech recognition', 'Multi-language support', 'Real-time processing', 'Improved accessibility']
    },
    {
      id: '8',
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Intelligent threat detection, vulnerability assessment, and automated security response systems.',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Behavioral analysis', 'Malware detection', 'Network monitoring', 'Compliance checking', 'Security analytics'],
      price: 'Starting at $1,299/month',
      category: 'Cybersecurity',
      popular: true,
      useCases: ['Threat prevention', 'Security monitoring', 'Compliance management', 'Incident response'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Reduced false positives']
    },
    {
      id: '9',
      icon: TrendingUp,
      title: 'AI Marketing Intelligence',
      description: 'Data-driven marketing with customer segmentation, campaign optimization, and predictive analytics.',
      features: ['Customer segmentation', 'Campaign optimization', 'A/B testing', 'ROI analysis', 'Lead scoring', 'Personalization', 'Market research', 'Competitive analysis'],
      price: 'Starting at $1,199/month',
      category: 'Marketing',
      popular: true,
      useCases: ['Customer targeting', 'Campaign optimization', 'Lead generation', 'Market analysis'],
      benefits: ['40% higher conversion rates', '50% better targeting', '30% cost reduction', 'Improved ROI']
    },
    {
      id: '10',
      icon: Target,
      title: 'AI Sales Optimization',
      description: 'Intelligent sales forecasting, lead scoring, and revenue optimization with machine learning.',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline analysis', 'Price optimization', 'Customer insights', 'Deal prediction', 'Performance tracking', 'Revenue optimization'],
      price: 'Starting at $999/month',
      category: 'Sales',
      popular: true,
      useCases: ['Lead qualification', 'Sales forecasting', 'Price optimization', 'Customer retention'],
      benefits: ['35% increase in sales', '60% better lead quality', '25% higher close rates', 'Improved forecasting']
    },
    {
      id: '11',
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document analysis, data extraction, and automated document management.',
      features: ['OCR processing', 'Data extraction', 'Document classification', 'Contract analysis', 'Compliance checking', 'Version control', 'Search functionality', 'Automated workflows'],
      price: 'Starting at $699/month',
      category: 'Document Processing',
      popular: false,
      useCases: ['Invoice processing', 'Contract analysis', 'Compliance management', 'Document search'],
      benefits: ['90% time savings', '99% accuracy', 'Automated workflows', 'Improved compliance']
    },
    {
      id: '12',
      icon: Search,
      title: 'AI Search & Discovery',
      description: 'Intelligent search engines with natural language processing and personalized recommendations.',
      features: ['Natural language search', 'Semantic search', 'Personalization', 'Auto-complete', 'Voice search', 'Image search', 'Recommendation engine', 'Search analytics'],
      price: 'Starting at $599/month',
      category: 'Search Technology',
      popular: false,
      useCases: ['E-commerce search', 'Content discovery', 'Knowledge management', 'Customer support'],
      benefits: ['50% better search results', 'Improved user experience', 'Personalized recommendations', 'Reduced search time']
    },
    {
      id: '13',
      icon: Phone,
      title: 'AI Communication Systems',
      description: 'Intelligent communication platforms with automated responses and smart routing.',
      features: ['Smart routing', 'Auto-responses', 'Language detection', 'Sentiment analysis', 'Call transcription', 'Meeting scheduling', 'Translation services', 'Communication analytics'],
      price: 'Starting at $499/month',
      category: 'Communication',
      popular: false,
      useCases: ['Call center automation', 'Meeting management', 'Language translation', 'Communication analytics'],
      benefits: ['60% faster response times', 'Multi-language support', 'Improved communication', 'Better customer service']
    },
    {
      id: '14',
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Intelligent cloud management with automated scaling, cost optimization, and performance monitoring.',
      features: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Resource allocation', 'Load balancing', 'Security management', 'Backup automation', 'Disaster recovery'],
      price: 'Starting at $1,399/month',
      category: 'Cloud Computing',
      popular: false,
      useCases: ['Cloud optimization', 'Cost management', 'Performance monitoring', 'Disaster recovery'],
      benefits: ['40% cost reduction', '99.9% uptime', 'Automated scaling', 'Improved performance']
    },
    {
      id: '15',
      icon: Database,
      title: 'AI Data Management',
      description: 'Intelligent data processing, cleaning, and analysis with automated insights and reporting.',
      features: ['Data cleaning', 'Data integration', 'Data quality', 'Data visualization', 'Automated reporting', 'Data governance', 'Privacy protection', 'Real-time processing'],
      price: 'Starting at $899/month',
      category: 'Data Management',
      popular: false,
      useCases: ['Data cleaning', 'Data integration', 'Quality assurance', 'Privacy compliance'],
      benefits: ['80% time savings', '99% data accuracy', 'Automated processing', 'Improved data quality']
    },
    {
      id: '16',
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Intelligent human resources management with recruitment automation and employee analytics.',
      features: ['Resume screening', 'Candidate matching', 'Performance analysis', 'Employee engagement', 'Retention prediction', 'Skills assessment', 'Training recommendations', 'HR analytics'],
      price: 'Starting at $799/month',
      category: 'Human Resources',
      popular: false,
      useCases: ['Recruitment automation', 'Performance management', 'Employee engagement', 'Skills development'],
      benefits: ['70% faster hiring', 'Better candidate matching', 'Improved retention', 'Data-driven HR decisions']
    },
    {
      id: '17',
      icon: Settings,
      title: 'AI Operations Management',
      description: 'Intelligent operations optimization with predictive maintenance and automated decision making.',
      features: ['Predictive maintenance', 'Resource optimization', 'Performance monitoring', 'Anomaly detection', 'Automated scheduling', 'Quality control', 'Cost optimization', 'Risk management'],
      price: 'Starting at $1,599/month',
      category: 'Operations',
      popular: false,
      useCases: ['Predictive maintenance', 'Resource optimization', 'Quality control', 'Risk management'],
      benefits: ['30% cost reduction', '50% fewer breakdowns', 'Improved efficiency', 'Better resource utilization']
    },
    {
      id: '18',
      icon: Globe,
      title: 'AI Language Processing',
      description: 'Advanced natural language processing for translation, content generation, and language understanding.',
      features: ['Language translation', 'Content generation', 'Sentiment analysis', 'Text summarization', 'Language detection', 'Grammar checking', 'Content optimization', 'Multi-language support'],
      price: 'Starting at $699/month',
      category: 'Language Processing',
      popular: false,
      useCases: ['Content translation', 'Content generation', 'Language learning', 'Global communication'],
      benefits: ['99% translation accuracy', 'Multi-language support', 'Automated content', 'Improved communication']
    },
    {
      id: '19',
      icon: Code,
      title: 'AI Development Tools',
      description: 'Intelligent development assistance with code generation, debugging, and automated testing.',
      features: ['Code generation', 'Bug detection', 'Automated testing', 'Code optimization', 'Documentation generation', 'Version control', 'Performance analysis', 'Security scanning'],
      price: 'Starting at $999/month',
      category: 'Development',
      popular: true,
      useCases: ['Code generation', 'Bug fixing', 'Automated testing', 'Code optimization'],
      benefits: ['50% faster development', '90% fewer bugs', 'Automated testing', 'Improved code quality']
    },
    {
      id: '20',
      icon: Camera,
      title: 'AI Image & Video Analysis',
      description: 'Advanced image and video processing for content analysis, object detection, and automated tagging.',
      features: ['Object detection', 'Image classification', 'Video analysis', 'Content moderation', 'Facial recognition', 'Scene understanding', 'Automated tagging', 'Quality assessment'],
      price: 'Starting at $1,199/month',
      category: 'Media Analysis',
      popular: false,
      useCases: ['Content moderation', 'Image search', 'Video analysis', 'Quality control'],
      benefits: ['99% accuracy in detection', 'Automated processing', 'Real-time analysis', 'Improved content quality']
    }
  ];

  const categories = ['All', 'Analytics', 'Customer Service', 'Computer Vision', 'Automation', 'Finance', 'Supply Chain', 'Voice Technology', 'Cybersecurity', 'Marketing', 'Sales', 'Document Processing', 'Search Technology', 'Communication', 'Cloud Computing', 'Data Management', 'Human Resources', 'Operations', 'Language Processing', 'Development', 'Media Analysis'];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    '24/7 automated operations',
    'Real-time data processing',
    'Predictive analytics and forecasting'
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, computer vision, natural language processing, and automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, automation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </a>
              <a href="/demo" className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI solutions designed to solve complex business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
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
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
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
                  <div className="flex flex-col gap-3">
                    <a
                      href="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Get Quote
                    </a>
                    <a
                      href={`/ai-services/${service.id}`}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
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
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver AI solutions that drive measurable business results and competitive advantage.
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

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI requirements and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your AI Journey
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AIServicesPage;
  </button>
  </button>
  </p>
  </p>
  </h2>
  </button>
  </button>
  </h1>