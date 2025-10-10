'use client';
import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Play, 
<<<<<<< HEAD
  Pause, 
  Square, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Share2, 
  Download, 
  Upload, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Search, 
  Filter, 
  SortAsc, 
  SortDesc, 
  MoreHorizontal, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight, 
  ChevronUp, 
  ChevronDown, 
  Eye, 
  EyeOff, 
  Heart, 
  Bookmark, 
  Flag, 
  Tag, 
  Link, 
  Copy, 
  ExternalLink, 
  Info, 
  AlertTriangle, 
  Check, 
  XCircle, 
  AlertCircle, 
  HelpCircle, 
  Lightbulb, 
  Rocket, 
  Target, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin, 
  BarChart, 
  Settings, 
  Bell, 
  TrendingUp, 
  Award, 
  MessageSquare, 
  FileText, 
  Database, 
  Lock, 
  Cloud, 
  Cpu, 
  Wifi, 
  Battery, 
  Wrench, 
  RefreshCw, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Calendar, 
  DollarSign, 
  Palette, 
  Scissors, 
  Film, 
  Image, 
  Music, 
  Headphones, 
  Speaker, 
  Mic as MicIcon, 
  MicOff as MicOffIcon, 
  Camera as CameraIcon, 
  CameraOff as CameraOffIcon, 
  Share2 as Share2Icon, 
  Download as DownloadIcon, 
  Upload as UploadIcon, 
  Edit as EditIcon, 
  Trash2 as Trash2Icon, 
  Plus as PlusIcon, 
  Minus as MinusIcon, 
  X as XIcon, 
  Search as SearchIcon, 
  Filter as FilterIcon, 
  SortAsc as SortAscIcon, 
  SortDesc as SortDescIcon, 
  MoreHorizontal as MoreHorizontalIcon, 
  MoreVertical as MoreVerticalIcon, 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon, 
  ChevronUp as ChevronUpIcon, 
  ChevronDown as ChevronDownIcon, 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon, 
  Heart as HeartIcon, 
  Bookmark as BookmarkIcon, 
  Flag as FlagIcon, 
  Tag as TagIcon, 
  Link as LinkIcon, 
  Copy as CopyIcon, 
  ExternalLink as ExternalLinkIcon, 
  Info as InfoIcon, 
  AlertTriangle as AlertTriangleIcon, 
  Check as CheckIcon, 
  XCircle as XCircleIcon, 
  AlertCircle as AlertCircleIcon, 
  HelpCircle as HelpCircleIcon, 
  Lightbulb as LightbulbIcon, 
  Rocket as RocketIcon, 
  Target as TargetIcon, 
  Zap as ZapIcon, 
  Brain as BrainIcon, 
  Shield as ShieldIcon, 
  Globe as GlobeIcon, 
  Smartphone as SmartphoneIcon, 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  MapPin as MapPinIcon, 
  BarChart as BarChartIcon, 
  Settings as SettingsIcon, 
  Bell as BellIcon, 
  TrendingUp as TrendingUpIcon, 
  Award as AwardIcon, 
  MessageSquare as MessageSquareIcon, 
  FileText as FileTextIcon, 
  Database as DatabaseIcon, 
  Lock as LockIcon, 
  Cloud as CloudIcon, 
  Cpu as CpuIcon, 
  Wifi as WifiIcon, 
  Battery as BatteryIcon, 
  Wrench as WrenchIcon, 
  RefreshCw as RefreshCwIcon, 
  Users as UsersIcon, 
  Star as StarIcon, 
  CheckCircle as CheckCircleIcon, 
  ArrowRight as ArrowRightIcon, 
  Clock as ClockIcon, 
  Calendar as CalendarIcon, 
  DollarSign as DollarSignIcon, 
  Palette as PaletteIcon, 
  Scissors as ScissorsIcon, 
  Film as FilmIcon, 
  Image as ImageIcon, 
  Music as MusicIcon, 
  Headphones as HeadphonesIcon, 
  Speaker as SpeakerIcon
=======
  Camera, 
  Mic, 
  Edit3, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Palette,
  Music,
  Upload,
  Download,
  Share2,
  Settings,
  BarChart,
  Target,
  Award,
  Shield,
  Globe,
  Sparkles
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
} from 'lucide-react';

const AIVideoGeneratorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
<<<<<<< HEAD
      category: 'AI Video Creation',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      items: [
        'Text-to-video generation',
        'Image-to-video conversion',
        'Voice synthesis and dubbing',
        'Automatic scene transitions',
        'Smart video editing',
        'AI-powered storyboarding'
      ]
    },
    {
      category: 'Professional Editing',
      icon: Scissors,
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Multi-track timeline editing',
        'Advanced color correction',
        'Motion graphics and effects',
        'Audio mixing and mastering',
        'Green screen compositing',
        'Professional transitions'
      ]
    },
    {
      category: 'Content Optimization',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      items: [
        'Platform-specific optimization',
        'SEO-optimized video titles',
        'Automatic thumbnail generation',
        'Social media formatting',
        'A/B testing capabilities',
        'Performance analytics'
      ]
    },
    {
      category: 'Collaboration Tools',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      items: [
        'Real-time collaboration',
        'Version control and history',
        'Comment and feedback system',
        'Team project management',
        'Asset sharing library',
        'Client review portal'
      ]
=======
      icon: Brain,
      title: 'AI Script Generation',
      description: 'Generate compelling video scripts from simple prompts using advanced natural language processing.',
      benefits: ['Auto-generated scripts', 'Multiple tone options', 'SEO-optimized content', 'Brand voice matching']
    },
    {
      icon: Camera,
      title: 'Smart Video Creation',
      description: 'Create professional videos from text, images, or audio with AI-powered scene generation and transitions.',
      benefits: ['Auto scene generation', 'Smart transitions', 'Professional templates', 'Custom branding']
    },
    {
      icon: Mic,
      title: 'AI Voice Synthesis',
      description: 'Generate natural-sounding voiceovers in 50+ languages with customizable voices and emotions.',
      benefits: ['50+ voice options', 'Emotion control', 'Multiple languages', 'Natural pronunciation']
    },
    {
      icon: Palette,
      title: 'Visual Effects & Animation',
      description: 'Add stunning visual effects, animations, and motion graphics automatically with AI assistance.',
      benefits: ['Auto animations', 'Visual effects', 'Motion graphics', 'Color grading']
    },
    {
      icon: Music,
      title: 'AI Music & Sound',
      description: 'Generate royalty-free background music and sound effects that perfectly match your video content.',
      benefits: ['Royalty-free music', 'Auto sound matching', 'Custom compositions', 'Mood-based selection']
    },
    {
      icon: Zap,
      title: 'One-Click Publishing',
      description: 'Publish directly to YouTube, TikTok, Instagram, and other platforms with optimized settings.',
      benefits: ['Multi-platform publishing', 'Auto optimization', 'Scheduling tools', 'Analytics integration']
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
<<<<<<< HEAD
        'Up to 10 hours of video/month',
        'HD video export',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Watermark on exports'
=======
        '10 videos per month',
        'HD quality export',
        'Basic AI voices',
        'Standard templates',
        'Email support',
        'Social media publishing'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
<<<<<<< HEAD
      description: 'Advanced features for professional video creators',
      features: [
        'Up to 50 hours of video/month',
        '4K video export',
        'Advanced AI features',
        'Premium templates',
        'Priority support',
        'No watermark',
        'Brand kit integration',
        'API access'
=======
      description: 'Ideal for marketing teams and agencies',
      features: [
        'Unlimited videos',
        '4K quality export',
        'Premium AI voices',
        'Advanced templates',
        'Priority support',
        'White-label options',
        'Team collaboration',
        'Custom branding'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
<<<<<<< HEAD
      description: 'Complete solution for large teams and agencies',
      features: [
        'Unlimited video generation',
        '8K video export',
        'All AI features',
        'Custom templates',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
=======
      description: 'For large organizations and media companies',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'API access',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const templates = [
    { name: 'Social Media Ads', category: 'Marketing', duration: '15-30s', icon: Smartphone },
    { name: 'Product Demos', category: 'E-commerce', duration: '1-3min', icon: ShoppingCart },
    { name: 'Educational Content', category: 'Education', duration: '3-10min', icon: GraduationCap },
    { name: 'Corporate Presentations', category: 'Business', duration: '5-15min', icon: Briefcase },
    { name: 'Tutorial Videos', category: 'How-to', duration: '2-8min', icon: Wrench },
    { name: 'Brand Stories', category: 'Branding', duration: '1-5min', icon: Heart }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Content Creator',
      company: 'Digital Marketing Pro',
      content: 'AI Video Generator has revolutionized my content creation process. I can now produce professional-quality videos in minutes instead of hours.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Marketing Director',
      company: 'TechCorp Solutions',
      content: 'The AI-powered voice synthesis is incredibly realistic. Our video content has seen a 300% increase in engagement since we started using this platform.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Thompson',
      role: 'Creative Director',
      company: 'Creative Agency Inc.',
      content: 'The collaboration features are outstanding. Our team can work together seamlessly on video projects, and the client review process is so much smoother.',
      rating: 5,
      avatar: 'ST'
    }
  ];

  const stats = [
    { number: '100,000+', label: 'Videos Created', icon: Video },
    { number: '25,000+', label: 'Active Users', icon: Users },
    { number: '95%', label: 'Time Saved', icon: Clock },
    { number: '4.9/5', label: 'User Rating', icon: Star }
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: 'Social Media Marketing',
      description: 'Create engaging social media content that drives engagement and conversions',
      icon: Smartphone,
      benefits: ['Increased engagement', 'Higher conversion rates', 'Consistent brand voice']
    },
    {
      title: 'E-learning Content',
      description: 'Develop educational videos that enhance learning experiences',
      icon: GraduationCap,
      benefits: ['Better retention rates', 'Interactive content', 'Scalable production']
    },
    {
      title: 'Product Marketing',
      description: 'Showcase your products with compelling video demonstrations',
      icon: ShoppingCart,
      benefits: ['Higher sales conversion', 'Reduced support tickets', 'Better product understanding']
    },
    {
      title: 'Corporate Training',
      description: 'Create training materials that engage and educate your workforce',
      icon: Briefcase,
      benefits: ['Improved training effectiveness', 'Consistent messaging', 'Cost-effective production']
    }
  ];

=======
      title: 'Marketing Videos',
      description: 'Create engaging promotional content for social media and advertising campaigns.',
      icon: Target,
      examples: ['Product demos', 'Brand stories', 'Social media ads', 'Email campaigns']
    },
    {
      title: 'Educational Content',
      description: 'Produce instructional videos and training materials with AI-generated explanations.',
      icon: Award,
      examples: ['Tutorial videos', 'Course content', 'Training materials', 'How-to guides']
    },
    {
      title: 'Social Media',
      description: 'Generate viral content for TikTok, Instagram, YouTube, and other platforms.',
      icon: Share2,
      examples: ['TikTok videos', 'Instagram reels', 'YouTube shorts', 'LinkedIn videos']
    },
    {
      title: 'Corporate Communications',
      description: 'Create professional internal and external communication videos.',
      icon: Globe,
      examples: ['Company updates', 'Product launches', 'Employee training', 'Client presentations']
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director, Creative Agency',
      content: 'AI Video Generator has revolutionized our content creation process. We can now produce 10x more video content with the same team.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'YouTuber & Educator',
      content: 'The AI voice synthesis is incredibly natural. My audience can\'t tell the difference between AI and human narration.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'As a small business owner, this tool has given me the power to create professional marketing videos without a huge budget.',
      rating: 5
    }
  ];

