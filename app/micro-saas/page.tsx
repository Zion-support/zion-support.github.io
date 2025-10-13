import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Brain, Globe, FileText } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'ai-content-writer-pro',
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, plagiarism detection, and multi-language support.',
      icon: Brain,
      features: ['SEO Optimization', 'Plagiarism Detection', 'Multi-Language', '100+ Templates'],
      price: 'From $29/month',
      category: 'Content Creation',
      featured: true
    },
    {
      id: 'smart-crm-assistant',
      title: 'Smart CRM Assistant',
      description: 'AI-powered customer relationship management with automated follow-ups, lead scoring, and sales forecasting.',
      icon: Users,
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Pipeline Management'],
      price: 'From $49/month',
      category: 'Business Management',
      featured: true
    },
    {
      id: 'expense-tracker-ai',
      title: 'Expense Tracker AI',
      description: 'Intelligent expense management with receipt scanning, categorization, and automated reporting.',
      icon: DollarSign,
      features: ['Receipt Scanning', 'Smart Categorization', 'Automated Reports', 'Multi-Currency'],
      price: 'From $19/month',
      category: 'Finance',
      featured: true
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'Multi-platform social media management with AI-optimized posting times and content suggestions.',
      icon: Globe,
      features: ['Multi-Platform', 'AI Optimization', 'Content Calendar', 'Analytics'],
      price: 'From $39/month',
      category: 'Marketing',
      featured: false
    },
    {
      id: 'project-management-hub',
      title: 'Project Management Hub',
      description: 'Comprehensive project tracking with AI-powered resource allocation and deadline predictions.',
      icon: Settings,
      features: ['AI Resource Allocation', 'Deadline Predictions', 'Team Collaboration', 'Progress Analytics'],
      price: 'From $59/month',
      category: 'Productivity',
      featured: false
    },
    {
      id: 'email-marketing-automation',
      title: 'Email Marketing Automation',
      description: 'Advanced email campaigns with AI-driven personalization and automated workflows.',
      icon: Mail,
      features: ['AI Personalization', 'Automated Workflows', 'A/B Testing', 'Analytics'],
      price: 'From $39/month',
      category: 'Marketing',
      featured: false
    },
    {
      id: 'inventory-management-ai',
      title: 'Inventory Management AI',
      description: 'Smart inventory tracking with demand forecasting and automated reorder suggestions.',
      icon: Database,
      features: ['Demand Forecasting', 'Automated Reordering', 'Smart Analytics', 'Multi-Location'],
      price: 'From $49/month',
      category: 'Operations',
      featured: false
    },
    {
      id: 'customer-support-bot',
      title: 'Customer Support Bot',
      description: '24/7 AI chatbot with natural language processing and seamless human handoff.',
      icon: Brain,
      features: ['24/7 Support', 'NLP Processing', 'Human Handoff', 'Multi-Language'],
      price: 'From $79/month',
      category: 'Customer Service',
      featured: false
    },
    {
      id: 'analytics-dashboard-pro',
      title: 'Analytics Dashboard Pro',
      description: 'Real-time business analytics with custom reports and predictive insights.',
      icon: BarChart3,
      features: ['Real-time Analytics', 'Custom Reports', 'Predictive Insights', 'Data Visualization'],
      price: 'From $69/month',
      category: 'Analytics',
      featured: false
    },
    {
      id: 'document-processor-ai',
      title: 'Document Processor AI',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization.',
      icon: FileText,
      features: ['OCR Technology', 'Data Extraction', 'Smart Categorization', 'Batch Processing'],
      price: 'From $89/month',
      category: 'Document Management',
      featured: false
    },
    {
      id: 'time-tracking-assistant',
      title: 'Time Tracking Assistant',
      description: 'Smart time tracking with productivity insights and automated timesheet generation.',
      icon: Clock,
      features: ['Smart Tracking', 'Productivity Insights', 'Automated Timesheets', 'Team Management'],
      price: 'From $29/month',
      category: 'Productivity',
      featured: false
    },
    {
      id: 'lead-generation-engine',
      title: 'Lead Generation Engine',
      description: 'AI-powered lead identification and qualification with automated outreach sequences.',
      icon: Users,
      features: ['Lead Identification', 'Qualification AI', 'Automated Outreach', 'CRM Integration'],
      price: 'From $99/month',
      category: 'Sales',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Custom micro software-as-a-service solutions designed to streamline your business operations and boost productivity."
        keywords="micro SAAS, software as a service, business tools, productivity, automation, project management, CRM"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Custom micro software-as-a-service solutions designed to streamline your business operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="w-12 h-12 text-blue-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-400">{service.price}</span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Cloud className="w-4 h-4 mr-1" />
                    <span>Cloud Hosted</span>
                  </div>
                </div>
                
                <Link 
                  to={`/${service.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our micro SAAS solutions can help you automate processes and increase efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Start Your SAAS Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;