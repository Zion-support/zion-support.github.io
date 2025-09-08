<<<<<<< HEAD


import Link from 'next/link';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';
interface Service {


=======
import Link from 'next/link';'
import { motion   } from 'framer-motion';'
import { ArrowRight, Star, Zap, Shield, Brain  } from 'lucide-react';'

interface Service  {"id": string;

  }
}
import React from 'react';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {ArrowRight, Star, Zap, Shield, Brain} from 'lucide-react';



>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
import Link from 'next/link';'
import { motion  } from 'framer-motion';'
import { ArrowRight, Star, Zap, Shield, Brain } from 'lucide-react';
interface Service {
id: string;

  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string
}
  link: string
}


<<<<<<< HEAD
  link: string;

interface UltraFuturisticServiceShowcase2029Props {
interface UltraFuturisticServiceShowcase2029Props {}
  services: Service[];
  title?: string;
  subtitle?: string;
  title?: string;
  subtitle?: string;
  price: string,description: string;
  features: string[];link: string;
}interface UltraFuturisticServiceShowcase2029Props  {services: Service[];
  title?: string;
  subtitle?: string;title?: string;
  subtitle?: string;export default function UltraFuturisticServiceShowcase2029(): any ({services,title = '2029 Cutting-Edge Services',subtitle = 'Experience the future of technology with our revolutionary solutions',}: UltraFuturisticServiceShowcase2029Props) {return (subtitle?: string;
}
export default function UltraFuturisticServiceShowcase2029() {return (<section className='py-20 bg-gradient-to-br from-black via-gray-900 to-black'>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
}: UltraFuturisticServiceShowcase2029Props) {return (<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">;

            {title}
          </h2>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>
            {subtitle}


            >
origin/cursor/automate-test-improve-and-merge-code-2533
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' />
          {services.slice(0, 6).map((service, index) => (}
            <motion.div;}
=======
import Link from 'next/link';
import { motion   } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Brain  } from 'lucide-react';
  link: string
}

interface Service  {id: string;
  name: string;
  tagline: string;

  price: string,
  description: string;
  features: string[];
}
  link: string}
}

interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
  title?: string;
  subtitle?: string;

>>>>>>> origin/cursor/delete-old-data-records-6bba
key={service.id}
          </p>;
        </motion && motion.div>;<div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">;"
          {services && services.slice(0, 6).map((service, index) => (<motion&& motion.div;
              }
              key={service && service.id}
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}

                </div>
              </div>

              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>


=======

              transition={{ duration: 0.6, delay: index * 0.1 }}
className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'
                />
              <div className='flex items-center justify-between mb-4'    />
                <div className='flex items-center space-x-2'    />
                  <div className='w-3 h-3 bg-cyan-400 rounded-full animate-pulse'    />
                  <span className='text-sm text-cyan-400 font-medium'    />NEW</span>
                </div>
                <div className='flex items-center space-x-1'    />
                  <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                  <span className='text-sm text-gray-300'    />5.0</span>
                </div>
              </div>
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'    />

                {service.nam}
}
              </h3>;
              <p className='text - gray - 400 text - sm mb - 3'    />{service.tagline}</p>;
              <p className='text - gray - 300 mb - 4 line - clamp - 3'    />;

                {service.description}

            >
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
              <div className="flex items-center justify-between mb-4">

                {service.description}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-400 font-medium">NEW</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">5.0</span>
                </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  <Brain className="w-4 h-4 text-purple-400" />
              <Link;
                href={service && service.link}'
                className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'>;
                Get Started;'"

                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />              </Link>                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25";
              >;
                Get Started;"
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
            </motion && motion.div>;
              </p>
              <div className='flex items-center justify-between mb-4'>'
                <span className='text-2xl font-bold text-cyan-400'>'

              <div className="flex items-center justify-between mb-4">
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <Shield className="w-4 h-4 text-green-400" />
                  <Brain className="w-4 h-4 text-purple-400" />

<<<<<<< HEAD

              >;
                Get Started;
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
            </motion && motion.div>;

          ))}

