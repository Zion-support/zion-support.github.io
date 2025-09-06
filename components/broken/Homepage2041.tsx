
import React, { useState } from 'react';

import Layout from './layout/Layout';
import { motion } from 'framer-motion';

import {

  ArrowRight,
  Star,
  Search,
  Shield,
  Globe,
  TrendingUp,
  Brain,
  Atom,
  Zap,
  Cpu,
  Cloud,
  BarChart3,
  Lock,
  Rocket,
  Eye,
  Sparkles,
  Target,
  Users,
  Award,;
  Clock,;} from 'lucide-react';import { ;

  ArrowRight;
  Star

  Search;
  Shield;
  Globe;
  TrendingUp;
  Brain;
  Atom;
  Zap;
  Cpu;
  Cloud;
  BarChart3;
  Lock;
  Rocket;
  Eye;
  Sparkles;
  Target;
  Users;
  Award;
  Clock
 } from 'lucide-react';
import Link from 'next/link',
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { innovative2041MicroSaasServices  } from '../data/innovative-2041-micro-saas-services';
import { innovative2041ITServices  } from '../data/innovative-2041-it-services';
import { innovative2041AIServices } from '../data/innovative-2041-ai-services';

const Homepage2041: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`
    }

  };


  const featuredServices = [
    ...innovative2041MicroSaasServices.filter(s => s.popular).slice(0, 3)
    ...innovative2041ITServices.filter(s => s.popular).slice(0, 2)
    ...innovative2041AIServices.filter(s => s.popular).slice(0, 1),  ];
  const testimonials = [
    {    ...innovative2041MicroSaasServices.filter(s => s.popular).slice(0, 3);
    ...innovative2041ITServices.filter(s => s.popular).slice(0, 2);
    ...innovative2041AIServices.filter(s => s.popular).slice(0, 1)
  ];
  const testimonials = [
    {


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                id='hero-heading'
                className='text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight'
              >
                <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                  2041
                </span>
                <br />
                <span className='text-white'>Future is Now</span>
              </h1>
              <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed'>
                Experience the revolution of technology with our cutting-edge
                2041 services. From AI consciousness evolution to quantum space
                mining, we're redefining what's possible.
              </p>
              {/* Search Bar */}
              <motion.div
                className='max-w-3xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form onSubmit={handleSearch} className='relative'>              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  2041
                </span>
                <br />
                <span className="text-white">
                  Future is Now
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Experience the revolution of technology with our cutting-edge 2041 services.
                From AI consciousness evolution to quantum space mining, we're redefining what's possible.
              </p>
              {/* Search Bar */}
              <motion.div
                className="max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form onSubmit={handleSearch} className='relative'>
                  <input
                    type='text'
                    placeholder='Search revolutionary 2041 services...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className='w-full px-8 py-6 bg-black/50 border border-cyan-500/50 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent backdrop-blur-sm text-lg'
                  />
                  <button
                    type='submit'
                    className='absolute right-3 top-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold'                  >                  <input
                    type="text"
                    placeholder="Search revolutionary 2041 services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-8 py-6 bg-black/50 border border-cyan-500/50 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent backdrop-blur-sm text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    Explore Future
                  </button>
                </form>
              </motion.div>
              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'                initial={{ opacity: 0, y: 20 }}              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href='/2041-futuristic-services-showcase'
                  className='px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3'
                >
                  <Rocket className='w-6 h-6' />
                  Explore 2041 Services
                  <ArrowRight className='w-5 h-5' />
                </Link>
                <Link
                  href='/contact'
                  className='px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3'
                >
                  <Users className='w-6 h-6' />                  Start Your Journey                >
                  <Rocket className="w-6 h-6" />
                  Explore 2041 Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3"
                >
                  <Users className="w-6 h-6" />
                  Start Your Journey
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='grid grid-cols-2 md:grid-cols-4 gap-8'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}

                  className='text-center'                  initial={{ opacity: 0, y: 20 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <stat.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                    {stat.number}
                  </div>

                  <div className='text-gray-400'>{stat.label}</div>                </motion.div>

                </motion.div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ))}
            </motion.div>
          </div>
        </section>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Featured Services Section */}
        <section className='py-20 px-4 bg-gradient-to-b from-black to-gray-900/50'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"


              initial={{ opacity: 0, y: 30 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                Revolutionary 2041 Services
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Experience the future of technology with our cutting-edge
                services that are redefining industries and pushing the
                boundaries of what's possible.
              </p>
            </motion.div>

            <motion.div 

              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
=======

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'              initial={{ opacity: 0, y: 30 }}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026 service={service} />
                </motion.div>
              ))}
            </motion.div>


            <motion.div
              className='text-center mt-12'              initial={{ opacity: 0, y: 20 }}


=======
            <motion.div
              className='text-center mt-12'              initial={{ opacity: 0, y: 20 }}            <motion.div 
              className="text-center mt-12"
=======

            <motion.div
              className='text-center mt-12'              initial={{ opacity: 0, y: 20 }}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href='/2041-futuristic-services-showcase'
                className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105'
              >
                <Eye className='w-5 h-5' />
                View All 2041 Services
                <ArrowRight className='w-5 h-5' />              </Link>              >
                <Eye className="w-5 h-5" />
                View All 2041 Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">

            <motion.div 
              className="text-center mb-16"

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                Leading the Future
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                See how industry leaders are transforming their businesses with
                our revolutionary 2041 services.
              </p>
            </motion.div>

            <motion.div 

              className="grid grid-cols-1 md:grid-cols-3 gap-8"
=======

            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-8'              initial={{ opacity: 0, y: 30 }}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}

                  className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-sm'                  initial={{ opacity: 0, y: 30 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className='text-4xl mb-4'>{testimonial.avatar}</div>
                  <p className='text-gray-300 mb-6 leading-relaxed'>
                    {testimonial.content}
                  </p>
                  <div className='flex items-center gap-2 mb-3'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 text-yellow-400 fill-current'
                      />
                    ))}
                  </div>
                  <div className='font-semibold text-white'>
                    {testimonial.name}
                  </div>
                  <div className='text-cyan-400'>{testimonial.role}</div>
                  <div className='text-gray-500 text-sm'>
                    {testimonial.company}

                  </div>                </motion.div>

                </motion.div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ))}
            </motion.div>
          </div>
        </section>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* CTA Section */}
        <section className='py-20 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              className='bg-gradient-to-r from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-3xl p-16 backdrop-blur-sm'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-3xl p-16 backdrop-blur-sm"


              initial={{ opacity: 0, y: 30 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-5xl md:text-6xl font-bold text-white mb-8'>
                Ready to Shape the Future?
              </h2>
              <p className='text-xl text-gray-300 mb-12 leading-relaxed'>
                Join the technological revolution with our cutting-edge 2041
                services. Transform your business, accelerate innovation, and
                lead the future of technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                <Link
                  href='/contact'
                  className='px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3'
                >
                  <Sparkles className='w-6 h-6' />
                  Start Your Journey
                </Link>
                <Link
                  href='/2041-futuristic-services-showcase'
                  className='px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3'
                >
                  <Target className='w-6 h-6' />                  Explore Services                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join the technological revolution with our cutting-edge 2041 services.
                Transform your business, accelerate innovation, and lead the future of technology.
              </p>
              <div className="flex flex-col sm: flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-6 h-6" />
                  Start Your Journey
                </Link>
                <Link
                  href="/2041-futuristic-services-showcase"
                  className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Target className="w-6 h-6" />
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );

};


}%`;
top: `$ {
  Math.random () * 100
}%`
}/>) )
}</div> </div> <motion.div initial= {
  {
  opacity: 0, y: 50
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8
}> <h1 id="hero-heading" className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight" > <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" > 2041 </span> <br /> <span className="text-white" > Future is Now </span> </h1> <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed" > Experience the revolution of technology with our cutting-edge 2041 services. From AI consciousness evolution to quantum space mining, we're redefining what's possible. </p> {
  /* Search Bar */
}<motion.div /> <button type="submit" className="absolute right-3 top-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold" > Explore Future </button> </form> </motion.div> {
  /* CTA Buttons */
}<motion.div > <Link href="/2041-futuristic-services-showcase" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3" > <Rocket className="w-6 h-6" /> Explore 2041 Services <ArrowRight className="w-5 h-5" /> </a> <Link href="/contact" className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3" > <Users className="w-6 h-6" /> Start Your Journey </a> </motion.div> </motion.div> </div> </section> > {
  stats.map ( (stat, index) => (<motion.div key= {
  stat.label
}> <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4" > <stat.icon className="w-8 h-8 text-white" /> </div> </motion.div>) )
}</motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > Revolutionary 2041 Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Experience the future of technology with our cutting-edge services that are redefining industries and pushing the boundaries of what's possible. </p> </motion.div> <motion.div > {
  featuredServices.map ( (service, index) => (<motion.div key= {
  service.id
}initial= {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.5, delay: 0.4 + index * 0.1
}viewport= {
  {
  once: true
}> <UltraFuturisticServiceCard2026 service= {
  service
}/> </motion.div>) )
}</motion.div> <motion.div > <Link href="/2041-futuristic-services-showcase" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105" > <Eye className="w-5 h-5" /> View All 2041 Services <ArrowRight className="w-5 h-5" /> </a> </motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > Leading the Future </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > See how industry leaders are transforming their businesses with our revolutionary 2041 services. </p> </motion.div> <motion.div > {
  testimonials.map ( (testimonial, index) => (<motion.div key= {

  testimonial.name 
}</motion.div>) ) 
}</motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" > Ready to Shape the Future? </h2> <p className="text-xl text-gray-300 mb-12 leading-relaxed" > Join the technological revolution with our cutting-edge 2041 services. Transform your business, accelerate innovation, and lead the future of technology. </p> <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3" > <Sparkles className="w-6 h-6" /> Start Your Journey </a> <Link href="/2041-futuristic-services-showcase" className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3" > <Target className="w-6 h-6" /> Explore Services </a> </div> </motion.div> </div> </section> </main> </Layout>) 
};

