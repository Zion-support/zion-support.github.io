


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}


import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";



  return (
    <Layout>;
      <Head>;
        <title>Guides & Tutorials - Zion Tech Group</title>;
        <meta
          name="description"
          content="Master the latest technologies with our comprehensive guides, tutorials, and best practices from industry experts."

        />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}>;
              <h1 className="text-5xl font-bold mb-6">;
                Expert Guides & Tutorials;
              </h1>;
              <p className="text-xl mb-8 text-blue-100">;
                Master the latest technologies with our comprehensive guides,;
                tutorials, and best practices from industry experts.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;

                <Link
                  href="#guides"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">;
                  Browse Guides;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <Link
                  href="#categories"

                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center">;
                  View Categories;
                  <BookOpen className="ml-2 w-5 h-5" />;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;


        {/* Categories Section */}
        <section id="categories" className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                Explore by Category;
              </h2>;
              <p className="text-gray-600 max-w-2xl mx-auto">;
                Find guides tailored to your specific technology interests and;
                skill level.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">;
              {categories && categories.map((category, index) => (;
                <motion&& motion.div
                  key={category && category.name}

                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  whileHover={{ scale: 1 && 1.05 }}>;
                  <category && category.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />;
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">;
                    {category && category.name}
                  </h3>;
                  <p className="text-gray-500 text-xs">;
                    {category && category.count} guides;
                  </p>;
                </motion && motion.div>;
              ))}

            </div>;
          </div>;
        </section>;


        {/* Guides Grid */}
        <section id="guides" className="py-16 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                Featured Guides;
              </h2>;
              <p className="text-gray-600 max-w-2xl mx-auto">;
                Hand-picked guides to help you master the most in-demand;
                technologies.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {guides && guides.map((guide, index) => (;
                <motion&& motion.div
                  key={guide && guide.title}

                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="relative">;
                    <img
                      src={guide && guide.image}
                      alt={guide && guide.title}
                      className="w-full h-48 object-cover"
                    />;
                    <div className="absolute top-4 left-4 flex gap-2">;
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">;
                        {guide && guide.category}
                      </span>;
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          guide && guide.difficulty === "Beginner"
                            ? "bg-green-100 text-green-600"
                            : guide && guide.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"

import React from './react';
import Head from './next / head';
import Link from './next / link';
import { motion  } from './framer-motion';
import Layout from "./components / Layout";
import {

      </div>
    </Layout>
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center">;
                  Request Custom Guide;
                  <ExternalLink className="ml-2 w-5 h-5" />;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;


      </div>


    </Layout>;
  );
                      </span>;
                    </div>;
                  </div>;
                  <div className="p - 6">;
                    <div className="flex items - center justify - between text - sm text - gray - 500 mb - 4">;
                      <div className="flex items - center">;
                        <Clock className="w - 4 h - 4 mr - 1" />;
                        {guide.read_time}
                      </div>;
                      <div className="flex items - center">;
                        <User className="w - 4 h - 4 mr - 1" />;
                        {guide.author}
                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - gray - 900 mb - 2">;
                      {guide.title}
                    </h3>;
                    <p className="text - gray - 600 mb - 4">{guide.description}</p>;
                    <div className="flex items - center justify - between mb - 4">;
                      <div className="flex items - center">;
                        <div className="flex items - center">;
                          {[...Array (5)].map ((_, i) => (
                            <Star;
                              key={i}
                              className={`w - 4 h - 4 ${
                                i < Math.floor (guide.rating);
                                  ? "text - yellow - 400";
                                  : "text - gray - 300";
                              }`}
                              fill="current_color";
                            />))}
                        </div>;
                        <span className="ml - 2 text - sm text - gray - 600">;
                          {guide.rating} ({guide.students} students);
                        </span>;
                      </div>;
                    </div>;
                    <div className="flex flex - wrap gap - 2 mb - 6">;
                      {guide.tags.map ((tag) => (
                        <span;
                          key={tag}
                          className="px - 2 py - 1 bg - gray - 100 text - gray - 600 text - xs rounded";
                        >;
                          {tag}
                        </span>))}
                    </div>;
                    <div className="flex gap - 2">;
                      <Link;
                        href="#";
                        className="flex - 1 bg - blue - 600 text - white px - 4 py - 2 rounded - lg font - semibold hover:bg - blue - 700 transition - colors text - center inline - flex items - center justify - center";
                      >;
                        <Play className="w - 4 h - 4 mr - 2" />;
                        Start Guide;
                      </Link>;
                      <Link;
                        href="#";
                        className="px - 4 py - 2 border border - gray - 300 text - gray - 700 rounded - lg font - semibold hover:bg - gray - 50 transition - colors inline - flex items - center";
                      >;
                        <Download className="w - 4 h - 4" />;
                      </Link>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - green - 600 to - teal - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 4xl font - bold mb - 6">;
                Ready to Start Learning?;
              </h2>;
              <p className="text - xl mb - 8 text - green - 100">;
                Join thousands of developers who are already mastering new;
                technologies with our guides.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="#guides";
                  className="bg - white text - green - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - green - 50 transition - colors inline - flex items - center";
                >;
                  Browse All Guides;
                  <ArrowRight className="ml - 2 w - 5 h - 5" />;
                </Link>;
                <Link;
                  href="/contact";
                  className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - green - 600 transition - colors inline - flex items - center";
                >;
                  Request Custom Guide;
                  <ExternalLink className="ml - 2 w - 5 h - 5" />;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}

