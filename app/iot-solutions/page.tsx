import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, 
  BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, TrendingUp, 
  Sparkles, Layers, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, Atom, 
  Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, 
  Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, 
  Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, 
  VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, 
  ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, 
  Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, 
  Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, 
  Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, 
  FileText, Package 
} from 'lucide-react'

export default function IoTSolutionsPage() {
  const iotServices = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: 'IoT Integration Services',
      description: 'Seamlessly integrate IoT devices with existing systems and third-party applications.',
      features: ['API development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
      price: 'Starting at $249/month'
    }
  ]

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control',
      icon: <Wrench className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
      icon: <Building className="w-6 h-6 text-purple-400" />
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
      icon: <ShoppingCart className="w-6 h-6 text-orange-400" />
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>
        <meta name="description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="keywords" content="IoT solutions, internet of things, smart devices, IoT analytics, device management, edge computing, IoT security, connected devices" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" />
        <meta property="og:description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/iot-solutions" />
        <meta property="og:image" content="https://ziontechgroup.com/iot-solutions-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IoT Solutions - Zion Tech Group | Smart Device Management & Analytics" />
        <meta name="twitter:description" content="Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms. Transform your business with smart connected devices." />
        <meta name="twitter:image" content="https://ziontechgroup.com/iot-solutions-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IoT Solutions",
            "description": "Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            }
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
              <Network className="w-4 h-4" />
              <span>IoT Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Connect Everything with
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Smart IoT Solutions
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
              <br />
              <span className="text-cyan-400 font-semibold">From device management to advanced analytics.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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

        {/* Services Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IoT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iotServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IoT Solutions?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our IoT solutions deliver measurable results and provide a competitive advantage for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
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
                    Ready to Connect Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">World?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/pricing" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>View Pricing</span>
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