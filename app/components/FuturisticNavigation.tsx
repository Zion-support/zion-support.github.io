import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Zap, Brain, Shield, Globe, Code, BarChart3, Cloud, Bot, FileText, Target, Users, TrendingUp, Settings, Bell, RefreshCw, Play, Pause, Stop, Volume2, Camera, Image, Video, Music, Headphones, Mic, MicOff, VideoOff, WifiOff, Battery, Wifi as WifiIcon, Signal, SignalHigh, SignalLow, SignalZero, SignalMedium, SignalMax, SignalMin, SignalNone, SignalOne, SignalTwo, SignalThree, SignalFour, SignalFive, SignalSix, SignalSeven, SignalEight, SignalNine, SignalTen } from 'lucide-react';

interface FuturisticNavigationProps {
  variant?: 'default' | 'neon' | 'cyber' | 'holographic';
  transparent?: boolean;
  className?: string;
}

const FuturisticNavigation: React.FC<FuturisticNavigationProps> = ({
  variant = 'default',
  transparent = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Micro SAAS', path: '/micro-saas', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Solutions', path: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Target className="w-4 h-4" /> }
  ];

  const variantClasses = {
    default: 'bg-black/20 backdrop-blur-sm border-b border-white/10',
    neon: 'bg-gradient-to-r from-pink-500/10 to-cyan-500/10 backdrop-blur-sm border-b border-pink-500/30',
    cyber: 'bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border-b border-green-500/30',
    holographic: 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border-b border-purple-500/30'
  };

  const baseClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${transparent ? 'bg-transparent' : variantClasses[variant]}
    ${scrolled ? 'shadow-lg shadow-cyan-500/10' : ''}
    ${className}
  `.trim();

  return (
    <nav className={baseClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group ${
                  location.pathname === item.path ? 'text-cyan-400' : ''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 ${
                    location.pathname === item.path ? 'text-cyan-400' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FuturisticNavigation;