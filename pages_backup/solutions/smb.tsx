import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';  return (
    <>
      <Head>
        <title>SMB Solutions - Zion Tech Group</title>
        <meta name="description" content="Technology solutions designed for small and medium businesses." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                SMB Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Technology solutions designed specifically for small and medium businesses. 
                Get enterprise-level capabilities at SMB-friendly prices.;
              </p>;
            </motion.div>;
          </div>;
        </section>;        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our SMB solutions can help your business succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}