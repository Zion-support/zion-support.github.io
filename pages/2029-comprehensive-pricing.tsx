import React, {_useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_CheckCircle, _Star, _Zap, _Shield, _Globe, _Cpu, _Brain, _Atom, _Rocket, _Target, _Microscope, _DollarSign, _Phone, _Mail, _MapPin, _ArrowRight, _TrendingUp, _Users, _Briefcase} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import FuturisticAnimatedBackground2029 from '../components/ui/FuturisticAnimatedBackground2029';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

export default function ComprehensivePricing2029() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [billingCycle, _setBillingCycle] = useState('monthly');

  const _allServices = [
    ...aiAutonomousEcosystemServices2029, _...emergingTechBreakthroughServices2029, _...practicalBusinessSolutionServices2029
  ];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: Briefcase, _count: allServices.length},
    {_id: 'ai-autonomous', _name: 'AI Autonomous', _icon: Brain, _count: aiAutonomousEcosystemServices2029.length},
    {_id: 'emerging-tech', _name: 'Emerging Tech', _icon: Atom, _count: emergingTechBreakthroughServices2029.length},
    {_id: 'business-solutions', _name: 'Business Solutions', _icon: Target, _count: practicalBusinessSolutionServices2029.length}
  ];

  const _filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {_if (selectedCategory === 'ai-autonomous') {
          return service.category.some(cat => cat.includes('AI') && cat.includes('Autonomous'));} else if (selectedCategory === 'emerging-tech') {_return service.category.some(cat => cat.includes('Quantum') || cat.includes('Biotech') || cat.includes('Space'));} else if (selectedCategory === 'business-solutions') {_return service.category.some(cat => cat.includes('Business') || cat.includes('Marketing') || cat.includes('Education'));}
        return true;
      });

  const _getPrice = (_price: string) => {_const _numericPrice = parseInt(price.replace(/[^0-9]/g, _''));
    return billingCycle === 'monthly' ? numericPrice : Math.round(numericPrice * 0.8);};

  const _getBillingText = (_price: string) => {_const _numericPrice = parseInt(price.replace(/[^0-9]/g, _''));
    if (billingCycle === 'monthly') {
      return `$${numericPrice.toLocaleString()}/month`;
    } else {_return `$${Math.round(numericPrice * 0.8).toLocaleString()}/month (billed annually)`;
    }
  };

  return (_<div className="min-h-screen bg-black text-white relative">
      <FuturisticAnimatedBackground2029 />
      
      <Head>
        <title>2029 Comprehensive Pricing - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2029 pricing for AI autonomous ecosystems, _emerging tech breakthroughs, _and practical business solutions. Transparent pricing with flexible billing options." />
        <meta name="keywords" content="2029 pricing, _AI services pricing, _quantum technology pricing, _business solutions pricing, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-comprehensive-pricing" />
      </Head>

      <UltraFuturisticNavigation2029 />

      {_/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              2029 Comprehensive Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary 2029 services. Choose the perfect plan 
              for your business transformation journey.
            </p>

            {_/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-gray-400">Monthly</span>
              <button
                onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={_`relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 ${
                  billingCycle === 'annual' ? 'bg-purple-600' : ''}`}
              >
                <div
                  className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'}`}
                />
              </button>
              <span className="text-gray-400">Annual (20% off)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map(_(category) => (_<motion.button
                key={category.id}
                onClick={_() => setSelectedCategory(category.id)}
                className={_`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'}`}
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <category.icon className="w-5 h-5" />
                <span>{_category.name}</span>
                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {_category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {_/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {_filteredServices.length} cutting-edge services available to transform your business. 
              Each service includes comprehensive features, support, and implementation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.1}}
                viewport={_{ once: true}} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-500 h-full">
                  {_/* Service Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{_service.description}</p>
                  </div>

                  {_/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {_getBillingText(service.price)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {_billingCycle === 'annual' && (
                        <span className="text-green-400">Save 20% with annual billing</span>
                      )}
                    </div>
                  </div>

                  {_/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {_service.category.slice(0, _3).map(_(cat, _catIndex) => (
                      <span
                        key={catIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600">
                        {_cat}
                      </span>
                    ))}
                  </div>

                  {_/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {_service.features.slice(0, _4).map(_(feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{_feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {_service.benefits.slice(0, _2).map(_(benefit, _benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{_benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Market Size</div>
                      <div className="text-sm font-semibold text-blue-400">{_service.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">ROI</div>
                      <div className="text-sm font-semibold text-green-400">{_service.roi}</div>
                    </div>
                  </div>

                  {_/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={_`/services/${service.id}`} className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm">
                      Learn More
                    </Link>
                    <Link
                      href="/contact" className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm">
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Enterprise Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Need a custom solution or enterprise package? We offer tailored solutions 
              for large organizations with specific requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
                <p className="text-gray-300 mb-6">
                  Tailored solutions built specifically for your business needs and requirements.
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                <Link
                  href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-6">
                  Advanced security features and compliance for enterprise environments.
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                <Link
                  href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Deployment</h3>
                <p className="text-gray-300 mb-6">
                  Multi-region deployment and global support for international organizations.
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-4">Custom Pricing</div>
                <Link
                  href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a personalized quote 
              for our revolutionary 2029 services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>{_contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>{_contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPin className="w-6 h-6 text-green-400" />
                <span>{_contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <Link
                  href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <Link
                  href="/2029-innovative-services-showcase" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg">
                  View All Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2029 />
    </div>
  );
}