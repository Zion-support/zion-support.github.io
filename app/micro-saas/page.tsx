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
  Monitor,
  Laptop,
  Tablet,
  Phone,
  Watch,
  Tv,
  Radio,
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
  Watch as WatchIcon,
  Hourglass,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: "Zion AI Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time data visualization.",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      features: ["Real-time Analytics", "AI Insights", "Custom Dashboards", "Data Export"],
      href: "/zion-ai-analytics-pro",
      price: "$99/month",
      popular: true
    },
    {
      title: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered automation and insights.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      features: ["AI Lead Scoring", "Automated Follow-ups", "Customer Insights", "Integration Hub"],
      href: "/zion-ai-crm-pro",
      price: "$149/month"
    },
    {
      title: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered editing and automated content generation.",
      icon: <Video className="w-8 h-8 text-green-400" />,
      features: ["AI Video Creation", "Auto Editing", "Template Library", "HD Export"],
      href: "/zion-ai-video-generator",
      price: "$199/month"
    },
    {
      title: "Zion AI Invoice Generator",
      description: "Automated invoice generation with AI-powered pricing and payment tracking.",
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      features: ["Auto Generation", "Payment Tracking", "Tax Calculations", "Multi-currency"],
      href: "/zion-ai-invoice-generator",
      price: "$79/month"
    },
    {
      title: "Zion AI Customer Insights",
      description: "Deep customer analytics with AI-powered sentiment analysis and behavior tracking.",
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      features: ["Sentiment Analysis", "Behavior Tracking", "Predictive Analytics", "Custom Reports"],
      href: "/zion-ai-customer-insights",
      price: "$129/month"
    },
    {
      title: "Zion AI Email Analyzer",
      description: "AI-powered email analysis for better communication and response optimization.",
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      features: ["Email Analysis", "Response Optimization", "Tone Detection", "Auto Categorization"],
      href: "/zion-ai-email-analyzer",
      price: "$89/month"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes with our intuitive setup process."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Global Accessibility",
      description: "Access your tools from anywhere with our cloud-based platform."
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: "Precision Analytics",
      description: "AI-powered insights that help you make data-driven decisions."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion Micro SAAS Suite",
    "description": "Comprehensive suite of AI-powered micro SAAS applications for modern businesses",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "99",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    }
  };

  return (
    <FuturisticBackground>
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS applications designed to streamline your business operations and boost productivity."
        keywords="micro saas, business applications, AI tools, productivity software, business automation"
        canonicalUrl="https://ziontechgroup.com/micro-saas"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen py-20">
        <ResponsiveContainer>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <FuturisticText
              as="h1"
              className="text-4xl md:text-6xl font-bold mb-6"
              variant="gradient"
            >
              Micro SAAS Solutions
            </FuturisticText>
            <FuturisticText
              as="p"
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Powerful, AI-driven micro applications designed to streamline your business operations 
              and boost productivity. Choose from our comprehensive suite of specialized tools.
            </FuturisticText>
          </div>

          {/* Features */}
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>

          {/* Products Grid */}
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <FuturisticCard key={index} className="p-8 relative group hover:scale-105 transition-transform duration-300">
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">
                    {product.price}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  as={Link}
                  to={product.href}
                  variant="primary"
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <FuturisticCard className="p-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
              <FuturisticText
                as="h2"
                className="text-3xl font-bold mb-4"
              >
                Ready to Transform Your Business?
              </FuturisticText>
              <FuturisticText
                as="p"
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </FuturisticText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="lg"
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="secondary"
                  size="lg"
                >
                  View Demo
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>
        </ResponsiveContainer>
      </div>
    </FuturisticBackground>
  );
};

export default MicroSaasPage;