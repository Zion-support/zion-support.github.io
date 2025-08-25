import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Mail, Phone, MapPin, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award, Rocket
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2034 from '../components/layout/UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import Revolutionary2027ServicesShowcase from '../components/sections/Revolutionary2027ServicesShowcase';
import Revolutionary2027Hero from '../components/sections/Revolutionary2027Hero';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2033 from '../components/sections/UltraFuturisticHero2033';
import UltraFuturisticServiceShowcase2032 from '../components/sections/UltraFuturisticServiceShowcase2032';
import UltraFuturisticServiceShowcase2033 from '../components/sections/UltraFuturisticServiceShowcase2033';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeMicroSaasServicesV3 } from '../data/innovative-micro-saas-v3';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { quantumAIServices2025 } from '../data/quantum-ai-services-2025';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { emergingTechServices2025 } from '../data/emerging-tech-services-2025';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { realOperationalServices } from '../data/real-operational-services';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { innovative2025Services } from '../data/innovative-2025-services';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import { innovative2025MicroSaasServices } from '../data/innovative-2025-micro-saas';
import { emergingTech2025Services as newEmergingTech2025Services } from '../data/emerging-tech-2025-services';
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services';
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure';
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas';
import { innovative2026MicroSaasServices } from '../data/innovative-2026-micro-saas-services';
import { innovative2026ITServices } from '../data/innovative-2026-it-services';
import { innovative2026AIServices } from '../data/innovative-2026-ai-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';
import { revolutionary2026ITInfrastructureServices } from '../data/revolutionary-2026-it-infrastructure';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Services & Solutions', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...innovativeMicroSaasServicesV3,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...quantumAIServices2025,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...emergingTechServices2025,
    ...comprehensiveITSolutions,
    ...realMarketServices,
    ...serviceExpansions2025,
    ...realOperationalServices,
    ...newOperationalServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTechServices2025,
    ...revolutionary2025Services,
    ...nextGenInnovations2025,
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services,
    ...innovative2026MicroSaasServices,
    ...innovative2026ITServices,
    ...innovative2026AIServices,
    ...revolutionary2026AIServices,
    ...revolutionary2026ITInfrastructureServices,
    ...revolutionary2026MicroSaasServices
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + revolutionaryAI2025Services.length + revolutionary2025MicroSaasServices.filter(s => s.category.includes('AI')).length + innovative2026AIServices.length + revolutionary2026AIServices.length,
    emergingTech: emergingTechnologyServices.length + emergingTech2025Services.length + newEmergingTech2025Services.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length + revolutionaryITInfrastructure2025Services.length + innovative2026ITServices.length + revolutionary2026ITInfrastructureServices.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length + innovative2025MicroSaasServices.length + revolutionary2025MicroSaasServices.length + innovative2026MicroSaasServices.length + revolutionary2026MicroSaasServices.length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length + revolutionaryAI2025Services.length + revolutionaryITInfrastructure2025Services.length + revolutionary2025MicroSaasServices.length + revolutionary2026AIServices.length + revolutionary2026ITInfrastructureServices.length + revolutionary2026MicroSaasServices.length,
    quantumServices: quantumSpaceServices.length + revolutionaryAI2025Services.filter(s => s.category.includes('Quantum')).length + revolutionaryITInfrastructure2025Services.filter(s => s.category.includes('Quantum')).length + revolutionary2025MicroSaasServices.filter(s => s.category.includes('Quantum')).length + revolutionary2026AIServices.filter(s => s.category.includes('Quantum')).length + revolutionary2026ITInfrastructureServices.filter(s => s.category.includes('Quantum')).length,
    blockchainServices: revolutionaryAI2025Services.filter(s => s.category.includes('Blockchain')).length + revolutionaryITInfrastructure2025Services.filter(s => s.category.includes('Blockchain')).length + revolutionary2025MicroSaasServices.filter(s => s.category.includes('Blockchain')).length + revolutionary2026AIServices.filter(s => s.category.includes('Blockchain')).length + revolutionary2026ITInfrastructureServices.filter(s => s.category.includes('Blockchain')).length,
    spaceTech: revolutionaryAI2025Services.filter(s => s.category.includes('Space')).length + revolutionaryITInfrastructure2025Services.filter(s => s.category.includes('Space')).length + revolutionary2025MicroSaasServices.filter(s => s.category.includes('Space')).length + revolutionary2026AIServices.filter(s => s.category.includes('Space')).length + revolutionary2026ITInfrastructureServices.filter(s => s.category.includes('Space')).length
  };

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & IT Solutions</title>
        <meta name="description" content="Zion Tech Group offers cutting-edge AI services, quantum computing solutions, and comprehensive IT services. Transform your business with our innovative technology solutions." />
        <meta name="keywords" content="AI services, quantum computing, IT solutions, cybersecurity, cloud migration, autonomous vehicles, biotech AI, metaverse creation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and IT solutions. 500+ revolutionary services with 99.99% uptime guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and IT solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UltraFuturisticBackground2030>
        {/* Ultra Advanced Navigation */}
        <UltraFuturisticNavigation2034 />

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto font-medium"
              >
                Revolutionary <span className="text-cyan-400 font-bold">AI</span>, <span className="text-purple-400 font-bold">Quantum Computing</span> & <span className="text-pink-400 font-bold">IT Services</span>
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                <span className="text-cyan-300 font-semibold">{serviceStats.totalServices}+</span> revolutionary services delivering <span className="text-green-400 font-bold">1000% ROI</span>. From AI consciousness simulation to quantum space mining, we're building the future of technology.
              </motion.p>
              
              {/* Service Statistics Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-black/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`${stat.color} text-2xl lg:text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm lg:text-base leading-tight">
                  {stat.label}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Key Capabilities:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Services */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Featured Services:</div>
                  <div className="space-y-2">
                    {category.services.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{service.name}</span>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={category.href}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium group-hover:scale-105"
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Services That Transform Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum AI brain-computer interfaces to autonomous vehicles, our cutting-edge solutions 
              deliver unprecedented ROI and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                  <div className="p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.marketData}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 5).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 p-4 bg-black/20 rounded-lg">
                      <div className="text-sm text-gray-400 mb-2">Competitive Advantage:</div>
                      <div className="text-white font-semibold">{service.savings}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="lg"
                        className="flex-1 group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="lg"
                        className="flex-1"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/innovative-micro-saas-showcase"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              <span className="text-lg font-semibold">Explore All Services</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard service={service} />
              </motion.div>
            ))}
          </div>

      {/* Latest Innovative Services Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Latest 2025 Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our newest cutting-edge services that are revolutionizing industries worldwide
            </p>
            <Link
              href="/2025-innovative-new-services-showcase"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              View All New Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...innovativeNewServices2025.slice(0, 3), ...emergingTechBreakthroughs2025.slice(0, 3)].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                  </div>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Service Showcase - 2026 Services */}
        <EnhancedServiceShowcase 
          services={[...innovative2026MicroSaasServices, ...innovative2026ITServices, ...innovative2026AIServices]}
          title="Revolutionary 2026 Services"
          subtitle="Cutting-edge AI, IT, and Micro SaaS solutions for the future"
          showPricing={true}
          showFeatures={true}
          showStats={true}
          maxServices={12}
        />

        {/* Enhanced Service Showcase - All Services */}
        <EnhancedServiceShowcase 
          services={allServices}
          title="Complete Service Portfolio"
          subtitle="1000+ revolutionary services across all technology domains"
          showPricing={true}
          showFeatures={true}
          showStats={true}
          maxServices={18}
        />

        {/* Revolutionary 2026 Services Showcase */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
                Revolutionary 2026 Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future with our groundbreaking 2026 services that push the boundaries of what's possible
              </p>
            </motion.div>

            {/* Revolutionary AI Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center">
                🧠 Revolutionary AI Services 2026
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {revolutionary2026AIServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-cyan-400 font-semibold">{service.category}</span>
                        <Link href={service.link} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Revolutionary IT Infrastructure Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8 text-center">
                ⚛️ Revolutionary IT Infrastructure 2026
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {revolutionary2026ITInfrastructureServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                        <Link href={service.link} className="text-purple-400 hover:text-purple-300 transition-colors">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Revolutionary Micro SaaS Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-pink-400 mb-8 text-center">
                🚀 Revolutionary Micro SaaS 2026
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {revolutionary2026MicroSaasServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-pink-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.tagline}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-pink-400 font-semibold">{service.category}</span>
                        <Link href={service.link} className="text-pink-400 hover:text-pink-300 transition-colors">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Offers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Featured Offers</h2>
              <p className="text-gray-300 mt-2">New professional services with clear pricing and fast onboarding</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredOffers.map((svc) => (
                <div key={svc.id} className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
                  <div className="text-2xl font-semibold text-white mb-2">{svc.name}</div>
                  <div className="text-gray-300 mb-3">{svc.tagline}</div>
                  <div className="text-cyan-300 font-bold mb-4">{svc.price}{svc.period}</div>
                  <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
                    {svc.features.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button href={svc.link || '/contact'} variant="primary">Learn More</Button>
                    <Button href="/contact" variant="secondary">Talk to Expert</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              View All 500+ Services
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cutting-Edge Services CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-indigo-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text-rainbow">Cutting-Edge Services 2025</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary new services featuring quantum computing, AI breakthroughs, and next-generation infrastructure. 
              Be among the first to experience the future of technology.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-3xl p-8 border border-violet-500/30">
                <Brain className="w-16 h-16 text-violet-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-4">Revolutionary AI services with consciousness and quantum computing integration</p>
                <div className="text-sm text-violet-300">
                  {cuttingEdgeAIServices2025.length} cutting-edge services
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/30">
                <Cloud className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">IT Infrastructure</h3>
                <p className="text-gray-300 mb-4">Next-generation infrastructure with quantum security and edge computing</p>
                <div className="text-sm text-blue-300">
                  {cuttingEdgeITInfrastructure2025.length} revolutionary solutions
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/20 to-emerald-600/20 rounded-3xl p-8 border border-teal-500/30">
                <Rocket className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Micro SAAS</h3>
                <p className="text-gray-300 mb-4">Innovative business solutions powered by AI and automation</p>
                <div className="text-sm text-teal-300">
                  {cuttingEdgeMicroSaas2025.length} intelligent platforms
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/cutting-edge-services-2025" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 w-5 h-5" />
                Explore Cutting-Edge Services
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies achieving breakthrough results with our revolutionary services
            </p>
            
            <div className="mb-8">
              <ContactInfo className="text-white" showSocial={false} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Your Transformation
                <Rocket className="ml-2 w-6 h-6" />
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                View Pricing
                <DollarSign className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceShowcase />
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PerformanceOptimizer />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Revolutionary AI, Quantum Computing & IT Services
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/ai-services" className="hover:text-white transition-colors">AI Services</a></li>
                <li><a href="/quantum-services" className="hover:text-white transition-colors">Quantum Computing</a></li>
                <li><a href="/it-services" className="hover:text-white transition-colors">IT Services</a></li>
                <li><a href="/micro-saas" className="hover:text-white transition-colors">Micro SaaS</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>{contactInfo.mobile}</p>
                <p>{contactInfo.email}</p>
                <p className="text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
              <UltraFuturisticFooter2034 />
    </UltraFuturisticBackground2034 />
  </>
  );
}
