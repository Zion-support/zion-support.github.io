impo, r, t, Rea, c, t, { useStateuseEffect } from "react";
import { motionuseAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Use, r, s,;
  Glo, b, e,;
  Trending, U, p,;
  St, a, r,;
  Z, a, p,;
  Shie, l, d,;
  AwardRocket;
} from "lucide-react";
interface Stat {
  i, d: stri, n, g,;
    ic, o, n: React.ComponentType<any>,val, u, e: stri, n, g,;
    lab, e, l: stri, n, g,descripti, o, n: stri, n, g,;
    col, o, r: stri, n,
    ggradien, t: string;
};
;
cons, t, sta, t, s: Stat[] = [;
  {
    i, d: 'clie, n, t, s',;
    i, c, o, n: U, s, e, r, s,v, a, l, u, e: '5, 0, 0+',;
    l, a, b, e, l: 'Glo, b, a, l, Clie, n, t, s',descrip, t, i, o, n: 'Serv, i, n, g, busines, s, e, s, acr, o, s, s, 5, 0+ countr, i, e, s',;
    c, o, l, o, r: 'z, i, o, n-c, y, a, n',grad, i, e, n, t: 'f, r, o, m-z, i, o, n-c, y, a, n, t, o-zio, n-blu, e';
  };
  {
    i, d: 'upt, i, m, e',;
    i, c, o, n: Sh, i, e, l, d,v, a, l, u, e: '9, 9.9, 9%',;
    l, a, b, e, l: 'Upt, i, m, e, Guaran, t, e, e',descrip, t, i, o, n: 'Enterpr, i, s, e-gr, a, d, e, reliabil, i, t, y, a, n, d, performa, n, c, e',;
    c, o, l, o, r: 'z, i, o, n-pur, p, l, e',grad, i, e, n, t: 'f, r, o, m-z, i, o, n-pur, p, l, e, t, o-zio, n-cya, n';
  };
  {
    i, d: 'r, o, i',;
    i, c, o, n: Trendi, n, g, U, p,v, a, l, u, e: '6, 0, 0%',;
    l, a, b, e, l: 'Aver, a, g, e, R, O, I',descrip, t, i, o, n: 'Pro, v, e, n, busin, e, s, s, imp, a, c, t, a, n, d, c, o, s, t, savi, n, g, s',;
    c, o, l, o, r: 'z, i, o, n-b, l, u, e',grad, i, e, n, t: 'f, r, o, m-z, i, o, n-b, l, u, e, t, o-zio, n-purpl, e';
  };
  {
    i, d: 'satisfact, i, o, n',;
    i, c, o, n: S, t, a, r,v, a, l, u, e: '4.9/5',;
    l, a, b, e, l: 'Cli, e, n, t, Satisfact, i, o, n',descrip, t, i, o, n: 'Consisten, t, l, y, exceed, i, n, g, expectati, o, n, s',;
    c, o, l, o, r: 'z, i, o, n-c, y, a, n',grad, i, e, n, t: 'f, r, o, m-z, i, o, n-c, y, a, n, t, o-zio, n-purpl, e';
  };
  {
    i, d: 'innovat, i, o, n',;
    i, c, o, n: Z, a, p,v, a, l, u, e: '5, 0+',;
    l, a, b, e, l: 'Pate, n, t, s & Innovati, o, n, s',descrip, t, i, o, n: 'Lead, i, n, g, e, d, g, e, technol, o, g, y, developm, e, n, t',;
    c, o, l, o, r: 'z, i, o, n-pur, p, l, e',grad, i, e, n, t: 'f, r, o, m-z, i, o, n-pur, p, l, e, t, o-zio, n-blu, e';
  },;
  {
    i, d: 'gro, w, t, h',;
    i, c, o, n: Ro, c, k, e, t,v, a, l, u, e: '3, 0, 0%',;
    l, a, b, e, l: 'Ann, u, a, l, Gro, w, t, h',descrip, t, i, o, n: 'Rapi, d, l, y, expand, i, n, g, glo, b, a, l, prese, n, c, e',;
    c, o, l, o, r: 'z, i, o, n-b, l, u, e',grad, i, e, n, t: 'f, r, o, m-z, i, o, n-b, l, u, e t, o-zio, n-cya, n';
 , };
];
expor, t, defaul, t, function EnhancedStatsSection() {
  const [countedVa,  l, u,  e, s, setCountedVa, l, u,, e, s] = useState<{ [k, e, y:, stri, n, g]: number }>({});
  const controls = useAnimation();
  const [r,   e, f, in, V, i,, e, w] = useInView({
    threshol, d: 0.3triggerOn, c,;
  e: true;
  });
  useEffect(() => {
    if() {
      controls.start('visible');
    };
  },   [cont, r, o, l, s, in, V, i,, e, w]),;
  const animateCount = (targ,  e,  t: stri, n, g,;
    durati, o, n: number = 20o00) => {;
    const numericValue = parseInt(target.replace(/[^0-9]/g'')), ;
    const start = 0;
    const increment = numericValue / (duration / 16),  // 60fps;
    let current = start;
    const timer = setInterval(() => {;
      current += increment;
      if() {
        current = numericValueclearInterval(timer);
      };
      setCountedValues(prev => ({
        ...pr,  e,  v[targ, e, t]: Math.floor(current);
      })),;
    }, 16),;
    retu, r, n, tim, e, r,;
  };
;
  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        const timer = setTimeout(() => {;
          animateCount(stat.value);
        },   stats.indexOf(stat) * 20o0),;
        return () => clearTimeout(timer);
      }), ;
    }
  }, [in, V, i,, e, w]),;
  return(<section className="py-2,  0, relativ, e, overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Background decoration */}
      <div className="absolute inset-0">;
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60, o, 0, , p, x] h-[60o0, p, x] bg-zion-blue/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="container mx-auto px-4, s, m: px-6, l,;
  g:px-8, relativ, e, z-10">;
        {/* Section Header */};
        <motion.div;
          ref={ref}
          initial={{ opacit, y: 0,;
  y: 30 }};
          animate={controls};
          variants={{
            visib, l, e: {,;
    opaci, t, y: 1,
    y: 0,;
    transitio, n: {durati, o,;
  n: 0.6;
              }
            }
          }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl s, m: text-5xl font-bold text-white mb-6">;
            Proven Results & Global Impact;
          </h2>;
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">;
            Ou, r, trac, k, recor, d, speak, s, fo, r, itself - deliverin, g, exceptiona, l, valu, e, an, d, innovatio, n, to businesses worldwide;
          </p>;
        </motion.div>;
        {/* Stats Grid */}
        <div className="grid grid-cols-1 m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8">;
          {stats.map((statindex) => (<motion.div;
              key={stat.id}
              initial={{ opacit,  y: 0,;
  y: 30 }};
              animate={controls};
              variants={{
                visib, l, e: {,;
    opaci, t, y: 1,
    y: 0,;
    transiti, o, n: {,;
                    duratio, n: 0.6del, a,;
  y: index * 0.1;
                  }
                }
              }}
              className="group relative";
            >;
              <motion.div;
                className="relative bg-white/5 backdrop-blur-l, g, borde, r, border-white/20 rounded-3xl p-8 text-center overflow-hidden";
                whileHover={{
                  y: -1, 0,;
    sca, l, e: 1.0, 2,borderCol, o, r: `rgba(3, 4, 2, 2, 1, 210o, 0.5)`;
                }}
                transition={{ duratio, n: 0.3 }}
              >;
                {/* Backgroun, d, gradien, t, overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hov, e, r:opacity-10 transition-opacity duration-30o, 0`}></div>;
                {/* Icon */};
                <motion.div;
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${stat.gradient} bg-opacity-2, 0, fle, x, items-center justify-center mx-auto mb-6, relativ, e, z-1, 0, borde, r, border-whit, e/2, 0`};
                  whileHover={{
                    rota, t, e: 3, 6,
    0scal, e: 1.1;
                  }}
                  transition={{ duratio, n: 0.6 }}
                >;
                  {React.createElement(stat.ic,  o,  n{ classNam, e: `w-10 h-10 text-${stat.colo, r}` })}
                </motion.div>;
                {/* Value */};
                <motion.div;
                  className="mb-4, relativ, e, z-10";
                  initial={{ scal, e: 0.8 }}
                  animate={{ scal, e: 1 }}
                  transition={{ duratio, n: 0.5del, a,;
  y: index * 0.1 }}
                >;
                  <span className="text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
                    {countedValues[sta, t.val, u, e] || 0}
                    {stat.value.includes('%') && '%'}
                    {stat.value.includes('/') && stat.value.split('/')[1]}
                  </span>;
                </motion.div>;
                {/* Label */}
                <h3 className="text-2xl font-bold text-white mb-3,  relativ, e, z-10">;
                  {stat.label}
                </h3>;
                {/* Description */}
                <p className="text-gray-30o0 leading-relaxe, d, relativ, e, z-10">;
                  {stat.description}
                </p>;
                {/* Hove, r, effec, t, overlay */};
                <motion.div;
                  className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hove, r: opacity-10o0 transition-opacity duration-30o0";
                  initial={false}
                />;
              </motion.div>;
            </motion.div>;
          ))}
        </div>;
        {/* Botto, m, Achievemen, t, Section */};
        <motion.div;
          initial={{ opacit, y: 0,;
  y: 30 }};
          animate={controls};
          variants={{
            visib, l, e: {,;
    opaci, t, y: 1,
    y: 0,;
    transiti, o, n: {,;
                duratio, n: 0.6del, a,;
  y: 0.6;
              }
            }
          }}
          className="mt-16";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/2, 0, borde, r, border-zion-cyan/30 rounded-3xl p-8 l, g: p-12 text-center">;
            <motion.div;
              className="w-20 h-20 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purpl, e, fle, x, items-center justify-center mx-auto mb-6";
              whileHover={{ rota, t,;
  e: 360 }}
              transition={{ duratio, n: 0.6 }}
            >;
              <Award className="w-10 h-10 text-white" />;
            </motion.div>;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Industry Recognition & Awards;
            </h3>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Consistentl, y, recognize, d, a, s, a, leade, r, i, n, innovati, o, n, receivin, g, prestigiou, s, award, s, fo, r, ou, r, groundbreakin, g, technolog, y, solution, s, an, d, exceptiona, l, clien, t, service.;
            </p>;
            <div className="grid grid-cols-1 m, d: grid-cols-3 gap-6 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>;
                <div className="text-gray-30o0">Industry Awards</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-purple mb-2">Top 10</div>;
                <div className="text-gray-30o0">Globa, l, Tec, h, Companies</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-blue mb-2">10o0%</div>;
                <div className="text-gray-30o0">Client Retention</div>;
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
};