
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/services/ai-chatbot-platform' },
      { name: 'Web Development', href: '#' },
      { name: 'Cloud Services', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Data Analytics', href: '#' },
export default function Footer() {
}
return (;
    <footer className="bg-gray-900 text-white">"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-12">"
        <div className="grid grid-cols-1 "md":grid-cols-4 gap-8">"
          <div className="col-span-1 "md":col-span-2">"
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300 mb-4">"
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">"
              {socialLinks.map((link) => (
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Blog', href: '#blog' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
      { name: 'Contact Support', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Zion Tech Group
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, web development, 
              mobile applications, cloud services, and digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
}
key={link.name}
                  href={link.href}
                  className="text-gray-400 "hover": text-white transition-colors""
                >
                  <link.icon className="h-5 w-5" />"
                </a>

              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 

                  <Link
                    href={link.href}
                  <Link 
                    href={link.href} 
origin/automation-improvements-final
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>


            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;"
            <ul className="space-y-2">;"
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;"
            <ul className="space-y-2">;"
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;"
            <ul className="space-y-2">;"
              {footerLinks.services.map((link) => (<li key={link.name}>;
                    className="text-gray-300 "hover":text-white transition-colors";"
                  >;
                    {link.name}
                    className="text-gray-300 "hover": text-white transition-colors">"

                    {link.nam
}
                  </Link>;
                </li>;
            <h3 className="text-lg font-semibold mb-6>Services</h3>;"
            <div className="space-y-4">;"
              {Object.entries(services).map(([category, links]) => (<div key={category}>;
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>;"
                  <ul className="space-y-1>;"
                    {links.slice(0, 3).map((link) => (<li key={link.name}>;
                        <Link;
                          href={link.href}
                          className="text-sm text-gray-300 "hover":text-white transition-colors";"
                        >;
                          {link.name}
                          className="text-sm text-gray-300 "hover": text-white transition-colors">"

                          {link.nam
}
                        </Link>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </div>
            </div>
          </div>
          {/* Services */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>"
            <ul className="space-y-2">"
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                    className="text-gray-300 "hover": text-white transition-colors""
                  >
                    {link.nam
}
                  </Link>
                </li>



            <h3 className="text-lg font-semibold mb-6>Services</h3>"
            <div className="space-y-4">"
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>"
                  <ul className="space-y-1>"
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link,
href={link.href}
                          className="text-sm text-gray-300 "hover": text-white transition-colors""
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
}
                  </ul>
                </div>
            <div className="space-y-3">;"
              <div className="flex items-center text-gray-300">;"
                <Phone className="w-4 h-4 mr-3" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;"
                <Mail className="w-4 h-4 mr-3" />;"
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;"
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;"
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;"
            <ul className="space-y-2">;"
              {footerLinks && footerLinks.services.map((link) => (<li key={link && link.name}>;
                  <Link;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link,
href={link && link.href}
                    className="text-gray-300 "hover":text-white transition-colors">;"
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;{/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;"
            <ul className="space-y-2">;"
              {footerLinks && footerLinks.solutions.map((link) => (<li key={link && link.name}>;{/* Solutions */}
              Leading the future of AI, quantum computing, and autonomous business solutions.;
              Leading provider of AI solutions, IT services, and micro SaaS applications.;
              Transform your business with cutting-edge technology.;
            </p>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Company</h4>;"
            <ul className="space-y-2">;"
              <li><a href="/about" className="text-gray-300 "hover":text-white">About</a></li>;"
              <li><a href="/services" className="text-gray-300 "hover":text-white">Services</a></li>;"
              <li><a href="/solutions" className="text-gray-300 "hover":text-white">Solutions</a></li>;"
              <li><a href="/research" className="text-gray-300 "hover":text-white">Research</a></li>;"
            </ul>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Contact</h4>;"
          <div>;
            <h4 className="text-lg font-semibold mb-4">Services</h4>;"
            <ul className="space-y-2">;"
              <li><Link href="/ai-services" className="text-gray-300 "hover":text-white">AI Services</Link></li>;"
              <li><Link href="/it-services" className="text-gray-300 "hover":text-white">IT Services</Link></li>;"
              <li><Link href="/micro-saas" className="text-gray-300 "hover":text-white">Micro SaaS</Link></li>;"
              <li><Link href="/consulting" className="text-gray-300 "hover":text-white">Consulting</Link></li>;"
            </ul>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Contact</h4>;"
            <div className="space-y-2 text-gray-300">;"
              <div className="flex items-center">;"
                <MapPin className="h-4 w-4 mr-2" />;"
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;
              </div>;
              <div className="flex items-center">;"
                <Phone className="h-4 w-4 mr-2" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;"
                <Mail className="h-4 w-4 mr-2" />;"
                <span>kleber@ziontechgroup.com</span>;
                    href={link && link.href}
                    className="text-gray-300 "hover":text-white transition-colors">;"
                    {link && link.name}
                  </Link>;
                </li>;
          <div>
            <h3 className=text-lg font-semibold mb-6">Company</h3>"
            <ul className="space-y-3>"
              {company.map((link) => (
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>;
          </div>;{/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;"
            <ul className="space-y-2 mb-6">;"
              {footerLinks && footerLinks.company.map((link) => (<li key={link && link.name}>;
                  <Link;
          {/* Resources */}
          <div>;
            <h3 className=text-lg font-semibold mb-6">Resources</h3>;"
            <ul className="space-y-3>;"
              {resources.map((link) => (<li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text-gray-300 "hover":text-blue-400 transition-colors duration-200";"
                  >;
                    {link.name}
                    className="text-gray-300 "hover": text-blue-400 transition-colors duration-200">"

                    {link.nam
}
                  </Link>;
                </li>;
              ))}
            </ul>;
            <h3 className="text-lg font-semibold mb-4">Resources</h3>;"
            <ul className="space-y-2">;"
              {footerLinks.resources.map((link) => (<li key={link.name}>;
                    href={link && link.href}
                    className="text-gray-300 "hover":text-white transition-colors">;"
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
            <h3 className="text-lg font-semibold mb-4">Resources</h3>;"
            <ul className="space-y-2">;"
              {footerLinks && footerLinks.resources.map((link) => (<li key={link && link.name}>;
                  <Link;
                    href={link.href}
                    className="text-gray-300 "hover":text-white transition-colors";"
                  >;
                    {link.name}
                    className="text-gray-300 "hover": text-white transition-colors">"

                    {link.nam
}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
      </div>;
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 "md":mb-0">;"
              <a;
                href=""https"://linkedin.com/company/zion-tech-group";"
                target="_blank";"
                rel="noopener noreferrer";"
                className="text-gray-400 "hover":text-white transition-colors";"
              >;
                className="text-gray-400 "hover":text-white transition-colors">"

                <Linkedin className="w-5 h-5" />;"
              </a>;
              <a;
                href=""https"://twitter.com/ziontechgroup";"
                target="_blank";"
                rel="noopener noreferrer";"
                className="text-gray-400 "hover":text-white transition-colors";"
              >;
                className="text-gray-400 "hover":text-white transition-colors">"

                <Twitter className="w-5 h-5" />;"
              </a>;
              <a;
                href=""https"://facebook.com/ziontechgroup";"
                target="_blank";"
                rel="noopener noreferrer";"
                className="text-gray-400 "hover":text-white transition-colors";"
              >;
                className="text-gray-400 "hover":text-white transition-colors">"

                <Facebook className="w-5 h-5" />;"
              </a>;
              <a;
                href=""https"://instagram.com/ziontechgroup";"
                target="_blank";"
                rel="noopener noreferrer";"
              <Link;
                href="/privacy";"
                className="text-gray-400 "hover":text-white transition-colors";"
              >;
                className="text-gray-400 "hover":text-white transition-colors">"

              <Link href="/privacy" className="text-gray-400 "hover":text-white transition-colors">;"
            {/* Social Links */}
            <div className=mt-6">;"
              <h4 className="text-sm font-medium text-blue-400 mb-3>Follow Us</h4>;"
              <div className="flex space-x-4">;"
                {socialLinks.map((social) => (<a;
                    }
                    key={social.name}
                    href={social.href}
                    target=_blank";"
                    rel="noopener noreferrer;"
                    className="text-gray-400 "hover":text-white transition-colors";"
                    aria-label={social.name}
                  >;
                    <social.icon className=h-5 w-5" />;"
                  </a>;
                ))}
ursor/automate-test-improve-and-merge-code-646c;
              <li><Link href="/ai-services" className="text-gray-300 "hover":text-white">AI Services</Link></li>;"
              <li><Link href="/it-services" className="text-gray-300 "hover":text-white">IT Services</Link></li>;"
              <li><Link href="/micro-saas" className="text-gray-300 "hover":text-white">Micro SaaS</Link></li>;"
              <li><Link href="/consulting" className="text-gray-300 "hover":text-white">Consulting</Link></li>;"
            </ul>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Contact</h4>;"
            <div className="space-y-2 text-gray-300">;"
              <div className="flex items-center">;"
                <MapPin className="h-4 w-4 mr-2" />;"
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;
              </div>;
              <div className="flex items-center">;"
                <Phone className="h-4 w-4 mr-2" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;"
                <Mail className="h-4 w-4 mr-2" />;"
                <span>kleber@ziontechgroup.com</span>;
ursor/automate-test-improve-and-merge-code-646c;
              </div>;
            </div>;
          </div>;
        </div>;
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">;"
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>;
              <li><a href="/contact" className="text-gray-300 "hover":text-white">Contact Us</a></li>;"
              <li><a href=""mailto":info@ziontechgroup.com" className="text-gray-300 "hover":text-white">Email</a></li>;"
            </ul>;
          </div>;
        </div>;
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">;"
          <p className="text-gray-300">;"
            © 2024 Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
  )}
          </div>;


          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;"
            <ul className="space-y-2">;"
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>"
            <ul className="space-y-2">"
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/solutions" className="text-gray-300 hover:text-white">Solutions</a></li>
              <li><a href="/research" className="text-gray-300 hover:text-white">Research</a></li>
            </ul>
          </div>


                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;

          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
          {/* Company */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Company</h3>"
            <ul className="space-y-3>"
              {company.map((link) => (
                <li key={link.name}>
                  <Link,
href={link.href}
                    className="text-gray-300 "hover": text-blue-400 transition-colors duration-200""
                  >
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"    />
                    {link.name}
                  </Link>
                </li>
              )
}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>"
            <ul className="space-y-2">"
              <li><Link href="/ai-services" className="text-gray-300 "hover":text-white">AI Services</Link></li>"
              <li><Link href="/it-services" className="text-gray-300 "hover":text-white">IT Services</Link></li>"
              <li><Link href="/micro-saas" className="text-gray-300 "hover":text-white">Micro SaaS</Link></li>"
              <li><Link href="/consulting" className="text-gray-300 "hover":text-white">Consulting</Link></li>"
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>"
            <div className="space-y-2 text-gray-300">"
              <div className="flex items-center">"
                <MapPin className="h-4 w-4 mr-2" />"
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">"
                <Phone className="h-4 w-4 mr-2" />"
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">"
                <Mail className="h-4 w-4 mr-2" />"
                <span>kleber@ziontechgroup.com</span>
              <li><Link href="/ai-services" className="text-gray-300 "hover":text-white">AI Services</Link></li>"
              <li><Link href="/it-services" className="text-gray-300 "hover":text-white">IT Services</Link></li>"
              <li><Link href="/micro-saas" className="text-gray-300 "hover":text-white">Micro SaaS</Link></li>"
              <li><Link href="/consulting" className="text-gray-300 "hover":text-white">Consulting</Link></li>"
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>"
            <div className="space-y-2 text-gray-300">"
              <div className="flex items-center">"
                <MapPin className="h-4 w-4 mr-2" />"
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">"
                <Phone className="h-4 w-4 mr-2" />"
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">"
                <Mail className="h-4 w-4 mr-2" />"
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">"
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8>;"
          <div className="flex flex-col "md":flex-row items-center justify-between">;"
            <div className=text-gray-400 text-sm mb-4 "md":mb-0">;"
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space-x-6 text-sm>;"
              <Link href="/privacy" className=text-gray-400 "hover":text-white transition-colors">;"
              <Link;
                href="/privacy";"
                className="text-gray-400 "hover":text-white transition-colors";"
              >;
                className="text-gray-400 "hover":text-white transition-colors">"

                Privacy Policy;
              </Link>;
                className="text-gray-400 "hover":text-white transition-colors">;"
                <Instagram className="w-5 h-5" />;"
              </a>;
            </div>;
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">;"
              <Link;
                href="/privacy";"
                className="text-gray-400 "hover":text-white transition-colors">;"
                Privacy Policy;
              </Link>;
              <Link;
                href="/terms";"
                className="text-gray-400 "hover":text-white transition-colors">;"
                Terms of Service;
              </Link>;
              <Link;
ursor/automate-test-improve-and-merge-code-646c;
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">;"
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>;
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">;"
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>;
              Leading the future of technology with innovative solutions and;
              cutting-edge development.;
            </p>;
            <div className="flex space-x-4">;"
              <a href="#" className="text-gray-300 "hover":text-white">;"
                <span className="sr-only">Facebook</span>;"
                <svg;
                  className="h-6 w-6";"
                  fill="currentColor";"
                  viewBox="0 0 24 24";"
                >;
                  viewBox="0 0 24 24">"

                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />;"
                </svg>;
              </a>;
              <a href="#" className="text-gray-300 "hover":text-white">;"
                <span className="sr-only">Twitter</span>;"
                <svg;
                  className="h-6 w-6";"
                  fill="currentColor";"
                  viewBox="0 0 24 24";"
                >;
                  viewBox="0 0 24 24">"

                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />;"
                </svg>;
              </a>;
              <a href="#" className="text-gray-300 "hover":text-white">;"
                <span className="sr-only">LinkedIn</span>;"
                <svg;
                  className="h-6 w-6";"
                  fill="currentColor";"
                  viewBox="0 0 24 24";"
                >;
                  viewBox="0 0 24 24">"

                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />;"
                </svg>;
              </a>;
            </div>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Services</h4>;"
            <ul className="space-y-2">;"
              <li>;
                <Link;
                  href="/services";"
                  className="text-gray-300 "hover":text-white";"
                >;
                  className="text-gray-300 "hover":text-white">"


import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-slate-400 mb-4">
              Leading provider of innovative micro SaaS products, AI services, and IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13024640950" className="text-slate-400 hover:text-white transition-colors">
                Phone: (302) 464-0950
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
};

export default Footer;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}
                className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link

};

export default Footer;
}
}
}


export default Footer;
}

    </footer>);
}


};

export default Footer;
        </div>
    </footer>
  );
};

export default Footer;
