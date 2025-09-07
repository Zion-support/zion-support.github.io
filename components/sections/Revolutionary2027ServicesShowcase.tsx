

import React from 'react';
import { motion  } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud, Atom, Microscope, Satellite, DollarSign, Factory, Earth, TestTube, Megaphone, Scale, Network  } from 'lucide-react';
import Link from 'next/link';
const Revolutionary2027ServicesShowcase = null;

const containerVariants = {}
    hidden: { opacity: 0}
}
    visible: {
      opacity: 1;
transition: {
}
staggerChildren: 0.1}
      }
    }
  }
  const itemVariants = {
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              2027 Revolutionary Services
            </span>
          </h2>'
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>

          </p>
        </motion.div>
        {/* Category Overview */}
        <motion.div
          variants={containerVariants}

        {/* Category Overview */}

          whileInView='visible'
          viewport={{ once: true }

          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
            />
          {categories.map((category, index) => (}
            <motion.div;}
key={category.name}
              variants={itemVariants}
className='relative group'    />

              <div
                className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transform transition-all duration-300 group-hover: shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl
}    />

                <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm'    />
                  <category.icon className='w-8 h-8 text-white'    />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'    />
                  {category.name}
                </h3>
                <p className='text-2xl font-bold text-white'    />
                  {category.count}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Featured Services Grid */}
        <motion.div
          variants={containerVariants}
initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}'"
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'        >          initial="hidden";"
          whileInView="visible"
          viewport={{ once: true }}"
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16"
          {featured_services.map ((service, index) => (
            <motion.div
              key={service.id}
              variants={item_variants}'
              className='group relative'
            >;'
              <div className='relative bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - xl border border - gray - 700 / 50 rounded - 3xl p - 8 h - full transform transition - all duration - 500 group - hover:shadow - xl hover:shadow - cyan - 500 / 30 group - hover:shadow - 2xl group - hover:shadow - purple - 500 / 20'>
                {/* Service Icon */}
                <div;`
                  className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6 transform transition - transform duration - 300 group - hover:shadow - lg hover:shadow - cyan - 400 / 40`}
                >;'
                  <service.icon className='w - 8 h - 8 text - white' />
                </div>
                {/* Service Content */}'
                <div className='space - y-4'>;'
                  <h3 className='text - 2xl font - bold text - white group - hover:text - transparent group - hover:bg - gradient - to - r group - hover:from - cyan - 400 group - hover:to - purple - 400 group - hover:bg - clip - text transition - all duration - 300'>
                    {service.name}
                  </h3>;'
                  <p className='text - gray - 300 leading - relaxed'>                    {service.description}
                  </p>
                  {/* Features */}            >;"
              <div className="relative bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - xl border border - gray - 700 / 50 rounded - 3xl p - 8 h - full transform transition - all duration - 500 group - hover:shadow - xl hover:shadow - cyan - 500 / 30 group - hover:shadow - 2xl group - hover:shadow - purple - 500 / 20">
                {/* Service Icon */}`
                <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6 transform transition - transform duration - 300 group - hover:shadow - lg hover:shadow - cyan - 400 / 40`}>;"
                  <service.icon className="w - 8 h - 8 text - white" />
                </div>
                {/* Service Content */}"
                <div className="space - y-4">;"
                  <h3 className="text - 2xl font - bold text - white group - hover:text - transparent group - hover:bg - gradient - to - r group - hover:from - cyan - 400 group - hover:to - purple - 400 group - hover:bg - clip - text transition - all duration - 300">
                    {service.name}
                  {/* Features */}'
                  <div className='space-y-2'>
                    {service && service.features.slice(0, 3).map((feature, idx) => (;'
                      <div key={idx} className='flex items-center space-x-2'>;'
                        <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>;'"
                        <span className='text-sm text-gray-400'>{feature}</span>                      </div>                  <div className="space-y-2">
                    {service && service.features.slice(0, 3).map((feature, idx) => (;"
                      <div key={idx} className="flex items-center space-x-2">;"
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>;"
                        <span className="text-sm text-gray-400">{feature}</span>
                    ))}
                  </div>
                  {/* Market Info */}
                  <div className='pt-4 border-t border-gray-700/50'>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'    />
              Join the future of technology with our revolutionary 2027
services. Get in touch to discover how we can accelerate your
digital transformation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'    />
              <Link
href='https://ziontechgroup.com/contact'
                className='inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25'
                  />
                <span    />Get Started Today</span>
                <ArrowRight className='w-5 h-5'    />
              </Link>
              <a
                href='tel:+13024640950'
                className='inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl'              >        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2027 services.
              Get in touch to discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl"
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Revolutionary2027ServicesShowcase;  )
}
export default Revolutionary2027ServicesShowcase;

"
