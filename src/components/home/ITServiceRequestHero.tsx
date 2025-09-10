import React, { useState } from 'react';';';
import { _motion  } from 'framer-motion';';';
import React, { useState } from 'react';
import { _motion  } from 'framer-motion';  const _features = [{ "icon": "Cloc k", "text": "24/7 Availability", "color": "text-zion-cyan" },;
import { _motion  } from 'framer-motion';
import { _Link  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
  ];
;
    { "icon": "Glob e", "text": "Global Coverage", "color": "text-zion-purple" },;
    { "icon": "Shiel d", "text": "Certified Technicians", "color": "text-zion-cyan-light" }, { "icon": "Za p", "text": "Fast Response", "color": "text-zion-purple-light" };
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}};
  const _containerVariants = {
  hidden: { opacity: 0,
  y: 2 0
},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      };
    };
  };
  const _itemVariants = {
  hidden: { opacity: 0,
  y: 2 0
},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 };
    };
  };
  const _features = [{ icon: Cloc k, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Glob e, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
  ];

const features = [];
const services = [];
;
,";
    { "icon": "Glob e", "text": "Global Coverage", "color": "text-zion-purple" },";
    { "icon": "Shiel d", "text": "Certified Technicians", "color": "text-zion-cyan-light" },;";
    { "icon": "Za p", "text": "Fast Response", "color": "text-zion-purple-light" };
  ];
;
export function ITServiceRequestHero("props": "any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">;
      {/* Background Elements */"}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>;
      </div>;
      <motion.div";
        className="container mx-auto px-4 relative z-10";
        variants={containerVariants}";
        initial="hidden";
        whileInView="visible";
        viewport={{ once: tru e }}
"
        <div className="grid grid-cols-1 lg: gri d-cols-2 gap-16 items-center">
          {/* Left content */}"
          <motion.div variants={itemVariants} className="text-white">"
            <div className="flex items-center gap-3 mb-6">"
              <div className="p-2 bg-zion-cyan/20 rounded-lg">"
                <Zap className="w-6 h-6 text-zion-cyan"   />
              </div>"              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">

