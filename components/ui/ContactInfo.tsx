import React from 'react';
import { Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
  showSocial?: boolean;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ 
  className = '', 
  showSocial = true 
}) => {
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/ziontechgroup',
      icon: '💼',
      description: 'Follow our latest updates and insights'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      icon: '🐦',
      description: 'Stay updated with our latest news'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Zion-Holdings',
      icon: '💻',
      description: 'Explore our open source projects'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@ziontechgroup',
      icon: '📺',
      description: 'Watch our latest videos and demos'
    }
  ];

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone.replace(/\s/g, '')}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_self');
  };

  const handleAddressClick = () => {
    const address = encodeURIComponent(contactInfo.address);
    window.open(`https://maps.google.com/?q=${address}`, '_blank');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Primary Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors cursor-pointer"
             onClick={handlePhoneClick}>
          <Phone className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-semibold text-blue-900">{contactInfo.phone}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors cursor-pointer"
             onClick={handleEmailClick}>
          <Mail className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-semibold text-green-900">{contactInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors cursor-pointer"
             onClick={handleAddressClick}>
          <MapPin className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-sm text-gray-600">Address</p>
            <p className="font-semibold text-purple-900">{contactInfo.address}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
          <Globe className="w-5 h-5 text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Website</p>
            <a 
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-900 hover:text-orange-700 transition-colors flex items-center space-x-1"
            >
              <span>ziontechgroup.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      {showSocial && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="text-2xl mb-2">{social.icon}</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {social.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{social.description}</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Business Hours */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Monday - Friday</p>
            <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Weekend Support</p>
            <p className="text-gray-600">24/7 AI Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;