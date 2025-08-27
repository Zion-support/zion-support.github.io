import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Cloud,
  Cpu,
  Users
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '2026 Services',
      featured: true,
      links: [
        { name: '2026 Services Overview', href: '/services2026', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' }
      ]
    },
    {
      title: 'Core Services',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk' },
        { name: 'Website Analytics', href: '/services/website-analytics' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' }
      ]
    },
    {
      title: 'AI Products',
      links: [
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Returns Management', href: '/services/returns-management' },
        { name: 'Email Sequencer', href: '/services/email-sequencer' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription' },
        { name: 'Micro CRM', href: '/services/micro-crm' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk' },
        { name: 'Green IT Solutions', href: '/green-it' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Talent Solutions', href: '/talent' },
        { name: 'Equipment Services', href: '/equipment' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/help' },
        { name: 'Contact', href: '/contact' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Security', href: '/security' },
        { name: 'Status', href: '/status' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Support', href: '/support' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developers' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-7">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Link to="/" className="inline-flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </Link>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Revolutionizing the future with cutting-edge AI, Quantum Computing, and Micro SaaS solutions. 
                Transform your business with our innovative technology platforms.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+13024640950" className="hover:underline">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-green-300 transition-colors">
                  <Globe className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className={`font-semibold mb-4 flex items-center gap-2 ${
                  section.featured ? 'text-cyan-300 text-lg' : 'text-white'
                }`}>
                  {section.featured && <Star className="w-4 h-4 text-yellow-400" />}
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className={`text-sm transition-colors duration-200 ${
                          link.featured 
                            ? 'text-cyan-300 hover:text-cyan-200 font-medium' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {link.name}
                        {link.featured && <span className="ml-1 text-yellow-400">★</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800/50">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Ahead with Zion Tech Group
                </h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Get the latest insights on AI, Quantum Computing, and emerging technologies. 
                  Be the first to know about our revolutionary new services.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800/50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. 
                Revolutionizing technology, one innovation at a time.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[Brain, Zap, Shield, Cloud, Cpu, Rocket, Heart, Users][i % 8] && 
              React.createElement([Brain, Zap, Shield, Cloud, Cpu, Rocket, Heart, Users][i % 8], { size: 20 })
            }
          </motion.div>
        ))}
      </div>
    </footer>
  );
};