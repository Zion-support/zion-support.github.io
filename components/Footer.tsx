} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: "Blockchain", href: "/blockchain" },
      { name: "IoT Solutions", href: "/iot" },
      { name: "Cybersecurity", href: "/cybersecurity" },
    ],
    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise" }
      { name: "Startup Solutions", href: "/startup" }
      { name: "E-commerce", href: "/ecommerce" }
      { name: "Healthcare", href: "/industries/healthcare" }
      { name: "Finance", href: "/industries/finance" }
      { name: "Education", href: "/industries/education" }
    ]
    company: [
      { name: "About Us", href: "/about" }
      { name: "Our Team", href: "/team" }
      { name: "Careers", href: "/careers" }
      { name: "Case Studies", href: "/case-studies" }
      { name: "News", href: "/news" }
      { name: "Contact", href: "/contact" }
    ]
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "White Papers", href: "/white - papers" },
      { name: "Support", href: "/support" },
    ],
=======
export default function Footer() {;
  const currentYear = new Date().getFullYear();

  const footerLinks = {;
    services: [;
      { name: "AI Services", href: "/ai-services" },;
      { name: "IT Services", href: "/it-services" },;
      { name: "Micro SaaS", href: "/micro-saas" },;
      { name: "Blockchain", href: "/blockchain" },;
      { name: "IoT Solutions", href: "/iot" },;
      { name: "Cybersecurity", href: "/cybersecurity" },;
    ],;
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise" },;
      { name: "Startup Solutions", href: "/startup" },;
      { name: "E-commerce", href: "/ecommerce" },;
      { name: "Healthcare", href: "/industries/healthcare" },;
      { name: "Finance", href: "/industries/finance" },;
      { name: "Education", href: "/industries/education" },;
    ],;
    company: [;
      { name: "About Us", href: "/about" },;
      { name: "Our Team", href: "/team" },;
      { name: "Careers", href: "/careers" },;
      { name: "Case Studies", href: "/case-studies" },;
      { name: "News", href: "/news" },;
      { name: "Contact", href: "/contact" },;
    ],;
    resources: [;
      { name: "Blog", href: "/blog" },;
      { name: "Documentation", href: "/docs" },;
      { name: "API Reference", href: "/api" },;
      { name: "Tutorials", href: "/tutorials" },;
      { name: "White Papers", href: "/white-papers" },;
      { name: "Support", href: "/support" },;
    ],;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  };

=======
      { name: "Blog", href: "/blog" }
      { name: "Documentation", href: "/docs" }
      { name: "API Reference", href: "/api" }
      { name: "Tutorials", href: "/tutorials" }
      { name: "White Papers", href: "/white-papers" }
      { name: "Support", href: "/support" }
    ]
  }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  return (
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}

=======
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            
>>>>>>> origin/automation-improvements-final
=======
              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
            {/* Contact Info */}
>>>>>>> origin/automation-improvements-final
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
=======
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;
                  <Link
>>>>>>> origin/automation-improvements-final
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
=======
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
>>>>>>> origin/automation-improvements-final
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
=======
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;

            <h3 className="text-lg font-semibold mb-4">Resources</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.resources.map((link) => (;
                <li key={link && link.name}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
      </div>;
      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">;
        <div className="container mx-auto px-4 py-8">;
          <div className="max-w-2xl mx-auto text-center">;
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>;
            <p className="text-gray-300 mb-4">;
              Get the latest technology insights and company updates delivered;
              to your inbox.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">;
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">;
              <a
                href="https://linkedin && linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a
                href="https://twitter && twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a
                href="https://facebook && facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Facebook className="w-5 h-5" />;
              </a>;
              <a
                href="https://instagram && instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> origin/automation-improvements-final
                Privacy Policy
              </Link>
=======
                className="text-gray-400 hover:text-white transition-colors">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors">;
=======
      {/* Newsletter Signup */}
      <div className="border - t border - gray - 800">;
        <div className="container mx - auto px - 4 py - 8">;
          <div className="max - w-2xl mx - auto text - center">;
            <h3 className="text - xl font - semibold mb - 2">Stay Updated</h3>;
            <p className="text - gray - 300 mb - 4">;
              Get the latest technology insights and company updates delivered;
              to your inbox.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 3 max - w-md mx - auto">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex - 1 px - 4 py - 2 bg - gray - 800 border border - gray - 700 rounded - md text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500";
              />;
              <button className="px - 6 py - 2 bg - blue - 600 text - white rounded - md hover:bg - blue - 700 transition - colors flex items - center justify - center">;
                Subscribe;
                <ArrowRight className="w - 4 h - 4 ml - 2" />;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Bottom Footer */}
      <div className="border - t border - gray - 800">;
        <div className="container mx - auto px - 4 py - 6">;
          <div className="flex flex - col md:flex - row justify - between items - center">;
            <div className="text - gray - 400 text - sm mb - 4 md:mb - 0">;
              © {current_year} Zion Tech Group. All rights reserved.;
            </div>;
            {/* Social Links */}
            <div className="flex space - x-4 mb - 4 md:mb - 0">;
              <a;
                href="https://linkedin.com / company / zion - tech - group";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Linkedin className="w - 5 h - 5" />;
              </a>;
              <a;
                href="https://twitter.com / ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Twitter className="w - 5 h - 5" />;
              </a>;
              <a;
                href="https://facebook.com / ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Facebook className="w - 5 h - 5" />;
              </a>;
              <a;
                href="https://instagram.com / ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Instagram className="w - 5 h - 5" />;
              </a>;
            </div>;
            {/* Legal Links */}
            <div className="flex space - x-6 text - sm">;
              <Link;
                href="/privacy";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                Privacy Policy;
              </Link>;
              <Link;
                href="/terms";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                Terms of Service;
              </Link>;
              <Link;
                href="/cookies";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
    </footer>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
