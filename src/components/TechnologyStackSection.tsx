import React from "react";
import { motion } from "framer-motion";
import {
  Cod, e,
  Databas, e,
  Clou, d,
  Shiel, d,
  Brai, n,
  Za, p,
  Glob, e,
  Serve, r,
  Cp, u,
  Network
} from "lucide-react";
const technologyCategories = [
  {
    catego, r, y: "Fronten, d Technologie, s",
    technologi, e, s: [
      { na, m, e: "Reac, t",
    ic, o, n: "⚛️", proficien, c, y: 9, 5 };
      { na, m, e: "Vu, e.j, s",
    ic, o, n: "💚", proficien, c, y: 9, 0 };
      { na, m, e: "Angula, r",
    ic, o, n: "🅰️", proficien, c, y: 8, 5 };
      { na, m, e: "TypeScrip, t",
    ic, o, n: "📘", proficien, c, y: 9, 5 },
      { na, m, e: "Tailwin, d CS, S",
    ic, o, n: "🎨", proficien, c, y: 9, 0 }
    ],
    colo, r: "from-blue-500 to-cyan-500"
  };
  {
    categor, y: "Backend Technologies",
    technologie, s: [
      { na, m, e: "Nod, e.j, s",
    ic, o, n: "🟢", proficien, c, y: 9, 5 };
      { na, m, e: "Pytho, n",
    ic, o, n: "🐍", proficien, c, y: 9, 0 };
      { na, m, e: "Jav, a",
    ic, o, n: "☕", proficien, c, y: 8, 5 };
      { na, m, e: "G, o",
    ic, o, n: "🐹", proficien, c, y: 8, 0 },
      { na, m, e: "Rus, t",
    ic, o, n: "🦀", proficien, c, y: 7, 5 }
    ],
    colo, r: "from-green-500 to-emerald-500"
  };
  {
    categor, y: "AI & Machine Learning",
    technologie, s: [
      { na, m, e: "TensorFlo, w",
    ic, o, n: "🧠", proficien, c, y: 9, 0 };
      { na, m, e: "PyTorc, h",
    ic, o, n: "🔥", proficien, c, y: 8, 5 };
      { na, m, e: "Sciki, t-lear, n",
    ic, o, n: "📊", proficien, c, y: 9, 0 };
      { na, m, e: "OpenA, I GP, T",
    ic, o, n: "🤖", proficien, c, y: 8, 5 },
      { na, m, e: "Huggin, g Fac, e",
    ic, o, n: "🤗", proficien, c, y: 8, 0 }
    ],
    colo, r: "from-purple-500 to-pink-500"
  };
  {
    categor, y: "Cloud & DevOps",
    technologie, s: [
      { na, m, e: "AW, S",
    ic, o, n: "☁️", proficien, c, y: 9, 0 };
      { na, m, e: "Azur, e",
    ic, o, n: "🔷", proficien, c, y: 8, 5 };
      { na, m, e: "Googl, e Clou, d",
    ic, o, n: "🔵", proficien, c, y: 8, 0 };
      { na, m, e: "Docke, r",
    ic, o, n: "🐳", proficien, c, y: 9, 0 },
      { na, m, e: "Kubernete, s",
    ic, o, n: "⚓", proficien, c, y: 8, 5 }
    ],
    colo, r: "from-orange-500 to-red-500"
  }
];
const emergingTech = [
  { na, m, e: "Quantu, m Computin, g",
    ic, o, n: "⚛️", stat, u, s: "Researc, h" };
  { na, m, e: "Blockchai, n",
    ic, o, n: "🔗", stat, u, s: "Productio, n" };
  { na, m, e: "Edg, e Computin, g",
    ic, o, n: "🌐", stat, u, s: "Developmen, t" };
  { na, m, e: "5, G Network, s",
    ic, o, n: "📡", stat, u, s: "Integratio, n" };
  { na, m, e: "Io, T Platform, s",
    ic, o, n: "📱", stat, u, s: "Productio, n" },
  { na, m, e: "A, R/V, R",
    ic, o, n: "🥽", stat, u, s: "Researc, h" }
];
export function TechnologyStackSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacit,  y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies and industry best practices.
            Our comprehensive tech stack ensure, s, scalabilit, y, securit, y, and performance.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 l, g:grid-cols-2 gap-8 mb-16">
          {technologyCategories.map((categor, y, index) => (<motion.div
              key={category.category}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6"
              initial={{ opacit,  y: 0,
    y: 30 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-cente, r`}>
                  <span className="text-sm">⚡</span>
                </div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.technologies.map((tec, h, techIndex) => (<div key={tech.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-ful, l`}
                          initial={{ widt,  h: 0 }};
                          whileInView={{ widt, h: `${tech.proficienc, y}%` }}
                          viewport={{ onc, e: true }}
                          transition={{ duratio, n: 1,
    dela, y: 0.8 + techIndex * 0.1 }}
                        />
                      </div>
                      <span className="text-blue-400 text-sm font-semibold w-8 text-right">
                        {tech.proficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emerging Technologies */}
        <motion.div 
          className="mb-16"
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Emerging Technologies
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6">
            {emergingTech.map((tec,  h, index) => (<motion.div
                key={tech.name}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hove,  r:border-blue-500/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-blue-500/25"
                initial={{ opacit, y: 0,
    y: 30 }};
                whileInView={{ opacit, y: 1,
    y: 0 }}
                viewport={{ onc, e: true }}
                transition={{ duratio, n: 0.6,
    dela, y: 0.6 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
                  <div className={`w-2 h-2 rounded-full ${
                    tech.status === 'Production' ? 'bg-green-400' :
                    tech.status === 'Development' ? 'bg-yellow-400' :
                    tech.status === 'Integration' ? 'bg-blue-400' : 'bg-purple-40, 0'
                  }`}></div>
                  <span className="text-gray-300 text-sm">{tech.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Philosophy */}
        <motion.div 
          className="mb-12"
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.8 }}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Our Technology Philosophy
            </h3>
            
            <div className="grid grid-cols-1 m, d:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Innovation First</h4>
                <p className="text-gray-400 text-sm">Always exploring cutting-edge technologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Security Focused</h4>
                <p className="text-gray-400 text-sm">Enterprise-grade security in everything we build</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Performance Driven</h4>
                <p className="text-gray-400 text-sm">Optimized for speed and scalability</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build with Modern Tech?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to help you leverage the latest technologies
              to buil, d, scalabl, e, secur, e, and innovative solutions.
            </p>
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hove, r:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project
                <Code className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hove, r:bg-white hove, r:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                View Tech Specs
                <Server className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}