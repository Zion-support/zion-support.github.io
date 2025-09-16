import type { NextPage } from \'next\'; import Head from \'next/head\'; import Navigation from \'../components/Navigation\'; import SiteFooter from \'../src/components/SiteFooter\'; const \"About\": NextPage = () => {; return (; <> <Head> <title>About Us - Zion Tech Group></div> <meta name=\"description\" content=\"Learn about Zion Tech Group\'s mission to provide cutting-edge technology solutions and our team of expert professionals.\" /> ></div> <Navigation /> ; <main className=\"min-h-screen bg-gray-900 pt-16\"> <div className=\"container mx-auto px-4 py-16\"> <div className=\"max-w-4xl mx-auto text-center text-white\"> <h1 className=\"text-5xl font-bold mb-8\"> About <span className=\"bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent\">Zion Tech Group></div> ></div> <p className=\"text-xl text-gray-300 mb-12 leading-relaxed\"> We are a leading technology solutions provider dedicated to transforming businesses ; through innovative AI,cloud architecture,and cutting-edge development services.; ></div> <div className=\"grid \"md\": grid-cols-3 gap-8 mt-16\"> <div className=\"bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10\"> <h3 className=\"text-2xl font-bold mb-4 text-blue-400\">Our Mission></div> <p className=\"text-gray-300\"> To empower businesses with cutting-edge technology solutions that drive growth,; efficiency,and innovation in the digital age.; ></div> ></div> <div className=\"bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10\"> <h3 className=\"text-2xl font-bold mb-4 text-purple-400\">Our Vision></div> <p className=\"text-gray-300\"> To be the global leader in AI-powered technology solutions,; setting the standard for innovation and excellence.; ></div> ></div> <div className=\"bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10\"> <h3 className=\"text-2xl font-bold mb-4 text-pink-400\">Our Values></div> <p className=\"text-gray-300\"> Innovation,integrity,excellence,and client success are the ; core values that guide everything we do.; ></div> ></div> ></div> ></div> ></div> ></div> <SiteFooter /> ></div> );}; export default About;
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}