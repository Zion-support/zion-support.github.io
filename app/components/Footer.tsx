import React from 'react';,;,;,;,
import { Link } from 'react-router-dom';
import { ;
  PhoneIcon, ;
  EnvelopeIcon, ;
  MapPinIcon,;
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { ;
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {;,;,;,;,
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];
;,;,;,;,
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' }
  ];
;,;,;,;,
  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' }
  ];
;,;,;,;,
  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];
;,;,;,;,
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'GitHub', href: '#', icon: 'github' }
  ];
;,;,;,;,
  return (
    <footer className="bg-slate-900 border-t border-slate-700">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
          {/* Company Info */}"
          <div className="lg:col-span-1">"
            <div className="flex items-center mb-4">"
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span><//span>"
              </div>"
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span><//span>"
            </div>"
            <p className="text-gray-400 text-sm mb-4"></p>;,;,;";,
              Leading provider of AI solutions, cybersecurity, and digital transformation services."
            </p>"
            <div className="flex space-x-4"></div><//div><///div><////div>
              {socialLinks.map((social) => (
                <a;
                  key={social.name}
                  href={social.href};";
                  className="text-gray-400 hover:text-white transition-colors;,;";,
                  aria-label={social.name}"
                >"
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">"
                    {social.icon === 'facebook' && <Facebook className="w-4 h-4" />}"
                    {social.icon === 'twitter' && <Twitter className="w-4 h-4" />}"
                    {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}"
                    {social.icon === 'github' && <Github className="w-4 h-4" />}
                  </div><//div><///div><////div></////div>
                </a><//a><///a><////a></////a>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>

          {/* Services */}"
          <div>"
            <h3 className="text-white font-semibold mb-4">Services</h3>"
            <ul className="space-y-2"></ul><//ul><///ul><////ul>
              {services.map((service) => (
                <li key={service.name}></li><//li><///li><////li>
                  <Link;,;,;,;,
                    to={service.href};";
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  ></Link
><//Link
><///Link
><////Link
>
                    {service.name}
                  </Link><//Link><///Link><////Link></////Link>
                </li><//li><///li><////li></////li>
              ))}
            </ul><//ul><///ul><////ul></////ul>
          </div><//div><///div><////div></////div>

          {/* Company */}"
          <div>"
            <h3 className="text-white font-semibold mb-4">Company</h3>"
            <ul className="space-y-2"></ul><//ul><///ul><////ul>
              {company.map((item) => (
                <li key={item.name}></li><//li><///li><////li>
                  <Link;,;,;,;,
                    to={item.href};";
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  ></Link
><//Link
><///Link
><////Link
>
                    {item.name}
                  </Link><//Link><///Link><////Link></////Link>
                </li><//li><///li><////li></////li>
              ))}
            </ul><//ul><///ul><////ul></////ul>
          </div><//div><///div><////div></////div>

          {/* Support */}"
          <div>"
            <h3 className="text-white font-semibold mb-4">Support</h3>"
            <ul className="space-y-2"></ul><//ul><///ul><////ul>
              {support.map((item) => (
                <li key={item.name}></li><//li><///li><////li>
                  <Link;,;,;,;,
                    to={item.href};";
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  ></Link
><//Link
><///Link
><////Link
>
                    {item.name}
                  </Link><//Link><///Link><////Link></////Link>
                </li><//li><///li><////li></////li>
              ))}
            </ul><//ul><///ul><////ul></////ul>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>

        {/* Contact Info */}"
        <div className="mt-8 pt-8 border-t border-slate-700">"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
            <div className="flex items-center text-gray-400 text-sm">"
              <PhoneIcon className="w-4 h-4 mr-2" />"
              <span>+1 (555) 123-4567</span><//span>"
            </div>"
            <div className="flex items-center text-gray-400 text-sm">"
              <EnvelopeIcon className="w-4 h-4 mr-2" />"
              <span>info@ziontechgroup.com</span><//span>"
            </div>"
            <div className="flex items-center text-gray-400 text-sm">"
              <MapPinIcon className="w-4 h-4 mr-2" />
              <span>San Francisco, CA</span><//span><///span><////span></////span>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>

        {/* Bottom Bar */}"
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">"
          <div className="text-gray-400 text-sm"></div><//div>"
            © {currentYear} Zion Tech Group. All rights reserved."
          </div>"
          <div className="flex space-x-6 mt-4 md:mt-0"></div><//div><///div><////div>
            {legal.map((item) => (
              <Link;,;,;,;,
                key={item.name}
                to={item.href};";
                className="text-gray-400 hover:text-white text-sm transition-colors"
              ></Link
><//Link
><///Link
><////Link
>
                {item.name}
              </Link><//Link><///Link><////Link></////Link>
            ))}
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </div><//div><///div><////div></////div>
    </footer><//footer><///footer><////footer></////footer>
  );
};

export default Footer;"