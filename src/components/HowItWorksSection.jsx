import { useCallback  } from "react";
import React, { useState } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield   } from "lucide-react";
const steps = [
    {
        ic,
  o: n: <Search className="w-8 h-8"/>,tit,
  l: e: "Discover",descripti,
  o: n: "Browse our comprehensive catalog of 100+ micro SAAS services and solutions",
      col,
  o: r: "from-zion-cyan to-zion-cyan-dark",
      bgCol,
  o: r: "from-zion-cyan/20 to-zion-cyan-dark/20",
      detai,
  l: s: [
            "AI-powered search and filtering"
            "Curated service categories",
            "Industry-specific solutions",
            "Real-time availability"
        ],
        durati,
  o: n: "Immediate",succe,
  s: s: "95% match rate"
    }, {
        ic,
  o: n: <Users className="w-8 h-8"/>,tit,
  l: e: "Connect",descripti,
  o: n: "Get matched with the perfect service or solution for your business needs",
      col,
  o: r: "from-zion-purple to-zion-purple-dark",
      bgCol,
  o: r: "from-zion-purple/20 to-zion-purple-dark/20",
      detai,
  l: s: [
            "Smart matching algorithm"
            "Service verification",
            "Portfolio review",
            "Direct communication"
        ],
        durati,
  o: n: "2-4 hours",succe,
  s: s: "98% satisfaction"
    }, {
        ic,
  o: n: <FileText className="w-8 h-8"/>,tit,
  l: e: "Plan",descripti,
  o: n: "Collaborate on requirements, timeline, and implementation strategy",
        col,
  o: r: "from-zion-blue to-zion-blue-dark",bgCol,
  o: r: "from-zion-blue/20 to-zion-blue-dark/20",detai,
  l: s: [
            "Interactive planning"
            "Timeline optimization",
            "Resource allocation",
            "Risk assessment"
        ],
        durati,
  o: n: "4-8 hours",succe,
  s: s: "90% on-time delivery"
    }, {
        ic,
  o: n: <Rocket className="w-8 h-8"/>,tit,
  l: e: "Execute",descripti,
  o: n: "Watch your vision come to life with our expert implementation",
      col,
  o: r: "from-zion-cyan-light to-zion-cyan",
      bgCol,
  o: r: "from-zion-cyan-light/20 to-zion-cyan/20",
      detai,
  l: s: [
            "Agile implementation"
            "Regular progress updates",
            "Quality assurance",
            "Performance monitoring"
        ],
        durati,
  o: n: "1-4 weeks",succe,
  s: s: "99% quality score"
    }, {
        ic,
  o: n: <CheckCircle className="w-8 h-8"/>,tit,
  l: e: "Deliver",descripti,
  o: n: "Receive your completed solution with ongoing support and maintenance",
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
  o: n: <Clock className="w-6 h-6"/>, val,
  u: e: "3x Faster", lab,
  e: l: "Implementation" }, { ic,
  o: n: <Target className="w-6 h-6"/>, val,
  u: e: "99.9%", lab,
  e: l: "Success Rate" }, { ic,
  o: n: <TrendingUp className="w-6 h-6"/>, val,
  u: e: "50%", lab,
  e: l: "Cost Reduction" }, { ic,
  o: n: <Award className="w-6 h-6"/>, val,
  u: e: "1000+", lab,
  e: l: "Services Delivered" },
  ]
