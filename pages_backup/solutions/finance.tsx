import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Users, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Secure financial technology solutions for banks, fintech companies, and financial institutions. Regulatory compliant and secure."
      keywords="finance solutions, fintech, banking technology, financial services, regulatory compliance, risk management"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Secure, compliant, and innovative financial technology solutions
                designed for modern financial institutions and fintech companies.              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Finance Technology Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our finance solutions are built with security and compliance in mind.
              </p>              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
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
        <section className=py-20 bg-gray-800/30>"
          <div className="container mx-auto px-4>;
            <div className="max-w-4xl mx-auto">;
              <h2 className=text-3xl font-bold text-white text-center mb-12">";
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Financial Services Solutions;
              </h2>;

            </div>;
          </div>;
        </section>;
        {/* Compliance Section */}

          <div className=container mx-auto px-4>";
            <div className="bg-gray-800/50 rounded-2xl p-12>;
              <div className="text-center mb-12">;
                <h2 className=text-4xl font-bold text-white mb-4">";
                  Regulatory Compliant & Secure;
                </h2>;
                <p className=text-xl text-gray-300 max-w-3xl mx-auto>";

                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4>;
                    <Shield className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className=text-xl font-semibold text-white mb-2">PCI DSS Compliant</h3>";
                  <p className=text-gray-300>Built to meet all PCI DSS requirements for payment data protection.</p>";
                </div>;
                <div className="text-center>;
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Database className=w-8 h-8 text-white" />";
                  </div>;
                  <h3 className=text-xl font-semibold text-white mb-2>SOX Compliant</h3>";
                  <p className="text-gray-300>Enterprise-grade security measures to meet Sarbanes-Oxley requirements.</p>;
                </div>;
                <div className="text-center">;
                  <div className=w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <TrendingUp className=w-8 h-8 text-white />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2>Real-time Monitoring</h3>;
                  <p className="text-gray-300">Continuous monitoring and alerting for security and performance.</p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}

          <div className=container mx-auto px-4">";
            <div className=bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center>";
              <h2 className="text-4xl font-bold text-white mb-6>;
                Ready to Transform Financial Services?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
                Let our financial technology experts help you implement solutions that;

