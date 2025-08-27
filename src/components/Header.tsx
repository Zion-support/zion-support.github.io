import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

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
=======
import { MainNavigation } from '../layout/MainNavigation';
export function Header() {
    return (<header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>
            </Link>
          </div>
          <MainNavigation />
        </div>
      </div>
    </header>);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
