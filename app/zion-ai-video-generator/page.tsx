import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Video, 
  Play, 
  Download, 
  Upload, 
  Edit, 
  Settings, 
  Sparkles, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  Monitor, 
  Brain, 
  Camera, 
  Mic, 
  Palette, 
  Layers, 
  Workflow, 
  Clock, 
  BarChart3, 
  TrendingUp, 
  Target, 
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
  Heart, 
  Lungs, 
  Stomach, 
  Liver, 
  Kidney, 
  Eye, 
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

export default function ZionAiVideoGenerator() {
  const features = [
    {
      title: "AI Video Generation",
      description: "Create professional videos from text prompts using advanced AI algorithms that understand context and visual storytelling.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Text-to-video conversion", "Context understanding", "Visual storytelling", "Professional quality"]
    },
    {
      title: "Voice Synthesis",
      description: "Generate natural-sounding voiceovers in multiple languages with customizable tone, speed, and emotion.",
      icon: <Mic className="w-8 h-8" />,
      benefits: ["Multi-language support", "Customizable voice", "Emotion control", "Natural speech patterns"]
    },
    {
      title: "Auto-Editing",
      description: "Intelligent video editing with automatic cuts, transitions, and effects based on content analysis.",
      icon: <Edit className="w-8 h-8" />,
      benefits: ["Smart cuts", "Auto-transitions", "Effect application", "Timing optimization"]
    },
    {
      title: "Template Library",
      description: "Access hundreds of professional video templates for different industries and use cases.",
      icon: <Layers className="w-8 h-8" />,
      benefits: ["Industry templates", "Customizable designs", "Brand consistency", "Quick deployment"]
    },
    {
      title: "Multi-Format Export",
      description: "Export videos in various formats optimized for different platforms and devices.",
      icon: <Download className="w-8 h-8" />,
      benefits: ["Platform optimization", "Multiple formats", "Quality options", "Batch processing"]
    },
    {
      title: "Real-time Collaboration",
      description: "Collaborate with team members in real-time with live editing and commenting features.",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Live editing", "Team comments", "Version control", "Permission management"]
    }
  ];

  const videoStats = [
    { number: "10x", label: "Faster Video Creation", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Video Templates", icon: <Layers className="w-6 h-6" /> },
    { number: "100+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "4K", label: "Ultra HD Quality", icon: <Camera className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses and content creators",
      features: [
        "Up to 10 videos/month",
        "Basic templates",
        "Standard quality export",
        "Email support",
        "5GB storage",
        "Basic voice synthesis"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for marketing agencies and growing businesses",
      features: [
        "Up to 50 videos/month",
        "Premium templates",
        "4K quality export",
        "Priority support",
        "50GB storage",
        "Advanced voice synthesis",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited videos",
        "All templates",
        "8K quality export",
        "24/7 dedicated support",
        "Unlimited storage",
        "Premium voice synthesis",
        "White-label options",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We can now produce professional videos 10x faster than before, saving us thousands of hours monthly.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Brand",
      role: "Marketing Manager",
      content: "The AI voice synthesis is incredibly natural and the auto-editing features are game-changing. Our video production costs have decreased by 70% while quality improved significantly.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Wilson",
      company: "Tech Startup",
      role: "CEO",
      content: "The template library and real-time collaboration features have transformed how our team creates marketing content. The ROI has been exceptional - we've seen 300% increase in engagement.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create compelling product demos, promotional videos, and social media content",
      icon: <Target className="w-6 h-6" />,
      examples: ["Product launches", "Social media ads", "Brand storytelling", "Customer testimonials"]
    },
    {
      title: "Training Content",
      description: "Generate educational videos, tutorials, and onboarding content for your team",
      icon: <Users className="w-6 h-6" />,
      examples: ["Employee training", "Customer tutorials", "Process documentation", "Skill development"]
    },
    {
      title: "Sales Presentations",
      description: "Create dynamic sales presentations and pitch videos that convert",
      icon: <TrendingUp className="w-6 h-6" />,
      examples: ["Sales pitches", "Client presentations", "Proposal videos", "Case studies"]
    },
    {
      title: "Social Media Content",
      description: "Generate engaging content for all social media platforms automatically",
      icon: <Globe className="w-6 h-6" />,
      examples: ["Instagram stories", "TikTok videos", "YouTube content", "LinkedIn posts"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator Pro - AI-Powered Video Creation | Zion Tech Group</title>
        <meta
          name="description"
          content="Create professional videos with AI in minutes. Generate marketing videos, product demos, and social media content automatically. Starting at $299/month."
        />
        <meta
          name="keywords"
          content="AI video generator, video creation, AI video editing, automated video production, video marketing, content creation, AI voice synthesis"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Video className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">#1 AI Video Generator 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Zion AI Video Generator Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Create professional videos with AI in minutes. Generate marketing videos, product demos, 
                  and social media content automatically with our advanced AI technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {videoStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Video className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $299/month</h3>
                    <p className="text-gray-300">AI-powered video creation for your business</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span>AI video generation</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span>Voice synthesis</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span>Auto-editing</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      <span>Template library</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Powerful Video Creation Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Perfect for Every Use Case
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From marketing to training, create videos for any business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Flexible Video Creation Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-blue-500/50 shadow-blue-500/25' 
                      : 'border-white/20 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Trusted by Content Creators
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what video creators say about Zion AI Video Generator Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
                Ready to Create Amazing Videos?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators already using Zion AI Video Generator Pro to create 
                professional videos in minutes. Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-blue-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-blue-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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