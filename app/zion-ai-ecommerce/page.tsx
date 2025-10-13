import React from "react";
import { ArrowRight, CheckCircle, Star, ShoppingCart, CreditCard, Users, BarChart3, Zap, Sparkles, Clock, DollarSign, Globe, Smartphone, Monitor, Headphones, Mic, Camera, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Target, Shield, Code, Database, Mail, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Headphones as HeadphonesIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

export default function ZionAIEcommerce() {
  const features = [
    "AI-powered product recommendations",
    "Intelligent inventory management",
    "Dynamic pricing optimization",
    "Automated customer service chatbots",
    "Personalized shopping experiences",
    "Smart fraud detection and prevention",
    "Automated order processing",
    "Real-time analytics and insights",
    "Multi-channel selling integration",
    "AI-powered search and filtering",
    "Automated email marketing campaigns",
    "Mobile-optimized responsive design"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      originalPrice: "$79",
      discount: "50% OFF",
      features: [
        "Up to 100 products",
        "Basic AI features",
        "Standard templates",
        "5GB storage",
        "Email support",
        "Mobile app"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      originalPrice: "$199",
      discount: "50% OFF",
      features: [
        "Unlimited products",
        "Advanced AI features",
        "Premium templates",
        "100GB storage",
        "Priority support",
        "Multi-channel selling",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      originalPrice: "$399",
      discount: "50% OFF",
      features: [
        "Everything in Professional",
        "All AI features",
        "Custom templates",
        "1TB storage",
        "24/7 dedicated support",
        "White-label options",
        "Custom AI training",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Fashion Boutique",
      role: "Store Owner",
      content: "Zion AI E-commerce has increased our sales by 150% in just 6 months. The AI recommendations are incredibly accurate.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "John Chen",
      company: "Electronics Store",
      role: "E-commerce Manager",
      content: "The automated inventory management and pricing optimization have saved us thousands of dollars and hours of work.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Sarah Johnson",
      company: "Home Decor Shop",
      role: "Marketing Director",
      content: "The AI-powered customer service chatbot handles 90% of our inquiries automatically. Customer satisfaction has never been higher.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const useCases = [
    {
      title: "Fashion & Apparel",
      description: "AI-powered size recommendations and style matching",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Electronics",
      description: "Smart product comparisons and technical specifications",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Home & Garden",
      description: "Personalized recommendations based on lifestyle",
      icon: <Home className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Health & Beauty",
      description: "AI-powered skin analysis and product matching",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const aiFeatures = [
    {
      title: "Smart Recommendations",
      description: "AI analyzes customer behavior to suggest perfect products",
      icon: <Target className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Dynamic Pricing",
      description: "Automatically adjust prices based on demand and competition",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Fraud Detection",
      description: "AI-powered security to prevent fraudulent transactions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Inventory Optimization",
      description: "Predict demand and optimize stock levels automatically",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI E-commerce - Intelligent Online Store Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered e-commerce platform with smart recommendations, dynamic pricing, automated customer service, and intelligent inventory management. Start your online store today!"
        />
        <meta
          name="keywords"
          content="AI e-commerce, online store platform, smart recommendations, dynamic pricing, automated customer service, inventory management, e-commerce AI, online retail"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-ecommerce" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI E-commerce - Intelligent Online Store Platform | Zion Tech Group"
        description="Revolutionary AI-powered e-commerce platform with smart recommendations, dynamic pricing, automated customer service, and intelligent inventory management. Start your online store today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Intelligent E-commerce Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}E-commerce
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The future of online retail is here. Create intelligent e-commerce experiences with AI-powered recommendations, 
              dynamic pricing, automated customer service, and smart inventory management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ShoppingCart className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* E-commerce Preview */}
            <div className="relative max-w-6xl mx-auto mb-16">
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-purple-800/50 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <ShoppingCart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI-Powered E-commerce Dashboard</h3>
                    <p className="text-gray-300">See how AI transforms your online store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence to create exceptional shopping experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiFeatures.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer text-center"
                  glowColor="cyan"
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete E-commerce Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, manage, and grow your online store
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer"
                  glowColor="purple"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {feature}
                      </h3>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From fashion to electronics, AI e-commerce works for every business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer text-center"
                  glowColor="green"
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {useCase.description}
                    </p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your business grows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <FuturisticCard
                  key={index}
                  className={`group cursor-pointer relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}
                  glowColor={tier.popular ? "cyan" : "purple"}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm text-gray-500 line-through">{tier.originalPrice}</span>
                        <span className="text-sm text-green-400 font-semibold">{tier.discount}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <FuturisticButton
                      href="/contact"
                      variant={tier.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      {tier.popular ? "Start Free Trial" : "Get Started"}
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of store owners who trust Zion AI E-commerce
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  className="group"
                  glowColor="cyan"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your AI-Powered Store?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of entrepreneurs who are already using AI to grow their online businesses. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ShoppingCart className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}