import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Award,
  Clock,
  Globe,
  Settings,
  Target,
  BarChart3,
  Volume2,
  Headphones,
  Smartphone,
  Monitor,
  Users,
  MessageSquare,
  Calendar,
  FileText,
  Search,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Shuffle
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIVoiceAssistantProPage = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Understand and respond to natural human speech with advanced NLP",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Platform Integration",
      description: "Works seamlessly across all your devices and platforms",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant to recognize your unique voice and preferences",
      icon: <Mic className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Automation",
      description: "Automate complex workflows with voice commands",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Natural Language Understanding",
    "Multi-language Support",
    "Custom Voice Training",
    "Task Automation",
    "Calendar Management",
    "Email & Messaging",
    "Smart Home Control",
    "Business Intelligence Queries",
    "Document Processing",
    "Meeting Scheduling",
    "Reminder & Alerts",
    "API Integration"
  ];

  const pricingTiers = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Basic voice commands",
        "Calendar integration",
        "Email management",
        "Standard support",
        "Mobile app"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for professionals",
      features: [
        "Advanced NLP",
        "Custom voice training",
        "Task automation",
        "Priority support",
        "Multi-device sync",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For organizations",
      features: [
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced integrations",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Tech Startup",
      role: "CEO",
      content: "AI Voice Assistant Pro has transformed how I manage my daily tasks. The natural language understanding is incredible and saves me hours every day.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "Consulting Firm",
      role: "Managing Partner",
      content: "The voice training feature is amazing. It understands my accent perfectly and responds accurately to complex commands.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Marketing Agency",
      role: "Director",
      content: "The task automation capabilities are game-changing. I can now manage my entire schedule and communications hands-free.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Voice Assistant Pro - Intelligent Voice AI Platform | Zion Tech Group"
        description="Transform your productivity with AI-powered voice assistant. Natural language processing, task automation, and multi-platform integration for seamless voice control."
        keywords="AI voice assistant, voice AI, natural language processing, voice automation, smart assistant, voice control"
        canonical="https://ziontechgroup.com/ai-voice-assistant-pro"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Mic className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI Voice Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Voice Assistant Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your productivity with AI-powered voice assistant. Natural language processing, 
              task automation, and multi-platform integration for seamless voice control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                icon={<Mic className="w-5 h-5" />}
              >
                Try Voice Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Voice Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need for intelligent voice interaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Voice Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete voice AI platform for modern productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
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
                Flexible pricing for users of all types
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    tier.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={tier.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of users using AI Voice Assistant Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Productivity?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and discover the power of AI voice assistance.
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
                  icon={<Mic className="w-5 h-5" />}
                >
                  Try Voice Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default AIVoiceAssistantProPage;