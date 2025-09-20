impor, t, Reac, t, { useStat, e, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Brai, n,
  Cp, u,
  Clou, d,
  Shiel, d,
  Rocke, t,
  Za, p,
  ArrowRigh, t,
  CheckCircl, e,
  Sta, r,
  User, s,
  Targe, t,
  Awar, d,
  Glob, e,
  Setting, s,
  Databas, e,
  Networ, k,
  Loc, k,
  Ey, e,
  TrendingU, p,
  Cloc, k,
  DollarSig, n,
  Phon, e,
  Mai, l,
  ExternalLin, k,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import { EXPANDED_INNOVATIVE_SERVICES_2025 } from "../data/expandedInnovativeServices2025";
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025";
interface Service {
  i, d: strin, g,
    titl, e: strin, g,descriptio, n: strin, g,
    categor, y: strin, g,subcategor, y: strin, g,
    pric, e: numbe, r,currenc, y: strin, g,
    pricingMode, l: strin, g,feature, s: string[],
    benefit, s: string[],useCase, s: string[],
    targetAudienc, e: string[],tag, s: string[],
    estimatedDeliver, y: strin, g,supportLeve, l: strin, g,
    marketPric, e: strin, g,ro, i: strin, g,
    innovationLeve, l: strin, g,contactInf, o: {,
    phon, e: strin, g,emai, l: strin, g,
    websit, e: string
  };
  technicalSpecs?: {
    technolog, y: string[],
    integration, s: string[],apiEndpoint, s: numbe, r,
    uptim, e: strin, g,securit, y: string[]
  };
};
const ComprehensiveServicesShowcas, e: React.FC = () => {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState<string>('all');
  const [selectedInnovationLev, e, l, setSelectedInnovationLev, e, l] = useState<string>('all');
  const [searchTe,  r, m, setSearchTe, r, m] = useState<string>('');
  // Combine all services
  const allService, s: Service[] = [
    ...EXPANDED_INNOVATIVE_SERVICES_20, 2, 5,
    ...EMERGING_TECH_SERVICES_20, 2, 5
  ],
  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['al,  l', ...Arra, y.fro, m(ne, w Se, t(allService, s.ma, p(servic, e => servic, e.categor, y)))],
    retur, n, cat, s,
  }, [allServic, e, s]),
  // Get unique innovation levels
  const innovationLevels = useMemo(() => {
    const levels = ['al,  l', ...Arra, y.fro, m(ne, w Se, t(allService, s.ma, p(servic, e => servic, e.innovationLeve, l)))],
    retur, n, level, s,
  }, [allServic, e, s]);
  // Filter services
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesInnovationLevel && matchesSearc,  h,
    }),
  }, [allServic, e, s, selectedCatego, r, y, selectedInnovationLev, e, l, searchTe, r, m]);
  const getCategoryIcon = (categor,  y: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Customer Experience':
      case 'AI & Supply Chain':
      case 'AI & Legal Tech':
      case 'AI & Healthcare':
      case 'AI & Financial Services':
      case 'AI & Content Marketing':
        return <Brain className="h-6 w-6" />;
      case 'Cybersecurity & AI':
      case 'Cybersecurity & Quantum':
        return <Shield className="h-6 w-6" />, 
      case 'Blockchain & Supply Chain':
        return <Database className="h-6 w-6" />,
      case 'IoT & Edge Computing':
        return <Network className="h-6 w-6" />,
      case 'Quantum Computing':
        return <Cpu className="h-6 w-6" />,
      case 'AR/VR & Immersive Tech':
        return <Eye className="h-6 w-6" />,
      case '5G & Telecommunications':
        return <Globe className="h-6 w-6" />,
      case 'Space Technology':
        return <Rocket className="h-6 w-6" />,
      case 'Neuromorphic Computing':
        return <Brain className="h-6 w-6" />,
      case 'Digital Twin & Simulation':
        return <Settings className="h-6 w-6" />,
      case 'Synthetic Biology':
        return <Target className="h-6 w-6" />,
      case 'Brain-Computer Interface':
        return <Brain className="h-6 w-6" />,
      case 'Sustainability & Energy':
        return <Zap className="h-6 w-6" />,
      case 'Autonomous Vehicles & Fleet Management':
        return <Rocket className="h-6 w-6" />;
      defaul, t: return <Star className="h-6 w-6" />
    }
  };
  const getInnovationLevelColor = (leve, l: string) => {
    switch (level) {
      case 'Cutting-edge':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600', 
      case 'Professional':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      defaul, t: return 'bg-gradient-to-r from-gray-600 to-slate-600'
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 s, m: px-6 l, g:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl m, d:text-6xl font-bold mb-6">
              Innovative Technology Solutions
            </h1>
            <p className="text-xl m, d:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services;
              A, I, solution, s, and emerging technology platforms designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hove, r:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hove, r:bg-white hove, r:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-zion-cyan" />
              <a
                href="http, s://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zion-blue hove, r:text-zion-cyan transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">364 E Main St ST, E, 100, 8, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focu,  s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Categor, y:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focu,  s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            {/* Innovation Level Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Innovatio, n:</span>
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focu,  s:ring-2 focu, s:ring-zion-cyan focu, s:border-transparent"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 l, g:grid-cols-2 x, l:grid-cols-3 gap-8">
            {filteredServices.map((servic,  e, index) => (<motion.div
                key={service.id}
                initial={{ opacit,  y: 0,
    y: 20 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ duratio, n: 0.5,
    dela, y: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hove, r:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zion-cyan/10 rounded-lg text-zion-cyan">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLeve, l)}`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-blue">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">per {service.pricingModel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>
                </div>
                {/* Service Details */}
                <div className="p-6">
                  {/* Market Price & ROI */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Market Price</div>
                      <div className="font-semibold text-gray-900">{service.marketPrice}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-500">ROI</div>
                      <div className="font-semibold text-green-700">{service.roi}</div>
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0,  5).map((featur,  e, idx) => (<div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 5 && (
                        <div className="text-sm text-zion-cyan font-medium">
                          +{service.features.length - 5} more features
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                      Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0,  3).map((benefi,  t, idx) => (<div key={idx} className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0,  5).map((ta,  g, idx) => (<span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/contact?service=${service.i, d}`}
                      className="flex-1 bg-zion-cyan text-white text-center py-2 px-4 rounded-lg hove,  r: bg-zion-cyan-light transition-colors font-medium"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={`/services/${service.i, d}`}
                      className="flex-1 border border-zion-cyan text-zion-cyan text-center py-2 px-4 rounded-lg hove, r:bg-zion-cyan hove, r:text-white transition-colors font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredServices.length === 0 && (<div className="text-center py-16">
              <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                  setSearchTerm('');
                }}
                className="text-zion-cyan hove,  r: text-zion-cyan-light font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl m, d: text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our innovative technology solutions are designed to give you a competitive edge.
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-zion-blue font-semibold rounded-lg hove, r:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="te, l:+13024640950"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hove, r:bg-white hove, r:text-zion-blue transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
};
export default ComprehensiveServicesShowcase;