'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Cpu, 
  Shield, 
  Globe, 
  ArrowRight, 
  Play,
  Star,
  Sparkles,
  Target,
  BarChart,
  Users,
  Award,
  Lock,
  Database,
  Cloud,
  Code,
  Smartphone,
  Settings,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation,
  PieChart,
  TrendingDown,
  Activity,
  Cube,
  Mic,
  DollarSign,
  Truck,
  Link,
  HardDrive,
  FileCheck
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  originalPrice?: string;
  features: string[];
  benefits: string[];
  link: string;
  popular?: boolean;
  category: string;
  rating: number;
  users: string;
  freeTrial: string;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  originalPrice,
  features,
  benefits,
  link,
  popular = false,
  category,
  rating,
  users,
  freeTrial,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50, 
        scale: isVisible ? 1 : 0.9 
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative group ${popular ? 'holographic-card' : 'cyber-card'} p-6 rounded-2xl border-2 border-transparent hover:border-cyan-400 transition-all duration-300 ${
        popular ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/20' : 'bg-gray-900/50'
      } backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="text-right">
          <div className="text-2xl font-bold text-cyan-400">{price}</div>
          {originalPrice && (
            <div className="text-sm text-gray-400 line-through">{originalPrice}</div>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-400">
          <Star className="w-4 h-4 text-yellow-400 mr-2" />
          <span>{rating}/5.0</span>
          <span className="mx-2">•</span>
          <span>{users} users</span>
        </div>
        
        <div className="flex items-center text-sm text-green-400">
          <span className="bg-green-500/20 px-2 py-1 rounded text-xs">
            {freeTrial} free trial
          </span>
        </div>
      </div>
      
      <motion.div
        className="space-y-2 mb-6"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isHovered ? 'auto' : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-sm">
          <h4 className="font-semibold text-cyan-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      <motion.button
        className="w-full cyber-button flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

const FuturisticHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Task Optimizer',
      description: 'Revolutionary quantum-inspired task optimization that processes millions of task combinations to find the perfect workflow. Achieve 99.9% efficiency.',
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Quantum algorithms', 'Multi-dimensional optimization', 'Real-time adaptation', 'Predictive scheduling', 'Energy efficiency', 'Parallel processing', 'Quantum encryption', 'Neural networks'],
      benefits: ['99.9% efficiency', 'Quantum speed', 'Zero waste', 'Future-proof'],
      link: '/ai-quantum-task-optimizer',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '2,500+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Holographic Workspace',
      description: 'Immersive 3D workspace with holographic project visualization, spatial computing, and AR collaboration. The future of remote work.',
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      price: '$299/month',
      originalPrice: '$399/month',
      features: ['3D holographic display', 'AR collaboration', 'Spatial computing', 'Gesture control', 'Voice commands', 'Real-time sync', 'VR integration', 'Haptic feedback'],
      benefits: ['Immersive experience', 'Better collaboration', 'Spatial awareness', 'Next-gen interface'],
      link: '/ai-holographic-workspace',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Neural Memory Assistant',
      description: 'Advanced AI that learns your work patterns and automatically organizes information, creates connections, and retrieves data instantly.',
      icon: <Brain className="w-8 h-8 text-green-400" />,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Pattern learning', 'Auto-organization', 'Instant retrieval', 'Context awareness', 'Memory mapping', 'Predictive search', 'Knowledge graphs', 'Semantic analysis'],
      benefits: ['Perfect memory', 'Instant access', 'Smart organization', 'Learning system'],
      link: '/ai-neural-memory-assistant',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '5,000+',
      freeTrial: '21 days'
    },
    {
      title: 'AI Telepathic Interface Pro',
      description: 'Mind-controlled computing interface using advanced EEG and neural pattern recognition. Control your digital workspace with thoughts.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['EEG integration', 'Neural pattern recognition', 'Thought commands', 'Mental shortcuts', 'Focus enhancement', 'Brain training', 'Privacy protection', 'Medical grade'],
      benefits: ['Hands-free control', 'Mental efficiency', 'Accessibility', 'Cutting-edge tech'],
      link: '/ai-telepathic-interface',
      popular: true,
      category: 'Productivity',
      rating: 4.7,
      users: '800+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', 'Never miss deadlines', 'Better focus', 'Achieve more goals'],
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '7 days'
    },
    // Content & Marketing Tools
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI content creation with SEO optimization, brand voice consistency, and multi-language support. Generate 10x more content.',
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content calendar', 'Plagiarism check', 'Tone adjustment', 'Keyword research', 'Content templates'],
      benefits: ['10x content output', 'SEO ready', 'Brand consistent', 'Time savings'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      rating: 4.9,
      users: '40,000+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Holographic Content Studio',
      description: 'Create immersive 3D holographic content with AI-powered design, spatial storytelling, and interactive experiences. The future of content creation.',
      icon: <Video className="w-8 h-8 text-pink-400" />,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['3D holographic creation', 'Spatial storytelling', 'Interactive experiences', 'AR/VR integration', 'Gesture-based editing', 'Real-time collaboration', 'Haptic feedback', 'Spatial audio'],
      benefits: ['Immersive content', 'Next-gen storytelling', 'Interactive experiences', 'Future-ready'],
      link: '/ai-holographic-content-studio',
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '1,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Content Optimizer',
      description: 'Revolutionary content optimization using quantum algorithms to analyze millions of content variations and find the perfect combination for maximum engagement.',
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      price: '$249/month',
      originalPrice: '$349/month',
      features: ['Quantum content analysis', 'Multi-dimensional optimization', 'Engagement prediction', 'A/B testing automation', 'Viral potential scoring', 'Audience targeting', 'Content clustering', 'Performance forecasting'],
      benefits: ['Maximum engagement', 'Viral content', 'Perfect targeting', 'Quantum precision'],
      link: '/ai-quantum-content-optimizer',
      popular: true,
      category: 'Content',
      rating: 4.9,
      users: '3,200+',
      freeTrial: '21 days'
    },
    {
      title: 'AI Neural Story Architect',
      description: 'Advanced AI that creates compelling narratives by analyzing human psychology, cultural patterns, and emotional triggers. Craft stories that resonate deeply.',
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      price: '$179/month',
      originalPrice: '$249/month',
      features: ['Psychology analysis', 'Cultural pattern recognition', 'Emotional trigger mapping', 'Narrative structure optimization', 'Character development', 'Plot generation', 'Audience resonance', 'Story arc prediction'],
      benefits: ['Compelling narratives', 'Deep resonance', 'Cultural awareness', 'Emotional impact'],
      link: '/ai-neural-story-architect',
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '2,800+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Telepathic Marketing Pro',
      description: 'Mind-reading marketing that analyzes subconscious consumer patterns and creates campaigns that speak directly to the target audience\'s deepest desires.',
      icon: <Target className="w-8 h-8 text-red-400" />,
      price: '$299/month',
      originalPrice: '$399/month',
      features: ['Subconscious analysis', 'Desire mapping', 'Emotional targeting', 'Neuromarketing insights', 'Behavioral prediction', 'Campaign optimization', 'ROI maximization', 'Consumer psychology'],
      benefits: ['Deep targeting', 'Higher conversion', 'Emotional connection', 'Subconscious appeal'],
      link: '/ai-telepathic-marketing',
      popular: true,
      category: 'Marketing',
      rating: 4.9,
      users: '1,800+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Social Media Manager Pro',
      description: 'Automated social media management with AI-powered content creation, scheduling, and analytics. Grow your audience by 300%.',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Auto content creation', 'Smart scheduling', 'Hashtag optimization', 'Engagement tracking', 'Competitor analysis', 'Trend monitoring', 'Multi-platform posting', 'Analytics dashboard'],
      benefits: ['300% audience growth', 'Consistent posting', 'Better engagement', 'Time savings'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      rating: 4.7,
      users: '35,000+',
      freeTrial: '14 days'
    },
    // Business & Finance Tools
    {
      title: 'AI CRM Intelligence Pro',
      description: 'Smart CRM with AI-powered insights, sales forecasting, and customer behavior analysis. Increase sales by 40%.',
      icon: <Users className="w-8 h-8 text-green-400" />,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI insights', 'Sales forecasting', 'Customer analytics', 'Pipeline management', 'Automation rules', 'Integration hub', 'Mobile app', 'Custom fields'],
      benefits: ['40% sales increase', 'Better customer insights', 'Automated workflows', 'Data-driven decisions'],
      link: '/ai-crm',
      popular: true,
      category: 'Business',
      rating: 4.7,
      users: '32,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Financial Oracle',
      description: 'Revolutionary financial prediction system using quantum computing to analyze market patterns and predict economic trends with 99.7% accuracy.',
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      price: '$499/month',
      originalPrice: '$799/month',
      features: ['Quantum market analysis', 'Economic trend prediction', 'Risk assessment', 'Portfolio optimization', 'Crisis prediction', 'Market timing', 'Global economic modeling', 'Real-time adaptation'],
      benefits: ['99.7% accuracy', 'Crisis prevention', 'Optimal timing', 'Quantum precision'],
      link: '/ai-quantum-financial-oracle',
      popular: true,
      category: 'Finance',
      rating: 4.9,
      users: '1,200+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Holographic Boardroom',
      description: 'Immersive 3D boardroom experience with holographic data visualization, spatial analytics, and telepathic decision-making interfaces.',
      icon: <Building className="w-8 h-8 text-purple-400" />,
      price: '$599/month',
      originalPrice: '$899/month',
      features: ['3D holographic displays', 'Spatial data visualization', 'Telepathic interfaces', 'Real-time collaboration', 'Gesture controls', 'AR/VR integration', 'Haptic feedback', 'Neural decision support'],
      benefits: ['Immersive meetings', 'Better decisions', 'Spatial understanding', 'Next-gen collaboration'],
      link: '/ai-holographic-boardroom',
      popular: true,
      category: 'Business',
      rating: 4.8,
      users: '800+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Neural Business Strategist',
      description: 'Advanced AI that analyzes market patterns, competitor behavior, and business ecosystems to provide strategic insights and recommendations.',
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      price: '$299/month',
      originalPrice: '$399/month',
      features: ['Market analysis', 'Competitor intelligence', 'Strategic planning', 'Risk assessment', 'Opportunity identification', 'Scenario modeling', 'ROI prediction', 'Implementation guidance'],
      benefits: ['Strategic advantage', 'Market insights', 'Risk mitigation', 'Growth acceleration'],
      link: '/ai-neural-business-strategist',
      popular: true,
      category: 'Business',
      rating: 4.8,
      users: '2,100+',
      freeTrial: '21 days'
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance'];

  return (
    <div className="min-h-screen cyber-grid-advanced relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 quantum-particles" />
      <div className="absolute inset-0 neural-network opacity-20" />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="cyber-text-3d text-6xl md:text-8xl font-black mb-6">
            ZION TECH GROUP
          </h1>
          <p className="holographic-text text-2xl md:text-4xl font-bold mb-8">
            Advanced AI & IT Solutions
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with cutting-edge AI micro SAAS services, quantum computing solutions, 
            and futuristic technology that delivers real results. Join 100,000+ businesses already using our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="cyber-button text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button
              className="cyber-button text-lg px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentServiceIndex === index
                  ? 'bg-cyan-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentServiceIndex(index)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {microSAASServices.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isVisible={isVisible}
            />
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="holographic-card max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-3xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300">Address</p>
                <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="cyber-button text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="cyber-button text-lg px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticHero;