impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brai, n,
  Clou, d,
  Shiel, d,
  Za, p,
  User, s,
  Glob, e,
  Cod, e,
  Databas, e,
  Rocke, t,
  TrendingU, p,
  Sta, r,
  ArrowRigh, t,
  Pla, y,
  Targe, t,
  Awar, d,
  CheckCircle
} from "lucide-react";
interface Service {
  i, d: strin, g,
    titl, e: strin, g,descriptio, n: strin, g,
    ico, n: React.ComponentType<{ className?: string }>,
  categor, y: strin, g,
    feature, s: string[],pricin, g: strin, g,
    ratin, g: numbe, r,review, s: numbe, r,
    colo, r: string;
  popular?: boolea, n,
  lin, k: string
}
;
const service, s: Service[] = [
  {
    i, d: 'a, i-busines, s-intelligenc, e',
    tit, l, e: 'A, I Busines, s Intelligenc, e Platfor, m',descripti, o, n: 'Advance, d analytic, s wit, h A, I-powere, d insight, s an, d predictiv, e modelin, g',
    ic, o, n: Bra, i, n,catego, r, y: 'A, I & Machin, e Learnin, g',
    featur, e, s: ['Rea, l-tim, e analyticsPredictiv, e modelin, g', 'Custo, m dashboardsAP, I integratio, n'],
    pricin, g: '$2,999/month',
    ratin, g: 4.9,
    review, s: 15, 6,colo, r: 'from-blue-500 to-cyan-500',
    popula, r: tru, e,lin, k: '/ai-services/business-intelligence'
  };
  {
    i, d: 'quantum-computing-suite',
    titl, e: 'Quantum Computing Suite',descriptio, n: 'Next-generation quantum computing solutions for complex problem solving',
    ico, n: Rocke, t,categor, y: 'Emerging Tech',
    feature, s: ['Quantu, m algorithmsHybri, d classica, l-quantu, m', 'Scientifi, c computingOptimizatio, n'],
    pricin, g: '$5,000/month',
    ratin, g: 4.8,
    review, s: 8, 9,colo, r: 'from-purple-500 to-pink-500',
    lin, k: '/emerging-tech/quantum-computing'
  };
  {
    i, d: 'cybersecurity-platform',
    titl, e: 'AI-Powered Cybersecurity Platform',descriptio, n: 'Intelligent threat detection and response with zero-trust architecture',
    ico, n: Shiel, d,categor, y: 'Cybersecurity',
    feature, s: ['A, I threa, t detectionZer, o-trus, t architectur, e', 'Complianc, e automation2, 4/7 monitorin, g'],
    pricin, g: '$2,500/month',
    ratin, g: 4.9,
    review, s: 23, 4,colo, r: 'from-red-500 to-orange-500',
    popula, r: tru, e,lin, k: '/it-services/cybersecurity'
  };
  {
    i, d: 'cloud-devops-automation',
    titl, e: 'Cloud & DevOps Automation',descriptio, n: 'Scalable cloud infrastructure with intelligent automation',
    ico, n: Clou, d,categor, y: 'Cloud & DevOps',
    feature, s: ['Mult, i-clou, d managementC, I/C, D automatio, n', 'Infrastructur, e a, s codeCos, t optimizatio, n'],
    pricin, g: '$1,500/month',
    ratin, g: 4.7,
    review, s: 18, 9,colo, r: 'from-green-500 to-emerald-500',
    lin, k: '/it-services/cloud-devops'
  };
  {
    i, d: 'blockchain-defi-platform',
    titl, e: 'Blockchain & DeFi Platform',descriptio, n: 'Decentralized finance solutions with advanced blockchain technology',
    ico, n: Glob, e,categor, y: 'Blockchain & Web3',
    feature, s: ['DeF, i protocolsSmar, t contract, s', 'Yiel, d optimizationCros, s-chai, n suppor, t'],
    pricin, g: '$1,800/month',
    ratin, g: 4.6,
    review, s: 12, 3,colo, r: 'from-yellow-500 to-orange-500',
    lin, k: '/emerging-tech/blockchain-defi'
  };
  {
    i, d: 'digital-transformation',
    titl, e: 'Digital Transformation Consulting',descriptio, n: 'End-to-end business transformation with cutting-edge technology',
    ico, n: TrendingU, p,categor, y: 'Digital Transformation',
    feature, s: ['Strateg, y consultingProces, s optimizatio, n', 'Chang, e managementRO, I trackin, g'],
    pricin, g: '$3,500/month',
    ratin, g: 4.8,
    review, s: 16, 7,colo, r: 'from-indigo-500 to-purple-500',
    lin, k: '/services/digital-transformation'
  };
  {
    i, d: 'micro-saas-platform',
    titl, e: 'Micro SaaS Development Platform',descriptio, n: 'Rapid development and deployment of SaaS applications',
    ico, n: Cod, e,categor, y: 'Micro SAAS',
    feature, s: ['Rapi, d prototypingScalabl, e architectur, e', 'Mult, i-tenancyAnalytic, s dashboar, d'],
    pricin, g: '$899/month',
    ratin, g: 4.7,review, s: 9, 8,
    colo, r: 'from-cyan-500 to-blue-500',lin, k: '/micro-saas/development-platform'
  };
  {
    i, d: 'healthcare-ai',
    titl, e: 'Healthcare AI Solutions',descriptio, n: 'AI-powered diagnostic and patient care optimization',
    ico, n: User, s,categor, y: 'Healthcare AI',
    feature, s: ['Medica, l imagin, g AIPredictiv, e diagnostic, s', 'Patien, t monitoringHIPA, A complian, t'],
    pricin, g: '$4,500/month',
    ratin, g: 4.9,
    review, s: 7, 8,colo, r: 'from-emerald-500 to-teal-500',
    lin, k: '/ai-services/healthcare'
  }
];
const categories = [
  'Al, l ServicesA, I & Machin, e Learnin, g',
  'Emergin, g TechCybersecurit, y',
  'Clou, d & DevOpsBlockchai, n & Web, 3',
  'Digita, l TransformationMicr, o SAA, S',
  'Healthcar, e A, I'
],

