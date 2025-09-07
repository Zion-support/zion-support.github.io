<<<<<<< HEAD

<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
  website: 'https://ziontechgroup.com';

<<<<<<< HEAD
const allServices = [ ...advancedEnterpriseServices2025
...innovativeMicroSaasExpansion2025
...cuttingEdgeITInfrastructureServices ]
// Filter by category if (selectedCategory !== 'all') {
  filtered = filtered.filter (service => {
  
}// Filter by search term if (searchTerm) {
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) || getServiceCategory (service) .toLowerCase () .includes (searchTerm.toLowerCase () ) setFilteredServices (filtered) 
}, [selectedCategory, searchTerm])
const ServiceCard = ({
  service 
}: {
  service: unknown 
}) => (<motion.div initial= {
  {
  opacity: 0, y: 20 
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
  website: 'https://ziontechgroup.com';
import React, { useState, useEffect } from \'react\';
import { motion, AnimatePresence } from \'framer-motion\';
  website: 'https://ziontechgroup.com',
>>>>>>> origin/chore/fix-lint-and-merge
}
const allServices = [;

const allServices = [
  ...advancedEnterpriseServices2025;
  ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com';
}
<<<<<<< HEAD
}transition= {
  {
  duration: 0.5 
}
}className= {
  `relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 $ {
  service.popular ? 'ring-2 ring-blue-500' : '' 
}` 
}> {
  service.popular && (<div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"> <Star className="w-4 h-4" /> Popular </div>) 
}<div className= {
  `h-32 bg-gradient-to-br $ {
  service.color 
}flex items-center justify-center` 
}> <span className="text-4xl"> {
  service.icon 
}</span> </div> <div className="p-6"> <div className="flex items-start justify-between mb-3"> <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2"> {
  service.name 
}</h3> </div> <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"> {
  service.tagline 
}</p> <div className="flex items-center justify-between mb-4"> <span className="text-2xl font-bold text-gray-900 dark:text-white"> {
  getServicePricing (service) 
}</span> <span className="text-sm text-gray-500 dark:text-gray-400"> {
  service.trialDays 
}day trial </span> </div> <div className="space-y-3 mb-6"> <div className="flex items-center gap-2"> <CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  service.setupTime 
}setup </span> </div> <div className="flex items-center gap-2"> <Users className="w-4 h-4 text-blue-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  service.customers ? service.customers.toLocaleString () : '1000' 
}+ customers </span> </div> <div className="flex items-center gap-2"> <Star className="w-4 h-4 text-yellow-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  service.rating 
}/5 ({
  service.reviews 
}reviews) </span> </div> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4> <div className="space-y-1"> {
  getServiceFeatures (service) .slice (0, 3) .map ( (feature: string, index: number) => (<div key= {
  index 
}className="flex items-center gap-2"> <Check className="w-3 h-3 text-green-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  feature 
}</span> </div>) ) 
}{
  getServiceFeatures (service) .length > 3 && (<span className="text-sm text-gray-500 dark:text-gray-400"> + {
  getServiceFeatures (service) .length - 3 
}more features </span>) 
}</div> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4> <p className="text-sm text-gray-600 dark:text-gray-400"> {
  service.roi 
}</p> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4> <p className="text-sm text-gray-600 dark:text-gray-400"> {
  service.marketPosition 
}</p> </div> <div className="flex items-center justify-between"> <a href= {
  service.link 
}className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Learn More <ArrowRight className="w-4 h-4" /> </a> <a > Contact </a> </div> </div> </motion.div>)
const ServiceList = ({
  service 
}: {
  service: unknown 
}) => (<motion.div initial= {
  {
  opacity: 0, x: -20 
}
}animate= {
  {
  opacity: 1, x: 0 
}
}transition= {
  {
  duration: 0.5 
}
}className= {
  `bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 $ {
  service.popular ? 'ring-2 ring-blue-500' : '' 
}` 
}> <div className="p-6"> <div className="flex items-start gap-6"> <div className= {
  `w-20 h-20 bg-gradient-to-br $ {
  service.color 
}rounded-xl flex items-center justify-center flex-shrink-0` 
}> <span className="text-3xl"> {
  service.icon 
}</span> </div> <div className="flex-1"> <div className="flex items-start justify-between mb-3"> <div> <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2"> {
  service.name 
}{
  service.popular && (<span className="ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold"> Popular </span>) 
}</h3> <p className="text-gray-600 dark:text-gray-300 mb-3"> {
  service.tagline 
}</p> </div> <div className="text-right"> <div className="text-2xl font-bold text-gray-900 dark:text-white"> {
  getServicePricing (service) 
}</div> <div className="text-sm text-gray-500 dark:text-gray-400"> {
  service.trialDays 
}day trial </div> </div> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"> <div className="flex items-center gap-2"> <CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  service.setupTime 
}setup </span> </div> <div className="flex items-center gap-2"> <Users className="w-4 h-4 text-blue-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  service.customers ? service.customers.toLocaleString () : '1000' 
}+ customers </span> </div> <div className="flex items-center gap-2"> <Star className="w-4 h-4 text-yellow-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  service.rating 
}/5 ({
  service.reviews 
}reviews) </span> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"> <div> <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4> <div className="space-y-1"> {
  getServiceFeatures (service) .slice (0, 4) .map ( (feature: string, index: number) => (<div key= {
  index 
}className="flex items-center gap-2"> <Check className="w-3 h-3 text-green-500" /> <span className="text-sm text-gray-600 dark:text-gray-400"> {
  feature 
}</span> </div>) ) 
}</div> </div> <div> <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4> <p className="text-sm text-gray-600 dark:text-gray-400 mb-3"> {
  service.roi 
}</p> <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4> <p className="text-sm text-gray-600 dark:text-gray-400"> {
  service.marketPosition 
}</p> </div> </div> <div className="flex items-center gap-4"> <a href= {
  service.link 
}className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Learn More <ArrowRight className="w-4 h-4" /> </a> <a > Contact Sales </a> </div> </div> </div> </div> </motion.div>)
return (<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"> <SEO title="2025 Advanced Services Showcase - Zion Tech Group" description="Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses." keywords= {
  ["AI services", "micro SAAS", "IT infrastructure", "quantum computing", "enterprise solutions", "Zion Tech Group"] 
}/> {
  /* Hero Section */ 
}<div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"> <div className="absolute inset-0 bg-black opacity-20"></div> <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <div className="text-center"> <motion.h1 initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}className="text-4xl md:text-6xl font-bold text-white mb-6" > 2025 Advanced Services Showcase </motion.h1> <motion.p initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: 0.2 
}
}className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto" > Discover our comprehensive portfolio of real, innovative, and market-ready solutions. From AI-powered enterprise services to cutting-edge quantum computing platforms. </motion.p> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: 0.4 
}
}className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <div className="flex items-center gap-2 text-white"> <CheckCircle className="w-5 h-5 text-green-300" /> <span>30+ New Services</span> </div> <div className="flex items-center gap-2 text-white"> <CheckCircle className="w-5 h-5 text-green-300" /> <span>Real Implementations</span> </div> <div className="flex items-center gap-2 text-white"> <CheckCircle className="w-5 h-5 text-green-300" /> <span>Market Validated</span> </div> </motion.div> </div> </div> </div> {
  /* Contact Information Banner */ 
}<div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div className="flex flex-col md:flex-row items-center justify-between gap-4"> <div className="flex items-center gap-6"> <div className="flex items-center gap-2"> <Phone className="w-5 h-5 text-blue-600" /> <span className="text-gray-700 dark:text-gray-300"> {
  contactInfo.mobile 
}</span> </div> <div className="flex items-center gap-2"> <Mail className="w-5 h-5 text-blue-600" /> <span className="text-gray-700 dark:text-gray-300"> {
  contactInfo.email 
}</span> </div> <div className="flex items-center gap-2"> <MapPin className="w-5 h-5 text-blue-600" /> <span className="text-gray-700 dark:text-gray-300"> {
  contactInfo.address 
}</span> </div> </div> <div className="flex items-center gap-4"> <a href= {
  `mailto:$ {
  contactInfo.email 
}?subject=Services Inquiry` 
}className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300" > Get Quote <ArrowRight className="w-4 h-4" /> </a> <a href= {
  contactInfo.website 
}target=" blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300" > Visit Website </a> </div> </div> </div> </div> {
  /* Main Content */ 
}<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {
  /* Filters and Search */ 
}<div className="mb-8"> <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"> <div className="flex-1"> <div className="relative max-w-md"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> <input type="text" placeholder="Search services..." value= {
  searchTerm 
}onChange= {
  (e) => setSearchTerm (e.target.value) 
}className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> </div> <div className="flex items-center gap-4"> <div className="flex items-center gap-2"> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </div> </div> {
  /* Category Filters */ 
}<div className="mt-6"> <div className="flex flex-wrap gap-3"> {
  categories.map ( (category) => (<button key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700' 
}$ {
  category.color 
}` 
}> {
  category.icon 
}{
  category.name 
}</button>) ) 
}</div> </div> </div> {
  /* Results Summary */ 
}<div className="mb-8"> <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"> <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"> <div> <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2"> {
  filteredServices.length 
}Services Found </h2> <p className="text-gray-600 dark:text-gray-400"> {
  selectedCategory !== 'all' && `Filtered by: $ {
  categories.find (c => c.id === selectedCategory) ?.name 
}` 
}{
  searchTerm && ` • Search: "$ {
  searchTerm 
}"` 
}</p> </div> <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"> <div className="flex items-center gap-2"> <TrendingUp className="w-4 h-4 text-green-500" /> <span>Market Growth: 150%+ YoY</span> </div> <div className="flex items-center gap-2"> <Award className="w-4 h-4 text-blue-500" /> <span>4.8+ Average Rating</span> </div> </div> </div> </div> </div> {
  /* Services Grid/List */ 
}<div className="space-y-6"> {
  filteredServices.length === 0 ? (<div className="text-center py-12"> <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div> <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"> No services found </h3> <p className="text-gray-600 dark:text-gray-400"> Try adjusting your search terms or category filters. </p> </div>) : (<AnimatePresence> {
  viewMode === 'grid' ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {
  filteredServices.map ( (service) => (<ServiceCard key= {
  service.id 
}service= {
  service 
}/>) ) 
}</div>) : (<div className="space-y-6"> {
  filteredServices.map ( (service) => (<ServiceList key= {
  service.id 
}service= {
  service 
}/>) ) 
}</div>) 
}</AnimatePresence>) 
}</div> {
  /* Call to Action */ 
}<div className="mt-16 text-center"> <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement these cutting-edge solutions. Get in touch today to discuss your specific needs and discover how we can drive your success. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href= {
  `mailto:$ {
  contactInfo.email 
}?subject=Business Transformation Consultation` 
}className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" > Start Your Transformation <ArrowRight className="w-5 h-5" /> </a> <a > <Phone className="w-5 h-5" /> Call Now </a> </div> </div> </div> </div> </div>) 
}
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
=======
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
  Search
  Grid
  List
  Star
  CheckCircle
  ArrowRight
  Check
  Brain
  Atom
  Shield
  Building
  Globe
  Users
  TrendingUp
  Award
  Phone
  Mail
  MapPin;
} from 'lucide-react';
=======


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React, { useState, useEffect } from "react";
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
// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  website: 'https://ziontechgroup.com'
}
const allServices = [
  ...advancedEnterpriseServices2025
  ...innovativeMicroSaasExpansion2025
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com'
}
=======
const allServices = [;

>>>>>>> origin/chore/fix-lint-and-merge
const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
    description: 'Complete portfolio of advanced services';
  }
  {id: 'enterprise';
    name: 'Enterprise Solutions';
    icon: <Building className=\"w-6 h-6\"    />;
    color: 'from-blue-500 to-purple-500';}
    description: 'Enterprise-grade AI and IT solutions';}
  }
  {id: 'micro-saas';
    name: 'Micro SAAS';
    icon: <Globe className=\"w-6 h-6\"    />;
    color: 'from-green-500 to-emerald-500';}
    description: 'Innovative micro SAAS solutions';}
  }
  {id: 'infrastructure';
    name: 'IT Infrastructure';
    icon: <Shield className=\"w-6 h-6\"    />;
    color: 'from-orange-500 to-red-500';}
    description: 'Cutting-edge infrastructure services';}
  }
  {id: 'ai-ml';
    name: 'AI & Machine Learning';
    icon: <Brain className=\"w-6 h-6\"    />;
    color: 'from-purple-500 to-pink-500';}
    description: 'Advanced AI and ML platforms';}
  }
  {import React, { useState, useEffect } from 'react',import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, List, Star, CheckCircle, ArrowRight, Check;
<<<<<<< HEAD
  }
  Brain, Atom, Shield, Building, Globe;
  Users, TrendingUp, Award, Phone, Mail, MapPin;
=======
  Brain, Atom, Shield, Building, Globe;}
  Users, TrendingUp, Award, Phone, Mail, MapPin;}
  } from 'lucide-react';
// Import our new service data;
import { advancedEnterpriseServices2025   } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025   } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices  } from '../data/2025-cutting-edge-it-infrastructure';
>>>>>>> origin/chore/fix-lint-and-merge

const contactInfo = null;
  Search;
  Grid;
  List;
  Star;
  CheckCircle;
  ArrowRight;
  Check;
  Brain;
  Atom;
  Shield;
  Building;
  Globe;
  Users;
  TrendingUp;
  Award;
  Phone;
  Mail;
  MapPin;
<<<<<<< HEAD

=======
} from 'lucide-react';
// Mock service data;
const advancedEnterpriseServices2025 = [;

const advancedEnterpriseServices2025 = [
  {id: \'enterprise-1\';
    title: \'Enterprise AI Solutions\';
    description: \'Comprehensive AI implementation for large enterprises\';
    category: \'enterprise\';
    price: \'$50,000+\';
    rating: 4.9;
    tags: [\"AI\", \"Machine Learning\", \"Enterprise\"];
    color: \'from-blue-500 to-purple-500\';}
    icon: \'🤖\';}
  }
];
const innovativeMicroSaasExpansion2025 = [;

const innovativeMicroSaasExpansion2025 = [
  {id: \'micro-1\';
    title: \'Micro SaaS Platform\';
    description: \'Lightweight SaaS solutions for small businesses\';
    category: \'micro-saas\';
    price: \'$99/month\';
    rating: 4.7;
    tags: [\"SaaS\", \"Micro Services\", \"Cloud\"];
    color: \'from-green-500 to-teal-500\';}
    icon: \'⚡\';}
  }
];
const cuttingEdgeITInfrastructureServices = [;
  {id: \"infra-1\",title: \"Cloud Infrastructure\",description: \"Scalable cloud infrastructure solutions\",category: \"infrastructure\",price: \"$5,000/month\",rating: 4.8,tags: [\"Cloud\", \"Infrastructure\", \"DevOps\"],color: \"from-orange-500 to-red-500\",icon: \'☁️\';}
  }
];
const contactInfo = {mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com';}
}const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices;
];const categories = [;

const cuttingEdgeITInfrastructureServices = [
  {id: \"infra-1\",title: \"Cloud Infrastructure\",description: \"Scalable cloud infrastructure solutions\",category: \"infrastructure\",price: \"$5,000/month\",rating: 4.8,tags: [\"Cloud\", \"Infrastructure\", \"DevOps\"],color: \"from-orange-500 to-red-500\",icon: \'☁️\';}
  }
];

const contactInfo = {mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com';}
}

const allServices = [
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices;
];


const categories = [
  {id: 'all',
  name: 'All Services',icon: <Grid className='w-6 h-6'    />,color: 'from-gray-500 to-slate-500',}
  description: 'Complete portfolio of advanced services';}
  },{id: 'enterprise',
  name: 'Enterprise Solutions',icon: <Building className='w-6 h-6'    />,color: 'from-blue-500 to-purple-500',}
  description: 'Enterprise-grade AI and IT solutions';}
  },{id: 'micro-saas',
  name: 'Micro SAAS',icon: <Globe className='w-6 h-6'    />,color: 'from-green-500 to-emerald-500',}
  description: 'Innovative micro SAAS solutions';}
  },{id: 'infrastructure',
  name: 'IT Infrastructure',icon: <Shield className='w-6 h-6'    />,color: 'from-orange-500 to-red-500',}
  description: 'Cutting-edge infrastructure services';}
  },{id: 'ai-ml',
  name: 'AI & Machine Learning',icon: <Brain className='w-6 h-6'    />,color: 'from-purple-500 to-pink-500',}
  description: 'Advanced AI and ML platforms';}
  },{id: 'quantum';
    name: 'Quantum Computing';
    icon: <Atom className=\"w-6 h-6\"    />;
    color: 'from-violet-500 to-indigo-500';}
    description: 'Quantum computing solutions';}
  }
ursor/automate-test-improve-and-merge-code-646c;
import SEO from './seo/Seo';
import { Search, LayoutGrid, List, Star, CheckCircle, ArrowRight, Check,Brain, Zap, Shield, Building, Globe,Users, TrendingUp, Award, Phone, Mail, MapPin;}
 } from 'lucide-react';
// Import our new service data;
import { advancedInnovativeServices  } from '../data/2025-advanced-innovative-services-expansion';
import { advancedITInfrastructureServices2025  } from '../data/2025-advanced-it-infrastructure-services';
const contactInfo = {mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com';}
}const allServices = [;
  ...advancedInnovativeServices,...advancedITInfrastructureServices2025;
];const categories = [;

const contactInfo = {mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com';}
}

const allServices = [
  ...advancedInnovativeServices,...advancedITInfrastructureServices2025;
];


const categories = [
  {id: 'all',
  name: 'All Services',icon: <LayoutGrid className=\"w-6 h-6\"    />,color: 'from-gray-500 to-slate-500',}
  description: 'Complete portfolio of advanced services';}
  },{id: 'enterprise',
  name: 'Enterprise Solutions',icon: <Building className=\"w-6 h-6\"    />,color: 'from-blue-500 to-purple-500',}
  description: 'Enterprise-grade AI and IT solutions';}
  },{id: 'micro-saas',
  name: 'Micro SAAS',icon: <Globe className=\"w-6 h-6\"    />,color: 'from-green-500 to-emerald-500',}
  description: 'Innovative micro SAAS solutions';}
  },{id: 'infrastructure',
  name: 'IT Infrastructure',icon: <Shield className=\"w-6 h-6\"    />,color: 'from-orange-500 to-red-500',}
  description: 'Cutting-edge infrastructure services';}
  },{id: 'ai-ml',
  name: 'AI & Machine Learning',icon: <Brain className=\"w-6 h-6\"    />,color: 'from-purple-500 to-pink-500',}
  description: 'Advanced AI and ML platforms';}
  },{id: 'quantum',
  name: 'Quantum Computing',icon: <Zap className=\"w-6 h-6\"    />,color: 'from-violet-500 to-indigo-500',}
  description: 'Quantum computing solutions';}
  }
    id: 'quantum',
  name: 'Quantum Computing',icon: <Atom className='w-6 h-6'    />,color: 'from-violet-500 to-indigo-500',
  description: 'Quantum computing solutions';
  }];const getServiceCategory = (if (service.category) return service.category;) => {
  return $3;}
}
  }];

const getServiceCategory = (if (service.category);
  return service.category;
  return 'Other';) => {
  return $3;}
}
}return 'Other';
}website: 'https://ziontechgroup.com';
>>>>>>> origin/chore/fix-lint-and-merge
}
const allServices = [;

const allServices = [
  ...advancedEnterpriseServices2025;
  ...innovativeMicroSaasExpansion2025;
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

import React, { useState, useEffect } from react';
import SEO from './seo/Seo;
import { motion, AnimatePresence } from framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check;
  Brain, Atom, Shield, Building, Globe;
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react;

// Import our new service data
import { advancedEnterpriseServices2025 } from ../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion;
import { cuttingEdgeITInfrastructureServices } from ../data/2025-cutting-edge-it-infrastructure';
const contactInfo = {
  mobile: '+1 302 464 0950,
  email: kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709,
  website: https://ziontechgroup.com'
}

const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices
<<<<<<< HEAD
];

const categories = [
  {
    id: 'all,
    name: All Services',
    icon: <Grid className="w-6 h-6 />,
    color: 'from-gray-500 to-slate-500,
    description: Complete portfolio of advanced services'
  }
  {
    id: 'enterprise,
    name: Enterprise Solutions',
    icon: <Building className=w-6 h-6" />,
    color: 'from-blue-500 to-purple-500,
    description: Enterprise-grade AI and IT solutions'
  }
  {
    id: 'micro-saas,
    name: Micro SAAS',
    icon: <Globe className="w-6 h-6 />,
    color: 'from-green-500 to-emerald-500,
    description: Innovative micro SAAS solutions'
  }
  {
    id: 'infrastructure,
    name: IT Infrastructure',
    icon: <Shield className=w-6 h-6" />,
    color: 'from-orange-500 to-red-500,
    description: Cutting-edge infrastructure services'
  }
  {
    id: 'ai-ml,
    name: AI & Machine Learning',
    icon: <Brain className="w-6 h-6 />,
    color: 'from-purple-500 to-pink-500,
    description: Advanced AI and ML platforms'
  }
  {
    id: 'quantum,
    name: Quantum Computing',
    icon: <Atom className=w-6 h-6" />,
    color: 'from-violet-500 to-indigo-500,
    description: Quantum computing solutions'
  }
    description: 'Quantum computing solutions}];
    description: Quantum computing solutions'}];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
import React, { useState, useEffect } from "react;
import { motion, AnimatePresence } from framer-motion";
  return 'Other;
}

  website: https://ziontechgroup.com'
}
  }
