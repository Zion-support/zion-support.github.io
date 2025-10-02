import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Camera, 
  MessageSquare, 
  FileText, 
  Settings, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Database,
  Network,
  Zap,
  Eye,
  Mic,
  Video,
  Search,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Code,
  Package,
  ShoppingCart,
  CreditCard,
  Building,
  Heart,
  Car,
  Plane,
  Gamepad2,
  Music,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Wifi,
  Battery,
  Cpu,
  HardDrive,
  Router,
  Mobile,
  Laptop,
  Tablet,
  Headphones,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Display,
  Speaker,
  Webcam,
  Microphone,
  CameraIcon,
  VideoIcon,
  Image,
  File,
  Folder,
  Download,
  Upload,
  Share,
  LinkIcon,
  ExternalLink,
  EyeOff,
  Edit,
  Trash2,
  Save,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  SearchIcon,
  Filter,
  Sort,
  Grid,
  List,
  MoreHorizontal,
  MoreVertical,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  SettingsIcon,
  User,
  UserPlus,
  UserMinus,
  UsersIcon,
  UserCheck,
  UserX,
  MailIcon,
  CalendarIcon,
  ClockIcon,
  Timer,
  Stopwatch,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Palette,
  Brush,
  Pen,
  Pencil,
  Eraser,
  Highlighter,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ListIcon,
  Indent,
  Outdent,
  Quote,
  CodeIcon,
  Terminal,
  Command,
  Hash,
  AtSign,
  Percent,
  DollarIcon,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCardIcon,
  Wallet,
  Banknote,
  Coins,
  TrendingUpIcon,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Pulse,
  HeartIcon,
  ZapIcon,
  Flash,
  Sun,
  Moon,
  CloudIcon,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Rainbow,
  StarIcon,
  Sparkles,
  Gift,
  PartyPopper,
  Cake,
  Coffee,
  Pizza,
  Apple,
  Banana,
  Carrot,
  Leaf,
  Tree,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Bear,
  Lion,
  Tiger,
  Elephant,
  Whale,
  Dolphin,
  Shark,
  Octopus,
  Crab,
  Lobster,
  Shrimp,
  Snail,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Scorpion,
  Snake,
  Lizard,
  Frog,
  Turtle,
  Penguin,
  Owl,
  Eagle,
  Hawk,
  Parrot,
  Peacock,
  Flamingo,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Pig,
  Cow,
  Horse,
  Sheep,
  Goat,
  Deer,
  Moose,
  Elk,
  Buffalo,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Camel,
  Llama,
  Alpaca,
  Kangaroo,
  Koala,
  Panda,
  Sloth,
  Monkey,
  Gorilla,
  Chimpanzee,
  Orangutan,
  Lemur,
  Squirrel,
  Chipmunk,
  Hamster,
  GuineaPig,
  MouseIcon,
  Rat,
  Beaver,
  Otter,
  Seal,
  Walrus,
  PolarBear,
  GrizzlyBear,
  BlackBear,
  PandaIcon,
  RedPanda,
  Fox,
  Wolf,
  Coyote,
  Jackal,
  Hyena,
  Cheetah,
  Leopard,
  Jaguar,
  Lynx,
  Bobcat,
  Cougar,
  MountainLion,
  Puma,
  Panther,
  TigerIcon,
  LionIcon,
  LeopardIcon,
  CheetahIcon,
  JaguarIcon,
  LynxIcon,
  BobcatIcon,
  CougarIcon,
  MountainLionIcon,
  PumaIcon,
  PantherIcon
} from 'lucide-react';

