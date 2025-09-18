import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';







import {real2036InnovativeServices} from '../data/real-2036-innovative-services';
import {real2036ITServices} from '../data/real-2036-it-services';
import {real2036AIServices} from '../data/real-2036-ai-services';
import {motion} from 'framer-motion';

const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices
    ...real2036ITServices
    ...real2036AIServices,  ];
  const categories = [...new Set(allServices.map(service => service.category))]
import React from 'react',
import SEO from '../components/SEO',

import Layout from '../components/layout/Layout',
import { real2036InnovativeServices } from '../data/real-2036-innovative-services',
import { real2036ITServices } from '../data/real-2036-it-services',
import { real2036AIServices } from '../data/real-2036-ai-services',
import { motion } from 'framer-motion',




const ComprehensiveServicesShowcase2036: React.FC = () => {
  const allServices = [
    ...real2036InnovativeServices;
    ...real2036ITServices;
    ...real2036AIServices
  ],
  const categories = [...new Set(allServices.map(service => service.category))],

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const comprehensive-services-showcase-2036: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-services-showcase-2036 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-services-showcase-2036 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-services-showcase-2036</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-services-showcase-2036;
