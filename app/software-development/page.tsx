<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function softwareDevelopment() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Software Development solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Software Development</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Monitor, Code, Zap, BarChart3, Clock, Award, Settings, Users, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Monitor, Database, Shield, Code } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2

export default function SoftwaredevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Software Development</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Code, ArrowRight, CheckCircle, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

const SoftwareDevelopmentPage = () => {
  const developmentServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software",
      description: "Build tailored software solutions that meet your specific business requirements",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Web Applications",
      description: "Create modern, responsive web applications with cutting-edge technologies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Develop native and cross-platform mobile applications for iOS and Android",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "API Development",
      description: "Build robust APIs and microservices for seamless system integration",
      color: "from-orange-500 to-red-500"
    }
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Requirements",
      description: "Gather and analyze your business requirements and technical specifications"
    },
    {
      step: "2",
      title: "Design",
      description: "Create detailed system design and architecture for optimal performance"
    },
    {
      step: "3",
      title: "Development",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      step: "4",
      title: "Deployment",
      description: "Seamless deployment and ongoing maintenance and support"
    }
  ];

  const developmentBenefits = [
    "Tailored solutions for your specific needs",
    "Scalable and maintainable code",
    "Modern technologies and best practices",
    "Agile development methodology",
    "Comprehensive testing and quality assurance",
    "Ongoing support and maintenance"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "month",
      description: "Perfect for small projects",
      features: [
        "Basic custom development",
        "Standard technologies",
        "Email support",
        "Basic testing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced custom development",
        "Modern technologies",
        "Priority support",
        "Comprehensive testing",
        "Code review",
        "Documentation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Enterprise-grade solutions",
        "Dedicated development team",
        "White-label solution",
        "SLA guarantee",
        "Advanced security",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      content: "The software development team delivered exactly what we needed. The solution is robust and scalable.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "DataFlow Inc",
      content: "Excellent development process. The team was professional and delivered on time and within budget.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Startup Founder",
      company: "StartupHub",
      content: "The custom solution has transformed our business operations. Highly recommended!",
      rating: 5,
      avatar: "EJ"
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Monitor, Code, Zap, BarChart3, Clock, Award, Settings, Users, CheckCircle } from 'lucide-react';

=======
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Monitor, Cloud, Database, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Build scalable, modern web applications using the latest technologies and best practices for optimal performance and user experience.",
      icon: <Globe className="w-6 h-6" />,
      features: ["React/Next.js development", "Node.js backends", "Database design", "API development"]
    },
    {
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["React Native apps", "Native iOS/Android", "Cross-platform solutions", "App store deployment"]
    },
    {
      title: "Enterprise Software",
      description: "Develop robust enterprise software solutions that integrate seamlessly with your existing systems and workflows.",
      icon: <Monitor className="w-6 h-6" />,
      features: ["System integration", "Legacy modernization", "Workflow automation", "Data migration"]
    },
    {
<<<<<<< HEAD
      title: "Cloud Solutions",
      description: "Design and implement cloud-based solutions that scale with your business and provide reliable, secure access to your applications.",
      icon: <Cloud className="w-6 h-6" />,
      features: ["AWS/Azure/GCP", "Microservices architecture", "Containerization", "Auto-scaling"]
    },
    {
      title: "Database Design",
      description: "Create efficient, scalable database architectures that support your application's data requirements and performance needs.",
      icon: <Database className="w-6 h-6" />,
      features: ["SQL/NoSQL databases", "Data modeling", "Performance optimization", "Backup strategies"]
    },
    {
      title: "Security Implementation",
      description: "Implement comprehensive security measures to protect your applications and data from threats and vulnerabilities.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Authentication systems", "Data encryption", "Security audits", "Compliance standards"]
