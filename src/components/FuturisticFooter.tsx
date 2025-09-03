import {  import { motion  } from 'framer-motion';
export default function Page() {
,";
        { name: "Micro SAAS Solutions", href: "/micro-saas" },";
        { name: "IT Infrastructure", href: "/it-services" },";
        { name: "Emerging Technologies", href: "/emerging-tech" },";
        { name: "Cybersecurity", href: "/it-services/cybersecurity" },";
        { name: "Cloud Solutions", href: "/it-services/cloud" },";
        { name: "DevOps & Automation", href: "/it-services/devops" },";
        { name: "Data Management", href: "/it-services/data" }
      ]},;
    {
";
      title: "Solutions",;
      links[;";
        { name: "Quantum Computing", href: "/emerging-tech/quantum" },";
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain" },";
        { name: "Edge Computing", href: "/emerging-tech/edge" },";
        { name: "IoT Solutions", href: "/emerging-tech/iot" },";
        { name: "Healthcare AI", href: "/ai-services/healthcare" },";
        { name: "Financial AI", href: "/ai-services/financial" },";
        { name: "Green Technology", href: "/green-it" },";
        { name: "Space Technology", href: "/emerging-tech/space" }
      ]},;
    {
";
      title: "Comp",;
      links[;";
        { name: "About Us", href: "/about" },";
        { name: "Our Team", href: "/about#team" },";
        { name: "Careers", href: "/careers" },";
        { name: "Partners", href: "/partners" },";
        { name: "News & Blog", href: "/blog" },";
        { name: "Press Kit", href: "/press" },";
        { name: "Investor Relations", href: "/investors" },";
        { name: "Sustainability", href: "/sustainability" }
      ]},;
    {
";
      title: "Resources",;
      links[;";
        { name: "Documentation", href: "/docs" },";
        { name: "API Reference", href: "/api" },";
        { name: "Developer Portal", href: "/developer" },";
        { name: "Support Center", href: "/support" },;";
        { name: "FAQ", href: "/faq" },;";
        { name: "Contact Us", href: "/contact" },;";
        { name: "Case Studies", href: "/case-studies" },;";
        { name: "Marketplace", href: "/marketplace" }
      ]}
  ];
  const socialLinks = [;";
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },;";
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },;";
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },;"    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];
  return (";
    <footer className="relative bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker border-t border-zion-cyan/20">;
      {/* Background Effects */}";
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent" />";
      <div className="relative z-10">;
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">;
            {/* Company info */}
            <div className="lg:col-span-2">;
              <motion.div;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6">;
                <div className="flex items-center space-x-3">;
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center shadow-lg shadow-zion-cyan/25">;
                    <span className="text-2xl font-bold text-white">Z</span>;
                  </div>;
                  <div>;
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
                      ZION TECH GROUP;
                    </h3>;
                    <p className="text-sm text-zion-slate-light">Innovation • Intelligence • Impact</p>;
                  </div>;
                </div>;

                <p className="text-zion-slate-light leading-relaxed">;
                  Leading the future of technology with cutting-edge AI services, innovative solutions, ;
                  and comprehensive IT services. Empowering businesses to thrive in the digital age.;
                </p>;

                {/* Contact Information */}
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">;
                    <Phone className="w-4 h-4 text-zion-cyan" />;
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-zion-cyan transition-colors duration-300">;
                      {contactInfo.mobile}
                    </a>;
                  </div>;
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">;
                    <Mail className="w-4 h-4 text-zion-cyan" />;
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors duration-300">;
                      {contactInfo.email}
                    </a>;
                  </div>;
                  <div className="flex items-center space-x-3 text-zion-slate-light">;
                    <MapPin className="w-4 h-4 text-zion-cyan" />;
                    <span>{contactInfo.address}</span>;
                  </div>;
                </div>;

                {/* Social Links */}
                <div className="flex space-x-4">;
                  {socialLinks.map((social) => (;
                    <motion.a;
                      key={social.name}
                      href={social.href}
                      target="_blank";
                      rel="noopener noreferrer";
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-zion-slate-light ${social.color} hover:bg-zion-cyan/10 hover:border-zion-cyan/40 transition-all duration-300`}
                    >;
                      <social.icon className="w-5 h-5" />;
                    </motion.a>;
                  ))}
                </div>;
              </motion.div>;
            </div>;

            {/* Footer Sections */}
            {Object.entries(footerSections).map(([key, section]) => (;
              <div key={key}>;
                <motion.h3;
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-white mb-4">;
                  {section.title}
                </motion.h3>;
                <motion.ul;
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2">;
                  {section.items.map((item, index) => (;
                    <motion.li;
                      key={index}                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >;
                      <Link;
                        to={item.href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm flex items-center space-x-2 group">;
                        <item.icon className="w-3 h-3 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />;
                        <span>{item.name}</span>;
                      </Link>;
                    </motion.li>;
                  ))}
                </motion.ul>;
              </div>;
            ))}
          </div>;
        </div>;

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20">;
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">;
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">;
              <div className="text-zion-slate-light text-sm">;
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
              </div>;

              <div className="flex items-center space-x-6 text-sm">;
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">;
                  Terms of Service;
                </Link>;
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">;
                  Sitemap;
                </Link>;
              </div>;
            </div>;
          </div>;
        </div>;

        {/* Scroll to top button */}
        <motion.button;
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 z-50">;
          <ArrowUp className="w-5 h-5" />;
        </motion.button>;
      </div>;
    </footer>;
  )}
;,"});})";
