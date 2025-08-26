import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopContactBar: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      text: '+1 302 464 0950',
      href: 'tel:+13024640950',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      text: 'Middletown, DE',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      text: 'Mon-Fri 9AM-6PM EST',
      href: null,
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="flex items-center space-x-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-2">
                <info.icon className={`w-4 h-4 ${info.color}`} />
                {info.href ? (
                  <a 
                    href={info.href} 
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {info.text}
                  </a>
                ) : (
                  <span className="text-white/70">{info.text}</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-green-400 text-xs font-medium">● Online</span>
            <span className="text-white/50">|</span>
            <span className="text-white/70 text-xs">24/7 Support Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;