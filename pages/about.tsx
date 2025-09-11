import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Target, Globe, Heart, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Speed and efficiency are at the core of everything we do, delivering results when you need them most.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Your data and systems are protected with enterprise-grade security measures and best practices.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Our diverse team of experts brings together decades of experience across multiple industries.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the team behind our innovative technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to transforming businesses through innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${value.color} mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  enhance efficiency, and create lasting value. We believe in the power of innovation 
                  to transform industries and improve lives.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;