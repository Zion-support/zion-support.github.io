}
  {
    title: "Comprehensive Services"
    link: "/comprehensive - services"
}
  {
    title: "Services Comparison"
    link: "/services - comparison"
}
// Default static categories with translation keys

<<<<<<< HEAD
color: defaultCategories.find(dc => dc.id === cat.id)?.color |"from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({
        ...cat
import { GradientHeading } from "./GradientHeading"
import Link from "next/link"
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string
  name: string
  description?: string
        ...cat;
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";

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
  description?: string
  description?: string,
  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string
}
  description?: string,
  description?: string
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string
 * CategoriesSection function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
const categories = [{
    title: "AI Services"
    description: "Cutting - edge AI solutions, chatbots, and machine learning"
    icon: "🤖"
    link: "/ai - services"
    color: "from - purple - 500 to - indigo - 600",
}
  {
    title: "Micro SAAS"
    description: "Cloud - based software solutions for modern businesses"
    icon: "☁️"
    link: "/micro - saas"
    color: "from - cyan - 500 to - blue - 600",
}
  {
    title: "IT Services"
    description: "Infrastructure, security, and technical consulting"
    icon: "⚡"
    link: "/all - services"
    color: "from - amber - 500 to - orange - 600",
}
  {
    title: "Digital Transformation"
    description: "Business modernization and digital strategy"
    icon: "📈"
    link: "/all - services"
    color: "from - emerald - 500 to - green - 600",
}
]
const specialServices = [{
    title: "IT Onsite Services"
    link: "/it - onsite - services"
},
  {
    title: "Comprehensive Services",
    link: "/comprehensive - services"
},
  {
    title: "Services Comparison",
    link: "/services - comparison"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
  {
    title: "Comprehensive Services"
    link: "/comprehensive - services"
}
  {
    title: "Services Comparison"
    link: "/services - comparison"
<<<<<<< HEAD
// Default static categories with translation keys

const getDefaultCategories = (t: any,) => [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
// Default static categories with translation keys

const getDefaultCategories = (t: any,) => [
const getDefaultCategories = (t: any) => [
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const getDefaultCategories = (t: any,) => [
const getDefaultCategories = (t: any) => [
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    id: "services"
    name: t('categories.services')
    description: t('categories.services_desc')
    iconName: "Briefcase", // Corresponds to lucide icon name
    link: "/services"
    color: "from-purple-500 to-indigo-600", // Keep color for styling
<<<<<<< HEAD
<<<<<<< HEAD
  }
ursor/fix-website-loading-errors-and-merge-6662
  {
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },


  {
    id: "talents"
    name: t('categories.talents')
    description: t('categories.talents_desc')
    iconName: "Users"
    link: "/talent"
    color: "from-cyan-500 to-blue-600"}
  {
    id: "equipment"
    name: t('categories.equipment')
    description: t('categories.equipment_desc')
    iconName: "HardDrive"
    link: "/equipment"
    color: "from-amber-500 to-orange-600"}
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "innovation"
    name: t('categories.innovation')
    description: t('categories.innovation_desc')
    iconName: "Lightbulb"
    link: "/innovation"
    color: "from-emerald-500 to-green-600"}]
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: "innovation",
    name: t('categories.innovation'),
    description: t('categories.innovation_desc'),
    iconName: "Lightbulb",
    link: "/innovation",
    color: "from-emerald-500 to-green-600"}],

<<<<<<< HEAD
<<<<<<< HEAD
// Helper to get icon component from name
const getIcon = (iconName?: string) => {
=======
// Helper to get icon component from name
const getIcon = (iconName?: string,) => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  switch (iconName) {
    case "Briefcase": return <Briefcase className="w-10 h-10" />
    case "Users": return <Users className="w-10 h-10" />
    case "HardDrive": return <HardDrive className="w-10 h-10" />
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />
    default: return <HelpCircle className="w-10 h-10" />, // Default icon
  }
}
const getSpecialServices = (t: any,) => [
  {
<<<<<<< HEAD
    title: t('categories.it_onsite_services')
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
=======


// Helper to get icon component from name
const getIcon = (iconName?: string,) => {
  switch (iconName) {

    title: "AI Services",
    description: "Cutting - edge AI solutions, chatbots, and machine learning",
    icon: "🤖",
    link: "/ai - services",
    color: "from - purple - 500 to - indigo - 600", ,
},
  {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title: "Micro SAAS",
    description: "Cloud - based software solutions for modern businesses",
    icon: "☁️",
    link: "/micro - saas",
    color: "from - cyan - 500 to - blue - 600", ,
},
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: "⚡",
    link: "/all - services",
    color: "from - amber - 500 to - orange - 600", ,
},
  {
    title: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: "📈",
    link: "/all - services",
    color: "from - emerald - 500 to - green - 600", ,
},
];
const special_services = [{
    title: "IT Onsite Services",
    link: "/it - onsite - services";
},
  {
    title: "Comprehensive Services",
    link: "/comprehensive - services";
},
  {
    title: "Services Comparison",
    link: "/services - comparison";
}
<<<<<<< HEAD
// Default static categories with translation keys;
const getDefaultCategories = (t: any, ) =>: any [;
  {
    id: "services",
    name: t ('categories.services'),
    description: t ('categories.services_desc'),
    icon_name: "Briefcase", // Corresponds to lucide icon name;
    link: "/services",
    color: "from - purple - 500 to - indigo - 600", // Keep color for styling;
  }
  {
    id: "talents",
    name: t ('categories.talents'),
    description: t ('categories.talents_desc'),
    icon_name: "Users",
    link: "/talent",
    color: "from - cyan - 500 to - blue - 600"},
  {
    id: "equipment",
    name: t ('categories.equipment'),
    description: t ('categories.equipment_desc'),
    icon_name: "HardDrive",
    link: "/equipment",
    color: "from - amber - 500 to - orange - 600"},
  {
    id: "innovation",
    name: t ('categories.innovation'),
    description: t ('categories.innovation_desc'),
    icon_name: "Lightbulb",
    link: "/innovation",
    color: "from - emerald - 500 to - green - 600"}],
// Helper to get icon component from name;
const get_icon = (icon_name?: string, ) =>: any {
  switch (icon_name) {
    case "Briefcase": return <Briefcase className="w - 10 h - 10" />;
    case "Users": return <Users className="w - 10 h - 10" />;
    case "HardDrive": return <HardDrive className="w - 10 h - 10" />;
    case "Lightbulb": return <Lightbulb className="w - 10 h - 10" />;
    default: return <HelpCircle className="w - 10 h - 10" />, // Default icon;

  }
}
const getSpecialServices = (t: any, ) =>: any [;
  {

    title: t ('categories.it_onsite_services'),
    link: "/it - onsite - services";

  }
];
export function CategoriesSection({ showTitle = true }) {
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
  hidden: { y: 30,
  opacity: 0 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    case "Briefcase": return <Briefcase className="w-10 h-10" />,
    case "Users": return <Users className="w-10 h-10" />,
    case "HardDrive": return <HardDrive className="w-10 h-10" />,
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />,
    default: return <HelpCircle className="w-10 h-10" />, // Default icon
  }
},
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
  hidden: { scale: 0.95,
  opacity: 0 

const getSpecialServices = (t: any) => [
  {
    title: t('categories.it_onsite_services'),
    link: "/it-onsite-services"
import { GradientHeading } from "./GradientHeading",;
import Link from "next/link",;
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon;
import { cn } from "@/lib/utils",;
import { useTranslation } from "react-i18next",;
// This is the type definition copied from Categories.tsx for consistency.;
// Ideally, this would be in a shared types file.;
interface CategoryType {;
  id: string,;
  name: string,;
  description?: string,;
  iconName?: string, // Example field if categories have icons;
  itemCount?: number, // Example field for number of items in a category;
  // Add a 'link' property if your API provides it, or construct it.;
  link?: string;
}
;
// Default static categories with translation keys;
const getDefaultCategories = (t: any) => [;
  {;
    id: "services",;
    name: t('categories.services'),;
    description: t('categories.services_desc'),;
    iconName: "Briefcase", // Corresponds to lucide icon name;
    link: "/services",;
    color: "from-purple-500 to-indigo-600", // Keep color for styling;
  },;
  {;
    id: "talents",;
    name: t('categories.talents'),;
    description: t('categories.talents_desc'),;
    iconName: "Users",;
    link: "/talent",;
    color: "from-cyan-500 to-blue-600"},;
  {;
    id: "equipment",;
    name: t('categories.equipment'),;
    description: t('categories.equipment_desc'),;
    iconName: "HardDrive",;
    link: "/equipment",;
    color: "from-amber-500 to-orange-600"},;
  {;
    id: "innovation",;
    name: t('categories.innovation'),;
    description: t('categories.innovation_desc'),;
    iconName: "Lightbulb",;
    link: "/innovation",;
    color: "from-emerald-500 to-green-600"}],;
// Helper to get icon component from name;
const getIcon = (iconName?: string) => {;
  switch (iconName) {;
    case "Briefcase": return <Briefcase className="w-10 h-10" />,;
    case "Users": return <Users className="w-10 h-10" />,;
    case "HardDrive": return <HardDrive className="w-10 h-10" />,;
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />,;
    default: return <HelpCircle className="w-10 h-10" />, // Default icon;
  }
},;
const getSpecialServices = (t: any) => [;
  {;
    title: t('categories.it_onsite_services'),;
    link: "/it-onsite-services";
  }
],;
interface CategoriesSectionProps {;
  showTitle?: boolean,;
  className?: string,;
  style?: React.CSSProperties,;
  categories?: CategoryType[], // Accept categories as a prop;
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
        id: cat.id
        title: cat.name, // Map name to title
        description: cat.description |"No description available."
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link |`/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color |"from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({
<<<<<<< HEAD
        title: cat.name
        icon: getIcon(cat.iconName)}))
        icon: getIcon(cat.iconName)})),

        ...cat
        title: cat.name
        icon: getIcon(cat.iconName)}))
        ...cat,
        ...cat,
        title: cat.name,
        icon: getIcon(cat.iconName)})),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        ...cat,
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
<<<<<<< HEAD
// Default static categories with translation keys;
const getDefaultCategories = (t: any, ) =>: any [;
  {
    id: "services",
    name: t ('categories.services'),
    description: t ('categories.services_desc'),
    icon_name: "Briefcase", // Corresponds to lucide icon name;
    link: "/services",
    color: "from - purple - 500 to - indigo - 600", // Keep color for styling;
  }
  {
    id: "talents",
    name: t ('categories.talents'),
    description: t ('categories.talents_desc'),
    icon_name: "Users",
    link: "/talent",
    color: "from - cyan - 500 to - blue - 600"},
  {
    id: "equipment",
    name: t ('categories.equipment'),
    description: t ('categories.equipment_desc'),
    icon_name: "HardDrive",
    link: "/equipment",
    color: "from - amber - 500 to - orange - 600"},
  {
    id: "innovation",
    name: t ('categories.innovation'),
    description: t ('categories.innovation_desc'),
    icon_name: "Lightbulb",
    link: "/innovation",
    color: "from - emerald - 500 to - green - 600"}],
// Helper to get icon component from name;
const get_icon = (icon_name?: string, ) =>: any {
  switch (icon_name) {
    case "Briefcase": return <Briefcase className="w - 10 h - 10" />;
    case "Users": return <Users className="w - 10 h - 10" />;
    case "HardDrive": return <HardDrive className="w - 10 h - 10" />;
    case "Lightbulb": return <Lightbulb className="w - 10 h - 10" />;
    default: return <HelpCircle className="w - 10 h - 10" />, // Default icon;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { GradientHeading } from "./GradientHeading",;
import Link from "next/link",;
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon;
import { cn } from "@/lib/utils",;
import { useTranslation } from "react-i18next",;
;
// This is the type definition copied from Categories.tsx for consistency.;
// Ideally, this would be in a shared types file.;
interface CategoryType {;
  id:string,;
  name:string,;
  description?:string,;
  iconName?:string, // Example field if categories have icons;
  itemCount?:number, // Example field for number of items in a category;
  // Add a 'link' property if your API provides it, or construct it.;
  link?:string,;
}
;
// Default static categories with translation keys;
const getDefaultCategories = (t:any) => [;
  {;
    id:"services",;
    name:t('categories.services'),;
    description:t('categories.services_desc'),;
    iconName:"Briefcase", // Corresponds to lucide icon name;
    link:"/services",;
    color:"from-purple-500 to-indigo-600", // Keep color for styling;
  },;
  {;
    id:"talents",;
    name:t('categories.talents'),;
    description:t('categories.talents_desc'),;
    iconName:"Users",;
    link:"/talent",;
    color:"from-cyan-500 to-blue-600"},;
  {;
    id:"equipment",;
    name:t('categories.equipment'),;
    description:t('categories.equipment_desc'),;
    iconName:"HardDrive",;
    link:"/equipment",;
    color:"from-amber-500 to-orange-600"},;
  {;
    id:"innovation",;
    name:t('categories.innovation'),;
    description:t('categories.innovation_desc'),;
    iconName:"Lightbulb",;
    link:"/innovation",;
    color:"from-emerald-500 to-green-600"}],;
;
// Helper to get icon component from name;
const getIcon = (iconName?:string) => {;
  switch (iconName) {;
    case "Briefcase":return <Briefcase className="w-10 h-10" />,;
    case "Users":return <Users className="w-10 h-10" />,;
    case "HardDrive":return <HardDrive className="w-10 h-10" />,;
    case "Lightbulb":return <Lightbulb className="w-10 h-10" />,;
    default:return <HelpCircle className="w-10 h-10" />, // Default icon;
  }
},;
;
const getSpecialServices = (t:any) => [;
  {;
    title:t('categories.it_onsite_services'),;
    link:"/it-onsite-services";  }
],;
;
interface CategoriesSectionProps {;
  showTitle?:boolean,;
  className?:string,;
  style?:React.CSSProperties,;
  categories?:CategoryType[], // Accept categories as a prop;
}


          </p>;
        </div>;
      </section>;
    );
<<<<<<< HEAD
  }
ursor/fix-website-loading-errors-and-merge-6662
        </div>;
      </section>;
    );

          </p>
        </div>
      </section>
    )
  }
          </p>;
        </div>;
      </section>;
    );
  }

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category,) => (
            <Link
              key = {category.id,}
              href = {category.link |'#',}
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
;
export function CategoriesSection({;
  showTitle = true,;
  className,;
  style,;
  categories:fetchedCategories, // Rename prop for clarity;
} CategoriesSectionProps) {;
  const { t } = useTranslation(),;
  const defaultCategories = getDefaultCategories(t),;
  ;
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories;
  const displayCategories = fetchedCategories && fetchedCategories.length > 0;
    ? fetchedCategories.map(cat => ({;
        id:cat.id,;
        title:cat.name, // Map name to title;
        description:cat.description || "No description available.",;
        icon:getIcon(cat.iconName), // Get icon component;
        link:cat.link || `/category/${cat.id}`, // Construct link if not provided;
        // Assign a default color or implement logic to assign colors;
        color:defaultCategories.find(dc => dc.id === cat.id)?.color || "from-gray-500 to-gray-600"}));
    :defaultCategories.map(cat => ({;
        ...cat,;
        title:cat.name,;
        icon:getIcon(cat.iconName)})),;
;
  // If fetchedCategories is an empty array, and we want to show nothing:;
  if (fetchedCategories && fetchedCategories.length === 0) {;
    return (;
      <section className={cn("py-20 bg-zion-blue text-center", className)} style={style}>;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-semibold text-white mb-4">{t('home.no_categories_title')}</h2>;
          <p className="text-zion-slate-light text-lg mb-2">;
            {t('home.no_categories_desc')}
          </p>;
          <p className="text-zion-slate-light text-md">;
            {t('home.no_categories_support')}
          </p>;
        </div>;
      </section>;
    ),;
  }
;
  return (;
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        {showTitle && (;
          <div className="text-center mb-16">;
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => (
          {displayCategories.map((category,) => (
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link || '#'}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        </div>
        </div>;
=======


        </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
<<<<<<< HEAD
        </div>
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

        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            {getSpecialServices(t).map((service) => (
              <Link 
                key={service.title}
                href={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>;
            ))}
          </div>
        </div>
        
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="mt-12 flex justify-center">
          <Link
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            {t('home.view_all_categories')}
<<<<<<< HEAD
          </Link>
        </div>
      </div>
=======
export function CategoriesSection({
  showTitle = true
  className
  style
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {
  const { t } = useTranslation()
  const defaultCategories = getDefaultCategories(t)
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
import { GradientHeading } from "./GradientHeading",;
import Link from "next/link",;
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon;
import { cn } from "@/lib/utils",;
import { useTranslation } from "react-i18next",;
// This is the type definition copied from Categories.tsx for consistency.;
// Ideally, this would be in a shared types file.;
interface CategoryType {;
  id: string,;
  name: string,;
  description?: string,;
  iconName?: string, // Example field if categories have icons;
  itemCount?: number, // Example field for number of items in a category;
  // Add a 'link' property if your API provides it, or construct it.;
  link?: string;
}
;
// Default static categories with translation keys;
const getDefaultCategories = (t: any) => [;
  {;
    id: "services",;
    name: t('categories.services'),;
    description: t('categories.services_desc'),;
    iconName: "Briefcase", // Corresponds to lucide icon name;
    link: "/services",;
    color: "from-purple-500 to-indigo-600", // Keep color for styling;
  },;
  {;
    id: "talents",;
    name: t('categories.talents'),;
    description: t('categories.talents_desc'),;
    iconName: "Users",;
    link: "/talent",;
    color: "from-cyan-500 to-blue-600"},;
  {;
    id: "equipment",;
    name: t('categories.equipment'),;
    description: t('categories.equipment_desc'),;
    iconName: "HardDrive",;
    link: "/equipment",;
    color: "from-amber-500 to-orange-600"},;
  {;
    id: "innovation",;
    name: t('categories.innovation'),;
    description: t('categories.innovation_desc'),;
    iconName: "Lightbulb",;
    link: "/innovation",;
    color: "from-emerald-500 to-green-600"}],;
// Helper to get icon component from name;
const getIcon = (iconName?: string) => {;
  switch (iconName) {;
    case "Briefcase": return <Briefcase className="w-10 h-10" />,;
    case "Users": return <Users className="w-10 h-10" />,;
    case "HardDrive": return <HardDrive className="w-10 h-10" />,;
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />,;
    default: return <HelpCircle className="w-10 h-10" />, // Default icon;
  }
},;
const getSpecialServices = (t: any) => [;
  {;
    title: t('categories.it_onsite_services'),;
    link: "/it-onsite-services";
  }
],;
interface CategoriesSectionProps {;
  showTitle?: boolean,;
  className?: string,;
  style?: React.CSSProperties,;
  categories?: CategoryType[], // Accept categories as a prop;
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
        id: cat.id
        title: cat.name, // Map name to title
        description: cat.description |"No description available."
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link |`/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color |"from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({


        ...cat,
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


import React from 'react';
        color: defaultCategories && defaultCategories.find(dc => dc && dc.id === cat && cat.id)?.color || "from-gray-500 to-gray-600"}));
    : defaultCategories && defaultCategories.map(cat => ({;
        ...cat;
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon;
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
// This is the type definition copied from Categories && Categories.tsx for consistency.;
// Ideally, this would be in a shared types file.;
interface CategoryType {;
  id: string,;
  name: string,;
  description?: string;
  iconName?: string, // Example field if categories have icons;
  itemCount?: number, // Example field for number of items in a category;
  // Add a 'link' property if your API provides it, or construct it.;
  link?: string;
 * CategoriesSection function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;
 */;
function CategoriesSection(): any ({ showTitle = true }: CategoriesSectionProps) {;

const categories = [{;
    title: "AI Services",;
    description: "Cutting - edge AI solutions, chatbots, and machine learning",;
    icon: "🤖",;
    link: "/ai - services",;
    color: "from - purple - 500 to - indigo - 600",,;
},;
  {;
    title: "Micro SAAS",;
    description: "Cloud - based software solutions for modern businesses",;
    icon: "☁️",;
    link: "/micro - saas",;
    color: "from - cyan - 500 to - blue - 600",,;
},;
  {;
    title: "IT Services",;
    description: "Infrastructure, security, and technical consulting",;
    icon: "⚡",;
    link: "/all - services",;
    color: "from - amber - 500 to - orange - 600",,;
},;
  {;
    title: "Digital Transformation",;
    description: "Business modernization and digital strategy",;
    icon: "📈",;
    link: "/all - services",;
    color: "from - emerald - 500 to - green - 600",,;
},;
];
const specialServices = [{;
    title: "IT Onsite Services",;
    link: "/it - onsite - services";
},;
  {;
    title: "Comprehensive Services",;
    link: "/comprehensive - services";
},;
  {;
    title: "Services Comparison",;
    link: "/services - comparison";
}

// Default static categories with translation keys;
const getDefaultCategories = (t: any,) => [;
  {;
    id: "services",;
    name: t('categories && categories.services'),;
    description: t('categories && categories.services_desc'),;
    iconName: "Briefcase", // Corresponds to lucide icon name;
    link: "/services",;
    color: "from-purple-500 to-indigo-600", // Keep color for styling;
  };
  {;
    id: "talents",;
    name: t('categories && categories.talents'),;
    description: t('categories && categories.talents_desc'),;
    iconName: "Users",;
    link: "/talent",;
    color: "from-cyan-500 to-blue-600"},;
  {;
    id: "equipment",;
    name: t('categories && categories.equipment'),;
    description: t('categories && categories.equipment_desc'),;
    iconName: "HardDrive",;
    link: "/equipment",;
    color: "from-amber-500 to-orange-600"},;
  {;
    id: "innovation",;
    name: t('categories && categories.innovation'),;
    description: t('categories && categories.innovation_desc'),;
    iconName: "Lightbulb",;
    link: "/innovation",;
    color: "from-emerald-500 to-green-600"}],;
// Helper to get icon component from name;
const getIcon = (iconName?: string,) => {;
  switch (iconName) {;
    case "Briefcase": return <Briefcase className="w-10 h-10" />;
    case "Users": return <Users className="w-10 h-10" />;
    case "HardDrive": return <HardDrive className="w-10 h-10" />;
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />;
    default: return <HelpCircle className="w-10 h-10" />, // Default icon;
  }
};

const getSpecialServices = (t: any,) => [;
  {;
    title: t('categories && categories.it_onsite_services'),;
    link: "/it-onsite-services";
=======
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  t ;
}= useTranslation ();
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({;
<<<<<<< HEAD
=======
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        {showTitle && (;
          <div className="text-center mb-16">;
            <GradientHeading>{t('home && home.categories_title')}</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              {t('home && home.categories_subtitle')}
            </p>;
          </div>;
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category,) => (
            <Link
              key = {category.id,}
              href = {category.link |'#',}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: cat.id;"
title: cat.name,  //Map name to title description: cat.description |"No description available."
icon: getIcon (cat.iconName), //Get icon component link: cat.link |`/category/$ {
  cat.id "
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories.find (dc => dc.id === cat.id) ?.color |"from-gray-500 to-gray-600"
}) ) : defaultCategories.map (cat => ({
  ...cat
title: cat.name
icon: getIcon (cat.iconName)
}) )
//If fetchedCategories is an empty array, and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {
}> <div className="container mx-auto px-4" > <h2 className="text-3xl font-semibold text-white mb-4" > {'
  t ('home.no categories title') "
}</h2> <p className="text-zion-slate-light text-lg mb-2" > {'
  t ('home.no categories desc') "
}</p> <p className="text-zion-slate-light text-md" > {'
  t ('home.no categories support')
}return (</p> </div>)
}</div> </Link>) )
}</div> > {
  service.title
}</Link>) ) "
}</div> </div> <div className="mt-12 flex justify-center" > <Link href="/categories/all" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors" > {'
  t ('home.view all categories')
}</Link> </div> </div> </section>)
}'"}

=======
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
        </div>;


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
            {getSpecialServices(t).map((service) => (
              <Link 
                key={service.title}
                href={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>;
            ))}
          </div>
        </div>
        


        <div className="mt-12 flex justify-center">
          <Link
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            {t('home.view_all_categories')}


  t ;
}= useTranslation ();
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({;


  id: cat.id;"
title: cat.name,  //Map name to title description: cat.description |"No description available."
icon: getIcon (cat.iconName), //Get icon component link: cat.link |`/category/$ {
  cat.id "
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories.find (dc => dc.id === cat.id) ?.color |"from-gray-500 to-gray-600"
}) ) : defaultCategories.map (cat => ({
  ...cat
title: cat.name
icon: getIcon (cat.iconName)
}) )
//If fetchedCategories is an empty array, and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {
}> <div className="container mx-auto px-4" > <h2 className="text-3xl font-semibold text-white mb-4" > {'
  t ('home.no categories title') "
}</h2> <p className="text-zion-slate-light text-lg mb-2" > {'
  t ('home.no categories desc') "
}</p> <p className="text-zion-slate-light text-md" > {'
  t ('home.no categories support')
}return (</p> </div>)
}</div> </Link>) )
}</div> > {
  service.title
}</Link>) ) "
}</div> </div> <div className="mt-12 flex justify-center" > <Link href="/categories/all" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors" > {'
  t ('home.view all categories')
}</Link> </div> </div> </section>)
}'"}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;
          {displayCategories && displayCategories.map((category,) => (;
            <Link
              key = {category && category.id,}
              href = {category && category.link || '#',}
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan">;
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5px] group-hover:shadow-lg">;
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category && category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <div className="text-white">;
                    {category && category.icon}
                  </div>;
                </div>;
                <h3 className="text-white text-xl font-bold mb-2">{category && category.title}</h3>;
                <p className="text-zion-slate-light">{category && category.description}</p>;
              </div>;
            </Link>;
          ))}
        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Special services section with translations */}
        <div className="mt-8">;
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home && home.featured_services')}</h3>;
          <div className="flex flex-wrap justify-center gap-4">;
            {getSpecialServices(t).map((service,) => (;
              <Link
                key = {service && service.title,}
                href = {service && service.link,}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300">;
                {service && service.title}
              </Link>            ))}
          </div>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mt-12 flex justify-center">;
          <Link
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors">;
            {t('home && home.view_all_categories')}
