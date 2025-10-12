<<<<<<< HEAD
'use client';

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Shield,
  Code,
  Database,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero-downtime deployment',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Data security & encryption', 'Performance optimization', '24/7 support', 'Cost optimization', 'Disaster recovery'],
      icon: Cloud,
      path: '/cloud-migration',
      category: 'Cloud Computing',
      rating: 4.9,
      reviews: 156,
      duration: '2-4 weeks'
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and monitoring',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training', 'Security integration', 'Performance tuning'],
      icon: Code,
      path: '/devops-solutions',
      category: 'DevOps',
      rating: 4.8,
      reviews: 134,
      duration: '3-6 weeks'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, penetration testing, and compliance certification',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Security training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189,
      duration: '1-3 weeks'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks',
      price: 'Starting at $8,000',
      features: ['iOS & Android native', 'Cross-platform development', 'App store optimization', 'Maintenance support', 'Push notifications', 'Analytics integration'],
      icon: Smartphone,
      path: '/mobile-development',
      category: 'Mobile Development',
      rating: 4.7,
      reviews: 98,
      duration: '6-12 weeks'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and rate limiting',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL APIs', 'API documentation', 'Rate limiting', 'Analytics dashboard', 'Authentication', 'Versioning support'],
      icon: Database,
      path: '/api-development',
      category: 'Backend Development',
      rating: 4.8,
      reviews: 112,
      duration: '2-5 weeks'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, maintenance, and migration services for all major databases',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support', 'Query optimization', 'Monitoring setup'],
      icon: Database,
      path: '/database-management',
      category: 'Database',
      rating: 4.6,
      reviews: 87,
      duration: '1-2 weeks'
    },
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies and frameworks',
      price: 'Starting at $6,000',
      features: ['Responsive design', 'Modern frameworks', 'SEO optimization', 'Performance tuning', 'Security implementation', 'Content management'],
      icon: Globe,
      path: '/web-development',
      category: 'Web Development',
      rating: 4.8,
      reviews: 145,
      duration: '4-8 weeks'
    },
    {
      name: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for unified workflows',
      price: 'Starting at $7,500',
      features: ['System integration', 'Data synchronization', 'Workflow automation', 'API connections', 'Error handling', 'Monitoring setup'],
      icon: Cpu,
      path: '/system-integration',
      category: 'Integration',
      rating: 4.7,
      reviews: 76,
      duration: '3-8 weeks'
    },
    {
      name: 'IT Consulting',
      description: 'Strategic IT consulting to optimize technology infrastructure and digital transformation',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Strategic planning', 'Digital transformation', 'Cost optimization', 'Risk analysis', 'Implementation guidance'],
      icon: Users,
      path: '/it-consulting',
      category: 'Consulting',
      rating: 4.9,
      reviews: 203,
      duration: 'Ongoing'
    }
  ];

  const categories = [
    { name: 'All Services', count: itServices.length, active: true },
    { name: 'Cloud Computing', count: itServices.filter(s => s.category === 'Cloud Computing').length, active: false },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length, active: false },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Mobile Development', count: itServices.filter(s => s.category === 'Mobile Development').length, active: false },
    { name: 'Backend Development', count: itServices.filter(s => s.category === 'Backend Development').length, active: false },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length, active: false },
    { name: 'Web Development', count: itServices.filter(s => s.category === 'Web Development').length, active: false },
    { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length, active: false },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length, active: false }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and comprehensive threat protection'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business and handles increasing demands'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions'
    },
    {
      icon: Lock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, maintenance, and support for your IT infrastructure'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure and requirements to create a comprehensive plan'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design the optimal solution architecture for your specific needs'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your business operations'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization to ensure peak efficiency'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud migration, DevOps, cybersecurity, mobile development, API development, and database management. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, DevOps, cybersecurity, mobile development, API development, database management, web development, system integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, 
                and accelerate digital transformation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are designed to deliver exceptional performance, security, and scalability for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful project delivery and maximum value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our IT experts today to discuss your requirements and discover how our solutions can drive your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, DollarSign, Clock, Users, Star } from 'lucide-react';
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
<<<<<<< HEAD
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration'
=======
import { CheckCircle, ArrowRight, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Server, Lock, Wifi, Cpu, BarChart3, Settings, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with ongoing management, optimization, and security for AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud migration',
        'Cost optimization',
        'Security hardening',
        'Performance monitoring',
        'Disaster recovery',
        '24/7 support'
      ],
      pricing: {
        basic: '$2,500 setup + $1,200/month',
        pro: '$5,000 setup + $2,500/month',
        enterprise: '$10,000 setup + $5,000/month'
      },
      link: '/cloud-migration',
      popular: true
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and incident response.',
      features: [
        'Threat monitoring',
        'Vulnerability scanning',
        'Penetration testing',
        'Security training',
        'Compliance management',
        'Incident response'
      ],
      pricing: {
        basic: '$1,500/month',
        pro: '$3,000/month',
        enterprise: '$6,000/month'
      },
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and deployment automation.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      pricing: {
        basic: '$2,000/month',
        pro: '$4,000/month',
        enterprise: '$8,000/month'
      },
      link: '/devops-solutions'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Advanced data analytics solutions with business intelligence dashboards and predictive analytics.',
      features: [
        'Data warehousing',
        'ETL processes',
        'Business intelligence',
        'Predictive analytics',
        'Real-time dashboards',
        'Data visualization'
      ],
      pricing: {
        basic: '$2,000/month',
        pro: '$4,500/month',
        enterprise: '$9,000/month'
      },
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks.',
      features: [
        'Native iOS/Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store deployment',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: {
        basic: 'Starting at $5,000',
        pro: 'Starting at $15,000',
        enterprise: 'Starting at $50,000'
      },
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern web applications with responsive design, performance optimization, and SEO best practices.',
      features: [
        'Responsive web design',
        'Performance optimization',
        'SEO optimization',
        'Content management',
        'E-commerce solutions',
        'API development'
      ],
      pricing: {
        basic: 'Starting at $3,000',
        pro: 'Starting at $8,000',
        enterprise: 'Starting at $25,000'
      },
      link: '/web-development'
<<<<<<< HEAD
=======
      link: '/cloud-migration',
      popular: true
    },
    {
      link: '/data-analytics',
      popular: false
    },
    {
      popular: false
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
    },
    {
      icon: <Database className="w-12 h-12 text-pink-500" />,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and integration services for smart contracts, DeFi, and enterprise applications.',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplaces',
        'Enterprise blockchain',
        'Cryptocurrency integration',
        'Security auditing'
      ],
      pricing: {
        basic: 'Starting at $10,000',
        pro: 'Starting at $25,000',
        enterprise: 'Starting at $100,000'
      },
      link: '/blockchain-solutions'
    },
    {
      icon: <Cpu className="w-12 h-12 text-teal-500" />,
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced simulations.',
      features: [
        'Quantum algorithm development',
        'Optimization problems',
        'Cryptography solutions',
        'Quantum simulations',
        'Research collaboration',
        'Training & consulting'
      ],
      pricing: {
        basic: 'Starting at $15,000',
        pro: 'Starting at $35,000',
        enterprise: 'Starting at $150,000'
      },
      link: '/quantum-computing-solutions'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
    }
  ];

  const serviceCategories = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
      title: 'Infrastructure Services',
      description: 'Complete IT infrastructure setup, management, and optimization.',
      icon: <Server className="w-8 h-8 text-blue-500" />,
      services: ['Cloud Migration', 'Server Management', 'Network Setup', 'Backup Solutions']
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
    },
    {
      title: 'Security Services',
      description: 'Comprehensive cybersecurity and data protection solutions.',
      icon: <Lock className="w-8 h-8 text-red-500" />,
      services: ['Threat Detection', 'Vulnerability Assessment', 'Security Training', 'Compliance']
    },
    {
      title: 'Development Services',
      description: 'Custom software development and digital solutions.',
      icon: <Code className="w-8 h-8 text-green-500" />,
      services: ['Web Development', 'Mobile Apps', 'API Development', 'DevOps']
    },
    {
      title: 'Data Services',
      description: 'Data management, analytics, and business intelligence.',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      services: ['Data Analytics', 'Business Intelligence', 'Data Warehousing', 'Machine Learning']
    }
  ];

