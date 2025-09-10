import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Facebook, 
  Instagram,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Heart,
  Globe,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const footerSections = useMemo(() => [
    {
      title: "AI & Micro SAAS",
      description: "Cutting-edge artificial intelligence and scalable software solutions",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Self-managing AI systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "Automated research tools" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform", description: "Quantum AI computing" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform", description: "Self-optimizing operations" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT management" },
        { label: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure", description: "Modern infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Custom SaaS platforms" },
        { label: "Cybersecurity", path: "/services/cybersecurity", description: "Advanced security" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance" },
        { label: "Industry Solutions", path: "/services/industry-solutions", description: "Sector-specific solutions" },
        { label: "AI & Machine Learning", path: "/services#ai-ml", description: "ML and AI services" },
        { label: "Cloud & Infrastructure", path: "/services#cloud", description: "Cloud solutions" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "Next-gen connectivity" },
        { label: "Blockchain Solutions", path: "/services#blockchain", description: "Web3 technology" },
        { label: "IoT & Edge Computing", path: "/services#iot", description: "IoT platforms" }
      ]
    },
    {
      title: "Solutions",
      description: "Industry-specific technology solutions for modern businesses",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise", description: "Large-scale deployments" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare", description: "Medical technology" },
        { label: "Financial Solutions", path: "/solutions/financial", description: "Fintech innovations" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail", description: "Digital retail" },
        { label: "Government Solutions", path: "/solutions/government", description: "Public sector tech" },
        { label: "Business Intelligence", path: "/services/business-intelligence", description: "Data insights" },
        { label: "Marketing Automation", path: "/services/ai-marketing", description: "AI-powered marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr", description: "Smart HR solutions" },
        { label: "Legal Tech", path: "/services/ai-legal", description: "Legal automation" }
      ]
    },
    {
      title: "Emerging Tech",
      description: "Next-generation technologies shaping the future",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech", description: "Quantum algorithms" },
        { label: "Blockchain & DeFi", path: "/emerging-tech", description: "Decentralized finance" },
        { label: "IoT & Edge Computing", path: "/emerging-tech", description: "Connected devices" },
        { label: "Extended Reality (XR)", path: "/emerging-tech", description: "VR/AR solutions" },
        { label: "5G & Networks", path: "/emerging-tech", description: "High-speed connectivity" },
        { label: "Green Technology", path: "/emerging-tech", description: "Sustainable tech" },
        { label: "Digital Twins", path: "/emerging-tech", description: "Virtual replicas" }
      ]
    },
    {
      title: "Company",
      description: "Learn about our mission, team, and company culture",
      links: [
        { label: "About Us", path: "/about", description: "Our story" },
        { label: "Our Mission", path: "/mission", description: "What drives us" },
        { label: "Team", path: "/team", description: "Meet our experts" },
        { label: "Pricing", path: "/pricing", description: "Service costs" },
        { label: "Careers", path: "/careers", description: "Join our team" },
        { label: "Partners", path: "/partners", description: "Strategic partnerships" },
        { label: "Contact", path: "/contact", description: "Get in touch" },
        { label: "Blog", path: "/blog", description: "Latest insights" }
      ]
    },
    {
      title: "Resources",
      description: "Educational content, support, and documentation",
      links: [
        { label: "Blog & Articles", path: "/blog", description: "Industry insights" },
        { label: "Case Studies", path: "/case-studies", description: "Success stories" },
        { label: "Help Center", path: "/help", description: "Support portal" },
        { label: "Documentation", path: "/docs", description: "Technical guides" },
        { label: "Support Center", path: "/support", description: "Customer support" },
        { label: "White Papers", path: "/white-papers", description: "Research papers" },
        { label: "Webinars", path: "/webinars", description: "Educational sessions" },
        { label: "AI Matcher", path: "/ai-matcher", description: "Find your solution" }
      ]
    }
  ], []);

  const handleSubscribe = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
  }, [email]);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach" }
  ];

  return (
    <footer className="cyber-footer relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum opacity-20"></div>
      <div className="absolute inset-0 cyber-grid"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500/30 text-xs matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <section className="py-16 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-cyan-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-neon">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-cyan-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, 
                and enterprise digital transformation services. Transform your business with cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <address className="text-sm not-italic">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </address>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/ziontechgroup", label: "Twitter" },
                  { icon: Github, href: "https://github.com/ziontechgroup", label: "GitHub" },
                  { icon: Youtube, href: "https://youtube.com/@ziontechgroup", label: "YouTube" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white border-b border-cyan-500/30 pb-2">
                  {section.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 group flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="border-t border-cyan-500/20 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get insights on AI, quantum computing, cybersecurity, and emerging technologies delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 cyber-input focus:ring-2 focus:ring-cyan-500/50"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="neon-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
              
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center space-x-2 text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Successfully subscribed!</span>
                </motion.div>
              )}
            </form>
          </div>
        </section>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Made with passion for technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}