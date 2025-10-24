import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
const Navigation: React.FC = () => {return (
    <div}>Coming Soon
        </div>
  );
};
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {}
    const handleScroll = () => {}
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {}
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {}
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {}
      closeAllMenus();
    }
  };

  const toggleServices = () => {}
    setIsServicesOpen(!isServicesOpen);
  };

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3 },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database-services', icon: Database },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users },
    { name: 'IT Consulting', href: '/it-consulting', icon: Briefcase },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart }
  ];

  // Removed specializedServices as it was unused

  return ()
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${}
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}></nav>
      <div className="container mx-auto px-4"></div>
        <div className="flex items-center justify-between h-16"></div>
          {/* Logo */}
<Link to="/" className="flex items-center space-x-2 group"><div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><span className="text-white font-bold text-lg">Z</span></div><div><h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1><p className="text-xs text-cyan-400">AI & IT Solutions</p></div></Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8"><Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">Home
            </Link><Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">About
            </Link>
            {/* Services Dropdown */}
            <div className="relative group"><button className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"><span>Services</span><ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" /></button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"><div className="p-6"><h3 className="text-lg font-bold text-white mb-4 neon-text"}>Our Services
        </h3><div className="grid grid-cols-2 gap-4">
                      {/* AI Services */}
                      <div><h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">AI Services</h4><div className="space-y-2"><Link to="/ai-analytics" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Analytics
                          </Link><Link to="/ai-automation" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Automation
                          </Link><Link to="/ai-content-generation" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Content Generation
                          </Link><Link to="/ai-customer-support" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>AI Customer Support
                          </Link></div></div>
                      {/* IT Services */}
                      <div><h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">IT Services</h4><div className="space-y-2"><Link to="/it-services" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>IT Services
                          </Link><Link to="/cloud-migration" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>Cloud Migration
                          </Link><Link to="/devops" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>DevOps
                          </Link><Link to="/cybersecurity" className="block text-white hover:text-cyan-400 transition-colors text-sm py-1" onClick={closeAllMenus}>Cybersecurity
                          </Link></div></div></div><div className="border-t border-gray-700 mt-6 pt-4"><Link
                        to="/services" className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >View All Services
                      </Link></div></div></div>
              )}
            </div><Link
              to="/case-studies" className="font-medium transition-colors hover:text-cyan-400 text-white"
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors"></a>
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            {/* CTA Button */}
            <Link
              to="/contact" className="cyber-button inline-flex items-center"
            ><Phone className="w-4 h-4 mr-2" />(302) 464-0950
            </Link></div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden"><button
              onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /}>}
            
        </button></div></div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"><div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4"><h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3><Link
                  to="/" className="block text-white hover:text-cyan-400 transition-colors py-2"
                </Link><Link
                  to="/about" className="block text-white hover:text-cyan-400 transition-colors py-2"
                  to="/services" className="block text-white hover:text-cyan-400 transition-colors py-2"
                  Services
                  to="/contact" className="block text-white hover:text-cyan-400 transition-colors py-2"
              {/* Contact Info */}
              <div className="space-y-4"><h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3><a
                  href="tel:+13024640950" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                ><Phone className="w-5 h-5" /><span>(302) 464-0950</span></a><a
                  href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                ><span>kleber@ziontechgroup.com</span></a><a
                  href="https:// maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
          
          
          
          
          
          
          
          
          <MapPin className="w-5 h-5" /><span>364 E Main St STE 1008<br />Middletown, DE 19709</span></a></div></div></div>
      </div></nav>
  );
};

export default Navigation;