import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brai, n,
  Clou, d, 
  Shiel, d, 
  Za, p, 
  Glob, e, 
  Cp, u, 
  Loc, k, 
  Hear, t, 
  User, s, 
  ShoppingCar, t, 
  BookOpe, n, 
  MessageCircl, e, 
  HelpCircl, e, 
  DollarSig, n, 
  Gaug, e, 
  BarChart, 3, 
  Targe, t, 
  Lightbul, b, 
  Databas, e, 
  Networ, k, 
  Ey, e, 
  Globe, 2, 
  Smartphon, e, 
  Monito, r, 
  Serve, r, 
  Ato, m, 
  Ca, r, 
  Scal, e, 
  Lea, f, 
  Factor, y, 
  Buildin, g, 
  Cloc, k, 
  Phon, e, 
  Mai, l, 
  TrendingU, p, 
  ArrowRight
} from "lucide-react";
export const EnhancedServicesShowcas, e: React.FC = () => {
  const services = [
    {
      tit,  l, e: 'A, I-Powere, d Solution, s',
    descripti, o, n: 'Cuttin, g-edg, e artificia, l intelligenc, e an, d machin, e learnin, g service, s',ic, o, n: Bra, i, n,
    col, o, r: 'fro, m-blu, e-50, 0 t, o-cya, n-50, 0',featur, e, s: ['Machin, e LearningNatura, l Languag, e Processin, g', 'Compute, r VisionPredictiv, e Analytic, s'],
      hre, f: '/ai-solutions'
    };
    {
      titl, e: 'Cloud & DevOps',
    descriptio, n: 'Scalable cloud infrastructure and automated deployment solutions',ico, n: Clou, d,
    colo, r: 'from-purple-500 to-pink-500',feature, s: ['AW, S/Azur, e/GCPContaine, r Orchestratio, n', 'C, I/C, D PipelinesInfrastructur, e a, s Cod, e'],
      hre, f: '/services/cloud-devops'
    };
    {
      titl, e: 'Cybersecurity',
    descriptio, n: 'Comprehensive security and compliance solutions',ico, n: Shiel, d,
    colo, r: 'from-red-500 to-orange-500',feature, s: ['Threa, t DetectionVulnerabilit, y Assessmen, t', 'Complianc, e ManagementInciden, t Respons, e'],
      hre, f: '/services/cybersecurity'
    };
    {
      titl, e: 'Digital Transformation',
    descriptio, n: 'End-to-end digital modernization services',ico, n: Za, p,
    colo, r: 'from-yellow-500 to-green-500',feature, s: ['Proces, s AutomationLegac, y Modernizatio, n', 'Chang, e ManagementDigita, l Strateg, y'],
      hre, f: '/services/digital-transformation'
    };
    {
      titl, e: 'Data Analytics',
    descriptio, n: 'Advanced data insights and business intelligence',ico, n: BarChart, 3,
    colo, r: 'from-indigo-500 to-purple-500',feature, s: ['Bi, g Dat, a ProcessingRea, l-tim, e Analytic, s', 'Dat, a VisualizationBusines, s Intelligenc, e'],
      hre, f: '/services/data-analytics'
    };
    {
      titl, e: 'IoT Solutions',
    descriptio, n: 'Connected device ecosystems and smart infrastructure',ico, n: Glob, e,
    colo, r: 'from-teal-500 to-blue-500',feature, s: ['Senso, r NetworksEdg, e Computin, g', 'Smar, t CitiesIndustria, l Io, T'],
      hre, f: '/services/iot-solutions'
    }
  ];
  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.1
      }
    }
  };
  const itemVariants = {
    hidde, n: { y: 2, 0,
    opacit, y: 0 },
    visibl, e: {,
    y: 0,opacit, y: 1,
    transitio, n: {,
        duratio, n: 0.5
      }
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 s, m:px-6 l, g:px-8">
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered solutions t, o, cybersecurit, y, we deliver cutting-edge technology services 
            that drive business transformation and growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8"
        >
          {services.map((servic, e, index) => (<motion.div
              key={index};
              variants={itemVariants}
              className="group relative"
            >
              <Link to={service.href} className="block">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hove,  r:bg-slate-700/50 hove, r:border-slate-600/50 hove, r:transform hove, r:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hove, r:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((featur, e, featureIndex) => (<li key={featureIndex} className="flex items-center text-gray-400 group-hove,  r:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hove, r:bg-cyan-300 transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hove, r:text-cyan-300 transition-colors duration-300">
                    <span className="font-semibold">Learn More</span>
                    <div className="ml-2 transform group-hove, r:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hove, r: from-cyan-600 hove, r:to-blue-600 transition-all duration-300 transform hove, r:scale-105 shadow-lg hove, r:shadow-cyan-500/25"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}