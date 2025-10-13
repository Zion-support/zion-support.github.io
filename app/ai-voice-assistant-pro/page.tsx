import React from "react";
import { ArrowRight, CheckCircle, Star, Mic, Headphones, Volume2, MessageSquare, Brain, Zap, Shield, Clock, Users, Award, TrendingUp, Globe, Smartphone, Monitor, Settings, Target, BarChart3, Cloud, Code, Database, Mail, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Cpu, Wifi, Battery, Camera, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIVoiceAssistantPro() {
  const features = [
    "Natural language processing & understanding",
    "Multi-language support (100+ languages)",
    "Real-time voice recognition & synthesis",
    "Custom voice training & personalization",
    "Integration with 500+ business applications",
    "Conversational AI with context awareness",
    "Voice command automation & workflows",
    "Advanced sentiment analysis",
    "Multi-channel deployment (phone, web, mobile)",
    "Custom wake words & activation phrases",
    "Voice biometric authentication",
    "Real-time transcription & translation",
    "API access & webhook integration",
    "Analytics & performance monitoring",
    "White-label customization options",
    "24/7 technical support"
  ];

  const benefits = [
    "Reduce customer service costs by 60%",
    "Handle 90% of voice interactions automatically",
    "Improve customer satisfaction by 45%",
    "Scale voice operations 10x without additional staff",
    "Enable 24/7 multilingual customer support",
    "Reduce response time to under 2 seconds",
    "Increase accessibility for all users",
    "Generate detailed voice interaction analytics"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Handle customer inquiries, complaints, and support requests through intelligent voice interactions",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Voice-Controlled Business Apps",
      description: "Control your business applications and workflows using natural voice commands",
      icon: <Mic className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multilingual Support",
      description: "Provide seamless support in 100+ languages with real-time translation",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Voice Analytics & Insights",
      description: "Analyze voice interactions to improve customer experience and business processes",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 voice interactions/month",
        "5 languages supported",
        "Basic voice recognition",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 voice interactions/month",
        "25 languages supported",
        "Advanced voice recognition",
        "Custom voice training",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299/month",
      description: "For large organizations",
      features: [
        "Unlimited voice interactions",
        "100+ languages supported",
        "Premium voice recognition",
        "Custom voice synthesis",
        "Dedicated support",
        "Advanced analytics & reporting",
        "White-label options",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Global Call Center Solutions",
      role: "Operations Director",
      content: "Zion AI Voice Assistant Pro has revolutionized our customer service. We've reduced costs by 65% while improving customer satisfaction scores by 40%.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "TechStart International",
      role: "CTO",
      content: "The multilingual capabilities are incredible. We can now serve customers in 15 languages seamlessly, which has opened up new markets for us.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Sarah Thompson",
      company: "E-commerce Plus",
      role: "Customer Experience Manager",
      content: "The voice analytics have given us insights we never had before. We can now identify and address customer pain points in real-time.",
      rating: 5,
      avatar: "ST"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Pro - Zion Tech Group | Advanced Voice AI Solutions</title>
        <meta
          name="description"
          content="Transform your business with AI Voice Assistant Pro. Advanced voice recognition, natural language processing, and multilingual support for customer service automation."
        />
        <meta
          name="keywords"
          content="AI voice assistant, voice recognition, natural language processing, customer service automation, voice AI, multilingual support, voice analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Voice Assistant Pro - Zion Tech Group | Advanced Voice AI Solutions"
        description="Transform your business with AI Voice Assistant Pro. Advanced voice recognition, natural language processing, and multilingual support for customer service automation."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Mic className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Advanced Voice AI Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Voice Assistant Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with advanced AI voice technology. Natural language processing, 
                multilingual support, and intelligent automation for customer service and business operations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">100+ languages supported</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% accuracy rate</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Real-time processing</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 availability</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Voice AI Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Powerful Voice AI Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced voice technology that understands, responds, and learns from every interaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Voice AI Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI Voice Assistant Pro can transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl mb-6`}>
                    <div className="text-white">{useCase.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Business Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? "border-cyan-400 shadow-2xl shadow-cyan-500/20" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Customer Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how businesses are transforming with AI Voice Assistant Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
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
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Voice Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI Voice Assistant Pro. 
              No setup fees, cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}