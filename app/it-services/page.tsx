import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Server, Cloud, Shield, Code, Database, Network, Monitor, 
  Smartphone, Wrench, BarChart3, Zap, CheckCircle, Star, Clock, Users, 
  TrendingUp, Sparkles, Layers, Target, Award, Lightbulb, CircuitBoard, 
  Atom, Satellite, Globe, Mail, Phone, MapPin, DollarSign, Rocket, 
  Lock, Cpu, Brain, MessageCircle, Calendar, Timer, Battery, Wifi2, 
  Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, 
  Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, 
  ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, 
  Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, 
  RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, 
  Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, 
  Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package
} from '../components/Icons'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies including React, Node.js, and cloud-native architectures.',
      price: 'Starting at $2,500/project',
      features: ['Custom development', 'Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      link: '/web-development',
      category: 'Development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
      price: 'Starting at $3,500/project',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications', 'Offline functionality'],
      link: '/mobile-development',
      category: 'Development'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and enhanced security.',
      price: 'Starting at $1,500/migration',
      features: ['Zero downtime migration', 'Security hardening', 'Cost optimization', 'Performance monitoring', '24/7 support'],
      link: '/cloud-migration',
      category: 'Infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including penetration testing, vulnerability assessment, and compliance.',
      price: 'Starting at $399/month',
      features: ['Penetration testing', 'Vulnerability scanning', 'Security monitoring', 'Compliance audit', 'Incident response'],
      link: '/cybersecurity',
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance for MySQL, PostgreSQL, MongoDB, and more.',
      price: 'Starting at $299/month',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      link: '/database-management',
      category: 'Data Services'
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-400" />,
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure with high availability and security.',
      price: 'Starting at $1,200/setup',
      features: ['Network design', 'Hardware installation', 'Security configuration', 'Performance monitoring', 'Maintenance'],
      link: '/network-infrastructure',
      category: 'Infrastructure'
    },
    {
      icon: <Wrench className="w-8 h-8 text-pink-400" />,
      title: 'DevOps Solutions',
      description: 'Automate deployment, monitoring, and scaling with CI/CD pipelines and infrastructure as code.',
      price: 'Starting at $499/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & alerting', 'Auto-scaling'],
      link: '/devops',
      category: 'Operations'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      price: 'Starting at $349/month',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting', 'Data integration'],
      link: '/data-analytics',
      category: 'Data Services'
    },
    {
      icon: <Server className="w-8 h-8 text-teal-400" />,
      title: 'Server Management',
      description: 'Complete server administration including setup, monitoring, maintenance, and optimization.',
      price: 'Starting at $199/month',
      features: ['Server setup', 'Performance monitoring', 'Security updates', 'Backup management', '24/7 monitoring'],
      link: '/server-management',
      category: 'Infrastructure'
    },
    {
      icon: <Globe className="w-8 h-8 text-rose-400" />,
      title: 'API Development',
      description: 'Build robust RESTful APIs and GraphQL endpoints with comprehensive documentation and testing.',
      price: 'Starting at $1,800/project',
      features: ['RESTful APIs', 'GraphQL endpoints', 'API documentation', 'Rate limiting', 'Authentication'],
      link: '/api-development',
      category: 'Development'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: 'IT Security Audit',
      description: 'Comprehensive security assessment and compliance audit for your IT infrastructure.',
      price: 'Starting at $2,500/audit',
      features: ['Security assessment', 'Compliance audit', 'Risk analysis', 'Remediation plan', 'Follow-up support'],
      link: '/it-security-audit',
      category: 'Security'
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-400" />,
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and proactive maintenance to keep your systems running smoothly.',
      price: 'Starting at $149/month',
      features: ['24/7 support', 'Proactive monitoring', 'Issue resolution', 'System updates', 'Performance optimization'],
      link: '/it-support',
      category: 'Support'
    }
  ]

  const categories = [
    'All Services',
    'Development',
    'Infrastructure',
    'Security',
    'Data Services',
    'Operations',
    'Support'
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Technologies Mastered', icon: <Code className="w-6 h-6 text-purple-400" /> },
    { number: '200+', label: 'Happy Clients', icon: <Users className="w-6 h-6 text-pink-400" /> },
    { number: '5x', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-orange-400" /> }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Terraform', icon: '🏗️' }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional IT services including web development, cloud migration, cybersecurity, and infrastructure management. 99.9% uptime, 24/7 support." />
        <meta name="keywords" content="IT services, web development, mobile development, cloud migration, cybersecurity, DevOps, database management, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT Services - Comprehensive Technology Solutions | Zion Tech Group" />
        <meta property="og:description" content="Professional IT services including web development, cloud migration, cybersecurity, and infrastructure management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-it-services.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Comprehensive Technology Solutions" />
        <meta name="twitter:description" content="Professional IT services including web development, cloud migration, cybersecurity, and infrastructure management." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-it-services.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services",
            "description": "Comprehensive IT services including web development, cloud migration, cybersecurity, and infrastructure management",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "12+",
              "lowPrice": "149",
              "highPrice": "3500",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
            <Server className="w-4 h-4" />
            <span>Professional IT Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            IT Services That
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Power Your Business
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            From web development to cloud migration, we provide comprehensive IT solutions 
            that drive innovation and growth for your business.
            <br />
            <span className="text-blue-400 font-semibold">Built for scale, designed for success.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions deliver measurable results with proven reliability and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
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

      {/* Technologies Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose from our extensive range of IT services designed to address every aspect of your technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-blue-400">
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
                    className="block w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your Technology with <span className="bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">Expert IT Services</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join hundreds of businesses already using our IT solutions to streamline operations, 
                  enhance security, and drive growth. Get started with a free consultation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Consultation</span>
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
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}