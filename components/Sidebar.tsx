
import React, { useState } from 'react';
import Link from 'next/link';
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



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


} from 'lucide-react';
interface SidebarProps {
  isOpen: boolean, onClose: () => void
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)



  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                      key={link.name}
                      href={link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Contact Info */}
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