<<<<<<< HEAD
  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'TechCorp Enterprises',
      content: 'Zion Tech Group migrated our entire infrastructure to the cloud seamlessly. Our costs reduced by 40% and performance improved significantly.',
      rating: 5,
      service: 'Cloud Migration'
    },
    {
      name: 'Maria Garcia',
      company: 'FinanceFlow Inc.',
      content: 'Their cybersecurity solutions protected us from multiple attacks. The 24/7 monitoring gives us peace of mind.',
      rating: 5,
      service: 'Cybersecurity Solutions'
    },
    {
      name: 'David Chen',
      company: 'DataTech Solutions',
      content: 'The data analytics platform they built provides insights we never had before. Our decision-making is now completely data-driven.',
      rating: 5,
      service: 'Data Analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development. Transform your business with our expertise." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, web development" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
=======

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
              </div>
            ))}
          </div>
        </section>
      )}

>>>>>>> cursor/analyze-improve-and-deploy-application-072b
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our IT Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT solutions can drive your success.
=======
    <>
      <SEOHead 
        title="IT Services & Solutions - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and data analytics. Transform your business with our expert IT solutions."
        keywords="it services, cloud migration, cybersecurity, devops, mobile development, data analytics, web development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and custom development solutions.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get IT Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
<<<<<<< HEAD
=======
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default ITServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-41ac
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
=======
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7720
=======

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Basic:</span>
                        <span className="text-white font-semibold">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-white font-semibold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Service Categories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Organized IT services by category for easy navigation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Real results from businesses using our IT services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our IT services can optimize your technology stack and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free IT Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-2f7d
