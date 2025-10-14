import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor, Code, Database, Mail, Clock, DollarSign, Lock, TrendingUp, Target, Settings, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Transform your data into actionable insights with advanced AI-powered analytics",
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Custom dashboards",
        "Automated reporting",
        "Machine learning models"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/ai-analytics",
      price: "From $299/month",
      featured: true
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      features: [
        "Workflow automation",
        "Process optimization",
        "Intelligent routing",
        "Exception handling",
        "Performance monitoring"
      ],
      icon: <Zap className="w-8 h-8" />,
      href: "/ai-automation",
      price: "From $199/month",
      featured: true
    },
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence",
      description: "Make data-driven decisions with AI-powered business intelligence tools",
      features: [
        "Advanced reporting",
        "Data visualization",
        "Trend analysis",
        "KPI tracking",
        "Executive dashboards"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/ai-business-intelligence",
      price: "From $399/month",
      featured: false
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered content generation",
      features: [
        "Multi-format content",
        "Brand consistency",
        "SEO optimization",
        "Content scheduling",
        "Performance tracking"
      ],
      icon: <FileText className="w-8 h-8" />,
      href: "/ai-content-generation",
      price: "From $149/month",
      featured: false
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent AI-powered support solutions",
      features: [
        "24/7 chatbot support",
        "Natural language processing",
        "Sentiment analysis",
        "Ticket routing",
        "Customer insights"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/ai-customer-service",
      price: "From $249/month",
      featured: true
    },
    {
      id: "ai-data-analytics",
      name: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI analytics capabilities",
      features: [
        "Big data processing",
        "Pattern recognition",
        "Anomaly detection",
        "Data mining",
        "Statistical modeling"
      ],
      icon: <Database className="w-8 h-8" />,
      href: "/ai-data-analytics",
      price: "From $349/month",
      featured: false
    },
    {
      id: "ai-email-automation",
      name: "AI Email Automation",
      description: "Personalize and optimize your email campaigns with AI automation",
      features: [
        "Smart segmentation",
        "Personalized content",
        "Send time optimization",
        "A/B testing",
        "Performance analytics"
      ],
      icon: <Mail className="w-8 h-8" />,
      href: "/ai-email-automation",
      price: "From $99/month",
      featured: false
    },
    {
      id: "ai-fraud-detection",
      name: "AI Fraud Detection",
      description: "Protect your business with advanced AI-powered fraud detection systems",
      features: [
        "Real-time monitoring",
        "Pattern recognition",
        "Risk scoring",
        "Alert systems",
        "Compliance reporting"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/ai-fraud-detection",
      price: "From $499/month",
      featured: true
    },
    {
      id: "ai-healthcare",
      name: "AI Healthcare",
      description: "Revolutionize healthcare with AI-powered diagnostic and treatment solutions",
      features: [
        "Medical imaging analysis",
        "Diagnostic assistance",
        "Treatment recommendations",
        "Patient monitoring",
        "Drug discovery"
      ],
      icon: <Heart className="w-8 h-8" />,
      href: "/ai-healthcare",
      price: "From $599/month",
      featured: false
    },
    {
      id: "ai-marketing",
      name: "AI Marketing",
      description: "Optimize your marketing efforts with AI-powered marketing automation",
      features: [
        "Campaign optimization",
        "Audience targeting",
        "Content personalization",
        "ROI tracking",
        "Predictive analytics"
      ],
      icon: <Target className="w-8 h-8" />,
      href: "/ai-marketing",
      price: "From $199/month",
      featured: false
    },
    {
      id: "ai-predictive-analytics",
      name: "AI Predictive Analytics",
      description: "Forecast future trends and behaviors with advanced predictive modeling",
      features: [
        "Forecasting models",
        "Risk assessment",
        "Demand planning",
        "Customer lifetime value",
        "Market analysis"
      ],
      icon: <Target className="w-8 h-8" />,
      href: "/ai-predictive-analytics",
      price: "From $399/month",
      featured: false
    },
    {
      id: "ai-project-management",
      name: "AI Project Management",
      description: "Streamline project workflows with AI-powered project management tools",
      features: [
        "Resource optimization",
        "Timeline prediction",
        "Risk assessment",
        "Team collaboration",
        "Progress tracking"
      ],
      icon: <Calendar className="w-8 h-8" />,
      href: "/ai-project-management",
      price: "From $299/month",
      featured: false
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Models",
      description: "Leverage cutting-edge AI models trained on vast datasets for superior performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Process data and make decisions in real-time with lightning-fast AI algorithms"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting for data-driven decision making"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated AI specialists and data scientists to support your implementation"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs"
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "AI-powered diagnostic tools and patient monitoring systems",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Improved accuracy", "Faster diagnosis", "Better patient outcomes"]
    },
    {
      industry: "Finance",
      description: "Fraud detection, risk assessment, and algorithmic trading",
      icon: <DollarSign className="w-8 h-8" />,
      benefits: ["Reduced fraud", "Better risk management", "Increased profitability"]
    },
    {
      industry: "Retail",
      description: "Personalized recommendations and inventory optimization",
      icon: <ShoppingCart className="w-8 h-8" />,
      benefits: ["Higher conversion", "Better inventory management", "Improved customer satisfaction"]
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance and quality control automation",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Reduced downtime", "Higher quality", "Lower costs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including machine learning, automation, analytics, and intelligent solutions tailored to your industry."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, AI consulting, intelligent solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services including machine learning, 
              automation, analytics, and intelligent solutions tailored to your industry.
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

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of AI services designed to address 
              specific business challenges and drive innovation.
            </p>
          </div>
          
          <ResponsiveGrid>
            {aiServices.map((service) => (
              <FuturisticCard
                key={service.id}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    {service.icon}
                  </div>
                  {service.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                  <FuturisticButton
                    to={service.href}
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
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI services are built with cutting-edge technology and designed for 
              maximum performance and business impact.
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how our AI services are transforming businesses across different industries 
              and driving measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg w-fit mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
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
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and transform your business with our cutting-edge 
              artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                to="/contact"
                variant="primary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                to="/demo"
                variant="secondary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <Calendar className="w-5 h-5" />
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;