=======
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com';
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com';

const cuttingEdgeITInfrastructureServices = [
  {
    id: \"infra-1\",
    title: \"Cloud Infrastructure\",
    description: \"Scalable cloud infrastructure solutions\",
    category: \"infrastructure\",
    price: \"$5,000/month\",
    rating: 4.8,
    tags: [\"Cloud\", \"Infrastructure\", \"DevOps\"],
    color: \"from-orange-500 to-red-500\",}
    icon: \"☁️,}
}];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com,}
};

const allServices = [
  ...advancedEnterpriseServices2025,
  ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices];

const categories = [
  {
    id: 'all',
  name: 'All Services',
icon: <Grid className='w-6 h-6'    />,
    color: 'from-gray-500 to-slate-500',}
  description: 'Complete portfolio of advanced services,}
},
    description: 'Complete portfolio of advanced services'},
    description: 'Complete portfolio of advanced services,
},
  {
    id: 'enterprise',
  name: 'Enterprise Solutions',
    icon: <Building className='w-6 h-6'    />,
    color: 'from-blue-500 to-purple-500',}
  description: 'Enterprise-grade AI and IT solutions,}
},
  {
    id: 'micro-saas',
  name: 'Micro SAAS',
    icon: <Globe className='w-6 h-6'    />,
    color: 'from-green-500 to-emerald-500',}
  description: 'Innovative micro SAAS solutions,}
},
  {
    id: 'infrastructure',
  name: 'IT Infrastructure',
    icon: <Shield className='w-6 h-6'    />,
    color: 'from-orange-500 to-red-500',}
  description: 'Cutting-edge infrastructure services,}
},
  {
    id: 'ai-ml',
  name: 'AI & Machine Learning',
    icon: <Brain className='w-6 h-6'    />,
    color: 'from-purple-500 to-pink-500',}
  description: 'Advanced AI and ML platforms,}
},
  {
    id: 'quantum',
  name: 'Quantum Computing'
    icon: <Atom className=\"w-6 h-6\"    />
    color: 'from-violet-500 to-indigo-500',}
  description: 'Quantum computing solutions'}
  }
 ,
}
import {
>>>>>>> origin/chore/fix-lint-and-merge
  Search, LayoutGrid, List, Star, CheckCircle, ArrowRight, Check;
  Brain, Zap, Shield, Building, Globe;}
  Users, TrendingUp, Award, Phone, Mail, MapPin}
} from 'lucide-react';

// Import our new service data;
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

<<<<<<< HEAD
  }
  "mobile": '+1 302 464 0950','
  "email": 'kleber@ziontechgroup.com','
  "address": '364 E Main St STE 1008 Middletown DE 19709','
  "website": '"https"://ziontechgroup.com','
};

=======
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com',}
};

const allServices = [
>>>>>>> origin/chore/fix-lint-and-merge
  ...advancedInnovativeServices,
  ...advancedITInfrastructureServices2025;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
];
const categories = [
  {
    id: 'all',
  name: 'All Services',
    icon: <LayoutGrid className=\"w-6 h-6\"    />,
    color: 'from-gray-500 to-slate-500',
<<<<<<< HEAD
  description: 'Complete portfolio of advanced services'}
 ,}
},
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    description: 'Complete portfolio of advanced services'
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {
    id: 'enterprise',
  name: 'Enterprise Solutions',
    icon: <Building className=\"w-6 h-6\"    />,
    color: 'from-blue-500 to-purple-500',
  description: 'Enterprise-grade AI and IT solutions'}
 ,}
},
  {
    id: 'micro-saas',
  name: 'Micro SAAS',
    icon: <Globe className=\"w-6 h-6\"    />,
    color: 'from-green-500 to-emerald-500',
  description: 'Innovative micro SAAS solutions'}
 ,}
},
  {
    id: 'infrastructure',
  name: 'IT Infrastructure',
    icon: <Shield className=\"w-6 h-6\"    />,
    color: 'from-orange-500 to-red-500',
  description: 'Cutting-edge infrastructure services'}
 ,}
},
  {
    id: 'ai-ml',
  name: 'AI & Machine Learning',
    icon: <Brain className=\"w-6 h-6\"    />,
    color: 'from-purple-500 to-pink-500',
  description: 'Advanced AI and ML platforms'}
 ,}
},
  {
    id: 'quantum',
  name: 'Quantum Computing',
    icon: <Zap className=\"w-6 h-6\"    />,
    color: 'from-violet-500 to-indigo-500',}
  description: 'Quantum computing solutions'}
  }
<<<<<<< HEAD
 ,
}
    id: 'quantum',
  name: 'Quantum Computing',
    icon: <Atom className='w-6 h-6'    />,
    color: 'from-violet-500 to-indigo-500',
  description: 'Quantum computing solutions,
},
=======
<<<<<<< HEAD
];
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
];
    description: 'Quantum computing solutions'}];
    description: 'Quantum computing solutions,
},

<<<<<<< HEAD
const getServiceCategory = (
  if (service.category);
  return service.category;
  return 'Other') => {
  return $3;}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
<<<<<<< HEAD
=======

  website: 'https://ziontechgroup.com',
  website: 'https://ziontechgroup.com',
}

<<<<<<< HEAD
  ...advancedEnterpriseServices2025
  ...innovativeMicroSaasExpansion2025

}
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;

=======
const allServices = [
  ...advancedEnterpriseServices2025;
  ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com',
}
const allServices = [;

const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
    description: 'Complete portfolio of advanced services';
  }
  {id: 'enterprise';
    name: 'Enterprise Solutions';
    icon: <Building className=\"w-6 h-6\"    />;
    color: 'from-blue-500 to-purple-500';}
    description: 'Enterprise-grade AI and IT solutions';}
  }
  {id: 'micro-saas';
    name: 'Micro SAAS';
    icon: <Globe className=\"w-6 h-6\"    />;
    color: 'from-green-500 to-emerald-500';}
    description: 'Innovative micro SAAS solutions';}
  }
  {id: 'infrastructure';
    name: 'IT Infrastructure';
    icon: <Shield className=\"w-6 h-6\"    />;
    color: 'from-orange-500 to-red-500';}
    description: 'Cutting-edge infrastructure services';}
  }
  {id: 'ai-ml';
    name: 'AI & Machine Learning';
    icon: <Brain className=\"w-6 h-6\"    />;
    color: 'from-purple-500 to-pink-500';}
    description: 'Advanced AI and ML platforms';}
  }
  {id: 'quantum';
    name: 'Quantum Computing';
    icon: <Atom className=\"w-6 h-6\"    />;
    color: 'from-violet-500 to-indigo-500';}
    description: 'Quantum computing solutions';}
>>>>>>> origin/chore/fix-lint-and-merge
  }
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
<<<<<<< HEAD

=======
return 'Other';
}const getServicePricing = (if (service.price) return `${service.price) => {
  return $3;}
}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';
>>>>>>> origin/chore/fix-lint-and-merge
}const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/automate-test-improve-and-merge-code-646c;
<<<<<<< HEAD


origin/cursor/automate-test-improve-and-merge-code-2533

const getServicePricing = ("service": any) => {
  }
  if (service.price) return `${service.price}${service.period}`;`}

const getServicePricing = ("service": any) => {if (service.price);
  }
  return `${service.price}${service.period}`;`  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;`
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com';'
}



export default function AdvancedServicesShowcase() {
}

}const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;





}
ursor/automate-test-improve-and-merge-code-646c;
          </p>;
        </div>;
  useEffect(() => {let filtered  = allServices;// Filter by category;
    }
    if (selectedCategory !== 'all') {filtered = filtered.filter((service) => {const category = getServiceCategory(service).toLowerCase()if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial')if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project')if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge')if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml')if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant')return false;'
      })}// Filter by search term;
    if (searchTerm) {filtered = filtered.filter(service =>;
        }
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())if (selectedCategory === 'enterprise')return (category.includes('enterprise') |;'
            category.includes('legal') |;'
            category.includes('financial'))if (selectedCategory === 'micro-saas')return (category.includes('marketing') |;'
            category.includes('social') |;'
            category.includes('customer') |;'
            category.includes('project'))if (selectedCategory === 'infrastructure')return (category.includes('infrastructure') |;'
            category.includes('network') |;'
            category.includes('data center') |;'
            category.includes('edge'))if (selectedCategory === 'ai-ml')return (category.includes('ai') |;'
            category.includes('machine learning') |;'
            category.includes('nlp') |;'
            category.includes('ml'))if (selectedCategory === 'quantum')return (category.includes('quantum') |;'
            category.includes('quantum-resistant'))return false;'
      })}
    if (searchTerm) {filtered = filtered.filter(service =>;
          }
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.description;
            .toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) |;
          getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase()))}setFilteredServices(filtered)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { "service": any }) => (<motion.div;
const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/automate-test-improve-and-merge-code-646c;
  return 'Contact for pricing';'
  return 'Contact for pricing';'
return 'Contact for pricing';}'

const getServiceFeatures = ("service": any) => {if (service.features);
  }
  return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
}

export default function AdvancedServicesShowcase() {const allServices = [
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com','
};




export default function AdvancedServicesShowcase() {
}
const allServices = [;
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;
  ...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com';'
};
const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  "website": '"https"://ziontechgroup && ziontechgroup.com';'
}const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
return [];
}export default function AdvancedServicesShowcase() {const [selectedCategory, setSelectedCategory] = useState('all')const [searchTerm, setSearchTerm] = useState('')const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')const [filteredServices, setFilteredServices]  = useState(allServices)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { "service": any }) => (<motion&& motion.div;'
      initial={{ "opacity": 0, "y": 20 }}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0 && 0.5 }}
      className={`relative bg-white "dark":bg-gray-800 rounded-2xl shadow-lg "hover":shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 "dark":border-gray-700 ${</p>;`        </div>;
}
ursor/automate-test-improve-and-merge-code-646c;
          </p>;
        </div>;
  useEffect(() => {let filtered  = allServices;// Filter by category;
    }
    if (selectedCategory !== 'all') {filtered = filtered.filter((service) => {const category = getServiceCategory(service).toLowerCase()if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial')if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project')if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge')if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml')if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant')return false;'
      })}// Filter by search term;
    if (searchTerm) {filtered = filtered.filter(service =>;
        }
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())if (selectedCategory === 'enterprise')return (category.includes('enterprise') |;'
            category.includes('legal') |;'
            category.includes('financial'))if (selectedCategory === 'micro-saas')return (category.includes('marketing') |;'
            category.includes('social') |;'
            category.includes('customer') |;'
            category.includes('project'))if (selectedCategory === 'infrastructure')return (category.includes('infrastructure') |;'
            category.includes('network') |;'
            category.includes('data center') |;'
            category.includes('edge'))if (selectedCategory === 'ai-ml')return (category.includes('ai') |;'
            category.includes('machine learning') |;'
            category.includes('nlp') |;'
            category.includes('ml'))if (selectedCategory === 'quantum')return (category.includes('quantum') |;'
            category.includes('quantum-resistant'))return false;'
      })}
    if (searchTerm) {filtered = filtered.filter(service =>;
          }
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.description;
            .toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) |;
          getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase()))}setFilteredServices(filtered)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { "service": any }) => (<motion.div;
const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/automate-test-improve-and-merge-code-646c;
  return 'Contact for pricing';'
  return 'Contact for pricing';'
return 'Contact for pricing';}'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
<<<<<<< HEAD
  return 'Contact for pricing'
};

const getServiceFeatures = ("service": any) => {
  }
  if (service.features);
  return service.features;
  if (service.keyFeatures) return service.keyFeatures;



export default function AdvancedServicesShowcase() {

=======
  return 'Contact for pricing';
  return 'Contact for pricing';
return 'Contact for pricing';}const getServiceFeatures = (if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];) => {
  return $3;}
}
}export default function AdvancedServicesShowcase() {const allServices = [;}
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';}
};


const getServicePricing = () => {
  return $3;}
}
  if (service.price) return `${service.price}${service.period}`;
}

const getServicePricing = (if (service.price);) => {
  return $3;}
}
  return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;

const allServices = [
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';
}



export default function AdvancedServicesShowcase() {
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const allServices = [;
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;}
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';}
};
const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';
}const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
<<<<<<< HEAD
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
return [];
}export default function AdvancedServicesShowcase() {const [selectedCategory, setSelectedCategory] = useState('all')const [searchTerm, setSearchTerm] = useState('')const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')const [filteredServices, setFilteredServices]  = useState(allServices)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any }) => (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${</p    />;
        </div>;
ursor/automate-test-improve-and-merge-code-646c;
          </p>;
        </div>;
  useEffect(() => {let filtered  = allServices;// Filter by category;}
    if (selectedCategory !== 'all') {filtered = filtered.filter(service => {const category = getServiceCategory(service).toLowerCase()if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial')if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project')if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge')if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml')if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant')return false;}
      })}// Filter by search term;
    if (searchTerm) {filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())if (selectedCategory === 'enterprise')return (category.includes('enterprise') |;
            category.includes('legal') |;
            category.includes('financial'))if (selectedCategory === 'micro-saas')return (category.includes('marketing') |;
            category.includes('social') |;
            category.includes('customer') |;
            category.includes('project'))if (selectedCategory === 'infrastructure')return (category.includes('infrastructure') |;
            category.includes('network') |;
            category.includes('data center') |;
            category.includes('edge'))if (selectedCategory === 'ai-ml')return (category.includes('ai') |;
            category.includes('machine learning') |;
            category.includes('nlp') |;
            category.includes('ml'))if (selectedCategory === 'quantum')return (category.includes('quantum') |;}
            category.includes('quantum-resistant'))return false;}
      })}
    if (searchTerm) {filtered = filtered.filter(service =>;
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.description;
            .toLowerCase().includes(searchTerm.toLowerCase()) |;}
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) |;}
          getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase()))}setFilteredServices(filtered)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any }) => (<motion.div;
const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/automate-test-improve-and-merge-code-646c;
  return 'Contact for pricing';
  return 'Contact for pricing';
return 'Contact for pricing';}

const getServiceFeatures = (service: any) =    /> {if (service.features);
  return service.features;
  if (service.keyFeatures) return service.keyFeatures;}
  return [];}
}

export default function AdvancedServicesShowcase() {const allServices = [}
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com',}
};
=======
<<<<<<< HEAD
export default function AdvancedServicesShowcase() {
export default function AdvancedServicesShowcase() {
=======



=======
export default function AdvancedServicesShowcase() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {;
    let filtered = allServices;
    // Filter by category;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
<<<<<<< HEAD
        const category = getServiceCategory(service).toLowerCase();
            category && category.includes('enterprise') ||;
            category && category.includes('legal') ||;
            category && category.includes('financial');
          );
        if (selectedCategory === 'micro-saas');
          return (
            category && category.includes('marketing') ||;
            category && category.includes('social') ||;
            category && category.includes('customer') ||;
            category && category.includes('project');
          );
        if (selectedCategory === 'infrastructure');
          return (
            category && category.includes('infrastructure') ||;
            category && category.includes('network') ||;
            category && category.includes('data center') ||;
            category && category.includes('edge');
          );
        if (selectedCategory === 'ai-ml');
          return (
            category && category.includes('ai') ||;
            category && category.includes('machine learning') ||;
            category && category.includes('nlp') ||;
            category && category.includes('ml');
          );
        if (selectedCategory === 'quantum');
          return (
            category && category.includes('quantum') ||;
            category && category.includes('quantum-resistant');
          );
        return false;
      });
    }
    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        service =>;
          service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.description;
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          getServiceCategory(service);
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase());
      );
    }
    setFilteredServices(filtered);  }, [selectedCategory, searchTerm]);    }
    // Filter by search term;
    if (searchTerm) {;
      filtered = filtered && filtered.filter(service =>;
        service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        getServiceCategory(service).toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    }
    setFilteredServices(filtered);
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false
      })
    }
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setFilteredServices(filtered)
=======

        const category = getServiceCategory(service).toLowerCase();


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [selectedCategory, searchTerm]);
  const ServiceCard = ({ service }: { service: any }) => (;
    <motion&& motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${
<<<<<<< HEAD
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
        className={`h-32 bg-gradient-to-br ${service && service.color} flex items-center justify-center`}>;
        <span className='text-4xl'>{service && service.icon}</span>;
      </div>;
      <div className='p-6'>;
        <div className='flex items-start justify-between mb-3'>;
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>;
            {service && service.name}
          </h3>;
        </div>;
        <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-2'>;
          {service && service.tagline}
        </p>;
        <div className='flex items-center justify-between mb-4'>;
          <span className='text-2xl font-bold text-gray-900 dark:text-white'>;
            {getServicePricing(service)}
          </span>;
          <span className='text-sm text-gray-500 dark:text-gray-400'>;
            {service && service.trialDays} day trial;
          </span>;
        </div>;
        <div className='space-y-3 mb-6'>;
          <div className='flex items-center gap-2'>;
            <CheckCircle className='w-4 h-4 text-green-500' />;
            <span className='text-sm text-gray-600 dark:text-gray-400'>;
              {service && service.setupTime} setup;
            </span>;
          </div>;
          <div className='flex items-center gap-2'>;
            <Users className='w-4 h-4 text-blue-500' />;
            <span className='text-sm text-gray-600 dark:text-gray-400'>;
              {service && service.customers ? service && service.customers.toLocaleString() : '1000'}+;
              customers;
            </span>;
          </div>;
          <div className='flex items-center gap-2'>;
            <Star className='w-4 h-4 text-yellow-500' />;
            <span className='text-sm text-gray-600 dark:text-gray-400'>              {service && service.rating}/5 ({service && service.reviews} reviews);
            </span>;
          </div>;
        </div>          Popular;
        </div>;
      )}
      <div className={`h-32 bg-gradient-to-br ${service && service.color} flex items-center justify-center`}>;
        <span className="text-4xl">{service && service.icon}</span>;
      </div>;
      <div className="p-6">;
        <div className="flex items-start justify-between mb-3">;
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">;
            {service && service.name}
          </h3>;
        </div>;
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">;
          {service && service.tagline}
        </p>;
        <div className="flex items-center justify-between mb-4">;
          <span className="text-2xl font-bold text-gray-900 dark:text-white">;
            {getServicePricing(service)}
          </span>;
          <span className="text-sm text-gray-500 dark:text-gray-400">;
            {service && service.trialDays} day trial;
          </span>;
        </div>;
        <div className="space-y-3 mb-6">;
          <div className="flex items-center gap-2">;
            <CheckCircle className="w-4 h-4 text-green-500" />;
            <span className="text-sm text-gray-600 dark:text-gray-400">;
              {service && service.setupTime} setup;
            </span>;
          </div>;
          <div className="flex items-center gap-2">;
            <Users className="w-4 h-4 text-blue-500" />;
            <span className="text-sm text-gray-600 dark:text-gray-400">;
              {service && service.customers ? service && service.customers.toLocaleString() : '1000'}+ customers;
            </span>;
          </div>;
          <div className="flex items-center gap-2">;
            <Star className="w-4 h-4 text-yellow-500" />;
            <span className="text-sm text-gray-600 dark:text-gray-400">;
              {service && service.rating}/5 ({service && service.reviews} reviews);
            </span>;
          </div>;
        </div>;
        <div className='mb-6'>;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
            Key Features:;
          </h4>;
          <div className='space-y-1'>;
            {getServiceFeatures(service);
              .slice(0, 3);
              .map((feature: string, index: number) => (;
                <div key={index} className='flex items-center gap-2'>;
                  <Check className='w-3 h-3 text-green-500' />;
                  <span className='text-sm text-gray-600 dark:text-gray-400'>;
                    {feature}
                  </span>;
                </div>;
              ))}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            {getServiceFeatures(service).length > 3 && (;
              <span className='text-sm text-gray-500 dark:text-gray-400'>                +{getServiceFeatures(service).length - 3} more features        ;
        <div className="mb-6">;
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>;
          <div className="space-y-1">;
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (;
              <div key={index} className="flex items-center gap-2">;
                <Check className="w-3 h-3 text-green-500" />;
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>;
              </div>;
            ))}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339




export default function AdvancedServicesShowcase() {
const allServices = [;
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;}
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';}
};
const allServices = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';
}const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
return [];
}export default function AdvancedServicesShowcase() {const [selectedCategory, setSelectedCategory] = useState('all')const [searchTerm, setSearchTerm] = useState('')const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')const [filteredServices, setFilteredServices]  = useState(allServices)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any }) => (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${</p    />;
        </div>;
ursor/automate-test-improve-and-merge-code-646c;
          </p>;
        </div>;
  useEffect(() => {let filtered  = allServices;// Filter by category;}
    if (selectedCategory !== 'all') {filtered = filtered.filter(service => {const category = getServiceCategory(service).toLowerCase()if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial')if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project')if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge')if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml')if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant')return false;}
      })}// Filter by search term;
    if (searchTerm) {filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())if (selectedCategory === 'enterprise')return (category.includes('enterprise') |;
            category.includes('legal') |;
            category.includes('financial'))if (selectedCategory === 'micro-saas')return (category.includes('marketing') |;
            category.includes('social') |;
            category.includes('customer') |;
            category.includes('project'))if (selectedCategory === 'infrastructure')return (category.includes('infrastructure') |;
            category.includes('network') |;
            category.includes('data center') |;
            category.includes('edge'))if (selectedCategory === 'ai-ml')return (category.includes('ai') |;
            category.includes('machine learning') |;
            category.includes('nlp') |;
            category.includes('ml'))if (selectedCategory === 'quantum')return (category.includes('quantum') |;}
            category.includes('quantum-resistant'))return false;}
      })}
    if (searchTerm) {filtered = filtered.filter(service =>;
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.description;
            .toLowerCase().includes(searchTerm.toLowerCase()) |;}
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) |;}
          getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase()))}setFilteredServices(filtered)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any }) => (<motion.div;
const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/automate-test-improve-and-merge-code-646c;
  return 'Contact for pricing';
  return 'Contact for pricing';
return 'Contact for pricing';}

const getServiceFeatures = (service: any) =    /> {if (service.features);
  return service.features;
  if (service.keyFeatures) return service.keyFeatures;}
  return [];}
}

export default function AdvancedServicesShowcase() {const allServices = [
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com',
const getServicePricing = (
  if (service.price);) => {
  return $3;}
}
  return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  return 'Contact for pricing'
};


const getServiceFeatures = (
  if (service.features);
  return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return []) => {
  return $3;}
}
};


export default function AdvancedServicesShowcase() {
const allServices = [
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;}
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com',}
};


const allServices = [
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup && ziontechgroup.com';
}

const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
return [];
}

export default function AdvancedServicesShowcase() {const [selectedCategory, setSelectedCategory] = useState('all');}
  const [searchTerm, setSearchTerm] = useState('');}
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')const [filteredServices, setFilteredServices]  = useState(allServices)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any,}
}) => (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 ,}
}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 ,}
}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${</p    />;
        </div>;
ursor/automate-test-improve-and-merge-code-646c;
          </p>;
        </div>;
>>>>>>> origin/chore/fix-lint-and-merge
  useEffect(() => {
let filtered  = allServices;// Filter by category;
    if (selectedCategory !== 'all') {filtered = filtered.filter(service => ;
  const category = getServiceCategory(service).toLowerCase()if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial')if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project')if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge')if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml')if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant';}
  return false;}
      })}// Filter by search term;
    if (searchTerm) {filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())if (selectedCategory = == 'enterprise';
  return (category.includes('enterprise') |;
            category.includes('legal') |;
            category.includes('financial'))if (selectedCategory = == 'micro-saas';
  return (category.includes('marketing') |;
            category.includes('social') |;
            category.includes('customer') |;
            category.includes('project'))if (selectedCategory = == 'infrastructure';
  return (category.includes('infrastructure') |;
            category.includes('network') |;
            category.includes('data center') |;
            category.includes('edge'))if (selectedCategory = == 'ai-ml';
  return (category.includes('ai') |;
            category.includes('machine learning') |;
            category.includes('nlp') |;
            category.includes('ml'))if (selectedCategory = == 'quantum';
  return (category.includes('quantum') |;}
            category.includes('quantum-resistant'))return false;}
      })}
    if (searchTerm) {filtered = filtered.filter(service =>;
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.description;
            .toLowerCase().includes(searchTerm.toLowerCase()) |;}
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) |;}
          getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase()))}setFilteredServices(filtered)}, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any }) => (<motion.div}


export default function AdvancedServicesShowcase() {

  const [selectedCategory, setSelectedCategory] = useState('all');

const [searchTerm, setSearchTerm] = useState('');

const [viewMode, setViewMode] = useState<'grid' | 'list'    />('grid');

const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {

    let filtered = allServices;

    // Filter by category;
if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
       ;
  const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory = == 'enterprise');
  return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory = == 'micro-saas');
  return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory = == 'infrastructure');
  return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory = == 'ai-ml');
  return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory = == 'quantum');
  return category.includes('quantum') || category.includes('quantum-resistant');}
        return false;}
      });
    }

    // Filter by search term;
if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())}
      );}
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

<<<<<<< HEAD

          Popular
        </div>
      )}
      

=======
const ServiceCard = ({ service }: { service: any,}
}) => (
    <motion.div;
initial={{ opacity: 0, y: 20 ,}
}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';}
      }`}
        />;
      transition={{ duration: 0.5 ,}
}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';}
      }`}>

      {service.popular && (<div className=\"absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1\"    />;
          <Star className=\"w-4 h-4\"    />;
          Popular;}
        </div>;}
      )}<div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}    />;
      )}<div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}    />

        <span className=\"text-4xl\"    />{service.icon}</span>;
      </div>;
      <div className=\"p-6\"    />;
        <div className=\"flex items-start justify-between mb-3\"    />;
          <h3 className=\"text-xl font-bold text-gray-900 dark:text-white mb-2\"    />;
    >
      {service.popular && (
        <div className=\"absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1\"    />
          <Star className=\"w-4 h-4\"    />
          Popular}
        </div>}
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}    />
        <span className=\"text-4xl\"    />{service.icon}</span>
      </div>
      
      <div className=\"p-6\"    />
        <div className=\"flex items-start justify-between mb-3\"    />
          <h3 className=\"text-xl font-bold text-gray-900 dark:text-white mb-2\"    />
            {service.name}
          <h3 className=\"text-xl font-bold text-gray-900 dark: text-white mb-2\"    />
            {service.nam,}
}
          </h3>;
        </div>;
        <p className=\"text-gray-600 dark:text-gray-300 mb-4 line-clamp-2\"    />;
          {service.tagline}
        </p>;
        <div className=\"flex items-center justify-between mb-4\"    />;
          <span className=\"text-2xl font-bold text-gray-900 dark:text-white\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
            {getServicePricing(service)}
          </span>;
          <span className=\"text-sm text-gray-500 dark:text-gray-400\"    />;
            {service.trialDays} day trial;
          </span>;
        </div>;
        <div className=\"space-y-3 mb-6\"    />;
          <div className=\"flex items-center gap-2\"    />;
            <CheckCircle className=\"w-4 h-4 text-green-500\"    />;
            <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
              {service.setupTime} setup;
            </span>;
          </div>;
          <div className=\"flex items-center gap-2\"    />;
            <Users className=\"w-4 h-4 text-blue-500\"    />;
            <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers;
            </span>;
          </div>;
          <div className=\"flex items-center gap-2\"    />;
            <Star className=\"w-4 h-4 text-yellow-500\"    />;
            <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
<div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1'    />;
          <Star className='w-4 h-4'    />;
          Popular;
        </div>;
      )}
      <div;
        className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}
          />;
        className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>

        <span className='text-4xl'    />{service.icon}</span>;
      </div>;
      <div className='p-6'    />;
        <div className='flex items-start justify-between mb-3'    />;
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'    />;
            {service.name}
          </h3>;
        </div>;
        <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-2'    />;
          {service.tagline}
        </p>;
        <div className='flex items-center justify-between mb-4'    />;
          <span className='text-2xl font-bold text-gray-900 dark:text-white'    />;
            {getServicePricing(service)}
          </span>;
          <span className='text-sm text-gray-500 dark:text-gray-400'    />;
            {service.trialDays} day trial;
          </span>;
        </div>;
        <div className='space-y-3 mb-6'    />;
          <div className='flex items-center gap-2'    />;
            <CheckCircle className='w-4 h-4 text-green-500'    />;
            <span className='text-sm text-gray-600 dark:text-gray-400'    />;
              {service.setupTime} setup;
            </span>;
          </div>;
          <div className='flex items-center gap-2'    />;
            <Users className='w-4 h-4 text-blue-500'    />;
            <span className='text-sm text-gray-600 dark:text-gray-400'    />;
              {service.customers ? service.customers.toLocaleString() : '1000'}+;
              customers;
            </span>;
          </div>;
          <div className='flex items-center gap-2'    />;
            <Star className='w-4 h-4 text-yellow-500'    />;
            <span className='text-sm text-gray-600 dark:text-gray-400'    />;
              {service.rating}/5 ({service.reviews} reviews)</span>;
          </div>;
        </div>;
        <div className=\"mb-6\"    />;
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Key Features:</h4>;
          <div className=\"space-y-1\"    />;
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (<div key={index} className=\"flex items-center gap-2\"    />;
                <Check className=\"w-3 h-3 text-green-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />{feature}</span>;
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (<div key={inde,}
} className=\"flex items-center gap-2\"    />;
                <Check className=\"w-3 h-3 text-green-500\"    />;
                <span className=\"text-sm text-gray-600 dark: text-gray-400\"    />{featur,}
}</span>;
              </div>;
            ))}
<<<<<<< HEAD
            {getServiceFeatures(service).length > 3 && (<span className=\"text-sm text-gray-500 dark:text-gray-400\"    />;
<div className='mb-6'    />;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
            Key Features:;
          </h4>;}
          <div className='space-y-1'    />;}
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (<div key={index} className='flex items-center gap-2'    />;
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (<div key={inde,}
} className='flex items-center gap-2'    />;
                  <Check className='w-3 h-3 text-green-500'    />;
                  <span className='text-sm text-gray-600 dark:text-gray-400'    />;
                    {feature}
                  </span>;
                </div>;
              ))}
            {getServiceFeatures(service).length > 3 && (<span className='text-sm text-gray-500 dark:text-gray-400'    />;}
                +{getServiceFeatures(service).length - 3} more features;
              </span>;
            )}
          </div>;
        </div>;
        <div className=\"mb-6\"    />;
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />ROI & Benefits:</h4>;
          <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
            {service.roi}
          </p>;
        </div>;
