import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MainNavigation } from './header/MainNavigation';
import { 
  Menu, 
  X, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Globe,
  Sun,
  Moon
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const mobileMenuItems = [
    {
      title: 'AI & Machine Learning',
      items: [
        { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform' },
        { name: 'AI Healthcare', href: '/services/ai-healthcare-platform' },
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Customer Analytics', href: '/services/ai-customer-experience-analytics' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Content Optimizer', href: '/services/ai-content-optimizer-pro' },
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform' },
        { name: 'AI Email Responder', href: '/services/ai-auto-email-responder' }
      ]
    },
    {
      title: 'Quantum Computing',
      items: [
        { name: 'Quantum AI Platform', href: '/services/ai-quantum-hybrid-platform' },
        { name: 'Quantum Neural Network', href: '/services/ai-quantum-neural-network-platform' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      items: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Network Solutions', href: '/services/network-infrastructure' },
        { name: 'Onsite Support', href: '/services/it-onsite-services' },
        { name: 'IoT Edge Computing', href: '/services/ai-iot-edge-computing-platform' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      items: [
        { name: 'Micro CRM Platform', href: '/services/micro-crm' },
        { name: 'Employee Scheduling', href: '/services/employee-scheduling-saas' },
        { name: 'Returns Management', href: '/services/returns-management-saas' },
        { name: 'Mobile Survey Tool', href: '/services/mobile-survey' },
        { name: 'Micro SaaS Platform', href: '/micro-saas' }
      ]
    },
    {
      title: 'Specialized Solutions',
      items: [
        { name: 'Healthcare Tech', href: '/services/healthcare-tech' },
        { name: 'Financial Trading AI', href: '/services/ai-financial-trading-platform' },
        { name: 'Green IT Solutions', href: '/services/green-it-solutions' },
        { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Sustainability', href: '/services/sustainability' }
      ]
    },
    {
      title: 'Showcase & Resources',
      items: [
        { name: '2025 Services Showcase', href: '/comprehensive-services-showcase-2025' },
        { name: 'AI Services Showcase', href: '/innovative-ai-services-showcase-2025' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' },
        { name: 'Emerging Tech', href: '/emerging-tech' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Our Story', href: '/about/story' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Training', href: '/training' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Help Center', href: '/help-center' }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      } ${className || ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400 font-rajdhani tracking-wider">
                Innovation Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <MainNavigation />
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">EN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-xl"
                  >
                    <div className="p-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+1 (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mobileMenuItems.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="text-lg font-semibold text-cyan-400 border-b border-cyan-400/20 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-cyan-400 transition-colors block py-1"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Get Started Today
                  </Link>
                  <a
                    href="tel:+13024640950"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 text-center text-sm text-gray-400">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
