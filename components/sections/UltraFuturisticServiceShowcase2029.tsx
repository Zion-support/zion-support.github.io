import React from 'react',
import React from 'react';
import Link from 'next/link';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';
interface Service {

<<<<<<< HEAD
=======
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
;

interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;


interface UltraFuturisticServiceShowcase2029Props {
  services: Service[],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  title?: string;
  subtitle?: string;

export default function UltraFuturisticServiceShowcase2029(): any ({;
  services,;
  title = '2029 Cutting-Edge Services',;
  subtitle = 'Experience the future of technology with our revolutionary solutions',;
}: UltraFuturisticServiceShowcase2029Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (


  services: Service[],;


  title?: string;
<<<<<<< HEAD

=======
=======
  services: Service[],;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  title?: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  subtitle?: string
}
export default function UltraFuturisticServiceShowcase2029({
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions"


export default function UltraFuturisticServiceShowcase2029(): any ({ 
  services, title = "2029 Cutting-Edge Services", subtitle = "Experience the future of technology with our revolutionary solutions" 

}: UltraFuturisticServiceShowcase2029Props) {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <motion&& motion.div
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            {title}
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            {subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (

          {services.slice(0, 6).map((service, index) => (



<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            <motion.div
              key={service.id}



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
            >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

        <motion.div

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

        >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

=======
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

=======
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}

          className=&quot;text-center mt-12&quot;

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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

<<<<<<< HEAD

}
}
}
    </section>
  );


}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
