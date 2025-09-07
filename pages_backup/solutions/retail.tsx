

=======
=======
import React from 'react;
import Head from next/head';
import Link from 'next/link;

import { motion } from framer-motion';
import {}
  ShoppingCart, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  ArrowRight ';
} from lucide-react;

const features = [
  {
    icon: ShoppingCart,

    title: 'E-commerce Platform',
    description: Complete online shopping experience with advanced features
  },
  {}
    icon: Users,
    title: 'Customer Analytics,',
    description: Advanced customer behavior analytics to optimize marketing and improve conversion rates.';
  },
  {}
    icon: BarChart,
    title: 'Inventory Management,,
    description: Real-time inventory tracking and management systems to optimize stock levels and reduce costs.'';
  },
  {}
    icon: Smartphone,
    title: Mobile Commerce,,
    description: 'Mobile-first shopping experiences with native apps and progressive web applications.';
  },
  {}
    icon: Package,
    title: Supply Chain Optimization,',
    description: 'End-to-end supply chain visibility and optimization using AI and machine learning.;
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: Mobile-first shopping experience and mobile app solutions
  },
  {
    icon: CheckCircle,
    title: 'Inventory Management',
    description: Real-time inventory tracking and automated reordering
  },
  {


=======
=======
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-optimized shopping experience'
  }
];

export default function RetailSolutionsPage() {

  return (
    <Layout
      title="Retail Solutions - Zion Tech Group
      description=Comprehensive retail technology solutions for e-commerce, omnichannel retail, and customer experience optimization."
      keywords="retail solutions, e-commerce, omnichannel retail, customer experience, inventory management, retail analytics
    >
      <div className=min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20>
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center>
              <h1 className=text-4xl md:text-6xl font-bold mb-6">
                Retail Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto>
                Transform your retail business with modern e-commerce, omnichannel,

  return (
    <Layout
      title=Retail Solutions - Zion Tech Group"
      description="Comprehensive retail technology solutions for e-commerce, omnichannel retail, and customer experience optimization.
      keywords=retail solutions, e-commerce, omnichannel retail, customer experience, inventory management, retail analytics">;
      <div className="min-h-screen bg-white>;
        {/* Hero Section */}

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className=text-4xl md:text-6xl font-bold mb-6">Retail Solutions</h1>"
              <p className=text-xl text-green-100 mb-8 max-w-3xl mx-auto>
                Transform your retail business with cutting-edge technology solutions.

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors>
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

                and customer experience solutions.              </p>
            </motion.div>

          </div>
        </section>

        {/* Features Section */}
        <section className=py-20 bg-gray-50>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=text-center mb-16>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Technology Features
              </h2>
              <p className=text-xl text-gray-600 max-w-3xl mx-auto>
                Comprehensive solutions designed to enhance every aspect of your retail business.
              </p>


            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            </motion.div>
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className=w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6>
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>


=======
=======
                  <h3 className=text-xl font-semibold mb-2>{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

          </div>
        </section>
      </div>


    </>
    </>
    </>
  );