
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { Link } from "react-router-dom",;
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react",;
;
const categories = [;
  {;
    title:"Services",;
    description:"On-demand IT support, consulting, development, and more",;
    icon:<Briefcase className="w-10 h-10" />,;
    link:"/services",;
    color:"from-purple-500 to-indigo-600"},;
  {;
    title:"Talents",;
    description:"Connect with AI experts, developers, and tech specialists",;
    icon:<Users className="w-10 h-10" />,;
    link:"/talent",;
    color:"from-cyan-500 to-blue-600"},;
  {;
    title:"Equipment",;
    description:"Rent or buy specialized hardware, servers, and devices",;
    icon:<HardDrive className="w-10 h-10" />,;
    link:"/equipment",;
    color:"from-amber-500 to-orange-600"},;
  {;
    title:"Innovation",;
    description:"Discover cutting-edge solutions and tech breakthroughs",;
    icon:<Lightbulb className="w-10 h-10" />,;
    link:"/category/innovation",;
    color:"from-emerald-500 to-green-600"}],;
;
const specialServices = [;
  {;
    title:"IT Onsite Services",;
    link:"/it-onsite-services";
  }
],;
;
interface CategoriesSectionProps {;
  showTitle?:boolean,;
}
;
export function CategoriesSection({ showTitle = true } CategoriesSectionProps) {;
  return (;
    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        {showTitle && (;
          <div className="text-center mb-16">;
            <GradientHeading>Explore Categories</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </p>;
          </div>;
        )}
        ;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;
          {categories.map((category) => (;
            <Link ;
              key={category.title} ;
              to={category.link} ;
              className="group block";
            >;
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">;
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <div className="text-white">;
                    {category.icon}
                  </div>;
                </div>;
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>;
                <p className="text-zion-slate-light">{category.description}</p>;
              </div>;
            </Link>;
          ))}
        </div>;
        ;
        <div className="mt-8">;
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>;
          <div className="flex flex-wrap justify-center gap-4">;
            {specialServices.map((service) => (;
              <Link ;
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300";
              >;
                {service.title}
              </Link>;
            ))}
          </div>;
        </div>;
        ;
        <div className="mt-12 flex justify-center">;
          <Link ;
            to="/categories" ;
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors";
          >;
            View All Categories →;
          </Link>;
        </div>;
      </div>;
    </section>;
  );
=======
import { GradientHeading } from "./GradientHeading",
import { Link } from "react-router-dom",
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react",
const categories = [
  {
    title: &quot;Services&quot;,
    description: &quot;On-demand IT support, consulting, development, and more&quot;,
    icon: <Briefcase className=&quot;w-10 h-10&quot; />,
    link: &quot;/services&quot;,
    color: &quot;from-purple-500 to-indigo-600&quot;},
  {
    title: &quot;Talents&quot;,
    description: &quot;Connect with AI experts, developers, and tech specialists&quot;,
    icon: <Users className=&quot;w-10 h-10&quot; />,
    link: &quot;/talent&quot;,
    color: &quot;from-cyan-500 to-blue-600&quot;},
  {
    title: &quot;Equipment&quot;,
    description: &quot;Rent or buy specialized hardware, servers, and devices&quot;,
    icon: <HardDrive className=&quot;w-10 h-10&quot; />,
    link: &quot;/equipment&quot;,
    color: &quot;from-amber-500 to-orange-600&quot;},
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/category/innovation",
    color: "from-emerald-500 to-green-600"}],
const specialServices = [
  {
    title: &quot;IT Onsite Services&quot;,
    link: &quot;/it-onsite-services&quot;
  }
],

interface CategoriesSectionProps {
  showTitle?: boolean
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  return (
    <section className=&quot;py-20 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>

const _categories = [
  {_title: "Services", _description: "On-demand IT support, _consulting, _development, _and more", _icon: <Briefcase className="w-10 h-10" />, _link: "/services", _color: "from-purple-500 to-indigo-600"},
  {_title: "Talents", _description: "Connect with AI experts, _developers, _and tech specialists", _icon: <Users className="w-10 h-10" />, _link: "/talent", _color: "from-cyan-500 to-blue-600"},
  {_title: "Equipment", _description: "Rent or buy specialized hardware, _servers, _and devices", _icon: <HardDrive className="w-10 h-10" />, _link: "/equipment", _color: "from-amber-500 to-orange-600"},
  {_title: "Innovation", _description: "Discover cutting-edge solutions and tech breakthroughs", _icon: <Lightbulb className="w-10 h-10" />, _link: "/category/innovation", _color: "from-emerald-500 to-green-600"}];

const _specialServices = [
  {_title: "IT Onsite Services", _link: "/it-onsite-services"}
];

interface CategoriesSectionProps {_showTitle?: boolean;}

export function CategoriesSection(_{_showTitle = true}: CategoriesSectionProps) {_return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>Explore Categories</GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto&quot;>
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation            </p>
          </div>
        )}
        
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className=&quot;group block&quot;
            >
              <div className=&quot;rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]&quot;>
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className=&quot;text-white&quot;>
                    {category.icon}
                  </div>
                </div>
                <h3 className=&quot;text-white text-xl font-bold mb-2&quot;>{category.title}</h3>
                <p className=&quot;text-zion-slate-light&quot;>{category.description}</p>              </div>
            </Link>
          ))}
        </div>
        
        <div className=&quot;mt-8&quot;>
          <h3 className=&quot;text-center text-xl font-bold text-white mb-6&quot;>Featured Services</h3>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className=&quot;px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300&quot;              >
                {_service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className=&quot;mt-12 flex justify-center&quot;>
          <Link 
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover: border-zion-cyan-dark transition-colors"          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
