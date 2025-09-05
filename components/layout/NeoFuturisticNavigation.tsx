import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { useRouter } from 'next/router',
import { 
	Menu,
	X, 
	ChevronDown, 
	ChevronRight,
	Phone,
	Mail,
	MapPin,
	Globe,
	ArrowRight,
	Sparkles,
	Brain,
	Atom,
	Shield,
	DollarSign,
	FileText,
	BarChart3,
	MessageSquare,
	Truck,
	Users,
	Database,
	Cpu,
	Cloud,
	Play,
	Search,
	ShieldCheck,
	TrendingUp,
	Rocket,
	Zap,
	Check,
	Star,
	Clock,
	Target,
	Building,
	Award,
	ChartBar,
	Lock,
	Smartphone,
	Palette,
	Calendar,
	CreditCard,
	Settings,
	Code,
	BookOpen,
	Activity,
	Bot,
	ChevronRight as ChevronRightIcon,
	Eye,
	FlaskConical,
	Link as LinkIcon
} from 'lucide-react',
import Button from '../ui/Button',
export default function NeoFuturisticNavigation() {
	const [isOpen, setIsOpen] = useState(false),
	const [isScrolled, setIsScrolled] = useState(false),
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
	const router = useRouter(),

	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	},

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		},

		window.addEventListener('scroll', handleScroll),
		return () => window.removeEventListener('scroll', handleScroll)
	}, []),

	const toggleDropdown = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
	},

	const closeMobileMenu = () => {
		setIsOpen(false),
		setActiveDropdown(null)
	},

	const isActive = (path: string) => router.pathname === path,

	const serviceCategories = [
		{
			name: 'Quantum Computing',
			description: 'Revolutionary quantum computing solutions',
			icon: <Atom className=&quot;w-5 h-5&quot; />,
			color: 'from-purple-500 to-pink-500',
			services: [
				{ name: 'Quantum AI Platform', description: 'AI-powered quantum computing', price: '$299/month' },
				{ name: 'Quantum Optimization', description: 'Quantum algorithms for complex problems', price: '$199/month' },
				{ name: 'Quantum Simulation', description: 'Advanced quantum simulations', price: '$399/month' }
			]
		},
		{
			name: 'AI & Machine Learning',
			description: 'Advanced artificial intelligence and ML platforms',
			icon: <Brain className=&quot;w-5 h-5&quot; />,
			color: 'from-blue-500 to-cyan-500',
			services: [
				{ name: 'AI Content Generator', description: 'Professional AI content creation', price: '$49/month' },
				{ name: 'AI Analytics Platform', description: 'Advanced business intelligence', price: '$99/month' },
				{ name: 'AI Automation Suite', description: 'Complete business automation', price: '$149/month' }
			]
		},
		{
			name: 'Cybersecurity',
			description: 'Next-generation security solutions',
			icon: <Shield className=&quot;w-5 h-5&quot; />,
			color: 'from-red-500 to-orange-500',
			services: [
				{ name: 'Quantum Cybersecurity', description: 'Post-quantum era security', price: '$159/month' },
				{ name: 'AI Threat Detection', description: 'Intelligent security monitoring', price: '$89/month' },
				{ name: 'Zero-Trust Platform', description: 'Advanced access control', price: '$129/month' }
			]
		},
		{
			name: 'Blockchain & Web3',
			description: 'Future-proof blockchain and decentralized solutions',
			icon: <LinkIcon className=&quot;w-5 h-5&quot; />,
			color: 'from-indigo-500 to-purple-500',
			services: [
				{ name: 'Quantum Blockchain', description: 'Post-quantum blockchain platform', price: '$349/month' },
				{ name: 'DeFi Protocol Suite', description: 'Complete DeFi solutions', price: '$199/month' },
				{ name: 'NFT Marketplace', description: 'AI-curated NFT platform', price: '$99/month' }
			]
		},
		{
			name: 'IoT & Smart Cities',
			description: 'Connected devices and intelligent infrastructure',
			icon: <Globe className=&quot;w-5 h-5&quot; />,
			color: 'from-teal-500 to-green-500',
			services: [
				{ name: 'Quantum IoT Platform', description: 'Quantum-secured IoT solutions', price: '$199/month' },
				{ name: 'Smart City Suite', description: 'Complete urban intelligence', price: '$299/month' },
				{ name: 'Industrial IoT', description: 'Manufacturing automation', price: '$249/month' }
			]
		},
		{
			name: 'Metaverse & VR/AR',
			description: 'Immersive digital experiences and virtual worlds',
			icon: <Eye className=&quot;w-5 h-5&quot; />,
			color: 'from-pink-500 to-rose-500',
			services: [
				{ name: 'Quantum Metaverse', description: 'Quantum-enhanced virtual reality', price: '$499/month' },
				{ name: 'VR Development', description: 'Complete VR platform', price: '$299/month' },
				{ name: 'AR Solutions', description: 'Augmented reality platform', price: '$199/month' }
			]
		},
		{
			name: 'Robotics & Automation',
			description: 'Intelligent automation and robotic systems',
			icon: <Cpu className=&quot;w-5 h-5&quot; />,
			color: 'from-orange-500 to-red-500',
			services: [
				{ name: 'Quantum Robotics', description: 'AI-powered robotics platform', price: '$799/month' },
				{ name: 'Manufacturing AI', description: 'Autonomous manufacturing', price: '$199/month' },
				{ name: 'Service Robotics', description: 'Intelligent service automation', price: '$349/month' }
			]
		},
		{
			name: 'Energy & Sustainability',
			description: 'Green technology and energy optimization',
			icon: <Zap className=&quot;w-5 h-5&quot; />,
			color: 'from-yellow-500 to-orange-500',
			services: [
				{ name: 'Quantum Energy', description: 'AI-optimized energy management', price: '$299/month' },
				{ name: 'Smart Grid', description: 'Intelligent energy distribution', price: '$199/month' },
				{ name: 'Sustainability AI', description: 'Environmental impact optimization', price: '$149/month' }
			]
		},
		{
			name: 'Financial Technology',
			description: 'Innovative fintech and trading solutions',
			icon: <DollarSign className=&quot;w-5 h-5&quot; />,
			color: 'from-violet-500 to-purple-500',
			services: [
				{ name: 'Quantum Trading', description: 'Quantum-enhanced algorithmic trading', price: '$899/month' },
				{ name: 'AI Risk Management', description: 'Intelligent financial risk analysis', price: '$399/month' },
				{ name: 'Blockchain Finance', description: 'DeFi and blockchain solutions', price: '$199/month' }
			]
		},
		{
			name: 'Biotechnology & Healthcare',
			description: 'AI-powered healthcare and biotech solutions',
			icon: <FlaskConical className=&quot;w-5 h-5&quot; />,
			color: 'from-emerald-500 to-teal-500',
			services: [
				{ name: 'Biotech AI', description: 'AI-powered drug discovery', price: '$599/month' },
				{ name: 'Healthcare Analytics', description: 'Medical data intelligence', price: '$299/month' },
				{ name: 'Genomic AI', description: 'Advanced genetic analysis', price: '$399/month' }
			]
		}
	],

	const companyInfo = [
<<<<<<< HEAD
		{ name: 'About Zion Tech Group', description: 'Leading the global micro SaaS revolution', icon: <Rocket className="w-5 h-5" />, link: '/about' },
		{ name: 'Careers', description: 'Join our revolutionary team', icon: <Star className="w-5 h-5" />, link: '/careers' },
		{ name: 'News & Updates', description: 'Latest announcements and releases', icon: <TrendingUp className="w-5 h-5" />, link: '/news' },
		{ name: 'Contact', description: 'Talk to our team 24/7', icon: <Phone className="w-5 h-5" />, link: '/contact' }
	],

	const resources = [
		{ name: 'Documentation', description: 'Comprehensive service guides', icon: <BookOpen className="w-5 h-5" />, link: '/docs' },
		{ name: 'Blog & Insights', description: 'Latest technology trends', icon: <FileText className="w-5 h-5" />, link: '/blog' },
		{ name: 'Case Studies', description: 'Real-world success stories', icon: <BarChart3 className="w-5 h-5" />, link: '/case-studies' },
		{ name: 'Pricing', description: 'Transparent and flexible plans', icon: <CreditCard className="w-5 h-5" />, link: '/pricing' },
		{ name: 'Reports', description: 'Live performance and audits', icon: <Activity className="w-5 h-5" />, link: '/reports' }
	],
