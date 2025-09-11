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
=======

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
          />;
          <motion&& motion.div

            <div className="p-6">;


};

export default Sidebar;

export default Sidebar;

}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
