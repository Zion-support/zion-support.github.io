import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mic, 
  Brain, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Eye, 
  Heart, 
  MessageSquare, 
  Mail, 
  Phone, 
  Globe, 
  Monitor, 
  Sparkles, 
  CheckCircle, 
  Star, 
  Award, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones, 
  Speaker, 
  Wifi, 
  WifiOff, 
  Signal, 
  Zap as ZapIcon, 
  Flash, 
  Lightning, 
  Thunder, 
  Storm, 
  Rain, 
  Snow, 
  Sun, 
  Moon, 
  Star as StarIcon, 
  Planet, 
  Rocket, 
  Satellite, 
  Telescope, 
  Microscope, 
  Atom, 
  Dna, 
  Brain as BrainIcon, 
  Lungs, 
  Stomach, 
  Liver, 
  Kidney, 
  Ear, 
  Nose, 
  Mouth, 
  Tooth, 
  Bone, 
  Muscle, 
  Skin, 
  Hair, 
  Fingerprint, 
  Face, 
  Smile, 
  Frown, 
  Meh, 
  Laugh, 
  Cry, 
  Angry, 
  Surprised, 
  Confused, 
  Thinking, 
  Sleeping, 
  Awake, 
  Alert, 
  Focused, 
  Relaxed, 
  Stressed, 
  Happy, 
  Sad, 
  Excited, 
  Bored, 
  Curious, 
  Proud, 
  Shy, 
  Confident, 
  Nervous, 
  Calm, 
  Energetic, 
  Tired, 
  Fresh, 
  Old, 
  New, 
  Young, 
  Mature, 
  Wise, 
  Clever, 
  Smart, 
  Intelligent, 
  Genius, 
  Brilliant, 
  Amazing, 
  Awesome, 
  Fantastic, 
  Incredible, 
  Outstanding, 
  Excellent, 
  Perfect, 
  Great, 
  Good, 
  Nice, 
  Cool, 
  Hot, 
  Warm, 
  Cold, 
  Freezing, 
  Boiling, 
  Melting, 
  Solid, 
  Liquid, 
  Gas, 
  Plasma, 
  Crystal, 
  Diamond, 
  Gold, 
  Silver, 
  Bronze, 
  Copper, 
  Iron, 
  Steel, 
  Aluminum, 
  Titanium, 
  Platinum, 
  Palladium, 
  Rhodium, 
  Iridium, 
  Osmium, 
  Ruthenium, 
  Rhenium, 
  Tungsten, 
  Molybdenum, 
  Tantalum, 
  Hafnium, 
  Lutetium, 
  Ytterbium, 
  Thulium, 
  Erbium, 
  Holmium, 
  Dysprosium, 
  Terbium, 
  Gadolinium, 
  Europium, 
  Samarium, 
  Promethium, 
  Neodymium, 
  Praseodymium, 
  Cerium, 
  Lanthanum, 
  Actinium, 
  Thorium, 
  Protactinium, 
  Uranium, 
  Neptunium, 
  Plutonium, 
  Americium, 
  Curium, 
  Berkelium, 
  Californium, 
  Einsteinium, 
  Fermium, 
  Mendelevium, 
  Nobelium, 
  Lawrencium, 
  Rutherfordium, 
  Dubnium, 
  Seaborgium, 
  Bohrium, 
  Hassium, 
  Meitnerium, 
  Darmstadtium, 
  Roentgenium, 
  Copernicium, 
  Nihonium, 
  Flerovium, 
  Moscovium, 
  Livermorium, 
  Tennessine, 
  Oganesson
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiVoiceAssistantPro() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities that understand context, intent, and complex conversations with human-like accuracy.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Context understanding", "Intent recognition", "Conversation flow", "Multi-turn dialogue"]
    },
    {
      title: "Multi-Language Support",
      description: "Support for 100+ languages with native pronunciation and cultural context understanding.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["100+ languages", "Native pronunciation", "Cultural context", "Accent recognition"]
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant with your brand voice, terminology, and specific business requirements.",
      icon: <Mic className="w-8 h-8" />,
      benefits: ["Brand voice training", "Custom terminology", "Business context", "Personality customization"]
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate with existing systems, databases, and third-party applications.",
      icon: <Code className="w-8 h-8" />,
      benefits: ["RESTful APIs", "Webhook support", "Database integration", "Third-party apps"]
    },
    {
      title: "Real-time Analytics",
      description: "Monitor performance, user satisfaction, and conversation insights with detailed analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance metrics", "User satisfaction", "Conversation insights", "Custom reports"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance, and privacy protection for enterprise use.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["End-to-end encryption", "GDPR compliance", "SOC 2 certified", "Data privacy"]
    }
  ];

  const voiceStats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "100+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "50ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Always Available", icon: <Eye className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 conversations/month",
        "Basic NLP capabilities",
        "5 languages supported",
        "Email support",
        "Standard security",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced NLP capabilities",
        "50+ languages supported",
        "Priority support",
        "Enhanced security",
        "Advanced analytics",
        "Custom voice training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited conversations",
        "Premium NLP capabilities",
        "100+ languages supported",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom analytics",
        "White-label options",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Customer Service Company",
      role: "VP of Operations",
      content: "Zion AI Voice Assistant Pro has transformed our customer service. The natural language processing is incredibly accurate and our customer satisfaction scores have increased by 35%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Healthcare Provider",
      role: "IT Director",
      content: "The multi-language support and custom voice training features are game-changers. We can now serve patients in their native languages with medical terminology accuracy.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Financial Services",
      role: "Customer Experience Manager",
      content: "The enterprise security features give us confidence to handle sensitive financial conversations. The API integration was seamless and the analytics provide valuable insights.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Handle customer inquiries, support tickets, and provide 24/7 assistance",
      icon: <Users className="w-6 h-6" />,
      examples: ["Support tickets", "FAQ handling", "Order inquiries", "Technical support"]
    },
    {
      title: "Sales & Marketing",
      description: "Qualify leads, schedule appointments, and provide product information",
      icon: <Target className="w-6 h-6" />,
      examples: ["Lead qualification", "Appointment scheduling", "Product demos", "Sales follow-up"]
    },
    {
      title: "Healthcare",
      description: "Patient intake, appointment scheduling, and medical information assistance",
      icon: <Heart className="w-6 h-6" />,
      examples: ["Patient intake", "Appointment scheduling", "Medical Q&A", "Prescription reminders"]
    },
    {
      title: "Education",
      description: "Student support, course information, and learning assistance",
      icon: <Brain className="w-6 h-6" />,
      examples: ["Student support", "Course information", "Learning assistance", "Enrollment help"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Voice Assistant Pro - Enterprise Voice AI | Zion Tech Group</title>
        <meta
          name="description"
          content="Enterprise-grade AI voice assistant for customer service, internal operations, and task automation. Starting at $499/month."
        />
        <meta
          name="keywords"
          content="AI voice assistant, voice AI, natural language processing, voice automation, enterprise voice AI, conversational AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-voice-assistant-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                  <Mic className="w-4 h-4 text-indigo-400 mr-2" />
                  <span className="text-indigo-400 text-sm font-medium">#1 Enterprise Voice AI 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Zion AI Voice Assistant Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Enterprise-grade AI voice assistant for customer service, internal operations, and task automation. 
                  Transform your business communication with advanced voice AI technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {voiceStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Mic className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $499/month</h3>
                    <p className="text-gray-300">Enterprise voice AI for your business</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Natural language processing</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Multi-language support</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>Custom voice training</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      <span>API integration</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Advanced Voice AI Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to deploy enterprise-grade voice AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Perfect for Every Industry
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From healthcare to finance, deploy voice AI solutions across all industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-indigo-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{example}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Flexible Voice AI Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your voice AI needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-indigo-500/50 shadow-indigo-500/25' 
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Trusted by Enterprise Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what enterprise leaders say about Zion AI Voice Assistant Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Voice AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of enterprises already using Zion AI Voice Assistant Pro to transform 
                their customer service and operations. Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-indigo-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-indigo-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}