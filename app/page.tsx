import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Star, Sparkles, Rocket, Cpu, Brain, Code2, Server, Wifi, Lock, Target, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '200+', label: 'Happy Clients', icon: <Star className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6" /> }
  ];

  const microSAASServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content with advanced AI. Perfect for blogs, social media, and marketing.',
      price: '$29/month',
      features: ['Unlimited content generation', '50+ content types', 'SEO optimization', 'Multi-language support'],
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant that helps developers write better code faster.',
      price: '$49/month',
      features: ['Code completion', 'Bug detection', 'Documentation generation', 'Multi-language support'],
      link: '/ai-code-assistant',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictions.',
      price: '$39/month',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'Data visualization'],
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Security Monitor',
      description: 'Advanced threat detection and security monitoring powered by AI.',
      price: '$59/month',
      features: ['Real-time monitoring', 'Threat detection', 'Automated responses', 'Compliance reporting'],
      link: '/ai-cybersecurity-monitor',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and engagement.',
      price: '$19/month',
      features: ['No-code builder', 'Multi-platform support', 'Natural language processing', 'Analytics'],
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'AI Marketing Automation',
      description: 'Automate your marketing campaigns with AI-powered personalization.',
      price: '$79/month',
      features: ['Campaign automation', 'Personalization', 'A/B testing', 'Performance analytics'],
      link: '/ai-marketing-automation',
      popular: false
    }
  ];

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration with 24/7 management and optimization',
      price: 'Starting at $2,500/month',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure deployment and management',
      price: 'Starting at $1,800/month',
      features: ['Terraform/Ansible', 'Automated scaling', 'Disaster recovery', 'Monitoring']
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $3,200/month',
      features: ['Security audits', 'Penetration testing', 'Compliance (SOC2, GDPR)', 'Incident response']
    },
    {
      icon: <Wifi className="w-8 h-8 text-purple-500" />,
      title: '5G Network Implementation',
      description: 'Next-generation 5G network design and deployment',
      price: 'Starting at $5,000/month',
      features: ['Network design', 'Hardware procurement', 'Installation', 'Performance optimization']
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge AI technology to automate workflows, reduce costs, and boost productivity by up to 300%.',
      highlight: '300% Productivity Boost'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security with SOC2 compliance, end-to-end encryption, and 24/7 threat monitoring.',
      highlight: 'SOC2 Compliant'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Scalable Solutions',
      description: 'Cloud-native architecture that scales seamlessly from startup to enterprise without performance loss.',
      highlight: 'Infinite Scalability'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      title: 'Real-Time Analytics',
      description: 'Advanced analytics and AI insights that provide actionable business intelligence in real-time.',
      highlight: 'Real-Time Insights'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Global Infrastructure',
      description: 'Worldwide network of data centers ensuring 99.9% uptime and lightning-fast performance globally.',
      highlight: '99.9% Uptime'
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      title: 'Rapid Deployment',
      description: 'Deploy enterprise solutions in days, not months, with our streamlined implementation process.',
      highlight: 'Deploy in Days'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      position: 'CTO',
      content: 'Zion Tech\'s AI Content Generator increased our content production by 400% while reducing costs by 60%. Their micro SAAS approach made it incredibly easy to scale.',
      rating: 5,
      image: '👩‍💼',
      industry: 'Technology'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      position: 'CEO',
      content: 'Their cloud migration service was flawless. Zero downtime, 50% cost reduction, and 99.9% uptime since deployment. Exceptional value for money.',
      rating: 5,
      image: '👨‍💻',
      industry: 'Data Analytics'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      position: 'Security Director',
      content: 'The AI Security Monitor caught 3 potential breaches in the first month. Their cybersecurity solutions are truly enterprise-grade and worth every penny.',
      rating: 5,
      image: '👩‍🔬',
      industry: 'Research & Development'
    },
    {
      name: 'David Kim',
      company: 'E-Commerce Plus',
      position: 'Operations Manager',
      content: 'Their AI Marketing Automation increased our conversion rates by 180% and reduced our marketing costs by 45%. ROI was achieved in just 2 months.',
      rating: 5,
      image: '👨‍💼',
      industry: 'E-Commerce'
    },
    {
      name: 'Lisa Thompson',
      company: 'Healthcare Innovations',
      position: 'IT Director',
      content: 'The AI Analytics Dashboard provided insights we never had before. Patient satisfaction increased by 35% and operational efficiency by 50%.',
      rating: 5,
      image: '👩‍⚕️',
      industry: 'Healthcare'
    },
    {
      name: 'James Wilson',
      company: 'Financial Services Co.',
      position: 'VP Technology',
      content: 'Their 5G implementation was completed ahead of schedule. Network performance improved by 300% and we\'re now ready for the future of mobile.',
      rating: 5,
      image: '👨‍💼',
      industry: 'Financial Services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transform: 'translate(50%, 50%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" />
      </div>

      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS services, IT solutions, cybersecurity, and digital transformation. Transform your business with cutting-edge technology at competitive prices." />
        <meta name="keywords" content="AI micro SAAS, IT services, cybersecurity, cloud computing, data analytics, digital transformation, AI content generator, AI chatbot, business automation" />
        <meta name="contact" content="Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008 Middletown DE 19709" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                {' '}Next-Gen AI & IT Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of <span className="text-cyan-400 font-semibold">AI-powered micro SAAS services</span>, 
              enterprise IT solutions, and digital transformation. Empower your business with cutting-edge technology 
              at competitive market prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Micro SAAS
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Info Banner */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 max-w-4xl mx-auto">
              <p className="text-cyan-300 font-semibold mb-2">Ready to get started? Contact us now!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300">
                <span className="flex items-center"><span className="text-cyan-400 mr-2">📞</span> +1 302 464 0950</span>
                <span className="flex items-center"><span className="text-cyan-400 mr-2">✉️</span> kleber@ziontechgroup.com</span>
                <span className="flex items-center"><span className="text-cyan-400 mr-2">📍</span> Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Affordable, powerful micro SAAS solutions designed to automate and enhance your business operations. 
              Start with our most popular services and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-cyan-300">
              <span className="flex items-center"><span className="text-cyan-400 mr-2">💡</span> No setup fees</span>
              <span className="flex items-center"><span className="text-cyan-400 mr-2">🚀</span> Instant deployment</span>
              <span className="flex items-center"><span className="text-cyan-400 mr-2">📞</span> +1 302 464 0950</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 relative ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Link 
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </Link>
                  <Link 
                    to="/contact"
                    className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise IT Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive enterprise-grade IT solutions designed to scale with your business. 
              From cloud migration to cybersecurity, we provide end-to-end technology services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-emerald-300">
              <span className="flex items-center"><span className="text-emerald-400 mr-2">🏢</span> Enterprise-grade solutions</span>
              <span className="flex items-center"><span className="text-emerald-400 mr-2">🔒</span> SOC2 & GDPR compliant</span>
              <span className="flex items-center"><span className="text-emerald-400 mr-2">📞</span> +1 302 464 0950</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:from-emerald-500/10 hover:to-blue-500/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-emerald-500/25"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    to="/it-services"
                    className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/5 to-pink-500/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              We deliver exceptional results through innovation, expertise, and cutting-edge technology. 
              Join thousands of businesses already transforming their operations with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-purple-300">
              <span className="flex items-center"><span className="text-purple-400 mr-2">🚀</span> Industry-leading performance</span>
              <span className="flex items-center"><span className="text-purple-400 mr-2">💎</span> Premium support included</span>
              <span className="flex items-center"><span className="text-purple-400 mr-2">📞</span> +1 302 464 0950</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 border border-white/10 hover:border-purple-400/30">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-6 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Real results from real businesses across industries. See how our solutions have transformed 
              operations and delivered measurable ROI for our clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-cyan-300">
              <span className="flex items-center"><span className="text-cyan-400 mr-2">⭐</span> 4.9/5 average rating</span>
              <span className="flex items-center"><span className="text-cyan-400 mr-2">💼</span> 200+ satisfied clients</span>
              <span className="flex items-center"><span className="text-cyan-400 mr-2">📞</span> +1 302 464 0950</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:from-cyan-500/10 hover:to-purple-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <div className="text-3xl">{testimonial.image}</div>
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm font-medium">{testimonial.position}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium mt-2">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join 200+ businesses already using our AI-powered solutions to drive growth, reduce costs, 
              and achieve unprecedented efficiency. Start your transformation today with our micro SAAS services 
              or enterprise solutions.
            </p>
            
            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-6 mb-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">📞</span>
                  </div>
                  <p className="text-cyan-400 font-semibold text-lg">+1 302 464 0950</p>
                  <p className="text-gray-400 text-sm">Call us now</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <p className="text-purple-400 font-semibold text-lg">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">Email us</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">📍</span>
                  </div>
                  <p className="text-pink-400 font-semibold text-lg">Middletown, DE</p>
                  <p className="text-gray-400 text-sm">Visit us</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Explore Micro SAAS
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              No setup fees • 30-day money-back guarantee • 24/7 support included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}