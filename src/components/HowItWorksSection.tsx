import React, { useState } from 'react';
export /**;
import { motion, AnimatePresence  } from 'framer-motion';
  {;

          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
  backgroundSize: '40px 40px';
}} />;      </div>;
      {/* Floating decorative elements */}";
      <div className="absolute inset-0">;
        <motion.div";
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30";
          animate={{ "rotate": "36 0 "}}
          transition = {;
  { scale: [1, 1.2,
  1];
}}
          transition = {;
  { duration: 3, repeat: Infinity,
  ease: "easeInOut";}}
        />;
      </div>;
";
      <div className="container mx-auto px-4 relative z-10">;
        <motion.div";
          className="text-center mb-20";
          initial = {;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}        >";
          <h2 className="text-4xl "md": "tex t-5xl "lg": tex t-6xl font-bold text-white mb-6">";
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>;
          </h2>";
          <p className="text-zion-slate-light text-lg "md": tex t-xl max-w-4xl mx-auto leading-relaxed">;
            Our streamlined process ensures your project success from concept to completion.Experience the Zion difference with our proven methodology.</p>;
        </motion.div>;
        {/* Stats section */"}
        <motion.div";
          className="grid grid-cols-2 "md": "gri d-cols-4 gap-6 mb-16 max-w-4xl mx-auto";
          variants={containerVariants"}";
          initial="hidden";
          whileInView="visible";
          {stats.map((stat, index) => (;
            <motion.div;
              key={index}
              variants={statsVariants}
              className="text-center p - 4 rounded-xl bg-zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue -light / 20";
              <div className="text-zion - cyan mb-2 flex justify -center">                {stat.icon}
              </div>";
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>";
              <div className="text-zion-slate-light text-sm">{stat.label}</div>;
            </motion.div>))}
        </motion.div>;
        <motion.div";
          className="relative";
          variants={containerVariants}";
          initial="hidden";
          whileInView="visible";
          {/* Enhanced connection line */}";
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden lg:block">";
            <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition = {;

  { duration: 2,
  delay: 0.5;

          {/* Steps grid */}";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">;
            {steps.map((step, index) => (;              <motion.div;
                key={index}
                variants={containerVariants}";
                className="relative group";
                onHoverStart={ () => setHoveredStep(index) }
                onHoverEnd={ () => setHoveredStep(null) }
                whileHover={{ "y": "-8 "}}
                transition = {;
";
  { opacity: 0, height: 0,
  y: 10;
}}
                        animate = {;
";
  { opacity: 1, height: "auto",
  y: 0;
}}
                        exit = {;

  { opacity: 0, height: 0,
  y: 10;
}}
                        transition={{ duration: 0.3 }}                      >;
                        <h4 className="text-zion - cyan font - semibold text-sm mb-3">Key "Features": "</h4>;
                        <div className="space - y-2">;
                          {step.details.map((detail", idx) => (<motion.div;
                              key={idx}
                              className="flex items - center gap-2 text-zion - slate - light / 80 text-xs"                              initial = {;
  { opacity: 0,
  x: -10;
}}
                              animate = {;

  { opacity: 1,
  x: 0;
}}
                              transition={{ delay: idx * 0.1 }}                            >";
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>;
                              <span>{detail}</span>;
                            </motion.div>) ) }
                        </div>;
                      </motion.div>) }
                  </AnimatePresence>;
                  {/* Hover indicator */}
                  <div className="mt-4 text-zion - cyan / 60 text-xs">                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
                  </div>;
                </div>;
                {/* Hover details */}
                <AnimatePresence>;
                  {hoveredStep === index && (;
                    <motion.div";
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-zion-blue-dark rounded-xl border border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20 backdrop-blur-sm z-10 min-w-[280px]";
                      initial = {;
  { opacity: 0, y: 10,
  scale: 0.95;
}}
                      animate = {;

  { opacity: 1, y: 0,
  scale: 1;
}}
                      exit = {;

  { opacity: 0, y: 10,
  scale: 0.95;
}}
                      transition={{ duration: 0.2 }}";
                      <h4 className="text-white font-semibold mb-3">Key "Features": "</h4>";
                      <ul className="space-y-2">;
                        {step.details.map((detail", idx) => (";
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">";
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>;
                            {detail}
                          </li>) ) }
                      </ul>;
                      {/* Arrow pointer */}";
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-blue-dark border-l border-t border-zion-cyan/30 rotate-45"></div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </motion.div>) ) }
          </div>;
        </motion.div>;
        {/* Call to action */}
        <motion.div";
          className="text-center mt-16";
          initial = {;
  { opacity: 0,
  y: 20 }}          whileInView = {;

  { opacity: 1,
  y: 0 }}          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.5 }}        >";
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">";
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">"              <p className="text-white text-lg mb-4">;
                Ready to start your project journey?;
              </p>";
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "fro m-zion-purple-light "hover": t o-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform "hover": scal e-105 "hover": shado w-lg "hover": shado w-zion-purple/25">;
                Get Started Today";
                <Rocket className="w-5 h-5"  />              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) "}
;
    </section>;) }
}
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</div>;
</motion>;
</motion>;
</motion>;
</div>