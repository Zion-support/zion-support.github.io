import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation.tsx';
export function AppHeader() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors">
                            Services
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
