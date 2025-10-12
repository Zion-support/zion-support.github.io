import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Brain, Bot, BarChart3, Shield, Zap, Target, CheckCircle, 
  Star, Clock, Users, Globe, TrendingUp, MessageCircle, Mail, Phone, 
  MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, 
  Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, 
  SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, 
  Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, 
  Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, 
  Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, 
  Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, 
  Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign, Cpu, 
  Rocket, Network, Database, Code, Cloud, CircuitBoard, Atom, Satellite, 
  Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, 
  Download, Upload, Share, Lightbulb, Monitor, Server, Award, Sparkles, 
  Layers, Target as TargetIcon 
} from 'lucide-react'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer service and sales automation with our no-code platform.',
      price: 'Starting at $199/month',
      features: ['No-code builder', 'Multi-language support', 'Integration APIs', 'Real-time analytics', 'Custom training'],
      link: '/ai-chatbot-builder',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      price: 'Starting at $299/month',
      features: ['Real-time insights', 'Predictive analytics', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns with AI.',
      price: 'Starting at $99/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism check'],
      link: '/ai-content-generator',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      price: 'Starting at $499/month',
      features: ['Threat detection', 'Real-time monitoring', 'Automated response', 'Compliance reporting', '24/7 protection'],
      link: '/ai-cybersecurity-suite',
      popular: false
    },
    {
      icon: <Mic className="w-8 h-8 text-blue-400" />,
      title: 'AI Voice Assistant',
      description: 'Create intelligent voice assistants with natural language processing and speech synthesis.',
      price: 'Starting at $299/month',
      features: ['98% accuracy', 'Natural conversations', 'Multi-channel support', 'Custom integration', 'Voice analytics'],
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'AI Customer Insights',
      description: 'Transform customer data into actionable insights with AI-powered analytics and churn prediction.',
      price: 'Starting at $249/month',
      features: ['Customer segmentation', 'Churn prediction', 'Behavioral analysis', 'Personalization engine', 'ROI tracking'],
      link: '/ai-customer-insights',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI that learns and adapts to your workflow.',
      price: 'Starting at $199/month',
      features: ['Smart automation', 'Visual workflow builder', 'AI decision engine', '500+ integrations', 'Process optimization'],
      link: '/ai-workflow-automation',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      title: 'AI Blockchain Analytics',
      description: 'Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading with 95% accuracy.',
      price: 'Starting at $399/month',
      features: ['DeFi analytics', 'Smart contract analysis', 'Trading intelligence', 'Cross-chain support', 'Risk assessment'],
      link: '/ai-blockchain-analytics',
      popular: false
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '99.5%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Languages Supported', icon: <Globe className="w-6 h-6 text-purple-400" /> },
    { number: '300%', label: 'Average Efficiency Gain', icon: <TrendingUp className="w-6 h-6 text-orange-400" /> },
    { number: '1M+', label: 'Predictions Made Daily', icon: <BarChart3 className="w-6 h-6 text-pink-400" /> }
  ]

  const useCases = [
    {
      icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
      title: 'Customer Service',
      description: 'Automate customer support with intelligent chatbots that understand context and provide accurate responses.',
      benefits: ['24/7 availability', 'Reduced response time', 'Cost savings', 'Improved satisfaction']
    },
    {
      icon: <BarChart className="w-6 h-6 text-emerald-400" />,
      title: 'Business Intelligence',
      description: 'Extract insights from your data with AI-powered analytics and predictive modeling.',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Automated reporting', 'Competitive advantage']
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and automated security responses.',
      benefits: ['Real-time protection', 'Threat prevention', 'Compliance assurance', 'Reduced risk']
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that learns and adapts to your business needs.',
      benefits: ['Increased efficiency', 'Reduced errors', 'Cost optimization', 'Scalable solutions']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI chatbot reduced our customer service costs by 60% while improving response times.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'AI analytics helped us identify new revenue opportunities worth $2M annually.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureTech Solutions',
      content: 'The AI cybersecurity suite prevented 3 major security breaches in the first month.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including chatbots, analytics, content generation, cybersecurity, and automation. 99.5% accuracy, 24/7 support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, AI analytics, content generation, AI cybersecurity, workflow automation, business intelligence" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including chatbots, analytics, content generation, cybersecurity, and automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:image" content="https://ziontechgroup.com/ai-services-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group" />
        <meta name="twitter:description" content="Transform your business with our comprehensive AI services including chatbots, analytics, content generation, cybersecurity, and automation." />
        <meta name="twitter:image" content="https://ziontechgroup.com/ai-services-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Comprehensive artificial intelligence services including chatbots, analytics, content generation, cybersecurity, and automation.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "99",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "99",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "serviceType": "Artificial Intelligence Services",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Advanced
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                AI Services
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From intelligent chatbots to predictive analytics, we deliver AI that works.
              <br />
              <span className="text-cyan-400 font-semibold">99.5% accuracy guaranteed.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions power businesses worldwide with proven results and exceptional performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover how our AI solutions can transform different aspects of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Real results from real businesses using our AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Business with AI?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join the 500+ companies already using our AI solutions to drive growth and efficiency. 
                    Get started with a free consultation today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Get Free Consultation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/demo" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Schedule Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}