import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowUp,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue/5 to-zion-purple/5 opacity-50"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-zion-slate-light leading-relaxed">
              Leading the future of technology with innovative solutions, 
              cutting-edge AI, and transformative digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/zion-tech-group" 
                className="w-10 h-10 bg-zion-slate-700 hover:bg-zion-blue transition-colors rounded-lg flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="w-10 h-10 bg-zion-slate-700 hover:bg-zion-blue transition-colors rounded-lg flex items-center justify-center group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/zion-tech-group" 
                className="w-10 h-10 bg-zion-slate-700 hover:bg-zion-blue transition-colors rounded-lg flex items-center justify-center group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                'AI & Machine Learning',
                'Cloud Solutions',
                'Cybersecurity',
                'Mobile Development',
                'Web Development',
                'Data Analytics',
                'DevOps & Automation',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Team', href: '/team' },
                { name: 'Careers', href: '/careers' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Blog', href: '/blog' },
                { name: 'Press', href: '/press' },
                { name: 'Partners', href: '/partners' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                <div>
                  <p className="text-zion-slate-light">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94043<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                <a 
                  href="tel:+1-555-0123" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                <a 
                  href="mailto:hello@ziontechgroup.com" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  hello@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-zion-slate-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-zion-cyan" />
              <div>
                <h4 className="font-semibold text-white">SOC 2 Compliant</h4>
                <p className="text-sm text-zion-slate-light">Enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-zion-cyan" />
              <div>
                <h4 className="font-semibold text-white">ISO 27001</h4>
                <p className="text-sm text-zion-slate-light">Information security certified</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-zion-cyan" />
              <div>
                <h4 className="font-semibold text-white">24/7 Support</h4>
                <p className="text-sm text-zion-slate-light">Always here to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-blue-light hover:to-zion-purple-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;