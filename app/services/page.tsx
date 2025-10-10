import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Target,
  Database,
  Settings,
  Globe,
  Cpu,
  Lock,
  MessageSquare,
  Eye,
  Stethoscope,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Activity,
  FileText,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock,
  Compass,
  PieChart,
  TrendingDown,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      href: '/ai-analytics'
    },
    {
      name: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      icon: Zap,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      href: '/ai-automation'
    },
    {
      name: 'AI Customer Support',
      description: '24/7 AI-powered customer support solutions',
      icon: Bot,
      features: ['Chatbots', 'Voice Assistants', 'Multi-language Support', 'Sentiment Analysis'],
      href: '/ai-customer-support'
    },
    {
      name: 'AI Data Analytics',
      description: 'Transform raw data into actionable business insights',
      icon: Database,
      features: ['Big Data Processing', 'Machine Learning Models', 'Statistical Analysis', 'Trend Prediction'],
      href: '/ai-data-analytics'
    },
    {
      name: 'AI Content Generation',
      description: 'Create high-quality content with AI assistance',
      icon: FileText,
      features: ['Content Writing', 'SEO Optimization', 'Multi-format Support', 'Brand Voice Matching'],
      href: '/ai-content-generation'
    },
    {
      name: 'AI Healthcare',
      description: 'Revolutionary healthcare solutions powered by AI',
      icon: Stethoscope,
      features: ['Medical Diagnosis', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring'],
      href: '/ai-healthcare'
    },
    {
      name: 'AI Fintech',
      description: 'Financial technology solutions with AI integration',
      icon: DollarSign,
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      href: '/ai-fintech'
    },
    {
      name: 'AI Cybersecurity',
      description: 'Advanced cybersecurity powered by artificial intelligence',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Monitoring'],
      href: '/ai-cybersecurity'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      href: '/cloud-infrastructure'
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Training'],
      href: '/cybersecurity'
    },
    {
      name: 'Network Management',
      description: 'Optimize and secure your network infrastructure',
      icon: Globe,
      features: ['Network Design', 'Performance Monitoring', 'Traffic Management', 'Security Implementation'],
      href: '/network-management'
    },
    {
      name: 'Database Management',
      description: 'Efficient database solutions for data-driven businesses',
      icon: Database,
      features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Data Migration'],
      href: '/database-management'
    },
    {
      name: 'DevOps',
      description: 'Streamline development and deployment processes',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Logging', 'Container Orchestration'],
      href: '/devops'
    },
    {
      name: 'IT Consulting',
      description: 'Strategic IT guidance for digital transformation',
      icon: Briefcase,
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
      href: '/it-consulting'
    },
    {
      name: 'System Administration',
      description: 'Comprehensive system management and maintenance',
      icon: Wrench,
      features: ['Server Management', 'User Administration', 'System Monitoring', 'Performance Tuning'],
      href: '/system-administration'
    },
    {
      name: 'IT Support',
      description: '24/7 technical support for your IT infrastructure',
      icon: Phone,
      features: ['Help Desk', 'Remote Support', 'Hardware Maintenance', 'Software Updates'],
      href: '/it-support'
    }
  ];

  const microSaas = [
    {
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered insights',
      icon: Target,
      features: ['Smart Scheduling', 'Resource Allocation', 'Progress Tracking', 'Risk Assessment'],
      href: '/ai-project-manager',
      price: '$99/mo'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time analytics and business intelligence platform',
      icon: BarChart,
      features: ['Custom Dashboards', 'Real-time Data', 'Predictive Analytics', 'Export Reports'],
      href: '/ai-analytics-dashboard',
      price: '$149/mo'
    },
    {
      name: 'AI Customer Support Bot',
      description: 'Automated customer support with natural language processing',
      icon: Bot,
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Escalation Management'],
      href: '/ai-customer-support-bot',
      price: '$199/mo'
    },
    {
      name: 'AI Content Writer',
      description: 'AI-powered content creation and optimization tool',
      icon: FileText,
      features: ['Content Generation', 'SEO Optimization', 'Multi-format', 'Brand Voice'],
      href: '/ai-content-writer',
      price: '$79/mo'
    },
    {
      name: 'AI Financial Advisor',
      description: 'Personalized financial planning and investment advice',
      icon: DollarSign,
      features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Market Insights'],
      href: '/ai-financial-advisor',
      price: '$129/mo'
    },
    {
      name: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management system',
      icon: Users,
      features: ['Lead Management', 'Sales Automation', 'Customer Insights', 'Pipeline Tracking'],
      href: '/ai-crm-assistant',
      price: '$89/mo'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including analytics, automation, cybersecurity, cloud infrastructure, and micro SaaS solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#ai-services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Explore AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#it-services"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
              >
                View IT Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="ai-services" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 mr-3 text-cyan-400" />
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section id="it-services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <Cloud className="w-8 h-8 mr-3 text-blue-400" />
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to support and scale your business infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Section */}
      <section id="micro-saas" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-green-400" />
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use AI-powered applications for immediate business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaas.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105 group relative"
              >
                {service.price && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {service.price}
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Free Consultation
            </a>
            <a
              href="/consultation"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;