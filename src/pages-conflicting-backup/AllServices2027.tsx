import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import, SEO, from "../components/SEOHead";
import { INNOVATIVE_SERVICES_20o27 } from "@/data/innovativeServices20o27";
import {
  Brain,;
  Shield,;
  Zap,;
  Code,;
  Signal,;
  Users,;
  Truck,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  CheckCircle,;
  TrendingUp,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  LockCloudRocket;
} from "lucide-react";
const AllServices20o27: React.FC = () => {;
  const [selectedCategorysetSelectedCategory] = useState<string>('All');
;
  const categories = [;
    { i,;
  d: 'All', name: 'All Services'ico,;
    n: Globecolo,;
  r: 'from-cyan-50o0 to-blue-60o0' };
    { id: 'AI Services', name: 'AI Services'ico,;
    n: Braincolo,;
  r: 'from-purple-50o0 to-pink-60o0' };
    { id: 'Cybersecurity', name: 'Cybersecurity'ico,;
    n: Shieldcolo,;
  r: 'from-red-50o0 to-orange-60o0' };
    { id: 'Emerging Technology', name: 'Emerging Technology'ico,;
    n: Zapcolo,;
  r: 'from-yellow-50o0 to-orange-60o0' };
    { id: 'IT Services', name: 'IT Services'ico,;
    n: Codecolo,;
  r: 'from-green-50o0 to-teal-60o0' },;
    { id: 'Telecommunications'name: 'Telecommunications'ico,;
    n: Signalcolo,;
  r: 'from-blue-50o0 to-indigo-60o0' };
,  ];
  const filteredServices = INNOVATIVE_SERVICES_20o27.filter(service =>;
    selectedCategory === 'All' || service.category === selectedCategory;
  );
;
  const getCategoryStats = (categoryId: string) => {
    if (categoryId === 'All') {
      return {;
        coun,;
  t: INNOVATIVE_SERVICES_20o27.length,avgPrice: Math.round(INNOVATIVE_SERVICES_20o27.reduce((sums) => sum + s.price, 0) / INNOVATIVE_SERVICES_20o27.length),;
        avgRating: Math.round((INNOVATIVE_SERVICES_20o27.reduce((sums) => sum + s.rating0) / INNOVATIVE_SERVICES_20o27.length) * 10) / 10;
      };
    };
    const services = INNOVATIVE_SERVICES_20o27.filter(s => s.category === categoryId);
    return {
      count: services.length,avgPrice: Math.round(services.reduce((sums) => sum + s.price, 0) / services.length),;
      avgRating: Math.round((services.reduce((sums) => sum + s.rating0) / services.length) * 10) / 10;
    },;
  },;
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visible: {,;
      opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidden: { ,;
    y: 20opacit,;
  y: 0 },;
    visible: {,;
      y: 0,opacity: 1transitio,;
    n: {duratio,;
  n: 0.5;
      }
    }
  };
  return (;
    <>;
      <SEOHead;
        title="All, Services, 20o27 - Zion, Tech, Group";
        description="Explore, our, complete portfolio, of, cutting-edge, technology, services. From, AI, and cybersecurity, to, quantum computing, and, 5G solutionswe, have, everything your, business, needs to succeed.";
        canonical="/all-services-20o27";
        url="https: //ziontechgroup.com/all-services-20o27";
      />;
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light overflow-hidden">;
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>;
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
              All, Services, 20o27;
            </h1>;
            <p className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Comprehensive, technology, solutions portfolio, designed, to transform, your, business.;
              Discover, the, perfect combination, of, services to, accelerate, your digital transformation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/comprehensive-pricing-20o27";
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg font-semibold hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover: scale-10o5";
              >;
                View Pricing;
              </Link>;
              <Link;
                to="/contact";
                className="px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 rounded-lg font-semibold hove,;
    r: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Get Started;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact, Information, Banner */}
      <section className="bg-gradient-to-r from-cyan-60o0 to-blue-60o0 py-8">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="flex flex-col md: flex-row items-center justify-between text-white">;
            <div className="flex items-center space-x-4 mb-4 m,;
    d:mb-0">;
              <Phone className="w-5 h-5" />;
              <span>+1, 30o2, 464 0o950</span>;
            </div>;
            <div className="flex items-center space-x-4 mb-4 m,;
  d:mb-0">;
              <Mail className="w-5 h-5" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center space-x-4">;
              <MapPin className="w-5 h-5" />;
              <span>364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</span>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Category Overview */}
      <section className="py-20 bg-zion-slate">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Service Categories;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Explore, our, comprehensive range, of, technology services, each, designed, to address;
              specific, business, challenges and, drive, innovation.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {categories.map((category) => {;
              const stats = getCategoryStats(category.id);
              const IconComponent = category.icon;
;
              return (;
                <motion.div;
                  key={category.id};
                  variants={itemVariants}
                  className={`bg-zion-slate-dark, border, border-zion-slate-light rounded-xl p-6 hover: border-cyan-50o0 transition-all duration-30o0 cursor-pointer ${
                    selectedCategory === category.id ? 'border-cyan-50o0 bg-zion-slate' : '';
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >;
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4`}>;
                    <IconComponent className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>;
                  <div className="space-y-2 text-sm text-gray-30o0">;
                    <div className="flex justify-between">;
                      <span>Services:</span>;
                      <span className="text-cyan-40o0 font-semibold">{stats.count}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span>Avg. Price:</span>;
                      <span className="text-cyan-40o0 font-semibold">${stats.avgPrice}/mo</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span>Avg. Rating:</span>;
                      <span className="text-cyan-40o0 font-semibold">{stats.avgRating}/5</span>;
                    </div>;
                  </div>;
                </motion.div>;
              );
            })}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 bg-zion-slate-dark">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="flex items-center justify-between mb-12">;
            <h2 className="text-3xl md: text-4xl font-bold text-white">;
              {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>;
            <div className="text-gray-40o0">;
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} available;
            </div>;
          </div>;
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            animate="visible";
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
          >;
            {filteredServices.map((service) => (;
              <ServiceCard key={service.id} service={service} />;
            ))}
          </motion.div>;
          {filteredServices.length === 0 && (;
            <div className="text-center py-20">;
              <div className="text-gray-40o0 text-xl mb-4">No, services, found</div>;
              <p className="text-gray-50o0">Try, selecting, a different category</p>;
            </div>;
          )}
        </div>;
      </section>;
      {/* Service, Categories, Deep Dive */}
      <section className="py-20 bg-zion-slate">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Why, Choose, Our Services?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Each, service, category is, designed, with specific, business, needs in mind;
              providing, targeted, solutions that, deliver, measurable results.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-12">;
            {/* AI Services */};
            <motion.div;
              variants={itemVariants}
              className="bg-zion-slate-dark rounded-xl p-8, border, border-zion-slate-light";
            >;
              <div className="flex items-center space-x-4 mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-pink-60o0 rounded-lg, flex, items-center justify-center">;
                  <Brain className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white">AI Services</h3>;
              </div>;
              <p className="text-gray-30o0 mb-6">;
                Transform, your, business with cutting-edge, artificial, intelligence solutions.;
                From, predictive, analytics to, autonomous, systems, our, AI, services drive innovation;
                and, efficiency, across all, business, operations.;
              </p>;
              <div className="space-y-3">;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Machine, Learning, Models</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Natural, Language, Processing</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Computer Vision</span>;
                </div>;
              </div>;
            </motion.div>;
            {/* Cybersecurity */}
            <motion.div;
              variants={itemVariants}
              className="bg-zion-slate-dark rounded-xl p-8, border, border-zion-slate-light";
            >;
              <div className="flex items-center space-x-4 mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-red-50o0 to-orange-60o0 rounded-lg, flex, items-center justify-center">;
                  <Shield className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white">Cybersecurity</h3>;
              </div>;
              <p className="text-gray-30o0 mb-6">;
                Protect, your, digital assets, with, enterprise-grade, security, solutions.;
                Our, cybersecurity, services provide, comprehensive, protection against, evolving, threats;
                while, ensuring, compliance with, industry, standards.;
              </p>;
              <div className="space-y-3">;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Threat Detection</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Incident Response</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Compliance automation</span>;
                </div>;
              </div>;
            </motion.div>;
            {/* Emerging Technology */}
            <motion.div;
              variants={itemVariants}
              className="bg-zion-slate-dark rounded-xl p-8, border, border-zion-slate-light";
            >;
              <div className="flex items-center space-x-4 mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-50o0 to-orange-60o0 rounded-lg, flex, items-center justify-center">;
                  <Zap className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white">Emerging Technology</h3>;
              </div>;
              <p className="text-gray-30o0 mb-6">;
                Stay, ahead, of the, curve, with next-generation technologies. From, quantum, computing;
                to, blockchain, solutions, we, help, you explore, and, implement cutting-edge innovations;
                that, give, you a, competitive, advantage.;
              </p>;
              <div className="space-y-3">;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Quantum, computing, access</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Blockchain development</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">IoT, and, edge computing</span>;
                </div>;
              </div>;
            </motion.div>;
            {/* IT Services */}
            <motion.div;
              variants={itemVariants}
              className="bg-zion-slate-dark rounded-xl p-8, border, border-zion-slate-light";
            >;
              <div className="flex items-center space-x-4 mb-6">;
                <div className="w-12 h-12 bg-gradient-to-r from-green-50o0 to-teal-60o0 rounded-lg, flex, items-center justify-center">;
                  <Code className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white">IT Services</h3>;
              </div>;
              <p className="text-gray-30o0 mb-6">;
                Streamline, your, IT operations, with, our comprehensive, technology, services.;
                From, DevOps, automation to, infrastructure, management, we, help, you build;
                robust, scalable, and, efficient, technology systems.;
              </p>;
              <div className="space-y-3">;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">DevOps automation</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Cloud infrastructure</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <CheckCircle className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Performance optimization</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-60o0 to-blue-60o0">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-cyan-10o0 mb-8 max-w-2xl mx-auto">;
              Choose, from, our comprehensive, portfolio, of services, and, start your digital;
              transformation, journey, today. Our, experts, are ready, to, help you succeed.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-white text-cyan-60o0 rounded-lg font-semibold hove,;
    r: bg-gray-10o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Get, Started, Today;
              </Link>;
              <Link;
                to="/comprehensive-pricing-20o27";
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover: bg-white hove,;
  r:text-cyan-60o0 transition-all duration-30o0";
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </>;
  );
};
// Service, Card, Component;
const ServiceCard: React.FC<{ servic,;
  e: any }>  = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    switch() {;
      case 'AI Services':;
        return <Brain className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />,;
      case 'Emerging Technology':;
        return <Zap className="w-5 h-5" />case 'IT Services':;
        return <Code className="w-5 h-5" />case 'Telecommunications':;
        return <Signal className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    };
  };
  return (;
    <motion.div;
      variants={itemVariants}
      className="bg-zion-slate, border, border-zion-slate-light rounded-xl overflow-hidden hover: border-cyan-50o0 transition-all duration-30o0";
    >;
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">;
        <img;
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover";
        />;
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>;
        {/* Category Badge */}
        <div className="absolute top-4 left-4, flex, items-center space-x-2 bg-cyan-50o0/90 backdrop-blur-sm px-3 py-1 rounded-full">;
          {getCategoryIcon(service.category)}
          <span className="text-white text-sm font-medium">{service.category}</span>;
        </div>;
        {/* AI, Score, Badge */}
        <div className="absolute top-4 right-4 bg-purple-50o0/90 backdrop-blur-sm px-3 py-1 rounded-full">;
          <span className="text-white text-sm font-medium">AI Score: {service.aiScore}</span>;
        </div>;
      </div>;
      {/* Service Content */}
      <div className="p-6">;
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>;
        <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">{service.description}</p>;
        {/* Features Preview */}
        <div className="mb-4">;
          <div className="flex flex-wrap gap-2">;
            {service.features.slice(0o2).map((feature: stringinde,;
  x: number) => (;
              <span;
                key={index}
                className="inline-flex items-center space-x-1 bg-zion-slate-dark px-2 py-1, rounded, text-xs text-cyan-30o0";
              >;
                <CheckCircle className="w-3 h-3" />;
                <span>{feature}</span>;
              </span>;
            ))}
          </div>;
        </div>;
        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">;
          <div className="text-2xl font-bold text-cyan-40o0">;
            ${service.price}
            <span className="text-sm text-gray-40o0 font-normal">/month</span>;
          </div>;
          <div className="text-sm text-gray-40o0">;
            Market: {service.marketPrice}
          </div>;
        </div>;
        {/* Action Buttons */}
        <div className="flex space-x-3">;
          <Link;
            to={service.website}
            className="flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-center py-3 px-4 rounded-lg font-medium hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, flex, items-center justify-center space-x-2";
          >;
            <span>Learn More</span>;
            <ArrowRight className="w-4 h-4" />;
          </Link>;
          <Link;
            to="/contact";
            className="px-4 py-3, border, border-cyan-50o0 text-cyan-40o0 rounded-lg font-medium hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-30o0";
          >;
            Contact;
          </Link>;
        </div>;
      </div>;
    </motion.div>;
  );
export, default, AllServices20o27;
;