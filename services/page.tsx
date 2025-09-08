};
];
;
export default function ServicesPage() {; return (; <Layout; title = "Our Services - Zion Tech Group"; description = "Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses."; keywords = "services, AI services, IT services, micro SaaS, technology solutions, business automation">; <div className = "min-h-screen bg-gray-50">; {/* Hero Section */}; {/* Header */}; <div className = "flex items-center mb-6">; <div className = {`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>; <service.icon className = {`w-8 h-8 text-${service.color}-600`} />; </div>; <div>; <h3 className = "text-2xl font-semibold text-gray-900">{service.title}</h3>; <p className = "text-gray-500">{service.category}</p>; </div>; </div>; {/* Description */}; <p className = "text-gray-600 mb-6">{service.description}</p>; {/* Services List */}; <div className = "mb-6">; <h4 className = "text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>; <ul className = "space-y-2">; {service.services.map((item, idx) = > (; <li key = {idx} className = "flex items-center text-sm text-gray-600">; <CheckCircle className = {`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />; {item}; {/* CTA */}; <Link; href = {service.href}; Explore {service.title}; <ArrowRight className = "w-4 h-4 ml-2" />; </Link>; </div>; </motion.div>; ))}; </div>; </div>; </section>; {/* Why Choose Us */};
;
};
];
;
export default function ServicesPage() {;
  return (;
    <Layout;
      title="Our Services - Zion Tech Group";
      description="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses.";
      keywords="services, AI services, IT services, micro SaaS, technology solutions, business automation";
    >;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl md: text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8 }};
              >
                Our Comprehensive Services
              </motion.h1>
              <motion.p
                className="text-xl md: text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.2 }};
              >
                From AI-powered solutions to IT infrastructure and micro SaaS platforms
                we provide end-to-end technology services to transform your business.
              </motion.p>
              <motion.div
                className="flex flex-col sm: flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.4 }};
              >
                <Link href="/contact" className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>
              {/* Stats */};
              <motion.div
                className="grid md: grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.6 }};
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">235+</div>
                  <div className="text-gray-300">Services & Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1,200+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">95+</div>
                  <div className="text-gray-300">Expert Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Services Overview */};
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive technology services across three main categories
                each designed to address specific business needs and challenges.
              </p>
            </div>
            <div className="grid md: grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id};
                  className="bg-white rounded-lg shadow-lg hover: shadow-xl transition-shadow duration-300 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                >
                  <div className="p-8">
                    {/* Header */};
                    <div className="flex items-center mb-6">;
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>;
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />;
                      </div>;
                      <div>;
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>;
                        <p className="text-gray-500">{service.category}</p>;
                      </div>;
                    </div>;
                    {/* Description */};
                    <p className="text-gray-600 mb-6">{service.description}</p>;
                    {/* Services List */};
                    <div className="mb-6">;
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>;
                      <ul className="space-y-2">;
                        {service.services.map((item, idx) => (;
                          <li key={idx} className="flex items-center text-sm text-gray-600">;
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />;
                            {item};
                    {/* CTA */};
                    <Link,;
                      href={service.href};
                      Explore {service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                </motion.div>;
              ))};
            </div>;
          </div>;
        </section>;
        {/* Why Choose Us */};
