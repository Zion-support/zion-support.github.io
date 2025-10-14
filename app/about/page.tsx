import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="About Zion Tech Group - Leading AI and IT Solutions Provider" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
