import React from 'react',
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


} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
=======
import React from 'react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
import {;
  Brain,;
  Mail,;
  Phone,;
  MapPin,;
  Globe,;
  Github,;
  Linkedin,;
  Twitter,;
} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear(),;

  const footerSections = [;
    {;
      title: 'Services',;
      links: [;
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },;
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },;
        { name: 'Edge Computing', href: '/edge-computing-orchestration' },;
        { name: 'Space Technology', href: '/space-technology' },;
        {;
          name: 'View All Services',;
          href: '/comprehensive-2025-services-showcase',;
        },;
      ],;
    },    {        { name: 'View All Services', href: '/comprehensive-2025-services-showcase' }
      ];
    };
    {;
      title: 'Company',;
      links: [;
        { name: 'About Us', href: '/about' },;
        { name: 'Our Work', href: '/portfolio' },;
        { name: 'Blog & Insights', href: '/blog' },;
        { name: 'Careers', href: '/careers' },;
        { name: 'Contact', href: '/contact' },;
      ],;
    },    {        { name: 'Contact', href: '/contact' }
      ];
    };
    {;
      title: 'Resources',;
      links: [;
        { name: 'Documentation', href: '/docs' },;
        { name: 'API Reference', href: '/api' },;
        { name: 'Support Center', href: '/support' },;
        { name: 'Privacy Policy', href: '/privacy' },;
        { name: 'Terms of Service', href: '/terms' },;
      ],;
    },  ];

  const socialLinks = [;
    { name: 'GitHub', href: 'https://github && github.com/Zion-Holdings', icon: Github },        { name: 'Terms of Service', href: '/terms' }
      ];
    }
  ];

  const socialLinks = [;
    { name: 'GitHub', href: 'https://github && github.com/Zion-Holdings', icon: Github },;
    {;
      name: 'LinkedIn',;
      href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
      icon: Linkedin,;
    },;
    {;
      name: 'Twitter',;
      href: 'https://twitter && twitter.com/ziontechgroup',;
      icon: Twitter,;
    },;


=======

    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
import Link from 'next / link';
import {
=======
import React from 'react';
import Link from 'next/link';

import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
        </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>

                    </Link>;
                  </li>))}
              </ul>;
            </div>))}
        </div>;
        {/* Bottom Section */}
        <div className='pt - 8 border - t border - white / 10'>;
          <div className='flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0'>;
            {/* Copyright */}
            <div className='text - white / 60 text - sm'>              © {current_year} Zion Tech Group. All rights reserved.;
            </div>;
            {/* Social Links */}
            <div className='flex items - center space - x-4'>;
              {social_links.map (social => (        <div className="pt - 8 border - t border - white / 10">;
          <div className="flex flex - col md:flex - row justify - between items - center space - y-4 md:space - y-0">;
            {/* Copyright */}
            <div className="text - white / 60 text - sm">;
            </div>;
            {/* Social Links */}
            <div className='flex items - center space - x-4'>;
              {social_links.map (social => (
                <a;
                  key={social.name}
                  href={social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  className='w - 10 h - 10 rounded - lg bg - white / 10 hover:bg - white / 20 flex items - center justify - center text - white / 70 hover:text - white transition - all duration - 200';
                  aria - label={social.name}
                >;
                  <social.icon className='w - 5 h - 5' />                </a>                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="w - 10 h - 10 rounded - lg bg - white / 10 hover:bg - white / 20 flex items - center justify - center text - white / 70 hover:text - white transition - all duration - 200";
                  aria - label={social.name}
                >;
                  <social.icon className="w - 5 h - 5" />;
                </a>))}
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>);
}export default EnhancedFooter);
}
;
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

=======
  const footer_links = {}, ";
      { name: "IT Services", href: "/services / it - services" }, ";
      { name: "Micro SaaS", href: "/services / micro - saas" }, ";
      { name: "Web Development", href: "/services / web - development" }, ";
      { name: "Cloud Services", href: "/services / cloud - services" }, ";
      { name: "AI Development", href: "/services / ai - development" }],
    solutions: [",
      { name: "AI Content Creation", href: "/solutions / ai - content - creation" }, ";
      { name: "Customer Support", href: "/solutions / customer - support" }, ";
      { name: "Email Automation", href: "/solutions / email - automation" }, ";
      { name: "Event Management", href: "/solutions / event - management" }, ";
      { name: "Project Management", href: "/solutions / project - management" }, ";
      { name: "Workflow Automation", href: "/solutions / workflow - automation" }],
    company: [",
      { name: "About Us", href: "/about" }, ";
      { name: "Careers", href: "/careers" }, ";
      { name: "Partners", href: "/partners" }, ";
      { name: "Contact", href: "/contact" }, ";
      { name: "Blog", href: "/blog" }],
    resources: [",
      { name: "Help Center", href: "/help" }, ";
      { name: "Pricing Guide", href: "/pricing - guide" }, ";
      { name: "Search", href: "/search" }, ";
      { name: "Sitemap", href: "/sitemap" }],
    legal: [",
      { name: "Privacy Policy", href: "/privacy" }, ";
      { name: "Terms of Service", href: "/terms" }, ";
      { name: "Cookie Policy", href: "/cookies" }]}
  const social_links = [];
