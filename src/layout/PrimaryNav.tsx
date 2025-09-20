import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function PrimaryNav() {
	return (
		<header className="sticky top-0 z-40 bg-zion-slate-dark/80 backdrop-blur border-b border-zion-blue-light">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<Link to="/" className="flex items-center space-x-2">
					<div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" />
					<span className="text-lg font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">ZION</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<NavLink to="/" className={({isActive}) => isActive ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'}>Home</NavLink>
					<NavLink to="/services" className={({isActive}) => isActive ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'}>Services</NavLink>
					<NavLink to="/solutions" className={({isActive}) => isActive ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'}>Solutions</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'}>About</NavLink>
					<NavLink to="/contact" className={({isActive}) => isActive ? 'text-zion-cyan' : 'text-white hover:text-zion-cyan'}>Contact</NavLink>
				</nav>
			</div>
		</header>
	);
}