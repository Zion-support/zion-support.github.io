'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Calendar, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, UserCheck, UserPlus, UserMinus, UserX, UserCog, UserSearch, UserEdit, User, UserCircle, UserSquare, UserCheck as UserCheckIcon, UserPlus as UserPlusIcon, UserMinus as UserMinusIcon, UserX as UserXIcon, UserCog as UserCogIcon, UserSearch as UserSearchIcon, UserEdit as UserEditIcon, User as UserIcon, UserCircle as UserCircleIcon, UserSquare as UserSquareIcon, GraduationCap as EducationIcon, Briefcase as WorkIcon, Award as AchievementIcon, Heart as HealthIcon, Shield as SecurityIcon, Clock as TimeIcon, Calendar as ScheduleIcon, MessageSquare as CommunicationIcon, BarChart as AnalyticsIcon, Target as GoalIcon, TrendingUp as GrowthIcon, Users as TeamIcon, Brain as AIIcon, Zap as AutomationIcon, Sparkles as InnovationIcon, Eye as InsightIcon, Search as SearchIcon, FileText as DocumentIcon, Settings as ConfigurationIcon, Database as DataIcon, Cloud as CloudIcon, Code as TechnologyIcon, Smartphone as MobileIcon, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as LocationIcon, DollarSign as MoneyIcon, Lock as SecurityIcon2, Award as QualityIcon, Star as RatingIcon, CheckCircle as SuccessIcon, ArrowRight as NextIcon, ArrowLeft as PreviousIcon, ArrowUp as UpIcon, ArrowDown as DownIcon, ChevronDown as DownChevronIcon, ChevronUp as UpChevronIcon, ChevronLeft as LeftChevronIcon, ChevronRight as RightChevronIcon, Plus as AddIcon, Minus as RemoveIcon, X as CloseIcon, Check as CheckIcon, AlertCircle as AlertIcon, Info as InfoIcon, ExternalLink as ExternalIcon, Download as DownloadIcon, Upload as UploadIcon, Share2 as ShareIcon, Copy as CopyIcon, Edit as EditIcon, Trash2 as DeleteIcon, Save as SaveIcon, RefreshCw as RefreshIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, Volume2 as VolumeIcon, VolumeX as MuteIcon, Mic as MicIcon, MicOff as MicOffIcon, Camera as CameraIcon, Video as VideoIcon, Image as ImageIcon, File as FileIcon, Folder as FolderIcon, FolderOpen as FolderOpenIcon, Filter as FilterIcon, SortAsc as SortAscIcon, SortDesc as SortDescIcon, MoreHorizontal as MoreHorizontalIcon, MoreVertical as MoreVerticalIcon, ArrowUpDown as ArrowUpDownIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon, Move as MoveIcon, Hand as HandIcon, MousePointer as MousePointerIcon, Cursor as CursorIcon, Type as TypeIcon, Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon, Strikethrough as StrikethroughIcon, AlignLeft as AlignLeftIcon, AlignCenter as AlignCenterIcon, AlignRight as AlignRightIcon, AlignJustify as AlignJustifyIcon, List as ListIcon, ListOrdered as ListOrderedIcon, Quote as QuoteIcon, Code as CodeIcon2, Link as LinkIcon, Unlink as UnlinkIcon, Table as TableIcon, Columns as ColumnsIcon, Rows as RowsIcon, Grid as GridIcon, Layout as LayoutIcon, Sidebar as SidebarIcon, SidebarClose as SidebarCloseIcon, SidebarOpen as SidebarOpenIcon, PanelLeft as PanelLeftIcon, PanelRight as PanelRightIcon, PanelTop as PanelTopIcon, PanelBottom as PanelBottomIcon, Split as SplitIcon, SplitSquareHorizontal as SplitSquareHorizontalIcon, SplitSquareVertical as SplitSquareVerticalIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Pentagon as PentagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Heart as HeartIcon, Star as StarIcon2, Moon as MoonIcon, Sun as SunIcon, Cloud as CloudIcon2, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Flame as FlameIcon, Snowflake as SnowflakeIcon, Zap as ZapIcon, Thunderstorm as ThunderstormIcon, Tornado as TornadoIcon, Hurricane as HurricaneIcon, Earthquake as EarthquakeIcon, Volcano as VolcanoIcon, Mountain as MountainIcon, Tree as TreeIcon, Leaf as LeafIcon, Flower as FlowerIcon, Seedling as SeedlingIcon, Sprout as SproutIcon, Cactus as CactusIcon, Palm as PalmIcon, Pine as PineIcon, Oak as OakIcon, Maple as MapleIcon, Cherry as CherryIcon, Apple as AppleIcon, Orange as OrangeIcon, Lemon as LemonIcon, Banana as BananaIcon, Grapes as GrapesIcon, Strawberry as StrawberryIcon, Watermelon as WatermelonIcon, Pineapple as PineappleIcon, Mango as MangoIcon, Avocado as AvocadoIcon, Coconut as CoconutIcon, Kiwi as KiwiIcon, Peach as PeachIcon, Pear as PearIcon, Plum as PlumIcon, Apricot as ApricotIcon, Fig as FigIcon, Date as DateIcon, Raisin as RaisinIcon, Cranberry as CranberryIcon, Blueberry as BlueberryIcon, Raspberry as RaspberryIcon, Blackberry as BlackberryIcon, Gooseberry as GooseberryIcon, Elderberry as ElderberryIcon, Mulberry as MulberryIcon, Boysenberry as BoysenberryIcon, Loganberry as LoganberryIcon, Cloudberry as CloudberryIcon, Huckleberry as HuckleberryIcon, Lingonberry as LingonberryIcon, Barberry as BarberryIcon, Currant as CurrantIcon } from 'lucide-react';

const AIHRAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recruitment',
      description: 'Intelligent candidate screening, resume analysis, and interview scheduling with AI optimization',
      benefits: ['Resume parsing', 'Skill matching', 'Interview scheduling', 'Bias reduction']
    },
    {
      icon: Users,
      title: 'Employee Onboarding',
      description: 'Automated onboarding workflows with personalized experiences and progress tracking',
      benefits: ['Digital paperwork', 'Training modules', 'Progress tracking', 'Mentor matching']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive performance tracking with AI insights and predictive analytics',
      benefits: ['Goal tracking', 'Performance reviews', 'Skill assessments', 'Career planning']
    },
    {
      icon: MessageSquare,
      title: 'Employee Engagement',
      description: 'AI-powered employee feedback, surveys, and engagement monitoring',
      benefits: ['Pulse surveys', 'Sentiment analysis', 'Feedback collection', 'Engagement metrics']
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Automated compliance tracking and reporting for HR regulations and policies',
      benefits: ['Policy management', 'Compliance monitoring', 'Audit trails', 'Legal updates']
    },
    {
      icon: Target,
      title: 'Learning & Development',
      description: 'Personalized learning paths and skill development recommendations',
      benefits: ['Skill assessments', 'Learning paths', 'Progress tracking', 'Certification management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$199',
      period: '/month',
      description: 'Perfect for companies with 1-50 employees',
      features: [
        'Up to 50 employees',
        'Basic AI features',
        'Recruitment tools',
        'Performance tracking',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies with 51-500 employees',
      features: [
        'Up to 500 employees',
        'Advanced AI features',
        'Full HR suite',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom workflows',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with 500+ employees',
      features: [
        'Unlimited employees',
        'Full AI suite',
        'White-label options',
        'Dedicated support',
        'Custom AI models',
        'Advanced security',
        'On-premise option',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const modules = [
    {
      title: 'Recruitment & Hiring',
      icon: UserPlus,
      description: 'Streamline your hiring process with AI-powered candidate screening and interview management',
      features: ['Job posting automation', 'Resume screening', 'Interview scheduling', 'Background checks']
    },
    {
      title: 'Employee Management',
      icon: Users,
      description: 'Comprehensive employee lifecycle management from onboarding to offboarding',
      features: ['Employee profiles', 'Document management', 'Leave tracking', 'Performance reviews']
    },
    {
      title: 'Payroll & Benefits',
      icon: DollarSign,
      description: 'Automated payroll processing and benefits administration',
      features: ['Payroll automation', 'Benefits enrollment', 'Tax compliance', 'Expense management']
    },
    {
      title: 'Learning & Development',
      icon: GraduationCap,
      description: 'Personalized learning paths and skill development programs',
      features: ['Training modules', 'Skill assessments', 'Certification tracking', 'Career planning']
    },
    {
      title: 'Analytics & Reporting',
      icon: BarChart,
      description: 'Advanced HR analytics with AI insights and predictive reporting',
      features: ['Workforce analytics', 'Turnover prediction', 'Performance insights', 'Custom reports']
    },
    {
      title: 'Compliance & Security',
      icon: Shield,
      description: 'Ensure compliance with labor laws and maintain data security',
      features: ['Policy management', 'Audit trails', 'Data encryption', 'Compliance monitoring']
    }
  ];

  const useCases = [
    {
      title: 'Tech Startups',
      description: 'Scale your team rapidly with AI-powered recruitment and automated onboarding',
      icon: Code,
      benefits: ['Rapid scaling', 'Talent acquisition', 'Culture fit assessment', 'Remote onboarding']
    },
    {
      title: 'Manufacturing',
      description: 'Manage shift workers and ensure safety compliance with automated HR processes',
      icon: Factory,
      benefits: ['Shift management', 'Safety compliance', 'Training tracking', 'Incident reporting']
    },
    {
      title: 'Healthcare',
      description: 'Manage healthcare professionals with specialized compliance and credentialing',
      icon: Stethoscope,
      benefits: ['Credentialing', 'Compliance tracking', 'Continuing education', 'Patient safety']
    },
    {
      title: 'Retail',
      description: 'Handle seasonal hiring and employee scheduling with AI optimization',
      icon: ShoppingCart,
      benefits: ['Seasonal hiring', 'Schedule optimization', 'Performance tracking', 'Customer service']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'HR Director',
      company: 'TechCorp Solutions',
      content: 'AI HR Assistant has transformed our recruitment process. We\'ve reduced time-to-hire by 50% and improved candidate quality significantly.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'CEO',
      company: 'GrowthTech Inc.',
      content: 'The employee engagement features are incredible. We can now predict and prevent turnover before it happens. Employee satisfaction increased by 40%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'VP of People',
      company: 'InnovateLabs',
      content: 'Managing 500+ employees used to be overwhelming. Now AI handles routine tasks, and our HR team can focus on strategic initiatives.',
      rating: 5
    }
  ];

  const benefits = [
    { icon: Clock, title: '50% Faster Hiring', description: 'Reduce time-to-hire with AI-powered candidate screening' },
    { icon: TrendingUp, title: '40% Higher Retention', description: 'Predict and prevent turnover with engagement analytics' },
    { icon: Shield, title: '100% Compliance', description: 'Automated compliance monitoring and reporting' },
    { icon: Users, title: '95% Employee Satisfaction', description: 'Improved employee experience with AI assistance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI HR Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered HR management with recruitment, employee engagement, performance analytics, and compliance. Starting at $199/month." />
        <meta name="keywords" content="ai hr assistant, hr software, human resources, recruitment, employee management, hr analytics, hr automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>AI-Powered Human Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI HR Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your HR operations with AI-powered recruitment, employee engagement, and performance management. 
            Reduce hiring time by 50% and improve employee satisfaction by 40%.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyan-400 mb-2">{benefit.title}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI HR Assistant Demo Request"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all inline-flex items-center"
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
            Comprehensive HR Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
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

      {/* Modules Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Complete HR Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=AI HR Assistant - ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <div className="w-16 h-16 bg-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-cyan-400" />
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What HR Professionals Say
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
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already using AI HR Assistant to streamline their human resources.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 cyber-card">
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
                href="mailto:kleber@ziontechgroup.com?subject=AI HR Assistant Inquiry"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
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

export default AIHRAssistantPage;