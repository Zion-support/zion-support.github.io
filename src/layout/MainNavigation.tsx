
import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation(): JSX.Element {
	return (
		<nav className="hidden lg:flex items-center space-x-8">
			<Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors">Services</Link>
			<Link to="/solutions" className="text-gray-700 hover:text-zion-purple transition-colors">Solutions</Link>
			<Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors">About</Link>
			<Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors">Contact</Link>
		</nav>
	);
}

export default MainNavigation;