<div className='mb-6'    />;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
            ROI & Benefits:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'    />;
            {service.roi}
          </p>;
        </div>;
  }, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any }) => (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 }}
  }, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { service: any,}
}) =    /> (<motion&& motion.div;
      initial={{ opacity: 0, y: 20 ,}
}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 ,}
}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${</p    />;
        </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
        <div className=\"mb-6\"    />;
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Market Position:</h4>;}
          <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />;}
            {service.marketPosition}
          </p>;
        </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
        <div className=\"flex items-center justify-between\"    />;
          <a;
            href={service.link}
            className=\'inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\';
              />;
            className=\"inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\">

            Learn More;
            <ArrowRight className=\"w-4 h-4\"    />;
          </a>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
          <a;
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className=\'inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
ursor/fix-netlify-build-and-merge-to-main-9571;
          <a;
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            href={`mailto: ${contactInfo.email}?subject=Inquiry about ${service.name},
}
            className=\'inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
ursor/fix-netlify-build-and-merge-to-main-9571;
          <a;
            href={`mailto: ${contactInfo.email}?subject=Inquiry about ${service.name},
}
            className=\'inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
        <div className='mb-6'    />;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
            Market Position:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'    />;
            {service.marketPosition}
          </p>;
        </div>;
        <div className='flex items-center justify-between'    />;
          <a;
            href={service.link}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105';
              />;
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>

            Learn More;
            <ArrowRight className='w-4 h-4'    />;
          </a>;
          <a;
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300';
              />;
            href={`mailto: ${contactInfo.email}?subject=Inquiry about ${service.name},
}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>

            Contact;
          </a>;
        </div>;
      </div>;
    </motion.div>;
<<<<<<< HEAD
  )const ServiceList = ({ service }: { "service": any }) => (<motion.div;
  )const ServiceList = ({ service }: { "service": any
}) => (<motion.div;
          </span>

            {service.trialDays} day trial
          </span>
        </div>
        

=======
  )const ServiceList = ({ service }: { service: any }) => (<motion.div;
  )const ServiceList = ({ service }: { service: any,}
}) =    /> (<motion.div;
          </span    />
          <span className=\"text-sm text-gray-500 dark: text-gray-400\"    />
            {service.trialDays} day trial;
          </span>
        </div>
        
        <div className=\"space-y-3 mb-6\"    />
          <div className=\"flex items-center gap-2\"    />
            <CheckCircle className=\"w-4 h-4 text-green-500\"    />
            <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />
              {service.setupTime} setup;
            </span>
          </div>
          <div className=\"flex items-center gap-2\"    />
            <Users className=\"w-4 h-4 text-blue-500\"    />
            <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers;
            </span>
          </div>
          <div className=\"flex items-center gap-2\"    />
            <Star className=\"w-4 h-4 text-yellow-500\"    />
            <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />
              {service.rating}/5 ({service.review,}
} reviews)
>>>>>>> origin/chore/fix-lint-and-merge
            </span>
          </div>
        </div>
        
<<<<<<< HEAD

                +{getServiceFeatures(service).length - 3} more features
=======
        <div className=\"mb-6\"    />
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Key Features:</h4>
          <div className=\"space-y-1\"    />
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (}
              <div key={index} className=\"flex items-center gap-2\"    />
                <Check className=\"w-3 h-3 text-green-500\"    />
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />{feature}</span>
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (}
              <span className=\"text-sm text-gray-500 dark:text-gray-400\"    />}
                +{getServiceFeatures(service).length - 3} more features;
>>>>>>> origin/chore/fix-lint-and-merge
              </span>
            )}
          </div>
        </div>
        
        <div className=\"mb-6\"    />
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />ROI & Benefits:</h4>
          <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />
            {service.roi}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{getServiceFeatures(service).length - 3} more features
              </span>
<<<<<<< HEAD
            )}
=======

            )}

        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.roi}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </p>
        </div>
        
<<<<<<< HEAD
        <div className="mb-6">"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">Market "Position":</h4>"
          <p className="text-sm text-gray-600 "dark":text-gray-400">"
=======
        <div className=\"mb-6\"    />
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Market Position:</h4>
          <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />
>>>>>>> origin/chore/fix-lint-and-merge
            {service.marketPosition}
          </p>
        </div>
        
<<<<<<< HEAD
        <div className="flex items-center justify-between">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />"
          </a>
          
          <a
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            Contact
=======
        
        <div className=\"flex items-center justify-between\"    />
          <a;
href={service.link}
            className=\"inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\"
              />
            Learn More;
            <ArrowRight className=\"w-4 h-4\"    />
          </a>
          
          
          <a;
href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name},
}
            className=\"inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\"
              />
            Contact;
>>>>>>> origin/chore/fix-lint-and-merge
          </a>
        </div>
      </div>
    </motion.div>
  );

<<<<<<< HEAD
  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
<<<<<<< HEAD
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
=======
          </div>;
        </div>;
        <div className='mb-6'>;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
            ROI & Benefits:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            {service && service.roi}
          </p>;
        </div>;
        <div className='mb-6'>;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
            Market Position:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            {service && service.marketPosition}
          </p>;
        </div>;
        <div className='flex items-center justify-between'>;
          <a
            href={service && service.link}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>;
            Learn More;
            <ArrowRight className='w-4 h-4' />;
          </a>;
          <a
            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>            {service && service.roi}
          </p>;
        </div>;
        <div className="mb-6">;
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>;
          <p className="text-sm text-gray-600 dark:text-gray-400">;
            {service && service.marketPosition}
          </p>;
        </div>;
        <div className="flex items-center justify-between">;
          <a
            href={service && service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
            Learn More;
            <ArrowRight className="w-4 h-4" />;
          </a>;
          <a
            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">;
import React, { useState, useEffect } from './react';
import { motion, AnimatePresence  } from './framer-motion';
  Search,
  Grid,
  List,
  Star,
  CheckCircle,
  ArrowRight,
  Check,
  Brain,
  Atom,
  Shield,
  Building,
  Globe,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
;
// Mock service data;
const advancedEnterpriseServices2025 = [;
  {
    id: "enterprise - 1",
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI implementation for large enterprises",
    category: "enterprise",
    price: "$50, 000+",
    rating: 4.9,
    tags: ["AI", "Machine Learning", "Enterprise"],
    color: "from - blue - 500 to - purple - 500",
    icon: "🤖",
  },
];
;
const innovativeMicroSaasExpansion2025 = [;
  {
    id: "micro - 1",
    title: "Micro SaaS Platform",
    description: "Lightweight SaaS solutions for small businesses",
    category: "micro - saas",
    price: "$99 / month",
    rating: 4.7,
    tags: ["SaaS", "Micro Services", "Cloud"],
    color: "from - green - 500 to - teal - 500",
    icon: "⚡",
  },
];
;
const cuttingEdgeITInfrastructureServices = [;
  {
    id: "infra - 1",
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure solutions",
    category: "infrastructure",
    price: "$5, 000 / month",
    rating: 4.8,
    tags: ["Cloud", "Infrastructure", "DevOps"],
    color: "from - orange - 500 to - red - 500",
    icon: "☁️",
  },
];// Import our new service data;
import { advancedEnterpriseServices2025 } from '../data / 2025 - advanced - enterprise - services - expansion';
import { innovativeMicroSaasExpansion2025 } from '../data / 2025 - innovative - micro - saas - expansion';
import { cuttingEdgeITInfrastructureServices } from '../data / 2025 - cutting - edge - it - infrastructure';
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const all_services = [;
  ...advancedEnterpriseServices2025,
  ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices, ];  website: 'https://ziontechgroup.com';
}
;
const all_services = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
const categories = [;
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className='w - 6 h - 6' />,
    color: 'from - gray - 500 to - slate - 500',
    description: 'Complete portfolio of advanced services',    color: 'from - gray - 500 to - slate - 500',
    description: 'Complete portfolio of advanced services';
  }
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className="w - 6 h - 6" />,
    color: 'from - blue - 500 to - purple - 500',
    description: 'Enterprise - grade AI and IT solutions';
  }
  {
    id: 'micro - saas',
    name: 'Micro SAAS',
    icon: <Globe className="w - 6 h - 6" />,
    color: 'from - green - 500 to - emerald - 500',
    description: 'Innovative micro SAAS solutions';
  }
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className="w - 6 h - 6" />,
    color: 'from - orange - 500 to - red - 500',
    description: 'Cutting - edge infrastructure services';
  }
  {
    id: 'ai - ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w - 6 h - 6" />,
    color: 'from - purple - 500 to - pink - 500',
    description: 'Advanced AI and ML platforms';
  }
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className="w - 6 h - 6" />,
    color: 'from - violet - 500 to - indigo - 500',
    description: 'Quantum computing solutions',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className='w - 6 h - 6' />,
    color: 'from - blue - 500 to - purple - 500',
    description: 'Enterprise - grade AI and IT solutions',
  },
  {
    id: 'micro - saas',
    name: 'Micro SAAS',
    icon: <Globe className='w - 6 h - 6' />,
    color: 'from - green - 500 to - emerald - 500',
    description: 'Innovative micro SAAS solutions',
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className='w - 6 h - 6' />,
    color: 'from - orange - 500 to - red - 500',
    description: 'Cutting - edge infrastructure services',
  },
  {
    id: 'ai - ml',
    name: 'AI & Machine Learning',
    icon: <Brain className='w - 6 h - 6' />,
    color: 'from - purple - 500 to - pink - 500',
    description: 'Advanced AI and ML platforms',
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className='w - 6 h - 6' />,
    color: 'from - violet - 500 to - indigo - 500',
    description: 'Quantum computing solutions',
  }, ];
;
const getServiceCategory = (service: any) =>: any {
  // Check condition
if (return service.category) {
  $2
}
  return 'Other';}    description: 'Quantum computing solutions';
  }
];
;
const getServiceCategory = (service: any) =>: any {
  // Check condition
if (return service.category) {
  $2
}
  return 'Other';  return 'Other';
}
;
const getServicePricing = (service: any) =>: any {
  // Check condition
if (return `${service.price}${service.period}`) {
  $2
}
  // Check condition
if (return service.pricing.starter) {
  $2
}
  // Check condition
if (return `$${service.pricing.monthly}/month`) {
  $2
}
  return 'Contact for pricing';}  return 'Contact for pricing';
}
;
const getServiceFeatures = (service: any) =>: any {
  // Check condition
if (return service.features) {
  $2
}
  // Check condition
if (return service.key_features) {
  $2
}
  return [];
}  return [];
}
;
  const [selected_category, setSelectedCategory] = useState ('all');
  const [search_term, setSearchTerm] = useState ('');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtered_services, setFilteredServices] = useState (all_services);
;
  useEffect (() => {
    let filtered = all_services;
;
    // Filter by category;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        const category = getServiceCategory (service).toLowerCase ();
        // Check condition
if (
          return () {
  $2
}
            category.includes ('enterprise') ||;
            category.includes ('legal') ||;
            category.includes ('financial'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('marketing') ||;
            category.includes ('social') ||;
            category.includes ('customer') ||;
            category.includes ('project'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('infrastructure') ||;
            category.includes ('network') ||;
            category.includes ('data center') ||;
            category.includes ('edge'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('ai') ||;
            category.includes ('machine learning') ||;
            category.includes ('nlp') ||;
            category.includes ('ml'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('quantum') ||;
            category.includes ('quantum - resistant'));
        return false;
      });
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service =>;
          service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          getServiceCategory (service);
            .toLowerCase ();
            .includes (search_term.toLowerCase ()));
    }
    setFilteredServices (filtered);  }, [selected_category, search_term]);    }
    // Filter by search term;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service =>;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        getServiceCategory (service).toLowerCase ().includes (search_term.toLowerCase ()));
    }
    setFilteredServices (filtered);
  }, [selected_category, search_term]);
;
  const ServiceCard = ({ service }: { service: any }) =>: any (
    <motion.div;
      initial={{ opacity: 0, coordinate_y: 20 }}
      animate={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
<<<<<<< HEAD
=======
    >;
      {service.popular && (
        <div className='absolute top - 4 right - 4 bg - blue - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold flex items - center gap - 1'>;
          <Star className='w - 4 h - 4' />;
          Popular;
        </div>)}
      <div;
        className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}
      >;
        <span className='text - 4xl'>{service.icon}</span>;
      </div>;
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 dark:text - white mb - 2'>;
            {service.name}
          </h3>;
        </div>;
        <p className='text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2'>;
          {service.tagline}
        </p>;
        <div className='flex items - center justify - between mb - 4'>;
          <span className='text - 2xl font - bold text - gray - 900 dark:text - white'>;
            {getServicePricing (service)}
          </span>;
          <span className='text - sm text - gray - 500 dark:text - gray - 400'>;
            {service.trial_days} day trial;
          </span>;
        </div>;
        <div className='space - y-3 mb - 6'>;
          <div className='flex items - center gap - 2'>;
            <CheckCircle className='w - 4 h - 4 text - green - 500' />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
              {service.setup_time} setup;
            </span>;
          </div>;
          <div className='flex items - center gap - 2'>;
            <Users className='w - 4 h - 4 text - blue - 500' />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
              {service.customers ? service.customers.toLocaleString () : '1000'}+;
              customers;
            </span>;
          </div>;
          <div className='flex items - center gap - 2'>;
            <Star className='w - 4 h - 4 text - yellow - 500' />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'>              {service.rating}/5 ({service.reviews} reviews);
            </span>;
          </div>;
        </div>          Popular;
        </div>)}
      <div className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}>;
        <span className="text - 4xl">{service.icon}</span>;
      </div>;
      <div className="p - 6">;
        <div className="flex items - start justify - between mb - 3">;
          <h3 className="text - xl font - bold text - gray - 900 dark:text - white mb - 2">;
            {service.name}
          </h3>;
        </div>;
        <p className="text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2">;
          {service.tagline}
        </p>;
        <div className="flex items - center justify - between mb - 4">;
          <span className="text - 2xl font - bold text - gray - 900 dark:text - white">;
            {getServicePricing (service)}
          </span>;
          <span className="text - sm text - gray - 500 dark:text - gray - 400">;
            {service.trial_days} day trial;
          </span>;
        </div>;
        <div className="space - y-3 mb - 6">;
          <div className="flex items - center gap - 2">;
            <CheckCircle className="w - 4 h - 4 text - green - 500" />;
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;
              {service.setup_time} setup;
            </span>;
          </div>;
          <div className="flex items - center gap - 2">;
            <Users className="w - 4 h - 4 text - blue - 500" />;
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;
              {service.customers ? service.customers.toLocaleString () : '1000'}+ customers;
            </span>;
          </div>;
          <div className="flex items - center gap - 2">;
            <Star className="w - 4 h - 4 text - yellow - 500" />;
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;
              {service.rating}/5 ({service.reviews} reviews);
            </span>;
          </div>;
        </div>;
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
            Key Features:;
          </h4>;
          <div className='space - y-1'>;
            {getServiceFeatures (service);
              .slice (0, 3);
              .map ((feature: string, index: number) => (
                <div key={index} className='flex items - center gap - 2'>;
                  <Check className='w - 3 h - 3 text - green - 500' />;
                  <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
                    {feature}
                  </span>;
                </div>))}
            {getServiceFeatures (service).length > 3 && (
              <span className='text - sm text - gray - 500 dark:text - gray - 400'>                +{getServiceFeatures (service).length - 3} more features;
        <div className="mb - 6">;
          <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Key Features:</h4>;
          <div className="space - y-1">;
            {getServiceFeatures (service).slice (0, 3).map ((feature: string, index: number) => (
              <div key={index} className="flex items - center gap - 2">;
                <Check className="w - 3 h - 3 text - green - 500" />;
                <span className="text - sm text - gray - 600 dark:text - gray - 400">{feature}</span>;
              </div>))}
            {getServiceFeatures (service).length > 3 && (
              <span className="text - sm text - gray - 500 dark:text - gray - 400">;
              </span>)}
          </div>;
        </div>;
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
            ROI & Benefits:;
          </h4>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            {service.roi}
          </p>;
        </div>;
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
            Market Position:;
          </h4>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            {service.market_position}
          </p>;
        </div>;
        <div className='flex items - center justify - between'>;
          <a;
            href={service.link}
            className='inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
          >;
            Learn More;
            <ArrowRight className='w - 4 h - 4' />;
          </a>;
          <a;
            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
            className='inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300'          >            {service.roi}
          </p>;
        </div>;
        <div className="mb - 6">;
          <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Market Position:</h4>;
          <p className="text - sm text - gray - 600 dark:text - gray - 400">;
            {service.market_position}
          </p>;
        </div>;
        <div className="flex items - center justify - between">;
          <a;
            href={service.link}
            className="inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
          >;
            Learn More;
            <ArrowRight className="w - 4 h - 4" />;
          </a>;
          <a;
            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
            className="inline - flex items - center gap - 2 bg - gray - 100 dark: bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300";
          >;
            Contact;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    >
      <div className="p-6">
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <span className="text-3xl">{service.icon}</span>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.name}
                  {service.popular && (
                    <span className="ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {service.tagline}
                </p>
              </div>
<<<<<<< HEAD
              
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getServicePricing(service)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {service.trialDays} day trial
<<<<<<< HEAD
=======
const ServiceList = ({ service }: { service: any,}
}) => (
    <motion.div;
initial={{ opacity: 0, x: -20 ,}
}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';}
      }`}
        />;
      <div className=\"p-6\"    />;
        <div className=\"flex items-start gap-6\"    />;
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}    />;
      transition={{ duration: 0.5 ,}
}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';}
      }`}>
=======
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
            className={`w-20 h-20 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>;
            <span className='text-3xl'>{service && service.icon}</span>;
          </div>;
          <div className='flex-1'>;
            <div className='flex items-start justify-between mb-3'>;
              <div>;
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>;
                  {service && service.name}
                  {service && service.popular && (;
                    <span className='ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>                      Popular;
                    </span>;
                  )}
                </h3>;
                <p className='text-gray-600 dark:text-gray-300 mb-3'>          </div>;
          <div className="flex-1">;
            <div className="flex items-start justify-between mb-3">;
              <div>;
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">;
                  {service && service.name}
                  {service && service.popular && (;
                    <span className="ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">;
                      Popular;
                    </span>;
                  )}
                </h3>;
                <p className='text-gray-600 dark:text-gray-300 mb-3'>;
                  {service && service.tagline}
                </p>;
              </div>;
              <div className='text-right'>;
                <div className='text-2xl font-bold text-gray-900 dark:text-white'>;
                  {getServicePricing(service)}
                </div>;
                <div className='text-sm text-gray-500 dark:text-gray-400'>                  {service && service.trialDays} day trial;
                </div>;
              </div>;
            </div>                  {service && service.tagline}
                </p>;
              </div>;
              <div className="text-right">;
                <div className="text-2xl font-bold text-gray-900 dark:text-white">;
                  {getServicePricing(service)}
                </div>;
                <div className="text-sm text-gray-500 dark:text-gray-400">;
                  {service && service.trialDays} day trial;
                </div>;
              </div>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>;
              <div className='flex items-center gap-2'>;
                <CheckCircle className='w-4 h-4 text-green-500' />;
                <span className='text-sm text-gray-600 dark:text-gray-400'>;
                  {service && service.setupTime} setup;
                </span>;
              </div>;
              <div className='flex items-center gap-2'>;
                <Users className='w-4 h-4 text-blue-500' />;
                <span className='text-sm text-gray-600 dark:text-gray-400'>;
                  {service && service.customers;
                    ? service && service.customers.toLocaleString();
                    : '1000'}
                  + customers;
                </span>;
              </div>;
              <div className='flex items-center gap-2'>;
                <Star className='w-4 h-4 text-yellow-500' />;
                <span className='text-sm text-gray-600 dark:text-gray-400'>                  {service && service.rating}/5 ({service && service.reviews} reviews);
                </span>;
              </div>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>                  {service && service.setupTime} setup;
                </span>;
              </div>;
              <div className="flex items-center gap-2">;
                <Users className="w-4 h-4 text-blue-500" />;
                <span className="text-sm text-gray-600 dark:text-gray-400">;
                  {service && service.customers ? service && service.customers.toLocaleString() : '1000'}+ customers;
                </span>;
              </div>;
              <div className="flex items-center gap-2">;
                <Star className="w-4 h-4 text-yellow-500" />;
                <span className="text-sm text-gray-600 dark:text-gray-400">;
                  {service && service.rating}/5 ({service && service.reviews} reviews);
                </span>;
              </div>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>;
              <div>;
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
                  Key Features:;
                </h4>;
                <div className='space-y-1'>;
                  {getServiceFeatures(service);
                    .slice(0, 4);
                    .map((feature: string, index: number) => (;
                      <div key={index} className='flex items-center gap-2'>;
                        <Check className='w-3 h-3 text-green-500' />;
                        <span className='text-sm text-gray-600 dark:text-gray-400'>;
                          {feature}
                        </span>;
                      </div>;
                    ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {service.roi}
                </p>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.marketPosition}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
                </div>;
              </div>;
              <div>;
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
                  ROI & Benefits:;
                </h4>;
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>;
                  {service && service.roi}
                </p>;
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
                  Market Position:;
                </h4>;
                <p className='text-sm text-gray-600 dark:text-gray-400'>                  {service && service.marketPosition}
                </p>;
              </div>;
            </div>;
            <div className='flex items-center gap-4'>              <div>;
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>;
                <div className="space-y-1">;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (;
                    <div key={index} className="flex items-center gap-2">;
                      <Check className="w-3 h-3 text-green-500" />;
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>;
                    </div>;
                  ))}
                </div>;
              </div>;
              <div>;
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>;
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">;
                  {service && service.roi}
                </p>;
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>;
                <p className="text-sm text-gray-600 dark:text-gray-400">;
                  {service && service.marketPosition}
                </p>;
              </div>;
            </div>;
            <div className='flex items-center gap-4'>;
              <a
                href={service && service.link}
                className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>;
                Learn More;
                <ArrowRight className='w-4 h-4' />;
              </a>;
              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
                className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>              <a
                href={service && service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                Learn More;
                <ArrowRight className="w-4 h-4" />;
              </a>;
              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
                className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">;
    </motion.div>),
  const ServiceList = ({ service }: { service: any }) =>: any (
    <motion.div;
      initial={{ opacity: 0, coordinate_x: -20 }}
      animate={{ opacity: 1, coordinate_x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg - white dark:bg - gray - 800 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 border border - gray - 200 dark:border - gray - 700 ${
        service.popular ? 'ring - 2 ring - blue - 500' : '';
      }`}
    >;
      <div className='p - 6'>;
        <div className='flex items - start gap - 6'>;
          <div;
            className={`w - 20 h - 20 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center flex - shrink - 0`}
          >;
            <span className='text - 3xl'>{service.icon}</span>;
          </div>;
          <div className='flex - 1'>;
            <div className='flex items - start justify - between mb - 3'>;
              <div>;
                <h3 className='text - xl font - bold text - gray - 900 dark:text - white mb - 2'>;
                  {service.name}
                  {service.popular && (
                    <span className='ml - 3 bg - blue - 500 text - white px - 2 py - 1 rounded - full text - xs font - semibold'>                      Popular;
                    </span>)}
                </h3>;
                <p className='text - gray - 600 dark:text - gray - 300 mb - 3'>          </div>;
          <div className="flex - 1">;
            <div className="flex items - start justify - between mb - 3">;
              <div>;
                <h3 className="text - xl font - bold text - gray - 900 dark:text - white mb - 2">;
                  {service.name}
                  {service.popular && (
                    <span className="ml - 3 bg - blue - 500 text - white px - 2 py - 1 rounded - full text - xs font - semibold">;
                      Popular;
                    </span>)}
                </h3>;
                <p className='text - gray - 600 dark:text - gray - 300 mb - 3'>;
                  {service.tagline}
                </p>;
              </div>;
              <div className='text - right'>;
                <div className='text - 2xl font - bold text - gray - 900 dark:text - white'>;
                  {getServicePricing (service)}
                </div>;
                <div className='text - sm text - gray - 500 dark:text - gray - 400'>                  {service.trial_days} day trial;
                </div>;
              </div>;
            </div>                  {service.tagline}
                </p>;
              </div>;
              <div className="text - right">;
                <div className="text - 2xl font - bold text - gray - 900 dark:text - white">;
                  {getServicePricing (service)}
                </div>;
                <div className="text - sm text - gray - 500 dark:text - gray - 400">;
                  {service.trial_days} day trial;
                </div>;
              </div>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4 mb - 4'>;
              <div className='flex items - center gap - 2'>;
                <CheckCircle className='w - 4 h - 4 text - green - 500' />;
                <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
                  {service.setup_time} setup;
                </span>;
              </div>;
              <div className='flex items - center gap - 2'>;
                <Users className='w - 4 h - 4 text - blue - 500' />;
                <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
                  {service.customers;
                    ? service.customers.toLocaleString ();
                    : '1000'}
                  + customers;
                </span>;
              </div>;
              <div className='flex items - center gap - 2'>;
                <Star className='w - 4 h - 4 text - yellow - 500' />;
                <span className='text - sm text - gray - 600 dark:text - gray - 400'>                  {service.rating}/5 ({service.reviews} reviews);
                </span>;
              </div>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6 mb - 4'>                  {service.setup_time} setup;
                </span>;
              </div>;
              <div className="flex items - center gap - 2">;
                <Users className="w - 4 h - 4 text - blue - 500" />;
                <span className="text - sm text - gray - 600 dark:text - gray - 400">;
                  {service.customers ? service.customers.toLocaleString () : '1000'}+ customers;
                </span>;
              </div>;
              <div className="flex items - center gap - 2">;
                <Star className="w - 4 h - 4 text - yellow - 500" />;
                <span className="text - sm text - gray - 600 dark:text - gray - 400">;
                  {service.rating}/5 ({service.reviews} reviews);
                </span>;
              </div>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6 mb - 4'>;
              <div>;
                <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
                  Key Features:;
                </h4>;
                <div className='space - y-1'>;
                  {getServiceFeatures (service);
                    .slice (0, 4);
                    .map ((feature: string, index: number) => (
                      <div key={index} className='flex items - center gap - 2'>;
                        <Check className='w - 3 h - 3 text - green - 500' />;
                        <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
                          {feature}
                        </span>;
                      </div>))}
                </div>;
              </div>;
              <div>;
                <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
                  ROI & Benefits:;
                </h4>;
                <p className='text - sm text - gray - 600 dark:text - gray - 400 mb - 3'>;
                  {service.roi}
                </p>;
                <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
                  Market Position:;
                </h4>;
                <p className='text - sm text - gray - 600 dark:text - gray - 400'>                  {service.market_position}
                </p>;
              </div>;
            </div>;
            <div className='flex items - center gap - 4'>              <div>;
                <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Key Features:</h4>;
                <div className="space - y-1">;
                  {getServiceFeatures (service).slice (0, 4).map ((feature: string, index: number) => (
                    <div key={index} className="flex items - center gap - 2">;
                      <Check className="w - 3 h - 3 text - green - 500" />;
                      <span className="text - sm text - gray - 600 dark:text - gray - 400">{feature}</span>;
                    </div>))}
                </div>;
              </div>;
              <div>;
                <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">ROI & Benefits:</h4>;
                <p className="text - sm text - gray - 600 dark:text - gray - 400 mb - 3">;
                  {service.roi}
                </p>;
                <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Market Position:</h4>;
                <p className="text - sm text - gray - 600 dark:text - gray - 400">;
                  {service.market_position}
                </p>;
              </div>;
            </div>;
            <div className='flex items - center gap - 4'>;
              <a;
                href={service.link}
                className='inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
              >;
                Learn More;
                <ArrowRight className='w - 4 h - 4' />;
              </a>;
              <a;
                href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
                className='inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300'              >              <a;
                href={service.link}
                className="inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
              >;
                Learn More;
                <ArrowRight className="w - 4 h - 4" />;
              </a>;
              <a;
                href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
                className="inline - flex items - center gap - 2 bg - gray - 100 dark: bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300";
              >;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      <div className=\"p-6\"    />;
        <div className=\"flex items-start gap-6\"    />;
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}    />

            <span className=\"text-3xl\"    />{service.icon}</span>;
          </div>;
          <div className=\"flex-1\"    />;
            <div className=\"flex items-start justify-between mb-3\"    />;
              <div    />;
                <h3 className=\"text-xl font-bold text-gray-900 dark:text-white mb-2\"    />;
                  {service.name}
                  {service.popular && (<span className=\"ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold\"    />;
<div className='p-6'    />;
        <div className='flex items-start gap-6'    />;}
          <div;}
            className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}
              />;
            className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>

            <span className='text-3xl'    />{service.icon}</span>;
          </div>;
          <div className='flex-1'    />;
            <div className='flex items-start justify-between mb-3'    />;
              <div    />;
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'    />;
                  {service.name}
                  {service.popular && (<span className='ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold'    />;
                      Popular;}
                    </span>;}
                  )}
                </h3>;
                <p className=\"text-gray-600 dark:text-gray-300 mb-3\"    />;
    >
      <div className=\"p-6\"    />
        <div className=\"flex items-start gap-6\"    />
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}    />
            <span className=\"text-3xl\"    />{service.icon}</span>
          </div>
          
          <div className=\"flex-1\"    />
            <div className=\"flex items-start justify-between mb-3\"    />
              <div    />
                <h3 className=\"text-xl font-bold text-gray-900 dark: text-white mb-2\"    />
                  {service.name}
                  {service.popular && (
                    <span className=\"ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold\"    />
                      Popular}
                    </span>}
                  )}
                </h3>
                <p className=\"text-gray-600 dark:text-gray-300 mb-3\"    />
                  {service.tagline}
                  {service.taglin,}
}
                </p>;
              </div>;
              <div className=\"text-right\"    />;
                <div className=\"text-2xl font-bold text-gray-900 dark:text-white\"    />;
                  {getServicePricing(service)}
                </div>;
                <div className=\"text-sm text-gray-500 dark:text-gray-400\"    />;
<p className='text-gray-600 dark:text-gray-300 mb-3'    />;
                  {service.tagline}
                </p>;
              </div>;
              <div className='text-right'    />;
                <div className='text-2xl font-bold text-gray-900 dark:text-white'    />;
                  {getServicePricing(service)}
                </div>;
                <div className='text-sm text-gray-500 dark:text-gray-400'    />;
                  {service.trialDays} day trial;
                </div>;
              </div>;
            </div>;
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <CheckCircle className=\"w-4 h-4 text-green-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
                  {service.setupTime} setup;
                </span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Users className=\"w-4 h-4 text-blue-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
                  {service.customers ? service.customers.toLocaleString() : '1000'}+ customers;
                </span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Star className=\"w-4 h-4 text-yellow-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'    />;
              <div className='flex items-center gap-2'    />;
                <CheckCircle className='w-4 h-4 text-green-500'    />;
                <span className='text-sm text-gray-600 dark:text-gray-400'    />;
                  {service.setupTime} setup;
                </span>;
              </div>;
              <div className='flex items-center gap-2'    />;
                <Users className='w-4 h-4 text-blue-500'    />;
                <span className='text-sm text-gray-600 dark:text-gray-400'    />;
                  {service.customers;}
                    ? service.customers.toLocaleString(): '1000'}
                  + customers;
                </span>;
              </div>;
              <div className='flex items-center gap-2'    />;
                <Star className='w-4 h-4 text-yellow-500'    />;
                <span className='text-sm text-gray-600 dark:text-gray-400'    />;
                  {service.rating}/5 ({service.reviews} reviews)</span>;
              </div>;
            </div>;
            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-4\"    />;
              <div    />;
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Key Features:</h4>;
                <div className=\"space-y-1\"    />;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (<div key={index} className=\"flex items-center gap-2\"    />;
                      <Check className=\"w-3 h-3 text-green-500\"    />;
                      <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />{feature}</span>;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (<div key={inde,}
} className=\"flex items-center gap-2\"    />;
                      <Check className=\"w-3 h-3 text-green-500\"    />;
                      <span className=\"text-sm text-gray-600 dark: text-gray-400\"    />{featur,}
}</span>;
                    </div>;
                </div>
                <div className=\"text-sm text-gray-500 dark: text-gray-400\"    />
                  {service.trialDays} day trial;
>>>>>>> origin/chore/fix-lint-and-merge
                </div>
              </div>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
=======
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4\"    />
              <div className=\"flex items-center gap-2\"    />
                <CheckCircle className=\"w-4 h-4 text-green-500\"    />
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />
                  {service.setupTime} setup;
                </span>
              </div>
              <div className=\"flex items-center gap-2\"    />
                <Users className=\"w-4 h-4 text-blue-500\"    />
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />
                  {service.customers ? service.customers.toLocaleString() : '1000'}+ customers;
                </span>
              </div>
              <div className=\"flex items-center gap-2\"    />
                <Star className=\"w-4 h-4 text-yellow-500\"    />
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />
                  {service.rating}/5 ({service.review,}
} reviews)
>>>>>>> origin/chore/fix-lint-and-merge
                </span>
              </div>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {service.roi}
                </p>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
=======
            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-4\"    />
              <div    />
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Key Features:</h4>
                <div className=\"space-y-1\"    />
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (}
                    <div key={index} className=\"flex items-center gap-2\"    />
                      <Check className=\"w-3 h-3 text-green-500\"    />
                      <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />{feature}</span>
                    </div>
                  ))}
                  ),
}
                </div>;
              </div>;
              <div    />;
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />ROI & Benefits:</h4>;
                <p className=\"text-sm text-gray-600 dark:text-gray-400 mb-3\"    />;
                  {service.roi}
                </p>;
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Market Position:</h4>;
                <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'    />;
              <div    />;
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
                  Key Features:;
                </h4>;
                <div className='space-y-1'    />;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (<div key={index} className='flex items-center gap-2'    />;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (<div key={inde,}
} className='flex items-center gap-2'    />;
                        <Check className='w-3 h-3 text-green-500'    />;
                        <span className='text-sm text-gray-600 dark:text-gray-400'    />;
                          {feature}
                        </span>;
                      </div>;
                    ))}
                </div>;
              </div>;
              <div    />;
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
                  ROI & Benefits:;
                </h4>;
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'    />;
                  {service.roi}
                </p>;
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
                  Market Position:;
                </h4>;
                <p className='text-sm text-gray-600 dark:text-gray-400'    />;
                  {service.marketPosition}
                </p>;
              </div>;
            </div>;
            <div className=\"flex items-center gap-4\"    />;
              <a;
                </p    />
                
                <h4 className=\"font-semibold text-gray-900 dark: text-white mb-2\"    />Market Position:</h4>
                <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />
>>>>>>> origin/chore/fix-lint-and-merge
                  {service.marketPosition}
                </p>
              </div>
            </div>
            
<<<<<<< HEAD
            <div className="flex items-center gap-4">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
=======
            <div className=\"flex items-center gap-4\"    />
              <a;
href={service.lin,}
}
                className=\"inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\"    />

                Learn More;
                <ArrowRight className=\"w-4 h-4\"    />;
              </a>;
              <a;
                href={`mailto: ${contactInfo.email}?subject=Inquiry about ${service.name},
}
                className=\'inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
<div className='flex items-center gap-4'    />;
              <a;
                href={service.link}
                className=\'inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\';
                  />;
                Learn More;
                <ArrowRight className=\"w-4 h-4\"    />;
              </a>;
              <a;
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className=\'inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
<div className='flex items-center gap-4'    />;
              <a;
                href={service.link}
                className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105';
                  />;
                className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>

                Learn More;
                <ArrowRight className='w-4 h-4'    />;
              </a>;
              <a;
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300';
                  />;
                href={`mailto: ${contactInfo.email}?subject=Inquiry about ${service.name},
}
                className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Contact Sales;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </motion.div>;
  )return (<div className=\"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800\"    />;
      <SEO;
        title=\'2025 Advanced Services Showcase - Zion Tech Group\';
        description=\'Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses.\';
        keywords={[\"AI services\", \"micro SAAS\", \"IT infrastructure\", \"quantum computing\", \"enterprise solutions\", \"Zion Tech Group\"]}
  )return (<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'    />;
        keywords = {[\"AI services\", \"micro SAAS\", \"IT infrastructure\", \"quantum computing\", \"enterprise solutions\", \"Zion Tech Group\"]}
  ;
  return (<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'    />;
      <SEO;
        title='2025 Advanced Services Showcase - Zion Tech Group';
        description='Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses.';
        keywords={[;
          'AI services';
          'micro SAAS';
          'IT infrastructure';
          'quantum computing';
          'enterprise solutions';}
          'Zion Tech Group';}
        ]}   />;
                className=\"inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\"
>>>>>>> origin/chore/fix-lint-and-merge
              >
                Contact Sales;
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="2025 Advanced Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses."
        keywords={["AI services", "micro SAAS", "IT infrastructure", "quantum computing", "enterprise solutions", "Zion Tech Group"]}
      />
      
=======
<<<<<<< HEAD
      />;
=======

      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              2025 Advanced Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            >
              Discover our comprehensive portfolio of real, innovative, and market-ready solutions. 
              From AI-powered enterprise services to cutting-edge quantum computing platforms.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>30+ New Services</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Real Implementations</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Market Validated</span>
=======
    <div className=\"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800\"    />
      <SEO;
title=\"2025 Advanced Services Showcase - Zion Tech Group\"
        description=\"Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses.\"
        keywords={[\"AI services\", \"micro SAAS\", \"IT infrastructure\", \"quantum computing\", \"enterprise solutions\", \"Zion Tech Group\"]}
         />
      
      {/* Hero Section */}
      <div className=\"relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700\"    />;
        <div className=\"absolute inset-0 bg-black opacity-20\"    /></div>;
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24\"    />;
          <div className=\"text-center\"    />;
            <motion.h1;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=\'text-4xl md:text-6xl font-bold text-white mb-6\';
                />;
              2025 Advanced Services Showcase;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=\'text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto\';
                />;
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 ,}
}
              className=\"text-4xl md:text-6xl font-bold text-white mb-6\">

              2025 Advanced Services Showcase;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.8, delay: 0.2 ,}
}
              className=\"text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto\"    />

              Discover our comprehensive portfolio of real, innovative, and market-ready solutions.;
              From AI-powered enterprise services to cutting-edge quantum computing platforms.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.4 }}
              className=\'flex flex-col sm:flex-row gap-4 justify-center items-center\';
                />;
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.8, delay: 0.4 ,}
}
              className=\"flex flex-col sm:flex-row gap-4 justify-center items-center\">

              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
                <span    />30+ New Services</span>;
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="2025 Advanced Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses."
        keywords={["AI services", "micro SAAS", "IT infrastructure", "quantum computing", "enterprise solutions", "Zion Tech Group"]}
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              2025 Advanced Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            >
              Discover our comprehensive portfolio of real, innovative, and market-ready solutions. 
              From AI-powered enterprise services to cutting-edge quantum computing platforms.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>30+ New Services</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Real Implementations</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Market Validated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>30+ New Services</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>;
              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
                <span    />Real Implementations</span>;
              </div>;
              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
              <div className='flex items-center gap-2 text-white'    />;
                <CheckCircle className='w-5 h-5 text-green-300'    />;
                <span    />Market Validated</span>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
      {/* Contact Information Banner */}
      <div className=\"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6\"    />;
          <div className=\"flex flex-col md:flex-row items-center justify-between gap-4\"    />;
            <div className=\"flex items-center gap-6\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <Phone className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.mobile}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Mail className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.email}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <MapPin className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.address}</span>;
                <span className=\"text-gray-700 dark: text-gray-300\"    />{contactInfo.mobil,}
}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Mail className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark: text-gray-300\"    />{contactInfo.emai,}
}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <MapPin className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark: text-gray-300\"    />{contactInfo.addres,}
}</span>;
              </div>;
            </div>;
            <div className=\"flex items-center gap-4\"    />;
              <a;
              className=\"flex flex-col sm:flex-row gap-4 justify-center items-center\"
              className=\"flex flex-col sm: flex-row gap-4 justify-center items-center\"
                />
              <div className=\"flex items-center gap-2 text-white\"    />
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />
                <span    />30+ New Services</span>
              </div>
              <div className=\"flex items-center gap-2 text-white\"    />
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />
                <span    />Real Implementations</span>
              </div>
              <div className=\"flex items-center gap-2 text-white\"    />
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />
                <span    />Market Validated</span>
>>>>>>> origin/chore/fix-lint-and-merge
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Contact Information Banner */}
=======



      {/* Contact Information Banner */}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <a
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
<<<<<<< HEAD
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
=======
      <div className=\"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700\"    />
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6\"    />
          <div className=\"flex flex-col md:flex-row items-center justify-between gap-4\"    />
            <div className=\"flex items-center gap-6\"    />
              <div className=\"flex items-center gap-2\"    />
                <Phone className=\"w-5 h-5 text-blue-600\"    />
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.mobile}</span>
              </div>
              <div className=\"flex items-center gap-2\"    />
                <Mail className=\"w-5 h-5 text-blue-600\"    />
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.email}</span>
              </div>
              <div className=\"flex items-center gap-2\"    />
                <MapPin className=\"w-5 h-5 text-blue-600\"    />
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.address}</span>
              </div>
            </div>
            <div className=\"flex items-center gap-4\"    />
              <a;
href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className=\'inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300\';
                  />;
                href={`mailto:${contactInfo.email}?subject=Services Inquiry,
}
                className=\"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300\">
=======
<<<<<<< HEAD
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">;
    </motion.div>),
  return (
    <div className='min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100 dark:from - gray - 900 dark:to - gray - 800'>;
      <SEO;
        title='2025 Advanced Services Showcase - Zion Tech Group';
        description='Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting - edge IT infrastructure. Real, innovative, and market - ready solutions for modern businesses.';
        keywords={[;
          'AI services',
          'micro SAAS',
          'IT infrastructure',
          'quantum computing',
          'enterprise solutions',
          'Zion Tech Group',
        ]}
      />;
      {/* Hero Section */}
      <div className='relative overflow - hidden bg - gradient - to - br from - blue - 600 via - purple - 600 to - indigo - 700'>;
        <div className='absolute inset - 0 bg - black opacity - 20'></div>;
        <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24'>;
          <div className='text - center'>;
            <motion.h1;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - 4xl md:text - 6xl font - bold text - white mb - 6';
            >;
              2025 Advanced Services Showcase;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text - xl md:text - 2xl text - blue - 100 mb - 8 max - w-4xl mx - auto';
            >;
              Discover our comprehensive portfolio of real, innovative, and;
              market - ready solutions. From AI - powered enterprise services to;
              cutting - edge quantum computing platforms.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex - col sm:flex - row gap - 4 justify - center items - center';
            >;
              <div className='flex items - center gap - 2 text - white'>;
                <CheckCircle className='w - 5 h - 5 text - green - 300' />                <span > 30+ New Services</span>;
              </div>;
              <div className='flex items - center gap - 2 text - white'>;
                <CheckCircle className='w - 5 h - 5 text - green - 300' />;
                <span > Real Implementations</span>;
              </div>;
              <div className='flex items - center gap - 2 text - white'>;
                <CheckCircle className='w - 5 h - 5 text - green - 300' />                <span > Market Validated</span>              <div className="flex items - center gap - 2 text - white">;
                <CheckCircle className="w - 5 h - 5 text - green - 300" />;
                <span > Market Validated</span>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Contact Information Banner */}
      <div className='bg - white dark:bg - gray - 800 border - b border - gray - 200 dark:border - gray - 700'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
          <div className='flex flex - col md:flex - row items - center justify - between gap - 4'>;
            <div className='flex items - center gap - 6'>;
              <div className='flex items - center gap - 2'>;
                <Phone className='w - 5 h - 5 text - blue - 600' />;
                <span className='text - gray - 700 dark:text - gray - 300'>;
                  {contact_info.mobile}
                </span>;
              </div>;
              <div className='flex items - center gap - 2'>;
                <Mail className='w - 5 h - 5 text - blue - 600' />;
                <span className='text - gray - 700 dark:text - gray - 300'>;
                  {contact_info.email}
                </span>;
              </div>;
              <div className='flex items - center gap - 2'>;
                <MapPin className='w - 5 h - 5 text - blue - 600' />;
                <span className='text - gray - 700 dark:text - gray - 300'>;
                  {contact_info.address}
                </span>;
              </div>;
            </div>;
            <div className='flex items - center gap - 4'>;
              <a;
                href={`mailto:${contact_info.email}?subject = Services Inquiry`}
                className='inline - flex items - center gap - 2 bg - blue - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 700 transition - all duration - 300';
              >;
                Get Quote;
                <ArrowRight className='w - 4 h - 4' />;
              </a>;
              <a;
                href={contact_info.website}
                target='_blank';
                rel='noopener noreferrer';
                className='inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 6 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300'              >              </div>;
              <div className="flex items - center gap - 2">;
                <Mail className="w - 5 h - 5 text - blue - 600" />;
                <span className="text - gray - 700 dark:text - gray - 300">{contact_info.email}</span>;
              </div>;
              <div className="flex items - center gap - 2">;
                <MapPin className="w - 5 h - 5 text - blue - 600" />;
                <span className="text - gray - 700 dark:text - gray - 300">{contact_info.address}</span>;
              </div>;
            </div>;
            <div className="flex items - center gap - 4">;
              <a;
                href={`mailto:${contact_info.email}?subject = Services Inquiry`}
                className="inline - flex items - center gap - 2 bg - blue - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 700 transition - all duration - 300";
              >;
                Get Quote;
                <ArrowRight className="w - 4 h - 4" />;
              </a>;
              <a;
                href={contact_info.website}
                target="_blank";
                rel="noopener noreferrer";
                className="inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 6 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300";
              >;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                Get Quote;
                <ArrowRight className=\"w-4 h-4\"    />;
              </a>;
              <a;
                href={contactInfo.website}
                target=\'_blank\';
                rel=\'noopener noreferrer\';
                className=\'inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
<div className='bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'    />;
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'    />;
            <div className='flex items-center gap-6'    />;
              <div className='flex items-center gap-2'    />;
                <Phone className='w-5 h-5 text-blue-600'    />;
                <span className='text-gray-700 dark:text-gray-300'    />;
                  {contactInfo.mobile}
                </span>;
              </div>;
              <div className='flex items-center gap-2'    />;
                <Mail className='w-5 h-5 text-blue-600'    />;
                <span className='text-gray-700 dark:text-gray-300'    />;
                  {contactInfo.email}
                </span>;
              </div>;
              <div className='flex items-center gap-2'    />;
                <MapPin className='w-5 h-5 text-blue-600'    />;
                <span className='text-gray-700 dark:text-gray-300'    />;
                  {contactInfo.address}
                </span>;
              </div>;
            </div>;
            <div className='flex items-center gap-4'    />;
              <a;
                href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300';
                  />;
                href={`mailto: ${contactInfo.email}?subject=Services Inquiry,
}
                className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300'>

                Get Quote;
                <ArrowRight className='w-4 h-4'    />;
              </a>;
              <a;
                href={contactInfo.website}
                target='_blank';
                rel='noopener noreferrer';
                className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300';
                  />;
                className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Visit Website;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
      {/* Main Content */}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\"    />;
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\"    />;
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'    />;
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                className=\"inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\"
>>>>>>> origin/chore/fix-lint-and-merge
              >
                Visit Website;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent';
                />;
              </div>;
            </div>;
            <div className='flex items-center gap-4'>;
              <div className='flex items-center gap-2'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
<<<<<<< HEAD
                >
                  <Grid className="w-5 h-5" />
                </button>
=======
                >;
                  <Grid className='w-5 h-5' />                </button>                <button
                  onClick={() => setViewMode('list')}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid' ;
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' ;
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
<<<<<<< HEAD
                >
                  <List className="w-5 h-5" />
=======
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                >;
                  <List className='w-5 h-5' />                </button>;
              </div>;
            </div>;
          </div>                    viewMode === 'list' ;
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' ;
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
                >;
                  <List className="w-5 h-5" />;
              </div>;
            </div>;
          </div>;
          {/* Category Filters */}
          <div className='mt-6'>;
            <div className='flex flex-wrap gap-3'>;
              {categories && categories.map(category => (                <button
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </button>
              </div>
            </div>
          </div>
          
<<<<<<< HEAD
=======
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\"    />
=======
          {/* Category Filters */}
          <div className='mt-6'>
            <div className='flex flex-wrap gap-3'>
              {categories.map(category => (                <button
          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <button
      {/* Main Content */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Filters and Search */}
        {/* Filters and Search *,}
}
        <div className=\"mb-8\"    />;
          <div className=\"flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between\"    />;
            <div className=\"flex-1\"    />;
              <div className=\"relative max-w-md\"    />;
                <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\"    />;
                <input;
                  type=\'text\';
                  placeholder=\'Search services...\';
                  value={searchTerm}
                  onChange={(e) =    /> setSearchTerm(e.target.value)}
                  className=\'w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
                />;
              </div>;
            </div>;
            <div className=\"flex items-center gap-4\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <button;
                  onClick={() =    /> setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}
                >;
                  }`}>

                  <LayoutGrid className=\"w-5 h-5\"    />;
                  <LayoutGrid className=\"w-5 h-5\"    />;
                  <Grid className='w-5 h-5'    />;
                </button>;
                <button;
                  onClick={() =    /> setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}
                >;
                  <List className=\"w-5 h-5\"    />;
  )const ServiceList = ({ service }: { service: any }) => (<motion.div;
                  }`}    />

                  <List className=\"w-5 h-5\"    />;
  )const ServiceList = ({ service }: { service: any,}
}) => (<motion.div;
                    />
                  <LayoutGrid className = \"w-5 h-5\"    />
                </button>
                <button;
onClick={() =    /> setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 dark: bg-blue-900 text-blue-600 dark:text-blue-400' }
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'}
                  },
}
                >
                  <List className=\"w-5 h-5\"    />
  )
 ;
  const ServiceList = ({ service }: { service: any,}
}) => (
    <motion.div;
        <div className='mb-6'    />;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
            ROI & Benefits:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'    />;
            {service && service.roi}
          </p>;
        </div>;
        <div className='mb-6'    />;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'    />;
            Market Position:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'    />;
            {service && service.marketPosition}
          </p>;
        </div>;
        <div className='flex items-center justify-between'    />;
          <a;
            href={service && service.link}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'    />;
            Learn More;
            <ArrowRight className='w-4 h-4'    />;
          </a>;
          <a;
            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'    />            {service && service.roi}
            href={`mailto: ${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>            {service && service.ro,}
}
          </p>;
        </div>;
        <div className=\"mb-6\"    />;
          <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Market Position:</h4>;
          <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
            {service && service.marketPosition}
          </p>;
        </div>;
        <div className=\"flex items-center justify-between\"    />;
          <a;
            href={service && service.link}
            className=\"inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\"    />;
            Learn More;
            <ArrowRight className=\"w-4 h-4\"    />;
          </a>;