<<<<<<< HEAD
<<<<<<< HEAD
            <GradientHeading>{t('home.categories_title')}</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              {t('home.categories_subtitle')}
            </p>;
          </div>;
        )}
        ;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;
          {displayCategories.map((category) => (;
            <Link;
              key={category.id}
              href={category.link || '#'}
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan";
            >;
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5px] group-hover:shadow-lg">;
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <div className="text-white">;
                    {category.icon}
                  </div>;
                </div>;
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>;
                <p className="text-zion-slate-light">{category.description}</p>;
              </div>;
            </Link>;          ))}
        </div>;
        ;
        {/* Special services section with translations */}
        <div className="mt-8">;
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>;
          <div className="flex flex-wrap justify-center gap-4">;
            {getSpecialServices(t).map((service) => (;
              <Link ;
                key={service.title}
                href={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300";
              >;
                {service.title}
              </Link>;
            ))}
          </div>;
        </div>;
        ;
        <div className="mt-12 flex justify-center">;
          <Link ;
            href="/categories/all";
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors";
          >;
            {t('home.view_all_categories')}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Link>;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
<<<<<<< HEAD
  switch (iconName) {;
};
const getSpecialServices = (t: any) => [ {;
  title: t ('categories && categories.it onsite services');
link: "/it-onsite-services" ;
}];
interface CategoriesSectionProps {;
  showTitle?: boolean;
className?: string;
style?: React && React.CSSProperties;
categories?: CategoryType[], //Accept categories as a prop ;
}export function CategoriesSection(): any ({;
  showTitle = true;
className;
style;
categories: fetchedCategories, //Rename prop for clarity ;
}: CategoriesSectionProps) {;
  const {;
  t ;
}= useTranslation ();
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories && fetchedCategories.map (cat => ({;
  id: cat && cat.id;";
title: cat && cat.name,  //Map name to title description: cat && cat.description || "No description available.";
icon: getIcon (cat && cat.iconName), //Get icon component link: cat && cat.link || `/category/$ {;
  cat && cat.id ";
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories && defaultCategories.find (dc => dc && dc.id === cat && cat.id) ?.color || "from-gray-500 to-gray-600" ;
}) ) : defaultCategories && defaultCategories.map (cat => ({;
  ...cat;
title: cat && cat.name;
icon: getIcon (cat && cat.iconName) ;
}) );
//If fetchedCategories is an empty array, and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {;
}> <div className="container mx-auto px-4" > <h2 className="text-3xl font-semibold text-white mb-4" > {';
  t ('home && home.no categories title') ";
}</h2> <p className="text-zion-slate-light text-lg mb-2" > {';
  t ('home && home.no categories desc') ";
}</p> <p className="text-zion-slate-light text-md" > {';
  t ('home && home.no categories support') ;
}return (</p> </div>) ;
}</div> </Link>) ) ;
}</div> > {;
  service && service.title ;
}</Link>) ) ";
}</div> </div> <div className="mt-12 flex justify-center" > <Link href="/categories/all" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors" > {';
  t ('home && home.view all categories') ;
}</Link> </div> </div> </section>) ;
}'"}
=======
  );

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
=======
  );


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export /**
 * CategoriesSection - Function description
 */
