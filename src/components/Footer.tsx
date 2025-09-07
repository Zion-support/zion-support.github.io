
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-foreground/80 mb-4" style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}>
              The world&apos,s first free marketplace dedicated to high-tech and artificial intelligence.
<div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading AI & Technology Solutions for a Smarter Future. We deliver cutting-edge,
  technology solutions that transform businesses and drive innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a,
  href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-foreground/80 hover:text-primary transition-colors text-sm">Products</Link></li>
              {/* Ensure the services link routes to the main services page */}
              <li>
                <Link,
  href="/services"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li><Link href="/talent" className="text-foreground/80 hover:text-primary transition-colors text-sm">Talent</Link></li>
              <li>
                <Link,
  href="/equipment"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                  target="_self"
                >
                  Equipment
                </Link>
              </li>
              <li><Link href="/categories" className="text-foreground/80 hover:text-primary transition-colors text-sm">Categories</Link></li>
              <li><Link href="/green-it" className="text-foreground/80 hover:text-primary transition-colors text-sm">Green IT</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/innovation" className="text-foreground/80 hover:text-primary transition-colors text-sm">Innovation</Link></li>
              <li><Link href="/partners" className="text-foreground/80 hover:text-primary transition-colors text-sm">Partners</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li>
                <Link,
  href="/sitemap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-foreground/80 mb-4 text-sm">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <div className="max-w-sm">
              <FooterNewsletter />
            </div>
          </div>
        </div>
      </div>
import { Link  } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp  } from 'lucide-react';
const Footer: React.FC = () => {const currentYear  = new Date().getFullYear()const services = [;
    { name: 'AI Services', href: '/services/ai-services' },{ name: 'IT Services', href: '/services/it-services' },{ name: 'Micro SaaS', href: '/services/micro-saas' },{ name: 'Cybersecurity', href: '/services/cybersecurity' },{ name: 'Cloud Solutions', href: '/services/cloud-solutions' },{ name: 'Mobile Development', href: '/services/mobile-development' }
  ];const company = [;
    { name: 'About Us', href: '/about' },{ name: 'Our Team', href: '/about#team' },{ name: 'Careers', href: '/careers' },{ name: 'Blog', href: '/blog' },{ name: 'Case Studies', href: '/case-studies' }
  ];const support = [;
    { name: 'Help Center', href: '/support' },{ name: 'FAQ', href: '/faq' },{ name: 'Contact Us', href: '/contact' },{ name: 'Documentation', href: '/docs' },{ name: 'API Reference', href: '/api' }
  ];const legal = [;
    { name: 'Privacy Policy', href: '/privacy' },{ name: 'Terms of Service', href: '/terms' },{ name: 'Cookie Policy', href: '/cookies' },{ name: 'GDPR Compliance', href: '/gdpr' }
  ];const socialLinks = [;
    { name: 'Facebook', href: '#', icon: Facebook },{ name: 'Twitter', href: '#', icon: Twitter },{ name: 'LinkedIn', href: '#', icon: Linkedin },{ name: 'GitHub', href: '#', icon: Github }
  ];const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' })}return (<footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">;
            <Link to="/" className="flex items-center space-x-2 mb-4">;
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">;
                <span className="text-black font-bold text-sm">Z</span>;
              </div>;
              <span className="text-xl font-bold text-white">Zion Tech Group</span>;
            </Link>;
            <p className="text-gray-300 mb-4 max-w-md">;
              Leading provider of cutting-edge AI, IT, and digital transformation solutions.;
              We help businesses scale, innovate, and succeed in the digital age.;
            </p>;
            <div className="space-y-2">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-2" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-2" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <MapPin className="w-4 h-4 mr-2" />;
                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services.map((service) => (<li key={service.name}>;
                  <Link;
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {service.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>;
            <ul className="space-y-2">;
              {company.map((item) => (<li key={item.name}>;
                  <Link;
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Support */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>;
            <ul className="space-y-2">;
              {support.map((item) => (<li key={item.name}>;
                  <Link;
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">;
          <div className="max-w-md">;
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>;
            <p className="text-gray-400 mb-4">;
              Get the latest news and updates from Zion Tech Group.;
            </p>;
            <div className="flex">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors">;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">;
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">;
            {legal.map((item) => (<Link;
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors";
              >;
                {item.name}
              </Link>;
            ))}
          </div>;
          <div className="flex space-x-4">;
            {socialLinks.map((social) => (<a;
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors";
                aria-label={social.name}
              >;
                <social.icon className="h-5 w-5" />;
              </a>;
            ))}
          </div>;
        </div>;
        {/* Back to Top Button */}
        <div className="mt-8 flex justify-end">;
          <button;
            type="button";
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer";
            aria-label="Back to top";
          >;
            <ChevronUp className="h-4 w-4" aria-hidden="true" />;
            <span>Back to Top</span>;
          </button>;
        </div>;
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">;
          <p className="text-gray-400 text-sm">;
            © {currentYear} Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
  )}export default Footer;
    </footer>
  )
}
        </div>
