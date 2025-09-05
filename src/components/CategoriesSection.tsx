 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //This is the type definition copied from Categories.tsx for consistency. //Ideally, this would be in a shared types file. //Helper to get icon component from name const getIcon = (iconName?: string) => {
  switch (iconName) {
  
}
};
const getSpecialServices = (t: any) => [ {
  title: t ('categories.it onsite services');
link: "/it-onsite-services" 
}];
interface CategoriesSectionProps {
  showTitle?: boolean;
className?: string;
style?: React.CSSProperties;
categories?: CategoryType[], //Accept categories as a prop 
}export function CategoriesSection ({
  showTitle = true;
className;
style;
categories: fetchedCategories, //Rename prop for clarity 
}: CategoriesSectionProps) {
  const {
  t 
}= useTranslation ();
const defaultCategories = getDefaultCategories (t);
//Use fetchedCategories if provided, otherwise fallback to defaultCategories const displayCategories = fetchedCategories && fetchedCategories.length > 0 ? fetchedCategories.map (cat => ({
  id: cat.id;
title: cat.name, //Map name to title description: cat.description || "No description available.";
icon: getIcon (cat.iconName), //Get icon component link: cat.link || `/category/$ {
  cat.id 
}`, //Construct link if not provided //Assign a default color or implement logic to assign colors color: defaultCategories.find (dc => dc.id === cat.id) ?.color || "from-gray-500 to-gray-600" 
}) ) : defaultCategories.map (cat => ({
  ...cat;
title: cat.name;
icon: getIcon (cat.iconName) 
}) );
//If fetchedCategories is an empty array, and we want to show nothing: if (fetchedCategories && fetchedCategories.length === 0) {
  return (<section className= {
  cn ("py-20 bg-zion-blue text-center", className) 
}style= {
  style 
}> <div className="container mx-auto px-4" > <h2 className="text-3xl font-semibold text-white mb-4" > {
  t ('home.no categories title') 
}</h2> <p className="text-zion-slate-light text-lg mb-2" > {
  t ('home.no categories desc') 
}</p> <p className="text-zion-slate-light text-md" > {
  t ('home.no categories support') 
}
}return (</p> </div>) 
}</div> </Link>) ) 
}</div> > {
  service.title 
}</Link>) ) 
}</div> </div> <div className="mt-12 flex justify-center" > <Link href="/categories/all" className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors" > {
  t ('home.view all categories') 
}</Link> </div> </div> </section>) 
}