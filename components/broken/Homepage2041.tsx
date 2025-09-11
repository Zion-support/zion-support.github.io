
import React, { useState } from 'react',
import React, { useState } from 'react';
=======

import React, { useState } from 'react';

=======
import React, { useState } from 'react',
import React, { useState } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Layout from './layout/Layout';
import { motion } from 'framer-motion';

import {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Layout from './layout / Layout';
import { motion } from 'framer-motion';

  ArrowRight;
  Star, ;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  ArrowRight,
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
  Star,
=======
  Award,;
  Clock,;} from 'lucide-react';import { ;
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

import Link from 'next/link';              {/* Search Bar */}
              <motion&& motion.div
                className='max-w-3xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
==============

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />
              ))}
            </div>
          </div>
{/* Hero Content */}
          <div className="text-center max-w-7xl mx-auto relative z-10">
  const testimonials = [
    {
=======
=======
                />

              ))}
            </div>
          </div>

          {/* Hero Content */}
=======
=======
          <div className="text-center max-w-7xl mx-auto relative z-10">            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                id="hero-heading"
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
                <form onSubmit={handleSearch} className='relative'>              >;
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                  2041;
                </span>;
                <br />;
                <span className="text-white">;
                  Future is Now;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">;
                Experience the revolution of technology with our cutting-edge 2041 services. ;
                From AI consciousness evolution to quantum space mining, we're redefining what's possible.;
              </p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {/* Search Bar */}
              <motion&& motion.div 
                className="max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    type="text"
                    placeholder="Search revolutionary 2041 services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e && e.target.value)}
                    className="w-full px-8 py-6 bg-black/50 border border-cyan-500/50 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-transparent backdrop-blur-sm text-lg";
                  />;
                  <button
                    type="submit"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
                <Link

        {/* Stats Section */}
        <section className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='grid grid-cols-2 md:grid-cols-4 gap-8'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">


                  className='text-center'                  initial={{ opacity: 0, y: 20 }}



            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"

              initial={{ opacity: 0, y: 30 }}


              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='text-center'                  initial={{ opacity: 0, y: 20 }}                  className="text-center"
                  className='text-center'                  initial={{ opacity: 0, y: 20 }}

