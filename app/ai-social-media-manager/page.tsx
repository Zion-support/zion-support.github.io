'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  BarChart, 
  Users, 
  Mail, 
  MessageSquare, 
  FileText, 
  Search, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  ArrowRight, 
  Phone, 
  Award,
  Globe,
  Lock,
  Sparkles,
  Cpu,
  Eye,
  Bot,
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
  Compass,
  Navigation,
  PieChart,
  Activity,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Play,
  Download,
  Share2,
  BookOpen as BookOpenIcon,
  Lightbulb,
  RefreshCw,
  AlertTriangle,
  CheckSquare,
  Timer,
  DollarSign,
  TrendingDown,
  UserPlus,
  FolderOpen,
  MessageCircle,
  Bell,
  Settings as SettingsIcon,
  HelpCircle,
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Hash,
  Heart as HeartIcon,
  ThumbsUp,
  Share,
  Eye as EyeIcon,
  BarChart3,
  Calendar as CalendarIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Type,
  Hashtag,
  AtSign,
  Link as LinkIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  MessageCircle as MessageCircleIcon,
  Share2 as Share2Icon,
  Bell as BellIcon,
  Settings as SettingsIcon2,
  HelpCircle as HelpCircleIcon,
  ExternalLink as ExternalLinkIcon
} from 'lucide-react';

const AISocialMediaManagerPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate engaging social media content using advanced AI that understands your brand voice and audience preferences.',
      benefits: ['300% increase in engagement', 'Consistent brand voice', 'Multi-platform optimization']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience activity patterns and platform algorithms.',
      benefits: ['50% higher reach', 'Optimal timing', 'Cross-platform coordination']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with AI insights, competitor analysis, and performance predictions.',
      benefits: ['Real-time insights', 'Competitor tracking', 'ROI measurement']
    },
    {
      icon: Hash,
      title: 'Hashtag Intelligence',
      description: 'AI-powered hashtag research and optimization to maximize reach and engagement across all platforms.',
      benefits: ['Trending hashtag discovery', 'Engagement optimization', 'Reach amplification']
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep audience analysis with AI-powered segmentation and personalized content recommendations.',
      benefits: ['Audience segmentation', 'Personalized content', 'Growth optimization']
    },
    {
      icon: MessageCircle,
      title: 'Automated Engagement',
      description: 'AI-powered comment responses, DM management, and community engagement to build stronger relationships.',
      benefits: ['24/7 engagement', 'Consistent responses', 'Community building']
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500', features: ['Stories automation', 'Reels optimization', 'IGTV scheduling'] },
    { name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-600', features: ['Thread creation', 'Trend monitoring', 'Engagement tracking'] },
    { name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-800', features: ['Page optimization', 'Event promotion', 'Group management'] },
    { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-700', features: ['Video optimization', 'Thumbnail generation', 'SEO optimization'] },
    { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-700 to-blue-900', features: ['Professional content', 'B2B engagement', 'Thought leadership'] },
    { name: 'TikTok', icon: Video, color: 'from-black to-gray-800', features: ['Trend analysis', 'Viral content', 'Creator tools'] }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Advanced AI content generation',
        'Smart scheduling',
        'Advanced analytics',
        'Priority support',
        'Hashtag research',
        'Competitor analysis',
        'API access'
      ],
      popular: true,
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Full AI capabilities',
        'White-label options',
        'Advanced analytics',
        '24/7 phone support',
        'Custom integrations',
        'Team collaboration',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'AI Social Media Manager has transformed our content strategy. We\'ve seen a 300% increase in engagement and our team saves 20 hours per week.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
      content: 'The AI content generation is incredible. It perfectly captures our brand voice and creates content that resonates with our audience.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Amanda Wilson',
      role: 'Content Creator',
      company: 'Personal Brand',
      content: 'The scheduling optimization has been a game-changer. My posts now get 50% more reach thanks to the AI-powered timing suggestions.',
      rating: 5,
      avatar: 'AW'
    }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_social_media_manager_phone',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors">Micro SAAS</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text cyber-text">
                AI Social Media Manager
              </h1>
              <p className="text-lg text-pink-400">Revolutionary Social Media Automation</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your social media presence with AI-powered content creation, smart scheduling, and advanced analytics. 
            Increase engagement by 300% and save 20 hours per week.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-white font-medium">Engagement Increase</div>
              <div className="text-gray-400 text-sm">Average improvement</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">20h</div>
              <div className="text-white font-medium">Time Saved</div>
              <div className="text-gray-400 text-sm">Per week</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5,200+</div>
              <div className="text-white font-medium">Active Users</div>
              <div className="text-gray-400 text-sm">Worldwide</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.8/5</div>
              <div className="text-white font-medium">Rating</div>
              <div className="text-gray-400 text-sm">User satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button text-center">
              <Play className="w-5 h-5 mr-2 inline" />
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-pink-400 text-pink-400 rounded-lg hover:bg-pink-400 hover:text-black transition-all">
              <Download className="w-5 h-5 mr-2 inline" />
              Download Demo
            </button>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Supported Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{platform.name}</h3>
                <ul className="space-y-1">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-pink-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'ring-2 ring-pink-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
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
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600' 
                    : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Revolutionize Your Social Media?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of social media managers who have already transformed their workflow with AI Social Media Manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button text-center"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
            <div className="cyber-card p-6">
              <Location className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

AISocialMediaManagerPage.displayName = 'AISocialMediaManagerPage';
export default AISocialMediaManagerPage;