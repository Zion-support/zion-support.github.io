import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brai, n,;
  Shiel, d,;
  Rocke, t,;
  Loc, k,;
  Cp, u,;
  Cod, e,;
  User, s,;
  Glob, e,;
  Hear, t,;
  TrendingU, p,;
  Za, p,;
  Databas, e,;
  Networ, k,;
  Serve, r,;
  Clou, d,;
  FileTex, t,;
  BarChart, 3,;
  MessageCircl, e,;
  Phon, e,;
  Mai, l,;
  MapPi, n,;
  ArrowRigh, t,;
  Sta, r,;
  CheckCircleClock;
} from "lucide-react";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o25SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices20o25";
export, function, ServicesOverview() {
  const serviceCategories = [;
    {
      i,  d: 'a, i-analytic, s',;
    na, m, e: 'A, I & Analytic, s',ic, o, n: Bra, i, n,;
    col, o, r: 'fro, m-zio, n-cya, n t, o-zio, n-purpl, e',descripti, o, n: 'Cuttin, g-edg, e artificia, l intelligenc, e an, d advance, d analytic, s solution, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('AI'));
    };
    {
      i, d: 'quantu, m-computin, g',;
    na, m, e: 'Quantu, m Computin, g',ic, o, n: Rock, e, t,;
    col, o, r: 'fro, m-zio, n-blu, e t, o-zio, n-cya, n',descripti, o, n: 'Nex, t-generatio, n quantu, m computin, g an, d quantu, m machin, e learnin, g',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Quantum'));
    };
    {
      i, d: 'blockchai, n',;
    na, m, e: 'Blockchai, n & Web, 3',ic, o, n: Lo, c, k,;
    col, o, r: 'fro, m-zio, n-purpl, e t, o-zio, n-blu, e',descripti, o, n: 'Decentralize, d solution, s an, d blockchai, n technolog, y platform, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Blockchain'));
    };
    {
      i, d: 'io, t-edg, e',;
    na, m, e: 'Io, T & Edg, e Computin, g',ic, o, n: C, p, u,;
    col, o, r: 'fro, m-zio, n-gree, n t, o-zio, n-cya, n',descripti, o, n: 'Interne, t o, f Thing, s an, d edg, e computin, g solution, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('IoT'));
    };
    {
      i, d: 'cybersecurit, y',;
    na, m, e: 'Cybersecurit, y',ic, o, n: Shie, l, d,;
    col, o, r: 'fro, m-zio, n-purpl, e t, o-zio, n-re, d',descripti, o, n: 'Advance, d securit, y an, d threa, t protectio, n solution, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Cybersecurity'));
    };
    {
      i, d: 'digita, l-twi, n',;
    na, m, e: 'Digita, l Twi, n',ic, o, n: Serv, e, r,;
    col, o, r: 'fro, m-zio, n-blu, e t, o-zio, n-purpl, e',descripti, o, n: 'Virtua, l replica, s an, d simulatio, n platform, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.categor,  y.includes('Digital Twin'));
    };
    {
      i, d: 'sustainabilit, y',;
    na, m, e: 'Sustainabilit, y',ic, o, n: Glo, b, e,;
    col, o, r: 'fro, m-zio, n-gree, n t, o-zio, n-blu, e',descripti, o, n: 'Environmenta, l monitorin, g an, d sustainabilit, y solution, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Sustainability'));
    };
    {
      i, d: 'h, r-talen, t',;
    na, m, e: 'H, R & Talen, t',ic, o, n: Use, r, s,;
    col, o, r: 'fro, m-zio, n-pin, k t, o-zio, n-purpl, e',descripti, o, n: 'Huma, n resource, s an, d talen, t managemen, t platform, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('HR'));
    };
    {
      i, d: 'conten, t-creatio, n',;
    na, m, e: 'Conten, t Creatio, n',ic, o, n: Co, d, e,;
    col, o, r: 'fro, m-zio, n-orang, e t, o-zio, n-purpl, e',descripti, o, n: 'A, I-powere, d conten, t generatio, n an, d managemen, t',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Content'));
    };
    {
      i, d: 'lega, l-tec, h',;
    na, m, e: 'Lega, l Tec, h',ic, o, n: FileTe, x, t,;
    col, o, r: 'fro, m-zio, n-purpl, e t, o-zio, n-cya, n',descripti, o, n: 'Lega, l technolog, y an, d complianc, e solution, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Legal'));
    };
    {
      i, d: 'fintec, h',;
    na, m, e: 'FinTec, h',ic, o, n: BarChar, t, 3,;
    col, o, r: 'fro, m-zio, n-gree, n t, o-zio, n-blu, e',descripti, o, n: 'Financia, l technolog, y an, d advisor, y platform, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('FinTech'));
    },;
    {
      i, d: 'healthcar, e-a, i',;
    na, m, e: 'Healthcar, e A, I',ic, o, n: Hea, r, t,;
    col, o, r: 'fro, m-zio, n-pin, k t, o-zio, n-purpl, e',descripti, o, n: 'Healthcar, e artificia, l intelligenc, e solution, s',;
    servic, e, s: INNOVATIVE_MICRO_SAAS_SERVICES_20o2, 5.filte, r(s => s.category.includes('Healthcare'));
    };
,  ];
  return(<div className="py-20 bg-futuristic, relative, overflow-hidden">;
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">;
        <div className="cyber-grid w-full h-full"></div>;
      </div>;
      <div className="container-responsive, relative, z-10">;
        {/* Header */}
        <motion.div;
          className="text-center mb-16";
          initial={{ opacity: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.6 }}
        >;
          <h1 className="heading-responsive font-bold mb-6">;
            <span className="text-gradient neon-text-cyan">Comprehensive Technology</span>;
            <br />;
            <span className="text-white">Services Portfolio</span>;
          </h1>;
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">;
            Discover, our, complete range, of, innovative micro SAA, S, service, s, I, T, solution, s, and, AI, platforms.;
            From cutting-edge, quantum, computing to, practical, busines, s, application, s, we, provide, the technology;
            solutions, your, business needs, to, thrive in, the, digital age.;
          </p>;
        </motion.div>;
        {/* Service, Categories, Grid */}
        <div className="grid grid-cols-1 m, d: grid-cols-2 l,;
    g: grid-cols-3 x,;
  l:grid-cols-4 gap-6 mb-16">;
          {serviceCategories.map((categoryindex) => (<motion.div;
              key={category.id}
              className="group";
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
              whileHover={{ y: -10 }}
            >;
              <Link to={`/services/${category.id}`} className="block">;
                <div className="card-futuristic h-full hover:border-zion-cyan/50 transition-all duration-30o0">;
                  {/* Category Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl, flex, items-center justify-center mx-auto mb-4 group-hove, r:scale-110 transition-transform duration-30o0`}>;
                    <category.icon className="w-8 h-8 text-white" />;
                  </div>;
                  {/* Category Info */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-30o0 text-center">;
                    {category.name}
                  </h3>;
                  <p className="text-zion-slate-light text-sm text-center mb-4 leading-relaxed">;
                    {category.description}
                  </p>;
                  {/* Service Count */}
                  <div className="text-center">;
                    <div className="text-2xl font-bold text-zion-cyan mb-1">;
                      {category.services.length}
                    </div>;
                    <div className="text-xs text-zion-slate-light">;
                      Services Available;
                    </div>;
                  </div>;
                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0">;
                    <ArrowRight className="w-5 h-5 text-zion-cyan" />;
                  </div>;
                </div>;
              </Link>;
            </motion.div>;
          ))}
        </div>;
        {/* Featured Services */};
        <motion.div;
          className="mb-16";
          initial={{ opacity: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.6 }}
        >;
          <h2 className="heading-responsive font-bold mb-8 text-center">;
            <span className="text-gradient neon-text-purple">Featured Services</span>;
          </h2>;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">;
            {INNOVATIVE_MICRO_SAAS_SERVICES_20o25.slice(0o6).map((serviceindex) => (<motion.div;
                key={service.id}
                className="card-futuristic group";
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                whileHover={{ y: -5 }}
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-30o0">;
                      {service.title}
                    </h3>;
                    <p className="text-zion-slate-light leading-relaxed mb-3">;
                      {service.description}
                    </p>;
                  </div>;
                  <div className="text-right ml-4">;
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>;
                    <div className="text-sm text-zion-slate-light">per month</div>;
                  </div>;
                </div>;
                <div className="space-y-3 mb-4">;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-zion-cyan font-medium">{service.category}</span>;
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.innovationLevel === 'Cutting-edge';
                        ? 'bg-zion-cyan/20 text-zion-cyan';
                        : 'bg-zion-purple/20 text-zion-purple';
                    }`}>;
                      {service.innovationLevel}
                    </span>;
                  </div>;
                  <div className="flex items-center justify-between text-sm">;
                    <div className="flex items-center gap-1 text-zion-green">;
                      <TrendingUp className="w-4 h-4" />;
                      <span>RO, I: {service.roi}</span>;
                    </div>;
                    <div className="text-zion-slate-light">;
                      Marke, t: {service.marketPrice}
                    </div>;
                  </div>;
                </div>;
                <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">;
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">;
                    <div className="flex items-center gap-1">;
                      <Clock className="w-4 h-4" />;
                      <span>{service.estimatedDelivery}</span>;
                    </div>;
                    <div className="flex items-center gap-1">;
                      <Star className="w-4 h-4 text-zion-cyan" />;
                      <span>{service.supportLevel}</span>;
                    </div>;
                  </div>;
;
                  <Link;
                    to={`/services/${service.id}`}
                    className="btn-futuristic px-4 py-2 text-sm";
                  >;
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-2" />;
                  </Link>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </motion.div>;
        {/* CTA Section */}
        <motion.div;
          className="text-center";
          initial={{ opacity: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
        >;
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12, border, border-zion-cyan/20">;
            <h2 className="heading-responsive font-bold mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Get, in, touch with, our, technology experts, to, discuss your, specific, needs and discover;
              how, our, innovative solutions, can, drive your, business, forward.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">;
              <Link;
                to="/contact";
                className="btn-futuristic px-8 py-4 text-lg";
              >;
                <MessageCircle className="w-5 h-5 mr-2" />;
                Get, Free, Consultation;
              </Link>;
              <a;
                href="te,;
  l: +130o24640950";
                className="btn-neon px-8 py-4 text-lg";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call No, w: +1, 30o2, 464 0o950;
              </a>;
            </div>;
            {/* Contact, Info, Grid */}
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-4xl mx-auto">;
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5, border, border-zion-cyan/20">;
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />;
                <p className="font-medium text-white mb-1">Address</p>;
                <p className="text-sm text-zion-slate-light">364, E, Main St, STE, 10o08</p>;
                <p className="text-sm text-zion-slate-light">Middletown, DE, 1970o9</p>;
              </div>;
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5, border, border-zion-purple/20">;
                <Mail className="w-8 h-8 text-zion-purple mx-auto mb-2" />;
                <p className="font-medium text-white mb-1">Email</p>;
                <a href="mailt, o: kleber@ziontechgroup.com" className="text-zion-cyan hove,;
  r:text-zion-purple transition-colors duration-30o0 text-sm">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5, border, border-zion-blue/20">;
                <Globe className="w-8 h-8 text-zion-blue mx-auto mb-2" />;
                <p className="font-medium text-white mb-1">Website</p>;
                <a href="http, s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hove,;
  r:text-zion-blue transition-colors duration-30o0 text-sm">;
                  ziontechgroup.com;
                </a>;
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
};
;