
  };
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
                        {service.services.map((item, idx) => (,
                          <li key={idx} className=&quot;flex items-center text-sm text-gray-600&quot;>,
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />,
                            {item};
                    {/* CTA */};
                    <Link,
                      href={service.href};
                      Explore {service.title};
                      <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />,
                    </Link>,
                  </div>,
                </motion.div>))};
            </div>,
          </div>,
        </section>,
        {/* Why Choose Us */};
