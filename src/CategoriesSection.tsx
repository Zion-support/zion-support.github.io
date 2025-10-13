}
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Comprehensive Services"
    link: "/comprehensive - services"
}
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Services Comparison"
    link: "/services - comparison"
}
// Default static categories with translation keys;
const getDefaultCategories = (t: any,) => [;
const getDefaultCategories = (t: any) => [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: "services"
    name: t('categories.services')'
    description: t('categories.services_desc')'
    iconName: "Briefcase"
    link: "/services"
    color: "from-purple-500 to-indigo-600"
  }
  },

  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: "talents"
    name: t('categories.talents')'
    description: t('categories.talents_desc')'
    iconName: "Users"
    link: "/talent"
    color: "from-cyan-500 to-blue-600"
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: "equipment"
    name: t('categories.equipment')'
    description: t('categories.equipment_desc')'
    iconName: "HardDrive"
    link: "/equipment"
    color: "from-amber-500 to-orange-600"
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: "innovation"
    name: t('categories.innovation')'
    description: t('categories.innovation_desc')'
    iconName: "Lightbulb"
    link: "/innovation"
    color: "from-emerald-500 to-green-600"

    id: "innovation"
    name: t('categories.innovation'),'
    description: t('categories.innovation_desc'),'
    iconName: "Lightbulb"
    link: "/innovation"
    color: "from-emerald-500 to-green-600"

// Helper to get icon component from name;
const getIcon = (iconName?: string,) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  switch (iconName) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    case "Briefcase"w-10 h-10"
    case ": return <Users className="w-10 h-10"HardDrive": return <HardDrive className="
    case "Lightbulb"w-10 h-10"
    default: return <HelpCircle className="
  }
const getSpecialServices = (t: any,) => [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Micro SAAS"
    description: "Cloud - based software solutions for modern businesses"
    icon: "☁️"
    link: "/micro - saas"
    color: "from - cyan - 500 to - blue - 600"
},
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "IT Services"
    description: "Infrastructure, security, and technical consulting"
    icon: "⚡"
    link: "/all - services"
    color: "from - amber - 500 to - orange - 600"
},
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Digital Transformation"
    description: "Business modernization and digital strategy"
    icon: "📈"
    link: "/all - services"
    color: "from - emerald - 500 to - green - 600"
},
];
const special_services = [{
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "IT Onsite Services"
    link: "/it - onsite - services"
},
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Comprehensive Services"
    link: "/comprehensive - services"
},
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: "Services Comparison"
    link: "/services - comparison"
}
export function CategoriesSection({
  // TODO: Add properties
}
  // TODO: Add properties
}
  showTitle = true
  className
  style
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {;
const { t } = useTranslation();
const defaultCategories = getDefaultCategories(t)
    case "Briefcase"w-10 h-10"
    case ": return <Users className="w-10 h-10"HardDrive": return <HardDrive className="
    case "Lightbulb"w-10 h-10"
    default: return <HelpCircle className="
  }
},;
const getSpecialServices = (t: any) => [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: t('categories.it_onsite_services'),'
    link: "/it-onsite-services";
import { GradientHeading } from "./GradientHeading";";
import Link from ",";"@/lib/utils",";
import { useTranslation } from "react-i18 next";"
// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  name: string,
  description?: string,
  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.'
  link?: string
}

// Default static categories with translation keys;
const getDefaultCategories = (t: any) => [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: ","
    name: t('categories.services'),'
    description: t('categories.services_desc'),'
    iconName: ", // Corresponds to lucide icon name"
    link: ","
    color: ", // Keep color for styling"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: ","
    name: t('categories.talents'),'
    description: t('categories.talents_desc'),'
    iconName: ","
    link: ","
    color: "},"
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: ","
    name: t('categories.equipment'),'
    description: t('categories.equipment_desc'),'
    iconName: ","
    link: ","
    color: "},"
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: ","
    name: t('categories.innovation'),'
    description: t('categories.innovation_desc'),'
    iconName: ","
    link: ","
    color: "}],"
// Helper to get icon component from name;
const getIcon = (iconName?: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  switch (iconName) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    case ": return <Briefcase className="w-10 h-10"Users": return <Users className="
    case "HardDrive"w-10 h-10"
    case ": return <Lightbulb className="w-10 h-10"w-10 h-10"
  }
},;
const getSpecialServices = (t: any) => [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: t('categories.it_onsite_services'),'
    link: ""
  }
],
interface CategoriesSectionProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  showTitle?: boolean,
  className?: string,
  style?: React.CSSProperties,
  categories?: CategoryType[], // Accept categories as a prop
}
;
export function CategoriesSection({
  // TODO: Add properties
}
  // TODO: Add properties
}
  showTitle = true,
  className,
  style,
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {;
const { t } = useTranslation(),;
const defaultCategories = getDefaultCategories(t),

  // Use fetchedCategories if provided, otherwise fallback to defaultCategories;
const displayCategories = fetchedCategories && fetchedCategories.length > 0
    ? fetchedCategories.map(cat => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
        id: cat.id
        title: cat.name, // Map name to title
        description: cat.description |""
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link |`/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color |"}))"
    : defaultCategories.map(cat => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: cat.name,
        icon: getIcon(cat.iconName)})),

  // If fetchedCategories is an empty array, and we want to show nothing:
  if (fetchedCategories && fetchedCategories.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <section className={cn(", className)} style={style}>"
<div className="
<h2 className="text-3 xl font-semibold text-white mb-4"text-zion-slate-light text-lg mb-2"
            {t('home.no_categories_desc')}'
          </p>
<p className="
            {t('home.no_categories_support')}'

          </p></div>
</section>
    )

  }
const getSpecialServices = (t: any,) => [
  // TODO: Add items
]
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: t('categories && categories.it_onsite_services'),'
    link: "/it-onsite-services"
  }
]
interface CategoriesSectionProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  showTitle?: boolean
  className?: string
  style?: React && React.CSSProperties
  categories?: CategoryType[], // Accept categories as a prop
}
export function CategoriesSection(): any ({
  // TODO: Add properties
}
  // TODO: Add properties
}
  showTitle = true
  className
  style
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {;
const { t } = useTranslation();
const defaultCategories = getDefaultCategories(t)
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories;
const displayCategories = fetchedCategories && fetchedCategories.length > 0
    ? fetchedCategories && fetchedCategories.map(cat => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
        id: cat && cat.id,
        title: cat && cat.name, // Map name to title
        description: cat && cat.description || "No description available."
        icon: getIcon(cat && cat.iconName), // Get icon component
        link: cat && cat.link || `/category/${cat && cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories && defaultCategories.find(dc => dc && dc.id === cat && cat.id)?.color || "from-gray-500 to-gray-600"
    : defaultCategories && defaultCategories.map(cat => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
        ...cat
        title: cat && cat.name,
        icon: getIcon(cat && cat.iconName)})),
  // If fetchedCategories is an empty array, and we want to show nothing:
  if (fetchedCategories && fetchedCategories.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <section className={cn("py-20 bg-zion-blue text-center"
<div className="container mx-auto px-4"text-3 xl font-semibold text-white mb-4"
<p className="
            {t('home && home.no_categories_desc')}'
          </p>
<p className="text-zion-slate-light text-md"py-20 bg-zion-blue", className)} style={style}>"container mx-auto px-4"
        {showTitle && (
  // TODO: Add parameters
)
          <div className="
<GradientHeading>{t('home && home.categories_title')}</GradientHeading>'
<p className="text-zion-slate-light text-lg mt-4 max-w-2 xl mx-auto"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          {displayCategories.map((category,) => (
  // TODO: Add parameters
)
            <$2 />
              key = {category.id,}
              href = {category.link |'#',}'

        <div className="

          {displayCategories.map((category) => (
  // TODO: Add parameters
)
          {displayCategories.map((category,) => (
  // TODO: Add parameters
)
          {displayCategories.map((category) => (
  // TODO: Add parameters
)
            <$2 />
              key = {category.id,}
              href = {category.link |'#',}'

              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5 px] group-hover:shadow-lg"
<div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
<div className="
                    {category.icon}
                  </div></div>
<h3 className="text-white text-xl font-bold mb-2"text-zion-slate-light"
</Link>
          ))}
        </div></div>
        {/* Special services section with translations */}
        <div className="
<h3 className="text-center text-xl font-bold text-white mb-6"flex flex-wrap justify-center gap-4"
            {getSpecialServices(t).map((service,) => (
  // TODO: Add parameters
)
              <$2 />
                key = {service.title,}
                href = {service.link,}

                className="
              >
                {service.title}
              </Link>            ))}
          </div></div>
            {getSpecialServices(t).map((service) => (
  // TODO: Add parameters
)
              <$2 />
                key={service.title}
                href={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"/it-onsite-services"""
title: cat.name,  //Map name to title description: cat.description |""
icon: getIcon (cat.iconName), //Get icon component link: cat.link |`/category/$ {
  // TODO: Add properties
}
  // TODO: Add properties
}
  cat.id "
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories.find (dc => dc.id === cat.id) ?.color |"from-gray-500 to-gray-600"
}) ) : defaultCategories.map (cat => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
  ...cat
title: cat.name
icon: getIcon (cat.iconName)
}) )
//If fetchedCategories is an empty array, and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {
  // TODO: Add properties
}
  // TODO: Add properties
}
}>
<div className="container mx-auto px-4"text-3 xl font-semibold text-white mb-4"
  t ('home.no categories title') "
}</h2>
<p className="text-zion-slate-light text-lg mb-2"'"
}</p>
<p className="
  t ('home.no categories support')'
}return (</p></div>)
}</div></Link>) )
}</div> > {
  // TODO: Add properties
}
  // TODO: Add properties
}
  service.title
}</Link>) ) ""mt-12 flex justify-center"
<Link href=" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"}"'"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          {displayCategories && displayCategories.map((category,) => (
  // TODO: Add parameters
)
            <$2 />
              key = {category && category.id,}
              href = {category && category.link || '#',}'
              className="
<div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5 px] group-hover:shadow-lg"text-white"
                    {category && category.icon}
                  </div></$1>
<h3 className="
<p className="text-zion-slate-light"mt-8"
<h3 className="
<div className="flex flex-wrap justify-center gap-4"px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
                {service && service.title}
              </Link>            ))}
          </div></$1>
<div className="
<$2 />
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"No description available.","from - gray - 500 to - gray - 600"}))"py - 20 bg - zion - blue text - center", class_name)} style={style}>"container mx - auto px - 4"
<h2 className="
<p className="text - zion - slate - light text - lg mb - 2"text - zion - slate - light text - md"
            {t ('home.no_categories_support')}'
          </p></$1>
</$1>)
  }
  return (
  // TODO: Add parameters
)
    <section className={cn (", class_name)} style={style}>"
<div className="
        {show_title && (
  // TODO: Add parameters
)
          <div className="text - center mb - 16"text - zion - slate - light text - lg mt - 4 max - w-2 xl mx - auto"
              {t ('home.categories_subtitle')}'
            </p></$1>)}
        <div className="
          {display_categories.map ((category, ) => (
  // TODO: Add parameters
)
            <;$2 />
              key = {category.id, }
              href = {category.link || '#', }'
              className="group block rounded - lg focus:outline - none focus:ring - 2 focus:ring - zion - cyan"rounded - lg overflow - hidden h - full border border - zion - blue - light bg - zion - blue - dark p - 6 transition - all duration - 300 group - hover:border - zion - purple / 50 group - focus:border - zion - purple / 50 hover:translate - y-[-5 px] group - hover:shadow - lg"
<div className={`rounded - full w - 16 h - 16 bg - gradient - to - br ${category.color} flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}>
<div className="
                    {category.icon}
                  </div></$1>
<h3 className="text - white text - xl font - bold mb - 2"text - zion - slate - light"
</$1>))}
        </div>
        {/* Special services section with translations */}
        <div className="
<h3 className="text - center text - xl font - bold text - white mb - 6"flex flex - wrap justify - center gap - 4"
            {getSpecialServices (t).map ((service, ) => (
  // TODO: Add parameters
)
              <;$2 />
                key = {service.title, }
                href = {service.link, }
                className="
              >
                {service.title}
              </Link>            ))}
          </div></$1>
<div className="mt - 12 flex justify - center"/categories / all""text - zion - cyan border - b border - zion - cyan hover:border - zion - cyan - dark transition - colors"
          >
            {t ('home.view_all_categories')}'
          </Link></$1>
</$1></$1>)
  switch (icon_name) {
  // TODO: Add properties
}
  // TODO: Add properties
}
const getSpecialServices = (t: any) =>: any [ {
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: t ('categories.it onsite services')'
link: ""
}]
interface CategoriesSectionProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  show_title?: boolean
class_name?: string
style?: React.CSSProperties
categories?: CategoryType[], //Accept categories as a prop
}export /**;
 * CategoriesSection - Function description
 */
function CategoriesSection() {;
const {
  // TODO: Add properties
}
  // TODO: Add properties
}
  t
}= use_translation ();
const default_categories = getDefaultCategories (t)
//Use fetched_categories if provided, otherwise fallback to default_categories const display_categories = fetched_categories && fetched_categories.length > 0 ? fetched_categories.map (cat => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: cat.id;"
title: cat.name,  //Map name to title description: cat.description || "No description available."
icon: get_icon (cat.icon_name), //Get icon component link: cat.link || `/category/$ {
  // TODO: Add properties
}
  // TODO: Add properties
}
  cat.id ""from - gray - 500 to - gray - 600""container mx - auto px - 4"
<h2 className="
  t ('home.no categories title') "'"text - zion - slate - light text - lg mb - 2"
  t ('home.no categories desc') "
}</p>
<p className="text - zion - slate - light text - md""
}</div></div>
<div className="
<Link href="/categories / all"text - zion - cyan border - b border - zion - cyan hover:border - zion - cyan - dark transition - colors"
  t ('home.view all categories')'
}</Link></div>
</div></section>)
}'"'"
