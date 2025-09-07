import Link from 'next/link'
useEffect ( () => {
  const handleScroll = () => {
  setIsScrolled (window.scrollY > 20) 
}
return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
return (<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' <div className="max-w-7xl mx-auto px-6"> <div className="flex items-center justify-between h-20"> <Link href="/" className="flex items-center space-x-3"> <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center"> <Brain className="w-6 h-6 text-white" /> </div> <span className="text-xl font-bold text-white">Zion Tech Group</span> </Link> <div className="hidden md:flex items-center space-x-8"> <Link href="/services" className="text-white hover:text-cyan-400 transition-colors"> Services </Link> <Link href="/about" className="text-white hover:text-cyan-400 transition-colors"> About </Link> <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors"> Contact </Link> </div> </div> 
}
import React, { useState, useEffect } from 'react',
import Link from 'next/link';

import Link from 'next/link';'
import { motion } from 'framer-motion';'
import { Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, Cpu, Database, Users, Award, BookOpen, Phone } from 'lucide-react';'
    { "name": 'Pricing', "href": '/pricing-2025', "icon": Award, "description": 'Transparent pricing for all solutions' }'
  ];
  const company = [;
    { "name": 'About Us', "href": '/about', "icon": Users, "description": 'Learn about our mission and team' }'
    { "name": 'Our Work', "href": '/portfolio', "icon": Award, "description": 'See our latest projects and achievements' }'
    { "name": 'Content Hub', "href": '/reports', "icon": BookOpen, "description": 'Access autonomous content and insights' }'
    { "name": 'Blog & Insights', "href": '/blog', "icon": BookOpen, "description": 'Stay updated with industry trends' }'
    { "name": 'Contact', "href": '/contact', "icon": Phone, "description": 'Get in touch with our experts' }'
  ];
  const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown)}
  const closeAllDropdowns = () => {const "EnhancedNavigation": React.FC = () => {const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)useEffect(() => {const handleScroll = () => {setIsScrolled(window && window.scrollY > 20)}window && window.addEventListener('scroll', handleScroll)return () => window && window.removeEventListener('scroll', handleScroll)}, [])const services = [;'
    { "name": 'All Solutions', "href": '/comprehensive-2025-services-showcase', "icon": Globe, "description": 'Complete collection of innovative solutions' },{ "name": 'AI Business Intelligence', "href": '"https"://ziontechgroup && ziontechgroup.com/ai-business-intelligence', "icon": Brain, "description": 'AI-powered analytics and insights' },{ "name": 'Quantum Cybersecurity', "href": '"https"://ziontechgroup && ziontechgroup.com/quantum-cybersecurity', "icon": Shield, "description": 'Quantum-resistant security solutions' },{ "name": 'Edge Computing', "href": '"https"://ziontechgroup && ziontechgroup.com/edge-computing-orchestration', "icon": Cpu, "description": 'Edge orchestration and IoT management' },{ "name": 'Space Technology', "href": '"https"://ziontechgroup && ziontechgroup.com/space-technology', "icon": Rocket, "description": 'Space exploration and satellite tech' },{ "name": 'Pricing', "href": '/pricing-2025', "icon": Award, "description": 'Transparent pricing for all solutions' }'
  ];const company = [;
    { "name": 'About Us', "href": '/about', "icon": Users, "description": 'Learn about our mission and team' },{ "name": 'Our Work', "href": '/portfolio', "icon": Award, "description": 'See our latest projects and achievements' },{ "name": 'Content Hub', "href": '/reports', "icon": BookOpen, "description": 'Access autonomous content and insights' },{ "name": 'Blog & Insights', "href": '/blog', "icon": BookOpen, "description": 'Stay updated with industry trends' },{ "name": 'Contact', "href": '/contact', "icon": Phone, "description": 'Get in touch with our experts' }'
  ];const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown)}const company = [;
  { "name": 'About Us', "href": '/about', "icon": Users, "description": 'Learn about our mission and team','
}
    { "name": 'Our Work', "href": '/portfolio', "icon": Award, "description": 'See our latest projects and achievements','
}
    { "name": 'Content Hub', "href": '/reports', "icon": BookOpen, "description": 'Access autonomous content and insights','
}
    { "name": 'Blog & Insights', "href": '/blog', "icon": BookOpen, "description": 'Stay updated with industry trends','
}
    { "name": 'Contact', "href": '/contact', "icon": Phone, "description": 'Get in touch with our experts','
}
  ];

const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
const closeAllDropdowns = () => {const "EnhancedNavigation": React.FC = () => {const [isOpen, setIsOpen] =;
  }
  useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)useEffect(() => {
}
const handleScroll = () => {setIsScrolled(window && window.scrollY > 20)}window && window.addEventListener('scroll', handleScroll;'
  return () => window && window.removeEventListener('scroll', handleScroll)}, [];'
const services = [;
  { "name": 'All Solutions', "href": '/comprehensive-2025-services-showcase', "icon": Globe, "description": 'Complete collection of innovative solutions','
},{ "name": 'AI Business Intelligence', "href": '"https"://ziontechgroup && ziontechgroup.com/ai-business-intelligence', "icon": Brain, "description": 'AI-powered analytics and insights','
},{ "name": 'Quantum Cybersecurity', "href": '"https"://ziontechgroup && ziontechgroup.com/quantum-cybersecurity', "icon": Shield, "description": 'Quantum-resistant security solutions','
},{ "name": 'Edge Computing', "href": '"https"://ziontechgroup && ziontechgroup.com/edge-computing-orchestration', "icon": Cpu, "description": 'Edge orchestration and IoT management','
},{ "name": 'Space Technology', "href": '"https"://ziontechgroup && ziontechgroup.com/space-technology', "icon": Rocket, "description": 'Space exploration and satellite tech','
},{ "name": 'Pricing', "href": '/pricing-2025', "icon": Award, "description": 'Transparent pricing for all solutions','
}
  ];
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
const closeAllDropdowns = (EnhancedNavigation: React.FC = () => {const [isOpen, setIsOpen] =;
  useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)useEffect(() => {) => {
  return $3;}
}
const handleScroll = (setIsScrolled(window && window.scrollY > 20)) => {
  return $3;}
}window && window.addEventListener('scroll', handleScroll;
  return () => window && window.removeEventListener('scroll', handleScroll)}, [];
  const services = [
  { name: 'All Solutions',}
  href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions',}
},{ name: 'AI Business Intelligence',}
  href: 'https://ziontechgroup && ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights',}
},{ name: 'Quantum Cybersecurity',}
  href: 'https://ziontechgroup && ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions',}
},{ name: 'Edge Computing',}
  href: 'https://ziontechgroup && ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management',}
},{ name: 'Space Technology',}
  href: 'https://ziontechgroup && ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech',}
},{ name: 'Pricing',}
  href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all solutions',}
}
  ];

