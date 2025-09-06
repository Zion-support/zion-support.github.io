

=======
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Cloud, Server, Shield, Zap } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';


  return (
    <Layout
      title="Cloud Solutions - Zion Tech Group"
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services."
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}


              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cloud Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Transform your business with our comprehensive cloud solutions. 
                From migration to optimization, we help you leverage the power of the cloud.,
              </p>;
            </motion.div>;
          </div>;
        </section>;


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive cloud solutions.
                From migration to optimization, we help you leverage the power of the cloud.
              </p>
            </motion.div>
          </div>
        </section>


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Ready to Move to the Cloud?;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Let our cloud experts help you transform your infrastructure and unlock new possibilities.;
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
