import React from 'react';
import Head from 'next/head';
import { 
  Brain, Atom,
  ArrowRight,
  Building, Cpu, Phone, Mail, MapPin
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2028 from '../components/ui/UltraFuturisticBackground2028';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import Revolutionary2027ServicesShowcase from '../components/sections/Revolutionary2027ServicesShowcase';
import Revolutionary2027Hero from '../components/sections/Revolutionary2027Hero';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2027 from '../components/sections/UltraFuturisticHero2027';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeMicroSaasServicesV3 } from '../data/innovative-micro-saas-v3';
import { innovativeAIServices } from '../data/innovative-ai-services';
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
import { innovative2026Services } from '../data/innovative-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services } from '../data/enterprise-it-2026-services';
import { innovative2026MicroSaasServices } from '../data/innovative-2026-micro-saas';
import { emergingTech2026Services as emergingTech2026ServicesNew } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services as enterpriseIT2026ServicesNew } from '../data/enterprise-it-2026-services';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { nextGenAI2026Services } from '../data/next-gen-ai-2026-services';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas-services';
import { revolutionary2026ITServices } from '../data/revolutionary-2026-it-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';
import { revolutionary2027Services } from '../data/revolutionary-2027-services';
import { emergingTech2027Services } from '../data/emerging-tech-2027-services';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

// Import our new futuristic components
import UltraFuturisticNeonBackground from '../components/ui/UltraFuturisticNeonBackground';
import UltraFuturisticNavigation2026 from '../components/layout/UltraFuturisticNavigation2026';
import UltraFuturisticFooter2026 from '../components/layout/UltraFuturisticFooter2026';

