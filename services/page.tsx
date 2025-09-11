

=======
  };
],
,
export default function ServicesPage() {,
  return (,
    <Layout,
      title="Our Services - Zion Tech Group",
      description="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses.",
      keywords="services, AI services, IT services, micro SaaS, technology solutions, business automation",
    >,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
                    {/* Header */};
                    <div className="flex items-center mb-6">,
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>,
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />,
                      </div>,
                      <div>,
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>,
                        <p className="text-gray-500">{service.category}</p>,
                      </div>,
                    </div>,
                    {/* Description */};
                    <p className="text-gray-600 mb-6">{service.description}</p>,
                    {/* Services List */};
                    <div className="mb-6">,
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>,
                      <ul className="space-y-2">,
                        {service.services.map((item, idx) => (,
                          <li key={idx} className="flex items-center text-sm text-gray-600">,
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />,
                            {item};
                    {/* CTA */};
                    <Link,
                      href={service.href};
                      Explore {service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />,
                    </Link>,
                  </div>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Why Choose Us */};

}
];
;
export default /**
 * ServicesPage - Function description
 */
function ServicesPage() { return ( <Layout; title = "Our Services - Zion Tech Group"; description = "Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses."; keywords = "services, AI services, IT services, micro SaaS, technology solutions, business automation">; <div class_name = "min - h-screen bg - gray - 50">; {/* Hero Section */} {/* Header */} <div class_name = "flex items - center mb - 6">; <div class_name = {`w - 16 h - 16 bg-${service.color}-100 rounded - lg flex items - center justify - center mr - 4`}>; <service.icon class_name = {`w - 8 h - 8 text-${service.color}-600`} />; </div>; <div>; <h3 class_name = "text - 2xl font - semibold text - gray - 900">{service.title}</h3>; <p class_name = "text - gray - 500">{service.category}</p>; </div>; </div>; {/* Description */} <p class_name = "text - gray - 600 mb - 6">{service.description}</p>; {/* Services List */} <div class_name = "mb - 6">; <h4 class_name = "text - sm font - semibold text - gray - 900 mb - 3">Key Services: </h4>, <ul class_name = "space - y-2">, {service.services.map ((item, idx) = > ( <li key = {idx} class_name = "flex items - center text - sm text - gray - 600">; <CheckCircle class_name = {`w - 4 h - 4 text-${service.color}-500 mr - 2 flex - shrink - 0`} />; {item} {/* CTA */} <Link; href = {service.href} Explore {service.title} <ArrowRight class_name = "w - 4 h - 4 ml - 2" />; </Link>, </div>, </motion.div>))} </div>; </div>; </section>; {/* Why Choose Us */}
;        {/* Why Choose Us */}
        {/* Why Choose Us */}
;

=======

;
  }
],;
,;
export default function ServicesPage() {,;
  return (,;
    <Layout,;
      title="Our Services - Zion Tech Group",;
      description="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses.",;
      keywords="services, AI services, IT services, micro SaaS, technology solutions, business automation",;
    >,;
      <div className="min-h-screen bg-gray-50">,;
        {/* Hero Section */},;
                    {/* Header */},;
                    <div className="flex items-center mb-6">,;
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>,;
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />,;
                      </div>,;
                      <div>,;
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>,;
                        <p className="text-gray-500">{service.category}</p>,;
                      </div>,;
                    </div>,;
                    {/* Description */},;
                    <p className="text-gray-600 mb-6">{service.description}</p>,;
                    {/* Services List */},;
                    <div className="mb-6">,;
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key: Services: </h4>,;
                      <ul className="space-y-2">,;
                        {service.services.map((item, idx) => (,;
                          <li key={idx} className="flex items-center text-sm text-gray-600">,;
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />,;
                            {item},;
                    {/* CTA */},;
                    <Link,;
                      href={service.href},;
                      Explore {service.title},;
                      <ArrowRight className="w-4 h-4 ml-2" />,;
                    </Link>,;
                  </div>,;
                </motion.div>))},;
            </div>,;
          </div>,;
        </section>,;


        {/* Why Choose Us */};
