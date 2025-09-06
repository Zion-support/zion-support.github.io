import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
<<<<<<< HEAD
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
  ];

  const solutions = [
    { name: 'E-commerce', href: '/solutions/ecommerce' },
    { name: 'CRM Systems', href: '/solutions/crm' },
    { name: 'Data Analytics', href: '/solutions/analytics' },
    { name: 'Automation', href: '/solutions/automation' },

=======
    { name: 'Mobile Development', href: '/services/mobile-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Database Management', href: '/services/database-management' },
    { name: 'Security Services', href: '/services/security' },
    { name: 'Performance Optimization', href: '/services/performance' }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  const company = [
    { name: 'About Us', href: '/about' },
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
<<<<<<< HEAD
    { name: 'Instagram', href: '#', icon: Instagram },

  ];

  return (
    <footer className="bg-gray-900 text-white">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
=======
    { name: 'Instagram', href: '#', icon: Instagram }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge software, AI, and cloud services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
=======
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
<<<<<<< HEAD



          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}

                    className="text-gray-400 hover:text-white transition-colors"

                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">

              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}

                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"

                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
<<<<<<< HEAD
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy

              </Link>
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD

  );

=======
  );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

export default Footer;