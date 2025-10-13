<<<<<<< HEAD
import React from "react";

<<<<<<< HEAD
interface EnhancedFooterProps {
  className?: string;
  children?: React.ReactNode;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
export default function EnhancedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
<<<<<<< HEAD
  </div>
    </footer>
  );
}

export default function EnhancedFooter({ className = '', children }: EnhancedFooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/it-services"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/cybersecurity"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lgfont-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
=======
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';';
import React from 'react';';
import { Link } from 'react-router-dom';';';
const EnhancedFooter: React.FC = () => {;
const currentYear = new Date().getFullYear();
const services = [
  // TODO: Add items
]
  // TODO: Add items
]
    { name: 'AI Solutions', href: '/services/ai' },'
    { name: 'Cloud Architecture', href: '/services/cloud' },'
    { name: 'Web Development', href: '/services/web' },'
    { name: 'Mobile Apps', href: '/services/mobile' },'
    { name: 'Data Analytics', href: '/services/analytics' },'
    { name: 'DevOps', href: '/services/devops' },'
  ];
const products = [
  // TODO: Add items
]
  // TODO: Add items
]
    { name: 'AI Platform', href: '/products/ai-platform' },'
    { name: 'Cloud Suite', href: '/products/cloud-suite' },'
    { name: 'Analytics Dashboard', href: '/products/analytics' },'
    { name: 'Mobile SDK', href: '/products/mobile-sdk' },'
  ];
const quickLinks = [
  // TODO: Add items
]
  // TODO: Add items
]
    { name: 'About Us', href: '/about' },'
    { name: 'Contact', href: '/contact' },'
    { name: 'Blog', href: '/blog' },'
    { name: 'Careers', href: '/careers' },'
    { name: 'Privacy Policy', href: '/legal/privacy' },'
    { name: 'Terms of Service', href: '/legal/terms' },'
  ]
  return (
  // TODO: Add parameters
)
    <footer className="bg-gray-900 text-white">"
<div className="container mx-auto px-4 py-12">"
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">"
<div className="lg:col-span-2">"
<div className="flex items-center space-x-2 mb-4">"
<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
<span className="text-white font-bold text-xl">Z"
              <div className="text-xl font-bold">Zion Tech Group"
            <p className="text-gray-300 mb-6 max-w-md">"
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            <div className="flex space-x-4">"
<$2 />
                href="https://linkedin.com/company/ziontechgroup""
                className="text-gray-400 hover:text-white transition-colors">"
<Linkedin className="w-5 h-5" />"
<$2 />
                href="https://twitter.com/ziontechgroup""
                className="text-gray-400 hover:text-white transition-colors">"
<Twitter className="w-5 h-5" />"
<$2 />
                href="https://github.com/ziontechgroup""
                className="text-gray-400 hover:text-white transition-colors">"
<Github className="w-5 h-5" />"
<$2 />
                href="https://facebook.com/ziontechgroup""
                className="text-gray-400 hover:text-white transition-colors">"
<Facebook className="w-5 h-5" />"
<div>
<h3 className="text-lg font-semibold mb-4">Services"
            <ul className="space-y-2">"
              {services.slice(0, 6).map(service => (
  // TODO: Add parameters
)
                <li key={service.name}>
<Link to={service.href}>
<span className="text-gray-300 hover:text-white transition-colors">"
                      {service.name}
              ))}
          <div>
<h3 className="text-lg font-semibold mb-4">Products"
            <ul className="space-y-2">"
              {products.slice(0, 6).map(product => (
  // TODO: Add parameters
)
                <li key={product.name}>
<Link to={product.href}>
<span className="text-gray-300 hover:text-white transition-colors">"
                      {product.name}
              ))}
          <div>
<h3 className="text-lg font-semibold mb-4">Quick Links"
            <ul className="space-y-2">"
              {quickLinks.map(item => (
  // TODO: Add parameters
)
                <li key={item.name}>
<Link to={item.href}>
<span className="text-gray-300 hover:text-white transition-colors">"
                      {item.name}
              ))}
        <div className="border-t border-gray-700 mt-8 pt-8">"
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
<div className="flex items-center space-x-3">"
<Mail className="w-5 h-5 text-blue-400" />"
<div>
<p className="text-sm text-gray-400">Email"
                <p className="text-white">info@ziontechgroup.com"
            <div className="flex items-center space-x-3">"
<Phone className="w-5 h-5 text-blue-400" />"
<div>
<p className="text-sm text-gray-400">Phone"
                <p className="text-white">+1 (555) 123-4567"
            <div className="flex items-center space-x-3">"
<MapPin className="w-5 h-5 text-blue-400" />"
<div>
<p className="text-sm text-gray-400">Address"
                <p className="text-white">123 Tech Street, Innovation City"
        <div className="border-t border-gray-700 mt-8 pt-8">"
<div className="flex flex-col md:flex-row justify-between items-center">"
<p className="text-gray-300 text-sm">"
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
<div className="flex space-x-6 mt-4 md:mt-0">"
<Link to="/legal/privacy">"
<span className="text-gray-400 hover:text-white text-sm transition-colors">"
                  Privacy Policy
              <Link to="/legal/terms">"
<span className="text-gray-400 hover:text-white text-sm transition-colors">"
                  Terms of Service
              <Link to="/legal/cookies">"
<span className="text-gray-400 hover:text-white text-sm transition-colors">"
                  Cookie Policy
  )
}
export default EnhancedFooter</div></div>;
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></span>
</span></span>
</span></span>
</span></span>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></p>
</p></p>
</p></p>
</p></p>
</p></h3>
</h3></h3>
</ul></ul>
</ul></li>
</li></li>
</footer>
>>>>>>> cursor/delete-records-a75e
=======
      </div>
    </footer>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