>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white cyber-text neon-pulse">
                AI Video Generator Pro
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create professional-quality videos in minutes with AI-powered automation. 
              From concept to completion, transform your ideas into stunning visual content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Palette className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Professional Quality</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Video Creation Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional videos without the complexity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mr-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.category}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Professional Video Templates
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from hundreds of professionally designed templates for every use case
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <template.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-white font-bold">{template.name}</h3>
                    <p className="text-gray-400 text-sm">{template.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{template.duration}</span>
                  <a href="/contact" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Try Template →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From social media to corporate training, we've got you covered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your video creation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
=======
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <Video className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Video Generator Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning professional videos in minutes, not hours. From script to final cut, our AI handles everything while you focus on your message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Creating Videos
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Create Amazing Videos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to publication, our AI-powered platform handles every aspect of video creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white w-fit mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're a content creator, marketer, educator, or business owner, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white w-fit mx-auto mb-4">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-left">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their video creation process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
=======
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            Start with a free trial and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-400 ring-2 ring-pink-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Content Creators Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of creators who are already using AI Video Generator Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join over 25,000 creators who are already using AI Video Generator Pro to create stunning content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Video className="w-5 h-5 mr-2" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>
=======
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Start your free trial today and see how easy it is to create professional videos with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-pink-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
    </div>
  );
};

export default AIVideoGeneratorPage;