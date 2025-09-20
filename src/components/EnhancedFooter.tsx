import React from "react";
impor, t, Reac, t, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Pho, n, e,;
  Ma, i, l,;
  MapP, i, n,;
  Glo, b, e,;
  Linked, i, n,;
  Twitt, e, r,;
  Facebo, o, k,;
  Instagr, a, m,;
  Gith, u, b,;
  Youtu, b, e,;
  ArrowRig, h, t,;
  St, a, r,;
  Shie, l, d,;
  Z, a, p,;
  Bra, i, n,;
  Clo, u, d,;
  Use, r, s,;
  Awa, r, d,;
  Trending, U, p,;
  Lightbu, l, b,;
  Rock, e, t,;
  Targ, e, t,;
  CheckCirc, l, e,;
  Hea, r, t,;
  MessageCirc, l, e,;
  HelpCirc, l, e,;
  BookOp, e, n,;
  ShoppingCa, r, t,;
  C, p, u,;
  Databa, s, e,;
  Netwo, r, k,;
  Lo, c, k,;
  BarChar, t, 3,;
  Co, d, e,;
  Serv, e, r,;
  Smartpho, n, e,;
  Ch, i, p,;
  Wi, f, i,;
  ShieldChe, c, k,;
  Glob, e, 2,;
  B, o, t,;
  Workfl, o, w,;
  EyeSparkles;
} from "lucide-react";
expor, t, functio, n, EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const footerSections = [;
    {
      t,  i, t,  l, e: "Servi, c, e, s",;
    l, i, n, k, s: [;
        { n, a, m, e: "A, I, Servi, c, e, s",;
    h, r, e, f: "/a, i-servi, c, e, s", i, c, o, n: Brai, n };
        { n, a, m, e: "I, T, Servi, c, e, s",;
    h, r, e, f: "/i, t-servi, c, e, s", i, c, o, n: Cp, u };
        { n, a, m, e: "Mi, c, r, o, S, a, a, S",;
    h, r, e, f: "/mi, c, r, o-s, a, a, s", i, c, o, n: ShoppingCar, t };
        { n, a, m, e: "20, o, 2, 5, Servi, c, e, s",;
    h, r, e, f: "/comprehens, i, v, e-servi, c, e, s-showc, a, s, e-20, o, 2, 5", i, c, o, n: Sta, r };
        { n, a, m, e: "20, o, 2, 6, Servi, c, e, s",;
    h, r, e, f: "/services20, o, 2, 6", i, c, o, n: TrendingU, p };
        { n, a, m, e: "20, o, 2, 7, Servi, c, e, s",;
    h, r, e, f: "/services20, o, 2, 7", i, c, o, n: Rocke, t },;
        { n, a, m, e: "20, o, 2, 9, Servi, c, e, s",;
    h, r, e, f: "/innovat, i, v, e-servi, c, e, s-showc, a, s, e-20, o, 2, 9", ic, o, n: Sparkle, s }
    ,  ];
    };
    {
      tit, l, e: "Solutions",;
    lin, k, s: [;
        { n, a, m, e: "Enterpr, i, s, e",;
    h, r, e, f: "/soluti, o, n, s/enterpr, i, s, e", i, c, o, n: Buildin, g };
        { n, a, m, e: "Healthc, a, r, e",;
    h, r, e, f: "/soluti, o, n, s/healthc, a, r, e", i, c, o, n: Hear, t };
        { n, a, m, e: "Fina, n, c, e",;
    h, r, e, f: "/soluti, o, n, s/fina, n, c, e", i, c, o, n: DollarSig, n };
        { n, a, m, e: "Manufactur, i, n, g",;
    h, r, e, f: "/soluti, o, n, s/manufactur, i, n, g", i, c, o, n: Factor, y };
        { n, a, m, e: "Ret, a, i, l",;
    h, r, e, f: "/soluti, o, n, s/ret, a, i, l", i, c, o, n: ShoppingBa, g },;
        { n, a, m, e: "Educat, i, o, n",;
    h, r, e, f: "/soluti, o, n, s/educat, i, o, n", ic, o, n: GraduationCa, p }
    ,  ];
    };
    {
      tit, l, e: "Company",;
    lin, k, s: [;
        { n, a, m, e: "Ab, o, u, t, U, s",;
    h, r, e, f: "/ab, o, u, t", i, c, o, n: User, s };
        { n, a, m, e: "O, u, r, T, e, a, m",;
    h, r, e, f: "/t, e, a, m", i, c, o, n: User, s };
        { n, a, m, e: "Care, e, r, s",;
    h, r, e, f: "/care, e, r, s", i, c, o, n: Sta, r };
        { n, a, m, e: "Partn, e, r, s",;
    h, r, e, f: "/partn, e, r, s", i, c, o, n: Handshak, e };
        { n, a, m, e: "N, e, w, s",;
    h, r, e, f: "/n, e, w, s", i, c, o, n: Newspape, r },;
        { n, a, m, e: "B, l, o, g",;
    h, r, e, f: "/b, l, o, g", ic, o, n: BookOpe, n }
    ,  ];
    };
    {
      tit, l, e: "Resources",;
    lin, k, s: [;
        { n, a, m, e: "Documentat, i, o, n",;
    h, r, e, f: "/d, o, c, s", i, c, o, n: FileTex, t };
        { n, a, m, e: "A, P, I, Refere, n, c, e",;
    h, r, e, f: "/a, p, i", i, c, o, n: Cod, e };
        { n, a, m, e: "Develo, p, e, r, Por, t, a, l",;
    h, r, e, f: "/develop, e, r, s", i, c, o, n: Termina, l };
        { n, a, m, e: "Wh, i, t, e, Pap, e, r, s",;
    h, r, e, f: "/wh, i, t, e-pap, e, r, s", i, c, o, n: FileTex, t };
        { n, a, m, e: "Webin, a, r, s",;
    h, r, e, f: "/webin, a, r, s", i, c, o, n: Vide, o },;
        { n, a, m, e: "Train, i, n, g",;
    h, r, e, f: "/train, i, n, g", ic, o, n: GraduationCa, p }
    ,  ];
    };
    {
      tit, l, e: "Support",;
    lin, k, s: [;
        { n, a, m, e: "H, e, l, p, Cen, t, e, r",;
    h, r, e, f: "/h, e, l, p", i, c, o, n: HelpCircl, e };
        { n, a, m, e: "Cont, a, c, t, Supp, o, r, t",;
    h, r, e, f: "/cont, a, c, t", i, c, o, n: MessageCircl, e };
        { n, a, m, e: "Sta, t, u, s, P, a, g, e",;
    h, r, e, f: "/sta, t, u, s", i, c, o, n: Activit, y };
        { n, a, m, e: "Requ, e, s, t, Qu, o, t, e",;
    h, r, e, f: "/requ, e, s, t-qu, o, t, e", i, c, o, n: DollarSig, n };
        { n, a, m, e: "F, A, Q",;
    h, r, e, f: "/f, a, q", i, c, o, n: HelpCircl, e },;
        { n, a, m, e: "L, i, v, e, C, h, a, t",;
    h, r, e, f: "/c, h, a, t", ic, o, n: MessageCircl, e }
    ,  ];
    };
  ];
  const socialLinks = [;
    { n, a, m, e: "Linke, d, I, n",;
    h, r, e, f: "h, t, t, p, s: //linke, d, i, n.c, o, m/comp, a, n, y/ziontechgr, o, u, p",;
    i, c, o, n: Link, e, d, i, n, c, o, l, o, r: "h, o, v, e, r: t, e, x, t-blu, e-40o, 0" };
    { n, a, m, e: "Twit, t, e, r",;
    h, r, e, f: "h, t, t, p, s: //twit, t, e, r.c, o, m/ziontechgr, o, u, p",;
    i, c, o, n: Twi, t, t, e, r, c, o, l, o, r: "h, o, v, e, r: t, e, x, t-blu, e-40o, 0" };
    { n, a, m, e: "Faceb, o, o, k",;
    h, r, e, f: "h, t, t, p, s: //faceb, o, o, k.c, o, m/ziontechgr, o, u, p",;
    i, c, o, n: Face, b, o, o, k, c, o, l, o, r: "h, o, v, e, r: t, e, x, t-blu, e-60o, 0" };
    { n, a, m, e: "Instag, r, a, m",;
    h, r, e, f: "h, t, t, p, s: //instag, r, a, m.c, o, m/ziontechgr, o, u, p",;
    i, c, o, n: Insta, g, r, a, m, c, o, l, o, r: "h, o, v, e, r: t, e, x, t-pin, k-40o, 0" };
    { n, a, m, e: "Git, H, u, b",;
    h, r, e, f: "h, t, t, p, s: //git, h, u, b.c, o, m/ziontechgr, o, u, p",;
    i, c, o, n: Gi, t, h, u, b, c, o, l, o, r: "h, o, v, e, r: t, e, x, t-gra, y-40o, 0" },;
    { n, a, m, e: "YouT, u, b, e",;
    h, r, e, f: "h, t, t, p, s: //yout, u, b, e.c, o, m/@ziontechgr, o, u, p",;
    i, c, o, n: You, t, u, b, e, c, o, l, o, r: "h, o, v, e, r: tex, t-re, d-40o, 0" };
,  ];
  const contactInfo = {
    pho, n, e: "+1, 30o, 2, 464 0o950",;
    ema, i, l: "kleber@ziontechgroup.com",addre, s, s: "36, 4, E, Mai, n, S, t, ST, E, 10o0, 8, Middletow, n, D, E, 1970o9",;
    websit, e: "htt, p,;
  s://ziontechgroup.com";
  };
  return(<footer className="relative bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0 border-t border-slate-70o0/50 overflow-hidden">;
      {/* Animate, d, backgroun, d, elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-50o0/5 to-blue-50o0/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-50o0/5 to-pink-50o0/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-50o0/5 to-teal-50o0/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">;
        {/* Mai, n, foote, r, content */}
        <div className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-6 gap-8 mb-12">;
          {/* Company info */}
          <div className="l, g: col-span-2">;
            <motion.div;
              initial={{ opaci, t,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacit, y: 1,;
  y: 0 }}
              transition={{ duratio, n: 0.6 }}
              viewport={{ onc, e: true }}
            >;
              <div className="flex items-center mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-x, l, fle, x, items-center justify-center mr-4">;
                  <Zap className="w-6 h-6 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-2xl font-bold text-white">Zio, n, Tec, h, Group</h3>;
                  <p className="text-cyan-40o0 text-sm font-semibold">Futur, e, o, f, Technology</p>;
                </div>;
              </div>;
              <p className="text-slate-30o0 mb-6 leading-relaxed">;
                Leadin, g, provide, r, of cutting-ed, g, e, A, I, quant, u, m, computi, n, gan, d, emergin, g, technology solutions.;
                Transformin, g, businesse, s, throug, h, intelligen, t, automatio, n, and revolutionary innovations.;
              </p>;
              {/* Contact info */}
              <div className="space-y-3">;
                <div className="flex items-center text-slate-30o0 hove, r: text-cyan-40o0 transition-colors duration-30o0">;
                  <Phone className="w-4 h-4 mr-3 text-cyan-40o0" />;
                  <a href={`t, e,;
  l: ${contactInfo.phon, e}`} className="hove, r:text-cyan-40o0">;
                    {contactInfo.phone}
                  </a>;
                </div>;
                <div className="flex items-center text-slate-30o0 hove, r: text-cyan-40o0 transition-colors duration-30o0">;
                  <Mail className="w-4 h-4 mr-3 text-cyan-40o0" />;
                  <a href={`mail, t,;
  o: ${contactInfo.emai, l}`} className="hove, r:text-cyan-40o0">;
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
              initial={{ opacit,  y: 0,;
  y: 20 }};
              whileInView={{ opacit, y: 1,;
  y: 0 }}
              transition={{ durati, o, n: 0.6del, a,;
  y: sectionIndex * 0.1 }}
              viewport={{ onc, e: true }}
            >;
              <h4 className="text-lg font-semibold text-white mb-4, fle, x, items-center">;
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
                    initial={{ opacit,  y: 0,;
  x: -20 }};
                    whileInView={{ opacit, y: 1,;
  x: 0 }}
                    transition={{ durati, o, n: 0.4del, a,;
  y: (sectionIndex * 0.1) + (linkIndex * 0.0o5) }}
                    viewport={{ onc,  e: true }}
                  >;
                    <Link;
                      to={link.href}
                      className="flex items-center text-slate-30o0 hove, r: text-cyan-40o0 transition-all duration-30o0 group";
                    >;
                      <link.icon className="w-4 h-4 mr-2 text-slate-50o0 group-hov, e,;
    r:text-cyan-40o0 transition-colors duration-30o0" />;
                      <span className="group-hov, e,;
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
          <div className="flex flex-col l, g:flex-row items-center justify-between gap-6">;
            {/* Copyrigh, t, an, d, legal */};
            <motion.div;
              initial={{ opacit, y: 0,;
  y: 20 }};
              whileInView={{ opacit, y: 1,;
  y: 0 }}
              transition={{ duratio, n: 0.6 }}
              viewport={{ onc, e: true }}
              className="text-center l, g:text-left";
            >;
              <p className="text-slate-40o0 text-sm">;
                © {currentYear} Zio, n, Tec, h, Group. Al, l, right, s, reserved.;
              </p>;
              <div className="flex flex-wrap justify-center l, g: justify-start gap-4 mt-2">;
                <Link to="/privacy" className="text-slate-40o0 hove, r:text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Privacy Policy;
                </Link>;
                <Link to="/terms" className="text-slate-40o, 0, hov, e,;
    r: text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Term, s, o, f, Service;
                </Link>;
                <Link to="/cookies" className="text-slate-40o0 hove, r: text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Cookie Policy;
                </Link>;
                <Link to="/accessibility" className="text-slate-40o, 0, hov, e,;
  r: text-cyan-40o0 text-sm transition-colors duration-30o0">;
                  Accessibility;
                </Link>;
              </div>;
            </motion.div>;
            {/* Social links */}
            <motion.div;
              initial={{ opacit, y: 0,;
  y: 20 }};
              whileInView={{ opacit, y: 1,;
  y: 0 }}
              transition={{ durati, o, n: 0.6del, a,;
  y: 0.2 }}
              viewport={{ onc, e: true }}
              className="flex items-center space-x-4";
            >;
              <span className="text-slate-40o0 text-sm mr-2">Follo, w, u, s: </span>;
              {socialLinks.map((socialindex) => (<motion.a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  initial={{ opaci,  t,  y: 0sca, l,;
  e: 0 }};
                  whileInView={{ opaci, t, y: 1sca, l,;
  e: 1 }}
                  transition={{ durati, o, n: 0.4del, a,;
  y: 0.3 + (index * 0.1) }}
                  viewport={{ onc, e: true }}
                  className={`w-10 h-10 bg-slate-80o0/50 hove, r: bg-slate-70o0/5, 0, borde, r, border-slate-60o0/5, 0, hov, e,;
  r:border-cyan-50o0/50 rounded-l, g, fle, x, items-center justify-center text-slate-40o0 ${social.color} transition-all duration-30o, 0, hov, e, r: scale-11, 0, hov, e,
    r: shadow-l, g, hov, e, r:shadow-cyan-50o0/2, 5`}
                >;
                  <social.icon className="w-5 h-5" />;
                </motion.a>;
              ))}
            </motion.div>;
          </div>;
          {/* Newsletter signup */};
          <motion.div;
            initial={{ opacit, y: 0,;
  y: 20 }};
            whileInView={{ opacit, y: 1,;
  y: 0 }}
            transition={{ durati, o, n: 0.6del, a,;
  y: 0.4 }}
            viewport={{ onc, e: true }}
            className="mt-8 pt-8 border-t border-slate-70o0/50";
          >;
            <div className="text-center">;
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>;
              <p className="text-slate-30o0 mb-4">;
                Ge, t, th, e, latest insight, s, o, n, A, I, emergi, n, g, technologi, e, s, an, d, industr, y, trends.;
              </p>;
              <div className="flex flex-col s, m: flex-row gap-3 max-w-md mx-auto">;
                <input;
                  type="email";
                  placeholder="Ente, r, you, r, email";
                  className="flex-1 px-4 py-3 bg-slate-80o0/5, 0, borde, r, border-slate-60o0/50 rounded-lg text-white placeholder-slate-40o, 0, foc, u, s: outline-non, e, foc, u,
    s: border-cyan-50o, 0, foc, u, s: ring-2, foc, u,;
  s:ring-cyan-50o0/20 transition-all duration-30o0";
                />;
                <button className="bg-gradient-to-r from-cyan-50o0 to-blue-50o, 0, hov, e, r: from-cyan-60o, 0, hov, e,
    r: to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30o, 0, hov, e, r: shadow-l, g, hov, e,
    r: shadow-cyan-50o0/2, 5, hov, e,;
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
expor, t, defaul, t, EnhancedFooter;
;