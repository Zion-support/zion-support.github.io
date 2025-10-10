'use client';
import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Play, 
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
} from 'lucide-react';

const AIVideoGeneratorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
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
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        'Up to 10 hours of video/month',
        'HD video export',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Watermark on exports'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
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
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
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
              </div>
            ))}
          </div>
        </div>
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
              </div>
            ))}
          </div>
        </div>
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
    </div>
  );
};

export default AIVideoGeneratorPage;