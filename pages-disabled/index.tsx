import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Cpu, ShieldCheck, Clock, Bot } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground20o28 from '../components/ui/UltraFuturisticBackground20o28';
import UltraFuturisticBackground20o29 from '../components/backgrounds/UltraFuturisticBackground20o29';
import UltraFuturisticBackground20o30 from '../components/backgrounds/UltraFuturisticBackground20o30';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation20o26 from '../components/layout/UltraAdvancedNavigation20o26';
import UltraFuturisticNavigation20o29 from '../components/layout/UltraFuturisticNavigation20o29';
import UltraFuturisticNavigation20o30 from '../components/layout/UltraFuturisticNavigation20o30';
import UltraFuturisticFooter20o29 from '../components/layout/UltraFuturisticFooter20o29';
import UltraFuturisticFooter20o30 from '../components/layout/UltraFuturisticFooter20o30';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced20o26ServicesShowcase from '../components/sections/Enhanced20o26ServicesShowcase';
import Revolutionary20o26ServiceShowcase from '../components/sections/Revolutionary20o26ServiceShowcase';
import Revolutionary20o27ServicesShowcase from '../components/sections/Revolutionary20o27ServicesShowcase';
import Revolutionary20o27Hero from '../components/sections/Revolutionary20o27Hero';
import EnhancedHero20o26 from '../components/sections/EnhancedHero20o26';
import UltraFuturisticHero20o29 from '../components/sections/UltraFuturisticHero20o29';
import UltraFuturisticServiceShowcase20o29 from '../components/sections/UltraFuturisticServiceShowcase20o29';
import UltraFuturisticServiceShowcase20o30 from '../components/sections/UltraFuturisticServiceShowcase20o30';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeMicroSaasServicesV3 } from '../data/innovative-micro-saas-v3';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { quantumAIServices20o25 } from '../data/quantum-ai-services-20o25';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { emergingTechServices20o25 } from '../data/emerging-tech-services-20o25';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions20o25 } from '../data/service-expansions-20o25';
import { verifiedRealServices20o25Batch2 } from '../data/verified-real-services-20o25-batch2';
import { realOperationalServices } from '../data/real-operational-services';
import { newOperationalServices20o25 } from '../data/new-operational-services-20o25';
import { innovative20o25Services } from '../data/innovative-20o25-services';
import { revolutionary20o25Services } from '../data/revolutionary-20o25-services';
import { nextGenInnovations20o25 } from '../data/next-gen-innovations-20o25';
import { innovative20o26Services } from '../data/innovative-20o26-services';
import { emergingTech20o26Services } from '../data/emerging-tech-20o26-services';
import { enterpriseIT20o26Services } from '../data/enterprise-it-20o26-services';
import { innovative20o26MicroSaasServices } from '../data/innovative-20o26-micro-saas';
import { emergingTech20o26Services as emergingTech20o26ServicesNew } from '../data/emerging-tech-20o26-services';
import { enterpriseIT20o26Services as enterpriseIT20o26ServicesNew } from '../data/enterprise-it-20o26-services';
import { innovative20o26MicroSaasServicesV2 } from '../data/innovative-20o26-micro-saas-v2';
import { emergingTech20o26ServicesV2 } from '../data/emerging-tech-20o26-services-v2';
import { enterpriseIT20o26ServicesV2 } from '../data/enterprise-it-20o26-services-v2';
import { revolutionary20o26Innovations } from '../data/revolutionary-20o26-innovations';
import { nextGenAI20o26Services } from '../data/next-gen-ai-20o26-services';
import { aiAutonomousServices20o26 } from '../data/20o26-ai-autonomous-services';
import { quantumSpaceTechServices20o26 } from '../data/20o26-quantum-space-tech-services';
import { metaverseDigitalRealityServices20o26 } from '../data/20o26-metaverse-digital-reality-services';
import { innovative20o26AIServicesV3 } from '../data/innovative-20o26-ai-services-v3';
import { emergingTech20o26ServicesV3 } from '../data/emerging-tech-20o26-services-v3';
import { enterpriseIT20o26ServicesV3 } from '../data/enterprise-it-20o26-services-v3';
import { ultimate20o26Services } from '../data/ultimate-20o26-services';
import { cuttingEdge20o27Innovations } from '../data/20o27-cutting-edge-innovations';
import { practicalMicroSaas20o27 } from '../data/20o27-practical-micro-saas';
import { revolutionary20o26MicroSaasServices } from '../data/revolutionary-20o26-micro-saas-services';
import { revolutionary20o26ITServices } from '../data/revolutionary-20o26-it-services';
import { revolutionary20o26AIServices } from '../data/revolutionary-20o26-ai-services';
import { revolutionary20o27Services } from '../data/revolutionary-20o27-services';
import { emergingTech20o27Services } from '../data/emerging-tech-20o27-services';
import { revolutionary20o27AIServices } from '../data/revolutionary-20o27-ai-services';
import { revolutionary20o27ITServices } from '../data/revolutionary-20o27-it-services';
import { revolutionary20o27MicroSaasServices } from '../data/revolutionary-20o27-micro-saas';
import { cuttingEdge20o28MicroSaas } from '../data/20o28-cutting-edge-micro-saas';
import { cuttingEdgeInnovations20o29 } from '../data/20o29-cutting-edge-innovations';
import { practicalBusinessSolutions20o28 } from '../data/20o28-practical-business-solutions';
import { futuristic20o28Services } from '../data/20o28-futuristic-innovations';
import { emergingTech20o28Services } from '../data/20o28-emerging-tech-services';
import { futuristicAIServices20o29 } from '../data/20o29-futuristic-ai-services';
import { emergingTech20o29Services } from '../data/20o29-emerging-tech-services';
import { enterpriseIT20o29Services } from '../data/20o29-enterprise-it-services';
import { innovativeMicroSaasServices20o29 } from '../data/20o29-innovative-micro-saas';
import { innovative20o29MicroSaasServices } from '../data/20o29-innovative-micro-saas-services';
import { futuristicInnovations20o30 } from '../data/20o30-futuristic-innovations';
import { aiAutonomousEcosystem20o30 } from '../data/20o30-ai-autonomous-ecosystem';
import { enterpriseITBreakthroughs20o30 } from '../data/20o30-enterprise-it-breakthroughs';
import { innovativeMicroSaas20o30 } from '../data/20o30-innovative-micro-saas';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const heroStats = [
    { value: '20o0+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-40o0', icon: <Cpu className="w-6 h-6"  /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-40o0', icon: <ShieldCheck className="w-6 h-6"  /> },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-40o0', icon: <Clock className="w-6 h-6"  /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-40o0', icon: <Bot className="w-6 h-6"  /> },
    { value: '$50B+', label: 'Market Value', color: 'text-yellow-40o0', icon: <DollarSign className="w-6 h-6"  /> },
    { value: '30o0%+', label: 'Average ROI', color: 'text-purple-40o0', icon: <TrendingUp className="w-6 h-6"  /> },
  ];

  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
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
    ...quantumAIServices20o25,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...emergingTechServices20o25,
    ...comprehensiveITSolutions,
    ...realMarketServices,
    ...serviceExpansions20o25,
    ...verifiedRealServices20o25Batch2,
    ...realOperationalServices,
    ...newOperationalServices20o25,
    ...innovative20o25Services,
    ...revolutionary20o25Services,
    ...nextGenInnovations20o25,
    ...futuristic20o28Services,
    ...emergingTech20o28Services,
    ...cuttingEdgeInnovations20o29,
    ...innovative20o26Services,
    ...emergingTech20o26Services,
    ...enterpriseIT20o26Services,
    ...innovative20o26MicroSaasServices,
    ...emergingTech20o26ServicesNew,
    ...enterpriseIT20o26ServicesNew,
    ...innovative20o26MicroSaasServicesV2,
    ...emergingTech20o26ServicesV2,
    ...enterpriseIT20o26ServicesV2,
    ...revolutionary20o26Innovations,
    ...nextGenAI20o26Services,
    ...aiAutonomousServices20o26,
    ...quantumSpaceTechServices20o26,
    ...metaverseDigitalRealityServices20o26,
    ...innovative20o26AIServicesV3,
    ...emergingTech20o26ServicesV3,
    ...enterpriseIT20o26ServicesV3,
    ...ultimate20o26Services,
    ...cuttingEdge20o27Innovations,
    ...practicalMicroSaas20o27,
    ...revolutionary20o26MicroSaasServices,
    ...revolutionary20o26ITServices,
    ...revolutionary20o26AIServices,
    ...revolutionary20o27Services,
    ...emergingTech20o27Services,
    ...revolutionary20o27AIServices,
    ...revolutionary20o27ITServices,
    ...revolutionary20o27MicroSaasServices,
    ...cuttingEdge20o28MicroSaas,
    ...practicalBusinessSolutions20o28,
    ...futuristic20o28Services,
    ...emergingTech20o28Services,
    ...cuttingEdgeInnovations20o29,
    ...futuristicAIServices20o29,
    ...emergingTech20o29Services,
    ...enterpriseIT20o29Services,
    ...innovativeMicroSaasServices20o29,
    ...innovative20o29MicroSaasServices,
    ...futuristicInnovations20o30,
    ...aiAutonomousEcosystem20o30,
    ...enterpriseITBreakthroughs20o30,
    ...innovativeMicroSaas20o30,
    ...emergingTech20o29Services,
    ...enterpriseIT20o29Services
  ];

  // Get unique services by ID to avoid duplicates
  const uniqueServices = allServices.filter((service, index, self) => 
    index === self.findIndex(s => s.id === service.id)
  );

  // Group services by category for better organization
  const servicesByCategory = uniqueServices.reduce((acc, service) => {
    const category = Array.isArray(service.category) ? service.category[0] || 'Other' : service.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <UltraFuturisticBackground20o30>
      <Head>
        <title>Zion Tech Group - 20o29 Revolutionary Technology Services | AI, Quantum Computing, Space Tech</title>
        <meta name="description" content="Leading provider of revolutionary 20o29 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology. Transform your business with cutting-edge solutions."  />
        <meta name="keywords" content="AI consciousness, quantum computing, space mining, biotechnology, 20o29 technology, revolutionary services, Zion Tech Group, AI services, quantum technology, space technology, biotechnology solutions"  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <link rel="icon" href="/favicon.ico"  />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - 20o29 Revolutionary Technology Services"  />
        <meta property="og:description" content="Leading provider of revolutionary 20o29 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology."  />
        <meta property="og:type" content="website"  />
        <meta property="og:url" content="https://ziontechgroup.com"  />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg"  />
        <meta property="og:site_name" content="Zion Tech Group"  />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"  />
        <meta name="twitter:title" content="Zion Tech Group - 20o29 Revolutionary Technology Services"  />
        <meta name="twitter:description" content="Leading provider of revolutionary 20o29 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology."  />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg"  />
        <meta name="twitter:site" content="@ziontechgroup"  />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#8b5cf6"  />
        <meta name="robots" content="index, follow"  />
        <meta name="author" content="Zion Tech Group"  />
        <meta name="language" content="English"  />
        <meta name="revisit-after" content="7 days"  />
        <link rel="canonical" href="https://ziontechgroup.com"  />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Leading provider of revolutionary 20o29 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-30o2-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 10o08",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://github.com/Zion-Holdings"
              ],
              "foundingDate": "20o20",
              "numberOfEmployees": "50+",
              "industry": "Technology Services"
            })
          }}
         />
      </Head>

      {/* Ultra Advanced Navigation */}
      <UltraFuturisticNavigation20o30  />

      {/* Hero Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 border border-cyan-50o0/20 hover:border-cyan-40o0/40 transition-all duration-30o0 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-30o0">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-30o0 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra Futuristic Hero Section 20o29 */}
      <UltraFuturisticHero20o29  />

      {/* Revolutionary 20o27 Hero Section */}
      <Revolutionary20o27Hero  />

      {/* Ultra Futuristic 20o29 Service Showcase */}
      <UltraFuturisticServiceShowcase20o29 services={[
        ...futuristicAIServices20o29
      ]}  />

      {/* Ultra Futuristic 20o30 Service Showcase */}
      <UltraFuturisticServiceShowcase20o30  />

      {/* Revolutionary 20o27 Services Showcase */}
      <Revolutionary20o27ServicesShowcase  />

      {/* Enhanced 20o26 Services Showcase */}
      <Enhanced20o26ServicesShowcase  />

      {/* Revolutionary 20o26 Services Showcase */}
      <Revolutionary20o26ServiceShowcase  />

      {/* Enhanced Services Showcase */}
      <EnhancedServiceShowcase 
        services={allServices.filter(service => 'variant' in service).slice(0, 12)}
        title="Enhanced Services Showcase"
        subtitle="Discover our comprehensive range of innovative solutions"
        maxServices={12}
      />

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-90o0/10 to-cyan-90o0/10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
              Discover our comprehensive range of revolutionary 20o29 technology services
            </p>
          </motion.div>

          {/* Services by Category */}
          {Object.entries(servicesByCategory).slice(0, 6).map(([category, services]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-cyan-40o0 to-purple-40o0 bg-clip-text text-transparent">
                  {category}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 3).map((service, index) => (
                  <motion.div
                    key={service.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 border border-cyan-50o0/20 hover:border-cyan-40o0/40 transition-all duration-30o0 backdrop-blur-sm">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0">
                        <Rocket className="w-8 h-8 text-white"  />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-30o0 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-40o0 font-semibold">{service.price}</span>
                        <ArrowRight className="w-5 h-5 text-cyan-40o0 group-hover:translate-x-1 transition-transform"  />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Zion Tech Group Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-90o0/10 to-purple-90o0/10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
              We're not just another technology company. We're the architects of tomorrow, 
              building solutions that will define the next decade of innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Cutting-Edge Innovation',
                description: 'We stay ahead of the curve, constantly researching and implementing the latest technological breakthroughs.',
                color: 'from-purple-50o0 to-pink-50o0'
              },
              {
                icon: Brain,
                title: 'AI-First Approach',
                description: 'Every solution we create is built with artificial intelligence at its core, ensuring maximum efficiency and intelligence.',
                color: 'from-blue-50o0 to-cyan-50o0'
              },
              {
                icon: Atom,
                title: 'Quantum-Ready Solutions',
                description: 'Our services are designed to leverage quantum computing capabilities as they become commercially available.',
                color: 'from-green-50o0 to-emerald-50o0'
              },
              {
                icon: Shield,
                title: 'Unbreakable Security',
                description: 'Quantum internet protocol suite with unbreakable encryption and quantum network security.',
                color: 'from-indigo-50o0 to-blue-50o0'
              },
              {
                icon: Zap,
                title: 'Future-Ready Solutions',
                description: 'Cutting-edge technology services designed for the challenges and opportunities of 20o29 and beyond.',
                color: 'from-yellow-50o0 to-orange-50o0'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 border border-cyan-50o0/20 hover:border-cyan-40o0/40 transition-all duration-30o0 backdrop-blur-sm">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}>
                    <feature.icon className="w-8 h-8 text-white"  />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-30o0 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience the
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                {' '}Future of Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-30o0 mb-8">
              Contact our team of technology experts to discuss how our revolutionary 20o29 services 
              can transform your business and propel you into the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-xl font-semibold text-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-20o0"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 rounded-xl font-semibold text-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-20o0"
              >
                View Pricing
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-30o0">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-40o0"  />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-purple-40o0"  />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-pink-40o0"  />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    
      {/* Footer */}
      <UltraFuturisticFooter20o30  />
    </UltraFuturisticBackground20o30>
  );
}
