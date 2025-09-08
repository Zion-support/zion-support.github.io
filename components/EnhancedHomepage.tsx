<<<<<<< HEAD


;

//Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
//Import service data window.addEventListener ('mousemove', handleMouseMove);
=======

;
import React, { useEffect, useState } from 'react';'
import { motion, AnimatePresence   } from 'framer-motion';'
import Link from 'next/link';'
import { ArrowRight;
  }
  TrendingUp;
  Brain;
  Shield;
  Rocket;
  Atom;
  Sparkles;
  Building;
  Phone;
  Mail;
  MapPin;
//Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation'
import EnhancedServiceCard from './ui/EnhancedServiceCard'
import PerformanceMonitor from './PerformanceMonitor'
import UltraFuturisticBackground from './ui/UltraFuturisticBackground'
//Import service data window.addEventListener ('mousemove', handleMouseMove)
//Combine all revolutionary services const allRevolutionaryServices = [ ...revolutionary2044AdvancedMicroSaas
...revolutionary2044ITServices
...revolutionary2044AIServices
...realEnterpriseMicroSaas2025
...innovativeITServicesExpansion2025V3
...innovativeAIServicesExpansion2025V3...innovative2025ITInfrastructureServices
...innovative2025AIAutonomousServices ]
//Filter services by category //Animation variants const containerVariants = {
  hidden: {
  opacity: 0 
}
visible: {
  opacity: 1, transition: {
  duration: 0.8, staggerChildren: 0.1 
  ArrowUpRight;
  } from 'lucide-react';'
import Head from 'next/head',// Import our enhanced components;'
import EnhancedNavigation from './layout/EnhancedNavigation',import EnhancedServiceCard from './ui/EnhancedServiceCard',import PerformanceMonitor from './PerformanceMonitor',//Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation';'
import EnhancedServiceCard from './ui/EnhancedServiceCard';'
import PerformanceMonitor from './PerformanceMonitor';'
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';'
//Import service data window && window.addEventListener ('mousemove', handleMouseMove)//Import our enhanced components import EnhancedNavigation from './layout / EnhancedNavigation';'
import EnhancedServiceCard from './ui / EnhancedServiceCard';'
import UltraFuturisticBackground from './ui / UltraFuturisticBackground';'
>>>>>>> origin/cursor/delete-old-data-records-6bba

//Combine all revolutionary services const allRevolutionaryServices = [ ...revolutionary2044AdvancedMicroSaas;
...revolutionary2044ITServices;
...revolutionary2044AIServices;
...realEnterpriseMicroSaas2025;
...innovativeITServicesExpansion2025V3;
...innovativeAIServicesExpansion2025V3...innovative2025ITInfrastructureServices;
<<<<<<< HEAD

...innovative2025AIAutonomousServices ];


  opacity: 0 


import React from 'react';

interface EnhancedHomepageProps  {className?: string;}
}const EnhancedHomepage: React.FC<EnhancedHomepageProps    /> = ({ className }) => {return (<div className={className || ''}    />;


interface EnhancedHomepageProps {

=======

...innovative2025AIAutonomousServices ];"opacity": 0;
import React from 'react';'
interface EnhancedHomepageProps  {className?: string;
}const "EnhancedHomepage": React.FC<EnhancedHomepageProps> = ({ className }) => {return (<div className={className || ''}>;'

interface EnhancedHomepageProps {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  className?: string;

}

const "EnhancedHomepage": React.FC<EnhancedHomepageProps> = ({ className    }) => {


}

<<<<<<< HEAD
};
visible: {
  opacity: 1, transition: {
  duration: 0.8, staggerChildren: 0.1

}
}


}
return (<div className={className || ',}
}    />;
      <h1    />EnhancedHomepage</h1>;
      <p    />This component is under development.</p>;
    </div>;


}
}
}
}
}


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


}
visible: {opacity: 1, transition: {duration: 0.8, stagger_children: 0.1;}
}}}}}

