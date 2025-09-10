<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SEO from '@/components/SEO';
const Categories = () => {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Categories - Zion Tech Group", description: "Explore our comprehensive categories of technology services and solutions." }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Categories" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Explore our comprehensive categories of technology services and solutions. Find exactly what you need for your business." })] }), _jsx("div", { className: "bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Coming Soon" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Our categories page is currently under development." })] }) })] }) })] }));
};
export default Categories;
=======
import { CategoriesSection } from "@/components/CategoriesSection";
import { GradientHeading } from "@/components/GradientHeading";
export default function Categories() {
    return (<>
      
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our extensive range of AI services and products organized by category. 
              Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>
          
          {/* Reuse the Categories Section component */}
          <CategoriesSection showTitle={false}/>
        </div>
      </div>
      
    </>);
}
>>>>>>> origin/chore/fix-links-and-build
