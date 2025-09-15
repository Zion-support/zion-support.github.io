
import React from 'react',
import React from 'react';

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
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;


export default function UltraFuturisticServiceShowcase2029({
  services
  title = '2029 Cutting-Edge Services'
  subtitle = 'Experience the future of technology with our revolutionary solutions'
}: UltraFuturisticServiceShowcase2029Props) {
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[],
  title?: string;
  subtitle?: string;

export default function UltraFuturisticServiceShowcase2029(): any ({;
  services,;
  title = '2029 Cutting-Edge Services',;
  subtitle = 'Experience the future of technology with our revolutionary solutions',;
}: UltraFuturisticServiceShowcase2029Props) {;
  return (
    <section className='py-20 bg-gradient-to-br from-black via-gray-900 to-black'>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          className='text-center mb-16'
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[]
  services: Service[],;

  title?: string;
  subtitle?: string;

export default function UltraFuturisticServiceShowcase2029(): any ({;
  services,;
  title = '2029 Cutting-Edge Services',;
  subtitle = 'Experience the future of technology with our revolutionary solutions',;
}: UltraFuturisticServiceShowcase2029Props) {;
  return (


  services: Service[],;


  title?: string;





  title?: string;
  subtitle?: string
}
export default function UltraFuturisticServiceShowcase2029({
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions"


export default function UltraFuturisticServiceShowcase2029(): any ({ 
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions" 

}: UltraFuturisticServiceShowcase2029Props) {
  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
=======
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <motion&& motion.div
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'>
            {title}


          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>{subtitle}</p>;
        </motion && motion.div>;

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          {services && services.slice(0, 6).map((service, index) => (        >;
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">;


            {title}
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            {subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (

          {services.slice(0, 6).map((service, index) => (









            <motion.div
              key={service.id}
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
=======






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

;
export default /**
 * UltraFuturisticServiceShowcase2029 - Function description
 */
function UltraFuturisticServiceShowcase2029() {
  return (
    <section className='py - 20 bg - gradient - to - br from - black via - gray - 900 to - black'>;
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          className='text - center mb - 16';
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[],
  title?: string;
  subtitle?: string;
}
export default /**
 * UltraFuturisticServiceShowcase2029 - Function description
 */
function UltraFuturisticServiceShowcase2029() {
  return (
    <section className="py - 20 bg - gradient - to - br from - black via - gray - 900 to - black">;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          className='text - center mb - 16';
        >;
          <h2 className='text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6'>;
            {title}
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>{subtitle}</p>;
        </motion.div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>          {services.slice (0, 6).map ((service, index) => (        >;
          <h2 className="text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6">;
            {title}
          </h2>;
          <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
            {subtitle}
          </p>;
        </motion.div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {services.slice (0, 6).map ((service, index) => (
            <motion.div;
              key={service.id}
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 400 / 40 transition - all duration - 300 hover:shadow - 2xl hover:shadow - cyan - 500 / 20';
              <div className='flex items - center justify - between mb - 4'>;
                <div className='flex items - center space - x-2'>;
                  <div className='w - 3 h - 3 bg - cyan - 400 rounded - full animate - pulse' />;
                  <span className='text - sm text - cyan - 400 font - medium'>NEW</span>;
                </div>;
                <div className='flex items - center space - x-1'>;
                  <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                  <span className='text - sm text - gray - 300'>5.0</span>;
                </div>;
              </div>;
              <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                {service.name}
              </h3>;
              <p className='text - gray - 400 text - sm mb - 3'>{service.tagline}</p>;
              <p className='text - gray - 300 mb - 4 line - clamp - 3'>;
                {service.description}


              transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
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



              <Link
                href={service && service.link}
                className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'>;
                Get Started;
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />              </Link>                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25";
              >;
                Get Started;
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
            </motion && motion.div>;
          ))}






        <motion.div





        >
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

          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
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


              <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />
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


              </div>
              <Link
                href={service.link}
                className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'
              >
                Get Started
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />              </Link>                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.6delay: 0.6 }}
          className="text-center mt-12"
=======
          transition={{ duration: 0.6, delay: 0.6 }}




          className=&quot;text-center mt-12&quot;




>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>

    </section>;
  );

              </p>;
              <div className='flex items - center justify - between mb - 4'>;
                <span className='text - 2xl font - bold text - cyan - 400'>;
                  {service.price}
                </span>;
                <div className='flex items - center space - x-2'>;
                  <Zap className='w - 4 h - 4 text - yellow - 400' />;
                  <Shield className='w - 4 h - 4 text - green - 400' />;
                  <Brain className='w - 4 h - 4 text - purple - 400' />                </div>              <div className="flex items - center justify - between mb - 4">;
                <span className="text - 2xl font - bold text - cyan - 400">{service.price}</span>;
                <div className="flex items - center space - x-2">;
                  <Zap className="w - 4 h - 4 text - yellow - 400" />;
                  <Shield className="w - 4 h - 4 text - green - 400" />;
                  <Brain className="w - 4 h - 4 text - purple - 400" />;
              </div>;
              <Link;
                href={service.link}
                className='inline - flex items - center justify - center w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25';
              >;
                Get Started;
                <ArrowRight className='w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform' />              </Link>                className="inline - flex items - center justify - center w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25";
              >;
                Get Started;
                <ArrowRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform" />;
            </motion.div>))}
        </div>;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text - center mt - 12';
        >;
          <Link;
            href='/services';
            className='inline - flex items - center justify - center bg - transparent border - 2 border - cyan - 500 text - cyan - 400 hover:bg - cyan - 500 hover:text - white font - semibold py - 4 px - 8 rounded - xl transition - all duration - 300 transform hover:scale - 105';
          >;
            View All Services;
            <ArrowRight className='w - 4 h - 4 ml - 2' />          </Link>        >;
          <Link;
            href="/services";
            className="inline - flex items - center justify - center bg - transparent border - 2 border - cyan - 500 text - cyan - 400 hover: bg - cyan - 500 hover:text - white font - semibold py - 4 px - 8 rounded - xl transition - all duration - 300 transform hover:scale - 105";
          >;
            View All Services;
            <ArrowRight className="w - 4 h - 4 ml - 2" />;
          </Link>;
        </motion.div>;
      </div>;
    </section>);
}




}
}
}
    </section>
  );



}






