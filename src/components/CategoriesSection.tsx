
import Link from "next/link";

// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
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
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={_cn("py-20 bg-zion-blue", _className)} style={_style}>
      <div className="container mx-auto px-4">
        {_showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>{t('home.categories_title')}</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              {_t('home.categories_subtitle')}
            </p>
          </div>
        )}
        
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
              </div>
            </Link>
          ))}
        </div>
        
        {_/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{_t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {_getSpecialServices(t).map(_(service) => (
              <Link 
                key={service.title}
                href={_service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {_service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            {_t('home.view_all_categories')}
          </Link>
        </div>
      </div>
    </section>
  );
}
