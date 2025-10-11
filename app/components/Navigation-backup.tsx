'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package } from 'lucide-react';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const handleResize = const handleResize = const handleResize = () => {
      if (window.innerWidth >= 1024) {
=======
    const handleResize = () => 
      if (window.innerWidth >= 1024) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
        setIsOpen(false)
  }
    }

    const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  };
;
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll)
  }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);

  const closeAllMenus = () => {;
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false)
  }

<<<<<<< HEAD
  // Service data
  const aiServices = const aiServices = const aiServices = [
=======
  // Service data;
  const aiServices = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },;
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology' };
  ];
  const itServices = const itServices = const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' },
    { name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },;
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' };
  ];
  const microSaasServices = const microSaasServices = const microSaasServices = [
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Financial tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated invoicing' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Prospect identification' },;
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Project coordination' };
  ];
  const emergingTech = const emergingTech = const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },;
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' };
  ];
<<<<<<< HEAD
  return() {aiServices.map((service) => ()
                    ))}

          <div className="hidden lg:block" /></div>
            <div className="ml-10 flex items-baseline space-x-8" /></div>
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" /></Link>
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" /></div>
                <button onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center" /></button>
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" / /></ChevronDown>
                </button>
                
                {servicesOpen && ()
                    {itServices.map((service) => ()
=======
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 $
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div></div><div className="flex items-center justify-between h-16">
          {/* Logo */}
          </div></div><div className="flex-shrink-0">
            </div></div><Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                </div></div><Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span></span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            </div></div><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home;
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              </div></div><button;
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                </button></button><Brain className="w-4 h-4" />
                <span>AI Services</span></span></span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 $aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">)</div></div><div className="grid grid-cols-1 gap-2">)
                    aiServices.map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          </div></div><div className="text-white font-medium">{service.name}</div></div></div>
                          <div className="text-xs text-gray-400">{service.description}</div></div></div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />)
                      </Link>)
                    ))}

          <div className="hidden lg:block">
            </div></div><div className="ml-10 flex items-baseline space-x-8">
              </div></div><Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home;
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                </div></div><button;
                  onClick={toggleServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services;
                  </button></button><ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesOpen && (

            </div>

            /* IT Services Dropdown */}
            <div className="relative group">
              </div></div><button;
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                </button></button><Cloud className="w-4 h-4" />
                <span>IT Services</span></span></span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 $itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">)</div></div><div className="grid grid-cols-1 gap-2">)
                    itServices.map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          </div></div><div className="text-white font-medium">{service.name}</div></div></div>
                          <div className="text-xs text-gray-400">{service.description}</div></div></div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />)
                      </Link>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
<<<<<<< HEAD
            <div className="relative group" /></div>
              <button onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></button>
                <Cpu className="w-4 h-4" / /></Cpu>
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
              </button>
              {microSaasOpen && ()
                    {microSaasServices.map((service) => ()
=======
            <div className="relative group">
              </div></div><button;
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                </button></button><Cpu className="w-4 h-4" />
                <span>Micro SAAS</span></span></span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 $microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">)</div></div><div className="grid grid-cols-1 gap-2">)
                    microSaasServices.map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          </div></div><div className="text-white font-medium">{service.name}</div></div></div>
                          <div className="text-xs text-gray-400">{service.description}</div></div></div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />)
                      </Link>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
<<<<<<< HEAD
            <div className="relative group" /></div>
              <button onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></button>
                <Zap className="w-4 h-4" / /></Zap>
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
              </button>
              {servicesOpen && ()
                    {emergingTech.map((service) => ()
=======
            <div className="relative group">
              </div></div><button;
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                </button></button><Zap className="w-4 h-4" />
                <span>Emerging Tech</span></span></span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 $servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">)</div></div><div className="grid grid-cols-1 gap-2">)
                    emergingTech.map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          </div></div><div className="text-white font-medium">{service.name}</div></div></div>
                          <div className="text-xs text-gray-400">{service.description}</div></div></div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />)
                      </Link>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></Link>
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></Link>
              Services
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></Link>
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></Link>
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></Link>
              Contact
=======
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About;
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services;
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing;
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog;
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">

              Contact;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </Link>
          </div>

          {/* Contact Info */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-4" /></div>
            <a href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" /></a>
              <Phone className="w-4 h-4" / /></Phone>
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" /></a>
              <Mail className="w-4 h-4" / /></Mail>
              <span className="text-sm">Email</span>
=======
          <div className="hidden lg:flex items-center space-x-4">
            </div></div><a;
              href="tel:+13024640950" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span></span></span>
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span></span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </a>
          </div>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
          <div className="lg:hidden" /></div>
            <button onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors" /></button>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
=======
          <div className="lg:hidden">
            </div></div><button;
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? </button></button><X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </button>
          </div>
        </div>

        {/* Mobile Navigation */},
<<<<<<< HEAD
    {isOpen && ()
                    {aiServices.slice(0, 8).map((service) => ()
                    ))}
                    <Link to="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus} /></Link>
=======
    {isOpen && (

          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            </div></div><div className="pt-4 space-y-4">
              </div></div><Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick=closeAllMenus}>

                Home;
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                </div></div><button;
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  </button></button><span className="flex items-center space-x-2">
                    </span></span><Brain className="w-4 h-4" />
                    <span>AI Services</span></span></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 $aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && ()
                  <div className="mt-2 ml-4 space-y-2">)
                    aiServices.slice(0, 8).map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name})
                      </Link>)
                    ))}
                    <Link;
                      to="/ai-services" className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
