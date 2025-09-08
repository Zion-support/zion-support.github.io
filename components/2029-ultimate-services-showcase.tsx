
import React, { useState } from 'react';
import Head from 'next/head';


import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
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
import Head from 'next / head';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

  Rocket
  Brain
  Atom
  Globe
  Zap
  Sparkles
  Shield
  Target
  Crown
  Star
  TrendingUp
  ArrowRight
  CheckCircle
  DollarSign
  Users
  Clock
  Award
  Zap as ZapIcon
  Search
  Phone
  Mail
  MapPin
  Heart
  Leaf
  Car
  GraduationCap
  Scale
  Building
  Factory
  Camera
  Video
  Music
  Gamepad2
  Eye
  Globe2
  Satellite
  Dna
  Battery
  Gamepad
  Cpu as CpuIcon;} from 'lucide-react';import {
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield

import {

import {


                  }`}
                >;
                  {range && range.name}
                </button>;
              ))}

                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'                  }`}                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50';
                  }`}
                >;
                  {range.name}
                </button>))}

            </div>;
          </div>;
        </div>;
      </section>;

      {/* Services Grid */}


      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'          >      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div


            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"

                    <div className="flex flex-wrap gap-2">
                      {service.category.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-lg border border-cyan-500/20"

                          className='px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-lg border border-cyan-500/20'                        >


                        >
                          {cat}
                        </span>;
                      ))}

                      {service.category.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg">
                          +{service.category.length - 3}
                        </span>

                      )}

                    </div>;
                  </div>;
                  {/* Features Preview */}


                      )}





                  {/* Market Info */}

                  <div className="mb-6 space-y-2">

                      {service.category.length > 3 && (
                        <span className='px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg'>                          +{service.category.length - 3}                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg">
                          +{service.category.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                          className='px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-lg border border-cyan-500/20'                        >

                        >
{cat}
                        </span>;
                      ))}

                      {service.category.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg">
                          +{service.category.length - 3}
                        </span>
                      ))}
                      {service.category.length > 3 && (
                        <span className='px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg'>                          +{service.category.length - 3}

                          +{service.category.length - 3}

                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-white mb-2'>
                      Key Features:
                    </h4>
                    <ul className='space-y-1'>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className='flex items-center space-x-2 text-sm text-gray-300'
                        >
                          <CheckCircle className='h-3 w-3 text-cyan-400 flex-shrink-0' />                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className='text-xs text-gray-500'>                          +{service.features.length - 3} more features                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className='text-xs text-gray-500'>                        <li className="text-xs text-gray-500">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                    </div>;
                  </div>;

                          {cat}
                        </span>;
                      ))}
                      {service && service.category.length > 3 && (;
                        <span className='px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg'>                          +{service && service.category.length - 3}                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg">;
                          +{service && service.category.length - 3}
                        </span>;
                      )}
                  {/* Features Preview */}
                  <div className='mb-6'>;
                    <h4 className='text-sm font-semibold text-white mb-2'>;
                      Key Features:;
                    </h4>;
                    <ul className='space-y-1'>;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <li
                          key={idx}
                          className='flex items-center space-x-2 text-sm text-gray-300'>;
                          <CheckCircle className='h-3 w-3 text-cyan-400 flex-shrink-0' />                          <span>{feature}</span>;
                        </li>;
                      ))}
                      {service && service.features.length > 3 && (;
                        <li className='text-xs text-gray-500'>                          +{service && service.features.length - 3} more features                  <div className="mb-6">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>;
                    <ul className="space-y-1">;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">;
                          <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />;
                        </li>;
                      ))}
                      {service && service.features.length > 3 && (;
                        <li className='text-xs text-gray-500'>                        <li className="text-xs text-gray-500">;
                          +{service && service.features.length - 3} more features;
                        </li>;
                      )}
                  {/* Market Info */}
                  <div className='mb-6 space-y-2'>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-400'>Market Size:</span>
                      <span className='text-emerald-400 font-medium'>
                        {service.marketSize}
                      </span>
                    </div>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-400'>ROI:</span>
                      <span className='text-cyan-400 font-medium'>
                        {service.roi}
                      </span>                    </div>
                  </div>
                  {/* Action Button */}
                  <div className='mt-auto'>                  <div className="mb-6 space-y-2">

                  <div className="mb-6 space-y-2">

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Size: </span>
                      <span className="text-emerald-400 font-medium">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-cyan-400 font-medium">{service.roi}</span>

                    </div>

                  </div>
                    </ul>;
                  </div>;

                  {/* Market Info */}
                  <div className='mb-6 space-y-2'>;
                    <div className='flex items-center justify-between text-sm'>;
                      <span className='text-gray-400'>Market Size:</span>;
                      <span className='text-emerald-400 font-medium'>;
                        {service && service.marketSize}
                      </span>;
                    </div>;
                    <div className='flex items-center justify-between text-sm'>;
                      <span className='text-gray-400'>ROI:</span>;
                      <span className='text-cyan-400 font-medium'>;
                        {service && service.roi}
                      </span>                    </div>;
                  </div>;

                  {/* Action Button */}
                      href={`/services/${service.id}`}
                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center block group-hover:scale-105 transform transition-transform duration-200"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                      href={`/services/${service && service.id}`}
                      className='w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center block group-hover:scale-105 transform transition-transform duration-200'>;
                      Learn More;
                      <ArrowRight className='inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200' />                    </Link>;
                  </div>;

                  {/* Hover Effect */}




                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />




                  {/* Action Button */}

                    </Link>
                  </div>

                  {/* Hover Effect */}

                </div>
              </motion.div>
            ))}

          </motion && motion.div>;
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />




          {/* No Results */}
          {filteredServices && filteredServices.length === 0 && (;
            <div className='text-center py-20'>;
              <div className='w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6'>;
                <Search className='w-12 h-12 text-gray-400' />;
              </div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                No services found;
              </h3>;
              <p className='text-gray-400 mb-8'>;
                Try adjusting your search criteria or browse all services;
              </p>              <button
                onClick={() => {;
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedPriceRange('all');
                }}
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'              >            <div className="text-center py-20">;
              <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">;
                <Search className="w-12 h-12 text-gray-400" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>;
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all services</p>;
                onClick={() => {;
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedPriceRange('all');
                }}
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200";
              >;
                Reset Filters;
              </button>;
            </div>;

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all services</p>
              <button

                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'              >

              <button


                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedPriceRange('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}






          )}
        </div>
      </section>
          )}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?

            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services.
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg"
              >
                Get Started Today
              </Link>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UltraFuturisticFooter2029 />
    </>

            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Join the future of technology with our revolutionary services.;
              Contact us today to discuss how we can help you achieve your;
              goals.;
            </p>;

  )
}

            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - 2xl hover:shadow - cyan - 500 / 25 text - lg';
              >;
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl 'hover':from-cyan-600 'hover':to-blue-700 transition-all duration-200 shadow-2xl 'hover':shadow-cyan-500/25 text-lg'>'

                Get Started Today;
              </Link>;
              <div className='flex items-center space-x-4 text-gray-300'>;'
                <div className='flex items-center space-x-2'>;'
                  <Phone className='h-5 w-5 text-cyan-400' />;'
                  <span>{contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-2'>;'
                  <Mail className='h-5 w-5 text-cyan-400' />;'
                  <span>{contactInfo.email}</span>;

            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'    />;
              <Link;
                href='/contact';
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg';
                  />;
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg'>

                Get Started Today;
              </Link>;
              <div className='flex items-center space-x-4 text-gray-300'    />;
                <div className='flex items-center space-x-2'    />;
                  <Phone className='h-5 w-5 text-cyan-400'    />;
                  <span    />{contactInfo.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Mail className='h - 5 w - 5 text - cyan - 400' />                  <span>{contact_info.email}</span>              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8 max-w-2xl mx-auto">;
              Join the future of technology with our revolutionary services.;
              Contact us today to discuss how we can help you achieve your goals.;
            </p>;
            <div className="flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space-y-0 sm:space-x-6">;
              <Link;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - 2xl hover:shadow - cyan-500 / 25 text-lg";
              >;
                Get Started Today;
              </Link>;
              <div className="flex items - center space - x-4 text-gray-300">;
                <div className="flex items-center space-x-2">;
                  <Phone className="h - 5 w - 5 text-cyan-400" />;
                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Mail className="h - 5 w - 5 text-cyan-400" />;
                  <span>{contact_info.email}</span>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
                Get Started Today;
              </Link>;
              <div className=\"flex items - center space - x-4 text - gray - 300\"    />;
                <div className=\"flex items - center space - x-2\"    />;
                  <Phone className=\"h - 5 w - 5 text - cyan - 400\"    />;
                  <span    />{contact_info.mobile}</span>;
                </div>;
                <div className=\"flex items - center space - x-2\"    />;
                  <Mail className=\"h - 5 w - 5 text - cyan - 400\"    />;
                  <span    />{contact_info.email}</span>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <UltraFuturisticFooter2029    />;
    <   />))}<UltraFuturisticFooter2029    />;
    <   />;
)
)

      <UltraFuturisticFooter2029 />
    </>
  )
}
  );
