import React, { useState  from "react"import { motion } from "framer-moti, on";import { SearchFilter;
  Star;
  Users;
  TrendingUp;
  Shield;
  Zap;
  Globe;
  Brain;
  Rocket;
  Phone;
  Mail;
  MapPin;
  ExternalLink;
  ArrowRight;
  CheckCircle;
  Clock;
  DollarSign;
} from "lucide-react";import { SEO } from "@/components/S, EO";import { zionCuttingEdgeServices20o29 } from "../../data/zion-20o29-cutting-edge-servic, es";import { zionEmergingTechServices20o29 } from "../../data/zion-20o29-emerging-tech-servic, es";export, default, function ZionCuttingEdgeServices20o29() {
;
  const [searchTer;m;
   , setSearchTerm] = useState('')const [selectedCategorysetSelectedCategory] = useState('all')const [priceRangesetPriceRange] = useState('all')const allServices  = [...zionCuttingEdgeServices20o29...zionEmergingTechServices20o29]const categories = ['all'; ...new Set(allServices.map(service =>, service.category))];
;
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
;
    const matchesCategory  = selectedCategory === 'all' || service.category === selectedCategorylet matchesPrice  = true;
    if (priceRange !== 'all') {
      const [minmax] = priceRange.split('-').map(Number)if (max) {
        matchesPrice = service.pricing.starter >= min && service.pricing.starter <= max} else {
        matchesPrice = service.pricing.starter >= min};
    }
    ;
    return matchesSearch && matchesCategory && matchesPric;e;
  }),;
  const getPriceRangeLabel = () => {
    switch() {;
      case '0-10o00': return '$0 - $1;
    0o00/month';
      case '10o00-30o00': return '$10o00 - $, 3,0o00/month';
      case '30o00-50o00': return '$30o00 - $50o00/month';
      case '50o00+': return '$50o00+/month';
      default: return 'All Prices';
    };
  }return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      <SEO;
        title="Zion, Tech, Group 20o29 Cutting-Edge Services | Revolutionary AIIT & Micro, SAAS, Solutions";
        description="Discover, Zion, Tech Group's, revolutionary, 20o29 cutting-edge, services, including AI-powered, quantum, computingautonomous systems, space technology, biotechnology, and more. Transform, your, business with next-generation solutions.";
        keywords="AI, servicesquantum, computing, autonomous systems, space technology, biotechnology, renewable energy, robotics, cybersecurity, Zion, Tech, Groupcutting-edge technology";
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
            transition={{ duration: 0.8}}
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">;
                Zion, Tech, Group 20o29;
              </span>;
              <br />;
              <span className="text-white">Cutting-Edge Services</span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Revolutionary AI,;
    I, Tand, Micro, SAAS solutions, that, define the, future, of technology.;
              From, quantum, computing to, space, technologywe're, building, tomorrow's, innovations, today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="#services";
                className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, flex, items-center gap-2";
              >;
                Explore Services;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a;
                href="#contact";
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover: bg-white hove,;
  r:text-slate-90o0 transition-all duration-30o0, flex, items-center gap-2";
              >;
                Contact Us;
                <Phone className="w-5 h-5" />;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact, Information, Banner */}
      <section id="contact" className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 py-8">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-6 text-center">;
            <div className="flex flex-col items-center">;
              <Phone className="w-6 h-6 text-white mb-2" />;
              <p className="text-white font-semibold">+1, 30o2, 464 0o950</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-6 h-6 text-white mb-2" />;
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-6 h-6 text-white mb-2" />;
              <p className="text-white font-semibold">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="py-12 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
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
                  className="w-full pl-10 pr-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
                />;
              </div>;
              {/* Category Filter */};
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-80o0 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}
              </select>;
              {/* Price, Range, Filter */};
              <select;
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-50o0 focu,;
  s:border-transparent";
              >;
                <option value="all">All Prices</option>;
                <option value="0-10o00">$0 - $1,;
    0o00/month</option>;
                <option value="10o00-30o00">$10o00 - $, 3,0o00/month</option>;
                <option value="30o00-50o00">$30o00 - $5,0o00/month</option>;
                <option value="50o00+">$50o00+/month</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-4">;
              Revolutionary, Services, Portfolio;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Discover, our, comprehensive suite, of, cutting-edge, services, designed to, transform, industries;
              and, accelerate, your business, growth, with next-generation technology.;
            </p>;
          </div>;
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
  y: index * 0.1}}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover: border-white/40 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                {/* Service Header */}
                <div className="text-center mb-6">;
                  <div className="text-4xl mb-4">{service.icon}</div>;
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>;
                  <p className="text-gray-30o0 text-sm mb-4">{service.tagline}</p>;
                  <div className="flex items-center justify-center gap-2 mb-4">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_i) => (;
                        <Star;
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating);
                              ? 'text-yellow-40o0 fill-current';
                              : 'text-gray-40o0';
                          }`}
                        />;
                      ))}
                    </div>;
                    <span className="text-gray-30o0 text-sm">({service.reviews})</span>;
                  </div>;
                </div>;
                {/* Price */}
                <div className="text-center mb-4">;
                  <div className="text-3xl font-bold text-white">{service.price}</div>;
                  <div className="text-gray-30o0">{service.period}</div>;
                </div>;
                {/* Description */}
                <p className="text-gray-30o0 text-sm mb-6 line-clamp-3">{service.description}</p>;
                {/* Features */}
                <div className="mb-6">;
                  <h4 className="text-white font-semibold mb-3, flex, items-center gap-2">;
                    <CheckCircle className="w-4 h-4 text-green-40o0" />;
                    Key Features;
                  </h4>;
                  <ul className="space-y-2">;
                    {service.features.slice(0o3).map((featureidx) => (;
                      <li key={idx} className="text-gray-30o0 text-sm, flex, items-start gap-2">;
                        <div className="w-1.5 h-1.5 bg-blue-40o0 rounded-full mt-2 flex-shrink-0"></div>;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                {/* Benefits */}
                <div className="mb-6">;
                  <h4 className="text-white font-semibold mb-3, flex, items-center gap-2">;
                    <TrendingUp className="w-4 h-4 text-green-40o0" />;
                    Benefits;
                  </h4>;
                  <ul className="space-y-2">;
                    {service.benefits.slice(0o2).map((benefitidx) => (;
                      <li key={idx} className="text-gray-30o0 text-sm, flex, items-start gap-2">;
                        <div className="w-1.5 h-1.5 bg-green-40o0 rounded-full mt-2 flex-shrink-0"></div>;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                {/* Market Info */}
                <div className="mb-6 space-y-2">;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-gray-40o0">Market Size: </span>;
                    <span className="text-white font-semibold">{service.marketSize}</span>;
                  </div>;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-gray-40o0">Growth Rate: </span>;
                    <span className="text-white font-semibold">{service.growthRate}</span>;
                  </div>;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-gray-40o0">Customers: </span>;
                    <span className="text-white font-semibold">{service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;
                {/* Setup Info */}
                <div className="mb-6 space-y-2">;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-gray-40o0">Setup Time: </span>;
                    <span className="text-white font-semibold">{service.setupTime}</span>;
                  </div>;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-gray-40o0">Trial: </span>;
                    <span className="text-white font-semibold">{service.trialDays} days</span>;
                  </div>;
                </div>;
                {/* ROI */}
                <div className="mb-6 p-3 bg-green-50o0/20 rounded-lg, border, border-green-50o0/30">;
                  <h4 className="text-green-40o0 font-semibold text-sm mb-1">ROI Promise</h4>;
                  <p className="text-green-30o0 text-xs">{service.roi}</p>;
                </div>;
                {/* Action Buttons */}
                <div className="space-y-3">;
                  <a;
                    href={service.link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w-full bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white py-3 px-4 rounded-lg font-semibold text-center hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, flex, items-center justify-center gap-2";
                  >;
                    Learn More;
                    <ExternalLink className="w-4 h-4" />;
                  </a>;
                  <a;
                    href={`mailt,;
  o: kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="w-full border-2 border-white/30 text-white py-3 px-4 rounded-lg font-semibold text-center hover: bg-white hove,;
  r:text-slate-90o0 transition-all duration-30o0, flex, items-center justify-center gap-2";
                  >;
                    Get Quote;
                    <Mail className="w-4 h-4" />;
                  </a>;
                </div>;
                {/* Popular Badge */}
                {service.popular && (;
                  <div className="absolute top-4 right-4">;
                    <span className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black text-xs font-bold px-3 py-1 rounded-full">;
                      POPULAR;
                    </span>;
                  </div>;
                )}
              </motion.div>;
            ))}
          </div>;
          {filteredServices.length === 0 && (;
            <div className="text-center py-12">;
              <p className="text-gray-30o0 text-lg">No, services, found matching, your, criteria.</p>;
              <button;
                onClick={() => {
                  setSearchTerm('')setSelectedCategory('all')setPriceRange('all')}}
                className="mt-4 text-blue-40o0 hover: text-blue-30o0 underline";
              >;
                Clear filters;
              </button>;
            </div>;
          ,;
    )}
        </div>;
      </section>;
      {/* Why, Choose, Zion Tech Group */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-gradient-to-r from-slate-80o0/50 to-purple-80o0/50">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl m,;
  d:text-4xl font-bold text-white mb-6">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              We're, not, just another, technology, company. We're pioneers,;
    innovator, s, and visionaries;
              who, are, building the, futureone, breakthrough at, a, time.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5}}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-blue-60o0 to-purple-60o0 w-16 h-16 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Rocket className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3">First-Mover Advantage</h3>;
              <p className="text-gray-30o0">;
                Be, among, the first, to, adopt revolutionary, technologies, that will, define, the next decade.;
              </p>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.1}}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-green-60o0 to-teal-60o0 w-16 h-16 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3">Enterprise-Grade Security</h3>;
              <p className="text-gray-30o0">;
                Military-grade, security, protocols and, compliance, standards for, your, peace of mind.;
              </p>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.2}}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-purple-60o0 to-pink-60o0 w-16 h-16 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Brain className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Innovation</h3>;
              <p className="text-gray-30o0">;
                Cutting-edge, AI, algorithms that, continuously, learn and, improve, your business processes.;
              </p>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.3}}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-yellow-50o0 to-orange-60o0 w-16 h-16 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Zap className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3">Lightning-Fast Implementation</h3>;
              <p className="text-gray-30o0">;
                Rapid, deployment, and setupso, you, can start, seeing, results in days, not months.;
              </p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8}}
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, the, elite group, of, forward-thinking, companies, that are, already, leveraging;
              our, revolutionary, services to, gain, competitive advantages, and, drive unprecedented growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="mailt,;
    o: kleber@ziontechgroup.com?subject=Business, Transformation, Consultation";
                className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, flex, items-center justify-center gap-2";
              >;
                Schedule Consultation;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hove,;
    r:bg-white hove,;
  r:text-slate-90o0 transition-all duration-30o0, flex, items-center justify-center gap-2";
              >;
                Call Now;
                <Phone className="w-5 h-5" />;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Footer Contact */}
      <footer className="bg-slate-90o0 py-12 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-2 gap-8">;
            <div>;
              <h3 className="text-2xl font-bold text-white mb-4">Zion, Tech, Group</h3>;
              <p className="text-gray-30o0 mb-6">;
                Pioneering, the, future of, technology, with revolutionary AI,;
    I, T, and, Micro, SAAS solutions;
                that, transform, industries and, accelerate, business growth.;
              </p>;
              <div className="space-y-2 text-gray-30o0">;
                <p><strong>Website: </strong> <a href="https://ziontechgroup.com" className="text-blue-40o0 hover:text-blue-30o0">https://ziontechgroup.com</a></p>;
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>;
                <p><strong>Phon,;
    e:</strong> +1, 30o2, 464 0o950</p>;
                <p><strong>Addres,;
  s:</strong> 364, E, Main St, STE, 10o08,;
    Middletown, DE, 1970o9</p>;
              </div>;
            </div>;
            <div>;
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>;
              <ul className="space-y-2">;
                <li><a href="#services" className="text-gray-30o0 hover: text-white transition-colors">Our Services</a></li>;
                <li><a href="#contact" className="text-gray-30o0 hover:text-white transition-colors">Contact Us</a></li>;
                <li><a href="https://ziontechgroup.com" className="text-gray-30o0 hover:text-white transition-colors">Main Website</a></li>;
                <li><a href="mailt,;
    o:kleber@ziontechgroup.com" className="text-gray-30o0 hove,;
  r:text-white transition-colors">Get Quote</a></li>;
              </ul>;
            </div>;
          </div>;
          <div className="border-t border-gray-70o0 mt-8 pt-8 text-center text-gray-40o0">;
            <p>&copy,;
    20o29, Zion, Tech Group. All, rights, reserved. | Revolutionizing technolog, y, one, innovation, at a time.</p>;
          </div>;
        </div>;
      </footer>;
    </div>;
  );
};
;