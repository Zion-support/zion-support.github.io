import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const categories = [;
  {;
    title: "AI Services",description: "Cutting-edge AI solutions, chatbots, and machine learning",;
    icon: "🤖",link: "/ai-services",color: "from-purple-500 to-indigo-600"
  };
  {;
    title: "Micro SAAS",description: "Cloud-based software solutions for modern businesses",icon: "☁️",link: "/micro-saas",color: "from-cyan-500 to-blue-600"
  };
  {;
    title: "IT Services",description: "Infrastructure, security, and technical consulting",;
    icon: "⚡",link: "/all-services",color: "from-amber-500 to-orange-600"
  };
  {;
    title: "Digital Transformation",description: "Business modernization and digital strategy",icon: "📈",link: "/all-services",color: "from-emerald-500 to-green-600"
  };
];
const specialServices = [;
  {;
    title: "IT Onsite Services",link: "/it-onsite-services"
  };
  {;
    title: "Comprehensive Services",link: "/comprehensive-services"
  };
  {;
    title: "Services Comparison",link: "/services-comparison"
  };
];
interface CategoriesSectionProps {;
  showTitle?: boolean,;
};

const containerVariants = {;
  hidden: { opacity: 0 };
  visible: {;
    opacity: 1,transition: {;
      staggerChildren: 0.1,delayChildren: 0.2;
    };
  };
};
const itemVariants = {;
  hidden: { y: 20, opacity: 0 };
  visible: {;
    y: 0,opacity: 1,transition: {;
      duration: 0.5,ease: "easeOut"
    };
  };
};
export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">;
      {/* Background pattern */};
      <div className="absolute inset-0 opacity-5">;
        <div className="absolute inset-0" style={{;
          backgroundImage: `radial-gradient(circle at 25% 25%, #8ab1f3 2px, transparent 2px)`
          backgroundSize: '50px 50px'
        }}></[^>]*>
      </[^>]*>
      ;
      <div className="container mx-auto px-4 relative z-10">;
        {showTitle && (;&& (; (
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.6 }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">;
              Explore Categories;
            </[^>]*>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">;
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </[^>]*>
          </[^>]*>
        )};
        ;
        <motion.div ;
          className="[^"]*"
          variants={containerVariants};
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }};
        >;
          {categories.map((category, index) => (;
            <motion.div
              key={category.title};
              variants={itemVariants};
              className="[^"]*"
            >;
              <Link to={category.link} className="block">;
                <div className="rounded-lg overflow-hidden h-full border border-blue-600 bg-slate-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/25">;
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                    <div className="text-white text-2xl">;
                      {category.icon};
                    </[^>]*>
                  </[^>]*>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</[^>]*>
                  <p className="text-gray-300 text-sm">{category.description}</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
        ;
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.4 }};
        >;
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</[^>]*>
          <div className="flex flex-wrap justify-center gap-4">;
            {specialServices.map((service) => (;
              <Link;
                key={service.title};
                to={service.link};
                className="[^"]*"
              >;
                {service.title};
                <span className="text-sm">→</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
        ;
        <motion.div ;
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          viewport={{ once: true }};
          transition={{ duration: 0.6, delay: 0.6 }};
        >;
          <Link ;
            to="/categories" ;
            className="[^"]*"
          >;
            View All Categories;
            <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};