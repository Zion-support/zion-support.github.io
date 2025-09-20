<<<<<<< HEAD
import React from 'react';
import { motion  } from 'framer-motion';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils";

      };
    };
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 30,
  scale: 0.95

},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      };
    };
  };

  const achievementVariants = {
  hidden: { opacity: 0,
  scale: 0.8

},
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 };
    };
  };

  const techVariants = {
  hidden: { opacity: 0,
  x: -20

},
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 };
    };
  };

        <motion.div

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {feature.title}
              </h3>

        <motion.div
=======
},;
  {;"
    icon: "📊",;"
    title: "Real-Time Analytics",;"
    description: "Comprehensive insights and reporting to make data-driven decisions instantly"};
]}}}}}}}}};
export function FeatureHighlights() {
  return ("
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <div className="max-w-7xl mx-auto px-6">
        <motion.div "
          className="text-center mb-16"
          initial = {

  { opacity: 0,
  y: 20

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >"
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">"
            <Award className="w-4 h-4"  />            <span>Why Choose Zion</span>
          </div>
"
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for the Future of Work
          </h2>
"
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of talent marketplace with cutting-edge AI,
            global reach, and enterprise-grade security.</p>
        </motion.div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{

                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}"
              className="group"
"
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>`
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
"
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
"
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              "
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {feature.title}
              </h3>
              "
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>;
          ))}
        </div>

        <motion.div "
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition = {

  { duration: 0.6,
  delay: 0.4

}}
        >"
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Experience the difference</span>"
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  )}


'"`
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
