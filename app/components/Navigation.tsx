import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
 origin/cursor/analyze-improve-and-deploy-application-13a2

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
interface NavigationProps {
  onSidebarToggle: () => void;
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi, Shield, Database, Users, BarChart, Settings, Mail, MessageSquare, FileText, Phone, MapPin, ArrowRight, Sparkles, Cpu, Target, Lock, TrendingUp, Calendar, CheckSquare, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, CheckCircle, ShoppingCart } from 'lucide-react'; origin/cursor/analyze-improve-and-deploy-application-0e37
 origin/cursor/analyze-improve-and-deploy-application-0f49

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
ChevronDown,
  ChevronUp origin/cursor/analyze-improve-and-deploy-application-0fdb
 origin/cursor/analyze-improve-and-deploy-application-0fe6
} from 'lucide-react';
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
      icon: <Database className="w-4 h-4" />,
      description: 'Comprehensive IT infrastructure services'
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
 origin/cursor/analyze-improve-and-deploy-application-0e37
 origin/cursor/analyze-improve-and-deploy-application-0ff3

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation(); origin/cursor/analyze-improve-and-deploy-application-0ff3
 origin/cursor/analyze-improve-and-deploy-application-10c6

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
{ name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare, description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart, description: 'ML forecasting' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Box, description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu, description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle, description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText, description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention' },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart, description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', href: '/ai-voice-assistant', icon: Mic, description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation' }
  ]
 origin/cursor/analyze-improve-and-deploy-application-0ff3

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const resources = [
    { name: 'Blog', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Sitemap', url: '/sitemap' },
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
 origin/cursor/analyze-improve-and-deploy-application-0f49
  return (
'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

 origin/cursor/analyze-improve-and-deploy-application-0fdb
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  const aiServices = [
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: MessageSquare },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings },
    { name: 'Data Analytics', url: '/data-analytics', icon: Database }
  ];
 origin/cursor/analyze-improve-and-deploy-application-0f49
              Contact
            </Link>

            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu" origin/cursor/analyze-improve-and-deploy-application-0f74
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
<Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-300 hover:text-cyan-400 transition-colors ${
                      location.pathname === item.href ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div> origin/cursor/analyze-improve-and-deploy-application-1009
                  </div>
                )}
              </div>
            ))}
          </div>

<Link 
                to="/contact" 
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                onClick={closeMobileMenu} origin/cursor/analyze-improve-and-deploy-application-0e37
              >
                Get Started
              </Link>
 origin/cursor/analyze-improve-and-deploy-application-0fdb
 origin/cursor/analyze-improve-and-deploy-application-0fe6
                    </div>
                  </div>
                )}
              </div>

className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              (302) 464-0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              info@ziontechgroup.com
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/ai-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                AI Services origin/cursor/analyze-improve-and-deploy-application-10c6
              </Link>
              <Link
 origin/cursor/analyze-improve-and-deploy-application-0ff3
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg border-t border-purple-500/20">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/blog') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
 origin/cursor/analyze-improve-and-deploy-application-1091
        </div>
      )}
    </nav>
 origin/cursor/analyze-improve-and-deploy-application-0f74
  );
export default Navigation; origin/cursor/analyze-improve-and-deploy-application-0e37
 origin/cursor/analyze-improve-and-deploy-application-0f1c
 origin/cursor/analyze-improve-and-deploy-application-0ff3
 origin/cursor/analyze-improve-and-deploy-application-1232
 origin/cursor/analyze-improve-and-deploy-application-1247
        </div>
      </nav>

href="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
 origin/cursor/analyze-improve-and-deploy-application-1232
  );
};

export default Navigation;
 origin/cursor/analyze-improve-and-deploy-application-1091
 origin/cursor/analyze-improve-and-deploy-application-10c6