=======
                href={service && service.link}
                className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'>;
                Get Started;
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />              </Link>                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25";
              >;
                Get Started;
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
            </motion && motion.div>;</p>;
              <div className='flex items-center justify-between mb-4'>;
                <span className='text-2xl font-bold text-cyan-400'>;
                  {service.price}
                </span>;
                <div className='flex items-center space-x-2'>;'
                  <Zap className='w-4 h-4 text-yellow-400' />;'
                  <Shield className='w-4 h-4 text-green-400' />;'
                  <Brain className='w-4 h-4 text-purple-400' />;'
                </div>;
              <Link;
                href={service.link}
className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25';
              >;
                Get Started;
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />;
              </Link>;
            </motion.div>;
          ))}
        <motion.div;
        </div>;<motion&& motion.div;
        </div>;
        <motion&& motion.div
>>>>>>> origin/cursor/delete-old-data-records-6bba
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            </motion && motion.div>;
          ))}
        <motion.div
        </div>;

<<<<<<< HEAD

className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'
                  />
                Get Started;
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'    />
=======
className='inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 "hover": from-cyan-400 "hover":to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform "hover":scale-105 "hover":shadow-lg "hover":shadow-cyan-500/25''
              >
                Get Started
                <ArrowRight className='w-4 h-4 ml-2 group-"hover":translate-x-1 transition-transform' />'
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </Link>
            </motion.div>


          )
}
        <motion.div;
        </div    />;<motion&& motion.div;
          initial={{ opacity: 0, y: 20 }
}
          whileInView={{ opacity: 1, y: 0 }
}

          transition={{ duration: 0.6, delay: 0.6 }
}


className='text-center mt-12'
<<<<<<< HEAD

            />
          <Link;
href='/services'
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'
              />
            View All Services;
            <ArrowRight className='w-4 h-4 ml-2'    />

=======
         />
          <Link;
href='/services'
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'
           />
            View All Services;
            <ArrowRight className='w-4 h-4 ml-2' />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Link>
        </motion.div>
      </div>

  );
<<<<<<< HEAD


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
=======
          transition={{ duration: 0.6, delay: 0.6 }}className='text-center mt-12';
        >;
          <Link;
            href='/services';
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105'>;
            View All Services;
            <ArrowRight className='w-4 h-4 ml-2' />          </Link>        >;
          <Link;
            href="/services";
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">;
            View All Services;
            <ArrowRight className="w-4 h-4 ml-2" />;
          </Link>;
        </motion && motion.div>;
      </div>;
    </section>;
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >;
          <Link;
            href="/services";
            className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105";
          >;
            View All Services;
            <ArrowRight className="w-4 h-4 ml-2" />;
className='text-center mt-12';
        >;
          <Link;
            href='/services';
            className='inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105';
          >;
            View All Services;
            <ArrowRight className='w-4 h-4 ml-2' />;
          </Link>;
        </motion.div>;
      </div>;
  )</p>;


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

              </p>;'
              <div className='flex items - center justify - between mb - 4'>;'
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
                href={service.link}'
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
          transition={{ duration: 0.6, delay: 0.6 }}'
          className='text - center mt - 12';
        >;
          <Link;'
            href='/services';'
            className='inline - flex items - center justify - center bg - transparent border - 2 border - cyan - 500 text - cyan - 400 hover:bg - cyan - 500 hover:text - white font - semibold py - 4 px - 8 rounded - xl transition - all duration - 300 transform hover:scale - 105';
          >;
            View All Services;'
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
origin/cursor/automate-test-improve-and-merge-code-2533
}

    </section>)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>
              </div>

              <Link
                href={service.link}
<<<<<<< HEAD
                className=&quot;inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25&quot;
              >
                Get Started
                <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform&quot; />
              </a>
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
          transition={{ duration: 0.6, delay: 0.6 }}


          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'

'"



=======
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

