import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Bot, 
  Cpu, 
  Database, 
  Code, 
  Zap, 
  CheckCircle, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Upload, 
  Share, 
  Bookmark, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Leaf,
  Sun,
  Wind,
  Globe,
  Smartphone,
  Watch,
  Headphones,
  Printer,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  Users,
  BarChart3,
  Shield,
  Lock,
  Network,
  Server,
  Cloud,
  GitBranch,
  Activity,
  Atom,
  Sparkles,
  MessageSquare,
  FileText as Document,
  Search as SearchIcon,
  Mail as EmailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  TrendingUp as TrendingIcon,
  BarChart3 as ChartIcon,
  Users as UsersIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Rocket as RocketIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  Gamepad2 as GameIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Leaf as LeafIcon,
  Sun as SunIcon,
  Wind as WindIcon,
  Smartphone as PhoneIcon,
  Watch as WatchIcon,
  Headphones as HeadphonesIcon,
  Printer as PrinterIcon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Satellite as SatelliteIcon,
  Telescope as TelescopeIcon,
  Microscope as MicroscopeIcon,
  Flask as FlaskIcon,
  Pill as PillIcon,
  Stethoscope as StethoscopeIcon,
  Calculator as CalculatorIcon,
  BookOpen as BookIcon,
  GraduationCap as GraduationIcon,
  DollarSign as DollarIcon,
  CreditCard as CreditIcon,
  ShoppingCart as CartIcon,
  Truck as TruckIcon,
  Warehouse as WarehouseIcon,
  Factory as FactoryIcon,
  Building2 as BuildingIcon,
  Home as HomeIcon,
  Store as StoreIcon,
  Bank as BankIcon,
  Insurance as InsuranceIcon,
  Law as LawIcon,
  Gavel as GavelIcon,
  FileText as FileIcon,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Search as SearchIcon2,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ExternalLink as ExternalLinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  MessageCircle as MessageIcon,
  PhoneCall as PhoneCallIcon,
  VideoCall as VideoCallIcon,
  MailOpen as MailOpenIcon,
  Send as SendIcon,
  Plus as PlusIcon,
  Minus as MinusIcon
} from 'lucide-react';

const AIServicesInnovation2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All AI Solutions', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'generative-ai', name: 'Generative AI', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'machine-learning', name: 'Machine Learning', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye, color: 'from-orange-500 to-red-500' },
    { id: 'nlp-processing', name: 'NLP & Processing', icon: MessageSquare, color: 'from-indigo-500 to-purple-500' },
    { id: 'ai-automation', name: 'AI Automation', icon: Bot, color: 'from-yellow-500 to-orange-500' },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart3, color: 'from-red-500 to-pink-500' },
    { id: 'ai-infrastructure', name: 'AI Infrastructure', icon: Server, color: 'from-gray-500 to-blue-500' }
  ];

  const aiServices = [
    // Generative AI Solutions
    {
      id: 'enterprise-llm-platform',
      category: 'generative-ai',
      title: 'Enterprise LLM Platform',
      description: 'Custom large language model platform with enterprise-grade security, fine-tuning, and deployment capabilities.',
      features: [
        'Custom LLM training and fine-tuning',
        'Enterprise security and compliance',
        'Multi-tenant deployment architecture',
        'Real-time inference optimization',
        'Integration with existing systems',
        'Advanced prompt engineering tools',
        'Performance monitoring and analytics',
        '24/7 technical support'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: '$50,000/month'
      },
      marketPrice: '$8,000 - $75,000/month',
      benefits: [
        'Reduce AI development time by 80%',
        'Improve model accuracy by 40%',
        'Cut infrastructure costs by 60%',
        'Enable rapid AI innovation'
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: 'https://ziontechgroup.com/enterprise-llm-platform',
      demo: 'https://ziontechgroup.com/demo/enterprise-llm-platform'
    },
    {
      id: 'ai-content-generation',
      category: 'generative-ai',
      title: 'AI Content Generation Suite',
      description: 'Comprehensive content generation platform for marketing, documentation, and creative content with brand consistency.',
      features: [
        'Multi-format content generation',
        'Brand voice consistency',
        'SEO optimization and keyword research',
        'Plagiarism detection',
        'Multi-language support',
        'Content calendar management',
        'Performance analytics',
        'Team collaboration tools'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$799/month'
      },
      marketPrice: '$150 - $1,000/month',
      benefits: [
        'Generate 10x more content',
        'Improve SEO rankings by 50%',
        'Maintain brand consistency',
        'Reduce content creation costs by 70%'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      link: 'https://ziontechgroup.com/ai-content-generation',
      demo: 'https://ziontechgroup.com/demo/ai-content-generation'
    },

    // Machine Learning Solutions
    {
      id: 'ml-model-development',
      category: 'machine-learning',
      title: 'Custom ML Model Development',
      description: 'End-to-end machine learning model development with data preparation, training, deployment, and monitoring.',
      features: [
        'Custom algorithm development',
        'Data preprocessing and feature engineering',
        'Model training and optimization',
        'Automated hyperparameter tuning',
        'Model deployment and serving',
        'Performance monitoring and retraining',
        'Explainable AI capabilities',
        'Integration with production systems'
      ],
      pricing: {
        assessment: '$10,000 - $25,000',
        development: '$25,000 - $150,000',
        ongoing: '$2,000 - $15,000/month'
      },
      marketPrice: '$20,000 - $200,000',
      benefits: [
        'Improve prediction accuracy by 30-50%',
        'Reduce development time by 60%',
        'Enable real-time decision making',
        'Scale ML capabilities across organization'
      ],
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: 'https://ziontechgroup.com/ml-model-development',
      demo: 'https://ziontechgroup.com/demo/ml-model-development'
    },
    {
      id: 'mlops-platform',
      category: 'machine-learning',
      title: 'MLOps & Model Management',
      description: 'Complete MLOps platform for model lifecycle management, deployment, monitoring, and governance.',
      features: [
        'Model versioning and registry',
        'Automated CI/CD pipelines',
        'Model performance monitoring',
        'A/B testing and experimentation',
        'Model governance and compliance',
        'Automated retraining pipelines',
        'Performance analytics and alerts',
        'Integration with major cloud platforms'
      ],
      pricing: {
        starter: '$2,000/month',
        professional: '$5,000/month',
        enterprise: '$15,000/month'
      },
      marketPrice: '$3,000 - $20,000/month',
      benefits: [
        'Reduce model deployment time by 90%',
        'Improve model reliability by 99%',
        'Automate 80% of ML operations',
        'Ensure model compliance and governance'
      ],
      icon: GitBranch,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/mlops-platform',
      demo: 'https://ziontechgroup.com/demo/mlops-platform'
    },

    // Computer Vision Solutions
    {
      id: 'computer-vision-platform',
      category: 'computer-vision',
      title: 'Enterprise Computer Vision Platform',
      description: 'Advanced computer vision platform for object detection, image analysis, and video processing with real-time capabilities.',
      features: [
        'Custom object detection models',
        'Real-time video processing',
        'Image classification and segmentation',
        'OCR and document processing',
        'Quality inspection automation',
        'Security and surveillance analytics',
        'Edge deployment optimization',
        'API integration and SDKs'
      ],
      pricing: {
        starter: '$3,000/month',
        professional: '$8,000/month',
        enterprise: '$25,000/month'
      },
      marketPrice: '$5,000 - $35,000/month',
      benefits: [
        'Automate visual inspection tasks',
        'Improve accuracy by 95%',
        'Reduce processing time by 90%',
        'Enable 24/7 automated monitoring'
      ],
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      link: 'https://ziontechgroup.com/computer-vision-platform',
      demo: 'https://ziontechgroup.com/demo/computer-vision-platform'
    },
    {
      id: 'ai-image-editing',
      category: 'computer-vision',
      title: 'AI-Powered Image Editing Studio',
      description: 'Professional image editing platform with AI-powered tools for enhancement, restoration, and creative manipulation.',
      features: [
        'AI image enhancement and restoration',
        'Background removal and replacement',
        'Object removal and manipulation',
        'Style transfer and filters',
        'Batch processing automation',
        'Professional editing tools',
        'Cloud storage integration',
        'Team collaboration features'
      ],
      pricing: {
        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$100 - $600/month',
      benefits: [
        'Edit images 10x faster',
        'Professional-quality results',
        'Reduce editing costs by 80%',
        'Enable creative possibilities'
      ],
      icon: Camera,
      color: 'from-red-500 to-pink-500',
      link: 'https://ziontechgroup.com/ai-image-editing',
      demo: 'https://ziontechgroup.com/demo/ai-image-editing'
    },

    // NLP & Processing Solutions
    {
      id: 'nlp-processing-platform',
      category: 'nlp-processing',
      title: 'Advanced NLP Processing Platform',
      description: 'Comprehensive natural language processing platform for text analysis, sentiment analysis, and language understanding.',
      features: [
        'Text classification and categorization',
        'Sentiment analysis and emotion detection',
        'Named entity recognition',
        'Language translation and localization',
        'Text summarization and generation',
        'Document analysis and processing',
        'Multi-language support',
        'Real-time processing capabilities'
      ],
      pricing: {
        starter: '$1,500/month',
        professional: '$4,000/month',
        enterprise: '$12,000/month'
      },
      marketPrice: '$2,000 - $15,000/month',
      benefits: [
        'Process text data 100x faster',
        'Improve accuracy by 85%',
        'Enable real-time language processing',
        'Scale across multiple languages'
      ],
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/nlp-processing-platform',
      demo: 'https://ziontechgroup.com/demo/nlp-processing-platform'
    },

    // AI Automation Solutions
    {
      id: 'ai-workflow-automation',
      category: 'ai-automation',
      title: 'AI Workflow Automation Platform',
      description: 'Intelligent workflow automation platform that uses AI to optimize business processes and decision-making.',
      features: [
        'Process mining and analysis',
        'Intelligent workflow design',
        'AI-powered decision automation',
        'Process optimization recommendations',
        'Integration with existing systems',
        'Real-time monitoring and analytics',
        'Compliance and audit trails',
        'Scalable automation framework'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$6,000/month',
        enterprise: '$18,000/month'
      },
      marketPrice: '$3,500 - $25,000/month',
      benefits: [
        'Automate 70% of repetitive tasks',
        'Improve process efficiency by 60%',
        'Reduce operational costs by 40%',
        'Enable data-driven decision making'
      ],
      icon: Bot,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://ziontechgroup.com/ai-workflow-automation',
      demo: 'https://ziontechgroup.com/demo/ai-workflow-automation'
    },

    // AI Analytics Solutions
    {
      id: 'ai-business-intelligence',
      category: 'ai-analytics',
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced business intelligence platform with AI-driven insights, predictive analytics, and automated reporting.',
      features: [
        'AI-powered data insights',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Real-time dashboards and alerts',
        'Data visualization and storytelling',
        'Integration with 100+ data sources',
        'Advanced security and compliance'
      ],
      pricing: {
        starter: '$3,000/month',
        professional: '$8,000/month',
        enterprise: '$25,000/month'
      },
      marketPrice: '$4,000 - $35,000/month',
      benefits: [
        'Uncover hidden insights in data',
        'Make data-driven decisions faster',
        'Reduce reporting time by 90%',
        'Improve business performance by 25%'
      ],
      icon: BarChart3,
      color: 'from-red-500 to-pink-500',
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      demo: 'https://ziontechgroup.com/demo/ai-business-intelligence'
    },

    // AI Infrastructure Solutions
    {
      id: 'ai-infrastructure-platform',
      category: 'ai-infrastructure',
      title: 'Enterprise AI Infrastructure',
      description: 'Scalable AI infrastructure platform with GPU clusters, distributed training, and optimized inference serving.',
      features: [
        'GPU cluster management',
        'Distributed training optimization',
        'Model serving and inference',
        'Auto-scaling capabilities',
        'Cost optimization and monitoring',
        'Security and access control',
        'Integration with major cloud providers',
        '24/7 infrastructure support'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: '$50,000/month'
      },
      marketPrice: '$8,000 - $75,000/month',
      benefits: [
        'Scale AI workloads 10x faster',
        'Reduce infrastructure costs by 40%',
        'Improve training performance by 80%',
        'Enable enterprise AI deployment'
      ],
      icon: Server,
      color: 'from-gray-500 to-blue-500',
      link: 'https://ziontechgroup.com/ai-infrastructure-platform',
      demo: 'https://ziontechgroup.com/demo/ai-infrastructure-platform'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              AI Services Innovation 2029
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions including generative AI, machine learning, 
              computer vision, and intelligent automation designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  service.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Featured Solution
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="space-y-1">
                      {Object.entries(service.pricing).map(([plan, price]) => (
                        <div key={plan} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">{plan}:</span>
                          <span className="font-semibold text-gray-900">{price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Market average: {service.marketPrice}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                    >
                      Learn More
                    </a>
                    <a
                      href={service.demo}
                      className="flex-1 bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our team of AI experts is ready to help you implement cutting-edge artificial intelligence 
              solutions that transform your business. Get in touch today to start your AI journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesInnovation2029;