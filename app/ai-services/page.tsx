import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Monitor, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package, Receipt, ClipboardList, Workflow, Sparkles, Award, TrendingUp, Target, FileText, MessageSquare, Settings, Headphones, Smartphone, Laptop, Cpu, Wifi, Lock, Server, Network, Phone as PhoneIcon, Voicemail as VoicemailIcon, Headset as HeadsetIcon, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIconIcon, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon, Package as PackageIcon, Receipt as ReceiptIcon, ClipboardList as ClipboardListIcon, Workflow as WorkflowIcon } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-neural-interface',
      title: 'AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control with 99.7% accuracy.',
      icon: Brain,
      features: ['Thought-to-Text Conversion', 'Mind Control Interface', 'Neural Pattern Recognition', 'Real-time Processing'],
      price: 'Starting at $199/month',
      category: 'Neural AI',
      rating: 4.9,
      reviews: 1247,
      featured: true
    },
    {
      id: 'ai-quantum-computing',
      title: 'AI Quantum Computing',
      description: 'Quantum-powered AI solutions for complex problem solving and optimization with exponential speed improvements.',
      icon: Zap,
      features: ['Quantum Algorithms', 'Exponential Speed', 'Complex Optimization', 'Quantum Machine Learning'],
      price: 'Starting at $999/month',
      category: 'Quantum AI',
      rating: 4.9,
      reviews: 423,
      featured: true
    },
    {
      id: 'ai-holographic-workspace',
      title: 'AI Holographic Workspace',
      description: '3D holographic interface for immersive remote collaboration and data visualization.',
      icon: Monitor,
      features: ['3D Holographic Display', 'Remote Collaboration', 'Data Visualization', 'Gesture Control'],
      price: 'Starting at $399/month',
      category: 'Immersive AI',
      rating: 4.8,
      reviews: 743,
      featured: true
    },
    {
      id: 'ai-climate-prediction',
      title: 'AI Climate Prediction Engine',
      description: 'Advanced climate modeling with 98.5% accuracy for weather and environmental forecasting.',
      icon: Globe,
      features: ['Climate Modeling', 'Weather Prediction', 'Environmental Analysis', 'Long-term Forecasting'],
      price: 'Starting at $299/month',
      category: 'Environmental AI',
      rating: 4.7,
      reviews: 234,
      featured: true
    },
    {
      id: 'ai-drug-discovery',
      title: 'AI Drug Discovery Pro',
      description: 'Accelerated pharmaceutical research with AI-powered molecular analysis and drug design.',
      icon: BarChart3,
      features: ['Molecular Analysis', 'Drug Design', 'Clinical Trial Optimization', 'Side Effect Prediction'],
      price: 'Starting at $999/month',
      category: 'Pharmaceutical AI',
      rating: 4.9,
      reviews: 156,
      featured: true
    },
    {
      id: 'ai-space-optimization',
      title: 'AI Space Mission Optimizer',
      description: 'Advanced space mission optimization with 99.9% trajectory accuracy for aerospace companies.',
      icon: Globe,
      features: ['Trajectory Optimization', 'Mission Planning', 'Risk Analysis', 'Fuel Efficiency'],
      price: 'Starting at $499/month',
      category: 'Aerospace AI',
      rating: 4.9,
      reviews: 423,
      featured: true
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Pro',
      description: 'Advanced analytics powered by artificial intelligence for data-driven insights and predictions.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
      price: 'Starting at $299/month',
      category: 'Business AI',
      rating: 4.8,
      reviews: 1156,
      featured: false
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Automated content creation using cutting-edge AI technology for all media types.',
      icon: Code,
      features: ['Blog Posts', 'Social Media', 'Marketing Copy', 'Video Scripts'],
      price: 'Starting at $199/month',
      category: 'Content AI',
      rating: 4.7,
      reviews: 892,
      featured: false
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Pro',
      description: 'Intelligent chatbots and automated customer service solutions with human-like interactions.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Smart Routing', 'Emotion Recognition'],
      price: 'Starting at $399/month',
      category: 'Customer AI',
      rating: 4.8,
      reviews: 1247,
      featured: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'AI-powered security solutions to protect your digital assets with advanced threat detection.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Behavioral Analysis'],
      price: 'Starting at $599/month',
      category: 'Security AI',
      rating: 4.9,
      reviews: 1156,
      featured: false
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Pro',
      description: 'Transform raw data into actionable business intelligence with advanced AI algorithms.',
      icon: Database,
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Predictive Modeling'],
      price: 'Starting at $349/month',
      category: 'Data AI',
      rating: 4.8,
      reviews: 743,
      featured: false
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Intelligence',
      description: 'Automated document analysis and processing solutions with advanced OCR and NLP.',
      icon: Mail,
      features: ['OCR Technology', 'Data Extraction', 'Automated Workflows', 'Document Classification'],
      price: 'Starting at $249/month',
      category: 'Document AI',
      rating: 4.7,
      reviews: 567,
      featured: false
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'End-to-end marketing automation with AI-driven personalization and campaign optimization.',
      icon: Target,
      features: ['Email Automation', 'Social Media', 'Lead Scoring', 'A/B Testing'],
      price: 'Starting at $199/month',
      category: 'Marketing AI',
      rating: 4.8,
      reviews: 891,
      featured: false
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Manager',
      description: 'Smart project management tool with AI-powered resource allocation and timeline optimization.',
      icon: Settings,
      features: ['AI Task Prioritization', 'Resource Optimization', 'Timeline Forecasting', 'Team Collaboration'],
      price: 'Starting at $159/month',
      category: 'Project AI',
      rating: 4.6,
      reviews: 423,
      featured: false
    },
    {
      id: 'ai-accounting',
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting automation with expense tracking, invoice processing, and financial insights.',
      icon: Calculator,
      features: ['Expense Tracking', 'Invoice Processing', 'Financial Reporting', 'Tax Preparation'],
      price: 'Starting at $30/month',
      category: 'Finance AI',
      rating: 4.7,
      reviews: 567,
      featured: false
    },
    {
      id: 'ai-social-media',
      title: 'AI Social Media Manager',
      description: 'AI-powered social media management with content optimization and performance analytics.',
      icon: Share,
      features: ['Multi-platform Posting', 'Content Optimization', 'Optimal Timing', 'Performance Analytics'],
      price: 'Starting at $18/month',
      category: 'Social AI',
      rating: 4.5,
      reviews: 1234,
      featured: false
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Visual workflow builder with AI optimization and integration capabilities for business processes.',
      icon: Workflow,
      features: ['Visual Workflow Builder', 'AI Process Optimization', '500+ Integrations', 'Error Handling'],
      price: 'Starting at $22/month',
      category: 'Automation AI',
      rating: 4.6,
      reviews: 1347,
      featured: false
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant Pro',
      description: 'Advanced conversational AI with natural language understanding and voice synthesis.',
      icon: Mic,
      features: ['Natural Language Processing', 'Voice Synthesis', 'Multi-language Support', 'Context Awareness'],
      price: 'Starting at $149/month',
      category: 'Voice AI',
      rating: 4.8,
      reviews: 789,
      featured: false
    },
    {
      id: 'ai-image-recognition',
      title: 'AI Image Recognition Pro',
      description: 'Advanced computer vision with object detection, facial recognition, and image analysis.',
      icon: Image,
      features: ['Object Detection', 'Facial Recognition', 'OCR Technology', 'Image Classification'],
      price: 'Starting at $179/month',
      category: 'Vision AI',
      rating: 4.9,
      reviews: 1123,
      featured: false
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'Intelligent equipment monitoring with failure prediction and maintenance scheduling.',
      icon: Settings,
      features: ['Failure Prediction', 'Maintenance Scheduling', 'Sensor Data Analysis', 'Cost Optimization'],
      price: 'Starting at $199/month',
      category: 'IoT AI',
      rating: 4.7,
      reviews: 654,
      featured: false
    },
    {
      id: 'ai-sentiment-analysis',
      title: 'AI Sentiment Analysis Pro',
      description: 'Advanced sentiment analysis with emotion detection and brand monitoring.',
      icon: Heart,
      features: ['Multi-language Sentiment', 'Emotion Detection', 'Brand Monitoring', 'Trend Analysis'],
      price: 'Starting at $129/month',
      category: 'Analytics AI',
      rating: 4.6,
      reviews: 987,
      featured: false
    }
  ];

  const stats = [
    { label: "AI Solutions Deployed", value: "500+", icon: <Brain className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Process Automation", value: "85%", icon: <Zap className="w-6 h-6" /> },
    { label: "Cost Reduction", value: "40%", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Tech Innovations Inc",
      role: "Chief Data Officer",
      content: "The AI Analytics Dashboard Pro has revolutionized our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "CTO",
      content: "The AI Cybersecurity Suite Pro is incredibly sophisticated. We've had zero security breaches since implementation, and our compliance scores are perfect.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "AI Content Generation Pro has transformed our content strategy. We're producing 20x more content with better quality and higher engagement rates.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with advanced artificial intelligence."
        keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, AI consulting, AI development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">20+ AI Services Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Harness the power of artificial intelligence to transform your business. 
            From machine learning to natural language processing, we provide cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">20+ AI services</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">500+ models trained</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">99.9% accuracy rate</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">24/7 AI monitoring</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get AI Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Featured AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most advanced AI solutions trusted by leading organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={`/${service.id}`}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400 text-center">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                    <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform inline" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group"
            >
              View All AI Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our advanced AI solutions. Get a free consultation and discover the possibilities.
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
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <DollarSign className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;