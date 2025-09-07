<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
// All services combined const allServices = [ ...advancedAIMLServices;

 // All services combined const allServices = [ ...advancedAIMLServices;


<<<<<<< HEAD
;
import React, { useState } from 'react',import SEO from '../components/SEO';'
import { motion  } from 'framer-motion';'
import { Brain, Building, Target, Cpu, Shield;
  }
  Check, Phone, Mail, MapPin;
  TrendingUp, Zap, Globe;
  } from 'lucide-react';'
// Import our new service data;
import { advancedAIMLServices   } from '../data/2025-advanced-ai-ml-services';'
import { advancedCybersecurityServices   } from '../data/2025-advanced-cybersecurity-services';'
import { advancedCloudDevOpsServices2025   } from '../data/2025-advanced-cloud-devops-services';'
import { industrySpecificSolutions   } from '../data/2025-industry-specific-solutions';'
import { emergingTechnologyServices  } from '../data/2025-emerging-technology-services';'
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


 // All services combined const allServices = [ ...advancedAIMLServices;

// All services combined const allServices = [ ...advancedAIMLServices;
<<<<<<< HEAD

 // All services combined const allServices = [ ...advancedAIMLServices;

=======
 // All services combined const allServices = [ ...advancedAIMLServices;
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
;
import React, { useState } from 'react',import SEO from '../components/SEO';
import { motion  } from 'framer-motion';
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
// All services combined const allServices = [ ...advancedAIMLServices
...advancedCybersecurityServices
...advancedCloudDevOpsServices2025
...industrySpecificSolutions
...emergingTechnologyServices ]
const filteredServices = activeTab === 'all' ? allServices return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"> <SEO title="2025 Comprehensive Services Showcase - Zion Tech Group" description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions." keywords= {
  ["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"] 
}/> {
  /* Hero Section */ 
}<section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white"> <div className="absolute inset-0 bg-black/20"></div> <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <motion.div initial= {
<<<<<<< HEAD
=======
=======
 // All services combined const allServices = [ ...advancedAIMLServices;

=======
// All services combined const allServices = [ ...advancedAIMLServices;
=======
 // All services combined const allServices = [ ...advancedAIMLServices;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
