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
  Car,;
  Building2,;
  Factory,;
  Wheat,;
  Zap, as, EnergyIcon,;
  Stethoscope,;
  Satellite,;
  TrendingUp, as, ChartIconPenToolUserCheck;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { COMPREHENSIVE_INNOVATIVE_SERVICES_20o30 } from "../data/comprehensiveInnovativeServices20o30";
export, default, function ComprehensiveServicesShowcase20o30() {
  const [activeCategorysetActiveCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const [sortBysetSortBy] = useState('rating');
  // Enhanced, categories, with new services;
  const categories = [;
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.lengthico,;
    n: '🚀'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Business Intelligence').lengthico,;
    n: '🤖'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Operations').lengthico,;
    n: '⚙️'colo,;
  r: 'from-gray-50o0 to-slate-50o0' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Green Tech').lengthico,;
    n: '🌿'colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Quantum Computing').lengthico,;
    n: '⚛️'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Metaverse').lengthico,;
    n: '🌍'colo,;
  r: 'from-purple-50o0 to-indigo-50o0' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Healthcare').lengthico,;
    n: '🏥'colo,;
  r: 'from-pink-50o0 to-red-50o0' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Space Tech').lengthico,;
    n: '🛸'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'FinTech').lengthico,;
    n: '💰'colo,;
  r: 'from-emerald-50o0 to-green-50o0' };
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Content').lengthico,;
    n: '✍️'colo,;
  r: 'from-orange-50o0 to-red-50o0' },;
    { id: 'AI & Customer Support', name: 'AI & Customer Support'count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Customer Support').lengthico,;
    n: '💬'colo,;
  r: 'from-blue-50o0 to-purple-50o0' };
