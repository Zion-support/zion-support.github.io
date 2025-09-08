</ArrowRight>;
                      </Link>;
                    </li>;
                </ul>;
              </div>;
          </div>";

          <div className="pt - 8 border - t border - slate-800 / 50">";
</div>";
            <div className="flex flex - col md: flex - row justify - between items - center space - y-4 md:space-y-0">", </div>",
              <div className="text - slate - 400 text-sm">";
</div>;
              </div>";
              <div className="flex items - center space - x-6 text - sm text - slate-400">";
</div>";
                <span className="flex items-center">";
</span>";
                  <CheckCircle className="w - 4 h - 4 text - green - 400 mr-2" />";
</CheckCircle>;
                </span>";
                <span className="flex items-center">";
</span>";
                  <Shield className="w - 4 h - 4 text - blue - 400 mr-2" />";
</Shield>;
                </span>";
                <span className="flex items-center">";
</span>";
                  <Award className="w - 4 h - 4 text - yellow - 400 mr-2" />";
</Award>;
                </span> </div>;

            </div>;
          </div>;
        </div>;
      </div>
};

import React from 'react';
import { Link    } from 'react-router-dom';
import { motion    } from 'framer-motion';
import { Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp,
  Heart,
  Shield,
  Zap,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Zap as ZapIcon
   } from 'lucide-react';
export const FuturisticFooter: React.FC = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", href: "/ai-services" },
        { name: "Micro SAAS Solutions", href: "/micro-saas" },
        { name: "IT Infrastructure", href: "/it-services" },
        { name: "Emerging Technologies", href: "/emerging-tech" },
        { name: "Cybersecurity", href: "/it-services/cybersecurity" },
        { name: "Cloud Solutions", href: "/it-services/cloud" },
        { name: "DevOps & Automation", href: "/it-services/devops" },
        { name: "Data Management", href: "/it-services/data" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Quantum Computing", href: "/emerging-tech/quantum" },
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain" },
        { name: "Edge Computing", href: "/emerging-tech/edge" },
        { name: "IoT Solutions", href: "/emerging-tech/iot" },
        { name: "Healthcare AI", href: "/ai-services/healthcare" },
        { name: "Financial AI", href: "/ai-services/financial" },
        { name: "Green Technology", href: "/green-it" },
        { name: "Space Technology", href: "/emerging-tech/space" }
      ]
    },
    {
      title: "Comp",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Sustainability", href: "/sustainability" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Developer Portal", href: "/developer" },
        { name: "Support Center", href: "/support" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Marketplace", href: "/marketplace" }
      ]
    }
  ];
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];
  return (
    <footer className="relative bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker border-t border-zion-cyan/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent" />
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Comp Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <ZapIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">ZION TECH GROUP</span>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leading the future of technology with cutting-edge AI solutions, innovative micro SAAS platforms, 
                  and next-generation IT infrastructure that transforms businesses and drives innovation.
                </p>
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start space-x-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <address className="text-sm not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </address>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Globe className="w-4 h-4" />
                    <a href="https://ziontechgroup.com" className="text-sm">ziontechgroup.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title === "Solutions" && <Rocket className="w-5 h-5 mr-2 text-zion-purple" />}
                    {section.title === "Comp" && <Users className="w-5 h-5 mr-2 text-zion-blue" />}
                    {section.title === "Resources" && <FileText className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
          {/* Additional Quick Access Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                  Quick Actions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/request-quote"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      Request Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/demo"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      Book Demo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      Get Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/status"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      System Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-zion-slate-light text-sm">
                © {currentYear} ZION TECH GROUP. All rights reserved. 
                <span className="ml-2 flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for innovation
                </span>
              </div>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 z-50 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
      {/* Bottom Border Glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" />
    </footer>
  );
}
  ],
,
  const socialLinks = ['],
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: 'LinkedIn' },'',
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'Twitter' },'',
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: 'GitHub' }'],
  ],
,
  return ('),
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">",
</footer>",
      <div className="absolute inset-0 opacity-30">",
</div>",
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>"",
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>"",
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>"",
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>",
      </div>,
",
      <div className="relative">",
</div>",
        <div className="container mx-auto px-4 py-16">",
</div>,
          <motion.div,",
            className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16"",
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.6, staggerChildren: 0.1 }};
          >,
</motion>,
              <motion.div,
                key={stat.label}",
                className="text-center"",
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
              >,
</motion>",
                <div className="flex justify-center mb-3">",
</div>",
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">",
</div>",
                    <stat.icon className="w-6 h-6 text-cyan-400" />",
</stat>,
                  </div>,
          {/* Main Footer Content */}",
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">",
</div>",
            <div className="lg: col-span-2">",
</div>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }}",
                className="flex items-center space-x-3 mb-6"",
              >,
