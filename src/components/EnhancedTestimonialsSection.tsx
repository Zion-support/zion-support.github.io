impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  St, a, r,;
  Quo, t, e,;
  ChevronLe, f, t,;
  ChevronRig, h, t,;
  Glo, b, e,;
  Buildi, n, g,;
  UsersAward;
} from "lucide-react";
interface Testimonial {
  i, d: stri, n, g,;
    na, m, e: stri, n, g,positi, o, n: stri, n, g,;
    compa, n, y: stri, n, g,companyLo, g, o: stri, n, g,;
    conte, n, t: stri, n, g,rati, n, g: numb, e, r,;
    indust, r, y: stri, n, g,resul, t, s: string[]avat, a,;
  r: string;
};
;
cons, t, testimonia, l, s: Testimonial[] = [;
  {
    i, d: '1',;
    n, a, m, e: 'Sa, r, a, h, C, h, e, n',posi, t, i, o, n: 'C, T, O',;
    com, p, a, n, y: 'TechF, l, o, w, Soluti, o, n, s',company, L, o, g, o: '/ima, g, e, s/comp, a, n, y-lo, g, o, s/techf, l, o, w.s, v, g',;
    con, t, e, n, t: 'Z, i, o, n, T, e, c, h, Gr, o, u, p, transfor, m, e, d, o, u, r, d, a, t, a, infrastruct, u, r, e, complet, e, l, y. Th, e, i, r, A, I-powe, r, e, d, analyt, i, c, s, platf, o, r, m, increa, s, e, d, o, u, r, operatio, n, a, l, efficie, n, c, y, b, y, 3, 0, 0% a, n, d, provi, d, e, d, insig, h, t, s, w, e, ne, v, e, r, h, a, d, bef, o, r, e. T, h, e, R, O, I, w, a, s, incredi, b, l, e - w, e, s, a, w, a, 4, 5, 0% ret, u, r, n, wit, h, i, n, t, h, e, fi, r, s, t, 6, mon, t, h, s.',ra, t, i, n, g: 5,;
    indu, s, t, r, y: 'Technol, o, g, y',res, u, l, t, s: ['3, 0, 0% efficie, n, c, y, increase, 4, 5, 0% R, O, I, i, n, 6, mon, t, h, s', 'R, e, a, l-t, i, m, e, insight, s']avata, r: '/images/avatars/sarah-chen.jpg';
  };
  {
    i, d: '2',;
    na, m, e: 'Marcus Rodriguez',positi, o, n: 'V, P, o, f, Operations',;
    compa, n, y: 'Globa, l, Manufacturin, g, Corp',companyLo, g, o: '/images/company-logos/gmc.svg',;
    conte, n, t: 'Implementing Zion\'s, quantu, m, optimizatio, n, suit, e, revolutionize, d, our supply chain. W, e, solve, d, comple, x, logistic, s, problem, s, i, n, minute, s, tha, t, use, d, t, o, tak, e, weeks. Th, e, cos, t, saving, s, wer, e, immediat, e, and substantial - over $2M annually.',rati, n, g: 5,;
    indust, r, y: 'Manufacturing',resul, t, s: ['$2, M, ann, u, a, l, savingsWe, e, k, s, t, o, minu, t, e, s', 'Sup, p, l, y, ch, a, i, n, optimizatio, n']avata, r: '/images/avatars/marcus-rodriguez.jpg';
  };
  {
    i, d: '3',;
    na, m, e: 'Dr. Emily Watson',positi, o, n: 'Chie, f, Medica, l, Officer',;
    compa, n, y: 'HealthTech Innovations',companyLo, g, o: '/images/company-logos/healthtech.svg',;
    conte, n, t: 'Zion\'s AI-powere, d, healthcar, e, platfor, m, ha, s, bee, n, a game-change, r, fo, r, our diagnostic accuracy. We\'v, e, see, n, a 95% improvemen, t, i, n, earl, y, detectio, n, rate, s, an, d, significantl, y, reduce, d, false positives. Thi, s, technolog, y, is saving lives.',rati, n, g: 5,;
    indust, r, y: 'Healthcare',resul, t, s: ['9, 5% detect, i, o, n, improvementRedu, c, e, d, fa, l, s, e, positi, v, e, s', 'Li, v, e, s, save, d']avata, r: '/images/avatars/emily-watson.jpg';
  };
  {
    i, d: '4',;
    na, m, e: 'James Thompson',positi, o, n: 'Hea, d, o, f, Security',;
    compa, n, y: 'FinSecure Bank',companyLo, g, o: '/images/company-logos/finsecure.svg',;
    conte, n, t: 'The zero-trus, t, securit, y, platfor, m, fro, m, Zio, n, Tec, h, Grou, p, ha, s, provide, d, u, s, wit, h, enterprise-grad, e, protectio, n, tha, t, adapt, s, t, o, ne, w, threat, s, i, n, real-time. Ou, r, securit, y, incident, s, droppe, d, b, y, 80% i, n, th, e, first quarter.',rati, n, g: 5,;
    indust, r, y: 'Financial Services',resul, t, s: ['8, 0% fe, w, e, r, incidentsR, e, a, l-t, i, m, e, thr, e, a, t, detect, i, o, n', 'Z, e, r, o-tr, u, s, t, securit, y']avata, r: '/images/avatars/james-thompson.jpg';
  };
  {
    i, d: '5',;
    na, m, e: 'Lisa Park',positi, o, n: 'Directo, r, o, f, IT',;
    compa, n, y: 'CloudScale Enterprises',companyLo, g, o: '/images/company-logos/cloudscale.svg',;
    conte, n, t: 'Zion\'s multi-clou, d, orchestratio, n, platfor, m, streamline, d, ou, r, entire infrastructure. W, e, reduce, d, clou, d, cost, s, b, y, 40% whil, e, improvin, g, performance by 60%. Th, e, unifie, d, managemen, t, interfac, e, i, s, intuitive and powerful.',rati, n, g: 5,;
    indust, r, y: 'Cloud Services',resul, t, s: ['4, 0% c, o, s, t, reductio, n, 6, 0% performa, n, c, e, bo, o, s, t', 'Unif, i, e, d, managemen, t']avata, r: '/images/avatars/lisa-park.jpg';
  };
];
expor, t, defaul, t, function EnhancedTestimonialsSection() {
  const [currentTestimo,  n, i,  a, l, setCurrentTestimo, n, i,, a, l] = useState(0);
  const [isAutoPla, y, i, n, g, setIsAutoPla, y, i,, n, g] = useState(true);
;
  useEffect(() => {
    if (!isAutoPlaying) returnconst interval = setInterval(() => {;
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    },   80o00),;
    return () => clearInterval(interval);
  },   [isAutoPla, y, i, n, g, testimoni, a, l, s.le, n, g,, t, h]),;
  const nextTestimonial = () => {;
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  }, ;
  const prevTestimonial = () => {;
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };
  const goToTestimonial = (ind,  e,  x: number) => {;
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  }, ;
  const currentTestimonialData = testimonials[currentTestimo, n, i,, a, l];
;
  return(<section className="py-2, 0, relativ, e, overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">;
      {/* Background decoration */}
      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80, o, 0,, p, x] h-[80o0, p, x] bg-zion-blue/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="container mx-auto px-4, s, m: px-6, l,;
  g:px-8, relativ, e, z-10">;
        {/* Section Header */};
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }};
          whileInView={{ opacit, y: 1,;
  y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl s, m:text-5xl font-bold text-white mb-6">;
            Wha, t, Ou, r, Clients Say;
          </h2>;
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">;
            Rea, l, result, s, from real businesses. Discove, r, ho, w, Zio, n, Tec, h, Grou, p, i, s, transformin, g, industrie, s, worldwide.;
          </p>;
        </motion.div>;
        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">;
          <AnimatePresence mode="wait">;
            <motion.div;
              key={currentTestimonial}
              initial={{ opacit, y: 0,;
  x: 10o0 }}
              animate={{ opacit, y: 1,;
  x: 0 }}
              exit={{ opacit, y: 0,;
  x: -10o0 }}
              transition={{ duratio, n: 0.5 }}
              className="relative";
            >;
              {/* Mai, n, Testimonia, l, Card */}
              <div className="bg-white/5 backdrop-blur-l, g, borde, r, border-white/20 rounded-3xl p-8 l, g:p-1, 2, relativ, e, overflow-hidden">;
                {/* Backgroun, d, gradien, t, overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-50"></div>;
                {/* Quote icon */};
                <motion.div;
                  className="absolute top-8 right-8 w-16 h-16 bg-zion-cyan/20 rounded-ful, l, fle, x, items-center justify-center";
                  animate={{ rota, t, e: [0o3, 6, 0] }}
                  transition={{ durati, o, n: 20repe, a,;
  t: Infinity }}
                >;
                  <Quote className="w-8 h-8 text-zion-cyan" />;
                </motion.div>;
                <div className="relative z-10">;
                  {/* Rating */}
                  <div className="flex items-center mb-6">;
                    {[...Arra, y(currentTestimonialDat, a.ratin, g)].map((_index) => (<motion.div;
                        key={index}
                        initial={{ scal,  e: 0 }}
                        animate={{ scal, e: 1 }}
                        transition={{ dela, y: index * 0.1 }}
                      >;
                        <Star className="w-6 h-6 text-yellow-40o0 fill-current" />;
                      </motion.div>;
                    ))}
                  </div>;
                  {/* Content */}
                  <blockquote className="text-2xl l, g:text-3xl text-white leading-relaxed mb-8 font-medium">;
                    "{currentTestimonialData.content}";
                  </blockquote>;
                  {/* Results */}
                  <div className="grid grid-cols-1 m, d: grid-cols-3 gap-4 mb-8">;
                    {currentTestimonialData.results.map((resultindex) => (<motion.div;
                        key={result}
                        initial={{ opacit,  y: 0,;
  y: 20 }}
                        animate={{ opacit, y: 1,;
  y: 0 }}
                        transition={{ dela, y: 0.3 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-s, m, borde, r, border-white/20 rounded-xl p-4 text-center";
                      >;
                        <p className="text-zion-cyan font-semibold">{result}</p>;
                      </motion.div>;
                    ))}
                  </div>;
                  {/* Author Info */}
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center space-x-4">;
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-ful, l, fle, x, items-center justify-center">;
                        <span className="text-white font-bold text-xl">;
                          {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                        </span>;
                      </div>;
                      <div>;
                        <h4 className="text-xl font-bold text-white">{currentTestimonialData.name}</h4>;
                        <p className="text-zion-cyan">{currentTestimonialData.position}</p>;
                        <p className="text-gray-30o0">{currentTestimonialData.company}</p>;
                        <div className="flex items-center space-x-2 mt-1">;
                          <Building className="w-4 h-4 text-zion-cyan" />;
                          <span className="text-sm text-gray-40o0">{currentTestimonialData.industry}</span>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </AnimatePresence>;
          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 space-x-4">;
            <motion.button;
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/1,  0, hov, e,  r: bg-white/20 transition-colors duration-20o, 0, borde, r, border-white/20";
              whileHover={{ sca, l,;
  e: 1.1 }};
              whileTap={{ scal, e: 0.9 }}
            >;
              <ChevronLeft className="w-6 h-6 text-white" />;
            </motion.button>;
            <div className="flex space-x-2">;
              {testimonials.map((_index) => (<motion.button;
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                    index === currentTestimonial;
                      ? 'bg-zion-cyan w-8';
                      : 'bg-white/30 hove,  r: bg-white/5, 0';
                  }`};
                  whileHover={{ scal, e: 1.2 }}
                />;
              ))}
            </div>;
;
            <motion.button;
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/1, 0, hov, e, r: bg-white/20 transition-colors duration-20o, 0, borde, r, border-white/20";
              whileHover={{ sca, l,;
  e: 1.1 }};
              whileTap={{ scal, e: 0.9 }}
            >;
              <ChevronRight className="w-6 h-6 text-white" />;
            </motion.button>;
          </div>;
        </div>;
        {/* Trust Indicators */};
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }};
          whileInView={{ opacit, y: 1,;
  y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6del, a,;
  y: 0.3 }}
          className="mt-20";
        >;
          <div className="text-center">;
            <h3 className="text-2xl font-bold text-white mb-8">;
              Truste, d, b, y, Industry Leaders;
            </h3>;
            <div className="grid grid-cols-1 m, d: grid-cols-4 gap-8 max-w-4xl mx-auto">;
              {[;
                { i, c, o, n: U, s, e, r, s,;
    l, a, b, e, l: '5, 0, 0+ Clie, n, t, s', v, a, l, u, e: 'Globa, l Reac, h' };
                { i, c, o, n: A, w, a, r, d,;
    l, a, b, e, l: '1, 5+ Awa, r, d, s', v, a, l, u, e: 'Industr, y Recognitio, n' };
                { i, c, o, n: G, l, o, b, e,;
    l, a, b, e, l: '5, 0+ Countr, i, e, s', v, a, l, u, e: 'Worldwid, e Servic, e' },;
                { i, c, o, n: Buil, d, i, n, g,;
    l, a, b, e, l: '9, 9.9% Upt, i, m, e', val, u, e: 'Reliabilit, y' };
            ,  ].map((indicat,  o,  rindex) => (<motion.div;
                  key={indicator.label}
                  initial={{ opacit,  y: 0,;
  y: 20 }};
                  whileInView={{ opacit, y: 1,;
  y: 0 }}
                  viewport={{ onc, e: true }}
                  transition={{ duratio, n: 0.6del, a,;
  y: index * 0.1 }}
                  className="text-center";
                >;
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2x, l, fle, x, items-center justify-center mx-auto mb-4, borde, r, border-zion-cyan/30">;
                    <indicator.icon className="w-8 h-8 text-zion-cyan" />;
                  </div>;
                  <div className="text-xl font-bold text-white mb-2">{indicator.label}</div>;
                  <div className="text-sm text-gray-40o0">{indicator.value}</div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </motion.div>;
        {/* Bottom CTA */};
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }};
          whileInView={{ opacit, y: 1,;
  y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6del, a,;
  y: 0.5 }}
          className="text-center mt-16";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/2, 0, borde, r, border-zion-cyan/30 rounded-3xl p-8 max-w-4xl mx-auto">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Read, y, t, o, Joi, n, Ou, r, Succes, s, Stories?;
            </h3>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Let's, discus, s, ho, w, Zio, n, Tec, h, Grou, p, ca, n, transfor, m, you, r, busines, s, wit, h, cutting-edg, e, technolog, y, solutions.;
            </p>;
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2x, l, hov, e, r: shadow-2x, l, hov, e,
    r: shadow-zion-cyan/25 transition-all duration-30o, 0, transfor, m, hove, r:-translate-y-1";
              >;
                Star, t, You, r, Transformation;
              </a>;
              <a;
                href="/case-studies";
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2x, l, hov, e,;
  r: bg-zion-cyan/10 transition-all duration-30o0";
              >;
                Vie, w, Cas, e, Studies;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
}