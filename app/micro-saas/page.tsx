import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Brain, Mic, Globe, Monitor, Sparkles, Award, TrendingUp, Target, FileText, MessageSquare, Calculator, Share, Headphones, Smartphone, Laptop, Cpu, Wifi, Lock, Server, HardDrive, Network, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package, Receipt, ClipboardList, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'zion-ai-neural-interface',
      title: 'Zion AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control with 99.7% accuracy.',
      icon: Brain,
      features: ['Thought-to-Text Conversion', 'Mind Control Interface', 'Neural Pattern Recognition', 'Real-time Processing'],
      price: 'Starting at $199/month',
      category: 'AI Innovation',
      rating: 4.9,
      reviews: 1247,
      featured: true
    },
    {
      id: 'ai-voice-cloning-studio',
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice synthesis with 95% accuracy and multi-language support for content creators.',
      icon: Mic,
      features: ['Voice Cloning', 'Multi-language Support', 'Emotion Control', 'Real-time Synthesis'],
      price: 'Starting at $29/month',
      category: 'AI Content',
      rating: 4.8,
      reviews: 892,
      featured: true
    },
    {
      id: 'ai-quantum-financial-oracle',
      title: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial predictions with 99.7% accuracy for market analysis and trading.',
      icon: BarChart3,
      features: ['Quantum Predictions', 'Market Analysis', 'Risk Assessment', 'Real-time Alerts'],
      price: 'Starting at $199/month',
      category: 'Financial AI',
      rating: 4.9,
      reviews: 1156,
      featured: true
    },
    {
      id: 'ai-space-mission-optimizer',
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
      id: 'ai-holographic-workspace',
      title: 'AI Holographic Workspace',
      description: '3D holographic interface for immersive remote collaboration and data visualization.',
      icon: Monitor,
      features: ['3D Holographic Display', 'Remote Collaboration', 'Data Visualization', 'Gesture Control'],
      price: 'Starting at $399/month',
      category: 'Immersive Tech',
      rating: 4.8,
      reviews: 743,
      featured: true
    },
    {
      id: 'quantum-data-encryption-vault',
      title: 'Quantum Data Encryption Vault',
      description: 'Unbreakable quantum encryption for sensitive data with zero-knowledge architecture.',
      icon: Shield,
      features: ['Quantum Encryption', 'Zero-Knowledge Architecture', 'Data Sovereignty', 'Compliance Ready'],
      price: 'Starting at $599/month',
      category: 'Security',
      rating: 4.9,
      reviews: 567,
      featured: true
    },
    {
      id: 'ai-climate-prediction-engine',
      title: 'AI Climate Prediction Engine',
      description: 'Advanced climate modeling with 98.5% accuracy for weather and environmental forecasting.',
      icon: Globe,
      features: ['Climate Modeling', 'Weather Prediction', 'Environmental Analysis', 'Long-term Forecasting'],
      price: 'Starting at $299/month',
      category: 'Environmental AI',
      rating: 4.7,
      reviews: 234,
      featured: false
    },
    {
      id: 'ai-neural-memory-assistant',
      title: 'Neural Memory Assistant',
      description: 'AI-powered memory enhancement and knowledge management system for professionals.',
      icon: Brain,
      features: ['Memory Enhancement', 'Knowledge Management', 'Learning Acceleration', 'Recall Optimization'],
      price: 'Starting at $149/month',
      category: 'Cognitive AI',
      rating: 4.6,
      reviews: 891,
      featured: false
    },
    {
      id: 'ai-drug-discovery-pro',
      title: 'AI Drug Discovery Pro',
      description: 'Accelerated pharmaceutical research with AI-powered molecular analysis and drug design.',
      icon: BarChart3,
      features: ['Molecular Analysis', 'Drug Design', 'Clinical Trial Optimization', 'Side Effect Prediction'],
      price: 'Starting at $999/month',
      category: 'Pharmaceutical AI',
      rating: 4.9,
      reviews: 156,
      featured: false
    },
    {
      id: 'ai-telepathic-interface',
      title: 'Telepathic Interface System',
      description: 'Direct neural communication interface for seamless human-AI interaction.',
      icon: Brain,
      features: ['Neural Communication', 'Direct AI Interface', 'Thought Processing', 'Mental Commands'],
      price: 'Starting at $799/month',
      category: 'Neural Interface',
      rating: 4.8,
      reviews: 278,
      featured: false
    },
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      icon: BarChart3,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Business Intelligence', 'Custom Reports'],
      price: 'Starting at $299/month',
      category: 'Business Intelligence',
      rating: 4.8,
      reviews: 1156,
      featured: false
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Security Monitoring', 'Incident Management'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity',
      rating: 4.9,
      reviews: 1247,
      featured: false
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and backup solution with enterprise-grade encryption.',
      icon: Cloud,
      features: ['End-to-end Encryption', 'Automated Backups', 'File Versioning', 'Team Collaboration'],
      price: 'Starting at $79/month',
      category: 'Cloud Storage',
      rating: 4.7,
      reviews: 892,
      featured: false
    },
    {
      id: 'ai-content-studio',
      title: 'AI Content Studio',
      description: 'Comprehensive content creation platform with AI-powered writing, design, and video generation.',
      icon: FileText,
      features: ['AI Writing', 'Design Generation', 'Video Creation', 'SEO Optimization'],
      price: 'Starting at $199/month',
      category: 'Content Creation',
      rating: 4.8,
      reviews: 743,
      featured: false
    },
    {
      id: 'ai-crm-assistant',
      title: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered automation and insights.',
      icon: Users,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      price: 'Starting at $129/month',
      category: 'CRM',
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
      category: 'Marketing',
      rating: 4.8,
      reviews: 891,
      featured: false
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Smart project management tool with AI-powered resource allocation and timeline optimization.',
      icon: Settings,
      features: ['AI Task Prioritization', 'Resource Optimization', 'Timeline Forecasting', 'Team Collaboration'],
      price: 'Starting at $159/month',
      category: 'Project Management',
      rating: 4.6,
      reviews: 423,
      featured: false
    },
    {
      id: 'ai-accounting-assistant',
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting automation with expense tracking, invoice processing, and financial insights.',
      icon: Calculator,
      features: ['Expense Tracking', 'Invoice Processing', 'Financial Reporting', 'Tax Preparation'],
      price: 'Starting at $30/month',
      category: 'Finance',
      rating: 4.7,
      reviews: 567,
      featured: false
    },
    {
      id: 'ai-social-scheduler',
      title: 'AI Social Scheduler',
      description: 'AI-powered social media management with content optimization and performance analytics.',
      icon: Share,
      features: ['Multi-platform Posting', 'Content Optimization', 'Optimal Timing', 'Performance Analytics'],
      price: 'Starting at $18/month',
      category: 'Social Media',
      rating: 4.5,
      reviews: 1234,
      featured: false
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Pro',
      description: 'Intelligent customer service automation with multilingual support and sentiment analysis.',
      icon: Headphones,
      features: ['24/7 Support', 'Multilingual Support', 'Sentiment Analysis', 'Escalation Management'],
      price: 'Starting at $45/month',
      category: 'Customer Service',
      rating: 4.8,
      reviews: 892,
      featured: false
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Visual workflow builder with AI optimization and integration capabilities for business processes.',
      icon: Workflow,
      features: ['Visual Workflow Builder', 'AI Process Optimization', '500+ Integrations', 'Error Handling'],
      price: 'Starting at $22/month',
      category: 'Automation',
      rating: 4.6,
      reviews: 1347,
      featured: false
    }
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Data Security", value: "100%", icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions. AI-powered analytics, security, content creation, automation, and more. Start your free trial today!"
        keywords="micro saas, business software, AI tools, analytics, security, automation, productivity, CRM, marketing, cloud storage"
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
            <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Powerful, AI-driven micro SAAS tools designed to transform your business operations. 
            Choose from 20+ specialized solutions to boost productivity, security, and growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">Free 14-day trial</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">No setup fees</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm">24/7 support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
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
                Featured Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
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
              View All Micro SAAS Solutions
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
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
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;