export default EnhancedHomepage;import EnhancedServiceCard from './ui / EnhancedServiceCard';
// Import service data;
import { revolutionary2044AdvancedMicroSaas  } from '../data / revolutionary - 2044 - advanced - micro - saas';
import { revolutionary2044ITServices  } from '../data / revolutionary - 2044 - it - services';
import { revolutionary2044AIServices  } from '../data / revolutionary - 2044 - ai - services';
import { realEnterpriseMicroSaas2025  } from '../data / 2025 - real - enterprise - micro - saas';
import { innovativeITServicesExpansion2025V3  } from '../data / 2025 - innovative - it - services - expansion - v3';
import { innovativeAIServicesExpansion2025V3  } from '../data / 2025 - innovative - ai - services - expansion - v3';
import { innovative2025ITInfrastructureServices  } from '../data / 2025 - innovative - it - infrastructure - services';
import { innovative2025AIAutonomousServices  } from '../data / 2025 - innovative - ai - autonomous - services';
const EnhancedHomepage: React.FC = () => {const [is_visible, setIsVisible] = useState (false)const [selected_category, setSelectedCategory] = useState ('all')const [mouse_position, setMousePosition] = useState ({ coordinate_x: 0, coordinate_y: 0 }),const [currentServiceIndex, setCurrentServiceIndex] = useState (0)const [color_scheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber')const [showPerformanceMonitor, setShowPerformanceMonitor]  = useState (false)useEffect (() => {setIsVisible (true)// Auto - rotate featured services;}
    const interval = set_interval (() => {setCurrentServiceIndex ((prev) => (prev + 1) % 6)}, 6000)// Track mouse movement for parallax effects;
    const handleMouseMove = (e: MouseEvent) =>: any {setMousePosition ({ coordinate_x: e.client_x, coordinate_y: e.client_y })}// Show performance monitor after 5 seconds;
    const performance_timer = set_timeout (() => {setShowPerformanceMonitor (true)}, 5000)window.addEventListener ('mousemove', handleMouseMove)return () => {clear_interval (interval)clear_timeout (performance_timer)window.removeEventListener ('mousemove', handleMouseMove)}

  }, [])// Combine all revolutionary services;
  const allRevolutionaryServices = [;



=======

return (<div className={className || ',;'
}>;
      <h1>EnhancedHomepage</h1>;
      <p>This component is under development.</p>;
    </div>;
  )}"visible": {"opacity": 1, "transition": {"duration": 0.8, "staggerChildren": 0.1;
import React from 'react';
interface EnhancedHomepageProps  {className?: string;
}const "EnhancedHomepage": React.FC<EnhancedHomepageProps> = ({ className }) => {return (<div className={className || ''}>;'

interface EnhancedHomepageProps {
  className?: string;}
}
}
}
}
}

      clearInterval(interval)clearTimeout(performanceTimer)window && window.removeEventListener('mousemove', handleMouseMove)}'
  }, [])//Filter services by category //Animation variants const container_variants = {"hidden": {"opacity": 0;
}
"visible": {"opacity": 1, "transition": {"duration": 0.8, "stagger_children": 0.1;
}}}

