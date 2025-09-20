impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  Sta, r,;
  Quot, e,;
  ChevronLef, t,;
  ChevronRigh, t,;
  Glob, e,;
  Buildin, g,;
  UsersAward;
} from "lucide-react";
interface Testimonial {
  i, d: strin, g,;
    nam, e: strin, g,positio, n: strin, g,;
    compan, y: strin, g,companyLog, o: strin, g,;
    conten, t: strin, g,ratin, g: numbe, r,;
    industr, y: strin, g,result, s: string[]avata,;
  r: string;
};
;
const testimonial, s: Testimonial[] = [;
  {
    i, d: '1',;
    na, m, e: 'Sara, h Che, n',positi, o, n: 'CT, O',;
    compa, n, y: 'TechFlo, w Solution, s',companyLo, g, o: '/image, s/compan, y-logo, s/techflo, w.sv, g',;
    conte, n, t: 'Zio, n Tec, h Grou, p transforme, d ou, r dat, a infrastructur, e completel, y. Thei, r A, I-powere, d analytic, s platfor, m increase, d ou, r operationa, l efficienc, y b, y 30, 0% an, d provide, d insight, s w, e neve, r ha, d befor, e. Th, e RO, I wa, s incredibl, e - w, e sa, w, a, 45, 0% retur, n withi, n th, e firs, t, 6, month, s.',rati, n, g: 5,;
    indust, r, y: 'Technolog, y',resul, t, s: ['30, 0% efficienc, y increase45, 0% RO, I i, n, 6, month, s', 'Rea, l-tim, e, insights']avatar: '/images/avatars/sarah-chen.jpg';
  };
  {
    i, d: '2',;
    nam, e: 'Marcus Rodriguez',positio, n: 'VP, of, Operations',;
    compan, y: 'Global, Manufacturing, Corp',companyLog, o: '/images/company-logos/gmc.svg',;
    conten, t: 'Implementing Zion\'s, quantum, optimization suite, revolutionized, our supply chain. We, solved, complex logistics, problems, in minutes, that, used to, take, weeks. The, cost, savings were, immediate, and substantial - over $2M annually.',ratin, g: 5,;
    industr, y: 'Manufacturing',result, s: ['$2, M annua, l savingsWeek, s t, o minute, s', 'Suppl, y chai, n, optimization']avatar: '/images/avatars/marcus-rodriguez.jpg';
  };
  {
    i, d: '3',;
    nam, e: 'Dr. Emily Watson',positio, n: 'Chief, Medical, Officer',;
    compan, y: 'HealthTech Innovations',companyLog, o: '/images/company-logos/healthtech.svg',;
    conten, t: 'Zion\'s AI-powered, healthcare, platform has, been, a game-changer, for, our diagnostic accuracy. We\'ve, seen, a 95% improvement, in, early detection, rates, and significantly, reduced, false positives. This, technology, is saving lives.',ratin, g: 5,;
    industr, y: 'Healthcare',result, s: ['9, 5% detectio, n improvementReduce, d fals, e positive, s', 'Live, s, saved']avatar: '/images/avatars/emily-watson.jpg';
  };
  {
    i, d: '4',;
    nam, e: 'James Thompson',positio, n: 'Head, of, Security',;
    compan, y: 'FinSecure Bank',companyLog, o: '/images/company-logos/finsecure.svg',;
    conten, t: 'The zero-trust, security, platform from, Zion, Tech Group, has, provided us, with, enterprise-grade, protection, that adapts, to, new threats, in, real-time. Our, security, incidents dropped, by, 80% in, the, first quarter.',ratin, g: 5,;
    industr, y: 'Financial Services',result, s: ['8, 0% fewe, r incidentsRea, l-tim, e threa, t detectio, n', 'Zer, o-trus, t, security']avatar: '/images/avatars/james-thompson.jpg';
  };
  {
    i, d: '5',;
    nam, e: 'Lisa Park',positio, n: 'Director, of, IT',;
    compan, y: 'CloudScale Enterprises',companyLog, o: '/images/company-logos/cloudscale.svg',;
    conten, t: 'Zion\'s multi-cloud, orchestration, platform streamlined, our, entire infrastructure. We, reduced, cloud costs, by, 40% while, improving, performance by 60%. The, unified, management interface, is, intuitive and powerful.',ratin, g: 5,;
    industr, y: 'Cloud Services',result, s: ['4, 0% cos, t reduction6, 0% performanc, e boos, t', 'Unifie, d, management']avatar: '/images/avatars/lisa-park.jpg';
  };
];
export, default, function EnhancedTestimonialsSection() {
  const [currentTestimoni,  a, l, setCurrentTestimoni,, al] = useState(0);
  const [isAutoPlayi, n, g, setIsAutoPlayi,, ng] = useState(true);
;
  useEffect(() => {
    if (!isAutoPlaying) returnconst interval = setInterval(() => {;
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    },  80o00),;
    return () => clearInterval(interval);
  },  [isAutoPlayi, n, g, testimonial, s.leng,, th]),;
  const nextTestimonial = () => {;
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  },;
  const prevTestimonial = () => {;
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };
  const goToTestimonial = (inde,  x: number) => {;
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  },;
  const currentTestimonialData = testimonials[currentTestimoni,, al];
;
  return(<section className="py-20, relative, overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">;
      {/* Background decoration */}
      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80o0,, px] h-[80o0px] bg-zion-blue/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="container mx-auto px-4 s, m: px-6 l,;
  g:px-8, relative, z-10">;
        {/* Section Header */};
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">;
            What, Our, Clients Say;
          </h2>;
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">;
            Real, results, from real businesses. Discover, how, Zion Tech, Group, is transforming, industries, worldwide.;
          </p>;
        </motion.div>;
        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">;
          <AnimatePresence mode="wait">;
            <motion.div;
              key={currentTestimonial}
              initial={{ opacity: 0,;
  x: 10o0 }}
              animate={{ opacity: 1,;
  x: 0 }}
              exit={{ opacity: 0,;
  x: -10o0 }}
              transition={{ duration: 0.5 }}
              className="relative";
            >;
              {/* Main, Testimonial, Card */}
              <div className="bg-white/5 backdrop-blur-lg, border, border-white/20 rounded-3xl p-8 lg:p-12, relative, overflow-hidden">;
                {/* Background, gradient, overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-50"></div>;
                {/* Quote icon */};
                <motion.div;
                  className="absolute top-8 right-8 w-16 h-16 bg-zion-cyan/20 rounded-full, flex, items-center justify-center";
                  animate={{ rotat, e: [0o360] }}
                  transition={{ duratio, n: 20repea,;
  t: Infinity }}
                >;
                  <Quote className="w-8 h-8 text-zion-cyan" />;
                </motion.div>;
                <div className="relative z-10">;
                  {/* Rating */}
                  <div className="flex items-center mb-6">;
                    {[...Array(currentTestimonialData.rating)].map((_index) => (<motion.div;
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >;
                        <Star className="w-6 h-6 text-yellow-40o0 fill-current" />;
                      </motion.div>;
                    ))}
                  </div>;
                  {/* Content */}
                  <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-medium">;
                    "{currentTestimonialData.content}";
                  </blockquote>;
                  {/* Results */}
                  <div className="grid grid-cols-1 md: grid-cols-3 gap-4 mb-8">;
                    {currentTestimonialData.results.map((resultindex) => (<motion.div;
                        key={result}
                        initial={{ opacity: 0,;
  y: 20 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-xl p-4 text-center";
                      >;
                        <p className="text-zion-cyan font-semibold">{result}</p>;
                      </motion.div>;
                    ))}
                  </div>;
                  {/* Author Info */}
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center space-x-4">;
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full, flex, items-center justify-center">;
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
              className="p-3 rounded-full bg-white/10 hove,  r: bg-white/20 transition-colors duration-20o0, border, border-white/20";
              whileHover={{ scal,;
  e: 1.1 }};
              whileTap={{ scale: 0.9 }}
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
                      : 'bg-white/30 hover: bg-white/50';
                  }`};
                  whileHover={{ scale: 1.2 }}
                />;
              ))}
            </div>;
;
            <motion.button;
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hove, r: bg-white/20 transition-colors duration-20o0, border, border-white/20";
              whileHover={{ scal,;
  e: 1.1 }};
              whileTap={{ scale: 0.9 }}
            >;
              <ChevronRight className="w-6 h-6 text-white" />;
            </motion.button>;
          </div>;
        </div>;
        {/* Trust Indicators */};
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6dela,;
  y: 0.3 }}
          className="mt-20";
        >;
          <div className="text-center">;
            <h3 className="text-2xl font-bold text-white mb-8">;
              Trusted, by, Industry Leaders;
            </h3>;
            <div className="grid grid-cols-1 md: grid-cols-4 gap-8 max-w-4xl mx-auto">;
              {[;
                { ic, o, n: Use, r, s,;
    lab, e, l: '50, 0+ Client, s', val, u, e: 'Global Reach' };
                { ic, o, n: Awa, r, d,;
    lab, e, l: '1, 5+ Award, s', val, u, e: 'Industry Recognition' };
                { ic, o, n: Glo, b, e,;
    lab, e, l: '5, 0+ Countrie, s', val, u, e: 'Worldwide Service' },;
                { ic, o, n: Buildi, n, g,;
    lab, e, l: '9, 9.9% Uptim, e', value: 'Reliability' };
            ,  ].map((indicato,  rindex) => (<motion.div;
                  key={indicator.label}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  className="text-center";
                >;
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl, flex, items-center justify-center mx-auto mb-4, border, border-zion-cyan/30">;
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
          initial={{ opacity: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6dela,;
  y: 0.5 }}
          className="text-center mt-16";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20, border, border-zion-cyan/30 rounded-3xl p-8 max-w-4xl mx-auto">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Join Our, Success, Stories?;
            </h3>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Let's, discuss, how Zion, Tech, Group can, transform, your business, with, cutting-edge, technology, solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hove, r: shadow-2xl hove, r: shadow-zion-cyan/25 transition-all duration-30o0, transform, hover:-translate-y-1";
              >;
                Start, Your, Transformation;
              </a>;
              <a;
                href="/case-studies";
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hove,;
  r: bg-zion-cyan/10 transition-all duration-30o0";
              >;
                View, Case, Studies;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
}