=======
      title: "Database Solutions",
      description: "Design and implement efficient database systems that handle large-scale data with optimal performance and security.",
      icon: <Database className="w-6 h-6" />,
      features: ["Database design", "Query optimization", "Data modeling", "Performance tuning"]
    },
    {
      title: "Security & Compliance",
      description: "Implement comprehensive security measures and ensure compliance with industry standards and regulations.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security audits", "Penetration testing", "Compliance implementation", "Data protection"]
    },
    {
      title: "Code Review & Optimization",
      description: "Review and optimize existing codebases to improve performance, maintainability, and scalability.",
      icon: <Code className="w-6 h-6" />,
      features: ["Code quality analysis", "Performance optimization", "Refactoring", "Best practices implementation"]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
    }
  ];

  const technologies = [
<<<<<<< HEAD
    "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "C#", "Go",
    "React Native", "Flutter", "Swift", "Kotlin", "PostgreSQL", "MongoDB",
    "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP"
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan with timelines and milestones."
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and creates wireframes and prototypes."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your application using agile methodologies with continuous testing and quality assurance."
    },
    {
<<<<<<< HEAD
      title: "Ongoing Support",
      description: "Get continuous support and maintenance for your applications",
      icon: <Users className="w-8 h-8" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your application and provide ongoing maintenance and support services."
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Software Development Services - Zion Tech Group | Custom Software Solutions"
            description="Get custom software development services from Zion Tech Group. We build tailored solutions for web, mobile, and enterprise applications."
            keywords="software development, custom software, web applications, mobile apps, API development, software solutions"
            canonical="https://ziontechgroup.com/software-development"
          />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Code className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Software Development</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Software Development Services
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Build tailored software solutions that meet your specific business requirements. 
                  From web applications to mobile apps, we deliver excellence.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
    <>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
    "React & Next.js", "Node.js & Express", "TypeScript", "Python & Django", 
    "Java & Spring", "C# & .NET", "PHP & Laravel", "React Native", 
    "Flutter", "Swift & Kotlin", "PostgreSQL", "MongoDB", 
    "Redis", "Docker", "Kubernetes", "AWS & Azure"
  ];

  const benefits = [
    "Scalable and maintainable code",
    "Modern development practices",
    "Comprehensive testing",
    "Security-first approach",
    "Performance optimization",
    "Ongoing support and maintenance"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Professional software development services for modern applications." />
      </Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into powerful, scalable software solutions with our expert development team. 
            From web applications to mobile apps, we deliver cutting-edge technology that drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              View Our Work
            </Link>
=======

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Software Development
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your ideas into powerful, scalable software solutions. 
              We build custom applications that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
          </div>
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive software development services tailored to your specific needs and business objectives.
=======
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              Software Development Services
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We build custom software solutions that drive business growth and digital transformation.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
<<<<<<< HEAD
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
=======
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-center mb-4">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From web applications to mobile apps, we provide comprehensive software development 
              solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="text-blue-400 mb-4">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#contact"
                    variant="primary"
                    size="lg"
                    icon={Code}
                    iconPosition="left">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#services"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Learn More
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Development Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Our Development Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive development services to bring your ideas to life
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {developmentServices.map((service, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {service.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </FuturisticCardEnhanced>
=======
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
                  ))}
<<<<<<< HEAD
                </div>
              </ResponsiveContainer>
            </section>

            {/* Development Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Development Process
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A proven 4-step process to ensure successful project delivery
                  </p>
=======
                </ul>
              </div>
            ))}
          </div>

<<<<<<< HEAD
      {/* Technologies Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver modern, efficient solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-gray-400 text-sm">{tech.category}</div>
=======
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We stay up-to-date with the latest technologies and frameworks to deliver 
              cutting-edge solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors">
                <span className="text-sm font-medium">{tech}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
              </div>
            ))}
=======
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
          </div>

<<<<<<< HEAD
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with our expert development team and proven methodologies.
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Development Services?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the benefits of professional software development with our expert team and proven methodologies.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
<<<<<<< HEAD
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {developmentProcess.map((step, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Our Development?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get the most out of your software investment with our expert development team
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {developmentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your development needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
=======
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    What Our Clients Say
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Hear from our satisfied clients about their development experience
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Let's discuss your software development needs and create a solution 
                  that drives your business forward.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Project
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="mailto:development@ziontechgroup.com"
                    variant="outline"
                    size="lg"
                    icon={Mail}
                    iconPosition="right">
                    Email Us
                  </FuturisticButtonEnhanced>
                </div>
              </div>
<<<<<<< HEAD
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default SoftwareDevelopmentPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <p className="text-lg text-gray-600">
          This page is under development. Please check back later.
        </p>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

const SoftwareDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom software solutions built with modern technologies and best practices
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Web Applications</h3>
            <p className="text-gray-300">
              Modern, responsive web applications built with React, Next.js, and TypeScript.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Monitor className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Mobile Apps</h3>
            <p className="text-gray-300">
              Cross-platform mobile applications for iOS and Android using React Native.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-300">
              Scalable cloud-based applications and microservices architecture.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Network className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">API Development</h3>
            <p className="text-gray-300">
              RESTful APIs and GraphQL endpoints for seamless data integration.
            </p>
          </div>
        </div>
      </div>
    </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert development team help you turn your ideas into reality with cutting-edge software solutions.
=======
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your software development needs and create a solution that drives your business forward.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
=======
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
            >
              Start Your Project
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
=======
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
            </Link>
          </div>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

<<<<<<< HEAD
export default SoftwareDevelopmentPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
export default SoftwareDevelopmentPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
