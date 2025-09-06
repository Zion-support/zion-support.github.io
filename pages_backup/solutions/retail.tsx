<<<<<<< HEAD
=======
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    title: 'E-commerce Platform',
    description: 'Complete online store solution with payment processing'
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Deep insights into customer behavior and preferences'
  },
  {
    icon: BarChart3,
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and automated reordering'
  },
  {
<<<<<<< HEAD
  return (
    <Layout
      title="Retail Solutions - Zion Tech Group"
      description="Comprehensive retail technology solutions for e-commerce, omnichannel retail, and customer experience optimization."
      keywords="retail solutions, e-commerce, omnichannel retail, customer experience, inventory management, retail analytics">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Retail Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your retail business with modern e-commerce, omnichannel,
                and customer experience solutions.
=======
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-optimized shopping experience'
  }
];

export default function RetailSolutionsPage() {
  return (
    <>
      <Head>
        <title>Retail Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive retail technology solutions for modern commerce." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Retail Solutions</h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Transform your retail business with cutting-edge technology solutions.
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Retail Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to succeed in modern retail.
              </p>
<<<<<<< HEAD
=======
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>,
          </div>;
        </section>;
        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Retail Solutions;
              </h2>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">";
                {solutions.map((solution, index) => (,
                  <div key={index} className="flex items-center space-x-3">"
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{solution}</span>"
                  </div>;
                ))}
              </div>,
            </div>;
          </div>;
        </section>;
        {/* Omnichannel Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  Omnichannel Retail Experience;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                  Create seamless shopping experiences across all touchpoints with our;
                  integrated omnichannel retail solutions.;
                </p>;
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">;
                  Schedule Demo;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Driving Retail Success
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our retail solutions help businesses increase sales, improve customer experience,
                  and optimize operations across all channels.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
=======
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Retail Business?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our retail solutions can boost your sales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
  );
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">;
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
            <h2 className="text-3xl md:text-4xl font-bold mb-6">;
              Ready to Transform Your Retail Business?;
            </h2>;
            <p className="text-xl mb-8 max-w-3xl mx-auto">;
              Contact our retail solutions team to discuss your specific requirements;
              and discover how we can help grow your retail business.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">;
                Contact Retail Team;
              </button>;
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">;
                Download Retail Brochure;
              </button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
    </Layout>;
    </>;
    </Layout>;
    </>;
    </Layout>;
  );
    </>;
  ),;
}
=======
    </>
  );
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
