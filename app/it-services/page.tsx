import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Server, Cloud, Shield, Code, Database, Network, 
  Smartphone, Globe, Zap, Target, CheckCircle, Star, Clock, 
  Users, TrendingUp, MessageCircle, Mail, Phone, MapPin, 
  Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, 
  Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, 
  SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, 
  ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, 
  Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, 
  Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, 
  Minimize, Square, Circle, Triangle, Hexagon, Octagon, 
  Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, 
  Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, 
  DollarSign, Cpu, Rocket, Brain, CircuitBoard, Atom, Satellite, 
  Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, 
  Filter, Download, Upload, Share, Lightbulb, Monitor, Award, 
  Sparkles, Layers, Target as TargetIcon, Settings, Wrench as WrenchIcon
} from 'lucide-react'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      price: 'Starting at $2,500/project',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat protection.',
      price: 'Starting at $399/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Incident response', 'Compliance support'],
      link: '/cybersecurity',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-400" />,
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications with cutting-edge technologies.',
      price: 'Starting at $1,500/project',
      features: ['React/Next.js/Vue.js', 'Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      link: '/web-development',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android with native and cross-platform solutions.',
      price: 'Starting at $3,000/project',
      features: ['iOS/Android native', 'React Native/Flutter', 'App Store optimization', 'Push notifications', 'Offline functionality'],
      link: '/mobile-development',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Database Management',
      description: 'Optimize and manage your databases with expert administration and performance tuning.',
      price: 'Starting at $299/month',
      features: ['MySQL/PostgreSQL/MongoDB', 'Performance optimization', 'Backup & recovery', 'Security hardening', 'Scalability planning'],
      link: '/database-management',
      popular: false
    },
    {
      icon: <Network className="w-8 h-8 text-blue-400" />,
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure for optimal performance and security.',
      price: 'Starting at $1,200/project',
      features: ['Network design', 'Hardware setup', 'Security configuration', 'Performance monitoring', 'Troubleshooting'],
      link: '/network-infrastructure',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-400" />,
      title: 'DevOps Solutions',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      price: 'Starting at $499/month',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing'],
      link: '/devops',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: 'API Development',
      description: 'Build robust and scalable APIs for seamless integration between systems and applications.',
      price: 'Starting at $1,800/project',
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Rate limiting', 'Authentication & authorization'],
      link: '/api-development',
      popular: false
    }
  ]

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Technologies Mastered', icon: <Code className="w-6 h-6 text-orange-400" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-pink-400" /> }
  ]

  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Linode'],
      icon: <Cloud className="w-6 h-6 text-cyan-400" />
    },
    {
      category: 'Programming Languages',
      items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      icon: <Code className="w-6 h-6 text-emerald-400" />
    },
    {
      category: 'Frameworks',
      items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Django'],
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      icon: <Database className="w-6 h-6 text-orange-400" />
    },
    {
      category: 'DevOps Tools',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform'],
      icon: <Settings className="w-6 h-6 text-pink-400" />
    },
    {
      category: 'Security',
      items: ['OWASP', 'Penetration Testing', 'SSL/TLS', 'Firewall', 'VPN'],
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure, identify requirements, and create a detailed project plan.',
      icon: <Search className="w-6 h-6 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design scalable, secure, and efficient solutions tailored to your business needs.',
      icon: <Target className="w-6 h-6 text-emerald-400" />
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build and deploy your solution using industry best practices and cutting-edge technologies.',
      icon: <Code className="w-6 h-6 text-purple-400" />
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing ensures your solution is robust, secure, and performs optimally.',
      icon: <CheckCircle className="w-6 h-6 text-orange-400" />
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Smooth deployment with zero downtime and comprehensive documentation for your team.',
      icon: <Rocket className="w-6 h-6 text-pink-400" />
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, monitoring, and maintenance to keep your systems running smoothly.',
      icon: <Settings className="w-6 h-6 text-blue-400" />
    }
  ]

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Enterprise Solutions Inc.',
      content: 'The cloud migration was seamless. We reduced our infrastructure costs by 40% while improving performance.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Wang',
      company: 'TechStartup Co.',
      content: 'Their mobile app development exceeded our expectations. The app has 4.8 stars on both stores.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'Robert Martinez',
      company: 'Financial Services Ltd.',
      content: 'The cybersecurity implementation gave us peace of mind. We passed our compliance audit with flying colors.',
      rating: 5,
      avatar: 'RM'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive IT services including cloud migration, cybersecurity, web development, mobile apps, and DevOps. 99.9% uptime guarantee." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, web development, mobile development, DevOps, database management, network infrastructure, API development" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT Services - Comprehensive Technology Solutions | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive IT services including cloud migration, cybersecurity, web development, mobile apps, and DevOps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/it-services-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Comprehensive Technology Solutions | Zion Tech Group" />
        <meta name="twitter:description" content="Transform your business with our comprehensive IT services including cloud migration, cybersecurity, web development, mobile apps, and DevOps." />
        <meta name="twitter:image" content="https://ziontechgroup.com/it-services-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services",
            "description": "Comprehensive IT services including cloud migration, cybersecurity, web development, mobile development, and DevOps solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "299",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "299",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "serviceType": "Information Technology Services",
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
              <Server className="w-4 h-4" />
              <span>IT Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Comprehensive
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                IT Services
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, 
              we deliver technology solutions that drive growth and efficiency.
              <br />
              <span className="text-cyan-400 font-semibold">99.9% uptime guarantee.</span>
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
                to="/pricing" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Pricing</span>
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
                Our IT solutions power businesses worldwide with proven results and exceptional performance.
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

        {/* IT Services Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive IT solutions designed to modernize your infrastructure and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
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

        {/* Technologies Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Master</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center space-x-3 mb-4">
                    {tech.icon}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {tech.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Real results from real businesses using our IT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
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
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">IT Infrastructure?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join the 1,200+ companies already using our IT solutions to drive growth and efficiency. 
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