=======
		{ name: 'About Zion Tech Group', description: 'Leading the global micro SaaS revolution', icon: <Rocket className=&quot;w-5 h-5&quot; />, link: '/about' },
		{ name: 'Careers', description: 'Join our revolutionary team', icon: <Star className=&quot;w-5 h-5&quot; />, link: '/careers' },
		{ name: 'News & Updates', description: 'Latest announcements and releases', icon: <TrendingUp className=&quot;w-5 h-5&quot; />, link: '/news' },
		{ name: 'Contact', description: 'Talk to our team 24/7', icon: <Phone className=&quot;w-5 h-5&quot; />, link: '/contact' }
	];

	const resources = [
		{ name: 'Documentation', description: 'Comprehensive service guides', icon: <BookOpen className=&quot;w-5 h-5&quot; />, link: '/docs' },
		{ name: 'Blog & Insights', description: 'Latest technology trends', icon: <FileText className=&quot;w-5 h-5&quot; />, link: '/blog' },
		{ name: 'Case Studies', description: 'Real-world success stories', icon: <BarChart3 className=&quot;w-5 h-5&quot; />, link: '/case-studies' },
		{ name: 'Pricing', description: 'Transparent and flexible plans', icon: <CreditCard className=&quot;w-5 h-5&quot; />, link: '/pricing' },
		{ name: 'Reports', description: 'Live performance and audits', icon: <Activity className=&quot;w-5 h-5&quot; />, link: '/reports' }
	];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

	// Popular quick links to flagship services
	const popularServiceLinks = [
		{ name: 'AI Content Generator', href: '/ai-content-generator' },
		{ name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' },
		{ name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
		{ name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },
		{ name: 'AI Video Editing', href: '/ai-video-editing' },
		{ name: 'AI SEO Optimization', href: '/ai-seo-optimization' },
		{ name: 'AI IoT Platform', href: '/ai-iot-platform' },
		{ name: 'AI Sales Automation', href: '/ai-sales-automation' },
		{ name: 'AI Market Research', href: '/ai-market-research' }
	],

	// Newly added real services quick links
	const newServiceLinks = [
		{ name: 'Email Deliverability Monitor', href: '/services/email-deliverability-monitor' },
		{ name: 'Landing Page Experimentation', href: '/services/landing-page-experimentation' },
		{ name: 'Invoice Reconciliation Automation', href: '/services/invoice-reconciliation-automation' },
		{ name: 'GitHub Ops Health Dashboard', href: '/services/github-ops-health-dashboard' },
		{ name: 'Error Budget Automation', href: '/services/error-budget-automation' },
		{ name: 'LLM Usage Governance', href: '/services/llm-usage-governance' }
	],

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50' : 'bg-transparent'
		}`}> 
			{/* Scroll Progress Bar */}
			<div className=&quot;absolute top-0 left-0 h-1 w-full bg-transparent&quot;>
				<div
					className=&quot;h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600&quot;
					style={{ width: `${(typeof window !== 'undefined' && document.body.scrollHeight > 0) ? (Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)) : 0}%` }}
				/>
			</div>
			<div className=&quot;max-w-7xl mx-auto px-4&quot;>
				<div className=&quot;flex items-center justify-between h-20&quot;>
					{/* Logo */}
					<Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
						<div className=&quot;relative&quot;>
							<div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
								<Sparkles className=&quot;w-6 h-6 text-white&quot; />
							</div>
							<div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot;></div>
						</div>
						<div className=&quot;hidden sm:block&quot;>
							<div className=&quot;text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300&quot;>
								Zion Tech Group
							</div>
							<div className=&quot;text-xs text-gray-400&quot;>Revolutionary Technology</div>
						</div>
					</a>

					{/* Desktop Navigation */}
					<div className=&quot;hidden lg:flex items-center space-x-8&quot;>
						{/* Services Dropdown */}
						<div className=&quot;relative group&quot;>
							<button
								className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
								onClick={() => toggleDropdown('services')}
							>
								<span>Services</span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
									activeDropdown === 'services' ? 'rotate-180' : ''
								}`}/>
							</button>
							{activeDropdown === 'services' && (
								<div className=&quot;absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6&quot;>
									<div className=&quot;grid grid-cols-2 gap-6&quot;>
										{serviceCategories.map((category, index) => (
											<div key={index} className=&quot;group&quot;>
												<div className=&quot;flex items-center space-x-3 mb-3&quot;>
													<div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
														{category.icon}
													</div>
													<div>
														<h3 className=&quot;text-white font-semibold group-hover:text-cyan-400 transition-colors&quot;>
															{category.name}
														</h3>
														<p className=&quot;text-gray-400 text-sm&quot;>{category.description}</p>
													</div>
												</div>
												<div className=&quot;space-y-2&quot;>
													{category.services.map((service, serviceIndex) => (
														<div key={serviceIndex} className=&quot;flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors&quot;>
															<div>
																<div className=&quot;text-white text-sm font-medium&quot;>{service.name}</div>
																<div className=&quot;text-gray-400 text-xs&quot;>{service.description}</div>
															</div>
															<div className=&quot;text-cyan-400 text-sm font-semibold&quot;>{service.price}</div>
														</div>
													))}
												</div>
											</div>
									))}
									</div>
									<div className=&quot;mt-6 pt-6 border-t border-gray-700/50&quot;>
										<div className=&quot;flex items-center justify-between&quot;>
											<div className=&quot;text-gray-400 text-sm&quot;>
												<span className=&quot;text-cyan-400 font-semibold&quot;>500+</span> Revolutionary Services Available
											</div>
											<Button href=&quot;/services&quot; variant=&quot;quantum&quot; size=&quot;sm&quot;>
												View All Services
												<ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
											</Button>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Direct Links */}
						<Link href=&quot;/it-services&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>IT Services</a>
						<Link href=&quot;/ai-services&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>AI Services</a>
						<Link href=&quot;/micro-saas&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Micro SaaS</a>
						<Link href=&quot;/pricing&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Pricing</a>
						<Link href=&quot;/ai-evals&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>AI Evals</a>
						<Link href=&quot;/agentic-rag&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Agentic RAG</a>
						<Link href=&quot;/ai-guardrails&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Guardrails</a>
						<Link href=&quot;/ai-agents&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Agents</a>
						<Link href=&quot;/solutions&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Solutions</a>
						<Link href=&quot;/api-observability&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>API Observability</a>
						<Link href=&quot;/incident-automation-suite&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Incident Automation</a>
						<Link href=&quot;/data-pipeline-health&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Data Pipeline Health</a>
						<Link href=&quot;/ai-code-review-copilot&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>AI Code Review</a>
						<Link href=&quot;/resources&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;>Resources</a>

						{/* Popular Dropdown */}
						<div className=&quot;relative group&quot;>
							<button
								className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
								onClick={() => toggleDropdown('popular')}
							>
								<span>Popular</span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'popular' ? 'rotate-180' : ''}`}/>
							</button>
							{activeDropdown === 'popular' && (
								<div className=&quot;absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6&quot;>
									<div className=&quot;space-y-2&quot;>
										{popularServiceLinks.map((item) => (
											<Link key={item.href} href={item.href} className=&quot;flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors&quot;>
												<span className=&quot;text-white text-sm&quot;>{item.name}</span>
												<ArrowRight className=&quot;w-4 h-4 text-cyan-400&quot; />
											</a>
										))}
									</div>
								</div>
							)}
						</div>

						{/* New Dropdown */}
						<div className=&quot;relative group&quot;>
							<button
								className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
								onClick={() => toggleDropdown('new')}
							>
								<span className=&quot;flex items-center gap-2&quot;>New <span className=&quot;px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-600 text-white&quot;>Live</span></span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'new' ? 'rotate-180' : ''}`}/>
							</button>
							{activeDropdown === 'new' && (
								<div className=&quot;absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6&quot;>
									<div className=&quot;space-y-2&quot;>
										{newServiceLinks.map((item) => (
											<Link key={item.href} href={item.href} className=&quot;flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors&quot;>
												<span className=&quot;text-white text-sm&quot;>{item.name}</span>
												<ArrowRight className=&quot;w-4 h-4 text-fuchsia-400&quot; />
											</a>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Mobile Menu Button */}
					<button className=&quot;lg:hidden p-2 text-gray-300 hover:text-white transition-colors&quot; onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className=&quot;lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50&quot;>
					<div className=&quot;max-w-7xl mx-auto px-4 py-6&quot;>
						<div className=&quot;space-y-6&quot;>
							{/* Services Section */}
							<div>
								<button className=&quot;flex items-center justify-between w-full text-left text-white font-semibold mb-4&quot; onClick={() => toggleDropdown('mobile-services')}>
									<span>Services</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}/>
								</button>

								{activeDropdown === 'mobile-services' && (
									<div className=&quot;ml-4 space-y-3&quot;>
										{serviceCategories.map((category, index) => (
											<div key={index} className=&quot;border-l-2 border-gray-700 pl-4&quot;>
												<div className=&quot;text-cyan-400 font-medium mb-2&quot;>{category.name}</div>
												<div className=&quot;text-gray-400 text-sm mb-2&quot;>{category.description}</div>
												<div className=&quot;space-y-1&quot;>
													{category.services.slice(0, 2).map((service, serviceIndex) => (
														<div key={serviceIndex} className=&quot;text-xs text-gray-500&quot;>• {service.name} - {service.price}</div>
													))}
												</div>
											</div>
										))}
										<div className=&quot;pt-3&quot;>
											<Button href=&quot;/services&quot; variant=&quot;quantum&quot; size=&quot;sm&quot; className=&quot;w-full&quot;>
												View All Services
												<ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
											</Button>
										</div>
									</div>
								)}
							</div>

							{/* Company Section */}
							<div>
								<button className=&quot;flex items-center justify-between w-full text-left text-white font-semibold mb-4&quot; onClick={() => toggleDropdown('mobile-company')}>
									<span>Company</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-90' : ''}`}/>
								</button>

								{activeDropdown === 'mobile-company' && (
									<div className=&quot;ml-4 space-y-3&quot;>
										{companyInfo.map((item, index) => (
											<Link key={index} href={item.link} className=&quot;block text-gray-300 hover:text-white transition-colors&quot; onClick={closeMobileMenu}>
												{item.name}
											</a>
										))}
									</div>
								)}
							</div>

							{/* Resources Section */}
							<div>
								<button className=&quot;flex items-center justify-between w-full text-left text-white font-semibold mb-4&quot; onClick={() => toggleDropdown('mobile-resources')}>
									<span>Resources</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`}/>
								</button>

								{activeDropdown === 'mobile-resources' && (
									<div className=&quot;ml-4 space-y-3&quot;>
										{resources.map((item, index) => (
											<Link key={index} href={item.link} className=&quot;block text-gray-300 hover:text-white transition-colors&quot; onClick={closeMobileMenu}>
												{item.name}
											</a>
										))}
									</div>
								)}
							</div>

							{/* Contact Info */}
							<div className=&quot;pt-6 border-t border-gray-700/50&quot;>
								<div className=&quot;text-white font-semibold mb-4&quot;>Contact Information</div>
								<div className=&quot;space-y-3&quot;>
									<div className=&quot;flex items-center space-x-3&quot;>
										<Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
										<span className=&quot;text-gray-300&quot;>{contactInfo.mobile}</span>
									</div>
									<div className=&quot;flex items-center space-x-3&quot;>
										<Mail className=&quot;w-5 h-5 text-purple-400&quot; />
										<span className=&quot;text-gray-300&quot;>{contactInfo.email}</span>
									</div>
									<div className=&quot;flex items-center space-x-3&quot;>
										<MapPin className=&quot;w-5 h-5 text-green-400&quot; />
										<span className=&quot;text-gray-300 text-sm&quot;>{contactInfo.address}</span>
									</div>
									<div className=&quot;flex items-center space-x-3&quot;>
										<Globe className=&quot;w-5 h-5 text-blue-400&quot; />
										<span className=&quot;text-gray-300&quot;>{contactInfo.website}</span>
									</div>
								</div>

								<div className=&quot;mt-6 space-y-3&quot;>
									<Button href=&quot;/services&quot; variant=&quot;quantum&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>
										Explore Services
										<ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
									</Button>
									<Button href=&quot;/contact&quot; variant=&quot;secondary&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>
										Contact Us
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}