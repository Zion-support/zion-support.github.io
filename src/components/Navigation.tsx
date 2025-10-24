<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  DollarSign,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone
} from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03f4
=======
import React, {useState, useEffect} from 'react';
export default Navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables;
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1

<<<<<<< HEAD
export default function Component() {
  return (
<<<<<<< HEAD
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
=======
    setIsMenuOpen(!isMenuOpen);
      closeAllMenus();
  };

    setIsServicesOpen(!isServicesOpen);
  };

  ];

  ];

  ];

  // Removed specializedServices as it was unused;
          {/* Logo */}
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          {/* Desktop Navigation */}
                <span>Services</span>
                        Micro SAAS;
                            <span>{service.name}</span>
  ))}
                        AI Services;
                            <span>{service.name}</span>
  ))}
                        IT Services;
                            <span>{service.name}</span>
  ))}
                        <span>View All Services</span>
                        <span>Specialized Solutions</span>
  )}

              About;
              Blog;
              Case Studies;
              Pricing;
              Contact;
                <span className="hidden sm:inline">+1 302 464 0950</span>
                Get Started;
          {/* Mobile Menu Button */}

            {isMenuOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   /></X></X>
        {/* Mobile Menu */}
                  <span>Services</span>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                            {service.name}
                        ))}
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                            {service.name}
                        ))}

                      View All Services →
                )}

                About;
                Blog;
                Case Studies;
                Pricing;
                Contact;
                  <span>+1 302 464 0950</span>
                  Get Started;
        )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  );
}
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}></nav>
      <div className="container mx-auto px-4"></div>
        <div className="flex items-center justify-between h-16 lg:h-20"></div>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group"></Link>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block"></div>
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8"></div>
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium"></Link>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group"></div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"></div>
                  <div className="p-6"></div>
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4"></div>
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2"></div>
                          <div className="flex items-center space-x-2 mb-2"></div>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-sm font-semibold text-white">{category.title}</span>
                          </div>
                          <div className="space-y-2"></div>
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              ></Link>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500 group-hover:text-purple-500"></div>
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link
                                to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                                onClick={closeAllMenus}
                              ></Link>
                                View All →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4 px-6"></div>
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      ></Link>
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            ></Link>
              Case Studies
            </Link>

            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            ></Link>
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            ></Link>
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            ></Link>
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden"></div>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            ></button>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden"></div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2"></div>
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              ></Link>
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              ></Link>
                About
              </Link>

              {/* Mobile Services */}
              <div></div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                >
                  <span className="flex items-center space-x-2"></span>
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2"></div>
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}></div>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1"></div>
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            ></Link>
                              {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-1" />} {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          ></Link>
                            View All →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              ></Link>
                Case Studies
              </Link>

              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              ></Link>
                Blog
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              ></Link>
                Contact
              </Link>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              ></a>
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
