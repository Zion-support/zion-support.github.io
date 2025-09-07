import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
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
        { name: 'AI & Analytics', path: '/services/ai-analytics', icon: Brain },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Infrastructure', path: '/services/infrastructure', icon: Building },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Cpu },
        { name: 'IoT & Edge', path: '/services/iot-edge', icon: Rocket }
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

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" }
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
      color: "hover:text-gray-400"
    }
  ];

  const contactInfo = [
    {
      name: "Email",
      value: "info@ziontechgroup.com",
      url: "mailto:info@ziontechgroup.com",
      icon: Mail
    },
    {
      name: "Phone",
      value: "+1 (555) 123-4567",
      url: "tel:+15551234567",
      icon: Phone
    },
    {
      name: "Address",
      value: "123 Innovation Drive, Tech City, TC 12345",
      url: "https://maps.google.com",
      icon: MapPin
    }
  ];

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-zion-slate-light">Innovating the future</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Leading the way in AI, quantum computing, and space technology solutions. 
              Empowering businesses with cutting-edge innovations for tomorrow's challenges.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  className="flex items-center space-x-3 text-zion-slate-light hover:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center space-x-2 group"
                    >
                      <link.icon className="w-3 h-3 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-slate-light/20 pt-8 mb-8">
          <FooterNewsletter />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-slate-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-zion-slate-light">
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
                  className={`text-zion-slate-light ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-zion-slate-light/10`}
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
          className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
=======

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-foreground">Zion Tech Group</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Advanced technology solutions for the future. Empowering businesses with 
              cutting-edge innovation and digital transformation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">All Services</Link></li>
              <li><a href="#ai-solutions" className="text-foreground/80 hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#cloud-services" className="text-foreground/80 hover:text-primary transition-colors">Cloud Services</a></li>
              <li><a href="#web-development" className="text-foreground/80 hover:text-primary transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Twitter">
                <span className="text-lg">🐦</span>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <span className="text-lg">💼</span>
              </a>
              <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="GitHub">
                <span className="text-lg">🐙</span>
              </a>
              <a href="https://youtube.com/ziontechgroup" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="YouTube">
                <span className="text-lg">📺</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-foreground/70 text-sm">Email: hello@ziontechgroup.com</p>
              <p className="text-foreground/70 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-foreground/60 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-foreground/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>
    </footer>
  );
}
