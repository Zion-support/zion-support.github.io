'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] },
        { name: 'AI Data Analytics', price: '$1,600/month', description: 'Advanced AI-powered data analytics and business intelligence', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'] },
        { name: 'AI Cybersecurity', price: '$2,200/month', description: 'AI-driven threat detection and security monitoring', features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics'] },
        { name: 'AI Healthcare Solutions', price: '$3,000/month', description: 'AI-powered healthcare diagnostics and patient care', features: ['Medical Imaging', 'Diagnostic Assistance', 'Patient Monitoring', 'Treatment Optimization'] },
        { name: 'AI Financial Services', price: '$2,800/month', description: 'AI solutions for fintech and financial institutions', features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'] }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', price: '$999/month', description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee', features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'] },
        { name: 'Cloud Services', price: '$1,299/month', description: 'Cloud migration, setup, and optimization services', features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'] },
        { name: 'Cybersecurity', price: '$1,599/month', description: 'Advanced security solutions with threat detection and prevention', features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'] },
        { name: 'DevOps & CI/CD', price: '$1,199/month', description: 'Streamlined development workflows with automated testing and deployment', features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'] },
        { name: 'Database Services', price: '$899/month', description: 'Database design, optimization, and management with AI-powered tuning', features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'] },
        { name: 'Network Services', price: '$1,099/month', description: 'Network design, implementation, and monitoring solutions', features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'] },
        { name: 'IT Consulting', price: '$1,800/month', description: 'Strategic IT consulting and digital transformation', features: ['Technology Assessment', 'Digital Strategy', 'Vendor Management', 'Compliance Consulting'] },
        { name: 'Managed IT Services', price: '$1,400/month', description: 'Comprehensive managed IT services for small to medium businesses', features: ['24/7 Monitoring', 'Help Desk Support', 'Proactive Maintenance', 'Security Management'] },
        { name: 'Data Center Services', price: '$2,200/month', description: 'Enterprise data center design, implementation, and management', features: ['Data Center Design', 'Power & Cooling', 'Disaster Recovery', 'Compliance Management'] },
        { name: 'Mobile App Development', price: '$1,600/month', description: 'Native and cross-platform mobile application development', features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization'] }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Code Review Assistant', price: '$199/month', description: 'Automated code analysis and quality improvement suggestions', features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations'] },
        { name: 'AI SEO Optimizer', price: '$299/month', description: 'AI-powered SEO analysis and optimization recommendations', features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'] },
        { name: 'AI Analytics Dashboard', price: '$399/month', description: 'Business intelligence and analytics with AI insights', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'] },
        { name: 'AI Marketing Automation', price: '$249/month', description: 'Marketing automation and campaign optimization tools', features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing'] },
        { name: 'AI Document Processing', price: '$179/month', description: 'Intelligent document analysis and data extraction', features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'] },
        { name: 'AI Customer Support Bot', price: '$149/month', description: 'Automated customer support and ticket management', features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management'] },
        { name: 'AI Content Generator', price: '$199/month', description: 'AI-powered content creation for blogs, social media, and marketing', features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation'] },
        { name: 'AI Data Visualization', price: '$299/month', description: 'Advanced data visualization and reporting tools', features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options'] },
        { name: 'AI Email Assistant', price: '$99/month', description: 'Smart email management and response suggestions', features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders'] },
        { name: 'AI Lead Generation', price: '$349/month', description: 'Automated lead generation and qualification system', features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration'] },
        { name: 'AI Sales Automation', price: '$399/month', description: 'Intelligent sales process automation and optimization', features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics'] },
        { name: 'AI E-commerce Solutions', price: '$499/month', description: 'AI-powered e-commerce optimization and management', features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'] },
        { name: 'AI Project Manager', price: '$199/month', description: 'AI-powered project management and team collaboration', features: ['Task Automation', 'Resource Planning', 'Progress Tracking', 'Risk Assessment'] },
        { name: 'AI Social Media Manager', price: '$179/month', description: 'Automated social media management and content scheduling', features: ['Content Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Audience Insights'] },
        { name: 'AI Video Generator', price: '$399/month', description: 'AI-powered video creation and editing platform', features: ['Auto Video Creation', 'Text-to-Video', 'Template Library', 'Brand Customization'] },
        { name: 'AI Voice Cloning', price: '$299/month', description: 'High-quality voice synthesis and cloning technology', features: ['Voice Synthesis', 'Voice Cloning', 'Multi-language Support', 'Real-time Processing'] },
        { name: 'AI Workflow Automation', price: '$249/month', description: 'Intelligent workflow automation and process optimization', features: ['Process Mapping', 'Automation Rules', 'Integration Management', 'Performance Monitoring'] },
        { name: 'AI Fashion Design', price: '$199/month', description: 'AI-powered fashion design and trend analysis', features: ['Trend Analysis', 'Design Generation', 'Color Matching', 'Style Recommendations'] },
        { name: 'AI Music Composition', price: '$179/month', description: 'AI-generated music composition and production', features: ['Music Generation', 'Style Adaptation', 'Instrumentation', 'Production Tools'] },
        { name: 'AI Fitness Coach', price: '$149/month', description: 'Personalized AI fitness coaching and workout plans', features: ['Workout Plans', 'Progress Tracking', 'Nutrition Guidance', 'Form Analysis'] }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', price: 'Custom', description: 'Next-generation quantum algorithms and quantum security implementations', features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'] },
        { name: 'Autonomous Systems', price: 'Custom', description: 'Self-managing and self-optimizing systems for enterprise operations', features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'] },
        { name: 'Blockchain & Web3', price: '$1,999/month', description: 'Decentralized solutions, smart contracts, and Web3 applications', features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'] },
        { name: 'IoT & Edge Computing', price: '$1,499/month', description: 'Connected devices and edge computing solutions', features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'] },
        { name: 'Business Intelligence', price: '$1,799/month', description: 'Data-driven insights and predictive analytics for decision-making', features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards'] },
        { name: 'Robotics Solutions', price: 'Custom', description: 'Intelligent robotic solutions for manufacturing and service industries', features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'] },
        { name: '3D AI Generation', price: '$799/month', description: 'AI-powered 3D model generation and rendering', features: ['3D Model Creation', 'Texture Generation', 'Animation Tools', 'VR/AR Integration'] },
        { name: 'AI Cloud Migration', price: '$1,299/month', description: 'Intelligent cloud migration and optimization services', features: ['Migration Planning', 'Cost Optimization', 'Security Assessment', 'Performance Tuning'] },
        { name: 'AI Email Marketing', price: '$199/month', description: 'Advanced AI-powered email marketing automation', features: ['Smart Segmentation', 'Content Optimization', 'Send Time Optimization', 'A/B Testing'] },
        { name: 'AI Customer Support', price: '$299/month', description: 'Comprehensive AI customer support solutions', features: ['Multi-channel Support', 'Sentiment Analysis', 'Escalation Management', 'Performance Analytics'] }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Services - Zion Tech Group"
        description="Professional AI and IT services for your business transformation."
        keywords={['AI services', 'IT solutions', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI and IT services designed to transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Categories
          </h2>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">Comprehensive solutions for your business needs</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our services today and see the difference AI and IT solutions can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;