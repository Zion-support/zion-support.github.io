import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Package, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, Shield } from 'lucide-react';
const SmartInventoryOptimizerPage = () => 
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const benefits: string[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    
    },
    
    },
    
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
      <Helmet /></Helmet>
        <title />Smart Inventory Optimizer | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your inventory management with AI-powered demand forecasting, smart reorder points, and real-time analytics." / />
        <meta name="keywords" content="inventory management, demand forecasting, supply chain, inventory optimization, AI inventory" / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
           /></motion>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6" /></div>
              <Package className="w-5 h-5 text-cyan-400 mr-2" / />
              <span className="text-cyan-300 font-medium" />AI-Powered Inventory Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" /></h1>
              Optimize Your
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" /> Inventory Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Transform your inventory operations with AI-powered demand forecasting, smart reorder points, 
              and real-time analytics that reduce costs and improve efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
               /></motion>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" / />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
               /></motion>
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              ></motio></motion>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" /></div>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium" /></div>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Transform Your Inventory Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Our AI-powered platform delivers measurable results that directly impact your bottom line 
              and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              ></motio></motion>
                <div className="mb-6 flex justify-center" /></div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4" /></h3>
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" />
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Leverage cutting-edge artificial intelligence to optimize every aspect of your inventory management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              ></motio></motion>
                <div className="mb-6" /></div>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4" /></h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" />
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Choose the perfect plan for your business size and inventory complexity. 
              All plans include our core AI features with no setup fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=
                }`}
              ></motio></motion>
                
                )}

                <div className="text-center mb-8" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2" />{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" /></div>
                    <span className="text-5xl font-bold text-white" />{plan.price}</span>
                    <span className="text-gray-400 ml-2" />{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8" /></ul>
                  
                    <li key={featureIndex} className="flex items-center" /></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" / />
                      <span className="text-gray-300" />{feature.title}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=
                  }`}
                 /></motion>
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Join thousands of businesses already using our Smart Inventory Optimizer 
              to reduce costs, improve efficiency, and boost profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
               /></motion>
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" / />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
               /></motion>
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-black/20" /></section>
        <div className="max-w-7xl mx-auto text-center" /></div>
          <h3 className="text-2xl font-bold text-white mb-4" />Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6" />
            Contact us today to learn more about our Smart Inventory Optimizer and how it can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300" /></div>
            <div className="flex items-center" /></div>
              <Package className="w-5 h-5 mr-2 text-cyan-400" / />
              <span />kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center" /></div>
              <Globe className="w-5 h-5 mr-2 text-cyan-400" / />
              <span />https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartInventoryOptimizerPage;
