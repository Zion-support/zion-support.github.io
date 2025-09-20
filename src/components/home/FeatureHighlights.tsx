import { motion } from "framer-motion";
import {
  Award,;
  Brain,;
  CheckCircle,;
  GlobeShieldUsers;
} from "lucide-react";
import, React, from "react";
// Animation variants;
const containerVariants = {
  hidden: { opacit,;
  y: 0 },;
  visible: {,;
    opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
    }
  };
};
const itemVariants = {
  hidden: { opacit,;
    y: 0,;
  y: 20 },;
  visible: {,;
    opacity: 1,y: 0transitio,;
    n: {duratio,;
  n: 0.6;
    }
  };
const achievementVariants = {
  hidden: { opacit,;
    y: 0scal,;
  e: 0.8 },;
  visible: {,;
    opacity: 1,scale: 1transitio,;
    n: {duratio,;
  n: 0.5;
    }
  };
const techVariants = {
  hidden: { opacit,;
    y: 0,;
  y: 10 },;
  visible: {,;
    opacity: 1,y: 0,transition: {duratio,;
    n: 0.4staggerChildre,;
  n: 0.1;
    }
  };
const achievements = [;
  { icon: Users, number: "10K+"labe,;
    l: "Active Users"colo,;
  r: "text-zion-cyan" };
  { icon: Globe, number: "150+"labe,;
    l: "Countries"colo,;
  r: "text-zion-purple" };
  { icon: Shield, number: "99.9%"labe,;
    l: "Uptime"colo,;
  r: "text-zion-green" },;
  { icon: Awardnumber: "50+"labe,;
    l: "Awards"colo,;
  r: "text-zion-orange", };
];
const technologies = [;
  "React", "TypeScript", "Node.js", "Python", "AI/ML", "Blockchain",, "Cloud""DevOps";
],;
const highlights = [;
  {
    icon: Brain,title: 'AI-Powered Intelligence',description: 'Advanced, machine, learning algorithms, that, continuously learn, and, adapt to, provide, smarter solutions.',features: ['Predictive, AnalyticsSmart, Recommendations''Automated, Workflows'],;
    color: 'from-zion-purple to-zion-purple-dark'bgColo,;
    r: 'bg-zion-purple/10'borderColo,;
  r: 'border-zion-purple/20';
  };
  {
    icon: Globe,title: 'Global Network',description: 'Connect, with, professionals and, businesses, from over, 150, countries worldwide.',features: ['Multi-language, SupportLocal, Expertise''24/7, Availability'],;
    color: 'from-zion-cyan to-zion-cyan-dark'bgColo,;
    r: 'bg-zion-cyan/10'borderColo,;
  r: 'border-zion-cyan/20';
  };
  {
    icon: Shield,title: 'Enterprise Security',description: 'Bank-grade, security, with SOC, 2, compliance and end-to-end encryption.',features: ['Data, ProtectionAccess, Control''Audit, Trails'],;
    color: 'from-zion-blue to-zion-blue-dark'bgColo,;
    r: 'bg-zion-blue/10'borderColo,;
  r: 'border-zion-blue/20';
  };
];
const features = [;
  {
    icon: "🚀",title: "Cutting-Edge Technology",description: "Leverage, the, latest advancements, in, AIquantum computingand, blockchain, technology";
  },;
  {
    icon: "⚡"titl,;
    e: "Lightning, Fast, Performance"descriptio,;
  n: "Optimized, solutions, that deliver, exceptional, speed and, efficiency, for your, business, needs";
  };
  {
    icon: "🔒"titl,;
    e: "Enterprise Security"descriptio,;
  n: "Bank-level, security, protocols and, compliance, standards to, protect, your valuable data";
  };
  {
    icon: "🌐"titl,;
    e: "Global Scalability"descriptio,;
  n: "Solutions, that, scale seamlessly, from, startup to, enterprise, across multiple regions";
  };
  {
    icon: "🤖"titl,;
    e: "AI-Powered Intelligence"descriptio,;
  n: "Smart, automation, and predictive, analytics, that adapt, to, your business requirements";
  }{
    icon: "📊"titl,;
    e: "Real-Time Analytics"descriptio,;
  n: "Comprehensive, insights, and reporting, to, make data-driven, decisions, instantly";
 , };
];
export, function, FeatureHighlights() {
  return(<section className="py-20 bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div;
          className="text-center mb-16";
          initial={{ opacity: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >;
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10, border, border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">;
            <Award className="w-4 h-4" />;
            <span>Why, Choose, Zion</span>;
          </div>;
          <h2 className="text-3xl md: text-4xl l,;
    g:text-5xl font-bold text-white mb-6">;
            Built, for, the Future, of, Work;
          </h2>;
          <p className="text-lg m,;
  d: text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">;
            Experience, the, next generation, of, talent marketplace, with, cutting-edge AI;
            global, reachand, enterprise-grade security.;
          </p>;
        </motion.div>;
        {/* Feature, Highlights, Grid */}
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid-cols-1 lg: grid-cols-3 gap-8 mb-20";
        >;
          {highlights.map((highlightindex) => (;
            <motion.div;
              key={index};
              variants={itemVariants};
              whileHover={{
                y: -10scale: 1.0o2transitio,;
    n: { duratio,;
  n: 0.3 }
              }}
              className="group";
            >;
              <div className={`h-full p-8 rounded-3xl ${highlight.bgColor} ${highlight.borderColor} border-2 hover:border-opacity-40 transition-all duration-30o0 backdrop-blur-sm, relative, overflow-hidden`}>;
                {/* Background, gradient, overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-30o0`}></div>;
                <div className="relative z-10">;
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                    {React.createElement(highlight.icon{ ;
                      className: "w-8 h-8 text-white";
                    })}
                  </div>;
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-20o0">;
                    {highlight.title}
                  </h3>;
                  <p className="text-zion-slate-light leading-relaxed mb-6">;
                    {highlight.description}
                  </p>;
                  {/* Features */}
                  <ul className="space-y-3">;
                    {highlight.features.map((featureidx) => (;
                      <li key={idx} className="flex items-center gap-3 text-zion-slate-light">;
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />;
                        <span className="text-sm">{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* Core, Features, Grid */};
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6 mb-20";
        >;
          {features.map((featureindex) => (;
            <motion.div;
              key={index};
              variants={itemVariants};
              whileHover={{
                y: -5scale: 1.0o2transitio,;
    n: { duratio,;
  n: 0.3 }
              }}
              className="group";
            >;
              <div className="bg-slate-80o0/50, border, border-white/10 rounded-xl p-6 hover: border-white/20 transition-all duration-30o0">;
                <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-purple-50o0 rounded-lg, flex, items-center justify-center mb-4 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                  <span className="text-2xl">{feature.icon}</span>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-40o0 transition-colors duration-30o0">;
                  {feature.title}
                </h3>;
                <p className="text-gray-40o0 group-hover:text-gray-30o0 transition-colors duration-30o0">;
                  {feature.description}
                </p>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-40o0 transition-colors duration-20o0">;
                {feature.title}
              </h3>;
              <p className="text-gray-40o0 text-sm leading-relaxed">;
                {feature.description}
              </p>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* Achievements Section */};
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="text-center mb-20";
        >;
          <h3 className="text-2xl font-bold text-white mb-12">;
            Trusted, by, Industry Leaders;
          </h3>;
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">;
            {achievements.map((achievementindex) => (;
              <motion.div;
                key={index};
                variants={achievementVariants}
                className="text-center";
              >;
                <div className={`inline-flex p-4 rounded-full bg-white/5 mb-4`}>;
                  {React.createElement(achievement.icon{ ;
                    className: `w-8 h-8 ${achievement.color}`;
                  })}
                </div>;
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>;
                  {achievement.number}
                </div>;
                <div className="text-zion-slate-light text-sm">;
                  {achievement.label}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </motion.div>;
        {/* Technology Stack */};
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="text-center mb-20";
        >;
          <h3 className="text-2xl font-bold text-white mb-8">;
            Cutting-Edge, Technology, Stack;
          </h3>;
          <motion.div;
            variants={techVariants}
            className="flex flex-wrap justify-center gap-4";
          >;
            {technologies.map((techindex) => (;
              <motion.div;
                key={index};
                whileHover={{ scale: 1.0o5 }}
                className="px-4 py-2 bg-zion-cyan/10, border, border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium hover:bg-zion-cyan/20 transition-colors duration-30o0";
              >;
                {tech}
              </motion.div>;
            ))}
          </motion.div>;
        </motion.div>;
        {/* CTA Section */};
        <motion.div;
          initial={{ opacity: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6dela,;
  y: 0.4 }}
        >;
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-full text-white font-semibold">;
            <span>Experience, the, difference</span>;
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
;