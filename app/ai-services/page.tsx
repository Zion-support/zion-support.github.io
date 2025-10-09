'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Shield, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Settings,
  Database,
  Smartphone,
  ShoppingCart,
  Lock,
  Workflow,
  Cpu,
  Sparkles,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Camera,
  Monitor,
  Laptop,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Cpu as Processor,
  MemoryStick,
  HardDrive as Storage,
  Network,
  Activity,
  PieChart,
  LineChart,
  BarChart3,
  TrendingUp as Trending,
  TrendingDown,
  Minus,
  Plus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  Edit,
  Trash2,
  Save,
  Share,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Reply,
  Forward,
  Archive,
  Inbox,
  Outbox,
  Star as Favorite,
  Flag,
  Tag,
  Calendar,
  Clock as Time,
  Map,
  Navigation as Nav,
  Compass,
  Home,
  Building,
  Factory,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Music,
  Film,
  Gamepad2,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Smartphone as Mobile,
  Tablet,
  Watch,
  Laptop as LaptopIcon,
  Desktop,
  Monitor as MonitorIcon,
  Printer,
  Scanner,
  Fax,
  Keyboard,
  Mouse,
  Headset,
  Webcam,
  Microphone,
  Camera as CameraIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  File,
  Folder,
  FolderOpen,
  FileText as Document,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCode,
  FileJson,
  FileXml,
  FileCsv,
  FileHtml,
  FileCss,
  FileJs,
  FileTs,
  FileReact,
  FileVue,
  FileAngular,
  FileSvelte,
  FileNext,
  FileNuxt,
  FileGatsby,
  FileAstro,
  FileRemix,
  FileSolid,
  FileQwik,
  FileLit,
  FileStencil,
  FileSvelte as FileSvelteIcon,
  FileSolid as FileSolidIcon,
  FileQwik as FileQwikIcon,
  FileLit as FileLitIcon,
  FileStencil as FileStencilIcon,
  FileAstro as FileAstroIcon,
  FileRemix as FileRemixIcon,
  FileGatsby as FileGatsbyIcon,
  FileNext as FileNextIcon,
  FileNuxt as FileNuxtIcon,
  FileVue as FileVueIcon,
  FileAngular as FileAngularIcon,
  FileSvelte as FileSvelteIcon2,
  FileReact as FileReactIcon,
  FileTs as FileTsIcon,
  FileJs as FileJsIcon,
  FileCss as FileCssIcon,
  FileHtml as FileHtmlIcon,
  FileCsv as FileCsvIcon,
  FileXml as FileXmlIcon,
  FileJson as FileJsonIcon,
  FileCode as FileCodeIcon,
  FileZip as FileZipIcon,
  FilePowerpoint as FilePowerpointIcon,
  FileExcel as FileExcelIcon,
  FileWord as FileWordIcon,
  FilePdf as FilePdfIcon,
  FileAudio as FileAudioIcon,
  FileVideo as FileVideoIcon,
  FileImage as FileImageIcon,
  FileText as FileTextIcon,
  File as FileIcon,
  FolderOpen as FolderOpenIcon,
  Folder as FolderIcon,
  Video as VideoIcon2,
  Image as ImageIcon2,
  Camera as CameraIcon2,
  Microphone as MicrophoneIcon,
  Webcam as WebcamIcon,
  Headset as HeadsetIcon,
  Mouse as MouseIcon,
  Keyboard as KeyboardIcon,
  Fax as FaxIcon,
  Scanner as ScannerIcon,
  Printer as PrinterIcon,
  Monitor as MonitorIcon2,
  Desktop as DesktopIcon,
  Laptop as LaptopIcon2,
  Watch as WatchIcon,
  Mobile as MobileIcon,
  Tablet as TabletIcon,
  Radio as RadioIcon,
  Speaker as SpeakerIcon,
  Headphones as HeadphonesIcon,
  Gamepad2 as Gamepad2Icon,
  Film as FilmIcon,
  Music as MusicIcon,
  Theater as TheaterIcon,
  Museum as MuseumIcon,
  Library as LibraryIcon,
  University as UniversityIcon,
  School as SchoolIcon,
  Hospital as HospitalIcon,
  Bank as BankIcon,
  Store as StoreIcon,
  Factory as FactoryIcon,
  Building as BuildingIcon,
  Home as HomeIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  Map as MapIcon,
  Time as TimeIcon,
  Calendar as CalendarIcon,
  Tag as TagIcon,
  Flag as FlagIcon,
  Favorite as FavoriteIcon,
  Outbox as OutboxIcon,
  Inbox as InboxIcon,
  Archive as ArchiveIcon,
  Forward as ForwardIcon,
  Reply as ReplyIcon,
  Send as SendIcon,
  MessageCircle as MessageCircleIcon,
  ThumbsDown as ThumbsDownIcon,
  ThumbsUp as ThumbsUpIcon,
  Heart as HeartIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
  Save as SaveIcon,
  Trash2 as Trash2Icon,
  Edit as EditIcon,
  Copy as CopyIcon,
  ExternalLink as ExternalLinkIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  AlertTriangle as AlertTriangleIcon,
  Check as CheckIcon,
  X as XIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Trending as TrendingIcon,
  TrendingDown as TrendingDownIcon,
  BarChart3 as BarChart3Icon,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Network as NetworkIcon,
  Storage as StorageIcon,
  MemoryStick as MemoryStickIcon,
  Processor as ProcessorIcon,
  Battery as BatteryIcon,
  Bluetooth as BluetoothIcon,
  Wifi as WifiIcon,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  Laptop as LaptopIcon3,
  Monitor as MonitorIcon3,
  Camera as CameraIcon3,
  Volume2 as Volume2Icon,
  Stop as StopIcon,
  Pause as PauseIcon,
  Play as PlayIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  Video as VideoIcon3,
  Image as ImageIcon3,
  FileText as FileTextIcon2,
  MessageSquare as MessageSquareIcon,
  Eye as EyeIcon,
  Zap as ZapIcon,
  MapPin as MapPinIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
  Lock as LockIcon,
  ShoppingCart as ShoppingCartIcon,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Settings as SettingsIcon,
  Target as TargetIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Globe as GlobeIcon,
  Users as UsersIcon,
  Shield as ShieldIcon,
  BarChart as BarChartIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Brain as BrainIcon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Comprehensive AI services with market pricing
  const aiServices = [
    {
      category: 'Core AI Services',
      services: [
        {
          name: 'Machine Learning Platform',
          description: 'End-to-end ML platform with automated model training, deployment, and monitoring.',
          features: [
            'Automated Model Training',
            'Real-time Inference',
            'Model Versioning',
            'A/B Testing',
            'Performance Monitoring',
            'Auto-scaling Infrastructure'
          ],
          price: '$2,999/month',
          originalPrice: '$5,999/month',
          savings: '50% OFF',
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          popular: true,
          link: 'https://ziontechgroup.com/ml-platform',
          capabilities: [
            'TensorFlow & PyTorch Integration',
            'GPU/TPU Support',
            'Distributed Training',
            'Model Registry',
            'MLOps Pipeline',
            'Custom Algorithm Support'
          ]
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP services for text analysis, sentiment analysis, and language understanding.',
          features: [
            'Text Classification',
            'Sentiment Analysis',
            'Named Entity Recognition',
            'Language Translation',
            'Text Summarization',
            'Question Answering'
          ],
          price: '$1,499/month',
          originalPrice: '$2,999/month',
          savings: '50% OFF',
          icon: MessageSquare,
          color: 'from-blue-500 to-cyan-500',
          popular: true,
          link: 'https://ziontechgroup.com/nlp-services',
          capabilities: [
            'GPT-4 Integration',
            'Custom Model Training',
            'Multi-language Support',
            'Real-time Processing',
            'Batch Processing',
            'API Integration'
          ]
        },
        {
          name: 'Computer Vision Suite',
          description: 'Comprehensive computer vision solutions for image and video analysis.',
          features: [
            'Object Detection',
            'Image Classification',
            'Facial Recognition',
            'OCR (Optical Character Recognition)',
            'Video Analysis',
            'Image Generation'
          ],
          price: '$1,799/month',
          originalPrice: '$3,599/month',
          savings: '50% OFF',
          icon: Eye,
          color: 'from-green-500 to-emerald-500',
          popular: false,
          link: 'https://ziontechgroup.com/computer-vision',
          capabilities: [
            'Real-time Processing',
            'Batch Processing',
            'Custom Model Training',
            'Edge Deployment',
            'Cloud Integration',
            'API Access'
          ]
        },
        {
          name: 'Predictive Analytics',
          description: 'AI-powered predictive analytics for forecasting and trend analysis.',
          features: [
            'Time Series Forecasting',
            'Anomaly Detection',
            'Risk Assessment',
            'Demand Forecasting',
            'Churn Prediction',
            'Fraud Detection'
          ],
          price: '$2,299/month',
          originalPrice: '$4,599/month',
          savings: '50% OFF',
          icon: TrendingUp,
          color: 'from-orange-500 to-red-500',
          popular: true,
          link: 'https://ziontechgroup.com/predictive-analytics',
          capabilities: [
            'Real-time Predictions',
            'Historical Data Analysis',
            'Custom Algorithms',
            'Dashboard Integration',
            'API Access',
            'Automated Reports'
          ]
        }
      ]
    },
    {
      category: 'AI Automation Services',
      services: [
        {
          name: 'Intelligent Process Automation',
          description: 'AI-powered automation for complex business processes and workflows.',
          features: [
            'Workflow Automation',
            'Document Processing',
            'Data Extraction',
            'Decision Making',
            'Exception Handling',
            'Process Optimization'
          ],
          price: '$1,999/month',
          originalPrice: '$3,999/month',
          savings: '50% OFF',
          icon: Workflow,
          color: 'from-indigo-500 to-purple-500',
          popular: true,
          link: 'https://ziontechgroup.com/process-automation',
          capabilities: [
            'RPA Integration',
            'API Automation',
            'Custom Workflows',
            'Monitoring & Analytics',
            'Error Handling',
            'Scalable Infrastructure'
          ]
        },
        {
          name: 'AI Chatbot Platform',
          description: 'Advanced conversational AI platform with natural language understanding.',
          features: [
            'Natural Language Processing',
            'Multi-channel Support',
            'Context Awareness',
            'Sentiment Analysis',
            'Human Handoff',
            'Analytics & Insights'
          ],
          price: '$899/month',
          originalPrice: '$1,799/month',
          savings: '50% OFF',
          icon: MessageCircle,
          color: 'from-yellow-500 to-orange-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-chatbot',
          capabilities: [
            'Voice & Text Support',
            'Custom Training',
            'Integration APIs',
            'Multi-language',
            'Analytics Dashboard',
            '24/7 Availability'
          ]
        },
        {
          name: 'AI Content Generation',
          description: 'Automated content creation using advanced AI models for various formats.',
          features: [
            'Text Generation',
            'Image Creation',
            'Video Production',
            'Audio Generation',
            'Code Generation',
            'Multi-format Support'
          ],
          price: '$1,299/month',
          originalPrice: '$2,599/month',
          savings: '50% OFF',
          icon: FileText,
          color: 'from-teal-500 to-blue-500',
          popular: false,
          link: 'https://ziontechgroup.com/content-generation',
          capabilities: [
            'GPT-4 Integration',
            'Custom Prompts',
            'Brand Voice Training',
            'Quality Control',
            'Batch Processing',
            'API Access'
          ]
        }
      ]
    },
    {
      category: 'Industry-Specific AI Solutions',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'Specialized AI solutions for healthcare, medical imaging, and patient care.',
          features: [
            'Medical Image Analysis',
            'Drug Discovery',
            'Patient Monitoring',
            'Diagnostic Assistance',
            'Treatment Planning',
            'Clinical Decision Support'
          ],
          price: '$4,999/month',
          originalPrice: '$9,999/month',
          savings: '50% OFF',
          icon: Heart,
          color: 'from-red-500 to-pink-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-healthcare',
          capabilities: [
            'HIPAA Compliance',
            'Medical Device Integration',
            'Real-time Monitoring',
            'Custom Model Training',
            'Clinical Workflow Integration',
            'Regulatory Compliance'
          ]
        },
        {
          name: 'AI Financial Services',
          description: 'AI-powered solutions for banking, finance, and investment management.',
          features: [
            'Fraud Detection',
            'Credit Scoring',
            'Algorithmic Trading',
            'Risk Management',
            'Customer Service',
            'Compliance Monitoring'
          ],
          price: '$3,499/month',
          originalPrice: '$6,999/month',
          savings: '50% OFF',
          icon: DollarSign,
          color: 'from-emerald-500 to-green-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-finance',
          capabilities: [
            'Real-time Processing',
            'Regulatory Compliance',
            'High-frequency Trading',
            'Risk Assessment',
            'Customer Analytics',
            'API Integration'
          ]
        },
        {
          name: 'AI E-commerce Solutions',
          description: 'AI-powered e-commerce platform with personalized shopping experiences.',
          features: [
            'Product Recommendations',
            'Price Optimization',
            'Inventory Management',
            'Customer Segmentation',
            'Demand Forecasting',
            'Personalized Marketing'
          ],
          price: '$2,799/month',
          originalPrice: '$5,599/month',
          savings: '50% OFF',
          icon: ShoppingCart,
          color: 'from-amber-500 to-yellow-500',
          popular: false,
          link: 'https://ziontechgroup.com/ai-ecommerce',
          capabilities: [
            'Real-time Personalization',
            'A/B Testing',
            'Multi-channel Integration',
            'Analytics Dashboard',
            'API Access',
            'Scalable Infrastructure'
          ]
        }
      ]
    },
    {
      category: 'AI Infrastructure & Tools',
      services: [
        {
          name: 'AI Model Training Platform',
          description: 'Comprehensive platform for training, deploying, and managing AI models.',
          features: [
            'Distributed Training',
            'Model Versioning',
            'Experiment Tracking',
            'Hyperparameter Tuning',
            'Model Deployment',
            'Performance Monitoring'
          ],
          price: '$3,999/month',
          originalPrice: '$7,999/month',
          savings: '50% OFF',
          icon: Cpu,
          color: 'from-violet-500 to-purple-500',
          popular: true,
          link: 'https://ziontechgroup.com/ai-training-platform',
          capabilities: [
            'GPU/TPU Support',
            'Auto-scaling',
            'Multi-framework Support',
            'Model Registry',
            'MLOps Integration',
            'Custom Environments'
          ]
        },
        {
          name: 'AI Data Pipeline',
          description: 'Automated data processing and preparation for AI model training.',
          features: [
            'Data Ingestion',
            'Data Cleaning',
            'Feature Engineering',
            'Data Validation',
            'Pipeline Orchestration',
            'Quality Monitoring'
          ],
          price: '$1,599/month',
          originalPrice: '$3,199/month',
          savings: '50% OFF',
          icon: Database,
          color: 'from-slate-500 to-gray-500',
          popular: false,
          link: 'https://ziontechgroup.com/ai-data-pipeline',
          capabilities: [
            'Real-time Processing',
            'Batch Processing',
            'Data Quality Checks',
            'Automated Pipelines',
            'Monitoring & Alerting',
            'API Integration'
          ]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in weeks, not months, with our pre-built templates and frameworks.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, encryption, and comprehensive audit trails.'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your AI workloads and business needs.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from AI experts with average response time under 2 minutes.'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'AI Services Available' },
    { number: '24/7', label: 'Expert Support' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Comprehensive Artificial Intelligence Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of AI services. From machine learning platforms 
              to natural language processing, we provide cutting-edge AI solutions tailored to your specific needs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a 
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {aiServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="cyber-card hologram-card p-6 relative group hover:scale-105 transition-all duration-300">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>MOST POPULAR</span>
                        </div>
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Capabilities:</h4>
                      {service.capabilities.map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-400 text-xs">{capability}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">{service.savings}</span>
                      </div>
                      <div className="text-sm text-gray-400">per month, billed annually</div>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={service.link}
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="block w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get started with our AI services today and see the difference artificial intelligence can make.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card hologram-card p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our AI experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AIServicesPage;