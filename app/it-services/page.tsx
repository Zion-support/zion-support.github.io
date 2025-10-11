import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  Network, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  CreditCard,
  Play,
  Download,
  Share2,
  Settings,
  Target,
  TrendingUp,
  Award,
  MessageSquare,
  FileText,
  Image,
  Video,
  Hash,
  Calendar,
  Zap,
  Lock,
  Wifi,
  HardDrive,
  Router,
  Smartphone as Mobile,
  Laptop,
  Headphones
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      icon: <Cloud className="w-8 h-8" />,
      price: 'Starting at $2,500',
      features: [
        'AWS, Azure, Google Cloud expertise',
        'Zero-downtime migration',
        'Security compliance',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery setup'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities'
      ],
      category: 'Cloud Solutions',
      rating: 4.9,
      projects: '500+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats and ensure compliance.',
      icon: <Shield className="w-8 h-8" />,
      price: 'Starting at $1,800',
      features: [
        'Security assessment & audit',
        'Penetration testing',
        'Compliance management (SOC2, GDPR)',
        '24/7 threat monitoring',
        'Incident response',
        'Security training'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Ensure regulatory compliance',
        'Reduce security incidents by 95%',
        'Peace of mind with 24/7 monitoring'
      ],
      category: 'Security',
      rating: 4.8,
      projects: '300+',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
      icon: <Network className="w-8 h-8" />,
      price: 'Starting at $3,200',
      features: [
        'Network design & architecture',
        'Cisco, Juniper, Aruba expertise',
        'WiFi 6 implementation',
        'SD-WAN solutions',
        'Network monitoring',
        'Performance optimization'
      ],
      benefits: [
        'Improve network performance by 60%',
        'Reduce downtime by 80%',
        'Enhanced security and reliability',
        'Future-proof infrastructure'
      ],
      category: 'Infrastructure',
      rating: 4.7,
      projects: '400+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'data-management',
      title: 'Data Management & Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and data management solutions.',
      icon: <Database className="w-8 h-8" />,
      price: 'Starting at $2,800',
      features: [
        'Data warehousing',
        'Business intelligence dashboards',
        'Data governance',
        'ETL/ELT processes',
        'Real-time analytics',
        'Data visualization'
      ],
      benefits: [
        'Make data-driven decisions',
        'Improve operational efficiency',
        'Reduce data processing time by 70%',
        'Gain competitive insights'
      ],
      category: 'Data & Analytics',
      rating: 4.8,
      projects: '250+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'devops-cicd',
      title: 'DevOps & CI/CD',
      description: 'Accelerate software delivery with automated DevOps practices and continuous integration/deployment.',
      icon: <Cpu className="w-8 h-8" />,
      price: 'Starting at $2,200',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration (Kubernetes)',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve team productivity',
        'Ensure consistent deployments'
      ],
      category: 'DevOps',
      rating: 4.9,
      projects: '350+',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'managed-it',
      title: 'Managed IT Services',
      description: 'Comprehensive IT management services to keep your systems running smoothly and securely.',
      icon: <Server className="w-8 h-8" />,
      price: 'Starting at $1,500',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Help desk support',
        'Security updates',
        'Backup & recovery',
        'Performance optimization'
      ],
      benefits: [
        'Reduce IT costs by 30%',
        'Minimize downtime',
        'Focus on core business',
        'Access to expert support'
      ],
      category: 'Managed Services',
      rating: 4.7,
      projects: '600+',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const categories = [
    'All Services',
    'Cloud Solutions',
    'Security',
    'Infrastructure',
    'Data & Analytics',
    'DevOps',
    'Managed Services'
  ];

  const stats = [
    { number: '2,000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'CTO',
      company: 'FinTech Solutions',
      content: 'Zion Tech Group transformed our IT infrastructure. Their cloud migration service reduced our costs by 45% while improving performance significantly.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'IT Director',
      company: 'Healthcare Plus',
      content: 'The cybersecurity solutions provided excellent protection for our sensitive data. Their 24/7 monitoring gives us complete peace of mind.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Thompson',
      role: 'Operations Manager',
      company: 'Retail Chain Inc.',
      content: 'Their managed IT services have been a game-changer. We can focus on our business while they handle all our technical needs perfectly.',
      rating: 5,
      avatar: 'ST'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <Helmet>
        <title>IT Services - Professional Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and managed IT solutions. Transform your business with expert technology services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, managed IT, DevOps, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Professional IT Services
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive IT services to transform your business with cutting-edge technology solutions. 
              <span className="text-cyan-300 font-semibold"> From cloud migration to cybersecurity, we've got you covered!</span>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <button className="group border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Work
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive IT Solutions
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From cloud migration to cybersecurity, we provide end-to-end IT services for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white mb-1">{service.price}</div>
                      <div className="text-sm text-gray-400">project</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-400">({service.projects})</span>
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                    <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we've helped businesses transform their IT infrastructure and achieve their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 relative">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Ready to Transform Your IT Infrastructure?
                  </span>
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free consultation and discover how our IT services can accelerate your business growth. 
                  <span className="text-cyan-200 font-semibold"> Let's build the future together!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/contact" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">View Case Studies</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;