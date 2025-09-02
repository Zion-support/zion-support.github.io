import React from 'react';
import {
  Mail, MapPin, 
  Globe, Linkedin, 
  Twitter, Shield, 
  Phone, Clock
} from 'lucide-react';

interface MainSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MainSidebar: React.FC<MainSidebarProps> = ({ isOpen = false, onClose }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Zion Tech Group
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Close sidebar</span>
              ✕
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@ziontechgroup.com
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Secure & Trusted
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Enterprise-grade security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MainSidebar;