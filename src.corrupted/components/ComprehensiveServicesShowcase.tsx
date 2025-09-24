import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {;
  Brain,;
  Cpu,;
  Cloud,;
  Shield,;
  Rocket,;
  Zap,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  Users,;
  Target,;
  Award,;
  Globe,;
  Settings,;
  Database,;
  Network,;
  Lock,;
  Eye,;
  TrendingUp,;
  Clock,;
  DollarSign,;
  Phone,;
  Mail,;
  ExternalLink,;
  Search;
} from "lucide-react"
import { Link } from "react-router-dom"
import { EXPANDED_INNOVATIVE_SERVICES_2025 } from "../data/expandedInnovativeServices2025"
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025"
interface Service {;
  id: string,title: string,description: string,category: string,subcategory: string,price: number,currency: string,pricingModel: string,features: string[],benefits: string[],useCases: string[],targetAudience: string[],tags: string[],estimatedDelivery: string,supportLevel: string,marketPrice: string,roi: string,innovationLevel: string,contactInfo: {;
    phone: string,email: string,website: string;
  };
  technicalSpecs?: {;
    technology: string[],integrations: string[],apiEndpoints: number,uptime: string,security: string[]
  };
};
const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all'),;
  const [searchTerm, setSearchTerm] = useState<string>(''),;
  //[^;]*
  const allServices: Service[] = [;
    ...EXPANDED_INNOVATIVE_SERVICES_2025
    ...EMERGING_TECH_SERVICES_2025
  ],;
  //[^;]*
  const categories = useMemo(() => {;
    const cats = ['all', ...Array.from(new Set(allServices.map(service => service.category)))]
    return cats,;
  }, [allServices]),;
  //[^;]*
  const innovationLevels = useMemo(() => {;
    const levels = ['all', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))]
    return levels,;
  }, [allServices]),;
  //[^;]*
  const filteredServices = useMemo(() => {;
    return allServices.filter(service => {;
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
      return matchesCategory && matchesInnovationLevel && matchesSearch,;&& matchesInnovationLevel && matchesSearch,; matchesInnovationLevel && matchesSearch,
    }),;
  }, [allServices, selectedCategory, selectedInnovationLevel, searchTerm]),;
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Analytics':;
      case 'AI & Customer Experience':;
      case 'AI & Supply Chain':;
      case 'AI & Legal Tech':;
      case 'AI & Healthcare':;
      case 'AI & Financial Services':;
      case 'AI & Content Marketing':;
        return <[^>]*/>
      case 'Cybersecurity & AI':;
      case 'Cybersecurity & Quantum':;
        return <Shield className="h-6 w-6" />,;
      case 'Blockchain & Supply Chain':;
        return <Database className="h-6 w-6" />,;
      case 'IoT & Edge Computing':;
        return <Network className="h-6 w-6" />,;
      case 'Quantum Computing':;
        return <Cpu className="h-6 w-6" />,;
      case 'AR/VR & Immersive Tech':;
        return <Eye className="h-6 w-6" />,;
      case '5G & Telecommunications':;
        return <Globe className="h-6 w-6" />,;
      case 'Space Technology':;
        return <Rocket className="h-6 w-6" />,;
      case 'Neuromorphic Computing':;
        return <Brain className="h-6 w-6" />,;
      case 'Digital Twin & Simulation':;
        return <Settings className="h-6 w-6" />,;
      case 'Synthetic Biology':;
        return <Target className="h-6 w-6" />,;
      case 'Brain-Computer Interface':;
        return <Brain className="h-6 w-6" />,;
      case 'Sustainability & Energy':;
        return <Zap className="h-6 w-6" />,;
      case 'Autonomous Vehicles & Fleet Management':;
        return <Rocket className="h-6 w-6" />,;
      default: return <[^>]*/>
    };
  };
  const getInnovationLevelColor = (level: string) => {;
    switch (level) {;
      case 'Cutting-edge':;
        return 'bg-gradient-to-r from-purple-600 to-pink-600'
      case 'Advanced':;
        return 'bg-gradient-to-r from-blue-600 to-cyan-600',;
      case 'Professional':;
        return 'bg-gradient-to-r from-green-600 to-emerald-600',;
      default: return 'bg-gradient-to-r from-gray-600 to-slate-600'
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">;
      {/* Hero Section */};
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">;
        <div className="container mx-auto px-4 sm: px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold mb-6">;
              Innovative Technology Solutions;
            </[^>]*>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">;
              Discover our comprehensive portfolio of cutting-edge micro SAAS services;
              AI solutions, and emerging technology platforms designed to transform your business.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/request-quote"
                className="[^"]*"
              >;
                Request Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Contact Information Banner */};
      <section className="bg-white border-b border-gray-200">;
        <div className="container mx-auto px-4 py-6">;
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700">;
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <span className="font-medium">+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <span className="font-medium">kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <a;
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                ziontechgroup.com
              </[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2">;
              <[^>]*/>
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Filters Section */};
      <section className="bg-white py-8 border-b border-gray-200">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-wrap items-center justify-between gap-4">;
            {/* Search */};
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            {/* Category Filter */};
            <div className="flex items-center gap-2">;
              <span className="text-gray-700 font-medium">Category:</[^>]*>
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>;
                    {category === 'all' ? 'All Categories' : category}
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            {/* Innovation Level Filter */};
            <div className="flex items-center gap-2">;
              <span className="text-gray-700 font-medium">Innovation:</[^>]*>
              <select;
                value={selectedInnovationLevel};
                onChange={(e) => setSelectedInnovationLevel(e.target.value)};
                className="[^"]*"
              >;
                {innovationLevels.map(level => (;
                  <option key={level} value={level}>;
                    {level === 'all' ? 'All Levels' : level}
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Services Grid */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
            {filteredServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Service Header */};
                <div className="p-6 border-b border-gray-100">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-3">;
                      <div className="p-2 bg-zion-cyan/10 rounded-lg text-zion-cyan">;
                        {getCategoryIcon(service.category)};
                      </[^>]*>
                      <div>;
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>;
                          {service.innovationLevel};
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-zion-blue">;
                        {service.currency}{service.price.toLocaleString()};
                      </[^>]*>
                      <div className="text-sm text-gray-500">per {service.pricingModel}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</[^>]*>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</[^>]*>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">;
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      <span>{service.estimatedDelivery}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      <span>{service.supportLevel}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                {/* Service Details */};
                <div className="p-6">;
                  {/* Market Price & ROI */};
                  <div className="grid grid-cols-2 gap-4 mb-6">;
                    <div className="text-center p-3 bg-gray-50 rounded-lg">;
                      <div className="text-sm text-gray-500">Market Price</[^>]*>
                      <div className="font-semibold text-gray-900">{service.marketPrice}</[^>]*>
                    </[^>]*>
                    <div className="text-center p-3 bg-green-50 rounded-lg">;
                      <div className="text-sm text-gray-500">ROI</[^>]*>
                      <div className="font-semibold text-green-700">{service.roi}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  {/* Features */};
                  <div className="mb-6">;
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">;
                      <[^>]*/>
                      Key Features;
                    </[^>]*>
                    <div className="grid grid-cols-1 gap-2">;
                      {service.features.slice(0, 5).map((feature, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">;
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></[^>]*>
                          {feature};
                        </[^>]*>
                      ))};
                      {service.features.length > 5 && (;&& (; (
                        <div className="text-sm text-zion-cyan font-medium">;
                          +{service.features.length - 5} more features;
                        </[^>]*>
                      )};
                    </[^>]*>
                  </[^>]*>
                  {/* Benefits */};
                  <div className="mb-6">;
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">;
                      <[^>]*/>
                      Benefits;
                    </[^>]*>
                    <div className="space-y-2">;
                      {service.benefits.slice(0, 3).map((benefit, idx) => (;
                        <div key={idx} className="text-sm text-gray-600 bg-blue-50 p-2 rounded">;
                          {benefit};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  {/* Tags */};
                  <div className="mb-6">;
                    <div className="flex flex-wrap gap-2">;
                      {service.tags.slice(0, 5).map((tag, idx) => (;
                        <span;
                          key={idx};
                          className="[^"]*"
                        >;
                          {tag};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  {/* CTA Buttons */};
                  <div className="flex gap-3">;
                    <Link;
                      to={`/contact?service=${service.id}`};
                      className="[^"]*"
                    >;
                      Get Started;
                    </[^>]*>
                    <Link;
                      to={`/services/${service.id}`};
                      className="[^"]*"
                    >;
                      Learn More;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
          {filteredServices.length === 0 && (;&& (; (
            <div className="text-center py-16">;
              <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</[^>]*>
              <button;
                onClick={() => {;
                  setSelectedCategory('all')
                  setSelectedInnovationLevel('all'),;
                  setSearchTerm(''),;
                }};
                className="[^"]*"
              >;
                Clear all filters;
              </[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>
      {/* Call to Action Section */};
      <section className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white py-16">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl md: text-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </[^>]*>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
            Our innovative technology solutions are designed to give you a competitive edge.;
            Contact us today to discuss how we can help you achieve your goals.;
          </[^>]*>
          <div className="flex flex-wrap justify-center gap-4">;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              Contact Us;
              <[^>]*/>
            </[^>]*>
            <a;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              <[^>]*/>
              Call Now;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ComprehensiveServicesShowcase;