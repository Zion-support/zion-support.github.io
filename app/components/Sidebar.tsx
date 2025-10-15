import React, { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  Cloud,
  Code,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  }, []);

  const navigationSections = useMemo(() => [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: Phone },
        { name: 'Pricing', href: '/pricing', icon: Star }
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Settings },
        { name: 'AI Services', href: '/ai-services', icon: Code },
        { name: 'Data Analytics', href: '/data-analytics', icon: Settings },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Code },
        { name: 'AI Document Processor', href: '/ai-document-processor', icon: Code },
        { name: 'AI Form Builder', href: '/ai-form-builder', icon: Code },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Settings },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Settings },
        { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: Settings },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: Settings },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings },
        { name: 'AI Price Optimizer', href: '/ai-price-optimizer', icon: Settings },
        { name: 'AI Scheduling Assistant', href: '/ai-scheduling-assistant', icon: Settings },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: Code },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: Settings },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: Code },
        { name: 'AI Email Optimizer', href: '/ai-email-optimizer', icon: Mail },
        { name: 'AI Website Analyzer', href: '/ai-website-analyzer', icon: Settings },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Settings }
      ]
    },
    {
      title: 'Micro SaaS',
      items: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: Cloud },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: Settings },
        { name: 'Analytics Dashboard', href: '/analytics-dashboard', icon: Code },
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: Users },
        { name: 'Inventory Manager', href: '/inventory-manager', icon: Settings },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: Settings },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', icon: Settings },
        { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: Code },
        { name: 'AI Translator', href: '/ai-translator', icon: Cloud },
        { name: 'AI Video Generator', href: '/ai-video-generator', icon: Settings },
        { name: 'AI Audio Processor', href: '/ai-audio-processor', icon: Settings },
        { name: 'AI 3D Model Generator', href: '/ai-3d-model-generator', icon: Settings },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: Settings },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: Users },
        { name: 'AI Education Tutor', href: '/ai-education-tutor', icon: Users },
        { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: Code },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: Settings }
      ]
    },
    {
      title: 'IT Solutions',
      items: [
        { name: 'IT Solutions Overview', href: '/it-solutions', icon: Settings },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { name: 'Web Development', href: '/web-development', icon: Code },
        { name: 'Mobile Development', href: '/mobile-development', icon: Settings },
        { name: 'Database Management', href: '/database-management', icon: Settings },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Cloud },
        { name: '5G Solutions', href: '/5g-solutions', icon: Cloud },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Settings },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Settings },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: Settings },
        { name: 'DevOps Automation', href: '/devops-automation', icon: Settings },
        { name: 'Data Engineering', href: '/data-engineering', icon: Code },
        { name: 'API Development', href: '/api-development', icon: Code },
        { name: 'Security Audit', href: '/security-audit', icon: Settings },
        { name: 'Quantum Computing', href: '/quantum-computing-solutions', icon: Settings },
        { name: 'Edge Computing', href: '/edge-computing-solutions', icon: Cloud },
        { name: 'AR Solutions', href: '/augmented-reality-solutions', icon: Settings },
        { name: 'VR Solutions', href: '/virtual-reality-solutions', icon: Settings },
        { name: 'RPA Solutions', href: '/robotic-process-automation', icon: Settings },
        { name: 'Low-Code Platform', href: '/low-code-platform', icon: Code },
        { name: 'Serverless Architecture', href: '/serverless-architecture', icon: Cloud },
        { name: 'Container Orchestration', href: '/container-orchestration', icon: Settings },
        { name: 'AI Infrastructure', href: '/ai-infrastructure', icon: Settings },
        { name: 'Data Lake Solutions', href: '/data-lake-solutions', icon: Settings }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: Code },
        { name: 'Case Studies', href: '/case-studies', icon: Star },
        { name: 'API Documentation', href: '/api-docs', icon: Code },
        { name: 'Help Center', href: '/help', icon: Settings },
        { name: 'Accessibility', href: '/accessibility', icon: Settings }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partnerships', href: '/partnerships', icon: Users },
        { name: 'Contact', href: '/contact', icon: Phone }
      ]
    }
  ], []);

  const isActive = (href: string) => location.pathname === href;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md shadow-xl border-r border-cyan-500/30">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/30">
          <h2 className="text-lg font-semibold text-white holographic-text">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          {navigationSections.map((section) => (
            <div key={section.title} className="border-b border-slate-700">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between p-4 text-left text-white hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-200"
              >
                <span className="font-medium">{section.title}</span>
                {expandedSections.has(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {expandedSections.has(section.title) && (
                <div className="bg-slate-800/50">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-6 py-3 text-sm transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-cyan-500/20 text-cyan-300 border-l-2 border-cyan-500'
                          : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300'
                      }`}
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.name}
                      {isActive(item.href) && (
                        <ArrowRight className="h-3 w-3 ml-auto" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30">
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-cyan-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-cyan-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
