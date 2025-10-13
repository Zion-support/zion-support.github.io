import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  PenTool, 
  Image, 
  Video, 
  FileText, 
  Share, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Play, 
  Settings, 
  Eye, 
  Target, 
  Activity, 
  Layers, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Cloud, 
  Shield, 
  Award, 
  Rocket, 
  Cpu, 
  Wifi, 
  Battery, 
  Camera, 
  Headphones, 
  Mic, 
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
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Bell, 
  Heart, 
  ThumbsUp, 
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
  Hourglass, 
  Calendar as CalendarIcon, 
  CalendarDays, 
  CalendarCheck, 
  CalendarX, 
  CalendarPlus, 
  CalendarMinus, 
  CalendarRange, 
  CalendarSearch, 
  CalendarHeart, 
  CalendarStar, 
  CalendarClock, 
  CalendarUser, 
  CalendarEdit, 
  CalendarTrash, 
  CalendarSettings, 
  CalendarImport, 
  CalendarExport, 
  CalendarShare, 
  CalendarLock, 
  CalendarUnlock, 
  CalendarKey, 
  CalendarShield, 
  CalendarAlert, 
  CalendarBell, 
  CalendarZap, 
  CalendarSparkles, 
  CalendarGift, 
  CalendarAward, 
  CalendarTrophy, 
  CalendarMedal, 
  CalendarCrown, 
  CalendarGem, 
  CalendarDiamond, 
  CalendarPearl, 
  CalendarRuby, 
  CalendarSapphire, 
  CalendarEmerald, 
  CalendarTopaz, 
  CalendarAmethyst, 
  CalendarQuartz, 
  CalendarCrystal, 
  CalendarJewel, 
  CalendarTreasure, 
  CalendarGold, 
  CalendarSilver, 
  CalendarBronze, 
  CalendarPlatinum, 
  CalendarTitanium, 
  CalendarSteel, 
  CalendarIron, 
  CalendarCopper, 
  CalendarAluminum, 
  CalendarZinc, 
  CalendarTin, 
  CalendarLead, 
  CalendarMercury, 
  CalendarUranium, 
  CalendarPlutonium, 
  CalendarRadium, 
  CalendarThorium, 
  CalendarActinium, 
  CalendarProtactinium, 
  CalendarNeptunium, 
  CalendarAmericium, 
  CalendarCurium, 
  CalendarBerkelium, 
  CalendarCalifornium, 
  CalendarEinsteinium, 
  CalendarFermium, 
  CalendarMendelevium, 
  CalendarNobelium, 
  CalendarLawrencium, 
  CalendarRutherfordium, 
  CalendarDubnium, 
  CalendarSeaborgium, 
  CalendarBohrium, 
  CalendarHassium, 
  CalendarMeitnerium, 
  CalendarDarmstadtium, 
  CalendarRoentgenium, 
  CalendarCopernicium, 
  CalendarNihonium, 
  CalendarFlerovium, 
  CalendarMoscovium, 
  CalendarLivermorium, 
  CalendarTennessine, 
  CalendarOganesson 
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionContentStudio() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Blog posts", "Social media content", "Marketing copy", "Product descriptions"]
    },
    {
      title: "Multi-language Support",
      description: "Create content in 50+ languages with accurate translations and cultural adaptation",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["50+ languages", "Cultural adaptation", "Accurate translations", "Localized content"]
    },
    {
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with keyword research and optimization",
      icon: <Search className="w-6 h-6" />,
      benefits: ["Keyword research", "SEO optimization", "Meta tags", "Content structure"]
    },
    {
      title: "Brand Voice Customization",
      description: "Maintain consistent brand voice across all content with customizable tone and style",
      icon: <PenTool className="w-6 h-6" />,
      benefits: ["Brand consistency", "Tone customization", "Style guidelines", "Voice training"]
    },
    {
      title: "Content Calendar Management",
      description: "Plan and schedule content across multiple platforms with an integrated calendar",
      icon: <Calendar className="w-6 h-6" />,
      benefits: ["Content planning", "Scheduling", "Multi-platform", "Team collaboration"]
    },
    {
      title: "Performance Analytics",
      description: "Track content performance with detailed analytics and optimization recommendations",
      icon: <Activity className="w-6 h-6" />,
      benefits: ["Performance tracking", "Engagement metrics", "ROI analysis", "Optimization tips"]
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$19",
      period: "/month",
      description: "Perfect for individual creators",
      features: [
        "10,000 words/month",
        "Basic AI templates",
        "5 social media accounts",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for content teams",
      features: [
        "50,000 words/month",
        "Advanced AI features",
        "Unlimited social accounts",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
        "Brand voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited words",
        "Custom AI models",
        "White-label options",
        "Custom integrations",
        "Dedicated support",
        "API access",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Digital Marketing Agency",
      role: "Content Manager",
      content: "Zion Content Studio has increased our content output by 300% while maintaining quality. The AI is incredibly smart!",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Alex Thompson",
      company: "E-commerce Store",
      role: "Marketing Director",
      content: "The SEO optimization features have improved our search rankings significantly. Our organic traffic is up 150%!",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Lisa Chen",
      company: "SaaS Startup",
      role: "Content Creator",
      content: "The brand voice customization is amazing. It perfectly captures our company's tone across all content.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "300%", label: "Content Output Increase", icon: <FileText className="w-6 h-6" /> },
    { number: "150%", label: "SEO Traffic Improvement", icon: <Search className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "15+", label: "Hours Saved Weekly", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Content Studio - AI-Powered Content Creation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create amazing content with Zion Content Studio - AI-powered content creation platform for blogs, social media, and marketing materials. Multi-language support, SEO optimization, and brand voice customization. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="content creation, AI writing, content marketing, blog writing, social media content, SEO content, content automation, brand voice, content calendar"
        />
      </Helmet>
      <SEOOptimizer
        title="Zion Content Studio - AI-Powered Content Creation Platform | Zion Tech Group"
        description="Create amazing content with Zion Content Studio - AI-powered content creation platform for blogs, social media, and marketing materials. Multi-language support, SEO optimization, and brand voice customization. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <Brain className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">#1 AI Content Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                  Zion Content Studio
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                AI-powered content creation platform for blogs, social media, and marketing materials. 
                Create engaging content that converts with advanced AI and smart optimization tools.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Free 14-day trial</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">No setup fees</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4">
                    <div className="text-purple-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Powerful Content Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to create amazing content that engages and converts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Content Creation Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that matches your content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? "border-purple-500/50 shadow-2xl shadow-purple-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400 transform hover:scale-105"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  What Content Creators Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of content creators who trust Zion Content Studio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Creating Amazing Content Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators who are already using Zion Content Studio to create engaging content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Brain className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}