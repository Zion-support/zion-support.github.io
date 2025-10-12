import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Server, Cloud, Shield, Code, Database, Network, Smartphone, Globe, Zap, CheckCircle, Star, Clock, DollarSign, Users, TrendingUp, Brain, Cpu, Rocket, Target, Award, Lightbulb, Monitor, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, Mail, Phone, MapPin } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration & Infrastructure',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime. We support AWS, Azure, and Google Cloud with 99.99% uptime guarantee.',
      price: 'Starting at $2,500/month',
      features: ['Zero-downtime migration', 'Multi-cloud strategy', 'Cost optimization', '24/7 monitoring', 'Disaster recovery', 'Auto-scaling'],
      link: '/it-services/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management with real-time monitoring.',
      price: 'Starting at $1,800/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance management', 'Security audits', 'Incident response', 'Penetration testing'],
      link: '/cybersecurity'
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-400" />,
      title: 'Custom Software Development',
      description: 'Build scalable, secure applications with modern technologies. From web apps to mobile solutions, we deliver enterprise-grade software.',
      price: 'Starting at $150/hour',
      features: ['Full-stack development', 'Mobile apps', 'API development', 'Microservices', 'Agile methodology', 'Code quality assurance'],
      link: '/web-development'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Management & Analytics',
      description: 'Optimize your data infrastructure with advanced database solutions, data warehousing, and business intelligence platforms.',
      price: 'Starting at $1,200/month',
      features: ['Database optimization', 'Data warehousing', 'ETL processes', 'Business intelligence', 'Data governance', 'Performance tuning'],
      link: '/database-management'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure & 5G',
      description: 'Design and implement robust network infrastructure including 5G implementation, edge computing, and IoT connectivity solutions.',
      price: 'Starting at $3,500/month',
      features: ['5G implementation', 'Edge computing', 'IoT connectivity', 'Network security', 'Load balancing', 'SD-WAN solutions'],
      link: '/5g-implementation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: 'Mobile App Development',
      description: 'Create stunning mobile applications for iOS and Android with cross-platform solutions and native performance.',
      price: 'Starting at $8,000/project',
      features: ['iOS & Android apps', 'Cross-platform', 'UI/UX design', 'App store optimization', 'Push notifications', 'Offline capabilities'],
      link: '/mobile-development'
    }
  ]

  const itSolutions = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: 'DevOps & CI/CD',
      description: 'Automate your development pipeline with continuous integration and deployment solutions.',
      price: '$1,500/month',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as Code', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      link: '/devops'
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      price: '$5,000/project',
      features: ['Responsive design', 'SEO optimization', 'Performance optimization', 'E-commerce solutions', 'CMS development', 'API integration'],
      link: '/web-development'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems for seamless data flow and process automation.',
      price: '$2,200/month',
      features: ['API integration', 'Data synchronization', 'Legacy system modernization', 'Workflow automation', 'Real-time processing', 'Error handling'],
      link: '/system-integration'
    },
    {
      icon: <BarChart className="w-6 h-6 text-orange-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
      price: '$1,800/month',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Machine learning', 'Data mining', 'Report automation'],
      link: '/data-analytics'
    }
  ]

  const pricing = [
    {
      name: 'Basic IT Support',
      price: '$1,200',
      period: '/month',
      description: 'Essential IT services for small businesses',
      features: [
        '24/7 helpdesk support',
        'Basic security monitoring',
        'Software updates',
        'Email support',
        'Monthly reports',
        'Remote assistance'
      ],
      popular: false
    },
    {
      name: 'Professional IT',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'Everything in Basic',
        'Advanced security suite',
        'Cloud migration support',
        'Priority support',
        'Custom integrations',
        'Performance optimization',
        'Disaster recovery',
        'Compliance management'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT',
      price: '$5,000',
      period: '/month',
      description: 'Complete IT transformation for large enterprises',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom development',
        'White-label solutions',
        'Advanced analytics',
        'Multi-cloud management',
        'SLA guarantee',
        '24/7 on-site support'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless and our performance improved by 300%.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Chen',
      company: 'DataFlow Inc.',
      role: 'IT Director',
      content: 'Their cybersecurity solutions gave us complete peace of mind. We passed our compliance audit with flying colors.',
      rating: 5,
      avatar: 'LC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'InnovateLabs',
      role: 'CEO',
      content: 'The custom software development exceeded our expectations. The team delivered on time and within budget.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, custom software development, and network infrastructure. 99.99% uptime guarantee, 24/7 support." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, software development, network infrastructure, DevOps, database management, mobile development, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Server className="w-4 h-4" />
            <span>Professional IT Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            IT Services
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Excellence
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with comprehensive IT solutions including cloud migration, 
            cybersecurity, custom development, and network infrastructure.
            <br />
            <span className="text-cyan-400 font-semibold">99.99% uptime guarantee with 24/7 expert support.</span>
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
              <span>Schedule Demo</span>
              <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From cloud migration to cybersecurity, we provide end-to-end IT services 
              that keep your business running smoothly and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">
                    {service.price}
                  </span>
                  <Link 
                    to={service.link}
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional IT Solutions */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <Wrench className="w-4 h-4" />
              <span>Additional IT Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Beyond core IT services, we offer specialized solutions to address unique business challenges 
              and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itSolutions.map((solution, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {solution.price}
                  </div>
                  <div className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={solution.link}
                    className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Explore Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect IT service plan for your business needs. All plans include our core services 
              with no hidden fees or setup costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover:bg-white/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their IT infrastructure and digital transformation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
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
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">IT Infrastructure?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let's discuss how our comprehensive IT services can help you achieve your business goals. 
                  From cloud migration to cybersecurity, we have everything you need to succeed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Contact Us</span>
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
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

export default ITServicesPage;