<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
=======
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Check
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  Shield
  Zap
  Rocket
  Brain
  Atom
  Globe
  Target
  ArrowRight
  Phone
  Mail
  MapPin
  ExternalLink;} from 'lucide-react';
<<<<<<< HEAD
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';import {
  Check, Star, Users, TrendingUp, DollarSign, Clock

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Check,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Rocket,
  Brain,
  Atom,
  Globe,
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPin,;
  ExternalLink,;} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';import {
  Check, Star, Users, TrendingUp, DollarSign, Clock, ;
<<<<<<< HEAD
=======

=======

  Check,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Rocket,
  Brain,
  Atom,
  Globe,
  Target,
  ArrowRight,
  Phone,
  Mail,
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  MapPin,;
  ExternalLink,;} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
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
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Check
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  Shield
  Zap
  Rocket
  Brain
  Atom
  Globe
  Target
  ArrowRight
  Phone
  Mail
  MapPin
  ExternalLink;} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';import {
  Check, Star, Users, TrendingUp, DollarSign, Clock

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeAIServices2029 } from '../data/2029-innovative-ai-services';
import { quantumSpaceInnovations2029 } from '../data/2029-quantum-space-innovations';
import { enterpriseITInnovations2029 } from '../data/2029-enterprise-it-innovations';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { innovativeMicroSaas2029 } from '../data/2029-innovative-micro-saas';
export default function PricingPage() {;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  // Get unique services by ID
  const uniqueServices = allServices.filter((service, index, self) =>
    index === self.findIndex(s => s.id === service.id)
  );
  // Get all categories
  const categories = ['All', ...Array.from(new Set(uniqueServices.map(s =>
    Array.isArray(s.category) ? s.category[0] : s.category
  )))];
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    acc[category].push(service);
    return acc
  }, {} as Record<string, typeof filteredServices>);
      answer: 'Yes, all our services offer a 14-day free trial with full access to all features. No credit card required.'
    }
    {
      question: 'What payment methods do you accept?'
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can be invoiced.'
    }
    {
      question: 'Do you offer volume discounts?'
      answer: 'Yes, we offer volume discounts for teams and organizations. Contact our sales team for custom pricing.'
    }
    {
      question: 'Can I cancel my subscription?'
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    }
    {
      question: 'Is there a setup fee?'
      answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'
    }
  ];
  const filteredServices = selectedCategory === 'All'
    ? microSaasServices
    : microSaasServices.filter(service => service.category === selectedCategory);

  const yearlyDiscount = 0.2, // 20% discount for yearly billing
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




  const filteredServices = selectedCategory === 'All' ;
    ? microSaasServices ;
    : microSaasServices && microSaasServices.filter(service => service && service.category === selectedCategory);

  const yearlyDiscount = 0 && 0.2, // 20% discount for yearly billing;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
        {/* Hero Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

            transition={{ duration: 0 && 0.8 }}
            className='max-w-4xl mx-auto'        <meta name="description" content="Explore comprehensive pricing for our revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />;
        <meta name="keywords" content="technology pricing, AI services pricing, quantum computing pricing, space technology pricing, 2029 technology pricing" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/pricing" />;

      <UltraFuturisticNavigation2029 />;

      <main className='relative z-10 pt-20'>;

        {/* Hero Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 text-center'>      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

=======
            {/* Filter Controls */}
            <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mb-8'>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20'
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20'
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>                ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

              </select>;


              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>

                ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                ))}


            <div className="text-center text-gray-400">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            transition={{ duration: 0.8 }}



                ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <p>Showing {filteredServices.length} services in {Object.keys(servicesByCategory).length} categories</p>
            </div>
          </motion.div>
        </section>
<<<<<<< HEAD

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

        {/* Contact CTA Section */}
