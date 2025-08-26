import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
import { Briefcase, HardDrive, Lightbulb, Users, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
=======
const categories = [
  {
    title: "Comprehensive Services",
    description: "Micro SAAS, IT services, and AI solutions",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/comprehensive-services",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning services",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-solutions",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
];
const specialServices = [
  {
    title: "Enhanced AI & IT Services",
    link: "/enhanced-services"
  },
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "AI Development",
    link: "/ai-development"
  },
  {
    title: "Cloud Migration",
    link: "/cloud-migration"
  },
  {
    title: "Cybersecurity",
    link: "/cybersecurity"
  }
];
interface CategoriesSectionProps {
  showTitle?: boolean;
}
export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
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
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation. 
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>
        )}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Icon with enhanced background */}
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  {/* Title and description */}
                  <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="text-zion-cyan font-semibold text-sm mb-4">
                    {category.stats}
                  </div>
                  {/* CTA arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Enhanced featured services section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link to={service.link} className="group block">
                  <div className="px-6 py-4 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 border border-zion-purple/20 hover:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-zion-purple/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-zion-purple-light group-hover:text-zion-purple transition-colors">
                        {service.icon}
                      </div>
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                    <p className="text-zion-slate-light/80 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          {/* View all services button */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              to="/comprehensive-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple border border-zion-purple/50 hover:border-zion-purple rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-zion-purple/25 font-semibold group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
=======
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading className="mb-4">
              Explore Our Service Categories
            </GradientHeading>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover comprehensive solutions across multiple domains
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <Link
                href={category.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Specialized Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {specialServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
