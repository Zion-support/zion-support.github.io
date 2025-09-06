<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
  website: 'https://ziontechgroup.com'
}
const allServices = [
  ...advancedEnterpriseServices2025
  ...innovativeMicroSaasExpansion2025
  ...cuttingEdgeITInfrastructureServices,];  website: 'https://ziontechgroup.com'
}
const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices
    description: 'Complete portfolio of advanced services'
  }
  {
    id: 'enterprise'
    name: 'Enterprise Solutions'
    icon: <Building className="w-6 h-6" />
    color: 'from-blue-500 to-purple-500'
    description: 'Enterprise-grade AI and IT solutions'
  }
  {
    id: 'micro-saas'
    name: 'Micro SAAS'
    icon: <Globe className="w-6 h-6" />
    color: 'from-green-500 to-emerald-500'
    description: 'Innovative micro SAAS solutions'
  }
  {
    id: 'infrastructure'
    name: 'IT Infrastructure'
    icon: <Shield className="w-6 h-6" />
    color: 'from-orange-500 to-red-500'
    description: 'Cutting-edge infrastructure services'
  }
  {
    id: 'ai-ml'
    name: 'AI & Machine Learning'
    icon: <Brain className="w-6 h-6" />
    color: 'from-purple-500 to-pink-500'
    description: 'Advanced AI and ML platforms'
  }
  {
    id: 'quantum'
    name: 'Quantum Computing'
    icon: <Atom className="w-6 h-6" />
    color: 'from-violet-500 to-indigo-500'
    description: 'Quantum computing solutions'
  }
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import React, { useState, useEffect } from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import SEO from './seo/Seo';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, LayoutGrid, List, Star, CheckCircle, ArrowRight, Check,
  Brain, Zap, Shield, Building, Globe,
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...advancedInnovativeServices,
  ...advancedITInfrastructureServices2025
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <LayoutGrid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise-grade AI and IT solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative micro SAAS solutions'
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Cutting-edge infrastructure services'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced AI and ML platforms'
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-violet-500 to-indigo-500',
    description: 'Quantum computing solutions'
  }
];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other'
};
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);
  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {service.popular && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4" />
          Popular
        </div>
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
        <span className="text-4xl">{service.icon}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {service.name}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {service.tagline}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {getServicePricing(service)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {service.trialDays} day trial
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.setupTime} setup
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.rating}/5 ({service.reviews} reviews)
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{getServiceFeatures(service).length - 3} more features
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.roi}
          </p>
        </div>
                        href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                Visit Website;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >;
                  <Grid className='w-5 h-5' />                </button>                <button
                  onClick={() => setViewMode('list')}
                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
          {/* Category Filters */}
          <div className="mt-6">;
            <div className="flex flex-wrap gap-3">;
              {categories && categories.map((category) => (;
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                    selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';
                  } ${category && category.color}`}
                >;
                  {category && category.icon}
                  {category && category.name}
                </button>;                </button>
              </div>
            </div>
          </div>              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">;
                Start Your Transformation;
                <ArrowRight className="w-5 h-5" />;
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
          <button className="px - 8 py - 4 bg - white text - blue - 600 rounded - xl font - semibold hover:bg - gray - 100 transition-all duration-300">;
            Get Started Today;
          </button>;
        </motion.div>;
      </div>;
    </div>);        </div>;
      </div>;
    </div>);
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
=======
=======
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
