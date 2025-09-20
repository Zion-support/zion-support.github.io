import React, { useStateuseMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ;
    Search,;
    Filter,;
    TrendingUp,;
    Shield,;
    Zap,;
    Globe,;
    Users,;
    BarChart3,;
    DollarSign,;
    Heart,;
    GraduationCap,;
    Target,;
    Settings,;
    Package,;
    CheckCircle,;
    Star,;
    ArrowRight,;
    Phone,;
    Mail,;
    MapPin,;
    ExternalLink,;
    PlusDatabaseLayers;
} from "lucide-react";
import { ;
    comprehensiveServicesIndex20o25,;
    getServiceStats, ;
    getServicesByCategorygetServicesBySourceServiceIndex ;
} from "../data/comprehensive-services-index-20o25";
const ComprehensiveServicesDashboard20o25: React.FC = () => {;
    const [searchTermsetSearchTerm] = useState('');
    const [selectedCategorysetSelectedCategory] = useState<string>('all');
    const [selectedSourcesetSelectedSource] = useState<string>('all');
    const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
;
    const stats = getServiceStats();
    const categories = stats.categoryBreakdown;
;
    const filteredServices = useMemo(() => {;
        let filtered = comprehensiveServicesIndex20o25;
;
        if() {
            filtered = filtered.filter(service =>;
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                service.category.toLowerCase().includes(searchTerm.toLowerCase());
            ) };
;
        if() {
            filtered = filtered.filter(service => service.category === selectedCategory);
        };
;
        if() {
            filtered = filtered.filter(service => service.source === selectedSource);
        };
;
        return filtered,;
    }, [searchTerm,, selectedCategoryselectedSource]);
;
    const getCategoryColor = (category: string) => {
        const color,;
    s: { [ke,;
  y:, string]: string } = {;
            'fintech': 'from-green-50o0 to-emerald-60o0healthtech': 'from-red-50o0 to-pink-60o0edutech': 'from-purple-50o0 to-violet-60o0martech': 'from-pink-50o0 to-rose-60o0micro-saas': 'from-blue-50o0 to-indigo-60o0ai-services': 'from-cyan-50o0 to-blue-60o0it-services': 'from-slate-50o0 to-gray-60o0emerging-tech': 'from-orange-50o0 to-yellow-60o0Fintech': 'from-green-50o0 to-emerald-60o0Healthtech': 'from-red-50o0 to-pink-60o0Edutech': 'from-purple-50o0 to-violet-60o0Martech': 'from-pink-50o0 to-rose-60o0Micro SaaS': 'from-blue-50o0 to-indigo-60o0AI Services': 'from-cyan-50o0 to-blue-60o0IT Services': 'from-slate-50o0 to-gray-60o0';
        };
        return colors[category] || 'from-gray-50o0 to-gray-60o0',;
    };
;
    const getCategoryIcon = (category: string) => {
        const icon,;
    s: { [ke,;
  y:, string]: React.ReactNode } = {;
            'fintech': <DollarSign className="w-5 h-5" />;
            'healthtech': <Heart className="w-5 h-5" />,;
            'edutech': <GraduationCap className="w-5 h-5" />,;
            'martech': <Target className="w-5 h-5" />,;
            'micro-saas': <Settings className="w-5 h-5" />,;
            'ai-services': <Zap className="w-5 h-5" />,;
            'it-services': <Shield className="w-5 h-5" />,;
            'emerging-tech': <TrendingUp className="w-5 h-5" />,;
            'Fintech': <DollarSign className="w-5 h-5" />,;
            'Healthtech': <Heart className="w-5 h-5" />,;
            'Edutech': <GraduationCap className="w-5 h-5" />,;
            'Martech': <Target className="w-5 h-5" />,;
            'Micro SaaS': <Settings className="w-5 h-5" />'AI Services': <Zap className="w-5 h-5" />'IT Services': <Shield className="w-5 h-5" />;
        },;
        return icons[category] || <Globe className="w-5 h-5" />,;
    };
;
    const getSourceBadge = (source: string) => {
        const badges = {
            'existing': { colo,;
    r: 'bg-blue-10o0 text-blue-80o0'tex,;
  t: 'Existing' };
            'new': { color: 'bg-green-10o0 text-green-80o0'tex,;
  t: 'New' };
            'pricing-guide': { color: 'bg-purple-10o0 text-purple-80o0'tex,;
  t: 'Pricing Guide' };
        };
        const badge = badges[source, as, keyof typeof, badges] || { color: 'bg-gray-10o0 text-gray-80o0'tex,;
  t: source };
        return (;
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>;
                {badge.text}
            </span>;
        ),;
    },;
    return(<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">;
            <Helmet>;
                <title>Comprehensive, Services, Dashboard 20o25 - Zion, Tech, Group</title>;
                <meta name="description" content="Complete, overview, of all, our, innovative technology services, micro, SAAS, solutionsand AI-powered platforms. Comprehensive, dashboard, with statistics, and, search capabilities." />;
                <meta name="keywords" content="services dashboard, micro SAAS, IT services, AI services, fintech, healthtech, edutech, martechbusiness, solutions, overview" />;
                <link rel="canonical" href="https: //ziontechgroup.com/comprehensive-services-dashboard-20o25" />;
            </Helmet>;
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
                <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0 via-indigo-70o0 to-purple-80o0 opacity-90"></div>;
                <div className="relative max-w-7xl mx-auto text-center">;
                    <motion.div;
                        initial={{ opacit,;
    y: 0,;
  y: 20 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        transition={{ duration: 0.8 }}
                    >;
                        <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
                            Comprehensive, Services, Dashboard 20o25;
                        </h1>;
                        <p className="text-xl m,;
  d: text-2xl text-blue-10o0 mb-8 max-w-4xl mx-auto">;
                            Complete, overview, of our, innovative, technology solutions portfolio. Discover, explore, and, compare, all our, services, in one place.;
                        </p>;
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                            <div className="flex items-center space-x-2 text-white">;
                                <Database className="w-5 h-5 text-blue-40o0" />;
                                <span>{stats.total} Total Services</span>;
                            </div>;
                            <div className="flex items-center space-x-2 text-white">;
                                <Layers className="w-5 h-5 text-green-40o0" />;
                                <span>{stats.categories} Categories</span>;
                            </div>;
                            <div className="flex items-center space-x-2 text-white">;
                                <Plus className="w-5 h-5 text-yellow-40o0" />;
                                <span>{stats.new} New Services</span>;
                            </div>;
                        </div>;
                    </motion.div>;
                </div>;
            </section>;
            {/* Contact, Information, Banner */}
            <section className="bg-white border-b border-gray-20o0 py-6">;
                <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 m,;
    d:space-y-0">;
                        <div className="flex items-center space-x-6">;
                            <div className="flex items-center space-x-2 text-gray-60o0">;
                                <Phone className="w-4 h-4" />;
                                <span>+1, 30o2, 464 0o950</span>;
                            </div>;
                            <div className="flex items-center space-x-2 text-gray-60o0">;
                                <Mail className="w-4 h-4" />;
                                <span>kleber@ziontechgroup.com</span>;
                            </div>;
                            <div className="flex items-center space-x-2 text-gray-60o0">;
                                <MapPin className="w-4 h-4" />;
                                <span>364, E, Main St, STE, 10o08Middletown DE 1970o9</span>;
                            </div>;
                        </div>;
                        <a;
                            href="https: //ziontechgroup.com";
                            target="_blank";
                            rel="noopener noreferrer";
                            className="inline-flex items-center space-x-2 text-blue-60o0 hove,;
  r:text-blue-70o0 font-medium";
                        >;
                            <span>Visit, Our, Website</span>;
                            <ExternalLink className="w-4 h-4" />;
                        </a>;
                    </div>;
                </div>;
            </section>;
            {/* Statistics Section */}
            <section className="py-12 px-4 sm: px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <h2 className="text-3xl font-bold text-gray-80o0 mb-8 text-center">Services Overview</h2>;
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
                        <motion.div;
                            initial={{ opacit,;
    y: 0,;
  y: 20 }}
                            animate={{ opacity: 1,;
  y: 0 }}
                            transition={{ duration: 0.5dela,;
  y: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg, border, border-gray-10o0";
                        >;
                            <div className="flex items-center space-x-3">;
                                <Database className="w-8 h-8 text-blue-60o0" />;
                                <div>;
                                    <p className="text-sm text-gray-60o0">Total Services</p>;
                                    <p className="text-2xl font-bold text-gray-80o0">{stats.total}</p>;
                                </div>;
                            </div>;
                        </motion.div>;
;
                        <motion.div;
                            initial={{ opacity: 0,;
  y: 20 }}
                            animate={{ opacity: 1,;
  y: 0 }}
                            transition={{ duration: 0.5dela,;
  y: 0.2 }}
                            className="bg-white rounded-xl p-6 shadow-lg, border, border-gray-10o0";
                        >;
                            <div className="flex items-center space-x-3">;
                                <Layers className="w-8 h-8 text-green-60o0" />;
                                <div>;
                                    <p className="text-sm text-gray-60o0">Categories</p>;
                                    <p className="text-2xl font-bold text-gray-80o0">{stats.categories}</p>;
                                </div>;
                            </div>;
                        </motion.div>;
;
                        <motion.div;
                            initial={{ opacity: 0,;
  y: 20 }}
                            animate={{ opacity: 1,;
  y: 0 }}
                            transition={{ duration: 0.5dela,;
  y: 0.3 }}
                            className="bg-white rounded-xl p-6 shadow-lg, border, border-gray-10o0";
                        >;
                            <div className="flex items-center space-x-3">;
                                <Plus className="w-8 h-8 text-yellow-60o0" />;
                                <div>;
                                    <p className="text-sm text-gray-60o0">New Services</p>;
                                    <p className="text-2xl font-bold text-gray-80o0">{stats.new}</p>;
                                </div>;
                            </div>;
                        </motion.div>;
;
                        <motion.div;
                            initial={{ opacity: 0,;
  y: 20 }}
                            animate={{ opacity: 1,;
  y: 0 }}
                            transition={{ duration: 0.5dela,;
  y: 0.4 }}
                            className="bg-white rounded-xl p-6 shadow-lg, border, border-gray-10o0";
                        >;
                            <div className="flex items-center space-x-3">;
                                <BarChart3 className="w-8 h-8 text-purple-60o0" />;
                                <div>;
                                    <p className="text-sm text-gray-60o0">Existing Services</p>;
                                    <p className="text-2xl font-bold text-gray-80o0">{stats.existing}</p>;
                                </div>;
                            </div>;
                        </motion.div>;
                    </div>;
                </div>;
            </section>;
            {/* Search, and, Filter Section */}
            <section className="py-8 px-4 sm: px-6 l,;
    g:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <div className="flex flex-col l,;
  g:flex-row gap-6">;
                        {/* Search */}
                        <div className="flex-1">;
                            <div className="relative">;
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                                <input;
                                    type="text";
                                    placeholder="Search services...";
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3, border, border-gray-30o0 rounded-lg focus: ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
                                />;
                            </div>;
                        </div>;
                        {/* Category Filter */}
                        <div className="flex-shrink-0">;
                            <select;
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3, border, border-gray-30o0 rounded-lg focus: ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
                            >;
                                <option value="all">All Categories</option>;
                                {categories.map(category => (;
                                    <option key={category.name} value={category.name}>;
                                        {category.name} ({category.count});
                                    </option>;
                                ))}
                            </select>;
                        </div>;
                        {/* Source Filter */}
                        <div className="flex-shrink-0">;
                            <select;
                                value={selectedSource}
                                onChange={(e) => setSelectedSource(e.target.value)}
                                className="px-4 py-3, border, border-gray-30o0 rounded-lg focus: ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
                            >;
                                <option value="all">All Sources</option>;
                                <option value="existing">Existing Services</option>;
                                <option value="new">New Services</option>;
                                <option value="pricing-guide">Pricing Guide</option>;
                            </select>;
                        </div>;
                        {/* View, Mode, Toggle */}
                        <div className="flex-shrink-0">;
                            <div className="flex, border, border-gray-30o0 rounded-lg">;
                                <button;
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-3 rounded-l-lg ${
                                        viewMode === 'grid';
                                            ? 'bg-blue-60o0 text-white';
                                            : 'bg-white text-gray-60o0 hover: bg-gray-50';
                                    }`}
                                >;
                                    Grid;
                                </button>;
                                <button;
                                    onClick={() => setViewMode('list')}
                                    className={`px-4 py-3 rounded-r-lg ${
                                        viewMode === 'list';
                                            ? 'bg-blue-60o0 text-white';
                                            : 'bg-white text-gray-60o0 hover: bg-gray-50';
                                    }`}
                                >;
                                    List;
                                </button>;
                            </div>;
                        </div>;
                    </div>;
                </div>;
            </section>;
            {/* Services Display */}
            <section className="py-12 px-4 sm: px-6 l,;
  g:px-8">;
                <div className="max-w-7xl mx-auto">;
                    {filteredServices.length === 0 ? (;
                        <div className="text-center py-12">;
                            <Search className="w-16 h-16 text-gray-40o0 mx-auto mb-4" />;
                            <h3 className="text-xl font-semibold text-gray-60o0 mb-2">No, services, found</h3>;
                            <p className="text-gray-50o0">Try, adjusting, your search, or, filter criteria</p>;
                        </div>;
                    ) : (;
                        <>;
                            <div className="flex justify-between items-center mb-8">;
                                <h3 className="text-2xl font-bold text-gray-80o0">;
                                    {filteredServices.length} Services Found;
                                </h3>;
                                <p className="text-gray-60o0">;
                                    Showing {filteredServices.length} of {stats.total} total services;
                                </p>;
                            </div>;
                            {viewMode === 'grid' ? (;
                                <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
                                    {filteredServices.map((serviceindex) => (;
                                        <motion.div;
                                            key={service.id}
                                            initial={{ opacity: 0,;
  y: 20 }}
                                            animate={{ opacity: 1,;
  y: 0 }}
                                            transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-30o0 overflow-hidden, border, border-gray-10o0";
                                        >;
                                            {/* Service Header */}
                                            <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>;
                                                <div className="flex items-center justify-between mb-4">;
                                                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>;
                                                    {getSourceBadge(service.source)}
                                                </div>;
                                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>;
                                                <p className="text-blue-10o0 text-sm">{service.category}</p>;
                                            </div>;
                                            {/* Service Content */}
                                            <div className="p-6">;
                                                <p className="text-gray-60o0 mb-4 line-clamp-3">{service.description}</p>;
                                                <div className="flex items-center justify-between mb-4">;
                                                    <span className="text-lg font-semibold text-gray-80o0">{service.pricing}</span>;
                                                    <span className="text-sm text-gray-50o0">Starting price</span>;
                                                </div>;
;
                                                <a;
                                                    href={service.link}
                                                    className="w-full bg-gradient-to-r from-blue-60o0 to-indigo-60o0 text-white py-3 px-4 rounded-lg font-medium hover: from-blue-70o0 hove,;
  r:to-indigo-70o0 transition-all duration-20o0, flex, items-center justify-center space-x-2";
                                                >;
                                                    <span>Learn More</span>;
                                                    <ArrowRight className="w-4 h-4" />;
                                                </a>;
                                            </div>;
                                        </motion.div>;
                                    ))}
                                </div>;
                            ) : (;
                                <div className="space-y-4">;
                                    {filteredServices.map((serviceindex) => (;
                                        <motion.div;
                                            key={service.id}
                                            initial={{ opacity: 0,;
  x: -20 }}
                                            animate={{ opacity: 1,;
  x: 0 }}
                                            transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                                            className="bg-white rounded-xl p-6 shadow-lg, border, border-gray-10o0 hover:shadow-xl transition-all duration-30o0";
                                        >;
                                            <div className="flex items-center justify-between">;
                                                <div className="flex items-center space-x-4">;
                                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                                                        {getCategoryIcon(service.category)}
                                                    </div>;
                                                    <div>;
                                                        <h3 className="text-xl font-bold text-gray-80o0 mb-1">{service.name}</h3>;
                                                        <p className="text-gray-60o0 mb-2">{service.description}</p>;
                                                        <div className="flex items-center space-x-4 text-sm text-gray-50o0">;
                                                            <span>{service.category}</span>;
                                                            <span>•</span>;
                                                            <span>{service.pricing}</span>;
                                                            <span>•</span>;
                                                            {getSourceBadge(service.source)}
                                                        </div>;
                                                    </div>;
                                                </div>;
                                                <a;
                                                    href={service.link}
                                                    className="bg-blue-60o0 text-white px-4 py-2 rounded-lg hover: bg-blue-70o0 transition-colors";
                                                >;
                                                    View Details;
                                                </a>;
                                            </div>;
                                        </motion.div>;
                                    ))}
                                </div>;
                            )}
                        </>;
                    )}
                </div>;
            </section>;
            {/* Contact, CTA, Section */}
            <section className="py-16 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-blue-60o0 via-indigo-70o0 to-purple-80o0">;
                <div className="max-w-4xl mx-auto text-center">;
                    <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-6">;
                        Ready, to, Explore Our Services?;
                    </h2>;
                    <p className="text-xl text-blue-10o0 mb-8">;
                        Get, in, touch with, our, team to, discuss, how our, innovative, solutions can, transform, your business;
                    </p>;
                    <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                        <a;
                            href="tel: +130o24640950";
                            className="inline-flex items-center space-x-2 bg-white text-blue-60o0 px-6 py-3 rounded-lg font-medium hove,;
    r:bg-gray-10o0 transition-colors";
                        >;
                            <Phone className="w-5 h-5" />;
                            <span>Call +1, 30o2, 464 0o950</span>;
                        </a>;
                        <a;
                            href="mailto: kleber@ziontechgroup.com";
                            className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hove,;
    r:bg-white hove,;
  r:text-blue-60o0 transition-colors";
                        >;
                            <Mail className="w-5 h-5" />;
                            <span>Email Us</span>;
                        </a>;
                    </div>;
                </div>;
            </section>;
            {/* Footer */}
            <footer className="bg-gray-90o0 text-white py-12 px-4 sm: px-6 lg:px-8">;
                <div className="max-w-7xl mx-auto">;
                    <div className="grid grid-cols-1 m,;
    d:grid-cols-3 gap-8">;
                        <div>;
                            <h3 className="text-lg font-semibold mb-4">Zion, Tech, Group</h3>;
                            <p className="text-gray-40o0 mb-4">;
                                Leading, provider, of innovative, technology, solutions and, micro, SAAS services.;
                            </p>;
                            <div className="space-y-2 text-sm text-gray-40o0">;
                                <p>364, E, Main St, STE, 10o08</p>;
                                <p>Middletown, DE, 1970o9</p>;
                            </div>;
                        </div>;
                        <div>;
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>;
                            <div className="space-y-2 text-sm text-gray-40o0">;
                                <p>Phone: +1, 30o2, 464 0o950</p>;
                                <p>Email: kleber@ziontechgroup.com</p>;
                                <p>Websit,;
  e: ziontechgroup.com</p>;
                            </div>;
                        </div>;
                        <div>;
                            <h3 className="text-lg font-semibold mb-4">Services</h3>;
                            <div className="space-y-2 text-sm text-gray-40o0">;
                                <p>• Micro, SAAS, Solutions</p>;
                                <p>• AI-Powered Services</p>;
                                <p>• IT Infrastructure</p>;
                                <p>• Emerging Technologies</p>;
                            </div>;
                        </div>;
                    </div>;
                    <div className="border-t border-gray-80o0 mt-8 pt-8 text-center text-sm text-gray-40o0">;
                        <p>&copy, 20o25, Zion, Tech Group. All, rights, reserved.</p>;
                    </div>;
                </div>;
            </footer>;
        </div>;
    );
};
;
export, default, ComprehensiveServicesDashboard20o25;
;