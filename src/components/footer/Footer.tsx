import React from 'react';
import Link from 'next/link';
import { _Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';
const services = [];
const solutions = [];
;
export function Footer("props": "any) {;
  const _currentYear = new Date().getFullYear();
;
  const _footerSections = [;
    {;
      "title": 'Services';
      "links": [;
        { "name": 'AI Services'", "href": '/ai-services' }
        { "name": 'IT Services', "href": '/it-services' }
        { "name": 'Micro SaaS', "href": '/micro-saas' }
        { "name": 'Cloud Solutions', "href": '/services/cloud' }
        { "name": 'Cybersecurity', "href": '/services/cybersecurity' }
        { "name": 'Data Analytics', "href": '/services/data-analytics' }
      ];
    }
    {;
      "title": 'Solutions';
      "links": "[;
        { "name": 'Enterprise Solutions'", "href": '/solutions/enterprise' }
        { "name": 'SMB Solutions', "href": '/solutions/smb' }
        { "name": 'Startup Solutions', "href": '/solutions/startup' }
        { "name": 'Industry Solutions', "href": '/solutions/industry' }
        { "name": 'Custom Development', "href": '/solutions/custom' }
        { "name": 'Digital Transformation', "href": '/solutions/digital-transformation' }
      ];
    }
    {;
      "title": 'Company';
      "links": "[;
        { "name": 'About Us'", "href": '/about' }
        { "name": 'Our Team', "href": '/team' }
        { "name": 'Careers', "href": '/careers' }
        { "name": 'News & Blog', "href": '/blog' }
        { "name": 'Case Studies', "href": '/case-studies' }
        { "name": 'Partners', "href": '/partners' }
      ];
    }
    {;
      "title": 'Resources';
      "links": "[;
        { "name": 'Documentation'", "href": '/docs' }
        { "name": 'API Reference', "href": '/api' }
        { "name": 'Support Center', "href": '/support' }
        { "name": 'Community', "href": '/community' }
        { "name": 'Webinars', "href": '/webinars' }
        { "name": 'White Papers', "href": '/whitepapers' }
      ];
    }
  ];
;
  const _socialLinks = [;
    { "name": 'Facebook', "href": '"https": "//facebook.com/ziontechgroup'", "icon": "Facebook "}
    { "name": 'Twitter', "href": '"https": "//twitter.com/ziontechgroup'", "icon": "Twitter "}
    { "name": 'LinkedIn', "href": '"https": "//linkedin.com/company/ziontechgroup'", "icon": "Linkedin "}
    { "name": 'Instagram', "href": '"https": "//instagram.com/ziontechgroup'", "icon": "Instagram "}
    { "name": 'YouTube', "href": '"https": "//youtube.com/ziontechgroup'", "icon": "Youtube "}
    { "name": 'GitHub', "href": '"https": "//github.com/ziontechgroup'", "icon": "Github "}
  ];
;
  return (;
    <footer className="bg-slate-900 border-t border-slate-700">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8 py-12">;
        <div className="grid grid-cols-1 "md": gri d-cols-2 "lg": gri d-cols-6 gap-8">;
          {/* Company Info */"}
          <div className=""lg": "co l-span-2">;
            <Link href="/" className="flex items-center space-x-2 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <span className="text-white font-bold text-xl">Zion Tech Group</span>;
            </Link>;
            <p className="text-slate-300 mb-6 leading-relaxed">;
              Leading provider of AI-powered solutions", IT services, and innovative micro SaaS platforms. ;
              We help businesses transform through cutting-edge technology and intelligent automation.;
            </p>;
            ;
            {/* Contact Info */}
            <div className="space-y-3">;
              <div className="flex items-center text-slate-300">;
                <Phone className="w-4 h-4 mr-3 text-cyan-400"  />;
                <a href=""tel": "+13024640950" className=""hover":text-cyan-400 transition-colors">;
                  +1 (302) 464-0950;
                </a>;
              </div>;
              <div className="flex items-center text-slate-300">;
                <Mail className="w-4 h-4 mr-3 text-cyan-400"  />;
                <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>;
              </div>;
              <div className="flex items-start text-slate-300">;
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-cyan-400 flex-shrink-0"  />;
                <span>;
                  364 E Main St STE 1008<br  />;
                  Middletown", DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Footer Links */}
          {footerSections.map((section) => (;
            <div key={section.title}>;
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>;
              <ul className="space-y-3">;
                {section.links.map((link) => (;
                  <li key={link.name}>;
                    <Link href={link.href} className="text-slate-300 "hover": "text-cyan-400 transition-colors duration-200">{link.name"}</Link>;
                  </li>;      <div className="border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="flex flex-col md: fle x-row items-center justify-between">
            <div className="mb-4 md: m b-0">
              <h3 className="text-white font-semibold mb-2">Stay Updated
              <p className="text-slate-300">Get the latest news and updates from Zion Tech Group</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-slate-800 text-white rounded-l-lg border border-slate-600 focus: borde r-cyan-400 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-400/20"
                />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-r-lg hover: fro m-cyan-500 hover: t o-blue-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */"}
      <div className="border-t border-slate-700 py-6">;
        <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8">;
          <div className="flex flex-col "md": fle x-row items-center justify-between">;
            <div className="text-slate-400 text-sm mb-4 "md": m b-0">;
              © {currentYear"} Zion Tech Group. All rights reserved.;
            </div>;
            ;
            {/* Legal Links */}
            <div className="flex items-center space-x-6 mb-4 "md": "m b-0">;
              <Link href="/privacy" className="text-slate-400 "hover":text-cyan-400 transition-colors text-sm">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text-slate-400 "hover":text-cyan-400 transition-colors text-sm">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text-slate-400 "hover":text-cyan-400 transition-colors text-sm">;
                Cookie Policy;
              </Link>;
            </div>;
            {/* Social Links */"}
            <div className="flex items-center space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-slate-400 "hover": "tex t-cyan-400 transition-colors duration-200";
                  aria-label={social.name"}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
}