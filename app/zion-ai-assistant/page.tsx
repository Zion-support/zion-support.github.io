import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  MessageSquare, 
  Users, 
  Zap, 
  CheckCircle, 
  Star, 
  Shield, 
  Database, 
  Globe, 
  Smartphone, 
  Download, 
  Upload, 
  Settings, 
  Filter, 
  Search, 
  RefreshCw, 
  Play, 
  Pause, 
  Stop, 
  Volume2, 
  VolumeX, 
  Wifi, 
  Battery, 
  Cpu, 
  HardDrive, 
  Monitor, 
  Mouse, 
  Keyboard, 
  Camera, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  PhoneMissed, 
  PhoneOff, 
  PhoneForwarded, 
  Mail, 
  Share2, 
  Edit3, 
  Trash2, 
  Plus, 
  Minus, 
  Target, 
  Award, 
  Headphones, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Calendar, 
  Sparkles, 
  Rocket, 
  Lock, 
  Unlock, 
  Key, 
  Fingerprint, 
  Scan, 
  QrCode, 
  Barcode, 
  Tag, 
  Tags, 
  Bookmark, 
  BookmarkCheck, 
  BookmarkX, 
  BookmarkPlus, 
  BookmarkMinus, 
  BookmarkHeart, 
  BookmarkStar, 
  BookmarkUser, 
  BookmarkEdit, 
  BookmarkTrash, 
  BookmarkLock, 
  BookmarkUnlock, 
  BookmarkKey, 
  BookmarkFingerprint, 
  BookmarkScan, 
  BookmarkQrCode, 
  BookmarkBarcode, 
  BookmarkTag, 
  BookmarkTags,
  Clock,
  DollarSign,
  TrendingUp,
  Activity,
  BarChart3,
  Bot,
  ShoppingCart
} from "lucide-react";

export default function ZionAIAssistant() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities that understand context, intent, and sentiment to provide human-like interactions.",
      icon: <Brain className="w-8 h-8" />,
      benefits: [
        "Context-aware responses",
        "Multi-language support",
        "Sentiment analysis",
        "Intent recognition"
      ]
    },
    {
      title: "Multi-Channel Support",
      description: "Deploy across web, mobile, social media, and messaging platforms with consistent experience everywhere.",
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "Web chat integration",
        "Mobile app support",
        "Social media bots",
        "API connectivity"
      ]
    },
    {
      title: "Custom Training",
      description: "Train the AI with your specific data, processes, and knowledge base for personalized responses.",
      icon: <Settings className="w-8 h-8" />,
      benefits: [
        "Custom knowledge base",
        "Brand voice training",
        "Process automation",
        "Continuous learning"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track performance, user satisfaction, and conversation insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: [
        "Conversation analytics",
        "Performance metrics",
        "User satisfaction tracking",
        "ROI measurement"
      ]
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate with your existing systems, CRM, and business applications.",
      icon: <Database className="w-8 h-8" />,
      benefits: [
        "CRM integration",
        "ERP connectivity",
        "Custom API endpoints",
        "Real-time data sync"
      ]
    },
    {
      title: "24/7 Availability",
      description: "Always-on assistant that never sleeps, providing instant responses to customer inquiries.",
      icon: <Clock className="w-8 h-8" />,
      benefits: [
        "Round-the-clock support",
        "Instant responses",
        "No downtime",
        "Scalable performance"
      ]
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle common inquiries, provide product information, and escalate complex issues to human agents.",
      icon: <Headphones className="w-6 h-6" />,
      benefits: [
        "Reduce support tickets by 60%",
        "24/7 customer availability",
        "Consistent responses",
        "Faster resolution times"
      ]
    },
    {
      title: "Sales Support",
      description: "Qualify leads, answer product questions, and guide prospects through the sales process.",
      icon: <Target className="w-6 h-6" />,
      benefits: [
        "Qualify leads automatically",
        "Provide product information",
        "Schedule demos",
        "Follow up on prospects"
      ]
    },
    {
      title: "Internal Operations",
      description: "Assist employees with HR questions, IT support, and internal process guidance.",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "Reduce HR workload",
        "Instant IT support",
        "Process automation",
        "Employee self-service"
      ]
    },
    {
      title: "E-commerce Assistant",
      description: "Help customers find products, process orders, and handle returns and exchanges.",
      icon: <ShoppingCart className="w-6 h-6" />,
      benefits: [
        "Product recommendations",
        "Order tracking",
        "Return processing",
        "Upselling opportunities"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small businesses starting with AI",
      features: [
        "Up to 1,000 conversations/month",
        "Basic NLP capabilities",
        "Web chat widget",
        "Email support",
        "Basic analytics",
        "1 custom integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced NLP capabilities",
        "Multi-channel support",
        "Priority support",
        "Advanced analytics",
        "5 custom integrations",
        "Custom training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited conversations",
        "Premium NLP capabilities",
        "All channels supported",
        "24/7 phone support",
        "Enterprise analytics",
        "Unlimited integrations",
        "Advanced custom training",
        "Full API access",
        "Dedicated account manager",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Customer Success Co",
      role: "VP of Operations",
      content: "Zion AI Assistant has revolutionized our customer support. We've reduced response time by 80% and increased customer satisfaction significantly.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Mark Thompson",
      company: "E-commerce Platform",
      role: "Sales Director",
      content: "The AI assistant handles our lead qualification perfectly. It's like having a sales rep that never sleeps and always follows up.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Wilson",
      company: "Tech Startup",
      role: "CEO",
      content: "The custom training feature allowed us to create an AI that truly understands our business. It's become an integral part of our operations.",
      rating: 5,
      avatar: "SW"
    }
  ];

  const stats = [
    { number: "60%", label: "Reduction in Support Tickets", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "80%", label: "Faster Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "95%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Always Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Assistant - Intelligent Virtual Assistant | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer service with Zion AI Assistant - intelligent virtual assistant with natural language processing, multi-channel support, and custom training."
        />
        <meta
          name="keywords"
          content="AI assistant, virtual assistant, chatbot, customer service, natural language processing, automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <Brain className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Intelligent virtual assistant that transforms customer service, sales support, and business automation. 
                Powered by advanced natural language processing and machine learning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Natural language processing</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Multi-channel support</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Custom training</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Try Demo
                  <Play className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Powerful AI Capabilities</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Advanced artificial intelligence that understands, learns, and adapts to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Perfect for Every Business</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                From customer support to sales automation, our AI assistant adapts to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your AI Assistant Plan</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Scale your AI assistant as your business grows. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${
                    plan.popular 
                      ? 'border-purple-500 ring-2 ring-purple-500/50' 
                      : 'border-white/20'
                  } hover:border-white/40 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'border border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Loved by Businesses Worldwide</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how companies are transforming their operations with Zion AI Assistant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how Zion AI Assistant can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-12 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-300 mb-6">
              Our AI experts are here to help you implement and optimize your virtual assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}