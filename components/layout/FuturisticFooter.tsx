import React from 'react';,
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';
export default function FuturisticFooter() {
  const currentYear = null;
];

const serviceCategories = [
  {;
      name: 'AI & Machine Learning',;}
      href: '/services?category=AI%20%26%20Machine%20Learning',;}
    },;
    {;
      name: 'Cloud & Infrastructure',;}
      href: '/services?category=Cloud%20%26%20Infrastructure',;}
    },;
      { name: 'Cybersecurity'}
  href: '/services?category=Cybersecurity'}
},
;
    {;
      name: 'Analytics & Business Intelligence',;}
      href: '/services?category=Analytics%20%26%20Business%20Intelligence',;}
    },;
    {;
      name: 'Robotics & Automation',;}
      href: '/services?category=Robotics%20%26%20Automation',;}
    },;
    {;
      name: 'Blockchain & Web3',;}
      href: '/services?category=Blockchain%20%26%20Web3',;}
    }
];

const socialLinks = [
  {;
      name: 'LinkedIn',;
      href: 'https://www && www.linkedin.com/company/zion-tech-group',;}
      icon: '💼',;}
    },;
    { name: 'X'}
  href: 'https://x && x.com/ziontechgroup', icon: '🐦'}
},;
    { name: 'GitHub'}
  href: 'https://github && github.com/Zion-Holdings', icon: '💻'}
}
];

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden' />;

      {/* Animated background elements */}
        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12' />;
          {/* Company Info */}
          <div className='lg:col-span-1' />;
            <div className='flex items-center space-x-2 mb-6' />;
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center' />;
                <Zap className='w-6 h-6 text-white' />;
              </div>;
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent' />;
                Zion Tech Group;
              </span>;
            </div>;
            <p className='text-gray-400 mb-6 leading-relaxed' />;
              Leading provider of AI-powered micro SaaS solutions, helping;
              businesses automate, optimize, and scale their operations with;
              cutting-edge technology.;
            </p>;
            <div className='flex space-x-4' />;
              {socialLinks && socialLinks.map(social => (<a;}
                  key = {social && social.name}
                  href={social && social.href}

                  target='_blank'
                  rel='noopener noreferrer'

                  className='w-10 h-10 bg-white/10 hover: bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40'
                 />
                  <span className='text-lg' />{social.ico}
}</span>
 ;
  return (
    <footer className=\"relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden\" />;

      {/* Animated background elements */}
        {/* Main footer content */}"
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12\" />;
          {/* Company Info */}"
          <div className=\"lg:col-span-1\" />;"
            <div className=\"flex items-center space-x-2 mb-6\" />;"
              <div className=\"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center\" />;"
                <Zap className=\"w-6 h-6 text-white\" />;
              </div>;"
              <span className=\"text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent\" />;
                Zion Tech Group;
              </span>;
            </div>;"
            <p className=\"text-gray-400 mb-6 leading-relaxed\" />;
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.;
            </p>;"
            <div className=\"flex space-x-4\" />;
              {socialLinks && socialLinks.map((social) => (<a;}
                  key={social && social.name}
                  href={social && social.href}"
                  target=\"_blank\";"
                  rel=\"noopener noreferrer\";
              ))}{/* Quick Links */}
          <div />;
<h3 className='text-lg font-semibold text-white mb-6 flex items-center' />;
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />;
              Quick Links;
            </h3>;
            <ul className='space-y-3' />;
              {quickLinks.map(link => (<li key={link.name} />;
                  <Link;
                    href={link.href}
                    className='text-gray-400 hover: text-white transition-colors duration-200 hover:translate-x-1 inline-block' />

                    {link.nam}
}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Services */}
          <div />;
<h3 className='text-lg font-semibold text-white mb-6 flex items-center' />;
              <Cloud className='w-5 h-5 text-green-400 mr-2' />;
              Services;
            </h3>;
            <ul className='space-y-3' />;
              {serviceCategories.map(service => (<li key={service.name} />;
                  <Link;
                    href={service.href}
                    className='text-gray-400 hover: text-white transition-colors duration-200 hover:translate-x-1 inline-block' />

                    {service.nam}
}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Quick Links */}
          <div />;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center' />;
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />;
              Quick Links;
            </h3>;
            <ul className='space-y-3' />;
              {quickLinks && quickLinks.map(link => (<li key={link && link.name} />;
                  <Link;
                    href={link && link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block' />              Quick Links;
            </h3>;"
            <ul className=\"space-y-3\" />;
              {quickLinks && quickLinks.map((link) => (<li key={link && link.name} />;
                  <Link;
                    href={link && link.href}"
                    className=\"text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block\" />;
                    {link && link.name}
                  </Link>;
                </li>;
                    href={link.href}"
                    className=\"text - gray - 400 hover: text - white transition - colors duration - 200 hover:translate-x-1 inline-block\">

                    {link.name}
              ))}
          {/* Services *}
}
          <div />;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center' />;
              <Cloud className='w-5 h-5 text-green-400 mr-2' />;
              Services;
            </h3>;
            <ul className='space-y-3' />;
              {serviceCategories && serviceCategories.map(service => (<li key={service && service.name} />;
                  <Link;
                    href={service && service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block' />              Services;
            </h3>;"
            <ul className=\"space-y-3\" />;
              {serviceCategories && serviceCategories.map((service) => (<li key={service && service.name} />;
                  <Link;
                    href={service && service.href}"
                    className=\"text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block\" />;
                    {service && service.name}
                  </Link>;
                </li>;
                    href={service.href}"
                    className=\"text - gray - 400 hover: text - white transition - colors duration - 200 hover:translate-x-1 inline-block\">

                    {service.name}
              ))}
          {/* Contact Info *}
}
          <div />;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center' />;
              <Shield className='w-5 h-5 text-purple-400 mr-2' />;
              Contact Us;
            </h3>;
            <div className='space-y-4' />;
              <div className='flex items-start space-x-3' />;
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                <div />;
                  <p className='text-white font-medium' />Phone</p>;
                  <a;
          {/* Contact Info */}

          <div />
<h3 className='text-lg font-semibold text-white mb-6 flex items-center' />
              <Shield className='w-5 h-5 text-purple-400 mr-2' />
              Contact Us;
            </h3>

            <div className='space-y-4' />
              <div className='flex items-start space-x-3' />
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />
                <div />
                  <p className='text-white font-medium' />Phone</p>
                  <a;
href={`tel: ${contactInfo.mobile}`}
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-200'
                   />
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>

<div className='flex items-start space-x-3' />
                <Mail className='w-5 h-5 text-green-400 mt-1 flex-shrink-0' />
                <div />
                  <p className='text-white font-medium' />Email</p>
                  <a;
href={`mailto:${contactInfo.email}`}
                    className='text-gray-400 hover:text-green-400 transition-colors duration-200'
                   />
                    {contactInfo.email}
                  </a>
                </div>
              </div>

<div className='flex items-start space-x-3' />
                <MapPin className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0' />
                <div />
                  <p className='text-white font-medium' />Address</p>
                  <p className='text-gray-400 text-sm' />{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section */}

<div className='pt-8 border-t border-gray-800' />
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0' />
            <div className='text-gray-400 text-sm' />
              © {currentYea}
} Zion Tech Group. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm' />
              <Link;
href='/privacy'

                className='text-gray-400 hover:text-white transition-colors duration-200' />;
                Privacy Policy;
              </Link>;
              <Link;
                href='/terms';
                className='text-gray-400 hover:text-white transition-colors duration-200' />;
                Terms of Service;
              </Link>;

              <Link;
href='/cookies'

                className='text-gray-400 hover: text-white transition-colors duration-200'
               />
                Cookie Policy;
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Floating elements *}
}

<div className='absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
      <div className='absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500' />
    </footer>
  );

"