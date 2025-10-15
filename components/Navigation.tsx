import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap, Shield, Globe, Brain, Code, Database, Cloud, Smartphone, Wifi } from "lucide-react"; const Navigation: React.FC = () => { const [isOpen, setIsOpen] = useState(false); const [isScrolled, setIsScrolled] = useState(false); const [activeDropdown, setActiveDropdown] = useState<string | null>(null); const location = useLocation(); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 50); }; window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []); const services = [ { title: 'AI Services', icon: <Brain className="w-5 h-5" />, items: [ { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' }, { name: 'AI Content Generation', href: '/ai-content-generation' }, { name: 'AI Automation Platform', href: '/ai-automation-platform' }, { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' }, { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' }, { name: 'AI Business Intelligence', href: '/ai-business-intelligence' }, { name: 'AI Computer Vision', href: '/ai-computer-vision' }, { name: 'AI Conversational AI', href: '/ai-conversational-ai' } ] }, { title: 'IT Services', icon: <Code className="w-5 h-5" />, items: [ { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' }, { name: 'API Management', href: '/ai-api-management' }, { name: 'Database Solutions', href: '/database-solutions' }, { name: 'Security Suite', href: '/advanced-security-suite' }, { name: 'DevOps Automation', href: '/devops-automation' }, { name: 'System Integration', href: '/system-integration' }, { name: 'Data Migration', href: '/data-migration' }, { name: 'IT Consulting', href: '/it-consulting' } ] }, { title: '5G Solutions', icon: <Wifi className="w-5 h-5" />, items: [ { name: '5G Implementation', href: '/5g-implementation' }, { name: '5G Network Optimization', href: '/5g-network-optimization' }, { name: '5G IoT Solutions', href: '/5g-iot-solutions' }, { name: '5G Edge Computing', href: '/5g-edge-computing' }, { name: '5G Private Networks', href: '/5g-private-networks' }, { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' }, { name: '5G Mobile Applications', href: '/5g-mobile-applications' }, { name: '5G Data Analytics', href: '/5g-data-analytics' } ] }, { title: 'Micro SAAS', icon: <Cloud className="w-5 h-5" />, items: [ { name: 'AI Health Tracker', href: '/ai-health-tracker' }, { name: 'AI Email Automation', href: '/ai-email-automation' }, { name: 'AI Fashion Design', href: '/ai-fashion-design' }, { name: 'AI Manufacturing', href: '/ai-manufacturing' }, { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant' }, { name: 'AI Climate Solutions', href: '/ai-climate-solutions-pro' }, { name: 'AI Agricultural Intelligence', href: '/ai-agricultural-intelligence-pro' }, { name: 'AI 3D Generation', href: '/ai-3d-generation' } ] } ]; const navItems = [ { name: 'Home', href: '/' }, { name: 'About', href: '/about' }, { name: 'Services', href: '/services', dropdown: services }, { name: 'Contact', href: '/contact' } ]; const toggleDropdown = (item: string) => { setActiveDropdown(activeDropdown === item ? null : item); }; return ( <nav className={ `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' : 'bg-transparent' }`}> <div className="container mx-auto px-4"> <div className="flex items-center justify-between h-16"> { /* Logo */ } <Link to="/" className="flex items-center space-x-2 group"> <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>
          { /* Desktop Navigation */ }
          <div className="hidden lg:flex items-center space-x-8">
            { navItems.map((item) => (
              <div key={item.name } className="relative">
                { item.dropdown ? (
                  <div className="relative">
                    <button
                      const onClick = {() => toggleDropdown(item.name) }
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 py-2">
                      <span>{ item.name }</span>
                      <ChevronDown className={ `w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : '' }`} />
                    </button>
                    { activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl overflow-hidden">
                        <div className="p-4">
                          {item.dropdown.map((category, index) => (
                            <div key={index } className="mb-4 last:mb-0">
                              <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-2">
                                { category.icon }
                                <span>{ category.title }</span>
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                { category.items.map((service, serviceIndex) => (
                                  <Link
                                    const key = {serviceIndex }
                                    const to = { service.href }
                                    className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded transition-colors duration-200"
                                    const onClick = { () => setActiveDropdown(null) }
                                  >
                                    { service.name }
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    const to = { item.href }
                    const className = { `text-white hover:text-cyan-400 transition-colors duration-300 py-2 ${
                      location.pathname === item.href ? 'text-cyan-400 border-b-2 border-cyan-400' : '' }`}
                  >
                    { item.name }
                  </Link>
                )}
              </div>
            ))}
          </div>
          { /* CTA Button */ }
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              Call Now
            </a>
          </div>
          { /* Mobile Menu Button */ }
          <button
            const onClick = { () => setIsOpen(!isOpen) }
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300">
            { isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /> }
          </button>
        </div>
        { /* Mobile Navigation */ },
        { isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name }>
                  { item.dropdown ? (
                    <div>
                      <button
                        const onClick = {() => toggleDropdown(item.name) }
                        className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300 py-2">
                        <span>{ item.name }</span>
                        <ChevronDown className={ `w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : '' }`} />
                      </button>
                      { activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((category, index) => (
                            <div key={index } className="space-y-1">
                              <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
                                { category.icon }
                                <span>{ category.title }</span>
                              </div>
                              <div className="ml-6 space-y-1">
                                { category.items.map((service, serviceIndex) => (
                                  <Link
                                    const key = {serviceIndex }
                                    const to = { service.href }
                                    className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                                    const onClick = { () => {
                                      setActiveDropdown(null);
                                      setIsOpen(false); }}
                                  >
                                    { service.name }
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      const to = { item.href }
                      const className = { `block text-white hover:text-cyan-400 transition-colors duration-300 py-2 ${
                        location.pathname === item.href ? 'text-cyan-400' : '' }`}
                      const onClick = { () => setIsOpen(false) }
                    >
                      { item.name }
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-cyan-500/20">
                <a
                  href="tel:+13024640950"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Call +1 302 464 0950
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