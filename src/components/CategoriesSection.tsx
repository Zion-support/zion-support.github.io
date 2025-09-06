<<<<<<< HEAD
<<<<<<<< HEAD:src/components/CategoriesSection.tsx

<<<<<<< HEAD

=======

<<<<<<< HEAD
color: defaultCategories.find(dc => dc.id === cat.id)?.color |"from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        ...cat
import { GradientHeading } from "./GradientHeading"
import Link from "next/link"
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string
  name: string
  description?: string
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
=======
        ...cat;
import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { GradientHeading } from "./GradientHeading",
import Link from "next/link",
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
<<<<<<< HEAD
<<<<<<< HEAD

// This is the type definition copied from Categories.tsx for consistency.
=======
>>>>>>> // This is the type definition copied from Categories.tsx for consistency.
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// This is the type definition copied from Categories.tsx for consistency.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string,
  name: string,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  description?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  description?: string
=======
  description?: string,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string
<<<<<<< HEAD

}
=======
  description?: string,
  description?: string
>>>>>>>   iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string
>>>>>>> }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
},
  {
    title: "Comprehensive Services",
    link: "/comprehensive - services"
},
  {
    title: "Services Comparison",
    link: "/services - comparison"
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    title: "Comprehensive Services"
    link: "/comprehensive - services"
}
  {
    title: "Services Comparison"
    link: "/services - comparison"
<<<<<<< HEAD
<<<<<<< HEAD

}
// Default static categories with translation keys

=======
>>>>>>> }
// Default static categories with translation keys

const getDefaultCategories = (t: any,) => [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
// Default static categories with translation keys
<<<<<<< HEAD

const getDefaultCategories = (t: any,) => [
=======
const getDefaultCategories = (t: any) => [
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    id: "services"
    name: t('categories.services')
    description: t('categories.services_desc')
    iconName: "Briefcase", // Corresponds to lucide icon name
    link: "/services"
    color: "from-purple-500 to-indigo-600", // Keep color for styling
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
>>>>>>>   {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  {
>>>>>>>     id: "talents"
=======
  }
=======
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  {
    id: "talents"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: "innovation"
    name: t('categories.innovation')
    description: t('categories.innovation_desc')
    iconName: "Lightbulb"
    link: "/innovation"
    color: "from-emerald-500 to-green-600"}]
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Helper to get icon component from name
const getIcon = (iconName?: string,) => {
  switch (iconName) {
<<<<<<< HEAD

=======
=======
=======
    id: "innovation",
    name: t('categories.innovation'),
    description: t('categories.innovation_desc'),
    iconName: "Lightbulb",
    link: "/innovation",
    color: "from-emerald-500 to-green-600"}],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Helper to get icon component from name
const getIcon = (iconName?: string) => {
  switch (iconName) {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    case "Briefcase": return <Briefcase className="w-10 h-10" />
    case "Users": return <Users className="w-10 h-10" />
    case "HardDrive": return <HardDrive className="w-10 h-10" />
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />
    default: return <HelpCircle className="w-10 h-10" />, // Default icon
  }
}
const getSpecialServices = (t: any,) => [
<<<<<<< HEAD
========
<<<<<<< HEAD
color: default_categories.find (dc => dc.id === cat.id)?.color || "from - gray - 500 to - gray - 600"}));
    : default_categories.map (cat => ({
        ...cat;
import { GradientHeading  } from './GradientHeading';
import Link from './next / link';
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon;
import { cn  } from '@/lib / utils';
import { use_translation  } from './react - i18next';
// This is the type definition copied from Categories.tsx for consistency.;
// Ideally, this would be in a shared types file.;
interface CategoryType {
  id: string,
  name: string,
  description?: string;
  icon_name?: string, // Example field if categories have icons;
  item_count?: number, // Example field for number of items in a category;
  // Add a 'link' property if your API provides it, or construct it.;
  link?: string;
* CategoriesSection function;
* @param {*} params - Function parameters;
* @returns {*} Function return value;
*/;
/**
 * CategoriesSection - Function description
 */
function CategoriesSection() {
const categories = [{
    title: "AI Services",
    description: "Cutting - edge AI solutions, chatbots, and machine learning",
    icon: "🤖",
    link: "/ai - services",
    color: "from - purple - 500 to - indigo - 600", ,
},
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/CategoriesSection.tsx
  {
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
<<<<<<<< HEAD:src/components/CategoriesSection.tsx
=======
  {
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function CategoriesSection({
  showTitle = true
  className
  style
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {
  const { t } = useTranslation()
  const defaultCategories = getDefaultCategories(t)
<<<<<<< HEAD
>>>>>>>   // Use fetchedCategories if provided, otherwise fallback to defaultCategories
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories
>>>>>>>   const displayCategories = fetchedCategories && fetchedCategories.length > 0
=======
=======
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories
  const displayCategories = fetchedCategories && fetchedCategories.length > 0
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

        title: cat.name,
        icon: getIcon(cat.iconName)})),
=======
        title: cat.name
        icon: getIcon(cat.iconName)}))
>>>>>>>         title: cat.name,
        icon: getIcon(cat.iconName)})),
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

>>>>>>>   // If fetchedCategories is an empty array, and we want to show nothing:
=======
        ...cat
<<<<<<< HEAD
        title: cat.name
        icon: getIcon(cat.iconName)}))
