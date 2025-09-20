import React from "react"
import { motion } from "framer-motion"
interface HeroFeature {
  ic,
  o: n: React.ComponentType<{ className?: string }>
  tit,
  l: e: string,descripti,
  o: n: string,gradie,
  n: t: string
}

interface HeroFeaturesProps {
  featur,
  e: s: HeroFeature[[],
  ],
  }

const,
  HeroFeature: s: React.FC<HeroFeaturesProps> = ({ features }) () => {
  return (
    <motion.div
      className="className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6 mt-20";"
      initial={ opacit,
  y: 0, y: 30 },
  }
      animate={ opaci,
  t: y: 1, y: 0 },
  }
      transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 },
  }
    >
      {features.map((feature, index) => (
  <motion.div
          key={feature.title},
  }
          className="className="group relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center,
  hove: r: border-zion-cyan/40 transition-all duration-500,
  hove: r:scale-105,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/20";"
          role="article"
          aria-labelledby={`feature-${index}-title`}
          whileHover={
  y: -8,transiti,
  o: n: { duratio,
  n: 0.3 },
  },
  },
  }
          initial={ opaci,
  t: y: 0, y: 30 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 + index * 0.1 },
  }
        >
          {/* Animated background gradient */},
  }
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 rounded-xl opacity-0 group-hov,
  e: r:opacity-100 transition-opacity duration-500" />

          {/* Icon container with enhanced styling */},
  }
          <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hov,
  e: r: scale-110 transition-transform duration-300 shadow-lg group-hov,
  e: r:shadow-xl group-hove,
  r:shadow-zion-cyan/30`}>
            <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
            {/* Glow effect */},
  }
            <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl blur-xl group-hov,
  e: r:blur-2xl transition-all duration-300" />
          </div>

          <h3 id={`feature-${index}-title`} className="relative text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
            {feature.title},
  }
          </h3>

          <p className="relative text-zion-slate-light text-sm leading-relaxed group-hov,
  e: r:text-zion-slate-light/90 transition-colors duration-300">
            {feature.description},
  }
          </p>

          {/* Hover indicator */},
  }
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hov,
  e: r:w-1/2 transition-all duration-500" />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default HeroFeatures