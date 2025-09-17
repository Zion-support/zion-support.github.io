<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

>>>>>>> origin/merge-new-content-1757989975
function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const location = useLocation();
	const quickActions = [
		{
			name: 'New: Edge Agents Guide',
			href: '/blog/ai-2026-edge-agents-production-guide',
			icon: Sparkles,
			description: 'Fresh: production blueprint',
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
};



=======
import React from "react";

const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Header</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
export default Header;
