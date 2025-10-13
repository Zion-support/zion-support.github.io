import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Video, 
  Play, 
  Pause, 
  Scissors, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Upload, 
  Download, 
  Share, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Clock, 
  Users, 
  Award,
  BarChart3,
  Shield,
  Cloud,
  Brain,
  Code,
  Database,
  Mail,
  Smartphone,
  Monitor,
  Globe,
  Target,
  TrendingUp,
  DollarSign,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Eye,
  Heart,
  ThumbsUp,
  Rocket,
  Cpu,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Image,
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
  LineChart,
  Activity,
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
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  Stop,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
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
  Stopwatch,
  Hourglass
} from "lucide-react";
import SEOOptimizer from "@/components/SEOOptimizer";
import FuturisticCard from "@/components/FuturisticCard";
import FuturisticButton from "@/components/FuturisticButton";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function ZionAiVideoEditorPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Editing",
      description: "Automatically detect scenes, suggest cuts, and enhance video quality using advanced AI algorithms"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Smart Cut Detection",
      description: "Intelligent scene detection and automatic cut suggestions for seamless video editing"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Audio Enhancement",
      description: "AI-powered noise reduction, audio leveling, and background music generation"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Visual Effects",
      description: "Professional-grade filters, transitions, and effects powered by machine learning"
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Cloud Processing",
      description: "High-performance cloud rendering for 4K and 8K video processing"
    },
    {
      icon: <Share className="w-6 h-6" />,
      title: "Multi-Platform Export",
      description: "Export to YouTube, TikTok, Instagram, and other platforms with optimized settings"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      originalPrice: "$39",
      discount: "51% OFF",
      features: [
        "Up to 10 videos/month",
        "1080p HD export",
        "Basic AI features",
        "5GB cloud storage",
        "Standard support",
        "Watermark on exports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      originalPrice: "$99",
      discount: "51% OFF",
      features: [
        "Unlimited videos",
        "4K UHD export",
        "Advanced AI features",
        "50GB cloud storage",
        "Priority support",
        "No watermark",
        "Team collaboration",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      originalPrice: "$199",
      discount: "50% OFF",
      features: [
        "Everything in Professional",
        "8K export",
        "Premium AI features",
        "500GB cloud storage",
        "24/7 dedicated support",
        "API access",
        "White-label solution",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 80% Time",
      description: "AI automation reduces editing time from hours to minutes"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Engagement",
      description: "AI-optimized content gets 3x more views and engagement"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Costs",
      description: "Eliminate need for expensive video editing software and professionals"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Quality",
      description: "Studio-quality results without technical expertise"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "TechVlog Pro",
      content: "Zion AI Video Editor Pro transformed my content creation process. What used to take me 6 hours now takes 30 minutes!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      company: "StartupXYZ",
      content: "The AI-powered features are incredible. Our video engagement increased by 300% after switching to this platform.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "Digital Agency Co",
      content: "Best investment we've made for our video content. The quality is professional and the AI suggestions are spot-on.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Editor Pro - Professional AI-Powered Video Editing | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your video content with Zion AI Video Editor Pro. AI-powered editing, smart cut detection, audio enhancement, and cloud processing. Start free trial today!"
        />
        <meta
          name="keywords"
          content="AI video editor, video editing software, AI video processing, automated video editing, video enhancement, content creation tools"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-editor-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Video Editing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion AI Video Editor
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your video content with AI-powered editing, smart cut detection, 
                and professional-grade effects. Create stunning videos in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="#demo"
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4.9★</div>
                <div className="text-gray-300">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to create professional videos with minimal effort
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20"
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  className={`p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 scale-105'
                      : 'bg-gradient-to-br from-slate-800/50 to-purple-900/30 border-purple-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    href="/contact"
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500/20'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zion AI Video Editor Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of content creators, marketers, and businesses who trust our platform
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20"
                >
                  <div className="text-purple-400 mb-4 mx-auto w-fit">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <FuturisticCard className="p-12 text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Video Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already using AI to create amazing videos. 
                Start your free trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Call: +1 302 464 0950
                  <Phone className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}