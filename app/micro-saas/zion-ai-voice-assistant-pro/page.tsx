import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mic, Zap, Shield, Cloud, Globe, Star, Award, Mail, Phone, MapPin, Users, Brain, MessageSquare, Headphones } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';

const ZionAIVoiceAssistantPro = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced AI understands context, intent, and natural conversation flow",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Context awareness", "Multi-language support", "Intent recognition"]
    },
    {
      title: "Multi-Channel Integration",
      description: "Deploy across phone, web, mobile apps, and smart devices seamlessly",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Phone integration", "Web widgets", "Mobile SDKs", "IoT devices"]
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant with your brand voice and specific business terminology",
      icon: <Mic className="w-6 h-6" />,
      benefits: ["Brand voice", "Custom vocabulary", "Industry terminology", "Personality customization"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights into user interactions and conversation performance",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Conversation analytics", "Performance metrics", "User insights", "ROI tracking"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance, and data protection",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["End-to-end encryption", "GDPR compliance", "SOC 2 certified", "Data privacy"]
    },
    {
      title: "Real-time Learning",
      description: "AI continuously learns from interactions to improve responses and accuracy",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Continuous improvement", "Adaptive responses", "Learning algorithms", "Performance optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses getting started with voice AI",
      features: [
        "1,000 conversations/month",
        "Basic voice recognition",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "Phone integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with advanced voice AI needs",
      features: [
        "10,000 conversations/month",
        "Advanced NLP",
        "Priority support",
        "Custom voice training",
        "Advanced analytics",
        "Multi-channel deployment",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large organizations with enterprise-level voice AI requirements",
      features: [
        "Unlimited conversations",
        "Premium NLP models",
        "24/7 dedicated support",
        "Custom voice development",
        "Enterprise analytics",
        "White-label solution",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "CustomerFirst Solutions",
      role: "VP of Customer Experience",
      content: "Zion AI Voice Assistant Pro reduced our call center volume by 60% while improving customer satisfaction scores.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "TechFlow Industries",
      role: "Head of Operations",
      content: "The natural language processing is incredible. Customers can't tell they're talking to an AI assistant.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Plus",
      role: "CEO",
      content: "We've integrated the voice assistant across all our channels. The ROI was visible within the first month.",
      rating: 5
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "60%", label: "Call Volume Reduction" },
    { number: "24/7", label: "Availability" },
    { number: "50+", label: "Languages Supported" }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle customer inquiries, complaints, and support requests 24/7",
      icon: <Headphones className="w-6 h-6" />,
      benefits: ["24/7 availability", "Instant responses", "Escalation handling"]
    },
    {
      title: "Sales & Lead Generation",
      description: "Qualify leads, schedule appointments, and guide prospects through sales funnels",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Lead qualification", "Appointment scheduling", "Sales guidance"]
    },
    {
      title: "Internal Operations",
      description: "Streamline internal processes with voice-activated task management",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["Task automation", "Process guidance", "Information retrieval"]
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Provide patient support, appointment scheduling, and health information",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["HIPAA compliance", "Medical terminology", "Patient privacy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Platform | Zion Tech Group"
        description="Transform customer interactions with AI-powered voice assistant. Natural language processing, multi-channel deployment, enterprise security. Starting at $199/month."
        keywords="voice assistant, AI voice, conversational AI, voice AI, natural language processing, voice recognition, customer service automation, voice chatbot"
        canonical="https://ziontechgroup.com/zion-ai-voice-assistant-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Mic className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Voice AI Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Voice Assistant Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform customer interactions with AI-powered voice assistant. 
            Natural language processing, multi-channel deployment, and enterprise-grade security for seamless voice experiences.
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
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Try Voice Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Voice AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create intelligent, natural voice experiences for your customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using Zion AI Voice Assistant Pro to transform customer interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your voice AI needs. All plans include 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Start Free Trial
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about Zion AI Voice Assistant Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
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
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Voice Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using Zion AI Voice Assistant Pro to enhance customer interactions. 
            Start your free trial today and experience the power of intelligent voice AI.
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
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas"
              variant="outline"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              View All Micro SAAS
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIVoiceAssistantPro;