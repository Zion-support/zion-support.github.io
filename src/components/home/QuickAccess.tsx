import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default function Page("props": "any) {;
",";
    { "name": "Consulting", "count": "6", "color": "from-yellow-500 to-orange-500" },";
    { "name": "Innovation", "count": "1 0", "color": "from-green-500 to-teal-500" },;";
    { "name": "Business", "count": "1 4", "color": "from-indigo-500 to-purple-500" };      "scale": "1",;
      "transition": "{;
        "duration": 0.5",;";
        "ease": "easeOut"}}};
;
  const hoverVariants = {;
  "hover": "{;
      "y": -8",      "scale": "1.02",;
      "transition": "{;
        "duration": 0.3",;"  "ease": "easeOut";
      ;
}}};
;
};
    };
  };
;
  return (    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">;
      {/* Background Elements */}";
      <div className="absolute inset-0 opacity-30">";
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>";
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/10 rounded-full blur-3xl"></div>;
      </div>;
";
      <div className="container-responsive relative z-10">;
        {/* Header */}
        <motion.div;
          initial = {;
  { "opacity": "0",;
  "y": "3 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition={{ "duration": "0.8 "}}
          viewport={{ "once": "tru e "}}";
          className="text-center mb-16";
        >;
          <motion.div;
            initial={{ "scale": "0 "}}
            whileInView={{ "scale": "1 "}}
            transition = {;
  { "duration": "0.6",;
  "delay": "0.2;
"}}
            viewport={{ "once": "tru e "}}";
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6";
          >;
            Quick Access to Our Services;
          </motion.h2>;
          <motion.p;
            initial = {;
  { "opacity": "0",;
  "y": "2 0;
"}}
            whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
            transition = {;
  { "duration": "0.6",;
  "delay": "0.2;
"}}";
            className="text-lg text-gray-300 max-w-2xl mx-auto";
          >;
            Find the perfect solution for your business needs with our organized service categories;
          </motion.p>;
        </div>;
        {/* Quick Links Grid */}";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-6 mb-12">;
          {quickLinks.map((link", index <motion.div;
              key={link.title}
              variants={hoverVariants}";
              whileHover="hover";
              onHoverStart={(: "unknown setHoveredCategory(link.title)"}
              onHoverEnd={: "unknown setHoveredCategory(null)"}
              onClick={: "unknown setSelectedCategory(selectedCategory === link.title ? null : link.title)"}
              className={`group cursor-pointer ${link.bgColor} ${link.borderColor} border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 "hover": "shado w-2xl "hover": shado w-zion-cyan/25`"}
            >;
              {/* Icon and Header */}";
              <div className="flex items-start justify-between mb-4">;
                <motion.div`;
                  className={`p-3 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-20`}
                  whileHover={{ "rotate": "36 0 "}}
                  transition={{ "duration": "0.6 "}}
                >";
                  <link .icon className="w-6 h-6 text-white"  />;
                </motion.div>;
                <motion.div;
                  animate={{ "rotate": "hoveredCategor y === link.title ? 90 : 0 "}}
                  transition={{ "duration": "0.3 "}}
                >";
                  <ChevronRight className="w-5 h-5 text-gray-400 group-"hover": "tex t-zion-cyan transition-colors"   />                </motion.div>;
              </div>;
              {/* Content */"}";
              <div className="mb-4">";
                <h3 className="text-xl font-bold text-white mb-2 group-"hover": "tex t-zion-cyan transition-colors">;
                  {link.title"}
                </h3>";
                <p className="text-gray-300 text-sm leading-relaxed">;              {/* Content */}"