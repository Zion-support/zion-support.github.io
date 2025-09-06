

<<<<<<< HEAD
=======
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
//Import service data window && window.addEventListener ('mousemove', handleMouseMove);
//Import our enhanced components import EnhancedNavigation from './layout / EnhancedNavigation';
import EnhancedServiceCard from './ui / EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui / UltraFuturisticBackground';
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
//Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
//Import service data window.addEventListener ('mousemove', handleMouseMove);
//Combine all revolutionary services const allRevolutionaryServices = [ ...revolutionary2044AdvancedMicroSaas;
...revolutionary2044ITServices;
...revolutionary2044AIServices;
...realEnterpriseMicroSaas2025;
...innovativeITServicesExpansion2025V3;
...innovativeAIServicesExpansion2025V3...innovative2025ITInfrastructureServices;
...innovative2025AIAutonomousServices ];
<<<<<<< HEAD

//Filter services by category //Animation variants const containerVariants = {
  hidden: {


=======


  opacity: 0 

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from 'react';

interface EnhancedHomepageProps {
  className?: string;
}

const EnhancedHomepage: React.FC<EnhancedHomepageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnhancedHomepage</h1>
      <p>This component is under development.</p>
    </div>
  );



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
visible: {
  opacity: 1, transition: {
  duration: 0.8, staggerChildren: 0.1
}
}
}
}
}

import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';

// Import service data;
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';
const EnhancedHomepage: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),;
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  useEffect(() => {;
    setIsVisible(true);

    // Auto-rotate featured services;
    const interval = setInterval(() => {;
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    // Track mouse movement for parallax effects;
    const handleMouseMove = (e: MouseEvent) => {;
      setMousePosition({ x: e && e.clientX, y: e && e.clientY });
    };
    // Show performance monitor after 5 seconds;
    const performanceTimer = setTimeout(() => {;
      setShowPerformanceMonitor(true);
    }, 5000);
    window && window.addEventListener('mousemove', handleMouseMove);
    return () => {;

      clearInterval(interval);
      clearTimeout(performanceTimer);
      window && window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);


  // Combine all revolutionary services;
  const allRevolutionaryServices = [;


    ...revolutionary2044AdvancedMicroSaas;
    ...revolutionary2044ITServices;
    ...revolutionary2044AIServices;
    ...realEnterpriseMicroSaas2025;
    ...innovativeITServicesExpansion2025V3;

        duration: 0.8,
        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.6,
        ease: "ease_out" as const;
      }
    }
  }
;
  const hero_variants = {
    hidden: { opacity: 0, coordinate_y: 50 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 1,
        ease: "ease_out" as const;
      }
    }
  }
;
  const floating_variants = {
    animate: {
      y: [-10, 10, -10];
      transition: {
        duration: 3
        duration: 3,
        ease: "easeInOut" as const
      }
    }
  }
  const handleCategoryChange = (categoryId: string) => {


  // Filter services by category;
  const getFilteredServices = () => {;
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices && allRevolutionaryServices.filter(service => ;
      service && service.category.toLowerCase().includes(selectedCategory && selectedCategory.toLowerCase()) ||;
      (service as any).type?.toLowerCase().includes(selectedCategory && selectedCategory.toLowerCase());
    );
  };
  const categories = [;
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', scheme: 'holographic' as const },;
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', scheme: 'cyber' as const },;
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', scheme: 'quantum' as const },;
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', scheme: 'neon' as const },;
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500', scheme: 'holographic' as const },;
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from-green-500 to-teal-500', scheme: 'cyber' as const }
  ];
  // Get featured services for rotation;
  const featuredServices = allRevolutionaryServices && allRevolutionaryServices.slice(0, 6);
  // Animation variants;
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.8,;
        staggerChildren: 0 && 0.1;
      }
    }
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        ease: "easeOut" as const;
      }
    }
  };
  const heroVariants = {;
    hidden: { opacity: 0, y: 50 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 1,;
        ease: "easeOut" as const;
      }
    }
  };
  const floatingVariants = {;
    animate: {;
      y: [-10, 10, -10];
      transition: {;
        duration: 3,;
        ease: "easeInOut" as const;
      }
    }
  };
  const handleCategoryChange = (categoryId: string) => {;

    setSelectedCategory(categoryId);
    const category = categories && categories.find(cat => cat && cat.id === categoryId);
    if (category) {;
      setColorScheme(category && category.scheme);
    }
  }

<<<<<<< HEAD
=======
  };


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <>;
      <Head>;
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>;
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />;
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />;
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />;
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />;
        <meta property="og:url" content="https://ziontechgroup && ziontechgroup.com" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com" />;
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />;
        <meta name="theme-color" content="#00d4ff" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var && var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />;
        <link rel="dns-prefetch" href="//fonts && fonts.googleapis.com" />;
        <link rel="dns-prefetch" href="//fonts && fonts.gstatic.com" />;
      </Head>;
      {/* Enhanced Navigation */}
      <EnhancedNavigation />;
      <UltraFuturisticBackground variant={colorScheme === 'cyber' ? 'cyberpunk' : colorScheme === 'quantum' ? 'quantum' : colorScheme === 'neon' ? 'neural' : 'holographic'} intensity="high">;
        {/* Hero Section */}
        <motion&& motion.section 

          className="relative min-h-screen flex items-center justify-center px-4 lg: px-8 pt-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible">;
          <div className="relative z-10 text-center max-w-6xl mx-auto">;
            {/* Main Heading */}


            
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness
              Quantum Computing, and Autonomous Solutions
            </motion.p>
