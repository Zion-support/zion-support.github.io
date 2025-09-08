
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600",
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
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600",
  },
];

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Services Overview",
    link: "/services-overview"
  },
  {
    title: "AI Services",
    link: "/ai-services"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  }
];

interface CategoriesSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  showTitle?: boolean
}

export function CategoriesSection({
  showTitle = true,
  className,
  style,
  ...props
}: CategoriesSectionProps) {
  return (
    <section
      className={cn("py-20 bg-zion-blue", className)}
      style={style}
      {...props}
    >
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
=======
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Categories
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover comprehensive solutions across all major technology domains
          </p>
        </motion.div>

        {/* Main Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              <p className="text-zion-slate-light text-sm mb-4">{category.description}</p>
              <Link 
                to={category.link}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
              >
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Categories */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Specialized Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access Links */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link 
                  to={service.link}
                  className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 text-center"
                >
                  <span className="text-zion-slate-light group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )}