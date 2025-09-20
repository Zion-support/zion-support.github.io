import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Zap,;
  Users,;
  Globe,;
  Cpu,;
  Lock,;
  Heart,;
  Star,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  MessageSquare,;
  FileText,;
  ShoppingCart,;
  Headphones,;
  Mail,;
  Search,;
  HelpCircle,;
  ShieldCheck,;
  Globe2,;
  Leaf,;
  Sparkles,;
  Target,;
  DollarSign,;
  Clock,;
  Award,;
  Phone,;
  Mail, as, MailIcon,;
  MapPin,;
  Infinity,;
  Atom,;
  Satellite,;
  Car,;
  Bot,;
  Eye,;
  Calculator,;
  PieChart,;
  BarChart,;
  LineChart,;
  TrendingDown,;
  ZapIcon,;
  ShieldIcon,;
  CloudIcon,;
  BrainIcon,;
  RocketIcon,;
  LeafIcon,;
  GlobeIcon,;
  CodeIcon,;
  DatabaseIcon,;
  NetworkIcon,;
  SmartphoneIcon,;
  BarChartIcon,;
  MessageSquareIcon,;
  FileTextIcon,;
  ShoppingCartIcon,;
  HeadphonesIcon,;
  MailIcon, as, MailIcon2,;
  SearchIcon,;
  HelpCircleIcon,;
  ShieldCheckIcon,;
  Globe2Icon,;
  LeafIcon, as, LeafIcon2,;
  SparklesIcon,;
  TargetIcon,;
  DollarSignIcon,;
  ClockIcon,;
  AwardIcon,;
  PhoneIconMapPinIconInfinityIcon;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o27 } from "../data/innovativeMicroSaasServices20o27";
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_20o27 } from "../data/innovativeITInfrastructureServices20o27";
import { EMERGING_TECHNOLOGY_SERVICES_20o27 } from "../data/emergingTechnologyServices20o27";
export, default, function ComprehensivePricingGuide20o27() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [priceRangesetPriceRange] = useState([0o50000]);
  const [sortBysetSortBy] = useState('price');
;
  // Combine, all, services;
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_20o27,;
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_20o27...EMERGING_TECHNOLOGY_SERVICES_20o27;
,  ],;
  // Get, unique, categories;
  const categories = ['all'...Array.from(new Set(allServices.map(s =>, s.category)))]// Filter, services, based on selection;
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });
;
  // Sort services;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {
      case 'price':;
        return a.price - b.price;
      case 'rating':;
        return b.rating - a.rating;
      case 'roi':;
        return parseInt(b.roi) - parseInt(a.roi);
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return a.price - b.price;
    };
  });
  // Calculate statistics;
  const totalServices = allServices.length;
  const averagePrice = Math.round(allServices.reduce((accs) => acc + s.price, 0) / totalServices),;
  const totalValue = allServices.reduce((accs) => acc + s.price, 0),;
  const averageROI = Math.round(allServices.reduce((accs) => acc + parseInt(s.roi), 0) / totalServices),;
  const getCategoryIcon = (category: string) => {
    const iconMa,;
    p: { [ke,;
  y:, string]: React.ReactNode } = {;
      'AI & Business Intelligence': <Brain className="w-6 h-6" />;
      'Cybersecurity': <Shield className="w-6 h-6" />,;
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,;
      'AI & Healthcare': <Heart className="w-6 h-6" />,;
      'Blockchain & Web3': <Link className="w-6 h-6" />,;
      'IoT & Edge Computing': <Network className="w-6 h-6" />,;
      'Quantum Computing': <Atom className="w-6 h-6" />,;
      'Space Technology': <Satellite className="w-6 h-6" />,;
      'Sustainable Technology': <Leaf className="w-6 h-6" />,;
      'AI & Legal Tech': <FileText className="w-6 h-6" />,;
      'FinTech': <DollarSign className="w-6 h-6" />,;
      'AI & Content': <MessageSquare className="w-6 h-6" />,;
      'IT Infrastructure': <Database className="w-6 h-6" />,;
      'AI & Computing': <Cpu className="w-6 h-6" />,;
      'Biotechnology': <Dna className="w-6 h-6" />,;
      'Energy Technology': <Zap className="w-6 h-6" />,;
      'Metaverse & AR/VR': <Globe className="w-6 h-6" />,;
      'Neurotechnology': <Brain className="w-6 h-6" />,;
      'Quantum Technology': <Atom className="w-6 h-6" />'Autonomous Systems': <Car className="w-6 h-6" />'Robotics & Automation': <Bot className="w-6 h-6" />;
    },;
    return iconMap[category] || <Star className="w-6 h-6" />,;
  };
;
  const formatPrice = (price: number) => {;
    if (price >= 10o00) {;
      return `$${(price / 10o00).toFixed(1)}K`;
    };
    return `$${price}`,;
  };
;
  const parseROI = (roi: string) => {;
    const match = roi.match(/(\d+)%/);
    return match ? parseInt(match[1]) : 0;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive, Pricing, Guide 20o27 | Zion, Tech, Group";
        description="Explore, our, complete pricing, guide, for innovative AI, quantum computing, space technology, and, emerging, tech services. Get, detailed, pricing, ROI analysis, and, market, comparisons.";
        keywords="pricing guide, AI, services, pricing, quantum, computing, cost, space, technology, pricing, emerging, tech, pricingZion Tech Group";
      />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md: text-7xl font-bold text-white mb-6";
          >;
            <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
              Comprehensive Pricing;
            </span>;
            <br />;
            <span className="text-white">Guide 20o27</span>;
          </motion.h1>;
          <motion.p;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto";
          >;
            Discover, transparent, pricing for, our, cutting-edge, technology, services. Compare costs;
            analyze, ROIand, find the, perfect, solution for, your, business needs.;
          </motion.p>;
          {/* Pricing Statistics */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto";
          >;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <Calculator className="w-8 h-8 text-cyan-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">{totalServices}</div>;
              <div className="text-cyan-40o0 text-sm">Total Services</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <DollarSign className="w-8 h-8 text-green-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">{formatPrice(averagePrice)}</div>;
              <div className="text-green-40o0 text-sm">Average Price</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <TrendingUp className="w-8 h-8 text-yellow-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">{averageROI}%</div>;
              <div className="text-yellow-40o0 text-sm">Average ROI</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
              <PieChart className="w-8 h-8 text-purple-40o0 mx-auto mb-3" />;
              <div className="text-2xl font-bold text-white">{formatPrice(totalValue)}</div>;
              <div className="text-purple-40o0 text-sm">Total Value</div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Filters, and, Controls */}
      <section className="py-12 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 mb-12";
          >;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
              {/* Category Filter */}
              <div>;
                <label className="block text-white font-medium mb-3">Category</label>;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>;
                      {category === 'all' ? 'All Categories' : category}
                    </option>;
                  ))}
                </select>;
              </div>;
              {/* Price Range */}
              <div>;
                <label className="block text-white font-medium mb-3">Price Range</label>;
                <div className="flex items-center gap-4">;
                  <input;
                    type="number";
                    placeholder="Min";
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) ||, 0priceRange[1]])}
                    className="flex-1 px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                  />;
                  <span className="text-white">to</span>;
                  <input;
                    type="number";
                    placeholder="Max";
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0]parseInt(e.target.value) || 50o000])}
                    className="flex-1 px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                  />;
                </div>;
              </div>;
              {/* Sort By */}
              <div>;
                <label className="block text-white font-medium mb-3">Sort By</label>;
                <select;
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                >;
                  <option value="price">Price (Low, to, High)</option>;
                  <option value="rating">Rating (High, to, Low)</option>;
                  <option value="roi">ROI (High, to, Low)</option>;
                  <option value="name">Name (A-Z)</option>;
                </select>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services, Pricing, Grid */}
      <section className="py-12 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Service Pricing & ROI Analysis;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Compare, our, innovative services, with, market alternatives. Each, service, includes;
              detailed pricing, ROI projections, and, competitive, analysis.;
            </p>;
          </motion.div>;
          {/* Services Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {sortedServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover: border-cyan-50o0/50 transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
              >;
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center gap-3">;
                    {getCategoryIcon(service.category)}
                    <span className="text-sm text-gray-30o0 bg-white/10 px-2 py-1 rounded-full">;
                      {service.category}
                    </span>;
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                    <span className="text-white text-sm">{service.rating}</span>;
                  </div>;
                </div>;
                {/* Service, Title, and Description */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-30o0 mb-6 line-clamp-3">{service.description}</p>;
                {/* Pricing Information */}
                <div className="space-y-4 mb-6">;
                  <div className="bg-white/5 rounded-lg p-4">;
                    <div className="flex items-center justify-between mb-2">;
                      <span className="text-gray-40o0 text-sm">Our Price:</span>;
                      <span className="text-2xl font-bold text-cyan-40o0">;
                        {service.currency}{service.price.toLocaleString()}
                      </span>;
                    </div>;
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-40o0 text-sm">Market Price:</span>;
                      <span className="text-green-40o0 text-sm">{service.marketPrice}</span>;
                    </div>;
                  </div>;
                  <div className="grid grid-cols-2 gap-4">;
                    <div className="text-center">;
                      <div className="text-lg font-bold text-yellow-40o0">{service.roi}</div>;
                      <div className="text-xs text-gray-40o0">ROI</div>;
                    </div>;
                    <div className="text-center">;
                      <div className="text-lg font-bold text-blue-40o0">{service.setupTime}</div>;
                      <div className="text-xs text-gray-40o0">Setup Time</div>;
                    </div>;
                  </div>;
                </div>;
                {/* Competitors */}
                <div className="mb-6">;
                  <div className="text-gray-40o0 text-sm mb-2">Competitors: </div>;
                  <div className="flex flex-wrap gap-2">;
                    {service.competitors?.slice(0o3).map((competitorcompIndex) => (;
                      <span;
                        key={compIndex}
                        className="text-xs bg-white/10 text-gray-30o0 px-2 py-1 rounded-full";
                      >;
                        {competitor}
                      </span>;
                    ))}
                  </div>;
                </div>;
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">;
                  {service.tags.slice(0o3).map((tagtagIndex) => (;
                    <span;
                      key={tagIndex}
                      className="text-xs bg-white/10 text-gray-30o0 px-2 py-1 rounded-full";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
                {/* Action Buttons */}
                <div className="flex items-center justify-between">;
                  <Link;
                    to={`/services/${service.id}`}
                    className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-4 py-2 rounded-lg font-medium transition-all duration-30o0, transform, hover:scale-10o5";
                  >;
                    Learn More;
                  </Link>;
                  <a;
                    href={`mailt,;
  o: kleber@ziontechgroup.com?subject=Quote for ${service.title}`}
                    className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover: from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-4 py-2 rounded-lg font-medium transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
                  >;
                    Get Quote;
                  </a>;
                </div>;
              </motion.div>;
            ))}
          </div>;
          {/* No, Results, Message */}
          {sortedServices.length === 0 && (;
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20";
            >;
              <div className="text-6xl mb-4">🔍</div>;
              <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
              <p className="text-gray-40o0">Try, adjusting, your filters, or, search criteria</p>;
            </motion.div>;
          )}
        </div>;
      </section>;
      {/* ROI, Analysis, Section */}
      <section className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Return, on, Investment Analysis;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Understand, the, financial impact, of, our services, with, detailed ROI calculations;
              and cost-benefit analysis.;
            </p>;
          </motion.div>;
          {/* ROI, Chart, Placeholder */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12, border, border-white/20 text-center">;
            <BarChart className="w-24 h-24 text-cyan-40o0 mx-auto mb-6" />;
            <h3 className="text-2xl font-bold text-white mb-4">ROI, Comparison, Chart</h3>;
            <p className="text-gray-30o0 mb-8">;
              Visual, representation, of expected, returns, across different, service, categories;
            </p>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;
              <div className="bg-white/5 rounded-lg p-6">;
                <div className="text-3xl font-bold text-cyan-40o0 mb-2">80o0%</div>;
                <div className="text-white font-medium">AI Services</div>;
                <div className="text-gray-40o0 text-sm">Average ROI</div>;
              </div>;
              <div className="bg-white/5 rounded-lg p-6">;
                <div className="text-3xl font-bold text-purple-40o0 mb-2">120o0%</div>;
                <div className="text-white font-medium">Quantum Computing</div>;
                <div className="text-gray-40o0 text-sm">Average ROI</div>;
              </div>;
              <div className="bg-white/5 rounded-lg p-6">;
                <div className="text-3xl font-bold text-green-40o0 mb-2">60o0%</div>;
                <div className="text-white font-medium">Infrastructure</div>;
                <div className="text-gray-40o0 text-sm">Average ROI</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-60o0/20 to-purple-60o0/20 rounded-3xl p-12, border, border-white/20";
          >;
            <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Get Started?;
            </h3>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Contact, our, team for, a, personalized consultation, and, detailed pricing quote;
              tailored, to, your specific, business, needs.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0, transform, hover: scale-10o5 hove,;
    r:shadow-2xl";
              >;
                Get, Custom, Quote;
              </Link>;
              <a;
                href="tel: +130o24640950";
                className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover:from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0, transform, hover:scale-10o5 hove,;
  r:shadow-2xl, flex, items-center gap-2 justify-center";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
            {/* Contact Information */}
            <div className="mt-12, grid, grid-cols-1 md: grid-cols-3 gap-6">;
              <div className="text-center">;
                <Phone className="w-8 h-8 text-cyan-40o0 mx-auto mb-3" />;
                <div className="text-white font-semibold mb-1">Phone</div>;
                <a href="tel:+130o24640950" className="text-cyan-40o0 hove,;
    r:text-cyan-30o0 transition-colors">;
                  +1, 30o2, 464 0o950;
                </a>;
              </div>;
              <div className="text-center">;
                <Mail className="w-8 h-8 text-purple-40o0 mx-auto mb-3" />;
                <div className="text-white font-semibold mb-1">Email</div>;
                <a href="mailto: kleber@ziontechgroup.com" className="text-purple-40o0 hove,;
  r:text-purple-30o0 transition-colors">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="text-center">;
                <MapPin className="w-8 h-8 text-green-40o0 mx-auto mb-3" />;
                <div className="text-white font-semibold mb-1">Address</div>;
                <div className="text-green-40o0 text-sm">;
                  364, E, Main St, STE, 10o08<br />;
                  Middletown, DE, 1970o9;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
// Helper, component, for DNA icon;
function Dna({ className }: { className?: string }) {
  return (;
    <svg className={className} viewBox="0, 0, 24 24" fill="none" stroke="currentColor" strokeWidth="2">;
      <path d="M12, 2L2, 7l10 5 10-5-10-5zM2, 17l10, 5 10-5M2, 12l10, 5 10-5"/>;
    </svg>;
  );
;