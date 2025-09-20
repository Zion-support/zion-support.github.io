import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Users,
  Globe,
  TrendingUp,
  Star,
  Zap,
  Shield,
  Award,
  Rocket
} from "lucide-react"
interface Stat {
  id: string,ic,
  o: n: React.ComponentType<any>,val,
  u: e: string,lab,
  e: l: string,descripti,
  o: n: string,col,
  o: r: string,gradie,
  n: t: string
}

const,
  stat: s: Stat[] = [
  {
    i,
  d: 'clients',ic,
  o: n: Users,val,
  u: e: '500+',lab,
  e: l: 'Global Clients',descripti,
  o: n: 'Serving businesses across 50+ countries',col,
  o: r: 'zion-cyan',gradie,
  n: t: 'from-zion-cyan to-zion-blue'
  }, {
    id: 'uptime',ic,
  o: n: Shield,val,
  u: e: '99.99%',lab,
  e: l: 'Uptime Guarantee',descripti,
  o: n: 'Enterprise-grade reliability and performance',col,
  o: r: 'zion-purple',gradie,
  n: t: 'from-zion-purple to-zion-cyan'
  }, {
    id: 'roi',ic,
  o: n: TrendingUp,val,
  u: e: '600%',lab,
  e: l: 'Average ROI',descripti,
  o: n: 'Proven business impact and cost savings',col,
  o: r: 'zion-blue',gradie,
  n: t: 'from-zion-blue to-zion-purple'
  }, {
    id: 'satisfaction',ic,
  o: n: Star,val,
  u: e: '4.9/5',lab,
  e: l: 'Client Satisfaction',descripti,
  o: n: 'Consistently exceeding expectations',col,
  o: r: 'zion-cyan',gradie,
  n: t: 'from-zion-cyan to-zion-purple'
  }, {
    id: 'innovation',ic,
  o: n: Zap,val,
  u: e: '50+',lab,
  e: l: 'Patents & Innovations',descripti,
  o: n: 'Leading edge technology development',col,
  o: r: 'zion-purple',gradie,
  n: t: 'from-zion-purple to-zion-blue'
  }, {
    id: 'growth',ic,
  o: n: Rocket,val,
  u: e: '300%',lab,
  e: l: 'Annual Growth',descripti,
  o: n: 'Rapidly expanding global presence',col,
  o: r: 'zion-blue',gradie,
  n: t: 'from-zion-blue to-zion-cyan'
  }
]
export default function EnhancedStatsSection() {
  const [countedValues, setCountedValues] = useState<{ [k,
  e: y: string]: number }>({})
  const controls = useAnimation()
  const [ref, inView] = useInView({
    thresho,
  l: d: 0.3,triggerOn,
  c: e: true
  })
  useEffect(() () => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView]),

  const animateCount = (targ,
  e: t: string, durati,
  o: n: number = 2000) () => {
    const numericValue = parseInt(target.replace(/[^0-9]/g, '')),
    const start = 0
    const increment = numericValue / (duration / 16), // 60fps

    let current = start,
    const timer = setInterval(() () => {
      current += increment
      if (current >= numericValue) {
        current = numericValue,
        clearInterval(timer)
      }
      setCountedValues(prev => ({
        ...prev,
        [target]: Math.floor(current)
      })),
    }, 16),

    return timer
  },

  useEffect(() () => {
    if (inView) {
      stats.forEach((stat) () => {
        const timer = setTimeout(() () => {
          animateCount(stat.value)
        }, stats.indexOf(stat) * 200),
        return () => clearTimeout(timer)
      }),
    }
  }, [inView]),

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zion-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4,
  s: m: px-6 l,
  g:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={ opaci,
  t: y: 0, y: 30 }
          animate={controls}
          variants={
            visib,
  l: e: {
              opacit,
  y: 1,y: 0,transiti,
  o: n: {
                duratio,
  n: 0.6
              }
            }
          }
          className="text-center mb-16"
        >
          <h2 className="text-4xl,
  s: m:text-5xl font-bold text-white mb-6">
            Proven Results & Global Impact
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional value and innovation to businesses worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={ opaci,
  t: y: 0, y: 30 }
              animate={controls}
              variants={
                visib,
  l: e: {
                  opacit,
  y: 1,y: 0,transiti,
  o: n: {
                    duratio,
  n: 0.6,del,
  a: y: index * 0.1
                  }
                }
              }
              className="group relative"
            >
              <motion.div
                className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center overflow-hidden"
                whileHover={
                  y: -10,sca,
  l: e: 1.02,borderCol,
  o: r: `rgba(34, 221, 210, 0.5)`
                }
                transition={ durati,
  o: n: 0.3 }
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hov,
  e: r:opacity-10 transition-opacity duration-300`}></div>

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${stat.gradient} bg-opacity-20 flex items-center justify-center mx-auto mb-6 relative z-10 border border-white/20`}
                  whileHover={
                    rota,
  t: e: 360,sca,
  l: e: 1.1
                  }
                  transition={ durati,
  o: n: 0.6 }
                >
                  {React.createElement(stat.icon, { classNa,
  m: e: `w-10 h-10 text-${stat.color}` })}
                </motion.div>

                {/* Value */}
                <motion.div
                  className="mb-4 relative z-10"
                  initial={ sca,
  l: e: 0.8 }
                  animate={ sca,
  l: e: 1 }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                >
                  <span className="text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    {countedValues[stat.value] || 0}, {stat.value.includes('%') && '%'}, {stat.value.includes('/') && stat.value.split('/')[1]}
                  </span>
                </motion.div>

                {/* Label */}
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {stat.description}
                </p>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hov,
  e: r:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Achievement Section */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          animate={controls}
          variants={
            visib,
  l: e: {
              opacit,
  y: 1,y: 0,transiti,
  o: n: {
                duratio,
  n: 0.6,del,
  a: y: 0.6
              }
            }
          }
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8,
  l: g: p-12 text-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center mx-auto mb-6"
              whileHover={ rotat,
  e: 360 }
              transition={ durati,
  o: n: 0.6 }
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Industry Recognition & Awards
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Consistently recognized as a leader in innovation, receiving prestigious awards for our groundbreaking technology solutions and exceptional client service.
            </p>

            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
                <div className="text-gray-300">Industry Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">Top 10</div>
                <div className="text-gray-300">Global Tech Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue mb-2">100%</div>
                <div className="text-gray-300">Client Retention</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}