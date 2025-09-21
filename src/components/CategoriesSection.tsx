interface Service {
id: string,
name: string}

import React from "react",
export const CategoriesSection: any = () => {
return (
<div className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
<p className="text-lg text-gray-600">Explore our comprehensive range of technology services</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl text-white text-center">
<div className="text-4xl mb-4">🤖</div>
<h3 className="text-xl font-semibold">AI Services</h3>
</div>
<div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white text-center">
<div className="text-4xl mb-4">☁️</div>
<h3 className="text-xl font-semibold">Cloud Solutions</h3>
</div>
<div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white text-center">
<div className="text-4xl mb-4">🔒</div>
<h3 className="text-xl font-semibold">Cybersecurity</h3>
</div>
<div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white text-center">
<div className="text-4xl mb-4">📊</div>
<h3 className="text-xl font-semibold">Data Analytics</h3>
</div>
</div>
</div>
</div>
)}
<//div><///div>
iconName?: string, // Example field if categories have icons,
itemCount?: number, // Example field for number of items in a category
  // Add a 'link' property if your API provides it or construct it.
  link?: string
 * CategoriesSection function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
const categories = [{
    title: "AI Services",
description: "Cutting - edge AI solutions chatbots and machine learning"
    icon: "🤖",
link: "/ai - services"
    color: "from - purple - 500 to - indigo - 600"}
  {
    title: "Micro SAAS",
description: "Cloud - based software solutions for modern businesses"
    icon: "☁️",
link: "/micro - saas"
    color: "from - cyan - 500 to - blue - 600"}
  {
    title: "IT Services",
description: "Infrastructure security and technical consulting"
    icon: "⚡",
link: "/all - services"
    color: "from - amber - 500 to - orange - 600"}
  {
    title: "Digital Transformation",
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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
          <p className="text-lg text-gray-600">Explore our comprehensive range of technology services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold">AI Services</h3>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold">Cloud Solutions</h3>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold">Cybersecurity</h3>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold">Data Analytics</h3>
          </div>
        </div>
      </div>
    </div>
  )};
