import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Server,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  Clock,
  TrendingUp,
  Globe,
  Zap,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Settings,
  FileText,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Monitor
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      link: '/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500',
      services: [
        'AWS Cloud Migration - From $5,000',
        'Azure Infrastructure Setup - From $3,500',
        'Google Cloud Platform - From $4,000',
        'Multi-Cloud Strategy - From $8,000',
        'Cloud Security Implementation - From $6,000',
        'Disaster Recovery Solutions - From $7,500'
      ]
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: <Shield className="w-12 h-12 text-red-400" />,
      link: '/cybersecurity',
      color: 'from-red-500 to-orange-500',
      services: [
        'Security Assessment - From $2,500',
        'Penetration Testing - From $3,000',
        'Security Implementation - From $5,000',
        'Compliance Management - From $4,500',
        'Incident Response Planning - From $3,500',
        'Security Training - From $2,000'
      ]
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions and application development',
      icon: <Code className="w-12 h-12 text-green-400" />,
      link: '/software-development',
      color: 'from-green-500 to-teal-500',
      services: [
        'Web Application Development - From $10,000',
        'Mobile App Development - From $15,000',
        'API Development - From $5,000',
        'Custom Software Solutions - From $25,000',
        'Legacy System Modernization - From $20,000',
        'Microservices Architecture - From $12,000'
      ]
    },
    {
      title: 'Data Management',
      description: 'Database design, management, and analytics solutions',
      icon: <Database className="w-12 h-12 text-purple-400" />,
      link: '/data-management',
      color: 'from-purple-500 to-pink-500',
      services: [
        'Database Design & Implementation - From $8,000',
        'Data Migration Services - From $5,000',
        'Business Intelligence Solutions - From $12,000',
        'Data Analytics & Reporting - From $7,500',
        'Data Warehousing - From $15,000',
        'Data Governance - From $6,000'
      ]
    },
    {
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and optimization',
      icon: <Network className="w-12 h-12 text-cyan-400" />,
      link: '/network-infrastructure',
      color: 'from-cyan-500 to-blue-500',
      services: [
        'Network Design & Implementation - From $10,000',
        'WiFi Network Setup - From $3,000',
        'Network Security Implementation - From $8,000',
        'Network Monitoring & Management - From $2,500/mo',
        'VPN Solutions - From $4,000',
        'Network Optimization - From $6,000'
      ]
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Ongoing IT support and system maintenance services',
      icon: <Settings className="w-12 h-12 text-orange-400" />,
      link: '/it-support',
      color: 'from-orange-500 to-red-500',
      services: [
        '24/7 IT Support - From $2,000/mo',
        'System Maintenance - From $1,500/mo',
        'Help Desk Services - From $1,000/mo',
        'Remote Monitoring - From $800/mo',
        'Backup & Recovery - From $1,200/mo',
        'IT Consulting - From $150/hour'
      ]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and comprehensive data protection'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure your systems run smoothly at all times'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business, from startup to enterprise scale'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Certified Experts',
      description: 'Our team consists of certified professionals with years of industry experience'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Fast Deployment',
      description: 'Quick implementation and deployment to get you up and running in no time'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: '500+ Happy Clients',
      description: 'Trusted by businesses worldwide for our innovative solutions and exceptional service'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and current technology stack to understand your requirements.',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution that perfectly fits your business objectives.',
      icon: <FileText className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your existing operations.',
      icon: <Settings className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and optimization to ensure peak performance and reliability.',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We launch your solution and provide ongoing support and maintenance.',
      icon: <Zap className="w-8 h-8 text-orange-400" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our IT infrastructure. Their cloud migration saved us 40% in costs while improving performance significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'Global Enterprises',
      role: 'IT Director',
      content: 'The cybersecurity implementation was flawless. We feel much more secure and our compliance scores have improved dramatically.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateCorp',
      role: 'Operations Director',
      content: 'Their custom software development team delivered exactly what we needed. The solution has streamlined our operations and increased productivity.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const technologies = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Azure', logo: 'AZ' },
    { name: 'Google Cloud', logo: 'GC' },
    { name: 'Docker', logo: 'D' },
    { name: 'Kubernetes', logo: 'K' },
    { name: 'React', logo: 'R' },
    { name: 'Node.js', logo: 'N' },
    { name: 'Python', logo: 'P' },
    { name: 'PostgreSQL', logo: 'PG' },
    { name: 'MongoDB', logo: 'M' },
    { name: 'Redis', logo: 'RD' },
    { name: 'Elasticsearch', logo: 'ES' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Comprehensive Technology Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, software development, data management, and network services. Expert solutions for your business needs." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, software development, data management, network services, IT consulting, technology services" />
        <meta property="og:title" content="IT Solutions - Comprehensive Technology Services" />
        <meta property="og:description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, software development, and data management." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth with cutting-edge IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#categories"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                Explore Solutions
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="categories" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT services designed to meet every business need 
              and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                  <li className="text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    +{category.services.length - 3} more services
                  </li>
                </ul>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and tools to deliver cutting-edge solutions 
              that meet your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{tech.logo}</span>
                </div>
                <div className="text-gray-300 font-medium text-sm">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses worldwide for our innovative solutions and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our expert team help you choose the right IT solutions for your business needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;