import React, { useState } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import { Search, Users, FileText, Rocket, CheckCircle, ArrowRight, Clock, Target, TrendingUp, Award, Zap, Shield   } from "lucide-react";
const steps = [
  {
    ic,
  o: n: <Search className="w-8 h-8" />,tit,
  l: e: "Discover",descripti,
  o: n: "Browse our comprehensive catalog of services, talent, and solutions",
    col,
  o: r: "from-zion-cyan to-zion-cyan-dark",bgCol,
  o: r: "from-zion-cyan/20 to-zion-cyan-dark/20",detai,
  l: s: [
      "AI-powered search and filtering"
      "Curated service categories",
      "Expert talent matching",
      "Real-time availability"
    ],
    durati,
  o: n: "1-2 hours",succe,
  s: s: "95% match rate"
  }, {
    ic,
  o: n: <Users className="w-8 h-8" />,tit,
  l: e: "Connect",descripti,
  o: n: "Get matched with the perfect team or service for your project",
      col,
  o: r: "from-zion-purple to-zion-purple-dark",
      bgCol,
  o: r: "from-zion-purple/20 to-zion-purple-dark/20",
      detai,
  l: s: [
      "Smart matching algorithm"
      "Profile verification",
      "Portfolio review",
      "Direct communication"
    ],
    durati,
  o: n: "2-4 hours",succe,
  s: s: "98% satisfaction"
  }, {
    ic,
  o: n: <FileText className="w-8 h-8" />,tit,
  l: e: "Plan",descripti,
  o: n: "Collaborate on project requirements, timeline, and deliverables",
    col,
  o: r: "from-zion-blue to-zion-blue-dark",bgCol,
  o: r: "from-zion-blue/20 to-zion-blue-dark/20",detai,
  l: s: [
      "Interactive project planning"
      "Timeline optimization",
      "Resource allocation",
      "Risk assessment"
    ],
    durati,
  o: n: "4-8 hours",succe,
  s: s: "90% on-time delivery"
  }, {
    ic,
  o: n: <Rocket className="w-8 h-8" />,tit,
  l: e: "Execute",descripti,
  o: n: "Watch your vision come to life with our expert execution",
      col,
  o: r: "from-zion-cyan-light to-zion-cyan",
      bgCol,
  o: r: "from-zion-cyan-light/20 to-zion-cyan/20",
      detai,
  l: s: [
      "Agile development process"
      "Regular progress updates",
      "Quality assurance",
      "Performance monitoring"
    ],
    durati,
  o: n: "1-4 weeks",succe,
  s: s: "99% quality score"
  }, {
    ic,
  o: n: <CheckCircle className="w-8 h-8" />,tit,
  l: e: "Deliver",descripti,
  o: n: "Receive your completed project with ongoing support and maintenance",
      col,
  o: r: "from-zion-purple-light to-zion-purple",
      bgCol,
  o: r: "from-zion-purple-light/20 to-zion-purple/20",
      detai,
  l: s: [
      "Comprehensive testing"
      "Documentation delivery",
      "Training and handover",
      "Post-launch support"
    ],
    durati,
  o: n: "Ongoing",succe,
  s: s: "100% client retention"
  },
  ]
const stats = [
  { ic,
  o: n: <Clock className="w-6 h-6" />, val,
  u: e: "3x Faster", lab,
  e: l: "Project Delivery" }, { ic,
  o: n: <Target className="w-6 h-6" />, val,
  u: e: "99.9%", lab,
  e: l: "Success Rate" }, { ic,
  o: n: <TrendingUp className="w-6 h-6" />, val,
  u: e: "50%", lab,
  e: l: "Cost Reduction" }, { ic,
  o: n: <Award className="w-6 h-6" />, val,
  u: e: "1000+", lab,
  e: l: "Projects Completed" },
  ]
export function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
const [activeStep, setActiveStep] = useState<number>(0)
const containerVariants = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.2,delayChildr,
  e: n: 0.1;
      },
  },
  }
const statsVariants = {
    hidd,
  e: n: { opacit,
  y: 0, sca,
  l: e: 0.8 }
    visib,
  l: e: {
      opacit,
  y: 1,sca,
  l: e: 1,transiti,
  o: n: {
        duratio,
  n: 0.5,ea,
  s: e: "easeOut"
      },
  },
  }
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={
          backgroundIma,
  g: e: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`
          backgroundSi,
  z: e: '40px 40px'
        },
  } />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div;
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
          animate={ rota,
  t: e: 360 },
  }
          transition={ durati,
  o: n: 20, repe,
  a: t: Infinity, ea,
  s: e: "linear" },
  }
        />
        <motion.div;
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
          animate={ rota,
  t: e: -360 },
  }
          transition={ durati,
  o: n: 25, repe,
  a: t: Infinity, ea,
  s: e: "linear" },
  }
        />
        <motion.div;
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20"
          animate={ sca,
  l: e: [1, 1.2, 1],
  },
  }
          transition={ durati,
  o: n: 3, repe,
  a: t: Infinity, ea,
  s: e: "easeInOut" },
  }
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div;
          className="text-center mb-20"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6 },
  }
        >
          <h2 className="text-4xl,
  m: d: text-5xl,
  l: g:text-6xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg m,
  d:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion.
            Experience the Zion difference with our proven methodology.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div;
          className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
        >
          {stats.map((stat, index) => (
            <motion.div;
              key={index}
              variants={statsVariants}
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div;
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
        >
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2,
  hidden: lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div;
                key={index}
                variants={containerVariants}
                className="relative group"
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={ y: -8 },
  }
                transition={ ty,
  p: e: "spring", stiffne,
  s: s: 300 },
  }
              >
                {/* Step card */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:shadow-2xl,
  hove: r:shadow-zion-cyan/20 group-hove,
  r:bg-zion-blue-dark h-full">
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hov,
  e: r: shadow-xl transition-all duration-300 group-hove,
  r:scale-110`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Stats badge */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.bgColor} border border-zion-cyan/30 mb-4`}>
                    <span className="text-zion-cyan font-bold text-sm">{step.duration}</span>
                  </div>

                  {/* Success metric */}
                  <div className="text-zion-slate-light text-sm font-medium">
                    {step.success}
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Hover details */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div;
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-zion-blue-dark rounded-xl border border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20 backdrop-blur-sm z-10 min-w-[280px]"
                      initial={ opaci,
  t: y: 0, y: 10, sca,
  l: e: 0.95 },
  }
                      animate={ opaci,
  t: y: 1, y: 0, sca,
  l: e: 1 },
  }
                      exit={ opaci,
  t: y: 0, y: 10, sca,
  l: e: 0.95 },
  }
                      transition={ durati,
  o: n: 0.2 },
  }
                    >
                      <h4 className="text-white font-semibold mb-3">Key,
  Feature: s:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-blue-dark border-l border-t border-zion-cyan/30 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div;
          className="text-center mt-16"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.5 },
  }
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to get started with your project?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple,
  hove: r: from-zion-cyan-light,
  hove: r:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-lg hove,
  r:shadow-zion-cyan/25">
                Start Your Project;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}