'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  DollarSign,
  Users,
  BarChart3,
  Clock,
  Star,
  TrendingUp,
  Lock,
  Cloud,
  Smartphone,
  Database,
  Code,
  Palette,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  Wifi,
  FileText,
  PieChart,
  MessageSquare,
  Calendar,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Truck,
  Home,
  Car,
  Plane,
  Heart,
  BookOpen,
  Gamepad2,
  Headphones,
  Mic,
  Image,
  Download,
  Upload,
  Share2,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Search,
  Filter,
  Sort,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Grid as GridIcon,
  List as ListIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Lock as LockIcon2,
  Unlock as UnlockIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Shield as ShieldIcon2,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  Cpu,
  Network,
  Layers,
  Activity,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom,
  Microscope,
  FlaskConical,
  Dna,
  Stethoscope,
  Pill,
  Syringe,
  Heart as HeartIcon,
  Activity as ActivityIcon,
  Pulse,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Tornado,
  Hurricane,
  Earthquake,
  Volcano,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  PawPrint,
  Footprints,
  Tree,
  Sprout,
  Wheat,
  Apple,
  Carrot,
  Corn,
  Grape,
  Cherry,
  Strawberry,
  Banana,
  Orange,
  Lemon,
  Peach,
  Pear,
  Pineapple,
  Watermelon,
  Coconut,
  Avocado,
  Tomato,
  Potato,
  Onion,
  Garlic,
  Ginger,
  Pepper,
  Salt,
  Sugar,
  Coffee,
  Tea,
  Milk,
  Egg,
  Bread,
  Cheese,
  Meat,
  Fish as FishIcon,
  Shrimp,
  Lobster,
  Crab,
  Octopus,
  Squid,
  Snail,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Scorpion,
  Snake,
  Lizard,
  Turtle,
  Frog,
  Tadpole,
  Salamander,
  Newt,
  Axolotl,
  Platypus,
  Kangaroo,
  Koala,
  Panda,
  Bear,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Wolf,
  Fox,
  Raccoon,
  Skunk,
  Opossum,
  Squirrel,
  Chipmunk,
  Hamster,
  GuineaPig,
  Rabbit,
  Hare,
  Deer,
  Moose,
  Elk,
  Bison,
  Buffalo,
  Cow,
  Bull,
  Ox,
  Horse,
  Donkey,
  Mule,
  Zebra,
  Giraffe,
  Elephant,
  Rhinoceros,
  Hippopotamus,
  Pig,
  Sheep,
  Goat,
  Llama,
  Alpaca,
  Camel,
  Dromedary,
  Bactrian,
  Yak,
  Reindeer,
  Caribou,
  Elk as ElkIcon,
  Antelope,
  Gazelle,
  Impala,
  Springbok,
  Wildebeest,
  Gnu,
  Hartebeest,
  Topi,
  Waterbuck,
  Kudu,
  Eland,
  Oryx,
  Addax,
  Scimitar,
  Sable,
  Roan,
  Sitatunga,
  Lechwe,
  Puku,
  Redunca,
  Kob,
  Reedbuck,
  Duiker,
  Steenbok,
  Grysbok,
  Sharpe,
  Klipspringer,
  Oribi,
  Suni,
  Dik,
  DikDik,
  Madoqua,
  Neotragus,
  Oreotragus,
  Raphicerus,
  Sylvicapra,
  Cephalophus,
  Philantomba,
  Tragelaphus,
  Ammelaphus,
  Strepsiceros,
  Taurotragus,
  Tragelaphus as TragelaphusIcon,
  Boselaphus,
  Tetracerus,
  Antilope,
  Gazella,
  Eudorcas,
  Nanger,
  Litocranius,
  Ammodorcas,
  Procapra,
  Saiga,
  Pantholops,
  Capra,
  Ovis,
  Pseudois,
  Budorcas,
  Ovibos,
  Capricornis,
  Nemorhaedus,
  Rupicapra,
  Oreamnos,
  Hemitragus,
  Arabitragus,
  Ammotragus,
  Pseudois as PseudoisIcon,
  Ovis as OvisIcon,
  Capra as CapraIcon,
  Budorcas as BudorcasIcon,
  Ovibos as OvibosIcon,
  Capricornis as CapricornisIcon,
  Nemorhaedus as NemorhaedusIcon,
  Rupicapra as RupicapraIcon,
  Oreamnos as OreamnosIcon,
  Hemitragus as HemitragusIcon,
  Arabitragus as ArabitragusIcon,
  Ammotragus as AmmotragusIcon,
  Pseudois as PseudoisIcon2,
  Ovis as OvisIcon2,
  Capra as CapraIcon2,
  Budorcas as BudorcasIcon2,
  Ovibos as OvibosIcon2,
  Capricornis as CapricornisIcon2,
  Nemorhaedus as NemorhaedusIcon2,
  Rupicapra as RupicapraIcon2,
  Oreamnos as OreamnosIcon2,
  Hemitragus as HemitragusIcon2,
  Arabitragus as ArabitragusIcon2,
  Ammotragus as AmmotragusIcon2
} from 'lucide-react';

