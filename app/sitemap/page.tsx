import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Settings, Target, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Calculator, Calendar, Globe, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Main homepage with company overview' },
    { name: 'About', href: '/about', description: 'Company information and mission' },
    { name: 'Team', href: '/team', description: 'Meet our expert team' },
    { name: 'Services', href: '/services', description: 'Our comprehensive service offerings' },
    { name: 'AI Solutions', href: '/ai-services', description: 'AI-powered solutions and services' },
    { name: 'IT Services', href: '/it-services', description: 'Information technology services' },
    { name: 'Micro SAAS', href: '/micro-saas', description: 'Micro software-as-a-service solutions' },
    { name: 'Enterprise', href: '/enterprise', description: 'Enterprise-level solutions' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and case studies' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and technology news' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
    { name: 'Pricing', href: '/pricing', description: 'Transparent pricing for all services' },
    { name: 'Careers', href: '/careers', description: 'Join our growing team' },
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' }
  ];

  const aiServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart, category: 'Productivity' },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, category: 'Content' },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target, category: 'Marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, category: 'Support' },
    { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code, category: 'Development' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, category: 'Security' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, category: 'Analytics' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, category: 'Health' },
    { name: 'AI Mobile Development', href: '/ai-mobile-app-development', icon: Code, category: 'Development' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, category: 'Automation' },
    { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video, category: 'Media' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Music, category: 'Media' },
    { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music, category: 'Media' },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Palette, category: 'Design' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Camera, category: 'Design' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, category: 'Health' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, category: 'Sales' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, category: 'Marketing' },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users, category: 'Business' },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart, category: 'Business' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot, category: 'Support' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: MessageSquare, category: 'Support' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, category: 'Development' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, category: 'Analytics' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText, category: 'Content' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, category: 'Content' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: CheckCircle, category: 'Productivity' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: Calculator, category: 'Finance' },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, category: 'General' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, category: 'Infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, category: 'Security' },
    { name: 'Data Management', href: '/data-management', icon: Database, category: 'Data' },
    { name: 'Web Development', href: '/web-development', icon: Code, category: 'Development' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Code, category: 'Development' },
    { name: 'DevOps', href: '/devops', icon: Settings, category: 'Operations' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, category: 'Consulting' },
    { name: 'System Integration', href: '/system-integration', icon: Settings, category: 'Integration' },
    { name: 'IT Support', href: '/it-support', icon: Users, category: 'Support' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, category: 'Infrastructure' },
    { name: 'Database Services', href: '/database-services', icon: Database, category: 'Data' },
    { name: 'IT Training', href: '/it-training', icon: GraduationCap, category: 'Education' }
  ];

  const microSaasServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity' },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle, category: 'Productivity' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText, category: 'Content' },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText, category: 'Content' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: MessageSquare, category: 'Marketing' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, category: 'Marketing' },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users, category: 'Business' },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance' },
    { name: 'AI Expense Tracker', href: '/expense-tracker', icon: Calculator, category: 'Finance' },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart, category: 'Business' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot, category: 'Support' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot, category: 'Support' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: MessageSquare, category: 'Support' },
    { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code, category: 'Development' },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-development', icon: Code, category: 'Development' },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield, category: 'Security' },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText, category: 'Development' },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart, category: 'Analytics' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Media' },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music, category: 'Media' },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music, category: 'Media' },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette, category: 'Design' },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera, category: 'Design' },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart, category: 'Health' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart, category: 'Health' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, category: 'Sales' }
  ];

  const categories = {
    'AI Services': aiServices,
    'IT Services': itServices,
    'Micro SAAS': microSaasServices
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-12 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site map.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Pages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Home className="w-8 h-8 mr-3 text-cyan-400" />
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                className="group bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-6 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-400 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        {Object.entries(categories).map(([categoryName, services]) => (
          <div key={categoryName} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              {categoryName === 'AI Services' && <Brain className="w-8 h-8 mr-3 text-cyan-400" />}
              {categoryName === 'IT Services' && <Settings className="w-8 h-8 mr-3 text-cyan-400" />}
              {categoryName === 'Micro SAAS' && <Zap className="w-8 h-8 mr-3 text-cyan-400" />}
              {categoryName}
            </h2>
            
            {/* Group services by category */}
            {Object.entries(
              services.reduce((acc, service) => {
                const category = service.category || 'General';
                if (!acc[category]) acc[category] = [];
                acc[category].push(service);
                return acc;
              }, {} as Record<string, typeof services>)
            ).map(([subCategory, subServices]) => (
              <div key={subCategory} className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{subCategory}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {subServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="group bg-slate-800/30 hover:bg-slate-700/50 rounded-lg p-4 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <service.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-300 mb-6">
            Our team is here to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SitemapPage;