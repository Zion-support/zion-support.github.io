import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Zap, Brain, Cpu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold holographic flex items-center space-x-2">
            <Zap className="w-8 h-8" />
            <span className="neon-glow">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-card p-4 space-y-2 z-50">
                  <Link to="/services" className="block text-white/80 hover:text-cyan-400 transition-colors py-2">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-white/80 hover:text-cyan-400 transition-colors py-2 flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </Link>
                  <Link to="/ai-services" className="block text-white/80 hover:text-cyan-400 transition-colors py-2 flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </Link>
                  <Link to="/it-services" className="block text-white/80 hover:text-cyan-400 transition-colors py-2 flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>IT Services</span>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/services-advertising" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              AI Advertising
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/case-studies" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/enterprise" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              Enterprise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/team" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:neon-glow relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                Home
              </Link>
              <Link to="/about" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-white/80 font-semibold py-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-white/60 hover:text-cyan-400 transition-colors py-2">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-white/60 hover:text-cyan-400 transition-colors py-2 flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS Solutions</span>
                  </Link>
                  <Link to="/ai-services" className="block text-white/60 hover:text-cyan-400 transition-colors py-2 flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </Link>
                  <Link to="/it-services" className="block text-white/60 hover:text-cyan-400 transition-colors py-2 flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>IT Services</span>
                  </Link>
                  <Link to="/services-advertising" className="block text-white/60 hover:text-cyan-400 transition-colors py-2">
                    Advertising Services
                  </Link>
                </div>
              </div>
              <Link to="/services-advertising" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                AI Advertising
              </Link>
              <Link to="/case-studies" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                Enterprise
              </Link>
              <Link to="/team" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                Team
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-cyan-400 transition-colors py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