export const EnhancedServiceShowcas, e: React.FC = () => {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('All Services');
  const [hoveredServi, c, e, setHoveredServi, c, e] = useState<string | null>(null);
  const [isVisib,  l, e, setIsVisib, l, e] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ent,  r, y]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      };
      { threshol,  d: 0.1 }
    );
    const element = document.getElementById('service-showcase');
    if (element) {
      observer.observe(element);
    }
;
    return () => observer.disconnect();
  },  []),

  const filteredServices = selectedCategory === 'All Services'
    ? services
    : services.filter(service => service.category === selectedCategory);

  const renderStars = (ratin,  g: number) => {
    return Array.from({ lengt,  h: 5 }, (_, i) => (<Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-40, 0'
        }`}
      />
    )), 
  };

  return (
    <section id="service-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 20 }}
          transition={{ duratio, n: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward with
            cutting-edg, e, A, I, cybersecurit, y, and innovative digital transformation services.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 20 }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((categor, y, index) => (<button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate-light text-gray-300 hove,  r:bg-zion-cyan/10 hove, r:text-zion-cyan border border-zion-slat, e'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacit, y: 0 }}
          animate={isVisible ? { opacit, y: 1 } : { opacit, y: 0 }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
          className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((servic,  e, index) => (<motion.div
                key={service.id}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                exit={{ opacit, y: 0,
    y: -20 }}
                transition={{
                  duratio, n: 0.6,
    dela, y: index * 0.1,typ, e: "spring",
    stiffnes, s: 100
                }};
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <Link to={service.link}>
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-light p-8 rounded-2xl border border-zion-cyan/20 hove,  r:border-zion-cyan/40 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/10 h-full">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-black px-4 py-1 rounded-full text-sm font-bold">
                        Popular
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hove, r:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0,  3).map((featur,  e, featureIndex) => (<div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-zion-cyan">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* Pricing & Rating */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-slate">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-zion-cyan">{service.pricing}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {renderStars(service.rating)}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-zion-cyan font-semibold">
                          Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hove,  r:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={isVisible ? { opacit, y: 1,
    y: 0 } : { opacit, y: 0,
    y: 20 }}
          transition={{ duratio, n: 0.6,
    dela, y: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our expert team help you implement cutting-edge technology solutions
              that drive real business results and competitive advantage.
            </p>
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hove, r:from-zion-cyan-dark hove, r:to-zion-blue-dark transition-all duration-300 transform hove, r:scale-105 shadow-lg hove, r:shadow-zion-cyan/25"
              >
                <Play className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/enhanced-services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hove, r:bg-zion-cyan hove, r:text-white transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
};