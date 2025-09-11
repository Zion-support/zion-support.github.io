<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Database, Users, Award, BookOpen, Phone
} from 'lucide-react';

=======



import {motion} from 'framer-motion';
import {Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, Cpu, Database, Users, Award, BookOpen, Phone} from 'lucide-react';
>>>>>>> main
const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
<<<<<<< HEAD

=======
>>>>>>> main
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
<<<<<<< HEAD

  const services = [
    { name: 'All Services', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative services' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: '/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: '/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all services' }
=======
  const services = [
    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' }
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' }
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' }
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' }
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' }    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
  ];
  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' }
    { name: 'Our Work', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' }
    { name: 'Content Hub', href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights' }
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' }
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
>>>>>>> main
  ];



    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
  const closeAllDropdowns = () => {
const EnhancedNavigation: React.FC = () => {;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [;
    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' },;
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup && ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },;
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup && ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },;
    { name: 'Edge Computing', href: 'https://ziontechgroup && ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },;
    { name: 'Space Technology', href: 'https://ziontechgroup && ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },;
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all solutions' }
  ];

  const company = [;
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' },;
    { name: 'Our Work', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' },;
    { name: 'Content Hub', href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights' },;
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' },;
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ];

  const toggleDropdown = (dropdown: string) => {;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown),;
  };

  const closeAllDropdowns = () => {;
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


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">;
            {/* Services Dropdown */}
            <div className="relative">;
              <button
                onClick={() => toggleDropdown('services')}
              


              {activeDropdown === 'services' && (
                <motion.div
                className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              

              {activeDropdown === 'services' && (
                <motion.div
              >;
                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;
              </button>;

              {activeDropdown === 'services' && (;
                <motion&& motion.div
            </div>;




            {/* Company Dropdown */}
            <div className="relative">;
              <button
                onClick={() => toggleDropdown('company')}

                className="flex items-center space-x-1 text-white hover:text-blue-300 transition-colors";
              >;
                <span>Company</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;
              </button>;

              {activeDropdown === 'company' && (;
                <motion&& motion.div

                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-6">;
                  <div className="space-y-2 px-6">;
                    {company && company.map((item) => (;
                      <Link
                        key={item && item.name}
                        href={item && item.href}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllDropdowns}>;
                        <item && item.icon className="w-5 h-5 text-blue-600 mt-1" />;
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">;
                            {item && item.name}
                          </h3>;
                          <p className="text-sm text-gray-600">{item && item.description}</p>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion && motion.div>;
              )}

            </div>;

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
            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>;
        </div>;




        {/* Mobile Menu */}
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 py-6">;
            <div className="px-6 space-y-6">;
              {/* Mobile Services */}
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>;
                <div className="space-y-2">;
                  {services && services.map((service) => (;
                    <Link
                      key={service && service.name}
                      href={service && service.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={closeAllDropdowns}>;
                      <service && service.icon className="w-5 h-5 text-blue-600 mt-1" />;
                      <div>;
                        <h4 className="font-medium text-gray-900">{service && service.name}</h4>;
                        <p className="text-sm text-gray-600">{service && service.description}</p>;
                      </div>;
                    </Link>;
                  ))}

                </div>;
              </div>;


              {/* Mobile Company */}
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>;
                <div className="space-y-2">;
                  {company && company.map((item) => (;
                    <Link
                      key={item && item.name}
                      href={item && item.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={closeAllDropdowns}>;
                      <item && item.icon className="w-5 h-5 text-blue-600 mt-1" />;
                      <div>;
                        <h4 className="font-medium text-gray-900">{item && item.name}</h4>;
                        <p className="text-sm text-gray-600">{item && item.description}</p>;
                      </div>;
                    </Link>;
                  ))}

                </div>;
              </div>;


              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">;
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  onClick={closeAllDropdowns}>;
          </motion.div>)}
      </div>;
    </nav>);
}
;
export default EnhancedNavigation;
;

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
<<<<<<< HEAD
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

=======
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
>>>>>>> main
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
<<<<<<< HEAD
              
=======
>>>>>>> main
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
<<<<<<< HEAD
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
=======
            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors"
>>>>>>> main
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-6 border-t border-white/10"
          >
            <div className="space-y-4">
=======
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 py-6"
          >
            <div className="px-6 space-y-6">
              {/* Mobile Services */}
>>>>>>> main
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={closeAllDropdowns}
<<<<<<< HEAD
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <service.icon className="w-5 h-5 text-white" />
                      <span className="text-white">{service.name}</span>
=======
                    >
                      <service.icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
>>>>>>> main
                    </Link>
                  ))}
                </div>
              </div>
<<<<<<< HEAD
              
=======
              {/* Mobile Company */}
>>>>>>> main
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
                <div className="space-y-2">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={closeAllDropdowns}
<<<<<<< HEAD
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-white" />
                      <span className="text-white">{item.name}</span>
=======
                    >
                      <item.icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
>>>>>>> main
                    </Link>
                  ))}
                </div>
              </div>
<<<<<<< HEAD
=======
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
>>>>>>> main
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
};

export default EnhancedNavigation;
=======
}
export default EnhancedNavigation;

export default EnhancedNavigation;
export default EnhancedNavigation;
export default EnhancedNavigation;

export default EnhancedNavigation;

export default EnhancedNavigation;
export default EnhancedNavigation;
>>>>>>> main