export default function AIServicesPage() {
  const title = 'AI Services & Solutions — Zion Tech Group';
  const description = 'Advanced artificial intelligence solutions including computer vision, NLP, predictive analytics, and process automation. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com';

  const aiServices = [
    {
      name: 'Advanced Computer Vision Solutions',
      description: 'Custom computer vision applications for object detection, facial recognition, and image analysis with 99%+ accuracy.',
      icon: Camera,
      features: [
        'Custom object detection and classification models',
        'Real-time facial recognition and verification systems',
        'Quality control and defect detection automation',
        'Medical imaging analysis and diagnosis support',
        'Security and surveillance applications',
        'Augmented reality and mixed reality solutions'
      ],
      pricing: '$3,500 - $25,000/month',
      delivery: '6-12 weeks',
      benefits: 'Automate visual inspection tasks, reduce errors by 95%, improve quality control efficiency',
      category: 'Computer Vision',
      marketPrice: '$5,000 - $50,000/month',
      link: 'https://ziontechgroup.com/services/computer-vision',
      useCases: [
        'Manufacturing quality control',
        'Retail inventory management',
        'Healthcare diagnostics',
        'Security and surveillance',
        'Autonomous vehicles',
        'Agricultural monitoring'
      ]
    },
    {
      name: 'Natural Language Processing Platform',
      description: 'Advanced NLP solutions for text analysis, language translation, and conversational AI with multi-language support.',
      icon: MessageSquare,
      features: [
        'Sentiment analysis and emotion detection',
        'Multi-language translation (50+ languages)',
        'Named entity recognition and extraction',
        'Document summarization and analysis',
        'Intelligent chatbot and virtual assistant development',
        'Voice-to-text and text-to-speech conversion'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '4-8 weeks',
      benefits: 'Process unstructured data efficiently, improve customer interactions, reduce language barriers',
      category: 'Natural Language Processing',
      marketPrice: '$4,000 - $35,000/month',
      link: 'https://ziontechgroup.com/services/nlp-platform',
      useCases: [
        'Customer service automation',
        'Content moderation',
        'Legal document analysis',
        'Market research and analysis',
        'Educational content generation',
        'Healthcare patient communication'
      ]
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'Machine learning models for forecasting, risk assessment, and business intelligence with 90%+ accuracy.',
      icon: Brain,
      features: [
        'Custom predictive modeling and forecasting',
        'Risk assessment and fraud detection systems',
        'Customer lifetime value prediction',
        'Market trend analysis and forecasting',
        'Anomaly detection and real-time alerting',
        'Automated decision support systems'
      ],
      pricing: '$4,000 - $30,000/month',
      delivery: '8-16 weeks',
      benefits: 'Improve decision-making accuracy by 75%, reduce risks by 60%, optimize business processes',
      category: 'Predictive Analytics',
      marketPrice: '$6,000 - $60,000/month',
      link: 'https://ziontechgroup.com/services/predictive-analytics',
      useCases: [
        'Financial risk management',
        'Supply chain optimization',
        'Customer churn prediction',
        'Sales forecasting',
        'Maintenance scheduling',
        'Investment portfolio optimization'
      ]
    },
    {
      name: 'AI-Powered Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for business workflows with 99%+ accuracy.',
      icon: FileText,
      features: [
        'Automated document classification and routing',
        'Data extraction from forms, invoices, and contracts',
        'Contract analysis and risk assessment',
        'Compliance monitoring and reporting',
        'Document search and retrieval systems',
        'Workflow automation and approval processes'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '4-8 weeks',
      benefits: 'Reduce document processing time by 80%, improve accuracy by 90%, eliminate manual data entry',
      category: 'Document Processing',
      marketPrice: '$3,500 - $25,000/month',
      link: 'https://ziontechgroup.com/services/document-processing',
      useCases: [
        'Invoice processing automation',
        'Contract management',
        'Insurance claims processing',
        'Legal document review',
        'HR document processing',
        'Financial document analysis'
      ]
    },
    {
      name: 'Autonomous Business Process Automation',
      description: 'End-to-end process automation with AI decision-making and self-optimization capabilities.',
      icon: Settings,
      features: [
        'Intelligent process discovery and mapping',
        'Automated workflow design and optimization',
        'Self-healing and adaptive processes',
        'Integration with existing business systems',
        'Performance monitoring and analytics',
        'Compliance and audit trail management'
      ],
      pricing: '$5,000 - $40,000/month',
      delivery: '12-20 weeks',
      benefits: 'Reduce process costs by 50%, improve efficiency by 70%, eliminate human errors',
      category: 'Process Automation',
      marketPrice: '$8,000 - $80,000/month',
      link: 'https://ziontechgroup.com/services/process-automation',
      useCases: [
        'Order processing automation',
        'Customer onboarding workflows',
        'Financial reporting automation',
        'Inventory management',
        'Employee lifecycle management',
        'Compliance monitoring'
      ]
    },
    {
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection, prevention, and response using machine learning and behavioral analysis.',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response and remediation',
        'Vulnerability assessment and prioritization',
        'Security policy enforcement and monitoring',
        'Compliance reporting and audit support'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '6-12 weeks',
      benefits: 'Reduce security incidents by 85%, improve response time by 90%, enhance threat detection',
      category: 'Cybersecurity',
      marketPrice: '$5,000 - $50,000/month',
      link: 'https://ziontechgroup.com/services/ai-cybersecurity',
      useCases: [
        'Network security monitoring',
        'Endpoint protection',
        'Email security',
        'Cloud security',
        'Identity and access management',
        'Compliance monitoring'
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'AI Projects Completed', value: '150+', icon: Target },
    { label: 'Average Accuracy', value: '95%', icon: Star },
    { label: 'Cost Reduction', value: '60%', icon: DollarSign },
    { label: 'Implementation Time', value: '6 weeks', icon: Clock }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Medical imaging, patient care, drug discovery' },
    { name: 'Finance', icon: DollarSign, description: 'Risk assessment, fraud detection, trading' },
    { name: 'Manufacturing', icon: Package, description: 'Quality control, predictive maintenance' },
    { name: 'Retail', icon: ShoppingCart, description: 'Inventory management, customer analytics' },
    { name: 'Transportation', icon: Car, description: 'Autonomous vehicles, route optimization' },
    { name: 'Education', icon: GraduationCap, description: 'Personalized learning, assessment' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Services & Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Advanced artificial intelligence solutions that transform your business operations and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">Our AI Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions tailored to your business needs with proven results and competitive pricing
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">{service.pricing}</div>
                        <div className="text-sm text-gray-500">Our Price</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-gray-500">Market Price</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>Delivery: {service.delivery}</span>
                      <span className="text-green-600 font-medium">{service.benefits}</span>
                    </div>
                    
                    <a 
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are trusted across multiple industries to drive innovation and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Implement AI Solutions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a free AI consultation and custom proposal within 48 hours. Our AI experts are ready to help you choose the perfect solution for your business needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-blue-200 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-200 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-200">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}