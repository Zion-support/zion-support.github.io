import React, { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import {  import { motion, AnimatePresence  } from 'framer-motion';
 from 'lucide-react';
;
const benefits = [{};
    ]},;
  {};
    ]},;
  {};
    ]},;
  {};
    ]},;
];
;
const additionalStats = [{};
    label: 'Happy Clients'},";
  { icon: <Clock className="w-8 h-8" />, value: '24/7', label: 'Support' },";
  { icon: <Star className="w-8 h-8" />, value: '4.9/5', label: 'Rating' },";
  { icon: <Award className="w-8 h-8" />, value: '50+', label: 'Awards' },;
];
;
export function BenefitsSection() {};
  return null;
}
    hidden: { opacity: 0 },;
    visible: {};
        delayChildren: 0.1}}};
;
  const itemVariants = {};
    hidden: { y: 30, opacity: 0 },;
    visible: {};
        ease: 'easeOut'}}};
;
  const statsVariants = {};
    hidden: { scale: 0.8, opacity: 0 },;
    visible: {};
        ease: 'easeOut'}}};
;
  return (";
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">;
      {/* Enhanced background pattern */}";
      <div className="absolute inset-0 opacity-5">;
        <div>Broken JSX</div>
        />;
      </div>;

      {/* Floating decorative elements */}";
      <div className="absolute inset-0">;
        <div>Broken JSX</div>
        />;
        <div>Broken JSX</div>
        />;
        <div>Broken JSX</div>
        />;
      </div>;
";
      <div className="container mx-auto px-4 relative z-10">;
        <div>Broken JSX</div>
        >";
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">;
            Why Choose{' '}";
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Zion Tech Group;
            </span>;
            ?;
          </h2>";
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">;
            We combine cutting-edge technology with proven methodologies to;
            deliver exceptional results.Our commitment to excellence drives;
            every project to success.</p>;
        </motion.div>;

        {/* Additional stats section */}
        <div>Broken JSX</div>
        >;
          {};
                {stat.icon}
              </div>";
              <div className="text-2xl font-bold text-white mb-1">;
                {stat.value}
              </div>";
              <div className="text-zion-slate-light text-sm">{stat.label}</div>;
            </motion.div>;
          ))}
        </motion.div>;
";
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
          {};
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              transition={};
                stiffness: 300}}
            >";
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group h-full">;
                {/* Icon with enhanced background */}
                <div>Broken JSX</div>
                >";
                  <div className="text-white">{benefit.icon}</div>;
                </div>;

                {/* Stats badge */}
                <div>Broken JSX</div>
                >";
                  <span className="text-zion-cyan font-bold text-sm">;
                    {benefit.stats}
                  </span>;
                </div>;

                {/* Title and description */}";
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">;
                  {benefit.title}
                </h3>";
                <p className="text-zion-slate-light leading-relaxed mb-6">;
                  {benefit.description}
                </p>;

                {/* Features list */}
                <AnimatePresence>;
                  {};
                          <span>{feature}</span>;
                        </motion.div>) ) }
                    </motion.div>) }
                </AnimatePresence>;

                {/* Hover indicator */}";
                <div className="mt-4 text-zion-cyan/60 text-xs">;
                  {};
                    : 'Hover for details'}
                </div>;
              </div>;
            </motion.div>) ) }
        </div>;

        {/* Call to action */}
        <div>Broken JSX</div>
        >";
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">";
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">";
              <p className="text-white text-lg mb-4">;
                Ready to experience the Zion difference?;
              </p>";
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">;
                Get Started Today;
              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );,
}
'"`}