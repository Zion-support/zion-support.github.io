

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
          <div className="text-center mb-16">
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, _talent, _equipment, _and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {_categories.map(_(category) => (
            <Link 
              key={category.title} 
              to={_category.link} 
              className="group block"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
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
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {_specialServices.map(_(service) => (
              <Link 
                key={service.title}
                to={_service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {_service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
