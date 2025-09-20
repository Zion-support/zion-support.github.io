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
  {title: "Micro SAAS",
  {title: "IT Services",
  {title: "Digital Transformation",
          {displayCategories.map((category) => (
            <Link
            {getSpecialServices(t).map((service) => (
              <Link
interface CategoriesSectionProps {showTitle?: boolean,
className?: string
}
style?: React.CSSProperties}
categories?: CategoryType[], //Accept categories as a prop}export function CategoriesSection ({showTitle = true,;
className;
style,;
categories: fetchedCategories; //Rename prop for clarity}: CategoriesSectionProps) {const {
  
  t}= useTranslation ()
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({;
}</div> > {service.title}</Link>) ) "