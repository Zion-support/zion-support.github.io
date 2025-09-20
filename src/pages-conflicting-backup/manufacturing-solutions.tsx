import { Routes, Route } from "react-router-dom";
import React from "react"
import { motion   } from "framer-motion";
import {
  Factory;
  Cog,
  Bot,
  TrendingUp,
  Shield,
  Zap;
  BarChart3;
  Network;
  Eye;
  Brain;
  Cloud;
  Star;
}
}
 } from "lucide-react";
import { Link   } from "react-router-dom";
const,
  ManufacturingSolution: s: React.FC = () () => {
  const solutions = [
  {
  titl,
  e: 'Smart Factory Automation',descripti,
  o: n: 'Intelligent automation systems that optimize production processes and increase efficiency.',ic,
  o: n: Bot,featur,
  e: s: [['Process optimizationReal-time monitoring', 'Predictive maintenanceQuality control'],
  ],
  },
  {
  tit,
  l: e: 'Industrial IoT Integration',descripti,
  o: n: 'Seamless integration of IoT devices for comprehensive manufacturing intelligence.',ic,
  o: n: Network,featur,
  e: s: [['Sensor networksData collection', 'Remote monitoringPredictive analytics'],
  ],
  },
  {
  tit,
  l: e: 'AI-Powered Quality Control',descripti,
  o: n: 'Advanced AI systems for automated quality inspection and defect detection.',ic,
  o: n: Eye,featur,
  e: s: [['Visual inspectionDefect detection', 'Quality assuranceCompliance monitoring'],
  ],
  },
  {
  tit,
  l: e: 'Predictive Maintenance',descripti,
  o: n: 'AI-driven maintenance systems that prevent equipment failures and reduce downtime.',ic,
  o: n: TrendingUp,featur,
  e: s: [['Equipment monitoringFailure prediction', 'Maintenance schedulingCost optimization'],
  ],
  },
  {
  tit,
  l: e: 'Supply Chain Optimization',descripti,
  o: n: 'Intelligent supply chain management with AI-powered forecasting and optimization.',ic,
  o: n: Cog,featur,
  e: s: [['Demand forecastingInventory optimization', 'Route planningSupplier management'],
  ],
  },
  {
  tit,
  l: e: 'Digital Twin Technology',descripti,
  o: n: 'Virtual replicas of physical manufacturing systems for simulation and optimization.',ic,
  o: n: Cloud,featur,
  e: s: [['System simulationPerformance optimization', 'Scenario testingReal-time monitoring'],
  ],
  },
  ]

  const benefits = [
  {
  tit,
  l: e: 'Increased Efficiency',descripti,
  o: n: 'Optimize production processes and reduce waste',ic,
  o: n: TrendingUp;
},
  {
  tit,
  l: e: 'Cost Reduction',descripti,
  o: n: 'Lower operational costs through intelligent automation',ic,
  o: n: BarChart3;
},
  {
  tit,
  l: e: 'Quality Improvement',descripti,
  o: n: 'Enhanced product quality and consistency',ic,
  o: n: Star;
},
  {
  tit,
  l: e: 'Predictive Capabilities',descripti,
  o: n: 'Anticipate and prevent issues before they occur',ic,
  o: n: Brain;
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */},
  }
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[si,
  z: e: 50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4,
  s: m:px-6,
  l: g:px-8 pt-32 pb-16">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Factory className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Manufacturing Solutions;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your manufacturing operations with Zion Tech Group's cutting-edge technology solutions. 
              From smart automation to AI-powered quality control, we help manufacturers achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <motion.div;
          initial={ opacit,
  y: 0, y: 20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
          className="className="text-center mb-12";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Our Manufacturing Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with industry expertise to deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
  <motion.div;
              key={benefit.title},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 + index * 0.1 },
  }
              className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r:border-cyan-400/50 transition-all duration-300";"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                {React.createElement(benefit.icon, { classNa,
  m: e: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions Grid */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <motion.div;
          initial={ opacit,
  y: 0, y: 20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
          className="className="text-center mb-12";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Manufacturing Solutions;
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed specifically for modern manufacturing challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
  <motion.div;
              key={solution.title},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.5 + index * 0.1 },
  }
              className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6,
  hove: r: border-cyan-400/50 transition-all duration-300 group";"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hove,
  r:scale-110 transition-transform duration-300">
                  {React.createElement(solution.icon, { classNa,
  m: e: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {solution.description},
  }
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,
  Feature: s:</h4>
                <ul className="space-y-1">
                  {solution.features.map((feature, idx) => (
  <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <motion.div;
          initial={ opacit,
  y: 0, y: 20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 },
  }
          className="className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center";"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our manufacturing solutions can optimize your operations and drive growth.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Link;
              to="/contact"
              className="className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 transition-all duration-200,
  transform: hover:scale-105";"
            >
              Get Started;
            </Link>
            <Link;
              to="/services"
              className="className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-400 hove,
  r:text-white transition-all duration-200";"
            >
              View All Services;
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default ManufacturingSolutions;