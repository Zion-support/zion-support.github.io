import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FooterNewsletter } from "@/components/FooterNewsletter";
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
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      icon: Globe,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'News & Updates', path: '/news', icon: Newspaper },
        { name: 'Case Studies', path: '/case-studies', icon: CheckCircle }
      ]
    },
    {
      title: 'Services',
      icon: Zap,
      links: [
        { name: 'AI Solutions', path: '/services/ai', icon: Brain },
        { name: 'Cloud & DevOps', path: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Infrastructure', path: '/services/infrastructure', icon: Building },
        { name: 'Digital Transformation', path: '/services/transformation', icon: Rocket },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Cpu },
        { name: 'Space Technology', path: '/space-technology', icon: Rocket }
      ]
    },
    {
      title: 'Solutions',
      icon: Shield,
      links: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'SMB Solutions', path: '/solutions/smb', icon: Target },
        { name: 'Startup Solutions', path: '/solutions/startup', icon: Rocket },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: DollarSign }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'Research & Development', path: '/research-development', icon: TestTube },
        { name: 'Insights', path: '/insights', icon: TrendingUp }
      ]
    },
    {
      title: 'Support',
      icon: Shield,
      links: [
        { name: 'Contact Us', path: '/contact', icon: Phone },
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Status Page', path: '/status', icon: Activity },
        { name: 'Training', path: '/training', icon: GraduationCap },
        { name: 'Community', path: '/community', icon: Users }
      ]
    }
  ];

    </footer>
  );
};

export default Footer;
=======
  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Accessibility", path: "/accessibility" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ziontechgroup",
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ziontechgroup",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: Github,
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    }
  ];

  const contactInfo = [
    {
      name: "Email",
      value: "contact@ziontechgroup.com",
      url: "mailto:contact@ziontechgroup.com",
      icon: Mail
    },
    {
      name: "Phone",
      value: "+1 (302) 464-0950",
      url: "tel:+13024640950",
      icon: Phone
    },
    {
      name: "Address",
      value: "Wilmington, DE, United States",
      url: "https://maps.google.com/?q=Wilmington,DE",
      icon: MapPin
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyan-400 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovating the future</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the way in AI, quantum computing, and space technology solutions. 
              Empowering businesses with cutting-edge innovations for tomorrow's challenges.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                    >
                      <link.icon className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <FooterNewsletter />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}
