import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  Target, 
  BarChart, 
  TrendingUp, 
  Users, 
  Settings, 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  Brain, 
  Mail, 
  FileText, 
  Calendar, 
  CreditCard, 
  Search, 
  Image, 
  Video, 
  Mic, 
  Camera, 
  Palette, 
  Lock, 
  Cloud, 
  Cpu, 
  Bot, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Users as Team,
  Award,
  Headphones,
  MessageSquare,
  FileCheck,
  PieChart,
  Activity,
  TrendingDown,
  Eye,
  MousePointer,
  Layers,
  Workflow,
  GitBranch,
  Terminal,
  Wrench,
  Rocket,
  Lightbulb,
  BookOpen,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Share,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Filter,
  Sort,
  Grid,
  List,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Resize,
  Crop,
  Scissors,
  Eraser,
  Pen,
  Pencil,
  Brush,
  Highlighter,
  Marker,
  StickyNote,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Percent,
  Hash as NumberSign,
  DollarSign as Dollar,
  Euro,
  Pound,
  Yen,
  Rupee,
  Bitcoin,
  Ethereum,
  CreditCard as Card,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingUp as Trending,
  TrendingDown as TrendingDownIcon,
  BarChart3,
  PieChart as Pie,
  LineChart,
  AreaChart,
  ScatterChart,
  CandlestickChart,
  Gauge,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudSleet,
  CloudWind,
  CloudSun,
  CloudMoon,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowRain,
  CloudLightningRain,
  CloudDrizzleRain,
  CloudFogRain,
  CloudHailRain,
  CloudSleetRain,
  CloudWindRain,
  CloudSunRain as CloudSunRainIcon,
  CloudMoonRain as CloudMoonRainIcon,
  CloudSnowRain as CloudSnowRainIcon,
  CloudLightningRain as CloudLightningRainIcon,
  CloudDrizzleRain as CloudDrizzleRainIcon,
  CloudFogRain as CloudFogRainIcon,
  CloudHailRain as CloudHailRainIcon,
  CloudSleetRain as CloudSleetRainIcon,
  CloudWindRain as CloudWindRainIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Tools', icon: Grid, count: 50 },
    { id: 'ai', name: 'AI Tools', icon: Brain, count: 20 },
    { id: 'productivity', name: 'Productivity', icon: Settings, count: 15 },
    { id: 'marketing', name: 'Marketing', icon: Target, count: 12 },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: 8 },
    { id: 'development', name: 'Development', icon: Code, count: 10 },
    { id: 'design', name: 'Design', icon: Palette, count: 6 },
    { id: 'communication', name: 'Communication', icon: MessageSquare, count: 7 }
  ];

  const microSaasTools = [
    // AI Tools
    {
      id: 1,
      name: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and optimization suggestions using advanced AI algorithms.',
      category: 'ai',
      icon: Code,
      price: 79,
      period: 'month',
      features: ['Real-time code analysis', 'Security vulnerability detection', 'Performance optimization', 'Code quality scoring', 'Multi-language support'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week', 'Learn best practices'],
      rating: 4.9,
      users: 12500,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-code-review'
    },
    {
      id: 2,
      name: 'AI SEO Optimizer',
      description: 'Intelligent SEO analysis and optimization recommendations to boost your website rankings.',
      category: 'ai',
      icon: Search,
      price: 99,
      period: 'month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 15+ hours/week', 'Get expert-level insights'],
      rating: 4.8,
      users: 8900,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: 3,
      name: 'AI Content Generator',
      description: 'Create high-quality, engaging content for blogs, social media, and marketing materials.',
      category: 'ai',
      icon: FileText,
      price: 199,
      period: 'month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Product descriptions', 'Multi-language support'],
      benefits: ['Create content 10x faster', 'Maintain consistent tone', 'Scale content production', 'Improve engagement rates'],
      rating: 4.7,
      users: 15600,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 4,
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and predictive analytics.',
      category: 'analytics',
      icon: BarChart,
      price: 149,
      period: 'month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Automated insights'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Save 20+ hours/week', 'Increase revenue by 25%'],
      rating: 4.9,
      users: 11200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 5,
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with human-like responses.',
      category: 'ai',
      icon: Bot,
      price: 299,
      period: 'month',
      features: ['Natural language processing', 'Multi-channel support', 'Ticket management', 'Knowledge base integration', 'Analytics dashboard'],
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Scale customer service', 'Increase satisfaction'],
      rating: 4.8,
      users: 6800,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-support-bot'
    },
    {
      id: 6,
      name: 'AI Project Manager',
      description: 'Smart project management with AI-powered task prioritization and resource optimization.',
      category: 'productivity',
      icon: Settings,
      price: 139,
      period: 'month',
      features: ['Task automation', 'Resource allocation', 'Timeline optimization', 'Risk assessment', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks', 'Optimize team productivity', 'Improve delivery times'],
      rating: 4.6,
      users: 9200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      id: 7,
      name: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement, and analytics across all platforms.',
      category: 'marketing',
      icon: Globe,
      price: 129,
      period: 'month',
      features: ['Content scheduling', 'Engagement automation', 'Hashtag optimization', 'Performance analytics', 'Multi-platform support'],
      benefits: ['Increase engagement by 200%', 'Save 15+ hours/week', 'Grow followers organically', 'Improve brand awareness'],
      rating: 4.7,
      users: 13400,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-social-manager'
    },
    {
      id: 8,
      name: 'AI Document Processor',
      description: 'Intelligent document analysis, extraction, and processing for business workflows.',
      category: 'productivity',
      icon: FileCheck,
      price: 89,
      period: 'month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'API integration'],
      benefits: ['Process documents 50x faster', 'Reduce manual errors', 'Automate workflows', 'Improve accuracy'],
      rating: 4.8,
      users: 7600,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-document-processor'
    },
    {
      id: 9,
      name: 'AI Email Marketing',
      description: 'Smart email campaigns with personalization, A/B testing, and automated sequences.',
      category: 'marketing',
      icon: Mail,
      price: 109,
      period: 'month',
      features: ['Email personalization', 'A/B testing', 'Automated sequences', 'Segmentation', 'Performance analytics'],
      benefits: ['Increase open rates by 40%', 'Boost click-through rates', 'Automate campaigns', 'Improve ROI'],
      rating: 4.6,
      users: 9800,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      id: 10,
      name: 'AI Image Generator',
      description: 'Create stunning images, graphics, and visual content using advanced AI technology.',
      category: 'design',
      icon: Image,
      price: 159,
      period: 'month',
      features: ['Text-to-image generation', 'Style transfer', 'Image editing', 'Batch processing', 'High-resolution output'],
      benefits: ['Create visuals instantly', 'Reduce design costs', 'Maintain brand consistency', 'Scale visual content'],
      rating: 4.9,
      users: 18200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-image-generator'
    },
    {
      id: 11,
      name: 'AI Video Creator',
      description: 'Generate professional videos from text, images, and templates with AI assistance.',
      category: 'design',
      icon: Video,
      price: 199,
      period: 'month',
      features: ['Text-to-video generation', 'Template library', 'Voice synthesis', 'Auto-editing', 'Multi-format export'],
      benefits: ['Create videos 20x faster', 'Reduce production costs', 'Professional quality output', 'Scale video content'],
      rating: 4.7,
      users: 11500,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-video-creator'
    },
    {
      id: 12,
      name: 'AI Voice Assistant',
      description: 'Custom voice assistant for your business with natural language processing capabilities.',
      category: 'ai',
      icon: Mic,
      price: 249,
      period: 'month',
      features: ['Voice recognition', 'Natural language processing', 'Custom commands', 'Integration APIs', 'Multi-language support'],
      benefits: ['Improve accessibility', 'Hands-free operation', 'Increase efficiency', 'Enhance user experience'],
      rating: 4.8,
      users: 6200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-voice-assistant'
    },
    {
      id: 13,
      name: 'AI Data Scraper',
      description: 'Intelligent web scraping with data extraction, cleaning, and analysis capabilities.',
      category: 'development',
      icon: Database,
      price: 119,
      period: 'month',
      features: ['Web scraping', 'Data cleaning', 'API integration', 'Scheduled extraction', 'Data export'],
      benefits: ['Extract data efficiently', 'Automate data collection', 'Clean and structure data', 'Save manual work'],
      rating: 4.5,
      users: 8400,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-data-scraper'
    },
    {
      id: 14,
      name: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      category: 'productivity',
      icon: Lock,
      price: 49,
      period: 'month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Multi-device sync', 'Team sharing'],
      benefits: ['Enhance security', 'Simplify password management', 'Prevent breaches', 'Protect sensitive data'],
      rating: 4.9,
      users: 25600,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-password-manager'
    },
    {
      id: 15,
      name: 'AI Calendar Optimizer',
      description: 'Smart calendar management with meeting optimization and scheduling assistance.',
      category: 'productivity',
      icon: Calendar,
      price: 79,
      period: 'month',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Analytics dashboard'],
      benefits: ['Optimize time usage', 'Reduce scheduling conflicts', 'Improve productivity', 'Better work-life balance'],
      rating: 4.6,
      users: 10800,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-calendar-optimizer'
    },
    {
      id: 16,
      name: 'AI Financial Tracker',
      description: 'Personal finance management with AI-powered insights and investment recommendations.',
      category: 'analytics',
      icon: DollarSign,
      price: 99,
      period: 'month',
      features: ['Expense tracking', 'Budget optimization', 'Investment analysis', 'Financial goals', 'Report generation'],
      benefits: ['Improve financial health', 'Optimize spending', 'Track investments', 'Achieve financial goals'],
      rating: 4.7,
      users: 14200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-financial-tracker'
    },
    {
      id: 17,
      name: 'AI Website Builder',
      description: 'Create professional websites with AI-powered design and content generation.',
      category: 'development',
      icon: Globe,
      price: 179,
      period: 'month',
      features: ['Drag-and-drop builder', 'AI design suggestions', 'Content generation', 'SEO optimization', 'Mobile responsive'],
      benefits: ['Build websites faster', 'Professional designs', 'No coding required', 'SEO-optimized'],
      rating: 4.8,
      users: 16800,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-website-builder'
    },
    {
      id: 18,
      name: 'AI Lead Generator',
      description: 'Automated lead generation and qualification using AI-powered prospect identification.',
      category: 'marketing',
      icon: Target,
      price: 189,
      period: 'month',
      features: ['Lead identification', 'Contact enrichment', 'Qualification scoring', 'CRM integration', 'Campaign automation'],
      benefits: ['Generate more leads', 'Improve lead quality', 'Automate prospecting', 'Increase conversions'],
      rating: 4.6,
      users: 9200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-lead-generator'
    },
    {
      id: 19,
      name: 'AI Translation Tool',
      description: 'Real-time translation with context-aware AI for accurate multilingual communication.',
      category: 'communication',
      icon: Globe,
      price: 69,
      period: 'month',
      features: ['Real-time translation', 'Context awareness', 'Document translation', 'Voice translation', '100+ languages'],
      benefits: ['Break language barriers', 'Improve communication', 'Expand global reach', 'Accurate translations'],
      rating: 4.8,
      users: 19800,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-translation'
    },
    {
      id: 20,
      name: 'AI Meeting Assistant',
      description: 'Smart meeting management with transcription, summarization, and action item tracking.',
      category: 'productivity',
      icon: MessageSquare,
      price: 129,
      period: 'month',
      features: ['Live transcription', 'Meeting summaries', 'Action item tracking', 'Integration sync', 'Analytics dashboard'],
      benefits: ['Never miss important points', 'Improve meeting efficiency', 'Track follow-ups', 'Better collaboration'],
      rating: 4.7,
      users: 12600,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-meeting-assistant'
    }
  ];

  const filteredTools = microSaasTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'popular': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'trending': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'new': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            50+ AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth with cutting-edge AI technology.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cyber-input"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${tool.id * 50}ms` }}
              >
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center energy-pulse">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{tool.rating}</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-300">{tool.users.toLocaleString()} users</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(tool.status)}`}>
                    {tool.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {tool.features.length > 3 && (
                      <li className="text-xs text-cyan-400">
                        +{tool.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${tool.price}
                      <span className="text-sm text-gray-400">/{tool.period}</span>
                    </div>
                    <div className="text-xs text-gray-500">Starting price</div>
                  </div>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button flex items-center space-x-2 px-4 py-2 text-sm"
                  >
                    <span>Try Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cyber-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered tools to increase productivity, 
              reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;