import { motion } from 'framer-motion';
import {


import {
  CheckCircle
  ArrowRight
  Star
  TrendingUp
  Zap
  Shield
  Globe
  Brain
  Database
  Cloud
  Lock
  Rocket
  Users
  DollarSign
  Target
  Award
  Phone;
=======
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

import { motion } from 'framer-motion';


=======

  Award,;
  Phone,;
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
=======
=======  Award,;
  Phone,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';

=======
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';




  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>;
      {/* Animated Background Elements */}

  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },;
  };
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>;
      {/* Animated Background Elements */}
=======
=======
        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },


  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
      }
    }
  };

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>;
      {/* Animated Background Elements */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 overflow-hidden'>;
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>;
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>;
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>;
      </div>;
  };
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* Animated Background Elements */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* Animated Background Elements */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>;
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>;
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>;
      </div>;
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39        {/* Header */}
        <motion&& motion.div

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

=======

        {/* Header */}
        <motion&& motion.div
=======

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

=======
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}

        {/* Header */}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>
            Revolutionary 2025 Services
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge micro SAAS
            services, IT solutions, and AI innovations designed to transform
            your business and drive success in the digital age.          </p>        >

          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>;
            Revolutionary 2025 Services;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
            Discover our comprehensive suite of cutting-edge micro SAAS;
            services, IT solutions, and AI innovations designed to transform;
            your business and drive success in the digital age.          </p>        >;
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">;
            Revolutionary 2025 Services;
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.;
          </p>;
        </motion && motion.div>;


=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======




              {/* Category Header */}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    {/* Service Header */}
                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'

                  >
                    {/* Service Header */}
                    <div className='mb-4'>
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                        {service.name}
                      </h4>
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>;
                </div>;
              </div>;
              {/* Services Grid */}
              <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>                {category.services.map ((service, service_index) => (              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: service_index * 0.1 }}
                    className='group relative bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 30 backdrop - blur - xl rounded - 2xl p - 6 border border - slate - 700 / 50 hover:border - purple - 500 / 50 transition - all duration - 300 hover:transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
                  >;
                    {/* Service Header */}
                    <div className='mb - 4'>;
                      <h4 className='text - xl font - semibold text - white mb - 2 group - hover:text - purple - 300 transition - colors'>;
                        {service.name}
                      </h4>;
                      <p className='text - gray - 400 text - sm leading - relaxed'>                        {service.description}                  >;
                    {/* Service Header */}
                    <div className="mb - 4">;
                      <h4 className="text - xl font - semibold text - white mb - 2 group - hover:text - purple - 300 transition - colors">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        {service.name}
                      </h4>;
                      <p className="text - gray - 400 text - sm leading - relaxed">;
                        {service.description}

                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'




                  >
                    {/* Service Header */}
                    <div className='mb-4'>
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                        {service.name}
                      </h4>
                        {service.description}
=======
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}

                        {service.description}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </p>
                    </div>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* Features */}

=======
=======
                        {service.description}

                      </p>
                    </div>
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />





                    {/* Pricing */}

                    <div className="mb-4">

                            {feature}
                          </li>;
                        ))}
                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className='mb-4'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-gray-400'>
                          Starting from:
                        </span>
                        <span className='text-lg font-bold text-green-400'>
                          {service.price}
                          {service.period}
                        </span>
                      </div>
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service.marketPosition}                    <div className="mb-4">
=======
=======                            {feature}
                          </li>;
                        ))}

                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{service.features.length - 3} more features
                          </li>




                    {/* Pricing */}

                    <div className="mb-4">

                        Market position: {service.marketPosition}

                      </div>
                    </div>
                    {/* ROI */}

                    <div className="mb-4">

                        </div>
                      </div>
                    </div>
</ul>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb-4'>;
                      <div className='flex items-center justify-between'>;
                        <span className='text-sm text-gray-400'>;
                          Starting from:;
                        </span>;
                        <span className='text-lg font-bold text-green-400'>;
                          {service && service.price}
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service && service.marketPosition}                    <div className="mb-4">;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-400">Starting from:</span>;
                        <span className="text-lg font-bold text-green-400">;
                          {service && service.price}{service && service.period}
                        </span>;
                      </div>;
                      <div className="text-xs text-gray-500 mt-1">;
                      </div>;
                    </div>;
                    {/* ROI */}
                    <div className='mb-4'>;
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>;
                        ROI & Benefits:;
                      </h5>;
                      <div className='text-xs text-gray-400'>;
                        <div className='flex items-center mb-1'>;
                          <TrendingUp className='w-3 h-3 text-blue-400 mr-2 flex-shrink-0' />;
                          {service && service.roi}
                        </div>;
                        <div className='text-xs text-gray-500'>                          Setup time: {service && service.setupTime}                    <div className="mb-4">;
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>;
                      <div className="text-xs text-gray-400">;
                        <div className="flex items-center mb-1">;
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />;
                          {service && service.roi}
                        </div>;
                        <div className="text-xs text-gray-500">;
                        </div>;
                      </div>;
                    </div>;
                    {/* Use Cases */}
                            </span>;
                          ))}                      </div>;
                    </div>;



                    {/* CTA Button */}
                    <div className='mt-6'>;
                      <a


=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  </motion.div>                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        </motion && motion.div>;




        {/* Call to Action */}
        <motion&& motion.div
{/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />;
                  </motion && motion.div>;
                ))}
              </div>;
            </motion && motion.div>;
          ))}
        </motion && motion.div>;
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='text-center mt-20'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <div className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our cutting-edge
              solutions to drive innovation, efficiency, and growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
