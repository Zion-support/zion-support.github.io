import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Brain,
  Shield,
  Server,
  Rocket,
  Building2,
  Users,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowUp,
  ExternalLink,
  Clock,
  Award,
  Star,
  CheckCircle,
  Heart
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI Services', href: '/services/ai' },
        { label: 'Micro SaaS Solutions', href: '/services/micro-saas' },
        { label: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { label: 'Enterprise Solutions', href: '/services/enterprise' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Cloud Computing', href: '/services/cloud' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { label: 'Business Automation', href: '/solutions/automation' },
        { label: 'Data Analytics', href: '/solutions/analytics' },
        { label: 'Custom Development', href: '/solutions/development' },
        { label: 'Consulting Services', href: '/solutions/consulting' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Help Center', href: '/help' },
        { label: 'Training', href: '/training' },
        { label: 'Community', href: '/community' },
        { label: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'Security', href: '/security' },
        { label: 'Compliance', href: '/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const trustIndicators = [
    { icon: Shield, text: 'SOC 2 Certified' },
    { icon: CheckCircle, text: 'GDPR Compliant' },
    { icon: Award, text: 'ISO 27001' },
    { icon: Star, text: '99.9% Uptime SLA' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Section - Company Info */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* Company Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">Innovation & Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative technology solutions, specializing in AI services, 
              micro SaaS platforms, enterprise solutions, and cutting-edge IT infrastructure. 
              We help businesses transform and thrive in the digital age.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <indicator.icon className="w-4 h-4 text-cyan-400" />
                  <span>{indicator.text}</span>
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
                  className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-white">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Website</p>
                  <a href="https://ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Business Hours</p>
                  <p className="text-white">
                    Monday - Friday: 9 AM - 6 PM EST<br />
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Get Started</h4>
            
            <div className="space-y-4">
              <Link
                to="/contact"
                className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Request a Quote
              </Link>
              
              <Link
                to="/services"
                className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                View All Services
              </Link>
              
              <a
                href="tel:+13024640950"
                className="block w-full bg-transparent border border-cyan-500 hover:bg-cyan-500 text-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Call Now
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates on our services and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 border-t border-slate-700 pt-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in Delaware</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}