<<<<<<< HEAD
              <div></div>
                <button onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></button>
                  <span className="flex items-center space-x-2" /></span>
                    <Cloud className="w-4 h-4" / /></Cloud>
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
                </button>
                {itServicesOpen && ()
                    {itServices.map((service) => ()
=======
              <div>
                </div></div><button;
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  </button></button><span className="flex items-center space-x-2">
                    </span></span><Cloud className="w-4 h-4" />
                    <span>IT Services</span></span></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 $itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && ()
                  <div className="mt-2 ml-4 space-y-2">)
                    itServices.map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name})
                      </Link>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
<<<<<<< HEAD
              <div></div>
                <button onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" /></button>
                  <span className="flex items-center space-x-2" /></span>
                    <Cpu className="w-4 h-4" / /></Cpu>
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
                </button>
                {microSaasOpen && ()
                    {microSaasServices.slice(0, 8).map((service) => ()
                    ))}
                    <Link to="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus} /></Link>
=======
              <div>
                </div></div><button;
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  </button></button><span className="flex items-center space-x-2">
                    </span></span><Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span></span></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 $microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && ()
                  <div className="mt-2 ml-4 space-y-2">)
                    microSaasServices.slice(0, 8).map((service) => (
                      </div></div><Link;
                        key=service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name})
                      </Link>)
                    ))}
                    <Link;
                      to="/micro-saas" className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

<<<<<<< HEAD
          <div className="lg:hidden" /></div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2" /></div>
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Home
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                IT Services
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Micro SaaS
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                About
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Case Studies
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Blog
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Pricing
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Pricing
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus} /></Link>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2" /></div>
                <a href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" /></a>
                  <Phone className="w-4 h-4" / /></Phone>
                  <span>(302) 464-0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium" /></a>
                  <Mail className="w-4 h-4" / /></Mail>
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400" /></div>
                  <MapPin className="w-4 h-4" / /></MapPin>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>

          <div className="lg:hidden" /></div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10" /></div>
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Home
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                IT Services
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Micro SaaS
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                About
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Blog
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" /></Link>
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-3 mt-3" /></div>
                <a href="tel:+13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium" /></a>
                  <Phone className="w-4 h-4 mr-2" / /></Phone>
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium" /></a>
                  <Mail className="w-4 h-4 mr-2" / /></Mail>
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-center text-gray-400 px-3 py-2 text-sm" /></div>
                  <MapPin className="w-4 h-4 mr-2" / /></MapPin>
                  364 E Main St STE 1008<br / /></br>
                  Middletown DE 19709

=======
          <div className="lg:hidden">
            </div></div><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              </div></div><Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home;
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services;
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services;
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Micro SaaS;
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About;
              </Link>
              <Link to="/case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Case Studies;
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Blog;
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Pricing;
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">

              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About;
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services;
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing;
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog;
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>

                Contact;
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                </div></div><a;
                  href="tel:+13024640950" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span></span></span>
                </a>
                <a;
                  href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span></span></span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  </div></div><MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span></span></span>

          <div className="lg:hidden">
            </div></div><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              </div></div><Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home;
              </Link>
              <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                AI Services;
              </Link>
              <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                IT Services;
              </Link>
              <Link to="/micro-saas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Micro SaaS;
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About;
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Blog;
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact;
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-3 mt-3">
                </div></div><a href="tel:+13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950;
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com;
                </a>
                <div className="flex items-center text-gray-400 px-3 py-2 text-sm">
                  </div></div><MapPin className="w-4 h-4 mr-2" />
                  364 E Main St STE 1008<br />
                  Middletown DE 19709;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
