import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development." />
      </Helmet>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="te xt-center">
            <h1 className="text-4xlmd:text-6xl font-bold text-white  mb-6">
              Transform Your Business with
              <span className="bl ock bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI & IT Solutions
              </span>
            </h1>
            <p className="te xt-xl text-gray-300 mb-8 max-w-3xl  mx-auto">
              We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for businesses worldwide.
            </p>
            <div className="fl ex flex-col sm:flex-row gap-4  justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center  justify-center"
              >
                Get Started
                <ArrowRight className="w-5h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="bo rder border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
        </div>
    </>
  );
};

export default HomePage;