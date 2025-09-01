import React from 'react';
import { Link } from 'react-router-dom';
import { X, Zap, Brain, Shield, Users, FileText, HelpCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any;
}

export function MobileMenu({ isOpen, onClose, user }: MobileMenuProps) {
  if (!isOpen) return null;

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'Solutions', href: '/solutions', icon: Brain },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Resources', href: '/resources', icon: FileText },
    { name: 'Support', href: '/support', icon: HelpCircle },
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-zion-blue-dark/95 backdrop-blur-xl">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zion-purple/30">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Zion Tech Group</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-zion-purple/30">
          <div className="flex flex-col gap-3">
            {!user && (
              <>
                <Button
                  onClick={() => {
                    onClose();
                    // Navigate to login
                  }}
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    onClose();
                    // Navigate to signup
                  }}
                  className="w-full border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                >
                  Get Started
                </Button>
              </>
            )}
            
            <Button
              variant="ghost"
              onClick={() => {
                onClose();
                // Navigate to contact
              }}
              className="w-full text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}