import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SEO from '../src/components/SEO';

const Home = React.memo(function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
    
    // Performance monitoring
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const metrics = entries.map(entry => ({
          name: entry.name,
          duration: entry.duration,
          startTime: entry.startTime
        }));
        setPerformanceMetrics(metrics);
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain intelligent insights.",
      icon: "🤖",
      color: "blue" as const,
      delay: 0.1
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions that grow with your business needs.",
      icon: "☁️",
      color: "indigo" as const,
      delay: 0.2
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business operations.",
      icon: "🚀",
      color: "purple" as const,
      delay: 0.3
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your data and systems from threats.",
      icon: "🛡️",
      color: "green" as const,
      delay: 0.4
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies.",
      icon: "💻",
      color: "orange" as const,
      delay: 0.5
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly.",
      icon: "🛡️",
      color: "blue" as const,
      delay: 0.6
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Zion App - Advanced Technology Solutions</title>
        <meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI, cloud computing, web development, and digital transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
                  <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Advanced Technology
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Empowering businesses with cutting-edge AI, cloud computing, and digital transformation solutions. 
              Build the future with our comprehensive technology services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive technology solutions that drive innovation and growth for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                  className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics Section */}
        {performanceMetrics && (
          <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Performance Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {performanceMetrics.length}
                  </div>
                  <div className="text-gray-600">Metrics Tracked</div>
                </div>
                <div className="bg-white/80 rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {isVisible ? '✓' : '⏳'}
                  </div>
                  <div className="text-gray-600">Page Loaded</div>
                </div>
                <div className="bg-white/80 rounded-lg p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {isLoading ? '⏳' : '✓'}
                  </div>
                  <div className="text-gray-600">Ready</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
});

Home.displayName = 'Home';

export default Home;