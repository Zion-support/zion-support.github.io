
=======


=======import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check;
  Brain, Atom, Shield, Building, Globe;
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';


=======import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check;
  Brain, Atom, Shield, Building, Globe;
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
];
const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
];
=======

];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other'
};
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  Search,;
  Grid,;
  List,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Check,;
  Brain,;
  Atom,;
  Shield,;
  Building,;
  Globe,;
  Users,;
  TrendingUp,;
  Award,;
  Phone,;
  Mail,;
  MapPin,;
} from 'lucide-react';
// Mock service data;
const advancedEnterpriseServices2025 = [;
  {;
    id: "enterprise-1",;
    title: "Enterprise AI Solutions",;
    description: "Comprehensive AI implementation for large enterprises",;
    category: "enterprise",;
    price: "$50,000+",;
    rating: 4 && 4.9,;
    tags: ["AI", "Machine Learning", "Enterprise"],;
    color: "from-blue-500 to-purple-500",;
    icon: "🤖",;
  },;
];
const innovativeMicroSaasExpansion2025 = [;
  {;
    id: "micro-1",;
    title: "Micro SaaS Platform",;
    description: "Lightweight SaaS solutions for small businesses",;
    category: "micro-saas",;
    price: "$99/month",;
    rating: 4 && 4.7,;
    tags: ["SaaS", "Micro Services", "Cloud"],;
    color: "from-green-500 to-teal-500",;
    icon: "⚡",;
  },;
];
const cuttingEdgeITInfrastructureServices = [;
  {;
    id: "infra-1",;
    title: "Cloud Infrastructure",;
    description: "Scalable cloud infrastructure solutions",;
    category: "infrastructure",;
    price: "$5,000/month",;
    rating: 4 && 4.8,;
    tags: ["Cloud", "Infrastructure", "DevOps"],;
    color: "from-orange-500 to-red-500",;
    icon: "☁️",;
  },;
];// Import our new service data;
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
  return 'Contact for pricing'
};
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return []
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};
const allServices = [;
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;
  ...cuttingEdgeITInfrastructureServices,];  website: 'https://ziontechgroup && ziontechgroup.com';
};
const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;


=======
export default function AdvancedServicesShowcase() {=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    let filtered = allServices;
    // Filter by category;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        const category = getServiceCategory(service).toLowerCase();


            ))}

              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Services Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">;
                Get Quote;
                <ArrowRight className="w-4 h-4" />;
              </a>;
              <a
                href={contactInfo && contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
=======

                Visit Website;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent';
                />;
              </div>;
            </div>;
            <div className='flex items-center gap-4'>;
              <div className='flex items-center gap-2'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
                >;
                  <Grid className='w-5 h-5' />                </button>                <button
                  onClick={() => setViewMode('list')}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid' ;
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' ;
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                </button>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </button>
              </div>
            </div>
          </div>
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                <button


                <button


                <button

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r text - white shadow - lg';
                      : 'bg - white dark:bg - gray - 800 text - gray - 700 dark:text - gray - 300 border border - gray - 200 dark:border - gray - 600 hover:bg - gray - 50 dark:hover:bg - gray - 700';
                  } ${category.color}`}
                >;
                  {category.icon}
                  {category.name}


        {/* Results Summary */}


            </div>;
          </div>;
        </div>;
=======                </button>
              ))}
            </div>
          </div>
        </div>

=======




        <div className="space-y-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {viewMode === 'grid' ? (
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {filteredServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />

                    <ServiceList key={service.id} service={service} />


=======                </div>
              ) : (
                <div className='space-y-6'>
                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map((service) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />

                    <ServiceList key={service.id} service={service} />

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        </div>;



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Call to Action */}
        <div className='mt-16 text-center'>;
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white'>;
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>;
              Our team of experts is ready to help you implement these;
              cutting-edge solutions. Get in touch today to discuss your;
              specific needs and discover how we can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className='inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'>;
                Start Your Transformation;
                <ArrowRight className='w-5 h-5' />;
              </a>;
              <a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions.
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

        </div>
      </div>
    </div>
=======
              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">;
                Start Your Transformation;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a

                href={`tel:${contactInfo && contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300">;
                <Phone className="w-5 h-5" />;
            <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
              Our team of experts is ready to help you implement these cutting - edge solutions.;
              Get in touch today to discuss your specific needs and discover how we can drive your success.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;
              <a;
                href={`mailto:${contact_info.email}?subject = Business Transformation Consultation`}
                className="inline - flex items - center gap - 2 bg - white text - blue - 600 px - 8 py - 4 rounded - lg font - bold text - lg hover:bg - gray - 100 transition - all duration - 300 transform hover:scale - 105";
              >;
                Start Your Transformation;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className="inline - flex items - center gap - 2 bg - transparent border - 2 border - white text - white px - 8 py - 4 rounded - lg font - bold text - lg hover: bg - white hover:text - blue - 600 transition - all duration - 300";
              >;
                <Phone className="w - 5 h - 5" />;
                Call Now;
              </a>;
            </div>;
          </div>;
  );

}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button className="px - 8 py - 4 bg - white text - blue - 600 rounded - xl font - semibold hover:bg - gray - 100 transition - all duration - 300">;
            Get Started Today;
          </button>;
        </motion.div>;
      </div>;
    </div>);        </div>;
      </div>;
    </div>);
}
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
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
);        </div>
      </div>
    </div>
  );
}
          </div>
==============

          </div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
