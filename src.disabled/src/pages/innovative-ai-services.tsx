import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Target,
  Users,
  Shield,
  BarChart3,
  Cloud,
  Lock,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Search,
  Clock,
  Camera,
  CreditCard,
  Globe,
  Monitor,
  Server,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Building2,
  Home,
  Car,
  GraduationCap,
  Heart,
  ShoppingBag,
  Briefcase,
  Palette,
  Music,
  Video,
  BookOpen,
  Calendar,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  QrCode,
  ExternalLink,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  HardDrive,
  MousePointer,
  Keyboard,
  Printer,
  Scanner,
  HeadphonesIcon,
  Mic,
  Volume2,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  RefreshCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Table,
  Columns,
  Rows,
  Grid3X3,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Merge,
  Layers,
  LayerGroup,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Diamond,
  Heart as HeartIcon,
  Star as StarIcon,
  Moon,
  Sun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  TreePine,
  TreeDeciduous,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Turtle,
  Whale,
  Dolphin,
  Shark,
  Octopus,
  Crab,
  Lobster,
  Shrimp,
  Snail,
  Bee,
  Butterfly,
  Ladybug,
  Spider,
  Ant,
  Mosquito,
  Fly,
  Beetle,
  Grasshopper,
  Cricket,
  Mantis,
  Dragonfly,
  Firefly,
  Worm,
  Slug,
  Centipede,
  Millipede,
  Scorpion,
  Tarantula,
  Tick,
  Flea,
  Louse,
  Mite,
  Aphid,
  Caterpillar,
  Cocoon,
  Chrysalis,
  Pupa,
  Larva,
  Egg,
  Seed,
  Sprout,
  Sapling,
  Tree,
  Forest,
  Mountain,
  Hill,
  Valley,
  River,
  Lake,
  Ocean,
  Sea,
  Beach,
  Desert,
  Tundra,
  Arctic,
  Antarctic,
  Glacier,
  Iceberg,
  Volcano,
  Geyser,
  HotSpring,
  Cave,
  Canyon,
  Cliff,
  Rock,
  Stone,
  Pebble,
  Sand,
  Dirt,
  Mud,
  Clay,
  Soil,
  Grass,
  Moss,
  Fern,
  Mushroom,
  Algae,
  Lichen,
  Coral,
  Sponge,
  Jellyfish,
  SeaAnemone,
  Starfish,
  SeaUrchin,
  SeaCucumber,
  Clam,
  Oyster,
  Mussel,
  Scallop,
  Abalone,
  Conch,
  Whelk,
  Periwinkle,
  Limpet,
  Barnacle,
  Seaweed,
  Kelp,
  AlgaeGreen,
  AlgaeRed,
  AlgaeBrown,
  Plankton,
  Krill,
  Copepod,
  Amphipod,
  Isopod,
  Decapod,
  Cephalopod,
  Gastropod,
  Bivalve,
  Brachiopod,
  Bryozoan,
  Cnidarian,
  Ctenophore,
  Echinoderm,
  Mollusk,
  Annelid,
  Nematode,
  Platyhelminth,
  Rotifer,
  Tardigrade,
  Onychophoran,
  Arthropod,
  Crustacean,
  Arachnid,
  Myriapod,
  Insect,
  Vertebrate,
  Invertebrate,
  Mammal,
  Bird as BirdIcon,
  Reptile,
  Amphibian,
  Fish as FishIcon,
  Cart,
  ShoppingBag as ShoppingBagIcon,
  CreditCard as CreditCardIcon,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Won,
  Ruble,
  Rupee,
  Lira,
  Franc,
  Peso,
  Real,
  Dinar,
  Dirham,
  Riyal,
  Shekel,
  Baht,
  Ringgit,
  Rupiah,
  Taka,
  Krona,
  Krone,
  Forint,
  Zloty,
  Koruna,
  Leu,
  Lev,
  Denar,
  Kuna,
  Tolar,
  Markka,
  Guilder,
  Escudo,
  Peseta,
  Lira as LiraIcon,
  Drachma,
  Schilling,
  Franc as FrancIcon,
  Mark,
  Reichsmark,
  Ostmark,
  Dinar as DinarIcon,
  Dirham as DirhamIcon,
  Riyal as RiyalIcon,
  Shekel as ShekelIcon,
  Baht as BahtIcon,
  Ringgit as RinggitIcon,
  Rupiah as RupiahIcon,
  Taka as TakaIcon,
  Krona as KronaIcon,
  Krone as KroneIcon,
  Forint as ForintIcon,
  Zloty as ZlotyIcon,
  Koruna as KorunaIcon,
  Leu as LeuIcon,
  Lev as LevIcon,
  Denar as DenarIcon,
  Kuna as KunaIcon,
  Tolar as TolarIcon,
  Markka as MarkkaIcon,
  Guilder as GuilderIcon,
  Escudo as EscudoIcon,
  Peseta as PesetaIcon,
  Drachma as DrachmaIcon,
  Schilling as SchillingIcon,
  Reichsmark as ReichsmarkIcon,
  Ostmark as OstmarkIcon,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Settings
} from 'lucide-react';