=======
                        }}
                        viewport={{ once: true }}
                        className='group cursor-pointer'>;
                        <div
                          className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 ${service && service.popular ? 'ring-2 ring-yellow-400/50' : ''}`}>;
                          {/* Popular Badge */}
                          {service && service.popular && (;
                            <div className='flex items-center justify-center mb-4'>;
                              <div className='px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full'>;
                                <span className='text-sm text-yellow-400 font-medium flex items-center'>;
                                  <Star className='w-4 h-4 mr-1 fill-current' />;
                                  Most Popular;
                                </span>;
                              </div>;
                            </div>;
                          )}
                          {/* Service Icon */}
                          <div
                          {/* Service Title and Tagline */}
                          <h3 className='text - xl font - semibold text - white mb - 2'>;
                            {service.name}
                          </h3>;
                          <p className='text - sm text - cyan - 400 mb - 4'>;
                            {service.tagline}
                          {/* Price */}
                          <div className='mb-6'>;
                            <div className='flex items-baseline'>;
                              <span
                                className={`${service && service.textColor} font-bold text-3xl`}>;
                                {service && service.price}
                              </span>;
                              <span className='text-gray-400 text-lg ml-2'>;
                                {service && service.period}
                              </span>;
                            </div>;
                            {service && service.setupTime && (;
                              <p className='text-sm text-gray-500 mt-1'>;
                                Setup: {service && service.setupTime}
                              </p>;
                            )}
                          {/* Key Features */}
                          <div className='mb-6'>;
                            <h4 className='text-sm font-medium text-gray-400 mb-3'>;
                              Key Features:;
                            </h4>;
                            <div className='space-y-2'>;
                              {service && service.features;
                                .slice(0, 4);
                                .map((feature, idx) => (;
                                  <div
                                    key={idx}
                                    className='flex items-center space-x-2'>;
                                    <Check className='w-4 h-4 text-green-400 flex-shrink-0' />;
                                    <span className='text-sm text-gray-300'>;
                                      {feature}
                                    </span>;
                                  </div>;
                                ))}
                              {service && service.features.length > 4 && (;
                                <span className='text-xs text-gray-500'>;
                                  +{service && service.features.length - 4} more features;
                                </span>;
                              )}
                          {/* Additional Info */}
                          <div className='mb-6 p-4 bg-gray-800/30 rounded-xl'>;
                            <div className='grid grid-cols-2 gap-4 text-sm'>;
                              <div>;
                                <span className='text-gray-400'>Trial:</span>;
                                <span className='text-white ml-2'>;
                                  {service && service.trialDays} days;
                                </span>;
                              </div>;
                              {service && service.rating && (;
                                <div>;
                                  <span className='text-gray-400'>Rating:</span>;
                                  <span className='text-white ml-2'>;
                                    {service && service.rating}/5;
                                  </span>;
                                </div>;
                              )}
                              {service && service.customers && (;
                                <div>;
                                  <span className='text-gray-400'>;
                                    Customers:;
                                  </span>;
                                  <span className='text-white ml-2'>;
                                    {service && service.customers}
                                  </span>;
                                </div>;
                              )}
                              {service && service.launchDate && (;
                                <div>;
                                  <span className='text-gray-400'>;
                                    Launched:;
                                  </span>;
                                  <span className='text-white ml-2'>;
                                    {new Date(service && service.launchDate).getFullYear()}
                                  </span>;
                                </div>;
                              )}
                          {/* Market Position */}
                          {service && service.marketPosition && (;
                            <div className='mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg'>;
                              <p className='text-xs text-blue-300 leading-relaxed'>;
                                {service && service.marketPosition}
                              </p>;
                            </div>;
                          )}
                          {/* ROI Information */}
                          {service && service.roi && (;
                            <div className='mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg'>;
                              <p className='text-xs text-green-300 leading-relaxed'>;
                                <strong>ROI:</strong> {service && service.roi}
                              </p>;
                            </div>;
                          )}
                          {/* CTA */}
                          <div className='flex items-center justify-between'>;
                            <Link
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
                        {/* Market Position */}
                        {service && service.marketPosition && (
                          <div className="mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg">;
                            <p className="text-xs text-blue-300 leading-relaxed">;
                              {service && service.marketPosition}
                            </p>;
                          </div>;
                        )}
                        {/* ROI Information */}
                        {service && service.roi && (;
                          <div className="mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg">;
                            <p className="text-xs text-green-300 leading-relaxed">;
                              <strong>ROI:</strong> {service && service.roi}
                            </p>;
                          </div>;
                        )}
                        {/* CTA */}
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
                </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD


          </div>
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </section>
        {/* Contact CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

        {/* Contact CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  {' '}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  ))}
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </section>
        {/* Contact CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>        <section className="py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD

          <div className="max-w-4xl mx-auto text-center">
            <motion.div

=======
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                    <Mail className="inline-block w-5 h-5 mr-2" />
                    Get Quote
                  </button>
                </a>
              </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                    <span>Cutting-edge 2029 technology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
=======
      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );

}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8
}viewport= {
  {
<<<<<<< HEAD

                  Revolutionary Technology?;
                </span>;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Contact our team to discuss pricing, implementation, and how our;
                revolutionary 2029 services can transform your business.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>;
                <Link href='/contact'>;
                  <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>;
                    <Phone className='inline-block w-5 h-5 mr-2' />                    Schedule Consultation;
                  </button>;
                </Link>;
                <a href={`mailto:${contactInfo && contactInfo.email}`}>;
                  <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105'>;
                    <Mail className='inline-block w-5 h-5 mr-2' />                    Get Quote              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">;
                <Link href="/contact">;
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">;
                    <Phone className="inline-block w-5 h-5 mr-2" />;
                  </button>;
                </Link>;
                <a href={`mailto:${contactInfo && contactInfo.email}`}>;
                  <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105'>;
                    <Mail className='inline-block w-5 h-5 mr-2' />                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105">;
                    <Mail className="inline-block w-5 h-5 mr-2" />;
=======
                          </p>;
                          {/* Key Features */}
                          <div className='mb - 6'>;
                            <h4 className='text - sm font - medium text - gray - 400 mb - 3'>;
                              Key Features:;
                            </h4>;
                            <div className='space - y-2'>;
                              {service.features;
                                .slice (0, 4);
                                .map ((feature, idx) => (
                                  <div;
                                    key={idx}
                                    className='flex items - center space - x-2';
                                  >;
                                    <Check className='w - 4 h - 4 text - green - 400 flex - shrink - 0' />;
                                    <span className='text - sm text - gray - 300'>;
                                      {feature}
                                    </span>;
                                  </div>))}
                              {service.features.length > 4 && (
                                <span className='text - xs text - gray - 500'>;
                                  +{service.features.length - 4} more features;
                                </span>)}
                            </div>;
                          </div>;
                          {/* Additional Info */}
                          <div className='mb - 6 p - 4 bg - gray - 800 / 30 rounded - xl'>;
                            <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                              <div>;
                                <span className='text - gray - 400'>Trial:</span>;
                                <span className='text - white ml - 2'>;
                                  {service.trial_days} days;
                                </span>;
                              </div>;
                              {service.rating && (
                                <div>;
                                  <span className='text - gray - 400'>Rating:</span>;
                                  <span className='text - white ml - 2'>;
                                    {service.rating}/5;
                                  </span>;
                                </div>)}
                              {service.customers && (
                                <div>;
                                  <span className='text - gray - 400'>;
                                    Customers:;
                                  </span>;
                                  <span className='text - white ml - 2'>;
                                    {service.customers}
                                  </span>;
                                </div>)}
                              {service.launch_date && (
                                <div>;
                                  <span className='text - gray - 400'>;
                                    Launched:;
                                  </span>;
                                  <span className='text - white ml - 2'>;
                                    {new Date (service.launch_date).getFullYear ()}
                                  </span>;
                                </div>)}
                            </div>;
                          </div>;
                          {/* Market Position */}
                          {service.market_position && (
                            <div className='mb - 6 p - 3 bg - blue - 900 / 20 border border - blue - 500 / 20 rounded - lg'>;
                              <p className='text - xs text - blue - 300 leading - relaxed'>;
                                {service.market_position}
                              </p>;
                            </div>)}
                          {/* ROI Information */}
                          {service.roi && (
                            <div className='mb - 6 p - 3 bg - green - 900 / 20 border border - green - 500 / 20 rounded - lg'>;
                              <p className='text - xs text - green - 300 leading - relaxed'>;
                                <strong > ROI:</strong> {service.roi}
                              </p>;
                            </div>)}
                          {/* CTA */}
                          <div className='flex items - center justify - between'>;
                            <Link;
                              href={service.link || `/services/${service.id}`}
                            >;
                              <button className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105'>;
                                <span className='flex items - center'>;
                                  Learn More;
                                  <ArrowRight className='w - 4 h - 4 ml - 2' />;
                                </span>;
                              </button>;
                            </Link>;
                            <ExternalLink className='w - 5 h - 5 text - gray - 400 group - hover:text - cyan - 400 transition - colors' />;
                          </div>;
                        </div>;
                      </motion.div>))}
                  </div>;
                </motion.div>))}          </div>;
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
                        {/* Market Position */}
                        {service.market_position && (
                          <div className="mb - 6 p - 3 bg - blue - 900 / 20 border border - blue - 500 / 20 rounded - lg">;
                            <p className="text - xs text - blue - 300 leading - relaxed">;
                              {service.market_position}
                            </p>;
                          </div>)}
                        {/* ROI Information */}
                        {service.roi && (
                          <div className="mb - 6 p - 3 bg - green - 900 / 20 border border - green - 500 / 20 rounded - lg">;
                            <p className="text - xs text - green - 300 leading - relaxed">;
                              <strong > ROI:</strong> {service.roi}
                            </p>;
                          </div>)}
                        {/* CTA */}
                        <div className="flex items - center justify - between">;
                          <Link href={service.link || `/services/${service.id}`}>;
                            <button className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105">;
                              <span className="flex items - center">;
                                Learn More;
                                <ArrowRight className="w - 4 h - 4 ml - 2" />;
                              </span>;
                            </button>;
                          </Link>;
                          <ExternalLink className="w - 5 h - 5 text - gray - 400 group - hover:text - cyan - 400 transition - colors" />;
                        </div>;
                      </div>;
                    </motion.div>))}
                </div>;
              </motion.div>))}
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 3xl sm:text - 4xl lg:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  {' '}
                  Revolutionary Technology?;
                </span>;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Contact our team to discuss pricing, implementation, and how our;
                revolutionary 2029 services can transform your business.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8'>;
                <Link href='/contact'>;
                  <button className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105'>;
                    <Phone className='inline - block w - 5 h - 5 mr - 2' />                    Schedule Consultation;
                  </button>;
                </Link>;
                <a href={`mailto:${contact_info.email}`}>;
                  <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 200 transform hover:scale - 105'>;
                    <Mail className='inline - block w - 5 h - 5 mr - 2' />                    Get Quote;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8">;
                <Link href="/contact">;
                  <button className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105">;
                    <Phone className="inline - block w - 5 h - 5 mr - 2" />;
                  </button>;
                </Link>;
                <a href={`mailto:${contact_info.email}`}>;
                  <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 200 transform hover:scale - 105'>;
                    <Mail className='inline - block w - 5 h - 5 mr - 2' />                  <button className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 rounded - xl font - semibold text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 200 transform hover:scale - 105">;
                    <Mail className="inline - block w - 5 h - 5 mr - 2" />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    Get Quote;
                  </button>;
                </a>;
              </div>;
              {/* Contact Information */}
<<<<<<< HEAD
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300'>;
                <div className='flex items-center justify-center space-x-2'>;
                  <Phone className='w-5 h-5 text-cyan-400' />;
                  <span>{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-2'>;
                  <Mail className='w-5 h-5 text-purple-400' />;
                  <span>{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-2'>;
                  <MapPin className='w-5 h-5 text-pink-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>                </div>;
              </div>;
              {/* Additional Info */}                  <span>{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className="flex items-center justify-center space-x-2">;
                  <Mail className="w-5 h-5 text-purple-400" />;
                  <span>{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className="flex items-center justify-center space-x-2">;
                  <MapPin className="w-5 h-5 text-pink-400" />;
                  <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                </div>;
              </div>;
              {/* Additional Info */}
              <div className='mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20'>;
                <h3 className='text-xl font-semibold text-white mb-4'>;
                  Why Choose Zion Tech Group?;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300'>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>All services are operational and market-tested</span>;
                  </div>                    <span>All services are operational and market-tested</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Check className="w-4 h-4 text-green-400" />;
                    <span>Proven ROI and customer success stories</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Check className="w-4 h-4 text-green-400" />;
                    <span>Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Proven ROI and customer success stories</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />;
                    <span>Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Check className='w-4 h-4 text-green-400' />                    <span>Cutting-edge 2029 technology</span>                  <div className="flex items-center space-x-2">;
                    <Check className="w-4 h-4 text-green-400" />;
                    <span>Cutting-edge 2029 technology</span>;
                  </div>;
                </div>;
              </div>;
            </motion && motion.div>;
=======
              <div className='grid grid - cols - 1 sm:grid - cols - 3 gap - 6 text - gray - 300'>;
                <div className='flex items - center justify - center space - x-2'>;
                  <Phone className='w - 5 h - 5 text - cyan - 400' />;
                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center justify - center space - x-2'>;
                  <Mail className='w - 5 h - 5 text - purple - 400' />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className='flex items - center justify - center space - x-2'>;
                  <MapPin className='w - 5 h - 5 text - pink - 400' />;
                  <span className='text - sm'>{contact_info.address}</span>                </div>;
              </div>;
              {/* Additional Info */}                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className="flex items - center justify - center space - x-2">;
                  <Mail className="w - 5 h - 5 text - purple - 400" />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className="flex items - center justify - center space - x-2">;
                  <MapPin className="w - 5 h - 5 text - pink - 400" />;
                  <span className="text - sm">{contact_info.address}</span>;
                </div>;
              </div>;
              {/* Additional Info */}
              <div className='mt - 12 p - 6 bg - gray - 900 / 30 rounded - 2xl border border - cyan - 500 / 20'>;
                <h3 className='text - xl font - semibold text - white mb - 4'>;
                  Why Choose Zion Tech Group?;
                </h3>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4 text - sm text - gray - 300'>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />;
                    <span > All services are operational and market - tested</span>;
                  </div>                    <span > All services are operational and market - tested</span>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <Check className="w - 4 h - 4 text - green - 400" />;
                    <span > Proven ROI and customer success stories</span>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <Check className="w - 4 h - 4 text - green - 400" />;
                    <span > Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />;
                    <span > Proven ROI and customer success stories</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />;
                    <span > Comprehensive support and implementation</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Check className='w - 4 h - 4 text - green - 400' />                    <span > Cutting - edge 2029 technology</span>                  <div className="flex items - center space - x-2">;
                    <Check className="w - 4 h - 4 text - green - 400" />;
                    <span > Cutting - edge 2029 technology</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
        </section>;
      </main>;
      <UltraFuturisticFooter2029 />;
<<<<<<< HEAD
    </UltraFuturisticBackground2029>;
  );
}whileInView= {;
  {;
  opacity: 1, y: 0 ;
}transition= {;
  {;
  duration: 0 && 0.8 ;
}viewport= {;
  {;
  once: true ;
}> <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" > Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary Technology?</span> </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" > <Link href="/contact" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" > <Phone className="inline-block w-5 h-5 mr-2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20"> <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3> <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300"> <div className="flex items-center space-x-2"> <Check className="w-4 h-4 text-green-400" /> flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Proven ROI and customer success stories</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Comprehensive support and implementation</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion && motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>) }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
    </UltraFuturisticBackground2029>);
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}viewport= {
<<<<<<< HEAD
  {
=======
  once: true;
}> <h2 className="text - 3xl sm:text - 4xl lg:text - 5xl font - bold text - white mb - 6" > Ready to Get Started with <span className="bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent" > Revolutionary Technology?</span> </h2> <p className="text - xl text - gray - 300 mb - 8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8" > <Link href="/contact" > <button className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105" > <Phone className="inline - block w - 5 h - 5 mr - 2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt - 12 p - 6 bg - gray - 900 / 30 rounded - 2xl border border - cyan - 500 / 20"> <h3 className="text - xl font - semibold text - white mb - 4">Why Choose Zion Tech Group?</h3> <div className="grid grid - cols - 1 md: grid - cols - 2 gap - 4 text - sm text - gray - 300"> <div className="flex items - center space - x-2"> <Check className="w - 4 h - 4 text - green - 400" /> flex items - center space - x-2"> <Check className=" w - 4 h - 4 text - green - 400"/> <span > Proven ROI and customer success stories</span> </div> <div className=" flex items - center space - x-2"> <Check className=" w - 4 h - 4 text - green - 400"/> <span > Comprehensive support and implementation</span> </div> <div className=" flex items - center space - x-2"> <Check className=" w - 4 h - 4 text - green - 400" /> <span > Cutting - edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>) }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  once: true 

}> <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" > Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary Technology?</span> </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" > <Link href="/contact" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" > <Phone className="inline-block w-5 h-5 mr-2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20"> <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3> <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300"> <div className="flex items-center space-x-2"> <Check className="w-4 h-4 text-green-400" /> flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Proven ROI and customer success stories</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Comprehensive support and implementation</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>) }

}
}
}> <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" > Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Revolutionary Technology?</span> </h2> <p className="text-xl text-gray-300 mb-8" > Contact our team to discuss pricing, implementation, and how our revolutionary 2029 services can transform your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" > <Link href="/contact" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105" > <Phone className="inline-block w-5 h-5 mr-2" /> Schedule Consultation </button> Get Quote </button> </a> </div> <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20"> <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3> <div className="grid grid-cols-1 md: grid-cols-2 gap-4 text-sm text-gray-300"> <div className="flex items-center space-x-2"> <Check className="w-4 h-4 text-green-400" /> flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Proven ROI and customer success stories</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400"/> <span>Comprehensive support and implementation</span> </div> <div className=" flex items-center space-x-2"> <Check className=" w-4 h-4 text-green-400" /> <span>Cutting-edge 2029 technology</span> </div> </div> </div> </motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>)

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
