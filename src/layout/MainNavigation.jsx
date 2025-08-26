import React from 'react';
import { Link } from 'react-router-dom';

export const MainNavigation = () => {
    return (
        <nav className="hidden md:flex space-x-8">
            <Link 
                to="/" 
                className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors"
            >
                Home
            </Link>
            <Link 
                to="/services" 
                className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors"
            >
                Services
            </Link>
            <Link 
                to="/marketplace" 
                className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors"
            >
                Marketplace
            </Link>
            <Link 
                to="/about" 
                className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors"
            >
                About
            </Link>
            <Link 
                to="/contact" 
                className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors"
            >
                Contact
            </Link>
        </nav>
    );
};
