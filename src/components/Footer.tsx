import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Github,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Users,
  Globe,
  Shield,
  Zap,
  Brain,
  Cpu,
  Cloud,
  BarChart3,
  Target,
  FileText,
  HelpCircle,
  MessageCircle,
  ShoppingCart,
  Tag,
  Building,
  Briefcase,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Solutions', href: '/services/it-solutions' },
        { name: 'Cloud Services', href: '/services/cloud-services' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Digital Twin', href: '/digital-twin' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'AI-Powered SEO', href: '/ai-powered-seo' },
        { name: 'Interview Assessment AI', href: '/interview-assessment-ai' },
        { name: 'Helpdesk Platform', href: '/helpdesk-platform' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Space Technology', href: '/space-tech' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/help-center' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MailIcon,
      text: 'info@ziontechgroup.com',
      href: 'mailto:info@ziontechgroup.com'
    },
    {
      icon: MapPinIcon,
      text: '123 Tech Street, Silicon Valley, CA 94025',
      href: '#'
    },
    {
      icon: ClockIcon,
      text: 'Mon-Fri: 9AM-6PM PST',
      href: '#'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const awards = [
    { name: 'Top AI Company 2024', icon: Award },
    { name: 'Best IT Services', icon: Star },
    { name: 'Innovation Excellence', icon: Zap },
    { name: 'Customer Satisfaction', icon: CheckCircle }
  ];

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-cyan/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm">Innovation • Technology • Future</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading the digital transformation revolution with cutting-edge AI, cloud, and emerging technology solutions. 
              Empowering businesses to thrive in the digital age.
            </p>

            {/* Awards */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Awards & Recognition</h4>
              <div className="grid grid-cols-2 gap-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                    <award.icon className="w-4 h-4 text-zion-cyan" />
                    <span>{award.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-zion-cyan/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights, updates, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-zion-cyan/20 border border-zion-cyan/20 hover:border-zion-cyan/40 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
