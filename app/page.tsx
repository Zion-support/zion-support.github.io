import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Server, 
  Cloud, 
  Shield, 
  Code,
  BarChart3,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Network,
  Lock,
  Users,
  Target,
  Rocket,
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Play,
  ChevronRight,
  Sparkles,
  Layers,
  Activity,
  Bot,
  CpuIcon,
  DatabaseIcon,
  NetworkIcon,
  ShieldCheck,
  ZapIcon,
  BrainIcon,
  ServerIcon,
  CloudIcon,
  CodeIcon,
  BarChart3Icon,
  SmartphoneIcon,
  GlobeIcon,
  LockIcon,
  UsersIcon,
  TargetIcon,
  RocketIcon,
  StarIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  AwardIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  PlayIcon,
  ChevronRightIcon,
  SparklesIcon,
  LayersIcon,
  ActivityIcon
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'AI-Powered Micro SAAS',
      description: 'Revolutionary AI solutions that transform your business operations',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['AI Automation', 'Smart Analytics', 'Predictive Insights'],
      price: 'Starting at $29/mo',
      path: '/micro-saas-solutions'
    },
    {
      title: 'Advanced AI Solutions',
      description: 'Cutting-edge artificial intelligence for enterprise applications',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: ['Machine Learning', 'Deep Learning', 'Neural Networks'],
      price: 'Starting at $199/mo',
      path: '/ai-solutions'
    },
    {
      title: 'IT Infrastructure',
      description: 'Robust IT solutions for modern business challenges',
      icon: <Server className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Cloud Services', 'Cybersecurity', 'Network Solutions'],
      price: 'Custom Pricing',
      path: '/it-solutions'
    },
    {
      title: '5G Technology',
      description: 'Next-generation 5G solutions for ultra-fast connectivity',
      icon: <Network className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['5G Networks', 'Edge Computing', 'IoT Solutions'],
      price: 'Custom Pricing',
      path: '/5g-solutions'
    }
  ];

  const features = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your operations with intelligent automation',
      icon: <Bot className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights with advanced analytics dashboards',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'text-cyan-400'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security for all your data and operations',
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: <Clock className="w-6 h-6" />,
      color: 'text-orange-400'
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with our scalable technology',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for your specific business needs',
      icon: <Code className="w-6 h-6" />,
      color: 'text-pink-400'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The micro SAAS solutions are game-changers. We saved $50K annually while improving performance.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'Founder',
      content: 'Their 5G implementation gave us the competitive edge we needed. Highly recommended!',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Activity className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS | 5G Technology</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and 5G technology. Transform your business with cutting-edge solutions from Zion Tech Group." />
        <meta name="keywords" content="AI solutions, micro SAAS, IT services, 5G technology, cloud computing, cybersecurity, business automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI and IT solutions" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-pulse">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">
                Advanced AI & IT Solutions
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI-powered micro SAAS solutions, 
                enterprise IT services, and next-generation 5G technology. 
                We help you scale, automate, and innovate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-cyan-400">{stat.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="cyber-card h-full hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-bold text-lg mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, reliability, and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="cyber-card h-full hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={feature.color}>{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto">
            Join hundreds of companies already using our solutions to accelerate growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-white font-bold">+1 302 464 0950</div>
                <div className="text-gray-400 text-sm">Call us anytime</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-white font-bold">kleber@ziontechgroup.com</div>
                <div className="text-gray-400 text-sm">Email us</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-white font-bold">Middletown, DE</div>
                <div className="text-gray-400 text-sm">364 E Main St STE 1008</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;