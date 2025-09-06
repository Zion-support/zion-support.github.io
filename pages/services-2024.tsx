
import {;
  Search, Filter, Star, Users, TrendingUp,;
  Brain, Atom, Cpu, Shield, Database, Cloud,;
  ArrowRight, CheckCircle, Zap, Sparkles;
} from 'lucide-react',;

import { realMicroSaasServices2024 } from '../data/2024-real-micro-saas-services';
import { innovativeITServices2024 } from '../data/2024-innovative-it-services';
import UltraFuturisticBackground2034 from '../components/backgrounds/UltraFuturisticBackground2034';
import Link from 'next/link';

  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai')) return Brain,
    if (variant.includes('security')) return Shield,
    if (variant.includes('it')) return Cpu,
    if (variant.includes('api')) return Database,
    if (variant.includes('cloud')) return Cloud,
    if (variant.includes('marketing')) return TrendingUp,
    if (variant.includes('project')) return Users,
    if (variant.includes('customer')) return CheckCircle,
    return Sparkles
  },
  const getVariantColor = (variant: string) => {
    if (variant.includes('ai')) return 'from-blue-500 to-cyan-500',
    if (variant.includes('security')) return 'from-red-500 to-pink-500',
    if (variant.includes('it')) return 'from-green-500 to-emerald-500',
    if (variant.includes('api')) return 'from-purple-500 to-violet-500',
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500',
    if (variant.includes('marketing')) return 'from-yellow-500 to-orange-500',
    if (variant.includes('project')) return 'from-teal-500 to-cyan-500',
    if (variant.includes('customer')) return 'from-pink-500 to-rose-500',
    return 'from-gray-500 to-slate-500'
  },

  return (
    <>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, quantum security, enterprise IT, automation, 2024 technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">2024 Revolutionary Services</span>
              </div>

                  Future-Ready
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>

                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">17</div>
                  <div className="text-gray-400">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">4.8</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    <input
                      type="text"
                      placeholder="Search services by name, features, or description..."
                      value={searchQuery  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200"
                    />
                  </div>
                </div>

                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSortBy(e.target.value as any)} className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200">
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                  </select>
                  <button

                  </button>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div

                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>

                            </div>
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                          {service.features.length > 3 && (
                            <div className="text-sm text-cyan-400">
                              +{service.features.length - 3} more features
                            </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-white">{service.rating}</span>

                          </div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-white mb-1">{service.customers}</div>
                          <div className="text-xs text-gray-400">Customers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-white mb-1">{service.launchDate}</div>
                          <div className="text-xs text-gray-400">Launched</div>
                        </div>
                      </div>

                        <Link
                          href={service.link} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group">
                          <span className="font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">

                        </div>
                      </div>
                    </div>
                  </motion.div>

                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already leveraging our revolutionary 2024 services.
                Get started today and experience the future of technology.
              </p>
              <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link

                  href="/contact" className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>Get Started Today</span>
                </Link>
                <Link
                  href="/pricing-2033" className="flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold">
                  <span>View Pricing Plans</span>
                  <ArrowRight className="w-4 h-4" />

                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>

  )

              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;

export default Services2024Page;
