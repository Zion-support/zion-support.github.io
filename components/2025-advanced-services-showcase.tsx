<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  LayoutGrid,
  List,
  Star,
  CheckCircle,
  ArrowRight,
  Check,
  Brain,
  Zap,
  Shield,
  Building,
  Globe,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Mock service data
const advancedEnterpriseServices2025 = [
  {
    id: "enterprise-1",
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI implementation for large enterprises",
    category: "enterprise",
    price: "$50,000+",
    rating: 4.9,
    tags: ["AI", "Machine Learning", "Enterprise"],
    color: "from-blue-500 to-purple-500",
    icon: "🤖",
  },
];

const innovativeMicroSaasExpansion2025 = [
  {
    id: "micro-1",
    title: "Micro SaaS Platform",
    description: "Lightweight SaaS solutions for small businesses",
    category: "micro-saas",
    price: "$99/month",
    rating: 4.7,
    tags: ["SaaS", "Micro Services", "Cloud"],
    color: "from-green-500 to-teal-500",
    icon: "⚡",
  },
];

const cuttingEdgeITInfrastructureServices = [
  {
    id: "infra-1",
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure solutions",
    category: "infrastructure",
    price: "$5,000/month",
    rating: 4.8,
    tags: ["Cloud", "Infrastructure", "DevOps"],
    color: "from-orange-500 to-red-500",
    icon: "☁️",
  },
];

// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
const contactInfo = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
};

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
  website: 'https://ziontechgroup.com'
}
const allServices = [
  ...advancedEnterpriseServices2025,
  ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices,
];

const categories = [
  {
    id: "all",
    name: "All Services",
    icon: <LayoutGrid className="w-6 h-6" />,
    color: "from-gray-500 to-slate-500",
    description: "Complete portfolio of advanced services",
  },
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    icon: <Building className="w-6 h-6" />,
    color: "from-blue-500 to-purple-500",
    description: "Large-scale enterprise solutions",
  },
  {
    id: "micro-saas",
    name: "Micro SaaS",
    icon: <Zap className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
    description: "Innovative micro SaaS solutions",
  },
  {
    id: "infrastructure",
    name: "IT Infrastructure",
    icon: <Shield className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    description: "Cutting-edge infrastructure services",
  },
];

export default function AdvancedServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (service) => service.category === selectedCategory,
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Advanced Services Showcase 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge solutions
            designed to transform your business and drive innovation in the
            digital age.
          </p>
        </motion.div>

      />;

            {/* Category Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <div className="text-left">
                      <div className="font-semibold">{category.name}</div>
                      <div className="text-sm opacity-80">
                        {category.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>;
        <div className='absolute inset-0 bg-black opacity-20'></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>;
          <div className='text-center'>;
            <motion&& motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
        {/* Services Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div
                  className={`${viewMode === "list" ? "w-1/3" : "w-full"} h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  <div className="text-white text-6xl">{service.icon}</div>
                </div>

                <div
                  className={`${viewMode === "list" ? "w-2/3" : "w-full"} p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {service.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our advanced services can help you achieve your
            goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <span>{contactInfo.address}</span>
            </div>
          </div>

          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  )
}                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">;
                Start Your Transformation;
                <ArrowRight className='w-5 h-5'    />;
              </a>;

              <a

                href={`tel:${contactInfo && contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300">;
                <Phone className="w-5 h-5" />;
            <p className="text - xl text - blue - 100 mb - 8 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement these cutting - edge solutions.;

              Get in touch today to discuss your specific needs and discover how we can drive your success.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify-center items-center">;
              <a;
                href={`mailto:${contact_info.email}?subject = Business Transformation Consultation`}
                className="inline - flex items - center gap - 2 bg - white text - blue - 600 px - 8 py - 4 rounded - lg font - bold text - lg hover:bg - gray - 100 transition - all duration-300 transform hover:scale-105";
              >;
                Start Your Transformation;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className="inline - flex items - center gap - 2 bg - transparent border - 2 border - white text - white px - 8 py - 4 rounded - lg font - bold text - lg hover: bg - white hover:text - blue - 600 transition-all duration-300";
              >;
                <Phone className="w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
          </div>;
  );
}