,  ];
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {;
      case 'rating': return b.rating - a.ratingcase 'price':;
        return a.price - b.pricecase 'reviews':;
        return b.reviewCount - a.reviewCount;
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return b.rating - a.rating;
    };
  });
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'AI & Operations':;
        return <Factory className="w-6 h-6" />;
      case 'AI & Green Tech': return <Leaf className="w-6 h-6" />,;
      case 'Quantum Computing':;
        return <Atom className="w-6 h-6" />,;
      case 'AI & Metaverse':;
        return <Globe2 className="w-6 h-6" />,;
      case 'AI & Healthcare':;
        return <Stethoscope className="w-6 h-6" />,;
      case 'AI & Space Tech':;
        return <Satellite className="w-6 h-6" />,;
      case 'FinTech':;
        return <DollarSign className="w-6 h-6" />case 'AI & Content':;
        return <PenTool className="w-6 h-6" />case 'AI & Customer Support':;
        return <UserCheck className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive, AI, Services Showcase 20o30 - Zion, Tech, Group";
        description="Explore, our, cutting-edge AI-powered, micro, SAAS services, and, solutions for 20o30. From, autonomous, operations to, quantum, computingdiscover the, future, of technology.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
              AI, Services, 20o30;
            </h1>;
            <p className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Discover, the, future of, technology, with our, comprehensive, suite of AI-powered, micro, SAAS services.;
              From, autonomous, operations to, quantum, computingwe're, building, tomorrow's, solutions, today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover: scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Contact U,;
    s: +1, 30o2, 464 0o950;
              </Link>;
              <Link;
                to="/request-quote";
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-full hover: bg-cyan-40o0 hove,;
  r:text-slate-90o0 transition-all duration-30o0";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Get Quote;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact, Information, Banner */}
      <section className="bg-gradient-to-r from-cyan-90o0/50 to-blue-90o0/50 border-y border-cyan-50o0/30">;
        <div className="max-w-7xl mx-auto py-6 px-4 sm: px-6 l,;
    g:px-8">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-6 text-center">;
            <div className="flex flex-col items-center">;
              <Phone className="w-6 h-6 text-cyan-40o0 mb-2" />;
              <p className="text-white font-semibold">Phone</p>;
              <p className="text-cyan-30o0">+1, 30o2, 464 0o950</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-6 h-6 text-cyan-40o0 mb-2" />;
              <p className="text-white font-semibold">Email</p>;
              <p className="text-cyan-30o0">kleber@ziontechgroup.com</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-6 h-6 text-cyan-40o0 mb-2" />;
              <p className="text-white font-semibold">Address</p>;
              <p className="text-cyan-30o0">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-center mb-12";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Revolutionary, AI, Services for 20o30;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our cutting-edge, AI, solutions are, designed, to transform, industries, and drive innovation.;
              Each, service, is built, with, the latest, technology, and backed, by, our expert team.;
            </p>;
          </motion.div>;
          {/* Category Filter */}
          <div className="mb-8">;
            <div className="flex flex-wrap justify-center gap-4">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-30o0, transform, hover: scale-10o5 ${;
                    activeCategory === category.id;
                      ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white shadow-lg';
                      : 'bg-slate-80o0 text-gray-30o0 hove,;
  r: bg-slate-70o0, border, border-slate-60o0';
                  }`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name} ({category.count});
                </button>;
              ))}
            </div>;
          </div>;
          {/* Search, and, Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">;
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-80o0, border, border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              />;
            </div>;
            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-80o0, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
            >;
              <option value="rating">Sort, by, Rating</option>;
              <option value="price">Sort, by, Price</option>;
              <option value="reviews">Sort, by, Reviews</option>;
              <option value="name">Sort, by, Name</option>;
            </select>;
          </div>;
          {/* Services Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            <AnimatePresence>;
              {sortedServices.map((serviceindex) => (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  exit={{ opacity: 0,;
  y: -20 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="bg-slate-80o0 rounded-xl p-6, border, border-slate-70o0 hover: border-cyan-50o0/50 transition-all duration-30o0, transform, hover: scale-10o5 hove,;
    r:shadow-2xl hove,;
  r:shadow-cyan-50o0/20";
                >;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="flex items-center space-x-2">;
                      {getCategoryIcon(service.category)}
                      <span className="text-sm text-cyan-40o0 font-medium">{service.subcategory}</span>;
                    </div>;
                    <div className="flex items-center space-x-1">;
                      <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                      <span className="text-white font-medium">{service.rating}</span>;
                      <span className="text-gray-40o0 text-sm">({service.reviewCount})</span>;
                    </div>;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>;
                  <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>;
                  <div className="space-y-3 mb-6">;
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-40o0">Price:</span>;
                      <span className="text-2xl font-bold text-cyan-40o0">{service.currency}{service.price.toLocaleString()}</span>;
                    </div>;
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-40o0">Market Price:</span>;
                      <span className="text-green-40o0 font-medium">{service.marketPrice}</span>;
                    </div>;
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-40o0">ROI:</span>;
                      <span className="text-yellow-40o0 font-medium">{service.roi}</span>;
                    </div>;
                    <div className="flex items-center justify-between">;
                      <span className="text-gray-40o0">Setup Time:</span>;
                      <span className="text-blue-40o0 font-medium">{service.setupTime}</span>;
                    </div>;
                  </div>;
                  <div className="mb-4">;
                    <div className="flex items-center justify-between mb-2">;
                      <span className="text-gray-40o0 text-sm">AI Score</span>;
                      <span className="text-cyan-40o0 font-bold">{service.aiScore}/10o0</span>;
                    </div>;
                    <div className="w-full bg-slate-70o0 rounded-full h-2">;
                      <div;
                        className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 h-2 rounded-full transition-all duration-50o0";
                        style={{ width: `${service.aiScore}%` }}
                      ></div>;
                    </div>;
                  </div>;
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {service.tags.slice(0o3).map((tagtagIndex) => (;
                      <span;
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-70o0 text-cyan-30o0 text-xs rounded-full";
                      >;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                  <div className="flex space-x-3">;
                    <Link;
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-center py-2 px-4 rounded-lg font-medium hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0";
                    >;
                      Learn More;
                    </Link>;
                    <Link;
                      to="/request-quote";
                      className="flex-1, border, border-cyan-50o0 text-cyan-40o0 text-center py-2 px-4 rounded-lg font-medium hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-30o0";
                    >;
                      Get Quote;
                    </Link>;
                  </div>;
                </motion.div>;
              ))}
            </AnimatePresence>;
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-90o0/30 to-blue-90o0/30">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, hundreds, of companies, already, leveraging our AI-powered, solutions, to drive innovation;
              increase efficiency, and, stay, ahead of, the, competition.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover: scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call U,;
    s: +1, 30o2, 464 0o950;
              </Link>;
              <Link;
                to="/request-quote";
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-full hover: bg-cyan-40o0 hove,;
    r:text-slate-90o0 transition-all duration-30o0";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Emai,;
  l: kleber@ziontechgroup.com;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Why, Choose, Zion Tech Group */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
            className="text-center mb-12";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              We're, not, just another, technology, company. We're, your, strategic partner, in, digital transformation.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">;
            {[;
              {
                icon: <Award className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Proven Excellence"descriptio,;
  n: "Over 95% client, satisfaction, rate with, proven, ROI across industries";
              };
              {
                icon: <Rocket className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Innovation First"descriptio,;
  n: "Cutting-edge, AI, solutions that, keep, you ahead, of, the competition";
              };
              {
                icon: <Shield className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Enterprise Security"descriptio,;
  n: "Bank-level, security, with SOC, 2, compliance and 99.99% uptime";
              }{
                icon: <Users className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Expert Support"descriptio,;
  n: "24/7, dedicated, support team, with, deep technical expertise";
              }
          ,  ].map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-slate-80o0 rounded-xl, border, border-slate-70o0 hover:border-cyan-50o0/50 transition-all duration-30o0";
              >;
                <div className="flex justify-center mb-4">{feature.icon}</div>;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;
// Atom, icon, component for, quantum, computing;
const Atom = ({ className }: { className?: string }) => (;
  <svg className={className} viewBox="0, 0, 24 24" fill="none" stroke="currentColor" strokeWidth="2">;
    <circle cx="12" cy="12" r="3" />;
    <path d="M12, 1v6m0, 6v6" />;
    <path d="M12, 1a8, 8 0, 0, 0-8, 8c0, 1.892.40o2 3.13 1.5 4.5L12 22l6.5-8.5c1.0o98-1.37 1.5-2.60o8 1.5-4.5a8, 8, 0 0 0-8-8z" />;
  </svg>;
);
;