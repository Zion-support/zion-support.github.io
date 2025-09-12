import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Check } from 'lucide-react';
const services = [];
const solutions = [];

                </p>;
                {/* Contact Information */}
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3 text-slate-300 "hover": "text-cyan-400 transition-colors duration-300">;
                    <Phone className="w-4 h-4 text-cyan-400" />;
                    <a href={`"tel":${contactInfo.mobile"}`} className=""hover": "text-cyan-400 transition-colors duration-300">;
                      {contactInfo.mobile"}
                    </a>;
                  </div>;
                  <div className="flex items-center space-x-3 text-slate-300 "hover": "text-cyan-400 transition-colors duration-300">;
                    <Mail className="w-4 h-4 text-cyan-400" />;
                    <a href={`"mailto":${contactInfo.email"}`} className=""hover": "text-cyan-400 transition-colors duration-300">;
                      {contactInfo.email"}
                    </a>;
                  </div>;
                  <div className="flex items-center space-x-3 text-slate-300">;
                    <MapPin className="w-4 h-4 text-cyan-400" />;
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
                      whileHover={{ "scale": "1.1", "y": "-2 "}}
                      whileTap={{ "scale": "0.95 "}}
                      className={`p-2 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-slate-300 ${social.color} "hover": "bg-cyan-400/10 "hover":border-cyan-400/40 transition-all duration-300`"}
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
                  initial={{ "opacity": "0", "y": "20 "}}
                  whileInView={{ "opacity": "1", "y": "0 "}}
                  transition={{ "duration": "0.5", "delay": "0.1 "}}
                  viewport={{ "once": "true "}}
                  className="text-lg font-semibold text-white mb-4";
                >;
                  {section.title}
                </motion.h3>;
                <motion.ul;
                  initial={{ "opacity": "0", "y": "20 "}}
                  whileInView={{ "opacity": "1", "y": "0 "}}
                  transition={{ "duration": "0.5", "delay": "0.2 "}}
                  viewport={{ "once": "true "}}
                  className="space-y-2";
                >;
                  {section.items.map((item, index) => (;
                    <motion.li;
                      key={index}
                      initial={{ "opacity": "0", "x": "-20 "}}
                      whileInView={{ "opacity": "1", "x": "0 "}}
                      transition={{ "duration": "0.3", "delay": "index * 0.05 "}}
                      viewport={{ "once": "true "}}
                    >;
                      <Link;
                        to={item.href}
                        className="text-slate-300 "hover": "text-cyan-400 transition-colors duration-300 text-sm flex items-center space-x-2 group";
                      >;
                        <item.icon className="w-3 h-3 text-cyan-400 group-"hover":scale-110 transition-transform duration-300" />;
                        <span>{item.name"}</span>;
                      </Link>;
                    </motion.li>;
                  ))}
                </motion.ul>;
              </div>;
            ))}
          </div>;
        </div>;
        {/* Bottom Footer */}
        <div className="border-t border-cyan-400/20">;
          <div className="container mx-auto px-4 "sm": "px-6 "lg":px-8 py-6">;
            <div className="flex flex-col "md":flex-row items-center justify-between space-y-4 "md":space-y-0">;
              <div className="text-slate-300 text-sm">;
                © {new Date().getFullYear()"} Zion Tech Group. All rights reserved.;
              </div>;
              ;
              <div className="flex items-center space-x-6 text-sm">;
                <Link to="/privacy" className="text-slate-300 "hover": "text-cyan-400 transition-colors duration-300">;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-slate-300 "hover":text-cyan-400 transition-colors duration-300">;
                  Terms of Service;
                </Link>;
                <Link to="/sitemap" className="text-slate-300 "hover":text-cyan-400 transition-colors duration-300">;
                  Sitemap;
                </Link>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Scroll to top button */"}
        <motion.button;
          onClick={scrollToTop}
          whileHover={{ "scale": "1.1 "}}
          whileTap={{ "scale": "0.9 "}}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-400/25 "hover": "shadow-xl "hover":shadow-cyan-400/40 transition-all duration-300 z-50";
        >;
          <ArrowUp className="w-5 h-5" />;
        </motion.button>;
      </div>;
    </footer>;
  );
"};
;
export { FuturisticFooter };
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>  const _stats = [']
    { value: '500+', label: 'Projects Completed', icon: CheckCircle },''
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },''
    { value: '24/7', label: 'Support Available', icon: Award },''
    { value: '50+', label: 'Expert Team', icon: Zap }'];
  ];

  return (')
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">"
</footer>"
      <div className="absolute inset-0 opacity-30">"
</div>"
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>""
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>""
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>""
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>"
      </div>
"
      <div className="relative">"
</div>"
        <div className="container mx-auto px-4 py-16">"
</div>
          <motion.div;"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16""
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.6, staggerChildren: 0.1 }};
          >
</motion>
              <motion.div;
                key={stat.label}"
                className="text-center""
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
              >
</motion>"
                <div className="flex justify-center mb-3">"
</div>"
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">"
</div>"
                    <stat.icon className="w-6 h-6 text-cyan-400" />"
</stat>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                      ZION TECH GROUP
                    <p className="text-sm text-slate-300">Innovation • Intelligence • Impact</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Leading the future of technology with cutting-edge AI services, innovative solutions, 
                  and comprehensive IT services. Empowering businesses to thrive in the digital age.
                </p>          {/* Main Footer Content */}"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">"
</div>"
            <div className="lg:col-span-2">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }}"
                className="flex items-center space-x-3 mb-6""
              >
</motion>"
                <div className="relative">"
</div>"
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">"
</div>"
                    <Zap className="w-6 h-6 text-white" />"
</Zap>
                  </div>"
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>"
                </div>
                <div>
</div>"
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>""
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>"
                </div>
              </motion.div>
              "
              <p className="text-slate-300 mb-6 leading-relaxed">"
</p>
              </p>
              "
              <div className="space-y-3">"
</div>"
                <div className="flex items-center space-x-3 text-slate-300">"
</div>"
                  <Phone className="w-4 h-4 text-cyan-400" />"
</Phone>"
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">"
</a>
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-slate-300">"
</div>"
                  <Mail className="w-4 h-4 text-cyan-400" />"
</Mail>"
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">"
</a>
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-slate-300">"
</div>"
                  <MapPin className="w-4 h-4 text-cyan-400" />"
</MapPin>
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
              <div key={section.title}>
</div>"
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">"
</h4>"
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>"
                </h4>"
                <ul className="space-y-3">"
</ul>
                    <li key={link.name}>
</li>
                      <Link;
                        href={link.href}"
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 group""
                      >
</Link>"
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-200"></div>""
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />"
</ArrowRight>
                      </Link>
                    </li>
                </ul>
              </div>
          </div>"
          <div className="pt-8 border-t border-slate-800/50">"
</div>"
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
</div>"
              <div className="text-slate-400 text-sm">"
</div>
              </div>"
              <div className="flex items-center space-x-6 text-sm text-slate-400">"
</div>"
                <span className="flex items-center">"
</span>"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"
</CheckCircle>
                </span>"
                <span className="flex items-center">"
</span>"
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />"
</Shield>
                </span>"
                <span className="flex items-center">"
</span>"
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />"
</Award>
                </span>

