
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
//Import service data window && window.addEventListener ('mousemove', handleMouseMove);
//Import our enhanced components import EnhancedNavigation from './layout / EnhancedNavigation';
import EnhancedServiceCard from './ui / EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui / UltraFuturisticBackground';
//Combine all revolutionary services const allRevolutionaryServices = [ ...revolutionary2044AdvancedMicroSaas;
...revolutionary2044ITServices;
...revolutionary2044AIServices;
...realEnterpriseMicroSaas2025;
...innovativeITServicesExpansion2025V3;
...innovativeAIServicesExpansion2025V3...innovative2025ITInfrastructureServices;
...innovative2025AIAutonomousServices ];
import PerformanceMonitor from './PerformanceMonitor';

import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
      clearInterval(interval);
      clearTimeout(performanceTimer);
      window && window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
//Filter services by category //Animation variants const container_variants = {
  hidden: {
  opacity: 0;
}
visible: {
  opacity: 1, transition: {
  duration: 0.8, stagger_children: 0.1;
}
;
}
;
}
;
}
;
}
export default EnhancedHomepage;import EnhancedServiceCard from './ui / EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui / UltraFuturisticBackground';
// Import service data;
import { revolutionary2044AdvancedMicroSaas } from '../data / revolutionary - 2044 - advanced - micro - saas';
import { revolutionary2044ITServices } from '../data / revolutionary - 2044 - it - services';
import { revolutionary2044AIServices } from '../data / revolutionary - 2044 - ai - services';
import { realEnterpriseMicroSaas2025 } from '../data / 2025 - real - enterprise - micro - saas';
import { innovativeITServicesExpansion2025V3 } from '../data / 2025 - innovative - it - services - expansion - v3';
import { innovativeAIServicesExpansion2025V3 } from '../data / 2025 - innovative - ai - services - expansion - v3';
import { innovative2025ITInfrastructureServices } from '../data / 2025 - innovative - it - infrastructure - services';
import { innovative2025AIAutonomousServices } from '../data / 2025 - innovative - ai - autonomous - services';
const EnhancedHomepage: React.FC = () => {
  const [is_visible, setIsVisible] = useState (false);
  const [selected_category, setSelectedCategory] = useState ('all');
  const [mouse_position, setMousePosition] = useState ({ coordinate_x: 0, coordinate_y: 0 }),
  const [currentServiceIndex, setCurrentServiceIndex] = useState (0);
  const [color_scheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState (false);
;
  useEffect (() => {
    setIsVisible (true);
;
    // Auto - rotate featured services;
    const interval = set_interval (() => {
      setCurrentServiceIndex ((prev) => (prev + 1) % 6);
    }, 6000);
;
    // Track mouse movement for parallax effects;
    const handleMouseMove = (e: MouseEvent) =>: any {
      setMousePosition ({ coordinate_x: e.client_x, coordinate_y: e.client_y });
    }
;
    // Show performance monitor after 5 seconds;
    const performance_timer = set_timeout (() => {
      setShowPerformanceMonitor (true);
    }, 5000);
;
    window.addEventListener ('mousemove', handleMouseMove);
;
    return () => {
      clear_interval (interval);
      clear_timeout (performance_timer);
      window.removeEventListener ('mousemove', handleMouseMove);
    }
  }, []);
;
  // Combine all revolutionary services;
  const allRevolutionaryServices = [;
    ...revolutionary2044AdvancedMicroSaas;
    ...revolutionary2044ITServices;
    ...revolutionary2044AIServices;
    ...realEnterpriseMicroSaas2025;
    ...innovativeITServicesExpansion2025V3;
    ...innovativeAIServicesExpansion2025V3;
    ...innovative2025ITInfrastructureServices;
    ...innovative2025AIAutonomousServices;
  ];
    setSelectedCategory(categoryId);
    const category = categories && categories.find(cat => cat && cat.id === categoryId);
    if (category) {;
      setColorScheme(category && category.scheme);
    }
  }
          className="relative min-h-screen flex items-center justify-center px-4 lg: px-8 pt-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible">;
          <div className="relative z-10 text-center max-w-6xl mx-auto">;
            {/* Main Heading */}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}>;
              <Link href="/services">;
                <motion&& motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          {/* Floating Elements */}
          <motion&& motion.div
            className="absolute top-20 left-10 text-cyan-400/20"
            variants={floatingVariants}
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}>;
              {getFilteredServices().slice(0, 12).map((service, index) => (;
                <EnhancedServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.name}
                  description={service.description}
                  category={service.category}
                  index={index}
                  isPopular={Math && Math.random() > 0 && 0.7}
                  isNew={Math && Math.random() > 0 && 0.8}
                  rating={4 && 4.0 + Math && Math.random() * 1 && 1.0}
                  reviewCount={Math && Math.floor(Math && Math.random() * 100) + 10}
                  estimatedDelivery="2-4 weeks";
                  technologies={['AICloudSecurityAutomation']}
                />;
              ))}
                className="text-center mt-12"
                variants={itemVariants}>;
                <Link href="/services">;
                  <motion&& motion.button
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    View All Services;
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />;
                  </motion && motion.button>;
                </Link>;
              </motion && motion.div>;
            )}
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}>;
              <Link href="/quote">;
                <motion&& motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
      {/* Performance Monitor */}
      <AnimatePresence>;
        {showPerformanceMonitor && (;
          <PerformanceMonitor />;
        )}
                  type={(service as any).type || service.category}
                  features={service.features?.map (function => ({ name: f, description: f }))}
                  slug={(service as any).slug || service.id}
                  index={index}
                  is_popular={Math.random () > 0.7}
                  is_new={Math.random () > 0.8}
                  rating={4.0 + Math.random () * 1.0}
                  review_count={Math.floor (Math.random () * 100) + 10}
                  estimated_delivery="2 - 4 weeks";
                  technologies={['AICloudSecurityAutomation']}
                />))}
            </motion.div>;
            {getFilteredServices ().length > 12 && (
              <motion.div;
                className="text - center mt - 12";
                variants={item_variants}
              >;
                <Link href="/services">;
                  <motion.button;
                    className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - bold rounded - xl text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    View All Services;
                    <ArrowRight className="inline - block ml - 2 w - 5 h - 5" />;
                  </motion.button>;
                </Link>;
              </motion.div>)}
          </div>;
        </motion.section>;
        {/* Featured Service Showcase */}
        <motion.section;
          className="py - 16 px - 4 lg:px - 8";
          variants={container_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="max - w-6xl mx - auto">;
            <motion.h2;
              className="text - 3xl md:text - 4xl font - bold text - center text - white mb - 12";
              variants={item_variants}
            >;
              Featured Revolutionary Services;
            </motion.h2>;
            <motion.div;
              className="bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 8";
              variants={item_variants}
            >;
              <AnimatePresence mode="wait">;
                <motion.div;
                  key={currentServiceIndex}
                  initial={{ opacity: 0, coordinate_x: 20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  exit={{ opacity: 0, coordinate_x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8 items - center";
                >;
                  <div>;
                    <h3 className="text - 2xl font - bold text - white mb - 4">;
                      {featured_services[currentServiceIndex]?.name}
                    </h3>;
                    <p className="text - gray - 300 mb - 6 leading - relaxed">;
                      {featured_services[currentServiceIndex]?.description}
                    </p>;
                    <div className="flex flex - wrap gap - 4 mb - 6">;
                      {featured_services[currentServiceIndex]?.features?.slice (0, 3).map ((feature, idx) => (
                        <span key={idx} className="text - xs text - gray - 400 bg - gray - 800 / 50 px - 3 py - 1 rounded - full border border - gray - 600">;
                          {feature}
                        </span>))}
                    </div>;
                    <Link href={`/services/${(featured_services[currentServiceIndex] as any)?.slug || featured_services[currentServiceIndex]?.id}`}>;
                      <motion.button;
                        className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - lg hover: from - cyan - 600 hover:to - blue - 700 transition - all duration - 300";
                        while_hover={{ scale: 1.05 }}
                        while_tap={{ scale: 0.95 }}
                      >;
                        Learn More;
                        <ArrowRight className="inline - block ml - 2 w - 4 h - 4" />;
                      </motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;
                    <div className="w - full h - 64 bg - gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl border border - cyan - 500 / 30 flex items - center justify - center">;
                      <div className="text - center">;
                        <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - full flex items - center justify - center mx - auto mb - 4">;
                          <Rocket className="w - 8 h - 8 text - white" />;
                        </div>;
                        <p className="text - cyan - 400 font - medium">Revolutionary Technology</p>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              </AnimatePresence>;
            </motion.div>;
          </div>;
        </motion.section>;
        {/* Call to Action */}
        <motion.section;
          className="py - 16 px - 4 lg:px - 8";
          variants={container_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.h2;
              className="text - 3xl md:text - 4xl font - bold text - white mb - 6";
              variants={item_variants}
            >;
              Ready to Transform Your Business?;
            </motion.h2>;
            <motion.p;
              className="text - xl text - gray - 300 mb - 8";
              variants={item_variants}
            >;
              Join the future of technology with Zion Tech Group's revolutionary solutions.;
              Get started today and experience the power of AI consciousness and quantum computing.;
            </motion.p>;
            <motion.div;
              className="flex flex - col sm:flex - row gap - 4 justify - center items - center";
              variants={item_variants}
            >;
              <Link href="/quote">;
                <motion.button;
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl text - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  Get Started Today;
                  <ArrowRight className="inline - block ml - 2 w - 5 h - 5" />;
                </motion.button>;
              </Link>;
              <Link href="/contact">;
                <motion.button;
                  className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - bold rounded - xl text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  Contact Us;
                  <Phone className="inline - block ml - 2 w - 5 h - 5" />;
                </motion.button>;
              </Link>;
            </motion.div>;
          </div>;
        </motion.section>;
      </UltraFuturisticBackground>;
      {/* Performance Monitor */}
      <AnimatePresence>;
        {showPerformanceMonitor && (
          <PerformanceMonitor />)}
      </AnimatePresence>;
    </>);
}
;
export default EnhancedHomepage;
;
