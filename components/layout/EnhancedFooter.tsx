import React from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Users,
  Building,
  FileText,
  HelpCircle,
  Lock,
  Award
} from 'lucide-react';

const footerNavigation = {
	services: {
		title: 'Services',
		items: [
			{ name: 'AI Solutions', href: '/services/ai-solutions' },
			{ name: 'Cloud & DevOps', href: '/services/cloud' },
			{ name: 'Cybersecurity', href: '/services/cybersecurity' },
			{ name: 'Data & Analytics', href: '/services/data' },
			{ name: 'Micro SaaS', href: '/services/micro-saas' },
			{ name: 'Digital Transformation', href: '/services/transformation' },
		],
	},
	solutions: {
		title: 'Solutions',
		items: [
			{ name: 'Enterprise', href: '/solutions/enterprise' },
			{ name: 'SMB', href: '/solutions/smb' },
			{ name: 'Startup', href: '/solutions/startup' },
			{ name: 'Government', href: '/solutions/government' },
			{ name: 'Healthcare', href: '/solutions/healthcare' },
			{ name: 'Financial Services', href: '/solutions/financial' },
		],
	},
	company: {
		title: 'Company',
		items: [
			{ name: 'About Us', href: '/about' },
			{ name: 'Partners', href: '/partners' },
			{ name: 'Careers', href: '/careers' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'News', href: '/news' },
			{ name: 'Case Studies', href: '/case-studies' },
		],
	},
	support: {
		title: 'Support & Resources',
		items: [
			{ name: 'Help Center', href: '/help' },
			{ name: 'Contact Support', href: '/contact' },
			{ name: 'Documentation', href: '/docs' },
			{ name: 'API Reference', href: '/api' },
			{ name: 'Terms of Service', href: '/terms' },
			{ name: 'Privacy Policy', href: '/privacy' },
		],
	},
};

const socialLinks = [
	{ name: 'Twitter', href: 'https://twitter.com/ZionTechGroup', icon: Twitter },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group/', icon: Linkedin },
	{ name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: Facebook },
	{ name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
	{ name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

const quickLinks = [
	{ name: 'Request Quote', href: '/request-quote', icon: Zap },
	{ name: 'Security', href: '/security', icon: Shield },
	{ name: 'Compliance', href: '/compliance', icon: Award },
	{ name: 'Status', href: '/status', icon: Cloud },
];

const EnhancedFooter: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
				<div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
				<div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
					{/* Company info */}
					<div className="lg:col-span-2">
						<div className="mb-6">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
									<Zap className="w-6 h-6 text-white" />
								</div>
								<div>
									<span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
										ZION
									</span>
									<div className="text-xs text-zion-slate-light">Tech Group</div>
								</div>
							</div>
						</div>
						<p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
							Leading provider of AI autonomous systems, cloud-native platforms, and 
							zero-trust cybersecurity solutions that drive measurable business outcomes.
						</p>

						{/* Contact info */}
						<div className="space-y-3 mb-6">
							<div className="flex items-center gap-3 text-zion-slate-light">
								<Mail className="w-4 h-4 text-zion-cyan" />
								<span className="text-sm">kleber@ziontechgroup.com</span>
							</div>
							<div className="flex items-center gap-3 text-zion-slate-light">
								<Phone className="w-4 h-4 text-zion-cyan" />
								<span className="text-sm">+1 (302) 464-0950</span>
							</div>
							<div className="flex items-center gap-3 text-zion-slate-light">
								<MapPin className="w-4 h-4 text-zion-cyan" />
								<span className="text-sm">364 E Main St STE 1008, Middletown, DE 19709</span>
							</div>
						</div>

						{/* Social media */}
						<div className="flex space-x-4">
							{socialLinks.map(({ name, href, icon: Icon }) => (
								<a
									key={name}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
									aria-label={name}
									title={name}
								>
									<Icon className="h-5 w-5" aria-label={name} />
								</a>
							))}
						</div>
					</div>

					{/* Navigation Sections */}
					{Object.entries(footerNavigation).map(([key, section]) => (
						<div key={key}>
							<h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
							<ul className="space-y-3">
								{section.items.map((item) => (
									<li key={item.name}>
										<Link 
											href={item.href} 
											className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Quick Links Section */}
				<div className="py-8 border-t border-zion-blue-light mb-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{quickLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
							>
								<div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
									<link.icon className="w-5 h-5 text-white" />
								</div>
								<div>
									<div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
										{link.name}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* Bottom section */}
				<div className="pt-8 border-t border-zion-blue-light">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
							<p className="text-zion-slate-light text-sm">
								&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
							</p>
							<div className="flex items-center gap-2 text-zion-slate-light/60">
								<div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
								<span className="text-xs">Live</span>
							</div>
						</div>

						<div className="flex items-center gap-6">
							<Link href="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
								Privacy Policy
							</Link>
							<Link href="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
								Terms of Service
							</Link>
							<Link href="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
								Cookies
							</Link>
							<Link href="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
								Accessibility
							</Link>
						</div>

						<div className="flex items-center space-x-2 text-zion-slate-light text-sm">
							<span>Made with</span>
							<Heart className="w-4 h-4 text-red-400 animate-pulse" />
							<span>for the future of technology</span>
						</div>
					</div>

					{/* Additional Links */}
					<div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-zion-slate-light text-sm">
						<Link href="/sitemap" className="hover:text-zion-cyan transition-colors duration-200">
							Sitemap
						</Link>
						<a 
							href="https://ziontechgroup.com" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="hover:text-zion-cyan transition-colors duration-200 flex items-center space-x-1"
						>
							<Globe className="w-4 h-4" />
							<span>Main Website</span>
						</a>
						<Link href="/security" className="hover:text-zion-cyan transition-colors duration-200">
							Security
						</Link>
						<Link href="/compliance" className="hover:text-zion-cyan transition-colors duration-200">
							Compliance
						</Link>
					</div>
				</div>
			</div>

			{/* Scroll to top button */}
			<button
				onClick={scrollToTop}
				className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 z-40 hover:scale-110"
				aria-label="Scroll to top"
			>
				<ArrowUp className="w-5 h-5" />
			</button>
		</footer>
	);
};

export default EnhancedFooter;
