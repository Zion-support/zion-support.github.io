import React from 'react';
import Link from 'next/link';
import {
  Phone;
  Mail;
  MapPin;
  Brain
  Cloud
  Shield
  Code
  Database
  Network
  ArrowRight
  Linkedin
  Twitter
  Github
  Facebook
  Instagram
  Youtube
  Globe
  Building2
  Users
  Award
  Clock
  CheckCircle
  Settings
  Zap
} from 'lucide-react';
interface FooterProps {
  className?: string;
}
export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain }
    { name: 'IT Services', href: '/it-services', icon: Code }
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud }
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield }
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud }
    { name: 'Custom Development', href: '/custom-development', icon: Settings }
    { name: 'Database Solutions', href: '/database-solutions', icon: Database }
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Zap }
  ];
  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' }
    { name: 'Startup Solutions', href: '/startup-solutions' }
    { name: 'Industry Solutions', href: '/industries' }
    { name: 'Custom Development', href: '/custom-development' }
    { name: 'Digital Transformation', href: '/digital-transformation' }
    { name: 'Technology Consulting', href: '/consulting' }
    { name: 'Cloud Migration', href: '/cloud-migration' }
    { name: 'AI Implementation', href: '/ai-implementation' }
  ];
  const company = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'News & Updates', href: '/news' }
    { name: 'Partners', href: '/partners' }
    { name: 'Pricing', href: '/pricing' }
    { name: 'Contact Us', href: '/contact' }
  ];
  const resources = [
    { name: 'Blog', href: '/blog' }
    { name: 'Documentation', href: '/docs' }
    { name: 'API Reference', href: '/api-docs' }
    { name: 'Tutorials', href: '/tutorials' }
    { name: 'White Papers', href: '/white-papers' }
    { name: 'Webinars', href: '/webinars' }
    { name: 'FAQ', href: '/faq' }
    { name: 'Support', href: '/support' }
  ];
  const legal = [
    { name: 'Privacy Policy', href: '/privacy' }
    { name: 'Terms of Service', href: '/terms' }
    { name: 'Cookie Policy', href: '/cookies' }
    { name: 'Security', href: '/security' }
    { name: 'Compliance', href: '/compliance' }
    { name: 'Accessibility', href: '/accessibility' }
    { name: 'GDPR', href: '/gdpr' }
    { name: 'SLA', href: '/sla' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin }
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];
  const contactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008, Middletown DE 19709'
    hours: 'Mon-Fri: 9AM-6PM EST'
  };
  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure
              and digital transformation services. We help businesses thrive in the digital age with
              cutting-edge technology solutions.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.hours}</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:text-blue-400" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{solution.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-semibold">99.9% Uptime</div>
                <div className="text-sm text-gray-400">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-semibold">SOC 2 Compliant</div>
                <div className="text-sm text-gray-400">Security</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold">500+ Projects</div>
                <div className="text-sm text-gray-400">Completed</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-purple-400" />
              <div>
                <div className="font-semibold">50+ Experts</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}