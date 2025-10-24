import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserPlusIcon,
  CheckCircleIcon,
  MicrophoneIcon,
  CubeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'AI Services',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Solutions Overview', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Document Processor', href: '/ai-document-processor', icon: DocumentTextIcon },
        { name: 'AI Form Builder', href: '/ai-form-builder', icon: DocumentTextIcon },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: ShieldCheckIcon },
        { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: EyeIcon },
        { name: 'AI Lead Scoring', href: '/ai-lead-scoring', icon: ChartBarIcon },
        { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: CogIcon },
        { name: 'AI Price Optimizer', href: '/ai-price-optimizer', icon: CurrencyDollarIcon },
        { name: 'AI Scheduling Assistant', href: '/ai-scheduling-assistant', icon: CogIcon },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: DocumentTextIcon },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: UserGroupIcon },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: ChartBarIcon },
        { name: 'AI Email Optimizer', href: '/ai-email-optimizer', icon: EnvelopeIcon },
        { name: 'AI Website Analyzer', href: '/ai-website-analyzer', icon: EyeIcon },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },
        { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: CodeBracketIcon },
        { name: 'AI Translator', href: '/ai-translator', icon: GlobeAltIcon },
        { name: 'AI Video Generator', href: '/ai-video-generator', icon: EyeIcon },
        { name: 'AI Audio Processor', href: '/ai-audio-processor', icon: MicrophoneIcon },
        { name: 'AI 3D Model Generator', href: '/ai-3d-model-generator', icon: CubeIcon },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: ShieldCheckIcon },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: HeartIcon },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon }
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas-solutions',
      icon: GlobeAltIcon,
      submenu: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: DocumentTextIcon },
        { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircleIcon },
        { name: 'Customer Support Hub', href: '/customer-support-hub', icon: ChatBubbleLeftRightIcon },
        { name: 'Inventory Manager', href: '/inventory-manager', icon: CircleStackIcon },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler', icon: ShareIcon },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro', icon: CurrencyDollarIcon },
        { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: CodeBracketIcon },
        { name: 'AI Translator', href: '/ai-translator', icon: GlobeAltIcon },
        { name: 'AI Video Generator', href: '/ai-video-generator', icon: EyeIcon },
        { name: 'AI Audio Processor', href: '/ai-audio-processor', icon: ChatBubbleLeftRightIcon },
        { name: 'AI 3D Model Generator', href: '/ai-3d-model-generator', icon: EyeIcon },
        { name: 'AI Legal Assistant', href: '/ai-legal-assistant', icon: ShieldCheckIcon },
        { name: 'AI Medical Assistant', href: '/ai-medical-assistant', icon: UserGroupIcon },
        { name: 'AI Education Tutor', href: '/ai-education-tutor', icon: AcademicCapIcon },
        { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: ChartBarIcon },
        { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: CogIcon }
      ]
    },
    {
      name: 'IT Solutions',
      href: '/it-solutions',
      icon: CogIcon,
      submenu: [
        { name: 'IT Solutions Overview', href: '/it-solutions', icon: CogIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Web Development', href: '/web-development', icon: CodeBracketIcon },
        { name: 'Mobile App Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
        { name: 'Database Management', href: '/database-management', icon: CircleStackIcon },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: ShieldCheckIcon },
        { name: 'IoT Solutions', href: '/iot-solutions', icon: SignalIcon },
        { name: 'DevOps Automation', href: '/devops-automation', icon: CogIcon },
        { name: 'Data Engineering', href: '/data-engineering', icon: CircleStackIcon },
        { name: 'API Development', href: '/api-development', icon: CodeBracketIcon },
        { name: 'Security Audit', href: '/security-audit', icon: ShieldCheckIcon },
        { name: 'Quantum Computing', href: '/quantum-computing-solutions', icon: CpuChipIcon },
        { name: 'Edge Computing', href: '/edge-computing-solutions', icon: CloudIcon },
        { name: 'AR Solutions', href: '/augmented-reality-solutions', icon: EyeIcon },
        { name: 'VR Solutions', href: '/virtual-reality-solutions', icon: EyeIcon },
        { name: 'RPA Solutions', href: '/robotic-process-automation', icon: CogIcon },
        { name: 'Low-Code Platform', href: '/low-code-platform', icon: CodeBracketIcon },
        { name: 'Serverless Architecture', href: '/serverless-architecture', icon: CloudIcon },
        { name: 'Container Orchestration', href: '/container-orchestration', icon: CircleStackIcon },
        { name: 'AI Infrastructure', href: '/ai-infrastructure', icon: CpuChipIcon },
        { name: 'Data Lake Solutions', href: '/data-lake-solutions', icon: CircleStackIcon }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      children: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas-services' },
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]

const NavigationPage: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative group">
                    <button
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default NavigationPage;
