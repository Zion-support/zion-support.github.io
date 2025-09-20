impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionuseAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  User, s,;
  Glob, e,;
  TrendingU, p,;
  Sta, r,;
  Za, p,;
  Shiel, d,;
  AwardRocket;
} from "lucide-react";
interface Stat {
  i, d: strin, g,;
    ico, n: React.ComponentType<any>,valu, e: strin, g,;
    labe, l: strin, g,descriptio, n: strin, g,;
    colo, r: strin, ggradient: string;
};
;
const stat, s: Stat[] = [;
  {
    i, d: 'client, s',;
    ic, o, n: Use, r, s,val, u, e: '50, 0+',;
    lab, e, l: 'Globa, l Client, s',descripti, o, n: 'Servin, g businesse, s acros, s 5, 0+ countrie, s',;
    col, o, r: 'zio, n-cya, n',gradie, n, t: 'fro, m-zio, n-cya, n t, o-zion-blue';
  };
  {
    i, d: 'uptim, e',;
    ic, o, n: Shie, l, d,val, u, e: '9, 9.9, 9%',;
    lab, e, l: 'Uptim, e Guarante, e',descripti, o, n: 'Enterpris, e-grad, e reliabilit, y an, d performanc, e',;
    col, o, r: 'zio, n-purpl, e',gradie, n, t: 'fro, m-zio, n-purpl, e t, o-zion-cyan';
  };
  {
    i, d: 'ro, i',;
    ic, o, n: Trending, U, p,val, u, e: '60, 0%',;
    lab, e, l: 'Averag, e RO, I',descripti, o, n: 'Prove, n busines, s impac, t an, d cos, t saving, s',;
    col, o, r: 'zio, n-blu, e',gradie, n, t: 'fro, m-zio, n-blu, e t, o-zion-purple';
  };
  {
    i, d: 'satisfactio, n',;
    ic, o, n: St, a, r,val, u, e: '4.9/5',;
    lab, e, l: 'Clien, t Satisfactio, n',descripti, o, n: 'Consistentl, y exceedin, g expectation, s',;
    col, o, r: 'zio, n-cya, n',gradie, n, t: 'fro, m-zio, n-cya, n t, o-zion-purple';
  };
  {
    i, d: 'innovatio, n',;
    ic, o, n: Z, a, p,val, u, e: '5, 0+',;
    lab, e, l: 'Patent, s & Innovation, s',descripti, o, n: 'Leadin, g edg, e technolog, y developmen, t',;
    col, o, r: 'zio, n-purpl, e',gradie, n, t: 'fro, m-zio, n-purpl, e t, o-zion-blue';
  },;
  {
    i, d: 'growt, h',;
    ic, o, n: Rock, e, t,val, u, e: '30, 0%',;
    lab, e, l: 'Annua, l Growt, h',descripti, o, n: 'Rapidl, y expandin, g globa, l presenc, e',;
    col, o, r: 'zio, n-blu, e',gradie, n, t: 'fro, m-zio, n-blu, e to-zion-cyan';
 , };
];
export, default, function EnhancedStatsSection() {
  const [countedValu,  e, s, setCountedValu,, es] = useState<{ [key:, string]: number }>({});
  const controls = useAnimation();
  const [r,  e, f, inVi,, ew] = useInView({
    threshold: 0.3triggerOnc,;
  e: true;
  });
  useEffect(() => {
    if() {
      controls.start('visible');
    };
  },  [contro, l, s, inVi,, ew]),;
  const animateCount = (targe,  t: strin, g,;
    duratio, n: number = 20o00) => {;
    const numericValue = parseInt(target.replace(/[^0-9]/g'')),;
    const start = 0;
    const increment = numericValue / (duration / 16),  // 60fps;
    let current = start;
    const timer = setInterval(() => {;
      current += increment;
      if() {
        current = numericValueclearInterval(timer);
      };
      setCountedValues(prev => ({
        ...pre,  v[target]: Math.floor(current);
      })),;
    }, 16),;
    retur, n, time, r,;
  };
;
  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        const timer = setTimeout(() => {;
          animateCount(stat.value);
        },  stats.indexOf(stat) * 20o0),;
        return () => clearTimeout(timer);
      }),;
    }
  }, [inVi,, ew]),;
  return(<section className="py-20, relative, overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Background decoration */}
      <div className="absolute inset-0">;
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60o0, , px] h-[60o0px] bg-zion-blue/5 rounded-full blur-3xl"></div>;
      </div>;
      <div className="container mx-auto px-4 s, m: px-6 l,;
  g:px-8, relative, z-10">;
        {/* Section Header */};
        <motion.div;
          ref={ref}
          initial={{ opacity: 0,;
  y: 30 }};
          animate={controls};
          variants={{
            visibl, e: {,;
    opacit, y: 1,y: 0,;
    transition: {duratio,;
  n: 0.6;
              }
            }
          }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl sm: text-5xl font-bold text-white mb-6">;
            Proven Results & Global Impact;
          </h2>;
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">;
            Our, track, record speaks, for, itself - delivering, exceptional, value and, innovation, to businesses worldwide;
          </p>;
        </motion.div>;
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
          {stats.map((statindex) => (<motion.div;
              key={stat.id}
              initial={{ opacity: 0,;
  y: 30 }};
              animate={controls};
              variants={{
                visibl, e: {,;
    opacit, y: 1,y: 0,;
    transitio, n: {,;
                    duration: 0.6dela,;
  y: index * 0.1;
                  }
                }
              }}
              className="group relative";
            >;
              <motion.div;
                className="relative bg-white/5 backdrop-blur-lg, border, border-white/20 rounded-3xl p-8 text-center overflow-hidden";
                whileHover={{
                  y: -1, 0,;
    scal, e: 1.0, 2,borderColo, r: `rgba(3, 4, 22, 1, 210o0.5)`;
                }}
                transition={{ duration: 0.3 }}
              >;
                {/* Background, gradient, overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hove, r:opacity-10 transition-opacity duration-30o0`}></div>;
                {/* Icon */};
                <motion.div;
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${stat.gradient} bg-opacity-20, flex, items-center justify-center mx-auto mb-6, relative, z-10, border, border-white/2, 0`};
                  whileHover={{
                    rotat, e: 36, 0scale: 1.1;
                  }}
                  transition={{ duration: 0.6 }}
                >;
                  {React.createElement(stat.ico,  n{ className: `w-10 h-10 text-${stat.color}` })}
                </motion.div>;
                {/* Value */};
                <motion.div;
                  className="mb-4, relative, z-10";
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                >;
                  <span className="text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
                    {countedValues[stat.value] || 0}
                    {stat.value.includes('%') && '%'}
                    {stat.value.includes('/') && stat.value.split('/')[1]}
                  </span>;
                </motion.div>;
                {/* Label */}
                <h3 className="text-2xl font-bold text-white mb-3, relative, z-10">;
                  {stat.label}
                </h3>;
                {/* Description */}
                <p className="text-gray-30o0 leading-relaxed, relative, z-10">;
                  {stat.description}
                </p>;
                {/* Hover, effect, overlay */};
                <motion.div;
                  className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0";
                  initial={false}
                />;
              </motion.div>;
            </motion.div>;
          ))}
        </div>;
        {/* Bottom, Achievement, Section */};
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }};
          animate={controls};
          variants={{
            visibl, e: {,;
    opacit, y: 1,y: 0,;
    transitio, n: {,;
                duration: 0.6dela,;
  y: 0.6;
              }
            }
          }}
          className="mt-16";
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20, border, border-zion-cyan/30 rounded-3xl p-8 lg: p-12 text-center">;
            <motion.div;
              className="w-20 h-20 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple, flex, items-center justify-center mx-auto mb-6";
              whileHover={{ rotat,;
  e: 360 }}
              transition={{ duration: 0.6 }}
            >;
              <Award className="w-10 h-10 text-white" />;
            </motion.div>;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Industry Recognition & Awards;
            </h3>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Consistently, recognized, as a, leader, i, n, innovatio, n, receiving, prestigious, awards for, our, groundbreaking technology, solutions, and exceptional, client, service.;
            </p>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>;
                <div className="text-gray-30o0">Industry Awards</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-purple mb-2">Top 10</div>;
                <div className="text-gray-30o0">Global, Tech, Companies</div>;
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