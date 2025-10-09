'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

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
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] }
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
        { name: 'Network Services', price: '$1,099/month', description: 'Network design, implementation, and monitoring solutions', features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'] }
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
        { name: 'AI Video Generator', price: '$399/month', description: 'AI-powered video creation and editing platform', features: ['Auto Video Generation', 'Text-to-Video', 'Voice Synthesis', 'Template Library'] },
        { name: 'AI Voice Cloning', price: '$299/month', description: 'Professional voice synthesis and cloning services', features: ['Voice Training', 'Multi-language Support', 'Emotion Control', 'Real-time Synthesis'] },
        { name: 'AI 3D Model Generator', price: '$499/month', description: 'AI-powered 3D model creation and optimization', features: ['Text-to-3D', 'Model Optimization', 'Texture Generation', 'Animation Support'] },
        { name: 'AI Music Composer', price: '$199/month', description: 'AI-generated music and sound design platform', features: ['Genre Selection', 'Mood-based Creation', 'Instrument Selection', 'Royalty-free Output'] },
        { name: 'AI Fashion Designer', price: '$349/month', description: 'AI-powered fashion design and trend analysis', features: ['Trend Prediction', 'Design Generation', 'Color Matching', 'Size Optimization'] },
        { name: 'AI Fitness Coach', price: '$149/month', description: 'Personalized AI fitness training and nutrition planning', features: ['Workout Plans', 'Nutrition Tracking', 'Progress Analysis', 'Injury Prevention'] },
        { name: 'AI Healthcare Assistant', price: '$599/month', description: 'AI-powered healthcare diagnostics and patient management', features: ['Symptom Analysis', 'Treatment Recommendations', 'Patient Monitoring', 'Medical Records'] },
        { name: 'AI Fintech Solutions', price: '$799/month', description: 'AI-powered financial services and trading algorithms', features: ['Risk Assessment', 'Trading Algorithms', 'Fraud Detection', 'Credit Scoring'] },
        { name: 'AI Mobile App Builder', price: '$299/month', description: 'No-code AI-powered mobile app development platform', features: ['Drag-and-Drop Builder', 'AI Code Generation', 'Cross-platform Support', 'App Store Deployment'] },
        { name: 'AI Workflow Automation', price: '$199/month', description: 'Intelligent business process automation platform', features: ['Process Mapping', 'Automation Rules', 'Integration APIs', 'Performance Monitoring'] },
        { name: 'AI Writing Assistant', price: '$99/month', description: 'Advanced AI writing and editing assistant', features: ['Grammar Check', 'Style Improvement', 'Plagiarism Detection', 'Tone Adjustment'] },
        { name: 'AI Scheduler Pro', price: '$149/month', description: 'Intelligent scheduling and calendar management system', features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Handling', 'Meeting Optimization'] },
        { name: 'AI Expense Tracker', price: '$79/month', description: 'AI-powered expense management and financial tracking', features: ['Receipt Scanning', 'Category Classification', 'Budget Planning', 'Tax Preparation'] },
        { name: 'AI Task Manager Pro', price: '$129/month', description: 'Intelligent task management and productivity platform', features: ['Priority Optimization', 'Deadline Tracking', 'Team Collaboration', 'Progress Analytics'] }
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
        { name: 'Robotics Solutions', price: 'Custom', description: 'Intelligent robotic solutions for manufacturing and service industries', features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'] }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Building,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      services: [
        { name: 'AI-Powered CRM', price: '$1,299/month', description: 'Intelligent customer relationship management with AI insights', features: ['Customer Segmentation', 'Predictive Analytics', 'Automated Follow-ups', 'Sales Forecasting'] },
        { name: 'Enterprise Resource Planning', price: '$2,499/month', description: 'Comprehensive ERP solutions with AI optimization', features: ['Resource Planning', 'Inventory Management', 'Financial Integration', 'Workflow Automation'] },
        { name: 'Supply Chain Optimization', price: '$1,899/month', description: 'AI-driven supply chain management and optimization', features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'] },
        { name: 'Human Resources AI', price: '$999/month', description: 'AI-powered HR management and talent acquisition', features: ['Resume Screening', 'Performance Analytics', 'Employee Engagement', 'Talent Retention'] },
        { name: 'Financial Analytics Platform', price: '$1,599/month', description: 'Advanced financial analysis and reporting with AI', features: ['Risk Assessment', 'Fraud Detection', 'Investment Analysis', 'Compliance Monitoring'] },
        { name: 'Customer Experience Platform', price: '$1,399/month', description: 'Omnichannel customer experience management', features: ['Multi-channel Support', 'Personalization Engine', 'Sentiment Analysis', 'Customer Journey Mapping'] }
      ]
    },
    {
      title: 'Industry-Specific Solutions',
      icon: Factory,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      services: [
        { name: 'Healthcare AI Platform', price: '$2,999/month', description: 'AI solutions for healthcare providers and medical institutions', features: ['Patient Diagnosis', 'Treatment Planning', 'Medical Imaging', 'Drug Discovery'] },
        { name: 'Manufacturing Intelligence', price: '$1,799/month', description: 'AI-powered manufacturing optimization and quality control', features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Safety Monitoring'] },
        { name: 'Retail AI Solutions', price: '$1,499/month', description: 'AI-driven retail management and customer experience', features: ['Inventory Management', 'Price Optimization', 'Customer Analytics', 'Recommendation Engine'] },
        { name: 'Education Technology', price: '$1,199/month', description: 'AI-powered educational platforms and learning management', features: ['Personalized Learning', 'Assessment Tools', 'Content Generation', 'Progress Tracking'] },
        { name: 'Real Estate AI', price: '$899/month', description: 'AI solutions for real estate management and valuation', features: ['Property Valuation', 'Market Analysis', 'Tenant Screening', 'Maintenance Prediction'] },
        { name: 'Transportation & Logistics', price: '$1,699/month', description: 'AI-powered transportation and logistics optimization', features: ['Route Optimization', 'Fleet Management', 'Demand Prediction', 'Fuel Efficiency'] }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Globe,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      services: [
        { name: 'Metaverse Development', price: '$3,999/month', description: 'Virtual and augmented reality solutions for business', features: ['VR/AR Applications', 'Virtual Events', '3D Environments', 'Avatar Systems'] },
        { name: 'Digital Twin Solutions', price: '$2,499/month', description: 'Digital replicas of physical assets and processes', features: ['Asset Monitoring', 'Predictive Modeling', 'Simulation', 'Performance Optimization'] },
        { name: 'Edge AI Computing', price: '$1,799/month', description: 'AI processing at the edge for real-time applications', features: ['Low Latency Processing', 'Offline Capability', 'Resource Optimization', 'Security'] },
        { name: 'Neural Interface Development', price: 'Custom', description: 'Brain-computer interface and neural control systems', features: ['Signal Processing', 'Machine Learning', 'Real-time Control', 'Safety Protocols'] },
        { name: 'Autonomous Vehicle AI', price: 'Custom', description: 'AI systems for autonomous vehicles and transportation', features: ['Computer Vision', 'Path Planning', 'Safety Systems', 'Fleet Management'] },
        { name: 'Space Technology AI', price: 'Custom', description: 'AI solutions for space exploration and satellite management', features: ['Orbital Mechanics', 'Satellite Control', 'Data Processing', 'Mission Planning'] }
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
  return (
    <>
      <SEOOptimizer
        title="Services - Zion Tech Group"
        description="Professional AI and IT services for your business transformation. Comprehensive solutions including AI consulting, machine learning, cloud services, and micro SAAS solutions."
        keywords={['AI services', 'IT solutions', 'business transformation', 'machine learning', 'cloud services', 'micro SAAS', 'AI consulting']}
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
                  Our Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI and IT services designed to transform your business operations with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Service Categories
              </h2>
              <div className="space-y-16">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
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
                        <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
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
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
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
      <Footer />
    </>
  );
};

export default ServicesPage;