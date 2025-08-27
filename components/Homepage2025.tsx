import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star,
  Brain, Atom, Shield, Zap
} from 'lucide-react';
import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch';

interface Homepage2025Props { showInternalNav?: boolean }

const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices
  ];

  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);

  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <UltraFuturisticBackground2035>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
              <span className="text-white font-bold text-xl">ZionTech Group</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

              <Suspense fallback={
                <div className="h-80 bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'process-automation',
                    name: 'Process Automation',
                    tagline: 'Intelligent automation solutions',
                    description: 'Intelligent automation that streamlines operations, reduces costs, and enhances productivity across your organization',
                    price: '$799',
                    period: 'month',
                    features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics', 'Process Mining'],
                    popular: true,
                    category: 'Automation',
                    icon: '⚡'
                  }}
                  variant="automation"
                />
              </Suspense>

              <Suspense fallback={
                <div className="h-80 bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              }>
                <UltraFuturisticServiceCard2026
                  service={{
                    id: 'quantum-security',
                    name: 'Quantum Security',
                    tagline: 'Future-proof security solutions',
                    description: 'Quantum-secure infrastructure and post-quantum cryptography to protect against future quantum threats',
                    price: '$2999',
                    period: 'month',
                    features: ['Post-Quantum Crypto', 'Quantum Key Distribution', 'Zero Trust', 'Compliance'],
                    popular: true,
                    category: 'Security',
                    icon: '🔐'
                  }}
                  variant="it"
                />
              </Suspense>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/comprehensive-2036-services-showcase">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    2036 Services Showcase
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Revolutionary 2025 Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From AI-powered autonomous systems to quantum computing solutions, we're building the future today
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI Content Autonomy", description: "Fully autonomous content creation and management", icon: Brain, color: "from-purple-500 to-pink-500", link: "/innovative-2025-services-showcase" },
                { title: "Quantum Cloud Hybrid", description: "Seamless quantum-classical computing integration", icon: Cpu, color: "from-cyan-500 to-blue-500", link: "/innovative-2025-services-showcase" },
                { title: "Cyber Immune Security", description: "Self-defending systems that adapt to threats", icon: Shield, color: "from-red-500 to-orange-500", link: "/innovative-2025-services-showcase" },
                { title: "Edge Intelligence", description: "Distributed AI processing at the edge", icon: Cloud, color: "from-emerald-500 to-teal-500", link: "/innovative-2025-services-showcase" },
                { title: "AI Research Scout", description: "Intelligent research automation and discovery", icon: BarChart3, color: "from-indigo-500 to-purple-500", link: "/innovative-2025-services-showcase" },
                { title: "Autonomous DevOps", description: "Self-healing infrastructure with zero downtime", icon: Lock, color: "from-yellow-500 to-orange-500", link: "/innovative-2025-services-showcase" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => window.location.href = service.href}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>
                      <service.icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <a href={service.link} className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground2035>
  );
};

export default Homepage2025;