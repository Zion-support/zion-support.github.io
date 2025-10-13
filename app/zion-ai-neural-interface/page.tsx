import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, 
  Clock, Shield, Code, Database, Mail, Settings, Globe, 
  Smartphone, Monitor, Mic, Target, TrendingUp, FileText, Lock, 
  Server, Cpu, Network, HardDrive, Headphones, Award, Rocket, 
  Sparkles, Bot, Wifi, Phone, Laptop, Camera, Music, Gamepad2,
  ShoppingCart, CreditCard, MapPin, Calendar, MessageSquare,
  PieChart, LineChart, Activity, Layers, Eye, Search, Filter,
  Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  ChevronRight, ExternalLink, Play, Pause, Volume2, VolumeX,
  Zap, Cpu as Processor, MemoryStick, Cpu as Chip, Cpu as CircuitBoard
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAINeuralInterfacePage = () => {
  const features = [
    {
      title: "Thought-to-Text Conversion",
      description: "Convert neural signals directly into text with 99.7% accuracy using advanced machine learning algorithms.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mind Control Interface",
      description: "Control devices and applications through neural signals with real-time response and precision control.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Neural Signal Processing",
      description: "Advanced signal processing algorithms that interpret complex neural patterns with unprecedented accuracy.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Translation",
      description: "Instant translation of thoughts into multiple languages with cultural context and nuance preservation.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Accessibility Features",
      description: "Revolutionary accessibility tools for individuals with disabilities, enabling communication and control.",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Medical Applications",
      description: "Advanced medical diagnostics and treatment monitoring through neural pattern analysis and interpretation.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      originalPrice: "$399",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "Basic thought-to-text conversion",
        "Up to 5 device connections",
        "Standard neural processing",
        "Email support",
        "Basic analytics dashboard",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      originalPrice: "$799",
      period: "per month",
      description: "Ideal for professionals and medium teams",
      features: [
        "Advanced thought-to-text conversion",
        "Up to 20 device connections",
        "Enhanced neural processing",
        "Priority support",
        "Advanced analytics dashboard",
        "Up to 10 user accounts",
        "API access",
        "Custom neural models"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      originalPrice: "$1599",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Premium thought-to-text conversion",
        "Unlimited device connections",
        "Quantum neural processing",
        "24/7 dedicated support",
        "Enterprise analytics dashboard",
        "Unlimited user accounts",
        "Full API access",
        "Custom neural models",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Healthcare & Medical",
      description: "Enable communication for patients with locked-in syndrome, ALS, and other conditions that limit speech.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Patient Communication", "Medical Diagnostics", "Treatment Monitoring", "Rehabilitation Support"]
    },
    {
      title: "Accessibility & Inclusion",
      description: "Provide independence and communication tools for individuals with physical disabilities.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Assistive Technology", "Communication Aids", "Environmental Control", "Social Interaction"]
    },
    {
      title: "Gaming & Entertainment",
      description: "Revolutionary gaming experience with mind-controlled interfaces and immersive virtual reality.",
      icon: <Gamepad2 className="w-6 h-6" />,
      benefits: ["Mind-Controlled Games", "VR Integration", "Immersive Experiences", "Accessibility Gaming"]
    },
    {
      title: "Professional Productivity",
      description: "Enhance productivity with thought-based document creation, email composition, and task management.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Document Creation", "Email Composition", "Task Management", "Meeting Notes"]
    },
    {
      title: "Research & Development",
      description: "Advanced research tools for neuroscience, psychology, and human-computer interaction studies.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Neural Research", "Data Collection", "Pattern Analysis", "Scientific Studies"]
    },
    {
      title: "Creative Arts",
      description: "Unlock new creative possibilities with thought-based music composition, art creation, and design.",
      icon: <Music className="w-6 h-6" />,
      benefits: ["Music Composition", "Digital Art", "Creative Writing", "Design Work"]
    }
  ];

  const technicalSpecs = [
    { spec: "Neural Signal Accuracy", value: "99.7%" },
    { spec: "Response Time", value: "< 50ms" },
    { spec: "Supported Languages", value: "50+" },
    { spec: "Device Compatibility", value: "Universal" },
    { spec: "Data Security", value: "Military Grade" },
    { spec: "Uptime SLA", value: "99.9%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO 
        title="Zion AI Neural Interface - Revolutionary Brain-Computer Interface | Zion Tech Group"
        description="Revolutionary brain-computer interface for thought-to-text conversion and mind control applications. Advanced neural signal processing with 99.7% accuracy. Transform communication and accessibility."
        keywords="neural interface, brain-computer interface, thought-to-text, mind control, accessibility, medical technology, neural signals, AI, machine learning, assistive technology"
        canonical="https://ziontechgroup.com/zion-ai-neural-interface"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Revolutionary Brain-Computer Interface</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Neural Interface
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary brain-computer interface for thought-to-text conversion and mind control applications. 
              Advanced neural signal processing with 99.7% accuracy. Transform communication and accessibility forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Your Neural Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            
            {/* Technical Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">{spec.value}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{spec.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Revolutionary Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of human-computer interaction with our advanced neural interface technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our neural interface technology is revolutionizing industries and improving lives worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Choose Your Plan
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your neural interface needs. All plans include our core technology with varying levels of features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25' 
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the neural interface revolution. Contact us today for a personalized demonstration and consultation.
              </p>
              
              {/* Contact Details */}
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
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your Neural Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZionAINeuralInterfacePage;