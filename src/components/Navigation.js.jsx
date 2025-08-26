import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe, Brain, Zap, Shield, Building, ChevronDown } from 'lucide-react';
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();
    const navigationItems = [
        { name: 'Home', href: '/', icon: Globe },
        { name: 'Micro SAAS Services', href: '/micro-saas-services', icon: Zap },
        { name: 'Comprehensive Services', href: '/comprehensive-services', icon: Brain },
        { name: 'Pricing', href: '/pricing', icon: Building },
    ];
    const serviceCategories = [
        {
            name: 'AI & Machine Learning',
            services: [
                { name: 'AI-Powered CRM', href: '/comprehensive-services#ai-powered-crm' },
                { name: 'Quantum Computing', href: '/comprehensive-services#quantum-computing-simulation' },
                { name: 'Edge AI Computing', href: '/comprehensive-services#edge-ai-computing' },
            ]
        },
        {
            name: 'Emerging Technologies',
            services: [
                { name: 'Blockchain Solutions', href: '/comprehensive-services#blockchain-supply-chain' },
                { name: 'AR/VR Business', href: '/comprehensive-services#ar-vr-business-solutions' },
                { name: 'IoT Intelligence', href: '/comprehensive-services#iot-intelligence-hub' },
            ]
        },
        {
            name: 'Industry Solutions',
            services: [
                { name: 'Healthcare IT', href: '/comprehensive-services#healthcare-it-solutions' },
                { name: 'FinTech Solutions', href: '/comprehensive-services#fintech-solutions-pro' },
                { name: 'GreenTech Analytics', href: '/comprehensive-services#greentech-analytics' },
            ]
        }
    ];
    const isActive = (href) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };
    return (<nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white"/>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
            const Icon = item.icon;
            return (<Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)
                    ? 'text-zion-cyan bg-zion-cyan/10'
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'}`}>
                  <Icon className="w-4 h-4"/>
                  <span>{item.name}</span>
                </Link>);
        })}
            {/* Services Dropdown */}
            <div className="relative">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors">
                <Shield className="w-4 h-4"/>
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}/>
              </button>
              {isServicesOpen && (<div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (<div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>
                          <div className="space-y-1">
                            {category.services.map((service) => (<Link key={service.name} to={service.href} className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsServicesOpen(false)}>
                                {service.name}
                              </Link>))}
                          </div>
                        </div>))}
                    </div>
                  </div>
                </div>)}
            </div>
            {/* Contact Button */}
            <a href="tel:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
              <Phone className="w-4 h-4"/>
              <span>Contact Us</span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zion-slate-light hover:text-white focus:outline-none focus:text-white">
              {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (<div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30">
            {navigationItems.map((item) => {
                const Icon = item.icon;
                return (<Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-white hover:bg-white/10'}`} onClick={() => setIsOpen(false)}>
                  <Icon className="w-5 h-5"/>
                  <span>{item.name}</span>
                </Link>);
            })}
            {/* Mobile Services */}
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>
              <div className="space-y-2">
                {serviceCategories.map((category) => (<div key={category.name} className="ml-4">
                    <h4 className="text-sm font-medium text-white mb-1">{category.name}</h4>
                    <div className="space-y-1">
                      {category.services.map((service) => (<Link key={service.name} to={service.href} className="block px-3 py-1 text-sm text-zion-slate-light hover:text-white rounded transition-colors" onClick={() => setIsOpen(false)}>
                          {service.name}
                        </Link>))}
                    </div>
                  </div>))}
              </div>
            </div>
            {/* Mobile Contact */}
            <div className="px-3 py-2 border-t border-zion-blue-light/30">
              <a href="tel:+13024640950" className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium">
                <Phone className="w-5 h-5"/>
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>)}
    </nav>);
};
export default Navigation;
