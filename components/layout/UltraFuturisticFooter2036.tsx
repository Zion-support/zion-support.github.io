import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Star,
  Brain,
  Atom,
  Shield,
  Rocket,
  Github,
  MessageCircle,
  Heart,
  Globe
} from 'lucide-react';
import Link from 'next/link';



const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', featured: true },
      { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel', featured: true },
      { name: 'AI Autonomous Content Factory', href: '/ai-autonomous-content-factory', featured: true },
      { name: 'Autonomous Business Intelligence', href: '/autonomous-business-intelligence', featured: true },
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', featured: true },
      { name: 'AI Autonomous Customer Success', href: '/ai-autonomous-customer-success', featured: true },
      { name: 'AI Autonomous DevOps Platform', href: '/ai-autonomous-devops-platform', featured: true },
      { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
      { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
      { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' },
      { name: 'AI Emotional Intelligence Trainer', href: '/ai-emotional-intelligence-trainer' },
      { name: 'Autonomous Business Operations Engine', href: '/autonomous-business-operations-engine' },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Predictive Maintenance Orchestrator', href: '/ai-predictive-maintenance-orchestrator' },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation' },
      { name: 'AI Sales Intelligence Automation', href: '/ai-sales-intelligence-automation' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Quantum Cybersecurity Sentinel', href: '/quantum-cybersecurity-sentinel' },
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer' },
      { name: 'Quantum Financial Risk Manager', href: '/quantum-financial-risk-manager' },
      { name: 'Quantum Materials Discovery Platform', href: '/quantum-materials-discovery' },
      { name: 'Quantum IoT Security Gateway', href: '/quantum-iot-security-gateway' },
      { name: 'Quantum Edge Computing Platform', href: '/quantum-edge-computing-platform' },
      { name: 'Quantum-Secure Identity Platform', href: '/quantum-secure-identity-platform' },
      { name: 'Quantum-Enhanced Storage Platform', href: '/quantum-enhanced-storage-platform' },
      { name: 'Space Resource Mining Platform', href: '/space-resource-mining-platform' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' }
    ]
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Autonomous Cloud Orchestrator', href: '/autonomous-cloud-orchestrator' },
      { name: 'AI-Powered Enterprise Architecture', href: '/ai-powered-enterprise-architecture' },
      { name: 'Autonomous Data Governance Platform', href: '/autonomous-data-governance' },
      { name: 'AI-Powered IT Service Management', href: '/ai-powered-it-service-management' },
      { name: 'Autonomous Network Operations Center', href: '/autonomous-network-operations' },
      { name: 'AI-Powered Disaster Recovery Platform', href: '/ai-powered-disaster-recovery' },
      { name: 'Autonomous Compliance Manager', href: '/autonomous-compliance-manager' },
      { name: 'Edge Computing Orchestration Platform', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Specialized business automation tools',
    icon: <Rocket className="w-5 h-5 text-green-400" />,
    links: [
      { name: 'AI Content Generator Pro', href: '/ai-content-generator-pro' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'Social Media Automation Platform', href: '/social-media-automation-platform' },
      { name: 'Email Marketing Automation', href: '/email-marketing-automation' },
      { name: 'Customer Support Automation', href: '/customer-support-automation' },
      { name: 'Sales Pipeline Automation', href: '/sales-pipeline-automation' },
      { name: 'HR Process Automation', href: '/hr-process-automation' },
      { name: 'Financial Analytics Automation', href: '/financial-analytics-automation' },
      { name: 'Project Management Automation', href: '/project-management-automation' },
      { name: 'Inventory Management Automation', href: '/inventory-management-automation' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-600' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-400' }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' }
];

export default function UltraFuturisticFooter2036() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10 relative" role="contentinfo" aria-label="Site footer"></footer>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        {/* Main Footer Content */}
        <div className="py-16"></div>
          {/* Top Section with Company Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"></div>
            {/* Company Information */}
            <div className="lg:col-span-1"></div>
              <div className="flex items-center space-x-3 mb-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center"></div>
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"></h3>
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Pioneering the Future</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed"></p>
                Leading technology company specializing in AI, quantum computing, space technology, and enterprise solutions. 
                Transform your business with cutting-edge innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-700/30 border border-gray-700/30 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
                ></motion>
                  <div className="flex items-center space-x-3 mb-4"></div>
                    {section.icon}
                    <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                  <div className="space-y-2"></div>
                    {section.links.slice(0, 3).map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform"
                      ></Link>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1"></div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3"></div>
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:underline"
                  ></Link>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1"></div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
              <div className="grid grid-cols-3 gap-4"></div>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  ></a>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16"></div>
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4"></div>
                <div className="flex items-center space-x-2"></div>
                  {section.icon}
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{section.description}</p>
                <ul className="space-y-2"></ul>
                  {section.links.slice(0, 5).map((link) => (
                    <li key={link.name}></li>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      ></Link>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {section.links.length > 5 && (
                  <Link
                    href={`/services#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1"
                  ></Link>
                    <span>View All</span>
                    <ArrowUp className="w-3 h-3 rotate-45" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400"></div>
              <p className="flex items-center space-x-2"></p>
                <span>© 2025 Zion Tech Group. All rights reserved.</span>
                <span className="hidden sm:inline">Made with</span>
                <Heart className="w-4 h-4 text-red-400 hidden sm:inline" aria-hidden="true" />
                <span className="hidden sm:inline">in Delaware</span>
              </p>
              <div className="flex items-center space-x-4"></div>
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-200"
                  ></Link>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4"></div>
              <div className="relative"></div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 w-64"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"></button>
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800/50"
        ></motion>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4"></div>
            <div className="text-center lg:text-left"></div>
              <p className="text-gray-400 text-sm"></p>
                © 2025 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</Link>
              </p>
            </div>
            
            <div className="flex items-center space-x-4"></div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              ></button>
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}