import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Smartphone, 
  Mail,
  FileText,
  BarChart3,
  Database,
  Target,
  Activity,
  LineChart,
  DollarSign,
  UserCheck,
  Calendar,
  Settings,
  Cpu,
  Sparkles,
  Lock,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Heart,
  ThumbsUp,
  AwardIcon,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Hourglass
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "Zion AI Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time data visualization",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      href: "/zion-ai-analytics-pro",
      features: ["Real-time Analytics", "AI Predictions", "Custom Dashboards", "Data Export"],
      price: "$99/month",
      popular: true
    },
    {
      title: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      href: "/zion-ai-crm-pro",
      features: ["Lead Management", "AI Insights", "Automation", "Integration"],
      price: "$149/month"
    },
    {
      title: "Zion Security Shield",
      description: "Enterprise-grade security suite for comprehensive protection",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      href: "/zion-security-shield",
      features: ["Threat Detection", "Real-time Monitoring", "Compliance", "24/7 Support"],
      price: "$199/month"
    },
    {
      title: "Zion Project Manager Pro",
      description: "Advanced project management with AI-powered optimization",
      icon: <Target className="w-8 h-8 text-orange-400" />,
      href: "/zion-project-manager-pro",
      features: ["Task Management", "AI Scheduling", "Team Collaboration", "Reporting"],
      price: "$79/month"
    },
    {
      title: "Zion Financial Analytics",
      description: "Comprehensive financial analysis and forecasting platform",
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      href: "/ai-financial-analytics-pro",
      features: ["Financial Reports", "AI Forecasting", "Budget Planning", "Risk Analysis"],
      price: "$129/month"
    },
    {
      title: "Zion Inventory Optimizer",
      description: "Smart inventory management with predictive analytics",
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      href: "/zion-smart-inventory-optimizer",
      features: ["Inventory Tracking", "AI Predictions", "Automated Reordering", "Analytics"],
      price: "$89/month"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes with our intuitive setup process"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence for smarter business decisions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scalability",
      description: "Scale your business globally with our cloud infrastructure"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "Standard security",
        "1GB storage"
      ],
      cta: "Start Free Trial",
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
        "Enhanced security",
        "10GB storage",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Premium analytics",
        "24/7 support",
        "Enterprise security",
        "Unlimited storage",
        "Full API access",
        "Custom development",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <FuturisticBackground>
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Innovative micro SAAS applications designed to streamline your business operations. From AI analytics to project management, we have the tools you need."
        keywords="micro SAAS, business software, AI tools, project management, analytics, CRM, inventory management"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
          <ResponsiveContainer className="relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Micro SAAS
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused software solutions designed to solve specific business challenges. 
                Streamline your operations with our innovative micro SAAS applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful, focused tools without the complexity.
              </p>
            </div>

            <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Micro SAAS <span className="text-purple-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS applications designed to address specific business needs.
              </p>
            </div>

            <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105 inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent <span className="text-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>

            <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <FuturisticCard
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-white/20 transition-all duration-300 relative ${
                    tier.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                    <div className="text-gray-400">{tier.period}</div>
                    <p className="text-gray-300 text-sm mt-4">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of our micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </FuturisticBackground>
  );
};

export default MicroSaasPage;