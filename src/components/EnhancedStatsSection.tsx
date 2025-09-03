import {  import { motion, useAnimation  } from 'framer-motion';
 from 'lucide-react';
;
interface Stat {};
}
;
const stats: Stat[] = [{};
},;
  {};
},;
  {};
},;
  {};
},;
  {};
},;
  {};
  const [countedValues, setCountedValues] = useState<any>({});
  ;
  const [ref, inView] = useInView({};
}) ;
;
  useEffect(() => {};
}, []);
    if(inView) {};
      controls.start('visible')}
  }, [controls, inView]);

    const increment = numericValue / (duration / 16) ; // 60fps;

    let current = start;

      current += increment;
      if(current >= numericValue) {};
        clearInterval(timer) }
setCountedValues(prev:  > ({};
        [target]: Math.floor (current) }) ) }, 16) ;
;
    return timer};
;
  useEffect(() => {};
}, []);
    if(inView) {};
          animateCount(stat.value)}, stats.indexOf(stat) * 200);
        return () => clearTimeout(timer)})}
  }, [inView]) ;
  return ();
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Background decoration */}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>";
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zion-blue/5 rounded-full blur-3xl"></div>;
      </div>;
";
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
        {/* Section Header */}
        <div>Broken JSX</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">;
            Proven Results & Global Impact;
          </h2>";
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">;
            Our track record speaks for itself - delivering exceptional value and innovation to businesses worldwide;
          </p>;
        </motion.div>;

        {/* Stats Grid */}";
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">;
          {};
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>;

                {/* Icon */}
                <div>Broken JSX</div>
                  <stat.icon className={`w-10 h-10 text-${stat.color}`} />;
                </motion.div>;

                {/* Value */}
                <div>Broken JSX</div>
                >";
                  <span className="text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
                    {countedValues[stat.value] || 0}
                    {stat.value.includes('%') && '%'}
                    {stat.value.includes('/') && stat.value.split('/')[1]}
                  </span>;
                </motion.div>;

                {/* Label */}";
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">;
                  {stat.label}
                </h3>;

                {/* Description */}";
                <p className="text-gray-300 leading-relaxed relative z-10">;
                  {stat.description}
                </p>;

                {/* Hover effect overlay */}
                <div>Broken JSX</div>
                />;
              </motion.div>;
            </motion.div>;) ) }
        </div>;

        {/* Bottom Achievement Section */}
        <div>Broken JSX</div>
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8 lg:p-12 text-center">;
            <div>Broken JSX</div>
              <Award className="w-10 h-10 text-white"  />            </motion.div>;
";
            <h3 className="text-3xl font-bold text-white mb-4">;
              Industry Recognition & Awards;
            </h3>";
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Consistently recognized as a leader in innovation, receiving prestigious awards for our groundbreaking technology solutions and exceptional client service.</p>;
";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">";
              <div className="text-center">";
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>";
                <div className="text-gray-300">Industry Awards</div>;
              </div>";
              <div className="text-center">";
                <div className="text-3xl font-bold text-zion-purple mb-2">Top 10</div>";
                <div className="text-gray-300">Global Tech Companies</div>;
              </div>";
              <div className="text-center">";
                <div className="text-3xl font-bold text-zion-blue mb-2">100%</div>";
                <div className="text-gray-300">Client Retention</div>;
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
'"`;
