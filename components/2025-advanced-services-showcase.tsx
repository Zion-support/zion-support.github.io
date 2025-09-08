=======import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check;
  Brain, Atom, Shield, Building, Globe;
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  };
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise-grade AI and IT solutions'
  };
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative micro SAAS solutions'
  };
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Cutting-edge infrastructure services'
  };
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced AI and ML platforms'
  };
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-violet-500 to-indigo-500',
    description: 'Quantum computing solutions'
  }
];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other'
};

const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  return 'Contact for pricing'
};

const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;  if (service.keyFeatures) return service.keyFeatures;
  return [];
}export default function AdvancedServicesShowcase() {const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com';'
};

origin/cursor/automate-test-improve-and-merge-code-2533

const getServicePricing = ("service": any) => {
  }
  if (service.price) return `${service.price}${service.period}`;`}

const getServicePricing = ("service": any) => {if (service.price);
  }
  return `${service.price}${service.period}`;`  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;`
const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com';'
}



export default function AdvancedServicesShowcase() {
export default function AdvancedServicesShowcase() {
}
const allServices = [;
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;
  ...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com','
};
=======
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com';'
}

const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
return [];
}

export default function AdvancedServicesShowcase() {const [selectedCategory, setSelectedCategory] = useState('all');'
  }
  const [searchTerm, setSearchTerm] = useState('');'
const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')const [filteredServices, setFilteredServices]  = useState(allServices)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { "service": any,;'
}) => (<motion&& motion.div;
      initial={{ "opacity": 0, "y": 20 
}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0 && 0.5 
}
      className={`relative bg-white "dark":bg-gray-800 rounded-2xl shadow-lg "hover":shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 "dark":border-gray-700 ${</p>;`        </div>;
}
ursor/automate-test-improve-and-merge-code-646c;
          </p>;
        </div>;
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
        return false
      })
    }

    // Filter by search term
          {/* Category Filters */}
          <div className="mt-6">"
            <div className="flex flex-wrap gap-3">"
              {categories.map((category) => (
                <button
}
key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id;`                      ? 'bg-gradient-to-r text-white shadow-lg';'
                      : 'bg-white "dark":bg-gray-800 text-gray-700 "dark":text-gray-300 border border-gray-200 "dark":border-gray-600 "hover":bg-gray-50 "dark":"hover":bg-gray-700';'
                  } ${category.color}`}`                >;
                  } ${category.color}`}>`
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
ursor/fix-netlify-build-and-merge-to-main-9571
              
main

              
              
              <div className="flex items-center gap-4 text-sm text-gray-600 "dark":text-gray-400">"
                <div className="flex items-center gap-2">"
                  <TrendingUp className="w-4 h-4 text-green-500" />"
                  <span>Market "Growth": 150%+ YoY</span>
=======
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {filteredServices.length} Services Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: "${searchTerm}"`}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Market Growth: 150%+ YoY</span>                </div>
                <div className="flex items-center gap-2">"
                  <Award className="w-4 h-4 text-blue-500" />"
                  <span>4.8+ Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="space-y-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
        ))}
                </div>;
              ) : (<div className="space-y-6">;"
                  {filteredServices.map((service) => (<ServiceList key={service.id} service={service} />;
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        </div>;
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can drive your success.
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
                <Phone className="w-5 h-5" />                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
}
main


<button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75=======
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  viewMode === 'list' ? 'p-6 flex items-center gap-6' : 'p-8'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'flex items-start justify-between mb-4'}`}>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  {viewMode === 'grid' && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium">{service.rating}</span>
                    </div>
                  )}
                </div>

                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>

                  <p className={`text-gray-300 mb-6 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'}`}>
                    {service.description}
                  </p>

                  {viewMode === 'grid' && (
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={`flex items-center justify-between ${viewMode === 'list' ? 'mt-4' : ''}`}>
                    <div className="text-2xl font-bold text-white">
                      ${service.price}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    
                    <motion.button
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and discover how our services can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
