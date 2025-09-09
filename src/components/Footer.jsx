import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Heart, 
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Users,
  Award,
  Clock
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (<div className="bg - zinc - 900 / 30 p - 6 rounded - xl border border - zinc - 700 / 50">
      <h3 className="text - xl font - semibold text - white mb - 4">Stay Updated</h3>
      <p className="text - zinc - 400 mb - 4 text - sm">
        Get the latest insights on AI, cybersecurity, and technology trends
        delivered to your inbox.
      </p>

      {isSubscribed ? (<motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items - center gap - 3 p - 3 bg - green - 500 / 20 border border - green - 500 / 30 rounded - lg"
        >
          <CheckCircle className="w - 5 h - 5 text - green - 400"       />
          <span className="text - green - 400 text - sm">
            Successfully subscribed!
          </span>
        </motion.div>) : (<form onSubmit={handleSubscribe} className="flex gap - 2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail (e.target.value) }
            placeholder="Enter your email"
            className="flex - 1 px - 3 py - 2 bg - zinc - 800 / 50 border border - zinc - 600 / 50 rounded - lg text - white placeholder - zinc - 400 focus:outline - none focus:ring - 2 focus:ring - zion - cyan focus:border - transparent text - sm"
            required
          />
          <motion.button
            type="submit"
            disabled={isLoading}
            className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors disabled:opacity - 50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (<div className="w - 4 h - 4 border - 2 border - white border - t-transparent rounded - full animate - spin"></div>) : (<Send className="w - 4 h - 4"       />) }
          </motion.button>
        </form>) }
    </div>) ;
}

  const currentYear = new Date () .getFullYear () ;

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com / company / ziontechgroup',
      icon: '💼',
      color: 'hover:bg - blue - 600 / 20',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com / ziontechgroup',
      icon: '🐦',
      color: 'hover:bg - sky - 500 / 20',
    },
    {
      name: 'GitHub',
      url: 'https://github.com / Zion - Holdings',
      icon: '💻',
      color: 'hover:bg - gray - 600 / 20',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ziontechgroup',
      icon: '📺',
      color: 'hover:bg - red - 600 / 20',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg / ziontechgroup',
      icon: '🎮',
      color: 'hover:bg - indigo - 600 / 20',
    },
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", path: "/services?category=ai-ml" },
        { name: "Quantum Computing", path: "/services?category=quantum" },
        { name: "Blockchain & Web3", path: "/services?category=blockchain" },
        { name: "IoT & Edge Computing", path: "/services?category=iot" },
        { name: "Cybersecurity", path: "/services?category=cybersecurity" },
        { name: "Cloud & Infrastructure", path: "/services?category=cloud" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/about#team" },
        { name: "Careers", path: "/careers" },
        { name: "News & Updates", path: "/news" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Support Center", path: "/support" },
        { name: "Community", path: "/community" },
        { name: "Privacy Policy", path: "/privacy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/ziontechgroup", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/zion-tech-group", color: "hover:text-blue-600" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/ziontechgroup", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ziontechgroup", color: "hover:text-pink-500" },
    { name: "GitHub", icon: Github, url: "https://github.com/ziontechgroup", color: "hover:text-gray-400" }
  ];

  const achievements = [
    { icon: Users, value: "500+", label: "Global Clients" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support" }
  ];

  return (<footer className="bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 900 text - white relative overflow - hidden">
      {/* Background Pattern */}
      <div className="absolute inset - 0 bg-[linear - gradient (rgba (34,221,210,0.05) _1px,transparent_1px) ,linear - gradient (90deg,rgba (34,221,210,0.05) _1px,transparent_1px) ] bg-[size:50px_50px]"       />

      {/* Floating Elements */}
      <div className="absolute top - 1/4 left - 1/4 w - 2 h - 2 bg - zion - cyan / 30 rounded - full animate - pulse"       />
      <div
        className="absolute bottom - 1/3 right - 1/4 w - 1.5 h - 1.5 bg - zion - purple / 20 rounded - full animate - pulse"
        style={{ animationDelay: '1s' }}
            />
      <div
        className="absolute top - 1/2 right - 1/3 w - 1 h - 1 bg - zion - cyan / 25 rounded - full animate - pulse"
        style={{ animationDelay: '2s' }}
            />

      {/* Main Footer Content */}
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20 relative z - 10">
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 6 gap - 12">
          {/* Comp Info */}
          <div className="lg:col - span - 2">
            <div className="flex items - center mb - 8">
              <div className="w - 14 h - 14 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - xl flex items - center justify - center mr - 4 shadow - lg">
                <span className="text - white font - bold text - 2xl">Z</span>
              </div>
              <span className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">
                Zion Tech Group
              </span>
            </div>

            <p className="text - zinc - 400 mb - 6 text - lg leading - relaxed">
              Transforming businesses through cutting - edge technology and
              strategic insights.
            </p>

            {/* Social Links */}
            <div className="flex items - center space - x-4">
              {socialLinks.map (social => (<motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w - 10 h - 10 bg - zinc - 800 / 50 border border - zinc - 700 / 50 rounded - lg flex items - center justify - center text - lg transition - all duration - 300 ${social.color} hover:scale - 110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>) ) }
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map (section => (<div key={section.title}>
              <h3 className="text - lg font - semibold text - white mb - 6">
                {section.title}
              </h3>
              <ul className="space - y-3">
                {section.links.map (link => (<li key={link.label}>
                    <Link
                      to={link.path}
                      className="text - zinc - 400 hover:text - zion - cyan transition - colors duration - 300 text - sm"
                    >
                      {link.label}
                    </Link>
                  </li>) ) }
              </ul>
            </div>) ) }
        </div>

        {/* Newsletter Section */}
        <div className="mt - 16">
          <FooterNewsletter       />
        </div>

        {/* Contact Info */}
        <div className="mt - 16 grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">
          {contactInfo.map (contact => (<motion.a
              key={contact.label}
              href={contact.href}
              className="flex items - center space - x-3 p - 4 bg - zinc - 800 / 30 border border - zinc - 700 / 50 rounded - lg hover:bg - zinc - 800 / 50 transition - all duration - 300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p - 2 bg - zion - cyan / 20 rounded - lg group - hover:bg - zion - cyan / 30 transition - colors">
                <contact.icon className="w - 5 h - 5 text - zion - cyan"       />
              </div>
              <div>
                <p className="text - zinc - 400 text - sm">{contact.label}</p>
                <p className="text - white font - medium">{contact.value}</p>
              </div>
            </motion.a>) ) }
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                We transform businesses through intelligent automation and next-generation cybersecurity.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              Leading provider of innovative micro SAAS services, AI solutions, and cutting-edge technology services. 
              Empowering businesses worldwide with intelligent, scalable, and cost-effective solutions.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4 text-zion-cyan"/>
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4 text-zion-cyan"/>
                <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan"/>
                <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

              {/* Social media */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-zion-slate-light ${social.color} transition-colors p-2 hover:bg-zion-cyan/10 rounded-full`} 
                    aria-label={social.name} 
                    title={social.name} 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" aria-label={social.name}/>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements section */}
        <motion.div 
          className="py-8 border-t border-zion-cyan/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold text-white mb-2">Our Achievements</h4>
            <p className="text-zion-slate-light">Trusted by businesses worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <achievement.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm text-zion-slate-light">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div 
          className="py-8 border-t border-zion-cyan/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-zion-slate-light mb-6">Get the latest insights on AI, quantum computing, and technology trends</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-zion-cyan/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <span>© 2025 Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items - center space - x-2 text - zinc - 400 text - sm">
              <span > Made with</span>
              <Heart className="w - 4 h - 4 text - red - 400"       />
              <span > by Zion Tech Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w - 6 h - 6 mx - auto"       />
      </motion.button>
    </footer>
  );
};
