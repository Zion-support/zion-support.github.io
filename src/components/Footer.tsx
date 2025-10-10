import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Cloud, Code, Zap, ArrowRight, Database, Bot, Users, Shield, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, ShoppingCart, CreditCard, Building, Factory, Truck, Home, Heart, Stethoscope, GraduationCap, Briefcase, Calculator, Calendar, Globe, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning', category: 'Productivity' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media', category: 'Marketing' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics', category: 'Analytics' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns', category: 'Marketing' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support', category: 'Support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis', category: 'Development' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation', category: 'Media' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis', category: 'Media' },
    { name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music', category: 'Media' },
    { name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design', category: 'Design' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans', category: 'Health' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation', category: 'Design' }
  ];

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data analytics' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'Business insights' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbots' },
    { name: 'AI Code Generation', url: '/ai-code-generation', description: 'AI-powered coding' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Intelligent support' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data analysis' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Visual data insights' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial analysis' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead gen' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI marketing tools' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Predictive insights' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales automation' },
    { name: 'AI Website Builder', url: '/ai-website-builder', description: 'AI website creation' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps', url: '/devops', description: 'DevOps services' },
    { name: 'Mobile App Development', url: '/mobile-app-development', description: 'Mobile applications' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Database Management', url: '/database-management', description: 'Database solutions' },
    { name: 'API Development', url: '/api-development', description: 'API services' },
    { name: 'System Integration', url: '/system-integration', description: 'System integration' }
  ];

  const specializedServices = [
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI' },
    { name: 'AI Education', url: '/ai-education', description: 'Educational AI' },
    { name: 'AI Legal', url: '/ai-legal', description: 'Legal AI solutions' },
    { name: 'AI Real Estate', url: '/ai-real-estate', description: 'Real estate AI' },
    { name: 'AI Manufacturing', url: '/ai-manufacturing', description: 'Manufacturing AI' },
    { name: 'AI Transportation', url: '/ai-transportation', description: 'Transportation AI' },
    { name: 'AI Energy', url: '/ai-energy', description: 'Energy AI' },
    { name: 'AI Insurance', url: '/ai-insurance', description: 'Insurance AI' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of AI-powered enterprise solutions and digital transformation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <div className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Services
            </h3>
            <div className="space-y-2">
              {aiServices.slice(0, 6).map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              IT Services
            </h3>
            <div className="space-y-2">
              {itServices.slice(0, 6).map((service) => (
                <Link
                  key={service.name}
                  to={service.url}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;