import React, { useState, useEffect } from './react';
import { motion, AnimatePresence   } from './framer-motion';
  Search,Grid,List,Star,CheckCircle,ArrowRight,Check,Brain,Atom,Shield,Building,Globe,Users,TrendingUp,Award,Phone,Mail,MapPin;
  MapPin;
} from 'lucide-react';
  MapPin} from 'lucide-react';// Mock service data;
const advancedEnterpriseServices2025 = [;

const advancedEnterpriseServices2025 = [
  {id: \"enterprise - 1\",title: \"Enterprise AI Solutions\",description: \"Comprehensive AI implementation for large enterprises\",category: \"enterprise\",price: \"$50, 000+\",rating: 4.9,tags: [\"AI\", \"Machine Learning\", \"Enterprise\"],color: \"from - blue - 500 to - purple - 500\",icon: \'🤖\';}
  }
    icon: \'🤖\';
  }
];
    icon: \"🤖\"}];const innovativeMicroSaasExpansion2025 = [;
    icon: \"🤖,
}];

const innovativeMicroSaasExpansion2025 = [
  {id: \"micro - 1\",title: \"Micro SaaS Platform\",description: \"Lightweight SaaS solutions for small businesses\",category: \"micro - saas\",price: \"$99 / month\",rating: 4.7,tags: [\"SaaS\", \"Micro Services\", \"Cloud\"],color: \"from - green - 500 to - teal - 500\",icon: \'⚡\';}
  }
    icon: \'⚡\';
  }
];
    icon: \"⚡\"}];const cuttingEdgeITInfrastructureServices = [;
    icon: \"⚡,
}];