export default EnhancedHomepage;import EnhancedServiceCard from './ui / EnhancedServiceCard';'
// Import service data;
import { revolutionary2044AdvancedMicroSaas  } from '../data / revolutionary - 2044 - advanced - micro - saas';'
import { revolutionary2044ITServices  } from '../data / revolutionary - 2044 - it - services';'
import { revolutionary2044AIServices  } from '../data / revolutionary - 2044 - ai - services';'
import { realEnterpriseMicroSaas2025  } from '../data / 2025 - real - enterprise - micro - saas';'
import { innovativeITServicesExpansion2025V3  } from '../data / 2025 - innovative - it - services - expansion - v3';'
import { innovativeAIServicesExpansion2025V3  } from '../data / 2025 - innovative - ai - services - expansion - v3';'
import { innovative2025ITInfrastructureServices  } from '../data / 2025 - innovative - it - infrastructure - services';'
import { innovative2025AIAutonomousServices  } from '../data / 2025 - innovative - ai - autonomous - services';'
const "EnhancedHomepage": React.FC = () => {const [is_visible, setIsVisible] = useState (false)const [selected_category, setSelectedCategory] = useState ('all')const [mouse_position, setMousePosition] = useState ({ "coordinate_x": 0, "coordinate_y": 0 }),const [currentServiceIndex, setCurrentServiceIndex] = useState (0)const [color_scheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber')const [showPerformanceMonitor, setShowPerformanceMonitor]  = useState (false)useEffect (() => {setIsVisible (true)// Auto - rotate featured services;'
    }
    const interval = set_interval (() => {setCurrentServiceIndex ((prev) => (prev + 1) % 6)}, 6000)// Track mouse movement for parallax effects;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    ...revolutionary2044AdvancedMicroSaas;

const "EnhancedHomepage": React.FC = () => {const [is_visible, setIsVisible] = useState (false)const [selected_category, setSelectedCategory] = useState ('all')const [mouse_position, setMousePosition] = useState ({ "coordinate_x": 0, "coordinate_y": 0,'
}),const [currentServiceIndex, setCurrentServiceIndex] = useState (0)const [color_scheme, setColorScheme] =;
  useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber';'
  const [showPerformanceMonitor, setShowPerformanceMonitor]  = useState (false)useEffect (() => {setIsVisible (true)// Auto - rotate featured services;

}

const interval = set_interval (() => {setCurrentServiceIndex ((prev) => (prev + 1) % 6)}, 6000)// Track mouse movement for parallax effects;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const handleMouseMove = ("e": MouseEvent) =>: any {setMousePosition ({ "coordinate_x": e.client_x, "coordinate_y": e.client_y }
}// Show performance monitor after 5 seconds;

const performance_timer = set_timeout (() => {setShowPerformanceMonitor (true)}, 5000)window.addEventListener ('mousemove', handleMouseMove;'
  return () => {clear_interval (interval)clear_timeout (performance_timer)window.removeEventListener ('mousemove', handleMouseMove)}'
  }, [])// Combine all revolutionary services;

<<<<<<< HEAD

const allRevolutionaryServices = [

=======
const allRevolutionaryServices = [;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ...revolutionary2044AdvancedMicroSaas;
    ...revolutionary2044ITServices;
    ...revolutionary2044AIServices;
    ...realEnterpriseMicroSaas2025;
    ...innovativeITServicesExpansion2025V3;
<<<<<<< HEAD

      <Head    />;
        <title    />Zion Tech Group - Revolutionary 2045 Technology Solutions</title>;
        <meta name=\"description\" content=\"Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation.\"    />;
        <meta name=\"keywords\" content=\"AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology\"    />;
        <meta property=\"og:title\" content=\"Zion Tech Group - Revolutionary 2045 Technology\"    />;
        <meta property=\"og:description\" content=\"Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions.\"    />;
        <meta property=\"og:url\" content=\"https://ziontechgroup && ziontechgroup.com\"    />;
        <meta property=\"og:type\" content=\"website\"    />;
        <link rel=\"canonical\" href=\"https://ziontechgroup && ziontechgroup.com\"    />;{/* Performance and SEO Meta Tags */}
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\"    />;
        <meta name=\"theme-color\" content=\"#00d4ff\"    />;
        <meta name=\"robots\" content=\"index, follow\"    />;
        <meta name=\"author\" content=\"Zion Tech Group\"    />;{/* Preload critical resources */}
        <link rel=\"preload\" href=\"/fonts/inter-var && var.woff2\" as=\"font\" type=\"font/woff2\" crossOrigin=\"anonymous\"    />;
        <link rel=\"dns-prefetch\" href=\"//fonts && fonts.googleapis.com\"    />;
        <link rel=\"dns-prefetch\" href=\"//fonts && fonts.gstatic.com\"    />;
=======
    setSelectedCategory(categoryId)const category = categories && categories.find(cat => cat && cat.id === categoryId)if (category) {setColorScheme(category && category.scheme)}
  }
  return (<>;
      <Head>;
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>;

        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />;"
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />;"
        <meta property=""og":title" content="Zion Tech Group - Revolutionary 2045 Technology" />;"
        <meta property=""og":description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />;"
        <meta property=""og":url" content=""https"://ziontechgroup && ziontechgroup.com" />;"
        <meta property=""og":type" content="website" />;"
        <link rel="canonical" href=""https"://ziontechgroup && ziontechgroup.com" />;{/* Performance and SEO Meta Tags */}"
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />;"
        <meta name="theme-color" content="#00d4ff" />;"
        <meta name="robots" content="index, follow" />;"
        <meta name="author" content="Zion Tech Group" />;{/* Preload critical resources */}"
        <link rel="preload" href="/fonts/inter-var && var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />;"
        <link rel="dns-prefetch" href="//fonts && fonts.googleapis.com" />;"
        <link rel="dns-prefetch" href="//fonts && fonts.gstatic.com" />;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </Head>;{/* Enhanced Navigation */}
      <EnhancedNavigation />;<UltraFuturisticBackground variant={colorScheme === 'cyber' ? 'cyberpunk' : colorScheme === 'quantum' ? 'quantum' : colorScheme === 'neon' ? 'neural' : 'holographic'} intensity="high">;"
        {/* Hero Section */}
        <motion&& motion.section;
<<<<<<< HEAD
          className=\'relative min-h-screen flex items-center justify-center px-4 lg: px-8 pt-20\';

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



        duration: 3,
        ease: "easeInOut" as const;
      }
    }
  }
