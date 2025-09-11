
import React from 'react',
import React from 'react';
=======

import React from 'react';

=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';
interface Service {
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
import React from 'react';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {ArrowRight, Star, Zap, Shield, Brain} from 'lucide-react';



  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];

  link: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;

interface UltraFuturisticServiceShowcase2029Props {
  services: Service[],
=======
  services: Service[],>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title?: string;
  subtitle?: string;

export default function UltraFuturisticServiceShowcase2029(): any ({;
  services,;
  title = '2029 Cutting-Edge Services',;
  subtitle = 'Experience the future of technology with our revolutionary solutions',;
}: UltraFuturisticServiceShowcase2029Props) {;

  services: Service[],;


  title?: string;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {title}
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            {subtitle}

=======
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
          {services.slice(0, 6).map((service, index) => (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <motion.div
              key={service.id}
=======
          </p>;
        </motion && motion.div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services && services.slice(0, 6).map((service, index) => (;
            <motion&& motion.div
              key={service && service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

=======
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'
            >


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-400 font-medium">NEW</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">5.0</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              <div className="flex items-center justify-between mb-4">
          {services.slice(0, 6).map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'

            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-cyan-400 rounded-full animate-pulse' />
                  <span className='text-sm text-cyan-400 font-medium'>NEW</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />
                  <span className='text-sm text-gray-300'>5.0</span>
                </div>
              </div>
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                {service.name}
              </h3>
              <p className='text-gray-400 text-sm mb-3'>{service.tagline}</p>
              <p className='text-gray-300 mb-4 line-clamp-3'>
                {service.description}
              </p>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-2xl font-bold text-cyan-400'>
                  {service.price}
                </span>
                <div className='flex items-center space-x-2'>
                  <Zap className='w-4 h-4 text-yellow-400' />
                  <Shield className='w-4 h-4 text-green-400' />
                  <Brain className='w-4 h-4 text-purple-400' />                </div>              <div className="flex items-center justify-between mb-4">
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />
              <div className='flex items-center justify-between mb-4'>;
                <div className='flex items-center space-x-2'>;
                  <div className='w-3 h-3 bg-cyan-400 rounded-full animate-pulse' />;
                  <span className='text-sm text-cyan-400 font-medium'>NEW</span>;
                </div>;
                <div className='flex items-center space-x-1'>;
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                  <span className='text-sm text-gray-300'>5 && 5.0</span>;
                </div>;
              </div>;
                </div>
              </div>
              <Link
                href={service.link}
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>



        <motion.div
=======

        >
=======
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'
=======

        >>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Link
            href='/services'
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'>;
            View All Services;
            <ArrowRight className='w-4 h-4 ml-2' />          </Link>        >;
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">;
            View All Services;
            <ArrowRight className="w-4 h-4 ml-2" />;
          </Link>;
        </motion && motion.div>;
      </div>;
    </section>;

  );
}
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
        >
          <Link
            href='/services'
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'
          >
            View All Services
            <ArrowRight className='w-4 h-4 ml-2' />          </Link>        >
          <Link
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
