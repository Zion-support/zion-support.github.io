
// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string
  name: string
  description?: string

        ...cat
import { GradientHeading } from "./GradientHeading"
import Link from "next/link"
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'import { HelpCircle } from 'lucide-react', // Added HelpCircle for default icon
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string,
  name: string,

  iconName?: string, // Example field if categories have icons
  itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string

  {
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
const getIcon = (iconName?: string,) => {
  switch (iconName) {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
        ...cat,
        ...cat,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
    )
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }

  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




  }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
        </div>
        </div>;
<<<<<<< HEAD

        {/* Special services section with translations */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">{t('home.featured_services')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
