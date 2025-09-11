<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import { 
  X, 
  Building2, 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  Phone,
  Mail,
  ExternalLink;


} from 'lucide-react';
interface SidebarProps {
  isOpen: boolean, onClose: () => void
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ;
  X, ;
  Building2, ;
  Code, ;
  Smartphone, ;
  Cloud, ;
  Shield, ;
  Zap,;
  ShoppingCart,;
  Heart,;
  GraduationCap,;
  Factory,;
  Truck,;
  CreditCard,;
  Phone,;
  Mail,;
  ExternalLink;
} from 'lucide-react';
interface SidebarProps {;
  isOpen: boolean, onClose: () => void,;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {;
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const handleDropdownToggle = (title: string) => {;
    setOpenDropdowns(prev =>;
      prev && prev.includes(title);
        ? prev && prev.filter(item => item !== title);
        : [...prev, title];
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const navigation = {;
    'Services': [;
      { name: 'Web Development', href: '/services/web-development', icon: Code },;
      { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone },;
      { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },;
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },;
      { name: 'Performance Optimization', href: '/services/performance', icon: Zap },;
    ],;
    'Solutions': [;
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },;
      { name: 'E-commerce Platforms', href: '/solutions/ecommerce', icon: ShoppingCart },;
      { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },;
      { name: 'Educational Platforms', href: '/solutions/education', icon: GraduationCap },;
    ],;
    'Industries': [;
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },;
      { name: 'Logistics', href: '/industries/logistics', icon: Truck },;
      { name: 'Finance', href: '/industries/finance', icon: CreditCard },;
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },;
      { name: 'Education', href: '/industries/education', icon: GraduationCap },;
    ],;
  };
  const quickLinks = [;
    { name: 'About Us', href: '/about' },;
    { name: 'Our Team', href: '/team' },;
    { name: 'Case Studies', href: '/case-studies' },;
    { name: 'Blog', href: '/blog' },;
    { name: 'Careers', href: '/careers' },;
    { name: 'Contact', href: '/contact' },;
  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  return (
    <AnimatePresence>;
      {isOpen && (;
        <>;
          {/* Backdrop */}
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
<<<<<<< HEAD
<<<<<<< HEAD
          />;
          <motion&& motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />;
          <motion&& motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="p-6">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <div className="p-6">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Header */}
              <div className="flex items-center justify-between mb-8">;
                <div className="flex items-center space-x-2">;
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">;
                    <Building2 className="w-8 h-8 text-white" />;
                  </div>;
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>;
                </div>;
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
<<<<<<< HEAD
<<<<<<< HEAD
                  <X className="w-6 h-6" />;
                </button>;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <X className="w-6 h-6" />;
                </button>;
              </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Navigation */}
              <nav className="space-y-4">;
                {Object && Object.entries(navigation).map(([title, links]) => (;
                  <div key={title}>;
                    <button
                      onClick={() => handleDropdownToggle(title)}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover: text-blue-600 transition-colors";
              <div className="mt-8 pt-8 border-t border-gray-200">;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>;
                <div className="space-y-2">;
                  {quickLinks && quickLinks.map((link) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Link
                      key={link && link.name}
                      href={link && link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}>;
                      {link && link.name}
                    </Link>;
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
                </div>;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>;
              </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>;
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3 text-gray-600">;
                    <Phone className="w-4 h-4" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-600">;
                    <Mail className="w-4 h-4" />;
                    <span>kleber@ziontechgroup && ziontechgroup.com</span>;
                  </div>;
                </div>;
                <div className="mt-4">;
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={onClose}>;
                    <span>Get Started</span>;
                    <ExternalLink className="w-4 h-4" />;
                  </Link>;
              </div>;
            </div>;
          </motion && motion.div>;
        </>;
      )}
    </AnimatePresence>;
  );
<<<<<<< HEAD

<<<<<<< HEAD
}
export default Sidebar;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
  X,
  Building2,
  Code,
  Smartphone,
  Cloud,
  Shield,
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  X
  Building2
  Code
  Smartphone
  Cloud
  Shield
  Zap
  ShoppingCart
  Heart
  GraduationCap
  Factory
  Truck
  CreditCard
  Phone
  Mail

  ExternalLink
import { 
  X, 
  Building2, 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Zap,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  Phone,
  Mail,
  ExternalLink;
} from 'lucide-react';
;
interface SidebarProps {
  is_open: boolean, on_close: () => void,
}
<<<<<<< HEAD
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title];
    );

  }
  const navigation = {
    'Services': [
      { name: 'Web Development', href: '/services/web-development', icon: Code }
      { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone }
      { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud }
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield }
      { name: 'Performance Optimization', href: '/services/performance', icon: Zap }
    ]
    'Solutions': [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 }
      { name: 'E-commerce Platforms', href: '/solutions/ecommerce', icon: ShoppingCart }
      { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart }
      { name: 'Educational Platforms', href: '/solutions/education', icon: GraduationCap }
    ]
    'Industries': [
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory }
      { name: 'Logistics', href: '/industries/logistics', icon: Truck }
      { name: 'Finance', href: '/industries/finance', icon: CreditCard }
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart }
      { name: 'Education', href: '/industries/education', icon: GraduationCap }
    ];
  }
  const quickLinks = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'Blog', href: '/blog' }
    { name: 'Careers', href: '/careers' }
    { name: 'Contact', href: '/contact' }

  ];
