import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Search, User, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Header: React.FC = () => {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10);
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
  const navigationItems = [;
    {;
      name: 'Services',
      href: '/services',
      dropdown: [;
        { name: 'AI & Machine Learning', href: '/services/ai-services' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Blockchain Solutions', href: '/services/blockchain' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'Healthcare Tech', href: '/services/healthcare-tech' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
        { name: 'Sustainability Analytics', href: '/services/sustainability' },
        { name: 'Legal Tech AI', href: '/services/legal-tech' },
        { name: 'Financial AI', href: '/services/financial-ai' },
        { name: 'Content Creation AI', href: '/services/content-ai' },
        { name: 'Supply Chain AI', href: '/services/supply-chain-ai' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow' },
        { name: 'AI Threat Intelligence', href: '/services/ai-threat-intelligence' },
        { name: 'AI Video Content Studio', href: '/services/ai-video-studio' },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-docs' },
        { name: 'AI Personal Finance Advisor', href: '/services/ai-finance-advisor' },
        { name: 'AI SEO Optimization', href: '/services/ai-seo' },
        { name: 'AI Customer Churn Predictor', href: '/services/ai-churn-predictor' },
        { name: 'AI Financial Risk Management', href: '/services/ai-risk-management' },
        { name: 'AI Metaverse Platform', href: '/services/ai-metaverse' },
        { name: 'AI Micro SaaS Platform', href: '/services/ai-micro-saas' },
        { name: 'AI Autonomous Systems', href: '/services/ai-autonomous' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Code Review', href: '/services/ai-code-review' },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-studio' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare' },
        { name: 'AI Legal Research & Compliance', href: '/services/ai-legal-research' },
        { name: 'AI Legal Tech Platform', href: '/services/ai-legal-tech' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-automation' },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-analyzer' },
        { name: 'AI Matcher Platform', href: '/services/ai-matcher' },
        { name: 'AI Powered IT Asset Management', href: '/services/ai-it-asset-management' },
        { name: 'AI Research Assistant', href: '/services/ai-research-assistant' },
        { name: 'AI Autonomous Learning', href: '/services/ai-autonomous-learning' },
        { name: 'AI Autonomous Learning System', href: '/services/ai-autonomous-learning-system' },
        { name: 'AI Autonomous Legal Counsel', href: '/services/ai-autonomous-legal' },
        { name: 'AI Autonomous Systems Platform', href: '/services/ai-autonomous-systems' },
        { name: 'AI Autonomous Testing', href: '/services/ai-autonomous-testing' },
        { name: 'AI Autonomous Threat Detection', href: '/services/ai-autonomous-threat-detection' },
        { name: 'AI Autonomous Threat Intelligence', href: '/services/ai-autonomous-threat-intelligence' },
        { name: 'AI Autonomous Trading', href: '/services/ai-autonomous-trading' },
        { name: 'AI Autonomous Translation', href: '/services/ai-autonomous-translation' },
        { name: 'AI Autonomous Vehicle', href: '/services/ai-autonomous-vehicle' },
        { name: 'AI Autonomous Venture Capitalist', href: '/services/ai-autonomous-vc' },
        { name: 'AI Autonomous Virtual Assistant', href: '/services/ai-autonomous-virtual-assistant' },
        { name: 'AI Autonomous Vision', href: '/services/ai-autonomous-vision' },
        { name: 'AI Autonomous Vulnerability Assessment', href: '/services/ai-autonomous-vulnerability' },
        { name: 'AI Autonomous Web Security', href: '/services/ai-autonomous-web-security' },
        { name: 'AI Autonomous Workflow', href: '/services/ai-autonomous-workflow' },
        { name: 'AI Autonomous Writing', href: '/services/ai-autonomous-writing' },
        { name: 'AI Autonomous Zero Trust Security', href: '/services/ai-autonomous-zero-trust' },
        { name: 'AI Business Solutions', href: '/services/ai-business-solutions' },
        { name: 'AI Consumer Willingness Analysis', href: '/services/ai-consumer-analysis' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Podcast Transcription & Insights', href: '/services/podcast-transcription' },
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk' },
        { name: 'AI Sustainability Analytics Platform', href: '/services/ai-sustainability-analytics' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'Autonomous Digital Twin Management', href: '/services/autonomous-digital-twin' },
        { name: 'Blockchain Development Platform', href: '/services/blockchain-development' },
        { name: 'Blockchain Enterprise Solutions', href: '/services/blockchain-enterprise' },
        { name: 'Blockchain Supply Chain Platform', href: '/services/blockchain-supply-chain' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure-devops' },
        { name: 'Data Analytics & Business Intelligence', href: '/services/data-analytics' },
        { name: 'Edge Computing Solutions', href: '/services/edge-computing' },
        { name: 'IoT Edge Computing Platform', href: '/services/iot-edge-computing-platform' },
        { name: 'Quantum AI Cybersecurity', href: '/services/quantum-ai-cybersecurity' },
        { name: 'Quantum AI Hybrid Platform', href: '/services/quantum-ai-hybrid' },
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading' },
        { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service' },
        { name: 'Quantum Enhanced Cybersecurity Operations', href: '/services/quantum-enhanced-cybersecurity' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'Revolutionary Services 2030', href: '/services/revolutionary-services-2030' },
        { name: 'SOC2 Compliance Automation', href: '/services/soc2-compliance-automation' },
        { name: 'Sustainable Technology Solutions', href: '/services/sustainable-technology' },
        { name: 'Webinars & Training', href: '/services/webinars' },
        { name: 'Zion Hire AI', href: '/services/zion-hire-ai' }
      ];
},
    {;
      name: 'Solutions',
      href: '/solutions',
      dropdown: [;
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'SMB Solutions', href: '/solutions/smb' },
        { name: 'Startup Solutions', href: '/solutions/startup' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Non-Profit Solutions', href: '/solutions/non-profit' }
      ];
},
    {;
      name: 'About',
      href: '/about',
      dropdown: [;
        { name: 'Our Story', href: '/about/story' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Press', href: '/press' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' }
      ];
},
    {;
      name: 'Resources',
      href: '/resources',
      dropdown: [;
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developer' },
        { name: 'Community', href: '/community' },
        { name: 'Training', href: '/training' },
        { name: 'Webinars', href: '/webinars' }
      ];
},
    {;
      name: 'Support',
      href: '/support',
      dropdown: [;
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Status Page', href: '/status' },
        { name: 'Knowledge Base', href: '/knowledge-base' }
      ];
}
  ];
  const contactInfo = {;
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709';
};
  return (;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
      isScrolled ;
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' ;
        : 'bg-white';
}`}>;
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4">;
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">;
          <div className="flex items-center space-x-6">;
            <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">;
              <Phone className="w-4 h-4" />;
              <span>{contactInfo.phone}</span>;
            </a>;
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">;
              <Mail className="w-4 h-4" />;
              <span>{contactInfo.email}</span>;
            </a>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4" />;
              <span>{contactInfo.address}</span>;
            </div>;
          </div>;
          <div className="flex items-center space-x-4">;
            <a href="https://ziontechgroup.com" className="hover:text-cyan-200 transition-colors">;
              Visit Website;
            </a>;
            <span className="text-cyan-200">|</span>;
            <span className="text-cyan-200">24/7 Support Available</span>;
          </div>;
        </div>;
      </div>;

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex items-center justify-between h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link to="/" className="flex items-center space-x-2">;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <div className="hidden sm:block">;
                <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>;
                <p className="text-xs text-gray-600">Innovation • Technology • Solutions</p>;
              </div>;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">;
            {navigationItems.map((item) => (;
              <div key={item.name} className="relative group">;
                <button;
                  className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200";
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >;
                  <span>{item.name}</span>;
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>;
                {item.dropdown && activeDropdown === item.name && (;
                  <div;
                    className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50";
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >;
                    <div className="grid grid-cols-1 gap-1 p-2">;
                      {item.dropdown.map((subItem) => (;
                        <Link;
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-md transition-colors duration-200">;
                          {subItem.name}
                        </Link>;
                      ))}
                    </div>;
                  </div>;
                )}
              </div>;
            ))}
          </div>;

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">;
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">;
              <Search className="w-5 h-5" />;
            </button>;
            <Link to="/pricing" className="text-gray-700 hover:text-cyan-600 px-4 py-2 text-sm font-medium transition-colors">;
              Pricing;
            </Link>;
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium">;
              Get Started;
            </Link>;
          </div>;

          {/* Mobile menu button */}
          <div className="lg:hidden">;
            <button;
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors">;
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </nav>;

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isMenuOpen && (;
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200">;
            <div className="px-4 py-6 space-y-4">;
              {navigationItems.map((item) => (;
                <div key={item.name}>;
                  <Link;
                    to={item.href}
                    className="block text-gray-700 hover:text-cyan-600 py-2 text-base font-medium";
                    onClick={() => setIsMenuOpen(false)}
                  >;
                    {item.name}
                  </Link>;
                  {item.dropdown && (;
                    <div className="ml-4 mt-2 space-y-2">;
                      {item.dropdown.slice(0, 5).map((subItem) => (;
                        <Link;
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-gray-600 hover:text-cyan-600 py-1 text-sm";
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          {subItem.name}
                        </Link>;
                      ))}
                      {item.dropdown.length > 5 && (;
                        <Link;
                          to={item.href}
                          className="block text-cyan-600 hover:text-cyan-700 py-1 text-sm font-medium";
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          View All {item.name} →;
                        </Link>;
                      )}
                    </div>;
                  )}
                </div>;
              ))}
              <div className="pt-4 border-t border-gray-200">;
                <Link;
                  to="/pricing";
                  className="block text-gray-700 hover:text-cyan-600 py-2 text-base font-medium";
                  onClick={() => setIsMenuOpen(false)}
                >;
                  Pricing;
                </Link>;
                <Link;
                  to="/contact";
                  className="block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg text-center font-medium mt-4";
                  onClick={() => setIsMenuOpen(false)}
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </header>;
  );
};
export default Header;