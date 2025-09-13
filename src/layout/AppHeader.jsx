import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';

export function AppHeader() {
  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { 
      name: 'Services', 
      path: '/services', 
      icon: null,
      dropdown: [
        { name: 'AI & Machine Learning', path: '/ai-services', icon: Brain, color: 'from-purple-500 to-pink-500' },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500' },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
        { name: 'Quantum Computing', path: '/quantum-computing', icon: Zap, color: 'from-indigo-500 to-purple-500' },
        { name: 'Blockchain & Web3', path: '/blockchain-services', icon: Shield, color: 'from-green-500 to-emerald-500' },
        { name: 'IoT & Edge Computing', path: '/iot-services', icon: Database, color: 'from-orange-500 to-red-500' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
        { name: 'Enterprise IT', path: '/enterprise-it', icon: Users, color: 'from-teal-500 to-green-500' },
      ]
    },
    { 
      name: 'Solutions', 
      path: '/business-solutions', 
      icon: null,
      dropdown: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Shield, color: 'from-green-400 to-teal-500' },
        { name: 'Financial Services', path: '/solutions/financial', icon: Database, color: 'from-yellow-500 to-orange-500' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Code, color: 'from-blue-500 to-indigo-500' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', icon: Users, color: 'from-purple-500 to-pink-500' },
        { name: 'Government', path: '/solutions/government', icon: Lock, color: 'from-gray-500 to-slate-500' },
        { name: 'Education', path: '/solutions/education', icon: Brain, color: 'from-cyan-500 to-blue-500' },
      ]
    },
    { name: 'About', path: '/about', icon: null },
    { name: 'Contact', path: '/contact', icon: null },
  ];
  return (
    <header className="bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-dark shadow-lg border-b border-zion-blue-light/20 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </h1>
            </Link>
          </div>
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}
