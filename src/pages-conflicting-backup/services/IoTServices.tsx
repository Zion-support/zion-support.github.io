import React from "react"
import { Cog, Wifi, Database, Shield, Zap, BarChart3, Activity, Globe     } from "lucide-react";
const IoTServices = () () => {
  const iotServices = [
  {
  tit,
  l: e: "IoT Device Development",descripti,
  o: n: "Custom IoT device design and development for your specific use case.",pri,
  c: e: "From $15,000/project"
      featur,
  e: s: ["Hardware design", "Firmware development", "Sensor integration", "Power management"]
      ic,
  o: n: Cog;
},
  {
  tit,
  l: e: "IoT Connectivity Solutions",descripti,
  o: n: "Secure and reliable connectivity for your IoT ecosystem.",pri,
  c: e: "From $8,000/month"
      featur,
  e: s: ["Cellular connectivity", "WiFi solutions", "LPWAN networks", "Edge computing"]
      ic,
  o: n: Wifi;
},
  {
  tit,
  l: e: "IoT Data Management",descripti,
  o: n: "Comprehensive data collection, processing, and analytics for IoT devices."
      pri,
  c: e: "From $6,500/month"
      featur,
  e: s: ["Data collection", "Real-time processing", "Cloud storage", "Data analytics"]
      ic,
  o: n: Database;
},
  ]
  const iotTechnologies = [
  {
  na,
  m: e: "Edge Computing",descripti,
  o: n: "Local data processing and decision making",ic,
  o: n: Activity,featur,
  e: s: [["Local processing", "Reduced latency", "Bandwidth optimization", "Offline operation"],
  ],
  },
  {
  na,
  m: e: "Machine Learning",descripti,
  o: n: "AI-powered IoT intelligence and automation",ic,
  o: n: BarChart3,featur,
  e: s: [["Predictive analytics", "Anomaly detection", "Automated responses", "Pattern recognition"],
  ],
  },
  {
  na,
  m: e: "Security & Privacy",descripti,
  o: n: "Enterprise-grade IoT security solutions",ic,
  o: n: Shield,featur,
  e: s: [["Device authentication", "Data encryption", "Secure updates", "Privacy compliance"],
  ],
  },
  ]

  const benefits = [
  "Real-time monitoring and control capabilities"
    "Improved operational efficiency and automation"
    "Enhanced data collection and insights"
    "Reduced operational costs and manual work"
    "Scalable and flexible IoT infrastructure"
    "Better decision-making with real-time data"
]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */},
  }
      <section className="relative pt-24 pb-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Cog className="w-4 h-4 mr-2"/>
              IoT Services;
            </div>
            <h1 className="text-4xl m,
  d:text-6xl font-bold text-white mb-6">
              Internet of Things;
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect, monitor, and control your world with cutting-edge IoT solutions;
              that drive innovation and operational excellence.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-xl">
                Explore Services;
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
                Get Started;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Services */},
  }
      <section id="services" className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Our IoT Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end IoT solutions designed to transform your business;
              operations and unlock new possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
  <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6,
  hove: r:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature},
  }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Technologies */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              IoT Technologies We Use;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and platforms to build robust;
              scalable IoT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {iotTechnologies.map((tech, index) => (
  <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center,
  hove: r:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
  <li key={idx} className="text-sm text-gray-400">
                      {feature},
  }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-6">
                Why Choose IoT Solutions?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                IoT technology provides unprecedented opportunities to monitor;
                control, and optimize your business operations.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {benefit},
  }
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Globe className="w-24 h-24 text-blue-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">IoT Expertise</h3>
                <p className="text-gray-300 mb-6">
                  Our team has extensive experience building and deploying;
                  IoT solutions across various industries.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Certified IoT professionals</p>
                  <p>• Industry best practices</p>
                  <p>• Proven methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how IoT solutions can transform your business;
            operations and unlock new opportunities.
          </p>
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-xl">
              Get Started;
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
              View All Services;
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default IoTServices;