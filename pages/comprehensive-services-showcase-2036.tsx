

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
  const categories = [...new Set(allServices.map(service => service.category))]
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {motion} from 'framer-motion';

  const categories = [...new Set(allServices.map(service => service.category))]
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036ITServices } from '../data/real-2036-it-services';
import { real2036AIServices } from '../data/real-2036-ai-services';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices;
    ...real2036ITServices;
    ...real2036AIServices
<<<<<<< HEAD
  ];
const ComprehensiveServicesShowcase2036: React.FC = () => {;
  const allServices = [;
    ...real2036InnovativeServices,;
    ...real2036ITServices,;
    ...real2036AIServices,  ];
<<<<<<< HEAD
  const categories = [...new Set(allServices && allServices.map(service => service && service.category))],;
  return (
      />;
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>;
        {/* Hero Section */}
        <section className='relative py-20 px-4 overflow-hidden'>;
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse'></div>;
          <div className='relative z-10 max-w-7xl mx-auto text-center'>;
            <motion&& motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
              2036 Services Showcase;
            </motion && motion.h1>;
            <motion&& motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
              Experience the future of technology with our revolutionary;
              portfolio of AI, Quantum Computing, Space Technology, and;
              cutting-edge IT solutions;
            </motion && motion.p>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
    <Layout>
      <SEO 
import React from 'react',
import SEO from '../components/SEO',
import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

import {real2036InnovativeServices} from '../data/real-2036-innovative-services';
import {real2036ITServices} from '../data/real-2036-it-services';
import {real2036AIServices} from '../data/real-2036-ai-services';
import {motion} from 'framer-motion';
const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices
    ...real2036ITServices
    ...real2036AIServices,  ];
  const categories = [...new Set(allServices.map(service => service.category))]
import React from 'react',
import SEO from '../components/SEO',
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  const categories = [...new Set(allServices && allServices.map(service => service && service.category))],;
  return (
=======
  ],
  const categories = [...new Set(allServices.map(service => service.category))],
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              2036 Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
=======
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              Experience the future of technology with our revolutionary portfolio of AI, Quantum Computing, Space Technology, and cutting-edge IT solutions
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
className="flex flex-col sm:flex-row gap-4 justify-center"
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>
        {/* Hero Section */}
        <section className='relative py-20 px-4 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse'></div>
          <div className='relative z-10 max-w-7xl mx-auto text-center'>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                View Pricing
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </button>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD

              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
        {/* Services Overview */}
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Revolutionary Service Categories;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Our comprehensive portfolio spans the most advanced and;
                innovative technology domains, designed to transform businesses;
                and drive the future forward.              </p>;
            </motion && motion.div>;
=======


              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg'>;
                Get Started Today;
              </button>;
              <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>                View Pricing;
              </button>;
            </motion && motion.div>;
          </div>;
        </section>;



        {/* Services Overview */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        {/* Services Overview */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Category Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {categories && categories.map((category, index) => (;
                <motion&& motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105'>;
                  <h3 className='text-2xl font-bold mb-4 text-cyan-400'>;
                    {category}
                  </h3>;
                  <p className='text-gray-300 mb-4'>;
                    {;
                      allServices && allServices.filter(;
                        service => service && service.category === category;
                      ).length;
                    }{' '}
                    innovative services;
                  </p>;
                  <div className='flex items-center justify-between'>;
                    <span className='text-sm text-gray-400'>Starting from</span>;
                    <span className='text-lg font-bold text-green-400'>;
                      $;
                      {Math && Math.min(;
                        ...allServices;
                          .filter(service => service && service.category === category);
                          .map(s => parseInt(s && s.price.replace(/[^0-9]/g, '')));
                      )}                    </span>;
                  </div>;
                </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
              ))}
            </div>;
            {/* Featured Services */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="text-center mb-16"
        {/* Services Overview */}
        <section className='py-16 px-4'>
          <div className='max-w-7xl mx-auto'>
        {/* Services Overview */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
=======

              ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans the most advanced and innovative technology domains, designed to transform businesses and drive the future forward.
              </p>
            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            {/* Category Cards */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => (
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Category Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {categories.map((category, index) => (
                <motion.div
<<<<<<< HEAD
=======
            {/* Category Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>              {categories.map((category, index) => (
                <motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105'
            {/* Category Cards */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categories.map((category, index) => (
                <motion.div
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                  transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{category}</h3>
                  <p className="text-gray-300 mb-4">
                    {allServices.filter(service => service.category === category).length} innovative services
                  </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-400'>Starting from</span>
                    <span className='text-lg font-bold text-green-400'>
                      $
                      {Math.min(
                        ...allServices
                          .filter(service => service.category === category)
                          .map(s => parseInt(s.price.replace(/[^0-9]/g, '')))
                      )}                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
=======

            <motion.div 

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="text-center mb-16"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Featured Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-lg font-bold text-green-400">
                      ${Math.min(...allServices.filter(service => service.category === category).map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>;
                  </div>;
                </motion.div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
            {/* Featured Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-lg font-bold text-green-400">
                      ${Math.min(...allServices.filter(service => service.category === category).map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>;
                  </div>;
                </motion.div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
            {/* Featured Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology.
              </p>
<<<<<<< HEAD
            </motion.div>
<<<<<<< HEAD
            {/* Featured Services Grid */}
            </div>;
=======

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Featured Revolutionary Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover our most innovative and game-changing services that are;
                reshaping industries and defining the future of technology.              </p>;
            </motion && motion.div>;


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Featured Services Grid */}

            </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* All Services Section */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
            {/* Featured Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
              {allServices
                .filter(service => service.popular)
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-4xl'>{service.icon}</span>
                      {service.popular && (
                        <span className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full'>
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className='text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 text-sm mb-4'>
                      {service.tagline}
                    </p>
                    <div className='mb-4'>
                      <span className='text-3xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-gray-400'>/{service.period}</span>
                    </div>
                    <div className='mb-4'>
                      <span className='text-sm text-gray-400'>
                        Market Price:{' '}
                      </span>
                      <span className='text-sm text-yellow-400'>
                        {service.marketPrice}
                      </span>
                    </div>
                    <div className='space-y-2 mb-4'>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className='flex items-center text-sm text-gray-300'
                        >
                          <span className='text-cyan-400 mr-2'>✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>
                      Learn More
                    </button>
                  </motion.div>
                ))}
            </div>
            {/* All Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            {/* Featured Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                  transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
            {/* All Services Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our entire collection of {allServices.length} innovative services across all technology domains.
              </p>
<<<<<<< HEAD
            </motion.div>

<<<<<<< HEAD
=======

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Complete Service Portfolio;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Explore our entire collection of {allServices && allServices.length} innovative;
                services across all technology domains.              </p>;
            </motion && motion.div>;
            {/* Services by Category */}
            {categories && categories.map((category, categoryIndex) => (;
              <motion&& motion.div
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Services by Category */}
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
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
                className='mb-16'
            {/* Services by Category */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {categories.map((category, categoryIndex) => (;
              <motion.div;
                key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </motion.div>
            {/* Services by Category */}
            {categories && categories.map((category, categoryIndex) => (;
              <motion&& motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allServices
                    .filter(service => service.category === category)
                    .map((service, serviceIndex) => (
                      <motion.div
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6
                          delay: serviceIndex * 0.1
                        }}
                        className='bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{service.icon}</span>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
<<<<<<< HEAD
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                          )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-white">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-gray-400 text-sm">/{service.period}</span>
                        </div>
                        <div className="space-y-1 mb-3">
                          {service.features.slice(0, 2).map((feature, idx) => (
<<<<<<< HEAD

<<<<<<< HEAD
<button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <div
                              key={idx}
                              className='flex items-center text-xs text-gray-300'
                            >
                              <span className='text-cyan-400 mr-2'>•</span>                              {feature}
                            </div>
                          ))}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <span className="text-cyan-400 mr-2">•</span>
                              {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </div>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
                          View Details
                        </button>
                      </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
                    ))}
</div>;
              </motion && motion.div>;
            ))}
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20'
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
            {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
              className="text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Contact Us Today
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  ),
};

  )
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className='text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20'>;
              <h2 className='text-4xl font-bold mb-6 text-white'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                Join the future of technology with our revolutionary services.;
                Get in touch to discuss how we can help you achieve your goals.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>;
                  Contact Us Today;
                </button>;
                <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>                  Schedule Demo;
                </button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  ),;
};
<<<<<<< HEAD
<<<<<<< HEAD
export default ComprehensiveServicesShowcase2036;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default ComprehensiveServicesShowcase2036;


=======
  const all_services = [;
    ...real2036InnovativeServices,
    ...real2036ITServices,
    ...real2036AIServices,  ];
;
  const categories = [...new Set (all_services.map (service => service.category))],
  return (
    <Layout>;
      <SEO;
        title='Comprehensive Services Showcase 2036 - Zion Tech Group';
        description='Explore our revolutionary 2036 services portfolio featuring AI, Quantum Computing, Space Technology, and cutting - edge IT solutions. Transform your business with next - generation technology.';
        keywords='AI services, quantum computing, space technology, IT solutions, 2036, Zion Tech Group, innovative technology';
      />;
      <div className='min - h-screen bg - gradient - to - br from - black via - gray - 900 to - black text - white'>;
        {/* Hero Section */}
        <section className='relative py - 20 px - 4 overflow - hidden'>;
          <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 20 via - blue - 500 / 20 to - purple - 500 / 20 animate - pulse'></div>;
          <div className='relative z - 10 max - w-7xl mx - auto text - center'>;
            <motion.h1;
              initial={{ opacity: 0, coordinate_y: 50 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent';
            >;
              2036 Services Showcase;
            </motion.h1>;
            <motion.p;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto';
            >;
              Experience the future of technology with our revolutionary;
              portfolio of AI, Quantum Computing, Space Technology, and;
              cutting - edge IT solutions;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex - col sm:flex - row gap - 4 justify - center';
            >;
              <button className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg'>;
                Get Started Today;
              </button>;
              <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105'>                View Pricing;
              </button>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Overview */}
        <section className='py - 16 px - 4'>;
          <div className='max - w-7xl mx - auto'>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Revolutionary Service Categories;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Our comprehensive portfolio spans the most advanced and;
                innovative technology domains, designed to transform businesses;
                and drive the future forward.              </p>;
            </motion.div>;
            {/* Category Cards */}
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>              {categories.map ((category, index) => (
                <motion.div;
                  key={category}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 rounded - xl p - 6 hover:border - cyan - 400 transition - all duration - 300 hover:transform hover:scale - 105';
                >;
                  <h3 className='text - 2xl font - bold mb - 4 text - cyan - 400'>;
                    {category}
                  </h3>;
                  <p className='text - gray - 300 mb - 4'>;
                    {
                      all_services.filter (
                        service => service.category === category).length;
                    }{' '}
                    innovative services;
                  </p>;
                  <div className='flex items - center justify - between'>;
                    <span className='text - sm text - gray - 400'>Starting from</span>;
                    <span className='text - lg font - bold text - green - 400'>;
                      $;
                      {Math.min (
                        ...all_services;
                          .filter (service => service.category === category);
                          .map (string => parse_int (s.price.replace (/[^0 - 9]/g, ''))))}                    </span>;
                  </div>;
                </motion.div>))}
            </div>;
            {/* Featured Services */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Featured Revolutionary Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Discover our most innovative and game - changing services that are;
                reshaping industries and defining the future of technology.              </p>;
            </motion.div>;
            {/* Featured Services Grid */}
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>;
              {all_services;
                .filter (service => service.popular);
                .slice (0, 6);
                .map ((service, index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className='bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 rounded - xl p - 6 hover:border - cyan - 400 transition - all duration - 300 hover:transform hover:scale - 105 group';
                  >;
                    <div className='flex items - center justify - between mb - 4'>;
                      <span className='text - 4xl'>{service.icon}</span>;
                      {service.popular && (
                        <span className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - xs px - 3 py - 1 rounded - full'>;
                          Popular;
                        </span>)}
                    </div>;
                    <h3 className='text - xl font - bold mb - 2 text - white group - hover:text - cyan - 400 transition - colors'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 300 text - sm mb - 4'>;
                      {service.tagline}
                    </p>;
                    <div className='mb - 4'>;
                      <span className='text - 3xl font - bold text - green - 400'>;
                        {service.price}
                      </span>;
                      <span className='text - gray - 400'>/{service.period}</span>;
                    </div>;
                    <div className='mb - 4'>;
                      <span className='text - sm text - gray - 400'>;
                        Market Price:{' '}
                      </span>;
                      <span className='text - sm text - yellow - 400'>;
                        {service.market_price}
                      </span>;
                    </div>;
                    <div className='space - y-2 mb - 4'>;
                      {service.features.slice (0, 3).map ((feature, idx) => (
                        <div;
                          key={idx}
                          className='flex items - center text - sm text - gray - 300';
                        >;
                          <span className='text - cyan - 400 mr - 2'>✓</span>;
                          {feature}
                        </div>))}
                    </div>;
                    <button className='w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white py - 2 px - 4 rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105'>;
                      Learn More;
                    </button>;
                  </motion.div>))}
            </div>;
            {/* All Services Section */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Complete Service Portfolio;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Explore our entire collection of {all_services.length} innovative;
                services across all technology domains.              </p>;
            </motion.div>;
            {/* Services by Category */}
            {categories.map ((category, category_index) => (
              <motion.div;
                key={category}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: category_index * 0.2 }}
                className='mb - 16';
              >;
                <h3 className='text - 3xl font - bold mb - 8 text - center text - cyan - 400'>;
                  {category}
                </h3>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>                  {all_services;
                    .filter (service => service.category === category);
                    .map ((service, service_index) => (
                      <motion.div;
                        key={service.id}
                        initial={{ opacity: 0, coordinate_y: 20 }}
                        whileInView={{ opacity: 1, coordinate_y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: service_index * 0.1,
                        }}
                        className='bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 backdrop - blur - sm border border - gray - 700 rounded - lg p - 4 hover:border - cyan - 400 transition - all duration - 300 hover:transform hover:scale - 105';
                      >;
                        <div className='flex items - center justify - between mb - 3'>;
                          <span className='text - 2xl'>{service.icon}</span>;
                          {service.popular && (
                            <span className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - xs px - 2 py - 1 rounded - full'>                              Popular;
                            </span>)}
                        </div>;
                        <h4 className='text - lg font - bold mb - 2 text - white'>;
                          {service.name}
                        </h4>;
                        <p className='text - gray - 300 text - sm mb - 3'>;
                          {service.description}
                        </p>;
                        <div className='mb - 3'>;
                          <span className='text - 2xl font - bold text - green - 400'>;
                            {service.price}
                          </span>;
                          <span className='text - gray - 400 text - sm'>;
                            /{service.period}
                          </span>;
                        </div>;
                        <div className='space - y-1 mb - 3'>;
                          {service.features.slice (0, 2).map ((feature, idx) => (
                            <div;
                              key={idx}
                              className='flex items - center text - xs text - gray - 300';
                            >;
                              <span className='text - cyan - 400 mr - 2'>•</span>                              {feature}
                            </div>))}
                        </div>;
                        <button className='w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white py - 2 px - 3 rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 text - sm'>                          View Details;
                        </button>;
                      </motion.div>))}
                </div>;
              </motion.div>))}
            {/* Call to Action */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center py - 16 bg - gradient - to - r from - cyan - 500 / 10 via - blue - 500 / 10 to - purple - 500 / 10 rounded - 2xl border border - cyan - 400 / 20';
            >;
              <h2 className='text - 4xl font - bold mb - 6 text - white'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
                Join the future of technology with our revolutionary services.;
                Get in touch to discuss how we can help you achieve your goals.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <button className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105'>;
                  Contact Us Today;
                </button>;
                <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105'>                  Schedule Demo;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},
export default ComprehensiveServicesShowcase2036,
              className="text-center py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20";
            >;
              <h2 className="text-4xl font-bold mb-6 text-white">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">;
                  Contact Us Today;
                </button>;
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">;
                  Schedule Demo;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD


export default ComprehensiveServicesShowcase2036;
;
<<<<<<< HEAD
    </Layout>;
  );
},;
export default ComprehensiveServicesShowcase2036;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </Layout>),
}
;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ComprehensiveServicesShowcase2036;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