<<<<<<< HEAD
=======

            <motion&& motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}>;
              Zion Tech Group;
            </motion && motion.h1>;
            <motion&& motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}>;
              Pioneering the Future of Technology with Revolutionary AI Consciousness,;
              Quantum Computing, and Autonomous Solutions;
            </motion && motion.p>;
=======


=======


            {/* CTA Buttons */}
            <motion&& motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}>;
              <Link href="/services">;
                <motion&& motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"

                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Explore Services;
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;

              <Link href="/quote">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Get Quote;
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;
            </motion && motion.div>;
            {/* Contact Information */}
            <motion&& motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400"
              variants={itemVariants}>;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-cyan-400" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4 text-cyan-400" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-4 h-4 text-cyan-400" />;
                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </motion && motion.div>;
          </div>;


          {/* Floating Elements */}
          <motion&& motion.div
            className="absolute top-20 left-10 text-cyan-400/20"
            variants={floatingVariants}

            animate="animate">;
            <Atom className="w-8 h-8" />;
          </motion && motion.div>;
          <motion&& motion.div
            className="absolute top-40 right-20 text-blue-400/20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}>;
            <Brain className="w-6 h-6" />;
          </motion && motion.div>;
          <motion&& motion.div
            className="absolute bottom-40 left-20 text-purple-400/20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}>;
            <Rocket className="w-7 h-7" />;
          </motion && motion.div>;
        </motion && motion.section>;
        {/* Category Filter */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-6xl mx-auto">;
            <motion&& motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}>;
              Explore Our Revolutionary Services;
            </motion && motion.h2>;
            <motion&& motion.div 

=======

            
=======

            <motion.div 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}>;
              {categories && categories.map((category) => (;
                <motion&& motion.button
                  key={category && category.id}
                  onClick={() => handleCategoryChange(category && category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${;
                    selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r ' + category && category.color + ' text-white shadow-2xl';
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600';
                  }`}
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                >;
                  <category && category.icon className="inline-block w-5 h-5 mr-2" />;
                  {category && category.name}
                </motion && motion.button>;
              ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4






        {/* Featured Service Showcase */}
        <motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}
            >
              Explore Our Revolutionary Services
            </motion.h2>

<<<<<<< HEAD



            <motion.div 


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
          </div>;
        </motion && motion.section>;
        {/* Featured Service Showcase */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-6xl mx-auto">;
            <motion&& motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}>;
              Featured Revolutionary Services;
            </motion && motion.h2>;
            <motion&& motion.div 

=======

            <motion.div 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              variants={itemVariants}>;
              <AnimatePresence mode="wait">;
                <motion&& motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0 && 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">;
                  <div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      {featuredServices[currentServiceIndex]?.name}

                    </h3>;

                    <p className="text-gray-300 mb-6 leading-relaxed">;
                      {featuredServices[currentServiceIndex]?.description}
                    </p>;

                    <div className="flex flex-wrap gap-4 mb-6">;
                      {featuredServices[currentServiceIndex]?.features?.slice(0, 3).map((feature, idx) => (;
                        <span key={idx} className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600">;

                          {feature}
                        </span>;
                      ))}

                          {feature}
                        </span>
                      ))}
                    </div>

<<<<<<< HEAD
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug |featuredServices[currentServiceIndex]?.id}`}>
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>
        {/* Call to Action */}
        <motion.section
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>

<<<<<<< HEAD
            <motion.p
            <motion.p 

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

            <motion.p 


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group's revolutionary solutions.
              Get started today and experience the power of AI consciousness and quantum computing.
            </motion.p>

<<<<<<< HEAD

=======
                    </div>;
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>;
                      <motion&& motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1 && 1.05 }}
                        whileTap={{ scale: 0 && 0.95 }}>;
                        Learn More;
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />;
                      </motion && motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">;
                      <div className="text-center">;
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                          <Rocket className="w-8 h-8 text-white" />;
                        </div>;
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>;
                      </div>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              </AnimatePresence>;
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
=======
                    </div>
<<<<<<< HEAD
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug |featuredServices[currentServiceIndex]?.id}`}>
=======
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        {/* Call to Action */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"

              variants={itemVariants}>;
              Ready to Transform Your Business?;
            </motion && motion.h2>;
            <motion&& motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}>;
              Join the future of technology with Zion Tech Group's revolutionary solutions. ;
              Get started today and experience the power of AI consciousness and quantum computing.;
            </motion && motion.p>;
            <motion&& motion.div 


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            <motion.div 


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}>;
              <Link href="/quote">;
                <motion&& motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"

                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Get Started Today;
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;

              <Link href="/contact">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <Phone className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </UltraFuturisticBackground>






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Contact Us;
                  <Phone className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
      </UltraFuturisticBackground>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {/* Performance Monitor */}
      <AnimatePresence>;
        {showPerformanceMonitor && (;
          <PerformanceMonitor />;
        )}

      </AnimatePresence>;
    </>;
  );
};


export default EnhancedHomepage;

