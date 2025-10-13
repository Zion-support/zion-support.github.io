import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
<<<<<<< HEAD
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Sparkles,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export default function MicroSaas() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Video Generator",
      path: "/zion-ai-video-generator",
      description: "Create professional videos with AI-powered automation",
      features: ["Auto-generated content", "Multiple templates", "HD quality output"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Invoice Generator",
      path: "/zion-ai-invoice-generator",
      description: "Generate professional invoices automatically",
      features: ["Smart templates", "Auto-calculation", "PDF export"]
    },
    {
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
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
<<<<<<< HEAD
      popular: true
    },
    {
      id: 2,
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      price: "$79/month",
      features: ["AI lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting"],
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
      icon: <Users className="w-8 h-8" />,
      title: "AI Customer Insights",
      path: "/zion-ai-customer-insights",
      description: "Understand your customers with AI analytics",
      features: ["Behavior analysis", "Predictive insights", "Custom reports"]
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8" />,
      title: "AI Email Analyzer",
      path: "/zion-ai-email-analyzer",
      description: "Optimize your email campaigns with AI",
      features: ["Sentiment analysis", "Performance metrics", "A/B testing"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Inventory Optimizer",
      path: "/zion-smart-inventory-optimizer",
      description: "Optimize inventory with predictive analytics",
      features: ["Demand forecasting", "Stock optimization", "Cost reduction"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Customer Sentiment Tracker",
      path: "/zion-ai-customer-sentiment-tracker",
      description: "Monitor customer satisfaction in real-time",
      features: ["Real-time monitoring", "Sentiment scoring", "Alert system"]
=======
      id: 3,
      name: "Zion AI Video Generator",
      description: "AI-powered video creation and editing platform",
      price: "$149/month",
      features: ["AI video generation", "Auto-editing", "Multiple formats", "Brand customization"],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
=======
      price: "$99/month",
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
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
<<<<<<< HEAD
      popular: false
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
      price: "$89/month"
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
    }
  ];

  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ready to Use",
      description: "No complex setup or configuration required"
=======
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate complex business processes",
      icon: <Brain className="w-6 h-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Deployment",
      description: "Get started in minutes, not months"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability"
    },
    {
<<<<<<< HEAD
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable",
      description: "Grows with your business needs"
=======
      title: "Global Accessibility",
      description: "Access your tools from anywhere in the world, anytime",
      icon: <Globe className="w-6 h-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
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
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta name="description" content="Ready-to-use micro SAAS solutions that transform your business operations immediately. AI-powered tools with no complex setup required." />
        <meta name="keywords" content="micro saas, ready-to-use software, AI tools, business automation, software solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Micro SAAS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementation - just powerful tools that work from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get powerful business tools without the complexity of traditional software implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of ready-to-use AI-powered business tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our micro SAAS solutions today and see immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:scale-105"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, AI-driven micro software solutions designed to streamline your business operations 
            and boost productivity. Choose from our comprehensive suite of specialized tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
          </div>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
=======
          {/* Features */}
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
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
<<<<<<< HEAD
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                
                <Link
=======

                <FuturisticButton
                  as={Link}
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
                  to={product.href}
                  variant="primary"
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
<<<<<<< HEAD
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
