
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
import { Briefcase, HardDrive, Lightbulb, Users, HelpCircle } from "lucide-react"; // Added HelpCircle for default icon
import { cn } from "@/lib/utils";

const categories = [{
    title: "AI Services",
    description: "Cutting - edge AI solutions, chatbots, and machine learning",
    icon: "🤖",
    link: "/ai - services",
    color: "from - purple - 500 to - indigo - 600",
  },
  {
    title: "Micro SAAS",
    description: "Cloud - based software solutions for modern businesses",
    icon: "☁️",
    link: "/micro - saas",
    color: "from - cyan - 500 to - blue - 600",
  },
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "⚡",
    link: "/all - services",
    color: "from - amber - 500 to - orange - 600",
  },
  {
    title: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: "📈",
    link: "/all - services",
    color: "from - emerald - 500 to - green - 600",
  },
];

const specialServices = [{
    title: "IT Onsite Services",
    link: "/it - onsite - services"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive - services"
  },
  {
    title: "Services Comparison",
    link: "/services - comparison"
  }
];
=======

;
>>>>>>> main

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
          <motion.div"
            className="text-center mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Categories
            </h2>"
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>;) }
<<<<<<< HEAD

        <motion.div
          className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap-6"
          variants={containerVariants}
=======
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link || '#'}
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5px] group-hover:shadow-lg">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
              </Link>
            </motion.div>) ) }
        </motion.div>
<<<<<<< HEAD

        <motion.div
          className="mt-12"
=======
        
        <motion.div "
          className="mt-12"
>>>>>>> main
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >"
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>"
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 border border-blue-500/20 hover:border-blue-400/50 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                {service.title}"
                <span className="text-sm">→</span>
              </Link>
            ))}
          </div>
        </motion.div>
        >
          <Link"
            to="/services"
            className="group inline-flex items-center gap-3 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-light transition-colors text-lg font-medium py-2"

<<<<<<< HEAD
            View All Services < ArrowRight className="w-5 h-5 ml-2 group - hover:translate - x-1 transition -transform" />

        <motion.div
          className="mt-12 flex justify -center"
=======
            View All Services"
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"  />        
        <motion.div "
          className="mt-12 flex justify-center"
>>>>>>> main
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
<<<<<<< HEAD
          <Link
            to="/categories"
            className="text-cyan - 400 border-b border-cyan - 400 hover:border-cyan - 300 transition - colors flex items - center gap-2"
=======
          <Link "
            to="/categories"
            className="text-cyan-400 border-b border-cyan-400 hover:border-cyan-300 transition-colors flex items-center gap-2"
>>>>>>> main
          >
            View All Categories"
            <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>;
  )}}}}}}}}}}'"`