function CategoriesSection() {
  const { t } = use_translation ();
  const default_categories = getDefaultCategories (t);
  // Use fetched_categories if provided, otherwise fallback to default_categories;
  const display_categories = fetched_categories && fetched_categories.length > 0;
    ? fetched_categories.map (cat => ({
        id: cat.id,
        title: cat.name, // Map name to title;
        description: cat.description || "No description available.",
        icon: get_icon (cat.icon_name), // Get icon component;
        link: cat.link || `/category/${cat.id}`, // Construct link if not provided;
        // Assign a default color or implement logic to assign colors;
        color: default_categories.find (dc => dc.id === cat.id)?.color || "from - gray - 500 to - gray - 600"}));
    : default_categories.map (cat => ({
        ...cat;
        title: cat.name,
        icon: get_icon (cat.icon_name)})),
  // If fetched_categories is an empty array, and we want to show nothing:;
  // Check condition
if ( {) {
  $2
}
    return (
      <section className={cn ("py - 20 bg - zion - blue text - center", class_name)} style={style}>;
        <div className="container mx - auto px - 4">;
          <h2 className="text - 3xl font - semibold text - white mb - 4">{t ('home.no_categories_title')}</h2>;
          <p className="text - zion - slate - light text - lg mb - 2">;
            {t ('home.no_categories_desc')}
          </p>;
          <p className="text - zion - slate - light text - md">;
            {t ('home.no_categories_support')}
          </p>;
        </div>;
      </section>);
  }
  return (
    <section className={cn ("py - 20 bg - zion - blue", class_name)} style={style}>;
      <div className="container mx - auto px - 4">;
        {show_title && (
          <div className="text - center mb - 16">;
            <GradientHeading>{t ('home.categories_title')}</GradientHeading>;
            <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
              {t ('home.categories_subtitle')}
            </p>;
          </div>)}
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
          {display_categories.map ((category, ) => (
            <Link;
              key = {category.id, }
              href = {category.link || '#', }
              className="group block rounded - lg focus:outline - none focus:ring - 2 focus:ring - zion - cyan";
            >;
              <div className="rounded - lg overflow - hidden h - full border border - zion - blue - light bg - zion - blue - dark p - 6 transition - all duration - 300 group - hover:border - zion - purple / 50 group - focus:border - zion - purple / 50 hover:translate - y-[-5px] group - hover:shadow - lg">;
                <div className={`rounded - full w - 16 h - 16 bg - gradient - to - br ${category.color} flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}>;
                  <div className="text - white">;
                    {category.icon}
                  </div>;
                </div>;
                <h3 className="text - white text - xl font - bold mb - 2">{category.title}</h3>;
                <p className="text - zion - slate - light">{category.description}</p>;
              </div>;
            </Link>))}
        </div>;
        {/* Special services section with translations */}
        <div className="mt - 8">;
          <h3 className="text - center text - xl font - bold text - white mb - 6">{t ('home.featured_services')}</h3>;
          <div className="flex flex - wrap justify - center gap - 4">;
            {getSpecialServices (t).map ((service, ) => (
              <Link;
                key = {service.title, }
                href = {service.link, }
                className="px - 6 py - 3 bg - zion - blue - light hover:bg - zion - blue - dark border border - zion - purple / 20 hover:border - zion - purple / 50 rounded - full text - zion - cyan transition - all duration - 300";
              >;
                {service.title}
              </Link>            ))}
          </div>;
        </div>;
        <div className="mt - 12 flex justify - center">;
          <Link;
            href="/categories / all";
            className="text - zion - cyan border - b border - zion - cyan hover:border - zion - cyan - dark transition - colors";
          >;
            {t ('home.view_all_categories')}
          </Link>;
        </div>;
      </div>;
    </section>);
  switch (icon_name) {
}
const getSpecialServices = (t: any) =>: any [ {
  title: t ('categories.it onsite services');
link: "/it - onsite - services";
}];
interface CategoriesSectionProps {
  show_title?: boolean;
class_name?: string;
style?: React.CSSProperties;
categories?: CategoryType[], //Accept categories as a prop;
}export /**
 * CategoriesSection - Function description
 */
function CategoriesSection() {
  const {
  t;
}= use_translation ();
const default_categories = getDefaultCategories (t);
//Use fetched_categories if provided, otherwise fallback to default_categories const display_categories = fetched_categories && fetched_categories.length > 0 ? fetched_categories.map (cat => ({
  id: cat.id;";
title: cat.name,  //Map name to title description: cat.description || "No description available.";
icon: get_icon (cat.icon_name), //Get icon component link: cat.link || `/category/$ {
  cat.id ";
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: default_categories.find (dc => dc.id === cat.id) ?.color || "from - gray - 500 to - gray - 600";
}) ) : default_categories.map (cat => ({
  ...cat;
title: cat.name;
icon: get_icon (cat.icon_name);
}) );
//If fetched_categories is an empty array, and we want to show nothing: // Check condition
if ( {) {
  $2
}
}> <div className="container mx - auto px - 4" > <h2 className="text - 3xl font - semibold text - white mb - 4" > {';
  t ('home.no categories title') ";
}</h2> <p className="text - zion - slate - light text - lg mb - 2" > {';
  t ('home.no categories desc') ";
}</p> <p className="text - zion - slate - light text - md" > {';
  t ('home.no categories support');
}return (</p> </div>);
}</div> </Link>) );
}</div> > {
  service.title;
}</Link>) ) ";
}</div> </div> <div className="mt - 12 flex justify - center" > <Link href="/categories / all" className="text - zion - cyan border - b border - zion - cyan hover:border - zion - cyan - dark transition - colors" > {';
  t ('home.view all categories');
}</Link> </div> </div> </section>);
}'"}
<<<<<<< HEAD
  ),;   switch (iconName) {;
  ;
}
};
const getSpecialServices = (t: any) => [ {;
  title: t ('categories.it onsite services');
link: "/it-onsite-services" ;
}];
interface CategoriesSectionProps {;
  showTitle?: boolean;
className?: string;
style?: React.CSSProperties;
categories?: CategoryType[], //Accept categories as a prop ;
}export function CategoriesSection ({;
  showTitle = true;
className;
style;
categories: fetchedCategories, //Rename prop for clarity ;
}: CategoriesSectionProps) {;
  const {;
  t ;
}= useTranslation ();
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({;
  id: cat.id;";
title: cat.name,  //Map name to title description: cat.description || "No description available.";
icon: getIcon (cat.iconName), //Get icon component link: cat.link || `/category/$ {;
  cat.id ";
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories.find (dc => dc.id === cat.id) ?.color || "from-gray-500 to-gray-600" ;
}) ) : defaultCategories.map (cat => ({;
  ...cat;
title: cat.name;
icon: getIcon (cat.iconName) ;
}) );
//If fetchedCategories is an empty array, and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {;
  return (<section className= {";
  cn ("py-20 bg-zion-blue text-center", className) ;
}style= {;
  style ";
}> <div className="container mx-auto px-4" > <h2 className="text-3xl font-semibold text-white mb-4" > {';
  t ('home.no categories title') ";
}</h2> <p className="text-zion-slate-light text-lg mb-2" > {';
  t ('home.no categories desc') ";
}</p> <p className="text-zion-slate-light text-md" > {';
  t ('home.no categories support') ;
}
}return (</p> </div>) ;
}</div> </Link>) ) ;
}</div> > {;
  service.title ;
}</Link>) ) ";
}</div> </div> <div className="mt-12 flex justify-center" > <Link href="/categories/all" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors" > {';
  t ('home.view all categories') ;
}</Link> </div> </div> </section>) ;
}'"
  );
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
