<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';


import React from 'react',
import React from 'react';
=======

import React from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';
interface Service {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function UltraFuturisticServiceShowcase2029({
  services
  title = '2029 Cutting-Edge Services'
  subtitle = 'Experience the future of technology with our revolutionary solutions'
}: UltraFuturisticServiceShowcase2029Props) {
  return (
    <section className='py-20 bg-gradient-to-br from-black via-gray-900 to-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
interface UltraFuturisticServiceShowcase2029Props {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface UltraFuturisticServiceShowcase2029Props {
  services: Service[],
=======
  services: Service[],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title?: string;
  subtitle?: string;

export default function UltraFuturisticServiceShowcase2029(): any ({;
  services,;
  title = '2029 Cutting-Edge Services',;
  subtitle = 'Experience the future of technology with our revolutionary solutions',;
}: UltraFuturisticServiceShowcase2029Props) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (


  services: Service[],;


  title?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  services: Service[]
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  services: Service[],;
  title?: string;
  subtitle?: string
}
export default function UltraFuturisticServiceShowcase2029({
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions"
<<<<<<< HEAD
<<<<<<< HEAD
export default function UltraFuturisticServiceShowcase2029(): any ({ 
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions" 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default function UltraFuturisticServiceShowcase2029(): any ({ 
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions" 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: UltraFuturisticServiceShowcase2029Props) {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0 && 0.6 }}
          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'>;
            {title}
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'>
            {title}
<<<<<<< HEAD
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>{subtitle}</p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          {services.slice(0, 6).map((service, index) => (        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>{subtitle}</p>;
        </motion && motion.div>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          {services && services.slice(0, 6).map((service, index) => (        >;
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {title}
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            {subtitle}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            >


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />
<<<<<<< HEAD
<<<<<<< HEAD
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                {service && service.name}
              </h3>;
              <p className='text-gray-400 text-sm mb-3'>{service && service.tagline}</p>;
              <p className='text-gray-300 mb-4 line-clamp-3'>;
                {service && service.description}
              </p>;
              <div className='flex items-center justify-between mb-4'>;
                <span className='text-2xl font-bold text-cyan-400'>;
                  {service && service.price}
                </span>;
                <div className='flex items-center space-x-2'>;
                  <Zap className='w-4 h-4 text-yellow-400' />;
                  <Shield className='w-4 h-4 text-green-400' />;
                  <Brain className='w-4 h-4 text-purple-400' />                </div>              <div className="flex items-center justify-between mb-4">;
                <span className="text-2xl font-bold text-cyan-400">{service && service.price}</span>;
                <div className="flex items-center space-x-2">;
                  <Zap className="w-4 h-4 text-yellow-400" />;
                  <Shield className="w-4 h-4 text-green-400" />;
                  <Brain className="w-4 h-4 text-purple-400" />;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <motion.div
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


        >
=======
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
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

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mt-12'

        >
          <Link
            href='/services'
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'
          >
            View All Services
            <ArrowRight className='w-4 h-4 ml-2' />          </Link>        >
          <Link
=======
<<<<<<< HEAD
          className=&quot;text-center mt-12&quot;

        >
          <Link
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            href="/services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>

  );

<<<<<<< HEAD
    </section>;
  );
}

}
}
}
    </section>
  );

}
}
}
=======
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
