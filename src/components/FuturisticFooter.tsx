impor, t, Reac, t, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Pho, n, e,;
  Ma, i, l,;
  MapP, i, n,;
  Glo, b, e,;
  Linked, i, n,;
  Twitt, e, r,;
  Facebo, o, k,;
  Instagr, a, m,;
  Arrow, U, p,;
  Hea, r, t,;
  Shie, l, d,;
  Z, a, p,;
  Bra, i, n,;
  Clo, u, d,;
  Serv, e, r,;
  Rock, e, t,;
  Use, r, s,;
  Briefca, s, e,;
  FileTe, x, t,;
  HelpCirc, l, e,;
  MessageCircleZa, p, a, s, ZapIcon;
} from "lucide-react";
expor, t, cons, t, FuturisticFoot, e, r: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ t,  o,;
    p: 0behavi, o,;
  r: 'smooth' });
  },;
  const currentYear = new Date().getFullYear();
  const footerSections = [;
    {
      t,  i, t,  l, e: "Servi, c, e, s",;
    l, i, n, k, s: [;
        { n, a, m, e: "A, I & Mach, i, n, e, Learn, i, n, g",;
    h, r, e, f: "/a, i-service, s" };
        { n, a, m, e: "Mi, c, r, o, S, A, A, S, Soluti, o, n, s",;
    h, r, e, f: "/micr, o-saa, s" };
        { n, a, m, e: "I, T, Infrastruct, u, r, e",;
    h, r, e, f: "/i, t-service, s" };
        { n, a, m, e: "Emerg, i, n, g, Technolog, i, e, s",;
    h, r, e, f: "/emergin, g-tec, h" };
        { n, a, m, e: "Cybersecur, i, t, y",;
    h, r, e, f: "/i, t-service, s/cybersecurit, y" };
        { n, a, m, e: "Cl, o, u, d, Soluti, o, n, s",;
    h, r, e, f: "/i, t-service, s/clou, d" };
        { n, a, m, e: "Dev, O, p, s & Automat, i, o, n",;
    h, r, e, f: "/i, t-service, s/devop, s" },;
        { n, a, m, e: "D, a, t, a, Managem, e, n, t",;
    h, r, e, f: "/i, t-service, s/dat, a" }
    ,  ];
    };
    {
      tit, l, e: "Solutions",;
    lin, k, s: [;
        { n, a, m, e: "Quan, t, u, m, Comput, i, n, g",;
    h, r, e, f: "/emerg, i, n, g-tec, h/quantu, m" };
        { n, a, m, e: "Blockch, a, i, n & W, e, b, 3",;
    h, r, e, f: "/emerg, i, n, g-tec, h/blockchai, n" };
        { n, a, m, e: "E, d, g, e, Comput, i, n, g",;
    h, r, e, f: "/emerg, i, n, g-tec, h/edg, e" };
        { n, a, m, e: "I, o, T, Soluti, o, n, s",;
    h, r, e, f: "/emerg, i, n, g-tec, h/io, t" };
        { n, a, m, e: "Healthc, a, r, e, A, I",;
    h, r, e, f: "/a, i-service, s/healthcar, e" };
        { n, a, m, e: "Financ, i, a, l, A, I",;
    h, r, e, f: "/a, i-service, s/financia, l" };
        { n, a, m, e: "Gr, e, e, n, Technol, o, g, y",;
    h, r, e, f: "/gree, n-i, t" },;
        { n, a, m, e: "Sp, a, c, e, Technol, o, g, y",;
    h, r, e, f: "/emergin, g-tec, h/spac, e" }
    ,  ];
    };
    {
      tit, l, e: "Company",;
    lin, k, s: [;
        { n, a, m, e: "Ab, o, u, t, U, s",;
    h, r, e, f: "/abou, t" };
        { n, a, m, e: "O, u, r, T, e, a, m",;
    h, r, e, f: "/abou, t#tea, m" };
        { n, a, m, e: "Care, e, r, s",;
    h, r, e, f: "/career, s" };
        { n, a, m, e: "Partn, e, r, s",;
    h, r, e, f: "/partner, s" };
        { n, a, m, e: "N, e, w, s & B, l, o, g",;
    h, r, e, f: "/blo, g" };
        { n, a, m, e: "Pr, e, s, s, K, i, t",;
    h, r, e, f: "/pres, s" };
        { n, a, m, e: "Inves, t, o, r, Relati, o, n, s",;
    h, r, e, f: "/investor, s" },;
        { n, a, m, e: "Sustainabil, i, t, y",;
    hr, e, f: "/sustainabilit, y" }
    ,  ];
    };
    {
      tit, l, e: "Resources",;
    lin, k, s: [;
        { n, a, m, e: "Documentat, i, o, n",;
    h, r, e, f: "/doc, s" };
        { n, a, m, e: "A, P, I, Refere, n, c, e",;
    h, r, e, f: "/ap, i" };
        { n, a, m, e: "Develo, p, e, r, Por, t, a, l",;
    h, r, e, f: "/develope, r" };
        { n, a, m, e: "Supp, o, r, t, Cen, t, e, r",;
    h, r, e, f: "/suppor, t" };
        { n, a, m, e: "F, A, Q",;
    h, r, e, f: "/fa, q" };
        { n, a, m, e: "Cont, a, c, t, U, s",;
    h, r, e, f: "/contac, t" };
        { n, a, m, e: "C, a, s, e, Stud, i, e, s",;
    h, r, e, f: "/cas, e-studie, s" },;
        { n, a, m, e: "Marketpl, a, c, e",;
    hr, e, f: "/marketplac, e" }
    ,  ];
    };
  ];
  const socialLinks = [;
    { n, a, m, e: "Linke, d, I, n",;
    h, r, e, f: "h, t, t, p, s: //linke, d, i, n.c, o, m/comp, a, n, y/ziontechgr, o, u, p",;
    i, c, o, n: Linkedi, n };
    { n, a, m, e: "Twit, t, e, r",;
    h, r, e, f: "h, t, t, p, s: //twit, t, e, r.c, o, m/ziontechgr, o, u, p",;
    i, c, o, n: Twitte, r };
    { n, a, m, e: "Faceb, o, o, k",;
    h, r, e, f: "h, t, t, p, s: //faceb, o, o, k.c, o, m/ziontechgr, o, u, p",;
    i, c, o, n: Faceboo, k },;
    { n, a, m, e: "Instag, r, a, m",;
    h, r, e, f: "h, t, t, p, s: //instag, r, a, m.c, o, m/ziontechgr, o, u, p",;
    ic, o, n: Instagra, m };
,  ];
  return(<footer className="relative bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker border-t border-zion-cyan/20">;
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent" />;
      <div className="relative z-10">;
        {/* Mai, n, Foote, r, Content */}
        <div className="max-w-7xl mx-auto px-4, s, m: px-6, l,;
  g:px-8 py-16">;
          <div className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-6 gap-8">;
            {/* Company Info */}
            <div className="l, g: col-span-2">;
              <motion.div;
                initial={{ opaci, t,;
    y: 0,;
  y: 20 }};
                whileInView={{ opacit, y: 1,;
  y: 0 }}
                viewport={{ onc, e: true }}
                transition={{ duratio, n: 0.6 }}
              >;
                <div className="flex items-center space-x-3 mb-6">;
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-l, g, fle, x, items-center justify-center">;
                    <ZapIcon className="w-6 h-6 text-white" />;
                  </div>;
                  <span className="text-2xl font-bold text-white">ZIO, N, TEC, H, GROUP</span>;
                </div>;
                <p className="text-zion-slate-light mb-6 leading-relaxed">;
                  Leadin, g, th, e, futur, e, o, f, technolog, y, with cutting-edg, e, A, I, solutio, n, s, innovativ, e, micr, o, SA, A, S, platfor, m, sand next-generatio, n, I, T, infrastructur, e, tha, t, transform, s, businesse, s, an, d, drive, s, innovation.;
                </p>;
                {/* Contact Information */}
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3 text-zion-slate-light hove, r: text-zion-cyan transition-colors duration-30o0">;
                    <Phone className="w-4 h-4" />;
                    <a href="t, e,;
    l:+130o24640950" className="text-sm">+1, 30o, 2, 464 0o950</a>;
                  </div>;
                  <div className="flex items-center space-x-3 text-zion-slate-light hove, r: text-zion-cyan transition-colors duration-30o0">;
                    <Mail className="w-4 h-4" />;
                    <a href="mail, t,;
    o:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>;
                  </div>;
                  <div className="flex items-start space-x-3 text-zion-slate-light">;
                    <MapPin className="w-4 h-4 mt-0.5" />;
                    <address className="text-sm not-italic">;
                      36, 4, E, Mai, n, S, t, ST, E, 10o08<br />;
                      Middletow, n, D, E, 1970o9;
                    </address>;
                  </div>;
                  <div className="flex items-center space-x-3 text-zion-slate-light hove, r: text-zion-cyan transition-colors duration-30o0">;
                    <Globe className="w-4 h-4" />;
                    <a href="htt, p,;
  s://ziontechgroup.com" className="text-sm">ziontechgroup.com</a>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
            {/* Footer Links */}
            {footerSections.map((sectionindex) => (<div key={section.title}>;
                <motion.div;
                  initial={{ opacit,  y: 0,;
  y: 20 }};
                  whileInView={{ opacit, y: 1,;
  y: 0 }}
                  viewport={{ onc, e: true }}
                  transition={{ duratio, n: 0.6del, a,;
  y: index * 0.1 }}
                >;
                  <h3 className="text-lg font-semibold text-white mb-4, fle, x, items-center">;
                    {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title === "Solutions" && <Rocket className="w-5 h-5 mr-2 text-zion-purple" />}
                    {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-zion-blue" />}
                    {section.title === "Resources" && <FileText className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title}
                  </h3>;
                  <ul className="space-y-2">;
                    {section.links.map((link) => (<li key={link.name}>;
                        <Link;
                          to={link.href}
                          className="text-zion-slate-ligh,  t, hov, e,  r: text-zion-cyan transition-colors duration-30o0 text-s, m, hov, e,;
  r:translate-x-1 inline-block";
                        >;
                          {link.name}
                        </Link>;
                      </li>;
                    ))}
                  </ul>;
                </motion.div>;
              </div>;
            ))}
          </div>;
          {/* Additiona, l, Quic, k, Access Section */};
          <motion.div;
            initial={{ opacit, y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            viewport={{ onc, e: true }}
            transition={{ duratio, n: 0.6del, a,;
  y: 0.4 }}
            className="border-t border-zion-slate/30 mt-12 pt-8";
          >;
            <div className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-4 gap-8 mb-8">;
              <div>;
                <h3 className="text-lg font-semibold text-white mb-4, fle, x, items-center">;
                  <Zap className="w-5 h-5 mr-2 text-zion-cyan" />;
                  Quick Actions;
                </h3>;
                <ul className="space-y-2">;
                  <li>;
                    <Link;
                      to="/request-quote";
                      className="text-zion-slate-ligh, t, hov, e, r: text-zion-cyan transition-colors duration-30o0 text-s, m, hov, e,;
  r:translate-x-1 inline-block";
                    >;
                      Request Quote;
                    </Link>;
                  </li>;
                  <li>;
                    <Link;
                      to="/demo";
                      className="text-zion-slate-ligh, t, hov, e, r: text-zion-cyan transition-colors duration-30o0 text-s, m, hov, e,;
  r:translate-x-1 inline-block";
                    >;
                      Book Demo;
                    </Link>;
                  </li>;
                  <li>;
                    <Link;
                      to="/support";
                      className="text-zion-slate-ligh, t, hov, e, r: text-zion-cyan transition-colors duration-30o0 text-s, m, hov, e,;
  r:translate-x-1 inline-block";
                    >;
                      Get Support;
                    </Link>;
                  </li>;
                  <li>;
                    <Link;
                      to="/status";
                      className="text-zion-slate-ligh, t, hov, e, r: text-zion-cyan transition-colors duration-30o0 text-s, m, hov, e,;
  r:translate-x-1 inline-block";
                    >;
                      System Status;
                    </Link>;
                  </li>;
                </ul>;
              </div>;
            </div>;
          </motion.div>;
          {/* Bottom Section */}
          <motion.div;
            initial={{ opacit, y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            viewport={{ onc, e: true }}
            transition={{ duratio, n: 0.6del, a,;
  y: 0.5 }}
            className="border-t border-zion-slate/30 mt-12 pt-8";
          >;
            <div className="flex flex-co, l, l, g: flex-row items-center justify-between space-y-4, l,;
  g:space-y-0">;
              {/* Copyright */}
              <div className="text-zion-slate-light text-sm">;
                © {currentYear} ZIO, N, TEC, H, GROUP. Al, l, right, s, reserved.;
                <span className="ml-2, fle, x, items-center">;
                  Made with <Heart className="w-4 h-4 mx-1 text-red-40o0" /> for innovation;
                </span>;
              </div>;
              {/* Social Links */}
              <div className="flex items-center space-x-4">;
                {socialLinks.map((social) => (;
                  <a;
                    key={social.name}
                    href={social.href}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w-10 h-10 bg-zion-slate-dark/5,  0, borde, r, border-zion-slate/30 rounded-l, g, fle, x, items-center justify-center text-zion-slate-ligh, t, hov, e,  r: text-zion-cya, n, hov, e,
    r: border-zion-cyan/5, 0, hov, e,;
  r:bg-zion-cyan/10 transition-all duration-30o0";
                  >;
                    <social.icon className="w-5 h-5" />;
                  </a>;
                ))}
              </div>;
              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">;
                <Link to="/privacy" className="text-zion-slate-light hove, r: text-zion-cyan transition-colors duration-30o0">;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-zion-slate-ligh, t, hov, e,;
    r: text-zion-cyan transition-colors duration-30o0">;
                  Term, s, o, f, Service;
                </Link>;
                <Link to="/sitemap" className="text-zion-slate-ligh, t, hov, e,;
  r: text-zion-cyan transition-colors duration-30o0">;
                  Sitemap;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Scrol, l, t, o, Top Button */}
        <motion.button;
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg shadow-zion-cyan/2, 5, hov, e, r: shadow-x, l, hov, e,
    r: shadow-zion-cyan/40 transition-all duration-30o0 z-5, 0, fle, x, items-center justify-center group";
          whileHover={{ sca, l,;
  e: 1.1 }};
          whileTap={{ scal, e: 0.9 }}
        >;
          <ArrowUp className="w-6 h-6 group-hove, r:-translate-y-0.5 transition-transform duration-30o0" />;
        </motion.button>;
      </div>;
      {/* Botto, m, Borde, r, Glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" />;
    </footer>;
  );
};