;
  const handleCategoryChange = (category_id: string) =>: any {
    setSelectedCategory (category_id);
    const category = categories.find (cat => cat.id === category_id);
    // Check condition
if ( {) {
  $2
}
      setColorScheme (category.scheme);
    }
  }
;
  return (
    <>;
      <Head>;
        <title > Zion Tech Group - Revolutionary 2045 Technology Solutions</title>;
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting - edge innovation." />;
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />;
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />;
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />;
        <meta property="og:url" content="https://ziontechgroup.com" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com" />;
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width = device - width, initial - scale = 1, viewport - fit = cover" />;
        <meta name="theme - color" content="#00d4ff" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts / inter - var.woff2" as="font" type="font / woff2" cross_origin="anonymous" />;
        <link rel="dns - prefetch" href="//fonts.googleapis.com" />;
        <link rel="dns - prefetch" href="//fonts.gstatic.com" />;
      </Head>;
      {/* Enhanced Navigation */}
      <EnhancedNavigation />;
      <UltraFuturisticBackground variant={color_scheme === 'cyber' ? 'cyberpunk' : color_scheme === 'quantum' ? 'quantum' : color_scheme === 'neon' ? 'neural' : 'holographic'} intensity="high">;
        {/* Hero Section */}
        <motion.section;
          className="relative min - h-screen flex items - center justify - center px - 4 lg: px - 8 pt - 20";
          variants={hero_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="relative z - 10 text - center max - w-6xl mx - auto">;
            {/* Main Heading */}
            <motion.h1;
              className="text - 5xl md:text - 7xl lg:text - 8xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6";
              variants={item_variants}
            >;
              Zion Tech Group;
            </motion.h1>;

            <motion.p;
              className=\'text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed\';
              variants={itemVariants}
                />;
              Pioneering the Future of Technology with Revolutionary AI Consciousness;
              Quantum Computing, and Autonomous Solutions;
            </motion.p>;
            <motion&& motion.h1;
              className=\'text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6\';
              variants={itemVariants}    />;
              Zion Tech Group;
            </motion && motion.h1>;
            <motion&& motion.p;
              className=\'text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed\';
              variants={itemVariants}    />;
              Pioneering the Future of Technology with Revolutionary AI Consciousness,Quantum Computing, and Autonomous Solutions;
            </motion && motion.p>;{/* CTA Buttons */}
            <motion&& motion.div;
              className=\'flex flex-col sm:flex-row gap-4 justify-center items-center mb-12\';
              variants={itemVariants}    />;
              <Link href=\"/services\"    />;
                <motion&& motion.button;
                  className=\'px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl\';
          {/* Floating Elements */}
          <motion&& motion.div;
            className=\'absolute top-20 left-10 text-cyan-400/20\';
            variants={floatingVariants}
=======
          className="relative min-h-screen flex items-center justify-center px-4 "lg": px-8 pt-20";"
          variants={heroVariants}
          initial="hidden";"
          animate="visible">;"
          <div className="relative z-10 text-center max-w-6xl mx-auto">;"
            {/* Main Heading */}
            <motion.p;
              className="text-xl "md":text-2xl "lg":text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed";"
              variants={itemVariants}
            >;

          variants={heroVariants}
          initial=\'hidden\';
          animate=\"visible\"    />;
          <div className=\"relative z-10 text-center max-w-6xl mx-auto\"    />;
            {/* Main Heading */}

            <motion&& motion.p;
              className="text-xl "md":text-2xl "lg":text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed";"
              variants={itemVariants}>;
              Pioneering the Future of Technology with Revolutionary AI Consciousness,Quantum Computing, and Autonomous Solutions;
            </motion && motion.p>;{/* CTA Buttons */}
            <motion&& motion.div;
              className="flex flex-col "sm":flex-row gap-4 justify-center items-center mb-12";"
              variants={itemVariants}>;
              <Link href="/services">;"
                <motion&& motion.button;
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg "hover":from-cyan-600 "hover":to-blue-700 transition-all duration-300 transform "hover":scale-105 "hover":shadow-2xl";"
          {/* Floating Elements */}
          <motion&& motion.div
            className="absolute top-20 left-10 text-cyan-400/20"
            variants={floatingVariants}

>>>>>>> origin/cursor/delete-old-data-records-6bba
            <motion.div;
              className="flex flex-wrap justify-center gap-4 mb-12";"
              variants={itemVariants}
            >;
              {categories.map((category) => (<motion.button;
                  }
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform "hover":scale-105 ${selectedCategory === category.id;`                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl';'
                      : 'bg-gray-800/50 text-gray-300 "hover":bg-gray-700/50 border border-gray-600';'
                  }`}`                  whileHover={ "scale": 1.05 }
                  whileTap={ "scale": 0.95 }
                  whileTap={ "scale": 0.95 
}
                >;
<<<<<<< HEAD
                  <category.icon className=\"inline-block w-5 h-5 mr-2\"    />;

=======
                  <category.icon className="inline-block w-5 h-5 mr-2" />;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {category.name}
                </motion.button>;
              ))}
              variants={itemVariants}>;
              Explore Our Revolutionary Services;
            </motion && motion.h2>;<motion&& motion.div;
            <motion.div;
              className="flex flex-wrap justify-center gap-4 mb-12";"
              variants={itemVariants}
            >;
              {categories.map((category) => (<motion.button;
                  }
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform "hover":scale-105 ${selectedCategory === category.id;`                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl';'
                      : 'bg-gray-800/50 text-gray-300 "hover":bg-gray-700/50 border border-gray-600';'
                  }`}`                  whileHover={ "scale": 1.05 }
                  whileTap={ "scale": 0.95 }
                  whileTap={ "scale": 0.95 
}
                >;
                  <category.icon className="inline-block w-5 h-5 mr-2" />;"
                  {category.name}
                </motion.button>;
              ))}
            </motion.div>;
          </div>;
        </motion.section>;
        {/* Services Grid */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <motion.section;
        {/* Services Grid */}
        <motion.section;
          className="py-16 px-4 "lg":px-8";"
          variants={containerVariants}
          initial="hidden";"
          animate="visible";"
        >;
          animate="visible">"

<<<<<<< HEAD
          <div className=\"max-w-7xl mx-auto\"    />;
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
        {/* Services Grid */}
        <motion&& motion.section;
          className=\'py-16 px-4 lg:px-8\';
          variants={containerVariants}
          initial=\'hidden\';
          animate=\"visible\"    />;
          <div className=\"max-w-7xl mx-auto\"    />;
            <motion&& motion.div;
            <motion.div;
              className=\'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\';
              variants={containerVariants}    />;
              {getFilteredServices().slice(0, 12).map((service, index) => (<EnhancedServiceCard;}




          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}
const EnhancedHomepage: React.FC;
const EnhancedHomepage: React.FC;
            >
              Explore Our Revolutionary Services
            </motion.h2>


              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              variants={itemVariants}>;
              <AnimatePresence mode="wait">;
                <motion&& motion.div



                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}


                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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



            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group's revolutionary solutions. 
              Get started today and experience the power of AI consciousness and quantum computing.
            </motion.p>




              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link href="/quote">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"




      {/* Performance Monitor */}
      <AnimatePresence>
        {showPerformanceMonitor && (
          <PerformanceMonitor />
        )}


};


