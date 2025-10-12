import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone } from 'lucide-react';

const Navigation: React.FC = () => {}
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables
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
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}></a>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
              <Brain className="w-5 h-5 text-white" /></Brain>
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8"></div>
            <div className="relative group"></div>
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              ></button>
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} /></ChevronDown>
              </button>
              
              {isServicesOpen && ()
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6"></div>
                  <div className="grid grid-cols-3 gap-6"></div>
                    <div></div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center"></h3>
                        <Zap className="w-4 h-4 mr-2" /></Zap>
                        Micro SAAS
                      </h3>
                      <div className="space-y-2"></div>
                        {microSAASServices.slice(0, 6).map((service) => ()
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          ></a>
                            <service.icon className="w-3 h-3" /></service>
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div></div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center"></h3>
                        <Brain className="w-4 h-4 mr-2" /></Brain>
                        AI Services
                      </h3>
                      <div className="space-y-2"></div>
                        {aiServices.slice(0, 6).map((service) => ()
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          ></a>
                            <service.icon className="w-3 h-3" /></service>
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div></div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center"></h3>
                        <Settings className="w-4 h-4 mr-2" /></Settings>
                        IT Services
                      </h3>
                      <div className="space-y-2"></div>
                        {itServices.slice(0, 6).map((service) => ()
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          ></Link>
                            <service.icon className="w-3 h-3" /></service>
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700"></div>
                    <div className="grid grid-cols-2 gap-4"></div>
                      <Link
                        to="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      ></Link>
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" /></ArrowRight>
                      </Link>
                      <Link
                        to="/specialized-services"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      ></Link>
                        <span>Specialized Solutions</span>
                        <ArrowRight className="w-4 h-4" /></ArrowRight>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-cyan-400 transition-colors"></a>
              About
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors"></a>
              Blog
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors"></a>
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors"></a>
              Pricing
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors"></a>
              Contact
            </a>
            
            <div className="flex items-center space-x-4"></div>
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
              ></a>
                <Phone className="w-4 h-4" /></Phone>
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-4 py-2 text-sm"
              ></a>
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          ></button>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && ()
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20"></div>
            <div className="px-4 py-6 space-y-4"></div>
              <div></div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors"
                ></button>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} /></ChevronDown>
                </button>
                
                {isServicesOpen && ()
                  <div className="mt-4 pl-4 space-y-3"></div>
                    <div></div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                      <div className="space-y-2"></div>
                        {microSAASServices.slice(0, 4).map((service) => ()
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          ></a>
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div></div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      <div className="space-y-2"></div>
                        {aiServices.slice(0, 4).map((service) => ()
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          ></a>
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <a href="/services"
                      className="block text-cyan-400 hover:text-white transition-colors"
                      onClick={closeAllMenus}
                    ></a>
                      View All Services →
                    </a>
                  </div>
                )}
              </div>

              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}></a>
                About
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}></a>
                Blog
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}></a>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}></a>
                Pricing
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}></a>
                Contact
              </a>
              
              <div className="pt-4 border-t border-gray-700"></div>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4"
                ></a>
                  <Phone className="w-4 h-4" /></Phone>
                  <span>+1 302 464 0950</span>
                </a>
                <a href="/contact"
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
                ></a>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;