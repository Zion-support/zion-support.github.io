import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, Globe, Award, Search } from 'lucide-react';
import Layout from '../../components/Layout';
                >;
                  Clear Filters;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
                      </div>;
                            {feature}
                          </li>
                        ))}
                            {benefit}
                          </li>
                        ))}
            )}
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                Discover how our products can help you achieve your business goals and drive growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">;
                  <ArrowRight className="w-5 h-5 mr-2" />;
                  Get Started;
                </button>;
                <Link
                  href="/contact"
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name='description' content='Index page' />
      </Head>
ursor/integrate-build-improve-and-re-verify-8f7d

export default ProductsIndex;
import type { NextPage } from 'next';
import Head from 'next/head';
      <main>
        <h1>Index</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
ursor/integrate-build-improve-and-re-verify-8f7d
};

export default Index;
        {/* Products Grid */}
        <section className="py - 16">;
          <div className="container mx - auto px - 4">;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {filtered_products.map ((product, index) => (
                <motion.div;
                  key={product.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - white rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 overflow - hidden group";
                >;
                  <div className="p - 6">;
                    <div className="flex items - center mb - 4">;
                      <div className="w - 12 h - 12 bg - blue - 100 rounded - lg flex items - center justify - center mr - 4">;
                        <product.icon className="w - 6 h - 6 text - blue - 600" />;
                      </div>;
                      <div>;
                        <span className="px - 3 py - 1 bg - blue - 100 text - blue - 800 rounded - full text - sm font - medium">;
                          {product.category}
                        </span>;
                        {product.popular && (
                          <span className="ml - 2 px - 3 py - 1 bg - yellow - 100 text - yellow - 800 rounded - full text - sm font - medium">;
                            Popular;
                          </span>)}
                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - gray - 900 mb - 3 group - hover:text - blue - 600 transition - colors">;
                      {product.name}
                    </h3>;
                    <p className="text - gray - 600 mb - 4 leading - relaxed">;
                      {product.description}
                    </p>;
                    <div className="space - y-2 mb - 4">;
                      <h4 className="font - semibold text - gray - 900 text - sm">Key Features:</h4>;
                      <ul className="space - y-1">;
                        {product.features.map ((feature, idx) => (
                          <li key={idx} className="flex items - center text - sm text - gray - 600">;
                            <CheckCircle className="w - 3 h - 3 text - green - 500 mr - 2 flex - shrink - 0" />;
                            {feature}
                          </li>))}
                      </ul>;
                    </div>;
                    <div className="space - y-2 mb - 6">;
                      <h4 className="font - semibold text - gray - 900 text - sm">Benefits:</h4>;
                      <ul className="space - y-1">;
                        {product.benefits.map ((benefit, idx) => (
                          <li key={idx} className="flex items - center text - sm text - gray - 600">;
                            <Star className="w - 3 h - 3 text - yellow - 500 mr - 2 flex - shrink - 0" />;
                            {benefit}
                          </li>))}
                      </ul>;
                    </div>;
                    <div className="space - y-2 mb - 6">;
                      <div className="flex justify - between items - center">;
                        <span className="text - sm font - medium text - gray - 900">Pricing:</span>;
                        <span className="text - lg font - bold text - blue - 600">{product.pricing}</span>;
                      </div>;
                    </div>;
                    <button className="w - full bg - blue - 600 hover:bg - blue - 700 text - white px - 4 py - 3 rounded - lg font - medium transition - colors duration - 200 flex items - center justify - center group">;
                      Learn More;
                      <ArrowRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform" />;
                    </button>;
                  </div>;
                </motion.div>))}
            </div>;
            {filtered_products.length === 0 && (
              <div className="text - center py - 12">;
                <div className="text - gray - 400 mb - 4">;
                  <Search className="w - 16 h - 16 mx - auto" />;
                </div>;
                <h3 className="text - xl font - semibold text - gray - 900 mb - 2">No products found</h3>;
                <p className="text - gray - 600">Try adjusting your search or filter criteria.</p>;
              </div>)}
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl mb - 8 max - w-2xl mx - auto">;
                Discover how our products can help you achieve your business goals and drive growth.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <button className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold inline - flex items - center justify - center">;
                  <ArrowRight className="w - 5 h - 5 mr - 2" />;
                  Get Started;
                </button>;
                <Link;
                  href="/contact";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold";
                >;
                  Contact Sales;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
