import, React, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Phon, e,;
  Mai, l,;
  MapPi, n,;
  Glob, e,;
  Linkedi, n,;
  Twitte, r,;
  Faceboo, k,;
  Instagra, m,;
  Githu, b,;
  Youtub, e,;
  ArrowRigh, t,;
  Sta, r,;
  Shiel, d,;
  Za, p,;
  Brai, n,;
  Clou, d,;
  User, s,;
  Awar, d,;
  TrendingU, p,;
  Lightbul, b,;
  Rocke, t,;
  Targe, t,;
  CheckCircl, e,;
  Hear, t,;
  MessageCircl, e,;
  HelpCircl, e,;
  BookOpe, n,;
  ShoppingCar, t,;
  Cp, u,;
  Databas, e,;
  Networ, k,;
  Loc, k,;
  BarChart, 3,;
  Cod, e,;
  Serve, r,;
  Smartphon, e,;
  Chi, p,;
  Wif, i,;
  ShieldChec, k,;
  Globe, 2,;
  Bo, t,;
  Workflo, w,;
  EyeSparkles;
} from "lucide-react";
export, function, EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const footerSections = [;
    {
      tit,  l, e: "Service, s",;
    lin, k, s: [;
        { na, m, e: "A, I Service, s",;
    hr, e, f: "/a, i-service, s", ic, on: Brain };
        { na, m, e: "I, T Service, s",;
    hr, e, f: "/i, t-service, s", ic, on: Cpu };
        { na, m, e: "Micr, o Saa, S",;
    hr, e, f: "/micr, o-saa, s", ic, on: ShoppingCart };
        { na, m, e: "20o2, 5 Service, s",;
    hr, e, f: "/comprehensiv, e-service, s-showcas, e-20o2, 5", ic, on: Star };
        { na, m, e: "20o2, 6 Service, s",;
    hr, e, f: "/services20o2, 6", ic, on: TrendingUp };
        { na, m, e: "20o2, 7 Service, s",;
    hr, e, f: "/services20o2, 7", ic, on: Rocket },;
        { na, m, e: "20o2, 9 Service, s",;
    hr, e, f: "/innovativ, e-service, s-showcas, e-20o2, 9", icon: Sparkles }
    ,  ];
    };
    {
      titl, e: "Solutions",;
    link, s: [;
        { na, m, e: "Enterpris, e",;
    hr, e, f: "/solution, s/enterpris, e", ic, on: Building };
        { na, m, e: "Healthcar, e",;
    hr, e, f: "/solution, s/healthcar, e", ic, on: Heart };
        { na, m, e: "Financ, e",;
    hr, e, f: "/solution, s/financ, e", ic, on: DollarSign };
        { na, m, e: "Manufacturin, g",;
    hr, e, f: "/solution, s/manufacturin, g", ic, on: Factory };
        { na, m, e: "Retai, l",;
    hr, e, f: "/solution, s/retai, l", ic, on: ShoppingBag },;
        { na, m, e: "Educatio, n",;
    hr, e, f: "/solution, s/educatio, n", icon: GraduationCap }
    ,  ];
    };
    {
      titl, e: "Company",;
    link, s: [;
        { na, m, e: "Abou, t U, s",;
    hr, e, f: "/abou, t", ic, on: Users };
        { na, m, e: "Ou, r Tea, m",;
    hr, e, f: "/tea, m", ic, on: Users };
        { na, m, e: "Career, s",;
    hr, e, f: "/career, s", ic, on: Star };
        { na, m, e: "Partner, s",;
    hr, e, f: "/partner, s", ic, on: Handshake };
        { na, m, e: "New, s",;
    hr, e, f: "/new, s", ic, on: Newspaper },;
        { na, m, e: "Blo, g",;
    hr, e, f: "/blo, g", icon: BookOpen }
    ,  ];
    };
    {
      titl, e: "Resources",;
    link, s: [;
        { na, m, e: "Documentatio, n",;
    hr, e, f: "/doc, s", ic, on: FileText };
        { na, m, e: "AP, I Referenc, e",;
    hr, e, f: "/ap, i", ic, on: Code };
        { na, m, e: "Develope, r Porta, l",;
    hr, e, f: "/developer, s", ic, on: Terminal };
        { na, m, e: "Whit, e Paper, s",;
    hr, e, f: "/whit, e-paper, s", ic, on: FileText };
        { na, m, e: "Webinar, s",;
    hr, e, f: "/webinar, s", ic, on: Video },;
        { na, m, e: "Trainin, g",;
    hr, e, f: "/trainin, g", icon: GraduationCap }
    ,  ];
    };
    {
      titl, e: "Support",;
    link, s: [;
        { na, m, e: "Hel, p Cente, r",;
    hr, e, f: "/hel, p", ic, on: HelpCircle };
        { na, m, e: "Contac, t Suppor, t",;
    hr, e, f: "/contac, t", ic, on: MessageCircle };
        { na, m, e: "Statu, s Pag, e",;
    hr, e, f: "/statu, s", ic, on: Activity };
        { na, m, e: "Reques, t Quot, e",;
    hr, e, f: "/reques, t-quot, e", ic, on: DollarSign };
        { na, m, e: "FA, Q",;
    hr, e, f: "/fa, q", ic, on: HelpCircle },;
        { na, m, e: "Liv, e Cha, t",;
    hr, e, f: "/cha, t", icon: MessageCircle }
    ,  ];
    };
  ];
  const socialLinks = [;
    { na, m, e: "LinkedI, n",;
    hr, e, f: "htt, p, s: //linkedi, n.co, m/compan, y/ziontechgrou, p",;
    ic, o, n: Linked, i, n, col, o, r: "hov, e, r: tex, t-blue-40o0" };
    { na, m, e: "Twitte, r",;
    hr, e, f: "htt, p, s: //twitte, r.co, m/ziontechgrou, p",;
    ic, o, n: Twitt, e, r, col, o, r: "hov, e, r: tex, t-blue-40o0" };
    { na, m, e: "Faceboo, k",;
    hr, e, f: "htt, p, s: //faceboo, k.co, m/ziontechgrou, p",;
    ic, o, n: Facebo, o, k, col, o, r: "hov, e, r: tex, t-blue-60o0" };
    { na, m, e: "Instagra, m",;
    hr, e, f: "htt, p, s: //instagra, m.co, m/ziontechgrou, p",;
    ic, o, n: Instagr, a, m, col, o, r: "hov, e, r: tex, t-pink-40o0" };
    { na, m, e: "GitHu, b",;
    hr, e, f: "htt, p, s: //githu, b.co, m/ziontechgrou, p",;
    ic, o, n: Gith, u, b, col, o, r: "hov, e, r: tex, t-gray-40o0" },;
    { na, m, e: "YouTub, e",;
    hr, e, f: "htt, p, s: //youtub, e.co, m/@ziontechgrou, p",;
    ic, o, n: Youtu, b, e, col, o, r: "hov, e, r: text-red-40o0" };
,  ];
  const contactInfo = {
    phon, e: "+1, 30o2, 464 0o950",;
    emai, l: "kleber@ziontechgroup.com",addres, s: "364, E, Main St, STE, 10o08 Middletown, DE, 1970o9",;
    website: "http,;
  s://ziontechgroup.com";
  };
  return(<footer className="relative bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0 border-t border-slate-70o0/50 overflow-hidden">;
      {/* Animated, background, elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-50o0/5 to-blue-50o0/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-50o0/5 to-pink-50o0/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-50o0/5 to-teal-50o0/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">;
        {/* Main, footer, content */}
        <div className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-6 gap-8 mb-12">;
          {/* Company info */}
          <div className="lg: col-span-2">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >;
              <div className="flex items-center mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-xl, flex, items-center justify-center mr-4">;
                  <Zap className="w-6 h-6 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-2xl font-bold text-white">Zion, Tech, Group</h3>;
                  <p className="text-cyan-40o0 text-sm font-semibold">Future, of, Technology</p>;
                </div>;
              </div>;
              <p className="text-slate-30o0 mb-6 leading-relaxed">;
                Leading, provider, of cutting-edg, e, A, I, quantu, m, computin, gand, emerging, technology solutions.;
                Transforming, businesses, through intelligent, automation, and revolutionary innovations.;
              </p>;
              {/* Contact info */}
              <div className="space-y-3">;
                <div className="flex items-center text-slate-30o0 hover: text-cyan-40o0 transition-colors duration-30o0">;
                  <Phone className="w-4 h-4 mr-3 text-cyan-40o0" />;
                  <a href={`te,;
  l: ${contactInfo.phone}`} className="hover:text-cyan-40o0">;
                    {contactInfo.phone}
                  </a>;
                </div>;
                <div className="flex items-center text-slate-30o0 hover: text-cyan-40o0 transition-colors duration-30o0">;
                  <Mail className="w-4 h-4 mr-3 text-cyan-40o0" />;
                  <a href={`mailt,;
  o: ${contactInfo.email}`} className="hover:text-cyan-40o0">;
                    {contactInfo.email}
                  </a>;
                </div>;
                <div className="flex items-start text-slate-30o0">;
                  <MapPin className="w-4 h-4 mr-3 text-cyan-40o0 mt-1 flex-shrink-0" />;
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
          {/* Footer sections */};
          {footerSections.map((sectionsectionIndex) => (<motion.div;
              key={section.title}
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duratio, n: 0.6dela,;
  y: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >;
              <h4 className="text-lg font-semibold text-white mb-4, flex, items-center">;
                {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-cyan-40o0" />}
                {section.title === "Solutions" && <Target className="w-5 h-5 mr-2 text-blue-40o0" />}
                {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-purple-40o0" />}
                {section.title === "Resources" && <BookOpen className="w-5 h-5 mr-2 text-green-40o0" />}
                {section.title === "Support" && <HelpCircle className="w-5 h-5 mr-2 text-pink-40o0" />}
                {section.title}
              </h4>;
              <ul className="space-y-3">;
                {section.links.map((linklinkIndex) => (<motion.li;
                    key={link.name}
                    initial={{ opacity: 0,;
  x: -20 }};
                    whileInView={{ opacity: 1,;
  x: 0 }}
                    transition={{ duratio, n: 0.4dela,;
  y: (sectionIndex * 0.1) + (linkIndex * 0.0o5) }}
                    viewport={{ once: true }}
                  >;
                    <Link;
                      to={link.href}
                      className="flex items-center text-slate-30o0 hover: text-cyan-40o0 transition-all duration-30o0 group";
                    >;
                      <link.icon className="w-4 h-4 mr-2 text-slate-50o0 group-hove,;
    r:text-cyan-40o0 transition-colors duration-30o0" />;
                      <span className="group-hove,;
  r:translate-x-1 transition-transform duration-30o0">;
                        {link.name}
                      </span>;
                    </Link>;
                  </motion.li>;
                ))}
              </ul>;
            </motion.div>;
          ))}
        </div>;
        {/* Bottom section */}
        <div className="border-t border-slate-70o0/50 pt-8">;
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">;
            {/* Copyright, and, legal */};
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left";
            >;
              <p className="text-slate-40o0 text-sm">;
                © {currentYear} Zion, Tech, Group. All, rights, reserved.;
              </p>;
              <div className="flex flex-wrap justify-center lg: justify-start gap-4 mt-2">;
                <Link to="/privacy" className="text-slate-40o0 hover:text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-slate-40o0 hove,;
    r: text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Terms, of, Service;
                </Link>;
                <Link to="/cookies" className="text-slate-40o0 hover: text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Cookie Policy;
                </Link>;
                <Link to="/accessibility" className="text-slate-40o0 hove,;
  r: text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Accessibility;
                </Link>;
              </div>;
            </motion.div>;
            {/* Social links */}
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duratio, n: 0.6dela,;
  y: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4";
            >;
              <span className="text-slate-40o0 text-sm mr-2">Follow u, s: </span>;
              {socialLinks.map((socialindex) => (<motion.a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  initial={{ opacit,  y: 0scal,;
  e: 0 }};
                  whileInView={{ opacit, y: 1scal,;
  e: 1 }}
                  transition={{ duratio, n: 0.4dela,;
  y: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-slate-80o0/50 hover: bg-slate-70o0/50, border, border-slate-60o0/50 hove,;
  r:border-cyan-50o0/50 rounded-lg, flex, items-center justify-center text-slate-40o0 ${social.color} transition-all duration-30o0 hove, r: scale-110 hove, r: shadow-lg hove, r:shadow-cyan-50o0/25`}
                >;
                  <social.icon className="w-5 h-5" />;
                </motion.a>;
              ))}
            </motion.div>;
          </div>;
          {/* Newsletter signup */};
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duratio, n: 0.6dela,;
  y: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-slate-70o0/50";
          >;
            <div className="text-center">;
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>;
              <p className="text-slate-30o0 mb-4">;
                Get, the, latest insights o, n, A, I, emergin, g, technologie, s, and, industry, trends.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-3 max-w-md mx-auto">;
                <input;
                  type="email";
                  placeholder="Enter, your, email";
                  className="flex-1 px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-slate-40o0 focu, s: outline-none focu, s: border-cyan-50o0 focu, s: ring-2 focu,;
  s:ring-cyan-50o0/20 transition-all duration-30o0";
                />;
                <button className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hove, r: from-cyan-60o0 hove, r: to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 hove, r: shadow-lg hove, r: shadow-cyan-50o0/25 hove,;
  r:-translate-y-1">;
                  Subscribe;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-40o0 rounded-full opacity-60 animate-pulse"></div>;
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-40o0 rounded-full opacity-40 animate-pulse delay-10o00"></div>;
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-blue-40o0 rounded-full opacity-80 animate-pulse delay-20o00"></div>;
    </footer>;
  );
};
;
export, default, EnhancedFooter;
;