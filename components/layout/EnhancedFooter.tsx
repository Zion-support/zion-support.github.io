import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram, Github, Youtube,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap, Target, Microscope, Server,
  DollarSign, Network, Atom, BarChart, PieChart, LineChart
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">About Us</h3>
						<p className="text-gray-300">
							Leading technology solutions for modern businesses.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="text-gray-300 space-y-2">
							<li><Link href="/services" className="hover:text-white">All Services</Link></li>
							<li><Link href="/services/ai-model-development-chat" className="hover:text-white">AI Development</Link></li>
							<li><Link href="/services/cloud-migration-services-chat" className="hover:text-white">Cloud Solutions</Link></li>
							<li><Link href="/services/data-pipeline-engineering-chat" className="hover:text-white">Data Engineering</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Company</h3>
						<ul className="text-gray-300 space-y-2">
							<li><Link href="/about" className="hover:text-white">About</Link></li>
							<li><Link href="/blog" className="hover:text-white">Blog</Link></li>
							<li><Link href="/contact" className="hover:text-white">Contact</Link></li>
							<li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
							<li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="https://www.linkedin.com/company/zion-tech-group" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
							<a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
					<p>&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

<<<<<<< HEAD
export default EnhancedFooter;
=======
const serviceCategories = [
  {
<<<<<<< HEAD
    title: 'Next-Generation AI',
=======
    title: 'All Services',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  },
  {
<<<<<<< HEAD
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
=======
    title: 'AI & Consciousness',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    services: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' },
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' },
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    services: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization' },
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    title: 'Healthcare & Biotech',
    icon: Microscope,
    color: 'from-red-500 to-pink-600',
    services: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'Biotech AI', href: '/biotech-ai' }
    ]
  },
  {
    title: 'Education & Learning',
    icon: Users,
    color: 'from-yellow-500 to-orange-600',
    services: [
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro' },
      { name: 'AI Education Platform', href: '/ai-education-platform' }
    ]
  },
  {
    title: 'Energy & Sustainability',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    services: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
    ]
  },
  {
    title: 'Robotics & Automation',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    services: [
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' }
    ]
  },
  {
    title: 'Supply Chain & Logistics',
    icon: Network,
    color: 'from-teal-500 to-green-600',
    services: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' }
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform' },
      { name: 'Metaverse Development Studio Pro', href: '/metaverse-development-studio-pro' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform' },
      { name: 'Space Colonization Services', href: '/space-colonization-services' },
      { name: 'Orbital Mechanics', href: '/orbital-mechanics' },
      { name: 'Satellite Operations', href: '/satellite-operations' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
<<<<<<< HEAD
  { name: 'Resources', href: '/resources' }
=======
  { name: 'Careers', href: '/careers' },
  { name: 'Press Kit', href: '/press' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
];

const resourceLinks = [
  { name: 'Support', href: '/support' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
<<<<<<< HEAD
  { name: 'Status Page', href: '/status' },
=======
  { name: 'Status', href: '/status' },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' }
];

const socialLinks = [
<<<<<<< HEAD
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe },
=======
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
];

const EnhancedFooter: React.FC = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
=======
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
<<<<<<< HEAD
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
=======
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Future Technology Solutions</p>
              </div>
            </motion.div>
            
            <motion.p
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
<<<<<<< HEAD
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
=======
              Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
              We transform businesses through innovative solutions that drive growth and competitive advantage.
            </motion.p>
            
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
<<<<<<< HEAD
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
=======
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>{contactInfo.address}</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.slice(0, 4).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <div className={`w-5 h-5 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-3 h-3 text-white" />
                </div>
                <span>{category.title}</span>
              </h4>
              <ul className="space-y-2">
                {category.services.slice(0, 5).map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      href={service.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="line-clamp-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
                {category.services.length > 5 && (
                  <li>
                    <Link
                      href={category.title === 'All Services' ? '/comprehensive-services-showcase-2025' : `/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>View All {category.title}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
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
=======
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 pt-8 border-t border-gray-800/50"
        >
          {serviceCategories.slice(4).map((category, index) => (
            <div key={category.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <div className={`w-5 h-5 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-3 h-3 text-white" />
                </div>
                <span>{category.title}</span>
              </h4>
              <ul className="space-y-2">
                {category.services.slice(0, 4).map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      href={service.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="line-clamp-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Company, Resources, and Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-800/50"
        >
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Server className="w-5 h-5 text-purple-400" />
              <span>Resources</span>
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span>Stay Updated</span>
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest insights on AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. |
              <Link href="/privacy" className="ml-2 hover:text-white transition-colors duration-200">
                Privacy
              </Link> |
              <Link href="/terms" className="ml-2 hover:text-white transition-colors duration-200">
                Terms
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
          </div>
        </motion.div>
      </div>

<<<<<<< HEAD
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
=======
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70 animate-pulse delay-1500"></div>
    </footer>
  );
};

export default EnhancedFooter;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
