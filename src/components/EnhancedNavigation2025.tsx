import React, { useState, useEffect } from 'react';
const EnhancedNavigation2025: React.FC = () => {,
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {,
    const handleScroll = () => {,
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [,
    { name: 'Home', href: '/', icon: '🏠' ,};
    { name: 'Tech Showcase', href: '/pages/UltimateTechShowcase2025', icon: '🚀' ,};
    { name: 'AI Services', href: '/pages/RevolutionaryAIServices2025', icon: '🤖' ,};
    { name: 'Innovation Hub', href: '/pages/NextGenInnovationHub2025', icon: '🧠' ,};
    { name: 'About', href: '/about', icon: 'ℹ️' ,};
    { name: 'Contact', href: '/contact', icon: '📞' ,}
  ];
  return (,
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,
      isScrolled,
        ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/30',
        : 'bg-transparent',
    }`}>,
      <div className="container mx-auto px-4">,
        <div className="flex items-center justify-between h-16">,
          {/* Logo */}
          <div className="flex items-center space-x-2">,
            <div className="text-2xl">⚡</div>,
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">,
              Zion Tech 2025,
            </span>,
          </div>,
          {/* Desktop Navigation */}
          <div className="hidden md: flex items-center space-x-8">,
            {navItems.map((item) => (,
              <a,
                key={item.name,}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${,
                  activeSection === item.name.toLowerCase(),
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30',
                    : 'text-gray-300 hover: text-white hover:bg-white/10',}`}
                onClick={() => setActiveSection(item.name.toLowerCase())}
              >,
                <span className="text-lg">{item.icon}</span>,
                <span className="font-medium">{item.name}</span>,
              </a>,
            ))}
          {/* CTA Button */}
          <div className="hidden md: flex items-center space-x-4">,
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">,
              Get Started,
            </button>,
          {/* Mobile Menu Button */,}
          <button,
            className="md: hidden text-white p-2",
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen),}
          >,
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">,
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${,
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '',
              }`}></div>,
                isMobileMenuOpen ? 'opacity-0' : '',
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '',
            </div>,
          </button>,
        </div>,
        {/* Mobile Menu */}
        <div className={`md: hidden transition-all duration-300 ${,
          isMobileMenuOpen,
            ? 'max-h-96 opacity-100',
            : 'max-h-0 opacity-0 overflow-hidden',}`}>,
          <div className="py-4 space-y-2">,
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover: text-white hover:bg-white/10 transition-all duration-300",
                onClick={() => {,
                  setActiveSection(item.name.toLowerCase());
                  setIsMobileMenuOpen(false),
                }}
                <span className="text-xl">{item.icon}</span>,
            <div className="pt-4 border-t border-gray-700">,
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold">,
                Get Started,
              </button>,
      </div>,
    </nav>,
  ),};
export default EnhancedNavigation2025;