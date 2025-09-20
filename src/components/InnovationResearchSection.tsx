import React from "react"
import { motion } from "framer-motion"
import {
  Lightbulb
  TestTube
  BookOpen
  Award
  Users
  TrendingUp
  Rocket
  Brain
  Microscope
  Target
} from "lucide-react"
const researchAreas = [
  {
  ic,
  o: n: "🧠",tit,
  l: e: "Artificial Intelligence",descripti,
  o: n: "Advanced AI algorithms and neural network architectures",progre,
  s: s: 85,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  ic,
  o: n: "⚛️",tit,
  l: e: "Quantum Computing",descripti,
  o: n: "Quantum algorithms and quantum machine learning",progre,
  s: s: 70,col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  ic,
  o: n: "🔗",tit,
  l: e: "Blockchain Technology",descripti,
  o: n: "Next-generation blockchain and Web3 solutions",progre,
  s: s: 90,col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  ic,
  o: n: "🌐",tit,
  l: e: "Edge Computing",descripti,
  o: n: "Distributed computing and IoT optimization",progre,
  s: s: 80,col,
  o: r: "from-orange-500 to-red-500"
},
  ]
const innovationMetrics = [
  { lab,
  e: l: "Research Papers", val,
  u: e: "30+", ic,
  o: n: "📚" },
  },
  { lab,
  e: l: "Patents Filed", val,
  u: e: "15+", ic,
  o: n: "📋" },
  },
  { lab,
  e: l: "R&D Investment", val,
  u: e: "$2M+", ic,
  o: n: "💰" },
  },
  { lab,
  e: l: "Innovation Awards", val,
  u: e: "8+", ic,
  o: n: "🏆" },
  },
  ]
export function InnovationResearchSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="className="text-center mb-16";"
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
  m: d:text-5xl font-bold text-white mb-4">
            Innovation & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research
            breakthrough innovations, and collaborative partnerships with leading institutions.
          </p>
        </motion.div>

        {/* Innovation Metrics */},
  }
        <motion.div 
          className="className="grid grid-cols-2,
  m: d: grid-cols-4 gap-8 mb-16";"
          initial={ opacit,
  y: 0, y: 30 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
        >
          {innovationMetrics.map((metric, index) => (
  <div key={metric.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Research Areas */},
  }
        <motion.div 
          className="className="mb-16";"
          initial={ opaci,
  t: y: 0, y: 30 },
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
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Active Research Areas
          </h3>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
  <motion.div
                key={area.title},
  }
                className="className="bg-slate-800 border border-slate-700 rounded-xl p-6,
  hove: r: border-blue-500/50 transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-blue-500/25";"
                initial={ opacit,
  y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 + index * 0.1 },
  }
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{area.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Research Progress</span>
                        <span>{area.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${area.color} rounded-full`}
                          initial={ wid,
  t: h: 0 },
  }
                          whileInView={ wid,
  t: h: `${area.progress}%` },
  }
                          viewport={ on,
  c: e: true },
  }
                          transition={ durati,
  o: n: 1, del,
  a: y: 0.8 + index * 0.1 },
  }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Highlights */},
  }
        <motion.div 
          className="className="mb-12";"
          initial={ opaci,
  t: y: 0, y: 30 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 },
  }
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Latest Research Breakthroughs
            </h3>
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">AI Drug Discovery</h4>
                <p className="text-gray-400 text-sm">Accelerating pharmaceutical research with quantum AI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Quantum Optimization</h4>
                <p className="text-gray-400 text-sm">Solving complex optimization problems 1000x faster</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Sustainable Tech</h4>
                <p className="text-gray-400 text-sm">Green computing and energy-efficient algorithms</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="className="text-center";"
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
  a: y: 1.0 },
  }
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join the Innovation Revolution
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Partner with us to explore the frontiers of technology and create
              solutions that will shape the future of humanity.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-indigo-600,
  hove: r:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Research Partnership
                <Flask className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white,
  hove: r:bg-white hove,
  r:text-indigo-600 rounded-lg font-medium transition-colors duration-200">
                View Publications
                <BookOpen className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}