export default EnhancedHomepage;



=======
              className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8";"
              variants={containerVariants}>;
              {getFilteredServices().slice(0, 12).map((service, index) => (<EnhancedServiceCard;
                  }
                  key={service.id}
                  id={service.id}
                  title={service.name}
                  description={service.description}
                  category={service.category}
                  index={index}
                  isPopular={Math.random()     /> 0.7}
                  isNew={Math.random() > 0.8}
                  rating={4.0 + Math.random() * 1.0}
                  reviewCount={Math.floor(Math.random() * 100) + 10}
                  estimatedDelivery=\'2-4 weeks\';
                  technologies={['AICloudSecurityAutomation']}
                />;
              ))}
                className=\'text-center mt-12\';
                variants={itemVariants}

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
                <Link href=\"/services\"    />;
                  <motion.button;
                    className=\'px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300\';
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    whileTap={{ scale: 0.95 ,}
}
                      />;
                    View All Services;
                    <ArrowRight className=\"inline-block ml-2 w-5 h-5\"    />;
                  </motion.button>;
                </Link>;
              </motion.div>;
            )}{/* Featured Service Showcase */}
        <motion.section;
          className=\'py-16 px-4 lg:px-8\';
          variants={containerVariants}
          initial=\'hidden\';
          animate=\'visible\';
            />;
          animate=\"visible\">

          <div className=\"max-w-6xl mx-auto\"    />;
            <motion.h2;
              className=\'text-3xl md:text-4xl font-bold text-center text-white mb-12\';
              variants={itemVariants}
                />;
              Featured Revolutionary Services;
            </motion.h2>;
          </div>;
        </motion && motion.section>;
        {/* Featured Service Showcase */}
        <motion&& motion.section;
          className="py-16 px-4 "lg":px-8";"
          variants={containerVariants}
          initial="hidden";"
          animate="visible">;"
          <div className="max-w-6xl mx-auto">;"
            <motion&& motion.h2;
              className="text-3xl "md":text-4xl font-bold text-center text-white mb-12";"
              variants={itemVariants}>;
              Featured Revolutionary Services;
            </motion && motion.h2>;
            <motion&& motion.div;
            <motion.div;
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8";"
              variants={itemVariants}>;
              <AnimatePresence mode="wait">;"
                <motion&& motion.div;
                  key={currentServiceIndex}
                  initial={ "opacity": 0, "x": 20 }
                  animate={ "opacity": 1, "x": 0 }
                  exit={ "opacity": 0, "x": -20 }<Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>;`                      <motion.button;
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg "hover": from-cyan-600 "hover":to-blue-700 transition-all duration-300";"
                        whileHover={ "scale": 1.05 }
                        whileTap={ "scale": 0.95 }
                  initial={ "opacity": 0, "x": 20 
}
                  animate={ "opacity": 1, "x": 0 
}
                  exit={ "opacity": 0, "x": -20 }<Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id},`}>;
                      <motion.button;
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg "hover": from-cyan-600 "hover":to-blue-700 transition-all duration-300";"
                        whileHover={ "scale": 1.05 }
                        whileTap={ "scale": 0.95 
}
                      >;
                        Learn More;
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />;"
                      </motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;"
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">;"
                      <div className="text-center">;"
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;"
                          <Rocket className="w-8 h-8 text-white" />;"
                        </div>;
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>;"
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
          className="py-16 px-4 "lg":px-8";"
          variants={containerVariants}
          initial="hidden";"
            <motion.p;
              className="text-xl text-gray-300 mb-8";"
              variants={itemVariants}
            >;
              Join the future of technology with Zion Tech Group's revolutionary solutions.;'
              Get started today and experience the power of AI consciousness and quantum computing.;
            </motion.p>;
                    </div>;
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>;`
                      <motion&& motion.button;
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg "hover": from-cyan-600 "hover":to-blue-700 transition-all duration-300";"
                        whileHover={ "scale": 1 && 1.05 }
                        whileTap={ "scale": 0 && 0.95 
}>;
                        Learn More;
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />;"
                      </motion && motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;"
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">;"
                      <div className="text-center">;"
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;"
                          <Rocket className="w-8 h-8 text-white" />;"
                        </div>;
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>;"
                      </div>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              </AnimatePresence>;
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
                    </div>;
                      <motion.button;
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg "hover": from-cyan-600 "hover":to-blue-700 transition-all duration-300";"
                        whileHover={ "scale": 1.05 }
                        whileTap={ "scale": 0.95 }
                        whileTap={ "scale": 0.95 
}
                      >;
                        Learn More;
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />;"
                      </motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;"
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">;"
                      <div className="text-center">;"
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;"
                          <Rocket className="w-8 h-8 text-white" />;"
                        </div>;
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>;"
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              </AnimatePresence>;
            </motion.div>;
          </div>;
        </motion.section>;
        {/* Call to Action */}
        <motion&& motion.section;
          className="py-16 px-4 "lg":px-8";"
          variants={containerVariants}
          initial="hidden";"
          animate="visible">;"
          <div className="max-w-4xl mx-auto text-center">;"
            <motion&& motion.h2;
              className="text-3xl "md":text-4xl font-bold text-white mb-6";"
            <motion.div;
              className="flex flex-col "sm":flex-row gap-4 justify-center items-center";"
              variants={itemVariants}>;
              <Link href="/quote">;"
                <motion&& motion.button;
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg "hover":from-cyan-600 "hover":to-blue-700 transition-all duration-300 transform "hover":scale-105";"
      {/* Performance Monitor */}
      <AnimatePresence>;
        {showPerformanceMonitor && (<PerformanceMonitor />;
        )}"duration": 0.8, "staggerChildren": 0.1;

}}}}}export default EnhancedHomepage;
}}}}}

export default EnhancedHomepage;
// Import service data;

      <AnimatePresence>;
        {showPerformanceMonitor && (
          <PerformanceMonitor />)}
      </AnimatePresence>;
    </>);
}
;
export default EnhancedHomepage;
;

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
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

      {/* Performance Monitor */}
      <AnimatePresence>
        {showPerformanceMonitor && (
          <PerformanceMonitor />
        )}
      </AnimatePresence>
    </>
  )
}
export default EnhancedHomepage;


>>>>>>> origin/cursor/delete-old-data-records-6bba
