import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain
  Cloud,
  Shield,
  Zap,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  BarChart3,
  Target,
  Lightbulb,
  Database,
  Network,
  Eye,
  Globe2,
  Smartphone,
  Monitor,
  Server,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Clock,
  Phone,
  Mail,
  TrendingUp,
  ArrowRight
} from "lucide-react"
export,
  const: EnhancedServicesShowcase: React.FC = () () => {
  const services = [
  {
  titl,
  e: 'AI-Powered Solutions',descripti,
  o: n: 'Cutting-edge artificial intelligence and machine learning services',ic,
  o: n: Brain,col,
  o: r: 'from-blue-500 to-cyan-500',featur,
  e: s: ['Machine LearningNatural Language Processing', 'Computer VisionPredictive Analytics']
      hr,
  e: f: '/ai-solutions'
},
  {
  tit,
  l: e: 'Cloud & DevOps',descripti,
  o: n: 'Scalable cloud infrastructure and automated deployment solutions',ic,
  o: n: Cloud,col,
  o: r: 'from-purple-500 to-pink-500',featur,
  e: s: ['AWS/Azure/GCPContainer Orchestration', 'CI/CD PipelinesInfrastructure as Code']
      hr,
  e: f: '/services/cloud-devops'
},
  {
  tit,
  l: e: 'Cybersecurity',descripti,
  o: n: 'Comprehensive security and compliance solutions',ic,
  o: n: Shield,col,
  o: r: 'from-red-500 to-orange-500',featur,
  e: s: ['Threat DetectionVulnerability Assessment', 'Compliance ManagementIncident Response']
      hr,
  e: f: '/services/cybersecurity'
},
  {
  tit,
  l: e: 'Digital Transformation',descripti,
  o: n: 'End-to-end digital modernization services',ic,
  o: n: Zap,col,
  o: r: 'from-yellow-500 to-green-500',featur,
  e: s: ['Process AutomationLegacy Modernization', 'Change ManagementDigital Strategy']
      hr,
  e: f: '/services/digital-transformation'
},
  {
  tit,
  l: e: 'Data Analytics',descripti,
  o: n: 'Advanced data insights and business intelligence',ic,
  o: n: BarChart3,col,
  o: r: 'from-indigo-500 to-purple-500',featur,
  e: s: ['Big Data ProcessingReal-time Analytics', 'Data VisualizationBusiness Intelligence']
      hr,
  e: f: '/services/data-analytics'
},
  {
  tit,
  l: e: 'IoT Solutions',descripti,
  o: n: 'Connected device ecosystems and smart infrastructure',ic,
  o: n: Globe,col,
  o: r: 'from-teal-500 to-blue-500',featur,
  e: s: ['Sensor NetworksEdge Computing', 'Smart CitiesIndustrial IoT']
      hr,
  e: f: '/services/iot-solutions'
},
  ]
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
  n: 0.1
},
  },
  }
  const const itemVariants = {
  = {
    hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 },
  }
    visib,
  l: e: {
  ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
  duratio,
  n: 0.5
},
  },
  }
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
        <motion.div
          initial={ opacit,
  y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.6 },
  }
          className="className="text-center mb-16";"
        >
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered solutions to cybersecurity, we deliver cutting-edge technology services 
            that drive business transformation and growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8";"
        >
          {services.map((service, index) => (
  <motion.div
              key={index},
  }
              variants={itemVariants},
  }
              className="className="group relative";"
            >
              <Link to={service.href} className="block">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300,
  hove: r: bg-slate-700/50,
  hove: r:border-slate-600/50,
  hove: r:transform hove,
  r:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                    {service.title},
  }
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description},
  }
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center text-gray-400 group-hov,
  e: r: text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hove,
  r:bg-cyan-300 transition-colors duration-300" />
                        {feature},
  }
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hov,
  e: r: text-cyan-300 transition-colors duration-300">
                    <span className="font-semibold">Learn More</span>
                    <div className="ml-2 transform group-hove,
  r:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 },
  }
          className="className="text-center mt-16";"
        >
          <Link
            to="/services"
            className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl,
  hove: r: from-cyan-600,
  hove: r:to-blue-600 transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-cyan-500/25";"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}