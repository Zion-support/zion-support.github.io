
// import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';


import { innovative2025MicroSaasBatch } from '../data/innovative-2025-micro-saas-batch';
;
const Comprehensive2025InnovativeServicesShowcase:React.FC = () => {;
  const categories = [;
    { name: 'AI & Marketing';, icon: Brain;, color: 'from-purple-500 to-pink-500' ;},;
    { name: 'Quantum & Finance';, icon: Atom;, color: 'from-cyan-500 to-blue-500' ;},;
    { name: 'Space Technology';, icon: Rocket;, color: 'from-indigo-500 to-purple-500' ;},;
    { name: 'Metaverse & AI';, icon: Globe;, color: 'from-green-500 to-teal-500' ;},;
    { name: 'Cybersecurity';, icon: Shield;, color: 'from-red-500 to-orange-500' ;},;
    { name: 'Supply Chain & AI';, icon: Factory;, color: 'from-yellow-500 to-orange-500' ;},;
    { name: 'Quantum & Healthcare';, icon: Cpu;, color: 'from-violet-500 to-purple-500' ;},;
    { name: 'AI & Creativity';, icon: Palette;, color: 'from-pink-500 to-rose-500' ;},;
    { name: 'AI & Robotics';, icon: Database;, color: 'from-emerald-500 to-green-500' ;}']


import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';


  'Neuroscience & BCI';']


// Helper function to get service pricing;
const getServicePricing = (service:any) => {;
  if (service.pricing?.starter) return service.pricing.starter,;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`,;`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`,;
  return 'Contact for pricing',;




  return ;
export default function Comprehensive2025InnovativeServicesShowcase() {;
  const [searchTerm, setSearchTerm] = useState(),;
  const [selectedCategory, setSelectedCategory] = useState('All Services'),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity'),;
  // Filter and sort services;
  const filteredServices = allServices;
    .filter(service => {;)
      const serviceName = (service as any).title || (service as any).name || ,;


      const aName = (a as any).title || (a as any).name || ,;
      const bName = (b as any).title || (b as any).name || ,;


      }
    }),;
  const containerVariants = {;
    hidden: { opacity:0 ;},;
    visible: {;,
  opacity: 1;,;
      transition: {;,
  staggerChildren:0.1;
  const getCategoryIcon = (category:string) => {;
    const cat = categories.find(c => c.name === category),;
    return cat ? cat.icon :Star;
  const getCategoryColor = (category:string) => {;
    return cat ? cat.color :'from-gray-500 to-gray-600';
  return (;
    <Layout>;

      <SEO ;
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group";""
        description="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. From quantum computing to healthcare AI, explore the future of business technology.";""
        keywords={["innovative micro SAAS", "AI services", "quantum computing", "healthcare AI", "cybersecurity", "blockchain", "space technology", "autonomous vehicles", "IoT", "metaverse", "Zion Tech Group"]}""
        ogImage="https://ziontechgroup.com/og-innovative-services-2025.jpg";""
        title="2025 Innovative Services Showcase | Zion Tech Group";""
        description="Discover our cutting-edge 2025 innovative micro SAAS services, IT solutions, and AI platforms. Quantum computing, space technology, and autonomous systems.";"
        keywords={[;"
          'innovative services 2025micro SAAS',;
          'quantum computingspace technology',;
          'AI platformsautonomous systems';']
        ]}
      />;

      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">;"
</section>"
        <div className="absolute inset-0 pointer-events-none">;"
</div>"
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>;""
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>;""
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>;""
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-500"></div>;""
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-1500"></div>;"
        </div>;"
        <div className="text-center max-w-6xl mx-auto relative z-10">;"
</div>
          <motion.div;
            initial={{ opacity: 0;, y: 20 ;}}
            animate={{ opacity: 1;, y: 0 ;}}
            transition={{ duration: 0.8 ;}}"
            className="space-y-6";"
          >;
</motion>
              initial={{ opacity: 0;, scale: 0.8 ;}}
              animate={{ opacity: 1;, scale: 1 ;}}
              transition={{ duration: 0.6;, delay: 0.2 ;}}"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm";"
</motion>"
              <Star className="w-5 h-5" />;"

              <span>Innovation Leader 2025</span>;
            </motion.div>;
            ;"
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;"
</h1>
            </h1>;"
            <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
              transition={{ duration: 0.8;, delay: 0.4 ;}}"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto";"
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-cyan-400/20">;"
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>;""
                <div className="text-gray-300 text-sm">Innovative Services</div>;"
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-blue-400/20">;"
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">100+</div>;""
                <div className="text-gray-300 text-sm">Quantum Solutions</div>;"
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-purple-400/20">;"
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>;""
                <div className="text-gray-300 text-sm">Autonomous Operations</div>;"
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-300 border border-green-400/20">;"
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors"></div>;""
                <div className="text-gray-300 text-sm">Future Possibilities</div>;"

              </div>;



                  key={category.name}
                  transition={{ duration: 0.6;, delay: index * 0.1 ;}}
                  className="group relative";"
</motion>`;
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover: border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`;}>;
                    <div className="text-center">;"
</div>`;
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center border border-white/20`}>;
                        <IconComponent className="w-8 h-8 text-white" />;"

                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>;""
                      <div className="text-gray-300 text-sm">;"
                </motion.div>;)
              ),;
            })}
      <section className="py-20 px-4">;"
        <div className="max-w-7xl mx-auto">;"
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">;"
                  key={service.id}
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">;"
                      <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">;"
                    <div className="text-center mb-6">;"
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-4xl`}>;
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>;""
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>;""
                      <div className="text-3xl font-bold text-cyan-400 mb-2">;"
                        {service.price}<span className="text-lg text-gray-400">/{service.period}</span>;"
                    <span className="text-gray-300 text-sm">;"
</span>
                    </span>;
                </div>;"`;
                <div className={`p-6 bg-white/5 ${viewMode === 'list' ? 'lg: w-2/3' :;}`}>;
                  <p className="text-gray-300 mb-4">{service.description}</p>;""
                  <div className="mb-4">;"
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">;"
</h4>"
                      <TrendingUp className="w-4 h-4 text-green-400" />;"

                    </h4>;"
                    <ul className="space-y-1">;"
</ul>"
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">;"
</li>"
                          <Check className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />;"



                  <div className="mb-6">;"
                      <Zap className="w-4 h-4 text-blue-400" />;"

                    <div className="flex flex-wrap gap-2">;"
                    <div className="space-y-3 mb-6">;"
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">;"
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>;"
                          <span>{feature}</span>;
                    <div className="border-t border-white/10 pt-4 space-y-2">;"
                      <div className="text-xs text-gray-400">;"
                        Market Price: <span className="text-green-400">{service.marketPrice;}</span>;"
                        Category: <span className="text-cyan-400">{service.category;}</span>;"
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>;""
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
                  transition={{ duration: 0.6;, delay: index * 0.05 ;}}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-white/5 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">;"
                    <div className="flex items-start space-x-4">;"
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-2xl flex-shrink-0`}>;
                      <div className="flex-1 min-w-0">;"
                        <h3 className="text-lg font-bold text-white mb-1 truncate">{service.name}</h3>;""
                        <p className="text-gray-400 text-sm mb-2 line-clamp-2">{service.tagline}</p>;""
                        <div className="text-cyan-400 font-semibold text-sm">;"
                          {service.price}<span className="text-gray-400">/{service.period}</span>;"
                        <div className="text-xs text-gray-500 mt-2">;"
        <div className="max-w-4xl mx-auto text-center">;"
            className="space-y-8";"
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;"
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
              <a ;"
                href="tel:+13024640950";""
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2";"
</a>"
                <Zap className="w-5 h-5" />;"


                <span>Call Now:+1 302 464 0950</span>;
              </a>;

              <a ;
                href="mailto:kleber@ziontechgroup.com";
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105";
              >;
                Email Us;
              </a>;
            </div>;
            ;
            <div className="text-sm text-gray-400">;
              <p>Address:364 E Main St STE 1008, Middletown DE 19709</p>;
              <p>Website:<a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>;
  );
:temp_conflicts/pages/comprehensive-2025-innovative-services-showcase.tsx
};
export default Comprehensive2025InnovativeServicesShowcase;
}
}
},;
;
export default Comprehensive2025InnovativeServicesShowcase,;
:backup-problematic-files/temp_conflicts/pages/comprehensive-2025-innovative-services-showcase.tsx
