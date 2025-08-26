import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Shield, Globe, Menu, X } from 'lucide-react';

// Enhanced navigation structure
const navigation = [
	{
		name: 'Services',
		href: '/services',
		icon: Zap,
		children: [
			{ name: 'AI Solutions', href: '/ai-solutions', description: 'Cutting-edge AI services' },
			{ name: 'Cloud & DevOps', href: '/services/cloud', description: 'Scalable infrastructure' },
			{ name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security' },
			{ name: 'Digital Transformation', href: '/services/transformation', description: 'Business modernization' },
			{ name: 'Infrastructure', href: '/services/infrastructure', description: 'IT infrastructure' },
			{ name: 'Consulting', href: '/services/consulting', description: 'Strategic guidance' },
		],
	},
	{
		name: 'Solutions',
		href: '/solutions',
		icon: Shield,
		children: [
			{ name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale implementations' },
			{ name: 'SMB Solutions', href: '/smb', description: 'Small business focused' },
			{ name: 'Startup Solutions', href: '/startup', description: 'Growth acceleration' },
			{ name: 'Government Solutions', href: '/government', description: 'Public sector expertise' },
		],
	},
	{
		name: 'Company',
		href: '/about',
		icon: Globe,
		children: [
			{ name: 'About Us', href: '/about', description: 'Our story and mission' },
			{ name: 'Careers', href: '/careers', description: 'Join our team' },
			{ name: 'News', href: '/news', description: 'Latest updates' },
			{ name: 'Press', href: '/press', description: 'Media resources' },
			{ name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
		],
	},
	{ name: 'Resources', href: '/resources' },
	{ name: 'Contact', href: '/contact' },
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
		setActiveDropdown(null);
	}, [location]);

	const toggleDropdown = (name: string) => {
		setActiveDropdown(activeDropdown === name ? null : name);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/95 backdrop-blur-md border-b border-white/10 shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex-shrink-0"
					>
						<Link to="/" className="flex items-center space-x-2 group">
							<div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
								<span className="text-white text-xl lg:text-2xl font-bold">Z</span>
							</div>
							<div className="hidden sm:block">
								<span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
									Zion Tech Group
								</span>
							</div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:items-center lg:space-x-8">
						{navigation.map((item) => (
							<div key={item.name} className="relative group">
								{(item as any).children ? (
									<button
										onClick={() => toggleDropdown(item.name)}
										className="flex items-center space-x-1 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
										aria-expanded={activeDropdown === item.name}
										aria-haspopup="true"
									>
										{(item as any).icon ? <((item as any).icon) className="w-4 h-4" /> : null}
										<span>{item.name}</span>
										<ChevronDown
											className={`w-4 h-4 transition-transform duration-200 ${
												activeDropdown === item.name ? 'rotate-180' : ''
											}`}
										/>
									</button>
								) : (
									<Link
										to={item.href}
										className="flex items-center space-x-1 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
									>
										{(item as any).icon ? <((item as any).icon) className="w-4 h-4" /> : null}
										<span>{item.name}</span>
									</Link>
								)}

								{/* Dropdown Menu */}
								{(item as any).children && (
									<AnimatePresence>
										{activeDropdown === item.name && (
											<motion.div
												initial={{ opacity: 0, y: 10, scale: 0.95 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												exit={{ opacity: 0, y: 10, scale: 0.95 }}
												transition={{ duration: 0.2 }}
												className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl shadow-zion-cyan/25 p-4"
											>
												<div className="grid gap-3">
													{(item as any).children.map((child: any) => (
														<Link
															key={child.name}
															to={child.href}
															className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
														>
															<div className="w-8 h-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
																<span className="text-zion-cyan text-sm">→</span>
															</div>
															<div>
																<div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
																	{child.name}
																</div>
																<div className="text-sm text-zion-slate-light">
																	{child.description}
																</div>
															</div>
														</Link>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								)}
							</div>
						))}
					</div>

					{/* Right side actions */}
					<div className="flex items-center space-x-4">
						<Button
							variant="ghost"
							size="sm"
							className="hidden sm:flex text-white hover:text-zion-cyan hover:bg-white/10"
							aria-label="Search"
						>
							<Search className="w-4 h-4" />
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="hidden sm:flex text-white hover:text-zion-cyan hover:bg-white/10"
							aria-label="Notifications"
						>
							<Bell className="w-4 h-4" />
						</Button>
						<ThemeToggle />
						<Button
							asChild
							className="hidden sm:flex bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white border-0 shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
						>
							<Link to="/contact">Get Started</Link>
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="lg:hidden text-white hover:text-zion-cyan hover:bg-white/10"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle mobile menu"
							aria-expanded={isOpen}
						>
							{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</Button>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="lg:hidden bg-background/95 backdrop-blur-md border-t border-white/10"
					>
						<div className="px-4 py-6 space-y-4">
							{navigation.map((item) => (
								<div key={item.name}>
									{(item as any).children ? (
										<div>
											<button
												onClick={() => toggleDropdown(item.name)}
												className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
												aria-expanded={activeDropdown === item.name}
											>
												<span className="flex items-center space-x-2">
													{(item as any).icon ? <((item as any).icon) className="w-4 h-4" /> : null}
													<span>{item.name}</span>
												</span>
												<ChevronDown
													className={`w-4 h-4 transition-transform duration-200 ${
														activeDropdown === item.name ? 'rotate-180' : ''
													}`}
												/>
											</button>
											{activeDropdown === item.name && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -10 }}
													transition={{ duration: 0.2 }}
													className="ml-4 mt-2 space-y-2"
												>
													{(item as any).children.map((child: any) => (
														<Link
															key={child.name}
															to={child.href}
															className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
														>
															{child.name}
														</Link>
													))}
												</motion.div>
											)}
										</div>
									) : (
										<Link
											to={item.href}
											className="flex items-center space-x-2 px-4 py-3 text-white hover:text-zion-cyan transition-colors duration-200 font-medium"
										>
											{(item as any).icon ? <((item as any).icon) className="w-4 h-4" /> : null}
											<span>{item.name}</span>
										</Link>
									)}
								</div>
							))}

							{/* Mobile CTA */}
							<div className="pt-4 border-t border-white/10">
								<Button asChild className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white border-0">
									<Link to="/contact">Get Started</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