const company = [
  { name: 'About Us',}
  href: '/about', icon: Users, description: 'Learn about our mission and team',}
},{ name: 'Our Work',}
  href: '/portfolio', icon: Award, description: 'See our latest projects and achievements',}
},{ name: 'Content Hub',}
  href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights',}
},{ name: 'Blog & Insights',}
  href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends',}
},{ name: 'Contact',}
  href: '/contact', icon: Phone, description: 'Get in touch with our experts',}
}
  ];

const toggleDropdown = (setActiveDropdown(activeDropdown === dropdown ? null : dropdown),) => {
  return $3;}
}
;
  const closeAllDropdowns = (setActiveDropdown(null)setIsOpen(false)) => {
  return $3;}
}
 ;
  return (: 'bg-transparent';
    }`}>;
      <div className=\"max-w-7xl mx-auto px-6\"    />;
        <div className=\"flex items-center justify-between h-20\"    />;
          {/* Logo */}
          {/* Desktop Navigation */}
          <div className=\"hidden lg:flex items-center space-x-8\"    />;
            {/* Services Dropdown */}
            <div className=\"relative\"    />;
              <button;
                onClick={() =    /> toggleDropdown('services')}
              {activeDropdown === 'services' && (<motion.div;
                className=\'flex items-center space-x-1 text-white hover:text-blue-300 transition-colors\';
                  />;}
                <span    />Services</span>;}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}    />;
              </button>;{activeDropdown === 'services' && (<motion&& motion.div;}
=======
  const closeAllDropdowns = () => {;
    setActiveDropdown(null);
    setIsOpen(false);
  }
  return (

    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 

        : 'bg-transparent'
    }`}>;
      <div className="max-w-7xl mx-auto px-6">;
        <div className="flex items-center justify-between h-20">;
          {/* Logo */}

          <Link href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>;
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">;
              <Brain className="w-6 h-6 text-white" />;
            </div>;
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">;
              Zion Tech Group;
            </span>;
          </Link>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

const company = [;
  { "name": 'About Us', "href": '/about', "icon": Users, "description": 'Learn about our mission and team','
},{ "name": 'Our Work', "href": '/portfolio', "icon": Award, "description": 'See our latest projects and achievements','
},{ "name": 'Content Hub', "href": '/reports', "icon": BookOpen, "description": 'Access autonomous content and insights','
},{ "name": 'Blog & Insights', "href": '/blog', "icon": BookOpen, "description": 'Stay updated with industry trends','
},{ "name": 'Contact', "href": '/contact', "icon": Phone, "description": 'Get in touch with our experts','
}
  ];

