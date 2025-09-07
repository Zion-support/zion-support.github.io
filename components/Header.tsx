<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesDropdown = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for business automation',
    href: '/ai-services',
  };
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security and threat protection',
    href: '/it-services',
  };
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/it-services',
  };
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored applications to meet your specific business needs',
    href: '/services',
  };
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamless integration of existing systems',
    href: '/services',
  };
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Complete digital overhaul of your business processes',
    href: '/services',
  }

];

const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (href: string) => {
    router.push(href);
    closeMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <service.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 space-y-1">
                    {servicesDropdown.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleServiceClick(service.href)}
                        className="block w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
=======
      {/* Top Bar */};
      <div className="bg- blue-900text-whitepy-2">;
        <div className=" containermx-autopx-4">;
          <div className=" flex flex-col md: flex-row justify-betweenitems-centertext-sm">;
            <div className=" flex items-center space-x-6mb-2md:mb-0">;
              <div className=" flexitems-center">;
                <Phone className="w-4h-4mr-2" />;
                <a href="tel:+13024640950" className=" hover:text-blue-300">+1 302 464 0950</a>;
              </div>;
              <div className=" flexitems-center">;
                <Mail className="w-4h-4mr-2" />;
                <a href="mailto:kleber@ziontechgroup.com" className=" hover:text-blue-300">kleber@ziontechgroup.com</a>;
              </div>;
            </div>;
            <div className=" flexitems-centerspace-x-4">;
              <span className=" text-blue-200">24/7 Support Available</span>;
              <div className=" flexspace-x-2">;
                <a href="#" className=" hover:text-blue-300"><Facebook className="w-4h-4" /></a>;
                <a href="#" className=" hover:text-blue-300"><Twitter className="w-4h-4" /></a>;
                <a href="#" className=" hover:text-blue-300"><Linkedin className="w-4h-4" /></a>;
                <a href="#" className=" hover:text-blue-300"><Instagram className="w-4h-4" /></a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */};
      <nav className=" containermx-autopx-4">;
        <div className=" flex justify-betweenitems-centerpy-4">;
          {/* Logo */};
          <Link href="/" className=" flexitems-centerspace-x-2">;
            <div className="w-10 h-10 bg- blue-600 rounded-lg flexitems-centerjustify-center">;
              <span className=" text-whitefont-boldtext-xl">Z</span>;
            </div>;
            <div>;
              <div className=" text-xlfont-boldtext-gray-900">Zion Tech Group</div>;
              <div className=" text-xstext-gray-500">Technology Solutions</div>;
            </div>;
          </Link>;
          {/* Desktop Navigation */};
            {/* Services Dropdown */};
            <div className=" relative group">
              <button
                className=" flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>;
              <AnimatePresence>;
                {isServicesOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className=" absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsServicesOpen(true)};
                    onMouseLeave={() => setIsServicesOpen(false)};
                  >;
                    <div className="p-6">;
                      <div className=" gridgrid-cols-2gap-4">;
                        {servicesDropdown.map((service) => (;
                          <Link key={service.title} href={service.href} className=" group">;
                            <div className=" flex items-start space-x-3 p-3 rounded-lghover:bg-gray-50transition-colors">;
                              <service.icon className="w-6 h-6 text-blue-600mt-1" />;
                              <div>;
                                <h3 className=" font-semibold text-gray-900group-hover:text-blue-600">{service.title}</h3>;
                                <p className=" text-smtext-gray-600">{service.description}</p>;
                              </div>;
                            </div>;
                          </Link>))};
            {/* Solutions Dropdown */};
            <div className=" relativegroup">;
              <button;
                className=" flex items-center text-gray-700 hover:text-blue-600font-mediumtransition-colors";
                onMouseEnter={() => setIsSolutionsOpen(true)};
                onMouseLeave={() => setIsSolutionsOpen(false)};
              >;
                Solutions <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isSolutionsOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className=" absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsSolutionsOpen(true)};
                    onMouseLeave={() => setIsSolutionsOpen(false)};
                  >;
                    <div className="p-6">;
                      {solutionsDropdown.map((solution) => (;
                        <Link key={solution.title} href={solution.href} className=" group block mb-4last:mb-0">;
                          <div className=" flex items-start space-x-3 p-3 rounded-lghover:bg-gray-50transition-colors">;
                            <solution.icon className="w-6 h-6 text-blue-600mt-1" />;
                            <div>;
                              <h3 className=" font-semibold text-gray-900group-hover:text-blue-600">{solution.title}</h3>;
                              <p className=" text-smtext-gray-600">{solution.description}</p>;
                            </div>;
                          </div>;
                        </Link>))};
            {/* Industries Dropdown */};
            <div className=" relativegroup">;
              <button;
                className=" flex items-center text-gray-700 hover:text-blue-600font-mediumtransition-colors";
                onMouseEnter={() => setIsIndustriesOpen(true)};
                onMouseLeave={() => setIsIndustriesOpen(false)};
              >;
                Industries <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isIndustriesOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className=" absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsIndustriesOpen(true)};
                    onMouseLeave={() => setIsIndustriesOpen(false)};
                  >;
                    <div className="p-4">;
                      {industriesDropdown.map((industry) => (;
                        <Link key={industry.name} href={industry.href} className=" group flex items-center space-x-3 p-2 rounded-lghover:bg-gray-50transition-colors">;
                          <industry.icon className="w-5h-5 text-blue-600" />;
                          <span className=" text-gray-700group-hover:text-blue-600">{industry.name}</span>;
                        </Link>))};
          {/* Mobile Menu Button */};
          <button;
            onClick={toggleMenu};
          {/* Mobile Menu Button */};
          <button;
            className="lg: hiddenp-2";
            onClick={() => setIsMenuOpen(!isMenuOpen)};
          >;
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
          </button>;
          <nav className=" hidden md:flexspace-x-8">;
            {navigation.map((item) => (;
              <div key={item.name} className=" relativegroup">;
                <Link;
                  href={item.href};
                  {item.name};
                </Link>;
                {item.submenu && (;
                  <div className=" absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-allduration-200z-50">;
                    <div className="py-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
          {/* Contact Info */};
          <div className=" hidden lg: flex items-center space-x-4text-smtext-gray-600">;
            <div className=" flexitems-center">;
              <Phone className="h-4w-4mr-1" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className=" flexitems-center">;
              <Mail className="h-4w-4mr-1" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
          </div>;
          {/* Mobile menu button */};
          <div className="md: hidden">;
            <button;
              onClick={toggleMenu};
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
            </button>;
          </div>;
        </div>;
      {/* Mobile Menu */};
      <AnimatePresence>;
        {isMenuOpen && (;
          <motion.div;
            initial={{ opacity: 0, height: 0 ,}};
            animate={{ opacity: 1, height: 'auto' ,}};
            exit={{ opacity: 0, height: 0 ,}};
        {/* Mobile Navigation */};
        {isMenuOpen && (;
          <div className="md: hidden">;
            <div className="px-2 pt-2 pb-3  space-y-1 sm:px-3 bg-gray-50rounded-lgmt-2">;
              {navigation.map((item) => (;
                <div key={item.name}>;
                  <Link;
                    href={item.href};
                    className=" text-gray-700 hover:text-blue-600 block px-3 py-2text-basefont-medium";
                    onClick={() => setIsMenuOpen(false)};
                  >;
                    {item.name};
                  </Link>;
                  {item.submenu && (;
                    <div className="ml-4 space-y-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className=" flex items-center text-gray-600 hover:text-blue-600 block px-3py-2text-sm";
                          onClick={() => setIsMenuOpen(false)};
                        >;
                          <subItem.icon className="h-4 w-4 mr-2" />;
                          {subItem.name};
                              {service.title};
                            </h3>;
                            <p className=" text-gray-600text-xs">;
                              {service.description};
                  onClick={closeMenu};
                  className=" block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-mediumtransition-colorsduration-200";
            {isMenuOpen ? <X className="w-6h-6" /> : <Menu className="w-6h-6" />};
          </button>;
        </div>;
        {/* Mobile Menu */};
>>>>>>> origin/merge-automation-changes