=======
        ...cat,
=======
=======
        ...cat,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        title: cat.name,
        icon: getIcon(cat.iconName)})),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  // If fetchedCategories is an empty array, and we want to show nothing:
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
const getSpecialServices = (t: any, ) =>: any [;
  {
    title: t ('categories.it_onsite_services'),
    link: "/it - onsite - services";
  }
];
interface CategoriesSectionProps {
  show_title?: boolean;
  class_name?: string;
  style?: React.CSSProperties;
  categories?: CategoryType[], // Accept categories as a prop;
}
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
  }
];
interface CategoriesSectionProps {;
  showTitle?: boolean;
  className?: string;
  style?: React && React.CSSProperties;
  categories?: CategoryType[], // Accept categories as a prop;
}
export function CategoriesSection(): any ({;
  showTitle = true;
  className;
  style;
  categories: fetchedCategories, // Rename prop for clarity;
}: CategoriesSectionProps) {;
  const { t } = useTranslation();
  const defaultCategories = getDefaultCategories(t);
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories;
  const displayCategories = fetchedCategories && fetchedCategories.length > 0;
    ? fetchedCategories && fetchedCategories.map(cat => ({;
        id: cat && cat.id,;
        title: cat && cat.name, // Map name to title;
        description: cat && cat.description || "No description available.",;
        icon: getIcon(cat && cat.iconName), // Get icon component;
        link: cat && cat.link || `/category/${cat && cat.id}`, // Construct link if not provided;
        // Assign a default color or implement logic to assign colors;
        color: defaultCategories && defaultCategories.find(dc => dc && dc.id === cat && cat.id)?.color || "from-gray-500 to-gray-600"}));
    : defaultCategories && defaultCategories.map(cat => ({;
        ...cat;
        title: cat && cat.name,;
        icon: getIcon(cat && cat.iconName)})),;
  // If fetchedCategories is an empty array, and we want to show nothing:;
  if (fetchedCategories && fetchedCategories.length === 0) {;
    return (
      <section className={cn("py-20 bg-zion-blue text-center", className)} style={style}>;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-semibold text-white mb-4">{t('home && home.no_categories_title')}</h2>;
          <p className="text-zion-slate-light text-lg mb-2">;
            {t('home && home.no_categories_desc')}
          </p>;
          <p className="text-zion-slate-light text-md">;
            {t('home && home.no_categories_support')}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/CategoriesSection.tsx
          </p>;
        </div>;
      </section>;
    );
<<<<<<<< HEAD:src/components/CategoriesSection.tsx

  }

  return (
=======
  }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           </p>;
        </div>;
      </section>;
    );
>>>>>>>   }

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          </p>
        </div>
      </section>
    )
<<<<<<< HEAD
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          </p>;
        </div>;
      </section>;
    );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category,) => (
            <Link
              key = {category.id,}
              href = {category.link |'#',}
<<<<<<< HEAD
          {displayCategories.map((category) => (
          {displayCategories.map((category,) => (
>>>>>>>             <Link
              key={category.id}
              href={category.link || '#'}
>>>>>>>               className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/CategoriesSection.tsx
  }
  return (
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        {showTitle && (;
          <div className="text-center mb-16">;
<<<<<<< HEAD
            <GradientHeading>{t('home && home.categories_title')}</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              {t('home && home.categories_subtitle')}
            </p>;
          </div>;
        )}
<<<<<<<< HEAD:src/components/CategoriesSection.tsx


        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            <Link
              key={category.id}
              href={category.link || '#'}

<<<<<<< HEAD
=======
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
>>>>>>>             >
=======
=======
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
          {displayCategories.map((category) => (
=======
<<<<<<< HEAD
          {displayCategories.map((category,) => (
=======
          {displayCategories.map((category) => (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Link
              key={category.id}
              href={category.link || '#'}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
        </div>
=======
        </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
<<<<<<< HEAD

=======
        </div>
>>>>>>>         {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>         <div className="mt-12 flex justify-center">
ursor/fix-website-loading-errors-and-merge-6662
        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="mt-12 flex justify-center">
>>>>>>>           <Link
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="mt-12 flex justify-center">
          <Link
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            {t('home.view_all_categories')}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
          </Link>
        </div>
      </div>
    </section>
  )
  switch (iconName) {
}
const getSpecialServices = (t: any) => [ {
  title: t ('categories.it onsite services')
link: "/it-onsite-services"
}]
interface CategoriesSectionProps {
  showTitle?: boolean
className?: string
style?: React.CSSProperties
categories?: CategoryType[], //Accept categories as a prop
}export function CategoriesSection ({
  showTitle = true
className
style
categories: fetchedCategories, //Rename prop for clarity
}: CategoriesSectionProps) {
  const {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  t
}= useTranslation ()
const defaultCategories = getDefaultCategories (t)
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  t ;
}= useTranslation ();
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
        <div className="mt-12 flex justify-center">;
          <Link
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors">;
            {t('home && home.view_all_categories')}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/CategoriesSection.tsx
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </Link>;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/CategoriesSection.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/CategoriesSection.tsx
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
<<<<<<<< HEAD:src/components/CategoriesSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/CategoriesSection.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
