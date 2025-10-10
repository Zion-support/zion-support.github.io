'use client';
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, BarChart, Users, Target, CheckCircle, Clock, DollarSign, 
  TrendingUp, AlertCircle, Star, Zap, Shield, Brain, Settings, 
  ArrowRight, Phone, Mail, MapPin, Play, Pause, RotateCcw, 
  Download, Upload, Share, Eye, Edit, Trash2, Plus, Minus,
  Filter, Search, SortAsc, SortDesc, Grid, List, Maximize,
  Minimize, RefreshCw, Save, FileText, Image, Video, Music,
  Headphones, Monitor, Laptop, Tablet, Watch, Wifi, Bluetooth,
  Battery, Wrench, Layers, Grid as GridIcon, Maximize as MaximizeIcon,
  Minimize as MinimizeIcon, RotateCcw as RotateIcon, Play as PlayIcon,
  Pause as PauseIcon, Stop, SkipForward, SkipBack, Volume2, VolumeX,
  Settings2, Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Plus as PlusIcon, Minus as MinusIcon, Edit as EditIcon, Trash2 as TrashIcon,
  Save as SaveIcon, Download as DownloadIcon, Upload as UploadIcon,
  Share as ShareIcon, Copy, ExternalLink, Info, AlertCircle as AlertIcon,
  CheckCircle2, XCircle, HelpCircle, Lightbulb, Rocket, Flame, Snowflake,
  Sun, Moon, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind,
  Droplets, Thermometer, Gauge, Activity, Zap as Lightning, Shield as Security,
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic,
  DollarSign as Dollar, Truck, Link, HardDrive, FileCheck, FileText as File,
  Search as MagnifyingGlass, Bot, Palette, Camera, Music as Audio, Video as Movie,
  Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train,
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench as Tool, Hammer,
  Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3 as Time,
  Compass, Navigation, PieChart, TrendingDown, Activity as Stats, Zap as Power,
  Shield as Protect, Globe, Brain as AI, Cpu, Target as Goal, Users as Team,
  Award, Lock, Smartphone, FileText as Text, Search as Find, Bot as Assistant,
  Palette as Color, Camera as Image, Music as Sound, Video as Clip, Gamepad2 as Gaming,
  ShoppingCart as Purchase, CreditCard as Payment, Building as Corporate, Factory as Manufacturing,
  Car as Auto, Plane as Aircraft, Ship as Vessel, Train as Locomotive, Home as Residence,
  Heart as Love, Stethoscope as Doctor, GraduationCap as School, Briefcase as Business,
  Wrench as Fix, Hammer as Construct, Paintbrush as Art, Scissors as Trim,
  BookOpen as Read, Calculator as Compute, Calendar as Date, Clock3 as Hour,
  Compass as North, Navigation as Route, PieChart as Graph, TrendingDown as Decline,
  Activity as Monitor, Zap as Energy, Shield as Guard, Globe as Earth, Brain as Mind,
  Cpu as Chip, Target as Aim, Users as Group, Award as Trophy, Lock as Key,
  Smartphone as Phone, FileText as Doc, Search as Look, Bot as AI, Palette as Brush,
  Camera as Lens, Music as Melody, Video as Film, Gamepad2 as Controller, ShoppingCart as Buy,
  CreditCard as Money, Building as Tower, Factory as Plant, Car as Ride, Plane as Jet,
  Ship as Yacht, Train as Metro, Home as Place, Heart as Beat, Stethoscope as Care,
  GraduationCap as Learn, Briefcase as Job, Wrench as Service, Hammer as Create,
  Paintbrush as Style, Scissors as Snip, BookOpen as Study, Calculator as Count,
  Calendar as Plan, Clock3 as Moment, Compass as Guide, Navigation as Path,
  PieChart as Data, TrendingDown as Fall, Activity as Track, Zap as Flash,
  Shield as Defense, Globe as Planet, Brain as Intelligence, Cpu as Core,
  Target as Focus, Users as Community, Award as Recognition, Lock as Safety,
  Smartphone as Device, FileText as Content, Search as Discover, Bot as Machine,
  Palette as Creative, Camera as Capture, Music as Rhythm, Video as Media,
  Gamepad2 as Entertainment, ShoppingCart as Store, CreditCard as Finance,
  Building as Structure, Factory as Production, Car as Transport, Plane as Travel,
  Ship as Cargo, Train as Transit, Home as Living, Heart as Vital, Stethoscope as Treatment,
  GraduationCap as Knowledge, Briefcase as Career, Wrench as Maintenance, Hammer as Craft,
  Paintbrush as Expression, Scissors as Precision, BookOpen as Wisdom, Calculator as Logic,
  Calendar as Organization, Clock3 as Duration, Compass as Orientation, Navigation as Movement,
  PieChart as Analysis, TrendingDown as Reduction, Activity as Performance, Zap as Force,
  Shield as Security, Globe as Universe, Brain as Cognition, Cpu as Processing,
  Target as Objective, Users as Society, Award as Achievement, Lock as Protection,
  Smartphone as Technology, FileText as Information, Search as Investigation, Bot as Automation,
  Palette as Aesthetics, Camera as Documentation, Music as Harmony, Video as Storytelling,
  Gamepad2 as Interaction, ShoppingCart as Commerce, CreditCard as Economy,
  Building as Architecture, Factory as Innovation, Car as Mobility, Plane as Exploration,
  Ship as Adventure, Train as Connection, Home as Comfort, Heart as Passion, Stethoscope as Healing,
  GraduationCap as Growth, Briefcase as Success, Wrench as Improvement, Hammer as Development,
  Paintbrush as Imagination, Scissors as Refinement, BookOpen as Understanding, Calculator as Reasoning,
  Calendar as Coordination, Clock3 as Efficiency, Compass as Clarity, Navigation as Progress,
  PieChart as Insight, TrendingDown as Optimization, Activity as Excellence, Zap as Innovation
} from 'lucide-react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const AISocialMediaManagerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [socialData, setSocialData] = useState({
    totalFollowers: 125000,
    engagementRate: 8.5,
    postsThisMonth: 47,
    reach: 890000,
    clicks: 12500,
    conversions: 450,
    avgResponseTime: '2.3 hours',
    contentScore: 92
  });

  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging social media content using advanced AI that understands your brand voice and audience preferences.',
      benefits: ['Brand voice consistency', 'Trend-based content', 'Multi-platform optimization', 'Hashtag suggestions']
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Cross-platform sync', 'Bulk scheduling', 'Time zone management']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with AI-powered insights and performance predictions.',
      benefits: ['Real-time metrics', 'Performance predictions', 'Competitor analysis', 'ROI tracking']
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
      description: 'Deep audience analysis and segmentation to create highly targeted content strategies.',
      benefits: ['Audience segmentation', 'Behavior analysis', 'Demographic insights', 'Interest mapping']
    },
    {
      icon: Target,
      title: 'Hashtag Optimization',
      description: 'AI-powered hashtag research and optimization to maximize reach and engagement.',
      benefits: ['Trending hashtags', 'Relevance scoring', 'Competitor hashtags', 'Performance tracking']
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'AI-powered content moderation and brand safety checks to protect your reputation.',
      benefits: ['Content moderation', 'Brand safety checks', 'Crisis detection', 'Reputation monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '3 social accounts',
        '50 posts/month',
        'Basic AI features',
        'Email support',
        'Standard analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Most popular for growing brands',
      features: [
        '10 social accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Team collaboration',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Full AI capabilities',
        '24/7 support',
        'Custom development',
        'White-label options',
        'Advanced security',
        'Dedicated manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'AI Social Media Manager has transformed our social media strategy. We\'ve seen a 200% increase in engagement and 50% more reach since implementing this tool.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'The AI content creation feature is incredible. It saves us 20+ hours per week and the content quality is consistently high. Our social media presence has never been stronger.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Amanda Thompson',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'The audience intelligence features have helped us understand our customers better than ever. Our targeted campaigns now achieve 3x better results.',
      rating: 5,
      avatar: 'AT'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="AI Social Media Manager - Automated Social Media Management | Zion Tech Group"
        description="Revolutionary AI-powered social media management with automated content creation, smart scheduling, and audience intelligence. Used by 50,000+ businesses."
        keywords="AI social media management, automated posting, content creation, social media analytics, audience intelligence, social media automation"
      />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 particle-field"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular Marketing Tool
                    </span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                    AI Social Media
                    <span className="block neon-text">Manager</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Automate your social media with AI-powered content creation, smart scheduling, 
                    and audience intelligence. Used by <span className="text-cyan-400 font-semibold">50,000+ businesses</span> worldwide.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href="tel:+13024640950"
                      className="cyber-button px-8 py-4 text-lg font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +1 302 464 0950
                    </a>
                    <button
                      onClick={() => setIsDemoMode(!isDemoMode)}
                      className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {isDemoMode ? 'Stop Demo' : 'Start Demo'}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">200%</div>
                      <div className="text-sm text-gray-300">Engagement Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">20+</div>
                      <div className="text-sm text-gray-300">Hours Saved/Week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-1">40%</div>
                      <div className="text-sm text-gray-300">More Reach</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">50K+</div>
                      <div className="text-sm text-gray-300">Businesses</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="cyber-card p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-6">Live Social Dashboard</h3>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Total Followers</span>
                          <span className="text-cyan-400 font-bold">{socialData.totalFollowers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Engagement Rate</span>
                          <span className="text-purple-400 font-bold">{socialData.engagementRate}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Posts This Month</span>
                          <span className="text-pink-400 font-bold">{socialData.postsThisMonth}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Total Reach</span>
                          <span className="text-green-400 font-bold">{socialData.reach.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Clicks</span>
                          <span className="text-yellow-400 font-bold">{socialData.clicks.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Conversions</span>
                          <span className="text-cyan-400 font-bold">{socialData.conversions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to revolutionize your social media strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your social media needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+13024640950"
                    className={`w-full cyber-button text-center block py-3 ${
                      plan.popular ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : ''
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their social media presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 50,000+ businesses already using AI Social Media Manager to achieve unprecedented social media success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">Visit our office:</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISocialMediaManagerPage;