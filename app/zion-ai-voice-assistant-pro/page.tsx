import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Volume2, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Monitor, 
  Headphones, 
  Settings, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Play,
  Pause,
  SkipForward,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon,
  MicOff,
  Phone,
  Video,
  MessageSquare,
  Calendar,
  Mail,
  FileText,
  Search,
  Command,
  Bot,
  Sparkles,
  TrendingUp,
  Award,
  Target,
  Lock,
  Unlock,
  RefreshCw,
  Download,
  Upload,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  SignalMedium,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Battery as BatteryIcon,
  BatteryCharging as BatteryChargingIcon,
  Signal as SignalIcon,
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalZero as SignalZeroIcon,
  SignalMedium as SignalMediumIcon
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAIVoiceAssistantPro = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP engine that understands context, intent, and emotion in human speech with 99.7% accuracy",
      icon: <Brain className="w-8 h-8" />,
      stats: "99.7% accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Language Support",
      description: "Supports 50+ languages with real-time translation and cultural context understanding",
      icon: <Globe className="w-8 h-8" />,
      stats: "50+ languages",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Voice Cloning & Customization",
      description: "Create custom voice profiles and clone voices with permission for personalized experiences",
      icon: <Mic className="w-8 h-8" />,
      stats: "Unlimited voices",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive analytics dashboard showing conversation insights, user engagement, and performance metrics",
      icon: <BarChart3 className="w-8 h-8" />,
      stats: "Real-time data",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption, GDPR compliance, and SOC 2 Type II certification for enterprise deployments",
      icon: <Shield className="w-8 h-8" />,
      stats: "SOC 2 certified",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "API Integration",
      description: "Seamless integration with 1000+ third-party services including CRM, ERP, and productivity tools",
      icon: <Settings className="w-8 h-8" />,
      stats: "1000+ integrations",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 voice interactions/month",
        "5 custom voice profiles",
        "Basic analytics dashboard",
        "Email support",
        "10 language support",
        "Standard security features"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 voice interactions/month",
        "25 custom voice profiles",
        "Advanced analytics & reporting",
        "Priority support",
        "25 language support",
        "Advanced security features",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited voice interactions",
        "Unlimited custom voice profiles",
        "Real-time analytics & insights",
        "24/7 dedicated support",
        "50+ language support",
        "Enterprise security & compliance",
        "Full API access",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Deploy intelligent voice assistants to handle customer inquiries, provide support, and escalate complex issues to human agents",
      icon: <Headphones className="w-6 h-6" />,
      benefits: ["24/7 availability", "Reduced wait times", "Consistent service quality", "Cost reduction"]
    },
    {
      title: "Sales & Lead Qualification",
      description: "Use voice AI to qualify leads, schedule appointments, and provide product information to potential customers",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Higher conversion rates", "Qualified leads", "Automated follow-ups", "Sales team efficiency"]
    },
    {
      title: "Internal Operations",
      description: "Streamline internal processes with voice commands for scheduling, data entry, and workflow automation",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Hands-free operation", "Increased productivity", "Reduced errors", "Process automation"]
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Provide voice-enabled patient care, appointment scheduling, and medical information delivery",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Improved patient experience", "Accessibility", "Reduced administrative burden", "Better compliance"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "MedTech Solutions",
      role: "CEO",
      content: "Zion AI Voice Assistant Pro transformed our patient communication. We've seen a 40% reduction in call wait times and 95% patient satisfaction rate.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "TechStart Inc.",
      role: "CTO",
      content: "The voice cloning feature is incredible. We created custom voices for different departments, making our internal communications more engaging and professional.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "RetailMax",
      role: "Customer Experience Director",
      content: "Our customer service has never been better. The AI handles 80% of inquiries automatically while maintaining a human-like conversation experience.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const technicalSpecs = [
    { category: "Performance", specs: ["< 200ms response time", "99.9% uptime SLA", "Concurrent user support: 10,000+", "Real-time processing"] },
    { category: "Security", specs: ["AES-256 encryption", "GDPR compliant", "SOC 2 Type II", "HIPAA ready", "End-to-end encryption"] },
    { category: "Integration", specs: ["RESTful API", "WebSocket support", "SDK for major platforms", "Webhook notifications", "Custom connectors"] },
    { category: "Languages", specs: ["50+ languages supported", "Real-time translation", "Cultural context awareness", "Accent recognition", "Dialect support"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Platform | Zion Tech Group"
        description="Transform your business with Zion AI Voice Assistant Pro. Advanced voice AI with natural language processing, multi-language support, voice cloning, and enterprise security. Starting at $99/month."
        keywords="AI voice assistant, voice AI, natural language processing, voice cloning, enterprise voice AI, customer service automation, voice analytics, multi-language AI"
        canonical="https://ziontechgroup.com/zion-ai-voice-assistant-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Voice AI Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Voice Assistant Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most advanced voice AI platform with natural language processing, voice cloning, 
            multi-language support, and enterprise-grade security. Transform your business communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Video className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Voice Assistant Demo */}
          <div className="max-w-4xl mx-auto mb-16">
            <FuturisticCard className="p-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Try Our Voice Assistant</h3>
                <p className="text-gray-300 mb-6">Click the microphone and speak naturally to experience our AI</p>
                <div className="flex justify-center space-x-4">
                  <button className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform">
                    <Mic className="w-8 h-8 text-white" />
                  </button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform">
                    <MicOff className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>🎤 "Hello, how can I help you today?"</p>
                </div>
              </div>
            </FuturisticCard>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Voice AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Built with cutting-edge AI technology to deliver the most natural and intelligent voice interactions
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                  {feature.stats}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using Zion AI Voice Assistant Pro to transform their operations
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade performance and security specifications
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {technicalSpecs.map((spec, index) => (
              <FuturisticCard key={index} className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">{spec.category}</h3>
                <div className="space-y-3">
                  {spec.specs.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Voice Assistant Pro
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Voice Communication?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using Zion AI Voice Assistant Pro to enhance their customer experience and streamline operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">Contact us for custom enterprise solutions</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                +1 302 464 0950
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                kleber@ziontechgroup.com
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIVoiceAssistantPro;