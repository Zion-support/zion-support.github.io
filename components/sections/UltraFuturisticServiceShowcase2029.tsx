import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react',

interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  link: string
}

interface UltraFuturisticServiceShowcase2029Props {
  services: Service[],
  title?: string,
  subtitle?: string
}

export default function UltraFuturisticServiceShowcase2029({ 
  services, 
  title = &quot;2029 Cutting-Edge Services&quot;, 
  subtitle = &quot;Experience the future of technology with our revolutionary solutions&quot; 
}: UltraFuturisticServiceShowcase2029Props) {
  return (
    <section className=&quot;py-20 bg-gradient-to-br from-black via-gray-900 to-black&quot;>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=&quot;text-center mb-16&quot;
        >
          <h2 className=&quot;text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
            {title}
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            {subtitle}
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className=&quot;group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20&quot;
import React from 'react';
import Link from 'next/link';

interface Service {_id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;}

interface UltraFuturisticServiceShowcase2029Props {_services: Service[];
  title?: string;
  subtitle?: string;}

export default function UltraFuturisticServiceShowcase2029(_{_services, _title = "2029 Cutting-Edge Services", _subtitle = "Experience the future of technology with our revolutionary solutions"}: UltraFuturisticServiceShowcase2029Props) {_return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            {_title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_services.slice(0, _6).map(_(service, _index) => (
            <motion.div
              key={service.id}
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: index * 0.1}}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;flex items-center justify-between mb-4&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <div className=&quot;w-3 h-3 bg-cyan-400 rounded-full animate-pulse&quot; />
                  <span className=&quot;text-sm text-cyan-400 font-medium&quot;>NEW</span>
                </div>
                <div className=&quot;flex items-center space-x-1&quot;>
                  <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                  <span className=&quot;text-sm text-gray-300&quot;>5.0</span>
                </div>
              </div>

              <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                {service.name}
              </h3>
              <p className=&quot;text-gray-400 text-sm mb-3&quot;>{service.tagline}</p>
              <p className=&quot;text-gray-300 mb-4 line-clamp-3&quot;>{service.description}</p>

              <div className=&quot;flex items-center justify-between mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</span>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Zap className=&quot;w-4 h-4 text-yellow-400&quot; />
                  <Shield className=&quot;w-4 h-4 text-green-400&quot; />
                  <Brain className=&quot;w-4 h-4 text-purple-400&quot; />
                </div>
              </div>

              <Link
                href={service.link}
                className=&quot;inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25&quot;
              >
                Get Started
                <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform&quot; />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className=&quot;text-center mt-12&quot;
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
          </a>
        </motion.div>
      </div>
    </section>
  )
}