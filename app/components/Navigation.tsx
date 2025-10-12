import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Database, Smartphone, Settings, CheckSquare, FileText, MessageCircle, Link as LinkIcon, Mic, Eye } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-cyan-400">
              Zion Tech Group
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-cyan-400 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;