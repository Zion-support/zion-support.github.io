import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Search from './Search'

export default function Layout({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
	const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)
	const location = useLocation()

	const navigation = [
		{ name: 'Home', href: '/' },
		{
			name: 'Services',
			href: '/services',
			dropdown: [
				{ name: 'AI Autonomous Systems', href: '/services#ai' },
				{ name: 'Cloud Platforms', href: '/services#cloud' },
				{ name: 'Cybersecurity', href: '/services#cybersecurity' },
				{ name: 'Micro SaaS', href: '/services#micro-saas' },
			],
		},
		{ name: 'About', href: '/about' },
		{ name: 'Case Studies', href: '/case-studies' },
		{ name: 'Research & Development', href: '/research-development' },
		{ name: 'News', href: '/news' },
		{ name: 'Events', href: '/events' },
		{ name: 'Careers', href: '/careers' },
		{ name: 'Contact', href: '/contact' },
	]

	const isActive = (href: string) => {
		if (href === '/') {
			return location.pathname === '/'
		}
		return location.pathname.startsWith(href)
	}

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			{/* Header */}
			<header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 justify-between items-center">
						{/* Logo */}
						<div className="flex-shrink-0">
							<Link to="/" className="flex items-center">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-sm">Z</span>
								</div>
								<span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
									Zion Tech Group
								</span>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex space-x-8">
							{navigation.map((item) => (
								<div key={item.name} className="relative">
									{item.dropdown ? (
										<div
											className="relative"
											onMouseEnter={() => setIsServicesDropdownOpen(true)}
											onMouseLeave={() => setIsServicesDropdownOpen(false)}
										>
											<button
												className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
													isActive(item.href)
														? 'border-blue-500 text-blue-600 dark:text-blue-400'
														: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
												}`}
											>
												{item.name}
												<ChevronDown className="ml-1 h-4 w-4" />
											</button>
											{isServicesDropdownOpen && (
												<div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<div className="py-1">
														{item.dropdown.map((dropdownItem) => (
															<Link
																key={dropdownItem.name}
																to={dropdownItem.href}
																className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
															>
																{dropdownItem.name}
															</Link>
														))}
													</div>
												</div>
											)}
										</div>
									) : (
										<Link
											to={item.href}
											className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
												isActive(item.href)
													? 'border-blue-500 text-blue-600 dark:text-blue-400'
													: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
											}`}
										>
											{item.name}
										</Link>
									)}
								</div>
							))}
						</nav>

						{/* Right side actions */}
						<div className="flex items-center space-x-4">
							<Search />
							<ThemeToggle />
							
							{/* Mobile menu button */}
							<button
								type="button"
								className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							>
								{isMobileMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="lg:hidden">
						<div className="space-y-1 pb-3 pt-2">
							{navigation.map((item) => (
								<div key={item.name}>
									{item.dropdown ? (
										<div>
											<button
												onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
												className="flex w-full items-center justify-between px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
											>
												{item.name}
												<ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
											</button>
											{isServicesDropdownOpen && (
												<div className="pl-8 space-y-1">
													{item.dropdown.map((dropdownItem) => (
														<Link
															key={dropdownItem.name}
															to={dropdownItem.href}
															className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
															onClick={() => setIsMobileMenuOpen(false)}
														>
															{dropdownItem.name}
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											to={item.href}
											className={`block px-4 py-2 text-base font-medium ${
												isActive(item.href)
													? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
													: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800'
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</header>

			{/* Main Content */}
			<main className="flex-1">{children}</main>

			{/* Footer */}
			<footer className="bg-gray-900 text-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="col-span-1 lg:col-span-2">
							<div className="flex items-center mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-sm">Z</span>
								</div>
								<span className="ml-2 text-xl font-bold">Zion Tech Group</span>
							</div>
							<p className="text-gray-300 mb-4 max-w-md">
								Empowering businesses with cutting-edge AI, cloud, and cybersecurity solutions. 
								Transforming the future through innovative technology.
							</p>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<Facebook className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<Twitter className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<Linkedin className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<Instagram className="h-5 w-5" />
								</a>
							</div>
						</div>

						{/* Services */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Services</h3>
							<ul className="space-y-2">
								<li>
									<Link to="/services#ai" className="text-gray-300 hover:text-white transition-colors">
										AI Autonomous Systems
									</Link>
								</li>
								<li>
									<Link to="/services#cloud" className="text-gray-300 hover:text-white transition-colors">
										Cloud Platforms
									</Link>
								</li>
								<li>
									<Link to="/services#cybersecurity" className="text-gray-300 hover:text-white transition-colors">
										Cybersecurity
									</Link>
								</li>
								<li>
									<Link to="/services#micro-saas" className="text-gray-300 hover:text-white transition-colors">
										Micro SaaS
									</Link>
								</li>
							</ul>
						</div>

						{/* Company */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Company</h3>
							<ul className="space-y-2">
								<li>
									<Link to="/about" className="text-gray-300 hover:text-white transition-colors">
										About Us
									</Link>
								</li>
								<li>
									<Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
										Careers
									</Link>
								</li>
								<li>
									<Link to="/news" className="text-gray-300 hover:text-white transition-colors">
										News
									</Link>
								</li>
								<li>
									<Link to="/events" className="text-gray-300 hover:text-white transition-colors">
										Events
									</Link>
								</li>
								<li>
									<Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">
										Case Studies
									</Link>
								</li>
								<li>
									<Link to="/research-development" className="text-gray-300 hover:text-white transition-colors">
										R&D
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Footer */}
					<div className="mt-12 pt-8 border-t border-gray-800">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<div className="text-gray-400 text-sm mb-4 md:mb-0">
								© 2025 Zion Tech Group. All rights reserved.
							</div>
							<div className="flex space-x-6 text-sm">
								<Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
									Privacy Policy
								</Link>
								<Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
									Terms of Service
								</Link>
								<Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
									Contact
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}