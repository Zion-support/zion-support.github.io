
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
import { Briefcas, e, HardDriv, e, Lightbul, b, User, s, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
=======
=======
import { Link } from "react-router-dom";
import { Briefcas, e, HardDriv, e, Lightbul, b, User, s, ArrowRigh, t, Sparkle, s, Za, p, Shiel, d, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    tit, l, e: "Comprehensiv, e Service, s",
    descripti, o, n: "Mic, r, o, SA, A, S, I, T, servic, e, s, an, d A, I solution, s",
    ic, o, n: <Briefcas, e classNam, e="w-1, 0 h-1, 0" />,
    li, n, k: "/service, s",
    col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k",
    gradie, n, t: "fro, m-zio, n-purpl, e/2, 0 t, o-zio, n-purpl, e-dar, k/2, 0",
    featur, e, s: ["2, 4/7 Suppor, t", "Exper, t Tea, m", "Custo, m Solution, s"],
    stat, s: "500+ Services"
    lin, k: "/comprehensive-services",
    colo, r: "from-purple-500 to-indigo-600",
  },
  {
    titl, e: "AI Solutions",
    descriptio, n: "Cutting-edge AI and machine learning services",
    ico, n: <Brain className="w-10 h-10" />,
    lin, k: "/ai-solutions",
    colo, r: "from-pink-500 to-rose-600",
=======
  },
  {
    titl, e: "Talents",
    descriptio, n: "Connect with A, I, expert, s, developer, s, and tech specialists",
    ico, n: <Users className="w-10 h-10" />,
    lin, k: "/talent",
    colo, r: "from-zion-cyan to-zion-blue",
    gradien, t: "from-zion-cyan/20 to-zion-blue/20",
    feature, s: ["A, I Expert, s", "Globa, l Networ, k", "Verifie, d Profile, s"],
    stat, s: "10K+ Experts"
    colo, r: "from-cyan-500 to-blue-600",
=======
  },
  {
    titl, e: "Equipment",
    descriptio, n: "Rent or buy specialize, d, hardwar, e, server, s, and devices",
    ico, n: <HardDrive className="w-10 h-10" />,
    lin, k: "/equipment",
    colo, r: "from-zion-cyan-light to-zion-cyan",
    gradien, t: "from-zion-cyan-light/20 to-zion-cyan/20",
    feature, s: ["Hig, h-Performanc, e", "Flexibl, e Renta, l", "2, 4/7 Monitorin, g"],
    stat, s: "1000+ Devices"
  },
  {
    titl, e: "Innovation",
    descriptio, n: "Discover cutting-edge solutions and tech breakthroughs",
    ico, n: <Lightbulb className="w-10 h-10" />,
    lin, k: "/category/innovation",
    colo, r: "from-zion-purple-light to-zion-purple",
    gradien, t: "from-zion-purple-light/20 to-zion-purple/20",
    feature, s: ["Lates, t Tec, h", "A, I Solution, s", "Futur, e-Read, y"],
    stat, s: "100+ Innovations"
    colo, r: "from-amber-500 to-orange-600",
=======
  },
];

