import React, { memo, useState, useEffect } from 'react';
import { 
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Brain,
  Code,
  Cloud,
  Wifi,
  Star,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Clock,
  Zap,
  Target,
  BarChart3,
  Settings,
  Database,
  Server,
  Lock,
  Globe,
  FileText,
  Calendar,
  CreditCard,
  Headphones,
  MessageCircle,
  DollarSign,
  Percent,
  PieChart,
  LineChart,
  Activity,
  HardDrive,
  Cpu,
  MemoryStick,
  Monitor,
  Camera,
  Mic,
  Speaker,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  Maximize,
  Minimize,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Sparkles,
  Flame,
  Droplet,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Frog,
  Turtle,
  Snake,
  Spider,
  Bee,
  Butterfly,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Goose,
  Pigeon,
  Crow,
  Raven,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Hummingbird,
  Woodpecker,
  Toucan,
  Flamingo,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  PolarBear,
  Panda,
  Koala,
  Kangaroo,
  Wombat,
  Platypus,
  Echidna,
  Sloth,
  Armadillo,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  SeaLion,
  Elephant,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Jaguar,
  Panther,
  Lynx,
  Bobcat,
  Cougar,
  Wolf,
  Fox,
  Coyote,
  Jackal,
  Hyena,
  Bear,
  Raccoon,
  Skunk,
  Badger,
  Wolverine,
  Weasel,
  Ferret,
  Mink
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting for data-driven decisions.",
      price: "$99/month",
      originalPrice: "$149/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      link: "/ai-analytics-dashboard-pro",
      category: "AI & Analytics",
      popular: true
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, debugging, and optimization with support for 50+ programming languages and advanced AI models.",
      price: "$99/month",
      originalPrice: "$149/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Multi-language Support", "Documentation", "Testing"],
      link: "/ai-code-assistant-pro",
      category: "Development",
      popular: true
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Infrastructure",
      description: "Scalable cloud solutions with AI-powered auto-scaling, monitoring, and cost optimization for modern businesses.",
      price: "$199/month",
      originalPrice: "$299/month",
      features: ["Auto-scaling", "AI Monitoring", "Cost Optimization", "99.9% Uptime", "Multi-cloud", "Security"],
      link: "/ai-cloud-infrastructure",
      category: "Infrastructure",
      popular: false
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network deployment with ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      price: "$499/month",
      originalPrice: "$799/month",
      features: ["5G Network Setup", "IoT Integration", "Edge Computing", "Performance Monitoring", "Private Networks", "Smart Cities"],
      link: "/5g-implementation",
      category: "5G Solutions",
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Monitor Pro",
      description: "Comprehensive cybersecurity with AI threat detection, automated response, and compliance management for enterprise security.",
      price: "$299/month",
      originalPrice: "$399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Management", "24/7 Monitoring", "Incident Response", "Security Training"],
      link: "/ai-security-monitor-pro",
      category: "Security",
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Customer Support Pro",
      description: "Enterprise-grade conversational AI with multi-language support, advanced NLP, and seamless human handoff capabilities.",
      price: "$79/month",
      originalPrice: "$129/month",
      features: ["Multi-language Support", "Advanced NLP", "Integration APIs", "Analytics Dashboard", "Human Handoff", "Custom Training"],
      link: "/ai-customer-support-pro",
      category: "Customer Service",
      popular: false
    }
  ];

  const microSaasServices = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Lead Generation Pro",
      price: "$149/month",
      link: "/ai-lead-generation-pro"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI CRM Enterprise",
      price: "$199/month",
      link: "/ai-crm-enterprise"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "AI Scheduling Assistant Pro",
      price: "$49/month",
      link: "/ai-scheduling-assistant-pro"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI Document Processor Pro",
      price: "$89/month",
      link: "/ai-document-processor-pro"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "AI Email Marketing Pro",
      price: "$69/month",
      link: "/ai-email-marketing-pro"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "AI Social Media Manager Pro",
      price: "$79/month",
      link: "/ai-social-media-manager-pro"
    }
  ]

  const stats = [
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" />, description: "Growing community worldwide" },
    { number: "1,000+", label: "Projects Completed", icon: <Award className="w-6 h-6" />, description: "Successful implementations" },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" />, description: "Reliable service delivery" },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" />, description: "Always here to help" }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Deployment",
      description: "Get your solutions up and running in 24-48 hours with our streamlined implementation process."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security measures and compliance standards to protect your data and systems."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Our solutions have helped businesses increase efficiency by 40% and reduce costs by 30%."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Dedicated team of AI and IT experts providing ongoing support and optimization."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Provider</title>
        <meta name="description" content="Leading provider of AI, IT, and 5G solutions. Transform your business with cutting-edge technology, micro SAAS services, and innovative digital solutions. Call +1 302 464 0950." />
        <meta name="keywords" content="AI solutions, IT services, 5G technology, micro SAAS, cloud computing, cybersecurity, business automation, artificial intelligence, machine learning, data analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, IT, and 5G solutions. Trusted by 50,000+ users worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI, IT, and 5G solutions. Transform your business with cutting-edge technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by 50,000+ Users Worldwide
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advanced AI & IT
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with cutting-edge artificial intelligence, 
                  5G technology, and comprehensive IT services. From micro SAAS solutions 
                  to enterprise-grade platforms, we deliver results that matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm font-semibold">{stat.label}</div>
                      <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Services Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Services
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Our Premium
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive AI, IT, and 5G solutions designed to accelerate your business growth. 
                  From micro SAAS platforms to enterprise-grade systems, we deliver innovation that works.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      service.popular 
                        ? 'border-purple-400/40 hover:border-purple-400/60 shadow-2xl shadow-purple-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-3">
                        {service.category}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          {service.originalPrice && (
                            <span className="text-gray-400 text-sm line-through">{service.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Section */}
          <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                  <Cloud className="w-4 h-4 mr-2" />
                  Micro SAAS Solutions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ready-to-Use
                  </span>
                  <br />
                  <span className="text-white">Business Tools</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Discover our collection of micro SAAS solutions designed for businesses of all sizes. 
                  No complex setup, no long-term commitments - just powerful tools that work.
                </p>
                <Link
                  to="/micro-saas"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  View All Micro SAAS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {microSaasServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold">{service.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine technical expertise with business acumen to deliver solutions that drive real results.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Contact us today to discuss how our AI and IT solutions can accelerate your success. 
                  Our experts are ready to help you choose the perfect solution for your needs.
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
                    <p className="text-gray-300 text-lg mb-2">+1 302 464 0950</p>
                    <p className="text-gray-400 text-sm">24/7 Support Available</p>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
                    <p className="text-gray-300 text-lg mb-2">kleber@ziontechgroup.com</p>
                    <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Visit Us</h3>
                    <p className="text-gray-300 text-lg mb-2">364 E Main St STE 1008</p>
                    <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                    <p className="text-gray-300 mb-6">
                      Join thousands of businesses already using our solutions to drive growth and innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+13024640950"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Get Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;