const AdvancedAiServicesPage: React.FC = () => {
  const advancedAiServices = [
    {
      id: 'quantum-ai-processor',
      name: 'Quantum AI Processor',
      description: 'Revolutionary quantum computing-powered AI processing for complex problem solving and optimization tasks.',
      features: ['Quantum Computing', 'AI Optimization', 'Complex Problem Solving', 'Real-time Processing', 'Scalable Architecture'],
      pricing: '$2,999/month',
      category: 'Quantum Computing',
      icon: Atom,
      benefits: ['1000x faster processing', 'Solve impossible problems', 'Quantum advantage', 'Future-proof technology'],
      marketPrice: '$5,000-15,000/month',
      link: 'https://ziontechgroup.com/quantum-ai-processor',
      technology: 'Quantum Computing + AI'
    },
    {
      id: 'neural-interface-system',
      name: 'Neural Interface System',
      description: 'Direct brain-computer interface technology for seamless human-AI interaction and control.',
      features: ['Brain-Computer Interface', 'Neural Signal Processing', 'Real-time Translation', 'Thought Control', 'Safety Protocols'],
      pricing: '$4,999/month',
      category: 'Neural Technology',
      icon: Brain,
      benefits: ['Direct thought control', 'Enhanced capabilities', 'Seamless integration', 'Revolutionary interface'],
      marketPrice: '$8,000-25,000/month',
      link: 'https://ziontechgroup.com/neural-interface-system',
      technology: 'Neural Interface + AI'
    },
    {
      id: 'autonomous-ai-agent',
      name: 'Autonomous AI Agent',
      description: 'Self-learning AI agent capable of independent decision making and task execution without human intervention.',
      features: ['Autonomous Learning', 'Decision Making', 'Task Execution', 'Self-Improvement', 'Multi-Domain Expertise'],
      pricing: '$1,999/month',
      category: 'Autonomous Systems',
      icon: Cpu,
      benefits: ['Fully autonomous operation', 'Continuous learning', 'Multi-task execution', 'Self-optimization'],
      marketPrice: '$3,000-10,000/month',
      link: 'https://ziontechgroup.com/autonomous-ai-agent',
      technology: 'Autonomous AI + Machine Learning'
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'Advanced AI platform for pharmaceutical drug discovery, molecular design, and clinical trial optimization.',
      features: ['Molecular Design', 'Drug Discovery', 'Clinical Trials', 'Side Effect Prediction', 'Personalized Medicine'],
      pricing: '$3,999/month',
      category: 'Healthcare AI',
      icon: FlaskConical,
      benefits: ['Faster drug development', 'Reduced costs', 'Higher success rates', 'Personalized treatments'],
      marketPrice: '$6,000-20,000/month',
      link: 'https://ziontechgroup.com/ai-drug-discovery',
      technology: 'AI + Pharmaceutical Science'
    },
    {
      id: 'ai-climate-prediction',
      name: 'AI Climate Prediction Engine',
      description: 'Advanced climate modeling and prediction system using AI for weather forecasting and climate change analysis.',
      features: ['Climate Modeling', 'Weather Prediction', 'Climate Change Analysis', 'Disaster Prevention', 'Environmental Monitoring'],
      pricing: '$2,499/month',
      category: 'Environmental AI',
      icon: CloudRain,
      benefits: ['Accurate predictions', 'Disaster prevention', 'Climate insights', 'Environmental protection'],
      marketPrice: '$4,000-12,000/month',
      link: 'https://ziontechgroup.com/ai-climate-prediction',
      technology: 'AI + Climate Science'
    },
    {
      id: 'ai-space-exploration',
      name: 'AI Space Exploration System',
      description: 'AI-powered space exploration and analysis system for satellite management and space mission optimization.',
      features: ['Satellite Management', 'Mission Planning', 'Space Data Analysis', 'Orbital Mechanics', 'Deep Space Communication'],
      pricing: '$4,499/month',
      category: 'Space Technology',
      icon: Rocket,
      benefits: ['Space mission optimization', 'Satellite efficiency', 'Deep space exploration', 'Advanced analytics'],
      marketPrice: '$7,000-25,000/month',
      link: 'https://ziontechgroup.com/ai-space-exploration',
      technology: 'AI + Space Technology'
    },
    {
      id: 'ai-cyber-defense',
      name: 'AI Cyber Defense Matrix',
      description: 'Advanced AI-powered cybersecurity system with real-time threat detection and automated response capabilities.',
      features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Zero-Day Protection', 'Incident Response'],
      pricing: '$1,799/month',
      category: 'Cybersecurity',
      icon: Shield,
      benefits: ['Real-time protection', 'Automated defense', 'Zero-day detection', 'Incident response'],
      marketPrice: '$2,500-8,000/month',
      link: 'https://ziontechgroup.com/ai-cyber-defense',
      technology: 'AI + Cybersecurity'
    },
    {
      id: 'ai-financial-forecasting',
      name: 'AI Financial Forecasting Engine',
      description: 'Advanced AI system for financial market prediction, risk assessment, and investment optimization.',
      features: ['Market Prediction', 'Risk Assessment', 'Portfolio Optimization', 'Algorithmic Trading', 'Fraud Detection'],
      pricing: '$2,299/month',
      category: 'Financial AI',
      icon: TrendingUp,
      benefits: ['Accurate predictions', 'Risk mitigation', 'Portfolio optimization', 'Fraud prevention'],
      marketPrice: '$3,500-12,000/month',
      link: 'https://ziontechgroup.com/ai-financial-forecasting',
      technology: 'AI + Financial Technology'
    },
    {
      id: 'ai-robotic-surgery',
      name: 'AI Robotic Surgery System',
      description: 'Precision AI-powered robotic surgery system with real-time guidance and surgical assistance.',
      features: ['Precision Surgery', 'Real-time Guidance', 'Surgical Planning', 'Risk Assessment', 'Outcome Prediction'],
      pricing: '$5,999/month',
      category: 'Medical AI',
      icon: Stethoscope,
      benefits: ['Precision surgery', 'Reduced complications', 'Better outcomes', 'Surgical assistance'],
      marketPrice: '$10,000-50,000/month',
      link: 'https://ziontechgroup.com/ai-robotic-surgery',
      technology: 'AI + Medical Robotics'
    },
    {
      id: 'ai-energy-optimization',
      name: 'AI Energy Grid Optimization',
      description: 'Smart energy grid management system using AI for power distribution optimization and renewable energy integration.',
      features: ['Grid Optimization', 'Renewable Integration', 'Demand Prediction', 'Load Balancing', 'Energy Storage'],
      pricing: '$3,299/month',
      category: 'Energy AI',
      icon: Zap,
      benefits: ['Energy efficiency', 'Renewable integration', 'Cost reduction', 'Grid stability'],
      marketPrice: '$5,000-15,000/month',
      link: 'https://ziontechgroup.com/ai-energy-optimization',
      technology: 'AI + Energy Technology'
    },
    {
      id: 'ai-autonomous-vehicles',
      name: 'AI Autonomous Vehicle System',
      description: 'Advanced AI system for autonomous vehicle navigation, safety, and fleet management.',
      features: ['Autonomous Navigation', 'Safety Systems', 'Fleet Management', 'Traffic Optimization', 'Predictive Maintenance'],
      pricing: '$2,799/month',
      category: 'Transportation AI',
      icon: Car,
      benefits: ['Autonomous driving', 'Safety enhancement', 'Fleet optimization', 'Traffic efficiency'],
      marketPrice: '$4,000-15,000/month',
      link: 'https://ziontechgroup.com/ai-autonomous-vehicles',
      technology: 'AI + Autonomous Vehicles'
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Content Generation',
      description: 'Advanced AI system for generating high-quality 3D models, animations, and virtual environments.',
      features: ['3D Model Generation', 'Animation Creation', 'Virtual Environments', 'Texture Synthesis', 'Physics Simulation'],
      pricing: '$1,499/month',
      category: 'Creative AI',
      icon: Palette,
      benefits: ['Rapid 3D creation', 'High-quality output', 'Cost-effective', 'Creative assistance'],
      marketPrice: '$2,500-8,000/month',
      link: 'https://ziontechgroup.com/ai-3d-generation',
      technology: 'AI + 3D Graphics'
    }
  ];

  const categories = ['All', 'Quantum Computing', 'Neural Technology', 'Autonomous Systems', 'Healthcare AI', 'Environmental AI', 'Space Technology', 'Cybersecurity', 'Financial AI', 'Medical AI', 'Energy AI', 'Transportation AI', 'Creative AI'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = advancedAiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Advanced AI Services | Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services including quantum computing, neural interfaces, autonomous systems, and advanced machine learning solutions." />
        <meta name="keywords" content="advanced AI, quantum computing, neural interfaces, autonomous systems, machine learning, AI innovation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              <span>Advanced AI</span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI solutions that push the boundaries of technology. From quantum computing to neural interfaces, 
              we deliver cutting-edge AI services that transform industries and create new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
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

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <span className="text-sm text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technology Stack:</h4>
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full">
                    {service.technology}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Lead the AI Revolution?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with us to implement cutting-edge AI solutions that will transform your business and give you a competitive edge. 
              Contact our AI experts for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAiServicesPage;
