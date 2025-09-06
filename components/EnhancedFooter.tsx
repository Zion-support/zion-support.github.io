import React from 'react',
import React from 'react';
import Link from 'next/link';

import {

  Brain
  Mail
  Phone
  MapPin
  Globe
  Github
  Linkedin
  Twitter;

  Brain,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,;
  Twitter,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
                  className='hover:text-white transition-colors'
                >
                  +1 (302) 464-0950
                </a>
              </div>
              <div className='flex items-center space-x-3 text-white/70'>
                <MapPin className='w-4 h-4' />                <span>Global Operations</span>              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-4 h-4" />
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },

                <span>Global Operations</span>
              </div>
            </div>
          </div>
          {/* Footer Sections */}




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
        {/* Bottom Section */}
        <div className='pt-8 border-t border-white/10'>;
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>;
            {/* Copyright */}

            <div className='text-white/60 text-sm'>              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;


            {/* Social Links */}
            <div className='flex items-center space-x-4'>;
              {socialLinks && socialLinks.map(social => (        <div className="pt-8 border-t border-white/10">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            {/* Copyright */}
            <div className="text-white/60 text-sm">
            </div>
            {/* Social Links */}
            <div className='flex items-center space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200'
                  aria-label={social.name}
                >
                  <social.icon className='w-5 h-5' />                </a>                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>

            <div className="text-white/60 text-sm">;
            </div>;


            {/* Social Links */}

};export default EnhancedFooter;  );




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};export default EnhancedFooter;  )


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
export default EnhancedFooter;
import React from './react';
  FileText,
  HelpCircle} from './lucide-react';
export default /**
 * EnhancedFooter - Function description
 */
function EnhancedFooter() {
;
  const scrollToTop = () =>: any {";
    window.scroll_to ({ top: 0, behavior: "smooth" });

}
  const current_year = new Date ().getFullYear ();
}

      { name: "AI Development", href: "/services/ai-development" }],;
    solutions: [",;

      { name: "AI Content Creation", href: "/solutions/ai-content-creation" },";
      { name: "Customer Support", href: "/solutions/customer-support" },";
      { name: "Email Automation", href: "/solutions/email-automation" },";
      { name: "Event Management", href: "/solutions/event-management" },";
      { name: "Project Management", href: "/solutions/project-management" },";

      { name: "Workflow Automation", href: "/solutions/workflow-automation" }],;
    company: [",;

      { name: "About Us", href: "/about" },";
      { name: "Careers", href: "/careers" },";
      { name: "Partners", href: "/partners" },";
      { name: "Contact", href: "/contact" },";

      { name: "Blog", href: "/blog" }],;
    resources: [",;
      { name: "Help Center", href: "/help" },";
      { name: "Pricing Guide", href: "/pricing-guide" },";
      { name: "Search", href: "/search" },";
      { name: "Sitemap", href: "/sitemap" }],;
    legal: [",;

      { name: "Privacy Policy", href: "/privacy" },";
      { name: "Terms of Service", href: "/terms" },";
      { name: "Cookie Policy", href: "/cookies" }]}
  const socialLinks = [];


  return (
    <footer className="bg-gray-900 text-white">";
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">";
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">,;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

