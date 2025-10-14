import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Multi-source data integration"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/zion-analytics-pro",
      price: "$99/month",
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution for small to medium businesses",
      features: [
        "24/7 threat monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Security compliance reporting",
        "Employee training modules"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/zion-security-shield",
      price: "$149/month",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File versioning",
        "Team collaboration",
        "Cross-platform sync"
      ],
      icon: <Cloud className="w-8 h-8" />,
      href: "/zion-cloud-vault",
      price: "$79/month",
      featured: true
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered automation",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer segmentation",
        "Integration capabilities"
      ],
      benefits: [
        "Increase sales by 35%",
        "Improve lead quality by 50%",
        "Reduce follow-up time by 70%",
        "Boost customer retention"
      ],
      category: "CRM",
      rating: 4.9,
      reviews: 1892,
      link: "/zion-crm-intelligence",
      featured: false
    },
    {
      id: "zion-ai-customer-service-pro",
      name: "Zion AI Customer Service Pro",
      description: "Intelligent customer service automation with multilingual support and sentiment analysis",
      price: "From $45/month",
      originalPrice: "$70/month",
      discount: "36% OFF",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI-powered chatbots",
        "Multilingual support (50+ languages)",
        "Sentiment analysis",
        "Ticket routing automation",
        "Knowledge base integration",
        "Live chat handoff",
        "Performance analytics",
        "Custom AI training"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 90% of queries automatically",
        "Improve customer satisfaction",
        "Scale support operations"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 1654,
      link: "/zion-ai-customer-service-pro",
      featured: false
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "Visual workflow builder with AI optimization and integration capabilities for business processes",
      price: "From $22/month",
      originalPrice: "$35/month",
      discount: "37% OFF",
      icon: <Settings className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Visual workflow builder",
        "AI process optimization",
        "500+ app integrations",
        "Conditional logic & triggers",
        "Error handling & retries",
        "Workflow analytics",
        "Team collaboration",
        "Custom API endpoints"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce errors by 95%",
        "Save 20+ hours weekly",
        "Improve process efficiency"
      ],
      category: "Automation",
      rating: 4.6,
      reviews: 1347,
      link: "/zion-workflow-automation",
      featured: false
    },
    {
      id: "zion-ai-accounting-assistant",
      name: "Zion AI Accounting Assistant",
      description: "Intelligent accounting automation with expense tracking, invoice processing, and financial insights",
      price: "From $30/month",
      originalPrice: "$50/month",
      discount: "40% OFF",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated expense tracking",
        "Invoice processing & OCR",
        "Financial reporting",
        "Tax preparation assistance",
        "Receipt scanning & categorization",
        "Bank reconciliation",
        "Budget planning & forecasting",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce accounting time by 70%",
        "Eliminate manual data entry",
        "Improve financial accuracy",
        "Ensure tax compliance"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 987,
      link: "/zion-ai-accounting-assistant",
      featured: false
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "AI-powered social media management with content optimization and performance analytics",
      price: "From $18/month",
      originalPrice: "$30/month",
      discount: "40% OFF",
      icon: <Share className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Multi-platform posting",
        "AI content optimization",
        "Optimal timing suggestions",
        "Hashtag research & generation",
        "Content calendar management",
        "Performance analytics",
        "Competitor analysis",
        "Team collaboration tools"
      ],
      benefits: [
        "Increase engagement by 40%",
        "Save 10+ hours weekly",
        "Improve content performance",
        "Grow social media presence"
      ],
      category: "Social Media",
      rating: 4.5,
      reviews: 1234,
      link: "/zion-social-scheduler",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, active: true },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, active: false },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length, active: false },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length, active: false },
    { name: "Data", count: microSaasServices.filter(s => s.category === "Data").length, active: false },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, active: false },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length, active: false },
    { name: "CRM", count: microSaasServices.filter(s => s.category === "CRM").length, active: false },
    { name: "Support", count: microSaasServices.filter(s => s.category === "Support").length, active: false },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length, active: false },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length, active: false },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length, active: false },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length, active: false },
    { name: "HR", count: microSaasServices.filter(s => s.category === "HR").length, active: false },
    { name: "E-commerce", count: microSaasServices.filter(s => s.category === "E-commerce").length, active: false },
    { name: "Sales", count: microSaasServices.filter(s => s.category === "Sales").length, active: false },
    { name: "Research", count: microSaasServices.filter(s => s.category === "Research").length, active: false },
    { name: "SEO", count: microSaasServices.filter(s => s.category === "SEO").length, active: false },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length, active: false }
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Data Security", value: "100%", icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization'],
      price: '$29/month',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your applications.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response'],
      price: '$49/month',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption and backup features.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing'],
      price: '$19/month',
      featured: false
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration'],
      price: '$39/month',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions for small and medium businesses." />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics',
      price: 'From $299/month',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'API Integration'],
      href: '/zion-analytics-pro',
      featured: true
    },
    {
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response',
      price: 'From $499/month',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', '24/7 Support'],
      href: '/zion-security-shield',
      featured: true
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability',
      price: 'From $99/month',
      icon: <Cloud className="w-8 h-8" />,
      features: ['End-to-end Encryption', 'Unlimited Storage', 'File Sharing', 'Backup & Recovery'],
      href: '/zion-cloud-vault',
      featured: true
    },
    {
      name: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered content generation and editing tools',
      price: 'From $199/month',
      icon: <Zap className="w-8 h-8" />,
      features: ['AI Video Creation', 'Auto-editing', 'Multiple Formats', 'Brand Templates'],
      href: '/zion-ai-video-generator',
      featured: false
    },
    {
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with smart templates and payment tracking',
      price: 'From $49/month',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Auto-generation', 'Payment Tracking', 'Tax Calculations', 'Multi-currency'],
      href: '/zion-ai-invoice-generator',
      featured: false
    },
    {
      name: 'Zion AI Customer Insights',
      description: 'Deep customer analytics and behavior prediction for better business decisions',
      price: 'From $149/month',
      icon: <Users className="w-8 h-8" />,
      features: ['Customer Analytics', 'Behavior Prediction', 'Segmentation', 'ROI Tracking'],
      href: '/zion-ai-customer-insights',
      featured: false
    }
  ];

  const stats = [
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation."
        keywords="micro SAAS, business software, AI tools, automation, business solutions, software as a service"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our suite of ready-to-use micro SAAS solutions. 
            From analytics to automation, we have everything you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions designed to streamline your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  product.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{product.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={product.href}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Learn More
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business challenges 
              and boost productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center p-6">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully crafted suite of business tools designed for modern enterprises
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <FuturisticCard key={product.id} className="p-6 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">
                    {product.icon}
                  </div>
                  {product.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    {product.price}
                  </span>
                </div>
                
                <Link
                  to={product.href}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our micro SAAS solutions.
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey with our micro SAAS solutions today. Choose the perfect tools for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Schedule a Demo
              </FuturisticButton>
            </div>
          </div>
        </section>
      </div>
    </>
      </section>
    </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