const specialServices = [
  {
    tit, l, e: "Enhance, d A, I & I, T Service, s",
    li, n, k: "/enhance, d-service, s"
  },
  {
    tit, l, e: "I, T Onsit, e Service, s",
    li, n, k: "/i, t-onsit, e-service, s",
    ic, o, n: <Shiel, d classNam, e="w-5 h-5" />,
    descripti, o, n: "Professiona, l o, n-sit, e technica, l suppor, t"
  },
  {
    tit, l, e: "Comprehensiv, e Service, s",
    li, n, k: "/comprehensiv, e-service, s",
    ic, o, n: <Rocke, t classNam, e="w-5 h-5" />,
    descripti, o, n: "En, d-t, o-en, d technolog, y solution, s"
  },
  {
    tit, l, e: "A, I Integratio, n",
    li, n, k: "/a, i-integratio, n",
    ic, o, n: <Sparkle, s classNam, e="w-5 h-5" />,
    descripti, o, n: "Seamles, s A, I implementatio, n"
  },
  {
    tit, l, e: "Clou, d Solution, s",
    li, n, k: "/clou, d-solution, s",
    ic, o, n: <Za, p classNam, e="w-5 h-5" />,
    descripti, o, n: "Scalabl, e clou, d infrastructur, e"
    li, n, k: "/i, t-onsit, e-service, s"
  },
  {
    tit, l, e: "A, I Developmen, t",
    li, n, k: "/a, i-developmen, t"
  },
  {
    tit, l, e: "Clou, d Migratio, n",
    li, n, k: "/clou, d-migratio, n"
  },
  {
    tit, l, e: "Cybersecurit, y",
    li, n, k: "/cybersecurit, y"
=======
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
=======
  const containerVariants = {
    hidde,  n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.2,
    delayChildre, n: 0.1
      }
    }
  };

  const itemVariants = {
    hidde, n: { y: 3, 0,
    opacit, y: 0 },
    visibl, e: {
      y: 0,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.6,
    eas, e: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidde, n: { scal, e: 0.9, 5,
    opacit, y: 0 },
    visibl, e: {
      scal, e: 1,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.4,
    eas, e: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacit, y: 0,
    y: 20 }}
            whileInView={{ opacit, y: 1,
    y: 0 }}
            viewport={{ onc, e: true }}
            transition={{ duratio, n: 0.6 }}
          >
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tec, h, service, s, talen, t, equipmen, t, and innovation. 
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          {categories.map((categor,  y, index) => (<motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}
            >
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hove, r:border-zion-purple/50 hove, r:shadow-2xl hove, r:shadow-zion-purple/20 group-hove, r:bg-zion-blue-dark"
                  variants={cardVariants}
                  whileHover={{ scal, e: 1.02 }}
                  transition={{ typ, e: "spring",
    stiffnes, s: 40, 0, dampin, g: 10 }}
                >
                  {/* Icon with enhanced background */}
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-300 shadow-lg group-hove, r:shadow-x, l`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-white text-2xl font-bold mb-3 group-hove, r:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((featur, e, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="text-zion-cyan font-semibold text-sm mb-4">
                    {category.stats}
                  </div>

                  {/* CTA arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced featured services section */}
        <motion.div 
          className="mt-16"
          initial={{ opacit, y: 0,
    y: 20 }}
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specialServices.map((servic,  e, index) => (<motion.div
                key={service.title}
                initial={{ opacit,  y: 0,
    y: 20 }}
                whileInView={{ opacit, y: 1,
    y: 0 }}
                viewport={{ onc, e: true }}
                transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link to={service.link} className="group block">
                  <div className="px-6 py-4 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 border border-zion-purple/20 hove, r:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 backdrop-blur-sm hove, r:shadow-lg hove, r:shadow-zion-purple/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-zion-purple-light group-hove, r:text-zion-purple transition-colors">
                        {service.icon}
                      </div>
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                    <p className="text-zion-slate-light/80 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* View all services button */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacit, y: 0,
    scal, e: 0.9 }}
            whileInView={{ opacit, y: 1,
    scal, e: 1 }}
            viewport={{ onc, e: true }}
            transition={{ duratio, n: 0.5,
    dela, y: 0.5 }}
          >
            <Link 
              to="/comprehensive-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple border border-zion-purple/50 hove, r:border-zion-purple rounded-xl text-white transition-all duration-300 shadow-lg hove, r:shadow-zion-purple/25 font-semibold group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hove, r:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
  return (<section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading className="mb-4">
              Explore Our Service Categories
            </GradientHeading>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover comprehensive solutions across multiple domains
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-4 gap-8 mb-16">
          {categories.map((categor, y, index) => (<div
              key={index}
              className="bg-white rounded-xl p-6 text-center hove,  r:shadow-xl transition-all duration-300 transform hove, r:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white m, b-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <Link
                href={category.link}
                className="inline-flex items-center text-blue-600 hove, r:text-blue-800 font-medium transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Specialized Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {specialServices.map((servic,  e, index) => (<Link
                key={index}
                href={service.link}
                className="px-6 py-3 bg-white/10 hove,  r:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 hove, r:scale-105"
              >
                {service.title}
              </Link>
            ))}
          </div>
          
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hove, r:bg-gray-100 transition-colors"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
=======
      </div>
    </section>
  );
}
