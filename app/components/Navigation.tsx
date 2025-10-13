import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Shield, Zap, Brain, Globe } from 'lucide-react';
interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Globe className="w-4 h-4">
      <div className="container mx-auto flex justify-between items-center" className="text-2 xl font-bold">
          <Link to="/"hover:text-cyan-400 transition-colors"/about"hover:text-cyan-400 transition-colors"/services"hover:text-cyan-400 transition-colors"/contact"hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
