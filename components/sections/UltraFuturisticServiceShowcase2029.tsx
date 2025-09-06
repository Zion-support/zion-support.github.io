<<<<<<< HEAD

=======
import React from 'react',
import React from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Link from 'next/link';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';
interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string,
  description: string;
  features: string[];
interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;
<<<<<<< HEAD

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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title?: string;
  subtitle?: string;

export default function UltraFuturisticServiceShowcase2029(): any ({;
  services,;
  title = '2029 Cutting-Edge Services',;
  subtitle = 'Experience the future of technology with our revolutionary solutions',;
}: UltraFuturisticServiceShowcase2029Props) {;
  return (
<<<<<<< HEAD


  services: Service[],;


  title?: string;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  title?: string;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  subtitle?: string
}
export default function UltraFuturisticServiceShowcase2029({
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions"
<<<<<<< HEAD
export default function UltraFuturisticServiceShowcase2029(): any ({
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}: UltraFuturisticServiceShowcase2029Props) {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            {title}
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>{subtitle}</p>;
        </motion && motion.div>;

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          {services && services.slice(0, 6).map((service, index) => (        >;
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">;
            {title}
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            {subtitle}
<<<<<<< HEAD

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'

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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <motion.div
              key={service.id}
          </p>;
        </motion && motion.div>;

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {services && services.slice(0, 6).map((service, index) => (;
            <motion&& motion.div
              key={service && service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'

            >
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
                {service.name}
              </h3>;
              <p className='text - gray - 400 text - sm mb - 3'>{service.tagline}</p>;
              <p className='text - gray - 300 mb - 4 line - clamp - 3'>;
                {service.description}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />
<<<<<<< HEAD
=======

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

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        </div>;

        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'

        >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

  );
}
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        >
          <Link
            href='/services'
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'
          >
            View All Services
<<<<<<< HEAD
            <ArrowRight className='w-4 h-4 ml-2' />          </Link>        >
          <Link

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </Link>
        </motion.div>
      </div>

<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  );

              </p>;
              <div className='flex items - center justify - between mb - 4'>;
                <span className='text - 2xl font - bold text - cyan - 400'>;
                  {service.price}
                </span>;
                <div className='flex items - center space - x-2'>;
                  <Zap className='w - 4 h - 4 text - yellow - 400' />;
                  <Shield className='w - 4 h - 4 text - green - 400' />;
                  <Brain className='w - 4 h - 4 text - purple - 400' />                </div>              <div className="flex items - center justify-between mb-4">;
                <span className="text - 2xl font - bold text-cyan-400">{service.price}</span>;
                <div className="flex items-center space-x-2">;
                  <Zap className="w - 4 h - 4 text-yellow-400" />;
                  <Shield className="w - 4 h - 4 text-green-400" />;
                  <Brain className="w - 4 h - 4 text-purple-400" />;
              </div>;
              <Link;
                href={service.link}
                className='inline - flex items - center justify - center w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25';
              >;
                Get Started;
                <ArrowRight className='w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform' />              </Link>                className="inline - flex items - center justify - center w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow-cyan-500 / 25";
              >;
                Get Started;
                <ArrowRight className="w - 4 h - 4 ml - 2 group - hover:translate-x-1 transition-transform" />;
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
            className="inline - flex items - center justify - center bg - transparent border - 2 border - cyan - 500 text - cyan - 400 hover: bg - cyan - 500 hover:text - white font - semibold py - 4 px - 8 rounded - xl transition - all duration-300 transform hover:scale-105";
          >;
            View All Services;
            <ArrowRight className="w - 4 h-4 ml-2" />;
          </Link>;
        </motion.div>;
      </div>;
    </section>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
