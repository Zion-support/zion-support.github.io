'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  TrendingUp,
  ArrowRight, 
  Star, 
  Sparkles,
  Zap,
  Award,
  Rocket,
  Target,
  CheckCircle,
  Play,
  Settings,
  BarChart3,
  Lightbulb,
  Users,
  Globe,
  Shield,
  Database,
  Cloud,
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

const AIInnovationHub2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Predictive Analytics'
  ];

  const stats = [
    { label: 'AI Models', value: '1000+' },
    { label: 'Accuracy', value: '99.2%' },
    { label: 'Processing Speed', value: '50x' },
    { label: 'Client Satisfaction', value: '5.0' }
  ];

  const technologies = [
    { name: 'TensorFlow', progress: 95 },
    { name: 'PyTorch', progress: 90 },
    { name: 'OpenAI GPT', progress: 98 },
    { name: 'Hugging Face', progress: 85 }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
            >
              <Brain className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI Innovation Hub 2025</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Discover the
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Power of AI
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Explore cutting-edge artificial intelligence technologies that are transforming industries and creating new possibilities for human-machine collaboration.
            </motion.p>

            {/* Rotating Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center text-lg text-gray-300">
                <span className="mr-3">Featured:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-400 font-semibold"
                  >
                    {features[currentFeature]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group">
                Explore AI Hub
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-lg">
              {/* Central Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-indigo-400/30 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Technology Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-gray-400">{tech.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.progress}%` }}
                    transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: TrendingUp, label: 'Performance', value: '50x Faster' },
            { icon: Award, label: 'Awards', value: '15+ Won' },
            { icon: Rocket, label: 'Deployments', value: '500+' },
            { icon: Star, label: 'Rating', value: '5.0/5.0' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025PromotionBanner;