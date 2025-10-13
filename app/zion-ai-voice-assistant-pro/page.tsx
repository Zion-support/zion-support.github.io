import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Upload, 
  Download, 
  Sparkles, 
  Clock, 
  BarChart3, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Volume2,
  TrendingUp,
  Zap,
  Globe,
  Shield,
  Heart,
  Award,
  Target,
  Brain,
  PieChart,
  Activity,
  Smartphone,
  DollarSign,
  Eye,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Smile,
  Frown,
  Meh,
  Headphones,
  Phone,
  Video
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIVoiceAssistantProPage = () => {
  const features = [
    {
      title: "Natural Voice Processing",
      description: "Advanced speech recognition and natural language understanding with 99% accuracy",
      icon: <Brain className="w-6 h-6" />,
      stats: "99% accuracy"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 100+ languages with perfect pronunciation and cultural adaptation",
      icon: <Globe className="w-6 h-6" />,
      stats: "100+ languages"
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant with your brand voice and specific terminology",
      icon: <Target className="w-6 h-6" />,
      stats: "Custom training"
    },
    {
      title: "Real-Time Analytics",
      description: "Track conversation quality, user satisfaction, and performance metrics",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$89",
      period: "/month",
      description: "Perfect for small businesses getting started with voice AI",
      features: [
        "Up to 1,000 conversations per month",
        "Basic voice recognition",
        "Email support",
        "Standard integrations",
        "Mobile app access",
        "Basic analytics",
        "5 custom commands"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "/month",
      description: "Ideal for growing businesses with advanced voice needs",
      features: [
        "Up to 10,000 conversations per month",
        "Advanced voice recognition",
        "Custom voice training",
        "Priority support",
        "Advanced integrations",
        "Team collaboration",
        "API access",
        "Advanced analytics",
        "Unlimited custom commands"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations with complex voice requirements",
      features: [
        "Unlimited conversations",
        "Premium voice models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "Data export",
        "SLA guarantee",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Customer Service Center",
      role: "Operations Manager",
      content: "Zion AI Voice Assistant Pro has transformed our customer service. Response times are 70% faster and customer satisfaction has increased dramatically.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Rodriguez",
      company: "Healthcare Provider",
      role: "Patient Experience Director",
      content: "The natural voice processing is incredible. Patients feel like they're talking to a real person, not a machine.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Chen",
      company: "E-commerce Platform",
      role: "Customer Success Manager",
      content: "The multi-language support is a game-changer for our international customers. The voice quality is consistently excellent.",
      rating: 5,
      avatar: "JC"
    }
  ];

  const capabilities = [
    {
      title: "Voice Recognition",
      description: "Advanced speech-to-text with 99% accuracy in multiple languages",
      icon: <Mic className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      metric: "99% accuracy"
    },
    {
      title: "Natural Responses",
      description: "Generate human-like responses that feel natural and engaging",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      metric: "Human-like"
    },
    {
      title: "Multi-Channel",
      description: "Deploy across phone, web, mobile, and smart devices",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      metric: "All platforms"
    },
    {
      title: "Real-Time Processing",
      description: "Process conversations in real-time with minimal latency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      metric: "< 200ms latency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Platform | Zion Tech Group"
        description="Create intelligent voice assistants with natural conversation capabilities. Multi-language support, custom voice training, and real-time analytics for superior customer experience."
        keywords="voice assistant, voice AI, speech recognition, natural language processing, voice automation, conversational AI, voice technology, AI assistant"
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
            <Mic className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Voice Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Create Voice Assistants
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build intelligent voice assistants with natural conversation capabilities. Multi-language support, 
            custom voice training, and real-time analytics for superior customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Start Building Voice AI
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Volume2 className="w-5 h-5" />}
            >
              Listen to Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Voice Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Create voice assistants that understand, respond, and engage like never before
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {capability.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {capability.metric}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Voice Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build and deploy intelligent voice assistants
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that fits your voice AI needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Voice AI Pioneers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Voice Assistant Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Voice AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses who trust Zion AI Voice Assistant Pro to create 
              intelligent voice experiences that engage and delight customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Volume2 className="w-5 h-5" />}
              >
                Listen to Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIVoiceAssistantProPage;