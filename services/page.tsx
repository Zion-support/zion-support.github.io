<<<<<<< HEAD


  };
<<<<<<< HEAD
]

export default function ServicesPage() {
  return (
    <Layout
      title="Our Services - Zion Tech Group"
      description="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses."
      keywords="services, AI services, IT services, micro SaaS, technology solutions, business automation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */};
                    {/* Header */};
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-gray-500">{service.category}</p>
                      </div>
                    </div>
                    {/* Description */};
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    {/* Services List */};
                    <div className="mb-6">,
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key: Services: </h4>,
                      <ul className="space-y-2">,
=======
],
,
export default function ServicesPage() {,
  return (,
    <Layout,
      title=&quot;Our Services - Zion Tech Group&quot;,
      description=&quot;Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses.&quot;,
      keywords=&quot;services, AI services, IT services, micro SaaS, technology solutions, business automation&quot;,
    >,
      <div className=&quot;min-h-screen bg-gray-50&quot;>,
        {/* Hero Section */};
                    {/* Header */};
                    <div className=&quot;flex items-center mb-6&quot;>,
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>,
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />,
                      </div>,
                      <div>,
                        <h3 className=&quot;text-2xl font-semibold text-gray-900&quot;>{service.title}</h3>,
                        <p className=&quot;text-gray-500&quot;>{service.category}</p>,
                      </div>,
                    </div>,
                    {/* Description */};
                    <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>,
                    {/* Services List */};
                    <div className=&quot;mb-6&quot;>,
                      <h4 className=&quot;text-sm font-semibold text-gray-900 mb-3&quot;>Key Services: </h4>,
                      <ul className=&quot;space-y-2&quot;>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        {service.services.map((item, idx) => (,
                          <li key={idx} className=&quot;flex items-center text-sm text-gray-600&quot;>,
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />,
                            {item};
                    {/* CTA */};
                    <Link
                      href={service.href};
                      Explore {service.title};
<<<<<<< HEAD
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))};
=======
                      <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />,
                    </Link>,
                  </div>,
                </motion.div>))};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>,
          </div>,
        </section>,

        {/* Why Choose Us */};

=======
};
];
;
export default function ServicesPage() {_; return (; <Layout; title = "Our Services - Zion Tech Group"; description = "Comprehensive technology services including AI solutions, _IT services, _and micro SaaS platforms. Expert solutions for modern businesses."; keywords = "services, _AI services, _IT services, _micro SaaS, _technology solutions, _business automation">; <div className = "min-h-screen bg-gray-50">; {/* Hero Section */}; {_/* Header */}; <div className = "flex items-center mb-6">; <div className = {_`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>; <service.icon className = {_`w-8 h-8 text-${service.color}-600`} />; </div>; <div>; <h3 className = "text-2xl font-semibold text-gray-900">{_service.title}</h3>; <p className = "text-gray-500">{_service.category}</p>; </div>; </div>; {_/* Description */}; <p className = "text-gray-600 mb-6">{_service.description}</p>; {_/* Services List */}; <div className = "mb-6">; <h4 className = "text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>; <ul className = "space-y-2">; {_service.services.map((item, _idx) = > (; <li key = {idx} className = "flex items-center text-sm text-gray-600">; <CheckCircle className = {_`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />; {_item}; {_/* CTA */}; <Link; href = {_service.href}; Explore {_service.title}; <ArrowRight className = "w-4 h-4 ml-2" />; </Link>; </div>; </motion.div>; ))}; </div>; </div>; </section>; {_/* Why Choose Us */};
;
};
];
;
export default function ServicesPage() {_;
  return (_;
    <Layout;
      title="Our Services - Zion Tech Group";
      description="Comprehensive technology services including AI solutions, _IT services, _and micro SaaS platforms. Expert solutions for modern businesses.";
      keywords="services, _AI services, _IT services, _micro SaaS, _technology solutions, _business automation";
    >;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */};
                    {_/* Header */};
                    <div className="flex items-center mb-6">;
                      <div className={_`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>;
                        <service.icon className={_`w-8 h-8 text-${service.color}-600`} />;
                      </div>;
                      <div>;
                        <h3 className="text-2xl font-semibold text-gray-900">{_service.title}</h3>;
                        <p className="text-gray-500">{_service.category}</p>;
                      </div>;
                    </div>;
                    {_/* Description */};
                    <p className="text-gray-600 mb-6">{_service.description}</p>;
                    {_/* Services List */};
                    <div className="mb-6">;
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>;
                      <ul className="space-y-2">;
                        {_service.services.map((item, _idx) => (;
                          <li key={idx} className="flex items-center text-sm text-gray-600">;
                            <CheckCircle className={_`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />;
                            {_item};
                    {_/* CTA */};
                    <Link;
                      href={_service.href};
                      Explore {_service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                </motion.div>;
              ))};
            </div>;
          </div>;
        </section>;
        {_/* Why Choose Us */};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
