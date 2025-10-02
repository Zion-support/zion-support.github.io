import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

interface ContactInfoProps {
  variant?: 'default' | 'compact' | 'detailed';
  showTitle?: boolean;
  className?: string;
}

export default function ContactInfo({ 
  variant = 'default', 
  showTitle = true, 
  className = '' 
}: ContactInfoProps) {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-4 text-sm ${className}`}>
        <a 
          href={`tel:${contactInfo.phone}`} 
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Phone className="h-4 w-4 mr-1" />
          {contactInfo.phone}
        </a>
        <a 
          href={`mailto:${contactInfo.email}`} 
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Mail className="h-4 w-4 mr-1" />
          {contactInfo.email}
        </a>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`space-y-4 ${className}`}>
        {showTitle && (
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Phone</div>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Email</div>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Address</div>
                <div className="text-gray-600">{contactInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Website</div>
                <a href={contactInfo.website} className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`space-y-4 ${className}`}>
      {showTitle && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
          <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
            {contactInfo.phone}
          </a>
        </div>
        <div className="text-center">
          <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
          <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
            {contactInfo.email}
          </a>
        </div>
        <div className="text-center">
          <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-medium text-gray-900 mb-1">Visit Us</h4>
          <div className="text-gray-600 text-sm">{contactInfo.address}</div>
        </div>
      </div>
    </div>
  );
}

export { ContactInfo };