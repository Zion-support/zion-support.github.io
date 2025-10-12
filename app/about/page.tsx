import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63

const AboutPage: React.FC = () => {
=======
import { ArrowRight } from 'lucide-react';

export default function About() {
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions." />
      </Helmet>
<<<<<<< HEAD

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-autopx-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
=======
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-lg text-gray-300 mb-8">We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.</p>
            
            <div className="flex gap-4 justify-center">
              <Link 
                to="/careers" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/team" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
          </div>
        </div>
      </div>
    </>
  );
}