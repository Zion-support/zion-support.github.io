import Head from 'next/head';
=======

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, Globe, Award, Search } from 'lucide-react';
import Layout from '../../components/Layout';
    return matchesCategory && matchesSearch;
  });
>>>>>>> origin/automation-improvements-final

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
const Index: NextPage = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  return (
    <Layout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products designed to transform your business operations."
      keywords="products, technology solutions, AI, cloud, security, automation, collaboration">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              {/* Search Bar */}
              <div className="mb-8">;
                <div className="relative">;
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">;
                {categories && categories.map((category) => (;
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${;
                      selectedCategory === category;
                        ? 'bg-blue-600 text-white';
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                    }`}
                  >;
                    {category}
                  </button>;
                ))}
                <button
                  onClick={() => {;
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >;
                  Clear Filters;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Products Grid */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {filteredProducts && filteredProducts.map((product, index) => (;
                <motion&& motion.div
                  key={product && product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">;
                  <div className="p-6">;
                    <div className="flex items-center mb-4">;
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">;
                        <product && product.icon className="w-6 h-6 text-blue-600" />;
                      </div>;
                      <div>;
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">;
                          {product && product.category}
                        </span>;
                        {product && product.popular && (;
                          <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">;
                            Popular;
                          </span>;
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

        <meta name="description" content="Index page" />
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
>>>>>>> origin/automation-improvements-final
  );
}
export default ProductsIndex;
export default Index;

=======
  )
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};

export default Index;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
;
export default ProductsIndex);
}
;
export default Index;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
