import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Database } from 'lucide-react'
;
export default function ITServicesPage() {}
  // TODO: implement
}
  const services = [
    {}
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure management and support services.',
      pricing: 'Starting at $2,000/month'
    },
    {}
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Solutions',
      description: 'Cloud migration, setup, and ongoing management services.',
      pricing: 'Starting at $3,000/month'
    },
    {}
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Services',
      description: 'Cybersecurity solutions and compliance management.',
      pricing: 'Starting at $1,500/month'
    },
    {}
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Management',
      description: 'Database administration and data analytics services.',
      pricing: 'Starting at $2,500/month'
    }
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud solutions, cybersecurity, and data management. Trusted by businesses worldwide." /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-20 pb-16"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              IT <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
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