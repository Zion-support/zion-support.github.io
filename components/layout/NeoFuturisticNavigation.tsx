import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_Menu, _X, _ChevronDown, _ChevronRight, _Phone, _Mail, _MapPin, _Globe, _ArrowRight, _Sparkles, _Brain, _Atom, _Shield, _DollarSign, _FileText, _BarChart3, _MessageSquare, _Truck, _Users, _Database, _Cpu, _Cloud, _Play, _Search, _ShieldCheck, _TrendingUp, _Rocket, _Zap, _Check, _Star, _Clock, _Target, _Building, _Award, _ChartBar, _Lock, _Smartphone, _Palette, _Calendar, _CreditCard, _Settings, _Code, _BookOpen, _Activity, _Bot, _ChevronRight as ChevronRightIcon, _Eye, _FlaskConical, _Link as LinkIcon} from 'lucide-react';
import Button from '../ui/Button';

export default function NeoFuturisticNavigation() {_const [isOpen, _setIsOpen] = useState(false);
	const [isScrolled, _setIsScrolled] = useState(false);
	const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);
	const _router = useRouter();

	const _contactInfo = {
		mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

	useEffect__(() => {_const _handleScroll = () => {
			setIsScrolled(window.scrollY > 20);};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const _toggleDropdown = (_dropdown: string) => {_setActiveDropdown(activeDropdown === dropdown ? null : dropdown);};

	const _closeMobileMenu = () => {_setIsOpen(false);
		setActiveDropdown(null);};

	const _isActive = (_path: string) => router.pathname === path;

	const _serviceCategories = [
		{_name: 'Quantum Computing', _description: 'Revolutionary quantum computing solutions', _icon: <Atom className="w-5 h-5" />, _color: 'from-purple-500 to-pink-500', _services: [
				{ name: 'Quantum AI Platform', _description: 'AI-powered quantum computing', _price: '$299/month'},
				{_name: 'Quantum Optimization', _description: 'Quantum algorithms for complex problems', _price: '$199/month'},
				{_name: 'Quantum Simulation', _description: 'Advanced quantum simulations', _price: '$399/month'}
			]
		},
		{_name: 'AI & Machine Learning', _description: 'Advanced artificial intelligence and ML platforms', _icon: <Brain className="w-5 h-5" />, _color: 'from-blue-500 to-cyan-500', _services: [
				{ name: 'AI Content Generator', _description: 'Professional AI content creation', _price: '$49/month'},
				{_name: 'AI Analytics Platform', _description: 'Advanced business intelligence', _price: '$99/month'},
				{_name: 'AI Automation Suite', _description: 'Complete business automation', _price: '$149/month'}
			]
		},
		{_name: 'Cybersecurity', _description: 'Next-generation security solutions', _icon: <Shield className="w-5 h-5" />, _color: 'from-red-500 to-orange-500', _services: [
				{ name: 'Quantum Cybersecurity', _description: 'Post-quantum era security', _price: '$159/month'},
				{_name: 'AI Threat Detection', _description: 'Intelligent security monitoring', _price: '$89/month'},
				{_name: 'Zero-Trust Platform', _description: 'Advanced access control', _price: '$129/month'}
			]
		},
		{_name: 'Blockchain & Web3', _description: 'Future-proof blockchain and decentralized solutions', _icon: <LinkIcon className="w-5 h-5" />, _color: 'from-indigo-500 to-purple-500', _services: [
				{ name: 'Quantum Blockchain', _description: 'Post-quantum blockchain platform', _price: '$349/month'},
				{_name: 'DeFi Protocol Suite', _description: 'Complete DeFi solutions', _price: '$199/month'},
				{_name: 'NFT Marketplace', _description: 'AI-curated NFT platform', _price: '$99/month'}
			]
		},
		{_name: 'IoT & Smart Cities', _description: 'Connected devices and intelligent infrastructure', _icon: <Globe className="w-5 h-5" />, _color: 'from-teal-500 to-green-500', _services: [
				{ name: 'Quantum IoT Platform', _description: 'Quantum-secured IoT solutions', _price: '$199/month'},
				{_name: 'Smart City Suite', _description: 'Complete urban intelligence', _price: '$299/month'},
				{_name: 'Industrial IoT', _description: 'Manufacturing automation', _price: '$249/month'}
			]
		},
		{_name: 'Metaverse & VR/AR', _description: 'Immersive digital experiences and virtual worlds', _icon: <Eye className="w-5 h-5" />, _color: 'from-pink-500 to-rose-500', _services: [
				{ name: 'Quantum Metaverse', _description: 'Quantum-enhanced virtual reality', _price: '$499/month'},
				{_name: 'VR Development', _description: 'Complete VR platform', _price: '$299/month'},
				{_name: 'AR Solutions', _description: 'Augmented reality platform', _price: '$199/month'}
			]
		},
		{_name: 'Robotics & Automation', _description: 'Intelligent automation and robotic systems', _icon: <Cpu className="w-5 h-5" />, _color: 'from-orange-500 to-red-500', _services: [
				{ name: 'Quantum Robotics', _description: 'AI-powered robotics platform', _price: '$799/month'},
				{_name: 'Manufacturing AI', _description: 'Autonomous manufacturing', _price: '$199/month'},
				{_name: 'Service Robotics', _description: 'Intelligent service automation', _price: '$349/month'}
			]
		},
		{_name: 'Energy & Sustainability', _description: 'Green technology and energy optimization', _icon: <Zap className="w-5 h-5" />, _color: 'from-yellow-500 to-orange-500', _services: [
				{ name: 'Quantum Energy', _description: 'AI-optimized energy management', _price: '$299/month'},
				{_name: 'Smart Grid', _description: 'Intelligent energy distribution', _price: '$199/month'},
				{_name: 'Sustainability AI', _description: 'Environmental impact optimization', _price: '$149/month'}
			]
		},
		{_name: 'Financial Technology', _description: 'Innovative fintech and trading solutions', _icon: <DollarSign className="w-5 h-5" />, _color: 'from-violet-500 to-purple-500', _services: [
				{ name: 'Quantum Trading', _description: 'Quantum-enhanced algorithmic trading', _price: '$899/month'},
				{_name: 'AI Risk Management', _description: 'Intelligent financial risk analysis', _price: '$399/month'},
				{_name: 'Blockchain Finance', _description: 'DeFi and blockchain solutions', _price: '$199/month'}
			]
		},
		{_name: 'Biotechnology & Healthcare', _description: 'AI-powered healthcare and biotech solutions', _icon: <FlaskConical className="w-5 h-5" />, _color: 'from-emerald-500 to-teal-500', _services: [
				{ name: 'Biotech AI', _description: 'AI-powered drug discovery', _price: '$599/month'},
				{_name: 'Healthcare Analytics', _description: 'Medical data intelligence', _price: '$299/month'},
				{_name: 'Genomic AI', _description: 'Advanced genetic analysis', _price: '$399/month'}
			]
		}
	];

	const _companyInfo = [
		{_name: 'About Zion Tech Group', _description: 'Leading the global micro SaaS revolution', _icon: <Rocket className="w-5 h-5" />, _link: '/about'},
		{_name: 'Careers', _description: 'Join our revolutionary team', _icon: <Star className="w-5 h-5" />, _link: '/careers'},
		{_name: 'News & Updates', _description: 'Latest announcements and releases', _icon: <TrendingUp className="w-5 h-5" />, _link: '/news'},
		{_name: 'Contact', _description: 'Talk to our team 24/7', _icon: <Phone className="w-5 h-5" />, _link: '/contact'}
	];

	const _resources = [
		{_name: 'Documentation', _description: 'Comprehensive service guides', _icon: <BookOpen className="w-5 h-5" />, _link: '/docs'},
		{_name: 'Blog & Insights', _description: 'Latest technology trends', _icon: <FileText className="w-5 h-5" />, _link: '/blog'},
		{_name: 'Case Studies', _description: 'Real-world success stories', _icon: <BarChart3 className="w-5 h-5" />, _link: '/case-studies'},
		{_name: 'Pricing', _description: 'Transparent and flexible plans', _icon: <CreditCard className="w-5 h-5" />, _link: '/pricing'},
		{_name: 'Reports', _description: 'Live performance and audits', _icon: <Activity className="w-5 h-5" />, _link: '/reports'}
	];

	// Popular quick links to flagship services
	const _popularServiceLinks = [
		{_name: 'AI Content Generator', _href: '/ai-content-generator'},
		{_name: 'AI Blockchain Analytics', _href: '/ai-blockchain-analytics'},
		{_name: 'AI Legal Contract Analyzer', _href: '/ai-legal-contract-analyzer'},
		{_name: 'AI HR Recruitment', _href: '/ai-hr-recruitment'},
		{_name: 'AI Video Editing', _href: '/ai-video-editing'},
		{_name: 'AI SEO Optimization', _href: '/ai-seo-optimization'},
		{_name: 'AI IoT Platform', _href: '/ai-iot-platform'},
		{_name: 'AI Sales Automation', _href: '/ai-sales-automation'},
		{_name: 'AI Market Research', _href: '/ai-market-research'}
	];

	// Newly added real services quick links
	const _newServiceLinks = [
		{_name: 'Email Deliverability Monitor', _href: '/services/email-deliverability-monitor'},
		{_name: 'Landing Page Experimentation', _href: '/services/landing-page-experimentation'},
		{_name: 'Invoice Reconciliation Automation', _href: '/services/invoice-reconciliation-automation'},
		{_name: 'GitHub Ops Health Dashboard', _href: '/services/github-ops-health-dashboard'},
		{_name: 'Error Budget Automation', _href: '/services/error-budget-automation'},
		{_name: 'LLM Usage Governance', _href: '/services/llm-usage-governance'}
	];

	return (
		<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50' : 'bg-transparent'}`}> 
			{_/* Scroll Progress Bar */}
			<div className="absolute top-0 left-0 h-1 w-full bg-transparent">
				<div
					className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
					style={_{ width: `${(typeof window !== 'undefined' && document.body.scrollHeight > 0) ? (Math.min(100, _(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)) : 0}%` }}
				/>
			</div>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{_/* Logo */}
					<Link href="/" className="flex items-center space-x-3 group">
						<div className="relative">
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Sparkles className="w-6 h-6 text-white" />
							</div>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
						</div>
						<div className="hidden sm:block">
							<div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
								Zion Tech Group
							</div>
							<div className="text-xs text-gray-400">Revolutionary Technology</div>
						</div>
					</Link>

					{_/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{_/* Services Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={_() => toggleDropdown('services')}
							>
								<span>Services</span>
								<ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
									activeDropdown === 'services' ? 'rotate-180' : ''}`}/>
							</button>
							{_activeDropdown === 'services' && (_<div className="absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="grid grid-cols-2 gap-6">
										{serviceCategories.map((category, _index) => (_<div key={index} className="group">
												<div className="flex items-center space-x-3 mb-3">
													<div className={_`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
														{_category.icon}
													</div>
													<div>
														<h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
															{_category.name}
														</h3>
														<p className="text-gray-400 text-sm">{_category.description}</p>
													</div>
												</div>
												<div className="space-y-2">
													{_category.services.map((service, _serviceIndex) => (
														<div key={serviceIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
															<div>
																<div className="text-white text-sm font-medium">{_service.name}</div>
																<div className="text-gray-400 text-xs">{_service.description}</div>
															</div>
															<div className="text-cyan-400 text-sm font-semibold">{_service.price}</div>
														</div>
													))}
												</div>
											</div>
									))}
									</div>
									<div className="mt-6 pt-6 border-t border-gray-700/50">
										<div className="flex items-center justify-between">
											<div className="text-gray-400 text-sm">
												<span className="text-cyan-400 font-semibold">500+</span> Revolutionary Services Available
											</div>
											<Button href="/services" variant="quantum" size="sm">
												View All Services
												<ArrowRight className="w-4 h-4 ml-2" />
											</Button>
										</div>
									</div>
								</div>
							)}
						</div>

						{_/* Direct Links */}
						<Link href="/it-services" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">IT Services</Link>
						<Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Services</Link>
						<Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Micro SaaS</Link>
						<Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Pricing</Link>
						<Link href="/ai-evals" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Evals</Link>
						<Link href="/agentic-rag" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Agentic RAG</Link>
						<Link href="/ai-guardrails" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Guardrails</Link>
						<Link href="/ai-agents" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Agents</Link>
						<Link href="/solutions" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Solutions</Link>
						<Link href="/api-observability" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">API Observability</Link>
						<Link href="/incident-automation-suite" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Incident Automation</Link>
						<Link href="/data-pipeline-health" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Data Pipeline Health</Link>
						<Link href="/ai-code-review-copilot" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Code Review</Link>
						<Link href="/resources" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Resources</Link>

						{_/* Popular Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={_() => toggleDropdown('popular')}
							>
								<span>Popular</span>
								<ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'popular' ? 'rotate-180' : ''}`}/>
							</button>
							{_activeDropdown === 'popular' && (_<div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="space-y-2">
										{popularServiceLinks.map((item) => (
											<Link key={item.href} href={_item.href} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
												<span className="text-white text-sm">{_item.name}</span>
												<ArrowRight className="w-4 h-4 text-cyan-400" />
											</Link>
										))}
									</div>
								</div>
							)}
						</div>

						{_/* New Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={_() => toggleDropdown('new')}
							>
								<span className="flex items-center gap-2">New <span className="px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-600 text-white">Live</span></span>
								<ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'new' ? 'rotate-180' : ''}`}/>
							</button>
							{_activeDropdown === 'new' && (_<div className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="space-y-2">
										{newServiceLinks.map((item) => (
											<Link key={item.href} href={_item.href} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
												<span className="text-white text-sm">{_item.name}</span>
												<ArrowRight className="w-4 h-4 text-fuchsia-400" />
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{_/* Mobile Menu Button */}
					<button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={_() => setIsOpen(!isOpen)}>
						{_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{_/* Mobile Menu */}
			{_isOpen && (_<div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50">
					<div className="max-w-7xl mx-auto px-4 py-6">
						<div className="space-y-6">
							{/* Services Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={_() => toggleDropdown('mobile-services')}>
									<span>Services</span>
									<ChevronRight className={_`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}/>
								</button>

								{_activeDropdown === 'mobile-services' && (_<div className="ml-4 space-y-3">
										{serviceCategories.map((category, _index) => (
											<div key={index} className="border-l-2 border-gray-700 pl-4">
												<div className="text-cyan-400 font-medium mb-2">{_category.name}</div>
												<div className="text-gray-400 text-sm mb-2">{_category.description}</div>
												<div className="space-y-1">
													{_category.services.slice(0, _2).map(_(service, _serviceIndex) => (
														<div key={serviceIndex} className="text-xs text-gray-500">• {_service.name} - {_service.price}</div>
													))}
												</div>
											</div>
										))}
										<div className="pt-3">
											<Button href="/services" variant="quantum" size="sm" className="w-full">
												View All Services
												<ArrowRight className="w-4 h-4 ml-2" />
											</Button>
										</div>
									</div>
								)}
							</div>

							{_/* Company Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={_() => toggleDropdown('mobile-company')}>
									<span>Company</span>
									<ChevronRight className={_`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-90' : ''}`}/>
								</button>

								{_activeDropdown === 'mobile-company' && (_<div className="ml-4 space-y-3">
										{companyInfo.map((item, _index) => (
											<Link key={index} href={_item.link} className="block text-gray-300 hover:text-white transition-colors" onClick={_closeMobileMenu}>
												{_item.name}
											</Link>
										))}
									</div>
								)}
							</div>

							{_/* Resources Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={_() => toggleDropdown('mobile-resources')}>
									<span>Resources</span>
									<ChevronRight className={_`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`}/>
								</button>

								{_activeDropdown === 'mobile-resources' && (_<div className="ml-4 space-y-3">
										{resources.map((item, _index) => (
											<Link key={index} href={_item.link} className="block text-gray-300 hover:text-white transition-colors" onClick={_closeMobileMenu}>
												{_item.name}
											</Link>
										))}
									</div>
								)}
							</div>

							{_/* Contact Info */}
							<div className="pt-6 border-t border-gray-700/50">
								<div className="text-white font-semibold mb-4">Contact Information</div>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<Phone className="w-5 h-5 text-cyan-400" />
										<span className="text-gray-300">{_contactInfo.mobile}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Mail className="w-5 h-5 text-purple-400" />
										<span className="text-gray-300">{_contactInfo.email}</span>
									</div>
									<div className="flex items-center space-x-3">
										<MapPin className="w-5 h-5 text-green-400" />
										<span className="text-gray-300 text-sm">{_contactInfo.address}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Globe className="w-5 h-5 text-blue-400" />
										<span className="text-gray-300">{_contactInfo.website}</span>
									</div>
								</div>

								<div className="mt-6 space-y-3">
									<Button href="/services" variant="quantum" size="lg" className="w-full">
										Explore Services
										<ArrowRight className="w-5 h-5 ml-2" />
									</Button>
									<Button href="/contact" variant="secondary" size="lg" className="w-full">
										Contact Us
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}