    title: "Services Overview",
    link: "/services-overview"
  },
  {
    title: "AI Services",
    link: "/ai-services"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"
    title: "Comprehensive Services",
    link: "/comprehensive-services"
    title: "Cybersecurity Services",
    link: "/cybersecurity-services"
  },
  {
    title: "Micro SAAS",
    link: "/micro-saas"
  },
  {
    title: "All Services",
    link: "/comprehensive-services"
  },
  {
    title: "Pricing",
    link: "/services-pricing"
  },
  {
    title: "Enterprise Solutions",
    link: "/enterprise-solutions"
  },
  {
    title: "Innovative Services",
    link: "/innovative-services"
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              to={category.link} 
              className="group block"
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link 
                key={service.title}
                to={service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
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