const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown)}
;
  const closeAllDropdowns = () => {setActiveDropdown(null)setIsOpen(false)}
 ;
  return (: 'bg-transparent';'
    }`}>;`      <div className="max-w-7xl mx-auto px-6">;"
        <div className="flex items-center justify-between h-20">;"
          {/* Logo */}
          {/* Desktop Navigation */}
          <div className="hidden "lg":flex items-center space-x-8">;"
            {/* Services Dropdown */}
            <div className="relative">;"
              <button;
                onClick={() => toggleDropdown('services')}'
              {activeDropdown === 'services' && (<motion.div;'
                }
                className="flex items-center space-x-1 text-white "hover":text-blue-300 transition-colors";"
              >;
                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;`              </button>;{activeDropdown === 'services' && (<motion&& motion.div;'
                  }
                  initial={ "opacity": 0, "y": 10 }
                  animate={ "opacity": 1, "y": 0 }
                  exit={ "opacity": 0, "y": 10 }
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6";"
                >;
                className="flex items-center space-x-1 text-white "hover":text-blue-300 transition-colors">"

                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;`              </button>;{activeDropdown === 'services' && (<motion&& motion.div;'
                  }
                  initial={ "opacity": 0, "y": 10 
}
                  animate={ "opacity": 1, "y": 0 
}
                  exit={ "opacity": 0, "y": 10 
}
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6">"

                  <div className="grid grid-cols-2 gap-4 px-6">;"
                    {services.map((service) => (<Link;
                        }
                        key={service.name}
                        href={service.href}
                        className="group p-4 rounded-lg "hover":bg-gray-50 transition-colors";"
                        onClick={closeAllDropdowns}
                      >;
                        <div className="flex items-start space-x-3">;"
                          <service.icon className="w-6 h-6 text-blue-600 mt-1" />;"
                          <div>;
                            <h3 className="font-semibold text-gray-900 group-"hover":text-blue-600">;"
                              {service.name}
                            </h3>;
                            <p className="text-sm text-gray-600">{service.description}</p>;"
                          </div>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion.div>;
              )}
            </div>;
            {/* Company Dropdown */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <div className="relative">;"
              <button;
                onClick={() => toggleDropdown('company')}'
                className="flex items-center space-x-1 text-white "hover":text-blue-300 transition-colors";"
              >;
                className="flex items-center space-x-1 text-white "hover":text-blue-300 transition-colors">"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

                <span>Company</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;`              </button>;
              {activeDropdown === 'company' && ({activeDropdown === 'services' && (<motion.div;'
                }
                className="flex items-center space-x-1 text-white "hover":text-blue-300 transition-colors";"
              >;
                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;`              </button>;{activeDropdown === 'services' && (<motion&& motion.div;'
                  }
                  initial={ "opacity": 0, "y": 10 }
                  animate={ "opacity": 1, "y": 0 }
                  exit={ "opacity": 0, "y": 10 }
                className="flex items-center space-x-1 text-white "hover":text-blue-300 transition-colors">"

                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;`              </button>;{activeDropdown === 'services' && (<motion&& motion.div;'
                  }
                  initial={ "opacity": 0, "y": 10 
}
                  animate={ "opacity": 1, "y": 0 
}
                  exit={ "opacity": 0, "y": 10 
}
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6">;"
                  <div className="grid grid-cols-2 gap-4 px-6">;"
                    {services && services.map((service) => (<Link;
                        }
                        key={service && service.name}
                        href={service && service.href}
                        className="group p-4 rounded-lg "hover":bg-gray-50 transition-colors";"
                        onClick={closeAllDropdowns}>;
                        <div className="flex items-start space-x-3">;"
                          <service && service.icon className="w-6 h-6 text-blue-600 mt-1" />;"
                          <div>;
                            <h3 className="font-semibold text-gray-900 group-"hover":text-blue-600">;"
                              {service && service.name}
                            </h3>;
                            <p className="text-sm text-gray-600">{service && service.description}</p>;"
                          </div>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion && motion.div>;
              )}
            {/* Company Dropdown */}
            <div className="relative">;"
              <button;
                onClick={() => toggleDropdown('company')}'
                  initial={ "opacity": 0, "y": 10 
}
                  animate={ "opacity": 1, "y": 0 
}
                  exit={ "opacity": 0, "y": 10 
}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-6">;"
                  <div className="space-y-2 px-6">;"
                    {company && company.map((item) => (<Link;
                        }
                        key={item && item.name}
                        href={item && item.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg "hover":bg-gray-50 transition-colors";"
                        onClick={closeAllDropdowns}>;
                        <item && item.icon className="w-5 h-5 text-blue-600 mt-1" />;"
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-"hover":text-blue-600">;"
                            {item && item.name}
                          </h3>;
                          <p className="text-sm text-gray-600">{item && item.description}</p>;"
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion && motion.div>;
              )}
          {/* Mobile Menu Button */}
          <button;
            onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
            className=""lg": hidden p-2 text-white "hover":text-blue-300 transition-colors">"

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
        {/* Mobile Menu */}
=======
<<<<<<< HEAD
            className=""lg": hidden p-2 text-white "hover":text-blue-300 transition-colors">"
=======

=======
            <div className=\"relative\"    />;
              <button;
                onClick={() =    /> toggleDropdown('company')}
                className=\'flex items-center space-x-1 text-white hover:text-blue-300 transition-colors\';
              >;
                className=\"flex items-center space-x-1 text-white hover:text-blue-300 transition-colors\">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <span    />Company</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`}    />;
              </button>;
              {activeDropdown === 'company' && ({activeDropdown === 'services' && (<motion.div;
                className=\'flex items-center space-x-1 text-white hover:text-blue-300 transition-colors\';
                  />;}
                <span    />Services</span>;}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}    />;
              </button>;{activeDropdown === 'services' && (<motion&& motion.div;}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                className=\"flex items-center space-x-1 text-white hover:text-blue-300 transition-colors\"    />

                <span    />Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}    />;
              </button>;{activeDropdown === 'services' && (<motion&& motion.div;}
                  initial={{ opacity: 0, y: 10 ,}
}
                  animate={{ opacity: 1, y: 0 ,}
}
                  exit={{ opacity: 0, y: 10 ,}
}
                  className=\"absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6\"    />;
                  <div className=\"grid grid-cols-2 gap-4 px-6\"    />;
                    {services && services.map((service) => (<Link;}
                        key={service && service.name}
                        href={service && service.href}
                        className=\'group p-4 rounded-lg hover:bg-gray-50 transition-colors\';
                        onClick={closeAllDropdowns}    />;
                        <div className=\"flex items-start space-x-3\"    />;
                          <service && service.icon className=\"w-6 h-6 text-blue-600 mt-1\"    />;
                          <div    />;
                            <h3 className=\"font-semibold text-gray-900 group-hover:text-blue-600\"    />;
                              {service && service.name}
                            </h3>;
                            <p className=\"text-sm text-gray-600\"    />{service && service.description}</p>;
                          </div>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion && motion.div>;
              )}
<<<<<<< HEAD
=======

            </div>;





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Company Dropdown */}
            <div className=\"relative\"    />;
              <button;
                onClick={() =    /> toggleDropdown('company')}
                  initial={{ opacity: 0, y: 10 ,}
}
                  animate={{ opacity: 1, y: 0 ,}
}
                  exit={{ opacity: 0, y: 10 ,}
}
                  className=\"absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-6\">;
                  <div className=\"space-y-2 px-6\"    />;
                    {company && company.map((item) => (<Link;}
                        key={item && item.name}
                        href={item && item.href}
                        className=\'group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors\';
                        onClick={closeAllDropdowns}    />;
                        <item && item.icon className=\"w-5 h-5 text-blue-600 mt-1\"    />;
                        <div    />;
                          <h3 className=\"font-semibold text-gray-900 group-hover:text-blue-600\"    />;
                            {item && item.name}
                          </h3>;
                          <p className=\"text-sm text-gray-600\"    />{item && item.description}</p>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion && motion.div>;
              )}
<<<<<<< HEAD
=======

            </div>;

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">;
              Get Started;
            </Link>;
          </div>;





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Mobile Menu Button */}
          <button;
            onClick={() =    /> setIsOpen(!isOpen)}
            className=\"lg: hidden p-2 text-white hover:text-blue-300 transition-colors\">
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
            {isOpen ? <X className=\"w-6 h-6\"    /> : <Menu className=\"w-6 h-6\"    />}
=======
          </button>;
        </div>;





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Mobile Menu */}
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
        {isOpen && (<motion&& motion.div;
            }
            initial={ "opacity": 0, "height": 0 }
            animate={ "opacity": 1, "height": 'auto' }'
            exit={ "opacity": 0, "height": 0 }
        {/* Mobile Menu *
}
        {isOpen && (<motion&& motion.div;
            }
            initial={ "opacity": 0, "height": 0 
}
            animate={ "opacity": 1, "height": 'auto' ,'
}
            exit={ "opacity": 0, "height": 0 
}
            className=""lg":hidden bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 py-6">;"
            <div className="px-6 space-y-6">;"
              {/* Mobile Services */}
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>;"
                <div className="space-y-2">;"
                  {services && services.map((service) => (<Link;
                      }
                      key={service && service.name}
                      href={service && service.href}
                      className="flex items-start space-x-3 p-3 rounded-lg "hover":bg-gray-50 transition-colors";"
                      onClick={closeAllDropdowns}>;
                      <service && service.icon className="w-5 h-5 text-blue-600 mt-1" />;"
                      <div>;
                        <h4 className="font-medium text-gray-900">{service && service.name}</h4>;"
                        <p className="text-sm text-gray-600">{service && service.description}</p>;"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
const EnhancedNavigation: React.FC;
const EnhancedNavigation: React.FC;
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            className = $2;
export default EnhancedNavigation,
=======
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
        {/* Mobile Menu *,}
}
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 ,}
}
            animate={{ opacity: 1, height: 'auto' ,}
}
            exit={{ opacity: 0, height: 0 ,}
}
            className=\"lg:hidden bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 py-6\"    />;
            <div className=\"px-6 space-y-6\"    />;
              {/* Mobile Services */}
              <div    />;
                <h3 className=\"text-lg font-semibold text-gray-900 mb-4\"    />Services</h3>;
                <div className=\"space-y-2\"    />;
                  {services && services.map((service) => (<Link;}
                      key={service && service.name}
                      href={service && service.href}
                      className=\'flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors\';
                      onClick={closeAllDropdowns}    />;
                      <service && service.icon className=\"w-5 h-5 text-blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font-medium text-gray-900\"    />{service && service.name}</h4>;
                        <p className=\"text-sm text-gray-600\"    />{service && service.description}</p>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      </div>;
                    </Link>;
                  ))}
              {/* Mobile Company */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>;"
                <div className="space-y-2">;"
                  {company && company.map((item) => (<Link;
                      }
                      key={item && item.name}
                      href={item && item.href}
                      className="flex items-start space-x-3 p-3 rounded-lg "hover":bg-gray-50 transition-colors";"
                      onClick={closeAllDropdowns}>;
                      <item && item.icon className="w-5 h-5 text-blue-600 mt-1" />;"
                      <div>;
                        <h4 className="font-medium text-gray-900">{item && item.name}</h4>;"
                        <p className="text-sm text-gray-600">{item && item.description}</p>;"
<<<<<<< HEAD
=======
=======
              <div    />;
                <h3 className=\"text-lg font-semibold text-gray-900 mb-4\"    />Company</h3>;
                <div className=\"space-y-2\"    />;
                  {company && company.map((item) => (<Link;}
                      key={item && item.name}
                      href={item && item.href}
                      className=\'flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors\';
                      onClick={closeAllDropdowns}    />;
                      <item && item.icon className=\"w-5 h-5 text-blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font-medium text-gray-900\"    />{item && item.name}</h4>;
                        <p className=\"text-sm text-gray-600\"    />{item && item.description}</p>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      </div>;
                    </Link>;
                  ))}
              {/* Mobile CTA */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
              <div className="pt-4 border-t border-gray-200">;"
                <Link;
                  href="/contact";"
                  className="block w-full text-center px-6 py-3 bg-blue-600 "hover":bg-blue-700 text-white rounded-lg font-semibold transition-colors";"
                  onClick={closeAllDropdowns}>;const "EnhancedNavigation": React.FC = () => {const [is_open, setIsOpen] = useState (false)const [is_scrolled, setIsScrolled] = useState (false)const [active_dropdown, setActiveDropdown]  = useState < string | null>(null)useEffect (() => {const handle_scroll = () =>: any {setIsScrolled (window.scroll_y > 20)}window.addEventListener ('scroll', handle_scroll)return () => window.removeEventListener ('scroll', handle_scroll)}, [])const services = [;'
    { "name": 'All Solutions', "href": '/comprehensive - 2025 - services - showcase', "icon": Globe, "description": 'Complete collection of innovative solutions' },{ "name": 'AI Business Intelligence', "href": '"https"://ziontechgroup.com / ai - business - intelligence', "icon": Brain, "description": 'AI - powered analytics and insights' },{ "name": 'Quantum Cybersecurity', "href": '"https"://ziontechgroup.com / quantum - cybersecurity', "icon": Shield, "description": 'Quantum - resistant security solutions' },{ "name": 'Edge Computing', "href": '"https"://ziontechgroup.com / edge - computing - orchestration', "icon": Cpu, "description": 'Edge orchestration and IoT management' },{ "name": 'Space Technology', "href": '"https"://ziontechgroup.com / space - technology', "icon": Rocket, "description": 'Space exploration and satellite tech' },{ "name": 'Pricing', "href": '/pricing - 2025', "icon": Award, "description": 'Transparent pricing for all solutions' }'
  ];const company = [;
    { "name": 'About Us', "href": '/about', "icon": Users, "description": 'Learn about our mission and team' },{ "name": 'Our Work', "href": '/portfolio', "icon": Award, "description": 'See our latest projects and achievements' },{ "name": 'Content Hub', "href": '/reports', "icon": BookOpen, "description": 'Access autonomous content and insights' },{ "name": 'Blog & Insights', "href": '/blog', "icon": BookOpen, "description": 'Stay updated with industry trends' },{ "name": 'Contact', "href": '/contact', "icon": Phone, "description": 'Get in touch with our experts' }'
  ];const toggle_dropdown = ("dropdown": string) =>: any {setActiveDropdown (active_dropdown === dropdown ? null : dropdown)}const closeAllDropdowns = () =>: any {setActiveDropdown (null)setIsOpen (false)}return (<nav className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;`                  }
                  onClick={closeAllDropdowns}>;

const "EnhancedNavigation": React.FC = () => {const [is_open, setIsOpen] = useState (false)const [is_scrolled, setIsScrolled] = useState (false)const [active_dropdown, setActiveDropdown]  =;
  }
  useState < string | null>(null;
  useEffect (() => {const handle_scroll = () =>: any {setIsScrolled (window.scroll_y > 20)}window.addEventListener ('scroll', handle_scroll;'
  return () => window.removeEventListener ('scroll', handle_scroll)}, [];'
const services = [;
  { "name": 'All Solutions', "href": '/comprehensive - 2025 - services - showcase', "icon": Globe, "description": 'Complete collection of innovative solutions','
},{ "name": 'AI Business Intelligence', "href": '"https"://ziontechgroup.com / ai - business - intelligence', "icon": Brain, "description": 'AI - powered analytics and insights','
},{ "name": 'Quantum Cybersecurity', "href": '"https"://ziontechgroup.com / quantum - cybersecurity', "icon": Shield, "description": 'Quantum - resistant security solutions','
},{ "name": 'Edge Computing', "href": '"https"://ziontechgroup.com / edge - computing - orchestration', "icon": Cpu, "description": 'Edge orchestration and IoT management','
},{ "name": 'Space Technology', "href": '"https"://ziontechgroup.com / space - technology', "icon": Rocket, "description": 'Space exploration and satellite tech','
},{ "name": 'Pricing', "href": '/pricing - 2025', "icon": Award, "description": 'Transparent pricing for all solutions','
}
  ];

const company = [;
  { "name": 'About Us', "href": '/about', "icon": Users, "description": 'Learn about our mission and team','
},{ "name": 'Our Work', "href": '/portfolio', "icon": Award, "description": 'See our latest projects and achievements','
},{ "name": 'Content Hub', "href": '/reports', "icon": BookOpen, "description": 'Access autonomous content and insights','
},{ "name": 'Blog & Insights', "href": '/blog', "icon": BookOpen, "description": 'Stay updated with industry trends','
},{ "name": 'Contact', "href": '/contact', "icon": Phone, "description": 'Get in touch with our experts','
}
  ];

const toggle_dropdown = ("dropdown": string) =>: any {setActiveDropdown (active_dropdown === dropdown ? null : dropdown)}
;
  const closeAllDropdowns = () =>: any {setActiveDropdown (null)setIsOpen (false);
  }
  return (<nav className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;`        ? 'bg - slate - 900 / 95 backdrop - blur - xl border - b border - white / 10 shadow - 2xl';'
        : 'bg - transparent';'
    }`}>`
      <div className="max - w-7xl mx-auto px-6">;"
        <div className="flex items - center justify-between h-20">;"
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" on_click={closeAllDropdowns}>;"
            <div className="w - 10 h - 10 rounded - xl bg - gradient - to - br from - blue - 600 to - cyan - 600 flex items-center justify-center">;"
              <Brain className="w - 6 h-6 text-white" />;"
            </div>;
            <span className="text - xl font - bold bg - gradient - to - r from - white to - blue - 100 bg - clip-text text-transparent">;"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              <div className=\"pt-4 border-t border-gray-200\"    />;
                <Link;
                  href=\'/contact\';
                  className=\'block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors\';
                  onClick={closeAllDropdowns}    />;const EnhancedNavigation: React.FC = () => {const [is_open, setIsOpen] = useState (false)const [is_scrolled, setIsScrolled] = useState (false)const [active_dropdown, setActiveDropdown]  = useState < string | null>(null)useEffect (() => {const handle_scroll = () =>: any {setIsScrolled (window.scroll_y > 20)}window.addEventListener ('scroll', handle_scroll)return () => window.removeEventListener ('scroll', handle_scroll)}, [])const services = [;
    { name: 'All Solutions',}
  href: '/comprehensive - 2025 - services - showcase', icon: Globe, description: 'Complete collection of innovative solutions' },{ name: 'AI Business Intelligence',}
  href: 'https://ziontechgroup.com / ai - business - intelligence', icon: Brain, description: 'AI - powered analytics and insights' },{ name: 'Quantum Cybersecurity',}
  href: 'https://ziontechgroup.com / quantum - cybersecurity', icon: Shield, description: 'Quantum - resistant security solutions' },{ name: 'Edge Computing',}
  href: 'https://ziontechgroup.com / edge - computing - orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },{ name: 'Space Technology',}
  href: 'https://ziontechgroup.com / space - technology', icon: Rocket, description: 'Space exploration and satellite tech' },{ name: 'Pricing',}
  href: '/pricing - 2025', icon: Award, description: 'Transparent pricing for all solutions' }
  ];const company = [;
    { name: 'About Us',}
  href: '/about', icon: Users, description: 'Learn about our mission and team' },{ name: 'Our Work',}
  href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' },{ name: 'Content Hub',}
  href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights' },{ name: 'Blog & Insights',}
  href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' },{ name: 'Contact',}
  href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ];const toggle_dropdown = (dropdown: string) =>: any {setActiveDropdown (active_dropdown === dropdown ? null : dropdown),}const closeAllDropdowns = () =>: any {setActiveDropdown (null)setIsOpen (false)}return (<nav className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;}
                  onClick={closeAllDropdowns}    />;

const EnhancedNavigation: React.FC = () => {const [is_open, setIsOpen] = useState (false)const [is_scrolled, setIsScrolled] = useState (false)const [active_dropdown, setActiveDropdown]  =;}
  useState < string | null>(null;}
  useEffect (() => {const handle_scroll = () =>: any {setIsScrolled (window.scroll_y > 20)}window.addEventListener ('scroll', handle_scroll;
  return () => window.removeEventListener ('scroll', handle_scroll)}, [];
  const services = [
  { name: 'All Solutions',}
  href: '/comprehensive - 2025 - services - showcase', icon: Globe, description: 'Complete collection of innovative solutions',}
},{ name: 'AI Business Intelligence',}
  href: 'https://ziontechgroup.com / ai - business - intelligence', icon: Brain, description: 'AI - powered analytics and insights',}
},{ name: 'Quantum Cybersecurity',}
  href: 'https://ziontechgroup.com / quantum - cybersecurity', icon: Shield, description: 'Quantum - resistant security solutions',}
},{ name: 'Edge Computing',}
  href: 'https://ziontechgroup.com / edge - computing - orchestration', icon: Cpu, description: 'Edge orchestration and IoT management',}
},{ name: 'Space Technology',}
  href: 'https://ziontechgroup.com / space - technology', icon: Rocket, description: 'Space exploration and satellite tech',}
},{ name: 'Pricing',}
  href: '/pricing - 2025', icon: Award, description: 'Transparent pricing for all solutions',}
}
=======
              <div className="pt-4 border-t border-gray-200">;
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  onClick={closeAllDropdowns}>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Link from 'next / link';
import {motion} from 'framer-motion';
import {Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, Cpu, Database, Users, Award, BookOpen, Phone} from 'lucide-react';
;
const EnhancedNavigation: React.FC = () => {
  const [is_open, setIsOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  const [active_dropdown, setActiveDropdown] = useState < string | null>(null);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 20);
    }
