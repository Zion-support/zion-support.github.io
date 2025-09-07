const footerSections = [ {
  title: 'Services', links: [ {
  name: 'AI Business Intelligence', href: '/ai-business-intelligence' 

import React from 'react';

import Link from 'next/link';

import {

  Brain,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,;
  Twitter,;

  Brain,Mail,Phone,MapPin,Globe,} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter  } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
}
{
  name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' 
}
{
  name: 'Edge Computing', href: '/edge-computing-orchestration' 
}
{
  name: 'Space Technology', href: '/space-technology' 
}
{
  name: 'View All Services', href: '/comprehensive-2025-services-showcase' 
}] 
}
{
  title: 'Company', links: [ {
  name: 'About Us', href: '/about' 
}
{
  name: 'Our Work', href: '/portfolio' 
}
{
  name: 'Blog & Insights', href: '/blog' 
}
{
  name: 'Careers', href: '/careers' 
}
{
  name: 'Contact', href: '/contact' 
}] 
}
{
  title: 'Resources', links: [ {
  name: 'Documentation', href: '/docs' 
}
{
  name: 'API Reference', href: '/api' 
}
{
  name: 'Support Center', href: '/support' 
}
{
  name: 'Privacy Policy', href: '/privacy' 
}
{
  name: 'Terms of Service', href: '/terms' 
}] 
}]
</div> <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Zion Tech Group </span> </div> <p className="text-white/70 mb-6 max-w-md" > Leading-edge technology solutions and autonomous innovation platform. Empowering businesses with cutting-edge AI, quantum computing, and digital transformation. </p> kleber@ziontechgroup.com </a> </div> <div className="flex items-center space-x-3 text-white/70" > <Phone className="w-4 h-4" /> <a href="tel:+13024640950" className="hover:text-white transition-colors" > +1 (302) 464-0950 </a> </div> <div className="flex items-center space-x-3 text-white/70" > <MapPin className="w-4 h-4" /> <span>Global Operations</span> </div> </div> </div> </li>) ) 
}</ul> </div>) ) 
}</div> > <social.icon className="w-5 h-5" /> </a>) ) 
}</div> </div> </div> </div> </footer>) 
}
export default EnhancedFooter
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
const EnhancedFooter: React.FC;


    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },

  return (
    <footer className='bg-slate-950 border-t border-white/10'>;
      <div className='max-w-7xl mx-auto px-6 py-16'>;
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>;
          {/* Company Info */}

          <div className='lg:col-span-2'>;
            <div className='flex items-center space-x-3 mb-6'>;
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center'>;
                <Brain className='w-6 h-6 text-white' />;
              </div>;
              <span className='text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>;
                Zion Tech Group;
              </span>;
            </div>;
            <p className='text-white/70 mb-6 max-w-md'>;
              Leading-edge technology solutions and autonomous innovation;
              platform. Empowering businesses with cutting-edge AI, quantum;
              computing, and digital transformation.;
            </p>;


            {/* Contact Info */}
            <div className='space-y-3'>;
              <div className='flex items-center space-x-3 text-white/70'>;
                <Mail className='w-4 h-4' />;
                <a
                  href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                  className='hover:text-white transition-colors'>;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </div>;
              <div className='flex items-center space-x-3 text-white/70'>;
                <Phone className='w-4 h-4' />;
                <a
                  href='tel:+13024640950'


          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
import Link from 'next / link';
import {
import React from 'react',
import React from 'react';
import Link from 'next/link';

  Brain,Mail,Phone,MapPin,Globe,} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter  } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Edge Computing', href: '/edge-computing-orchestration' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'View All Services', href: '/comprehensive-2025-services-showcase' }
      ]
    };
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Work', href: '/portfolio' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    };
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Leading-edge technology solutions and autonomous innovation platform. 
              Empowering businesses with cutting-edge AI, quantum computing, and digital transformation.
            </p>
            
            {/* Contact Info */}

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
};

export default EnhancedFooter;