;
  return (
    <footer className="bg - gray - 900 text - white">";
      <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 12">";
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 6 gap - 8">,
          {/* comment */}";
          <div className="lg: col - span - 2">";
            <div className="flex items - center space - x-2 mb - 4">";
              <div className="w - 10 h - 10 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - lg flex items - center justify - center">";
                <span className="text - white font - bold text - lg">Z</span>;
              </div>;
              <div>";

                  Technology Solutions,;
                </div>;
            </div>";
            <p className="text-gray-400 mb-6 max-w-md">,;
              Leading technology solutions provider specializing in AI,;
              cybersecurity, cloud infrastructure, and digital transformation,;
services. We help businesses innovate, scale, and succeed in the,;

digital age.;
            </p>";
            <div className="space-y-3">";
              <div className="flex items-center space-x-3 text-gray-400">";
                <Phone className="w-4 h-4"  />";
                <ahref="tel: +13024640950
                  className="hover:text-white transition-colors">;

                  +1 (302) 464-0950,;

                </a>;
              </div>";
              <div className="flex items-center space-x-3 text-gray-400">";
                <Mail className="w-4 h-4"  />";
                <ahref="mailto: kleber@ziontechgroup && ziontechgroup.com
                  className="hover:text-white transition-colors">;

                  kleber@ziontechgroup && ziontechgroup.com,;
                </a>;
              </div>";
              <div className="flex items-center space-x-3 text-gray-400">";
                <MapPin className="w-4 h-4"  />,;

                <span>364 E Main St STE 1008, Middletown DE 19709</span>;
              </div>;
          {/* comment */}
          <div>";
            <h3 className="text-lg font-semibold mb-4 flex items-center">";
              <Globe className="w-5 h-5 mr-2 text-blue-400"  />;

                <span className="text - xl font - bold">Zion Tech Group</span>";
                <div className="text - xs text - gray - 400">;
                  Technology Solutions,
                </div>;
            </div>";
            <p className="text - gray - 400 mb - 6 max - w-md">,
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, and digital transformation,
services. We help businesses innovate, scale, and succeed in the,
digital age.;
            </p>";
            <div className="space - y-3">";
              <div className="flex items - center space - x-3 text - gray - 400">";
                <Phone className="w - 4 h - 4"  />";
                <a href="tel: +13024640950;
                  className="hover:text - white transition - colors">;
                  +1 (302) 464 - 0950,
                </a>;
              </div>";
              <div className="flex items - center space - x-3 text - gray - 400">";
                <Mail className="w - 4 h - 4"  />";
                <a href="mailto: kleber@ziontechgroup.com;
                  className="hover:text - white transition - colors">;
                  kleber@ziontechgroup.com,
                </a>;
              </div>";
              <div className="flex items - center space - x-3 text - gray - 400">";
                <MapPin className="w - 4 h - 4"  />,
                <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
              </div>;
          {/* comment */}
          <div>";
            <h3 className="text - lg font - semibold mb - 4 flex items - center">";
              <Globe className="w - 5 h - 5 mr - 2 text - blue - 400"  />;
              Services,

            </h3>";
            <ul className="space - y-2">;
              {footer_links.services.map (link => (";
                <li key="{link.name}">";
                  <Link href="{link.href}

              Services,;
            </h3>";
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map(link => (";
                <li key="{link && link.name}">";
                  <Link href="{link && link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm">,;
                    {link && link.name}


                  </Link>;
                </li>;
              ))}
                    className="text - gray - 400 hover: text - white transition - colors text - sm">,
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* comment */}
          <div>";

            <h3 className="text - lg font - semibold mb - 4 flex items - center">";
              <Shield className="w - 5 h - 5 mr - 2 text - green - 400"  />;
              Solutions,

            </h3>";
            <ul className="space - y-2">;
              {footer_links.solutions.map (link => (";
                <li key="{link.name}">";
                  <Link href="{link.href}

              Solutions,;
            </h3>";
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map(link => (";
                <li key="{link && link.name}">";
                  <Link href="{link && link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm">,;
                    {link && link.name}


                  </Link>;
                </li>;
              ))}
                    className="text - gray - 400 hover: text - white transition - colors text - sm">,
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* comment */}
          <div>";

            <h3 className="text - lg font - semibold mb - 4 flex items - center">";
              <FileText className="w - 5 h - 5 mr - 2 text - purple - 400"  />;
              Company,

            </h3>";
            <ul className="space - y-2">;
              {footer_links.company.map (link => (";
                <li key="{link.name}">";
                  <Link href="{link.href}

              Company,;
            </h3>";
            <ul className="space-y-2">;
              {footerLinks && footerLinks.company.map(link => (";
                <li key="{link && link.name}">";
                  <Link href="{link && link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm">,;
                    {link && link.name}


                  </Link>;
                </li>;
              ))}
                    className="text - gray - 400 hover: text - white transition - colors text - sm">,
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* comment */}
          <div>";

            <h3 className="text - lg font - semibold mb - 4 flex items - center">";
              <HelpCircle className="w - 5 h - 5 mr - 2 text - yellow - 400"  />;
              Resources,

            </h3>";
            <ul className="space - y-2 mb - 6">;
              {footer_links.resources.map (link => (";
                <li key="{link.name}">";
                  <Link href="{link.href}

              Resources,;
            </h3>";
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.resources.map(link => (";
                <li key="{link && link.name}">";
                  <Link href="{link && link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm">,;
                    {link && link.name}


                  </Link>;
                </li>;
              ))}
            </ul>";
            <h4 className="text-md font-semibold mb-3 text-gray-300">Legal</h4>";
            <ul className="space-y-2">;

              {footerLinks && footerLinks.legal.map(link => (";
                <li key="{link && link.name}">";
                  <Link href="{link && link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm">,;
                    {link && link.name}


                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        {/* comment */}";
        <div className="border-t border-gray-800 mt-12 pt-8">";
          <div className="max-w-2xl mx-auto text-center mb-8">";
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>";
            <p className="text-gray-400 mb-4">;

              Subscribe to our newsletter for the latest technology insights and,;

company updates.;
            </p>";
            <form className="flex flex-col sm: flex-row gap-3 max-w-md mx-auto">";
              <inputtype="email
                placeholder="Enter your email
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"  />";
              <buttontype="submit
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">;

                Subscribe,;

=======
                    className="text - gray - 400 hover: text - white transition - colors text - sm">,
                    {link.name}
                  </Link>;
                </li>))}
            </ul>";
            <h4 className="text - md font - semibold mb - 3 text - gray - 300">Legal</h4>";
            <ul className="space - y-2">;
              {footer_links.legal.map (link => (";
                <li key="{link.name}">";
                  <Link href="{link.href}
                    className="text - gray - 400 hover: text - white transition - colors text - sm">,
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
        {/* comment */}";
        <div className="border - t border - gray - 800 mt - 12 pt - 8">";
          <div className="max - w-2xl mx - auto text - center mb - 8">";
            <h3 className="text - xl font - semibold mb - 2">Stay Updated</h3>";
            <p className="text - gray - 400 mb - 4">;
              Subscribe to our newsletter for the latest technology insights and,
company updates.;
            </p>";
            <form className="flex flex - col sm: flex - row gap - 3 max - w-md mx - auto">";
              <input type="email;
                placeholder="Enter your email;
                className="flex - 1 px - 4 py - 2 bg - gray - 800 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent"  />";
              <button type="submit;
                className="bg - blue - 600 text - white px - 6 py - 2 rounded - lg font - semibold hover:bg - blue - 700 transition - colors">;
                Subscribe,
              </button>;
            </form>;
          </div>;
        {/* comment */}";

            <div className="text-gray-400 text-sm mb-4 md:mb-0">,;

              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>";
            <div className="flex items-center space-x-6">";
              <div className="flex items-center space-x-4">;
                {socialLinks && socialLinks.map(social => (";
                  <akey="{social && social.name}
                    href="{social && social.href}
                    target="_blank
                    rel="noopener noreferrer
                    className="text-gray-400 hover: text-white transition-colors"">;
                    aria-label="{social && social.name}">";
                    <social && social.icon className="w-5 h-5" />;
                  </a>;
                ))}
              </div>;
      {/* comment */}";
      <buttononClick="{scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover: bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50
        aria-label="Scroll to top">";
        <ArrowUp className="w-5 h-5"  />;

      </button>,;
    </footer>,;
  )}"';

=======
        <div className="border - t border - gray - 800 pt - 8">";
          <div className="flex flex - col md: flex - row justify - between items - center">";
            <div className="text - gray - 400 text - sm mb - 4 md:mb - 0">,
              © {current_year} Zion Tech Group. All rights reserved.;
            </div>";
            <div className="flex items - center space - x-6">";
              <div className="flex items - center space - x-4">;
                {social_links.map (social => (";
                  <a key="{social.name}
                    href="{social.href}
                    target="_blank;
                    rel="noopener noreferrer;
                    className="text - gray - 400 hover: text - white transition - colors"">;
                    aria - label="{social.name}">";
                    <social.icon className="w - 5 h - 5" />;
                  </a>))}
              </div>;
      {/* comment */}";
      <button on_click="{scrollToTop}
        className="fixed bottom - 8 right - 8 bg - blue - 600 hover: bg - blue - 700 text - white p - 3 rounded - full shadow - lg transition - colors z - 50;
        aria - label="Scroll to top">";
        <ArrowUp className="w - 5 h - 5"  />;
      </button>,
    </footer>,
  )}"';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
};export default EnhancedFooter;  )

};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
