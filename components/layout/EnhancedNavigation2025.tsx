import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Sparkles, Zap, ChevronDown, ChevronRight } from 'lucide-react';

export default function EnhancedNavigation2025() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navigation = [
		{
			name: 'Services',
			href: '/services',
			children: [
				{ name: 'AI Solutions', href: '/services/ai-solutions', description: 'Autonomous AI systems and workflows' },
				{ name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable infrastructure and automation' },
				{ name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Zero-trust security frameworks' },
				{ name: 'Data & Analytics', href: '/services/data', description: 'Data pipelines and ML ops' },
				{ name: 'Micro SaaS', href: '/services/micro-saas', description: 'Rapid product development' },
			]
		},
		{
			name: 'Solutions',
			href: '/solutions',
			children: [
				{ name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale implementations' },
				{ name: 'SMB', href: '/solutions/smb', description: 'Small business focused' },
				{ name: 'Startup', href: '/solutions/startup', description: 'Growth acceleration' },
				{ name: 'Government', href: '/solutions/government', description: 'Public sector expertise' },
			]
		},
		{
			name: 'Company',
			href: '/about',
			children: [
				{ name: 'About Us', href: '/about', description: 'Our story and mission' },
				{ name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
				{ name: 'Careers', href: '/careers', description: 'Join our team' },
				{ name: 'Contact', href: '/contact', description: 'Get in touch' },
			]
		},
		{ name: 'Blog', href: '/blog' },
		{ name: 'Pricing', href: '/pricing' },
	];

	const toggleDropdown = (name: string) => {
		setActiveDropdown(activeDropdown === name ? null : name);
	};

	const closeMobileMenu = () => {
		setIsOpen(false);
		setActiveDropdown(null);
	};

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
		}`}>
			{/* Top Contact Bar */}
			<div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
				<div className="max-w-7xl mx-auto px-4 py-2">
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-6 text-cyan-300">
							<div className="flex items-center gap-2">
								<Phone className="w-4 h-4" />
								<span>+1 302 464 0950</span>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="w-4 h-4" />
								<span>kleber@ziontechgroup.com</span>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2 text-cyan-300">
								<Sparkles className="w-4 h-4" />
								<span>Innovation Hub</span>
							</div>
							<div className="flex items-center gap-2 text-purple-300">
								<Zap className="w-4 h-4" />
								<span>AI-Powered Solutions</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="bg-black/95 backdrop-blur-md border-b border-gray-800/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex-shrink-0">
							<Link href="/" className="flex items-center gap-3">
								<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-xl">Z</span>
								</div>
								<div className="hidden sm:block">
									<div className="text-white font-bold text-xl">Zion Tech Group</div>
									<div className="text-cyan-400 text-xs">Innovation • Technology • Growth</div>
								</div>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:block">
							<div className="ml-10 flex items-baseline space-x-8">
								{navigation.map((item) => (
									<div key={item.name} className="relative group">
										{item.children ? (
											<div>
												<button
													onClick={() => toggleDropdown(item.name)}
													className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 group-hover:text-cyan-400 transition-colors"
												>
													{item.name}
													<ChevronDown className="w-4 h-4" />
												</button>
												{activeDropdown === item.name && (
													<div className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 p-4 z-50">
														<div className="grid grid-cols-1 gap-3">
															{item.children.map((child) => (
																<Link
																	key={child.name}
																	href={child.href}
																	onClick={closeMobileMenu}
																	className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
																>
																	<div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
																	<div>
																		<div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
																			{child.name}
																		</div>
																		<div className="text-gray-400 text-sm mt-1">
																			{child.description}
																		</div>
																	</div>
																</Link>
															))}
														</div>
													</div>
												)}
											</div>
										) : (
											<Link
												href={item.href}
												className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-400 transition-colors"
											>
												{item.name}
											</Link>
										)}
									</div>
								))}
							</div>
						</div>

						{/* CTA Button */}
						<div className="hidden lg:block">
							<Link
								href="/contact"
								className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
							>
								Get Started
							</Link>
						</div>

						{/* Mobile menu button */}
						<div className="lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="text-gray-300 hover:text-white p-2 rounded-md"
							>
								{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navigation.map((item) => (
							<div key={item.name}>
								{item.children ? (
									<div>
										<button
											onClick={() => toggleDropdown(item.name)}
											className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
										>
											{item.name}
											<ChevronRight className="w-4 h-4" />
										</button>
										{activeDropdown === item.name && (
											<div className="pl-4 space-y-1">
												{item.children.map((child) => (
													<Link
														key={child.name}
														href={child.href}
														onClick={closeMobileMenu}
														className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
													>
														{child.name}
													</Link>
												))}
											</div>
										)}
									</div>
								) : (
									<Link
										href={item.href}
										onClick={closeMobileMenu}
										className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>
										{item.name}
									</Link>
								)}
							</div>
						))}
						<div className="pt-4">
							<Link
								href="/contact"
								onClick={closeMobileMenu}
								className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block w-full text-center px-6 py-3 rounded-lg font-medium"
							>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
