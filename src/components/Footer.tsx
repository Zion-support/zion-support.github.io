import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle,
  MessageCircle,
  Star,
  TrendingUp,
  ArrowRight,
  Handshake,
  FileText
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Advanced AI solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Enterprise security' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap, description: 'Edge computing' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum solutions' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code, description: 'Web3 & DeFi' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building, description: 'Virtual replicas' },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'Smart analytics' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'CX optimization' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum advantage' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Globe, description: 'Chain optimization' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'Security solutions' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Zap, description: 'Edge intelligence' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', icon: Code, description: 'AI content' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Talent management' }
    ],
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large scale solutions' },
      { name: 'SMB Solutions', href: '/solutions/smb', icon: Users, description: 'Small business solutions' },
      { name: 'Startup Acceleration', href: '/solutions/startup', icon: Rocket, description: 'Startup support' },
      { name: 'Government', href: '/solutions/government', icon: Shield, description: 'Public sector' },
      { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Medical technology' },
      { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Building, description: 'Industry 4.0' },
      { name: 'Financial Services', href: '/solutions/financial', icon: TrendingUp, description: 'FinTech solutions' },
      { name: 'Education', href: '/solutions/education', icon: Users, description: 'EdTech platforms' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story' },
      { name: 'Team', href: '/team', icon: Users, description: 'Meet our team' },
      { name: 'Careers', href: '/careers', icon: Award, description: 'Join us' },
      { name: 'Partners', href: '/partners', icon: Handshake, description: 'Partnerships' },
      { name: 'News', href: '/news', icon: TrendingUp, description: 'Latest updates' },
      { name: 'Blog', href: '/blog', icon: FileText, description: 'Insights & articles' },
      { name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' },
      { name: 'Research', href: '/research', icon: Brain, description: 'Innovation lab' }
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help', icon: MessageCircle, description: 'Documentation' },
      { name: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get help' },
      { name: 'API Documentation', href: '/api-docs', icon: Code, description: 'Developer resources' },
      { name: 'Training', href: '/training', icon: Users, description: 'Learn & grow' },
      { name: 'Community', href: '/community', icon: Users, description: 'Join discussions' },
      { name: 'Status Page', href: '/status', icon: CheckCircle, description: 'System status' },
      { name: 'Security', href: '/security', icon: Shield, description: 'Security info' },
      { name: 'Compliance', href: '/compliance', icon: CheckCircle, description: 'Certifications' }
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
  support: '24/7 Technical Support Available'
};

const stats = [
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '95%', label: 'Success Rate', icon: CheckCircle },
  { value: '10+', label: 'Years Experience', icon: Award },
  { value: '25+', label: 'Countries Served', icon: Globe },
  { value: '24/7', label: 'Support Available', icon: Clock },
  { value: '100+', label: 'Services Offered', icon: Zap }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate via-zion-slate/95 to-zion-slate/90 border-t border-zion-cyan/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="xl:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">ZION TECH GROUP</h3>
                  <p className="text-sm text-zion-cyan/70">Innovation • Technology • Solutions</p>
                </div>
              </div>
              
              <p className="text-zion-cyan/80 mb-6 leading-relaxed">
                Leading provider of cutting-edge technology solutions, AI services, and innovative micro SAAS platforms. 
                Transforming businesses through digital innovation and sustainable technology.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-zion-slate/50 rounded-lg border border-zion-cyan/20">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                    <div className="text-xs text-zion-cyan/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-zion-slate/50 border border-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan/70 ${social.color} transition-all duration-300 hover:border-zion-cyan hover:bg-zion-cyan/10 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></span>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <item.icon className="w-3 h-3 text-zion-cyan" />
                        </div>
                        <div className="flex-1">
                          <div className="text-zion-cyan/90 group-hover:text-zion-cyan transition-colors font-medium">
                            {item.name}
                          </div>
                          <div className="text-xs text-zion-cyan/50 mt-1 hidden lg:block">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-zion-cyan" />
                  <span>Get In Touch</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-zion-cyan">{contactInfo.phone}</div>
                      <div className="text-sm text-zion-cyan/70">{contactInfo.hours}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-zion-cyan">{contactInfo.email}</div>
                      <div className="text-sm text-zion-cyan/70">24/7 Support Available</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Address</div>
                      <div className="text-zion-cyan">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Ready to Transform?</h4>
                  <p className="text-zion-cyan/80 mb-6">
                    Let's discuss how our innovative solutions can drive your business forward.
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 text-center block"
                    >
                      Get Free Consultation
                    </Link>
                    <Link
                      to="/request-quote"
                      className="w-full bg-transparent border-2 border-zion-cyan text-zion-cyan font-medium py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300 text-center block"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-cyan/20 bg-zion-slate/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-zion-cyan/70">
                <span>&copy; 2024 ZION TECH GROUP. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">Sitemap</Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-zion-cyan/70">Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-sm text-zion-cyan/70">in Delaware, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-110 z-50"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
