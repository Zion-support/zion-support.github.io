import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ 
			href: '/services', 
			label: 'Services',
			dropdown: [
				{ href: '/services#ai-ml', label: 'AI & Machine Learning' },
				{ href: '/services#cloud', label: 'Cloud Solutions' },
				{ href: '/services#web-dev', label: 'Web Development' },
				{ href: '/services#mobile', label: 'Mobile Development' },
				{ href: '/services#data-analytics', label: 'Data Analytics' },
				{ href: '/services#cybersecurity', label: 'Cybersecurity' }
			]
		},
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/blog', label: 'Blog' }
	];

	const handleDropdownToggle = (label: string) => {
		setIsDropdownOpen(isDropdownOpen === label ? null : label);
	};

	const closeDropdowns = () => {
		setIsDropdownOpen(null);
	};

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled 
				? 'bg-white/95 backdrop-blur-md shadow-lg' 
				: 'bg-transparent'
		}`}>
			<div className="container mx-auto px-4 py-4 max-w-7xl">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3 group">
						<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
							<span className="text-white font-bold text-xl">Z</span>
						</div>
						<span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Zion App</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{navItems.map((item) => (
							<div key={item.href} className="relative">
								{item.dropdown ? (
									<>
										<button
											onClick={() => handleDropdownToggle(item.label)}
											className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-1"
										>
											{item.label}
											<svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
											</svg>
										</button>
										{isDropdownOpen === item.label && (
											<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
												{item.dropdown.map((dropdownItem) => (
													<Link
														key={dropdownItem.href}
														href={dropdownItem.href}
														className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
														onClick={closeDropdowns}
													>
														{dropdownItem.label}
													</Link>
												))}
											</div>
										)}
									</>
								) : (
									<Link
										href={item.href}
										className={`font-medium transition-colors duration-200 ${
											router.pathname === item.href 
												? 'text-blue-600' 
												: 'text-gray-600 hover:text-blue-600'
										}`}
									>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</div>

					{/* CTA Button */}
					<div className="hidden lg:flex items-center space-x-4">
						<button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
							Get Started
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{isMobileMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-xl">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<div key={item.href}>
									{item.dropdown ? (
										<div>
											<button
												onClick={() => handleDropdownToggle(item.label)}
												className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
											>
												{item.label}
												<svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
												</svg>
											</button>
											{isDropdownOpen === item.label && (
												<div className="ml-4 mt-2 space-y-2">
													{item.dropdown.map((dropdownItem) => (
														<Link
															key={dropdownItem.href}
															href={dropdownItem.href}
															className="block text-gray-500 hover:text-blue-600 transition-colors duration-200 py-1"
															onClick={() => setIsMobileMenuOpen(false)}
														>
															{dropdownItem.label}
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											href={item.href}
											className={`font-medium transition-colors duration-200 py-2 ${
												router.pathname === item.href 
													? 'text-blue-600' 
													: 'text-gray-600 hover:text-blue-600'
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</Link>
									)}
								</div>
							))}
							<button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 mt-4">
								Get Started
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};