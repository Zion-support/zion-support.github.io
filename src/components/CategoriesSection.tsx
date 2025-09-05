
<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import Link from "next/link",
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
=======
import { GradientHeading } from &quot;./GradientHeading&quot;;
import Link from &quot;next/link&quot;;
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
import { HelpCircle } from 'lucide-react'; // Added HelpCircle for default icon
import { cn } from &quot;@/lib/utils&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
=======
import Link from "next/link";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
<<<<<<< HEAD
interface CategoryType {
  id: string,
  name: string,
  description?: string,
  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string
}

// Default static categories with translation keys
const getDefaultCategories = (t: any) => [
  {
    id: &quot;services&quot;,
    name: t('categories.services'),
    description: t('categories.services_desc'),
    iconName: &quot;Briefcase&quot;, // Corresponds to lucide icon name
    link: &quot;/services&quot;,
    color: &quot;from-purple-500 to-indigo-600&quot;, // Keep color for styling
  },
  {
    id: &quot;talents&quot;,
    name: t('categories.talents'),
    description: t('categories.talents_desc'),
    iconName: &quot;Users&quot;,
    link: &quot;/talent&quot;,
    color: &quot;from-cyan-500 to-blue-600&quot;},
  {
    id: &quot;equipment&quot;,
    name: t('categories.equipment'),
    description: t('categories.equipment_desc'),
    iconName: &quot;HardDrive&quot;,
    link: &quot;/equipment&quot;,
    color: &quot;from-amber-500 to-orange-600&quot;},
  {
    id: &quot;innovation&quot;,
    name: t('categories.innovation'),
    description: t('categories.innovation_desc'),
<<<<<<< HEAD
    iconName: "Lightbulb",
    link: "/innovation",
    color: "from-emerald-500 to-green-600"}],
=======
    iconName: &quot;Lightbulb&quot;,
    link: &quot;/innovation&quot;,
    color: &quot;from-emerald-500 to-green-600&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

// Helper to get icon component from name
const getIcon = (iconName?: string) => {
  switch (iconName) {
<<<<<<< HEAD
    case "Briefcase": return <Briefcase className="w-10 h-10" />,
    case "Users": return <Users className="w-10 h-10" />,
    case "HardDrive": return <HardDrive className="w-10 h-10" />,
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />,
    default: return <HelpCircle className="w-10 h-10" />, // Default icon
=======
    case &quot;Briefcase&quot;: return <Briefcase className=&quot;w-10 h-10&quot; />;
    case &quot;Users&quot;: return <Users className=&quot;w-10 h-10&quot; />;
    case &quot;HardDrive&quot;: return <HardDrive className=&quot;w-10 h-10&quot; />;
    case &quot;Lightbulb&quot;: return <Lightbulb className=&quot;w-10 h-10&quot; />;
    default: return <HelpCircle className=&quot;w-10 h-10&quot; />; // Default icon
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
},

const getSpecialServices = (t: any) => [
  {
    title: t('categories.it_onsite_services'),
    link: &quot;/it-onsite-services&quot;
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
        description: cat.description || &quot;No description available.&quot;,
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link || `/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color || &quot;from-gray-500 to-gray-600&quot;}))
    : defaultCategories.map(cat => ({
        ...cat,
        title: cat.name,
        icon: getIcon(cat.iconName)})),

  // If fetchedCategories is an empty array, and we want to show nothing:
  if (fetchedCategories && fetchedCategories.length === 0) {
    return (
      <section className={cn(&quot;py-20 bg-zion-blue text-center&quot;, className)} style={style}>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-semibold text-white mb-4&quot;>{t('home.no_categories_title')}</h2>
          <p className=&quot;text-zion-slate-light text-lg mb-2&quot;>
            {t('home.no_categories_desc')}
          </p>
          <p className=&quot;text-zion-slate-light text-md&quot;>
            {t('home.no_categories_support')}
=======
interface CategoryType {_id: string;
  name: string;
  description?: string;
  iconName?: string; // Example field if categories have icons
  itemCount?: number; // Example field for number of items in a category
  // Add a 'link' property if your API provides it, _or construct it.
  link?: string;}

// Default static categories with translation keys
const _getDefaultCategories = (_t: unknown) => [
  {_id: "services", _name: t('categories.services'), _description: t('categories.services_desc'), _iconName: "Briefcase", _// Corresponds to lucide icon name
    link: "/services", _color: "from-purple-500 to-indigo-600", _// Keep color for styling},
  {_id: "talents", _name: t('categories.talents'), _description: t('categories.talents_desc'), _iconName: "Users", _link: "/talent", _color: "from-cyan-500 to-blue-600"},
  {_id: "equipment", _name: t('categories.equipment'), _description: t('categories.equipment_desc'), _iconName: "HardDrive", _link: "/equipment", _color: "from-amber-500 to-orange-600"},
  {_id: "innovation", _name: t('categories.innovation'), _description: t('categories.innovation_desc'), _iconName: "Lightbulb", _link: "/innovation", _color: "from-emerald-500 to-green-600"}];

// Helper to get icon component from name
const _getIcon = (_iconName?: string) => {_switch (iconName) {
    case "Briefcase": return <Briefcase className="w-10 h-10" />;
    case "Users": return <Users className="w-10 h-10" />;
    case "HardDrive": return <HardDrive className="w-10 h-10" />;
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />;
    default: return <HelpCircle className="w-10 h-10" />; // Default icon}
};

const _getSpecialServices = (_t: unknown) => [
  {_title: t('categories.it_onsite_services'), _link: "/it-onsite-services"}
];

interface CategoriesSectionProps {_showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
  categories?: CategoryType[]; // Accept categories as a prop}

export function CategoriesSection(_{_showTitle = true, _className, _style, _categories: fetchedCategories, _// Rename prop for clarity}: CategoriesSectionProps) {_const { t} = useTranslation();
  const _defaultCategories = getDefaultCategories(t);
  
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories
  const _displayCategories = fetchedCategories && fetchedCategories.length > 0
    ? fetchedCategories.map(cat => ({_id: cat.id, _title: cat.name, _// Map name to title
        description: cat.description || "No description available.", _icon: getIcon(cat.iconName), _// Get icon component
        link: cat.link || `/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color || "from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({_...cat, _title: cat.name, _icon: getIcon(cat.iconName)}));

  // If fetchedCategories is an empty array, and we want to show nothing:
  if (fetchedCategories && fetchedCategories.length === 0) {_return (
      <section className={cn("py-20 bg-zion-blue text-center", _className)} style={_style}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">{_t('home.no_categories_title')}</h2>
          <p className="text-zion-slate-light text-lg mb-2">
            {_t('home.no_categories_desc')}
          </p>
          <p className="text-zion-slate-light text-md">
            {_t('home.no_categories_support')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </div>
      </section>
    )
  }

  return (
<<<<<<< HEAD
    <section className={cn(&quot;py-20 bg-zion-blue&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        {showTitle && (
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>{t('home.categories_title')}</GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
              {t('home.categories_subtitle')}
=======
    <section className={_cn("py-20 bg-zion-blue", _className)} style={_style}>
      <div className="container mx-auto px-4">
        {_showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>{t('home.categories_title')}</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              {_t('home.categories_subtitle')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
        )}
        
<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={category.link || '#'}
              className=&quot;group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan&quot;
            >
              <div className=&quot;rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5px] group-hover:shadow-lg&quot;>
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className=&quot;text-white&quot;>
                    {category.icon}
                  </div>
                </div>
                <h3 className=&quot;text-white text-xl font-bold mb-2&quot;>{category.title}</h3>
                <p className=&quot;text-zion-slate-light&quot;>{category.description}</p>
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {_displayCategories.map(_(category) => (
            <Link
              key={category.id}
              href={_category.link || '#'}
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5px] group-hover:shadow-lg">
                <div className={_`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {_category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{_category.title}</h3>
                <p className="text-zion-slate-light">{_category.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </Link>
          ))}
        </div>
        
<<<<<<< HEAD
        {/* Special services section with translations */}
        <div className=&quot;mt-8&quot;>
          <h3 className=&quot;text-center text-xl font-bold text-white mb-6&quot;>{t('home.featured_services')}</h3>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {getSpecialServices(t).map((service) => (
              <Link 
                key={service.title}
                href={service.link}
                className=&quot;px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300&quot;
=======
        {_/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{_t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {_getSpecialServices(t).map(_(service) => (
              <Link 
                key={service.title}
                href={_service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className=&quot;mt-12 flex justify-center&quot;>
          <Link 
            href=&quot;/categories/all&quot;
            className=&quot;text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors&quot;
          >
            {_t('home.view_all_categories')}
          </Link>
        </div>
      </div>
    </section>
  )
}
