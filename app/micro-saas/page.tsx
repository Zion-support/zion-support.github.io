import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cloud, BarChart3, Users, Award, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor, Package, Brain, Code, Database, Mail, Clock, DollarSign, Lock, TrendingUp, Target, Settings, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Receipt, ClipboardList, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

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
      description: "Secure cloud storage and file management solution",
      features: [
        "End-to-end encryption",
        "Automatic backup",
        "File versioning",
        "Collaborative editing",
        "Advanced access controls"
      ],
      icon: <Cloud className="w-8 h-8" />,
      href: "/zion-cloud-vault",
      price: "$79/month",
      featured: false
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      features: [
        "AI content generation",
        "Multi-format support",
        "Brand consistency tools",
        "Content scheduling",
        "Performance analytics"
      ],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-content-studio",
      price: "$129/month",
      featured: false
    },
    {
      id: "zion-ai-neural-interface",
      name: "Zion AI Neural Interface",
      description: "Advanced AI interface for seamless human-computer interaction",
      features: [
        "Natural language processing",
        "Voice recognition",
        "Gesture control",
        "Predictive text",
        "Contextual assistance"
      ],
      icon: <Brain className="w-8 h-8" />,
      href: "/zion-ai-neural-interface",
      price: "$199/month",
      featured: true
    },
    {
      id: "zion-ai-video-generator",
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered automation",
      features: [
        "AI video generation",
        "Template library",
        "Voice synthesis",
        "Auto-editing",
        "Multi-platform export"
      ],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      price: "$179/month",
      featured: false
    },
    {
      id: "zion-ai-invoice-generator",
      name: "Zion AI Invoice Generator",
      description: "Automated invoice creation and management system",
      features: [
        "Smart invoice generation",
        "Payment tracking",
        "Automated reminders",
        "Multi-currency support",
        "Tax calculations"
      ],
      icon: <Receipt className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      price: "$59/month",
      featured: false
    },
    {
      id: "zion-ai-customer-insights",
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics and behavior prediction platform",
      features: [
        "Customer segmentation",
        "Behavior prediction",
        "Churn analysis",
        "Personalization engine",
        "ROI optimization"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-customer-insights",
      price: "$159/month",
      featured: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with instant loading times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Native",
      description: "Built for the cloud with automatic scaling and global availability"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting for data-driven decisions"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Powered",
      description: "Leverage artificial intelligence for automation and optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "5GB storage",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Enhanced security",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 support",
        "Unlimited storage",
        "Enterprise security",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our innovative micro SAAS products designed to streamline your business operations with AI-powered solutions and cutting-edge technology."
        keywords="micro SAAS, software as a service, business automation, AI solutions, cloud software, productivity tools"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our innovative micro SAAS products designed to streamline your business operations 
              with AI-powered solutions and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                to="/contact"
                variant="primary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                to="/demo"
                variant="secondary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>View Demo</span>
                <Play className="w-5 h-5" />
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions designed to address 
              specific business needs with precision and efficiency.
            </p>
          </div>
          
          <ResponsiveGrid>
            {microSaasProducts.map((product) => (
              <FuturisticCard
                key={product.id}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    {product.icon}
                  </div>
                  {product.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <FuturisticButton
                    to={product.href}
                    variant="primary"
                    size="sm"
                    className="flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our micro SAAS solutions are built with modern technology and designed for 
              maximum efficiency and user experience.
            </p>
          </div>
          
          <ResponsiveGrid>
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg w-fit mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features 
              with no hidden fees or surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  to="/contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions 
              to streamline their operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                to="/contact"
                variant="primary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                to="/demo"
                variant="secondary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;