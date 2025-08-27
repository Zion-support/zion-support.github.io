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

						{/* Right side - Search, Theme Toggle, Mobile Menu Button */}
						<div className="flex items-center space-x-4">
							<Search />
							<ThemeToggle />
							<button
								onClick={() => setIsMobileMenuOpen(true)}
								className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								<Menu className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden">
					<div className="fixed inset-0 z-50">
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
						<div className="fixed inset-y-0 right-0 flex max-w-xs w-full">
							<div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800">
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										onClick={() => setIsMobileMenuOpen(false)}
										className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
									>
										<X className="h-6 w-6 text-white" />
									</button>
								</div>
								<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
									<nav className="mt-5 px-2 space-y-1">
										{navigation.map((item) => (
											<div key={item.name}>
												{item.dropdown ? (
													<div>
														<button
															onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
															className="w-full text-left group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
														>
															{item.name}
															<ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
														</button>
														{isServicesDropdownOpen && (
															<div className="pl-4 space-y-1">
																{item.dropdown.map((dropdownItem) => (
																	<Link
																		key={dropdownItem.name}
																		to={dropdownItem.href}
																		onClick={() => setIsMobileMenuOpen(false)}
																		className="block px-2 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 rounded-md"
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
														onClick={() => setIsMobileMenuOpen(false)}
														className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
															isActive(item.href)
																? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100'
																: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
														}`}
													>
														{item.name}
													</Link>
												)}
											</div>
										))}
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Main Content */}
			<main className="flex-1">
				{children}
			</main>

			{/* Footer */}
			<footer className="bg-gray-900 text-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="col-span-1 md:col-span-2">
							<div className="flex items-center mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-sm">Z</span>
								</div>
								<span className="ml-2 text-xl font-bold">Zion Tech Group</span>
							</div>
							<p className="text-gray-300 mb-4 max-w-md">
								Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services.
							</p>
							<div className="flex space-x-4">
								<a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-white transition-colors">
									<Linkedin className="h-5 w-5" />
								</a>
								<a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
									<Twitter className="h-5 w-5" />
								</a>
								<a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
									<Facebook className="h-5 w-5" />
								</a>
								<a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
									<Instagram className="h-5 w-5" />
								</a>
							</div>
						</div>

						{/* Services */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Services</h3>
							<ul className="space-y-2">
								<li><Link to="/services#ai" className="text-gray-300 hover:text-white transition-colors">AI Autonomous Systems</Link></li>
								<li><Link to="/services#cloud" className="text-gray-300 hover:text-white transition-colors">Cloud Platforms</Link></li>
								<li><Link to="/services#cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
								<li><Link to="/services#micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>
							</ul>
						</div>

						{/* Company */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Company</h3>
							<ul className="space-y-2">
								<li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
								<li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
								<li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
								<li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
							</ul>
						</div>
					</div>

					{/* Contact Info */}
					<div className="mt-8 pt-8 border-t border-gray-700">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
							<div className="flex items-center">
								<Phone className="h-4 w-4 mr-2" />
								<span>+1 302 464 0950</span>
							</div>
							<div className="flex items-center">
								<Mail className="h-4 w-4 mr-2" />
								<span>kleber@ziontechgroup.com</span>
							</div>
							<div className="flex items-center">
								<MapPin className="h-4 w-4 mr-2" />
								<span>364 E Main St STE 1008, Middletown DE 19709</span>
							</div>
						</div>
					</div>

					{/* Bottom Footer */}
					<div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© 2025 Zion Tech Group. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
								Privacy Policy
							</Link>
							<Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
