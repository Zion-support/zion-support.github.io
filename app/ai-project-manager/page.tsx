'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Calendar, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Plus, Minus, X, CheckSquare, AlertCircle, Info, ExternalLink, Download, Upload, Share2, Copy, Edit, Trash2, Save, RefreshCw, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Mic, MicOff, Camera as CameraIcon, Video as VideoIcon, Image, File, Folder, FolderOpen, Search as SearchIcon, Filter, SortAsc, SortDesc, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronUpDown, ArrowUpDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Hand, MousePointer, Cursor, Type, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Quote, Code as CodeIcon, Link, Unlink, Image as ImageIcon, Table, Columns, Rows, Grid, Layout, Sidebar, SidebarClose, SidebarOpen, PanelLeft, PanelRight, PanelTop, PanelBottom, Split, SplitSquareHorizontal, SplitSquareVertical, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart as HeartIcon, Star as StarIcon2, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Flame, Snowflake, Zap as ZapIcon, Thunderstorm, Tornado, Hurricane, Earthquake, Volcano, Mountain, Tree, Leaf, Flower, Seedling, Sprout, Cactus, Palm, Pine, Oak, Maple, Cherry, Apple, Orange, Lemon, Banana, Grapes, Strawberry, Watermelon, Pineapple, Mango, Avocado, Coconut, Kiwi, Peach, Pear, Plum, Apricot, Fig, Date, Raisin, Cranberry, Blueberry, Raspberry, Blackberry, Gooseberry, Elderberry, Mulberry, Boysenberry, Loganberry, Cloudberry, Huckleberry, Lingonberry, Barberry, Currant, Cherry as CherryIcon, Apple as AppleIcon, Orange as OrangeIcon, Lemon as LemonIcon, Banana as BananaIcon, Grapes as GrapesIcon, Strawberry as StrawberryIcon, Watermelon as WatermelonIcon, Pineapple as PineappleIcon, Mango as MangoIcon, Avocado as AvocadoIcon, Coconut as CoconutIcon, Kiwi as KiwiIcon, Peach as PeachIcon, Pear as PearIcon, Plum as PlumIcon, Apricot as ApricotIcon, Fig as FigIcon, Date as DateIcon, Raisin as RaisinIcon, Cranberry as CranberryIcon, Blueberry as BlueberryIcon, Raspberry as RaspberryIcon, Blackberry as BlackberryIcon, Gooseberry as GooseberryIcon, Elderberry as ElderberryIcon, Mulberry as MulberryIcon, Boysenberry as BoysenberryIcon, Loganberry as LoganberryIcon, Cloudberry as CloudberryIcon, Huckleberry as HuckleberryIcon, Lingonberry as LingonberryIcon, Barberry as BarberryIcon, Currant as CurrantIcon } from 'lucide-react';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Task Management',
      description: 'Intelligent task prioritization and resource allocation using machine learning algorithms',
      benefits: ['Automated priority scoring', 'Smart resource matching', 'Predictive timeline estimation', 'Risk assessment']
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Comprehensive project analytics with AI-driven insights and recommendations',
      benefits: ['Performance tracking', 'Budget monitoring', 'Team productivity metrics', 'Predictive analytics']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication and workflow optimization',
      benefits: ['Smart notifications', 'Automated standups', 'Conflict resolution', 'Knowledge sharing']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Intelligent goal setting and tracking with automated progress monitoring',
      benefits: ['SMART goal templates', 'Progress visualization', 'Milestone tracking', 'Achievement recognition']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that optimizes team availability and project deadlines',
      benefits: ['Auto-scheduling', 'Conflict detection', 'Time zone management', 'Deadline optimization']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by AI',
      benefits: ['Risk prediction', 'Mitigation planning', 'Early warning system', 'Compliance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 team members',
        'Unlimited projects',
        'Basic AI insights',
        'Standard integrations',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Up to 25 team members',
        'Advanced AI analytics',
        'Custom workflows',
        'Advanced integrations',
        'Priority support',
        'API access',
        'Custom reporting',
        'Time tracking'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex project needs',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Manage agile sprints, code reviews, and deployment pipelines with AI-powered insights',
      icon: Code,
      benefits: ['Sprint optimization', 'Code quality tracking', 'Deployment automation', 'Bug prediction']
    },
    {
      title: 'Marketing Campaigns',
      description: 'Plan and execute marketing campaigns with AI-driven audience targeting and performance optimization',
      icon: Target,
      benefits: ['Campaign optimization', 'Audience insights', 'Performance prediction', 'ROI tracking']
    },
    {
      title: 'Construction Projects',
      description: 'Oversee construction projects with AI-powered resource management and safety monitoring',
      icon: Building,
      benefits: ['Resource optimization', 'Safety monitoring', 'Timeline prediction', 'Cost control']
    },
    {
      title: 'Event Planning',
      description: 'Organize events with AI-assisted vendor management and attendee experience optimization',
      icon: Calendar,
      benefits: ['Vendor matching', 'Attendee insights', 'Logistics optimization', 'Experience tracking']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager has revolutionized how we handle complex projects. The AI insights have helped us reduce project delays by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The predictive analytics feature is incredible. We can now anticipate bottlenecks before they become problems.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'Our team productivity increased by 60% since implementing AI Project Manager. The smart scheduling alone is worth the investment.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Project Manager - Zion Tech Group</title>
        <meta name="description" content="Intelligent project management solution with AI-powered task prioritization, real-time analytics, and team collaboration. Starting at $99/month." />
        <meta name="keywords" content="ai project management, project management software, team collaboration, task management, project analytics, ai insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Project Management</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Project Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your project management with AI-powered insights, intelligent task prioritization, and automated workflow optimization. 
            Boost team productivity by up to 60% with our advanced project management solution.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Fewer Delays</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$99</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Project Manager Demo Request"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
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
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Project Manager - ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-xs text-gray-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams already using AI Project Manager to boost productivity and deliver projects on time.
          </p>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Project Manager Inquiry"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagerPage;