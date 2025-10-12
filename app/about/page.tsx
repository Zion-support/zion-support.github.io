import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-autopx-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300mb-8 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;