
import { GradientHeading } from "./GradientHeading",
import Link from "next/link",
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",

// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string,
  name: string,
  description?: string,
  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string,
}

// Default static categories with translation keys
const getDefaultCategories = (t: any) => [
  {
    id: "services",
    name: t('categories.services'),
    description: t('categories.services_desc'),
    iconName: "Briefcase", // Corresponds to lucide icon name
    link: "/services",
    color: "from-purple-500 to-indigo-600", // Keep color for styling
  },
  {
    id: "talents",
    name: t('categories.talents'),
    description: t('categories.talents_desc'),
    iconName: "Users",
    link: "/talent",
    color: "from-cyan-500 to-blue-600"},
  {
    id: "equipment",
    name: t('categories.equipment'),
    description: t('categories.equipment_desc'),
    iconName: "HardDrive",
    link: "/equipment",
    color: "from-amber-500 to-orange-600"},
  {
    id: "innovation",
    name: t('categories.innovation'),
    description: t('categories.innovation_desc'),
    iconName: "Lightbulb",
    link: "/innovation",
    color: "from-emerald-500 to-green-600"}],

// Helper to get icon component from name
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case "Briefcase": return <Briefcase className="w-10 h-10" />,
    case "Users": return <Users className="w-10 h-10" />,
    case "HardDrive": return <HardDrive className="w-10 h-10" />,
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />,
    default: return <HelpCircle className="w-10 h-10" />, // Default icon
  }
},

const getSpecialServices = (t: any) => [
  {
    title: t('categories.it_onsite_services'),
    link: "/it-onsite-services"
  }
],

interface CategoriesSectionProps {
  showTitle?: boolean,
  className?: string,
  style?: React.CSSProperties,
  categories?: CategoryType[], // Accept categories as a prop
}

export function CategoriesSection({
  showTitle = true,
  className,
  style,
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {
  const { t } = useTranslation(),
  const defaultCategories = getDefaultCategories(t),
  
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories
  const displayCategories = fetchedCategories && fetchedCategories.length > 0
    ? fetchedCategories.map(cat => ({
        id: cat.id,
        title: cat.name, // Map name to title
        description: cat.description || "No description available.",
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link || `/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color || "from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({
        ...cat,
        title: cat.name,
        icon: getIcon(cat.iconName)})),

  // If fetchedCategories is an empty array, and we want to show nothing:
  if (fetchedCategories && fetchedCategories.length === 0) {
    return (
      <section className={cn("py-20 bg-zion-blue text-center", className)} style={style}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">{t('home.no_categories_title')}</h2>
          <p className="text-zion-slate-light text-lg mb-2">
            {t('home.no_categories_desc')}
          </p>
          <p className="text-zion-slate-light text-md">
            {t('home.no_categories_support')}
          </p>
        </div>
      </section>
    ),
  }

  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>{t('home.categories_title')}</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              {t('home.categories_subtitle')}
            </p>
          </motion.div>
        )}
        
<<<<<<< HEAD
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link to={category.link} className="group block h-full">
                <motion.div 
                  className={`rounded-xl overflow-hidden h-full border ${category.borderColor} ${category.bgColor} p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20`}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
<<<<<<< HEAD
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                        <Star className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-medium">Explore</span>
                    <div className="w-8 h-8 rounded-full bg-zion-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-4 h-4 text-zion-cyan" />
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
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
<<<<<<< HEAD

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
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
=======
            <GradientHeading>Explore Our Services</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
              Discover our comprehensive ecosystem of micro SAAS services, IT solutions, and innovative technology platforms
            </p>
            <div className="mt-6">
              <span className="inline-block bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full text-sm border border-zion-purple/30">
                ✨ {categories.length} Service Categories • 73+ Solutions Available
              </span>
            </div>
          </div>
        )}
        
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
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {getSpecialServices(t).map((service) => (
              <Link 
                key={service.title}
                href={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularCategories.map((category) => (
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
            >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-md p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:bg-white/10 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-zion-purple/20">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
<<<<<<< HEAD
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
=======
=======
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors">{category.title}</h3>
                <p className="text-zion-slate-light group-hover:text-zion-cyan/80 transition-colors">{category.description}</p>
=======
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-zion-cyan" />
              <span className="text-zion-cyan text-base font-semibold bg-zion-cyan/10 px-4 py-2 rounded-full">Explore Categories</span>
              <Sparkles className="w-7 h-7 text-zion-cyan" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Discover Our Ecosystem</h2>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive tech services, talent, equipment, and innovation solutions
            </p>
          </div>
        )}
        
        <div className="mt-12 flex justify-center">
          <Link 
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            {t('home.view_all_categories')}
          </Link>
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      </div>
    </section>
  ),
}
