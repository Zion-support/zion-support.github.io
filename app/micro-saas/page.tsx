'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'AI Content Writer',
      description: 'Generate high-quality content with AI-powered writing assistance',
      price: '$29/month',
      category: 'AI Tools',
      features: ['Content Generation', 'SEO Optimization', 'Multiple Languages', 'Tone Customization']
    },
    {
      id: 2,
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business',
      price: '$49/month',
      category: 'Analytics',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options']
    },
    {
      id: 3,
      name: 'Email Marketing Pro',
      description: 'Advanced email marketing automation and campaign management',
      price: '$39/month',
      category: 'Marketing',
      features: ['Automation', 'A/B Testing', 'Segmentation', 'Analytics']
    },
    {
      id: 4,
      name: 'Task Manager Plus',
      description: 'Streamline your workflow with intelligent task management',
      price: '$19/month',
      category: 'Productivity',
      features: ['Smart Scheduling', 'Team Collaboration', 'Progress Tracking', 'Integrations']
    }
  ];

<<<<<<< HEAD
  const benefits = [
  ];
=======
  const categories = ['All', 'AI Tools', 'Analytics', 'Marketing', 'Productivity'];
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges. Choose from our range of micro SaaS products.
            </p>
          </div>
        </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 bg-white"></section></section>
        <div className="container mx-auto px-4"></div></div>
          <div className="max-w-6xl mx-auto"></div></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div></div>
              {stats.map((stat, index) => (
                <div key={index} className="text-center"></div></div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"></div></div>
                    {stat.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50"></section></section>
        <div className="container mx-auto px-4"></div></div>
          <div className="max-w-6xl mx-auto"></div></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"></h2></h2>
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"></div></div>
                  <div className="flex justify-center mb-4"></div></div>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3"></h3></h3>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600"></p></p>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16"></section></section>
        <div className="container mx-auto px-4"></div></div>
          <div className="max-w-6xl mx-auto"></div></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"></h2></h2>
              Our Micro SaaS Products
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8"></div></div>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                ></button>
=======
        {/* Category Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div></div>
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className="{`bg-white" rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                    product.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                ></div></div>
                  {product.popular && (
                    <div className="flex items-center mb-3"&gt;</div&gt;
                      <Star className="w-4 h-4 text-yellow-500 mr-1" /&gt;
                      <span className="text-sm font-medium text-yellow-600"&gt;</span&gt;Popular</span&gt;
                    </div&gt;
                  )}
                  
                  <div className="text-center mb-4"></div>
                    <div className="text-4xl mb-3"></div></div>{product.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2"></h3></h3>
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4"></p></p>
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3"></div></div>
                      <Users className="w-4 h-4 mr-1" />
                      <span>{product.users}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-4"></div></div>
                      {product.price}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6"></ul>
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"></span></span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2"></div></div>
                    <Link
                      to={`/micro-saas/${product.id}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    ></Link>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"></button>
                      Start Free Trial
                    </button>
                  </div>
=======
        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-1"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white"></section></section>
        <div className="container mx-auto px-4"></div></div>
          <div className="max-w-4xl mx-auto text-center"></div></div>
            <h2 className="text-3xl font-bold mb-4"></h2></h2>
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl mb-8 text-blue-100"></p></p>
              Start your free trial today and experience the power of our micro SaaS solutions.
=======
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We can create a custom micro SaaS solution tailored to your specific business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <a
<<<<<<< HEAD
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              ></a>
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              ></Link>
                Contact Sales
              </Link>
=======
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Request Custom Solution
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;
