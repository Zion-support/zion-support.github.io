import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Building, 
  Zap,
  Phone,
  Mail
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for business automation',
    href: '/ai-services',
    color: 'text-blue-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security and threat protection',
    href: '/security',
    color: 'text-red-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/it-services',
    color: 'text-green-500'
  },
  {
    icon: Code,
    title: 'Blockchain & Web3',
    description: 'Decentralized applications and smart contracts',
    href: '/micro-saas',
    color: 'text-purple-500'
  },
  {
    icon: Building,
    title: 'Smart City Solutions',
    description: 'AI-powered urban management systems',
    href: '/solutions/smart-city',
    color: 'text-orange-500'
  },
  {
    icon: Zap,
    title: 'Quantum Computing',
    description: 'Next-generation computational power',
    href: '/solutions/quantum',
    color: 'text-yellow-500'
  }
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Contact', href: '/contact' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-700"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <Link
                          href={service.href}
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
                        >
                          <div className={`${service.color} p-2 rounded-lg bg-slate-800`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <div className="text-white font-semibold mb-2">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={index}
                                href={service.href}
                                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <IconComponent className="w-4 h-4" />
                                <span>{service.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-2 transition-colors ${
                          isActive(item.href)
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-gray-300 hover:text-cyan-400'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-slate-700 space-y-2">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;