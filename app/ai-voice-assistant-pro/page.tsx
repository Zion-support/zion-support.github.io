import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mic, 
  Volume2, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Star, 
  Clock, 
  Smartphone, 
  Laptop, 
  Headphones,
  MessageSquare,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Download,
  Upload,
  Share2,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Bell,
  BellOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Thermometer,
  Activity,
  TrendingUp,
  Target,
  Award,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Crown,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Server,
  Cloud,
  HardDrive,
  Network,
  Monitor,
  Smartphone as PhoneIcon,
  Laptop as LaptopIcon,
  Headphones as HeadphonesIcon
} from 'lucide-react';

export default function AIVoiceAssistantPro() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP engine understands context, intent, and sentiment with 99.2% accuracy",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Multi-language support", "Context awareness", "Intent recognition", "Sentiment analysis"]
    },
    {
      title: "Real-time Voice Processing",
      description: "Ultra-low latency voice processing with advanced noise cancellation and echo suppression",
      icon: <Mic className="w-6 h-6" />,
      benefits: ["<100ms response time", "Noise cancellation", "Echo suppression", "Voice enhancement"]
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamlessly integrates with web, mobile, desktop, and IoT devices",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Cross-platform SDK", "RESTful APIs", "WebRTC support", "Mobile SDKs"]
    },
    {
      title: "Custom Voice Training",
      description: "Train custom voice models for specific industries and use cases",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Custom voice models", "Industry-specific training", "Accent adaptation", "Brand voice creation"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with conversation insights and performance metrics",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Conversation analytics", "Performance metrics", "User behavior insights", "ROI tracking"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["End-to-end encryption", "SOC 2 compliance", "GDPR ready", "HIPAA compliant"]
    }
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Deploy intelligent voice assistants for 24/7 customer support with human-like interactions",
      icon: <Headphones className="w-8 h-8" />,
      benefits: ["Reduce support costs by 60%", "24/7 availability", "Consistent service quality", "Multi-language support"],
      industries: ["E-commerce", "Banking", "Healthcare", "Retail"]
    },
    {
      title: "Smart Home Control",
      description: "Voice-controlled smart home automation with natural language commands",
      icon: <Home className="w-8 h-8" />,
      benefits: ["Hands-free control", "Natural commands", "IoT integration", "Energy optimization"],
      industries: ["Smart Homes", "Property Management", "Hospitality", "Senior Care"]
    },
    {
      title: "Business Process Automation",
      description: "Automate complex business processes with voice commands and intelligent workflows",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Process automation", "Voice workflows", "Integration capabilities", "Error reduction"],
      industries: ["Manufacturing", "Logistics", "Healthcare", "Finance"]
    },
    {
      title: "Accessibility Solutions",
      description: "Provide voice interfaces for users with disabilities and accessibility needs",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Accessibility compliance", "Voice navigation", "Screen reader integration", "Inclusive design"],
      industries: ["Education", "Government", "Healthcare", "Non-profit"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 voice interactions/month",
        "Basic NLP capabilities",
        "2 custom voice models",
        "Standard support",
        "Basic analytics dashboard",
        "Web and mobile SDKs",
        "99.5% uptime SLA"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "Up to 10,000 voice interactions/month",
        "Advanced NLP with custom training",
        "10 custom voice models",
        "Priority support",
        "Advanced analytics & insights",
        "All platform SDKs",
        "99.9% uptime SLA",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited voice interactions",
        "Enterprise-grade NLP",
        "Unlimited custom voice models",
        "24/7 dedicated support",
        "Custom analytics & reporting",
        "On-premise deployment option",
        "99.99% uptime SLA",
        "Custom integrations & APIs",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "CTO",
      content: "Zion AI Voice Assistant Pro has revolutionized our customer service. We've reduced response times by 80% and customer satisfaction increased by 45%.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "SmartHome Innovations",
      role: "CEO",
      content: "The voice recognition accuracy is incredible. Our smart home customers love the natural language commands and seamless integration.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "MedTech Solutions",
      role: "Medical Director",
      content: "The HIPAA compliance and medical terminology understanding make this perfect for our healthcare applications. Highly recommended.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "99.2%", label: "Voice Recognition Accuracy", icon: <Mic className="w-6 h-6" /> },
    { number: "<100ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Pro - Advanced Voice AI Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with AI Voice Assistant Pro. Advanced voice AI with 99.2% accuracy, real-time processing, and enterprise-grade security. Perfect for customer service, smart homes, and business automation."
        />
        <meta
          name="keywords"
          content="AI voice assistant, voice AI, natural language processing, voice recognition, customer service automation, smart home control, business process automation, accessibility solutions, voice SDK, voice analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Voice AI Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Voice Assistant Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with the most advanced voice AI platform. 
                Experience 99.2% accuracy, real-time processing, and enterprise-grade security 
                for customer service, smart homes, and business automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Built with cutting-edge AI technology to deliver the most advanced voice assistant experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI Voice Assistant Pro transforms businesses across industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{useCase.industries.join(", ")}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    tier.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Voice Assistant Pro
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using AI Voice Assistant Pro to enhance customer experience and automate processes.
                Start your free trial today and experience the future of voice AI.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Schedule Demo
                  <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}