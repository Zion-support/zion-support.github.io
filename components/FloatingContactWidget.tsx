import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Now',
      action: 'tel:+13024640950',
      description: '+1 302 464 0950'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Us',
      action: 'mailto:kleber@ziontechgroup.com',
      description: 'kleber@ziontechgroup.com'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Get Quote',
      action: '/contact',
      description: 'Free consultation'
    }
  ];

  return (
    <>
      {/* Floating Contact Button */}
      <button
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Contact Options Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-6 z-50 min-w-[280px]">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Get In Touch</h3>
            <p className="text-sm text-gray-600">We're here to help!</p>
          </div>
          
          <div className="space-y-3">
            {contactOptions.map((option, index) => (
              <a
                key={option.label}
                href={option.action}
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-200 transition-colors">
                  {option.icon}
                </div>
                <div className="ml-3 flex-1">
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <div className="font-medium">Business Hours:</div>
              <div>Mon-Fri: 9AM-6PM EST</div>
              <div>24/7 Emergency Support</div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingContactWidget;