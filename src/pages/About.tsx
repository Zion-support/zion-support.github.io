
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  GlobeAltIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
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
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Technology Innovation & Digital Transformation</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to drive digital transformation through innovative technology solutions, AI services, and expert consulting." />
        <meta name="keywords" content="about Zion Tech Group, technology company, digital transformation, AI innovation, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We're a team of passionate technologists dedicated to transforming businesses through innovative technology solutions and digital excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth in an ever-evolving digital landscape.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that technology should be an enabler, not a barrier, and we're committed to making advanced solutions accessible and practical for businesses of all sizes.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To be the leading force in digital transformation, setting new standards for technological innovation and business excellence across industries.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We envision a future where every business can harness the full potential of technology to create meaningful impact and sustainable growth.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we deliver
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly push the boundaries of what's possible, exploring emerging technologies and creative solutions to solve complex business challenges.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Trust & Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  We prioritize the security and privacy of our clients' data, building robust, compliant solutions that protect their most valuable assets.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <UsersIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Client Success</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your success is our success. We're committed to understanding your unique needs and delivering solutions that exceed your expectations.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain the highest standards of quality in everything we do, from code to customer service, ensuring exceptional results every time.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Passion</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're passionate about technology and its power to transform businesses. This passion drives us to go above and beyond for our clients.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe in the power of technology to create positive change worldwide, helping businesses contribute to a better, more connected future.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experienced professionals passionate about technology and committed to your success
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">KL</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
                <p className="text-blue-400 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-300 leading-relaxed">
                  Technology visionary with over 15 years of experience in digital transformation and enterprise solutions.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">TS</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tech Specialists</h3>
                <p className="text-green-400 font-medium mb-4">Expert Team</p>
                <p className="text-gray-300 leading-relaxed">
                  Skilled professionals specializing in AI, cloud computing, cybersecurity, and digital transformation.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">CS</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Client Success</h3>
                <p className="text-purple-400 font-medium mb-4">Support Team</p>
                <p className="text-gray-300 leading-relaxed">
                  Dedicated professionals ensuring your success through exceptional service and ongoing support.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <RocketLaunchIcon className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                >
                  <GlobeAltIcon className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
