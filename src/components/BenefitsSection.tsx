import React, { useState } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import { Bot, Clock, Globe, TrendingDown, CheckCircle, Rocket, Users, Star   } from "lucide-react";
interface Benefit {
  tit,
  l: e: string,descripti,
  o: n: string,ic,
  o: n: React.ReactNode,col,
  o: r: string,bgCol,
  o: r: string,sta,
  t: s: string,featur,
  e: s: string[[],
  ],
}
}
  }

const,
  benefit: s: Benefit[] = [
  {
  titl,
  e: "AI-Powered Matchmaking",descripti,
  o: n: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results."
    ic,
  o: n: <Bot className="w-8 h-8" />,col,
  o: r: "from-zion-cyan to-zion-cyan-dark",bgCol,
  o: r: "from-zion-cyan/20 to-zion-cyan-dark/20",sta,
  t: s: "95% Match Rate",featur,
  e: s: [
  "Intelligent service matching"
      "Real-time availability"
      "Expert talent matching"
      "Personalized recommendations"
],
  },
  {
  tit,
  l: e: "Global Availability",descripti,
  o: n: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations."
    ic,
  o: n: <Globe className="w-8 h-8" />,col,
  o: r: "from-zion-purple to-zion-purple-dark",bgCol,
  o: r: "from-zion-purple/20 to-zion-purple-dark/20",sta,
  t: s: "150+ Countries",featur,
  e: s: [
  "Worldwide talent pool"
      "24/7 availability"
      "Multi-language support"
      "Local expertise access"
],
  },
  {
  tit,
  l: e: "24/7 Support",descripti,
  o: n: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",ic,
  o: n: <Clock className="w-8 h-8" />,col,
  o: r: "from-zion-blue to-zion-blue-dark",bgCol,
  o: r: "from-zion-blue/20 to-zion-blue-dark/20",sta,
  t: s: "99.9% Uptime",featur,
  e: s: [
  "Round-the-clock assistance"
      "Expert technical support"
      "Rapid response times"
      "Proactive monitoring"
],
  },
  {
  tit,
  l: e: "Cost Reduction",descripti,
  o: n: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",ic,
  o: n: <TrendingDown className="w-8 h-8" />,col,
  o: r: "from-zion-green to-zion-green-dark",bgCol,
  o: r: "from-zion-green/20 to-zion-green-dark/20",sta,
  t: s: "40% Cost Savings",featur,
  e: s: [
  "Direct provider connections"
      "Competitive pricing"
      "Bulk discount options"
      "Transparent cost structure"
],
  },
  ]

export function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const const containerVariants = {
  = {
    hidd,
  e: n: { opacit,
  y: 0 },
  }
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
  const const statsVariants = {
  = {
    hidd,
  e: n: { opacit,
  y: 0, y: 20 },
  }
    visib,
  l: e: { opacit,
  y: 1, y: 0 },
  },
  }
  const stats = [
  { val,
  u: e: "500+", lab,
  e: l: "Projects Delivered", ic,
  o: n: <Rocket className="w-6 h-6" /> },
  },
  { val,
  u: e: "50+", lab,
  e: l: "Expert Team Members", ic,
  o: n: <Users className="w-6 h-6" /> },
  },
  { val,
  u: e: "99.9%", lab,
  e: l: "Client Satisfaction", ic,
  o: n: <Star className="w-6 h-6" /> },
  },
  { val,
  u: e: "24/7", lab,
  e: l: "Support Availability", ic,
  o: n: <Clock className="w-6 h-6" /> },
  },
  ]
  const const itemVariants = {
  = {
    hidd,
  e: n: { opacit,
  y: 0, y: 20 },
  }
    visib,
  l: e: { opacit,
  y: 1, y: 0 },
  },
  }
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */},
  }
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={
  backgroundIma,
  g: e: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`
          backgroundSi,
  z: e: '40px 40px'
},
  } />
      </div>

      {/* Floating decorative elements */},
  }
      <div className="absolute inset-0">
        <motion.div;
          className="className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30";"
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
          className="className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30";"
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
          className="className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20";"
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
          className="className="text-center mb-20";"
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
  m: d: text-5xl font-bold text-white mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Why Choose Zion?
          </h2>
          <p className="text-zion-slate-light text-lg m,
  d:text-xl max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value;
          </p>
        </motion.div>

        {/* Stats section */},
  }
        <motion.div;
          className="className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto";"
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
        >
          {stats.map((stat, index) => (
  <motion.div;
              key={index},
  }
              variants={statsVariants},
  }
              className="className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20";"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {React.createElement(stat.icon, { classNa,
  m: e: "w-6 h-6" })}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div;
          className="className="relative";"
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
        >
          {/* Enhanced connection line */},
  }
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2,
  hidden: lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue opacity-20 blur-sm"></div>
          </div>

          {/* Benefits */},
  }
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
  <motion.div;
                key={index},
  }
                className="className="relative group";"
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -50 : 50 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                onHoverStart={() => setHoveredIndex(index)},
  }
                onHoverEnd={() => setHoveredIndex(null)},
  }
              >
                {/* Connection point */},
  }
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full transform -translate-x-1/2 -translate-y-1/2,
  hidden: lg: block">
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full animate-ping opacity-75"></div>
                </div>

                <motion.div;
                  className="className="relative p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-blue-dark/80 backdrop-blur-sm border border-zion-cyan/20,
  hove: r:border-zion-cyan/40 transition-all duration-300 group-hov,
  e: r:scale-105";"
                  whileHover={ ,
  y: -10 },
  }
                >
                  {/* Icon */},
  }
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <div className={`text-gradient ${benefit.color}`}>
                      {benefit.icon},
  }
                    </div>
                  </div>

                  {/* Content */},
  }
                  <h3 className="text-2xl font-bold text-white mb-4 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                    {benefit.title},
  }
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {benefit.description},
  }
                  </p>

                  {/* Stats */},
  }
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-lg mb-6">
                    <span className="text-zion-cyan font-semibold">{benefit.stats}</span>
                  </div>

                  {/* Features */},
  }
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                        {feature},
  }
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect overlay */},
  }
                  <AnimatePresence>
                    {hoveredIndex === index && (
  <motion.div;
                        className="className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-2xl";"
                        initial={ opaci,
  t: y: 0 },
  }
                        animate={ opaci,
  t: y: 1 },
  }
                        exit={ opaci,
  t: y: 0 },
  }
                        transition={ durati,
  o: n: 0.3 },
  }
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