...advancedCybersecurityServices;
...advancedCloudDevOpsServices2025;
...industrySpecificSolutions;
...emergingTechnologyServices ];
<<<<<<< HEAD
  {"opacity": 0, "y": 20;
}animate= {{"opacity": 1, "y": 0;
}transition= {{}initial= {{}initial= {{"opacity": 0, "y": 20;
}animate= {{"opacity": 1, "y": 0;
}transition= {{{"opacity": 0;
}animate= {{"opacity": 1;
}exit= {{}initial= {{}initial= {{"opacity": 0, "y": 20;
}animate= {{"opacity": 1, "y": 0;
}transition= {{}className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {{}className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {/* Service Header */ ;"
}transition= {{}className="bg-white rounded-xl shadow-lg "hover": shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {,"
}className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {/* Service Header */ ;"
}<divclassName= {`p-6 bg-gradient-to-r $ {service && service.color;`}text-white`;`}> <div className="flex items-center justify-between mb-4"> <span className="text-4xl"> {service && service.icon ;"
}</span> {service && service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"> POPULAR </span>)}</div> <h3 className="text-xl font-bold mb-2"> {service && service.name ;"
}</h3> <p className="text-blue-100 text-sm"> {service && service.tagline ;"
}</p> {/* Price */ ;
}<div className="mt-4"> <span className="text-2xl font-bold"> {getServicePricing (service)}</span> </div> </div> {/* Service Content */ ;"
}<div className="p-6"> <p className="text-gray-600 mb-4 line-clamp-3"> {service && service.description ;"
}</p> {/* Price */ ;
}<div className="mb-4"> <span className="text-3xl font-bold text-gray-900"> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;`}/month` ;`}</span> <span className="text-gray-500"> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;'
}</span> </div> {/* Features */ ;
}<div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-2">Key "Features":</h4> <ul className="space-y-1"> {getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<likey= {idx;"
}className="flex items-center text-sm text-gray-600"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {feature ;"
}</li>) )}</ul> </div> {/* Category Badge */ ;
}<div className="mb-4"> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;`}> {getCategoryIcon (service && service.category)}<span className="ml-1"> {service && service.category ;"
}</span> </span> </div> {/* Service Info */ ;
}<div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600"> <div> <span className="font-medium">"Setup":</span> {getServiceSetupTime (service)}</div> <div> <span className="font-medium">"Trial":</span> {getServiceTrialDays (service)}days </div> </div> {/* ROI and Popularity */ ;"
}<div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600"> <div> <span className="font-medium">"Setup": </span> {getServiceSetupTime (service)}</div> <div> <span className="font-medium">"Trial":</span> {getServiceTrialDays (service,"
}days </div> </div> {/* ROI and Popularity */ ;
}<div className="flex items-center justify-between mb-4"> <div className="text-sm"> <span className="text-gray-500">Expected "ROI":</span> <span className="text-green-600 font-semibold ml-1"> {service && service.roi.split (' ') [0] ;'
}ROI </span> </div> {service && service.popular && (<div className="flex items-center gap-1 text-yellow-600"> <Star className="w-4 h-4 fill-current" /> <span className="text-sm font-medium">Popular</span> </div>)}{/* Price and Features */ ;"
}<div className=""lg":w-1/3"> <div className="text-right mb-4"> <span className="text-3xl font-bold text-gray-900"> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;`}/month` ;`}</span> <span className="text-gray-500"> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;'
}</span> </div> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">"Features":</h4> <ul className="space-y-1 text-sm text-gray-600"> {service && service.features.slice (0, 4) .map ( (feature, idx) => (<likey= {idx;"
}className="flex items-center"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {feature ;"
}</li>) )}</ul> </div> {/* Category and Action */ ;
}<div className="flex flex-col items-end space-y-3"> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;`}> {getCategoryIcon (service && service.category)}<span className="ml-1"> {service && service.category ;"
}</span> </span> <ahref= {service && service.link;
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>)}</AnimatePresence> {/* No Results */ ;"
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover": bg-blue-700 transition-colors text-sm font-medium flex items-center"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>,"
}</AnimatePresence> {/* No Results */ ;
}{filteredServices && filteredServices.length === 0 && (<div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-16 h-16 mx-auto" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3> <p className="text-gray-600">Try adjusting your search terms or category filters.</p> </div>)}</div> </section> {/* Why Choose Us */ ;"
}<section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8"> <div className="text-center mb-16"> <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8"> <motion&& motion.div initial= {{"opacity": 0, "y": 20;"
}whileInView= {{"opacity": 1, "y": 0;
}transition= {{{"opacity": 0, "y": 20;
}whileInView= {{"opacity": 1, "y": 0;
}transition= {{{"opacity": 0, "y": 20;
}whileInView= {{"opacity": 1, "y": 0;
}transition= {{}export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;"
=======
<<<<<<< HEAD
const filteredServices = activeTab === 'all' ? allServices return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"> <SEO title="2025 Comprehensive Services Showcase - Zion Tech Group" description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions." keywords= {
  ["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"]
}/> {
  /* Hero Section */
}<section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white"> <div className="absolute inset-0 bg-black/20"></div> <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <motion.div initial= {
=======

const filteredServices = activeTab === 'all' ? allServices return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"> <SEOtitle="2025 Comprehensive Services Showcase - Zion Tech Group" description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions." keywords= {
  ["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"] 
}/> {;
  /* Hero Section */ ;
}<section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white"> <div className="absolute inset-0 bg-black/20"></div> <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> <motion&& motion.div initial= {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  duration: 0.8 
}
}className="text-center" > <h1 className="text-4xl md:text-6xl font-bold mb-6"> 2025 Comprehensive Services Showcase </h1> <p className="text-xl md:text-2xl mb-8 text-blue-100"> Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services </p> <div className="flex flex-wrap justify-center gap-4 text-sm"> <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30"> {
  allServices.length 
}+ Services </span> <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30"> AI-Powered Solutions </span> <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30"> Enterprise Ready </span> </div> </motion.div> </div> </section> {
  /* Contact Banner */ 
}<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-col md:flex-row items-center justify-between gap-4"> <div className="text-center md:text-left"> <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3> <p className="text-blue-100">Get in touch with our experts today</p> </div> <div className="flex flex-col sm:flex-row items-center gap-4"> <div className="flex items-center gap-2"> <Phone className="w-4 h-4" /> <span>+1 302 464 0950</span> </div> <div className="flex items-center gap-2"> <Mail className="w-4 h-4" /> <span>kleber@ziontechgroup.com</span> </div> <div className="flex items-center gap-2"> <MapPin className="w-4 h-4" /> <span>Middletown DE 19709</span> </div> </div> </div> </div> </section> {
  /* Category Tabs */ 
}<section className="py-12 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-2"> {
  categories.map ( (category) => (<button key= {
  category.id 
}onClick= {
  () => setActiveTab (category.id) 
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-full border transition-all $ {
  activeTab === category.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600' 
}` 
}> {
  category.icon 
}{
  category.name 
}</button>) ) 
}</div> </div> </section> {
  /* Services Grid */ 
}<section className="py-16 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  duration: 0.8
}className="text-center" > <h1 className="text-4xl md:text-6xl font-bold mb-6"> 2025 Comprehensive Services Showcase </h1> <p className="text-xl md:text-2xl mb-8 text-blue-100"> Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services </p> <div className="flex flex-wrap justify-center gap-4 text-sm"> <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30"> {
  allServices.length
}+ Services </span> <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30"> AI-Powered Solutions </span> <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30"> Enterprise Ready </span> </div> </motion.div> </div> </section> {
  /* Contact Banner */
}<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-col md:flex-row items-center justify-between gap-4"> <div className="text-center md:text-left"> <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3> <p className="text-blue-100">Get in touch with our experts today</p> </div> <div className="flex flex-col sm:flex-row items-center gap-4"> <div className="flex items-center gap-2"> <Phone className="w-4 h-4" /> <span>+1 302 464 0950</span> </div> <div className="flex items-center gap-2"> <Mail className="w-4 h-4" /> <span>kleber@ziontechgroup.com</span> </div> <div className="flex items-center gap-2"> <MapPin className="w-4 h-4" /> <span>Middletown DE 19709</span> </div> </div> </div> </div> </section> {
  /* Category Tabs */
}<section className="py-12 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-2"> {
  categories.map ( (category) => (<button key= {
  category.id
}onClick= {
  () => setActiveTab (category.id)
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-full border transition-all $ {
  activeTab === category.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
}`
}> {
  category.icon
}{
  category.name
}</button>) )
}</div> </div> </section> {
  /* Services Grid */
}<section className="py-16 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id
=======

  duration: 0 && 0.8 

}className="text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> 2025 Comprehensive Services Showcase </h1> <p className="text-xl md:text-2xl mb-8 text-blue-100"> Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services </p> <div className="flex flex-wrap justify-center gap-4 text-sm"> <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30"> {;
  allServices && allServices.length ;
}+ Services </span> <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30"> AI-Powered Solutions </span> <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30"> Enterprise Ready </span> </div> </motion && motion.div> </div> </section> {;
  /* Contact Banner */ ;
}<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-col md:flex-row items-center justify-between gap-4"> <div className="text-center md:text-left"> <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3> <p className="text-blue-100">Get in touch with our experts today</p> </div> <div className="flex flex-col sm:flex-row items-center gap-4"> <div className="flex items-center gap-2"> <Phone className="w-4 h-4" /> <span>+1 302 464 0950</span> </div> <div className="flex items-center gap-2"> <Mail className="w-4 h-4" /> <span>kleber@ziontechgroup && ziontechgroup.com</span> </div> <div className="flex items-center gap-2"> <MapPin className="w-4 h-4" /> <span>Middletown DE 19709</span> </div> </div> </div> </div> </section> {;
  /* Category Tabs */ ;
}<section className="py-12 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex flex-wrap justify-center gap-2"> {;
  categories && categories.map ( (category) => (<buttonkey= {
  category && category.id 
}onClick= {
  () => setActiveTab (category && category.id) ;
}className= {;
  `flex items-center gap-2 px-4 py-2 rounded-full border transition-all $ {;
  activeTab === category && category.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600' ;
}` ;
}> {;
  category && category.icon ;
}{;
  category && category.name ;
}</button>) ) ;
}</div> </div> </section> {;
  /* Services Grid */ ;
}<section className="py-16 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {;
  filteredServices && filteredServices.map ( (service, index) => (<motion&& motion.div key= {
  service && service.id 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  duration: 0.5, delay: index * 0.1 
}
}className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100" > {
  /* Service Header */ 
}<div className="p-6 border-b border-gray-100"> <div className="flex items-start justify-between mb-4"> <div className="flex-1"> <h3 className="text-xl font-bold text-gray-900 mb-2"> {
  service.name 
}</h3> <p className="text-gray-600 text-sm mb-3"> {
  service.tagline 
}</p> <div className="flex items-center gap-2 text-sm text-gray-500"> <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"> {
  service.category 
}</span> <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"> Micro SAAS </span> </div> </div> </div> </div> {
  /* Service Content */ 
}<div className="p-6"> <p className="text-gray-700 mb-4 line-clamp-3"> {
  service.description 
}</p> {
  /* Pricing */ 
}<div className="mb-4"> <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4> <div className="space-y-1"> <div className="flex justify-between text-sm"> <span className="text-gray-600">Starting at:</span> <span className="font-semibold text-green-600"> {
  service.pricing ? service.pricing.starter : `$ {
  (service as any) .price 
}$ {
  (service as any) .period 
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  duration: 0.5, delay: index * 0.1
}className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100" > {
  /* Service Header */
}<div className="p-6 border-b border-gray-100"> <div className="flex items-start justify-between mb-4"> <div className="flex-1"> <h3 className="text-xl font-bold text-gray-900 mb-2"> {
  service.name
}</h3> <p className="text-gray-600 text-sm mb-3"> {
  service.tagline
}</p> <div className="flex items-center gap-2 text-sm text-gray-500"> <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"> {
  service.category
}</span> <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"> Micro SAAS </span> </div> </div> </div> </div> {
  /* Service Content */
}<div className="p-6"> <p className="text-gray-700 mb-4 line-clamp-3"> {
  service.description
}</p> {
  /* Pricing */
}<div className="mb-4"> <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4> <div className="space-y-1"> <div className="flex justify-between text-sm"> <span className="text-gray-600">Starting at:</span> <span className="font-semibold text-green-600"> {
  service.pricing ? service.pricing.starter : `$ {
  (service as any) .price
}$ {
  (service as any) .period
}`
}</span> </div> <div className="text-xs text-gray-500"> {
  (service as any) .trialDays ? `$ {
  (service as any) .trialDays
}days free trial` : ''
}• {
  (service as any) .setupTime ? `$ {
  (service as any) .setupTime
}setup` : 'Custom setup'
}</div> </div> </div> {
  /* Key Features */
}<div className="mb-4"> <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4> <div className="grid grid-cols-2 gap-1"> {
  service.features?.slice (0, 6) .map ( (feature, idx) => (<div key= {
  idx
}className="flex items-center gap-2 text-sm text-gray-600"> <Check className="w-3 h-3 text-green-500 flex-shrink-0" /> <span className="truncate"> {
  feature
}</span> </div>) )
}</div> </div> {
  /* Market Info */
}<div className="mb-4 text-sm"> <div className="flex justify-between mb-1"> <span className="text-gray-600">Market Size:</span> <span className="font-semibold text-gray-900"> {
  service.marketSize
}</span> </div> <div className="flex justify-between"> <span className="text-gray-600">Target Audience:</span> <span className="font-semibold text-gray-900"> {
  service.targetAudience
}</span> </div> </div> {
  /* CTA Button */
}<div className="flex flex-col gap-2"> <a href= {
  `mailto:$ {
  (service as any) .contact |'kleber@ziontechgroup.com'
}?subject=Inquiry about $ {
  service.name
}`
}className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2" > <Mail className="w-4 h-4" /> Get Started </a> <a href= {
  `tel:$ {
  (service as any) .mobile |'+1 302 464 0950'
}`
}className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2" > <Phone className="w-4 h-4" /> Call Now </a> </div> </div> </motion.div>) )
}</div> {
  /* Services Display */
}<AnimatePresence mode="wait"> {
  viewMode === 'grid' ? (<motion.div key="grid" initial= {
=======

  duration: 0 && 0.5, delay: index * 0 && 0.1 

}className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {;
  /* Service Header */ ;
}<div className="p-6 border-b border-gray-100"> <div className="flex items-start justify-between mb-4"> <div className="flex-1"> <h3 className="text-xl font-bold text-gray-900 mb-2"> {;
  service && service.name ;
}</h3> <p className="text-gray-600 text-sm mb-3"> {;
  service && service.tagline ;
}</p> <div className="flex items-center gap-2 text-sm text-gray-500"> <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"> {;
  service && service.category ;
}</span> <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"> Micro SAAS </span> </div> </div> </div> </div> {;
  /* Service Content */ ;
}<div className="p-6"> <p className="text-gray-700 mb-4 line-clamp-3"> {;
  service && service.description ;
}</p> {;
  /* Pricing */ ;
}<div className="mb-4"> <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4> <div className="space-y-1"> <div className="flex justify-between text-sm"> <span className="text-gray-600">Starting at:</span> <span className="font-semibold text-green-600"> {;
  service && service.pricing ? service && service.pricing.starter : `$ {;
  (service as any) .price ;
}$ {;
  (service as any) .period ;
}` ;
}</span> </div> <div className="text-xs text-gray-500"> {;
  (service as any) .trialDays ? `$ {;
  (service as any) .trialDays ;
}days free trial` : '' ;
}• {;
  (service as any) .setupTime ? `$ {;
  (service as any) .setupTime ;
}setup` : 'Custom setup' ;
}</div> </div> </div> {;
  /* Key Features */ ;
}<div className="mb-4"> <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4> <div className="grid grid-cols-2 gap-1"> {;
  service && service.features?.slice (0, 6) .map ( (feature, idx) => (<divkey= {
  idx 
}className="flex items-center gap-2 text-sm text-gray-600"> <Check className="w-3 h-3 text-green-500 flex-shrink-0" /> <span className="truncate"> {;
  feature ;
}</span> </div>) ) ;
}</div> </div> {;
  /* Market Info */ ;
}<div className="mb-4 text-sm"> <div className="flex justify-between mb-1"> <span className="text-gray-600">Market Size:</span> <span className="font-semibold text-gray-900"> {;
  service && service.marketSize ;
}</span> </div> <div className="flex justify-between"> <span className="text-gray-600">Target Audience:</span> <span className="font-semibold text-gray-900"> {;
  service && service.targetAudience ;
}</span> </div> </div> {;
  /* CTA Button */ ;
}<div className="flex flex-col gap-2"> <ahref= {
  `mailto:$ {
  (service as any) .contact || 'kleber@ziontechgroup && ziontechgroup.com' 
}?subject=Inquiry about $ {
  service && service.name 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}` 
}</span> </div> <div className="text-xs text-gray-500"> {
  (service as any) .trialDays ? `$ {
  (service as any) .trialDays 
}days free trial` : '' 
}• {
  (service as any) .setupTime ? `$ {
  (service as any) .setupTime 
}setup` : 'Custom setup' 
}</div> </div> </div> {
  /* Key Features */ 
}<div className="mb-4"> <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4> <div className="grid grid-cols-2 gap-1"> {
  service.features?.slice (0, 6) .map ( (feature, idx) => (<div key= {
  idx 
}className="flex items-center gap-2 text-sm text-gray-600"> <Check className="w-3 h-3 text-green-500 flex-shrink-0" /> <span className="truncate"> {
  feature 
}</span> </div>) ) 
}</div> </div> {
  /* Market Info */ 
}<div className="mb-4 text-sm"> <div className="flex justify-between mb-1"> <span className="text-gray-600">Market Size:</span> <span className="font-semibold text-gray-900"> {
  service.marketSize 
}</span> </div> <div className="flex justify-between"> <span className="text-gray-600">Target Audience:</span> <span className="font-semibold text-gray-900"> {
  service.targetAudience 
}</span> </div> </div> {
  /* CTA Button */ 
}<div className="flex flex-col gap-2"> <a href= {
  `mailto:$ {
  (service as any) .contact || 'kleber@ziontechgroup.com' 
}?subject=Inquiry about $ {
  service.name 
}` 
}className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2" > <Mail className="w-4 h-4" /> Get Started </a> <a href= {
  `tel:$ {
  (service as any) .mobile || '+1 302 464 0950' 
}` 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2" > <Phone className="w-4 h-4" /> Call Now </a> </div> </div> </motion.div>) ) 
}</div> {
  /* Services Display */ 
}<AnimatePresence mode="wait"> {
  viewMode === 'grid' ? (<motion.div key="grid" initial= {
<<<<<<< HEAD
=======
=======
}className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"> <Phone className="w-4 h-4" /> Call Now </a> </div> </div> </motion && motion.div>) ) ;
}</div> {;
  /* Services Display */ ;
}<AnimatePresence mode="wait"> {;
  viewMode === 'grid' ? (<motion&& motion.div key="grid" initial= {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
  opacity: 0 
}
}animate= {
  {
  opacity: 1 
}
}exit= {
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  opacity: 0 
}
}className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  opacity: 0
}className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id
=======

  opacity: 0 

}className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {;
  filteredServices && filteredServices.map ( (service, index) => (<motion&& motion.div key= {
  service && service.id 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  duration: 0.5, delay: index * 0.1 
}
}className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100" > {
  /* Service Header */ 
}<div className= {
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

  duration: 0 && 0.5, delay: index * 0 && 0.1 
=======
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Building, Target, Cpu, Shield, 
  Check, Phone, Mail, MapPin;
  TrendingUp, Zap, Globe
} from 'lucide-react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {;
  /* Service Header */ ;
}<divclassName= {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  `p-6 bg-gradient-to-r $ {
  service.color 
}text-white` 
}> <div className="flex items-center justify-between mb-4"> <span className="text-4xl"> {
  service.icon 
}</span> {
  service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"> POPULAR </span>) 
}</div> <h3 className="text-xl font-bold mb-2"> {
  service.name 
}</h3> <p className="text-blue-100 text-sm"> {
  service.tagline 
}</p> {
  /* Price */ 
}<div className="mt-4"> <span className="text-2xl font-bold"> {
  getServicePricing (service) 
}</span> </div> </div> {
  /* Service Content */ 
}<div className="p-6"> <p className="text-gray-600 mb-4 line-clamp-3"> {
  service.description 
}</p> {
  /* Price */ 
}<div className="mb-4"> <span className="text-3xl font-bold text-gray-900"> {
  typeof service.price === 'string' ? service.price : `$$ {
  service.price.monthly 
}/month` 
}</span> <span className="text-gray-500"> {
  typeof service.price === 'string' ? (service as any) .period || '/month' : '/month' 
}</span> </div> {
  /* Features */ 
}<div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4> <ul className="space-y-1"> {
  getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<li key= {
  idx 
}className="flex items-center text-sm text-gray-600"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {
  feature 
}</li>) ) 
}</ul> </div> {
  /* Category Badge */ 
}<div className="mb-4"> <span className= {
  `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {
  getCategoryColor (service.category) 
}text-white` 
}> {
  getCategoryIcon (service.category) 
}<span className="ml-1"> {
  service.category 
}</span> </span> </div> {
  /* Service Info */ 
}<div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600"> <div> <span className="font-medium">Setup:</span> {
  getServiceSetupTime (service) 
}</div> <div> <span className="font-medium">Trial:</span> {
  getServiceTrialDays (service) 
}days </div> </div> {
  /* ROI and Popularity */ 
}<div className="flex items-center justify-between mb-4"> <div className="text-sm"> <span className="text-gray-500">Expected ROI:</span> <span className="text-green-600 font-semibold ml-1"> {
  service.roi.split (' ') [0] 
}ROI </span> </div> {
  service.popular && (<div className="flex items-center gap-1 text-yellow-600"> <Star className="w-4 h-4 fill-current" /> <span className="text-sm font-medium">Popular</span> </div>) 
}{
  /* Price and Features */ 
}<div className="lg:w-1/3"> <div className="text-right mb-4"> <span className="text-3xl font-bold text-gray-900"> {
  typeof service.price === 'string' ? service.price : `$$ {
  service.price.monthly 
}/month` 
}</span> <span className="text-gray-500"> {
  typeof service.price === 'string' ? (service as any) .period || '/month' : '/month' 
}</span> </div> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">Features:</h4> <ul className="space-y-1 text-sm text-gray-600"> {
  service.features.slice (0, 4) .map ( (feature, idx) => (<li key= {
  idx 
}className="flex items-center"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {
  feature 
}</li>) ) 
}</ul> </div> {
  /* Category and Action */ 
}<div className="flex flex-col items-end space-y-3"> <span className= {
  `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {
  getCategoryColor (service.category) 
}text-white` 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}> {
  getCategoryIcon (service.category) 
}<span className="ml-1"> {
  service.category 
}</span> </span> <a href= {
  service.link 
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center" > Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion.div>) ) 
}</motion.div>) 
}</AnimatePresence> {
  /* No Results */ 
}{
  filteredServices.length === 0 && (<div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-16 h-16 mx-auto" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3> <p className="text-gray-600">Try adjusting your search terms or category filters.</p> </div>) 
}</div> </section> {
  /* Why Choose Us */ 
}<section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <motion.div initial= {
<<<<<<< HEAD
=======
=======
}> {;
  getCategoryIcon (service && service.category) ;
}<span className="ml-1"> {;
  service && service.category ;
}</span> </span> <ahref= {
  service && service.link 
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion && motion.div>) ) ;
}</motion && motion.div>) ;
}</AnimatePresence> {;
  /* No Results */ ;
}{;
  filteredServices && filteredServices.length === 0 && (<div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-16 h-16 mx-auto" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3> <p className="text-gray-600">Try adjusting your search terms or category filters.</p> </div>) ;
}</div> </section> {;
  /* Why Choose Us */ ;
}<section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <motion&& motion.div initial= {
<<<<<<< HEAD
  duration: 0.5, delay: index * 0.1
}className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100" > {
  /* Service Header */
}<div className= {
  `p-6 bg-gradient-to-r $ {
  service.color
}text-white`
}> <div className="flex items-center justify-between mb-4"> <span className="text-4xl"> {
  service.icon
}</span> {
  service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"> POPULAR </span>)
}</div> <h3 className="text-xl font-bold mb-2"> {
  service.name
}</h3> <p className="text-blue-100 text-sm"> {
  service.tagline
}</p> {
  /* Price */
}<div className="mt-4"> <span className="text-2xl font-bold"> {
  getServicePricing (service)
}</span> </div> </div> {
  /* Service Content */
}<div className="p-6"> <p className="text-gray-600 mb-4 line-clamp-3"> {
  service.description
}</p> {
  /* Price */
}<div className="mb-4"> <span className="text-3xl font-bold text-gray-900"> {
  typeof service.price === 'string' ? service.price : `$$ {
  service.price.monthly
}/month`
}</span> <span className="text-gray-500"> {
  typeof service.price === 'string' ? (service as any) .period |'/month' : '/month'
}</span> </div> {
  /* Features */
}<div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4> <ul className="space-y-1"> {
  getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<li key= {
  idx
}className="flex items-center text-sm text-gray-600"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {
  feature
}</li>) )
}</ul> </div> {
  /* Category Badge */
}<div className="mb-4"> <span className= {
  `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {
  getCategoryColor (service.category)
}text-white`
}> {
  getCategoryIcon (service.category)
}<span className="ml-1"> {
  service.category
}</span> </span> </div> {
  /* Service Info */
}<div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600"> <div> <span className="font-medium">Setup:</span> {
  getServiceSetupTime (service)
}</div> <div> <span className="font-medium">Trial:</span> {
  getServiceTrialDays (service)
}days </div> </div> {
  /* ROI and Popularity */
}<div className="flex items-center justify-between mb-4"> <div className="text-sm"> <span className="text-gray-500">Expected ROI:</span> <span className="text-green-600 font-semibold ml-1"> {
  service.roi.split (' ') [0]
}ROI </span> </div> {
  service.popular && (<div className="flex items-center gap-1 text-yellow-600"> <Star className="w-4 h-4 fill-current" /> <span className="text-sm font-medium">Popular</span> </div>)
}{
  /* Price and Features */
}<div className="lg:w-1/3"> <div className="text-right mb-4"> <span className="text-3xl font-bold text-gray-900"> {
  typeof service.price === 'string' ? service.price : `$$ {
  service.price.monthly
}/month`
}</span> <span className="text-gray-500"> {
  typeof service.price === 'string' ? (service as any) .period |'/month' : '/month'
}</span> </div> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">Features:</h4> <ul className="space-y-1 text-sm text-gray-600"> {
  service.features.slice (0, 4) .map ( (feature, idx) => (<li key= {
  idx
}className="flex items-center"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {
  feature
}</li>) )
}</ul> </div> {
  /* Category and Action */
}<div className="flex flex-col items-end space-y-3"> <span className= {
  `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {
  getCategoryColor (service.category)
}text-white`
}> {
  getCategoryIcon (service.category)
}<span className="ml-1"> {
  service.category
}</span> </span> <a href= {
  service.link
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center" > Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion.div>) )
}</motion.div>)
}</AnimatePresence> {
  /* No Results */
}{
  filteredServices.length === 0 && (<div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-16 h-16 mx-auto" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3> <p className="text-gray-600">Try adjusting your search terms or category filters.</p> </div>)
}</div> </section> {
  /* Why Choose Us */
}<section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <motion.div initial= {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
<<<<<<< HEAD
  duration: 0.5 
}
}className="text-center p-6" > <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Brain className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3> <p className="text-gray-600"> Cutting-edge AI and machine learning solutions that deliver real business value </p> </motion.div> <motion.div initial= {
=======
<<<<<<< HEAD
  duration: 0.5 
}
}className="text-center p-6" > <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Brain className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3> <p className="text-gray-600"> Cutting-edge AI and machine learning solutions that deliver real business value </p> </motion.div> <motion.div initial= {
=======
<<<<<<< HEAD
  duration: 0.5
}className="text-center p-6" > <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Brain className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3> <p className="text-gray-600"> Cutting-edge AI and machine learning solutions that deliver real business value </p> </motion.div> <motion.div initial= {
=======

  duration: 0 && 0.5 

}className="text-center p-6"> <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Brain className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3> <p className="text-gray-600"> Cutting-edge AI and machine learning solutions that deliver real business value </p> </motion && motion.div> <motion&& motion.div initial= {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
<<<<<<< HEAD
  duration: 0.5, delay: 0.1 
}
}className="text-center p-6" > <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-green-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3> <p className="text-gray-600"> Bank-grade security and compliance for mission-critical business applications </p> </motion.div> <motion.div initial= {
=======
<<<<<<< HEAD
  duration: 0.5, delay: 0.1 
}
}className="text-center p-6" > <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-green-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3> <p className="text-gray-600"> Bank-grade security and compliance for mission-critical business applications </p> </motion.div> <motion.div initial= {
=======
<<<<<<< HEAD
  duration: 0.5, delay: 0.1
}className="text-center p-6" > <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-green-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3> <p className="text-gray-600"> Bank-grade security and compliance for mission-critical business applications </p> </motion.div> <motion.div initial= {
=======

  duration: 0 && 0.5, delay: 0 && 0.1 

}className="text-center p-6"> <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-green-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3> <p className="text-gray-600"> Bank-grade security and compliance for mission-critical business applications </p> </motion && motion.div> <motion&& motion.div initial= {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
<<<<<<< HEAD
  duration: 0.5, delay: 0.2 
}
}className="text-center p-6" > <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Globe className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3> <p className="text-gray-600"> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {
  /* Contact Section */ 
}<section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div className="text-center"> <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <p className="text-blue-100">+1 302 464 0950</p> </div> <div className="text-center"> <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <p className="text-blue-100">kleber@ziontechgroup.com</p> </div> <div className="text-center"> <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" > <Mail className="w-5 h-5" /> Start Consultation </a> <a href="https://ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2" > <Globe className="w-5 h-5" /> Visit Website </a> </div> </div> </section> </div>) 
}
export default ComprehensiveServicesShowcase
=======
<<<<<<< HEAD
  duration: 0.5, delay: 0.2 
}
}className="text-center p-6" > <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Globe className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3> <p className="text-gray-600"> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {
  /* Contact Section */ 
}<section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div className="text-center"> <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <p className="text-blue-100">+1 302 464 0950</p> </div> <div className="text-center"> <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <p className="text-blue-100">kleber@ziontechgroup.com</p> </div> <div className="text-center"> <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" > <Mail className="w-5 h-5" /> Start Consultation </a> <a href="https://ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2" > <Globe className="w-5 h-5" /> Visit Website </a> </div> </div> </section> </div>) 
}
export default ComprehensiveServicesShowcase
import { Brain, Building, Target, Cpu, Shield;
  }
  Check, Phone, Mail, MapPin;
  TrendingUp, Zap, Globe;
=======
import { Brain, Building, Target, Cpu, Shield;
  Check, Phone, Mail, MapPin;}
  TrendingUp, Zap, Globe;}
  } from 'lucide-react';
// Import our new service data;
import { advancedAIMLServices   } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices   } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices2025   } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions   } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices  } from '../data/2025-emerging-technology-services';
>>>>>>> origin/chore/fix-lint-and-merge

const ComprehensiveServicesShowcase2025  = null;// All services combined const allServices = [ ...advancedAIMLServices;
 // All services combined const allServices = [ ...advancedAIMLServices;
// All services combined const allServices = [ ...advancedAIMLServices;
 // All services combined const allServices  = [ ...advancedAIMLServices;// All services combined const allServices  = [ ...advancedAIMLServices;...advancedCybersecurityServices;
...advancedCloudDevOpsServices2025;
...industrySpecificSolutions;
...emergingTechnologyServices ];
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <a;
ursor/automate-test-improve-and-merge-code-646c;
  {}export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;"
                    <a;
import React, { useState } from 'react';'
import SEO from './seo/Seo';'
import { Brain, Building, Circle, Monitor, Shield,Check, Phone, Mail, MapPin,TrendingUp, Zap, Globe;
 } from 'lucide-react';'
// Import our new service data;
import { advancedAIServices2025  } from '../data/2025-advanced-ai-services';'
import { advancedCybersecurityServices2025  } from '../data/2025-advanced-cybersecurity-services';'
import { advancedITServices2025  } from '../data/2025-advanced-it-services';'
const ComprehensiveServicesShowcase2025 = () => {const [activeTab, setActiveTab]  = useState('all')// Helper function to get service pricing;'
  }
  const getServicePricing = ("service": any) => {if (service.pricing?.starter) return service.pricing.starter;

<<<<<<< HEAD
}

const ComprehensiveServicesShowcase2025 = () => ;
  const [activeTab, setActiveTab]  = useState('all')// Helper function to get service pricing;'

const getServicePricing = ("service": any) => {if (service.pricing?.starter);
  }
  return service.pricing.starter;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;`    if (typeof service.price = == 'string');'
  return service.price;
    return 'Contact for pricing';'
  }// Helper function to get service features;
  const getServiceFeatures = ("service": any) => {return service.keyFeatures || service.features || [];
  }// Helper function to get service setup time;
  const getServiceSetupTime = ("service": any) => {if (service.setupTime) return service.setupTime;

}

const getServiceFeatures = ("service": any) => ;
  return service.keyFeatures || service.features || [];
  }// Helper function to get service setup time;
=======
=======
  {opacity: 0, y: 20;}
}animate= {{opacity: 1, y: 0;}
}transition= {{}initial= {{}initial= {{opacity: 0, y: 20;}
}animate= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0;}
}animate= {{opacity: 1;}
}exit= {{}initial= {{}initial= {{opacity: 0, y: 20;}
}animate= {{opacity: 1, y: 0;}
}transition= {{}className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {{}className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {/* Service Header */ ;}
}transition= {{}className=\"bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {,}
}className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {/* Service Header */ ;}
}<divclassName= {`p-6 bg-gradient-to-r $ {service && service.color;}
}text-white`;
}    /> <div className=\"flex items-center justify-between mb-4\"    /> <span className=\"text-4xl\"    /> {service && service.icon ;}
}</span> {service && service.popular && (<span className=\"bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold\"    /> POPULAR </span>)}</div> <h3 className=\"text-xl font-bold mb-2\"    /> {service && service.name ;}
}</h3> <p className=\"text-blue-100 text-sm\"    /> {service && service.tagline ;}
}</p> {/* Price */ ;}
}<div className=\"mt-4\"    /> <span className=\"text-2xl font-bold\"    /> {getServicePricing (service)}</span> </div> </div> {/* Service Content */ ;}
}<div className=\"p-6\"    /> <p className=\"text-gray-600 mb-4 line-clamp-3\"    /> {service && service.description ;}
}</p> {/* Price */ ;}
}<div className=\"mb-4\"    /> <span className=\"text-3xl font-bold text-gray-900\"    /> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;}
}/month` ;
}</span> <span className=\"text-gray-500\"    /> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;}
}</span> </div> {/* Features */ ;}
}<div className=\"mb-6\"    /> <h4 className=\"font-semibold text-gray-900 mb-2\"    />Key Features:</h4> <ul className=\"space-y-1\"    /> {getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<likey= {idx;}
}className=\"flex items-center text-sm text-gray-600\"    /> <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    /> {feature ;}
}</li>) )}</ul> </div> {/* Category Badge */ ;}
}<div className=\"mb-4\"    /> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;
}    /> {getCategoryIcon (service && service.category)}<span className=\"ml-1\"    /> {service && service.category ;}
}</span> </span> </div> {/* Service Info */ ;}
}<div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    /> <div    /> <span className=\"font-medium\"    />Setup:</span> {getServiceSetupTime (service)}</div> <div    /> <span className=\"font-medium\"    />Trial:</span> {getServiceTrialDays (service)}days </div> </div> {/* ROI and Popularity */ ;}
}<div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    /> <div    /> <span className=\"font-medium\"    />Setup: </span> {getServiceSetupTime (service)}</div> <div    /> <span className=\"font-medium\"    />Trial:</span> {getServiceTrialDays (service,}
}days </div> </div> {/* ROI and Popularity */ ;}
}<div className=\"flex items-center justify-between mb-4\"    /> <div className=\"text-sm\"    /> <span className=\"text-gray-500\"    />Expected ROI:</span> <span className=\"text-green-600 font-semibold ml-1\"    /> {service && service.roi.split (' ') [0] ;}
}ROI </span> </div> {service && service.popular && (<div className=\"flex items-center gap-1 text-yellow-600\"    /> <Star className=\"w-4 h-4 fill-current\"    /> <span className=\"text-sm font-medium\"    />Popular</span> </div>)}{/* Price and Features */ ;}
}<div className=\"lg:w-1/3\"    /> <div className=\"text-right mb-4\"    /> <span className=\"text-3xl font-bold text-gray-900\"    /> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;}
}/month` ;
}</span> <span className=\"text-gray-500\"    /> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;}
}</span> </div> <div className=\"mb-4\"    /> <h4 className=\"font-semibold text-gray-900 mb-2\"    />Features:</h4> <ul className=\"space-y-1 text-sm text-gray-600\"    /> {service && service.features.slice (0, 4) .map ( (feature, idx) => (<likey= {idx;}
}className=\"flex items-center\"    /> <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    /> {feature ;}
}</li>) )}</ul> </div> {/* Category and Action */ ;}
}<div className=\"flex flex-col items-end space-y-3\"    /> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;
}    /> {getCategoryIcon (service && service.category)}<span className=\"ml-1\"    /> {service && service.category ;}
}</span> </span> <ahref= {service && service.link;}
}target=\" blank\" rel=\"noopener noreferrer\" className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\"    /> Learn More <ArrowRight className=\"w-4 h-4 ml-2\"    /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>)}</AnimatePresence> {/* No Results */ ;}
}target=\" blank\" rel=\"noopener noreferrer\" className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors text-sm font-medium flex items-center\"> Learn More <ArrowRight className=\"w-4 h-4 ml-2\"    /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>,
}</AnimatePresence> {/* No Results */ ;}
}{filteredServices && filteredServices.length === 0 && (<div className=\"text-center py-12\"    /> <div className=\"text-gray-400 mb-4\"    /> <Search className=\"w-16 h-16 mx-auto\"    /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />No services found</h3> <p className=\"text-gray-600\"    />Try adjusting your search terms or category filters.</p> </div>)}</div> </section> {/* Why Choose Us */ ;}
}<section className=\"py-20 bg-white\"    /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    /> <div className=\"text-center mb-16\"    /> <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\"    /> Why Choose Zion Tech Group? </h2> <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"    /> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    /> <motion&& motion.div initial= {{opacity: 0, y: 20;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0, y: 20;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0, y: 20;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{}export default ComprehensiveServicesShowcase;
}transition = {;}
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className=\"flex flex-col gap-2\"    />;
                    <a;
ursor/automate-test-improve-and-merge-code-646c;
  {}export default ComprehensiveServicesShowcase;
  {}

export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className=\"flex flex-col gap-2\"    />;
                    <a;
import React, { useState } from 'react';
import SEO from './seo/Seo';
import { Brain, Building, Circle, Monitor, Shield,Check, Phone, Mail, MapPin,TrendingUp, Zap, Globe;}
 } from 'lucide-react';
// Import our new service data;
import { advancedAIServices2025  } from '../data/2025-advanced-ai-services';
import { advancedCybersecurityServices2025  } from '../data/2025-advanced-cybersecurity-services';
import { advancedITServices2025  } from '../data/2025-advanced-it-services';
const ComprehensiveServicesShowcase2025 = () =    /> {const [activeTab, setActiveTab]  = useState('all')// Helper function to get service pricing;
  const getServicePricing = (if (service.pricing?.starter) return service.pricing.starter;

const ComprehensiveServicesShowcase2025 = () => ;
  const [activeTab, setActiveTab]  = useState('all')// Helper function to get service pricing;

const getServicePricing = (service: any) => {if (service.pricing?.starter);
  return service.pricing.starter;) => {
  return $3;}
}
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (typeof service.price = == 'string');
  return service.price;
    return 'Contact for pricing';
  }// Helper function to get service features;
  const getServiceFeatures = (return service.keyFeatures || service.features || [];) => {
  return $3;}
}
  }// Helper function to get service setup time;
  const getServiceSetupTime = (if (service.setupTime) return service.setupTime;

const getServiceFeatures = (service: any) => ;
  return service.keyFeatures || service.features || [];) => {
  return $3;}
}
  }// Helper function to get service setup time;
>>>>>>> origin/chore/fix-lint-and-merge

const getServiceSetupTime = (if (service.setupTime);
  return service.setupTime;
    if (service.pricing?.setupTime) return service.pricing.setupTime;
    if (service.price?.setupTime) return service.price.setupTime;
<<<<<<< HEAD
    return 'N/A';'
  }// Helper function to get service trial days;
  const getServiceTrialDays = ("service": any) => {if (service.trialDays) return service.trialDays;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  duration: 0 && 0.5, delay: 0 && 0.2 
}className="text-center p-6"> <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Globe className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3> <p className="text-gray-600"> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion && motion.div> </div> </div> </section> {;
  /* Contact Section */ ;
}<section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div className="text-center"> <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <p className="text-blue-100">+1 302 464 0950</p> </div> <div className="text-center"> <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <p className="text-blue-100">kleber@ziontechgroup && ziontechgroup.com</p> </div> <div className="text-center"> <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Business Transformation Consultation" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" > <Mail className="w-5 h-5" /> Start Consultation </a> <a href="https://ziontechgroup && ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2" > <Globe className="w-5 h-5" /> Visit Website </a> </div> </div> </section> </div>) ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;
                    <a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
    return 'N/A';) => {
  return $3;}
>>>>>>> origin/chore/fix-lint-and-merge
}
  }// Helper function to get service trial days;
  const getServiceTrialDays = (if (service.trialDays) return service.trialDays;

const getServiceTrialDays = (service: any) => {if (service.trialDays);
  return service.trialDays;
    if (service.pricing?.trialDays) return service.pricing.trialDays;
    if (service.price?.trialDays) return service.price.trialDays;
<<<<<<< HEAD
    return 'N/A';'
  }// All services combined;
  const allServices = [;
    ...advancedAIServices2025,...advancedCybersecurityServices2025,...advancedITServices2025;
  ];const categories = [;
    { "id": 'all', "name": 'All Services', "icon": <Circle className="w-5 h-5" /> },{ "id": 'business-intelligence', "name": 'Business Intelligence', "icon": <TrendingUp className="w-5 h-5" /> },{ "id": 'ai-automation', "name": 'AI Automation', "icon": <Brain className="w-5 h-5" /> },{ "id": 'it-infrastructure', "name": 'IT Infrastructure', "icon": <Building className="w-5 h-5" /> },{ "id": 'micro-saas', "name": 'Micro SAAS', "icon": <Zap className="w-5 h-5" /> },{ "id": 'ai-services', "name": 'AI Services', "icon": <Monitor className="w-5 h-5" /> }"
  ];const filteredServices = activeTab === 'all';'
    ? allServices;
    : allServices.filter((service) => {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services')return true;'

=======
<<<<<<< HEAD

=======
    return 'N/A';) => {
  return $3;}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
  }// All services combined;
  const allServices = [;
    ...advancedAIServices2025,...advancedCybersecurityServices2025,...advancedITServices2025;
  ];const categories = [;
    { id: 'all',}
  name: 'All Services', icon: <Circle className=\"w-5 h-5\"    /> },{ id: 'business-intelligence',}
  name: 'Business Intelligence', icon: <TrendingUp className=\"w-5 h-5\"    /> },{ id: 'ai-automation',}
  name: 'AI Automation', icon: <Brain className=\"w-5 h-5\"    /> },{ id: 'it-infrastructure',}
  name: 'IT Infrastructure', icon: <Building className=\"w-5 h-5\"    /> },{ id: 'micro-saas',}
  name: 'Micro SAAS', icon: <Zap className=\"w-5 h-5\"    /> },{ id: 'ai-services',}
  name: 'AI Services', icon: <Monitor className=\"w-5 h-5\"    /> }
  ];const filteredServices = activeTab === 'all';
    ? allServices;
    : allServices.filter(service => {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services')return true;
>>>>>>> origin/chore/fix-lint-and-merge

const allServices = [
  ...advancedAIServices2025,...advancedCybersecurityServices2025,...advancedITServices2025;
];


const categories = [
  { id: 'all',}
  name: 'All Services', icon: <Circle className=\"w-5 h-5\"    />,}
},{ id: 'business-intelligence',}
  name: 'Business Intelligence', icon: <TrendingUp className=\"w-5 h-5\"    />,}
},{ id: 'ai-automation',}
  name: 'AI Automation', icon: <Brain className=\"w-5 h-5\"    />,}
},{ id: 'it-infrastructure',}
  name: 'IT Infrastructure', icon: <Building className=\"w-5 h-5\"    />,}
},{ id: 'micro-saas',}
  name: 'Micro SAAS', icon: <Zap className=\"w-5 h-5\"    />,}
},{ id: 'ai-services',}
  name: 'AI Services', icon: <Monitor className=\"w-5 h-5\"    />,}
}
  ];

<<<<<<< HEAD
const filteredServices = activeTab === 'all';'
    ? allServices;
    : allServices.filter(service = > {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services';'
  }
  return true;
      })return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">;"
      <SEO;
        title="2025 Comprehensive Services Showcase - Zion Tech Group";"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions.";"
        keywords={["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"]}" />;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">;"
        <div className="absolute inset-0 bg-black/20"></div>;"
        <div className="relative max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-24">;"
          <motion.div;
            initial={{ "opacity": 0, "y": 20 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            className="text-center";"
          >;
            initial={{ "opacity": 0, "y": 20 
}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 
}
            className="text-center">"
=======
<<<<<<< HEAD

=======
const filteredServices = activeTab === 'all';
    ? allServices;
    : allServices.filter(service = > {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services';}
  return true;}
      })return (<div className=\"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100\"    />;
      <SEO;
        title=\'2025 Comprehensive Services Showcase - Zion Tech Group\';
        description=\'Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions.\';
        keywords={[\"micro SAAS\", \"IT services\", \"AI services\", \"business intelligence\", \"automation\", \"cloud infrastructure\"]}
         />;
      {/* Hero Section */}
      <section className=\"relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white\"    />;
        <div className=\"absolute inset-0 bg-black/20\"    /></div>;
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24\"    />;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=\'text-center\';
              />;
            initial={{ opacity: 0, y: 20 ,}
}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 ,}
}
            className=\"text-center\">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <h1 className=\"text-4xl md:text-6xl font-bold mb-6\"    />;
              2025 Comprehensive Services Showcase;
            </h1>;
            <p className=\"text-xl md:text-2xl mb-8 text-blue-100\"    />;
              Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services;
            </p>;
            <div className=\"flex flex-wrap justify-center gap-4 text-sm\"    />;
              <span className=\"bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30\"    />;
                {allServices.length}+ Services;
              </span>;
              <span className=\"bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30\"    />;
                AI-Powered Solutions;
              </span>;
              <span className=\"bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30\"    />;
                Enterprise Ready;
              </span>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Banner */}
<<<<<<< HEAD
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="flex flex-col "md":flex-row items-center justify-between gap-4">;"
            <div className="text-center "md":text-left">;"
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>;"
              <p className="text-blue-100">Get in touch with our experts today</p>;"
            </div>;
            <div className="flex flex-col "sm":flex-row items-center gap-4">;"
              <div className="flex items-center gap-2">;"
                <Phone className="w-4 h-4" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center gap-2">;"
                <Mail className="w-4 h-4" />;"
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center gap-2">;"
                <MapPin className="w-4 h-4" />;"
                <span>Middletown DE 19709</span>;
              </div>;
      </section>;
      {/* Category Tabs */}
      <section className="py-12 bg-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="flex flex-wrap justify-center gap-2">;"
            {categories.map((category) => (<button;
                }
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeTab === category.id;`                    ? 'bg-blue-600 text-white border-blue-600';'
                    : 'bg-white text-gray-700 border-gray-300 "hover":border-blue-300 "hover":text-blue-600';'
                }`}`              >;
                }`}>`
=======
<<<<<<< HEAD
=======
      <section className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"flex flex-col md:flex-row items-center justify-between gap-4\"    />;
            <div className=\"text-center md:text-left\"    />;
              <h3 className=\"text-xl font-semibold mb-2\"    />Ready to Transform Your Business?</h3>;
              <p className=\"text-blue-100\"    />Get in touch with our experts today</p>;
            </div>;
            <div className=\"flex flex-col sm:flex-row items-center gap-4\"    />;
              <div className=\"flex items-center gap-2\"    />;
                <Phone className=\"w-4 h-4\"    />;
                <span    />+1 302 464 0950</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <Mail className=\"w-4 h-4\"    />;
                <span    />kleber@ziontechgroup.com</span>;
              </div>;
              <div className=\"flex items-center gap-2\"    />;
                <MapPin className=\"w-4 h-4\"    />;
                <span    />Middletown DE 19709</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Category Tabs */}
      <section className=\"py-12 bg-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"flex flex-wrap justify-center gap-2\"    />;
            {categories.map((category) => (<button;}
                key={category.id}
                onClick={() =    /> setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeTab === category.id;
                    ? 'bg-blue-600 text-white border-blue-600';}
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600';}
                }`}
              >;
                }`}>
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {category.icon}
                {category.name}
              </button>;
            ))}
          </div>;
      </section>;
      {/* Services Grid */}
<<<<<<< HEAD
      <section className="py-16 bg-gray-50">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
            {filteredServices.map((service, index) => (<motion.div;
                }
                key={service.id}
                initial={{ "opacity": 0, "y": 20 
}
                animate={{ "opacity": 1, "y": 0 
}
                transition={{ "duration": 0.5, "delay": index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100";"
              >;
                {/* Service Header */}
                className="bg-white rounded-2xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">"

                {/* Service Header *
=======
<<<<<<< HEAD

=======
      <section className=\"py-16 bg-gray-50\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;
            {filteredServices.map((service, index) => (<motion.div;}
                key={service.id}
                initial={{ opacity: 0, y: 20 ,}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=\'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\';
                  />;
                {/* Service Header */}
                className=\"bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\">
>>>>>>> origin/chore/fix-lint-and-merge

                {/* Service Header *,}
}
                <div className=\"p-6 border-b border-gray-100\"    />;
                  <div className=\"flex items-start justify-between mb-4\"    />;
                    <div className=\"flex-1\"    />;
                      <h3 className=\"text-xl font-bold text-gray-900 mb-2\"    />;
                        {service.name}
                      </h3>;
                      <p className=\"text-gray-600 text-sm mb-3\"    />;
                        {service.tagline}
                      </p>;
                      <div className=\"flex items-center gap-2 text-sm text-gray-500\"    />;
                        <span className=\"px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium\"    />;
                          {service.category}
                        </span>;
                        <span className=\"px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium\"    />;
                          Micro SAAS;
                        </span>;
                      </div>;
                {/* Service Content */}
<<<<<<< HEAD
                <div className="p-6">;"
                  <p className="text-gray-700 mb-4 line-clamp-3">;"
=======
<<<<<<< HEAD

=======
                <div className=\"p-6\"    />;
                  <p className=\"text-gray-700 mb-4 line-clamp-3\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {service.description}
                  </p>;
                  {/* Pricing */}
<<<<<<< HEAD
                  <div className="mb-4">;"
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4>;"
                    <div className="space-y-1">;"
                      <div className="flex justify-between text-sm">;"
                        <span className="text-gray-600">Starting "at":</span>;"
                        <span className="font-semibold text-green-600">;"
                          {service.pricing ? service.pricing.starter : `${(service as any).price}${(service as any).period}`}`                        </span>;
                      </div>;
                      <div className="text-xs text-gray-500">;"
                        {(service as any).trialDays ? `${(service as any).trialDays} days free trial` : ''} • {(service as any).setupTime ? `${(service as any).setupTime} setup` : 'Custom setup'}'                      </div>;
                    </div>;
                  {/* Key Features */}
                  <div className="mb-4">;"
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>;"
                    <div className="grid grid-cols-2 gap-1">;"
                      {service.features?.slice(0, 6).map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-sm text-gray-600">;"
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />;"
                          <span className="truncate">{feature}</span>;"
                        </div>;
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      ))}
                    </div>

                  {/* Market Info */}