;
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  }, []);
;
  const services = [;
    { name: 'All Solutions', href: '/comprehensive - 2025 - services - showcase', icon: Globe, description: 'Complete collection of innovative solutions' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com / ai - business - intelligence', icon: Brain, description: 'AI - powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com / quantum - cybersecurity', icon: Shield, description: 'Quantum - resistant security solutions' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com / edge - computing - orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com / space - technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'Pricing', href: '/pricing - 2025', icon: Award, description: 'Transparent pricing for all solutions' }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ];

const company = [
  { name: 'About Us',}
  href: '/about', icon: Users, description: 'Learn about our mission and team',}
},{ name: 'Our Work',}
  href: '/portfolio', icon: Award, description: 'See our latest projects and achievements',}
},{ name: 'Content Hub',}
  href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights',}
},{ name: 'Blog & Insights',}
  href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends',}
},{ name: 'Contact',}
  href: '/contact', icon: Phone, description: 'Get in touch with our experts',}
}
  ];

const toggle_dropdown = (dropdown: string) =>: any {setActiveDropdown (active_dropdown === dropdown ? null : dropdown)}
  const closeAllDropdowns = () =>: any {setActiveDropdown (null)setIsOpen (false);
  return (<nav className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;
        ? 'bg - slate - 900 / 95 backdrop - blur - xl border - b border - white / 10 shadow - 2xl';}
        : 'bg - transparent';}
    }`}    />

      <div className=\"max - w-7xl mx-auto px-6\"    />;
        <div className=\"flex items - center justify-between h-20\"    />;
          {/* Logo */}
          <Link href=\"/\" className=\"flex items-center space-x-3\" on_click={closeAllDropdowns}    />;
            <div className=\"w - 10 h - 10 rounded - xl bg - gradient - to - br from - blue - 600 to - cyan - 600 flex items-center justify-center\"    />;
              <Brain className=\"w - 6 h-6 text-white\"    />;
            </div>;
            <span className=\"text - xl font - bold bg - gradient - to - r from - white to - blue - 100 bg - clip-text text-transparent\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              Zion Tech Group;
            </span>;
          </Link>;
          {/* Desktop Navigation */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
          <div className="hidden "lg":flex items-center space-x-8">;"
            {/* Services Dropdown */}
            <div className="relative">;"
              <button;
                on_click={() => toggle_dropdown ('services')}'
                className="flex items - center space - x-1 text - white "hover":text - blue-300 transition-colors">"

                <span > Services</span>;
                <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === 'services' ? 'rotate - 180' : ''}`} />;`              </button>;
              {active_dropdown === 'services' && (<motion.div;'
                  }
                  initial={ "opacity": 0, "coordinate_y": 10 }
                  animate={ "opacity": 1, "coordinate_y": 0 }
                  exit={ "opacity": 0, "coordinate_y": 10 }
                  className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6";"
                >;
                  initial={ "opacity": 0, "coordinate_y": 10 
}
                  animate={ "opacity": 1, "coordinate_y": 0 
}
                  exit={ "opacity": 0, "coordinate_y": 10 
}
                  className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6">"

                  <div className="grid grid - cols - 2 gap-4 px-6">;"
                    {services.map ((service) => (<Link;
                        }
                        key={service.name}
                        href={service.href}
                        className="group p - 4 rounded - lg "hover":bg - gray-50 transition-colors";"
                        on_click={closeAllDropdowns}
                      >;
                        <div className="flex items-start space-x-3">;"
                          <service.icon className="w - 6 h - 6 text - blue-600 mt-1" />;"
                          <div>;
                            <h3 className="font - semibold text - gray - 900 group - "hover":text-blue-600">;"
                              {service.name}
                            </h3>;
                            <p className="text - sm text-gray-600">{service.description}</p>;"
                          </div>;
<<<<<<< HEAD
                        </div>;
=======
=======
          <div className=\"hidden lg:flex items-center space-x-8\"    />;
            {/* Services Dropdown */}
            <div className=\"relative\"    />;
              <button;
                on_click={() =    /> toggle_dropdown ('services')}
                className=\"flex items - center space - x-1 text - white hover:text - blue-300 transition-colors\">

                <span     /> Services</span>;
                <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === 'services' ? 'rotate - 180' : ''}`}    />;
              </button>;
              {active_dropdown === 'services' && (<motion.div;}
                  initial={{ opacity: 0, coordinate_y: 10 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: 10 }}
                  className=\'absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\';
                    />;
                  initial={{ opacity: 0, coordinate_y: 10 ,}
}
                  animate={{ opacity: 1, coordinate_y: 0 ,}
}
                  exit={{ opacity: 0, coordinate_y: 10 ,}
}
                  className=\"absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\">

                  <div className=\"grid grid - cols - 2 gap-4 px-6\"    />;
                    {services.map ((service) => (<Link;}
                        key={service.name}
                        href={service.href}
                        className=\'group p - 4 rounded - lg hover:bg - gray-50 transition-colors\';
                        on_click={closeAllDropdowns}
                          />;
                        <div className=\"flex items-start space-x-3\"    />;
                          <service.icon className=\"w - 6 h - 6 text - blue-600 mt-1\"    />;
                          <div    />;
                            <h3 className=\"font - semibold text - gray - 900 group - hover:text-blue-600\"    />;
                              {service.name}
                            </h3>;
                            <p className=\"text - sm text-gray-600\"    />{service.description}</p>;
                          </div>;
                        </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      </Link>))}
                  </div>;
                </motion.div>)}
            </div>;
            {/* Company Dropdown */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <div className="relative">;"
              <button;
                on_click={() => toggle_dropdown ('company')}'
                className="flex items - center space - x-1 text - white "hover":text - blue-300 transition-colors">"

                <span > Company</span>;
                <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`} />;`
              </button>;
              {active_dropdown === 'company' && (<motion.div;'
                  }
                  initial={ "opacity": 0, "coordinate_y": 10 }
                  animate={ "opacity": 1, "coordinate_y": 0 }
                  exit={ "opacity": 0, "coordinate_y": 10 }
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6";"
                >;
                  initial={ "opacity": 0, "coordinate_y": 10 
}
                  animate={ "opacity": 1, "coordinate_y": 0 
}
                  exit={ "opacity": 0, "coordinate_y": 10 
}
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6">"

                  <div className="space-y-2 px-6">;"
                    {company.map ((item) => (<Link;
                        }
                        key={item.name}
                        href={item.href}
                        className="group flex items - start space - x-3 p - 3 rounded - lg "hover":bg - gray-50 transition-colors";"
                        on_click={closeAllDropdowns}
                      >;
                        <item.icon className="w - 5 h - 5 text - blue-600 mt-1" />;"
                        <div>;
                          <h3 className="font - semibold text - gray - 900 group - "hover":text-blue-600">;"
                            {item.name}
                          </h3>;
                          <p className="text - sm text-gray-600">{item.description}</p>;"
<<<<<<< HEAD
=======
=======
            <div className=\"relative\"    />;
              <button;
                on_click={() =    /> toggle_dropdown ('company')}
                className=\"flex items - center space - x-1 text - white hover:text - blue-300 transition-colors\">

                <span     /> Company</span>;
                <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`}    />;
              </button>;
              {active_dropdown === 'company' && (<motion.div;}
                  initial={{ opacity: 0, coordinate_y: 10 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: 10 }}
                  className=\'absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\';
                    />;
                  initial={{ opacity: 0, coordinate_y: 10 ,}
}
                  animate={{ opacity: 1, coordinate_y: 0 ,}
}
                  exit={{ opacity: 0, coordinate_y: 10 ,}
}
                  className=\"absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\">

                  <div className=\"space-y-2 px-6\"    />;
                    {company.map ((item) => (<Link;}
                        key={item.name}
                        href={item.href}
                        className=\'group flex items - start space - x-3 p - 3 rounded - lg hover:bg - gray-50 transition-colors\';
                        on_click={closeAllDropdowns}
                          />;
                        <item.icon className=\"w - 5 h - 5 text - blue-600 mt-1\"    />;
                        <div    />;
                          <h3 className=\"font - semibold text - gray - 900 group - hover:text-blue-600\"    />;
                            {item.name}
                          </h3>;
                          <p className=\"text - sm text-gray-600\"    />{item.description}</p>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                        </div>;
                      </Link>))}
                  </div>;
                </motion.div>)}
            </div>;
            {/* CTA Button */}
            <Link;
<<<<<<< HEAD
              href="/contact";"
              className="px - 6 py - 2 bg - blue - 600 "hover":bg - blue - 700 text - white rounded - lg font-semibold transition-colors">"
=======
<<<<<<< HEAD
              href="/contact";"
              className="px - 6 py - 2 bg - blue - 600 "hover":bg - blue - 700 text - white rounded - lg font-semibold transition-colors">"
=======
              href=\'/contact\';
              className=\"px - 6 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font-semibold transition-colors\"    />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

              Get Started;
            </Link>;
          </div>;
          {/* Mobile Menu Button */}
          <button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            on_click={() => setIsOpen (!is_open)}
            className=""lg": hidden p - 2 text - white "hover":text - blue-300 transition-colors">"

            {is_open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /,"
}
          </button>;
        </div>;
        {/* Mobile Menu */}
        {is_open && (<motion.div;
            }
            initial={ "opacity": 0, "height": 0 }
            animate={ "opacity": 1, "height": 'auto' }'
            exit={ "opacity": 0, "height": 0 }
            className=""lg":hidden bg - white rounded - xl shadow - 2xl border border - gray - 200 mt-2 py-6";"
          >;
            initial={ "opacity": 0, "height": 0 
}
            animate={ "opacity": 1, "height": 'auto' ,'
}
            exit={ "opacity": 0, "height": 0 
}
            className=""lg":hidden bg - white rounded - xl shadow - 2xl border border - gray - 200 mt-2 py-6">"

            <div className="px-6 space-y-6">;"
              {/* Mobile Services */}
              <div>;
                <h3 className="text - lg font - semibold text - gray-900 mb-4">Services</h3>;"
                <div className="space-y-2">;"
                  {services.map ((service) => (<Link;
                      }
                      key={service.name}
                      href={service.href}
                      className="flex items - start space - x-3 p - 3 rounded - lg "hover":bg - gray-50 transition-colors";"
                      on_click={closeAllDropdowns}
                    >;
                      <service.icon className="w - 5 h - 5 text - blue-600 mt-1" />;"
                      <div>;
                        <h4 className="font - medium text-gray-900">{service.name}</h4>;"
                        <p className="text - sm text-gray-600">{service.description}</p>;"
                      </div>;
                    </Link>))}
                </div>
              </div>
              {/* Mobile Company */}
              <div>;
                <h3 className="text - lg font - semibold text - gray-900 mb-4">Company</h3>;"
                <div className="space-y-2">;"
                  {company.map ((item) => (<Link;
                      }
                      key={item.name}
                      href={item.href}
                      className="flex items - start space - x-3 p - 3 rounded - lg "hover":bg - gray-50 transition-colors";"
                      on_click={closeAllDropdowns}
                    >;
                      <item.icon className="w - 5 h - 5 text - blue-600 mt-1" />;"
                      <div>;
                        <h4 className="font - medium text-gray-900">{item.name}</h4>;"
                        <p className="text - sm text-gray-600">{item.description}</p>;"
                      </div>;
                    </Link>))}
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className="pt - 4 border - t border-gray-200">;"
                <Link;
                  href="/contact";"
                  className="block w - full text - center px - 6 py - 3 bg - blue - 600 "hover":bg - blue - 700 text - white rounded - lg font-semibold transition-colors";"
                  on_click={closeAllDropdowns}
                    />
                  Get Started
                </Link>
              </div>
<<<<<<< HEAD
            </div>
=======
=======
            on_click={() =    /> setIsOpen (!is_open)}
            className=\"lg: hidden p - 2 text - white hover:text - blue-300 transition-colors\">

            {is_open ? <X className=\"w-6 h-6\"    /> : <Menu className=\"w-6 h-6\" /,}
}
          </button    />;
        </div>;
        {/* Mobile Menu */}
        {is_open && (<motion.div;}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className=\'lg:hidden bg - white rounded - xl shadow - 2xl border border - gray - 200 mt-2 py-6\';
              />;
            initial={{ opacity: 0, height: 0 ,}
}
            animate={{ opacity: 1, height: 'auto' ,}
}
            exit={{ opacity: 0, height: 0 ,}
}
            className=\"lg:hidden bg - white rounded - xl shadow - 2xl border border - gray - 200 mt-2 py-6\">

            <div className=\"px-6 space-y-6\"    />;
              {/* Mobile Services */}
              <div    />;
                <h3 className=\"text - lg font - semibold text - gray-900 mb-4\"    />Services</h3>;
                <div className=\"space-y-2\"    />;
                  {services.map ((service) => (<Link;}
                      key={service.name}
                      href={service.href}
                      className=\'flex items - start space - x-3 p - 3 rounded - lg hover:bg - gray-50 transition-colors\';
                      on_click={closeAllDropdowns}
                        />;
                      <service.icon className=\"w - 5 h - 5 text - blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font - medium text-gray-900\"    />{service.name}</h4>;
                        <p className=\"text - sm text-gray-600\"    />{service.description}</p>;
                      </div>;
                    </Link>))}
                </div>;
              </div>;
              {/* Mobile Company */}
              <div    />;
                <h3 className=\"text - lg font - semibold text - gray-900 mb-4\"    />Company</h3>;
                <div className=\"space-y-2\"    />;
                  {company.map ((item) => (<Link;}
                      key={item.name}
                      href={item.href}
                      className=\'flex items - start space - x-3 p - 3 rounded - lg hover:bg - gray-50 transition-colors\';
                      on_click={closeAllDropdowns}
                        />;
                      <item.icon className=\"w - 5 h - 5 text - blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font - medium text-gray-900\"    />{item.name}</h4>;
                        <p className=\"text - sm text-gray-600\"    />{item.description}</p>;
                      </div>;
                    </Link>))}
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className=\"pt - 4 border - t border-gray-200\"    />;
                <Link;
                  href=\'/contact\';
                  className=\'block w - full text - center px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font-semibold transition-colors\';
                  on_click={closeAllDropdowns}
<<<<<<< HEAD
                    />;
=======
                >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  Get Started;
                </Link>;
              </div>;
            </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
export default EnhancedNavigation;

export default EnhancedNavigation;

export default EnhancedNavigation;import { motion  } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Brain, Shield, Rocket;}
  Cpu, Database, Users, Award, BookOpen, Phone;}
  } from 'lucide-react';

const EnhancedNavigation: React.FC;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </motion.div>)}
      </div>;
    </nav>);
}
;
export default EnhancedNavigation;
;

<<<<<<< HEAD

export default EnhancedNavigation;

const EnhancedNavigation: React.FC = () => {

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  return (
    <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      </div>
    </nav>
  )
},

export default EnhancedNavigation

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import {motion} from 'framer-motion';
import {Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, Cpu, Database, Users, Award, BookOpen, Phone} from 'lucide-react';
const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const services = [
    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' }
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' }
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' }
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' }
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' }
    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all solutions' }
  ];
  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' }
    { name: 'Our Work', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' }
    { name: 'Content Hub', href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights' }
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' }
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  }
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6"
                >
                  <div className="grid grid-cols-2 gap-4 px-6">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        <div className="flex items-start space-x-3">
                          <service.icon className="w-6 h-6 text-blue-600 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                              {service.name}
                            </h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'company' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-6"
                >
                  <div className="space-y-2 px-6">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllDropdowns}
                      >
                        <item.icon className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 py-6"
          >
            <div className="px-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      <service.icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Mobile Company */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
                <div className="space-y-2">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      <item.icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  onClick={closeAllDropdowns}
                >
                  Get Started
                </Link>
              </div>
            </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          </motion.div>
        )}
      </div>
    </nav>
  );
}
export default EnhancedNavigation;

export default EnhancedNavigation;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

export default EnhancedNavigation;import { motion  } from 'framer-motion';'
import { Menu, X, ChevronDown, Globe, Brain, Shield, Rocket;
  }
  Cpu, Database, Users, Award, BookOpen, Phone;
  } from 'lucide-react';'

const "EnhancedNavigation": React.FC;
<<<<<<< HEAD
=======
=======
export default EnhancedNavigation;
export default EnhancedNavigation;
=======
=======

export default EnhancedNavigation;

=======
export default EnhancedNavigation;
=======
export default EnhancedNavigation;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
