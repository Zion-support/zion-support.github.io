interface Service {
id: string;
name: string;
}
}
}

import React from "react";

export const CategoriesSection: any = () => {
return (
<div className="py-16 bg-white">;
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
<div className="text-center mb-12">;
<h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>;
<p className="text-lg text-gray-600">Explore our comprehensive range of technology services</p>;
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
<div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl text-white text-center">;
<div className="text-4xl mb-4">🤖</div>
<h3 className="text-xl font-semibold">AI Services</h3>;
</div>
<div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white text-center">;
<div className="text-4xl mb-4">☁️</div>
<h3 className="text-xl font-semibold">Cloud Solutions</h3>;
</div>
<div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white text-center">;
<div className="text-4xl mb-4">🔒</div>
<h3 className="text-xl font-semibold">Cybersecurity</h3>;
</div>
<div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white text-center">;
<div className="text-4xl mb-4">📊</div>
<h3 className="text-xl font-semibold">Data Analytics</h3>;
</div>
</div>
</div>
</div>
),;
};
<//div><///div>;
iconName?: string, // Example field if categories have icons,
itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it or construct it.
  link?: string
 * CategoriesSection function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {const categories = [{
    title: "AI Services",
description: "Cutting - edge AI solutions chatbots and machine learning"
    icon: "🤖",
link: "/ai - services"
    color: "from - purple - 500 to - indigo - 600"}
  {title: "Micro SAAS",origin/main
description: "Cloud - based software solutions for modern businesses"
    icon: "☁️",
link: "/micro - saas"
    color: "from - cyan - 500 to - blue - 600"}
  {title: "IT Services",origin/main
description: "Infrastructure security and technical consulting"
    icon: "⚡",
link: "/all - services"
    color: "from - amber - 500 to - orange - 600"}
  {title: "Digital Transformation",origin/main
description: "Business modernization and digital strategy"
    icon: "📈",
link: "/all - services"
    color: "from - emerald - 500 to - green - 600"}
]
const specialServices = [{
    title: "IT Onsite Services",
link: "/it - onsite - services"
}
  {
    title: "Comprehensive Services",
link: "/comprehensive - services"
}
  {
    title: "Services Comparison",
link: "/services - comparison"
}
// Default static categories with translation keys
  // If fetchedCategories is an empty array and we want to show nothing:
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
          {displayCategories.map((category) => (
            <Linkorigin/main
key = {category.id}
              href = {category.link |'#'}
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
            {getSpecialServices(t).map((service) => (
              <Linkorigin/main
key = {service.title}
                href = {service.link}
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
          </Link>
        </div>
      </div>
    </section>
  )
  switch (iconName) {
}
const getSpecialServices = (t: any) => [ {,
title: t ('categories.it onsite services')
link: "/it-onsite-services"
}]
interface CategoriesSectionProps {showTitle?: boolean,
className?: string,
}
style?: React.CSSProperties,}
categories?: CategoryType[], //Accept categories as a prop}export function CategoriesSection ({showTitle = true,
className
style,
categories: fetchedCategories; //Rename prop for clarity}: CategoriesSectionProps) {const {origin/main
  t}= useTranslation ()
const defaultCategories = getDefaultCategories (t)
//Use fetchedCategories if provided otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({
  id: cat.id;",
title: cat.name,  //Map name to title description: cat.description |"No description available.",
icon: getIcon (cat.iconName), //Get icon component link: cat.link |`/category/$ {
  cat.id "
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories.find (dc => dc.id === cat.id) ?.color |"from-gray-500 to-gray-600"
}) ) : defaultCategories.map (cat => ({
  ...cat,
title: cat.name,
icon: getIcon (cat.iconName)
}) )
//If fetchedCategories is an empty array and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {
}> <div className="container mx-auto px-4" > <h2 className="text-3xl font-semibold text-white mb-4" > {'
  t ('home.no categories title') "
}</h2> <p className="text-zion-slate-light text-lg mb-2" > {'
  t ('home.no categories desc') "
}</p> <p className="text-zion-slate-light text-md" > {'
  t ('home.no categories support')
}return (</p> </div>)
}</div> </Link>) )
}</div> > {service.title}</Link>) ) "origin/main
}</div> </div> <div className="mt-12 flex justify-center" > <Link href="/categories/all" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors" > {'
  t ('home.view all categories')
}</Link> </div> </div> </section>)
}'"}
