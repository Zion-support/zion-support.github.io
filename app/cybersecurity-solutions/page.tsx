import React from 'react';
const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <React.Fragment /><Helmet />
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions and services by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20" /><div className="text-center mb-16" /><h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Solutions</h1>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity services and solutions</p>
          </p>
        </div>
        {/* Services Section */}
        <div className="mb-20" /><h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" /><div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center text-sm text-gray-300" /><CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-blue-400 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
</div>
    </React.Fragment>
  )
}
;