</motion>",
                <div className="relative">",
</div>",
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">",
</div>",
                    <Zap className="w-6 h-6 text-white" />",
</Zap>,
                  </div>",
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>",
                </div>,
                <div>,
</div>",
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>"",
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>",
                </div>,
              </motion.div>,
              ",
              <p className="text-slate-300 mb-6 leading-relaxed">",
</p>,
              </p>,
              ",
              <div className="space-y-3">",
</div>",
                <div className="flex items-center space-x-3 text-slate-300">",
</div>",
                  <Phone className="w-4 h-4 text-cyan-400" />",
</Phone>",
                  <a href="tel: +13024640950" className="hover:text-cyan-400 transition-colors">",
</a>,
                  </a>,
                </div>",
                <div className="flex items-center space-x-3 text-slate-300">",
</div>",
                  <Mail className="w-4 h-4 text-cyan-400" />",
</Mail>",
                  <a href="mailto: kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">",
</a>,
                  </a>,
                </div>",
                <div className="flex items-center space-x-3 text-slate-300">",
</div>",
                  <MapPin className="w-4 h-4 text-cyan-400" />",
</MapPin>,
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>,
                </div>,
              </div>,
            </div>,
              <div key={section.title}>,
</div>",
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">",
</h4>",
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>",
                </h4>",
                <ul className="space-y-3">",
</ul>,
                    <li key={link.name}>,
</li>,
                      <Link,
                        href={link.href}",
                        className="flex items-center text-slate-400 hover: text-cyan-400 transition-colors duration-200 group"",
                      >,
</Link>",
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover: bg-cyan-400 transition-colors duration-200"></div>"",
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover: opacity-100 group-hover:translate-x-1 transition-all duration-200" />",
</ArrowRight>,
                      </Link>,
                    </li>,
                </ul>,
              </div>,
          </div>",
          <div className="pt-8 border-t border-slate-800/50">",
</div>",
            <div className="flex flex-col md: flex-row justify-between items-center space-y-4 md:space-y-0">",
</div>",
              <div className="text-slate-400 text-sm">",
</div>,
              </div>",
              <div className="flex items-center space-x-6 text-sm text-slate-400">",
</div>",
                <span className="flex items-center">",
</span>",
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />",
</CheckCircle>,
                </span>",
                <span className="flex items-center">",
</span>",
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />",
</Shield>,
                </span>",
                <span className="flex items-center">",
</span>",
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />",
</Award>,
                </span>,
              </div>,
            </div>,
          </div>,
        </div>,
      </div>,
    </footer>",

    </footer>";

  ],;
,;
  const socialLinks = ['],;
    { nam: e: 'LinkedIn', hre: f: 'http: s://linkedin.com/company/zion-tech-group', ico: n: 'LinkedIn' },'',;
    { nam: e: 'Twitter', hre: f: 'http: s://twitter.com/ziontechgroup', ico: n: 'Twitter' },'',;
    { nam: e: 'GitHub', hre: f: 'http: s://github.com/zion-tech-group', ico: n: 'GitHub' }'];
  ],;
