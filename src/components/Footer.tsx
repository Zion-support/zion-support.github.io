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
    { name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'Quantum AI Computing', url: '/quantum-ai', description: 'Next-gen algorithms' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications' },
    { name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps' },
    { name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'AWS/Azure/GCP setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows' },
    { name: 'Database Services', url: '/database-services', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: '24/7 technical support' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered enterprise solutions and digital transformation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-sm text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-services"
              className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-4 inline-flex items-center"
            >
              View All AI Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-sm text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/it-services"
              className="text-green-400 hover:text-green-300 text-sm font-medium mt-4 inline-flex items-center"
            >
              View All IT Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
