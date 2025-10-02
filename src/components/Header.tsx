import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Phone } from 'lucide-react';

<<<<<<< HEAD
const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  const navigationItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Pricing',
      path: '/pricing',
    },
    {
      label: 'Solutions',
      path: '/solutions',
      dropdown: [
        { label: 'Enterprise Solutions', path: '/solutions/enterprise' },
        { label: 'SMB Solutions', path: '/solutions/smb' },
        { label: 'Startup Solutions', path: '/solutions/startup' },
        { label: 'Government Solutions', path: '/solutions/government' },
        { label: 'Healthcare Solutions', path: '/solutions/healthcare' },
        { label: 'Financial Solutions', path: '/solutions/financial' },
        { label: 'Manufacturing Solutions', path: '/solutions/manufacturing' },
        { label: 'Retail Solutions', path: '/solutions/retail' },
        { label: 'Education Solutions', path: '/solutions/education' },
        { label: 'Transportation Solutions', path: '/solutions/transportation' },
      ]
    },
    {
      label: 'Services',
      path: '/services',
      dropdown: [
        { label: 'AI Content Generator Pro', path: '/services/ai-content-generator' },
        { label: 'Smart Appointment Scheduler', path: '/services/smart-appointment-scheduler' },
        { label: 'AI Workflow Automation', path: '/services/ai-workflow-automation' },
        { label: 'AI Virtual Assistant', path: '/services/ai-virtual-assistant' },
        { label: 'AI Data Analytics', path: '/services/ai-data-analytics' },
        { label: 'Intelligent Document Processing', path: '/services/ai-intelligent-document-processing' },
        { label: 'Real-Time Cognitive Automation', path: '/services/real-time-cognitive-automation' },
        { label: 'Advanced Cybersecurity AI', path: '/services/advanced-cybersecurity-ai' },
        { label: 'Edge AI Inference Platform', path: '/services/edge-ai-inference' },
        { label: 'Email Deliverability Optimizer', path: '/services/email-deliverability-optimizer' },
        { label: 'Sales Playbook Copilot', path: '/services/sales-playbook-copilot' },
        { label: 'Code Quality Gatekeeper', path: '/services/code-quality-gatekeeper' },
        { label: 'AI Solutions Hub', path: '/ai-solutions' },
        { label: 'Quantum Computing', path: '/quantum-computing' },
        { label: 'Cloud & DevOps', path: '/cloud-devops' },
      ]
    },
    {
      label: 'Resources',
      path: '/resources',
      dropdown: [
        { label: 'Resources Hub', path: '/resources' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Blog', path: '/blog' },
      ]
    },
    {
      label: 'Company',
      path: '/about',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Partners', path: '/partners' },
      ]
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];
=======
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-3e47

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/services/catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Services Catalog</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">Resources</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Started</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/services/catalog" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services Catalog</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
              <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;