export function HowItWorksSection() {
    const [hoveredStep, setHoveredStep] = useState(null)
const [activeStep, setActiveStep] = useState(0)
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
const itemVariants = {
        hidd,
  e: n: { ,
  y: 30, opaci,
  t: y: 0 }
        visib,
  l: e: {
            opacit,
  y: 1,y: 0,transiti,
  o: n: {
                duratio,
  n: 0.8,ea,
  s: e: "easeOut"
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
  n: 0.6,ea,
  s: e: "easeOut"
            },
  },
  }
    return (
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div;
                    className="text-center mb-16" 
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
                    <motion.div;
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 backdrop-blur-sm rounded-full border border-zion-cyan/30 mb-6"
                        initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
                        whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                        viewport={ on,
  c: e: true },
  }
                        transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
                    >
                        <Rocket className="h-5 w-5 text-zion-cyan" />
                        <span className="text-zion-cyan text-sm font-medium">How It Works</span>
                    </motion.div>
                    
                    <motion.h2;
                        className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6"
                        initial={ opacit,
  y: 0, y: 20 },
  }
                        whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                        viewport={ on,
  c: e: true },
  }
                        transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 },
  }
                    >
                        Simple 5-Step Process;
                    </motion.h2>
                    
                    <motion.p;
                        className="text-xl text-zion-slate-light max-w-3xl mx-auto"
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
  a: y: 0.4 },
  }
                    >
                        From discovery to delivery, our streamlined process ensures you get the right;
                        micro SAAS solution quickly and efficiently.
                    </motion.p>
                </motion.div>

                {/* Steps Grid */}
                <motion.div;
                    className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-5 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={ on,
  c: e: true },
  }
                >
                    {steps.map((step, index) => (
                        <motion.div;
                            key={index}
                            className="group relative"
                            variants={itemVariants}
                            onHoverStart={() => setHoveredStep(index)}
                            onHoverEnd={() => setHoveredStep(null)}
                            onClick={() => setActiveStep(index)}
                        >
                            {/* Step Number */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                {index + 1}
                            </div>

                            {/* Step Card */}
                            <div className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300,
  hove: r: border-zion-cyan/30,
  hove: r:transform hove,
  r:scale-105 cursor-pointer`}>
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white text-center mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zion-slate-light text-center mb-4 text-sm">
                                    {step.description}
                                </p>

                                {/* Details on Hover */}
                                <AnimatePresence>
                                    {hoveredStep === index && (
                                        <motion.div;
                                            initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                                            animate={ opaci,
  t: y: 1, heig,
  h: t: "auto" },
  }
                                            exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                                            transition={ durati,
  o: n: 0.3 },
  }
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-white/20 pt-4 mt-4">
                                                <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key,
  Feature: s:</h4>
                                                <ul className="space-y-2 mb-4">
                                                    {step.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-xs">
                                                            <Zap className="h-3 w-3 text-zion-cyan flex-shrink-0" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <div className="grid grid-cols-2 gap-4 text-xs">
                                                    <div className="text-center">
                                                        <div className="text-zion-cyan font-semibold">Duration</div>
                                                        <div className="text-zion-slate-light">{step.duration}</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-zion-cyan font-semibold">Success Rate</div>
                                                        <div className="text-zion-slate-light">{step.success}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div;
                    className="text-center mb-16"
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
                    <h3 className="text-2xl font-bold text-white mb-8">
                        Why Choose Zion Tech Group?
                    </h3>
                    
                    <motion.div;
                        className="grid grid-cols-2,
  m: d:grid-cols-4 gap-8"
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
                                className="text-center group"
                                whileHover={ sca,
  l: e: 1.05 },
  }
                                transition={ ty,
  p: e: "spring", stiffne,
  s: s: 400 },
  }
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hov,
  e: r: shadow-lg group-hove,
  r:shadow-zion-cyan/25 transition-all duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-zion-cyan mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-zion-slate-light text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div;
                    className="text-center"
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
  a: y: 0.6 },
  }
                >
                    <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                        <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
                            <p className="text-white text-lg mb-4">
                                Ready to get started with your micro SAAS solution?
                            </p>
                            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple,
  hove: r:from-zion-cyan-dark,
  hove: r:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25">
                                    <Shield className="w-5 h-5" />
                                    Get Started Today;
                                </button>
                                <button className="inline-flex items-center gap-3 border-2 border-zion-cyan text-zion-cyan,
  hove: r:bg-zion-cyan hove,
  r:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                    <Users className="w-5 h-5" />
                                    Schedule Demo;
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
