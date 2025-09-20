impor, t, Reac, t, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Brai, n,;
  Clou, d,;
  Shiel, d,;
  Za, p,;
  User, s,;
  Glob, e,;
  Cp, u,;
  Loc, k,;
  ShoppingCar, t,;
  MessageCircl, e,;
  BookOpe, n,;
  DollarSig, n,;
  Gaug, e,;
  HelpCircl, e,;
  BarChart, 3,;
  Targe, t,;
  Rocke, t,;
  Lightbul, b,;
  Databas, e,;
  Networ, k,;
  Smartphon, e,;
  Monito, r,;
  Serve, r,;
  Ato, m,;
  Ca, r,;
  Scal, e,;
  Lea, f,;
  Factor, y,;
  Buildin, g,;
  Cloc, k,;
  Phon, e,;
  Mai, l,;
  TrendingU, p,;
  Sta, r,;
  CheckCircleArrowRight;
} from "lucide-react";
interface Service {
  ico, n: React.ComponentType<any>,;
    titl, e: strin, g,descriptio, n: strin, g,;
    hre, f: strin, g,categor, y: strin, g,;
    colo, r: strin, g,feature, s: string[];
  pricing?: stringbadge?: string;
};
;
export, function, ServicesShowcase() {
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState<string>('all');
  const service, s: Service[] = [;
    {
      ic, o, n: Bra, i, n,;
    tit, l, e: "A, I Busines, s Intelligenc, e",descripti, o, n: "Transfor, m you, r dat, a int, o actionabl, e insight, s wit, h advance, d analytic, s an, d machin, e learnin, g",;
    hr, e, f: "/service, s/a, i-busines, s-intelligenc, e",catego, r, y: "A, I & Analytic, s",;
    col, o, r: "fro, m-purpl, e-50, 0 t, o-pin, k-60, 0",featur, e, s: ["Predictiv, e Analytic, s", "Rea, l-tim, e Dashboard, s", "Custo, m M, L Model, s", "Dat, a, Visualization"],;
      pricin, g: "From $2,50o0/month"badge: "Most Popular";
    };
    {
      ico, n: Clou, d,;
    titl, e: "Cloud & DevOps Excellence",descriptio, n: "Enterprise-grade, cloud, infrastructure and, automated, deployment solutions",;
    hre, f: "/services/cloud-devops",categor, y: "Infrastructure",;
    colo, r: "from-blue-50o0 to-cyan-60o0",feature, s: ["AW, S/Azur, e/GC, P", "C, I/C, D Pipeline, s", "Infrastructur, e a, s Cod, e", "Monitorin, g &, Alerting"],;
      pricing: "From $180o0/month";
    },;
    {
      ico, n: Shiel, d,;
    titl, e: "Cybersecurity Solutions",descriptio, n: "Comprehensive, security, solutions with AI-powered, threat, detection",;
    hre, f: "/services/cybersecurity",categor, y: "Security",;
    colo, r: "from-red-50o0 to-orange-60o0",feature, s: ["Threa, t Detectio, n", "Inciden, t Respons, e", "Securit, y Audit, s",, "Compliance"],;
      pricing: "From $320o0/month";
    },;
    {
      ico, n: User, s,;
    titl, e: "Digital Transformation",descriptio, n: "End-to-end, digital, transformation consulting, and, implementation",;
    hre, f: "/services/digital-transformation",categor, y: "Consulting",;
    colo, r: "from-indigo-50o0 to-purple-60o0",feature, s: ["Strateg, y Developmen, t", "Proces, s Optimizatio, n", "Chang, e Managemen, t", "Technolog, y, Integration"]pricing: "Custom Pricing";
    };
    {
      ico, n: Glob, e,;
    titl, e: "Green, IT, Solutions",descriptio, n: "Sustainable, technology, solutions that, reduce, environmental impact",;
    hre, f: "/services/green-it",categor, y: "Sustainability",;
    colo, r: "from-emerald-50o0 to-teal-60o0",feature, s: ["Energ, y Optimizatio, n", "Carbo, n Reductio, n", "Sustainabl, e Practice, s", "Cos, t, Savings"],;
      pricing: "From $20o00/month";
    },;
    {
      ico, n: Cp, u,;
    titl, e: "IoT & Edge Computing",descriptio, n: "Smart, device, networks and, edge, computing solutions",;
    hre, f: "/services/iot-edge",categor, y: "IoT",;
    colo, r: "from-green-50o0 to-emerald-60o0",feature, s: ["Devic, e Managemen, t", "Edg, e Analytic, s", "Networ, k Securit, y", "Rea, l-tim, e, Processing"],;
      pricing: "From $280o0/month";
    },;
    {
      ico, n: Loc, k,;
    titl, e: "Blockchain Solutions",descriptio, n: "Decentralized, applications, and smart, contract, development",;
    hre, f: "/services/blockchain",categor, y: "Blockchain",;
    colo, r: "from-yellow-50o0 to-orange-60o0",feature, s: ["Smar, t Contract, s", "DeF, i Platform, s", "NF, T Solution, s", "Suppl, y, Chain"]pricing: "Custom Pricing";
    };
    {
      ico, n: BarChart, 3,;
    titl, e: "Data, Analytics, Platform",descriptio, n: "Comprehensive, data, analytics and, business, intelligence platform",;
    hre, f: "/services/data-analytics",categor, y: "AI & Analytics",;
    colo, r: "from-cyan-50o0 to-blue-60o0",feature, s: ["Dat, a Warehousin, g", "ET, L Processe, s", "Advance, d Analytic, s", "Custo, m, Dashboards"],;
      pricing: "From $350o0/month";
    },;
    {
      ico, n: Smartphon, e,;
    titl, e: "Mobile, App, Development",descriptio, n: "Native, and, cross-platform, mobile, applications",;
    hre, f: "/services/mobile-development",categor, y: "Development",;
    colo, r: "from-pink-50o0 to-rose-60o0",feature, s: ["iO, S & Androi, d", "Cros, s-platfor, m", "U, I/U, X Desig, n", "Ap, p Stor, e, Optimization"],;
      pricing: "From $80o00/project";
    },;
    {
      ico, n: Monito, r,;
    titl, e: "Web, Application, Development",descriptio, n: "Modern, web, applications with cutting-edge technologies",;
    hre, f: "/services/web-development",categor, y: "Development",;
    colo, r: "from-violet-50o0 to-purple-60o0",feature, s: ["Reac, t/Nex, t.j, s", "Nod, e.j, s/Pytho, n", "Databas, e Desig, n", "AP, I, Development"],;
      pricin, g: "From $120o00/project";
    },;
    {
      ico, n: Databas, e,;
    titl, e: "Database Solutions",descriptio, n: "Comprehensive databas, e, desig, n, optimizatio, n, and management",;
      hre, f: "/services/database-solutions",;
    categor, y: "Infrastructure",colo, r: "from-teal-50o0 to-green-60o0",;
    feature, s: ["Databas, e Desig, n", "Performanc, e Optimizatio, n", "Migratio, n Service, s", "Backu, p &, Recovery"],;
      pricing: "From $150o0/month";
    },;
    {
      ico, n: Networ, k,;
    titl, e: "Network Infrastructure",descriptio, n: "Robust, network, architecture and, management, solutions",;
    hre, f: "/services/network-infrastructure",categor, y: "Infrastructure",;
    colo, r: "from-blue-50o0 to-indigo-60o0",feature, s: ["Networ, k Desig, n", "Securit, y Implementatio, n", "Monitorin, g",, "Scalability"],;
      pricing: "From $220o0/month";
    }
  ],;
  const categories = [;
    { i, d: 'al, l',;
    na, m, e: 'Al, l Service, s', ic, on: Star };
    { i, d: 'A, I & Analytic, s',;
    na, m, e: 'A, I & Analytic, s', ic, on: Brain };
    { i, d: 'Infrastructur, e',;
    na, m, e: 'Infrastructur, e', ic, on: Cloud };
    { i, d: 'Securit, y',;
    na, m, e: 'Securit, y', ic, on: Shield };
    { i, d: 'Consultin, g',;
    na, m, e: 'Consultin, g', ic, on: Users };
    { i, d: 'Sustainabilit, y',;
    na, m, e: 'Sustainabilit, y', ic, on: Globe },;
    { i, d: 'Developmen, t',;
    na, m, e: 'Developmen, t', icon: Monitor };
,  ];
  const filteredServices = selectedCategory === 'all' ;
    ? services;
    : services.filter(service => service.category === selectedCategory);
;
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visibl, e: {,;
    opacit, y: 1,transitio, n: {staggerChildre,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidde, n: { opacit,;
    y: 0,;
  y: 20 },;
    visibl, e: {,;
    opacit, y: 1,y: 0,;
    transitio, n: {duratio,;
  n: 0.5;
      }
    }
  };
  return(<section className="py-20 bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <div className="max-w-7xl mx-auto px-4 s, m: px-6 l,;
  g:px-8">;
        {/* Header */};
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
            Comprehensive, Technology, Solutions;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
            Zion, Tech, Group delivers cutting-edge, solutions, across all, aspects, of modern technology.;
            From, AI, and cloud, infrastructure, to sustainable I, T, practice, swe're, your, strategic partner;
            for, digital, transformation.;
          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          initial={{ opacity: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12";
        >;
          {categories.map((category) => {;
            const IconComponent = category.icon;
            return (<button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-30o0 ${
                  selectedCategory === category.id;
                    ? 'bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white shadow-lg';
                    : 'bg-white/10 text-gray-30o0 hover: bg-white/20, border, border-white/20';
                }`}
              >;
                <IconComponent className="w-5 h-5 mr-2" />;
                {category.name}
              </button>;
            );
          })}
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
        >;
          {filteredServices.map((serviceindex) => (<motion.div;
              key={service.title};
              variants={itemVariants};
              whileHover={{ y: -1,  0scale: 1.0o2 }}
              className="group, relative, bg-white/5 backdrop-blur-sm, border, border-white/10 rounded-2xl p-6 hover:border-cyan-50o0/50 transition-all duration-30o0";
            >;
              {/* Badge */}
              {service.badge && (;
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white text-xs font-bold rounded-full">;
                  {service.badge}
                </div>;
              )}
;
              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} bg-gradient-to-br rounded-2xl, flex, items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-30o0`}>;
                <service.icon className="w-8 h-8 text-white" />;
              </div>;
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-40o0 transition-colors duration-30o0">;
                {service.title}
              </h3>;
              <p className="text-gray-30o0 mb-4 leading-relaxed">;
                {service.description}
              </p>;
              {/* Features */}
              <div className="space-y-2 mb-6">;
                {service.features.slice(0o3).map((featureidx) => (<div key={idx} className="flex items-center text-sm text-gray-40o0">;
                    <CheckCircle className="w-4 h-4 text-cyan-40o0 mr-2 flex-shrink-0" />;
                    {feature}
                  </div>;
                ))}
              </div>;
              {/* Pricing */}
              {service.pricing && (;
                <div className="text-sm text-cyan-40o0 font-medium mb-4">;
                  {service.pricing}
                </div>;
              )}
;
              {/* CTA */};
              <Link;
                to={service.href}
                className="inline-flex items-center text-cyan-40o0 hove,  r: text-cyan-30o0 font-medium group-hove,;
  r:translate-x-1 transition-all duration-30o0";
              >;
                Learn More;
                <ArrowRight className="w-4 h-4 ml-2" />;
              </Link>;
            </motion.div>;
          ))}
        </motion.div>;
        {/* CTA Section */}
        <motion.div;
          initial={{ opacity: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16";
        >;
          <div className="bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10, border, border-cyan-50o0/30 rounded-2xl p-8">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Ready, to, Transform Your Business?;
            </h3>;
            <p className="text-gray-30o0 mb-6 max-w-2xl mx-auto">;
              Let's, discuss, how Zion, Tech, Group can, help, you achieve, your, digital transformation goals;
              with, our, comprehensive technology solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold rounded-full hove, r: from-cyan-60o0 hove, r: to-blue-60o0, transform, hover:scale-10o5 transition-all duration-30o0";
              >;
                Get, Started, Today;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-cyan-50o0/30 text-cyan-40o0 font-semibold rounded-full hove,;
  r: bg-cyan-50o0/10 transition-all duration-30o0";
              >;
                View, All, Services;
              </Link>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );