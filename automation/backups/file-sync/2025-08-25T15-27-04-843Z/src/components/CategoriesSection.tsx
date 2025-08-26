
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";

const categories = [
  {
    title: "AI Services",
    description: "Cutting-edge AI solutions, chatbots, and machine learning",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-purple-500 to-indigo-600",
    gradient: "from-zion-purple to-zion-purple-dark",
  },
  {
    title: "Micro SAAS",
    description: "Cloud-based software solutions for modern businesses",
    icon: <Cloud className="w-10 h-10" />,
    link: "/micro-saas",
    color: "from-cyan-500 to-blue-600",
    gradient: "from-zion-cyan to-zion-blue",
  },
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: <Zap className="w-10 h-10" />,
    link: "/all-services",
    color: "from-amber-500 to-orange-600",
    gradient: "from-zion-cyan-light to-zion-cyan",
  },
  {
    title: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/all-services",
    color: "from-emerald-500 to-green-600",
    gradient: "from-zion-purple-light to-zion-purple",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Services Comparison",
    link: "/services-comparison"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-zion-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8ab1f3 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              href={category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <motion.div
                key={service.title}
                href={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                <Link 
                  to={service.link}
                  className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center gap-2"
                >
                  {service.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            href="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
