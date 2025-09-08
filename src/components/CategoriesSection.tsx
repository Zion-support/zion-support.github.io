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

export default function CategoriesSection() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="CategoriesSection - Zion Tech Group" description="Professional CategoriesSection services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">CategoriesSection</h1>
        <p className="text-gray-300 text-lg">
          Professional CategoriesSection services to help your business grow.
        </p>
      </div>
    </div>
  )}