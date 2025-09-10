import React from 'react';
<<<<<<< HEAD
import { motion  } from 'framer-motion';
;
,;
  {;
    "icon": "⚡",;
    "title": "Lightning Fast Performance",;
    "description": "Optimized solutions that deliver exceptional speed and efficiency for your business needs";
  },;
  {;
    "icon": "🔒",;
    "title": "Enterprise Security",;
    "description": "Bank-level security protocols and compliance standards to protect your valuable data";
  },;
  {;
    "icon": "🌐",;
    "title": "Global Scalability",;
    "description": "Solutions that scale seamlessly from startup to enterprise across multiple regions";
  },;
  {;
    "icon": "🤖",;
    "title": "AI-Powered Intelligence",;
    "description": "Smart automation and predictive analytics that adapt to your business requirements";
  }, {;
    "icon": "📊",;
    "title": "Real-Time Analytics",;
    "description": "Comprehensive insights and reporting to make data-driven decisions instantly";
  };
];
;
      };
    };
  };
;
  const itemVariants = {;
  "hidden": "{ "opacity": 0", "y": "3 0",;
  "scale": "0.95;
"},;
    "visible": "{;
      "opacity": 1",;
      "y": "0",;
      "scale": "1",;
      "transition": "{;
        "duration": 0.6",;
        "ease": "easeOut";
      };
    };
  };
;
  const achievementVariants = {;
  "hidden": "{ "opacity": 0",;
  "scale": "0.8;
"},;
    "visible": "{;
      "opacity": 1",;
      "scale": "1",;
      "transition": "{ "duration": 0.5 "};
    };
  };
;
  const techVariants = {;
  "hidden": "{ "opacity": 0",;
  "x": "-20;
"},;
    "visible": "{;
      "opacity": 1",;
      "x": "0",;
      "transition": "{ "duration": 0.5 "};
    };
  };