<<<<<<< HEAD
                  <div className="mb-4 text-sm">;"
                    <div className="flex justify-between mb-1">;"
                      <span className="text-gray-600">Market "Size":</span>;"
                      <span className="font-semibold text-gray-900">{service.marketSize}</span>;"
                    </div>;
                    <div className="flex justify-between">;"
                      <span className="text-gray-600">Target "Audience":</span>;"
                      <span className="font-semibold text-gray-900">{service.targetAudience}</span>;"
                    </div>;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;"
                    <a;
                      href={`"mailto":${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}// All services combined const allServices = [ ...advancedAIMLServices;`                      href = {`"mailto": ${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name},'
}// All services combined;
  const allServices = [ ...advancedAIMLServices;
=======

=======
                  <div className=\"mb-4\"    />;
                    <h4 className=\"text-sm font-semibold text-gray-900 mb-2\"    />Pricing</h4>;
                    <div className=\"space-y-1\"    />;
                      <div className=\"flex justify-between text-sm\"    />;
                        <span className=\"text-gray-600\"    />Starting at:</span>;
                        <span className=\"font-semibold text-green-600\"    />;
                          {service.pricing ? service.pricing.starter : `${(service as any).price}${(service as any).period}`}
                        </span>;
                      </div>;
                      <div className=\"text-xs text-gray-500\"    />;
                        {(service as any).trialDays ? `${(service as any).trialDays} days free trial` : ''} • {(service as any).setupTime ? `${(service as any).setupTime} setup` : 'Custom setup'}
                      </div>;
                    </div>;
                  </div>;
                  {/* Key Features */}
                  <div className=\"mb-4\"    />;
                    <h4 className=\"text-sm font-semibold text-gray-900 mb-2\"    />Key Features</h4>;
                    <div className=\"grid grid-cols-2 gap-1\"    />;
                      {service.features?.slice(0, 6).map((feature, idx) => (<div key={idx} className=\"flex items-center gap-2 text-sm text-gray-600\"    />;
                          <Check className=\"w-3 h-3 text-green-500 flex-shrink-0\"    />;
                          <span className=\"truncate\"    />{feature}</span>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                  {/* Market Info */}
                  <div className=\"mb-4 text-sm\"    />;
                    <div className=\"flex justify-between mb-1\"    />;
                      <span className=\"text-gray-600\"    />Market Size:</span>;
                      <span className=\"font-semibold text-gray-900\"    />{service.marketSize}</span>;
                    </div>;
                    <div className=\"flex justify-between\"    />;
                      <span className=\"text-gray-600\"    />Target Audience:</span>;
                      <span className=\"font-semibold text-gray-900\"    />{service.targetAudience}</span>;
                    </div>;
                  </div>;
                  {/* CTA Button */}
                  <div className=\"flex flex-col gap-2\"    />;
                    <a;
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}// All services combined const allServices = [ ...advancedAIMLServices;
                      href = {`mailto: ${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name},
}// All services combined;
  const allServices = [ ...advancedAIMLServices;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
 // All services combined const allServices = [ ...advancedAIMLServices;
 // All services combined const allServices  = [ ...advancedAIMLServices;// All services combined const allServices  = [ ...advancedAIMLServices;...advancedCybersecurityServices;
...advancedCloudDevOpsServices2025;
...industrySpecificSolutions;
...emergingTechnologyServices ];
<<<<<<< HEAD
  {"opacity": 0, "y": 20;
}animate= {{"opacity": 1, "y": 0;
}transition= {{}initial= {{}initial= {{"opacity": 0, "y": 20;
}animate= {{"opacity": 1, "y": 0;
}transition= {{{"opacity": 0;
}animate= {{"opacity": 1;
}exit= {{}initial= {{}initial= {{"opacity": 0, "y": 20;
}animate= {{"opacity": 1, "y": 0;
}transition= {{}className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {{}className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {/* Service Header */ ;"
}transition= {{}className="bg-white rounded-xl shadow-lg "hover": shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {,"
}className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"> {/* Service Header */ ;"
}<divclassName= {`p-6 bg-gradient-to-r $ {service && service.color;`}text-white`;`}> <div className="flex items-center justify-between mb-4"> <span className="text-4xl"> {service && service.icon ;"
}</span> {service && service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold"> POPULAR </span>)}</div> <h3 className="text-xl font-bold mb-2"> {service && service.name ;"
}</h3> <p className="text-blue-100 text-sm"> {service && service.tagline ;"
}</p> {/* Price */ ;
}<div className="mt-4"> <span className="text-2xl font-bold"> {getServicePricing (service)}</span> </div> </div> {/* Service Content */ ;"
}<div className="p-6"> <p className="text-gray-600 mb-4 line-clamp-3"> {service && service.description ;"
}</p> {/* Price */ ;
}<div className="mb-4"> <span className="text-3xl font-bold text-gray-900"> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;`}/month` ;`}</span> <span className="text-gray-500"> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;'
}</span> </div> {/* Features */ ;
}<div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-2">Key "Features":</h4> <ul className="space-y-1"> {getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<likey= {idx;"
}className="flex items-center text-sm text-gray-600"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {feature ;"
}</li>) )}</ul> </div> {/* Category Badge */ ;
}<div className="mb-4"> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;`}> {getCategoryIcon (service && service.category)}<span className="ml-1"> {service && service.category ;"
}</span> </span> </div> {/* Service Info */ ;
}<div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600"> <div> <span className="font-medium">"Setup":</span> {getServiceSetupTime (service)}</div> <div> <span className="font-medium">"Trial":</span> {getServiceTrialDays (service)}days </div> </div> {/* ROI and Popularity */ ;"
}<div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600"> <div> <span className="font-medium">"Setup": </span> {getServiceSetupTime (service)}</div> <div> <span className="font-medium">"Trial":</span> {getServiceTrialDays (service,"
}days </div> </div> {/* ROI and Popularity */ ;
}<div className="flex items-center justify-between mb-4"> <div className="text-sm"> <span className="text-gray-500">Expected "ROI":</span> <span className="text-green-600 font-semibold ml-1"> {service && service.roi.split (' ') [0] ;'
}ROI </span> </div> {service && service.popular && (<div className="flex items-center gap-1 text-yellow-600"> <Star className="w-4 h-4 fill-current" /> <span className="text-sm font-medium">Popular</span> </div>)}{/* Price and Features */ ;"
}<div className=""lg":w-1/3"> <div className="text-right mb-4"> <span className="text-3xl font-bold text-gray-900"> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;`}/month` ;`}</span> <span className="text-gray-500"> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;'
}</span> </div> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">"Features":</h4> <ul className="space-y-1 text-sm text-gray-600"> {service && service.features.slice (0, 4) .map ( (feature, idx) => (<likey= {idx;"
}className="flex items-center"> <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {feature ;"
}</li>) )}</ul> </div> {/* Category and Action */ ;
}<div className="flex flex-col items-end space-y-3"> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;`}> {getCategoryIcon (service && service.category)}<span className="ml-1"> {service && service.category ;"
}</span> </span> <ahref= {service && service.link;
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>)}</AnimatePresence> {/* No Results */ ;"
}target=" blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover": bg-blue-700 transition-colors text-sm font-medium flex items-center"> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>,"
}</AnimatePresence> {/* No Results */ ;
}{filteredServices && filteredServices.length === 0 && (<div className="text-center py-12"> <div className="text-gray-400 mb-4"> <Search className="w-16 h-16 mx-auto" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3> <p className="text-gray-600">Try adjusting your search terms or category filters.</p> </div>)}</div> </section> {/* Why Choose Us */ ;"
}<section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8"> <div className="text-center mb-16"> <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8"> <motion&& motion.div initial= {{"opacity": 0, "y": 20;"
}whileInView= {{"opacity": 1, "y": 0;
}transition= {{{"opacity": 0, "y": 20;
}whileInView= {{"opacity": 1, "y": 0;
}transition= {{{"opacity": 0, "y": 20;
}whileInView= {{"opacity": 1, "y": 0;
}transition= {{}export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;"
=======
<<<<<<< HEAD

=======
  {opacity: 0, y: 20;}
}animate= {{opacity: 1, y: 0;}
}transition= {{}initial= {{}initial= {{opacity: 0, y: 20;}
}animate= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0;}
}animate= {{opacity: 1;}
}exit= {{}initial= {{}initial= {{opacity: 0, y: 20;}
}animate= {{opacity: 1, y: 0;}
}transition= {{}className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"    /> {{}className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {/* Service Header */ ;}
}transition= {{}className=\"bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {,}
}className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"> {/* Service Header */ ;}
}<divclassName= {`p-6 bg-gradient-to-r $ {service && service.color;}
}text-white`;
}    /> <div className=\"flex items-center justify-between mb-4\"    /> <span className=\"text-4xl\"    /> {service && service.icon ;}
}</span> {service && service.popular && (<span className=\"bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold\"    /> POPULAR </span>)}</div> <h3 className=\"text-xl font-bold mb-2\"    /> {service && service.name ;}
}</h3> <p className=\"text-blue-100 text-sm\"    /> {service && service.tagline ;}
}</p> {/* Price */ ;}
}<div className=\"mt-4\"    /> <span className=\"text-2xl font-bold\"    /> {getServicePricing (service)}</span> </div> </div> {/* Service Content */ ;}
}<div className=\"p-6\"    /> <p className=\"text-gray-600 mb-4 line-clamp-3\"    /> {service && service.description ;}
}</p> {/* Price */ ;}
}<div className=\"mb-4\"    /> <span className=\"text-3xl font-bold text-gray-900\"    /> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;}
}/month` ;
}</span> <span className=\"text-gray-500\"    /> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;}
}</span> </div> {/* Features */ ;}
}<div className=\"mb-6\"    /> <h4 className=\"font-semibold text-gray-900 mb-2\"    />Key Features:</h4> <ul className=\"space-y-1\"    /> {getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<likey= {idx;}
}className=\"flex items-center text-sm text-gray-600\"    /> <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    /> {feature ;}
}</li>) )}</ul> </div> {/* Category Badge */ ;}
}<div className=\"mb-4\"    /> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;
}    /> {getCategoryIcon (service && service.category)}<span className=\"ml-1\"    /> {service && service.category ;}
}</span> </span> </div> {/* Service Info */ ;}
}<div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    /> <div    /> <span className=\"font-medium\"    />Setup:</span> {getServiceSetupTime (service)}</div> <div    /> <span className=\"font-medium\"    />Trial:</span> {getServiceTrialDays (service)}days </div> </div> {/* ROI and Popularity */ ;}
}<div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    /> <div    /> <span className=\"font-medium\"    />Setup: </span> {getServiceSetupTime (service)}</div> <div    /> <span className=\"font-medium\"    />Trial:</span> {getServiceTrialDays (service,}
}days </div> </div> {/* ROI and Popularity */ ;}
}<div className=\"flex items-center justify-between mb-4\"    /> <div className=\"text-sm\"    /> <span className=\"text-gray-500\"    />Expected ROI:</span> <span className=\"text-green-600 font-semibold ml-1\"    /> {service && service.roi.split (' ') [0] ;}
}ROI </span> </div> {service && service.popular && (<div className=\"flex items-center gap-1 text-yellow-600\"    /> <Star className=\"w-4 h-4 fill-current\"    /> <span className=\"text-sm font-medium\"    />Popular</span> </div>)}{/* Price and Features */ ;}
}<div className=\"lg:w-1/3\"    /> <div className=\"text-right mb-4\"    /> <span className=\"text-3xl font-bold text-gray-900\"    /> {typeof service && service.price === 'string' ? service && service.price : `$$ {service && service.price.monthly ;}
}/month` ;
}</span> <span className=\"text-gray-500\"    /> {typeof service && service.price === 'string' ? (service as any) .period || '/month' : '/month' ;}
}</span> </div> <div className=\"mb-4\"    /> <h4 className=\"font-semibold text-gray-900 mb-2\"    />Features:</h4> <ul className=\"space-y-1 text-sm text-gray-600\"    /> {service && service.features.slice (0, 4) .map ( (feature, idx) => (<likey= {idx;}
}className=\"flex items-center\"    /> <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    /> {feature ;}
}</li>) )}</ul> </div> {/* Category and Action */ ;}
}<div className=\"flex flex-col items-end space-y-3\"    /> <spanclassName= {`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r $ {getCategoryColor (service && service.category)}text-white`;
}    /> {getCategoryIcon (service && service.category)}<span className=\"ml-1\"    /> {service && service.category ;}
}</span> </span> <ahref= {service && service.link;}
}target=\" blank\" rel=\"noopener noreferrer\" className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\"    /> Learn More <ArrowRight className=\"w-4 h-4 ml-2\"    /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>)}</AnimatePresence> {/* No Results */ ;}
}target=\" blank\" rel=\"noopener noreferrer\" className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors text-sm font-medium flex items-center\"> Learn More <ArrowRight className=\"w-4 h-4 ml-2\"    /> </a> </div> </div> </div> </div> </motion && motion.div>) )}</motion && motion.div>,
}</AnimatePresence> {/* No Results */ ;}
}{filteredServices && filteredServices.length === 0 && (<div className=\"text-center py-12\"    /> <div className=\"text-gray-400 mb-4\"    /> <Search className=\"w-16 h-16 mx-auto\"    /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />No services found</h3> <p className=\"text-gray-600\"    />Try adjusting your search terms or category filters.</p> </div>)}</div> </section> {/* Why Choose Us */ ;}
}<section className=\"py-20 bg-white\"    /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    /> <div className=\"text-center mb-16\"    /> <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\"    /> Why Choose Zion Tech Group? </h2> <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"    /> We deliver innovative, enterprise-grade solutions that transform businesses and drive growth </p> </div> <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    /> <motion&& motion.div initial= {{opacity: 0, y: 20;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0, y: 20;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0, y: 20;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{}export default ComprehensiveServicesShowcase;
}transition = {;}
}

export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className=\"flex flex-col gap-2\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <a;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
  {}export default ComprehensiveServicesShowcase;
<<<<<<< HEAD
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;"
                    <a;
ursor/fix-netlify-build-and-merge-to-main-9571;
                      className="w-full bg-blue-600 "hover":bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2";"
                    >;
                      className="w-full bg-blue-600 "hover":bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">"

                      <Mail className="w-4 h-4" />;"
                      Get Started;
                    </a>;
                    <a;
                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}`ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}ursor/automate-test-improve-and-merge-code-646c;`                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}`                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}`ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}className="w-full bg-gray-100 "hover":bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2";"                    >;
                      href={`"tel": ${(service as any).mobile || '+1 302 464 0950'}`}href={`"tel":${(service as any).mobile || '+1 302 464 0950'},'}
ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`"tel": ${(service as any).mobile || '+1 302 464 0950'},'
}ursor/automate-test-improve-and-merge-code-646c;
                      href={`"tel": ${(service as any).mobile || '+1 302 464 0950'}`}`                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'},'
}
ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`"tel": ${(service as any).mobile || '+1 302 464 0950'},'}className="w-full bg-gray-100 "hover":bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">"

                      <Phone className="w-4 h-4" />;"
=======
  {}

export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
<<<<<<< HEAD

=======
                  <div className=\"flex flex-col gap-2\"    />;
                    <a;
ursor/fix-netlify-build-and-merge-to-main-9571;
                      className=\'w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\';
                        />;
                      className=\"w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\">

                      <Mail className=\"w-4 h-4\"    />;
                      Get Started;
                    </a>;
                    <a;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}ursor/automate-test-improve-and-merge-code-646c;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}className=\'w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\';
                        />;
                      href={`tel: ${(service as any).mobile || '+1 302 464 0950'}`}href={`tel:${(service as any).mobile || '+1 302 464 0950'},
}
ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`tel: ${(service as any).mobile || '+1 302 464 0950'},
}ursor/automate-test-improve-and-merge-code-646c;
                      href={`tel: ${(service as any).mobile || '+1 302 464 0950'}`}
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'},
}
ursor/fix-netlify-build-and-merge-to-main-9571;
                      href={`tel: ${(service as any).mobile || '+1 302 464 0950'},
}className=\"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\">

                      <Phone className=\"w-4 h-4\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      Call Now;
                    </a>;
                  </div>;
              </motion.div>;
            ))}
          </div>;
          {/* Services Display */}
<<<<<<< HEAD
          <AnimatePresence mode="wait">;"
            {viewMode === 'grid' ? (<motion.div;'
                  <div className="flex flex-col gap-2">"
                    <a
}
href={`"mailto": ${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}`                      className="w-full bg-blue-600 "hover":bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2""
                    >
                      <Mail className="w-4 h-4" />"
                      Get Started
                    </a>
                    <a,
href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}`                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}`                      className="w-full bg-gray-100 "hover":bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2""
                    >
                      <Phone className="w-4 h-4" />"
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      Call Now
=======
          <AnimatePresence mode=\"wait\"    />;
            {viewMode === 'grid' ? (<motion.div;
                  <div className=\"flex flex-col gap-2\"    />}
                    <a;}
href={`mailto: ${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                      className=\"w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\"
                        />
                      <Mail className=\"w-4 h-4\"    />
                      Get Started;
                    </a>
                    <a;
href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      className=\"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\"
                        />
                      <Phone className=\"w-4 h-4\"    />
                      Call Now;
>>>>>>> origin/chore/fix-lint-and-merge
                    </a>
                  </div>
              </motion.div>
            ))}
          </div>

          {/* Services Display */}
<<<<<<< HEAD
          <AnimatePresence mode="wait">"
            {viewMode === 'grid' ? ('
              <motion.div 
          {/* Services Display */}
          <AnimatePresence mode="wait">;"
            {viewMode === 'grid' ? (<motion.div;'
                      }
                      href={`"mailto":${(service as any).contact || 'kleber@ziontechgroup && ziontechgroup.com'}?subject=Inquiry about ${service && service.name}`}`          {/* Services Display *
}
          <AnimatePresence mode="wait">;"
            {viewMode === 'grid' ? (<motion.div;'
                      }
                      href={`"mailto": ${(service as any).contact || 'kleber@ziontechgroup && ziontechgroup.com'}?subject=Inquiry about ${service && service.name},'
}
                      className="w-full bg-blue-600 "hover":bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;"
                      <Mail className="w-4 h-4" />;"
                      Get Started;
                    </a>;
                    <a;
                      href={`"tel":${(service as any).mobile || '+1 302 464 0950'}`}`                      href={`"tel": ${(service as any).mobile || '+1 302 464 0950'},'
}
                      className="w-full bg-gray-100 "hover":bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;"
                      <Phone className="w-4 h-4" />;"
=======
<<<<<<< HEAD

=======
          <AnimatePresence mode=\"wait\"    />
            {viewMode === 'grid' ? (}
              <motion.div }
          {/* Services Display */}
          <AnimatePresence mode=\"wait\"    />;
            {viewMode === 'grid' ? (<motion.div;}
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup && ziontechgroup.com'}?subject=Inquiry about ${service && service.name}`}
          {/* Services Display *,}
}
          <AnimatePresence mode=\"wait\"    />;
            {viewMode === 'grid' ? (<motion.div;}
                      href={`mailto: ${(service as any).contact || 'kleber@ziontechgroup && ziontechgroup.com'}?subject=Inquiry about ${service && service.name},
}
                      className=\"w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\"    />;
                      <Mail className=\"w-4 h-4\"    />;
                      Get Started;
                    </a>;
                    <a;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      href={`tel: ${(service as any).mobile || '+1 302 464 0950'},
}
                      className=\"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2\"    />;
                      <Phone className=\"w-4 h-4\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      Call Now;
                    </a>;
                  </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
          </div>;{/* Services Display */}
          <AnimatePresence mode=\"wait\"    />;
            {viewMode === 'grid' ? (<motion&& motion.div;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;}
ursor/fix-netlify-build-and-merge-to-main-9571;}
          {/* Services Display */}
<<<<<<< HEAD
          <AnimatePresence mode="wait">;"
            {viewMode === 'grid' ? (<motion.div;'
}
ursor/automate-test-improve-and-merge-code-646c;
                key="grid";"
                initial={{ "opacity": 0 }}
                animate={{ "opacity": 1 }}
                exit={{ "opacity": 0 }}className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
                {filteredServices && filteredServices.map((service, index) => (<motion&& motion.div;
                    }
                    key={service && service.id}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.5, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">;"
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}>;`                exit={{ "opacity": 0 
}className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
                {filteredServices && filteredServices.map((service, index) => (<motion&& motion.div;
                    }
                    key={service && service.id}
                    initial={{ "opacity": 0, "y": 20 
}
                    animate={{ "opacity": 1, "y": 0 
}
                    transition={{ "duration": 0 && 0.5, "delay": index * 0 && 0.1 
}
                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">;"
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}>`
                      <div className="flex items-center justify-between mb-4">;"
                        <span className="text-4xl">{service && service.icon}</span>;"
                        {service && service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">;"
                            }
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            POPULAR;
                          </span>;
                        )}
                      {/* Price */}
<<<<<<< HEAD
                      <div className="mt-4">;"
                        <span className="text-2xl font-bold">;"
                          {getServicePricing(service)}{/* Price */}
                      <div className="mt - 4">;"
                        <span className="text - 2xl font - bold">;"
=======

=======
          <AnimatePresence mode=\"wait\"    />;
            {viewMode === 'grid' ? (<motion.div;
ursor/automate-test-improve-and-merge-code-646c;}
                key=\'grid\';}
=======
          </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




          {/* Services Display */}
          <AnimatePresence mode="wait">;
            {viewMode === 'grid' ? (;
              <motion&& motion.div 
                key="grid"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;
                {filteredServices && filteredServices.map((service, index) => (<motion&& motion.div;}
                    key={service && service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                    className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"    />;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}    />;
                exit={{ opacity: 0 ,}
}className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
                {filteredServices && filteredServices.map((service, index) => (<motion&& motion.div;}
                    key={service && service.id}
                    initial={{ opacity: 0, y: 20 ,}
}
                    animate={{ opacity: 1, y: 0 ,}
}
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 ,}
}
                    className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"    />;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}    />

                      <div className=\"flex items-center justify-between mb-4\"    />;
                        <span className=\"text-4xl\"    />{service && service.icon}</span>;
                        {service && service.popular && (<span className=\"bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold\"    />;
                            POPULAR;}
                          </span>;}
                        )}
<<<<<<< HEAD
                      {/* Price */}
                      <div className=\"mt-4\"    />;
                        <span className=\"text-2xl font-bold\"    />;
                          {getServicePricing(service)}{/* Price */}
                      <div className=\"mt - 4\"    />;
                        <span className=\"text - 2xl font - bold\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======

                      </div>;
                      <h3 className="text-xl font-bold mb-2">{service && service.name}</h3>;
                      <p className="text-blue-100 text-sm">{service && service.tagline}</p>;



                      

<<<<<<< HEAD
                      </div>;
                      <h3 className="text-xl font-bold mb-2">{service && service.name}</h3>;
                      <p className="text-blue-100 text-sm">{service && service.tagline}</p>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {/* Price */}
                      <div className="mt-4">;
                        <span className="text-2xl font-bold">;
                          {getServicePricing(service)}

const filtered_services = active_tab === 'all' ? all_services return (<div className="min - h-screen bg - gradient - to - br from - slate - 50 via - blue - 50 to - indigo - 100"> <SEO title="2025 Comprehensive Services Showcase - Zion Tech Group" description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting - edge solutions." keywords= {
  ["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"];
}/> {
  /* Hero Section */;
}<section className="relative overflow - hidden bg - gradient - to - r from - blue - 900 via - purple - 900 to - indigo - 900 text - white"> <div className="absolute inset - 0 bg - black / 20"></div> <div className="relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}className="text - center" > <h1 className="text - 4xl md:text - 6xl font - bold mb - 6"> 2025 Comprehensive Services Showcase </h1> <p className="text - xl md:text - 2xl mb - 8 text - blue - 100"> Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services </p> <div className="flex flex - wrap justify - center gap - 4 text - sm"> <span className="bg - blue - 600 / 20 px - 4 py - 2 rounded - full border border - blue - 400 / 30"> {
  all_services.length;
}+ Services </span> <span className="bg - purple - 600 / 20 px - 4 py - 2 rounded - full border border - purple - 400 / 30"> AI - Powered Solutions </span> <span className="bg - green - 600 / 20 px - 4 py - 2 rounded - full border border - green - 400 / 30"> Enterprise Ready </span> </div> </motion.div> </div> </section> {
  /* Contact Banner */;
}<section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 8"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8"> <div className="flex flex - col md:flex - row items - center justify - between gap - 4"> <div className="text - center md:text - left"> <h3 className="text - xl font - semibold mb - 2">Ready to Transform Your Business?</h3> <p className="text - blue - 100">Get in touch with our experts today</p> </div> <div className="flex flex - col sm:flex - row items - center gap - 4"> <div className="flex items - center gap - 2"> <Phone className="w - 4 h - 4" /> <span>+1 302 464 0950</span> </div> <div className="flex items - center gap - 2"> <Mail className="w - 4 h - 4" /> <span > kleber@ziontechgroup.com</span> </div> <div className="flex items - center gap - 2"> <MapPin className="w - 4 h - 4" /> <span > Middletown DE 19709</span> </div> </div> </div> </div> </section> {
  /* Category Tabs */;
}<section className="py - 12 bg - white"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8"> <div className="flex flex - wrap justify - center gap - 2"> {
  categories.map ( (category) => (<button key= {
  category.id;
}on_click= {
  () => setActiveTab (category.id);
}className= {
  `flex items - center gap - 2 px - 4 py - 2 rounded - full border transition - all $ {
  active_tab === category.id ? 'bg - blue - 600 text - white border - blue - 600' : 'bg - white text - gray - 700 border - gray - 300 hover:border - blue - 300 hover:text - blue - 600';
}`;
}> {
  category.icon;
}{
  category.name;
}</button>) );
}</div> </div> </section> {
  /* Services Grid */;
}<section className="py - 16 bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8"> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> {
  filtered_services.map ( (service, index) => (<motion.div key= {
  service.id;
}initial= {
  {
  opacity: 0, coordinate_y: 20;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.5, delay: index * 0.1;
}className="bg - white rounded - 2xl shadow - lg hover:shadow - xl transition - all duration - 300 overflow - hidden border border - gray - 100" > {
  /* Service Header */;
}<div className="p - 6 border - b border - gray - 100"> <div className="flex items - start justify - between mb - 4"> <div className="flex - 1"> <h3 className="text - xl font - bold text - gray - 900 mb - 2"> {
  service.name;
}</h3> <p className="text - gray - 600 text - sm mb - 3"> {
  service.tagline;
}</p> <div className="flex items - center gap - 2 text - sm text - gray - 500"> <span className="px - 2 py - 1 bg - blue - 100 text - blue - 700 rounded - full text - xs font - medium"> {
  service.category;
}</span> <span className="px - 2 py - 1 bg - green - 100 text - green - 700 rounded - full text - xs font - medium"> Micro SAAS </span> </div> </div> </div> </div> {
  /* Service Content */;
}<div className="p - 6"> <p className="text - gray - 700 mb - 4 line - clamp - 3"> {
  service.description;
}</p> {
  /* Pricing */;
}<div className="mb - 4"> <h4 className="text - sm font - semibold text - gray - 900 mb - 2">Pricing</h4> <div className="space - y-1"> <div className="flex justify - between text - sm"> <span className="text - gray - 600">Starting at:</span> <span className="font - semibold text - green - 600"> {
  service.pricing ? service.pricing.starter : `$ {
  (service as any) .price;
}$ {
  (service as any) .period;
}`;
}</span> </div> <div className="text - xs text - gray - 500"> {
  (service as any) .trial_days ? `$ {
  (service as any) .trial_days;
}days free trial` : '';
}• {
  (service as any) .setup_time ? `$ {
  (service as any) .setup_time;
}setup` : 'Custom setup';
}</div> </div> </div> {
  /* Key Features */;
}<div className="mb - 4"> <h4 className="text - sm font - semibold text - gray - 900 mb - 2">Key Features</h4> <div className="grid grid - cols - 2 gap - 1"> {
  service.features?.slice (0, 6) .map ( (feature, idx) => (<div key= {
  idx;
}className="flex items - center gap - 2 text - sm text - gray - 600"> <Check className="w - 3 h - 3 text - green - 500 flex - shrink - 0" /> <span className="truncate"> {
  feature;
}</span> </div>) );
}</div> </div> {
  /* Market Info */;
}<div className="mb - 4 text - sm"> <div className="flex justify - between mb - 1"> <span className="text - gray - 600">Market Size:</span> <span className="font - semibold text - gray - 900"> {
  service.market_size;
}</span> </div> <div className="flex justify - between"> <span className="text - gray - 600">Target Audience:</span> <span className="font - semibold text - gray - 900"> {
  service.target_audience;
}</span> </div> </div> {
  /* CTA Button */;
}<div className="flex flex - col gap - 2"> <a href= {
  `mailto:$ {
  (service as any) .contact || 'kleber@ziontechgroup.com';
}?subject = Inquiry about $ {
  service.name;
}`;
}className="w - full bg - blue - 600 hover:bg - blue - 700 text - white text - center py - 2 px - 4 rounded - lg font - medium transition - colors flex items - center justify - center gap - 2" > <Mail className="w - 4 h - 4" /> Get Started </a> <a href= {
  `tel:$ {
  (service as any) .mobile || '+1 302 464 0950';
}`;
}className="w - full bg - gray - 100 hover:bg - gray - 200 text - gray - 700 text - center py - 2 px - 4 rounded - lg font - medium transition - colors flex items - center justify - center gap - 2" > <Phone className="w - 4 h - 4" /> Call Now </a> </div> </div> </motion.div>) );
}</div> {
  /* Services Display */;
}<AnimatePresence mode="wait"> {
  view_mode === 'grid' ? (<motion.div key="grid" initial= {
  {
  opacity: 0;
}animate= {
  {
  opacity: 1;
}exit= {
  {
  opacity: 0;
}className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8" > {
  filtered_services.map ( (service, index) => (<motion.div key= {
  service.id;
}initial= {
  {
  opacity: 0, coordinate_y: 20;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.5, delay: index * 0.1;
}className="bg - white rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 overflow - hidden border border - gray - 100" > {
  /* Service Header */;
}<div className= {
  `p - 6 bg - gradient - to - r $ {
  service.color;
}text - white`;
}> <div className="flex items - center justify - between mb - 4"> <span className="text - 4xl"> {
  service.icon;
}</span> {
  service.popular && (<span className="bg - yellow - 400 text - yellow - 900 px - 2 py - 1 rounded - full text - xs font - bold"> POPULAR </span>);
}</div> <h3 className="text - xl font - bold mb - 2"> {
  service.name;
}</h3> <p className="text - blue - 100 text - sm"> {
  service.tagline;
}</p> {
  /* Price */;
}<div className="mt - 4"> <span className="text - 2xl font - bold"> {
  getServicePricing (service);
}</span> </div> </div> {
  /* Service Content */;
}<div className="p - 6"> <p className="text - gray - 600 mb - 4 line - clamp - 3"> {
  service.description;
}</p> {
  /* Price */;
}<div className="mb - 4"> <span className="text - 3xl font - bold text - gray - 900"> {
  typeof service.price === 'string' ? service.price : `$$ {
  service.price.monthly;
}/month`;
}</span> <span className="text - gray - 500"> {
  typeof service.price === 'string' ? (service as any) .period || '/month' : '/month';
}</span> </div> {
  /* Features */;
}<div className="mb - 6"> <h4 className="font - semibold text - gray - 900 mb - 2">Key Features:</h4> <ul className="space - y-1"> {
  getServiceFeatures (service) .slice (0, 4) .map ( (feature, idx) => (<li key= {
  idx;
}className="flex items - center text - sm text - gray - 600"> <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" /> {
  feature;
}</li>) );
}</ul> </div> {
  /* Category Badge */;
}<div className="mb - 4"> <span className= {
  `inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r $ {
  getCategoryColor (service.category);
}text - white`;
}> {
  getCategoryIcon (service.category);
}<span className="ml - 1"> {
  service.category;
}</span> </span> </div> {
  /* Service Info */;
}<div className="grid grid - cols - 2 gap - 4 mb - 4 text - sm text - gray - 600"> <div> <span className="font - medium">Setup:</span> {
  getServiceSetupTime (service);
}</div> <div> <span className="font - medium">Trial:</span> {
  getServiceTrialDays (service);
}days </div> </div> {
  /* ROI and Popularity */;
}<div className="flex items - center justify - between mb - 4"> <div className="text - sm"> <span className="text - gray - 500">Expected ROI:</span> <span className="text - green - 600 font - semibold ml - 1"> {
  service.roi.split (' ') [0];
}ROI </span> </div> {
  service.popular && (<div className="flex items - center gap - 1 text - yellow - 600"> <Star className="w - 4 h - 4 fill - current" /> <span className="text - sm font - medium">Popular</span> </div>);
}{
  /* Price and Features */;
}<div className="lg:w - 1/3"> <div className="text - right mb - 4"> <span className="text - 3xl font - bold text - gray - 900"> {
  typeof service.price === 'string' ? service.price : `$$ {
  service.price.monthly;
}/month`;
}</span> <span className="text - gray - 500"> {
  typeof service.price === 'string' ? (service as any) .period || '/month' : '/month';
}</span> </div> <div className="mb - 4"> <h4 className="font - semibold text - gray - 900 mb - 2">Features:</h4> <ul className="space - y-1 text - sm text - gray - 600"> {
  service.features.slice (0, 4) .map ( (feature, idx) => (<li key= {
  idx;
}className="flex items - center"> <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" /> {
  feature;
}</li>) );
}</ul> </div> {
  /* Category and Action */;
}<div className="flex flex - col items - end space - y-3"> <span className= {
  `inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r $ {
  getCategoryColor (service.category);
}text - white`;
}> {
  getCategoryIcon (service.category);
}<span className="ml - 1"> {
  service.category;
}</span> </span> <a href= {
  service.link;
}target=" blank" rel="noopener noreferrer" className="bg - blue - 600 text - white py - 2 px - 4 rounded - lg hover:bg - blue - 700 transition - colors text - sm font - medium flex items - center" > Learn More <ArrowRight className="w - 4 h - 4 ml - 2" /> </a> </div> </div> </div> </div> </motion.div>) );
}</motion.div>);
}</AnimatePresence> {
  /* No Results */;
}{
  filtered_services.length === 0 && (<div className="text - center py - 12"> <div className="text - gray - 400 mb - 4"> <Search className="w - 16 h - 16 mx - auto" /> </div> <h3 className="text - xl font - semibold text - gray - 900 mb - 2">No services found</h3> <p className="text - gray - 600">Try adjusting your search terms or category filters.</p> </div>);
}</div> </section> {
  /* Why Choose Us */;
}<section className="py - 20 bg - white"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8"> <div className="text - center mb - 16"> <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4"> Why Choose Zion Tech Group? </h2> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> We deliver innovative, enterprise - grade solutions that transform businesses and drive growth </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.5;
}className="text - center p - 6" > <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4"> <Brain className="w - 8 h - 8 text - blue - 600" /> </div> <h3 className="text - xl font - semibold text - gray - 900 mb - 2">AI - Powered Innovation</h3> <p className="text - gray - 600"> Cutting - edge AI and machine learning solutions that deliver real business value </p> </motion.div> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.5, delay: 0.1;
}className="text - center p - 6" > <div className="w - 16 h - 16 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 4"> <Shield className="w - 8 h - 8 text - green - 600" /> </div> <h3 className="text - xl font - semibold text - gray - 900 mb - 2">Enterprise Security</h3> <p className="text - gray - 600"> Bank - grade security and compliance for mission - critical business applications </p> </motion.div> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 20;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.5, delay: 0.2;
}className="text - center p - 6" > <div className="w - 16 h - 16 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 4"> <Globe className="w - 8 h - 8 text - purple - 600" /> </div> <h3 className="text - xl font - semibold text - gray - 900 mb - 2">Global Scale</h3> <p className="text - gray - 600"> Cloud - native solutions that scale globally with enterprise - grade reliability </p> </motion.div> </div> </div> </section> {
  /* Contact Section */;
}<section className="py - 20 bg - gradient - to - r from - blue - 900 to - purple - 900 text - white"> <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center"> <h2 className="text - 3xl md:text - 4xl font - bold mb - 6"> Ready to Transform Your Business? </h2> <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 mb - 8"> <div className="text - center"> <Phone className="w - 8 h - 8 mx - auto mb - 4 text - blue - 300" /> <h3 className="text - lg font - semibold mb - 2">Call Us</h3> <p className="text - blue - 100">+1 302 464 0950</p> </div> <div className="text - center"> <Mail className="w - 8 h - 8 mx - auto mb - 4 text - blue - 300" /> <h3 className="text - lg font - semibold mb - 2">Email Us</h3> <p className="text - blue - 100">kleber@ziontechgroup.com</p> </div> <div className="text - center"> <MapPin className="w - 8 h - 8 mx - auto mb - 4 text - blue - 300" /> <h3 className="text - lg font - semibold mb - 2">Visit Us</h3> <p className="text - blue - 100">364 E Main St STE 1008 < br />Middletown DE 19709</p> </div> </div> <div className="flex flex - col sm:flex - row gap - 4 justify - center"> <a href="mailto:kleber@ziontechgroup.com?subject = Business Transformation Consultation" className="bg - white text - blue - 900 px - 8 py - 3 rounded - lg font - semibold hover:bg - gray - 100 transition - colors flex items - center justify - center gap - 2" > <Mail className="w - 5 h - 5" /> Start Consultation </a> <a href="https://ziontechgroup.com" className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - blue - 900 transition - colors flex items - center justify - center gap - 2" > <Globe className="w - 5 h - 5" /> Visit Website </a> </div> </div> </section> </div>);
}export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex - col gap - 2">;
                    <a;
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject = Inquiry about ${service.name}`}
                      className="w - full bg - blue - 600 hover:bg - blue - 700 text - white text - center py - 2 px - 4 rounded - lg font - medium transition - colors flex items - center justify - center gap - 2";
                    >;
                      <Mail className="w - 4 h - 4" />;
                      Get Started;
                    </a>;
                    <a;
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      className="w - full bg - gray - 100 hover:bg - gray - 200 text - gray - 700 text - center py - 2 px - 4 rounded - lg font - medium transition - colors flex items - center justify - center gap - 2";
                    >;
                      <Phone className="w - 4 h - 4" />;
                      Call Now;
                    </a>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
          {/* Services Display */}
          <AnimatePresence mode="wait">;
            {view_mode === 'grid' ? (
              <motion.div;
                key="grid";
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              >;
                {filtered_services.map ((service, index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg - white rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 overflow - hidden border border - gray - 100";
                  >;
                    {/* Service Header */}
                    <div className={`p - 6 bg - gradient - to - r ${service.color} text - white`}>;
                      <div className="flex items - center justify - between mb - 4">;
                        <span className="text - 4xl">{service.icon}</span>;
                        {service.popular && (
                          <span className="bg - yellow - 400 text - yellow - 900 px - 2 py - 1 rounded - full text - xs font - bold">;
                            POPULAR;
                          </span>)}
                      </div>;
                      <h3 className="text - xl font - bold mb - 2">{service.name}</h3>;
                      <p className="text - blue - 100 text - sm">{service.tagline}</p>;


                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      


                      {/* Price */}
                      <div className="mt - 4">;
                        <span className="text - 2xl font - bold">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          {getServicePricing (service)}
                        </span>;
                      </div>;
                    {/* Service Content */}
<<<<<<< HEAD
                    <div className="p - 6">;"
                      <p className="text - gray - 600 mb - 4 line - clamp - 3">{service.description}</p>;"
                      {/* Price */}
                      <div className="mb - 4">;"
                        <span className="text - 3xl font - bold text - gray - 900">;"
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`                      {/* Features */}
                      <div className="mb-6">;"
                        <h4 className="font-semibold text-gray-900 mb-2">Key "Features":</h4>;"
                        <ul className="space-y-1">;"
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className="flex items-center text-sm text-gray-600">;"
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;"
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    <div className=\"p - 6\"    />;
                      <p className=\"text - gray - 600 mb - 4 line - clamp - 3\"    />{service.description}</p>;
                      {/* Price */}
                      <div className=\"mb - 4\"    />;
                        <span className=\"text - 3xl font - bold text - gray - 900\"    />;
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
=======
                    <div className="p - 6">;
                      <p className="text - gray - 600 mb - 4 line - clamp - 3">{service.description}</p>;
                      {/* Price */}
                      <div className="mb - 4">;
                        <span className="text - 3xl font - bold text - gray - 900">;
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}

                        </span>;
                      </div>;
                    </div>;
                    {/* Service Content */}
                    <div className="p-6">;
                      <p className="text-gray-600 mb-4 line-clamp-3">{service && service.description}</p>;
                      {/* Price */}
                      <div className="mb-4">;
                        <span className="text-3xl font-bold text-gray-900">;
                          {typeof service && service.price === 'string' ? service && service.price : `$${service && service.price.monthly}/month`}
                        </span>;
                        <span className="text-gray-500">;
                          {typeof service && service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>;
                      </div>;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>
                      </div>

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {/* Features */}
                      <div className=\"mb-6\"    />;
                        <h4 className=\"font-semibold text-gray-900 mb-2\"    />Key Features:</h4>;
                        <ul className=\"space-y-1\"    />;
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className=\"flex items-center text-sm text-gray-600\"    />;
                              <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                              {feature}
                            </li>;
                          ))}
ursor/automate-test-improve-and-merge-code-646c;
                className=\'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\';
              >;
                className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">

<<<<<<< HEAD
                {filteredServices.map((service, index) => (<motion.div;
<<<<<<< HEAD
            {viewMode === 'grid' ? (;'
              <motion&& motion.div 
=======

          {/* Services Display */}
          <AnimatePresence mode="wait">"
            {viewMode === 'grid' ? ('
              <motion.div
}
key="grid""
                initial={{ "opacity": 0 }}
                animate={{ "opacity": 1 }}
                exit={{ "opacity": 0 
}
                className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8""
              >
                {filteredServices.map((service, index) => (
                  <motion.div
}
key={service.id}
                    initial={{ "opacity": 0, "y": 20 
}
                    animate={{ "opacity": 1, "y": 0 
}
                    transition={{ "duration": 0.5, "delay": index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100";"
                  >;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>;`                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">"

<<<<<<< HEAD
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white,`}>

                      <div className="flex items-center justify-between mb-4">;"
                        <span className="text-4xl">{service.icon}</span>;"
                        {service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">;"
                            }
                            POPULAR;
                          </span>;
                        )}
                      </div>;
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>;"
                      <p className="text-blue-100 text-sm">{service.tagline}</p>;"
                      {/* Price */}
                      <div className="mt-4">;"
                        <span className="text-2xl font-bold">;"
                          {getServicePricing(service)}
=======


                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        </span>
                      </div>

                        </ul>;
                      </div>;
                      {/* Category Badge */}
                      <div className="mb-4">;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                          {getCategoryIcon(service && service.category)}
                          <span className="ml-1">{service && service.category}</span>;
                        </span>;
                      </div>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


=======
            {viewMode === 'grid' ? (;
              <motion&& motion.div }
}
          {/* Services Display */}
          <AnimatePresence mode=\"wait\"    />
            {viewMode === 'grid' ? (
              <motion.div;}
key=\"grid\"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 ,}
}
                className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"
                  />
                {filteredServices.map((service, index) => (}
                  <motion.div;}
key={service.id}
                    initial={{ opacity: 0, y: 20 ,}
}
                    animate={{ opacity: 1, y: 0 ,}
}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=\'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\';
                      />;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}    />;
                    className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\">

                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white,
}    />

<<<<<<< HEAD
                      <div className=\"flex items-center justify-between mb-4\"    />;
                        <span className=\"text-4xl\"    />{service.icon}</span>;
                        {service.popular && (<span className=\"bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold\"    />;
                            POPULAR;}
                          </span>;}
                        )}
                      </div>;
                      <h3 className=\"text-xl font-bold mb-2\"    />{service.name}</h3>;
                      <p className=\"text-blue-100 text-sm\"    />{service.tagline}</p>;
                      {/* Price */}
                      <div className=\"mt-4\"    />;
                        <span className=\"text-2xl font-bold\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                          {getServicePricing(service)}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">;
                        <div>;
                          <span className="font-medium">Setup:</span> {getServiceSetupTime(service)}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        </span>;
                      </div>;
                    </div>;
                    {/* Service Content */}
<<<<<<< HEAD
                    <div className="p-6">;"
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>;"
                      {/* Price */}
                      <div className="mb-4">;"
                        <span className="text-3xl font-bold text-gray-900">;"
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`                        </span>;
                        <span className="text-gray-500">;"
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}'
                        </span>;
                      </div>;
                      {/* Features */}
                      <div className="mb-6">;"
                        <h4 className="font-semibold text-gray-900 mb-2">Key "Features":</h4>;"
                        <ul className="space-y-1">;"
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className="flex items-center text-sm text-gray-600">;"
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;"
=======
<<<<<<< HEAD

=======
                    <div className=\"p-6\"    />;
                      <p className=\"text-gray-600 mb-4 line-clamp-3\"    />{service.description}</p>;
                      {/* Price */}
                      <div className=\"mb-4\"    />;
                        <span className=\"text-3xl font-bold text-gray-900\"    />;
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                        </span>;
                        <span className=\"text-gray-500\"    />;
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>;
                      </div>;
                      {/* Features */}
                      <div className=\"mb-6\"    />;
                        <h4 className=\"font-semibold text-gray-900 mb-2\"    />Key Features:</h4>;
                        <ul className=\"space-y-1\"    />;
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className=\"flex items-center text-sm text-gray-600\"    />;
                              <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                              {feature}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
<<<<<<< HEAD
                className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {filteredServices && filteredServices.map((service, index) => (<motion&& motion.div;
                    }
                    key={service && service.id}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.5, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">;"
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}>;`                    initial={{ "opacity": 0, "y": 20 
}
                    animate={{ "opacity": 1, "y": 0 
}
                    transition={{ "duration": 0 && 0.5, "delay": index * 0 && 0.1 
}
                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">;"
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}>`
                      <div className="flex items-center justify-between mb-4">;"
                        <span className="text-4xl">{service && service.icon}</span>;"
                        {service && service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">;"
                            }
                            POPULAR;
                          </span>;
                        )}
                      {/* Price */}
<<<<<<< HEAD
                      <div className="mt-4">;"
                        <span className="text-2xl font-bold">;"
                          {getServicePricing(service)}{/* Price */}
                      <div className="mt - 4">;"
                        <span className="text - 2xl font - bold">;"
=======
=======
                      {/* Category Badge */}
                      <div className="mb - 4">;
                        <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                          {getCategoryIcon (service.category)}
                          <span className="ml - 1">{service.category}</span>;
                        </span>;
                      </div>;
                      {/* Service Info */}
                      <div className="grid grid - cols - 2 gap - 4 mb - 4 text - sm text - gray - 600">;
                        <div>;
                          <span className="font - medium">Setup:</span> {getServiceSetupTime (service)}
                        </div>;
                        <div>;
                          <span className="font - medium">Trial:</span> {getServiceTrialDays (service)} days;
                        </div>;
                      </div>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
                className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
                {filteredServices && filteredServices.map((service, index) => (<motion&& motion.div;}
                    key={service && service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                    className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\"    />;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}    />;
                    initial={{ opacity: 0, y: 20 ,}
}
                    animate={{ opacity: 1, y: 0 ,}
}
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 ,}
}
                    className=\"bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100\">;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}    />

                      <div className=\"flex items-center justify-between mb-4\"    />;
                        <span className=\"text-4xl\"    />{service && service.icon}</span>;
                        {service && service.popular && (<span className=\"bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold\"    />;
                            POPULAR;}
                          </span>;}
                        )}
                      {/* Price */}
                      <div className=\"mt-4\"    />;
                        <span className=\"text-2xl font-bold\"    />;
                          {getServicePricing(service)}{/* Price */}
                      <div className=\"mt - 4\"    />;
                        <span className=\"text - 2xl font - bold\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          {getServicePricing (service)}
                        </span>;
                      </div>;
                    {/* Service Content */}
<<<<<<< HEAD
                    <div className="p - 6">;"
                      <p className="text - gray - 600 mb - 4 line - clamp - 3">{service.description}</p>;"
                      {/* Price */}
                      <div className="mb - 4">;"
                        <span className="text - 3xl font - bold text - gray - 900">;"
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`                      {/* Features */}
                      <div className="mb-6">;"
                        <h4 className="font-semibold text-gray-900 mb-2">Key "Features":</h4>;"
                        <ul className="space-y-1">;"
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className="flex items-center text-sm text-gray-600">;"
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;"
=======
<<<<<<< HEAD

=======
                    <div className=\"p - 6\"    />;
                      <p className=\"text - gray - 600 mb - 4 line - clamp - 3\"    />{service.description}</p>;
                      {/* Price */}
                      <div className=\"mb - 4\"    />;
                        <span className=\"text - 3xl font - bold text - gray - 900\"    />;
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                      {/* Features */}
                      <div className=\"mb-6\"    />;
                        <h4 className=\"font-semibold text-gray-900 mb-2\"    />Key Features:</h4>;
                        <ul className=\"space-y-1\"    />;
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className=\"flex items-center text-sm text-gray-600\"    />;
                              <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                              {feature}
                            </li>;
                          ))}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                        </ul>
                      </div>

<<<<<<< HEAD
                      {/* Category Badge */}
                      <div className="mb-4">;"
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>;`                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>`
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>;"
                        </span>;
                      </div>;
                      {/* Service Info */}{/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">;"
                        <div>;
                          <span className="font-medium">"Setup":</span> {getServiceSetupTime(service)}"
                      {/* ROI and Popularity */}
                          <span className="font-medium">"Setup": </span> {getServiceSetupTime(service)}"
                      {/* ROI and Popularity *
}
                      <div className="flex items - center justify - between mb - 4">;"
                        <div className="text - sm">;"
                          <span className="text - gray - 500">Expected "ROI":</span>;"
                          <span className="text - green - 600 font - semibold ml - 1">;"
                            {service.roi.split (' ')[0]} ROI;'
                          </span>;
                        </div>;
                        {service.popular && ({/* Price and Features */}
                        <div className=""lg":w - 1/3">;"
                          <div className="text - right mb - 4">;"
                            <span className="text - 3xl font - bold text - gray - 900">;"
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`                          <span className="ml-1">{service.category}</span>"
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
                      {/* Category Badge */}
                      <div className=\"mb-4\"    />;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}    />;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}    />

                          {getCategoryIcon(service.category)}
                          <span className=\"ml-1\"    />{service.category}</span>;
                        </span>;
                      </div>;
                      {/* Service Info */}{/* Service Info */}
                      <div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    />;
                        <div    />;
                          <span className=\"font-medium\"    />Setup:</span> {getServiceSetupTime(service)}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {/* ROI and Popularity */}
                          <span className=\"font-medium\"    />Setup: </span> {getServiceSetupTime(service)}
                      {/* ROI and Popularity *,}
}
                      <div className=\"flex items - center justify - between mb - 4\"    />;
                        <div className=\"text - sm\"    />;
                          <span className=\"text - gray - 500\"    />Expected ROI:</span>;
                          <span className=\"text - green - 600 font - semibold ml - 1\"    />;
                            {service.roi.split (' ')[0]} ROI;
                          </span>;
                        </div>;
<<<<<<< HEAD
                        {service.popular && ({/* Price and Features */}
                        <div className=\"lg:w - 1/3\"    />;
                          <div className=\"text - right mb - 4\"    />;
                            <span className=\"text - 3xl font - bold text - gray - 900\"    />;
=======
                        {service.popular && (

                          <div className="flex items - center gap - 1 text - yellow - 600">;
                            <Star className="w - 4 h - 4 fill - current" />;
                            <span className="text - sm font - medium">Popular</span>;
                          </div>;
                        </div>;
<<<<<<< HEAD



=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {/* Price and Features */}
                        <div className="lg:w - 1/3">;
                          <div className="text - right mb - 4">;
                            <span className="text - 3xl font - bold text - gray - 900">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                          <span className=\"ml-1\"    />{service.category}</span>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        </span>
                      </div>

                      {/* Service Info */}
ursor/automate-test-improve-and-merge-code-646c;
                      {/* Service Info */}
<<<<<<< HEAD
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">;"
                        <div>;
                          <span className="font-medium">"Setup":</span> {getServiceSetupTime(service)}"
                        </div>;
                        <div>;
                          <span className="font-medium">"Trial":</span> {getServiceTrialDays(service)} days;"
                          <span className="font-medium">"Setup": </span> {getServiceSetupTime(service,"
}
                        </div>;
                        <div>;
                          <span className="font-medium">"Trial": </span> {getServiceTrialDays(service,"
} days;
                        </div>;
                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">;"
                        <div className="text-sm">;"
                          <span className="text-gray-500">Expected "ROI":</span>;"
                          <span className="text-green-600 font-semibold ml-1">;"
                            {service.roi.split(' ')[0]} ROI;'
                          </span>;
                        </div>;
                        {service.popular && (<div className="flex items-center gap-1 text-yellow-600">;"
                            <Star className="w-4 h-4 fill-current" />;"
                            <span className="text-sm font-medium">Popular</span>;"
                          </div>;
                        {/* Price and Features */}
                        <div className=""lg":w-1/3">;"
                          <div className="text-right mb-4">;"
                            <span className="text-3xl font-bold text-gray-900">;"
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`                            </span>;
                            <span className="text-gray-500">;"
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}'
                            </span>;
                          </div>;
                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">;"
                        <div>;
                          <span className="font-medium">"Setup":</span> {getServiceSetupTime(service)}"
                      {/* ROI and Popularity */}
                          <span className="font-medium">"Setup": </span> {getServiceSetupTime(service)}"
                      {/* ROI and Popularity *
}
                      <div className="flex items - center justify - between mb - 4">;"
                        <div className="text - sm">;"
                          <span className="text - gray - 500">Expected "ROI":</span>;"
                          <span className="text - green - 600 font - semibold ml - 1">;"
                            {service.roi.split (' ')[0]} ROI;'
                          </span>;
                        </div>;
                        {service.popular && ({/* Price and Features */}
                        <div className=""lg":w - 1/3">;"
                          <div className="text - right mb - 4">;"
                            <span className="text - 3xl font - bold text - gray - 900">;"
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                          <div className="mb-4">;"
                            <h4 className="font-semibold text-gray-900 mb-2">"Features":</h4>;"
                            <ul className="space-y-1 text-sm text-gray-600">;"
                              {service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className="flex items-center">;"
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;"
                            </span>
                          </div>
                          
                          <div className="mb-4">"
                            <h4 className="font-semibold text-gray-900 mb-2">"Features":</h4>"
                            <ul className="space-y-1 text-sm text-gray-600">"
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">"
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
                      <div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    />;
                        <div    />;
                          <span className=\"font-medium\"    />Setup:</span> {getServiceSetupTime(service)}
=======
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>


                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        </div>;
                        <div    />;
                          <span className=\"font-medium\"    />Trial:</span> {getServiceTrialDays(service)} days;
                          <span className=\"font-medium\"    />Setup: </span> {getServiceSetupTime(service,}
}
                        </div>;
                        <div    />;
                          <span className=\"font-medium\"    />Trial: </span> {getServiceTrialDays(service,}
} days;
                        </div>;
                      </div>;
                      {/* ROI and Popularity */}
                      <div className=\"flex items-center justify-between mb-4\"    />;
                        <div className=\"text-sm\"    />;
                          <span className=\"text-gray-500\"    />Expected ROI:</span>;
                          <span className=\"text-green-600 font-semibold ml-1\"    />;
                            {service.roi.split(' ')[0]} ROI;
                          </span>;
                        </div>;
<<<<<<< HEAD
                        {service.popular && (<div className=\"flex items-center gap-1 text-yellow-600\"    />;
                            <Star className=\"w-4 h-4 fill-current\"    />;
                            <span className=\"text-sm font-medium\"    />Popular</span>;
                          </div>;}
                        </div>;}
=======
                        {service && service.popular && (;
                          <div className="flex items-center gap-1 text-yellow-600">;
                            <Star className="w-4 h-4 fill-current" />;
                            <span className="text-sm font-medium">Popular</span>;
                          </div>;
                        </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        {/* Price and Features */}
                        <div className=\"lg:w-1/3\"    />;
                          <div className=\"text-right mb-4\"    />;
                            <span className=\"text-3xl font-bold text-gray-900\"    />;
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            </span>;
                            <span className=\"text-gray-500\"    />;
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;
<<<<<<< HEAD
                      {/* Service Info */}
                      <div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    />;
                        <div    />;
                          <span className=\"font-medium\"    />Setup:</span> {getServiceSetupTime(service)}
                      {/* ROI and Popularity */}
                          <span className=\"font-medium\"    />Setup: </span> {getServiceSetupTime(service)}
                      {/* ROI and Popularity *,}
}
                      <div className=\"flex items - center justify - between mb - 4\"    />;
                        <div className=\"text - sm\"    />;
                          <span className=\"text - gray - 500\"    />Expected ROI:</span>;
                          <span className=\"text - green - 600 font - semibold ml - 1\"    />;
                            {service.roi.split (' ')[0]} ROI;
                          </span>;
                        </div>;
                        {service.popular && ({/* Price and Features */}
                        <div className=\"lg:w - 1/3\"    />;
                          <div className=\"text - right mb - 4\"    />;
                            <span className=\"text - 3xl font - bold text - gray - 900\"    />;
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                          <div className=\"mb-4\"    />;
                            <h4 className=\"font-semibold text-gray-900 mb-2\"    />Features:</h4>;
                            <ul className=\"space-y-1 text-sm text-gray-600\"    />;
                              {service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className=\"flex items-center\"    />;
                                  <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />;
                            </span>
                          </div>
                          
                          <div className=\"mb-4\"    />
                            <h4 className=\"font-semibold text-gray-900 mb-2\"    />Features:</h4>
                            <ul className=\"space-y-1 text-sm text-gray-600\"    />
                              {service.features.slice(0, 4).map((feature, idx) => (}
                                <li key={idx} className=\"flex items-center\"    />
                                  <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                                  {feature}
                                </li>;
                              ))}
                            </ul>;
                          </div>;
                            </ul>
                          </div>

                        </div>;
<<<<<<< HEAD
                        <div>;
<<<<<<< HEAD
                          <span className="font-medium">"Trial": </span> {getServiceTrialDays(service,"
} days;
                        </div>;
                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">;"
                        <div className="text-sm">;"
                          <span className="text-gray-500">Expected "ROI":</span>;"
                          <span className="text-green-600 font-semibold ml-1">;"
                            {service && service.roi.split(' ')[0]} ROI;'
                          </span>;
                        </div>;
                        {service && service.popular && (<div className="flex items-center gap-1 text-yellow-600">;"
                            <Star className="w-4 h-4 fill-current" />;"
                            <span className="text-sm font-medium">Popular</span>;"
                          </div>;
                        </div>;{/* Price and Features */}
                        <div className=""lg":w-1/3">;"
                          <div className="text-right mb-4">;"
                            <span className="text-3xl font-bold text-gray-900">;"
                              {typeof service && service.price === 'string' ? service && service.price : `$${service && service.price.monthly}/month`}`                            </span>;
                            <span className="text-gray-500">;"
                              {typeof service && service.price === 'string' ? (service as any).period || '/month' : '/month'}'
                            </span>;
                          </div>;<div className="mb-4">;"
                            <h4 className="font-semibold text-gray-900 mb-2">"Features":</h4>;"
                            <ul className="space-y-1 text-sm text-gray-600">;"
                              {service && service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className="flex items-center">;"
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;"
=======

=======
                        <div    />;
                          <span className=\"font-medium\"    />Trial: </span> {getServiceTrialDays(service,}
} days;
                        </div>;
                      </div>;
                      {/* ROI and Popularity */}
                      <div className=\"flex items-center justify-between mb-4\"    />;
                        <div className=\"text-sm\"    />;
                          <span className=\"text-gray-500\"    />Expected ROI:</span>;
                          <span className=\"text-green-600 font-semibold ml-1\"    />;
                            {service && service.roi.split(' ')[0]} ROI;
                          </span>;
                        </div>;
                        {service && service.popular && (<div className=\"flex items-center gap-1 text-yellow-600\"    />;
                            <Star className=\"w-4 h-4 fill-current\"    />;
                            <span className=\"text-sm font-medium\"    />Popular</span>;}
                          </div>;}
                        </div>;{/* Price and Features */}
                        <div className=\"lg:w-1/3\"    />;
                          <div className=\"text-right mb-4\"    />;
                            <span className=\"text-3xl font-bold text-gray-900\"    />;
                              {typeof service && service.price === 'string' ? service && service.price : `$${service && service.price.monthly}/month`}
=======
                          <div className="mb-4">;
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>;
                            <ul className="space-y-1 text-sm text-gray-600">;
                              {service && service.features.slice(0, 4).map((feature, idx) => (;
                                <li key={idx} className="flex items-center">;
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                                  {feature}
                                </li>;
                              ))}
<<<<<<< HEAD
=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>
                            </span>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">;
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                              {getCategoryIcon(service && service.category)}
                              <span className="ml-1">{service && service.category}</span>;
                            </span>;
<<<<<<< HEAD

                            

=======


=======

                            

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            <a
                              href={service && service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">;
                              Learn More;
                              <ArrowRight className="w-4 h-4 ml-2" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            </span>;
                            <span className=\"text-gray-500\"    />;
                              {typeof service && service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;<div className=\"mb-4\"    />;
                            <h4 className=\"font-semibold text-gray-900 mb-2\"    />Features:</h4>;
                            <ul className=\"space-y-1 text-sm text-gray-600\"    />;
                              {service && service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className=\"flex items-center\"    />;
                                  <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                                  {feature}
                                </li>;
                              ))}
ursor/fix-netlify-build-and-merge-to-main-9571;
<<<<<<< HEAD
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                                  {feature}
                                </li>;
                              ))}
                            </ul>;
                          </div>;
ursor/automate-test-improve-and-merge-code-646c;
                            </ul>
                          </div>

                          {/* Category and Action */}
<<<<<<< HEAD
                          <div className="flex flex-col items-end space-y-3">;"
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>;`                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>`
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>;"
                            </span>;
                            <a;
                              <span className="ml-1">{service.category}</span>"
                            </span>
                            
                            <a,
href={service.link}
                              target="_blank";"
                              rel="noopener noreferrer";"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center";"
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            >;
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center">"

                              Learn More;
<<<<<<< HEAD
                              <ArrowRight className="w-4 h-4 ml-2" />;"
=======

=======
                          <div className=\"flex flex-col items-end space-y-3\"    />;
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}    />;
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}    />

                              {getCategoryIcon(service.category)}
                              <span className=\"ml-1\"    />{service.category}</span>;
                            </span>;
                            <a;
                              <span className=\"ml-1\"    />{service.category}</span>
                            </span>
                            
                            <a;
href={service.link}
                              target=\'_blank\';
                              rel=\'noopener noreferrer\';
                              className=\'bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\';
                                />;
                              className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\">

                              Learn More;
<<<<<<< HEAD
                              <ArrowRight className=\"w-4 h-4 ml-2\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
                              <ArrowRight className="w - 4 h - 4 ml - 2" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            </a>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
<<<<<<< HEAD
                  </motion.div>;
                ))}
              </motion.div>;
            )}
          </AnimatePresence>;
=======
<<<<<<< HEAD



          </AnimatePresence>;
=======

          </AnimatePresence>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* No Results */}
<<<<<<< HEAD

            </div>;
=======
          {filteredServices.length === 0 && (<div className=\"text-center py-12\"    />;
              <div className=\"text-gray-400 mb-4\"    />;
                <Search className=\"w-16 h-16 mx-auto\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />No services found</h3>;
              <p className=\"text-gray-600\"    />Try adjusting your search terms or category filters.</p>;}
            </div>;}
          )}
        </div>;
      </section>;
        </div>
      </section>


                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className=\"flex flex-col items-end space-y-3\"    />;
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}    />

                              {getCategoryIcon(service && service.category)}
                              <span className=\"ml-1\"    />{service && service.category}</span>;
                            </span>;<a;
                              href={service && service.link}
                              target=\'_blank\';
                              rel=\'noopener noreferrer\';
                              className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\"    />;
                              Learn More;
                              <ArrowRight className=\"w-4 h-4 ml-2\"    />;
                            </span>;
                            <span className=\"text - gray - 500\"    />;
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;
                          <div className=\"mb - 4\"    />;
                            <h4 className=\"font - semibold text - gray - 900 mb - 2\"    />Features:</h4>;
                            <ul className=\"space - y-1 text - sm text - gray - 600\"    />;
                              {service.features.slice (0, 4).map ((feature, idx) => (<li key={idx} className=\"flex items - center\"    />;
                                  <Check className=\"w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0\"    />;
                                  {feature}
                                </li>))}
                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className=\"flex flex - col items - end space - y-3\"    />;
                            <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}    />

                              {getCategoryIcon (service.category)}
                              <span className=\"ml - 1\"    />{service.category}</span>;
                            </span>;
                            <a;
                              href={service.link}
                              target=\'_blank\';
                              rel=\'noopener noreferrer\';
                              className=\"bg - blue - 600 text - white py - 2 px - 4 rounded - lg hover:bg - blue - 700 transition - colors text - sm font - medium flex items - center\"    />

                              Learn More;
                              <ArrowRight className=\"w - 4 h - 4 ml - 2\"    />;
                            </a>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
          {/* No Results */}
          {filteredServices && filteredServices.length === 0 && (<div className=\"text-center py-12\"    />;
              <div className=\"text-gray-400 mb-4\"    />;
                <Search className=\"w-16 h-16 mx-auto\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />No services found</h3>;
              <p className=\"text-gray-600\"    />Try adjusting your search terms or category filters.</p>;}
            </div>;}
          )}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                            <a;
                            
                            <a;
href={service.link}
                              target=\'_blank\';
                              rel=\'noopener noreferrer\';
                              className=\'bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\';
                                />;
                              className=\"bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center\">

                              Learn More;
                              <ArrowRight className=\"w-4 h-4 ml-2\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            </a>;
                          </div>;
                  </motion.div>;
                ))}
              </motion.div>;
            )}
          </AnimatePresence>;
          {/* No Results */}
<<<<<<< HEAD
          {filteredServices.length === 0 && (<div className="text-center py-12">;"
              <div className="text-gray-400 mb-4">;"
                <Search className="w-16 h-16 mx-auto" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;"
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>;"
            </div>;
          )}
        </div>;
      </section>;
        </div>
      </section>


                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">;"
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>`
                              {getCategoryIcon(service && service.category)}
                              <span className="ml-1">{service && service.category}</span>;"
                            </span>;<a;
                              href={service && service.link}
                              target="_blank";"
                              rel="noopener noreferrer";"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center">;"
                              Learn More;
                              <ArrowRight className="w-4 h-4 ml-2" />;"
                            </span>;
                            <span className="text - gray - 500">;"
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}'
                            </span>;
                          </div>;
                          <div className="mb - 4">;"
                            <h4 className="font - semibold text - gray - 900 mb - 2">"Features":</h4>;"
                            <ul className="space - y-1 text - sm text - gray - 600">;"
                              {service.features.slice (0, 4).map ((feature, idx) => (<li key={idx} className="flex items - center">;"
                                  <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;"
                                  {feature}
                                </li>))}
                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className="flex flex - col items - end space - y-3">;"
                            <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>`

                              {getCategoryIcon (service.category)}
                              <span className="ml - 1">{service.category}</span>;"
                            </span>;
                            <a;
                              href={service.link}
                              target="_blank";"
                              rel="noopener noreferrer";"
                              className="bg - blue - 600 text - white py - 2 px - 4 rounded - lg "hover":bg - blue - 700 transition - colors text - sm font - medium flex items - center">"

                              Learn More;
                              <ArrowRight className="w - 4 h - 4 ml - 2" />;"
                            </a>;
                          </div>;
          {/* No Results */}
          {filteredServices && filteredServices.length === 0 && (<div className="text-center py-12">;"
              <div className="text-gray-400 mb-4">;"
                <Search className="w-16 h-16 mx-auto" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;"
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>;"
            </div>;
          )}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                            <a;
                            
                            <a,
href={service.link}
                              target="_blank";"
                              rel="noopener noreferrer";"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center";"
                            >;
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg "hover":bg-blue-700 transition-colors text-sm font-medium flex items-center">"

                              Learn More;
                              <ArrowRight className="w-4 h-4 ml-2" />;"
                            </a>;
                          </div>;
                  </motion.div>;
                ))}
              </motion.div>;
            )}
          </AnimatePresence>;
          {/* No Results */}
          {filteredServices.length === 0 && (<div className="text-center py-12">;"
              <div className="text-gray-400 mb-4">;"
                <Search className="w-16 h-16 mx-auto" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;"
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>;"
            </div>;
=======
          {filteredServices.length === 0 && (<div className=\"text-center py-12\"    />;
              <div className=\"text-gray-400 mb-4\"    />;
                <Search className=\"w-16 h-16 mx-auto\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />No services found</h3>;
              <p className=\"text-gray-600\"    />Try adjusting your search terms or category filters.</p>;}
            </div>;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          )}
        </div>;
      </section>;
ursor/automate-test-improve-and-merge-code-646c;
        </div>
      </section>

      {/* Why Choose Us */}
<<<<<<< HEAD
      <section className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4">"
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth
=======
      <section className=\"py-20 bg-white\"    />
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />
          <div className=\"text-center mb-16\"    />
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\"    />
              Why Choose Zion Tech Group?
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"    />
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
>>>>>>> origin/chore/fix-lint-and-merge
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">"
            <motion.div,
initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.5 
}
              className="text-center p-6""
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <Brain className="w-8 h-8 text-blue-600" />"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>"
              <p className="text-gray-600">"
=======

<<<<<<< HEAD

<<<<<<< HEAD
=======


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>
              <p className="text-gray-600">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Cutting-edge AI and machine learning solutions that deliver real business value
=======
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />
            <motion.div;
initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 ,}
}
              className=\"text-center p-6\"
                />
              <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />
                <Brain className=\"w-8 h-8 text-blue-600\"    />
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />AI-Powered Innovation</h3>
              <p className=\"text-gray-600\"    />
                Cutting-edge AI and machine learning solutions that deliver real business value;
>>>>>>> origin/chore/fix-lint-and-merge
              </p>
            </motion.div>

<<<<<<< HEAD
            <motion.div,
initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0.5, "delay": 0.1 
}
              className="text-center p-6""
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <Shield className="w-8 h-8 text-green-600" />"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>"
              <p className="text-gray-600">"
=======

<<<<<<< HEAD

<<<<<<< HEAD
=======


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Bank-grade security and compliance for mission-critical business applications
=======
            <motion.div;
initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.5, delay: 0.1 ,}
}
              className=\"text-center p-6\"
                />
              <div className=\"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />
                <Shield className=\"w-8 h-8 text-green-600\"    />
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Enterprise Security</h3>
              <p className=\"text-gray-600\"    />
                Bank-grade security and compliance for mission-critical business applications;
>>>>>>> origin/chore/fix-lint-and-merge
              </p>
            </motion.div>

<<<<<<< HEAD
            <motion.div,
initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0.5, "delay": 0.2 }}
              className="text-center p-6""
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <Globe className="w-8 h-8 text-purple-600" />"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>"
              <p className="text-gray-600">"
=======

<<<<<<< HEAD

<<<<<<< HEAD
=======


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-600">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Cloud-native solutions that scale globally with enterprise-grade reliability
=======
            <motion.div;
initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=\"text-center p-6\"
                />
              <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />
                <Globe className=\"w-8 h-8 text-purple-600\"    />
              </div>
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Global Scale</h3>
              <p className=\"text-gray-600\"    />
                Cloud-native solutions that scale globally with enterprise-grade reliability;
>>>>>>> origin/chore/fix-lint-and-merge
              </p>
            </motion.div>
          </div>
      </section>


<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Contact Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">"
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8 text-center">"
          <h2 className="text-3xl "md":text-4xl font-bold mb-6">"
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
            Let's discuss how our innovative services can help you achieve your business goals'
          </p>
ursor/fix-netlify-build-and-merge-to-main-9571
          
          
          <div className="grid grid-cols-1 "md":grid-cols-3 gap-8 mb-8">"
            <div className="text-center">"
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />"
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>"
              <p className="text-blue-100">+1 302 464 0950</p>"
            </div>
            <div className="text-center">"
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />"
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>"
              <p className="text-blue-100">kleber@ziontechgroup.com</p>"
            </div>
            <div className="text-center">"
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />"
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>"
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>"
            </div>

          <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
      {/* Why Choose Us *
}
      <section className="py-20 bg-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
            <motion.div;
              initial={{ "opacity": 0, "y": 20 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.5 }}
              className="text-center p-6";"
            >;
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Brain className="w-8 h-8 text-blue-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>;"
              <p className="text-gray-600">;"
                Cutting-edge AI and machine learning solutions that deliver real business value;
              </p>;
=======
<<<<<<< HEAD

=======
      <section className=\"py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white\"    />
        <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center\"    />
          <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />
            Ready to Transform Your Business?
          </h2>
          <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />
            Let's discuss how our innovative services can help you achieve your business goals;
          </p>
          
          
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8\"    />
            <div className=\"text-center\"    />
              <Phone className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />
              <h3 className=\"text-lg font-semibold mb-2\"    />Call Us</h3>
              <p className=\"text-blue-100\"    />+1 302 464 0950</p>
            </div>
            <div className=\"text-center\"    />
              <Mail className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />
              <h3 className=\"text-lg font-semibold mb-2\"    />Email Us</h3>
              <p className=\"text-blue-100\"    />kleber@ziontechgroup.com</p>
            </div>
            <div className=\"text-center\"    />
              <MapPin className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />
              <h3 className=\"text-lg font-semibold mb-2\"    />Visit Us</h3>
              <p className=\"text-blue-100\"    />364 E Main St STE 1008<br    />Middletown DE 19709</p>
            </div>
          </div>
<<<<<<< HEAD

          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />
      {/* Why Choose Us *,}
}
      <section className=\"py-20 bg-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"text-center mb-16\"    />;
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\"    />;
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </section>;
      {/* Why Choose Us */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Why Choose Zion Tech Group?;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"    />;
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;
<<<<<<< HEAD
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;
            <motion.div;
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=\'text-center p-6\';
                />;
              <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Brain className=\"w-8 h-8 text-blue-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />AI-Powered Innovation</h3>;
              <p className=\"text-gray-600\"    />;
                Cutting-edge AI and machine learning solutions that deliver real business value;
              </p>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </motion.div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
            <motion.div;
<<<<<<< HEAD
              initial={{ "opacity": 0, "y": 20 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.5, "delay": 0.1 }}
              className="text-center p-6";"
            >;
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Shield className="w-8 h-8 text-green-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">;"
=======
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=\'text-center p-6\';
                />;
              <div className=\"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Shield className=\"w-8 h-8 text-green-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Enterprise Security</h3>;
              <p className=\"text-gray-600\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Bank-grade security and compliance for mission-critical business applications;
              </p>;
            </motion.div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
            <motion.div;
<<<<<<< HEAD
              initial={{ "opacity": 0, "y": 20 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.5, "delay": 0.2 }}
              className="text-center p-6";"
            >;
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Globe className="w-8 h-8 text-purple-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>;"
              <p className="text-gray-600">;"
=======
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=\'text-center p-6\';
                />;
              <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Globe className=\"w-8 h-8 text-purple-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Global Scale</h3>;
              <p className=\"text-gray-600\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Cloud-native solutions that scale globally with enterprise-grade reliability;
              </p>;
            </motion.div>;
          </div>;
<<<<<<< HEAD
=======
        </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </section>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
      {/* Contact Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8 text-center">;"
          <h2 className="text-3xl "md":text-4xl font-bold mb-6">;"
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;"
            Let's discuss how our innovative services can help you achieve your business goals;'
=======
      <section className=\"py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center\"    />;
          <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />;
            Ready to Transform Your Business?;
          </h2>;
          <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
            Let's discuss how our innovative services can help you achieve your business goals;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </p>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
<<<<<<< HEAD
          <div className="grid grid-cols-1 "md":grid-cols-3 gap-8 mb-8">;"
            <div className="text-center">;"
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>;"
              <p className="text-blue-100">+1 302 464 0950</p>;"
            </div>;
            <div className="text-center">;"
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>;"
              <p className="text-blue-100">kleber@ziontechgroup.com</p>;"
            </div>;
            <div className="text-center">;"
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;"
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>;"
            </div>;
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
      {/* Why Choose Us */}
      <section className="py-20 bg-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;<div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
            <motion&& motion.div;
              initial={{ "opacity": 0, "y": 20 }}
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.5 
}
              className="text-center p-6">"

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Brain className="w-8 h-8 text-blue-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>;"
              <p className="text-gray-600">;"
=======
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8\"    />;
            <div className=\"text-center\"    />;
              <Phone className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Call Us</h3>;
              <p className=\"text-blue-100\"    />+1 302 464 0950</p>;
            </div>;
            <div className=\"text-center\"    />;
              <Mail className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Email Us</h3>;
              <p className=\"text-blue-100\"    />kleber@ziontechgroup.com</p>;
            </div>;
            <div className=\"text-center\"    />;
              <MapPin className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Visit Us</h3>;
              <p className=\"text-blue-100\"    />364 E Main St STE 1008<br    />Middletown DE 19709</p>;
            </div>;
          </div>;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
      {/* Why Choose Us */}
      <section className=\"py-20 bg-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"text-center mb-16\"    />;
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\"    />;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"    />;
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 ,}
}
              className=\"text-center p-6\"    />

              <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Brain className=\"w-8 h-8 text-blue-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />AI-Powered Innovation</h3>;
              <p className=\"text-gray-600\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Cutting-edge AI and machine learning solutions that deliver real business value;
              </p>;
            </motion.div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
            <motion.div;
<<<<<<< HEAD
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0.5, "delay": 0.1 
}
              className="text-center p-6">"

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Shield className="w-8 h-8 text-green-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">;"
=======
              initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.5, delay: 0.1 ,}
}
              className=\"text-center p-6\"    />

              <div className=\"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Shield className=\"w-8 h-8 text-green-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Enterprise Security</h3>;
              <p className=\"text-gray-600\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Bank-grade security and compliance for mission-critical business applications;
              </p>;
            </motion.div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
            <motion.div;
<<<<<<< HEAD
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0.5, "delay": 0.2 
}
              className="text-center p-6">"

              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Globe className="w-8 h-8 text-purple-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>;"
              <p className="text-gray-600">;"
=======
              initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0.5, delay: 0.2 ,}
}
              className=\"text-center p-6\"    />

              <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Globe className=\"w-8 h-8 text-purple-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Global Scale</h3>;
              <p className=\"text-gray-600\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Cloud-native solutions that scale globally with enterprise-grade reliability;
              </p>;
            </motion.div>;
          </div>;
<<<<<<< HEAD
=======
        </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </section>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
      {/* Contact Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8 text-center">;"
          <h2 className="text-3xl "md":text-4xl font-bold mb-6">;"
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;"
            Let's discuss how our innovative services can help you achieve your business goals;'
=======
      <section className=\"py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center\"    />;
          <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />;
            Ready to Transform Your Business?;
          </h2>;
          <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
            Let's discuss how our innovative services can help you achieve your business goals;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </p>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
<<<<<<< HEAD
          <div className="grid grid-cols-1 "md":grid-cols-3 gap-8 mb-8">;"
            <div className="text-center">;"
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>;"
              <p className="text-blue-100">+1 302 464 0950</p>;"
            </div>;
            <div className="text-center">;"
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>;"
              <p className="text-blue-100">kleber@ziontechgroup.com</p>;"
            </div>;
            <div className="text-center">;"
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;"
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>;"
            </div>;
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
      {/* Why Choose Us */}
      <section className="py-20 bg-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl "md":text-4xl font-bold text-gray-900 mb-4">;"
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;<div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
            <motion&& motion.div;
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.5 
}
              className="text-center p-6">;"
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Brain className="w-8 h-8 text-blue-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>;"
              <p className="text-gray-600">;"
                Cutting-edge AI and machine learning solutions that deliver real business value;
              </p>;
            </motion && motion.div>;<motion&& motion.div;
              initial={{ "opacity": 0, "y": 20 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.5, "delay": 0 && 0.1 }}
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.5, "delay": 0 && 0.1 
}
              className="text-center p-6">;"
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Shield className="w-8 h-8 text-green-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>;"
              <p className="text-gray-600">;"
                Bank-grade security and compliance for mission-critical business applications;
              </p>;
            </motion && motion.div>;<motion&& motion.div;
              initial={{ "opacity": 0, "y": 20 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.5, "delay": 0 && 0.2 }}
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.5, "delay": 0 && 0.2 
}
              className="text-center p-6">;"
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <Globe className="w-8 h-8 text-purple-600" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>;"
              <p className="text-gray-600">;"
=======
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8\"    />;
            <div className=\"text-center\"    />;
              <Phone className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Call Us</h3>;
              <p className=\"text-blue-100\"    />+1 302 464 0950</p>;
            </div>;
            <div className=\"text-center\"    />;
              <Mail className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Email Us</h3>;
              <p className=\"text-blue-100\"    />kleber@ziontechgroup.com</p>;
            </div>;
            <div className=\"text-center\"    />;
              <MapPin className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Visit Us</h3>;
              <p className=\"text-blue-100\"    />364 E Main St STE 1008<br    />Middletown DE 19709</p>;
            </div>;
          </div>;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
      {/* Why Choose Us */}
      <section className=\"py-20 bg-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"text-center mb-16\"    />;
            <h2 className=\"text-3xl md:text-4xl font-bold text-gray-900 mb-4\"    />;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"    />;
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\"    />;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5 ,}
}
              className=\"text-center p-6\"    />;
              <div className=\"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Brain className=\"w-8 h-8 text-blue-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />AI-Powered Innovation</h3>;
              <p className=\"text-gray-600\"    />;
                Cutting-edge AI and machine learning solutions that deliver real business value;
              </p>;
            </motion && motion.div>;<motion&& motion.div;
=======
            </motion && motion.div>;
            <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.1 }}
              initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.1 ,}
}
              className=\"text-center p-6\"    />;
              <div className=\"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Shield className=\"w-8 h-8 text-green-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Enterprise Security</h3>;
              <p className=\"text-gray-600\"    />;
                Bank-grade security and compliance for mission-critical business applications;
              </p>;
<<<<<<< HEAD
            </motion && motion.div>;<motion&& motion.div;
=======
            </motion && motion.div>;
            <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.2 }}
              initial={{ opacity: 0, y: 20 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.2 ,}
}
              className=\"text-center p-6\"    />;
              <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <Globe className=\"w-8 h-8 text-purple-600\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Global Scale</h3>;
              <p className=\"text-gray-600\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Cloud-native solutions that scale globally with enterprise-grade reliability;
              </p>;
            </motion && motion.div>;
          </div>;
<<<<<<< HEAD
      </section>;{/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8 text-center">;"
          <h2 className="text-3xl "md":text-4xl font-bold mb-6">;"
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;"
            Let's discuss how our innovative services can help you achieve your business goals;'
          </p>;<div className="grid grid-cols-1 "md":grid-cols-3 gap-8 mb-8">;"
            <div className="text-center">;"
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>;"
              <p className="text-blue-100">+1 302 464 0950</p>;"
            </div>;
            <div className="text-center">;"
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>;"
              <p className="text-blue-100">kleber@ziontechgroup && ziontechgroup.com</p>;"
            </div>;
            <div className="text-center">;"
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />;"
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;"
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>;"
            </div>;
          </div>;<div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
ursor/fix-netlify-build-and-merge-to-main-9571;
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
ursor/automate-test-improve-and-merge-code-646c;
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
ursor/fix-netlify-build-and-merge-to-main-9571;
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
            <a;
              href=""mailto":kleber@ziontechgroup.com?subject=Business Transformation Consultation";"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors flex items-center justify-center gap-2";"
            >;
              <Mail className="w-5 h-5" />;"
              Start Consultation;
            </a>;
            <a;
              href=""https"://ziontechgroup.com";"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-900 transition-colors flex items-center justify-center gap-2";"
            >;
              <Globe className="w-5 h-5" />;"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors flex items-center justify-center gap-2">"
=======
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <Mail className="w-5 h-5" />;"
              Start Consultation;
            </a>;
            <a;
              href=""https"://ziontechgroup.com";"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-900 transition-colors flex items-center justify-center gap-2">"

              <Globe className="w-5 h-5" />;"

          <div className="flex flex-col "sm": flex-row gap-4 justify-center">"
            <a,
href=""mailto":kleber@ziontechgroup.com?subject=Business Transformation Consultation""
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors flex items-center justify-center gap-2""
            >
              <Mail className="w-5 h-5" />"
              Start Consultation
            </a>
            <a,
href=""https"://ziontechgroup.com""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-900 transition-colors flex items-center justify-center gap-2""
            >
              <Globe className="w-5 h-5" />"
              Visit Website
=======
      </section>;{/* Contact Section */}
      <section className=\"py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center\"    />;
          <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    />;
=======
      </section>;
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
            Let's discuss how our innovative services can help you achieve your business goals;
          </p>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">;
            <div className="text-center">;
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />;
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>;
              <p className="text-blue-100">+1 302 464 0950</p>;
            </div>;
            <div className="text-center">;
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />;
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>;
              <p className="text-blue-100">kleber@ziontechgroup && ziontechgroup.com</p>;
            </div>;
            <div className="text-center">;
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />;
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>;
            </div>;
          </div>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a
              href="mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">;
              <Mail className="w-5 h-5" />;
              Start Consultation;
            </a>;
            <a
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              href="https://ziontechgroup && ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2">;
              <Globe className="w-5 h-5" />;
                  </motion.div>))}
              </motion.div>)}
          </AnimatePresence>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <div className="text - center py - 12">;
              <div className="text - gray - 400 mb - 4">;
                <Search className="w - 16 h - 16 mx - auto" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">No services found</h3>;
              <p className="text - gray - 600">Try adjusting your search terms or category filters.</p>;
            </div>)}
        </div>;
      </section>;
      {/* Why Choose Us */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              We deliver innovative, enterprise - grade solutions that transform businesses and drive growth;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5 }}
              className="text - center p - 6";
            >;
              <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Brain className="w - 8 h - 8 text - blue - 600" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">AI - Powered Innovation</h3>;
              <p className="text - gray - 600">;
                Cutting - edge AI and machine learning solutions that deliver real business value;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text - center p - 6";
            >;
              <div className="w - 16 h - 16 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Shield className="w - 8 h - 8 text - green - 600" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">Enterprise Security</h3>;
              <p className="text - gray - 600">;
                Bank - grade security and compliance for mission - critical business applications;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text - center p - 6";
            >;
              <div className="w - 16 h - 16 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Globe className="w - 8 h - 8 text - purple - 600" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">Global Scale</h3>;
              <p className="text - gray - 600">;
                Cloud - native solutions that scale globally with enterprise - grade reliability;
              </p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="py - 20 bg - gradient - to - r from - blue - 900 to - purple - 900 text - white">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Ready to Transform Your Business?;
          </h2>;
          <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    />;
            Let's discuss how our innovative services can help you achieve your business goals;
          </p>;<div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8\"    />;
            <div className=\"text-center\"    />;
              <Phone className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Call Us</h3>;
              <p className=\"text-blue-100\"    />+1 302 464 0950</p>;
            </div>;
            <div className=\"text-center\"    />;
              <Mail className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Email Us</h3>;
              <p className=\"text-blue-100\"    />kleber@ziontechgroup && ziontechgroup.com</p>;
            </div>;
            <div className=\"text-center\"    />;
              <MapPin className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    />;
              <h3 className=\"text-lg font-semibold mb-2\"    />Visit Us</h3>;
              <p className=\"text-blue-100\"    />364 E Main St STE 1008<br    />Middletown DE 19709</p>;
            </div>;
          </div>;<div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
ursor/fix-netlify-build-and-merge-to-main-9571;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
ursor/automate-test-improve-and-merge-code-646c;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
ursor/fix-netlify-build-and-merge-to-main-9571;
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
            <a;
              href=\'mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation\';
              className=\'bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2\';
                />;
              <Mail className=\"w-5 h-5\"    />;
              Start Consultation;
            </a>;
            <a;
<<<<<<< HEAD
              href=\'https://ziontechgroup.com\';
              className=\'border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\';
                />;
              <Globe className=\"w-5 h-5\"    />;
              className=\"bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2\">

              <Mail className=\"w-5 h-5\"    />;
              Start Consultation;
            </a>;
            <a;
              href=\'https://ziontechgroup.com\';
              className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\"    />

              <Globe className=\"w-5 h-5\"    />;

          <div className=\"flex flex-col sm: flex-row gap-4 justify-center\"    />
            <a;
href=\"mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation\"
              className=\"bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2\"
                />
              <Mail className=\"w-5 h-5\"    />
              Start Consultation;
            </a>
            <a;
href=\"https://ziontechgroup.com\"
              className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\"
                />
              <Globe className=\"w-5 h-5\"    />
              Visit Website;
>>>>>>> origin/chore/fix-lint-and-merge
            </a>
          </div>
      </section>
    </div>
  )}


export default ComprehensiveServicesShowcase2025;
=======
              href="https://ziontechgroup.com";
              className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - blue - 900 transition - colors flex items - center justify - center gap - 2";
            >;
              <Globe className="w - 5 h - 5" />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Visit Website;
            </a>;
          </div>;
      </section>;
<<<<<<< HEAD
    </div>;
  )}export default ComprehensiveServicesShowcase2025;
  )}
=======
<<<<<<< HEAD
export default ComprehensiveServicesShowcase;


export default ComprehensiveServicesShowcase;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default ComprehensiveServicesShowcase2025;
              Visit Website;
            </a>;
          </div>;
      </section>;
export default ComprehensiveServicesShowcase;</div>)}

export default ComprehensiveServicesShowcase;
    </div>
  );
<<<<<<< HEAD
};
=======
}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export default ComprehensiveServicesShowcase2025;

=======
>>>>>>> origin/chore/fix-lint-and-merge

export default ComprehensiveServicesShowcase;
}
}ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
              href=\'https://ziontechgroup.com\';
              className=\'border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\';
            >;
              className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\">

              <Globe className=\"w-5 h-5\"    />;
              Visit Website;
            </a>;
          </div>;
      </section>;
    </div>;
  )}export default ComprehensiveServicesShowcase2025;ursor/automate-test-improve-and-merge-code-646c;
  duration: 0.5, delay: 0.2;
}className=\"text-center p-6\" > <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\"    /> <Globe className=\"w-8 h-8 text-purple-600\"    /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Global Scale</h3> <p className=\"text-gray-600\"    /> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {/* Contact Section */;}
}<section className=\"py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white\"    /> <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center\"    /> <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    /> Ready to Transform Your Business? </h2> <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    /> Let's discuss how our innovative services can help you achieve your business goals </p> <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8\"    /> <div className=\"text-center\"    /> <Phone className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    /> <h3 className=\"text-lg font-semibold mb-2\"    />Call Us</h3> <p className=\"text-blue-100\"    />+1 302 464 0950</p> </div> <div className=\"text-center\"    /> <Mail className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    /> <h3 className=\"text-lg font-semibold mb-2\"    />Email Us</h3> <p className=\"text-blue-100\"    />kleber@ziontechgroup.com</p> </div> <div className=\"text-center\"    /> <MapPin className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    /> <h3 className=\"text-lg font-semibold mb-2\"    />Visit Us</h3> <p className=\"text-blue-100\"    />364 E Main St STE 1008<br    />Middletown DE 19709</p> </div> </div> <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    /> <a href=\"mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation\" className=\"bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2\"     /> <Mail className=\"w-5 h-5\"    /> Start Consultation </a> <a href=\"https://ziontechgroup.com\" className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\"     /> <Globe className=\"w-5 h-5\"    /> Visit Website </a> </div> </div> </section> </div>)}export default ComprehensiveServicesShowcase;
  )}

<<<<<<< HEAD
export default ComprehensiveServicesShowcase2025;ursor/automate-test-improve-and-merge-code-646c;
  duration: 0.5, delay: 0.2;
}className=\"text-center p-6\" > <div className=\"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4\"    /> <Globe className=\"w-8 h-8 text-purple-600\"    /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-2\"    />Global Scale</h3> <p className=\"text-gray-600\"    /> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {/* Contact Section */;}
}<section className = \"py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white\"    /> <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center\"    /> <h2 className=\"text-3xl md:text-4xl font-bold mb-6\"    /> Ready to Transform Your Business? </h2> <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\"    /> Let's discuss how our innovative services can help you achieve your business goals </p> <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8\"    /> <div className=\"text-center\"    /> <Phone className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    /> <h3 className=\"text-lg font-semibold mb-2\"    />Call Us</h3> <p className=\"text-blue-100\"    />+1 302 464 0950</p> </div> <div className=\"text-center\"    /> <Mail className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    /> <h3 className=\"text-lg font-semibold mb-2\"    />Email Us</h3> <p className=\"text-blue-100\"    />kleber@ziontechgroup.com</p> </div> <div className=\"text-center\"    /> <MapPin className=\"w-8 h-8 mx-auto mb-4 text-blue-300\"    /> <h3 className=\"text-lg font-semibold mb-2\"    />Visit Us</h3> <p className=\"text-blue-100\"    />364 E Main St STE 1008<br    />Middletown DE 19709</p> </div> </div> <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    /> <a href=\"mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation\" className=\"bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2\"     /> <Mail className=\"w-5 h-5\"    /> Start Consultation </a> <a href=\"https://ziontechgroup.com\" className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\"     /> <Globe className=\"w-5 h-5\"    /> Visit Website </a> </div> </div> </section> </div>;
}
<<<<<<< HEAD
export default ComprehensiveServicesShowcase;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;
              href="https://ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
=======

export default ComprehensiveServicesShowcase;
<<<<<<< HEAD
};

              href=\"https: //ziontechgroup.com\"
              className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2\"
>>>>>>> origin/chore/fix-lint-and-merge
            >
              <Globe className=\"w-5 h-5\"    />
              Visit Website;
=======
;
<<<<<<< HEAD

// All services combined
const _allServices = [
  ...advancedAIMLServices,
  ...advancedCybersecurityServices,
      ...advancedCloudDevOpsServices2025,
  ...industrySpecificSolutions,
  ...emergingTechnologyServices
],

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className="w-5 h-5" /> },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-5 h-5" /> },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Building className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Cpu className="w-5 h-5" /> }
  ],

  const _filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics'),
        if (activeTab === 'ai-automation') return service.category?.includes('AI Automation'),
        if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure'),
        if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS'),
        if (activeTab === 'ai-services') return service.category?.includes('AI Services'),
        return true
      }),

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, _IT infrastructure, _and AI services. Transform your business with cutting-edge solutions."
        keywords={_["micro SAAS", _"IT services", _"AI services", _"business intelligence", _"automation", _"cloud infrastructure"]}
      />

      {_/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2025 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with our innovative portfolio of micro SAAS, _IT infrastructure, _and AI services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
                {_allServices.length}+ Services
              </span>
              <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">
                AI-Powered Solutions
              </span>
              <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">
                Enterprise Ready
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Contact Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {_/* Category Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {_categories.map((category) => (_<button
                key={category.id}
                onClick={_() => setActiveTab(category.id)}
                className={_`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'}`}
              >
                {_category.icon}
                {_category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {_/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {_/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {_service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {_service.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {_service.category}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Micro SAAS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {_/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {_service.description}
                  </p>

                  {_/* Pricing */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Starting at:</span>
                        <span className="font-semibold text-green-600">
                          {_service.pricing ? service.pricing.starter : `${(service as any).price}${_(service as any).period}`}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {_(service as any).trialDays ? `${(service as any).trialDays} days free trial` : ''} • {_(service as any).setupTime ? `${(service as any).setupTime} setup` : 'Custom setup'}
                      </div>
                    </div>
                  </div>

                  {_/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {_service.features?.slice(0, _6).map(_(feature, _idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="truncate">{_feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {_/* Market Info */}
                  <div className="mb-4 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Market Size:</span>
                      <span className="font-semibold text-gray-900">{_service.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target Audience:</span>
                      <span className="font-semibold text-gray-900">{_service.targetAudience}</span>
                    </div>
                  </div>

                  {_/* CTA Button */}
                  <div className="flex flex-col gap-2">
                    <a
                      href={_`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${_service.name}`}
  duration: 0.5, delay: 0.2
}className="text-center p-6" > <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Globe className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3> <p className="text-gray-600"> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {
  /* Contact Section */
}<section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div className="text-center"> <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <p className="text-blue-100">+1 302 464 0950</p> </div> <div className="text-center"> <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <p className="text-blue-100">kleber@ziontechgroup.com</p> </div> <div className="text-center"> <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" > <Mail className="w-5 h-5" /> Start Consultation </a> <a href="https://ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2" > <Globe className="w-5 h-5" /> Visit Website </a> </div> </div> </section> </div>)
};export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${(service as any).contact |'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Started
                    </a>
                    <a
                      href={`tel:${(service as any).mobile |'+1 302 464 0950'}`}
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Services Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div

          {/* Services Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-blue-100 text-sm">{service.tagline}</p>
                      
                      {/* Price */}
                      <div className="mt-4">
                        <span className="text-2xl font-bold">
                          {getServicePricing(service)}
                        </span>
                      </div>
                    </div>
                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      
                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                        </span>
                        <span className="text-gray-500">
                          {typeof service.price === 'string' ? (service as any).period |'/month' : '/month'}
                        </span>
                      </div>
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
                        </span>
                      </div>

                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Setup:</span> {getServiceSetupTime(service)}
                        </div>
                        <div>
                          <span className="font-medium">Trial:</span> {getServiceTrialDays(service)} days
                        </div>
                      </div>

                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Expected ROI:</span>
                          <span className="text-green-600 font-semibold ml-1">
                            {service.roi.split(' ')[0]} ROI
                          </span>
                        </div>
                        {service.popular && (
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Popular</span>
                          </div>
                        </div>

                        {/* Price and Features */}
                        <div className="lg:w-1/3">
                          <div className="text-right mb-4">
                            <span className="text-3xl font-bold text-gray-900">
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            </span>
                            <span className="text-gray-500">
                              {typeof service.price === 'string' ? (service as any).period |'/month' : '/month'}
                            </span>
                          </div>
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>
                            </span>
                            
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge AI and machine learning solutions that deliver real business value
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security and compliance for mission-critical business applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-600">
                Cloud-native solutions that scale globally with enterprise-grade reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative services can help you achieve your business goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Start Consultation
            </a>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Visit Website
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </a>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )}

export default ComprehensiveServicesShowcase
};

              href=""https": //ziontechgroup.com""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-900 transition-colors flex items-center justify-center gap-2""
            >
              <Globe className="w-5 h-5" />"
              Visit Website
            </a>
          </div>
      </section>
    </div>
  )
};

export default ComprehensiveServicesShowcase2025;
main


  duration: 0.5, delay: 0.2
}className="text-center p-6" > <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Globe className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3> <p className="text-gray-600"> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {
  /* Contact Section */ 
}<section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div className="text-center"> <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <p className="text-blue-100">+1 302 464 0950</p> </div> <div className="text-center"> <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <p className="text-blue-100">kleber@ziontechgroup.com</p> </div> <div className="text-center"> <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" > <Mail className="w-5 h-5" /> Start Consultation </a> <a href="https://ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2" > <Globe className="w-5 h-5" /> Visit Website </a> </div> </div> </section> </div>) 
};
export default ComprehensiveServicesShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
=======
export default ComprehensiveServicesShowcase2025;

<<<<<<< HEAD

  duration: 0.5, delay: 0.2
}className="text-center p-6" > <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"> <Globe className="w-8 h-8 text-purple-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3> <p className="text-gray-600"> Cloud-native solutions that scale globally with enterprise-grade reliability </p> </motion.div> </div> </div> </section> {
  /* Contact Section */ 
}<section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Let's discuss how our innovative services can help you achieve your business goals </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div className="text-center"> <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Call Us</h3> <p className="text-blue-100">+1 302 464 0950</p> </div> <div className="text-center"> <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Email Us</h3> <p className="text-blue-100">kleber@ziontechgroup.com</p> </div> <div className="text-center"> <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" /> <h3 className="text-lg font-semibold mb-2">Visit Us</h3> <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2" > <Mail className="w-5 h-5" /> Start Consultation </a> <a href="https://ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2" > <Globe className="w-5 h-5" /> Visit Website </a> </div> </div> </section> </div>) 
};
export default ComprehensiveServicesShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
  )
}
export default ComprehensiveServicesShowcase;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