const cuttingEdgeITInfrastructureServices = [
  {id: \"infra - 1\",title: \"Cloud Infrastructure\",description: \"Scalable cloud infrastructure solutions\",category: \"infrastructure\",price: \"$5, 000 / month\",rating: 4.8,tags: [\"Cloud\", \"Infrastructure\", \"DevOps\"],color: \"from - orange - 500 to - red - 500\",icon: \'☁️\';}
  }
    icon: \'☁️\';
  }
];// Import our new service data;
    icon: \"☁️\"}];// Import our new service data;
    icon: \"☁️,
}];// Import our new service data;
import { advancedEnterpriseServices2025  } from '../data / 2025 - advanced - enterprise - services - expansion';
import { innovativeMicroSaasExpansion2025  } from '../data / 2025 - innovative - micro - saas - expansion';
import { cuttingEdgeITInfrastructureServices  } from '../data / 2025 - cutting - edge - it - infrastructure';
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com';
  website: 'https://ziontechgroup.com';
import { motion, AnimatePresence  } from './framer-motion';
  Search,
  Grid,
  List,
  Star,
  CheckCircle,
  ArrowRight,
  Check,
  Brain,
  Atom,
  Shield,
  Building,
  Globe,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin;
} from 'lucide-react';
;
// Mock service data;

const advancedEnterpriseServices2025 = [
  {
    id: \"enterprise - 1\",
    title: \"Enterprise AI Solutions\",
    description: \"Comprehensive AI implementation for large enterprises\",
    category: \"enterprise\",
    price: \"$50, 000+\",
    rating: 4.9,
    tags: [\"AI\", \"Machine Learning\", \"Enterprise\"],
    color: \"from - blue - 500 to - purple - 500\",}
    icon: \"🤖\"}
  }
 ,
}
];
;

const innovativeMicroSaasExpansion2025 = [
  {
    id: \"micro - 1\",
    title: \"Micro SaaS Platform\",
    description: \"Lightweight SaaS solutions for small businesses\",
    category: \"micro - saas\",
    price: \"$99 / month\",
    rating: 4.7,
    tags: [\"SaaS\", \"Micro Services\", \"Cloud\"],
    color: \"from - green - 500 to - teal - 500\",}
    icon: \"⚡\"}
  }
 ,
}
];
;

const cuttingEdgeITInfrastructureServices = [
  {
    id: \"infra - 1\",
    title: \"Cloud Infrastructure\",
    description: \"Scalable cloud infrastructure solutions\",
    category: \"infrastructure\",
    price: \"$5, 000 / month\",
    rating: 4.8,
    tags: [\"Cloud\", \"Infrastructure\", \"DevOps\"],
    color: \"from - orange - 500 to - red - 500\",}
    icon: \"☁️\"}
  }
 ,
}
];// Import our new service data;
import { advancedEnterpriseServices2025 } from '../data / 2025 - advanced - enterprise - services - expansion';
import { innovativeMicroSaasExpansion2025 } from '../data / 2025 - innovative - micro - saas - expansion';
import { cuttingEdgeITInfrastructureServices } from '../data / 2025 - cutting - edge - it - infrastructure';
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
}
;

const all_services = [
  ...advancedEnterpriseServices2025,
  ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices ];  website: 'https://ziontechgroup.com';
}
  website: 'https://ziontechgroup.com'}const all_services = [;
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices ];  website: 'https://ziontechgroup.com';
  ...cuttingEdgeITInfrastructureServices ];  website: 'https://ziontechgroup.com';
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com';
}const all_services = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
const categories = [;
  website: 'https://ziontechgroup.com,
}

const all_services = [
  ...advancedEnterpriseServices2025,...innovativeMicroSaasExpansion2025,...cuttingEdgeITInfrastructureServices ];  website: ',
  https://ziontechgroup.com';
  ...cuttingEdgeITInfrastructureServices ];  website: 'https://ziontechgroup.com';
  ...cuttingEdgeITInfrastructureServices];  website: 'https://ziontechgroup.com';
}

const all_services = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;

const categories = [
  {id: 'all',
  name: 'All Services',icon: <Grid className='w - 6 h - 6'    />,color: 'from - gray - 500 to - slate - 500',
  description: 'Complete portfolio of advanced services',    color: 'from - gray - 500 to - slate - 500',}
  description: 'Complete portfolio of advanced services';}
  }
  {id: 'enterprise',
  name: 'Enterprise Solutions',icon: <Building className=\"w - 6 h - 6\"    />,color: 'from - blue - 500 to - purple - 500',}
  description: 'Enterprise - grade AI and IT solutions';}
  }
  {id: 'micro - saas',
  name: 'Micro SAAS',icon: <Globe className=\"w - 6 h - 6\"    />,color: 'from - green - 500 to - emerald - 500',}
  description: 'Innovative micro SAAS solutions';}
  }
  {id: 'infrastructure',
  name: 'IT Infrastructure',icon: <Shield className=\"w - 6 h - 6\"    />,color: 'from - orange - 500 to - red - 500',}
  description: 'Cutting - edge infrastructure services';}
  }
  {id: 'ai - ml',
  name: 'AI & Machine Learning',icon: <Brain className=\"w - 6 h - 6\"    />,color: 'from - purple - 500 to - pink - 500',}
  description: 'Advanced AI and ML platforms';}
  }
  {id: 'quantum',
  name: 'Quantum Computing',icon: <Atom className=\"w - 6 h - 6\"    />,color: 'from - violet - 500 to - indigo - 500',
  description: 'Quantum computing solutions';}
    description: 'Quantum computing solutions';}
  },description: 'Quantum computing solutions'},{id: 'enterprise',
  name: 'Enterprise Solutions',icon: <Building className='w - 6 h - 6'    />,color: 'from - blue - 500 to - purple - 500',
  description: 'Enterprise - grade AI and IT solutions';}
    description: 'Enterprise - grade AI and IT solutions';}
  },description: 'Enterprise - grade AI and IT solutions'},{id: 'micro - saas',
  name: 'Micro SAAS',icon: <Globe className='w - 6 h - 6'    />,color: 'from - green - 500 to - emerald - 500',
  description: 'Innovative micro SAAS solutions';}
    description: 'Innovative micro SAAS solutions';}
  },description: 'Innovative micro SAAS solutions'},{id: 'infrastructure',
  name: 'IT Infrastructure',icon: <Shield className='w - 6 h - 6'    />,color: 'from - orange - 500 to - red - 500',
  description: 'Cutting - edge infrastructure services';}
    description: 'Cutting - edge infrastructure services';}
  },description: 'Cutting - edge infrastructure services'},{id: 'ai - ml',
  name: 'AI & Machine Learning',icon: <Brain className='w - 6 h - 6'    />,color: 'from - purple - 500 to - pink - 500',
  description: 'Advanced AI and ML platforms';}
    description: 'Advanced AI and ML platforms';}
  },description: 'Advanced AI and ML platforms'},{id: 'quantum',
  name: 'Quantum Computing',icon: <Atom className='w - 6 h - 6'    />,color: 'from - violet - 500 to - indigo - 500',}
  description: 'Quantum computing solutions';}
  } ];
    description: 'Quantum computing solutions';
  } ];
    description: 'Quantum computing solutions'}];const getServiceCategory = (service: any) =>: any {// Check condition;}
  },description: 'Quantum computing solutions,
},{id: 'enterprise',
  name: 'Enterprise Solutions',icon: <Building className='w - 6 h - 6'    />,color: 'from - blue - 500 to - purple - 500',
  description: 'Enterprise - grade AI and IT solutions';}
    description: 'Enterprise - grade AI and IT solutions';}
  },description: 'Enterprise - grade AI and IT solutions,
},{id: 'micro - saas',
  name: 'Micro SAAS',icon: <Globe className='w - 6 h - 6'    />,color: 'from - green - 500 to - emerald - 500',
  description: 'Innovative micro SAAS solutions';}
    description: 'Innovative micro SAAS solutions';}
  },description: 'Innovative micro SAAS solutions,
},{id: 'infrastructure',
  name: 'IT Infrastructure',icon: <Shield className='w - 6 h - 6'    />,color: 'from - orange - 500 to - red - 500',
  description: 'Cutting - edge infrastructure services';}
    description: 'Cutting - edge infrastructure services';}
  },description: 'Cutting - edge infrastructure services,
},{id: 'ai - ml',
  name: 'AI & Machine Learning',icon: <Brain className='w - 6 h - 6'    />,color: 'from - purple - 500 to - pink - 500',
  description: 'Advanced AI and ML platforms';}
    description: 'Advanced AI and ML platforms';}
  },description: 'Advanced AI and ML platforms,
},{id: 'quantum',
  name: 'Quantum Computing',icon: <Atom className='w - 6 h - 6'    />,color: 'from - violet - 500 to - indigo - 500',}
  description: 'Quantum computing solutions';}
  } ];
    description: 'Quantum computing solutions';
  } ];
    description: 'Quantum computing solutions,
}];

const getServiceCategory = (service: any) =>: any {// Check condition;}
if (return service.category) {$2;}
  }
  {
    id: 'quantum',
  name: 'Quantum Computing',
    icon: <Atom className=\"w - 6 h - 6\"    />,
    color: 'from - violet - 500 to - indigo - 500',}
  description: 'Quantum computing solutions'}
  },
 ,
},
  {
    id: 'enterprise',
  name: 'Enterprise Solutions',
    icon: <Building className='w - 6 h - 6'    />,
    color: 'from - blue - 500 to - purple - 500',}
  description: 'Enterprise - grade AI and IT solutions'}
  },
 ,
},
  {
    id: 'micro - saas',
  name: 'Micro SAAS',
    icon: <Globe className='w - 6 h - 6'    />,
    color: 'from - green - 500 to - emerald - 500',}
  description: 'Innovative micro SAAS solutions'}
  },
 ,
},
  {
    id: 'infrastructure',
  name: 'IT Infrastructure',
    icon: <Shield className='w - 6 h - 6'    />,
    color: 'from - orange - 500 to - red - 500',}
  description: 'Cutting - edge infrastructure services'}
  },
 ,
},
  {
    id: 'ai - ml',
  name: 'AI & Machine Learning',
    icon: <Brain className='w - 6 h - 6'    />,
    color: 'from - purple - 500 to - pink - 500',}
  description: 'Advanced AI and ML platforms'}
  },
 ,
},
  {
    id: 'quantum',
  name: 'Quantum Computing',
    icon: <Atom className='w - 6 h - 6'    />,
    color: 'from - violet - 500 to - indigo - 500',}
  description: 'Quantum computing solutions'}
  } ];
 ,
} ];
;

const getServiceCategory = (service: any) =>: any {
  // Check condition;
if (return service.category) {}
  $2,}
}
 ;
  return 'Other';}    description: 'Quantum computing solutions';
  }
];const getServiceCategory = (service: any) =>: any {// Check condition;
];

const getServiceCategory = (service: any) =>: any {// Check condition;}
if (return service.category) {$2;}
}
  return 'Other';  return 'Other';
}const getServicePricing = (service: any) =>: any {// Check condition;}
if (return `${service.price}${service.period}`) {$2;}
}
  // Check condition;
if (return service.pricing.starter) {$2;}
}
  // Check condition;

const getServicePricing = (service: any) =>: any {// Check condition;}
if (return `${service.price}${service.period}`) {$2;}
}
  // Check condition;
if (return service.pricing.starter) {$2;}
}
  // Check condition;
if (return `$${service.pricing.monthly}/month`) {$2;}
}
  return 'Contact for pricing';}  return 'Contact for pricing';
}const getServiceFeatures = (service: any) =>: any {// Check condition;}
if (return service.features) {$2;}
}

const getServiceFeatures = (service: any) =>: any {// Check condition;}
if (return service.features) {$2;}
}
  // Check condition;
if (return service.key_features) {$2;}
}
  return [];
}  return [];
}const [selected_category, setSelectedCategory] = useState ('all')const [search_term, setSearchTerm] = useState ('')const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid')const [filtered_services, setFilteredServices]  = useState (all_services)useEffect (() => {let filtered  = all_services;// Filter by category;
    // Check condition;}
if ( {) {$2;}
}
      filtered = filtered.filter (service => {const category = getServiceCategory (service).toLowerCase ()// Check condition;

const [selected_category, setSelectedCategory] = useState ('all')const [search_term, setSearchTerm] = useState ('')const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid')const [filtered_services, setFilteredServices]  = useState (all_services)useEffect (() => {let filtered  = all_services;// Filter by category;
    // Check condition;}
if ( {) {$2;}
}
      filtered = filtered.filter (service => ;
  const category = getServiceCategory (service).toLowerCase ()// Check condition;
if (return () {$2;}
}
            category.includes ('enterprise') ||;
            category.includes ('legal') ||;
            category.includes ('financial'))// Check condition;
if (return () {$2;}
}
            category.includes ('marketing') ||;
            category.includes ('social') ||;
            category.includes ('customer') ||;
            category.includes ('project'))// Check condition;
if (return () {$2;}
}
            category.includes ('infrastructure') ||;
            category.includes ('network') ||;
            category.includes ('data center') ||;
            category.includes ('edge'))// Check condition;
if (return () {$2;}
}
            category.includes ('ai') ||;
            category.includes ('machine learning') ||;
            category.includes ('nlp') ||;
            category.includes ('ml'))// Check condition;
if (return () {$2;}
}
            category.includes ('quantum') ||;
            category.includes ('quantum - resistant'))return false;
      })}
    // Check condition;
if ( {) {$2;}
}
      filtered = filtered.filter (service =>;
          service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          getServiceCategory (service).toLowerCase ().includes (search_term.toLowerCase ()))}
    setFilteredServices (filtered)}, [selected_category, search_term])}
    // Filter by search term;
    // Check condition;
if ( {) {$2;}
}
      filtered = filtered.filter (service =>;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        getServiceCategory (service).toLowerCase ().includes (search_term.toLowerCase ()))}
    setFilteredServices (filtered)}, [selected_category, search_term])const ServiceCard = ({ service }: { service: any }) =>: any (<motion.div;
      initial={{ opacity: 0, coordinate_y: 20 }}
      animate={{ opacity: 1, coordinate_y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg - white dark:bg - gray - 800 rounded - 2xl shadow - lg hover:shadow - 2xl transition - all duration - 300 overflow - hidden border border - gray - 200 dark:border - gray - 700 ${service.popular ? 'ring - 2 ring - blue - 500' : '';}
      }`}
        />;
    setFilteredServices (filtered)}, [selected_category, search_term])const ServiceCard = ({ service }: { service: any,}
}) =>: any (<motion.div;
      initial={{ opacity: 0, coordinate_y: 20 ,}
}
      animate={{ opacity: 1, coordinate_y: 0 }}
      transition={{ duration: 0.5 ,}
}
      className={`relative bg - white dark:bg - gray - 800 rounded - 2xl shadow - lg hover:shadow - 2xl transition - all duration - 300 overflow - hidden border border - gray - 200 dark:border - gray - 700 ${service.popular ? 'ring - 2 ring - blue - 500' : '';}
      }`}    />

      {service.popular && (<div className='absolute top - 4 right - 4 bg - blue - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold flex items - center gap - 1'    />;
          <Star className='w - 4 h - 4'    />;
          Popular;
    </div>}
  );}
}
      <div;
        className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}    />

        <span className='text - 4xl'    />{service.icon}</span>;
      </div>;
      <div className='p - 6'    />;
        <div className='flex items - start justify - between mb - 3'    />;
          <h3 className='text - xl font - bold text - gray - 900 dark:text - white mb - 2'    />;
            {service.name}
          </h3>;
        </div>;
        <p className='text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2'    />;
          {service.tagline}
        </p>;
        <div className='flex items - center justify - between mb - 4'    />;
          <span className='text - 2xl font - bold text - gray - 900 dark:text - white'    />;
            {getServicePricing (service)}
          </span>;
          <span className='text - sm text - gray - 500 dark:text - gray - 400'    />;
            {service.trial_days} day trial;
          </span>;
        </div>;
        <div className='space - y-3 mb - 6'    />;
          <div className='flex items - center gap - 2'    />;
            <CheckCircle className='w - 4 h - 4 text - green - 500'    />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'    />;
              {service.setup_time} setup;
            </span>;
          </div>;
          <div className='flex items - center gap - 2'    />;
            <Users className='w - 4 h - 4 text - blue - 500'    />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'    />;
              {service.customers ? service.customers.toLocaleString () : '1000'}+;
              customers;
            </span>;
          </div>;
          <div className='flex items - center gap - 2'    />;
            <Star className='w - 4 h - 4 text - yellow - 500'    />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'    />              {service.rating}/5 ({service.reviews} reviews)</span>;
            <span className='text - sm text - gray - 600 dark: text - gray - 400'    />              {service.rating}/5 ({service.review,}
} reviews)</span>;
          </div>;
        </div>          Popular;
    </div>
  );
}
      <div className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}    />

<<<<<<< HEAD
        <span className=\"text - 4xl\"    />{service.icon}</span>;
      </div>;
      <div className=\"p - 6\"    />;
        <div className=\"flex items - start justify - between mb - 3\"    />;
          <h3 className=\"text - xl font - bold text - gray - 900 dark:text - white mb - 2\"    />;
            {service.name}
          </h3>;
        </div>;
        <p className=\"text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2\"    />;
          {service.tagline}
        </p>;
        <div className=\"flex items - center justify - between mb - 4\"    />;
          <span className=\"text - 2xl font - bold text - gray - 900 dark:text - white\"    />;
            {getServicePricing (service)}
          </span>;
          <span className=\"text - sm text - gray - 500 dark:text - gray - 400\"    />;
            {service.trial_days} day trial;
          </span>;
        </div>;
        <div className=\"space - y-3 mb - 6\"    />;
          <div className=\"flex items - center gap - 2\"    />;
            <CheckCircle className=\"w - 4 h - 4 text - green - 500\"    />;
            <span className=\"text - sm text - gray - 600 dark:text - gray - 400\"    />;
              {service.setup_time} setup;
            </span>;
          </div>;
          <div className=\"flex items - center gap - 2\"    />;
            <Users className=\"w - 4 h - 4 text - blue - 500\"    />;
            <span className=\"text - sm text - gray - 600 dark:text - gray - 400\"    />;
              {service.customers ? service.customers.toLocaleString () : '1000'}+ customers;
            </span>;
          </div>;
          <div className=\"flex items - center gap - 2\"    />;
            <Star className=\"w - 4 h - 4 text - yellow - 500\"    />;
            <span className=\"text - sm text - gray - 600 dark:text - gray - 400\"    />;
              {service.rating}/5 ({service.reviews} reviews)</span>;
          </div>;
        </div>;
        <div className='mb - 6'    />;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'    />;
            Key Features:;
          </h4>;
          <div className='space - y-1'    />;
            {getServiceFeatures (service).slice (0, 3).map ((feature: string, index: number) => (<div key={index} className='flex items - center gap - 2'    />;
            {getServiceFeatures (service).slice (0, 3).map ((feature: string, index: number) => (<div key={inde,}
} className='flex items - center gap - 2'    />;
                  <Check className='w - 3 h - 3 text - green - 500'    />;
                  <span className='text - sm text - gray - 600 dark:text - gray - 400'    />;
                    {feature}
                  </span>;
                </div>))}
            {getServiceFeatures (service).length > 3 && (<span className='text - sm text - gray - 500 dark:text - gray - 400'    />                +{getServiceFeatures (service).length - 3} more features;
        <div className=\"mb - 6\"    />;
          <h4 className=\"font - semibold text - gray - 900 dark:text - white mb - 2\"    />Key Features:</h4>;
          <div className=\"space - y-1\"    />;
            {getServiceFeatures (service).slice (0, 3).map ((feature: string, index: number) => (<div key={index} className=\"flex items - center gap - 2\"    />;
            {getServiceFeatures (service).length > 3 && (<span className='text - sm text - gray - 500 dark: text - gray - 400'    />                +{getServiceFeatures (service).length - ,}
} more features;
        <div className=\"mb - 6\"    />;
          <h4 className=\"font - semibold text - gray - 900 dark:text - white mb - 2\"    />Key Features:</h4>;
          <div className=\"space - y-1\"    />;
            {getServiceFeatures (service).slice (0, 3).map ((feature: string, index: number) => (<div key={inde,}
} className=\"flex items - center gap - 2\"    />;
                <Check className=\"w - 3 h - 3 text - green - 500\"    />;
                <span className=\"text - sm text - gray - 600 dark: text - gray - 400\"    />{featur,}
}</span>;
              </div>))}
            {getServiceFeatures (service).length > 3 && (<span className=\"text - sm text - gray - 500 dark:text - gray - 400\"    />;}
              </span>)}
          </div>;
        </div>;
        <div className='mb - 6'    />;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'    />;
            ROI & Benefits:;
          </h4>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'    />;
            {service.roi}
          </p>;
        </div>;
        <div className='mb - 6'    />;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'    />;
            Market Position:;
          </h4>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'    />;
            {service.market_position}
          </p>;
        </div>;
        <div className='flex items - center justify - between'    />;
          <a;
            href={service.link}
            className='inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105'    />
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            Learn More;
            <ArrowRight className='w - 4 h - 4'    />;
          </a>;
          <a;
            href={`mailto: ${contact_info.email}?subject = Inquiry about ${service.name}`}
            className='inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300'              />            {service.ro,}
}
          </p>;
        </div>;
        <div className=\"mb - 6\"    />;
          <h4 className=\"font - semibold text - gray - 900 dark:text - white mb - 2\"    />Market Position:</h4>;
          <p className=\"text - sm text - gray - 600 dark:text - gray - 400\"    />;
            {service.market_position}
          </p>;
        </div>;
        <div className=\"flex items - center justify - between\"    />;
          <a;
            href={service.link}
            className=\"inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105\"    />

<<<<<<< HEAD
            Learn More;
            <ArrowRight className=\"w - 4 h - 4\"    />;
          </a>;
          <a;
            href={`mailto: ${contact_info.email}?subject = Inquiry about ${service.name},
}
            className=\"inline - flex items - center gap - 2 bg - gray - 100 dark: bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300\"    />