const InnovativeAIServices: React.FC = () => {
  const aiServiceCategories = [
    {
      name: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline business processes",
      icon: Zap,
      count: 18,
      color: "from-purple-400 to-pink-500",
      services: [
        "Workflow Automation",
        "Document Processing",
        "Data Entry Automation",
        "Customer Service Bots",
        "Email Automation",
        "Task Scheduling"
      ]
    },
    {
      name: "Machine Learning & Analytics",
      description: "Advanced ML models and predictive analytics for data-driven decisions",
      icon: BarChart3,
      count: 15,
      color: "from-blue-400 to-cyan-500",
      services: [
        "Predictive Analytics",
        "Customer Behavior Analysis",
        "Sales Forecasting",
        "Risk Assessment",
        "Performance Optimization",
        "Anomaly Detection"
      ]
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered text and speech processing for enhanced communication",
      icon: MessageSquare,
      count: 12,
      color: "from-green-400 to-emerald-500",
      services: [
        "Chatbot Development",
        "Sentiment Analysis",
        "Text Summarization",
        "Language Translation",
        "Voice Recognition",
        "Content Generation"
      ]
    },
    {
      name: "Computer Vision & Image Processing",
      description: "AI-powered visual recognition and image analysis solutions",
      icon: Eye,
      count: 10,
      color: "from-orange-400 to-red-500",
      services: [
        "Object Recognition",
        "Facial Recognition",
        "Image Classification",
        "Quality Control",
        "Medical Imaging",
        "Security Monitoring"
      ]
    },
    {
      name: "AI-Powered Business Intelligence",
      description: "Intelligent insights and decision support systems",
      icon: TrendingUp,
      count: 14,
      color: "from-indigo-400 to-purple-500",
      services: [
        "Business Intelligence",
        "Market Analysis",
        "Competitive Intelligence",
        "Revenue Optimization",
        "Cost Reduction",
        "Strategic Planning"
      ]
    },
    {
      name: "AI Development & Integration",
      description: "Custom AI solutions and seamless integration services",
      icon: Code,
      count: 20,
      color: "from-teal-400 to-cyan-500",
      services: [
        "Custom AI Models",
        "API Integration",
        "AI Consulting",
        "Model Training",
        "Performance Optimization",
        "Maintenance & Support"
      ]
    }
  ];

  const featuredAIServices = [
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Revolutionary business intelligence platform with advanced AI analytics, predictive insights, and automated reporting. Make data-driven decisions 5x faster with 99.9% accuracy.",
      price: "From $2,999/month",
      marketPrice: "$4,999-8,999/month",
      features: [
        "Advanced Predictive Analytics",
        "Real-time Data Processing",
        "Automated Report Generation",
        "Natural Language Queries",
        "Custom Dashboard Builder",
        "AI-Powered Insights"
      ],
      href: "/services/ai-business-intelligence",
      color: "from-purple-400 to-indigo-500",
      popular: true,
      benefits: [
        "Make decisions 5x faster",
        "Achieve 99.9% prediction accuracy",
        "Reduce reporting time by 80%",
        "Increase revenue by 35% through insights"
      ],
      useCases: [
        "E-commerce Analytics",
        "Financial Services",
        "Healthcare Analytics",
        "Manufacturing Intelligence"
      ],
      technologies: ["TensorFlow", "PyTorch", "Apache Spark", "Kubernetes", "Docker", "AWS/Azure/GCP"]
    },
    {
      title: "Intelligent Customer Experience Platform",
      description: "AI-powered customer experience platform with advanced chatbots, sentiment analysis, and personalized interactions. Increase customer satisfaction by 60% and reduce support costs by 45%.",
      price: "From $1,999/month",
      marketPrice: "$3,499-5,999/month",
      features: [
        "Advanced AI Chatbots",
        "Sentiment Analysis",
        "Personalized Recommendations",
        "Multi-channel Support",
        "Real-time Analytics",
        "Automated Workflows"
      ],
      href: "/services/intelligent-customer-experience",
      color: "from-blue-400 to-cyan-500",
      popular: true,
      benefits: [
        "Increase customer satisfaction by 60%",
        "Reduce support costs by 45%",
        "Improve response time by 90%",
        "Boost conversion rates by 40%"
      ],
      useCases: [
        "E-commerce Platforms",
        "SaaS Companies",
        "Healthcare Providers",
        "Financial Services"
      ],
      technologies: ["OpenAI GPT", "BERT", "Transformers", "NLP", "WebRTC", "REST APIs"]
    },
    {
      title: "AI-Powered Content Generation Suite",
      description: "Comprehensive content creation platform with AI writing, image generation, and video production. Create high-quality content 10x faster while maintaining brand consistency.",
      price: "From $899/month",
      marketPrice: "$1,499-2,999/month",
      features: [
        "AI Writing Assistant",
        "Image Generation",
        "Video Creation",
        "SEO Optimization",
        "Brand Voice Consistency",
        "Multi-language Support"
      ],
      href: "/services/ai-content-generation",
      color: "from-green-400 to-emerald-500",
      popular: true,
      benefits: [
        "Create content 10x faster",
        "Maintain 100% brand consistency",
        "Improve SEO rankings by 50%",
        "Reduce content costs by 70%"
      ],
      useCases: [
        "Content Marketing Agencies",
        "E-commerce Businesses",
        "SaaS Companies",
        "Personal Brands"
      ],
      technologies: ["GPT-4", "DALL-E", "Stable Diffusion", "Midjourney", "Adobe Creative Suite", "Canva API"]
    },
    {
      title: "Advanced Predictive Analytics Engine",
      description: "Sophisticated predictive analytics platform with machine learning models for forecasting, risk assessment, and optimization. Predict future trends with 95% accuracy.",
      price: "From $3,499/month",
      marketPrice: "$5,999-9,999/month",
      features: [
        "Advanced ML Models",
        "Real-time Forecasting",
        "Risk Assessment",
        "Anomaly Detection",
        "Automated Insights",
        "Custom Model Training"
      ],
      href: "/services/predictive-analytics-engine",
      color: "from-orange-400 to-red-500",
      benefits: [
        "Predict trends with 95% accuracy",
        "Reduce risks by 80%",
        "Optimize operations by 60%",
        "Increase profitability by 45%"
      ],
      useCases: [
        "Financial Services",
        "Supply Chain Management",
        "Healthcare Analytics",
        "Retail Optimization"
      ],
      technologies: ["Scikit-learn", "XGBoost", "LightGBM", "Apache Kafka", "Redis", "PostgreSQL"]
    },
    {
      title: "AI-Powered Sales Optimization Platform",
      description: "Intelligent sales platform with lead scoring, opportunity analysis, and automated follow-ups. Increase sales conversion by 55% and reduce sales cycle by 40%.",
      price: "From $1,499/month",
      marketPrice: "$2,499-4,999/month",
      features: [
        "AI Lead Scoring",
        "Opportunity Analysis",
        "Automated Follow-ups",
        "Sales Forecasting",
        "Pipeline Optimization",
        "Performance Analytics"
      ],
      href: "/services/ai-sales-optimization",
      color: "from-indigo-400 to-purple-500",
      popular: true,
      benefits: [
        "Increase conversion by 55%",
        "Reduce sales cycle by 40%",
        "Improve lead quality by 70%",
        "Boost revenue by 35%"
      ],
      useCases: [
        "B2B Sales Teams",
        "Real Estate",
        "Financial Services",
        "SaaS Companies"
      ],
      technologies: ["Salesforce API", "HubSpot API", "Pipedrive API", "Machine Learning", "CRM Integration"]
    },
    {
      title: "Intelligent Document Processing System",
      description: "AI-powered document processing with OCR, data extraction, and automated workflows. Process documents 20x faster with 99.5% accuracy.",
      price: "From $1,299/month",
      marketPrice: "$2,199-3,999/month",
      features: [
        "Advanced OCR Technology",
        "Data Extraction",
        "Document Classification",
        "Automated Workflows",
        "Quality Assurance",
        "Integration APIs"
      ],
      href: "/services/intelligent-document-processing",
      color: "from-teal-400 to-cyan-500",
      benefits: [
        "Process documents 20x faster",
        "Achieve 99.5% accuracy",
        "Reduce manual work by 95%",
        "Improve compliance by 100%"
      ],
      useCases: [
        "Financial Services",
        "Healthcare",
        "Legal Firms",
        "Insurance Companies"
      ],
      technologies: ["Tesseract OCR", "AWS Textract", "Azure Form Recognizer", "Google Document AI", "Python", "FastAPI"]
    }
  ];

  const additionalAIServices = [
    {
      title: "AI-Powered Fraud Detection System",
      description: "Advanced fraud detection with real-time monitoring and machine learning algorithms. Detect fraud with 99.8% accuracy and reduce false positives by 85%.",
      price: "From $2,199/month",
      marketPrice: "$3,999-6,999/month",
      features: ["Real-time Monitoring", "ML Algorithms", "Risk Scoring", "Alert System", "Compliance Reporting", "API Integration"],
      href: "/services/ai-fraud-detection",
      color: "from-red-400 to-pink-500",
      category: "Security"
    },
    {
      title: "Intelligent Supply Chain Optimization",
      description: "AI-powered supply chain management with demand forecasting and inventory optimization. Reduce costs by 30% and improve efficiency by 50%.",
      price: "From $2,999/month",
      marketPrice: "$4,999-8,999/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Risk Management", "Performance Analytics", "Integration"],
      href: "/services/ai-supply-chain",
      color: "from-blue-400 to-indigo-500",
      category: "Operations"
    },
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Advanced healthcare analytics with patient insights and treatment optimization. Improve patient outcomes by 40% and reduce costs by 25%.",
      price: "From $3,999/month",
      marketPrice: "$6,999-12,999/month",
      features: ["Patient Analytics", "Treatment Optimization", "Risk Assessment", "Clinical Decision Support", "Compliance", "Integration"],
      href: "/services/ai-healthcare-analytics",
      color: "from-green-400 to-teal-500",
      category: "Healthcare"
    },
    {
      title: "Intelligent Marketing Automation",
      description: "AI-powered marketing automation with personalization and campaign optimization. Increase engagement by 65% and ROI by 80%.",
      price: "From $1,799/month",
      marketPrice: "$2,999-5,999/month",
      features: ["Campaign Automation", "Personalization", "A/B Testing", "Analytics", "Integration", "Optimization"],
      href: "/services/ai-marketing-automation",
      color: "from-purple-400 to-pink-500",
      category: "Marketing"
    },
    {
      title: "AI-Powered Quality Assurance",
      description: "Intelligent quality assurance with automated testing and defect detection. Improve quality by 70% and reduce testing time by 60%.",
      price: "From $1,599/month",
      marketPrice: "$2,699-4,999/month",
      features: ["Automated Testing", "Defect Detection", "Performance Monitoring", "Quality Metrics", "Reporting", "Integration"],
      href: "/services/ai-quality-assurance",
      color: "from-orange-400 to-red-500",
      category: "Quality"
    },
    {
      title: "Intelligent Energy Management",
      description: "AI-powered energy optimization with consumption analysis and cost reduction. Reduce energy costs by 35% and improve efficiency by 45%.",
      price: "From $1,399/month",
      marketPrice: "$2,399-4,499/month",
      features: ["Consumption Analysis", "Cost Optimization", "Predictive Maintenance", "Energy Forecasting", "Reporting", "IoT Integration"],
      href: "/services/ai-energy-management",
      color: "from-yellow-400 to-orange-500",
      category: "Energy"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$999/month",
      description: "Perfect for small businesses",
      features: [
        "Basic AI features",
        "Standard support",
        "Up to 5 users",
        "Basic integrations",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,999/month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI features",
        "Priority support",
        "Up to 25 users",
        "Advanced integrations",
        "Real-time analytics",
        "Custom models"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999/month",
      description: "For large organizations",
      features: [
        "Full AI suite",
        "24/7 dedicated support",
        "Unlimited users",
        "All integrations",
        "Custom development",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Innovative AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services including machine learning, natural language processing, computer vision, and business intelligence. Transform your business with AI." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, business intelligence, automation, predictive analytics, NLP, computer vision" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Brain className="w-4 h-4 mr-2" />
            <span>Innovative AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Services
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI services. From machine learning to natural language processing, 
            we deliver intelligent solutions that drive real results and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Start AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions covering all aspects of artificial intelligence and machine learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServiceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Services Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.services.slice(0, 3).map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} services</span>
                  <Link
                    to="/contact"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most advanced and effective AI services with proven results and competitive market pricing
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredAIServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                {service.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 60% compared to market rates
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Proven Benefits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI solutions to address specific industry needs and challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalAIServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                  <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Service Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect AI service plan for your business needs. All plans include our core AI services with no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${tier.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                    tier.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our innovative AI services today and experience the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="text-purple-100">
            <p className="mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p>
              <Globe className="w-4 h-4 inline mr-2" />
              <a href="https://ziontechgroup.com" className="hover:text-white underline">
                https://ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeAIServices;