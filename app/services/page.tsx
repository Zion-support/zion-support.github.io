'use client';
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      id: 'ai-analytics',
      name: 'AI Analytics',
      category: 'ai',
      icon: BarChart,
      description: 'Advanced data analytics powered by artificial intelligence to uncover insights and drive business decisions.',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
      price: 'Starting at $2,500/month'
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      category: 'ai',
      icon: Zap,
      description: 'Streamline your workflows with intelligent automation solutions that reduce manual work and increase efficiency.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Scheduling', 'Error Reduction'],
      price: 'Starting at $1,800/month'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Builder',
      category: 'ai',
      icon: MessageCircle,
      description: 'Build intelligent chatbots that provide 24/7 customer support and enhance user engagement.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard'],
      price: 'Starting at $1,200/month'
    },
    {
      id: 'ai-crm',
      name: 'AI CRM',
      category: 'ai',
      icon: Users,
      description: 'Customer relationship management enhanced with AI to improve sales and customer satisfaction.',
      features: ['Lead Scoring', 'Predictive Sales', 'Customer Insights', 'Automated Follow-ups'],
      price: 'Starting at $3,000/month'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'ai',
      icon: Shield,
      description: 'Advanced threat detection and prevention using AI to protect your digital assets.',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
      price: 'Starting at $2,200/month'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      category: 'ai',
      icon: Database,
      description: 'Transform your data into actionable insights with AI-powered analytics solutions.',
      features: ['Data Visualization', 'Pattern Recognition', 'Automated Reporting', 'Real-time Analysis'],
      price: 'Starting at $2,800/month'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'ai',
      icon: Heart,
      description: 'Healthcare technology solutions powered by AI to improve patient care and outcomes.',
      features: ['Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring', 'Medical Imaging'],
      price: 'Starting at $4,500/month'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech',
      category: 'ai',
      icon: DollarSign,
      description: 'Financial technology solutions with AI for fraud detection, risk assessment, and automated trading.',
      features: ['Fraud Detection', 'Risk Analysis', 'Algorithmic Trading', 'Credit Scoring'],
      price: 'Starting at $3,500/month'
    },

    // IT Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      category: 'it',
      icon: Cloud,
      description: 'Scalable and secure cloud solutions for modern businesses with 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 'api-management',
      name: 'API Management',
      category: 'it',
      icon: Code,
      description: 'Comprehensive API development, management, and monitoring solutions.',
      features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Analytics'],
      price: 'Starting at $1,200/month'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      category: 'it',
      icon: Lock,
      description: 'Complete cybersecurity solutions to protect your business from evolving threats.',
      features: ['Firewall Management', 'Intrusion Detection', 'Vulnerability Assessment', 'Security Training'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      category: 'it',
      icon: Globe,
      description: 'Advanced networking solutions for optimal performance and security.',
      features: ['Network Design', 'Performance Optimization', 'Security Hardening', '24/7 Monitoring'],
      price: 'Starting at $1,800/month'
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      category: 'it',
      icon: Smartphone,
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      price: 'Starting at $5,000/project'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'it',
      icon: Settings,
      description: 'Seamless integration of disparate systems for improved efficiency and data flow.',
      features: ['Legacy System Integration', 'API Development', 'Data Migration', 'Testing & Validation'],
      price: 'Starting at $3,000/project'
    },

    // Micro SaaS
    {
      id: 'project-management',
      name: 'Project Management',
      category: 'saas',
      icon: CheckSquare,
      description: 'Streamlined project tracking and team collaboration tools.',
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Resource Planning'],
      price: 'Starting at $29/month'
    },
    {
      id: 'customer-support',
      name: 'Customer Support',
      category: 'saas',
      icon: MessageCircle,
      description: 'Efficient customer support and ticketing system.',
      features: ['Ticket Management', 'Live Chat', 'Knowledge Base', 'Performance Analytics'],
      price: 'Starting at $49/month'
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      category: 'saas',
      icon: BarChart,
      description: 'Business intelligence and analytics dashboard for data-driven decisions.',
      features: ['Custom Dashboards', 'Real-time Data', 'Report Generation', 'Data Export'],
      price: 'Starting at $39/month'
    },
    {
      id: 'content-management',
      name: 'Content Management',
      category: 'saas',
      icon: FileText,
      description: 'Content organization and management system for teams.',
      features: ['Content Library', 'Version Control', 'Collaboration Tools', 'Search & Filter'],
      price: 'Starting at $19/month'
    },
    {
      id: 'team-collaboration',
      name: 'Team Collaboration',
      category: 'saas',
      icon: Users,
      description: 'Team productivity and collaboration tools for remote and hybrid teams.',
      features: ['Video Conferencing', 'File Sharing', 'Team Chat', 'Calendar Integration'],
      price: 'Starting at $15/month'
    },
    {
      id: 'financial-tracking',
      name: 'Financial Tracking',
      category: 'saas',
      icon: DollarSign,
      description: 'Financial management and expense tracking for small businesses.',
      features: ['Expense Tracking', 'Invoice Management', 'Financial Reports', 'Tax Preparation'],
      price: 'Starting at $25/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Filter },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SaaS', icon: Box }
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, business solutions, technology consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive AI, IT, and Micro SaaS solutions designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg whitespace-nowrap transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/consultation"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;