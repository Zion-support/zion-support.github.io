
<<<<<<< HEAD
        <motion.div
          className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap-6"
          variants={containerVariants}

        <motion.div
          className="mt-12"
=======
import { GradientHeading } from "./GradientHeading",
import Link from "next/link",
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils",

const categories = [{
    title: "AI Services",
    description: "Cutting - edge AI solutions, chatbots, and machine learning",
    icon: "🤖",
    link: "/ai - services",
    color: "from - purple - 500 to - indigo - 600"
  },
  {
    title: "Micro SAAS",
    description: "Cloud - based software solutions for modern businesses",
    icon: "☁️",
    link: "/micro - saas",
    color: "from - cyan - 500 to - blue - 600"
  },
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "⚡",
    link: "/all - services",
    color: "from - amber - 500 to - orange - 600"
  },
  {
    title: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: "📈",
    link: "/all - services",
    color: "from - emerald - 500 to - green - 600"
  }
],

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
],
=======

,

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
          </motion.div>,) }
        
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
        
        <motion.div "
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >"
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>"
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link
                key={service.title} // Key was already here, ensure 'to' is used
                to={service.link} // Changed href to to
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}"
                <span className="text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link
            to="/categories/all" // Changed href to to
            className="text-zion-cyan border-b border-zion-cyan hover: border-zion-cyan-dark transition-colors"
          >
            View All Categories"
            <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>,
  )}}}}}}}}}}'"`
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
