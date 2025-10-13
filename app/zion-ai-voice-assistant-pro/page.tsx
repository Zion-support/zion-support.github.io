import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Headphones, 
  Volume2, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Languages,
  Clock,
  Users,
  Settings,
  Play,
  Pause,
  VolumeX,
  Calendar
} from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const ZionAIVoiceAssistantProPage = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding context, intent, and complex conversations",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Task Automation",
      description: "Automate routine tasks, schedule meetings, send emails, and manage workflows with voice commands",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Language Support",
      description: "Communicate in 50+ languages with native-level pronunciation and understanding",
      icon: <Languages className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Voice Analytics",
      description: "Track usage patterns, optimize performance, and gain insights into voice interactions",
      icon: <Volume2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$199",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 1,000 voice interactions",
        "Basic NLP capabilities",
        "5 languages supported",
        "Email support",
        "Standard voice quality"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$399",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 voice interactions",
        "Advanced NLP capabilities",
        "25 languages supported",
        "Priority support",
        "High-quality voice synthesis",
        "Custom wake words",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited voice interactions",
        "Premium NLP capabilities",
        "50+ languages supported",
        "24/7 dedicated support",
        "Ultra-high voice quality",
        "Custom voice training",
        "Advanced API access",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Handle customer inquiries, provide support, and resolve issues with intelligent voice responses",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Virtual Meetings",
      description: "Schedule meetings, take notes, and manage calendar events through voice commands",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Content Creation",
      description: "Generate voiceovers, podcasts, and audio content with natural-sounding AI voices",
      icon: <Mic className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Smart Home Control",
      description: "Control IoT devices, manage home automation, and create custom voice commands",
      icon: <Settings className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const voiceFeatures = [
    {
      title: "Voice Cloning",
      description: "Create custom voice models that sound exactly like specific individuals",
      icon: <Headphones className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Emotion Detection",
      description: "Detect and respond to emotional cues in voice for more natural interactions",
      icon: <Volume2 className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Noise Cancellation",
      description: "Advanced noise filtering for crystal-clear voice recognition in any environment",
      icon: <VolumeX className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Processing",
      description: "Ultra-low latency voice processing for instant responses and natural conversations",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Customer Support Center",
      role: "Operations Manager",
      content: "Zion AI Voice Assistant has reduced our call handling time by 50% while improving customer satisfaction scores significantly.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Content Studio",
      role: "Audio Producer",
      content: "The voice cloning feature is incredible. We can create consistent brand voices across all our content without hiring multiple voice actors.",
      rating: 5
    },
    {
      name: "John Chen",
      company: "Smart Home Company",
      role: "Product Manager",
      content: "Integration was seamless. Our customers love the natural voice interactions and the ability to control everything with simple voice commands.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Platform"
        description="Transform your business with Zion AI Voice Assistant Pro. Natural language processing, task automation, and multi-language support for seamless voice interactions."
        keywords="voice assistant, ai voice, natural language processing, voice automation, voice synthesis, voice analytics, voice cloning"
        canonical="https://ziontechgroup.com/zion-ai-voice-assistant-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Mic className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Voice Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion AI Voice Assistant Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Experience the future of voice interaction with our advanced AI voice assistant. 
            Natural conversations, task automation, and seamless multi-language support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Listen to Demo
            </FuturisticButton>
          </div>
          
          {/* Voice Demo Placeholder */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white text-lg">AI Voice Assistant Demo</p>
                  <p className="text-gray-400 text-sm">Click to hear our AI in action</p>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Voice AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of cutting-edge voice AI technology for natural, intelligent interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Voice Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Premium Voice Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced voice AI features available in the market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voiceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer service to content creation, our voice assistant adapts to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your voice AI needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 hover:shadow-purple-500/25' 
                    : 'border-white/20 hover:shadow-purple-500/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who are transforming their business with voice AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Voice AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start your free trial today and discover the power of intelligent voice interactions. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Listen to Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIVoiceAssistantProPage;