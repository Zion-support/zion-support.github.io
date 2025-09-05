
import { GradientHeading } from &quot;./GradientHeading&quot;;
import Link from &quot;next/link&quot;;
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
import { HelpCircle } from 'lucide-react'; // Added HelpCircle for default icon
import { cn } from &quot;@/lib/utils&quot;;
import { useTranslation } from &quot;react-i18next&quot;;

// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string;
  name: string;
  description?: string;
  iconName?: string; // Example field if categories have icons
  itemCount?: number; // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string;
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
    iconName: &quot;Lightbulb&quot;,
    link: &quot;/innovation&quot;,
    color: &quot;from-emerald-500 to-green-600&quot;}];

// Helper to get icon component from name
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case &quot;Briefcase&quot;: return <Briefcase className=&quot;w-10 h-10&quot; />;
    case &quot;Users&quot;: return <Users className=&quot;w-10 h-10&quot; />;
    case &quot;HardDrive&quot;: return <HardDrive className=&quot;w-10 h-10&quot; />;
    case &quot;Lightbulb&quot;: return <Lightbulb className=&quot;w-10 h-10&quot; />;
    default: return <HelpCircle className=&quot;w-10 h-10&quot; />; // Default icon
  }
};

const getSpecialServices = (t: any) => [
  {
    title: t('categories.it_onsite_services'),
    link: &quot;/it-onsite-services&quot;
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
  categories?: CategoryType[]; // Accept categories as a prop
}

export function CategoriesSection({
  showTitle = true,
  className,
  style,
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {
  const { t } = useTranslation();
  const defaultCategories = getDefaultCategories(t);
  
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
        icon: getIcon(cat.iconName)}));

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
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={cn(&quot;py-20 bg-zion-blue&quot;, className)} style={style}>
      <div className=&quot;container mx-auto px-4&quot;>
        {showTitle && (
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>{t('home.categories_title')}</GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
              {t('home.categories_subtitle')}
            </p>
          </div>
        )}
        
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
              </div>
            </Link>
          ))}
        </div>
        
        {/* Special services section with translations */}
        <div className=&quot;mt-8&quot;>
          <h3 className=&quot;text-center text-xl font-bold text-white mb-6&quot;>{t('home.featured_services')}</h3>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {getSpecialServices(t).map((service) => (
              <Link 
                key={service.title}
                href={service.link}
                className=&quot;px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300&quot;
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className=&quot;mt-12 flex justify-center&quot;>
          <Link 
            href=&quot;/categories/all&quot;
            className=&quot;text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors&quot;
          >
            {t('home.view_all_categories')}
          </Link>
        </div>
      </div>
    </section>
  );
}