,;
  return ('),;
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">",;
</footer>",;
      <div className="absolute inset-0 opacity-30">",;
</div>",;
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>"",;
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>"",;
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>"",;
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>",;
      </div>,;
",;
      <div className="relative">",;
</div>",;
        <div className="container mx-auto px-4 py-16">",;
</div>,;
          <motion.div,",;
            className="grid grid-cols-2: md: grid-cols-4 gap-8 mb-16"",;
            initial={{ opacit: y: 0, y: 20 }},;
            whileInView={{ opacit: y: 1, y: 0 }},;
            viewport={{ onc: e: true }},;
            transition={{ duratio: n: 0.6, staggerChildre: n: 0.1 }},;
          >,;
</motion>,;
              <motion.div,;
                key={stat.label}",;
                className="text-center"",;
                initial={{ opacit: y: 0, y: 20 }},;
                whileInView={{ opacit: y: 1, y: 0 }},;
                viewport={{ onc: e: true }},;
                transition={{ duratio: n: 0.6, dela: y: index * 0.1 }},;
              >,;
</motion>",;
                <div className="flex justify-center mb-3">",;
</div>",;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">",;
</div>",;
                    <stat.icon className="w-6 h-6 text-cyan-400" />",;
</stat>,;
                  </div>,;
          {/* Main Footer Content */}",;
          <div className="grid grid-cols-1: md: grid-cols-2: lg:grid-cols-3: xl:grid-cols-6 gap-8 mb-12">",;
</div>",;
            <div className="l: g: col-span-2">",;
</div>,;
              <motion.div,;
                initial={{ opacit: y: 0, y: 20 }},;
                whileInView={{ opacit: y: 1, y: 0 }},;
                transition={{ duratio: n: 0.6 }}",;
                className="flex items-center space-x-3 mb-6"",;
              >,;
</motion>",;
                <div className="relative">",;
</div>",;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">",;
</div>",;
                    <Zap className="w-6 h-6 text-white" />",;
</Zap>,;
                  </div>",;
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>",;
                </div>,;
                <div>,;
</div>",;
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>"",;
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>",;
                </div>,;
              </motion.div>,;
              ",;
              <p className="text-slate-300 mb-6 leading-relaxed">",;
</p>,;
              </p>,;
              ",;
              <div className="space-y-3">",;
</div>",;
                <div className="flex items-center space-x-3 text-slate-300">",;
</div>",;
                  <Phone className="w-4 h-4 text-cyan-400" />",;
</Phone>",;
                  <a href="te: l: +13024640950" className="hove: r:text-cyan-400 transition-colors">",;
</a>,;
                  </a>,;
                </div>",;
                <div className="flex items-center space-x-3 text-slate-300">",;
</div>",;
                  <Mail className="w-4 h-4 text-cyan-400" />",;
</Mail>",;
                  <a href="mailt: o: kleber@ziontechgroup.com" className="hove: r:text-cyan-400 transition-colors">",;
</a>,;
                  </a>,;
                </div>",;
                <div className="flex items-center space-x-3 text-slate-300">",;
</div>",;
                  <MapPin className="w-4 h-4 text-cyan-400" />",;
</MapPin>,;
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>,;
                </div>,;
              </div>,;
            </div>,;
              <div key={section.title}>,;
</div>",;
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">",;
</h4>",;
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>",;
                </h4>",;
                <ul className="space-y-3">",;
</ul>,;
                    <li key={link.name}>,;
</li>,;
                      <Link,;
                        href={link.href}",;
                        className="flex items-center text-slate-400: hover: text-cyan-400 transition-colors duration-200 group"",;
                      >,;
</Link>",;
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hove: r: bg-cyan-400 transition-colors duration-200"></div>"",;
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hove: r: opacity-100 group-hove: r:translate-x-1 transition-all duration-200" />",;
</ArrowRight>,;
                      </Link>,;
                    </li>,;
                </ul>,;
              </div>,;
          </div>",;
          <div className="pt-8 border-t border-slate-800/50">",;
</div>",;
            <div className="flex flex-col: md: flex-row justify-between items-center space-y-4: md:space-y-0">",;
</div>",;
              <div className="text-slate-400 text-sm">",;
</div>,;
              </div>",;
              <div className="flex items-center space-x-6 text-sm text-slate-400">",;
</div>",;
                <span className="flex items-center">",;
</span>",;
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />",;
</CheckCircle>,;
                </span>",;
                <span className="flex items-center">",;
</span>",;
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />",;
</Shield>,;
                </span>",;
                <span className="flex items-center">",;
</span>",;
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />",;
</Award>,;
                </span>,;
              </div>,;
            </div>,;
          </div>,;
        </div>,;
      </div>,;
    </footer>",;