=======
=======

              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              {stats.map ((stat, index) => (
                <motion.div;
                  key={stat.label}
=======
                  className='text-center'                  initial={{ opacity: 0, y: 20 }}                  className="text-center"                  className='text-center'                  initial={{ opacity: 0, y: 20 }}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <stat.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                    {stat.number}
                  </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className='text-gray-400'>{stat.label}</div>                </motion.div>

                </motion.div>

=======                  <div className='text-gray-400'>{stat.label}</div>                </motion.div>

                </motion.div>


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}





        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">

          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"

        {/* Featured Services Section */}
        <section className='py-20 px-4 bg-gradient-to-b from-black to-gray-900/50'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"

              initial={{ opacity: 0, y: 30 }}

=======
              initial={{ opacity: 0, y: 30 }}

==============
              initial={{ opacity: 0, y: 30 }}

=======

              initial={{ opacity: 0, y: 30 }}


              initial={{ opacity: 0, y: 30 }}

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">                Revolutionary 2041 Services
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Experience the future of technology with our cutting-edge
                services that are redefining industries and pushing the
                boundaries of what's possible.
              </p>
            </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary 2041 Services
=======
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'              initial={{ opacity: 0, y: 30 }}                Revolutionary 2041 Services
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge services that are redefining industries and pushing the boundaries of what's possible.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'              initial={{ opacity: 0, y: 30 }}



=======

              className="text-center mt-12"

            <motion.div
              className='text-center mt-12'              initial={{ opacity: 0, y: 20 }}


            <motion.div
              className='text-center mt-12'              initial={{ opacity: 0, y: 20 }}

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
            <motion.div 
              className="text-center mb-16"

              initial={{ opacity: 0, y: 30 }}


              initial={{ opacity: 0, y: 30 }}

=======

=======

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">                Leading the Future
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                See how industry leaders are transforming their businesses with
                our revolutionary 2041 services.
              </p>
            </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Leading the Future
=======
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-8'              initial={{ opacity: 0, y: 30 }}                Leading the Future
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how industry leaders are transforming their businesses with our revolutionary 2041 services.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

  {
  opacity: 0, y: 50
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {

  duration: 0 && 0.8 

}> <h1 id="hero-heading" className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight" > <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" > 2041 </span> <br /> <span className="text-white" > Future is Now </span> </h1> <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed" > Experience the revolution of technology with our cutting-edge 2041 services. From AI consciousness evolution to quantum space mining, we're redefining what's possible. </p> {;
  /* Search Bar */ ;
}<motion && motion.div /> <button type="submit" className="absolute right-3 top-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold" > Explore Future </button> </form> </motion && motion.div> {;
  /* CTA Buttons */ ;
}<motion && motion.div > <Link href="/2041-futuristic-services-showcase" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3" > <Rocket className="w-6 h-6" /> Explore 2041 Services <ArrowRight className="w-5 h-5" /> </a> <Link href="/contact" className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3" > <Users className="w-6 h-6" /> Start Your Journey </a> </motion && motion.div> </motion && motion.div> </div> </section> > {;
  stats && stats.map ( (stat, index) => (<motion&& motion.div key= {
  stat && stat.label 
}> <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4" > <stat && stat.icon className="w-8 h-8 text-white" /> </div> </motion && motion.div>) ) ;
}</motion && motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > Revolutionary 2041 Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Experience the future of technology with our cutting-edge services that are redefining industries and pushing the boundaries of what's possible. </p> </motion && motion.div> <motion && motion.div > {;
  featuredServices && featuredServices.map ( (service, index) => (<motion&& motion.div key= {
  service && service.id 

}initial= {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {

  duration: 0 && 0.5, delay: 0 && 0.4 + index * 0 && 0.1 

}viewport= {
  {
  once: true 

}> <UltraFuturisticServiceCard2026service= {
  service 
}/> </motion && motion.div>) ) ;
}</motion && motion.div> <motion && motion.div > <Link href="/2041-futuristic-services-showcase" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105" > <Eye className="w-5 h-5" /> View All 2041 Services <ArrowRight className="w-5 h-5" /> </a> </motion && motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > Leading the Future </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > See how industry leaders are transforming their businesses with our revolutionary 2041 services. </p> </motion && motion.div> <motion && motion.div > {;
  testimonials && testimonials.map ( (testimonial, index) => (<motion&& motion.div key= {
  testimonial && testimonial.name 
}</motion && motion.div>) ) ;
}</motion && motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" > Ready to Shape the Future? </h2> <p className="text-xl text-gray-300 mb-12 leading-relaxed" > Join the technological revolution with our cutting-edge 2041 services. Transform your business, accelerate innovation, and lead the future of technology. </p> <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3" > <Sparkles className="w-6 h-6" /> Start Your Journey </a> <Link href="/2041-futuristic-services-showcase" className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3" > <Target className="w-6 h-6" /> Explore Services </a> </div> </motion && motion.div> </div> </section> </main> </Layout>) ;
};
export default Homepage2041;  );

};

export default Homepage2041;



  testimonial.name 
}</motion.div>) ) 
}</motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" > Ready to Shape the Future? </h2> <p className="text-xl text-gray-300 mb-12 leading-relaxed" > Join the technological revolution with our cutting-edge 2041 services. Transform your business, accelerate innovation, and lead the future of technology. </p> <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3" > <Sparkles className="w-6 h-6" /> Start Your Journey </a> <Link href="/2041-futuristic-services-showcase" className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3" > <Target className="w-6 h-6" /> Explore Services </a> </div> </motion.div> </div> </section> </main> </Layout>) 
};
export default Homepage2041;
export default Homepage2041;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  service
}/> </motion.div>) )
}</motion.div> <motion.div > <Link href="/2041-futuristic-services-showcase" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105" > <Eye className="w-5 h-5" /> View All 2041 Services <ArrowRight className="w-5 h-5" /> </a> </motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > Leading the Future </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > See how industry leaders are transforming their businesses with our revolutionary 2041 services. </p> </motion.div> <motion.div > {
  testimonials.map ( (testimonial, index) => (<motion.div key= {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