export function FeatureHighlights("props": "any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div          className="text-center mb-16";
          initial = {;
  { "opacity": 0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6 "}}
        >";
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">";
            <Award className="w-4 h-4"   />            <span>Why Choose Zion</span>;
          </div>;
";
          <h2 className="text-3xl "md": "tex t-4xl "lg": tex t-5xl font-bold text-white mb-6">;
            Built for the Future of Work;
          </h2>;
";
          <p className="text-lg "md": tex t-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">;
            Experience the next generation of talent marketplace with cutting-edge AI",;
            global reach, and enterprise-grade security.</p>;
        </motion.div>;
";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-8">;
          {features.map((feature", index (;
            <motion.div;
              key={index}
              variants={itemVariants}
              whileHover={{;
                "y": "-5",;
                "scale": "1.02",;
                "transition": "{ "duration": 0.3 "}
              }}";
              className="group";
";
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 "hover": "borde r-white/20 transition-all duration-300">;
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color"} rounded-lg flex items-center justify-center mb-4 group-"hover": "scal e-110 transition-transform duration-300`"}>`;
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />;
                </div>;
";
                <h3 className="text-xl font-semibold text-white mb-2 group-"hover": "tex t-blue-400 transition-colors duration-300">;
                  {feature.title"}
                </h3>;
";
                <p className="text-gray-400 group-"hover": "tex t-gray-300 transition-colors duration-300">;
                  {feature.description"}
                </p>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3 group-"hover": "tex t-blue-400 transition-colors duration-200">;
                {feature.title"}
              </h3>;
              <p className="text-gray-400 text-sm leading-relaxed">;                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}"
              className="group"
"
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover: borde r-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover: scal e-110 transition-transform duration-300`}>`
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
=======
import { motion } from 'framer-motion';
import { Brain, Globe, Shield, Users, TrendingUp, CheckCircle, ArrowRight, Star, Award } from 'lucide-react';
const highlights = [
    {
        icon: Brain,
        title: 'AI-Powered Intelligence',
        description: 'Advanced machine learning algorithms that continuously learn and adapt to provide smarter solutions.',
        features: ['Predictive Analytics', 'Smart Recommendations', 'Automated Workflows'],
        color: 'from-zion-purple to-zion-purple-dark',
        bgColor: 'bg-zion-purple/10',
        borderColor: 'border-zion-purple/20'
    },
    {
        icon: Globe,
        title: 'Global Network',
        description: 'Connect with professionals and businesses from over 150 countries worldwide.',
        features: ['Multi-language Support', 'Local Expertise', '24/7 Availability'],
        color: 'from-zion-cyan to-zion-cyan-dark',
        bgColor: 'bg-zion-cyan/10',
        borderColor: 'border-zion-cyan/20'
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
        features: ['Data Protection', 'Access Control', 'Audit Trails'],
        color: 'from-zion-blue to-zion-blue-dark',
        bgColor: 'bg-zion-blue/10',
        borderColor: 'border-zion-blue/20'
    }
];
const achievements = [
    { icon: Award, number: '50+', label: 'Industry Awards', color: 'text-yellow-400' },
    { icon: Users, number: '1M+', label: 'Active Users', color: 'text-zion-cyan' },
    { icon: TrendingUp, number: '300%', label: 'Growth Rate', color: 'text-green-400' },
    { icon: Star, number: '4.9/5', label: 'User Rating', color: 'text-zion-purple' }
];
const technologies = [
    'Machine Learning', 'Blockchain', 'Cloud Computing', 'IoT', 'Cybersecurity', 'Data Analytics'
];
export function FeatureHighlights() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const achievementVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };
    const techVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };
    return (<section className="py-20 bg-gradient-to-b from-zion-slate-dark to-zion-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Why Industry Leaders
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Choose Zion Tech Group
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover the cutting-edge features and capabilities that make us the preferred choice for forward-thinking organizations
          </p>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {highlights.map((highlight, index) => (<motion.div key={index} variants={itemVariants} whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
            }} className="group">
              <div className={`h-full p-8 rounded-3xl ${highlight.bgColor} ${highlight.borderColor} border-2 hover:border-opacity-40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white"/>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-200">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {highlight.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {highlight.features.map((feature, idx) => (<li key={idx} className="flex items-center gap-3 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0"/>
                        <span className="text-sm">{feature}</span>
                      </li>))}
                  </ul>
>>>>>>> origin/backup-improvements-20250827-015311
                </div>
"
                <h3 className="text-xl font-semibold text-white mb-2 group-hover: tex t-blue-400 transition-colors duration-300">
                  {feature.title}
"
                <p className="text-gray-400 group-hover: tex t-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-white mb-3 group-hover: tex t-blue-400 transition-colors duration-200">
                {feature.title}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>;
            </motion.div>;
          ))}
        </div>;
        <motion.div          className="mt-16 text-center";
          initial={{ "opacity": "0", "y": "2 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.4;
"}}
        >";
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">;
            <span>Experience the difference</span>";
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  )}
;
'"`;
</motion>;
</motion>;
</motion>
=======
            </motion.div>))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div className="bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 rounded-3xl p-8 md:p-12 border border-zion-blue-light/20 mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-zion-slate-light text-lg">
              Our achievements speak volumes about our commitment to excellence
            </p>
          </div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {achievements.map((achievement, index) => (<motion.div key={index} variants={achievementVariants} className="text-center group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className={`inline-flex p-4 rounded-full bg-white/10 mb-4 ${achievement.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8"/>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-zion-slate-light text-sm">{achievement.label}</div>
              </motion.div>))}
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold text-white mb-8">
            Cutting-Edge Technology Stack
          </h3>
          
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {technologies.map((tech, index) => (<motion.div key={index} variants={techVariants} className="px-6 py-3 bg-zion-blue/20 border border-zion-blue-light/30 rounded-full text-zion-cyan hover:bg-zion-blue/30 hover:border-zion-blue-light/50 transition-all duration-300 cursor-pointer" whileHover={{ scale: 1.05, y: -2 }}>
                {tech}
              </motion.div>))}
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-10 py-4 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Explore Our Technology
              <ArrowRight className="w-6 h-6"/>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);
}
>>>>>>> origin/backup-improvements-20250827-015311
