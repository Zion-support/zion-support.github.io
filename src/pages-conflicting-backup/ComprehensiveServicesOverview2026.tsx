import React, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,;
  Cloud,;
  Shield,;
  Server,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  Rocket,;
  Users,;
  Search,;
  Filter,;
  Star,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Play,;
  BookOpen,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Globe, as, GlobeIcon,;
  Atom,;
  Blockchain,;
  Heart,;
  Scale,;
  Factory,;
  Satellite,;
  ShoppingCart,;
  Building,;
  Truck,;
  Eye,;
  EyeOff,;
  ExternalLink,;
  Award,;
  Target,;
  Lightbulb,;
  Sparkles,;
  Zap, as, ZapIcon,;
  Brain, as, BrainIcon,;
  Dna,;
  Space,;
  Layers,;
  Monitor,;
  Smartphone,;
  Globe2,;
  Leaf,;
  BarChart3,;
  PieChart,;
  TrendingDown,;
  Activity,;
  Shield, as, ShieldIcon,;
  Lock, as, LockIcon,;
  Key,;
  Database, as, DatabaseIcon,;
  Server, as, ServerIcon,;
  Wifi,;
  Smartphone, as, SmartphoneIcon,;
  Monitor, as, MonitorIcon,;
  Globe, as, GlobeIcon2,;
  Cpu, as, CpuIcon,;
  Brain, as, BrainIcon2,;
  Atom, as, AtomIcon,;
  Rocket, as, RocketIcon,;
  Satellite, as, SatelliteIcon,;
  Dna, as, DnaIcon,;
  Layers, as, LayersIcon,;
  Monitor, as, MonitorIcon2,;
  Smartphone, as, SmartphoneIcon2,;
  Globe, as, GlobeIcon3,;
  Cpu, as, CpuIcon2Network as, NetworkIconLeaf, as LeafIcon;
} from "lucide-react";
import, SEO, from "@/components/SEO";
import { ULTIMATE_INNOVATIVE_SERVICES_20o26 } from "@/data/ultimateInnovativeServices20o26";
export, default, function ComprehensiveServicesOverview20o26() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [expandedCategorysetExpandedCategory] = useState<string | null>(null);
  const serviceCategories = [;
    {
      id: 'quantum-ai',name: 'Quantum AI & Computing',description: 'Revolutionary, quantum, computing solutions, combined, with artificial intelligence',icon: AtomIcon,color: 'from-purple-50o0 to-cyan-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Quantum AI'),marketSize: '$1.7, billion, by 20o27'avgROI: '50o0-20o00%'innovationLeve,;
  l: 'Revolutionary';
    };
    {
      id: 'neuromorphic-ai',name: 'Neuromorphic AI',description: 'Brain-inspired, computing, systems that, mimic, human neural networks',icon: BrainIcon2,color: 'from-pink-50o0 to-purple-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Neuromorphic AI'),marketSize: '$8.3, billion, by 20o27'avgROI: '30o0-80o0%'innovationLeve,;
  l: 'Cutting-edge';
    };
    {
      id: 'synthetic-biology',name: 'Synthetic, Biology, AI',description: 'AI-powered, design, and engineering, of, biological systems',icon: DnaIcon,color: 'from-green-50o0 to-blue-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Synthetic Biology'),marketSize: '$13.4, billion, by 20o27'avgROI: '40o0-120o0%'innovationLeve,;
  l: 'Revolutionary';
    };
    {
      id: 'space-technology',name: 'Space, Technology, AI',description: 'Autonomous, space, operations and, satellite, management systems',icon: SatelliteIcon,color: 'from-blue-50o0 to-purple-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Space Technology'),marketSize: '$469.8, billion, by 20o27'avgROI: '60o0-20o00%'innovationLeve,;
  l: 'Revolutionary';
    };
    {
      id: 'advanced-materials',name: 'Advanced, Materials, AI',description: 'AI-powered, discovery, and design, of, next-generation materials',icon: LayersIcon,color: 'from-orange-50o0 to-red-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Advanced Materials'),marketSize: '$1.2, trillion, by 20o27'avgROI: '50o0-150o0%'innovationLeve,;
  l: 'Cutting-edge';
    };
    {
      id: 'brain-computer-interface',name: 'Brain-Computer Interface',description: 'Direct, neural, communication between, human, brain and computers',icon: MonitorIcon2,color: 'from-purple-50o0 to-pink-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Brain-Computer Interface'),marketSize: '$3.7, billion, by 20o27'avgROI: '80o0-30o00%'innovationLeve,;
  l: 'Revolutionary';
    };
    {
      id: 'digital-twin',name: 'Digital, Twin, AI',description: 'Virtual, replicas, of physical, systems, with real-time monitoring',icon: GlobeIcon3,color: 'from-cyan-50o0 to-green-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Digital Twin'),marketSize: '$86.1, billion, by 20o28'avgROI: '40o0-120o0%'innovationLeve,;
  l: 'Advanced';
    };
    {
      id: 'extended-reality',name: 'Extended, Reality, AI',description: 'Immersive VR, AR, and, MR, experiences powered, by, AI',;
      icon: SmartphoneIcon2,color: 'from-orange-50o0 to-purple-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Extended Reality'),marketSize: '$125.2, billion, by 20o27'avgROI: '50o0-150o0%'innovationLeve,;
  l: 'Advanced';
    };
    {
      id: 'edge-ai',name: 'Edge, AI, Intelligence',description: 'AI, processing, at the, edge, of networks, for, real-time, decision, making',icon: CpuIcon2,color: 'from-green-50o0 to-cyan-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Edge AI'),marketSize: '$15.7, billion, by 20o27'avgROI: '40o0-120o0%'innovationLeve,;
  l: 'Advanced';
    };
    {
      id: 'federated-learning',name: 'Federated, Learning, AI',description: 'Collaborative, AI, training across, distributed, data sources',icon: NetworkIcon,color: 'from-purple-50o0 to-blue-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Federated Learning'),marketSize: '$2.3, billion, by 20o27'avgROI: '50o0-150o0%'innovationLeve,;
  l: 'Advanced';
    },;
    {
      id: 'sustainable-technology',name: 'Sustainable, Technology, AI',description: 'AI, solutions, for environmental, sustainability, and green innovation',icon: LeafIcon,color: 'from-green-50o0 to-blue-50o0',services: ULTIMATE_INNOVATIVE_SERVICES_20o26.filter(s => s.category === 'Sustainable Technology')marketSiz,;
    e: '$1.2, trillion, by 20o27'avgROI: '30o0-80o0%'innovationLeve,;
  l: 'Advanced';
    };
