import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Package, Zap, Users, TrendingUp } from 'lucide-react';
;
export default function MicroSAASServicesPage() {}
  // TODO: implement
}
  const services = [
    {}
      icon: <Package className="w-8 h-8 text-blue-500" />,
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS applications tailored to your business needs.',
      pricing: 'Starting at $5,000'
    },
    {}
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Rapid Prototyping',
      description: 'Quick development and deployment of SaaS prototypes.',
      pricing: 'Starting at $2,000'
    },
    {}
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'User Management',
      description: 'Complete user authentication and management systems.',
      pricing: 'Starting at $1,500'
    },
    {}
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Analytics Integration',
      description: 'Built-in analytics and reporting for your SaaS application.',
      pricing: 'Starting at $1,000'
    }
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Professional micro SaaS development services. Build scalable, efficient software-as-a-service applications with our expert team." /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-20 pb-16"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Build powerful, scalable micro SaaS applications that solve specific business problems.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {services.map((service, index) => ()
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center"></div>
                  <div className="flex justify-center mb-4"></div>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3"></h3>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4"></p>
                    {service.description}
                  </p>
                  <div className="text-lg font-semibold text-blue-600"></div>
                    {service.pricing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}