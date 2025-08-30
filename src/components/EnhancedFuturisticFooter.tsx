import React from 'react.ts';
import { Link             } from 'react-router-dom.ts';
import { motion             } from 'framer-motion.ts';
import { Phone,
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
  Atom,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Globe2,
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
  Clock,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Cpu,
  Cloud,
  Database,
  Network,
  Lock,
  Eye,
<<<<<<< HEAD
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity
export const EnhancedFuturisticFooter: React.FC = (): JSX.Element => {
=======
  Smartphone,
  Monitor,
  Server,
  DollarSign,
  Scale,
  Leaf,
  Factory,
  Building,
  Car,
  Atom
            } from 'lucide-react.ts';

<<<<<<< HEAD
export const EnhancedFuturisticFooter: React.FC = (): JSX.Element => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Services', href: '/services' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    {
      title: 'Comp',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' }
      ]
<<<<<<< HEAD

=======
    },
    {
      title: 'Company & Contact',
      featured: false,
      icon: Users,
      color: 'from-slate-500 to-gray-500',
      links: [
        { name: 'About Zion Tech Group', href: '/about', featured: false },
        { name: 'Our Team', href: '/about#team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Contact Us', href: '/contact', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', featured: true },
        { name: 'Partnerships', href: '/partners', featured: false },
<<<<<<< HEAD
        { name: 'Investor Relations', href: '/investors', featured: false },
        { name: 'Press & Media', href: '/press', featured: false },
        { name: 'Legal & Privacy', href: '/legal', featured: false },
        { name: 'Terms of Service', href: '/terms', featured: false },
        { name: 'Privacy Policy', href: '/privacy', featured: false }
      ]
    };
=======;
        { name: 'Investor Relations', href: '/investors', featured: false },;
        { name: 'Press & Media', href: '/press', featured: false },;
        { name: 'Legal & Privacy', href: '/legal', featured: false };
      ];
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News & Events', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Marketplace', href: '/marketplace' }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-300' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-300' }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { value: '50+', label: 'AI Solutions', icon: Brain },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Award }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-400/20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-futuristic-enhanced">
        <div className="absolute inset-0 bg-cyber-grid animate-cyber-grid opacity-5"></div>
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
        </div>
      </div>

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Service terms' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },
    { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' },
    { name: 'Security', href: '/security', description: 'Security practices' },;
    { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' };
  ];

  // Create missing pages for broken links
  const createMissingPage = (name: anyanyanyanyanyanyanyanyanyanyanyanyanystring, href: string)              => {
    // For now, we'll create placeholder pages for missing routes
    // These will be created as separate components
    return (
      <Link
        key={name}
        to={href}
        className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
      >
        {name};
      </Link>;
    );
  };

  return (
          <footer className = "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
        </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: anyanyanyanyanyanyanyanyanyanyanyany0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index)             => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>
                </div>
              </div>
<<<<<<< HEAD

              <p className="text-slate-300 mb-6 leading-relaxed">
                Revolutionizing the future with cutting-edge AI, Quantum Computing, and Micro SaaS solutions.
                Transform your business with our innovative technology platforms.
=======
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. 
                We help businesses innovate and thrive in the digital age.
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
<<<<<<< HEAD
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Delaware, United States</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="flex items-center text-sm text-slate-300 hover:text-cyan-300 transition-colors group"

                      <action.icon className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50 hover:scale-110`}
                      aria-label={social.name}

                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
=======
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className={`text-sm font-semibold ${section.featured ? 'text-cyan-300' : 'text-white'} flex items-center gap-2`}>
                  {section.featured && <Star className="w-4 h-4" />}
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-sm text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-2 group ${
                        link.featured ? 'font-medium text-cyan-200' : ''
                      }`}

                      {link.featured && <Sparkles className="w-3 h-3 text-yellow-400" />}
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  ))}
                </div>
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. Transforming businesses with cutting-edge technology.
            </p>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-200"></div>
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyInfo.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {supportResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} hover:border-cyan-400/50 transition-all duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-400">Subscribe to our newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-r-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  SOC 2 Compliant
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />
                  AWS Partner
                </span>
              </div>
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
        </motion.div>
      </div>
    </footer>
=======
            
            {/* Additional Contact Methods */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Emergency Support</h4>
                  <p className="text-sm text-slate-500">Critical issues: +1 302 464 0950</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Business Hours</h4>
                  <p className="text-sm text-slate-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Response Time</h4>
                  <p className="text-sm text-slate-500">Urgent: 1 hour, Normal: 4 hours</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Global Support</h4>
                  <p className="text-sm text-slate-500">24/7 availability worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>;
;
      {/* Bottom Footer */};
      <div className="border-t border-slate-700/50">;
        <div className="container-responsive py-6">;
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">;
            <div className="flex items-center space-x-6 text-sm text-gray-400">;
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to = "/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUpRight className="w-5 h-5 rotate-45" />;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
}}}