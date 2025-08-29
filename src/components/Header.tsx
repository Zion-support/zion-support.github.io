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
  Settings
} from 'lucide-react';

export function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link to="/" className="text-white text-xl font-bold">
						Zion Tech Group
					</Link>
					<div className="hidden md:flex space-x-8">
						<Link to="/services" className="text-white hover:text-cyan-400">Services</Link>
						<Link to="/solutions" className="text-white hover:text-cyan-400">Solutions</Link>
						<Link to="/about" className="text-white hover:text-cyan-400">About</Link>
						<Link to="/contact" className="text-white hover:text-cyan-400">Contact</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

