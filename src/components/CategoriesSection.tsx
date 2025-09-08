import React from 'react';
import { Link    } from 'react-router-dom';
import { motion    } from 'framer-motion';
import { Briefcase, HardDrive, Lightbulb, Users, Brain, ArrowRight    } from 'lucide-react';

const categories = [
    {
        title: "Comprehensive Services",
        description: "Micro SAAS, IT services, and AI solutions",
        icon: <Briefcase className="w-10 h-10"/>,
        link: "/services",
        color: "from-zion-purple to-zion-purple-dark",
        gradient: "from-zion-purple/20 to-zion-purple-dark/20",
        features: ["24/7 Support", "Expert Team", "Custom Solutions"],
        stats: "500+ Services"
    },
    {
        title: "Talents",
        description: "Connect with AI experts, developers, and tech specialists",
        icon: <Users className="w-10 h-10"/>,
        link: "/talent",
        color: "from-zion-cyan to-zion-blue",
        gradient: "from-zion-cyan/20 to-zion-blue/20",
        features: ["AI Experts", "Global Network", "Verified Profiles"],
        stats: "10K+ Experts"
    },
    {
        title: "Equipment",
        description: "Rent or buy specialized hardware, servers, and devices",
        icon: <HardDrive className="w-10 h-10"/>,
        link: "/equipment",
        color: "from-zion-cyan-light to-zion-cyan",
        gradient: "from-zion-cyan-light/20 to-zion-cyan/20",
        features: ["High-Performance", "Flexible Rental", "24/7 Monitoring"],
        stats: "1000+ Devices"
    },
    {
        title: "Innovation",
        description: "Discover cutting-edge solutions and tech breakthroughs",
        icon: <Lightbulb className="w-10 h-10"/>,
        link: "/category/innovation",
        color: "from-zion-purple-light to-zion-purple",
        gradient: "from-zion-purple-light/20 to-zion-purple/20",
        features: ["Latest Tech", "AI Solutions", "Future-Ready"],
        stats: "100+ Innovations"
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
  }
]
interface CategoriesSectionProps {
  showTitle?: boolean
  className?: string
  style?: React.CSSProperties
  categories?: CategoryType[], // Accept categories as a prop
}
export function CategoriesSection({
  showTitle = true
  className
  style
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {
  const { t } = useTranslation()
  const defaultCategories = getDefaultCategories(t)
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories
  const displayCategories = fetchedCategories && fetchedCategories.length > 0
    ? fetchedCategories.map(cat => ({
        id: cat.id
        title: cat.name, // Map name to title
        description: cat.description |"No description available."
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link |`/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color |"from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({
        ...cat
        title: cat.name
        icon: getIcon(cat.iconName)}))
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
    )
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
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category,) => (
            <Link
              key = {category.id,}
              href = {category.link |'#',}
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
            {getSpecialServices(t).map((service,) => (
              <Link
                key = {service.title,}
                href = {service.link,}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors">{t('home.view_all_categories')}
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (<motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation. 
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>)}
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: anytrue }}
        >
          {categories.map((category, index)    => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={category.link} className="group block h-full">
                <motion.div className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:bg-zion-blue-dark" variants={cardVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
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
                    {category.features.map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>))}
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
                    <ArrowRight className="w-5 h-5 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300"/>
                  </div>
                </motion.div>
              </Link>
            </motion.div>))}
        </motion.div>
        
        {/* Enhanced featured services section */}
        <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specialServices.map((service, index) => (<motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ y: -4 }}>
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
              </motion.div>))}
          </div>
          
          {/* View all services button */}
          <motion.div className="text-center mt-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Link to="/comprehensive-services" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple border border-zion-purple/50 hover:border-zion-purple rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-zion-purple/25 font-semibold group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>);
}
