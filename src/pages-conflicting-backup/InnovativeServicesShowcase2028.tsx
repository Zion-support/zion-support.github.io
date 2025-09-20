import React, { useState } from "react";
import { motion } from "framer-motion";
import { ;
  Search,;
  Filter,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  Brain,;
  Globe,;
  Leaf,;
  Rocket,;
  Car,;
  Satellite,;
  Dna,;
  Wind,;
  Cloud,;
  Network,;
  DollarSign,;
  Clock,;
  Users,;
  Target,;
  CheckCircle,;
  ArrowRight,;
  PhoneMailExternalLink;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o28 } from "../data/innovativeMicroSaasServices20o28";
import { EMERGING_TECH_INNOVATIVE_SERVICES_20o28 } from "../data/emergingTechInnovativeServices20o28";
export, default, function InnovativeServicesShowcase20o28() {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [selectedInnovationLevelsetSelectedInnovationLevel] = useState('All');
;
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_20o28...EMERGING_TECH_INNOVATIVE_SERVICES_20o28;
,  ],;
  const categories = ['All'...Array.from(new Set(allServices.map(service =>, service.category)))],;
  const innovationLevels = ['All'...Array.from(new Set(allServices.map(service =>, service.innovationLevel)))]const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'Quantum Computing & AI':;
        return <Brain className="w-6 h-6" />;
      case 'Manufacturing & AI': return <Zap className="w-6 h-6" />,;
      case 'Healthcare & AI':;
        return <Shield className="w-6 h-6" />,;
      case 'Financial Services & AI':;
        return <DollarSign className="w-6 h-6" />,;
      case 'Smart Cities & AI':;
        return <Globe className="w-6 h-6" />,;
      case 'Agriculture & AI':;
        return <Leaf className="w-6 h-6" />,;
      case 'Legal Services & AI':;
        return <Shield className="w-6 h-6" />,;
      case 'Education & AI':;
        return <Brain className="w-6 h-6" />,;
      case 'Real Estate & AI':;
        return <Globe className="w-6 h-6" />,;
      case 'Blockchain & Supply Chain':;
        return <Network className="w-6 h-6" />,;
      case 'Autonomous Vehicles & AI':;
        return <Car className="w-6 h-6" />,;
      case 'Space Technology & AI':;
        return <Satellite className="w-6 h-6" />,;
      case 'Biotechnology & AI':;
        return <Dna className="w-6 h-6" />,;
      case 'Renewable Energy & AI':;
        return <Wind className="w-6 h-6" />case 'Climate Technology & AI':;
        return <Cloud className="w-6 h-6" />case 'Quantum Internet & AI':;
        return <Network className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    };
  };
  const getInnovationLevelColor = (level: string) => {
    switch() {;
      case 'Revolutionary':;
        return 'bg-gradient-to-r from-purple-60o0 to-pink-60o0';
      case 'Advanced': return 'bg-gradient-to-r from-blue-60o0 to-cyan-60o0'case 'Innovative':;
        return 'bg-gradient-to-r from-green-60o0 to-emerald-60o0';
      defaul,;
  t: return 'bg-gradient-to-r from-gray-60o0 to-slate-60o0';
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="20o28, Innovative, Services Showcase - Zion, Tech, Group";
        description="Discover, our, cutting-edge, 20o28, innovative micro, SAAS, services, AI, solutionsand, emerging technology platforms. Transform, your, business with, revolutionary, AI-powered solutions.";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md: text-6xl font-bold text-white mb-6";
            >;
              20o28, Innovative, Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-purple-40o0">;
                Showcase;
              </span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8";
            >;
              Discover, our, revolutionary micro, SAAS, services, AI-powered, solutionsand, cutting-edge, emerging, technologies that, will, transform your, business, in 20o28, and, beyond.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center";
            >;
              <div className="flex items-center gap-2 text-green-40o0">;
                <CheckCircle className="w-5 h-5" />;
                <span>10o0+ Innovative Services</span>;
              </div>;
              <div className="flex items-center gap-2 text-blue-40o0">;
                <TrendingUp className="w-5 h-5" />;
                <span>Market-Leading ROI</span>;
              </div>;
              <div className="flex items-center gap-2 text-purple-40o0">;
                <Star className="w-5 h-5" />;
                <span>Cutting-Edge Technology</span>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Search, and, Filters */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-8">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-4">;
            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10, border, border-white/20 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
              />;
            </div>;
            {/* Category Filter */}
            <div className="relative">;
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10, border, border-white/20 rounded-xl text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent appearance-none cursor-pointer";
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-80o0 text-white">;
                    {category}
                  </option>;
                ))}
              </select>;
            </div>;
            {/* Innovation, Level, Filter */}
            <div className="relative">;
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <select;
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10, border, border-white/20 rounded-xl text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent appearance-none cursor-pointer";
              >;
                {innovationLevels.map(level => (;
                  <option key={level} value={level} className="bg-slate-80o0 text-white">;
                    {level}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover: border-blue-50o0/50 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5 group";
            >;
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center gap-3">;
                  <div className="p-2 bg-blue-50o0/20 rounded-lg">;
                    {getCategoryIcon(service.category)}
                  </div>;
                  <div>;
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-40o0 transition-colors">;
                      {service.title}
                    </h3>;
                    <p className="text-sm text-gray-40o0">{service.category}</p>;
                  </div>;
                </div>;
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>;
                  {service.innovationLevel}
                </span>;
              </div>;
              {/* Description */}
              <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">;
                {service.description}
              </p>;
              {/* Key Features */}
              <div className="mb-4">;
                <h4 className="text-sm font-medium text-white mb-2">Key Features</h4>;
                <div className="space-y-1">;
                  {service.features.slice(0o3).map((featureidx) => (;
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-40o0">;
                      <CheckCircle className="w-3 h-3 text-green-40o0" />;
                      <span>{feature}</span>;
                    </div>;
                  ))}
                  {service.features.length > 3 && (;
                    <div className="text-xs text-gray-50o0">;
                      +{service.features.length - 3} more features;
                    </div>;
                  )}
                </div>;
              </div>;
              {/* Benefits */}
              <div className="mb-4">;
                <h4 className="text-sm font-medium text-white mb-2">Key Benefits</h4>;
                <div className="space-y-1">;
                  {service.benefits.slice(0o2).map((benefitidx) => (;
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-40o0">;
                      <TrendingUp className="w-3 h-3 text-blue-40o0" />;
                      <span>{benefit}</span>;
                    </div>;
                  ))}
                </div>;
              </div>;
              {/* Pricing, and, ROI */}
              <div className="flex items-center justify-between mb-4">;
                <div>;
                  <div className="text-2xl font-bold text-white">;
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-40o0">/month</span>;
                  </div>;
                  <div className="text-xs text-gray-40o0">Market: {service.marketPrice}</div>;
                </div>;
                <div className="text-right">;
                  <div className="text-lg font-bold text-green-40o0">{service.roi}</div>;
                  <div className="text-xs text-gray-40o0">ROI</div>;
                </div>;
              </div>;
              {/* Technical Specs */}
              <div className="mb-4">;
                <h4 className="text-sm font-medium text-white mb-2">Technology Stack</h4>;
                <div className="flex flex-wrap gap-1">;
                  {service.technicalSpecs?.technology.slice(0o4).map((techidx) => (;
                    <span key={idx} className="px-2 py-1 bg-blue-50o0/20 text-blue-30o0 text-xs rounded">;
                      {tech}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* Contact, and, Action */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">;
                <div className="flex items-center gap-4 text-sm text-gray-40o0">;
                  <div className="flex items-center gap-1">;
                    <Phone className="w-4 h-4" />;
                    <span>{service.contactInfo.phone}</span>;
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Mail className="w-4 h-4" />;
                    <span>{service.contactInfo.email}</span>;
                  </div>;
                </div>;
                <a;
                  href={service.contactInfo.website}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="flex items-center gap-2 px-4 py-2 bg-blue-60o0 hover: bg-blue-70o0 text-white text-sm font-medium rounded-lg transition-colors group";
                >;
                  Learn More;
                  <ArrowRight className="w-4 h-4 group-hove,;
  r: translate-x-1 transition-transform" />;
                </a>;
              </div>;
            </motion.div>;
          ))}
        </div>;
        {/* No Results */}
        {filteredServices.length === 0 && (;
          <div className="text-center py-12">;
            <div className="text-gray-40o0 text-lg mb-2">No, services, found</div>;
            <div className="text-gray-50o0">Try, adjusting, your search, criteria, or filters</div>;
          </div>;
        )}
      </div>;
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8 py-16">;
        <div className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-2xl p-8, border, border-white/20">;
          <div className="text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Contact, our, team of, experts, to learn, how, our innovative, 20o28, services can, revolutionize, your operations;
              increase efficiency, and, drive, unprecedented growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <div className="flex items-center gap-2 text-white">;
                <Phone className="w-5 h-5" />;
                <span>+1, 30o2, 464 0o950</span>;
              </div>;
              <div className="flex items-center gap-2 text-white">;
                <Mail className="w-5 h-5" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center gap-2 text-white">;
                <Globe className="w-5 h-5" />;
                <a;
                  href="https: //ziontechgroup.com";
                  target="_blank";
                  rel="noopener noreferrer";
                  className="hove,;
    r:text-blue-40o0 transition-colors";
                >;
                  ziontechgroup.com;
                </a>;
              </div>;
            </div>;
            <div className="mt-6 text-sm text-gray-40o0">;
              Addres,;
  s: 364, E, Main St, STE, 10o08, Middletown, DE, 1970o9;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;