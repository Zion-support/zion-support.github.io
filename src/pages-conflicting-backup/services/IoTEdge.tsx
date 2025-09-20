import React from "react"
import { motion     } from "framer-motion";
import { Cpu, Wifi, Zap, Database, Globe, BarChart3, ArrowRight, Shield, Cloud, Smartphone     } from "lucide-react";
export default function IoTEdge() {
  const features = [
  {
  ic,
  o: n: Cpu,tit,
  l: e: 'Edge Computing',descripti,
  o: n: 'Process data closer to the source for faster response times'
},
  {
  ic,
  o: n: Wifi,tit,
  l: e: 'IoT Connectivity',descripti,
  o: n: 'Seamless device communication and data transmission'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'Real-time Processing',descripti,
  o: n: 'Instant data analysis and decision making'
},
  {
  ic,
  o: n: Database,tit,
  l: e: 'Data Management',descripti,
  o: n: 'Efficient storage and processing of IoT data streams'
},
  ]
  const services = [
  {
  tit,
  l: e: 'IoT Device Management',descripti,
  o: n: 'Centralized management and monitoring of connected devices',ic,
  o: n: Smartphone;
},
  {
  tit,
  l: e: 'Edge Analytics',descripti,
  o: n: 'Real-time data processing and analytics at the edge',ic,
  o: n: BarChart3;
},
  {
  tit,
  l: e: '5G Integration',descripti,
  o: n: 'High-speed connectivity for IoT applications',ic,
  o: n: Wifi;
},
  {
  tit,
  l: e: 'Security & Compliance',descripti,
  o: n: 'End-to-end security for IoT ecosystems',ic,
  o: n: Shield;
},
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">IoT & Edge Computing</span>
            </div>

            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Connect, Process;
              <span className="text-gradient"> Transform</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Harness the power of IoT and edge computing to create intelligent;
              connected systems that process data faster and more efficiently.
            </p>

            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start IoT Project;
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Learn More;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose IoT & Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Faster processing, reduced latency, and intelligent automation;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={feature.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6,
  hove: r: border-zion-cyan/40 transition-all duration-300 group";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hove,
  r:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */},
  }
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our IoT & Edge Services;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive solutions for connected device ecosystems;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {services.map((service, index) => (
  <motion.div;
                key={service.title},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8,
  hove: r: border-zion-cyan/40 transition-all duration-300 group";"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hove,
  r:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center relative overflow-hidden";"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Transform your business with intelligent IoT solutions and edge computing capabilities.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold,
  hove: r:bg-gray-100 transition-colors duration-300">
                  Start IoT Project;
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold,
  hove: r:bg-white hove,
  r:text-blue-600 transition-colors duration-300">
                  Contact IoT Team;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}