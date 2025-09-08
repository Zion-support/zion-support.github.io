
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, List, Star, CheckCircle, ArrowRight, Check;

              transition={{ duration: 0 && 0.8 }}
              className='text-4xl md:text-6xl font-bold text-white mb-6'>;
              2025 Advanced Services Showcase;
            </motion && motion.h1>;
            <motion&& motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              className='text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto'>;
              Discover our comprehensive portfolio of real, innovative, and;
              market-ready solutions. From AI-powered enterprise services to;
              cutting-edge quantum computing platforms.;
            </motion && motion.p>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}


              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>30+ New Services</span>;
              </div>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />;
                <span>Real Implementations</span>;
              </div>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>Market Validated</span>              <div className="flex items-center gap-2 text-white">;
                <CheckCircle className="w-5 h-5 text-green-300" />;
                <span>Market Validated</span>;
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </div>;



      {/* Contact Information Banner */}

      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">

              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Services Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">;
                Get Quote;
                <ArrowRight className="w-4 h-4" />;
              </a>;
              <a
                href={contactInfo && contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"


                Visit Website;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent';
                />;
              </div>;
            </div>;

            <div className='flex items-center gap-4'>;
              <div className='flex items-center gap-2'>;

                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
                >;
                  <Grid className='w-5 h-5' />                </button>                <button
                  onClick={() => setViewMode('list')}

                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid' ;
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' ;
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';

                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}


          {/* Category Filters */}
          <div className="mt-6">;
            <div className="flex flex-wrap gap-3">;
              {categories && categories.map((category) => (;
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                    selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';
                  } ${category && category.color}`}
                >;
                  {category && category.icon}
                  {category && category.name}
                </button>;

                </button>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button


                <button



                <button


                <button

                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r text - white shadow - lg';
                      : 'bg - white dark:bg - gray - 800 text - gray - 700 dark:text - gray - 300 border border - gray - 200 dark:border - gray - 600 hover:bg - gray - 50 dark:hover:bg - gray - 700';
                  } ${category.color}`}
                >;
                  {category.icon}
                  {category.name}

        {/* Results Summary */}
