impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brai, n,
  Clou, d, 
  Shiel, d, 
  Za, p, 
  User, s, 
  Glob, e, 
  Cp, u, 
  Loc, k, 
  ShoppingCar, t, 
  MessageCircl, e, 
  BookOpe, n, 
  DollarSig, n,
  Gaug, e,
  HelpCircl, e,
  BarChart, 3,
  Targe, t,
  Rocke, t,
  Lightbul, b,
  Databas, e,
  Networ, k,
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
  Sta, r,
  CheckCircl, e,
  ArrowRight
} from "lucide-react";
interface Service {
  ico, n: React.ComponentType<any>,
    titl, e: strin, g,descriptio, n: strin, g,
    hre, f: strin, g,categor, y: strin, g,
    colo, r: strin, g,feature, s: string[];
  pricing?: strin, g,
  badge?: string
}

export function ServicesShowcase() {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState<string>('all');
  const service, s: Service[] = [
    {
      ic, o, n: Bra, i, n,
    tit, l, e: "A, I Busines, s Intelligenc, e",descripti, o, n: "Transfor, m you, r dat, a int, o actionabl, e insight, s wit, h advance, d analytic, s an, d machin, e learnin, g",
    hr, e, f: "/service, s/a, i-busines, s-intelligenc, e",catego, r, y: "A, I & Analytic, s",
    col, o, r: "fro, m-purpl, e-50, 0 t, o-pin, k-60, 0",featur, e, s: ["Predictiv, e Analytic, s", "Rea, l-tim, e Dashboard, s", "Custo, m M, L Model, s", "Dat, a Visualizatio, n"],
      pricin, g: "From $2,500/month",
      badg, e: "Most Popular"
    };
    {
      ico, n: Clou, d,
    titl, e: "Cloud & DevOps Excellence",descriptio, n: "Enterprise-grade cloud infrastructure and automated deployment solutions",
    hre, f: "/services/cloud-devops",categor, y: "Infrastructure",
    colo, r: "from-blue-500 to-cyan-600",feature, s: ["AW, S/Azur, e/GC, P", "C, I/C, D Pipeline, s", "Infrastructur, e a, s Cod, e", "Monitorin, g & Alertin, g"],
      pricin, g: "From $1,800/month"
    },
    {
      ico, n: Shiel, d,
    titl, e: "Cybersecurity Solutions",descriptio, n: "Comprehensive security solutions with AI-powered threat detection",
    hre, f: "/services/cybersecurity",categor, y: "Security",
    colo, r: "from-red-500 to-orange-600",feature, s: ["Threa, t Detectio, n", "Inciden, t Respons, e", "Securit, y Audit, s", "Complianc, e"],
      pricin, g: "From $3,200/month"
    },
    {
      ico, n: User, s,
    titl, e: "Digital Transformation",descriptio, n: "End-to-end digital transformation consulting and implementation",
    hre, f: "/services/digital-transformation",categor, y: "Consulting",
    colo, r: "from-indigo-500 to-purple-600",feature, s: ["Strateg, y Developmen, t", "Proces, s Optimizatio, n", "Chang, e Managemen, t", "Technolog, y Integratio, n"],
      pricin, g: "Custom Pricing"
    };
    {
      ico, n: Glob, e,
    titl, e: "Green IT Solutions",descriptio, n: "Sustainable technology solutions that reduce environmental impact",
    hre, f: "/services/green-it",categor, y: "Sustainability",
    colo, r: "from-emerald-500 to-teal-600",feature, s: ["Energ, y Optimizatio, n", "Carbo, n Reductio, n", "Sustainabl, e Practice, s", "Cos, t Saving, s"],
      pricin, g: "From $2,000/month"
    },
    {
      ico, n: Cp, u,
    titl, e: "IoT & Edge Computing",descriptio, n: "Smart device networks and edge computing solutions",
    hre, f: "/services/iot-edge",categor, y: "IoT",
    colo, r: "from-green-500 to-emerald-600",feature, s: ["Devic, e Managemen, t", "Edg, e Analytic, s", "Networ, k Securit, y", "Rea, l-tim, e Processin, g"],
      pricin, g: "From $2,800/month"
    },
    {
      ico, n: Loc, k,
    titl, e: "Blockchain Solutions",descriptio, n: "Decentralized applications and smart contract development",
    hre, f: "/services/blockchain",categor, y: "Blockchain",
    colo, r: "from-yellow-500 to-orange-600",feature, s: ["Smar, t Contract, s", "DeF, i Platform, s", "NF, T Solution, s", "Suppl, y Chai, n"],
      pricin, g: "Custom Pricing"
    };
    {
      ico, n: BarChart, 3,
    titl, e: "Data Analytics Platform",descriptio, n: "Comprehensive data analytics and business intelligence platform",
    hre, f: "/services/data-analytics",categor, y: "AI & Analytics",
    colo, r: "from-cyan-500 to-blue-600",feature, s: ["Dat, a Warehousin, g", "ET, L Processe, s", "Advance, d Analytic, s", "Custo, m Dashboard, s"],
      pricin, g: "From $3,500/month"
    },
    {
      ico, n: Smartphon, e,
    titl, e: "Mobile App Development",descriptio, n: "Native and cross-platform mobile applications",
    hre, f: "/services/mobile-development",categor, y: "Development",
    colo, r: "from-pink-500 to-rose-600",feature, s: ["iO, S & Androi, d", "Cros, s-platfor, m", "U, I/U, X Desig, n", "Ap, p Stor, e Optimizatio, n"],
      pricin, g: "From $8,000/project"
    },
    {
      ico, n: Monito, r,
    titl, e: "Web Application Development",descriptio, n: "Modern web applications with cutting-edge technologies",
    hre, f: "/services/web-development",categor, y: "Development",
    colo, r: "from-violet-500 to-purple-600",feature, s: ["Reac, t/Nex, t.j, s", "Nod, e.j, s/Pytho, n", "Databas, e Desig, n", "AP, I Developmen, t"],
      pricin, g: "From $1, 2,000/project"
    },
    {
      ico, n: Databas, e,
    titl, e: "Database Solutions",descriptio, n: "Comprehensive databas, e, desig, n, optimizatio, n, and management",
      hre, f: "/services/database-solutions",
    categor, y: "Infrastructure",colo, r: "from-teal-500 to-green-600",
    feature, s: ["Databas, e Desig, n", "Performanc, e Optimizatio, n", "Migratio, n Service, s", "Backu, p & Recover, y"],
      pricin, g: "From $1,500/month"
    },
    {
      ico, n: Networ, k,
    titl, e: "Network Infrastructure",descriptio, n: "Robust network architecture and management solutions",
    hre, f: "/services/network-infrastructure",categor, y: "Infrastructure",
    colo, r: "from-blue-500 to-indigo-600",feature, s: ["Networ, k Desig, n", "Securit, y Implementatio, n", "Monitorin, g", "Scalabilit, y"],
      pricin, g: "From $2,200/month"
    }
  ],

  const categories = [
    { i, d: 'al, l',
    na, m, e: 'Al, l Service, s', ic, o, n: Sta, r };
    { i, d: 'A, I & Analytic, s',
    na, m, e: 'A, I & Analytic, s', ic, o, n: Brai, n };
    { i, d: 'Infrastructur, e',
    na, m, e: 'Infrastructur, e', ic, o, n: Clou, d };
    { i, d: 'Securit, y',
    na, m, e: 'Securit, y', ic, o, n: Shiel, d };
    { i, d: 'Consultin, g',
    na, m, e: 'Consultin, g', ic, o, n: User, s };
    { i, d: 'Sustainabilit, y',
    na, m, e: 'Sustainabilit, y', ic, o, n: Glob, e },
    { i, d: 'Developmen, t',
    na, m, e: 'Developmen, t', ic, o, n: Monito, r }
  ];
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.1
      }
    }
  };
  const itemVariants = {
    hidde, n: { opacit, y: 0,
    y: 20 },
    visibl, e: {,
    opacit, y: 1,y: 0,
    transitio, n: {,
        duratio, n: 0.5
      }
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8 }}
          viewport={{ onc, e: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zion Tech Group delivers cutting-edge solutions across all aspects of modern technology. 
            From AI and cloud infrastructure to sustainable I, T, practice, s, we're your strategic partner 
            for digital transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.6 }}
          viewport={{ onc, e: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (<button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hove,  r:bg-white/20 border border-white/2, 0'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8"
        >
          {filteredServices.map((servic,  e, index) => (<motion.div
              key={service.title};
              variants={itemVariants};
              whileHover={{ y: -1,  0,
    scal, e: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hove, r:border-cyan-500/50 transition-all duration-300"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full">
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.slice(0,  3).map((featur,  e, idx) => (<div key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing */}
              {service.pricing && (
                <div className="text-sm text-cyan-400 font-medium mb-4">
                  {service.pricing}
                </div>
              )}

              {/* CTA */}
              <Link
                to={service.href}
                className="inline-flex items-center text-cyan-400 hove,  r:text-cyan-300 font-medium group-hove, r:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacit, y: 0,
    y: 30 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8 }}
          viewport={{ onc, e: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your digital transformation goals 
              with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hove, r:from-cyan-600 hove, r:to-blue-600 transform hove, r:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hove, r:bg-cyan-500/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}