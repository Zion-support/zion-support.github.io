import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Brain, 
  Shield, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Eye, 
  Heart, 
  MessageSquare, 
  Phone, 
  Globe, 
  Monitor, 
  Sparkles, 
  CheckCircle, 
  Star, 
  Award, 
  Zap, 
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

export default function ZionAiEmailAnalyzer() {
  const features = [
    {
      title: "AI Email Optimization",
      description: "Automatically analyze and optimize email content for better open rates, click-through rates, and engagement.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Subject line optimization", "Content analysis", "A/B testing suggestions", "Engagement prediction"]
    },
    {
      title: "Spam Detection",
      description: "Advanced AI-powered spam detection to protect your inbox from malicious emails and phishing attempts.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Phishing detection", "Malware scanning", "Spam filtering", "Threat analysis"]
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze email sentiment to understand customer emotions and improve communication strategies.",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Emotion detection", "Tone analysis", "Sentiment tracking", "Response suggestions"]
    },
    {
      title: "Response Suggestions",
      description: "Get AI-powered response suggestions based on email content and context for faster communication.",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: ["Smart responses", "Context awareness", "Tone matching", "Template suggestions"]
    },
    {
      title: "Email Analytics",
      description: "Comprehensive analytics dashboard to track email performance, trends, and communication patterns.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance metrics", "Trend analysis", "Communication insights", "Custom reports"]
    },
    {
      title: "Auto-Classification",
      description: "Automatically categorize emails by type, priority, and action required for better organization.",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Smart categorization", "Priority scoring", "Action suggestions", "Workflow automation"]
    }
  ];

  const emailStats = [
    { number: "98%", label: "Spam Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "40%", label: "Increase in Open Rates", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Time Savings", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Analysis", icon: <Eye className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 1,000 emails/month",
        "Basic spam detection",
        "Standard analytics",
        "Email support",
        "5GB storage",
        "Basic optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 emails/month",
        "Advanced spam detection",
        "Sentiment analysis",
        "Priority support",
        "25GB storage",
        "Advanced analytics",
        "Response suggestions",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited emails",
        "AI-powered optimization",
        "Real-time analysis",
        "24/7 dedicated support",
        "Unlimited storage",
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
      company: "Marketing Agency",
      role: "Email Marketing Manager",
      content: "Zion AI Email Analyzer has revolutionized our email campaigns. The optimization suggestions increased our open rates by 40% and click-through rates by 25%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Tech Startup",
      role: "Customer Success Manager",
      content: "The sentiment analysis and response suggestions are game-changers. We can now respond to customer emails faster and with better tone matching.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Store",
      role: "Support Manager",
      content: "The spam detection and auto-classification features have saved us hours daily. Our team can now focus on important emails while the AI handles the rest.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      title: "Email Marketing",
      description: "Optimize email campaigns for better engagement and conversion rates",
      icon: <Target className="w-6 h-6" />,
      examples: ["Subject line optimization", "Content analysis", "A/B testing", "Engagement tracking"]
    },
    {
      title: "Customer Support",
      description: "Improve response times and quality with AI-powered suggestions",
      icon: <MessageSquare className="w-6 h-6" />,
      examples: ["Response suggestions", "Sentiment analysis", "Priority scoring", "Auto-routing"]
    },
    {
      title: "Security",
      description: "Protect against spam, phishing, and malicious emails",
      icon: <Shield className="w-6 h-6" />,
      examples: ["Spam filtering", "Phishing detection", "Threat analysis", "Malware scanning"]
    },
    {
      title: "Business Communication",
      description: "Enhance internal and external communication efficiency",
      icon: <Mail className="w-6 h-6" />,
      examples: ["Email optimization", "Tone analysis", "Auto-classification", "Workflow automation"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer - AI-Powered Email Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="AI-powered email analysis for better communication, spam detection, and response optimization. Starting at $149/month."
        />
        <meta
          name="keywords"
          content="AI email analyzer, email optimization, spam detection, sentiment analysis, email intelligence, communication AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-analyzer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
                  <Mail className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-orange-400 text-sm font-medium">#1 AI Email Analyzer 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                    Zion AI Email Analyzer
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  AI-powered email analysis for better communication, spam detection, and response optimization. 
                  Transform your email experience with intelligent automation and insights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {emailStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $149/month</h3>
                    <p className="text-gray-300">AI-powered email intelligence for your business</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Email optimization</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Spam detection</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Sentiment analysis</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                      <span>Response suggestions</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Powerful Email Intelligence Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize, secure, and analyze your email communication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Perfect for Every Email Need
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From marketing to security, enhance your email communication across all use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-orange-400 rounded-full mr-2 flex-shrink-0"></div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Flexible Email Analysis Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email analysis needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-orange-500/50 shadow-orange-500/25' 
                      : 'border-white/20 hover:border-orange-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Trusted by Email Professionals
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what email marketing and communication professionals say about Zion AI Email Analyzer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
                Ready to Transform Your Email Communication?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals already using Zion AI Email Analyzer to optimize 
                their email communication and improve engagement. Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-orange-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-orange-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-orange-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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