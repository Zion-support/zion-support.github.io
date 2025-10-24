'use client';;
import React from 'react';
<<<<<<< HEAD
=======
<<<<<<<< HEAD:app-disabled-all/error.tsx
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings} from 'lucide-react';
========
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e

const ErrorPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="Professional error services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Error</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
