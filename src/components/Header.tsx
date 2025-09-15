<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Network,
  Cloud,
  ArrowRight
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Network },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>kleber@ziontechgroup.com</span>
            </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Shield, 
  Cpu, 
  Heart, 
  Rocket, 
  Sparkles,
  BarChart3,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Search,
  Bell,
  User,
  Settings,
  Star,
  Zap,
  Briefcase,
  Target,
  Atom,
  Palette,
  Code,
  Leaf,
  Gamepad2,
  GraduationCap,
  Microscope,
  Satellite,
  Wrench,
  Lightbulb,
  Server,
  Lock
} from 'lucide-react';

function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const location = useLocation();

	const quickActions = [
		{
			name: 'Latest Insights',
			href: '/blog/latest',
			icon: Sparkles,
			description: 'Read our newest research',
			featured: true,
			color: 'from-amber-500 to-orange-600'
		},
		{
			name: 'Comprehensive Services Showcase',
			href: '/comprehensive-services-showcase-2030',
			icon: Star,
			description: 'Complete service portfolio',
			featured: true,
			color: 'from-yellow-500 to-orange-500'
		},
		{
			name: 'AI Autonomous Operations',
			href: '/services/ai-autonomous-business-operations-platform',
			icon: Brain,
			description: 'Revolutionary AI platform',
			featured: true,
			color: 'from-purple-500 to-pink-500'
		},
		{
			name: 'Quantum AI Cybersecurity',
			href: '/services/quantum-ai-cybersecurity-platform',
			icon: Lock,
			description: 'Next-gen cybersecurity',
			featured: true,
			color: 'from-red-500 to-orange-500'
		},
		{
			name: 'AI Content Creation Studio',
			href: '/services/ai-content-creation-studio',
			icon: Palette,
			description: 'AI-powered content generation',
			color: 'from-orange-500 to-red-500'
		},
		{
			name: 'AI Sales Intelligence',
			href: '/services/ai-sales-intelligence-platform',
			icon: Target,
			description: 'Advanced sales intelligence',
			color: 'from-green-500 to-emerald-500'
		},
		{
			name: 'AI Customer Support',
			href: '/services/ai-customer-support-automation',
			icon: Users,
			description: 'Intelligent support automation',
			color: 'from-blue-500 to-purple-500'
		}
	];

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			// Navigate to services page with search query
			window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg lg:left-80">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo and Brand */}
					<Link to="/" className="flex items-center space-x-3 group">
						<div className="relative">
							<div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Zap className="w-5 h-5 text-white" />
							</div>
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
						</div>
						<div className="hidden sm:block">
							<h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
								Zion Tech Group
							</h1>
							<p className="text-xs text-slate-400">Innovation & Technology</p>
						</div>
					</Link>

					{/* Search Bar */}
					<div className="flex-1 max-w-md mx-4 hidden md:block">
						<form onSubmit={handleSearch} className="relative">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
								<input
									type="text"
									placeholder="Search services, solutions..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
								/>
							</div>
						</form>
					</div>

					{/* Quick Actions */}
					<div className="hidden lg:flex items-center space-x-4">
						<Link
							to="/blog/latest"
							className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium rounded-lg hover:from-amber-400 hover:to-orange-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/20"
						>
							<Sparkles className="w-4 h-4 inline mr-2" />
							Latest Insights
						</Link>
						<Link
							to="/comprehensive-services-showcase-2030"
							className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-medium rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-500/20"
						>
							<Star className="w-4 h-4 inline mr-2" />
							Services Showcase
						</Link>
						<Link
							to="/contact"
							className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
						>
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
						<Menu className="w-6 h-6" />
					</button>
				</div>

				{/* Search Bar for Mobile */}
				<div className="md:hidden pb-4">
					<form onSubmit={handleSearch} className="relative">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
							<input
								type="text"
								placeholder="Search services, solutions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
							/>
						</div>
					</form>
				</div>
			</nav>

			{/* Quick Actions Bar */}
			<div className="hidden lg:block border-t border-slate-700/30 bg-slate-900/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center space-x-6 py-3 overflow-x-auto">
						{quickActions.map((action) => (
							<Link
								key={action.name}
								to={action.href}
								className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
									action.featured 
										? 'bg-gradient-to-r ' + action.color + ' text-white shadow-lg' 
										: 'text-slate-300 hover:text-white hover:bg-slate-800/50'
								}`}
							>
								<action.icon className="w-4 h-4" />
								<span className="whitespace-nowrap">{action.name}</span>
								{action.featured && <Star className="w-3 h-3" />}
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}

export { Header };
export default Header;

>>>>>>> cursor/create-and-deploy-new-content-7857