=======
                <button


<<<<<<< HEAD

                <button


                <button

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            Contact;
          </a>;
        </div>;
      </div>;
                Contact Sales;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'    />;
        <div className='absolute inset-0 bg-black opacity-20'    /></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'    />;
          <div className='text-center'    />;
            <motion&& motion.h1;
              initial={{ opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 ,}
}
              className='text-4xl md:text-6xl font-bold text-white mb-6'    />;
              2025 Advanced Services Showcase;
            </motion && motion.h1>;
            <motion&& motion.p;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 ,}
}
              className='text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto'    />;
              Discover our comprehensive portfolio of real, innovative, and;
              market-ready solutions. From AI-powered enterprise services to;
              cutting-edge quantum computing platforms.;
            </motion && motion.p>;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 ,}
}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'    />;
              <div className='flex items-center gap-2 text-white'    />;
                <CheckCircle className='w-5 h-5 text-green-300'    />                <span    />30+ New Services</span>;
              </div>;
              <div className='flex items-center gap-2 text-white'    />;
                <CheckCircle className='w-5 h-5 text-green-300'    />;
                <span    />Real Implementations</span>;
              </div>;
              <div className='flex items-center gap-2 text-white'    />;
                <CheckCircle className='w-5 h-5 text-green-300'    />                <span    />Market Validated</span>              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
                <span    />Market Validated</span>;
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </div>;
              <a;
              <a;
href={`mailto: ${contactInfo && contactInfo.email}?subject=Services Inquiry,
}
                className=\"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300\"    />;
                Get Quote;
                <ArrowRight className=\"w-4 h-4\"    />;
              </a>;
              <a;
                href={contactInfo && contactInfo.website}
                target=\'_blank\';
                rel=\'noopener noreferrer\';
                Visit Website;
              </a    />;
            </div>;
          </div>;
        </div>;
      </div>;
                <button;
                  onClick={() =    /> setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}
                >;
                  }`}>

                  <Grid className='w-5 h-5'    />                </button>                <button;
                  onClick={() =    /> setViewMode('list')}
                  }`}
                >;
                  <Grid className=\"w-5 h-5\"    />;
                </button>;
                <button;
                  onClick={() =    /> setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}
          {/* Category Filters */}
          <div className=\"mt-6\"    />;
            <div className=\"flex flex-wrap gap-3\"    />;
              {categories && categories.map((category) => (key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';}
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';}
                  } ${category && category.color}`}>

<<<<<<< HEAD
                  {category && category.icon}
                  {category && category.name}
                </button>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
  )const ServiceList = ({ service }: { service: any }) => (<motion.div;
  )const ServiceList = ({ service }: { service: any,}
}) =    /> (<motion.div;
  );
=======
<<<<<<< HEAD



        {/* Results Summary */}


            </div>;
          </div>;
        </div>;
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
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
                  <span>Market Growth: 150%+ YoY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>4.8+ Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
                </p>;
              </div>;
              <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>;
                <div className='flex items-center gap-2'>;
                  <TrendingUp className='w-4 h-4 text-green-500' />;
                  <span>Market Growth: 150%+ YoY</span>;
                </div>;
                <div className='flex items-center gap-2'>;
                  <Award className='w-4 h-4 text-blue-500' />                  <span>4 && 4.8+ Average Rating</span>              <div>;
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">;
                  {filteredServices && filteredServices.length} Services Found;
                </h2>;
                <p className="text-gray-600 dark:text-gray-400">;
                  {selectedCategory !== 'all' && `Filtered by: ${categories && categories.find(c => c && c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: "${searchTerm}"`}
                </p>;
              </div>;
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">;
                <div className="flex items-center gap-2">;
                  <TrendingUp className="w-4 h-4 text-green-500" />;
                  <span>Market Growth: 150%+ YoY</span>;
                </div>;
                <div className="flex items-center gap-2">;
                  <Award className="w-4 h-4 text-blue-500" />;
                  <span>4 && 4.8+ Average Rating</span>;
                </button>))}
            </div>;
          </div>;
        </div>;
        {/* Results Summary */}
        <div className='mb - 8'>;
          <div className='bg - white dark:bg - gray - 800 rounded - xl p - 6 border border - gray - 200 dark:border - gray - 700'>;
            <div className='flex flex - col md:flex - row items - start md:items - center justify - between gap - 4'>;
              <div>;
                <h2 className='text - 2xl font - bold text - gray - 900 dark:text - white mb - 2'>;
                  {filtered_services.length} Services Found;
                </h2>;
                <p className='text - gray - 600 dark:text - gray - 400'>;
                  {selected_category !== 'all' &&;
                    `Filtered by: ${categories.find (c => c.id === selected_category)?.name}`}
                  {search_term && ` • Search: "${search_term}"`}
                </p>;
              </div>;
              <div className='flex items - center gap - 4 text - sm text - gray - 600 dark:text - gray - 400'>;
                <div className='flex items - center gap - 2'>;
                  <TrendingUp className='w - 4 h - 4 text - green - 500' />;
                  <span > Market Growth: 150%+ YoY</span>;
                </div>;
                <div className='flex items - center gap - 2'>;
                  <Award className='w - 4 h - 4 text - blue - 500' />                  <span > 4.8+ Average Rating</span>              <div>;
                <h2 className="text - 2xl font - bold text - gray - 900 dark:text - white mb - 2">;
                  {filtered_services.length} Services Found;
                </h2>;
                <p className="text - gray - 600 dark:text - gray - 400">;
                  {selected_category !== 'all' && `Filtered by: ${categories.find (c => c.id === selected_category)?.name}`}
                  {search_term && ` • Search: "${search_term}"`}
                </p>;
              </div>;
              <div className="flex items - center gap - 4 text - sm text - gray - 600 dark:text - gray - 400">;
                <div className="flex items - center gap - 2">;
                  <TrendingUp className="w - 4 h - 4 text - green - 500" />;
                  <span > Market Growth: 150%+ YoY</span>;
                </div>;
                <div className="flex items - center gap - 2">;
                  <Award className="w - 4 h - 4 text - blue - 500" />;
                  <span > 4.8+ Average Rating</span>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const ServiceList = ({ service }: { service: any,}
}) =    /> (
    <motion.div;
initial={{ opacity: 0, x: -20 ,}
}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';}
      }`}
        />;
      <div className=\"p-6\"    />;
        <div className=\"flex items-start gap-6\"    />;
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}    />;
      transition={{ duration: 0.5 ,}
}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';}
      }`}>

      <div className=\"p-6\"    />;
        <div className=\"flex items-start gap-6\"    />;
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}    />

<<<<<<< HEAD
            <span className=\"text-3xl\"    />{service.icon}</span>;
          </div>;
          <div className=\"flex-1\"    />;
            <div className=\"flex items-start justify-between mb-3\"    />;
              <div    />;
                <h3 className=\"text-xl font-bold text-gray-900 dark:text-white mb-2\"    />;
                  {service.name}
                  {service.popular && (<span className=\"ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold\"    />;
                      Popular;}
                    </span>;}
                  )}
                </h3>;
                <p className=\"text-gray-600 dark:text-gray-300 mb-3\"    />;
                  {service.tagline}
                </p>;
              </div>;
              <div className=\"text-right\"    />;
                <div className=\"text-2xl font-bold text-gray-900 dark:text-white\"    />;
                  {getServicePricing(service)}
                </div>;
                <div className=\"text-sm text-gray-500 dark:text-gray-400\"    />;
                  {service.trialDays} day trial;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Results Summary */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </div>;
              </div>;
            </div>;
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <CheckCircle className=\"w-4 h-4 text-green-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
                  {service.setupTime} setup;
                </span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Users className=\"w-4 h-4 text-blue-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
                  {service.customers ? service.customers.toLocaleString() : '1000'}+ customers;
                </span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Star className=\"w-4 h-4 text-yellow-500\"    />;
                <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
                  {service.rating}/5 ({service.reviews} reviews)</span>;
              </div>;
            </div>;
            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-4\"    />;
              <div    />;
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Key Features:</h4>;
                <div className=\"space-y-1\"    />;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (<div key={index} className=\"flex items-center gap-2\"    />;
                      <Check className=\"w-3 h-3 text-green-500\"    />;
                      <span className=\"text-sm text-gray-600 dark:text-gray-400\"    />{feature}</span>;
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (<div key={inde,}
} className=\"flex items-center gap-2\"    />;
                      <Check className=\"w-3 h-3 text-green-500\"    />;
                      <span className=\"text-sm text-gray-600 dark: text-gray-400\"    />{featur,}
}</span>;
                    </div>;
                  ))}
                </div>;
              </div>;
              <div    />;
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />ROI & Benefits:</h4>;
                <p className=\"text-sm text-gray-600 dark:text-gray-400 mb-3\"    />;
                  {service.roi}
                </p>;
                <h4 className=\"font-semibold text-gray-900 dark:text-white mb-2\"    />Market Position:</h4>;
                <p className=\"text-sm text-gray-600 dark:text-gray-400\"    />;
                  {service.marketPosition}
                </p>;
              </div>;
            </div>;
            <div className=\"flex items-center gap-4\"    />;
              <a;
                href={service.link}
                className=\'inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\';
                  />;
                className=\"inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\">

                Learn More;
                <ArrowRight className=\"w-4 h-4\"    />;
              </a>;
              <a;
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className=\'inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
                  />;
                href={`mailto: ${contactInfo.email}?subject=Inquiry about ${service.name},
}
                className=\"inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\">

                Contact Sales;
              </a>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
      </div>;
    </motion.div>;
  )return (<div className=\"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800\"    />;
      <SEO;
        title=\'2025 Advanced Services Showcase - Zion Tech Group\';
        description=\'Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses.\';
        keywords={[\"AI services\", \"micro SAAS\", \"IT infrastructure\", \"quantum computing\", \"enterprise solutions\", \"Zion Tech Group\"]}
         />;
      {/* Hero Section */}
      <div className=\"relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700\"    />;
        <div className=\"absolute inset-0 bg-black opacity-20\"    /></div>;
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24\"    />;
          <div className=\"text-center\"    />;
            <motion.h1;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=\'text-4xl md:text-6xl font-bold text-white mb-6\';
                />;
              2025 Advanced Services Showcase;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=\'text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto\';
                />;
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 ,}
}
              className=\"text-4xl md:text-6xl font-bold text-white mb-6\">
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              2025 Advanced Services Showcase;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.8, delay: 0.2 ,}
}
              className=\"text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto\"    />

              Discover our comprehensive portfolio of real, innovative, and market-ready solutions.;
              From AI-powered enterprise services to cutting-edge quantum computing platforms.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=\'flex flex-col sm:flex-row gap-4 justify-center items-center\';
                />;
              initial={{ opacity: 0, y: 20 ,}
}
              animate={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.8, delay: 0.4 ,}
}
              className=\"flex flex-col sm:flex-row gap-4 justify-center items-center\">

              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
                <span    />30+ New Services</span>;
              </div>;
              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
                <span    />Real Implementations</span>;
              </div>;
              <div className=\"flex items-center gap-2 text-white\"    />;
                <CheckCircle className=\"w-5 h-5 text-green-300\"    />;
                <span    />Market Validated</span>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Contact Information Banner */}
      <div className=\"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6\"    />;
          <div className=\"flex flex-col md:flex-row items-center justify-between gap-4\"    />;
            <div className=\"flex items-center gap-6\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <Phone className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.mobile}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Mail className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.email}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <MapPin className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.address}</span>;
                <span className=\"text-gray-700 dark: text-gray-300\"    />{contactInfo.mobil,}
}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Mail className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark: text-gray-300\"    />{contactInfo.emai,}
}</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <MapPin className=\"w-5 h-5 text-blue-600\"    />;
                <span className=\"text-gray-700 dark: text-gray-300\"    />{contactInfo.addres,}
}</span>;
              </div>;
            </div>;
            <div className=\"flex items-center gap-4\"    />;
              <a;
      <div className=\"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700\"    />
      <div className=\"bg-white dark: bg-gray-800 border-b border-gray-200 dark:border-gray-700\"    />
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6\"    />
          <div className=\"flex flex-col md:flex-row items-center justify-between gap-4\"    />
            <div className=\"flex items-center gap-6\"    />
              <div className=\"flex items-center gap-2\"    />
                <Phone className=\"w-5 h-5 text-blue-600\"    />
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.mobile}</span>
              </div>
              <div className=\"flex items-center gap-2\"    />
                <Mail className=\"w-5 h-5 text-blue-600\"    />
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.email}</span>
              </div>
              <div className=\"flex items-center gap-2\"    />
                <MapPin className=\"w-5 h-5 text-blue-600\"    />
                <span className=\"text-gray-700 dark:text-gray-300\"    />{contactInfo.address}</span>
              </div>
            </div>
            <div className=\"flex items-center gap-4\"    />
              <a;
href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className=\'inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300\';
                  />;
                href={`mailto:${contactInfo.email}?subject=Services Inquiry,
}
                className=\"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300\">

                Get Quote;
                <ArrowRight className=\"w-4 h-4\"    />;
              </a>;
              <a;
                href={contactInfo.website}
                target=\'_blank\';
                rel=\'noopener noreferrer\';
                Visit Website;
              </a    />;
            </div>;
          </div>;
        </div>;
      </div>;
                className=\'inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\';
              >;
                className=\"inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\">

                Visit Website;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                className=\"inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300\"
              >
                Visit Website;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* Main Content *,}
}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\"    />;
        {/* Filters and Search */}
        <div className=\"mb-8\"    />;
          <div className=\"flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between\"    />;
            <div className=\"flex-1\"    />;
              <div className=\"relative max-w-md\"    />;
                <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\"    />;
                <input;
                  type=\'text\';
                  placeholder=\'Search services...\';
                  value={searchTerm}
                  onChange={(e) =    /> setSearchTerm(e.target.value)}
                  className=\'w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
                />;
              </div>;
            </div>;
            <div className=\"flex items-center gap-4\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <button;
                  className=\"w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                  className=\"w-full pl-10 pr-4 py-3 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                   />
              </div>
            </div>
            
            <div className=\"flex items-center gap-4\"    />
              <div className=\"flex items-center gap-2\"    />
                <button;
onClick={() =    /> setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}
                >;
                  <LayoutGrid className=\"w-5 h-5\"    />;
                </button>;
                >;
                  <Grid className='w-5 h-5'    />                </button>                <button;
                  onClick={() =    /> setViewMode('list')}
                  }`}
                >;
                  <Grid className=\"w-5 h-5\"    />;
                </button>;
                >;
                  onClick={() => setViewMode('grid',}
}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}>

                  <LayoutGrid className=\"w-5 h-5\"    />;
                </button>>

                  <Grid className='w-5 h-5'    />                </button>                <button;
                  onClick={() =    /> setViewMode('list')}
                  }`}
                >;
                  <Grid className=\"w-5 h-5\"    />;
                </button>>

                  <LayoutGrid className=\"w-5 h-5\"    />;
                </button>;
                <button;
                    />
                  <LayoutGrid className=\"w-5 h-5\"    />
                </button>
                <button;
onClick={() =    /> setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';}
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}
                >;
                  <List className=\"w-5 h-5\"    />;
