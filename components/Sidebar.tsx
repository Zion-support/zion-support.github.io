import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Brain, 
  Code, 
  Cloud, 
  Building, 
  FileText, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const quickLinks = [
    { name: 'AI Services', href: '/services/ai-services', icon: Brain },
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: Code },
    { name: 'IT Services', href: '/services/it-services', icon: Cloud },
    { name: 'Enterprise', href: '/enterprise', icon: Building },
    { name: 'Solutions', href: '/solutions', icon: Zap },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const popularServices = [
    { name: 'AI Customer Support', href: '/services/micro-saas/ai-customer-support' },
    { name: 'Cloud Cost Optimization', href: '/services/micro-saas/cloud-cost-optimization' },
    { name: 'Computer Vision', href: '/services/ai-services/computer-vision' },
    { name: 'Cloud Migration', href: '/services/it-services/cloud-migration' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Quick Navigation</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto h-full pb-20">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                  onClick={onClose}
                >
                  <link.icon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600" />
                  <span className="font-medium">{link.name}</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Services</h3>
            <div className="space-y-2">
              {popularServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center p-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors group"
              >
                <Phone className="w-5 h-5 mr-3 text-gray-500 group-hover:text-green-600" />
                <span className="font-medium">{contactInfo.phone}</span>
              </a>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              >
                <Mail className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600" />
                <span className="font-medium text-sm">{contactInfo.email}</span>
              </a>
              
              <div className="flex items-start p-3 rounded-lg">
                <MapPin className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                <span className="text-sm text-gray-600">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">340%</div>
                <div className="text-xs text-gray-600">Avg ROI</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">4w</div>
                <div className="text-xs text-gray-600">Delivery</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-sm mb-4 opacity-90">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;