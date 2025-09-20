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
						<div className="flex items-center gap-2">
							<Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
							<span className="text-yellow-400 font-semibold">Revolutionary Technology Solutions</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
						<div className="relative">
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Zap className="w-6 h-6 text-white" />
							</div>
							<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
						</div>
						<div className="hidden sm:block">
							<div className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Zion Tech Group</div>
							<div className="text-xs text-gray-400">Future Technology Solutions</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:items-center lg:space-x-8">
						{navigation.map((item) => (
							<div key={item.name} className="relative group">
								{item.children ? (
									<button
										onClick={() => toggleDropdown(item.name)}
										className="flex items-center space-x-1 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
										aria-expanded={activeDropdown === item.name}
										aria-haspopup="true"
									>
										<span>{item.name}</span>
										<ChevronDown
											className={`w-4 h-4 transition-transform duration-200 ${
												activeDropdown === item.name ? 'rotate-180' : ''
											}`}
										/>
									</button>
								) : (
									<Link
										href={item.href}
										className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
									>
										{item.name}
									</Link>
								)}

								{/* Dropdown Menu */}
								{item.children && (
									<div className={`absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl shadow-cyan-500/25 p-4 transition-all duration-200 ${
										activeDropdown === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
									}`}>
										<div className="grid gap-3">
											{item.children.map((child) => (
												<Link
													key={child.name}
													href={child.href}
													className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
													onClick={() => setActiveDropdown(null)}
												>
													<div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
														<span className="text-cyan-400 text-sm">→</span>
													</div>
													<div>
														<div className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
															{child.name}
														</div>
														<div className="text-sm text-gray-300">
															{child.description}
														</div>
													</div>
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Right side actions */}
					<div className="flex items-center space-x-4">
						<Link href="/request-quote/">
							<button className="hidden sm:flex px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-colors">
								Request a quote
							</button>
						</Link>
						<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors">
							{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
					<div className="px-4 py-4 space-y-3">
						{navigation.map((item) => (
							<div key={item.name}>
								{item.children ? (
									<div>
										<button
											onClick={() => toggleDropdown(item.name)}
											className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium"
											aria-expanded={activeDropdown === item.name}
										>
											<span>{item.name}</span>
											<ChevronRight
												className={`w-4 h-4 transition-transform duration-200 ${
													activeDropdown === item.name ? 'rotate-90' : ''
												}`}
											/>
										</button>
										{activeDropdown === item.name && (
											<div className="ml-4 mt-2 space-y-2">
												{item.children.map((child) => (
													<Link
														key={child.name}
														href={child.href}
														className="block px-4 py-2 text-gray-400 hover:text-cyan-300 transition-colors duration-200"
														onClick={closeMobileMenu}
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
										className="block px-4 py-3 text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium"
										onClick={closeMobileMenu}
									>
										{item.name}
									</Link>
								)}
							</div>
						))}

						{/* Mobile CTA */}
						<div className="pt-4 border-t border-gray-700">
							<Link href="/request-quote/" onClick={closeMobileMenu}>
								<button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg">
									Request a quote
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}