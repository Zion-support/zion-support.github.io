import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, Zap, Shield, Activity, Target, BarChart3, PieChart, Settings, Database, Lock, Eye, BarChart, LineChart, Calculator, Headphones, Volume2, Radio, Music, Video, Phone, MessageCircle, Bot, Sparkles, Cpu, MemoryStick, Wifi, Bluetooth, Monitor, Smartphone, Laptop, Tablet, Gamepad2, Mic, Camera, MicIcon } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const ZionAINeuralInterfacePage = () => {
  const features = [
    {
      title: "Thought-to-Text Conversion",
      description: "Convert neural signals directly to text with 98% accuracy using advanced brain-computer interface technology",
      icon: <Brain className="w-6 h-6" />,
      details: ["Neural signal processing", "98% accuracy", "Real-time conversion", "Multi-language support"]
    },
    {
      title: "Mind Control Interface",
      description: "Control devices and applications using only your thoughts with our revolutionary neural interface",
      icon: <Target className="w-6 h-6" />,
      details: ["Device control", "Application navigation", "Gesture recognition", "Custom commands"]
    },
    {
      title: "Neural Data Analytics",
      description: "Analyze brain activity patterns to provide insights into cognitive performance and mental health",
      icon: <BarChart3 className="w-6 h-6" />,
      details: ["Cognitive analysis", "Performance metrics", "Health monitoring", "Pattern recognition"]
    },
    {
      title: "Real-Time Processing",
      description: "Process neural signals in real-time with ultra-low latency for seamless user experience",
      icon: <Zap className="w-6 h-6" />,
      details: ["Sub-100ms latency", "Real-time processing", "High throughput", "Low power consumption"]
    },
    {
      title: "Multi-Device Support",
      description: "Connect and control multiple devices simultaneously through neural interface technology",
      icon: <Monitor className="w-6 h-6" />,
      details: ["Device integration", "Multi-platform support", "Wireless connectivity", "Cross-device sync"]
    },
    {
      title: "Privacy & Security",
      description: "Bank-level encryption and privacy protection for all neural data and user information",
      icon: <Shield className="w-6 h-6" />,
      details: ["End-to-end encryption", "Data privacy", "Secure storage", "User consent"]
    }
  ];

  const applications = [
    {
      name: "Accessibility",
      description: "Enable communication and device control for people with disabilities",
      icon: <Users className="w-8 h-8" />,
      useCases: ["ALS communication", "Paralysis assistance", "Motor disability support", "Speech impairment aid"]
    },
    {
      name: "Gaming & Entertainment",
      description: "Revolutionary gaming experiences controlled by thoughts and emotions",
      icon: <Gamepad2 className="w-8 h-8" />,
      useCases: ["Mind-controlled games", "Emotional gaming", "VR/AR integration", "Immersive experiences"]
    },
    {
      name: "Productivity",
      description: "Enhance productivity with thought-based computer control and automation",
      icon: <Laptop className="w-8 h-8" />,
      useCases: ["Hands-free computing", "Voice-to-text", "Automation", "Multi-tasking"]
    },
    {
      name: "Healthcare",
      description: "Medical applications for diagnosis, therapy, and rehabilitation",
      icon: <Activity className="w-8 h-8" />,
      useCases: ["Neurological diagnosis", "Cognitive therapy", "Rehabilitation", "Mental health monitoring"]
    },
    {
      name: "Education",
      description: "Revolutionary learning experiences with brain-computer interface technology",
      icon: <Brain className="w-8 h-8" />,
      useCases: ["Attention monitoring", "Learning optimization", "Focus training", "Cognitive assessment"]
    },
    {
      name: "Research",
      description: "Advanced research tools for neuroscience and cognitive studies",
      icon: <Target className="w-8 h-8" />,
      useCases: ["Brain research", "Cognitive studies", "Neural mapping", "Data collection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$199",
      period: "/month",
      description: "Perfect for individuals and personal use",
      features: [
        "Basic neural interface",
        "Thought-to-text conversion",
        "Single device support",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for professionals and researchers",
      features: [
        "Advanced neural interface",
        "Multi-device control",
        "Advanced analytics",
        "Custom commands",
        "Priority support",
        "API access",
        "Data export"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For organizations and institutions",
      features: [
        "Full neural interface suite",
        "Unlimited devices",
        "Custom development",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "White-label options"
      ],
      popular: false
    }
  ];

  const performanceMetrics = [
    {
      metric: "Accuracy Rate",
      value: "98%",
      description: "Thought-to-text conversion",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Latency",
      value: "< 100ms",
      description: "Real-time processing",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "Device Support",
      value: "50+",
      description: "Compatible devices",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      metric: "Languages",
      value: "25+",
      description: "Supported languages",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "NeuralTech Research",
      role: "Neuroscientist",
      content: "The Zion AI Neural Interface has revolutionized our research capabilities. The accuracy and speed are unprecedented in the field.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Accessibility Plus",
      role: "CEO",
      content: "This technology has given hope to thousands of people with disabilities. The thought-to-text conversion is incredibly accurate and fast.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Gaming Innovations",
      role: "CTO",
      content: "We've integrated the neural interface into our gaming platform. The user experience is mind-blowing - literally!",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Neural Interface - Revolutionary Brain-Computer Interface | Zion Tech Group"
        description="Revolutionary brain-computer interface technology with 98% accuracy. Thought-to-text conversion, mind control, and neural data analytics for accessibility, gaming, and productivity."
        keywords="neural interface, brain-computer interface, BCI, thought control, mind control, neural technology, brain interface, cognitive computing"
        canonical="https://ziontechgroup.com/zion-ai-neural-interface"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Neural Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Neural Interface
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary brain-computer interface technology with 98% accuracy. Convert thoughts to text, 
            control devices with your mind, and unlock the power of neural computing for accessibility, gaming, and productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Activity className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-xs md:text-sm font-semibold">{metric.metric}</div>
                <div className="text-gray-400 text-xs">{metric.description}</div>
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
              Revolutionary Neural Interface Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced brain-computer interface technology that bridges the gap between mind and machine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how neural interface technology is revolutionizing industries and improving lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{app.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {app.useCases.map((useCase, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Neural Interface Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your neural interface needs. All plans include core BCI functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Innovation Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what researchers, developers, and users say about our neural interface technology
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
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock the Power of Your Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the neural interface revolution. Experience thought-to-text conversion, 
              mind control, and the future of human-computer interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Activity className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAINeuralInterfacePage;