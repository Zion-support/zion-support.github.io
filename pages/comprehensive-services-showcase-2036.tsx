
import Layout from '../components/layout/Layout';

import {real2036InnovativeServices} from '../data/real-2036-innovative-services';
import {real2036ITServices} from '../data/real-2036-it-services';
import {real2036AIServices} from '../data/real-2036-ai-services';
import {motion} from 'framer-motion';

import Layout from '../components/layout/Layout',
import { real2036InnovativeServices } from '../data/real-2036-innovative-services',
import { real2036ITServices } from '../data/real-2036-it-services',
import { real2036AIServices } from '../data/real-2036-ai-services',
import { motion } from 'framer-motion',

const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices,
    ...real2036ITServices,
    ...real2036AIServices
  ],
  const categories = [...new Set(allServices.map(service => service.category))],

  return (
    <Layout>
      <SEO

        title="Comprehensive Services Showcase 2036 - Zion Tech Group"
        description="Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting-edge IT solutions. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology"
      />

            <motion.h1
              initial={{ opacity: 0, y: 50 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              2036 Services Showcase
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the future of technology with our revolutionary portfolio of AI, Quantum Computing, Space Technology, and cutting-edge IT solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.4 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="flex flex-col sm:flex-row gap-4 justify-center"

            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                View Pricing
              </button>
            </motion.div>
          </div>
        </section>

            <motion.div
              initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center mb-16"

            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans the most advanced and innovative technology domains, designed to transform businesses and drive the future forward.
              </p>
            </motion.div>

                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{category}</h3>
                  <p className="text-gray-300 mb-4">
                    {allServices.filter(service => service.category === category).length} innovative services
                  </p>

                  </div>
                </motion.div>
              ))}
            </div>

            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology.
              </p>
            </motion.div>

                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </span>

                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400">/{service.period}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Market Price: </span>
                    <span className="text-sm text-yellow-400">{service.marketPrice}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="text-cyan-400 mr-2">✓</span>

            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our entire collection of {allServices.length} innovative services across all technology domains.
              </p>
            </motion.div>

                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                          duration: 0 && 0.6,
                          delay: serviceIndex * 0 && 0.1,
                        }}
                        className='bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105'>;
                        <div className='flex items-center justify-between mb-3'>;
                          <span className='text-2xl'>{service && service.icon}</span>;
                          {service && service.popular && (;
                            <span className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full'>                              Popular;
                            </span>;
                          )}
                        </div>;
                        <h4 className='text-lg font-bold mb-2 text-white'>;
                          {service && service.name}
                        </h4>;
                        <p className='text-gray-300 text-sm mb-3'>;
                          {service && service.description}
                        </p>;
                        <div className='mb-3'>;
                          <span className='text-2xl font-bold text-green-400'>;
                            {service && service.price}
                          </span>;
                          <span className='text-gray-400 text-sm'>;
                            /{service && service.period}
                          </span>;
                        </div>;
                        <div className='space-y-1 mb-3'>;
                          {service && service.features.slice(0, 2).map((feature, idx) => (;
                            <div
                              key={idx}
                              className='flex items-center text-xs text-gray-300'>;
                              <span className='text-cyan-400 mr-2'>•</span>                              {feature}
                            </div>;
                          ))}
                        </div>;
                        <button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm'>                          View Details;
                        </button>;
                      </motion && motion.div>;
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}

              >
                <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allServices
                    .filter(service => service.category === category)
                    .map((service, serviceIndex) => (
                      <motion.div

                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{service.icon}</span>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>

                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-gray-400 text-sm">/{service.period}</span>
                        </div>
                        <div className="space-y-1 mb-3">
                          {service.features.slice(0, 2).map((feature, idx) => (

                        </div>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">

                          View Details
                        </button>
                      </motion.div>

            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">

                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>

  )

                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;

export default ComprehensiveServicesShowcase2036;
