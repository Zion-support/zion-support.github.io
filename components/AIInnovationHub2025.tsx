'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Settings,
  BarChart3,
  Lightbulb,
  Rocket,
  Star,
  Award,
  Globe,
  Lock,
  Smartphone,
  Laptop,
  Server,
  Wifi,
  Eye,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Code,
  GitBranch,
  Layers,
  Workflow,
  Network,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  RefreshCw,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Save,
  Folder,
  File,
  FolderOpen,
  Archive,
  Inbox,
  Send,
  Receive,
  Sync,
  WifiOff,
  Battery,
  Signal,
  Volume2,
  VolumeX,
  Camera,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  Monitor,
  Tablet,
  Watch,
  Gamepad2,
  Controller,
  Joystick,
  Mouse,
  Keyboard,
  Printer,
  Scanner,
  HardDrive,
  Disc,
  Usb,
  Bluetooth,
  Wifi2,
  Router,
  Modem,
  Switch,
  Hub,
  Cable,
  Plug,
  Power,
  BatteryCharging,
  BatteryLow,
  BatteryFull,
  BatteryEmpty,
  ZapOff,
  Zap2,
  Flashlight,
  FlashlightOff,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Flame,
  Snow,
  Tornado,
  Hurricane,
  Earthquake,
  Volcano,
  Mountain,
  Trees,
  Leaf,
  Flower,
  Seedling,
  Sprout,
  Cherry,
  Apple,
  Banana,
  Carrot,
  Corn,
  Grape,
  Lemon,
  Orange,
  Peach,
  Pear,
  Pineapple,
  Strawberry,
  Watermelon,
  Avocado,
  Broccoli,
  Cabbage,
  Cucumber,
  Eggplant,
  Garlic,
  Ginger,
  Kiwi,
  Mango,
  Mushroom,
  Onion,
  Pepper,
  Potato,
  Tomato,
  Wheat,
  Rice,
  Bread,
  Croissant,
  Bagel,
  Pretzel,
  Cookie,
  Cake,
  Cupcake,
  Donut,
  Lollipop,
  Candy,
  Chocolate,
  IceCream,
  Pizza,
  Hamburger,
  HotDog,
  Sandwich,
  Taco,
  Burrito,
  Salad,
  Soup,
  Steak,
  Chicken,
  Fish,
  Shrimp,
  Lobster,
  Crab,
  Octopus,
  Squid,
  Snail,
  Bee,
  Butterfly,
  Bug,
  Spider,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Mosquito,
  Fly,
  Beetle,
  Grasshopper,
  Cricket,
  Mantis,
  Wasp,
  Hornet,
  Bumblebee,
  Honeybee,
  Wasp2,
  Hornet2,
  Bumblebee2,
  Honeybee2,
  Wasp3,
  Hornet3,
  Bumblebee3,
  Honeybee3,
  Wasp4,
  Hornet4,
  Bumblebee4,
  Honeybee4,
  Wasp5,
  Hornet5,
  Bumblebee5,
  Honeybee5,
  Wasp6,
  Hornet6,
  Bumblebee6,
  Honeybee6,
  Wasp7,
  Hornet7,
  Bumblebee7,
  Honeybee7,
  Wasp8,
  Hornet8,
  Bumblebee8,
  Honeybee8,
  Wasp9,
  Hornet9,
  Bumblebee9,
  Honeybee9,
  Wasp10,
  Hornet10,
  Bumblebee10,
  Honeybee10
} from 'lucide-react';

const AIInnovationHub2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovationCategories = [
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      subtitle: 'Advanced AI Algorithms',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'Cutting-edge machine learning models that learn and adapt in real-time',
      features: [
        'Deep Learning Networks',
        'Neural Architecture Search',
        'Transfer Learning',
        'Reinforcement Learning',
        'Natural Language Processing',
        'Computer Vision'
      ],
      stats: { accuracy: '99.2%', speed: '50x', efficiency: '95%' }
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      subtitle: 'Visual Intelligence',
      icon: Eye,
      color: 'from-purple-600 to-pink-600',
      description: 'Revolutionary image and video analysis capabilities',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Image Classification',
        'Video Analysis',
        '3D Reconstruction',
        'Augmented Reality'
      ],
      stats: { accuracy: '98.7%', speed: '30x', efficiency: '92%' }
    },
    {
      id: 'natural-language',
      title: 'Natural Language Processing',
      subtitle: 'Language Understanding',
      icon: MessageSquare,
      color: 'from-green-600 to-emerald-600',
      description: 'Advanced text analysis and generation capabilities',
      features: [
        'Text Generation',
        'Sentiment Analysis',
        'Language Translation',
        'Question Answering',
        'Text Summarization',
        'Chatbot Development'
      ],
      stats: { accuracy: '97.5%', speed: '25x', efficiency: '90%' }
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      subtitle: 'Future Insights',
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600',
      description: 'Predict future trends and behaviors with advanced analytics',
      features: [
        'Time Series Forecasting',
        'Anomaly Detection',
        'Risk Assessment',
        'Demand Prediction',
        'Customer Behavior Analysis',
        'Market Trend Analysis'
      ],
      stats: { accuracy: '96.8%', speed: '40x', efficiency: '88%' }
    }
  ];

  const useCases = [
    {
      title: 'Healthcare AI',
      description: 'Revolutionary medical diagnosis and treatment recommendations',
      icon: Heart,
      impact: 'Saves 10,000+ lives annually',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Financial Services',
      description: 'Advanced fraud detection and risk management',
      icon: Shield,
      impact: 'Prevents $2B+ in fraud',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving technology for safer transportation',
      icon: Car,
      impact: 'Reduces accidents by 90%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent urban planning and management',
      icon: Building,
      impact: 'Improves efficiency by 60%',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const technologies = [
    { name: 'TensorFlow', progress: 95, color: 'from-orange-500 to-red-500' },
    { name: 'PyTorch', progress: 90, color: 'from-red-500 to-pink-500' },
    { name: 'OpenAI GPT', progress: 98, color: 'from-green-500 to-emerald-500' },
    { name: 'Hugging Face', progress: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'Scikit-learn', progress: 88, color: 'from-purple-500 to-indigo-500' },
    { name: 'Keras', progress: 82, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">AI Innovation Hub 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge AI technologies that are transforming industries and creating new possibilities for human-machine collaboration.
          </p>
        </motion.div>

        {/* Innovation Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {innovationCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 inline mr-2" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${innovationCategories[activeTab].color} mb-6`}>
                    <innovationCategories[activeTab].icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {innovationCategories[activeTab].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    {innovationCategories[activeTab].subtitle}
                  </p>
                  <p className="text-lg text-gray-400 mb-8">
                    {innovationCategories[activeTab].description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(innovationCategories[activeTab].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center">
                    Explore Technology
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                  <div className="space-y-4">
                    {innovationCategories[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-sm text-blue-400 font-medium">{useCase.impact}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technology Stack
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-gray-400">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.progress}%` }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-blue-500/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Try Our AI Demo
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of our AI technology with an interactive demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center">
              <Settings className="w-5 h-5 mr-2" />
              Configure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025;