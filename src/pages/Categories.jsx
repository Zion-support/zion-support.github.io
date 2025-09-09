import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ChevronRight,
  Package,
  Briefcase,
  Wrench,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Lock,
  Cpu,
  TrendingUp,
  Users,
  Leaf,
  Zap,
  Database,
  Network,
  Code,
  Globe,
  ArrowRight,
  Star,
  ShoppingCart,
  Heart
} from 'lucide-react';

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false}       />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredCategories.length} Categories Found
            </h2>
            <p className="text-zion-slate-light">
              Discover the perfect solutions for your technology needs across our comprehensive category collection.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-bold text-xl">{category.name}</h3>
                        {category.featured && (
                          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">Featured</span>
                        )}
                        <span className="text-white/80 text-sm">({category.count} items)</span>
                      </div>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  {/* Subcategories */}
                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Subcategories</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 5).map((sub, idx) => (
                        <span key={idx} className="text-xs bg-zinc-700/50 text-zion-slate-light px-2 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 5 && (
                        <span className="text-xs text-zion-cyan">+{category.subcategories.length - 5} more</span>
                      )}
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Top Products</h4>
                    <div className="space-y-2">
                      {category.topProducts.map((product, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">{product.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-white">{product.rating}</span>
                            </div>
                            <span className="text-zion-cyan font-semibold">${product.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Link 
                      to={`/category/${category.id}`}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
                    >
                      Browse Category
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors border border-zion-cyan/20 rounded-lg hover:border-zion-cyan/40">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of experts can help you find the perfect solution or create a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Our Experts
              </Link>
              <Link to="/marketplace" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Explore Marketplace
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
