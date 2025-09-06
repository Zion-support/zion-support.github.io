<<<<<<< HEAD
<<<<<<<< HEAD:services/page.tsx


=======
========
<<<<<<< HEAD
export default function ServicesPage() {; return ( <Layout title = "Our Services - Zion Tech Group" description = "Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses." keywords = "services, AI services, IT services, micro SaaS, technology solutions, business automation">; <div className = "min-h-screen bg-gray-50">; {/* Hero Section */}; {/* Header */}; <div className = "flex items-center mb-6">; <div className = {`w-16 h-16 bg-${service && service.color}-100 rounded-lg flex items-center justify-center mr-4`}>; <service && service.icon className = {`w-8 h-8 text-${service && service.color}-600`} />; </div>; <div>; <h3 className = "text-2xl font-semibold text-gray-900">{service && service.title}</h3>; <p className = "text-gray-500">{service && service.category}</p>; </div>; </div>; {/* Description */}; <p className = "text-gray-600 mb-6">{service && service.description}</p>; {/* Services List */}; <div className = "mb-6">; <h4 className = "text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>, <ul className = "space-y-2">, {service && service.services.map((item, idx) = > (; <li key = {idx} className = "flex items-center text-sm text-gray-600">; <CheckCircle className = {`w-4 h-4 text-${service && service.color}-500 mr-2 flex-shrink-0`} />; {item}; {/* CTA */}; <Link href = {service && service.href} Explore {service && service.title} <ArrowRight className = "w-4 h-4 ml-2" />; </Link>, </div>, </motion && motion.div>))}; </div>; </div>; </section>; {/* Why Choose Us */};
;        {/* Why Choose Us */};
        {/* Why Choose Us */};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/page.tsx
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
];
export default function ServicesPage() {return (; <Layout; title = "Our Services - Zion Tech Group"; description = "Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses."; keywords = "services, AI services, IT services, micro SaaS, technology solutions, business automation">; <div className = "min-h-screen bg-gray-50">; {/* Hero Section */}; {/* Header */}; <div className = "flex items-center mb-6">; <div className = {`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>; <service.icon className = {`w-8 h-8 text-${service.color}-600`} />; </div>; <div>; <h3 className = "text-2xl font-semibold text-gray-900">{service.title}</h3>; <p className = "text-gray-500">{service.category}</p>; </div>; </div>; {/* Description */}; <p className = "text-gray-600 mb-6">{service.description}</p>; {/* Services List */}; <div className = "mb-6">; <h4 className = "text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>, <ul className = "space-y-2">, {service.services.map((item, idx) = > (; <li key = {idx} className = "flex items-center text-sm text-gray-600">; <CheckCircle className = {`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />; {item}; {/* CTA */}; <Link; href = {service.href}; Explore {service.title}; <ArrowRight className = "w-4 h-4 ml-2" />; </Link>, </div>, </motion.div>))}; </div>; </div>; </section>; {/* Why Choose Us */};        {/* Why Choose Us */}
        {/* Why Choose Us */}
=======
};
];
;
export default function ServicesPage() {; return (; <Layout; title = "Our Services - Zion Tech Group"; description = "Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms. Expert solutions for modern businesses."; keywords = "services, AI services, IT services, micro SaaS, technology solutions, business automation">; <div className = "min-h-screen bg-gray-50">; {/* Hero Section */}; {/* Header */}; <div className = "flex items-center mb-6">; <div className = {`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>; <service.icon className = {`w-8 h-8 text-${service.color}-600`} />; </div>; <div>; <h3 className = "text-2xl font-semibold text-gray-900">{service.title}</h3>; <p className = "text-gray-500">{service.category}</p>; </div>; </div>; {/* Description */}; <p className = "text-gray-600 mb-6">{service.description}</p>; {/* Services List */}; <div className = "mb-6">; <h4 className = "text-sm font-semibold text-gray-900 mb-3">Key Services: </h4>, <ul className = "space-y-2">, {service.services.map((item, idx) = > (; <li key = {idx} className = "flex items-center text-sm text-gray-600">; <CheckCircle className = {`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />; {item}; {/* CTA */}; <Link; href = {service.href}; Explore {service.title}; <ArrowRight className = "w-4 h-4 ml-2" />; </Link>, </div>, </motion.div>))}; </div>; </div>; </section>; {/* Why Choose Us */};
;        {/* Why Choose Us */};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


  };
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <ul className="space-y-2">,
                        {service.services.map((item, idx) => (,
                          <li key={idx} className="flex items-center text-sm text-gray-600">,
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />,
                            {item};
                    {/* CTA */};
<<<<<<< HEAD
                    <Link,
                      href={service.href};
                      Explore {service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />,
                    </Link>,
                  </div>,
                </motion.div>,
=======
                    <Link
                      href={service.href};
                      Explore {service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              ))};
            </div>,
          </div>,
        </section>,
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {/* Why Choose Us */};
<<<<<<<< HEAD:services/page.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/page.tsx
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
<<<<<<<< HEAD:services/page.tsx

=======

;
  }
========
=======

;
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/page.tsx
=======

        {/* Why Choose Us */};

;
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:services/page.tsx
        {/* Hero Section */},;
                    {/* Header */},;
========
        {/* Hero Section */};
                    {/* Header */};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/page.tsx
=======
        {/* Hero Section */},;
                    {/* Header */},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="flex items-center mb-6">,;
                      <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mr-4`}>,;
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />,;
                      </div>,;
                      <div>,;
                        <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>,;
                        <p className="text-gray-500">{service.category}</p>,;
                      </div>,;
                    </div>,;
<<<<<<< HEAD
<<<<<<<< HEAD:services/page.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {/* Description */},;
                    <p className="text-gray-600 mb-6">{service.description}</p>,;
                    {/* Services List */},;
                    <div className="mb-6">,;
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key: Services: </h4>,;
<<<<<<< HEAD
========
                    {/* Description */};
                    <p className="text-gray-600 mb-6">{service.description}</p>,;
                    {/* Services List */};
                    <div className="mb-6">,;
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key:Services:</h4>,;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/page.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <ul className="space-y-2">,;
                        {service.services.map((item, idx) => (,;
                          <li key={idx} className="flex items-center text-sm text-gray-600">,;
                            <CheckCircle className={`w-4 h-4 text-${service.color}-500 mr-2 flex-shrink-0`} />,;
<<<<<<< HEAD
<<<<<<<< HEAD:services/page.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Why Choose Us */};

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Why Choose Us */};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                            {item};
                    {/* CTA */};
                    <Link,;
                      href={service.href};
                      Explore {service.title};
                      <ArrowRight className="w-4 h-4 ml-2" />,;
                    </Link>,;
                  </div>,;
                </motion.div>,;
              ))};
            </div>,;
          </div>,;
        </section>,;
;
        {/* Why Choose Us */};
;          </div>,
        </section>,
        {/* Why Choose Us */};
        {/* Why Choose Us */};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/page.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Why Choose Us */};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
