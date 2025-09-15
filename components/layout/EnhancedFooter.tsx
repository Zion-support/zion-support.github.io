<<<<<<< HEAD
import {
	ArrowUp,
	Award,
	Cloud,
	Facebook,
	Github,
	Globe,
	Heart,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Shield,
	Twitter,
	Zap
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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
									{React.createElement(link.icon, { className: "w-5 h-5 text-white" })}
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'Next-Generation AI',
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  },
  {
    title: 'Cutting-Edge IT',
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    ]
  },
  {
    title: 'Innovative SaaS',
    services: [
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Status Page', href: '/status' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe },
];

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Revolutionary Technology</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of 600+ revolutionary AI, quantum computing, and IT services. 
                Delivering 1000% ROI through cutting-edge solutions that transform businesses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-700/50">
          {/* Company & Support Links */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats & Social */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">600+</div>
                  <div className="text-xs text-gray-400">Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400">1000%</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-pink-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
