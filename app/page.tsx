'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { 
  Brain, Cloud, Shield, Zap, Target, BarChart, Users, CheckCircle, ArrowRight, 
  Star, Phone, Mail, MapPin, Clock, Award, TrendingUp, Code, Database, 
  Smartphone, Globe, Lock, Cpu, Sparkles, MessageSquare, FileText, Calendar,
  DollarSign, PieChart, Activity, ExternalLink, ChevronRight, Crown, Rocket,
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass,
  Navigation as NavIcon, Home, Heart, Stethoscope, GraduationCap, Briefcase,
  Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard,
  Gamepad2, Music, Video, Camera, Palette, Bot, Eye, Headphones, Settings
} from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const aiServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform.',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'ROI Tracking'],
      price: 'Starting at $2,999/month',
      popular: true
    },
    {
      title: 'AI Customer Experience Automation',
      description: 'Enhance customer satisfaction with intelligent chatbots and automated support systems.',
      icon: MessageSquare,
      features: ['24/7 AI Chatbots', 'Sentiment Analysis', 'Multi-language Support', 'CRM Integration'],
      price: 'Starting at $1,499/month',
      popular: true
    },
    {
      title: 'AI Content Generation Suite',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: FileText,
      features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'SEO Optimization'],
      price: 'Starting at $799/month',
      popular: false
    },
    {
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Smart Routing'],
      price: 'Starting at $1,999/month',
      popular: false
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure Solutions',
      description: 'Migrate and optimize your infrastructure with our comprehensive cloud services.',
      icon: Cloud,
      features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring'],
      price: 'Starting at $3,999/month',
      popular: true
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business with enterprise-grade security solutions and compliance support.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Audits', 'Incident Response'],
      price: 'Starting at $2,499/month',
      popular: true
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization services.',
      icon: Database,
      features: ['Server Management', 'Network Setup', 'Backup Solutions', 'Performance Tuning'],
      price: 'Starting at $2,999/month',
      popular: false
    },
    {
      title: 'Database Optimization',
      description: 'Optimize your database performance and ensure data integrity.',
      icon: Database,
      features: ['Performance Tuning', 'Query Optimization', 'Data Migration', 'Backup & Recovery'],
      price: 'Starting at $1,799/month',
      popular: false
    }
  ];

  const microSaasServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning and resource allocation with AI-powered insights.',
      icon: Calendar,
      features: ['Smart Scheduling', 'Resource Optimization', 'Risk Assessment', 'Team Collaboration'],
      price: '$29/month',
      popular: true
    },
    {
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking and financial management with AI categorization.',
      icon: DollarSign,
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation'],
      price: '$15/month',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics and insights powered by AI for data-driven decisions.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Insights', 'Automated Reports'],
      price: '$39/month',
      popular: false
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing campaigns.',
      icon: FileText,
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice', 'Content Calendar'],
      price: '$19/month',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      content: "Zion Tech Group's AI solutions increased our efficiency by 300% and reduced costs by 40%. The ROI was evident within the first quarter.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "InnovateLab",
      content: "The AI automation they built for us has transformed our entire workflow. Outstanding results and exceptional support throughout the project.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "FutureTech Inc",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed and more. Our cloud migration was seamless.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      company: "DataCorp Solutions",
      content: "Their cybersecurity solutions protected us from multiple threats. The 99.9% uptime guarantee is real - highly recommended!",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock },
    { label: 'ROI Improvement', value: '300%', icon: TrendingUp },
    { label: 'Projects Completed', value: '500+', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud migration, cybersecurity, business automation" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our cutting-edge AI technology and comprehensive IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/consultation" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to transform your business operations and drive unprecedented growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link 
                  to="/ai-services" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT infrastructure, security, and support solutions to keep your business running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link 
                  to="/it-services" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, focused solutions that solve specific business problems with AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link 
                  to="/micro-saas" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center block"
                >
                  Try Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic">"{testimonials[activeTestimonial].content}"</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can accelerate your growth and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/consultation" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}