ursor/automate-test-improve-and-merge-code-646c;
          {/* Category Filters */}
          <div className=\"mt-6\"    />;
            <div className=\"flex flex-wrap gap-3\"    />;
              {categories && categories.map((category) => (key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';}
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';}
                  } ${category && category.color}`}
                >;
                  {category && category.icon}
                  {category && category.name}
                </button>;
                >;
                  <List className=\"w-5 h-5\"    />;
viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
                >;
                  }`}>

                  <List className=\"w-5 h-5\"    />;
ursor/automate-test-improve-and-merge-code-646c;
          {/* Category Filters */}
          <div className=\"mt-6\"    />;
            <div className=\"flex flex-wrap gap-3\"    />;
              {categories && categories.map((category) => (key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';}
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';}
                  } ${category && category.color}`}>

                  {category && category.icon}
                  {category && category.name}
                </button>>

                  <List className=\"w-5 h-5\"    />;
viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
                >;
                  <List className='w-5 h-5'    />;
                </button>;
              </div>;
            </div>;
          </div>;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${selected_category === category.id;
                      ? 'bg - gradient - to - r text - white shadow - lg';}
                      : 'bg - white dark:bg - gray - 800 text - gray - 700 dark:text - gray - 300 border border - gray - 200 dark:border - gray - 600 hover:bg - gray - 50 dark:hover:bg - gray - 700';}
                  } ${category.color}`}
                >;
                  } ${category.color}`}>

                  {category.icon}
                  {category.name}
              ))}
        {/* Results Summary */}
        <div className='mb-8'    />;
          <div className='bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700'    />;
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'    />;
              <div    />;
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'    />;
                  {filteredServices && filteredServices.length} Services Found;
                </h2>;
                <p className='text-gray-600 dark:text-gray-400'    />;
                  {selectedCategory !== 'all' &&;}
                    `Filtered by: ${categories && categories.find(c => c && c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: \"${searchTerm}\"`}
                  {searchTerm && ` • Search: \"${searchTerm}\",
}
ursor/automate-test-improve-and-merge-code-646c;
          {/* Category Filters */}
          <div className=\"mt-6\"    />;
            <div className=\"flex flex-wrap gap-3\"    />;
              {categories.map((category) => ({/* Category Filters */}
          <div className='mt-6'    />;
            <div className='flex flex-wrap gap-3'    />;
              {categories.map(category => (<button;
                    />
                  <List className=\"w-5 h-5\"    />
                </button>
              </div>
            </div>
          </div>}
          }
>>>>>>> origin/chore/fix-lint-and-merge
          {/* Category Filters */}
          <div className=\"mt-6\"    />
            <div className=\"flex flex-wrap gap-3\"    />
              {categories.map((category) => (}
                <button;}
key={category.id}
<<<<<<< HEAD
                  onClick={() => setSelectedCategory(category.id)}
=======
<<<<<<< HEAD
                  onClick={() =    /> setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';}
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';}
                  } ${category.color}`}
                >;
                  } ${category.color}`}>
>>>>>>> origin/chore/fix-lint-and-merge

                  {category.icon}
                  {category.name}
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
        {/* Results Summary */}
<<<<<<< HEAD
=======
        <div className=\"mb-8\"    />;
          <div className=\"bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700\"    />;
            <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between gap-4\"    />;
              <div    />;
        <div className=\"mb-8\"    />;
          <div className=\"bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700\"    />;
            <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between gap-4\"    />;
<div className='mb-8'    />;
          <div className='bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700'    />;
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'    />;
              <div    />;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${selected_category === category.id;
                      ? 'bg - gradient - to - r text - white shadow - lg';}
                      : 'bg - white dark:bg - gray - 800 text - gray - 700 dark:text - gray - 300 border border - gray - 200 dark:border - gray - 600 hover:bg - gray - 50 dark:hover:bg - gray - 700';}
                  } ${category.color}`}
                >;
                  } ${category.color}`}>
>>>>>>> origin/chore/fix-lint-and-merge

                  {category.icon}
                  {category.name}
              ))}
        {/* Results Summary */}
        <div className='mb-8'    />;
          <div className='bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700'    />;
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'    />;
              <div    />;
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'    />;
                  {filteredServices && filteredServices.length} Services Found;
                </h2>;
                <p className='text-gray-600 dark:text-gray-400'    />;
                  {selectedCategory !== 'all' &&;}
                    `Filtered by: ${categories && categories.find(c => c && c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: \"${searchTerm}\"`}
                  {searchTerm && ` • Search: \"${searchTerm}\",
}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                <h2 className=\"text-2xl font-bold text-gray-900 dark:text-white mb-2\"    />;
                  {filteredServices.length} Services Found;
                </h2>;
                <p className=\"text-gray-600 dark:text-gray-400\"    />;
                  {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: \"${searchTerm}\"`}
        <div className=\"mb-8\"    />
          <div className=\"bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700\"    />
            <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between gap-4\"    />
              <div    />
                <h2 className=\"text-2xl font-bold text-gray-900 dark:text-white mb-2\"    />
                  {filteredServices.length} Services Found;
                </h2>
                <p className=\"text-gray-600 dark:text-gray-400\"    />
                  {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: \"${searchTerm}\"`}
                </p>
              </div>
              
<<<<<<< HEAD
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Market Growth: 150%+ YoY</span>
=======
              
              <div className=\"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400\"    />
                <div className=\"flex items-center gap-2\"    />
                  <TrendingUp className=\"w-4 h-4 text-green-500\"    />
                  <span    />Market Growth: 150%+ YoY</span>
>>>>>>> origin/chore/fix-lint-and-merge
                </div>
                <div className=\"flex items-center gap-2\"    />
                  <Award className=\"w-4 h-4 text-blue-500\"    />
                  <span    />4.8+ Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<div className=space-y-6'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="space-y-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {filteredServices.length === 0 ? (
            <div className='text-center py-12>
              <div className=text-gray-400 dark:text-gray-500 text-6xl mb-4'>
                🔍
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2>
                No services found
              </h3>
              <p className=text-gray-600 dark:text-gray-400'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
            <AnimatePresence>
<<<<<<< HEAD
              {viewMode === 'grid ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
                </div>
              ) : (
                <div className=space-y-6">
                  {filteredServices.map((service) => (
=======
              {viewMode === 'grid' ? (
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {filteredServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
<<<<<<< HEAD

                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <ServiceList key={service.id} service={service} />
                  ))}
                </div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center>
          <div className=bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6>
              Ready to Transform Your Business?
            </h2>
            <p className=text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 

<<<<<<< HEAD
                </p>;
              </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400>;
                <div className=flex items-center gap-2">;
                  <TrendingUp className="w-4 h-4 text-green-500 />;
                  <span>Market Growth: 150%+ YoY</span>;
                </div>;
                <div className=flex items-center gap-2">;
                  <Award className="w-4 h-4 text-blue-500 />;
                </p>;
              </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
              <div className=flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">;
                <div className="flex items-center gap-2>;
                  <TrendingUp className=w-4 h-4 text-green-500" />;
                  <span>Market Growth: 150%+ YoY</span>;
                </div>;
                <div className="flex items-center gap-2>;
                  <Award className=w-4 h-4 text-blue-500" />;
                </p>;
              </div>;

        {/* Services Grid/List */}

=======

        {/* Services Grid/List */}
        <div className=\"space-y-6\"    />
          {filteredServices.length === 0 ? (
            <div className=\"text-center py-12\"    />
              <div className=\"text-gray-400 dark:text-gray-500 text-6xl mb-4\"    />🔍</div>
              <h3 className=\"text-xl font-semibold text-gray-900 dark:text-white mb-2\"    />
                No services found;
              </h3>
              <p className=\"text-gray-600 dark:text-gray-400\"    />
>>>>>>> origin/chore/fix-lint-and-merge
                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
<<<<<<< HEAD
            <AnimatePresence>

=======
                </div>
              ) : (
                <div className='space-y-6'>
                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
                </div>
              ) : (
<<<<<<< HEAD

                  {filteredServices.map((service) => (
                    <ServiceList key={service.id} service={service} />
=======
            <AnimatePresence    />
              {viewMode === 'grid' ? (
                <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />}
                          {filteredServices.map((service) => (}
          <ServiceCard key={service.id} service={service}    />
        ))}
                </div>
              ) : (
                <div className=\"space-y-6\"    />
                  {filteredServices.map((service) => (}
                    <ServiceList key={service.id} service={service}    />
>>>>>>> origin/chore/fix-lint-and-merge
                  ))}
                </div>
              )}
            </AnimatePresence>
          )}
        </div>

<<<<<<< HEAD
=======
        {/* Call to Action *,}
}
        <div className=\"mt-16 text-center\"    />
          <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white\"    />
            <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />
              Ready to Transform Your Business?
            </h2>
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />
              Our team of experts is ready to help you implement these cutting-edge solutions. 
                </p>;
              </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
              <div className=\"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400\"    />;
                <div className=\"flex items-center gap-2\"    />;
                  <TrendingUp className=\"w-4 h-4 text-green-500\"    />;
                  <span    />Market Growth: 150%+ YoY</span>;
                </div>;
                <div className=\"flex items-center gap-2\"    />;
                  <Award className=\"w-4 h-4 text-blue-500\"    />;
                </p>;
              </div>;
              <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'    />;
                <div className='flex items-center gap-2'    />;
                  <TrendingUp className='w-4 h-4 text-green-500'    />;
                  <span    />Market Growth: 150%+ YoY</span>;
                </div>;
                <div className='flex items-center gap-2'    />;
                  <Award className='w-4 h-4 text-blue-500'    />;
                  <span    />4.8+ Average Rating</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Services Grid/List */}{/* Services Grid/List */}
        <div className=\"space-y-6\"    />;
          {filteredServices.length === 0 ? (<div className=\"text-center py-12\"    />;
              <div className=\"text-gray-400 dark:text-gray-500 text-6xl mb-4\"    />🔍</div>;
              <h3 className=\"text-xl font-semibold text-gray-900 dark:text-white mb-2\"    />;
                No services found;
              </h3>;
              <p className=\"text-gray-600 dark:text-gray-400\"    />;
<div className='space-y-6'    />;
          {filteredServices.length === 0 ? (<div className='text-center py-12'    />;
              <div className='text-gray-400 dark:text-gray-500 text-6xl mb-4'    />;
                🔍;
              </div>;
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'    />;
                No services found;
              </h3>;
              <p className='text-gray-600 dark:text-gray-400'    />;
                Try adjusting your search terms or category filters.;
              </p>;
            </div>;
          ) : (<AnimatePresence    />;}
              {viewMode === 'grid' ? (<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;}
                          {filteredServices.map((service) => (<ServiceCard key={service.id} service={service}    />;
        ))}
                </div>;
              ) : (<div className=\"space-y-6\"    />;
                  {filteredServices.map((service) => (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />;}
                  {filteredServices.map(service => (<ServiceCard key={service.id} service={service}    />;
                  ))}
                </div>;
              ) : (<div className='space-y-6'    />;
                  {filteredServices.map(service => (<ServiceList key={service.id} service={service}    />;
=======
                <div className="space-y-6">
                  {filteredServices.map((service) => (
=======
                </div>
              ) : (
                <div className='space-y-6'>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />

                    <ServiceList key={service.id} service={service} />

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        </div>;
<<<<<<< HEAD
=======





<<<<<<< HEAD
        </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Call to Action */}
        <div className=\"mt-16 text-center\"    />;
          <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white\"    />;
            <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />;
        <div className=\"mt-16 text-center\"    />;
          <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white\"    />;
            <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />;
<div className='mt-16 text-center'    />;
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white'    />;
            <h2 className='text-3xl md:text-4xl font-bold mb-6'    />;
              Ready to Transform Your Business?;
            </h2>;
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
              Our team of experts is ready to help you implement these cutting-edge solutions.;
                </p>;
              </div>;<div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'    />;
                <div className='flex items-center gap-2'    />;
                  <TrendingUp className='w-4 h-4 text-green-500'    />;
                  <span    />Market Growth: 150%+ YoY</span>;
                </div>;
                <div className='flex items-center gap-2'    />;
                  <Award className='w-4 h-4 text-blue-500'    />                  <span    />4 && 4.8+ Average Rating</span>              <div    />;
                <h2 className=\"text-2xl font-bold text-gray-900 dark:text-white mb-2\"    />;
                  {filteredServices && filteredServices.length} Services Found;
                </h2>;
                <p className=\"text-gray-600 dark:text-gray-400\"    />;
                  {selectedCategory !== 'all' && `Filtered by: ${categories && categories.find(c => c && c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: \"${searchTerm}\",
}
                </p>;
              </div>;<div className=\"flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400\"    />;
                <div className=\"flex items-center gap-2\"    />;
                  <TrendingUp className=\"w-4 h-4 text-green-500\"    />;
                  <span    />Market Growth: 150%+ YoY</span>;
                </div>;
                <div className=\"flex items-center gap-2\"    />;
                  <Award className=\"w-4 h-4 text-blue-500\"    />;
                  <span    />4 && 4.8+ Average Rating</span>;
                </button>))}
            </div>;
          </div>;
        </div>;
        {/* Results Summary */}
        <div className='mb - 8'    />;
          <div className='bg - white dark:bg - gray - 800 rounded - xl p - 6 border border - gray - 200 dark:border - gray - 700'    />;
            <div className='flex flex - col md:flex - row items - start md:items - center justify - between gap - 4'    />;
              <div    />;
                <h2 className='text - 2xl font - bold text - gray - 900 dark:text - white mb - 2'    />;
                  {filtered_services.length} Services Found;
                </h2>;
                <p className='text - gray - 600 dark:text - gray - 400'    />;
                  {selected_category !== 'all' &&;}
                    `Filtered by: ${categories.find (c => c.id === selected_category)?.name}`}
                  {search_term && ` • Search: \"${search_term}\",
}
                </p>;
              </div>;
              <div className='flex items - center gap - 4 text - sm text - gray - 600 dark:text - gray - 400'    />;
                <div className='flex items - center gap - 2'    />;
                  <TrendingUp className='w - 4 h - 4 text - green - 500'    />;
                  <span     /> Market Growth: 150%+ YoY</span>;
                </div>;
                <div className='flex items - center gap - 2'    />;
                  <Award className='w - 4 h - 4 text - blue - 500'    />                  <span     /> 4.8+ Average Rating</span>              <div    />;
                <h2 className=\"text - 2xl font - bold text - gray - 900 dark:text - white mb - 2\"    />;
                  {filtered_services.length} Services Found;
                </h2>;
                <p className=\"text - gray - 600 dark:text - gray - 400\"    />;
                  {selected_category !== 'all' && `Filtered by: ${categories.find (c => c.id === selected_category)?.name}`}
                  {search_term && ` • Search: \"${search_term}\",
}
                </p>;
              </div>;
              <div className=\"flex items - center gap - 4 text - sm text - gray - 600 dark:text - gray - 400\"    />;
                <div className=\"flex items - center gap - 2\"    />;
                  <TrendingUp className=\"w - 4 h - 4 text - green - 500\"    />;
                  <span     /> Market Growth: 150%+ YoY</span>;
                </div>;
                <div className=\"flex items - center gap - 2\"    />;
                  <Award className=\"w - 4 h - 4 text - blue - 500\"    />;
                  <span     /> 4.8+ Average Rating</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        {/* Call to Action */}
        <div className='mt-16 text-center'    />;
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white'    />;
            <h2 className='text-3xl md:text-4xl font-bold mb-6'    />;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'    />;
              Our team of experts is ready to help you implement these;
              cutting-edge solutions. Get in touch today to discuss your;
              specific needs and discover how we can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'    />;
              <a;
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                href={`mailto: ${contactInfo && contactInfo.email}?subject=Business Transformation Consultation,
}
                className='inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'    />;
                Start Your Transformation;
                <ArrowRight className='w-5 h-5'    />;
              </a>;
<<<<<<< HEAD
              <a;
            </h2    />;
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
              Our team of experts is ready to help you implement these cutting-edge solutions.;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
            </h2>;
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
              Our team of experts is ready to help you implement these cutting-edge solutions.;
ursor/fix-netlify-build-and-merge-to-main-9571;
              <a;
            </h2    />
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />
              Our team of experts is ready to help you implement these cutting-edge solutions.

>>>>>>> origin/chore/fix-lint-and-merge
        {/* Services Grid/List */}
        <div className=\"space-y-6\"    />;
          {filteredServices.length === 0 ? (<div className=\"text-center py-12\"    />;
              <div className=\"text-gray-400 dark:text-gray-500 text-6xl mb-4\"    />🔍</div>;
              <h3 className=\"text-xl font-semibold text-gray-900 dark:text-white mb-2\"    />;
=======
              <a
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions.
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<<<<<<< HEAD


        </div>
      </div>
    </div>
=======
<<<<<<< HEAD
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300'>;
                <Phone className='w-5 h-5' />                Call Now;
        {/* Services Grid / List */}
        <div className='space - y-6'>;
          {filtered_services.length === 0 ? (
            <div className='text - center py - 12'>;
              <div className='text - gray - 400 dark:text - gray - 500 text - 6xl mb - 4'>;
                🔍;
              </div>;
              <h3 className='text - xl font - semibold text - gray - 900 dark:text - white mb - 2'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                No services found;
              </h3>;
              <p className=\"text-gray-600 dark:text-gray-400\"    />;
                Try adjusting your search terms or category filters.;
              </p>;
            </div>;
          ) : (<AnimatePresence    />;}
              {viewMode === 'grid' ? (<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;}
                          {filteredServices.map((service) => (<ServiceCard key={service.id} service={service}    />;
        ))}
                </div>;
              ) : (<div className=\"space-y-6\"    />;
                  {filteredServices.map((service) => (<ServiceList key={service.id} service={service}    />;
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        </div>;
        {/* Call to Action */}
        <div className=\"mt-16 text-center\"    />;
          <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white\"    />;
            <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />;
              Ready to Transform Your Business?;
            </h2>;
<<<<<<< HEAD
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
              Our team of experts is ready to help you implement these cutting-edge solutions.;
ursor/automate-test-improve-and-merge-code-646c;
            </h2>;
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
              Our team of experts is ready to help you implement these cutting-edge solutions.;
=======
            <p className='text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto'>;
              Our team of experts is ready to help you implement these;
              cutting - edge solutions. Get in touch today to discuss your;
              specific needs and discover how we can drive your success.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <a;
                href={`mailto:${contact_info.email}?subject = Business Transformation Consultation`}
                className='inline - flex items - center gap - 2 bg - white text - blue - 600 px - 8 py - 4 rounded - lg font - bold text - lg hover:bg - gray - 100 transition - all duration - 300 transform hover:scale - 105';
              >;
                Start Your Transformation;
                <ArrowRight className='w - 5 h - 5' />;
              </a>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className='inline - flex items - center gap - 2 bg - transparent border - 2 border - white text - white px - 8 py - 4 rounded - lg font - bold text - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300';
              >;
                <Phone className='w - 5 h - 5' />                Call Now;
              </a>;
            </div>;
          </div>              Ready to Transform Your Business?;
            </h2>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">;
                Start Your Transformation;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300">;
                <Phone className="w-5 h-5" />;
            <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
              Our team of experts is ready to help you implement these cutting - edge solutions.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Get in touch today to discuss your specific needs and discover how we can drive your success.;
            </p>;
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center items-center\"    />;
              <a;
        <div className=\"mt-16 text-center\"    />
          <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white\"    />
            <h2 className=\"text-3xl md: text-4xl font-bold mb-6\"    />
              Ready to Transform Your Business?
            </h2>
            <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
<<<<<<< HEAD
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
=======
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center items-center\"    />
              <a;
href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className=\'inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105\';
                  />;
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation,
}
                className=\"inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105\">

                Start Your Transformation;
                <ArrowRight className=\"w-5 h-5\"    />;
              </a>;
              <a;
                href={`tel:${contactInfo.mobile}`}
                className=\'inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\';
                  />;
                <Phone className=\"w-5 h-5\"    />;
                href={`tel:${contactInfo.mobile}`}
                className='inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300';
              >;
<<<<<<< HEAD
                href={`tel: ${contactInfo.mobile},
}
                className=\"inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\">

                <Phone className=\"w-5 h-5\"    />;
                href={`tel: ${contactInfo.mobile},
}
                className='inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300'>

                <Phone className='w-5 h-5'    />;
=======
                <Phone className="w - 5 h - 5" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Call Now;
              </a>;
            </div>;
          </div>;
<<<<<<< HEAD
        </div>;
      </div>;
    </div>;
  )}
                className=\"inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\"
>>>>>>> origin/chore/fix-lint-and-merge
              >
                <Phone className=\"w-5 h-5\"    />
                Call Now;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
=======
<<<<<<< HEAD
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation,
}
                className=\"inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105\">;
                Start Your Transformation;
                <ArrowRight className=\"w-5 h-5\"    />;
              </a>;
              <a;
                href={`tel:${contactInfo && contactInfo.mobile}`}
                href={`tel: ${contactInfo && contactInfo.mobile},
}
                className=\"inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\"    />;
                <Phone className=\"w-5 h-5\"    />;
            <p className=\"text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto\"    />;
              Our team of experts is ready to help you implement these cutting - edge solutions.;
              Get in touch today to discuss your specific needs and discover how we can drive your success.;
            </p>;
            <div className=\"flex flex - col sm:flex - row gap - 4 justify - center items - center\"    />;
              <a;
                href={`mailto: ${contact_info.email}?subject = Business Transformation Consultation,
}
                className=\"inline - flex items - center gap - 2 bg - white text - blue - 600 px - 8 py - 4 rounded - lg font - bold text - lg hover:bg - gray - 100 transition - all duration - 300 transform hover:scale - 105\"    />

                Start Your Transformation;
                <ArrowRight className=\"w - 5 h - 5\"    />;
              </a>;
              <a;
                href={`tel: ${contact_info.mobile},
}
                className=\"inline - flex items - center gap - 2 bg - transparent border - 2 border - white text - white px - 8 py - 4 rounded - lg font - bold text - lg hover: bg - white hover:text - blue - 600 transition - all duration - 300\"    />

                <Phone className=\"w - 5 h - 5\"    />;
                Call Now;
              </a>;
            </div>;
          </div>;
  )<button className=\"px - 8 py - 4 bg - white text - blue - 600 rounded - xl font - semibold hover:bg - gray - 100 transition - all duration - 300\"    />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button className="px - 8 py - 4 bg - white text - blue - 600 rounded - xl font - semibold hover:bg - gray - 100 transition - all duration - 300">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Get Started Today;
          </button>;
        </motion.div>;
      </div>;
    </div>)</div>;
      </div>;
    </div>)}
      </div>
    </div>
  );
}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
    </div>);
}
<<<<<<< HEAD
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className=\'inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105\';
              >;
                href={`mailto: ${contactInfo.email}?subject=Business Transformation Consultation,
}
                className=\"inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105\">
=======
<<<<<<< HEAD

          </div>

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                Start Your Transformation;
                <ArrowRight className=\"w-5 h-5\"    />;
              </a>;
              <a;
                href={`tel:${contactInfo.mobile}`}
                className=\'inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\';
                  />;
                href={`tel: ${contactInfo.mobile},
}
                className=\"inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\">

                <Phone className=\"w-5 h-5\"    />;
                Call Now;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}ursor/automate-test-improve-and-merge-code-646c;
<button className=\"px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300\"    />;
            Get Started Today;
          </button>;
        </motion.div>;
      </div>;
    </div>;
  )
                className=\"inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300\"
              >
                <Phone className=\"w-5 h-5\"    />
                Call Now;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
