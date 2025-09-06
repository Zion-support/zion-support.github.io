// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string,
  name: string,
  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string  {
    id: "services"
    name: t('categories.services')
    description: t('categories.services_desc')
    iconName: "Briefcase", // Corresponds to lucide icon name
    link: "/services"
    color: "from-purple-500 to-indigo-600", // Keep color for styling

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
// Helper to get icon component from name
const getIcon = (iconName?: string) => {
  switch (iconName) {

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
    : defaultCategories.map(cat => ({        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/categories/all"
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            {t('home.view_all_categories')}