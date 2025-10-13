import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, FileText, Lock, Activity } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time dashboards and predictive analytics.',
      icon: BarChart3,
      features: ['Real-time Analytics', 'Custom Reports', 'AI Insights', 'Multi-source Integration'],
      price: 'From $29/month',
      featured: true,
      link: '/zion-analytics-pro'
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'AI-powered cybersecurity protection with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Response', 'Compliance Reports'],
      price: 'From $49/month',
      featured: true,
      link: '/zion-security-shield'
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage with unlimited space, end-to-end encryption, and team collaboration.',
      icon: Cloud,
      features: ['Unlimited Storage', 'End-to-End Encryption', 'Real-time Sync', 'Team Collaboration'],
      price: 'From $9/month',
      featured: true,
      link: '/zion-cloud-vault'
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, emails, and more.',
      icon: Code,
      features: ['AI Content Generation', 'Multi-format Support', 'SEO Optimization', 'Brand Voice Training'],
      price: 'From $19/month',
      featured: true,
      link: '/zion-content-studio'
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Real-time data synchronization across multiple systems with automated transformation.',
      icon: Database,
      features: ['Real-time Sync', 'Multi-source Integration', 'Data Validation', 'Monitoring & Alerts'],
      price: 'From $39/month',
      featured: true,
      link: '/zion-data-sync'
    },
    {
      id: 'project-management-tool',
      title: 'Project Management Tool',
      description: 'Streamline your project workflows with our intelligent project management solution.',
      icon: Settings,
      features: ['Task Tracking', 'Team Collaboration', 'Progress Analytics'],
      price: '$29/month',
      featured: false,
      link: '/project-management-tool'
    },
    {
      id: 'customer-relationship-manager',
      title: 'Customer Relationship Manager',
      description: 'Manage your customer relationships with our AI-powered CRM system.',
      icon: Users,
      features: ['Contact Management', 'Sales Pipeline', 'Customer Analytics'],
      price: '$39/month',
      featured: false,
      link: '/customer-relationship-manager'
    },
    {
      id: 'inventory-management-system',
      title: 'Inventory Management System',
      description: 'Optimize your inventory with smart tracking and automated reordering.',
      icon: Database,
      features: ['Stock Tracking', 'Automated Reordering', 'Analytics Dashboard'],
      price: '$49/month',
      featured: false,
      link: '/inventory-management-system'
    },
    {
      id: 'financial-reporting-tool',
      title: 'Financial Reporting Tool',
      description: 'Generate comprehensive financial reports and insights automatically.',
      icon: BarChart3,
      features: ['Automated Reports', 'Financial Analytics', 'Budget Tracking'],
      price: '$59/month',
      featured: false,
      link: '/financial-reporting-tool'
    },
    {
      id: 'employee-time-tracker',
      title: 'Employee Time Tracker',
      description: 'Track employee time and productivity with our advanced time management system.',
      icon: Clock,
      features: ['Time Tracking', 'Productivity Analytics', 'Payroll Integration'],
      price: '$19/month',
      featured: false,
      link: '/employee-time-tracker'
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'Schedule and manage your social media content across all platforms.',
      icon: Mail,
      features: ['Multi-Platform', 'Content Calendar', 'Analytics'],
      price: '$25/month',
      featured: false,
      link: '/social-media-scheduler'
    },
    {
      id: 'ai-email-automation',
      title: 'AI Email Automation',
      description: 'Intelligent email marketing with AI-powered personalization and automation.',
      icon: Mail,
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Analytics'],
      price: 'From $39/month',
      featured: false,
      link: '/ai-email-automation'
    },
    {
      id: 'ai-invoice-generator',
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered data extraction and formatting.',
      icon: FileText,
      features: ['Automated Generation', 'Data Extraction', 'Custom Templates', 'Payment Tracking'],
      price: 'From $29/month',
      featured: false,
      link: '/ai-invoice-generator'
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      icon: DollarSign,
      features: ['Receipt Scanning', 'Auto Categorization', 'Expense Reports', 'Budget Tracking'],
      price: 'From $19/month',
      featured: false,
      link: '/ai-expense-tracker'
    },
    {
      id: 'ai-password-manager',
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      icon: Lock,
      features: ['Secure Storage', 'Password Generation', 'Security Alerts', 'Multi-device Sync'],
      price: 'From $9/month',
      featured: false,
      link: '/ai-password-manager'
    },
    {
      id: 'ai-meeting-assistant',
      title: 'AI Meeting Assistant',
      description: 'Intelligent meeting transcription, summarization, and action item tracking.',
      icon: Users,
      features: ['Live Transcription', 'Meeting Summaries', 'Action Items', 'Calendar Integration'],
      price: 'From $49/month',
      featured: false,
      link: '/ai-meeting-assistant'
    },
    {
      id: 'ai-scheduler',
      title: 'AI Scheduler',
      description: 'Smart scheduling assistant that finds optimal meeting times for all participants.',
      icon: Clock,
      features: ['Smart Scheduling', 'Calendar Integration', 'Time Zone Handling', 'Conflict Resolution'],
      price: 'From $29/month',
      featured: false,
      link: '/ai-scheduler'
    },
    {
      id: 'ai-fitness-coach',
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans and nutrition guidance.',
      icon: Activity,
      features: ['Personalized Workouts', 'Nutrition Plans', 'Progress Tracking', 'Health Analytics'],
      price: 'From $39/month',
      featured: false,
      link: '/ai-fitness-coach'
    },
    {
      id: 'ai-hr-assistant',
      title: 'AI HR Assistant',
      description: 'Automated HR processes including recruitment, onboarding, and employee management.',
      icon: Users,
      features: ['Recruitment Automation', 'Onboarding Workflows', 'Employee Records', 'Performance Tracking'],
      price: 'From $59/month',
      featured: false,
      link: '/ai-hr-assistant'
    },
    {
      id: 'ai-inventory-manager',
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and automated reordering.',
      icon: Database,
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Analytics Dashboard'],
      price: 'From $49/month',
      featured: false,
      link: '/ai-inventory-manager'
    },
    {
      id: 'ai-customer-insights',
      title: 'AI Customer Insights',
      description: 'Deep customer analytics with AI-powered insights and behavioral analysis.',
      icon: BarChart3,
      features: ['Behavioral Analysis', 'Customer Segmentation', 'Predictive Analytics', 'Churn Prediction'],
      price: 'From $79/month',
      featured: false,
      link: '/ai-customer-insights'
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

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Featured Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.filter(service => service.featured).map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            All Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                    to={service.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
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