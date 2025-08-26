import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FooterNewsletter } from '@/components/FooterNewsletter';
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
} from 'lucide-react';

const footerNavigation = {
	marketplace: {
		title: 'Marketplace',
		items: [
			{ name: 'Products', href: '/marketplace' },
			{ name: 'Services', href: '/services' },
			{ name: 'Talent', href: '/talent' },
			{ name: 'Equipment', href: '/equipment' },
			{ name: 'Categories', href: '/categories' },
			{ name: 'Green IT', href: '/green-it' },
			{ name: 'IT Onsite Services', href: '/it-onsite-services' },
		],
	},
	company: {
		title: 'Company',
		items: [
			{ name: 'About Us', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Partners', href: '/partners' },
			{ name: 'Careers', href: '/careers' },
			{ name: 'Contact', href: '/contact' },
			{ name: 'FAQ', href: '/faq' },
			{ name: 'Sitemap', href: '/sitemap' },
		],
	},
	support: {
		title: 'Support & Resources',
		items: [
			{ name: 'Help Center', href: '/help' },
			{ name: 'Contact Support', href: '/contact' },
			{ name: 'Terms of Service', href: '/terms' },
			{ name: 'Privacy Policy', href: '/privacy' },
			{ name: 'Security', href: '/security' },
			{ name: 'System Status', href: '/status' },
		],
	},
};

const socialLinks = [
	{ name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin },
	{ name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook },
	{ name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
	{ name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

export function Footer() {
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
					{/* Company info */}
					<div className="lg:col-span-2">
						<div className="mb-6">
							<motion.span
								className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
								whileHover={{ scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400 }}
							>
								ZION
							</motion.span>
						</div>
						<p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
							The world's first free marketplace dedicated to high-tech and artificial intelligence.
							Connecting innovators, talent, and cutting-edge technology worldwide.
						</p>

						{/* Contact info */}
						<div className="space-y-3 mb-6">
							<div className="flex items-center gap-3 text-zion-slate-light">
								<Mail className="w-4 h-4 text-zion-cyan" />
								<span className="text-sm">hello@ziontechgroup.com</span>
							</div>
							<div className="flex items-center gap-3 text-zion-slate-light">
								<Phone className="w-4 h-4 text-zion-cyan" />
								<span className="text-sm">+1 (555) 123-4567</span>
							</div>
							<div className="flex items-center gap-3 text-zion-slate-light">
								<MapPin className="w-4 h-4 text-zion-cyan" />
								<span className="text-sm">Global • Remote First</span>
							</div>
						</div>

						{/* Social media */}
						<div className="flex space-x-4">
							{socialLinks.map(({ name, href, icon: Icon }) => (
								<motion.a
									key={name}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full"
									aria-label={name}
									title={name}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<Icon className="h-5 w-5" aria-label={name} />
								</motion.a>
							))}
						</div>
					</div>

					{/* Marketplace */}
					{Object.entries(footerNavigation).map(([key, section]) => (
						<div key={key}>
							<h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
							<ul className="space-y-3">
								{section.items.map((item) => (
									<li key={item.name}>
										<Link to={item.href} className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:translate-x-1 inline-block">
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Newsletter */}
					<div>
						<h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
						<p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
							Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
						</p>
						<FooterNewsletter />
					</div>
				</div>

				{/* Bottom section */}
				<div className="pt-8 border-t border-zion-blue-light">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
							<p className="text-zion-slate-light text-sm">&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
							<div className="flex items-center gap-2 text-zion-slate-light/60">
								<div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
								<span className="text-xs">Live</span>
							</div>
						</div>

						<div className="flex items-center gap-6">
							<Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
							<Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
							<Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookies</Link>
							<Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
						</div>

						<motion.div className="flex items-center space-x-2 text-zion-slate-light text-sm" whileHover={{ scale: 1.05 }}>
							<span>Made with</span>
							<Heart className="w-4 h-4 text-red-400 animate-pulse" />
							<span>for the future of technology</span>
						</motion.div>
					</div>

					{/* Additional Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-zion-slate-light text-sm"
					>
						<Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-200">Sitemap</Link>
						<a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors duration-200 flex items-center space-x-1">
							<Globe className="w-4 h-4" />
							<span>Main Website</span>
						</a>
					</motion.div>
				</div>
			</div>

			{/* Scroll to top button */}
			<motion.button
				onClick={scrollToTop}
				className="fixed bottom-6 left-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 z-40"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1 }}
			>
				<ArrowUp className="w-5 h-5" />
			</motion.button>
		</footer>
	);
}
