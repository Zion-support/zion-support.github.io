import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Star,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  MousePointer,
  Volume2,
  Accessibility,
  Wrench,
  Cog,
  Layers,
  Network,
  Server,
  Monitor,
  Wifi,
  Palette,
  FileText as FileTextIcon,
  MapPin as Location,
  Truck,
  ChefHat,
  Rocket,
  Sprout,
  Scale
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI Services',
      icon: Brain,
      services: [
        { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced AI-powered analytics' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI-powered content creation' },
        { name: 'AI Customer Support', href: '/ai-customer-support', description: 'Intelligent customer service' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Marketing', href: '/ai-marketing', description: 'AI-driven marketing solutions' },
        { name: 'AI Project Management', href: '/ai-project-manager', description: 'Smart project coordination' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Automated sales processes' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation', description: 'Streamlined workflows' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      links: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'DevOps', href: '/devops' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Network Security', href: '/network-security' }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare AI', href: '/ai-healthcare' },
        { name: 'Fintech AI', href: '/ai-fintech' },
        { name: 'Manufacturing AI', href: '/ai-manufacturing' },
        { name: 'Retail AI', href: '/ai-retail' },
        { name: 'Education AI', href: '/ai-education' },
        { name: 'Transportation AI', href: '/ai-transportation' },
        { name: 'Smart Calendar System', href: '/ai-smart-calendar' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Demo', href: '/demo' },
        { name: 'Consultation', href: '/consultation' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Support Center', href: '/support' },
        { name: 'Status Page', href: '/status' },
        { name: 'Community', href: '/community' },
        { name: 'Training', href: '/training' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ];

  return (
    <footer className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-8">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
              Transform your business with our advanced AI capabilities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                {section.icon && <section.icon className="w-5 h-5 text-blue-400" />}
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {(section.services || section.links)?.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                    {item.description && (
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;