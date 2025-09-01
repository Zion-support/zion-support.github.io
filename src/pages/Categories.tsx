import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ; Brain,; Cloud,; Shield,; Database,; Code,; Network,; Eye,; Cpu,; Target,; Rocket,; Zap,; Lock,; BarChart3,; Globe,; Smartphone,; Palette,; ArrowRight,; Search,; Filter,; Users,; Settings,; TrendingUp; } from 'lucide-react';
;
const Categories: React.FC = () => {;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
;
  const categories = [;
    {;
      id: 'ai',;
      name: 'Artificial Intelligence',;
      description: 'Machine learning, deep learning, and AI-powered solutions',;
      count: 42,;
      color: 'from-purple-500 to-pink-500',;
      icon: Brain;
    },;
    {;
      id: 'cloud',;
      name: 'Cloud Computing',;
      description: 'Cloud infrastructure, platforms, and services',;
      count: 38,;
      color: 'from-blue-500 to-cyan-500',;
      icon: Cloud;
    },;
    {;
      id: 'cybersecurity',;
      name: 'Cybersecurity',;
      description: 'Security solutions, threat detection, and compliance',;
      count: 35,;
      color: 'from-red-500 to-orange-500',;
      icon: Shield;
    },;
    {;
      id: 'data',;
      name: 'Data Analytics',;
      description: 'Big data, business intelligence, and analytics platforms',;
      count: 31,;
      color: 'from-green-500 to-emerald-500',;
      icon: BarChart3;
    },;
    {;
      id: 'development',;
      name: 'Software Development',;
      description: 'Custom software, web apps, and development tools',;
      count: 45,;
      color: 'from-indigo-500 to-purple-500',;
      icon: Code;
    },;
    {;
      id: 'iot',;
      name: 'Internet of Things',;
      description: 'IoT platforms, sensors, and connected devices',;
      count: 28,;
      color: 'from-teal-500 to-green-500',;
      icon: Network;
    };
  ];
;
  const subCategories = {;
    ai: [;
      { name: 'Machine Learning', services: 18, talent: 45, equipment: 12, icon: Brain },;
      { name: 'Natural Language Processing', services: 12, talent: 32, equipment: 8, icon: Code },;
      { name: 'Computer Vision', services: 8, talent: 28, equipment: 15, icon: Eye };
    ],;
    cloud: [;
      { name: 'Infrastructure as a Service', services: 15, talent: 38, equipment: 22, icon: Cloud },;
      { name: 'Platform as a Service', services: 12, talent: 25, equipment: 18, icon: Settings },;
      { name: 'Software as a Service', services: 11, talent: 30, equipment: 14, icon: Code };
    ],;
    cybersecurity: [;
      { name: 'Threat Detection', services: 14, talent: 35, equipment: 20, icon: Shield },;
      { name: 'Identity Management', services: 10, talent: 22, equipment: 12, icon: Lock },;
      { name: 'Compliance & Governance', services: 11, talent: 28, equipment: 16, icon: Users };
    ],;
    data: [;
      { name: 'Big Data Processing', services: 16, talent: 42, equipment: 25, icon: Database },;
      { name: 'Business Intelligence', services: 12, talent: 28, equipment: 18, icon: BarChart3 },;
      { name: 'Data Visualization', services: 8, talent: 20, equipment: 12, icon: Palette };
    ],;
    development: [;
      { name: 'Web Development', services: 20, talent: 55, equipment: 30, icon: Code },;
      { name: 'Mobile Development', services: 15, talent: 38, equipment: 25, icon: Smartphone },;
      { name: 'DevOps & CI/CD', services: 10, talent: 25, equipment: 18, icon: Settings };
    ],;
    iot: [;
      { name: 'IoT Platforms', services: 12, talent: 30, equipment: 20, icon: Network },;
      { name: 'Sensor Networks', services: 10, talent: 25, equipment: 22, icon: Cpu },;
      { name: 'Edge Computing', services: 6, talent: 18, equipment: 15, icon: Zap };
    ];
  };
;
  const filteredCategories = categories.filter(category => {;
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || category.id === activeCategory;
    return matchesSearch && matchesCategory;
  });
;
  return (;
    <div className="min-h-screen bg-slate-900">;""
      <SEO";""
        title="Technology Categories - Zion Tech Group";""
        description="Explore our comprehensive technology categories including AI, cloud computing, cybersecurity, data analytics, software development, and IoT solutions.";""
        keywords="technology categories, AI, cloud computing, cybersecurity, data analytics, software development, IoT, Zion Tech Group";"
      />;";""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">;""
        {/* Header */}";""
        <section className="pt-32 pb-16 px-4">";""
          <div className="max-w-7xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
              transition={{ duration: 0.6 }};""
            >";""
              <div className="flex items-center justify-center space-x-3 mb-6">";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">";""
                  <Target className="w-8 h-8 text-white" />;"
                </div>;""
              </div>";""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">;"
                Technology Categories;""
              </h1>";""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Explore our comprehensive technology categories and find the;
                perfect solutions for your business needs.;
              </p>;
            </motion.div>;
          </div>;"
        </section>;""
        {/* Search and Filters */}";""
        <section className="py-8 px-4">";""
          <div className="max-w-7xl mx-auto">";""
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">;""
              {/* Search Bar */}";""
              <div className="relative mb-6">";""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;""
                <input";""
                  type="text";""
                  placeholder="Search categories...";"
                  value={searchQuery};""
                  onChange={e = / / /> setSearchQuery(e.target.value)}";""
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                />;
              </div>;"
              {/* Category Filters */};""
              <div>";""
                <h3 className="text-white font-semibold mb-3">Categories</h3>";""
                <div className="flex flex-wrap gap-2">;
                  <button;
                    onClick={() => setActiveCategory('all')};
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${;
                      activeCategory === 'all';
                        ? 'bg-blue-500 text-white';
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50';
                    }`};
                  >;
                    All Categories;
                  </button>;
                  {categories.map(category => (;
                    <button;
                      key={category.id};
                      onClick={() => setActiveCategory(category.id)};
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${;
                        activeCategory === category.id;
                          ? 'bg-blue-500 text-white';
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50';
                      }`};
                    >;
                      {category.name};
                    </button>;
                  ))};
                </div>;
              </div>;
            </div>;
          </div>;"
        </section>;""
        {/* Categories Grid */}";""
        <section className="py-16 px-4">";""
          <div className="max-w-7xl mx-auto">";""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {filteredCategories.map((category, index) => (;
                <motion.div;
                  key={category.id};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};"
                  viewport={{ once: true }};""
                  transition={{ duration: 0.6, delay: index * 0.1 }}";""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300";"
                >;""
                  {/* Category Header */}";""
                  <div className="flex items-center gap-4 mb-6">;
                    <div;"
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`};""
                    >";""
                      <category.icon className="w-6 h-6 text-white" />;"
                    </div>;""
                    <div>";""
                      <h3 className="text-white font-semibold text-lg">;"
                        {category.name};""
                      </h3>";""
                      <p className="text-gray-400 text-sm">;
                        {category.count} services;
                      </p>;
                    </div>;"
                  </div>;""
                  {/* Description */}";""
                  <p className="text-gray-300 text-sm mb-6">;
                    {category.description};
                  </p>;"
                  {/* Subcategories */};""
                  {subCategories[category.id as keyof typeof subCategories] && (";""
                    <div className="space-y-3 mb-6">";""
                      <h4 className="text-white font-medium text-sm">;"
                        Subcategories;""
                      </h4>";""
                      <div className="space-y-2">;
                        {subCategories[category.id as keyof typeof subCategories];
                          .slice(0, 3);
                          .map((sub, idx) => (;"
                            <div;""
                              key={idx}";""
                              className="flex items-center justify-between text-sm";""
                            >";""
                              <div className="flex items-center gap-2">";""
                                <sub.icon className="w-4 h-4 text-gray-400" />";""
                                <span className="text-gray-300">;
                                  {sub.name};"
                                </span>;""
                              </div>";""
                              <span className="text-gray-400 text-xs">;
                                {sub.services} services;
                              </span>;
                            </div>;
                          ))};
                      </div>;
                    </div>;"
                  )};""
                  {/* Stats */}";""
                  <div className="grid grid-cols-3 gap-4 mb-6">";""
                    <div className="text-center">";""
                      <div className="text-white font-semibold">;"
                        {category.count};""
                      </div>";""
                      <div className="text-gray-400 text-xs">Services</div>;""
                    </div>";""
                    <div className="text-center">";""
                      <div className="text-white font-semibold">;
                        {subCategories[category.id as keyof typeof subCategories];"
                          ?.reduce((acc, sub) => acc + sub.talent, 0) || 0};""
                      </div>";""
                      <div className="text-gray-400 text-xs">Experts</div>;""
                    </div>";""
                    <div className="text-center">";""
                      <div className="text-white font-semibold">;
                        {subCategories[category.id as keyof typeof subCategories];"
                          ?.reduce((acc, sub) => acc + sub.equipment, 0) || 0};""
                      </div>";""
                      <div className="text-gray-400 text-xs">Tools</div>;
                    </div>;"
                  </div>;""
                  {/* Action Button */}";""
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">;""
                    Explore {category.name}";""
                    <ArrowRight className="w-4 h-4" />;
                  </button>;
                </motion.div>;
              ))};"
            </div>;""
            {filteredCategories.length === 0 && (";""
              <div className="text-center py-12">";""
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />";""
                <h3 className="text-white text-xl font-semibold mb-2">;"
                  No categories found;""
                </h3>";""
                <p className="text-gray-400">;
                  Try adjusting your search criteria or filters.;
                </p>;
              </div>;
            )};
          </div>;
        </section>;
      </div>;
    </div>;
  );
};"
;""
export default Categories;";""