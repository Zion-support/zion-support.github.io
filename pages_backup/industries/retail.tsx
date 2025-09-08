import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { ShoppingCart, Brain, BarChart3, CheckCircle, ArrowRight, Package, Users, CreditCard, Smartphone, Globe, Database } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';import Layout from '../../components/Layout';
const services = [
  {
    title: E-commerce Platforms,
    description: 'Custom e-commerce solutions with advanced features and seamless user experience.',
    icon: Globe,
    features: [;

    title: 'Customer Analytics,',
    description: 'Advanced analytics to understand customer behavior and preferences.,',
    icon: BarChart3,
    features: [;
      'Customer segmentation,',
      'Purchase pattern analysis',',
      'Personalization engines',',
      'Lifetime value prediction'';
      'Lifetime value prediction';
    ];
  },
  {}
    ];
    ];
  }];
  },
  {}
    title: 'Supply Chain Optimization,',
    description: 'End-to-end supply chain management with AI optimization.,',
    icon: Package,
    features: [;
      'Supplier management,',
      'Logistics optimization',',
      'Demand planning',',
      'Cost reduction'';
      Cost reduction';
    ];
  },
  {}
;];
const benefits = [;
  {}
    title: 'Increased Sales,',,
  description: 'Personalized experiences and optimized inventory drive higher conversion rates.,',;
    icon: ShoppingCart;  {}
    title: 'Better Customer Experience,',
    description: 'Seamless omnichannel experiences keep customers engaged and satisfied.,',
    icon: Users;
  },
  {}
    title: 'Reduced Costs,',
    description: 'Optimized inventory and supply chain reduce operational costs significantly.,',
    icon: BarChart3;
  },
  {}
    title: 'Data-Driven Insights,',
    description: 'Advanced analytics provide actionable insights for business growth.,',
    icon: Database;

    title: 'Better Customer Experience,',

    description: Seamless omnichannel experiences keep customers engaged and satisfied.,,
    icon: Users;
  },
  {}'
    title: 'Reduced Costs,,
    description: 'Optimized inventory and supply chain reduce operational costs significantly.,',
    icon: BarChart3;
  },
  {}
    title: Data-Driven Insights,','
    description: 'Advanced analytics provide actionable insights for business growth.,',
    icon: Database;
  }
;];
export default function RetailPage() {
  return (;
    <Layout );
      title="Retail Technology Solutions - Zion Tech Group"";
      description="Transform retail with e-commerce platforms, inventory management AI, customer analytics, and omnichannel solutions.""
      keywords="retail technology, e-commerce, inventory management, customer analytics, omnichannel retail, retail AI""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;              className="text-center mb-16"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6>
                Retail Technology Services;
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive retail technology solutions designed for modern businesses,
                from small boutiques to large retail chains.
              </p>
            </motion.div>
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div;
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service && service.features.map((feature, featureIndex) => (,;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";                        {feature}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
            </div>
          </div>
        </section>
            </div>,;
          </div>;
        </section>;
            </div>,;
          </div>;
        </section>;
            </div>,;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;              className="text-center mb-16"
            >

              <h2 className=text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Retail Solutions?
              </h2>"
              <p className=text-xl text-gray-600 max-w-3xl mx-auto>
                Our retail technology solutions deliver measurable improvements in sales,
                customer experience, and operational efficiency.
              </p>
            </motion.div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {benefits.map((benefit, index) => (
                <motion.div;
                  key={benefit.title}
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {benefits && benefits.map((benefit, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Why Choose Our Retail Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Our retail technology solutions deliver measurable improvements in sales,;
                customer experience, and operational efficiency.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={benefit && benefit.title}        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

