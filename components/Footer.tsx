<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  ExternalLink
} from 'lucide-react';

const footerSections = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
    { name: 'Industry Solutions', href: '/solutions/industry' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ],
  'Support': [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Status Page', href: '/status' },
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Terms of Service', href: '/terms' }
  ]
};

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
=======
import { ;
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ArrowUp;
} from 'lucide-react';
const Footer: React.FC = () => {;
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  const currentYear = new Date().getFullYear();
  return (;
    <footer className="bg-black border-t border-white/10">;
      <div className="container mx-auto px-4">;
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
>>>>>>> origin/automation-fixes
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting.
              We help businesses transform and grow through innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">24/7 Support Available</span>
            </div>
          </div>
=======

<<<<<<< HEAD
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, IT services, and micro SaaS solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
};

export default Footer;
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
=======
      {/* Scroll to Top Button */}
      <button;
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50";
        aria-label="Scroll to top">;
        <ArrowUp className="w-6 h-6" />;
      </button>;
    </footer>;
  );
};
export default Footer;
>>>>>>> origin/automation-fixes
=======
import React from 'react'; import NextLink from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook,ArrowUp,} from 'lucide-react'; const Footer: React.FC = (): JSX.Element => { const scrollToTop = () => { window.scrollTo({ top: 0,behavior: 'smooth' })}; const currentYear = new Date().getFullYear(); return ( <footer className="bg-black border-t border-white/10"> <div className="container mx-auto px-4"> {} <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <NextLink href="/" className="flex items-center space-x-2 mb-6"> <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"> <span className="text-white font-bold text-xl">Z</span> </div> <span className="text-white text-xl font-bold">Zion Tech Group</span> </NextLink> <p className="text-gray-400 text-sm mb-6 max-w-xs"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. </p> <div className="flex space-x-4"> <a href="https: <Twitter className="w-5 h-5" /> </a> <a href="https: <Linkedin className="w-5 h-5" /> </a> <a href="https: <Github className="w-5 h-5" /> </a> <a href="https: <Facebook className="w-5 h-5" /> </a> </div> </div> {} <div> <h3 className="text-white font-semibold mb-4">Services</h3> <ul className="space-y-3 text-sm"> <li><NextLink href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</NextLink></li> <li><NextLink href="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</NextLink></li> <li><NextLink href="/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</NextLink></li> <li><NextLink href="/blockchain-solutions" className="text-gray-400 hover:text-white transition-colors">Blockchain Solutions</NextLink></li> <li><NextLink href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</NextLink></li> <li><NextLink href="/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</NextLink></li> </ul> </div> {} <div> <h3 className="text-white font-semibold mb-4">Company</h3> <ul className="space-y-3 text-sm"> <li><NextLink href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</NextLink></li> <li><NextLink href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</NextLink></li> <li><NextLink href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</NextLink></li> <li><NextLink href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</NextLink></li> <li><NextLink href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</NextLink></li> </ul> </div> {} <div> <h3 className="text-white font-semibold mb-4">Contact</h3> <div className="space-y-3 text-sm"> <div className="flex items-center space-x-3"> <Phone className="w-4 h-4 text-gray-400" /> <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors"> +1 302 464 0950 </a> </div> <div className="flex items-center space-x-3"> <Mail className="w-4 h-4 text-gray-400" /> <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors"> kleber@ziontechgroup.com </a> </div> <div className="flex items-start space-x-3"> <MapPin className="w-4 h-4 text-gray-400 mt-0.5" /> <div className="text-gray-400"> <div>364 E Main St STE 1008</div> <div>Middletown,DE 19709</div> </div> </div> </div> </div> </div> {} <div className="border-t border-white/10 py-6"> <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <div className="text-sm text-gray-400"> © {currentYear} Zion Tech Group. All rights reserved. </div> <div className="flex space-x-6 text-sm"> <NextLink href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</NextLink> <NextLink href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</NextLink> <NextLink href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</NextLink> </div> <button onClick={scrollToTop} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors" aria-label="Back to top" > <ArrowUp className="w-4 h-4" /> <span>Back to top</span> </button> </div> </div> </div> </footer> )}; export default Footer;
>>>>>>> origin/automation-improvements