// Import our new enhanced components
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor';
import EnhancedAccessibilityEnhancer from '../components/EnhancedAccessibilityEnhancer';
import EnhancedSEO from '../components/EnhancedSEO';

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠 Revolutionary Neural Quantum Brain Interface',
      description: 'World\'s first direct neural interface with quantum AI for cognitive enhancement. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $25,999/month',
      features: ['Direct neural signal processing', 'Quantum AI cognitive enhancement', 'Real-time memory augmentation', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$2B BCI market, 500% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 60% vs. competitors with quantum AI integration',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Quantum Internet Security Platform',
      description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution and post-quantum cryptography. First-to-market quantum internet security.',
      price: 'Starting at $12,999/month',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum entanglement security', 'Real-time threat detection', 'Multi-node quantum network', 'Government compliance (FIPS 140-3)', 'Quantum network monitoring', 'API for enterprise integration', '24/7 quantum security operations', 'Unhackable communication channels'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$150B cybersecurity market, quantum segment growing 400% annually',
      competitors: 'Traditional cybersecurity (Palo Alto, CrowdStrike)',
      savings: 'First-to-market quantum internet security with no direct competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏢 Enterprise IT Infrastructure Management',
      description: 'Complete enterprise IT infrastructure with 99.99% uptime guarantee. Modern technology stack with AI operations and competitive pricing.',
      price: 'Starting at $25,999/month',
      features: ['Network infrastructure management', 'Server and storage management', 'Security monitoring and management', '24/7 infrastructure monitoring', 'Performance optimization', 'Disaster recovery planning', 'Compliance management', 'IT asset management', 'Help desk support', 'Strategic IT consulting'],
      link: 'https://ziontechgroup.com/enterprise-it-infrastructure',
      color: 'from-gray-600 to-blue-700',
      marketData: '$1.2T IT services market, 8% annual growth',
      competitors: 'IBM Global Services ($100K+), Accenture ($150K+), Deloitte ($200K+)',
      savings: 'Save 75% vs. traditional consulting with modern technology stack',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '☁️ Cloud Migration & Optimization Service',
      description: 'Seamless cloud migration with 50% cost reduction guarantee. Fixed pricing vs. hourly consulting rates.',
      price: 'Starting at $15,999/month',
      features: ['Cloud migration planning', 'Workload assessment', 'Cost optimization', 'Performance optimization', 'Security migration', 'Data migration', 'Application modernization', 'Cloud governance', 'Training and support', 'Post-migration optimization'],
      link: 'https://ziontechgroup.com/cloud-migration-optimization',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$400B cloud services market, 20% annual growth',
      competitors: 'AWS Professional Services ($200/hour), Microsoft Consulting ($250/hour), Google Cloud ($180/hour)',
      savings: 'Fixed pricing vs. hourly rates, guaranteed 50% cost reduction',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚗 AI-Powered Autonomous Vehicles Platform',
      description: 'Complete autonomous vehicle AI platform with advanced computer vision, sensor fusion, and safety systems. Achieve Level 4 autonomy.',
      price: 'Starting at $55,999/month',
      features: ['Advanced computer vision', 'Sensor fusion algorithms', 'Safety systems integration', 'Real-time decision making', 'Path planning optimization', 'Traffic prediction', 'Weather adaptation', 'Fleet management', 'Performance analytics', '24/7 AI monitoring'],
      link: 'https://ziontechgroup.com/ai-powered-autonomous-vehicles',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$100B autonomous vehicle market, 30% annual growth',
      competitors: 'Waymo ($100M+ setup), Tesla ($50M+ setup), Cruise ($75M+ setup)',
      savings: 'Save 90%+ vs. building from scratch with complete AI platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 AI-Powered Biotech Drug Discovery',
      description: 'AI-powered biotech drug discovery platform with molecular modeling, protein folding, and clinical trial optimization. Achieve 10x faster drug development.',
      price: 'Starting at $85,999/month',
      features: ['AI molecular modeling', 'Protein folding prediction', 'Drug target identification', 'Clinical trial optimization', 'Toxicity prediction', 'Drug repurposing', 'Biomarker discovery', 'Real-time analytics', 'Research collaboration tools', '24/7 AI research support'],
      link: 'https://ziontechgroup.com/ai-powered-biotech-drug-discovery',
      color: 'from-green-600 to-emerald-700',
      marketData: '$50B AI drug discovery market, 40% annual growth',
      competitors: 'Insilico Medicine ($500K+ setup), Atomwise ($300K+ setup), BenevolentAI ($1M+ setup)',
      savings: 'Save 80% vs. competitors with subscription model and advanced AI',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔐 Quantum Internet Security Platform',
      description: 'Next-generation quantum-secured internet infrastructure with unbreakable encryption and quantum key distribution for enterprise networks.',
      price: 'Starting at $8,999/month',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum-resistant VPN tunnels', 'Real-time threat detection', 'Multi-node quantum network management', 'Quantum-safe API endpoints', 'Advanced intrusion prevention', 'NIST compliance', 'Global quantum network nodes', '24/7 quantum security monitoring'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$200B cybersecurity market, 500% annual growth',
      competitors: 'Traditional cybersecurity vendors, Government quantum initiatives',
      savings: 'Quantum-safe protection that traditional solutions cannot provide',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧠 Neural Quantum Cyberpunk Platform',
      description: 'Groundbreaking fusion of neural networks with quantum computing for cyberpunk applications including neural implants and cybernetic augmentation.',
      price: 'Starting at $6,999/month',
      features: ['Neural implant management', 'Quantum-enhanced prosthetics control', 'Cyberpunk augmentation systems', 'Neural-quantum interface', 'Real-time neural data processing', 'Quantum neural network training', 'Cybernetic enhancement monitoring', 'Neural security protocols', 'Quantum neural encryption', 'Advanced augmentation analytics'],
      link: 'https://ziontechgroup.com/neural-quantum-cyberpunk-platform',
      color: 'from-purple-600 to-pink-700',
      marketData: '$35B neural interface market, 700% annual growth',
      competitors: 'Academic research, Medical device companies, Gaming companies',
      savings: 'First-to-market neural-quantum cyberpunk platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Quantum Space Logistics Platform',
      description: 'Revolutionary quantum-powered space logistics platform for managing interplanetary supply chains and orbital resource distribution.',
      price: 'Starting at $12,999/month',
      features: ['Interplanetary supply chain management', 'Orbital resource distribution', 'Quantum route optimization', 'Space manufacturing coordination', 'Real-time space traffic management', 'Quantum logistics algorithms', 'Space resource tracking', 'Interplanetary communication', 'Space manufacturing automation', 'Quantum logistics analytics'],
      link: 'https://ziontechgroup.com/quantum-space-logistics-platform',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$600B space economy, 1000% annual growth',
      competitors: 'Traditional logistics companies, Space agencies, Academic research',
      savings: 'Complete mission management platform for commercial space',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
    if (typeof service.pricing === 'object' && 'starter' in service.pricing) {
      return service.pricing.starter;
    }
    if (typeof service.pricing === 'object' && 'monthly' in service.pricing) {
      return `$${service.pricing.monthly}/month`;
    }
  }
  
  return 'Contact Us';
};

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services for showcase
  const allServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...quantumAIServices2025,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...emergingTechServices2025,
    ...innovativeMicroSaasServices2029V2,
    ...emergingTechServices2029V2,
    ...enterpriseITServices2029V2,
    ...spaceMetaverseServices2029,
    ...researchDevelopmentServices2029,
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
    ...emergingTech2026ServicesNew,
    ...enterpriseIT2026ServicesNew,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...ultimate2026Services,
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2026ITServices,
    ...revolutionary2026AIServices,
    ...revolutionary2027Services,
    ...emergingTech2027Services,
    ...revolutionary2027AIServices,
    ...revolutionary2027ITServices,
    ...revolutionary2027MicroSaasServices,
    ...futuristic2028Services,
    ...emergingTech2028Services
  ];

  // Get featured services (most popular and innovative)
  const featuredServices = allServices
    .filter(service => service.popular)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);

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

      <UltraFuturisticBackground2028>
        {/* Ultra Advanced Navigation */}
        <UltraFuturisticNavigation2028 />

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
                Pioneering the future of autonomous business operations with cutting-edge AI, 
                quantum computing, and emerging technologies.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions that drive innovation and transform businesses
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
              </UltraFuturisticBackground2028>
    </>
  );
}
