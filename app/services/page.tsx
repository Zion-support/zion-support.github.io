'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Calculator,
  Calendar,
  Clock3,
  Activity,
  DollarSign,
  Truck,
  Mic,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const microSAASServices = [
    // Productivity & Management Tools
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$99/mo', description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: CheckCircle, category: 'Productivity', price: '$49/mo', description: 'Smart task management with AI prioritization, deadline tracking, and productivity insights' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity', price: '$79/mo', description: 'Automate repetitive tasks with intelligent workflow design and execution' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity', price: '$39/mo', description: 'Smart scheduling with conflict resolution and optimal time slot recommendations' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity', price: '$34/mo', description: 'Advanced time tracking with AI-powered productivity analysis and reporting' },
    
    // Content & Marketing Tools
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo', description: 'Advanced AI content generation for blogs, articles, and marketing copy' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo', description: 'Automated social media posting, engagement, and analytics with AI optimization' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo', description: 'AI-powered email campaigns with personalization and performance optimization' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo', description: 'Comprehensive SEO analysis and optimization with AI-driven recommendations' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo', description: 'Intelligent lead scoring, qualification, and nurturing automation' },
    
    // Business & Finance Tools
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo', description: 'Smart CRM with AI-powered customer insights and sales forecasting' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo', description: 'Advanced financial analysis with AI-driven insights and forecasting' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo', description: 'Automated invoice generation with AI-powered pricing and payment tracking' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo', description: 'Smart expense tracking with AI categorization and budget management' },
    { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp, category: 'Finance', price: '$79/mo', description: 'AI-powered portfolio optimization and investment recommendations' },
    
    // Customer Service & Support Tools
    { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot', icon: Bot, category: 'Support', price: '$99/mo', description: 'Advanced AI chatbot with natural language processing and human handoff' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot, category: 'Support', price: '$69/mo', description: 'No-code chatbot builder with AI training and optimization' },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail, category: 'Support', price: '$39/mo', description: 'AI-powered email response generation and customer service automation' },
    
    // Development & Technical Tools
    { name: 'AI Code Review Assistant Pro', href: '/ai-code-generation', icon: Code, category: 'Development', price: '$89/mo', description: 'AI-powered code review, suggestions, and automated testing' },
    { name: 'AI Mobile App Builder Pro', href: '/ai-mobile-app-development', icon: Settings, category: 'Development', price: '$149/mo', description: 'No-code mobile app development with AI optimization' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity', icon: Shield, category: 'Security', price: '$199/mo', description: 'AI-powered threat detection and security monitoring' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock, category: 'Security', price: '$19/mo', description: 'Advanced password management with AI-powered security recommendations' },
    
    // Analytics & Data Tools
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics', price: '$99/mo', description: 'Advanced data analytics with AI-powered insights and predictions' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics', price: '$69/mo', description: 'AI-generated charts, graphs, and interactive dashboards' },
    
    // Creative & Media Tools
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative', price: '$149/mo', description: 'AI-powered video creation from text prompts and templates' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative', price: '$79/mo', description: 'High-quality voice cloning and synthesis for various applications' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative', price: '$59/mo', description: 'AI-generated music composition and production tools' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative', price: '$59/mo', description: 'Professional logo design with AI-powered creativity' },
    
    // Health & Wellness Tools
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Stethoscope, category: 'Health', price: '$49/mo', description: 'AI-powered health monitoring and wellness recommendations' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo', description: 'Personalized fitness plans and workout optimization with AI' },
    
    // Sales & Business Tools
    { name: 'AI Sales Automation Pro', href: '/ai-sales-automation', icon: Target, category: 'Sales', price: '$149/mo', description: 'Complete sales automation with AI-powered lead scoring and follow-up' },
    { name: 'AI Sales Forecasting', href: '/ai-sales-forecasting', icon: TrendingUp, category: 'Sales', price: '$99/mo', description: 'Accurate sales predictions and pipeline analysis with AI' }
  ];

  const aiServices = [
    // Core AI Technologies
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain, price: '$2,500/mo', description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation' },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare, price: '$1,800/mo', description: 'Advanced NLP for text analysis, sentiment analysis, and language understanding' },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye, price: '$2,200/mo', description: 'Image and video analysis, object detection, and visual recognition systems' },
    { name: 'Deep Learning Solutions', href: '/deep-learning', icon: Brain, price: '$3,000/mo', description: 'Neural network architectures for complex pattern recognition and decision making' },
    { name: 'Generative AI Solutions', href: '/generative-ai', icon: Sparkles, price: '$2,000/mo', description: 'AI content generation, creative applications, and synthetic data creation' },
    
    // Business Intelligence & Analytics
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart, price: '$1,500/mo', description: 'AI-powered business insights, reporting, and strategic decision support' },
    { name: 'AI Predictive Analytics Platform', href: '/ai-predictive-analytics', icon: BarChart, price: '$2,200/mo', description: 'Advanced forecasting and predictive modeling for business outcomes' },
    { name: 'AI Real-Time Analytics', href: '/ai-realtime-analytics', icon: Activity, price: '$1,600/mo', description: 'Live data processing and instant insights for operational decisions' },
    
    // Industry-Specific AI Solutions
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope, price: '$2,500/mo', description: 'Medical diagnosis assistance, drug discovery, and patient care optimization' },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard, price: '$2,800/mo', description: 'Fraud detection, algorithmic trading, and financial risk assessment' },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory, price: '$2,200/mo', description: 'Smart manufacturing, quality control, and supply chain optimization' },
    { name: 'AI Retail Solutions', href: '/ai-retail', icon: ShoppingCart, price: '$1,800/mo', description: 'Personalized shopping experiences, inventory optimization, and demand forecasting' },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck, price: '$2,000/mo', description: 'Route optimization, autonomous vehicles, and logistics management' },
    
    // Advanced AI Technologies
    { name: 'Quantum AI Computing', href: '/ai-quantum-computing', icon: Cpu, price: '$5,000/mo', description: 'Quantum-enhanced AI algorithms for complex optimization problems' },
    { name: 'AI Robotics', href: '/ai-robotics', icon: Settings, price: '$4,500/mo', description: 'Intelligent robotic systems for automation and human-robot collaboration' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Settings, price: '$4,200/mo', description: 'Self-operating systems for vehicles, drones, and industrial automation' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock, price: '$2,500/mo', description: 'AI-powered blockchain applications and smart contract optimization' }
  ];

  const itServices = [
    // Cloud Services & Infrastructure
    { name: 'Cloud Migration Services', href: '/cloud-migration', icon: Cloud, price: '$2,500/mo', description: 'Complete cloud migration strategy, planning, and execution for AWS, Azure, and GCP' },
    { name: 'Cloud Infrastructure Management', href: '/cloud-infrastructure', icon: Cloud, price: '$2,000/mo', description: '24/7 cloud infrastructure monitoring, optimization, and management' },
    { name: 'Multi-Cloud Solutions', href: '/multi-cloud', icon: Cloud, price: '$2,800/mo', description: 'Hybrid and multi-cloud architecture design and implementation' },
    
    // Cybersecurity & Security Services
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, price: '$2,500/mo', description: 'Comprehensive cybersecurity assessment, implementation, and monitoring' },
    { name: 'Network Security Solutions', href: '/network-security', icon: Shield, price: '$2,000/mo', description: 'Advanced network security architecture and threat protection' },
    { name: 'Security Operations Center (SOC)', href: '/soc', icon: Activity, price: '$3,500/mo', description: '24/7 security monitoring, incident response, and threat hunting' },
    
    // DevOps & Development Services
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$2,200/mo', description: 'DevOps transformation, CI/CD pipeline setup, and automation' },
    { name: 'Container Orchestration', href: '/container-orchestration', icon: Settings, price: '$1,800/mo', description: 'Kubernetes, Docker, and container management solutions' },
    { name: 'API Development & Management', href: '/api-development', icon: Code, price: '$1,800/mo', description: 'RESTful and GraphQL API development and lifecycle management' },
    
    // Database & Data Services
    { name: 'Database Services', href: '/database-services', icon: Database, price: '$1,800/mo', description: 'Database design, optimization, migration, and management' },
    { name: 'Data Warehouse Solutions', href: '/data-warehouse', icon: Database, price: '$2,200/mo', description: 'Data warehouse design, ETL processes, and analytics infrastructure' },
    { name: 'Big Data Solutions', href: '/big-data', icon: Database, price: '$2,800/mo', description: 'Hadoop, Spark, and big data processing solutions' },
    
    // Enterprise Solutions & Integration
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: '$4,000/mo', description: 'Comprehensive enterprise IT transformation and digital modernization' },
    { name: 'System Integration', href: '/system-integration', icon: Settings, price: '$2,500/mo', description: 'Legacy system integration and API connectivity solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Globe, price: '$3,000/mo', description: 'Complete digital transformation strategy and implementation' },
    
    // IT Infrastructure & Support
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings, price: '$2,200/mo', description: 'Complete IT infrastructure design, implementation, and management' },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users, price: '$1,500/mo', description: '24/7 IT support, helpdesk, and technical assistance' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart, price: '$1,200/mo', description: 'IT asset tracking, lifecycle management, and optimization' }
  ];

  const specializedServices = [
    // Quantum Computing & Advanced Technologies
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu, price: '$8,000/mo', description: 'Quantum algorithm development, quantum machine learning, and quantum optimization' },
    { name: 'Quantum AI Integration', href: '/quantum-ai', icon: Brain, price: '$6,000/mo', description: 'Quantum-enhanced AI algorithms and hybrid quantum-classical computing' },
    
    // Autonomous Systems & Robotics
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$6,500/mo', description: 'Self-driving vehicles, autonomous drones, and intelligent automation systems' },
    { name: 'Robotic Process Automation', href: '/rpa', icon: Settings, price: '$2,800/mo', description: 'Intelligent process automation and robotic workflow optimization' },
    
    // Blockchain & Web3 Technologies
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$3,500/mo', description: 'Blockchain development, smart contracts, and Web3 application architecture' },
    { name: 'DeFi Solutions', href: '/defi', icon: CreditCard, price: '$4,000/mo', description: 'Decentralized finance protocols and DeFi application development' },
    
    // IoT & Edge Computing
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Settings, price: '$2,800/mo', description: 'Internet of Things device integration, data collection, and management' },
    { name: 'Edge Computing', href: '/edge-computing', icon: Cpu, price: '$2,200/mo', description: 'Edge computing infrastructure and distributed processing solutions' },
    
    // Emerging Technologies
    { name: 'Augmented Reality (AR)', href: '/ar-solutions', icon: Eye, price: '$3,200/mo', description: 'AR application development and immersive user experiences' },
    { name: 'Virtual Reality (VR)', href: '/vr-solutions', icon: Eye, price: '$3,500/mo', description: 'VR platform development and virtual environment creation' },
    { name: 'Digital Twins', href: '/digital-twins', icon: Settings, price: '$3,000/mo', description: 'Digital twin creation and real-time simulation platforms' }
  ];

  const tabs = [
    { id: 'micro-saas', name: 'Micro SAAS Solutions', count: microSAASServices.length },
    { id: 'ai-services', name: 'AI Services', count: aiServices.length },
    { id: 'it-services', name: 'IT Services', count: itServices.length },
    { id: 'specialized', name: 'Specialized Solutions', count: specializedServices.length }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'micro-saas': return microSAASServices;
      case 'ai-services': return aiServices;
      case 'it-services': return itServices;
      case 'specialized': return specializedServices;
      default: return microSAASServices;
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and micro SAAS applications. From machine learning to cloud infrastructure, we provide cutting-edge technology solutions for businesses of all sizes." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, machine learning, business intelligence, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Technology
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Solutions & Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From cutting-edge AI applications to robust IT infrastructure, we provide end-to-end technology solutions that drive innovation and growth for businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Tabs */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {tab.name}
                  <span className="ml-2 px-2 py-1 bg-slate-700 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentServices().map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <span className="text-sm text-cyan-400 font-medium">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={service.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-400">4.8+</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive your success. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;