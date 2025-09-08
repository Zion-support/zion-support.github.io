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
  title?: string;
  subtitle?: string;

const UltraFuturisticServiceShowcase2029: React.FC = () => {
  // Temporarily simplified to avoid build issues
  return <div className="sr-only">UltraFuturisticServiceShowcase2029 temporarily disabled</div>;
};

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          {services && services.slice(0, 6).map((service, index) => (        >;
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">;
            {title}
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            {subtitle}
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
              </h3>;
              <p className='text - gray - 400 text - sm mb - 3'>{service.tagline}</p>;
              <p className='text - gray - 300 mb - 4 line - clamp - 3'>;
                {service.description}
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />
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
        </div>;

        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
