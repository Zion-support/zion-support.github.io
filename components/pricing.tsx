
import Link from 'next/link';
import { motion } from 'framer-motion';

import {

  Shield, Zap, Rocket, Brain, Atom, Globe, Target;
  ArrowRight, Phone, Mail, MapPin, ExternalLink
 } from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029',
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029',
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
// Import all service data
import { enhancedRealMicroSaasServices  } from '../data/enhanced-real-micro-saas-services';
import { innovativeAIServices2029  } from '../data/2029-innovative-ai-services';
import { quantumSpaceInnovations2029  } from '../data/2029-quantum-space-innovations';
import { enterpriseITInnovations2029  } from '../data/2029-enterprise-it-innovations';
import { innovativeMicroSaas2029 } from '../data/2029-innovative-micro-saas';
export default function PricingPage() {;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  // Combine all services

  const allServices = [
    ...enhancedRealMicroSaasServices
    ...innovativeAIServices2029
    ...quantumSpaceInnovations2029
    ...enterpriseITInnovations2029
    ...innovativeMicroSaas2029
  ];
  // Get unique services by ID
  const uniqueServices = allServices.filter(
    (service, index, self) => index === self.findIndex(s => s.id === service.id)
  );
  // Get all categories
  const categories = [
    'All'
    ...Array.from(
      new Set(
        uniqueServices.map(s =>
          Array.isArray(s.category) ? s.category[0] : s.category
        )
      )
    )
  ];  ];
  // Get unique services by ID
  const uniqueServices = allServices.filter((service, index, self) =>
    index === self.findIndex(s => s.id === service.id)
  );
  // Get all categories
  const categories = ['All', ...Array.from(new Set(uniqueServices.map(s =>
    Array.isArray(s.category) ? s.category[0] : s.category
  )))];
  // Price ranges
  const priceRanges = [
    { id: 'All', name: 'All Prices', range: 'All' }
    { id: 'Under $1K', name: 'Under $1K/month', range: 'Under $1K' }
    { id: '$1K - $5K', name: '$1K - $5K/month', range: '$1K - $5K' }
    { id: '$5K - $20K', name: '$5K - $20K/month', range: '$5K - $20K' }
    { id: '$20K+', name: '$20K+/month', range: '$20K+' },  ];
  // Filter services
  const filteredServices = uniqueServices.filter(service => {    { id: '$20K+', name: '$20K+/month', range: '$20K+' }
  ];
  // Filter services
  const filteredServices = uniqueServices.filter(service => {

  const yearlyDiscount = 0.2, // 20% discount for yearly billing

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>
        <meta
          name='description'
          content='Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology.'
        />
        <meta
          name='keywords'
          content='technology pricing, AI services pricing, quantum computing pricing, space technology pricing, 2029 technology pricing'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='https://ziontechgroup.com/pricing' />      </Head>
      <UltraFuturisticNavigation2029 />
      <main className='relative z-10 pt-20'>
        {/* Hero Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'        <meta name="description" content="Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />
        <meta name="keywords" content="technology pricing, AI services pricing, quantum computing pricing, space technology pricing, 2029 technology pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      <UltraFuturisticNavigation2029 />
      <main className='relative z-10 pt-20'>
        {/* Hero Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'>      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary 2029
              </span>
              <br />
              <span className="text-white">Technology Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transparent pricing for our cutting-edge technology services that are already operational and delivering transformative results
            </p>
              </select>;
            </div>;
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                Revolutionary 2029;
              </span>;
              <br />;
              <span className="text-white">Technology Pricing</span>;
            </h1>;
            <p className="text-xl text-gray-300 mb-8">;
              Transparent pricing for our cutting-edge technology services that are already operational and delivering transformative results;
            </p>;
            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-8">;
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e && e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20";
              >;
                {categories && categories.map(category => (;
                  <option key={category} value={category}>{category}</option>;
                ))}
              </select>;
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>

                ))}

              <p>Showing {filteredServices.length} services in {Object.keys(servicesByCategory).length} categories</p>
            </div>
          </motion.div>
        </section>

                        {/* ROI Information */}
                        {service.roi && (
                          <div className="mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg">
                            <p className="text-xs text-green-300 leading-relaxed">
                              <strong>ROI:</strong> {service.roi}
                            </p>
                          </div>
                        )}

                            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                              <span className="flex items-center">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </span>
                            </button>
                          </Link>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    </motion.div>

                  ))}
                </div>
              </motion.div>
            ))}

        </section>
        {/* Contact CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>        <section className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto text-center">
            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started with
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Revolutionary Technology?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                    <Phone className="inline-block w-5 h-5 mr-2" />
                    Schedule Consultation
                  </button>
                </Link>
                <a href={`mailto:${contactInfo.email}`}>
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105">
                    <Mail className="inline-block w-5 h-5 mr-2" />
                    Get Quote
                  </button>
                </a>
              </div>

                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>All services are operational and market-tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Proven ROI and customer success stories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Comprehensive support and implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Cutting-edge 2029 technology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}viewport= {
  {