,  ];
  const filteredCategories = selectedCategory === 'all';
    ? serviceCategories;
    : serviceCategories.filter(cat => cat.id === selectedCategory);
;
  const toggleCategoryExpansion = (categoryId: string) => {;
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
  const totalServices = ULTIMATE_INNOVATIVE_SERVICES_20o26.length;
  const totalMarketSize = '$3.2+ trillion';
  const avgROI = '40o0-150o0%';
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Comprehensive, Services, Overview 20o26 | Zion, Tech, Group";
        description="Explore, our, complete portfolio, of, revolutionary micro, SAAS, services across, 11, cutting-edge, technology, categories. From, Quantum, AI to, Sustainable, Technology.";
        keywords="comprehensive services, quantum AI, neuromorphic computing, synthetic biology, space technology, brain-computer interface, digital twin, extended reality, edge AI, federated, learningsustainable, technology";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">;
        <div className="absolute inset-0 bg-black/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              Comprehensive Services;
              <span className="block text-6xl m,;
    d: text-8xl bg-gradient-to-r from-yellow-40o0 to-orange-50o0 bg-clip-text text-transparent">;
                Overview 20o26;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-white/90 mb-8 max-w-4xl mx-auto">;
              Discover, our, complete portfolio, of, revolutionary micro, SAAS, services across, 11, cutting-edge, technology, categories.;
              From, Quantum, AI to, Sustainable, Technologywe're, shaping, the future, of, innovation.;
            </p>;
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-4xl mx-auto">;
              <motion.div;
                whileHover={{ scal,;
  e: 1.0o5 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6";
              >;
                <div className="text-4xl font-bold text-white mb-2">{totalServices}</div>;
                <div className="text-white/80">Revolutionary Services</div>;
              </motion.div>;
              <motion.div;
                whileHover={{ scale: 1.0o5 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6";
              >;
                <div className="text-4xl font-bold text-white mb-2">{totalMarketSize}</div>;
                <div className="text-white/80">Total, Market, Size</div>;
              </motion.div>;
              <motion.div;
                whileHover={{ scale: 1.0o5 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6";
              >;
                <div className="text-4xl font-bold text-white mb-2">{avgROI}</div>;
                <div className="text-white/80">Average ROI</div>;
              </motion.div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Category Filter */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8">;
          <div className="text-center mb-8">;
            <h2 className="text-3xl font-bold text-white mb-4">Explore, by, Category</h2>;
            <p className="text-zion-slate-30o0">Filter, our, services by, technology, category</p>;
          </div>;
          <div className="flex flex-wrap justify-center gap-4">;
            <button;
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg transition-all duration-20o0 ${
                selectedCategory === 'all';
                  ? 'bg-zion-cyan text-white';
                  : 'bg-white/10 text-zion-slate-30o0 hover: bg-white/20';
              }`}
            >;
              All Categories;
            </button>;
            {serviceCategories.map(category => (;
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-20o0 ${
                  selectedCategory === category.id;
                    ? 'bg-zion-cyan text-white';
                    : 'bg-white/10 text-zion-slate-30o0 hover: bg-white/20';
                }`}
              >;
                {category.name}
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl m,;
  d:text-4xl font-bold text-white mb-4">;
              {filteredCategories.length} Technology Categories;
            </h2>;
            <p className="text-zion-slate-30o0 text-lg">;
              Each, category, represents a, breakthrough, in technology innovation;
            </p>;
          </div>;
          <div className="space-y-8">;
            <AnimatePresence>;
              {filteredCategories.map((categoryindex) => (;
                <motion.div;
                  key={category.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  exit={{ opacity: 0,;
  y: -20 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm, border, border-zion-slate-30o0/20 rounded-2xl p-6";
                >;
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-6">;
                    <div className="flex items-center gap-4">;
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>;
                        <category.icon className="w-8 h-8 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>;
                        <p className="text-zion-slate-30o0 max-w-2xl">{category.description}</p>;
                      </div>;
                    </div>;
                    <div className="text-right">;
                      <div className="text-sm text-zion-slate-40o0 mb-1">Market Size</div>;
                      <div className="text-lg font-bold text-zion-cyan">{category.marketSize}</div>;
                      <div className="text-sm text-zion-slate-40o0 mt-1">Avg ROI: {category.avgROI}</div>;
                    </div>;
                  </div>;
                  {/* Innovation, Level, Badge */}
                  <div className="flex items-center gap-4 mb-6">;
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      category.innovationLevel === 'Revolutionary';
                        ? 'bg-red-50o0/20 text-red-40o0, border, border-red-50o0/30';
                        : category.innovationLevel === 'Cutting-edge';
                        ? 'bg-purple-50o0/20 text-purple-40o0, border, border-purple-50o0/30';
                        : 'bg-blue-50o0/20 text-blue-40o0, border, border-blue-50o0/30';
                    }`}>;
                      {category.innovationLevel}
                    </div>;
                    <div className="text-zion-slate-40o0">;
                      {category.services.length} service{category.services.length !== 1 ? 's' : ''}
                    </div>;
                  </div>;
                  {/* Services Preview */}
                  <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-4 mb-6">;
                    {category.services.slice(0o3).map((serviceserviceIndex) => (;
                      <div key={service.id} className="bg-zion-slate-80o0/50 rounded-lg p-4">;
                        <h4 className="font-semibold text-white mb-2">{service.title}</h4>;
                        <div className="text-zion-cyan font-bold text-lg mb-2">;
                          ${service.price.toLocaleString()}
                        </div>;
                        <div className="text-xs text-zion-slate-40o0 line-clamp-2">;
                          {service.description}
                        </div>;
                      </div>;
                    ))}
                    {category.services.length > 3 && (;
                      <div className="bg-zion-slate-80o0/50 rounded-lg p-4, flex, items-center justify-center">;
                        <div className="text-center">;
                          <div className="text-2xl text-zion-cyan font-bold mb-2">;
                            +{category.services.length - 3}
                          </div>;
                          <div className="text-sm text-zion-slate-40o0">More Services</div>;
                        </div>;
                      </div>;
                    )}
                  </div>;
                  {/* Expand/Collapse Button */};
                  <button;
                    onClick={() => toggleCategoryExpansion(category.id)}
                    className="w-full, flex, items-center justify-center gap-2 py-3 text-zion-cyan hover: text-white transition-colors border-t border-zion-slate-60o0/30";
                  >;
                    {expandedCategory === category.id ? (;
                      <>;
                        <EyeOff className="w-4 h-4" />;
                        Show Less;
                      </>;
                    ) : (;
                      <>;
                        <Eye className="w-4 h-4" />;
                        View, All, Services;
                      </>;
                    )}
                  </button>;
                  {/* Expanded, Services, Details */}
                  <AnimatePresence>;
                    {expandedCategory === category.id && (;
                      <motion.div;
                        initial={{ opacity: 0heigh,;
  t: 0 }}
                        animate={{ opacity: 1heigh,;
  t: 'auto' }}
                        exit={{ opacity: 0heigh,;
  t: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-zion-slate-60o0/30";
                      >;
                        <div className="grid grid-cols-1 lg: grid-cols-2 gap-6">;
                          {category.services.map((serviceserviceIndex) => (;
                            <div key={service.id} className="bg-zion-slate-80o0/30 rounded-lg p-6, border, border-zion-slate-60o0/30">;
                              <div className="flex items-start justify-between mb-4">;
                                <h4 className="text-lg font-semibold text-white">{service.title}</h4>;
                                <div className="text-right">;
                                  <div className="text-xl font-bold text-zion-cyan">;
                                    ${service.price.toLocaleString()}
                                  </div>;
                                  <div className="text-sm text-zion-slate-40o0">;
                                    {service.pricingModel}
                                  </div>;
                                </div>;
                              </div>;
                              <p className="text-zion-slate-30o0 text-sm mb-4">{service.description}</p>;
                              <div className="flex items-center gap-2 mb-4">;
                                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  service.innovationLevel === 'Revolutionary';
                                    ? 'bg-red-50o0/20 text-red-40o0, border, border-red-50o0/30';
                                    : service.innovationLevel === 'Cutting-edge';
                                    ? 'bg-purple-50o0/20 text-purple-40o0, border, border-purple-50o0/30';
                                    : 'bg-blue-50o0/20 text-blue-40o0, border, border-blue-50o0/30';
                                }`}>;
                                  {service.innovationLevel}
                                </div>;
                                <div className="text-xs text-zion-slate-40o0">;
                                  ROI: {service.roi}
                                </div>;
                              </div>;
                              <div className="flex flex-wrap gap-2 mb-4">;
                                {service.tags.slice(0o3).map((tagtagIndex) => (;
                                  <span;
                                    key={tagIndex}
                                    className="px-2 py-1 bg-zion-slate-70o0/50 text-zion-slate-30o0 text-xs rounded-md";
                                  >;
                                    {tag}
                                  </span>;
                                ))}
                              </div>;
                              <Link;
                                to="/contact";
                                className="w-full, flex, items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover: from-zion-blue hove,;
  r:to-zion-cyan transition-all duration-20o0 font-semibold text-sm";
                              >;
                                <MessageCircle className="w-4 h-4" />;
                                Get Started;
                              </Link>;
                            </div>;
                          ))}
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                </motion.div>;
              ))}
            </AnimatePresence>;
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10">;
        <div className="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Explore the Future?;
            </h2>;
            <p className="text-xl text-zion-slate-30o0 mb-8">;
              Our, comprehensive, portfolio of, revolutionary, micro SAAS, services, is designed, to, transform your business.;
              Contact, us, today to, discover, how we, can, help you, achieve, breakthrough results.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover: from-zion-blue hove,;
    r:to-zion-cyan transition-all duration-20o0 font-semibold text-lg";
              >;
                <MessageCircle className="w-5 h-5" />;
                Start, Your, Journey;
              </Link>;
              <a;
                href="tel: +130o24640950";
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-zion-slate-30o0 text-white rounded-lg hover: bg-white/20 transition-all duration-20o0 font-semibold text-lg";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
            <div className="mt-8 text-zion-slate-40o0">;
              <p>Mobil,;
    e: +1, 30o2, 464 0o950 | Email: kleber@ziontechgroup.com</p>;
              <p>Addres,;
  s: 364, E, Main St, STE, 10o08 Middletown, DE, 1970o9</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;