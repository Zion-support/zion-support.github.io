import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EnhancedLayout } from '../components/EnhancedLayout';

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
    <EnhancedLayout 
      title="Zion Tech Solutions - Leading Technology Solutions Provider"
      description="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
      keywords="AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development"
      canonical="https://ziontechgroup.com"
      showPerformanceMetrics={false}
      showSEOAnalysis={false}
    >
        
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 border border-white/20"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-300">AI Development</h3>
              <p className="text-gray-200 mb-4">Custom AI solutions and machine learning models for your business needs.</p>
              <Link 
                href="/services#ai" 
                className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 border border-white/20"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Cloud Architecture</h3>
              <p className="text-gray-200 mb-4">Scalable cloud solutions and infrastructure design for modern applications.</p>
              <Link 
                href="/services#cloud" 
                className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 border border-white/20"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Digital Transformation</h3>
              <p className="text-gray-200 mb-4">End-to-end digital transformation services to modernize your business.</p>
              <Link 
                href="/services#transformation" 
                className="text-indigo-300 hover:text-indigo-200 text-sm font-medium transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="mt-20 text-center"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">5★</div>
                <div className="text-sm text-gray-300">Client Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
    </EnhancedLayout>
  );
};

export default Home;