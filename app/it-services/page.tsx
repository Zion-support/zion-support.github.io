import React from 'react';;
import { Helmet;  } from "react-helmet-async";
import Navigation from '../components/Navigation';;
import Footer from '../components/Footer';;
;
const ITServicesPage: React.FC = () => {;
const services = [;
    {;,
}
id: 1},;,
title: 'Cloud Infrastructure',;,
description: 'Scalable and secure cloud solutions for your business needs.',;,
icon: Cloud,
    },
    {
    ;,
    id: 2,
    ;,
title: 'Cybersecurity',;,
description: 'Comprehensive security solutions to protect your digital assets.',;,
icon: Shield,;,
features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],;,
price: 'From $1,000/month'
  },
    {
    }
  ];
const categories = [;
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'development', name: 'Web Development' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ];
const filteredServices = services.filter(service =>;;
selectedCategory === 'all' || service.category === selectedCategory
  );
return (;
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
            </div>
          </div>
        </section>

              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Our IT Services
              </h2>
              <p className="text-xl text-gray-300">
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
  </p>
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

