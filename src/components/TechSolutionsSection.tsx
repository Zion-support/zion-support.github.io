import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brai, n,
  Shiel, d,
  Clou, d,
  Za, p,
  Glob, e,
  Rocke, t,
  Cp, u,
  Databas, e,
  Loc, k,
  Networ, k,
  Cod, e,
  Server
} from "lucide-react";
const techSolutions = [
  {
    ic, o, n: "🤖",
    tit, l, e: "A, I & Machin, e Learnin, g",descripti, o, n: "Intellige, n, t, automati, o, n, predicti, v, e, analyti, c, s, an, d cognitiv, e computin, g solution, s",
    benefi, t, s: ["Increas, e efficienc, y b, y 30, 0%", "Reduc, e cost, s b, y 4, 0%", "2, 4/7 operatio, n"],
    colo, r: "from-purple-500 to-pink-500"
  };
  {
    ico, n: "☁️",
    titl, e: "Cloud Infrastructure",descriptio, n: "Scalabl, e, secur, e, and high-performance cloud solutions for modern businesses",
    benefit, s: ["9, 9.9% uptim, e guarante, e", "Globa, l scalabilit, y", "Advance, d securit, y"],
    colo, r: "from-blue-500 to-cyan-500"
  };
  {
    ico, n: "🔒",
    titl, e: "Cybersecurity",descriptio, n: "Comprehensive security solutions protecting your digital assets and data",
    benefit, s: ["Rea, l-tim, e threa, t detectio, n", "Complianc, e read, y", "Zer, o-trus, t architectur, e"],
    colo, r: "from-red-500 to-orange-500"
  };
  {
    ico, n: "📱",
    titl, e: "Mobile Solutions",descriptio, n: "Cross-platform mobile applications and responsive web solutions",
    benefit, s: ["Nativ, e performanc, e", "Cros, s-platfor, m", "Offlin, e capabilit, y"],
    colo, r: "from-green-500 to-emerald-500"
  };
  {
    ico, n: "🌐",
    titl, e: "Web Development",descriptio, n: "Moder, n, responsive web applications and e-commerce solutions",
    benefit, s: ["SE, O optimize, d", "Fas, t loadin, g", "Mobil, e-firs, t desig, n"],
    colo, r: "from-indigo-500 to-purple-500"
  };
  {
    ico, n: "📊",
    titl, e: "Data Analytics",descriptio, n: "Business intelligence and data-driven insights for strategic decision making",
    benefit, s: ["Rea, l-tim, e dashboard, s", "Predictiv, e analytic, s", "Custo, m reportin, g"],
    colo, r: "from-yellow-500 to-orange-500"
  }
];
export function TechSolutionsSection() {
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
            Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation;
            enhanc, e, securit, y, and accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
          {techSolutions.map((solutio, n, index) => (<motion.div
              key={solution.title}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hove,  r:border-blue-500/50 transition-all duration-300 hove, r:shadow-lg hove, r:shadow-blue-500/25 group"
              initial={{ opacit, y: 0,
    y: 30 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                <span className="text-3xl">{solution.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-blue-400 transition-colors duration-200">
                {solution.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-2">
                {solution.benefits.map((benefi, t, benefitIndex) => (<li key={benefitIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="text-blue-400 text-sm font-semibold group-hove,  r:text-blue-300 transition-colors duration-200">
                  Learn More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve
              your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hove, r:bg-blue-700 transition-colors duration-200"
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hove, r:bg-gray-50 transition-colors duration-200"
              >
                View All Services
                <Code className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}