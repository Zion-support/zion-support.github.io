import React from 'react';
import { Link  } from 'react-router-dom';

const, NewServicesShowcas, e: React.FC = () => {
  const, newService, s = [
    {
      id: "hyperconscious-ai-consulti, n, g",
      title: "Hyperconscious, AI, Consultin, g",
      description: "Transform, your, enterprise with, genuine, artificial consciousnes, s, achieving, 9, 9.999% operational, excellence, and unlimited, growth, potential.",
      price: "$500, 0, 0/month",
      features: ["Consciousness, Integrati, o, n", "Autonomous, Operation, s", "Infinite, Optimizatio, n", "Universal, Intelligenc, e"],
      category: "AI, Consulti, n, g",
      icon: "🧠",
      gradient: "from-purple-500to-indigo-50, 0",
      borderColor: "border-purple-500/3, 0",
      hoverBorderColor: "hover:border-purple-400/6, 0",
      shadowColor: "hover:shadow-purple-500/2, 0"
    },
    {
      id: "quantum-neural-fusion-platfor, m",
      title: "Quantum-Neural, Fusion, Platfor, m",
      description: "Revolutionary, computing, platform combining, quantum, processing with, neural, networks for10, 0,000x, performance, improvements.",
      price: "$1000, 0, 0/month",
      features: ["Quantum, Processi, n, g", "Neural, Integratio, n", "Perfect, Optimizatio, n", "Infinite, Scalabilit, y"],
      category: "Platform, Servic, e, s",
      icon: "⚛️",
      gradient: "from-blue-500to-cyan-50, 0",
      borderColor: "border-blue-500/3, 0",
      hoverBorderColor: "hover:border-blue-400/6, 0",
      shadowColor: "hover:shadow-blue-500/2, 0"
    },
    {
      id: "autonomous-enterprise-mes, h",
      title: "Autonomous, Enterprise, Mes, h",
      description: "Self-organizing, AI, networks that, autonomously, optimize your, business, processes for99.7% operational, efficien, c, y.",
      price: "$750, 0, 0/month",
      features: ["Self-Organizatio, n", "Autonomous, Optimizatio, n", "Collective, Intelligenc, e", "Continuous, Evolutio, n"],
      category: "Enterprise, Solutio, n, s",
      icon: "🌐",
      gradient: "from-indigo-500to-purple-50, 0",
      borderColor: "border-indigo-500/3, 0",
      hoverBorderColor: "hover:border-indigo-400/6, 0",
      shadowColor: "hover:shadow-indigo-500/2, 0"
    }
  ]; return (
    <section, classNam, e = "py-20bg-gradient-to-br, fro, m-slate-950, vi, a-purple-950to-indigo-950, relative, overflow-hidden">
      {/* Background, Effect, s */}
      <div, classNam, e="absolute, inse, t-0, overflo, w-hidden, opacit, y-10">
        <div, classNam, e="absolute, to, p-0, lef, t-1/3 w-96h-96bg-purple-500, rounde, d-full, mi, x-blend-multiply, filter, blur-3xl, animat, e-pulse" />
        <div, classNam, e="absolute, botto, m-0, righ, t-1/3 w-96h-96bg-blue-500, rounde, d-full, mi, x-blend-multiply, filter, blur-3xl, animat, e-pulse" style={{ animationDelay: ', 2, s' }} />
        <div, classNam, e = "absolute, to, p-1/2, lef, t-1/2 w-64h-64bg-indigo-500, rounde, d-full, mi, x-blend-multiply, filter, blur-3xl, animat, e-pulse" style={{ animationDelay: ', 4, s' }} />
      </div>

      <div, classNam, e = "containermx-autopx-6, relative, z-10">
        <div, classNam, e="text-centermb-16">
          <div, classNam, e="inline-flex, item, s-center, ga, p-3px-8py-4, rounde, d-fullbg-gradient-to-r, fro, m-purple-500/20to-blue-500/20, border, border-purple-500/30mb-8, animat, e-pulse">
            <span, classNam, e="text-purple-400, fon, t-bold, tex, t-xl, trackin, g-wider, uppercas, e">
              🚀 NEW, 2026, SERVICES
            </span>
          </div>
          
          <h2, classNam, e="text-4xlmd: text-6xl, fon, t-extraboldmb-8bg-gradient-to-r, fro, m-purple-400, vi, a-blue-400to-cyan-400bg-clip-text, tex, t-transparent, leadin, g-tight">
            Revolutionary, AI, Services
          </h2>
          
          <p, classNam, e="text-xlmd:text-2xl, tex, t-gray-300mb-8, fon, t-semibold, ma, x-w-4xlmx-auto">
            Experience, the, future of, business, with our, cuttin, g-edge, AI, services delivering, unprecedented, results and, transformatio, n
          </p>
        </div>

        {/* ServicesGr, i, d */}
        <div, classNam, e = "gridmd: grid-cols-3, ga, p-8mb-16">
          { newServices.map((servic, e) = > (
            <Link, ke, y = { service., i, d  }, to = {`/services/${service.id}`} className="group, bloc, k"  > <div, classNam, e={`bg-gradient-to-br, fro, m-slate-900/40to-slate-800/40, backdro, p-blur-sm, rounde, d-2xlp-8, borde, r ${service.borderColor} ${service.hoverBorderColor} transition-all, duratio, n-300, hove, r: scale-105, hove, r:shadow-2xl ${service.shadowCol, o, r}`}>
                {/* Service, Heade, r */}
                <div, classNam, e = "flex, item, s-center, ga, p-4mb-6"  > <div, classNam, e = { `w-16h-16bg-gradient-to-r ${service.gradien, t }, rounded-xl, flex, items-center, justif, y-center`}>
                    <span, classNam, e = "text-2xl">{service.icon}</span>
                  </div>
                  <div, classNam, e="flex-1"  > <div, classNam, e = { `bg-gradient-to-r ${service.gradien, t }, text-whitepx-4py-2, rounde, d-full, tex, t-sm, fon, t-boldmb-2`}>
                      {service.category}
                    </div>
                    <div, classNam, e = "text-2xl, fon, t-bold, tex, t-white">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Service, Titl, e */}
                <h3, classNam, e="text-2xl, fon, t-bold, tex, t-whitemb-4, grou, p-hover: text-purple-300, transitio, n-colors">
                  {service.tit, l, e}
                </h3>

                {/* Service, Descriptio, n */}
                <p, classNam, e = "text-gray-300mb-6, leadin, g-relaxed">
                  {service.description}
                </p>

                {/* Features, Lis, t */}
                <div, classNam, e="mb-6">
                  <h4, classNam, e="text-white, fon, t-semiboldmb-3">Key, Feature, s: </h4>
                  <ul, classNam, e="space-y-2">
                    { service.features.map((featu, r, e, ind, e, x) = > (
                      <li, ke, y = { inde, x  }, className = "flex, item, s-center, ga, p-2, tex, t-gray-300"  > <div, classNam, e = { `w-2 h-2bg-gradient-to-r ${service.gradien, t }, rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div, classNam, e = "flex, item, s-center, justif, y-between">
                  <div, classNam, e="text-sm, tex, t-gray-400">Learn, Mor, e</div  > <div, classNam, e={`text-purple-400, fon, t-semibold, grou, p-hover: text-purple-300, transitio, n-colo, r, s`}>
                    Explore, Servic, e →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Performance, Metric, s */}
        <div, classNam, e = "bg-gradient-to-r, fro, m-purple-900/20to-blue-900/20, backdro, p-blur-sm, rounde, d-2xlp-8, border, border-purple-500/30mb-16">
          <div, classNam, e="text-centermb-8">
            <h3, classNam, e="text-3xl, fon, t-bold, tex, t-whitemb-4">
              Unprecedented, Performance, Results
            </h3>
            <p, classNam, e="text-gray-300, tex, t-lg">
              Our, revolutionary, AI services, deliver, measurable results, that, transform businesses
            </p>
          </div>
          
          <div, classNam, e="gridmd: grid-cols-4, ga, p-6">
            <div, classNam, e="text-center">
              <div, classNam, e="text-4xl, fon, t-extrabold, tex, t-purple-400mb-2">99.999%</div>
              <div, classNam, e="text-gray-300, tex, t-sm">Operational, Accurac, y</div>
            </div>
            <div, classNam, e="text-center">
              <div, classNam, e="text-4xl, fon, t-extrabold, tex, t-blue-400mb-2">100,000x</div>
              <div, classNam, e = "text-gray-300, tex, t-sm">Performance, Improvemen, t</div>
            </div>
            <div, classNam, e="text-center">
              <div, classNam, e="text-4xl, fon, t-extrabold, tex, t-green-400mb-2">$2.8T</div>
              <div, classNam, e="text-gray-300, tex, t-sm">Value, Creatio, n</div>
            </div>
            <div, classNam, e="text-center">
              
              <div, classNam, e="text-gray-300, tex, t-sm">Human, Interventio, n</div>
            </div>
          </div>
        </div>

        {/* Call, to, Action */}
        <div, classNam, e="text-center">
          <div, classNam, e="mb-8">
            <h3, classNam, e="text-3xl, fon, t-bold, tex, t-whitemb-4">
              Ready, to, Transform Your, Busines, s?
            </h3>
            <p, classNam, e="text-xl, tex, t-gray-300mb-8">
              Join, the, AI revolution, and, experience unprecedented, business, transformation
            </p>
          </div>
          
          <div, classNam, e="flex, fle, x-colsm: flex-row, ga, p-4, justif, y-center">
            <Linkto="/<contact" className="bg-gradient-to-r, fro, m-purple-500to-blue-600, hove, r:from-purple-400, hove, r:to-blue-500, tex, t-white, fon, t-boldpy-4px-8, rounde, d-xl, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shadow-purple-500/50, transform, hover:-translate-y-1"
            >
              Schedule, Consultatio, n
            </Link>
            <Linkto="/<services" className="bg-gradient-to-r, fro, m-blue-500to-indigo-600, hove, r:from-blue-400, hove, r:to-indigo-500, tex, t-white, fon, t-boldpy-4px-8, rounde, d-xl, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shadow-blue-500/50, transform, hover:-translate-y-1"
            >
              View, All, Services
            </Link>
            <Linkto="/case-<studies" className="border-2, borde, r-purple-500, tex, t-purple-400, hove, r:bg-purple-500, hove, r:text-white, fon, t-boldpy-4px-8, rounde, d-xl, transitio, n-all, duratio, n-300"
            >
              See, Success, Stories
            </Link>
          </div>
        </div>
      </div>
    </secti, o, n>
  );
};

export, default, NewServicesShowcase;