import React, { useState } from "react"
import { motion } from "framer-motion"
import { ;
  Check,;
  Star, ;
  TrendingUp, ;
  Zap, ;
  Shield, ;
  Brain, ;
  Cpu, ;
  Database, ;
  Network, ;
  Rocket, ;
  Users, ;
  BarChart3, ;
  Code, ;
  Server, ;
  Chip, ;
  Globe, ;
  Lock, ;
  ShieldCheck,;
  Phone,;
  Mail,;
  Globe as GlobeIcon,;
  Award,;
  Clock,;
  DollarSign,;
  Target,;
  Handshake,;
  Lightbulb,;
  ArrowRight;
} from "lucide-react"
import { ENHANCED_MICRO_SAAS_SERVICES_2025 } from "../data/enhancedMicroSaasServices2025"
import { SEO } from "../components/SEO"
const EnhancedPricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [sortBy, setSortBy] = useState('price'),;

  const allServices = ENHANCED_MICRO_SAAS_SERVICES_2025;
  ;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' };
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🤖' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️' };
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥' };
    { id: 'Blockchain', name: 'Blockchain', icon: '🔗' };
    { id: 'IoT & Smart Cities', name: 'IoT & Smart Cities', icon: '🌐' };
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' };
    { id: 'Metaverse', name: 'Metaverse', icon: '🌍' };
  ];
  const filteredServices = selectedCategory === 'all' ;
    ? allServices ;
    : allServices.filter(service => service.category === selectedCategory),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price':;
        return a.price - b.price,;
      case 'roi':;
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', '')),;
      case 'innovation':;
        return b.innovationLevel.localeCompare(a.innovationLevel),;
      default: return 0;
    };
  });
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Analytics': return <[^>]*/>
      case 'AI & Legal Tech': return <Shield className="w-6 h-6" />,;
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />,;
      case 'AI & Healthcare': return <Users className="w-6 h-6" />,;
      case 'Blockchain': return <Database className="w-6 h-6" />,;
      case 'IoT & Smart Cities': return <Network className="w-6 h-6" />,;
      case 'Cybersecurity': return <ShieldCheck className="w-6 h-6" />,;
      case 'Metaverse': return <Globe className="w-6 h-6" />,;
      default: return <[^>]*/>
    };
  };
  const getInnovationBadge = (level: string) => {;
    const colors = {;
      'Advanced': 'bg-blue-500Cutting-edge': 'bg-purple-500Revolutionary': 'bg-red-500'
    };
    return (
      <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${colors[level as keyof typeof colors] || 'bg-gray-500'}`}>
        {level};
      </[^>]*>
    ),;
  },;

  const getROIColor = (roi: string) => {;
    const roiValue = parseFloat(roi.replace('%', ''));
    if (roiValue >= 500) return 'text-red-400',;
    if (roiValue >= 300) return 'text-orange-400',;
    if (roiValue >= 200) return 'text-yellow-400',;
    return 'text-green-400',;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Micro SAAS Services Pricing - Zion Tech Group"
        description="Comprehensive pricing for our innovative micro SAAS services. Discover competitive pricing for AI, Quantum Computing, Blockchain, IoT, and more with exceptional ROI."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.h1 ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              Transparent Pricing for;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">;
                Innovative Solutions;
              </[^>]*>
            </[^>]*>
            <motion.p ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Our micro SAAS services are priced competitively to deliver exceptional value and ROI. ;
              Each service includes comprehensive features, support, and continuous updates.;
            </[^>]*>
            ;
            {/* Contact Information */};
            <motion.div ;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.4 }};
              className="[^"]*"
            >;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">;
                <div className="flex flex-col items-center">;
                  <[^>]*/>
                  <p className="text-sm text-gray-300">Phone</[^>]*>
                  <p className="text-white font-semibold">+1 302 464 0950</[^>]*>
                </[^>]*>
                <div className="flex flex-col items-center">;
                  <[^>]*/>
                  <p className="text-sm text-gray-300">Email</[^>]*>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</[^>]*>
                </[^>]*>
                <div className="flex flex-col items-center">;
                  <[^>]*/>
                  <p className="text-sm text-gray-300">Website</[^>]*>
                  <p className="text-white font-semibold">ziontechgroup.com</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        {/* Filters */};
        <div className="mb-8">;
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">;
            <div className="flex flex-wrap gap-3">;
              {categories.map((category) => (;
                <button;
                  key={category.id};
                  onClick={() => setSelectedCategory(category.id)};
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${;
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`};
                >;
                  <span className="mr-2">{category.icon}</[^>]*>
                  {category.name};
                </[^>]*>
              ))};
            </[^>]*>
            ;
            <select;
              value={sortBy};
              onChange={(e) => setSortBy(e.target.value)};
              className="[^"]*"
            >;
              <option value="price">Sort by Price</[^>]*>
              <option value="roi">Sort by ROI</[^>]*>
              <option value="innovation">Sort by Innovation</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Services Grid */};
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">;
          {sortedServices.map((service, index) => (;
            <motion.div
              key={service.id};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: index * 0.1 }};
              className="[^"]*"
            >;
              {/* Header */};
              <div className="text-center mb-6">;
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">;
                  {getCategoryIcon(service.category)};
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</[^>]*>
                <div className="flex items-center justify-center gap-2 mb-3">;
                  {getInnovationBadge(service.innovationLevel)};
                </[^>]*>
                <div className="text-3xl font-bold text-zion-cyan mb-1">;
                  ${service.price.toLocaleString()};
                  <span className="text-lg text-gray-400">/month</[^>]*>
                </[^>]*>
                <p className="text-sm text-gray-400">{service.pricingModel} billing</[^>]*>
              </[^>]*>

              {/* Description */};
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</[^>]*>

              {/* Key Metrics */};
              <div className="space-y-3 mb-6">;
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-400">ROI:</[^>]*>
                  <span className={`text-sm font-semibold ${getROIColor(service.roi)}`}>;
                    {service.roi} return;
                  </[^>]*>
                </[^>]*>
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-400">Market Price:</[^>]*>
                  <span className="text-sm text-gray-300">{service.marketPrice}</[^>]*>
                </[^>]*>
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-400">Delivery:</[^>]*>
                  <span className="text-sm text-gray-300">{service.estimatedDelivery}</[^>]*>
                </[^>]*>
                <div className="flex justify-between items-center">;
                  <span className="text-sm text-gray-400">Support:</[^>]*>
                  <span className="text-sm text-gray-300 capitalize">{service.supportLevel}</[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Key Benefits */};
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Benefits:</[^>]*>
                <ul className="space-y-2">;
                  {service.benefits.slice(0, 4).map((benefit, idx) => (;
                    <li key={idx} className="text-sm text-gray-300 flex items-start">;
                      <[^>]*/>
                      {benefit};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Features */};
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-zion-cyan mb-3">Top Features:</[^>]*>
                <div className="flex flex-wrap gap-2">;
                  {service.features.slice(0, 6).map((feature, idx) => (;
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">;
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* CTA */};
              <div className="text-center">;
                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, features, and implementation.`};
                  className="[^"]*"
                >;
                  Get Started;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Call to Action */};
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.6 }};
          className="[^"]*"
        >;
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Need Custom Pricing?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">;
              We offer flexible pricing options for enterprise customers and custom solutions. ;
              Contact us to discuss your specific requirements and get a personalized quote.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call for Custom Quote;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com?subject=Custom Pricing Inquiry&body=Hi, I'm interested in custom pricing for your services. Please provide more details about enterprise options and custom solutions."
                className="[^"]*"
              >;
                <[^>]*/>
                Request Custom Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default EnhancedPricing;