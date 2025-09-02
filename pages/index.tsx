import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout 
      title="Zion Tech Solutions - Leading Technology Solutions Provider"
      description="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <Head>
          <meta name="keywords" content="AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development" />
          <meta property="og:title" content="Zion Tech Solutions - Leading Technology Solutions Provider" />
          <meta property="og:description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Solutions - Leading Technology Solutions Provider" />
          <meta name="twitter:description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services." />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>
        
        <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center text-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Welcome to Zion Tech Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            variants={fadeInUp}
          >
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Explore our technology services"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Contact us for technology solutions"
            >
              Get in Touch
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-300">AI Development</h3>
              <p className="text-gray-200">Custom AI solutions and machine learning models for your business needs.</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Cloud Architecture</h3>
              <p className="text-gray-200">Scalable cloud solutions and infrastructure design for modern applications.</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Digital Transformation</h3>
              <p className="text-gray-200">End-to-end digital transformation services to modernize your business.</p>
            </motion.div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;