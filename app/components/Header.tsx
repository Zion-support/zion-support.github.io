import React from 'react';
'use client';

import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <>
      <Navigation >{/* Spacer to prevent content from going under fixed header */}</Navigation>
      </Navigation><div className="h-16 lg: h-20" />
    </>
const Header: React.FC = () => {
  return (<>
      <Navigation />
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg: h-20" />
    </>,

import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Brain, Cloud, Shield, Code, Users, Briefcase, BookOpen, MessageSquare, Target, Zap, Stethoscope, CreditCard, FileText, BarChart, Atom, Bot, Link as LinkIcon, Smartphone, Settings, Eye, Activity } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigation = {
    'Services': [
      { name: 'AI Services' href: '/ai-services' icon: Brain description: 'Artificial Intelligence Solutions' },
      { name: 'IT Services' href: '/it-services' icon: Code description: 'Information Technology Services' },
      { name: 'Cloud Infrastructure' href: '/cloud-infrastructure' icon: Cloud description: 'Cloud Migration & Setup' },
      { name: 'Cybersecurity' href: '/cybersecurity' icon: Shield description: 'Security Solutions' },
      { name: 'Micro SaaS' href: '/micro-saas' icon: Settings description: 'Ready-to-Use SaaS Solutions' },
      { name: 'All Services' href: '/services' icon: Briefcase description: 'View All Services' }
    ],
    'AI Solutions': [
      { name: 'AI Marketing' href: '/ai-marketing' icon: Target description: 'AI-Powered Marketing' },
      { name: 'AI Automation' href: '/ai-automation' icon: Zap description: 'Process Automation' },
      { name: 'AI Healthcare' href: '/ai-healthcare' icon: Stethoscope description: 'Medical AI Solutions' },
      { name: 'AI Fintech' href: '/ai-fintech' icon: CreditCard description: 'Financial AI' },
      { name: 'AI Content Generation' href: '/ai-content-generation' icon: FileText description: 'Content Creation' },
      { name: 'AI Data Analytics' href: '/ai-data-analytics' icon: BarChart description: 'Data Insights' },
      { name: 'AI CRM' href: '/ai-crm' icon: Users description: 'AI Customer Management' },
      { name: 'AI Project Management' href: '/ai-project-management' icon: Briefcase description: 'Smart Project Tools' }
    ],
    'Emerging Tech': [
      { name: 'Quantum Computing' href: '/quantum-computing' icon: Atom description: 'Next-Gen Computing' },
      { name: 'Autonomous Systems' href: '/autonomous-systems' icon: Bot description: 'Self-Managing Systems' },
      { name: 'Blockchain' href: '/blockchain' icon: LinkIcon description: 'Decentralized Solutions' },
      { name: 'IoT Edge Computing' href: '/iot-edge-computing' icon: Smartphone description: 'Connected Devices' },
      { name: 'Robotics' href: '/robotics' icon: Bot description: 'Intelligent Robots' },
      { name: 'AR/VR Solutions' href: '/ar-vr-solutions' icon: Eye description: 'Immersive Technology' }
    ],
    'Company': [
      { name: 'About Us' href: '/about' icon: Users description: 'Our Story & Mission' },
      { name: 'Our Team' href: '/team' icon: Users description: 'Meet Our Experts' },
      { name: 'Careers' href: '/careers' icon: Briefcase description: 'Join Our Team' },
      { name: 'Case Studies' href: '/case-studies' icon: BookOpen description: 'Success Stories' },
      { name: 'Blog' href: '/blog' icon: FileText description: 'Latest News & Insights' },
      { name: 'Contact' href: '/contact' icon: MessageSquare description: 'Get In Touch' }
    ],
    'Resources': [
      { name: 'Documentation' href: '/docs' icon: FileText description: 'Technical Documentation' },
      { name: 'API Docs' href: '/api-docs' icon: Code description: 'API Reference' },
      { name: 'Support' href: '/support' icon: MessageSquare description: 'Get Help & Support' },
      { name: 'Pricing' href: '/pricing' icon: CreditCard description: 'Service Pricing' },
      { name: 'Free Consultation' href: '/consultation' icon: Phone description: 'Schedule a Call' },
      { name: 'Status' href: '/status' icon: Activity description: 'System Status' }
    ]
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg: flex space-x-8">
            {Object.entries(navigation).map(([category items]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-white hover: text-cyan-400 transition-colors py-2">
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === category && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2 z-50">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`flex items-start space-x-3 px-4 py-3 text-sm hover: bg-slate-700/50 transition-colors ${
                          isActive(item.href) ? 'text-cyan-400 bg-slate-700/30' : 'text-gray-300'
                        }`}
                      >
                        <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg: flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </a>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg: hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg: hidden border-t border-white/10 py-4">
            <div className="space-y-4">
              {Object.entries(navigation).map(([category items]) => (
                <div key={category}>
                  <h3 className="text-cyan-400 font-semibold mb-2 px-4">{category}</h3>
                  <div className="space-y-1">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`flex items-start space-x-3 px-4 py-3 text-sm hover: bg-slate-700/50 transition-colors ${
                          isActive(item.href) ? 'text-cyan-400 bg-slate-700/30' : 'text-gray-300'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-4 px-4">
                <div className="space-y-2">
                  <a
                    href="tel: +13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:info@ziontechgroup.com"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@ziontechgroup.com</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="block mt-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;