=======
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Sidebar: React.FC < SidebarProps> = ({ is_open, on_close }) => {
  const [open_dropdowns, setOpenDropdowns] = useState < string[]>([]);
;
  const handleDropdownToggle = (title: string) =>: any {
    setOpenDropdowns (prev =>;
      prev.includes (title);
        ? prev.filter (item => item !== title);
        : [...prev, title]);
  }
;
  const navigation = {
    'Services': [;
      { name: 'Web Development', href: '/services / web - development', icon: Code },
      { name: 'Mobile Development', href: '/services / mobile - development', icon: Smartphone },
      { name: 'Cloud Solutions', href: '/services / cloud - solutions', icon: Cloud },
      { name: 'Cybersecurity', href: '/services / cybersecurity', icon: Shield },
      { name: 'Performance Optimization', href: '/services / performance', icon: Zap },
    ],
    'Solutions': [;
      { name: 'Enterprise Solutions', href: '/solutions / enterprise', icon: Building2 },
      { name: 'E - commerce Platforms', href: '/solutions / ecommerce', icon: ShoppingCart },
      { name: 'Healthcare Technology', href: '/solutions / healthcare', icon: Heart },
      { name: 'Educational Platforms', href: '/solutions / education', icon: GraduationCap },
    ],
    'Industries': [;
      { name: 'Manufacturing', href: '/industries / manufacturing', icon: Factory },
      { name: 'Logistics', href: '/industries / logistics', icon: Truck },
      { name: 'Finance', href: '/industries / finance', icon: CreditCard },
      { name: 'Healthcare', href: '/industries / healthcare', icon: Heart },
      { name: 'Education', href: '/industries / education', icon: GraduationCap },
    ],
  }
;
  const quick_links = [;
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case - studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <AnimatePresence>;
      {is_open && (
        <>;
          {/* Backdrop */}
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Navigation */}
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover: text-blue-600 transition-colors"
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="fixed inset - 0 bg - black bg - opacity - 50 z - 40";
            on_click={on_close}
          />;
          <motion.div;
            initial={{ coordinate_x: -300 }}
            animate={{ coordinate_x: 0 }}
            exit={{ coordinate_x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left - 0 top - 0 h - full w - 80 bg - white shadow - xl z - 50";
            <div className="p - 6">;
              {/* Header */}
              <div className="flex items - center justify - between mb - 8">;
                <div className="flex items - center space - x-2">;
                  <div className="bg - gradient - to - r from - blue - 600 to - purple - 600 p - 2 rounded - lg">;
                    <Building2 className="w - 8 h - 8 text - white" />;
                  </div>;
                  <span className="text - xl font - bold text - gray - 900">Zion Tech Group</span>;
                </div>;
                <button;
                  on_click={on_close}
                  className="p - 2 hover:bg - gray - 100 rounded - lg transition - colors";
                  <X className="w - 6 h - 6" />;
                </button>;
              </div>;
              {/* Navigation */}
              <nav className="space - y-4">;
                {Object.entries (navigation).map (([title, links]) => (
                  <div key={title}>;
                    <button;
                      on_click={() => handleDropdownToggle (title)}
                      className="flex items - center justify - between w - full text - left text - lg font - semibold text - gray - 900 py - 2 hover: text - blue - 600 transition - colors";
              <div className="mt - 8 pt - 8 border - t border - gray - 200">;
                <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Quick Links</h3>;
                <div className="space - y-2">;
                  {quick_links.map ((link) => (
                    <Link;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={link.name}
                      href={link.href}
                      className="block text - gray - 600 hover:text - blue - 600 transition - colors py - 1";
                      on_click={on_close}
                    >;
                      {link.name}
                    </Link>))}
                </div>;
              </div>;
              {/* Contact Info */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mt - 8 pt - 8 border - t border - gray - 200">;
                <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Contact Us</h3>;
                <div className="space - y-3">;
                  <div className="flex items - center space - x-3 text - gray - 600">;
                    <Phone className="w - 4 h - 4" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 600">;
                    <Mail className="w - 4 h - 4" />;
                    <span > kleber@ziontechgroup.com</span>;
                  </div>;
                </div>;
                <div className="mt - 4">;
                  <Link;
                    href="/contact";
                    className="inline - flex items - center space - x-2 bg - blue - 600 text - white px - 4 py - 2 rounded - lg hover:bg - blue - 700 transition - colors";
                    on_click={on_close}
                  >;
                    <span > Get Started</span>;
                    <ExternalLink className="w - 4 h - 4" />;
                  </Link>;
              </div>;
            </div>;
          </motion.div>;
        </>)}
    </AnimatePresence>);
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={onClose}
                  >
                    <span>Get Started</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
<<<<<<< HEAD
}
;
export default Sidebar;
<<<<<<< HEAD
=======
<<<<<<< HEAD
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};

export default Sidebar;

<<<<<<< HEAD
<<<<<<< HEAD
};

export default Sidebar;

}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
